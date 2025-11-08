import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { ToolCallType } from "../../../../generated/prisma/enums";
import { generateText, stepCountIs, tool } from "ai";
import z from "zod";
import { prisma } from "@server/db/prisma";
import type { Account } from "@server/features/trading/accounts";
import { closePosition } from "@server/features/trading/closePosition";
import { createPosition } from "@server/features/trading/createPosition";
import { getPortfolio, type PortfolioSnapshot } from "@server/features/trading/getPortfolio";
import { getMarketSnapshots, formatMarketSnapshots } from "@server/features/trading/marketData";
import { getOpenPositions, type ExitPlanSummary, type OpenPositionSummary } from "@server/features/trading/openPositions";
import { PROMPT } from "@server/features/trading/prompt";
import { buildDecisionIndex, type TradingDecisionWithContext, type TradingSignal } from "@server/features/trading/tradingDecisions";
import { DATA_CACHE_TAGS, revalidateDataTags } from "@server/cache/dataTags";
import { MARKETS } from "@shared/markets/marketMetadata";
import { safeJsonParse } from "@shared/utils/json";
import { Prisma } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var tradeIntervalHandle: ReturnType<typeof setInterval> | undefined;
  // eslint-disable-next-line no-var
  var tradeIntervalRunning: boolean | undefined;
}

const TRADE_INTERVAL_MS = 5 * 60 * 1000;
const MODEL_TIMEOUT_MS = 2 * 60 * 1000;
const INITIAL_CAPITAL = 10000;
const RISK_FREE_RATE = 0.04;

interface InvocationDecisionSummary {
  symbol: string;
  side: "LONG" | "SHORT" | "HOLD";
  quantity: number;
  leverage: number | null;
  profitTarget: number | null;
  stopLoss: number | null;
  invalidationCondition: string | null;
  confidence: number | null;
}

interface InvocationExecutionResultSummary {
  symbol: string;
  side: "LONG" | "SHORT" | "HOLD";
  quantity: number;
  leverage: number | null;
  success: boolean;
  error: string | null;
}

interface InvocationClosedPositionSummary {
  symbol: string;
  side: "LONG" | "SHORT";
  quantity: number | null;
  entryPrice: number | null;
  exitPrice: number | null;
  netPnl: number | null;
  realizedPnl: number | null;
  unrealizedPnl: number | null;
  closedAt: string | null;
}

interface InvocationResponsePayload {
  prompt: string;
  decisions: InvocationDecisionSummary[];
  executionResults: InvocationExecutionResultSummary[];
  closedPositions: InvocationClosedPositionSummary[];
  finishReason: unknown;
  usage: unknown;
  warnings: unknown;
  providerResponse: {
    id: string | null;
    modelId: string | null;
    timestamp: string | null;
  } | null;
}

interface EnrichedOpenPosition extends OpenPositionSummary {
  exitPlan: ExitPlanSummary | null;
  confidence: number | null;
  signal: TradingSignal | null;
  lastDecisionAt: string | null;
  decisionStatus: string | null;
  notionalUsd: number | null;
  riskUsd: number | null;
  riskPercent: number | null;
  rewardUsd: number | null;
  rewardPercent: number | null;
  riskRewardRatio: number | null;
}

async function fetchLatestDecisionIndex(modelId: string): Promise<Map<string, TradingDecisionWithContext>> {
  try {
    const toolCalls = await prisma.toolCalls.findMany({
      where: {
        toolCallType: ToolCallType.CREATE_POSITION,
        invocation: { modelId },
      },
      orderBy: { createdAt: "desc" },
      take: 100,
    });

    return buildDecisionIndex(
      toolCalls.map((toolCall) => ({
        id: toolCall.id,
        createdAt: toolCall.createdAt,
        toolCallType: toolCall.toolCallType,
        metadata: safeJsonParse(toolCall.metadata, {}),
      })),
    );
  } catch (error) {
    console.error(`Failed to build decision index for model ${modelId}`, error);
    return new Map<string, TradingDecisionWithContext>();
  }
}

