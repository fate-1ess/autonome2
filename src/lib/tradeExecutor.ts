import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import type { Account } from "@/lib/accounts";
import { generateText, tool } from "ai";
import z from "zod";
import { PROMPT } from "@/lib/prompt";
import { getPortfolio } from "@/lib/getPortfolio";
import { getOpenPositions } from "@/lib/openPositions";
import { fetchIndicatorData } from "@/lib/indicators";
import { PrismaClient } from "@prisma/client";
import { ToolCallType } from "../../generated/prisma/enums";
import { createPosition } from "@/lib/createPosition";
import { closePosition } from "@/lib/closePosition";
import { MARKETS } from "@/lib/markets";
import { google } from "@ai-sdk/google";
import { mistral } from "@ai-sdk/mistral";

const prisma = new PrismaClient();

declare global {
  // eslint-disable-next-line no-var
  var tradeIntervalHandle: ReturnType<typeof setInterval> | undefined;
  // eslint-disable-next-line no-var
  var tradeIntervalRunning: boolean | undefined;
}

const TRADE_INTERVAL_MS = 3 * 60 * 1000;
const INITIAL_CAPITAL = 10000; // Starting capital in USD
const RISK_FREE_RATE = 0.04; // 4% annual risk-free rate

async function calculatePerformanceMetrics(account: Account, currentPortfolioValue: number) {
  const portfolioHistory = await prisma.portfolioSize.findMany({
    where: { modelId: account.id },
    orderBy: { createdAt: "asc" },
  });

  if (portfolioHistory.length < 2)
    return { sharpeRatio: "N/A", totalReturnPercent: "N/A" };

  const initialValue = parseFloat(portfolioHistory[0].netPortfolio) || INITIAL_CAPITAL;
  const totalReturn = ((currentPortfolioValue - initialValue) / initialValue) * 100;

  const returns: number[] = [];
  for (let i = 1; i < portfolioHistory.length; i++) {
    const prevValue = parseFloat(portfolioHistory[i - 1].netPortfolio);
    const currValue = parseFloat(portfolioHistory[i].netPortfolio);
    if (prevValue > 0) returns.push((currValue - prevValue) / prevValue);
  }

  if (returns.length < 2)
    return { sharpeRatio: "N/A", totalReturnPercent: `${totalReturn.toFixed(2)}%` };

  const meanReturn = returns.reduce((s, r) => s + r, 0) / returns.length;
  const variance = returns.reduce((s, r) => s + (r - meanReturn) ** 2, 0) / (returns.length - 1);
  const stdDev = Math.sqrt(variance);
  if (stdDev === 0)
    return { sharpeRatio: "N/A", totalReturnPercent: `${totalReturn.toFixed(2)}%` };

  const periodsPerYear = (365 * 24 * 60) / 3;
  const annualizedReturn = Math.pow(1 + meanReturn, periodsPerYear) - 1;
  const annualizedStdDev = stdDev * Math.sqrt(periodsPerYear);
  const sharpeRatio = (annualizedReturn - RISK_FREE_RATE) / annualizedStdDev;

  return {
    sharpeRatio: sharpeRatio.toFixed(3),
    totalReturnPercent: `${totalReturn.toFixed(2)}%`,
  };
}

