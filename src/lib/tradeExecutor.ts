  import { google } from "@ai-sdk/google";
  import type { Account } from "@/lib/accounts";
  import { streamText } from "ai";
  import z from "zod";
  import { PROMPT } from "@/lib/prompt";
  import { getPortfolio } from "@/lib/getPortfolio";
  import { getOpenPositions } from "@/lib/openPositions";
  import { fetchIndicatorData } from "@/lib/indicators";
  import { PrismaClient } from "../../generated/prisma/client";
  import { ToolCallType } from "../../generated/prisma/enums";
  import { createPosition } from "@/lib/createPosition";
  import { cancelOrder } from "@/lib/closePosition";
  import { MARKETS } from "@/lib/markets";
  import { mistral } from "@ai-sdk/mistral";
  import { run } from "node:test";

  const prisma = new PrismaClient();

  declare global {
    // eslint-disable-next-line no-var
    var tradeIntervalHandle: ReturnType<typeof setInterval> | undefined;
    // eslint-disable-next-line no-var
    var tradeIntervalRunning: boolean | undefined;
  }

  const TRADE_INTERVAL_MS = 3 * 60 * 1000;

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

    const currentTime = indicatorData.currentTime ?? "Unavailable";
    const allIndicatorData = indicatorData.allIndicatorData || "No indicator data available.";

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
      .replace("{{TOTAL_MINUTES}}", account.totalMinutes.toString());

    console.log("Enriched Prompt:", enrichedPrompt);

    const marketSymbols = Object.keys(MARKETS) as [keyof typeof MARKETS, ...(keyof typeof MARKETS)[]];

    const result = streamText({
      model: mistral("codestral-latest"),
      prompt: enrichedPrompt,
      tools: {
        createPosition: {
          description: "Open a position in the given market",
          inputSchema: z.object({
            symbol: z
              .enum(Object.keys(MARKETS) as [string, ...string[]])
              .describe("The symbol to open the position at"),
            side: z.enum(["LONG", "SHORT", "HOLD"]),
            quantity: z
              .number()
              .describe("The quantity of the position to open."),
          }),
          execute: async ({ symbol, side, quantity }) => {
            await createPosition(account, symbol, side, quantity);
            await prisma.toolCalls.create({
              data: {
                invocationId: modelInvocation.id,
                toolCallType: ToolCallType.CREATE_POSITION,
                metadata: JSON.stringify({ symbol, side, quantity }),
              },
            });
            return `Position opened successfully for ${quantity} ${symbol}`;
          },
        },
        closePosition: {
          description: "Close the currently open position for the provided market symbol",
          inputSchema: z.object({
            symbol: z
              .enum(marketSymbols as unknown as [string, ...string[]])
              .describe("The symbol whose open position should be closed"),
          }),
          execute: async ({ symbol }) => {
            const market = MARKETS[symbol];

            await cancelOrder(account, market.marketId, market.clientOrderIndex);
            await prisma.toolCalls.create({
              data: {
                invocationId: modelInvocation.id,
                toolCallType: ToolCallType.CLOSE_POSITION,
                metadata: JSON.stringify({ symbol }),
              },
            });
            console.log(`Position for ${symbol} closed successfully`);
            return `Position for ${symbol} closed successfully`;
          },
        },
      },
    });

    await result.consumeStream();

    await prisma.models.update({
      where: { id: account.id },
      data: { 
        invocationCount: { increment: 1 },
        totalMinutes: { increment: 3} 
      },
    });

    const responseText = (await result.text).trim();

    await prisma.invocations.update({
      where: { id: modelInvocation.id },
      data: { response: responseText },

    });

    console.log("LLM response:", responseText);

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
        apiKey: "6e5a3792538dcec94eb3b9c7b99111b011d90c957363e401dfb411f045ad83884021b898f5c2f847",
        invocationCount: 2,
        id: "8bc704c0-402d-4ea1-abd2-937cbc2192f2",
        accountIndex: "281474976710624",
        totalMinutes: 3,
        name: "",
        modelName: ""
      };

    const symbol: keyof typeof MARKETS = "SOL";
    const side: "LONG" | "SHORT" | "HOLD" = "LONG";
    const quantity = 0.05;

    console.log(`Manually calling createPosition for ${symbol} with side ${side} and quantity ${quantity}`);
    await createPosition(account, symbol, side, quantity);
      console.log("Manual createPosition call finished");
    } catch (error) {
      console.error("Manual createPosition call failed", error);
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
    void runManualCreatePosition();
  }