const resolveQuantity = (position: OpenPositionSummary): number | null => {
  if (typeof position.quantity === "number" && Number.isFinite(position.quantity)) {
    return Math.abs(position.quantity);
  }

  if (typeof position.position === "string") {
    const parsed = Number.parseFloat(position.position);
    if (Number.isFinite(parsed)) {
      return Math.abs(parsed);
    }
  }

  return null;
};

const resolveNotionalUsd = (position: OpenPositionSummary): number | null => {
  const candidate = (position as { notional?: unknown }).notional;
  if (typeof candidate === "number" || typeof candidate === "string") {
    const notionalValue = toNumeric(candidate);
    if (notionalValue !== null) {
      return Math.abs(notionalValue);
    }
  }

  const quantity = resolveQuantity(position);
  const referencePriceCandidate = position.entryPrice ?? position.markPrice ?? (position.liquidationPrice ?? null);
  const referencePrice = toNumeric(referencePriceCandidate);

  if (quantity !== null && referencePrice !== null) {
    return Math.abs(quantity * referencePrice);
  }

  return null;
};

const mergeExitPlans = (
  decision: TradingDecisionWithContext | undefined,
  fallback: ExitPlanSummary | null | undefined,
): ExitPlanSummary | null => {
  const target = decision?.profitTarget ?? fallback?.target ?? null;
  const stop = decision?.stopLoss ?? fallback?.stop ?? null;
  const invalidation = decision?.invalidationCondition ?? fallback?.invalidation ?? null;

  if (target === null && stop === null && invalidation === null) {
    return null;
  }

  return { target, stop, invalidation };
};

const computeRiskMetrics = (
  position: OpenPositionSummary,
  exitPlan: ExitPlanSummary | null,
  notionalUsd: number | null,
) => {
  const quantity = resolveQuantity(position);
  const entryPrice = position.entryPrice ?? position.markPrice ?? null;
  const stop = exitPlan?.stop ?? null;
  const target = exitPlan?.target ?? null;

  let riskUsd: number | null = null;
  let riskPercent: number | null = null;
  if (quantity !== null && entryPrice !== null && stop !== null) {
    const diff = position.sign === "LONG" ? entryPrice - stop : stop - entryPrice;
    if (diff > 0) {
      riskUsd = diff * quantity;
      if (notionalUsd && notionalUsd > 0) {
        riskPercent = (riskUsd / notionalUsd) * 100;
      }
    }
  }

  let rewardUsd: number | null = null;
  let rewardPercent: number | null = null;
  if (quantity !== null && entryPrice !== null && target !== null) {
    const diff = position.sign === "LONG" ? target - entryPrice : entryPrice - target;
    if (diff > 0) {
      rewardUsd = diff * quantity;
      if (notionalUsd && notionalUsd > 0) {
        rewardPercent = (rewardUsd / notionalUsd) * 100;
      }
    }
  }

  const riskRewardRatio =
    riskUsd !== null && rewardUsd !== null && riskUsd > 0 ? rewardUsd / riskUsd : null;

  return { riskUsd, riskPercent, rewardUsd, rewardPercent, riskRewardRatio };
};

const resolveDecisionStatus = (decision: TradingDecisionWithContext | undefined): string | null => {
  if (!decision) return null;
  if (decision.status) return decision.status;
  if (decision.result?.success === true) return "FILLED";
  if (decision.result?.success === false) return "REJECTED";
  return null;
};

const enrichOpenPositions = (
  positions: OpenPositionSummary[],
  decisionIndex: Map<string, TradingDecisionWithContext>,
): EnrichedOpenPosition[] => {
  return positions.map((position) => {
    const symbolKey = position.symbol?.toUpperCase?.() ?? position.symbol;
    const decision = symbolKey ? decisionIndex.get(symbolKey) : undefined;
    const exitPlan = mergeExitPlans(decision, position.exitPlan ?? null);
    const notionalUsd = resolveNotionalUsd(position);
    const { riskUsd, riskPercent, rewardUsd, rewardPercent, riskRewardRatio } = computeRiskMetrics(
      position,
      exitPlan,
      notionalUsd,
    );

    return {
      ...position,
      exitPlan,
      confidence: decision?.confidence ?? position.confidence ?? null,
      signal: decision?.signal ?? position.signal ?? position.sign,
      lastDecisionAt: decision?.createdAt?.toISOString?.() ?? position.lastDecisionAt ?? null,
      decisionStatus: resolveDecisionStatus(decision) ?? position.decisionStatus ?? null,
      notionalUsd,
      riskUsd,
      riskPercent,
      rewardUsd,
      rewardPercent,
      riskRewardRatio,
    } satisfies EnrichedOpenPosition;
  });
};