export async function runTradeWorkflow(account: Account) {
  const [portfolio, openPositions, indicatorData] = await Promise.all([
    getPortfolio(account),
    getOpenPositions(account.apiKey, account.accountIndex),
    fetchIndicatorData(),
  ]);

  const modelInvocation = await prisma.invocations.create({
    data: {
      modelId: account.id,
      response: "",
    },
  });

  // Store current portfolio value for historical tracking
  await prisma.portfolioSize.create({
    data: {
      modelId: account.id,
      netPortfolio: portfolio.total,
    },
  });

  const currentTime = indicatorData.currentTime ?? "Unavailable";
  const allIndicatorData = indicatorData.allIndicatorData || "No indicator data available.";
  
  // Calculate performance metrics
  const currentPortfolioValue = parseFloat(portfolio.total);
  const performanceMetrics = await calculatePerformanceMetrics(account, currentPortfolioValue);

  const enrichedPrompt = PROMPT.replace("{{INVOKATION_TIMES}}", account.invocationCount.toString())
    .replace(
      "{{OPEN_POSITIONS}}",
      openPositions?.map((position) => `${position.symbol} ${position.position} ${position.sign}`).join(", ") ?? "",
    )
    .replace("{{PORTFOLIO_VALUE}}", `$${portfolio.total}`)
    .replace("{{ALL_INDICATOR_DATA}}", allIndicatorData)
    .replace("{{AVAILABLE_CASH}}", `$${portfolio.available}`)
    .replace("{{CURRENT_ACCOUNT_VALUE}}", `$${portfolio.total}`)
    .replace("{{CURRENT_TIME}}", currentTime)
    .replace("{{CURRENT_ACCOUNT_POSITIONS}}", JSON.stringify(openPositions))
    .replace("{{TOTAL_MINUTES}}", account.totalMinutes.toString())
    .replace("{{SHARPE_RATIO}}", performanceMetrics.sharpeRatio)
    .replace("{{TOTAL_RETURN_PERCENT}}", performanceMetrics.totalReturnPercent);

  console.log("Enriched Prompt:", enrichedPrompt);

  const marketSymbols = Object.keys(MARKETS) as [keyof typeof MARKETS, ...(keyof typeof MARKETS)[]];

  const openrouter = createOpenRouter({
    apiKey: process.env.OPENROUTER_API_KEY,
  });

  const result = await generateText({
    model: openrouter(account.modelName),
    prompt: enrichedPrompt,
    tools: {
      createPosition: tool({
        description: "Open one or more positions in the given markets",
        inputSchema: z.object({
          positions: z.array(z.object({
            symbol: z
              .enum(Object.keys(MARKETS) as [string, ...string[]])
              .describe("The symbol to open the position at"),
            side: z.enum(["LONG", "SHORT", "HOLD"]),
            quantity: z
              .number()
              .describe("The quantity of the position to open."),
          })).describe("Array of positions to create"),
        }),
        execute: async ({ positions }) => {
          const results = await createPosition(account, positions);
          
          const successful = results.filter(r => r.success);
          const failed = results.filter(r => !r.success);
          
          await prisma.toolCalls.create({
            data: {
              invocationId: modelInvocation.id,
              toolCallType: ToolCallType.CREATE_POSITION,
              metadata: JSON.stringify({ positions, results }),
            },
          });
          
          if (successful.length > 0) {
            console.log(`✓ Opened positions: ${successful.map(r => r.symbol).join(", ")}`);
          }
          if (failed.length > 0) {
            console.log(`✗ Failed: ${failed.map(r => `${r.symbol} (${r.error})`).join(", ")}`);
          }
          
          let response = "";
          if (successful.length > 0) {
            response += `Successfully opened positions: ${successful.map(r => r.symbol).join(", ")}. `;
          }
          if (failed.length > 0) {
            response += `Failed to open: ${failed.map(r => `${r.symbol} (${r.error})`).join(", ")}`;
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
          await closePosition(account, symbols);
          await prisma.toolCalls.create({
            data: {
              invocationId: modelInvocation.id,
              toolCallType: ToolCallType.CLOSE_POSITION,
              metadata: JSON.stringify({ symbols }),
            },
          });
          console.log(`Position(s) for ${symbols.join(", ")} closed successfully`);
          return `Position(s) for ${symbols.join(", ")} closed successfully`;
        },
      }),
    },
  });
  await prisma.models.update({
    where: { id: account.id },
    data: {
      invocationCount: { increment: 1 },
      totalMinutes: { increment: 3 }
    },
  });

  const responseText = result.text.trim();

  await prisma.invocations.update({
    where: { id: modelInvocation.id },
    data: { response: responseText },

  });
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

export async function runManualCreatePosition() {
  try {

    const account: Account = {
      apiKey: "894862eabeb752b410ca00df88da8a368d9a60372797bdaa38b66fd0c757b014bb24496077dd2008",
      invocationCount: 2,
      id: "1",
      accountIndex: "338153",
      totalMinutes: 1,
      name: "",
      modelName: ""
    };

    const positions = [
      { symbol: "ETH" as keyof typeof MARKETS, side: "LONG" as const, quantity: 0.0001 },
      { symbol: "SOL" as keyof typeof MARKETS, side: "SHORT" as const, quantity: 0.001 },
    ];

    console.log(`Manually calling createPosition for ${positions.length} positions`);
    await createPosition(account, positions);
    console.log("Manual createPosition call finished");
  } catch (error) {
    console.error("Manual createPosition call failed", error);
  }
}

export async function runManualClosePosition() {
  try {
  const account: Account = {
  apiKey: "6e5a3792538dcec94eb3b9c7b99111b011d90c957363e401dfb411f045ad83884021b898f5c2f847",
  invocationCount: 2,
  id: "8bc704c0-402d-4ea1-abd2-937cbc2192f2",
  accountIndex: "281474976710624",
  totalMinutes: 1,
  name: "",
  modelName: ""
};

    const symbol: keyof typeof MARKETS = "SOL";
    const market = MARKETS[symbol];
    const symbols = ["ETH", "SOL"];

    console.log(`Manually calling closePosition for ${symbol}`);
    await closePosition(account, symbols);
    console.log("Manual closePosition call finished");
  } catch (error) {
    console.error("Manual closePosition call failed", error);
  }
}

export async function runManualGetOpenPositions() {
  try {
    const account: Account = {
      apiKey: "894862eabeb752b410ca00df88da8a368d9a60372797bdaa38b66fd0c757b014bb24496077dd2008",
      invocationCount: 2,
      id: "1",
      accountIndex: "338153",
      totalMinutes: 1,
      name: "",
      modelName: ""
    };

    console.log("Manually fetching open positions");
    const positions = await getOpenPositions(account.apiKey, account.accountIndex);
    console.log("Open positions:", positions);
  } catch (error) {
    console.error("Manual getOpenPositions call failed", error);
  }
}

export async function runManualGetPortfolio() {
  try {
    const account: Account = {
      apiKey: "6e5a3792538dcec94eb3b9c7b99111b011d90c957363e401dfb411f045ad83884021b898f5c2f847",
      invocationCount: 2,
      id: "1",
      accountIndex: "281474976710624",
      totalMinutes: 1,
      name: "",
      modelName: ""
    };

    console.log("Manually fetching portfolio");
    const portfolio = await getPortfolio(account);
    console.log("Portfolio:", portfolio);
  } catch (error) {
    console.error("Manual getPortfolio call failed", error);
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
  // Allow running the scheduler directly via `bun run src/lib/tradeExecutor.ts`.
  // ensureTradeScheduler();
  // void runManualClosePosition();
  // void runManualCreatePosition();
  // void runManualGetOpenPositions();
  void runManualGetPortfolio();
}