async function calculatePerformanceMetrics(account: Account, currentPortfolioValue: number) {
  const portfolioHistory = await prisma.portfolioSize.findMany({
    where: { modelId: account.id },
    orderBy: { createdAt: "asc" },
  });

  if (portfolioHistory.length < 2)
    return { sharpeRatio: "N/A (need more data)", totalReturnPercent: "N/A" };

  const initialValue = parseFloat(portfolioHistory[0].netPortfolio) || INITIAL_CAPITAL;
  const totalReturn = ((currentPortfolioValue - initialValue) / initialValue) * 100;

  const returns: number[] = [];
  for (let i = 1; i < portfolioHistory.length; i++) {
    const prevValue = parseFloat(portfolioHistory[i - 1].netPortfolio);
    const currValue = parseFloat(portfolioHistory[i].netPortfolio);
    if (prevValue > 0) returns.push((currValue - prevValue) / prevValue);
  }

  if (returns.length < 2)
    return { sharpeRatio: "N/A (need more data)", totalReturnPercent: `${totalReturn.toFixed(2)}%` };

  const meanReturn = returns.reduce((s, r) => s + r, 0) / returns.length;
  const variance = returns.reduce((s, r) => s + (r - meanReturn) ** 2, 0) / (returns.length - 1);
  const stdDev = Math.sqrt(variance);

  if (stdDev === 0 || returns.length < 30)
    return { sharpeRatio: "N/A (insufficient data)", totalReturnPercent: `${totalReturn.toFixed(2)}%` };

  const periodsPerYear = (365 * 24 * 60) / 5;

  const annualizedReturn = Math.pow(1 + meanReturn, periodsPerYear) - 1;
  const annualizedStdDev = stdDev * Math.sqrt(periodsPerYear);

  if (annualizedStdDev < 0.0001) {
    return { sharpeRatio: "N/A (low volatility)", totalReturnPercent: `${totalReturn.toFixed(2)}%` };
  }

  const sharpeRatio = (annualizedReturn - RISK_FREE_RATE) / annualizedStdDev;

  return {
    sharpeRatio: sharpeRatio.toFixed(3),
    totalReturnPercent: `${totalReturn.toFixed(2)}%`,
  };
}

export async function runTradeWorkflow(account: Account) {
  const [portfolio, openPositionsRaw, decisionIndex] = await Promise.all([
    getPortfolio(account),
    getOpenPositions(account.apiKey, account.accountIndex, account.id),
    account.id ? fetchLatestDecisionIndex(account.id) : Promise.resolve(new Map<string, TradingDecisionWithContext>()),
  ]);

  const openPositions = enrichOpenPositions(openPositionsRaw, decisionIndex);

  const capturedDecisions: InvocationDecisionSummary[] = [];
  const capturedExecutionResults: InvocationExecutionResultSummary[] = [];
  const capturedClosedPositions: InvocationClosedPositionSummary[] = [];

  const marketUniverse = Object.entries(MARKETS).map(([symbol, meta]) => ({
    symbol,
    marketId: meta.marketId,
  }));

  let marketIntelligence = "Market data unavailable.";
  try {
    const snapshots = await getMarketSnapshots(marketUniverse);
    marketIntelligence = formatMarketSnapshots(snapshots);
  } catch (error) {
    console.error("Failed to assemble market intelligence", error);
  }

  const currentTime = new Date().toLocaleString("en-US", { timeZone: "UTC" });

  const modelInvocation = await prisma.invocations.create({
    data: {
      modelId: account.id,
      response: "",
    },
  });

  await prisma.portfolioSize.create({
    data: {
      modelId: account.id,
      netPortfolio: portfolio.total,
    },
  });
  await revalidateDataTags(DATA_CACHE_TAGS.PORTFOLIO_HISTORY);

  const currentPortfolioValue = parseFloat(portfolio.total);
  const performanceMetrics = await calculatePerformanceMetrics(account, currentPortfolioValue);

  const enrichedPrompt = PROMPT.replace("{{INVOKATION_TIMES}}", account.invocationCount.toString())
    .replace("{{CURRENT_TIME}}", currentTime)
    .replace("{{TOTAL_MINUTES}}", account.totalMinutes.toString())
    .replace("{{MARKET_INTELLIGENCE}}", marketIntelligence)
    .replace("{{ACCOUNT_SNAPSHOT}}", buildAccountSnapshotSection(portfolio))
    .replace("{{OPEN_POSITIONS_TABLE}}", buildOpenPositionsSection(openPositions))
    .replace(
      "{{PERFORMANCE_OVERVIEW}}",
      buildPerformanceOverview({
        account,
        portfolio,
        performanceMetrics,
        openPositions,
      }),
    );

  console.log("Enriched Prompt:", enrichedPrompt);

  const marketSymbols = Object.keys(MARKETS) as [keyof typeof MARKETS, ...(keyof typeof MARKETS)[]];

  const openrouter = createOpenRouter({
    apiKey: process.env.OPENROUTER_API_KEY,
  });

  const decisionSchema = z.object({
    symbol: z.enum(Object.keys(MARKETS) as [string, ...string[]]).describe("The symbol to open the position at"),
    side: z.enum(["LONG", "SHORT", "HOLD"]).describe("Trading signal: LONG, SHORT, or HOLD"),
    quantity: z.number().describe("Signed quantity for the decision."),
    leverage: z.number(),
    profit_target: z.number(),
    stop_loss: z.number(),
    invalidation_condition: z.string().describe("Condition under which the position should be invalidated"),
    confidence: z.number(),
  });

  const result = await generateText({
    model: openrouter(account.modelName),
    prompt: enrichedPrompt,
    stopWhen: stepCountIs(20),
    tools: {
      createPosition: tool({
        description: "Open one or more positions in the given markets",
        inputSchema: z
          .object({
            decisions: z.array(decisionSchema),
          })
          .superRefine((value, ctx) => {
            if (!value.decisions) {
              ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Provide a decisions array with trading instructions.",
              });
            }
          }),
        execute: async ({ decisions }) => {
          const modern =
            decisions?.map((item) => ({
              symbol: item.symbol.toUpperCase(),
              side:
                item.side === "SHORT" || item.side === "LONG"
                  ? item.side
                  : item.side === "HOLD"
                    ? "HOLD"
                    : (item.side as string),
              quantity: item.quantity,
              leverage: item.leverage ?? null,
              profitTarget: item.profit_target ?? null,
              stopLoss: item.stop_loss ?? null,
              invalidationCondition: item.invalidation_condition ?? null,
              confidence: item.confidence ?? null,
            })) ?? [];

          const normalized: {
            symbol: string;
            side: "LONG" | "SHORT" | "HOLD";
            quantity: number;
            leverage: number | null;
            profitTarget: number | null;
            stopLoss: number | null;
            invalidationCondition: string | null;
            confidence: number | null;
          }[] = [];
          const seenSymbols = new Set<string>();

          for (const entry of [...modern]) {
            const sideRaw = typeof entry.side === "string" ? entry.side.toUpperCase() : "HOLD";
            const validSide = sideRaw === "LONG" || sideRaw === "SHORT" ? sideRaw : "HOLD";
            const quantity = Number.isFinite(entry.quantity) ? entry.quantity : 0;
            const symbol = entry.symbol;

            if (!(symbol in MARKETS)) continue;
            if (seenSymbols.has(symbol)) continue;
            seenSymbols.add(symbol);

            normalized.push({
              symbol,
              side: validSide,
              quantity,
              leverage: entry.leverage ?? null,
              profitTarget: entry.profitTarget ?? null,
              stopLoss: entry.stopLoss ?? null,
              invalidationCondition: entry.invalidationCondition ?? null,
              confidence: entry.confidence ?? null,
            });
          }

          const results = await createPosition(account, normalized);

          const successful = results.filter((r) => r.success);
          const failed = results.filter((r) => !r.success);

          for (const decision of normalized) {
            capturedDecisions.push({
              symbol: decision.symbol,
              side: decision.side,
              quantity: decision.quantity,
              leverage: decision.leverage,
              profitTarget: decision.profitTarget,
              stopLoss: decision.stopLoss,
              invalidationCondition: decision.invalidationCondition,
              confidence: decision.confidence,
            });
          }

          for (const outcome of results) {
            capturedExecutionResults.push({
              symbol: outcome.symbol,
              side: outcome.side,
              quantity: outcome.quantity,
              leverage: outcome.leverage ?? null,
              success: outcome.success,
              error: outcome.error ?? null,
            });
          }

          await prisma.toolCalls.create({
            data: {
              invocationId: modelInvocation.id,
              toolCallType: ToolCallType.CREATE_POSITION,
              metadata: JSON.stringify({
                decisions: normalized,
                results,
              }),
            },
          });
          await revalidateDataTags(DATA_CACHE_TAGS.INVOCATIONS, DATA_CACHE_TAGS.POSITIONS);

          if (successful.length > 0) {
            console.log(`✓ Opened positions: ${successful.map((r) => r.symbol).join(", ")}`);
          }
          if (failed.length > 0) {
            console.log(`✗ Failed: ${failed.map((r) => `${r.symbol} (${r.error})`).join(", ")}`);
          }

          const formatDecision = (r: (typeof results)[number]) => {
            const pieces = [r.symbol];
            if (r.side === "HOLD") {
              pieces.push("HOLD");
            } else {
              pieces.push(r.side);
            }
            if (Number.isFinite(r.quantity)) {
              pieces.push(`qty ${Math.abs(r.quantity ?? 0).toPrecision(3)}`);
            }
            if (Number.isFinite(r.leverage ?? undefined)) {
              pieces.push(`${r.leverage}x`);
            }
            return pieces.join(" ");
          };

          let response = "";
          if (successful.length > 0) {
            response += `Successfully processed: ${successful.map(formatDecision).join(", ")}. `;
          }
          if (failed.length > 0) {
            response += `Failed: ${failed
              .map((r) => `${formatDecision(r)} (${r.error ?? "unknown error"})`)
              .join(", ")}`;
          }

          return response || "No positions were created";
        },
      }),
      closePosition: tool({
        description: "Close the currently open positions for the provided market symbols",
        inputSchema: z.object({
          symbols: z
            .array(z.enum(marketSymbols as unknown as [string, ...string[]]))
            .describe("Array of symbols whose open positions should be closed"),
        }),
        execute: async ({ symbols }) => {
          const closedPositions = await closePosition(account, symbols);
          await prisma.toolCalls.create({
            data: {
              invocationId: modelInvocation.id,
              toolCallType: ToolCallType.CLOSE_POSITION,
              metadata: JSON.stringify({ symbols, closedPositions }),
            },
          });
          await revalidateDataTags(
            DATA_CACHE_TAGS.INVOCATIONS,
            DATA_CACHE_TAGS.POSITIONS,
            DATA_CACHE_TAGS.TRADES,
          );

          for (const position of closedPositions) {
            capturedClosedPositions.push({
              symbol: position.symbol,
              side: position.side,
              quantity: position.quantity,
              entryPrice: position.entryPrice,
              exitPrice: position.exitPrice,
              netPnl: position.netPnl,
              realizedPnl: position.realizedPnl,
              unrealizedPnl: position.unrealizedPnl,
              closedAt: position.closedAt ?? null,
            });
          }
          const summaryText = closedPositions
            .map((trade) => {
              const side = trade.side === "LONG" ? "LONG" : "SHORT";
              const qty = trade.quantity != null ? trade.quantity.toFixed(4) : "?";
              return `${trade.symbol} (${side}) x ${qty}`;
            })
            .join(", ");

          console.log(`Position(s) for ${symbols.join(", ")} closed successfully`);
          return summaryText.length > 0
            ? `Closed positions: ${summaryText}`
            : `Position(s) for ${symbols.join(", ")} closed successfully`;
        },
      }),
    },
  });
  await prisma.models.update({
    where: { id: account.id },
    data: {
      invocationCount: { increment: 1 },
      totalMinutes: { increment: 5 },
    },
  });
  await revalidateDataTags(DATA_CACHE_TAGS.MODELS);

  const responseText = result.text.trim();

  const responsePayload = buildInvocationResponsePayload({
    prompt: enrichedPrompt,
    result,
    decisions: capturedDecisions,
    executionResults: capturedExecutionResults,
    closedPositions: capturedClosedPositions,
  });

  await prisma.invocations.update({
    where: { id: modelInvocation.id },
    data: {
      response: responseText,
      responsePayload: responsePayload as unknown as Prisma.JsonValue,
    },
  });
  await revalidateDataTags(DATA_CACHE_TAGS.INVOCATIONS);
  console.log(responseText);
  return responseText;
}

export async function executeScheduledTrades() {
  if (globalThis.tradeIntervalRunning) {
    return;
  }

  globalThis.tradeIntervalRunning = true;

  try {
    const models = await prisma.models.findMany();

    for (const model of models) {
      if (!model.lighterApiKey) {
        console.warn(`Model ${model.id} missing lighterApiKey; skipping scheduled trade`);
        continue;
      }

      await runTradeWorkflow({
        apiKey: model.lighterApiKey,
        modelName: model.openRoutermodelName,
        name: model.name,
        invocationCount: model.invocationCount,
        id: model.id,
        accountIndex: model.accountIndex,
        totalMinutes: model.totalMinutes,
      });
    }
  } catch (error) {
    console.error("Scheduled trade execution failed", error);
  } finally {
    globalThis.tradeIntervalRunning = false;
  }
}

export function ensureTradeScheduler() {
  if (globalThis.tradeIntervalHandle) {
    return;
  }

  void executeScheduledTrades();

  globalThis.tradeIntervalHandle = setInterval(() => {
    void executeScheduledTrades();
  }, TRADE_INTERVAL_MS);
}

if ((import.meta as { main?: boolean }).main) {
  ensureTradeScheduler();
}

type PerformanceMetrics = Awaited<ReturnType<typeof calculatePerformanceMetrics>>;

function toNumeric(value: number | string | null | undefined): number | null {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim().length > 0) {
    const parsed = Number.parseFloat(value);
    if (Number.isFinite(parsed)) return parsed;
  }
  return null;
}

function formatUsd(value: number | string | null | undefined, digits = 2): string {
  const numeric = toNumeric(value);
  if (numeric === null) return "N/A";
  return `$${numeric.toFixed(digits)}`;
}

function formatNullableNumber(value: number | string | null | undefined, digits = 4): string {
  const numeric = toNumeric(value);
  if (numeric === null) return "N/A";
  return numeric.toFixed(digits);
}

function formatPercent(value: number | string | null | undefined, digits = 2): string {
  const numeric = toNumeric(value);
  if (numeric === null) return "N/A";
  return `${numeric.toFixed(digits)}%`;
}

function formatConfidence(value: number | null | undefined): string {
  if (value === null || value === undefined || !Number.isFinite(value)) {
    return "N/A";
  }
  const normalized = value <= 1 ? value * 100 : value;
  return `${normalized.toFixed(1)}%`;
}

function formatIsoDate(value: string | null | undefined): string {
  if (!value) return "N/A";
  return value;
}

function buildAccountSnapshotSection(portfolio: PortfolioSnapshot): string {
  const cashUtilization = portfolio.totalValue > 0 ? 1 - portfolio.availableCash / portfolio.totalValue : null;
  const lines = [
    `total_portfolio_value: ${formatUsd(portfolio.totalValue)}`,
    `available_cash: ${formatUsd(portfolio.availableCash)}`,
  ];

  if (cashUtilization !== null) {
    lines.push(`cash_utilization_pct: ${(cashUtilization * 100).toFixed(2)}%`);
  }

  return lines.join("\n");
}

function buildOpenPositionsSection(positions: EnrichedOpenPosition[]): string {
  if (!positions.length) {
    return "No open positions. Capital fully in cash.";
  }

  const sections = positions.map((position) => {
    const leverage = position.leverage != null ? `${position.leverage.toFixed(2)}x` : "n/a";
    const mainLine = [
      `symbol ${position.symbol}`,
      `side ${position.sign}`,
      `qty ${formatNullableNumber(position.quantity, 4)}`,
      `notional ${formatUsd(position.notionalUsd, 2)}`,
      `entry ${formatNullableNumber(position.entryPrice, 2)}`,
      `mark ${formatNullableNumber(position.markPrice, 2)}`,
      `liquidation ${formatNullableNumber(position.liquidationPrice, 2)}`,
      `unrealized ${formatUsd(position.unrealizedPnl, 2)}`,
      `realized ${formatUsd(position.realizedPnl, 2)}`,
      `leverage ${leverage}`,
    ].join(" | ");

    const riskPieces = [
      `risk_usd ${formatUsd(position.riskUsd, 2)}`,
      `risk_pct ${formatPercent(position.riskPercent, 2)}`,
    ];

    if (position.rewardUsd !== null) {
      riskPieces.push(`reward_usd ${formatUsd(position.rewardUsd, 2)}`);
    }
    if (position.rewardPercent !== null) {
      riskPieces.push(`reward_pct ${formatPercent(position.rewardPercent, 2)}`);
    }
    if (position.riskRewardRatio !== null) {
      riskPieces.push(`rr_ratio ${position.riskRewardRatio.toFixed(2)}`);
    }

    const exitPlanLine = `exit_plan: target ${formatNullableNumber(position.exitPlan?.target, 2)} | stop ${formatNullableNumber(position.exitPlan?.stop, 2)} | invalidation ${position.exitPlan?.invalidation ?? "N/A"}`;

    const intentLine = `intent: signal ${position.signal ?? position.sign} | confidence ${formatConfidence(position.confidence)} | decision_status ${position.decisionStatus ?? "N/A"} | last_decision_at ${formatIsoDate(position.lastDecisionAt)}`;

    return [mainLine, riskPieces.join(" | "), exitPlanLine, intentLine].join("\n");
  });

  return sections.join("\n\n");
}

function summarizePositionRisk(positions: EnrichedOpenPosition[]) {
  return positions.reduce(
    (acc, position) => {
      const quantity = resolveQuantity(position) ?? Math.abs(position.quantity ?? 0);
      const notional =
        position.notionalUsd ??
        (position.entryPrice != null && quantity > 0 ? Math.abs(position.entryPrice * quantity) : null) ??
        (position.markPrice != null && quantity > 0 ? Math.abs(position.markPrice * quantity) : null);

      const unrealized = toNumeric(position.unrealizedPnl) ?? 0;
      const realized = toNumeric(position.realizedPnl) ?? 0;

      if (notional != null) {
        acc.totalNotional += notional;
        if (position.sign === "LONG") {
          acc.longExposure += notional;
        } else {
          acc.shortExposure += notional;
        }
      }

      acc.totalUnrealized += unrealized;
      acc.totalRealized += realized;
      if (position.riskUsd != null) {
        const risk = Math.max(position.riskUsd, 0);
        acc.totalRiskUsd += risk;
        acc.maxPositionRiskUsd = Math.max(acc.maxPositionRiskUsd, risk);
      }
      return acc;
    },
    {
      totalNotional: 0,
      longExposure: 0,
      shortExposure: 0,
      totalUnrealized: 0,
      totalRealized: 0,
      totalRiskUsd: 0,
      maxPositionRiskUsd: 0,
    },
  );
}

function buildPerformanceOverview({
  account,
  portfolio,
  performanceMetrics,
  openPositions,
}: {
  account: Account;
  portfolio: PortfolioSnapshot;
  performanceMetrics: PerformanceMetrics;
  openPositions: EnrichedOpenPosition[];
}): string {
  const exposure = summarizePositionRisk(openPositions);
  const netExposure = exposure.longExposure - exposure.shortExposure;
  const exposureRatio = portfolio.totalValue > 0 ? (exposure.totalNotional / portfolio.totalValue) * 100 : null;
  const grossRiskRatio =
    portfolio.totalValue > 0 && exposure.totalRiskUsd > 0 ? (exposure.totalRiskUsd / portfolio.totalValue) * 100 : null;
  const maxRiskRatio =
    portfolio.totalValue > 0 && exposure.maxPositionRiskUsd > 0 ? (exposure.maxPositionRiskUsd / portfolio.totalValue) * 100 : null;

  const lines = [
    `scheduled_interval_minutes: 5`,
    `invocations_completed: ${account.invocationCount}`,
    `elapsed_minutes: ${account.totalMinutes}`,
    `portfolio_value: ${formatUsd(portfolio.totalValue)}`,
    `available_cash: ${formatUsd(portfolio.availableCash)}`,
    `open_positions: ${openPositions.length}`,
    `total_notional_exposure: ${formatUsd(exposure.totalNotional)}`,
    `long_exposure: ${formatUsd(exposure.longExposure)}`,
    `short_exposure: ${formatUsd(exposure.shortExposure)}`,
    `net_exposure: ${formatUsd(netExposure)}`,
    `unrealized_pnl: ${formatUsd(exposure.totalUnrealized)}`,
    `realized_pnl: ${formatUsd(exposure.totalRealized)}`,
    `gross_risk_usd: ${formatUsd(exposure.totalRiskUsd)}`,
    `max_single_position_risk_usd: ${formatUsd(exposure.maxPositionRiskUsd)}`,
    `annualized_sharpe_ratio: ${performanceMetrics.sharpeRatio}`,
    `total_return_since_start: ${performanceMetrics.totalReturnPercent}`,
  ];

  if (exposureRatio !== null && Number.isFinite(exposureRatio)) {
    lines.splice(6, 0, `exposure_to_equity_pct: ${exposureRatio.toFixed(2)}%`);
  }

  if (grossRiskRatio !== null && Number.isFinite(grossRiskRatio)) {
    lines.push(`risk_to_equity_pct: ${grossRiskRatio.toFixed(2)}%`);
  }

  if (maxRiskRatio !== null && Number.isFinite(maxRiskRatio)) {
    lines.push(`max_position_risk_pct: ${maxRiskRatio.toFixed(2)}%`);
  }

  return lines.join("\n");
}

function buildInvocationResponsePayload({
  prompt,
  result,
  decisions,
  executionResults,
  closedPositions,
}: {
  prompt: string;
  result: unknown;
  decisions: InvocationDecisionSummary[];
  executionResults: InvocationExecutionResultSummary[];
  closedPositions: InvocationClosedPositionSummary[];
}): InvocationResponsePayload {
  const base = (result ?? {}) as {
    finishReason?: unknown;
    usage?: unknown;
    warnings?: unknown;
    response?: {
      id?: unknown;
      modelId?: unknown;
      timestamp?: unknown;
    };
  };

  const provider = base.response;
  let timestamp: string | null = null;
  if (provider?.timestamp instanceof Date) {
    timestamp = provider.timestamp.toISOString();
  } else if (typeof provider?.timestamp === "string") {
    timestamp = provider.timestamp;
  }

  return {
    prompt,
    decisions,
    executionResults,
    closedPositions,
    finishReason: base.finishReason ?? null,
    usage: base.usage ?? null,
    warnings: base.warnings ?? null,
    providerResponse: provider
      ? {
          id: typeof provider.id === "string" ? provider.id : null,
          modelId: typeof provider.modelId === "string" ? provider.modelId : null,
          timestamp,
        }
      : null,
  };
}
