import { cacheLife, cacheTag } from "next/cache";
import { NextResponse } from "next/server";
import { ToolCallType } from "@prisma/client";
import { getOpenPositions } from "@/lib/openPositions";
import { getPortfolio } from "@/lib/getPortfolio";
import { buildDecisionIndex } from "@/lib/tradingDecisions";
import { prisma } from "@server/db/prisma";
import { getArray, safeJsonParse } from "@/lib/utils/json";
import { normalizeNumber } from "@/lib/formatters";
import { DATA_CACHE_TAGS } from "@/lib/cache/tags";

async function loadPositions() {
  // 'use cache';
  // cacheTag(DATA_CACHE_TAGS.POSITIONS);
  // cacheLife({ stale: 0, revalidate: 10, expire: 60 });

  const models = await prisma.models.findMany();

  return Promise.all(
    models.map(async (model) => {
        try {
          const [positions, toolCalls, portfolio] = await Promise.all([
            getOpenPositions(model.lighterApiKey, model.accountIndex, model.id, {
              fallbackToSimulator: true,
            }),
            prisma.toolCalls.findMany({
              where: {
                toolCallType: ToolCallType.CREATE_POSITION,
                invocation: { modelId: model.id },
              },
              orderBy: { createdAt: "desc" },
              take: 50,
            }),
            getPortfolio({
              apiKey: model.lighterApiKey,
              accountIndex: model.accountIndex,
              id: model.id,
              modelName: model.openRoutermodelName,
              name: model.name,
              invocationCount: model.invocationCount,
              totalMinutes: model.totalMinutes,
            }, { fallbackToSimulator: true }),
          ]);

          const decisionIndex = buildDecisionIndex(
            toolCalls.map((tc) => ({
              id: tc.id,
              createdAt: tc.createdAt,
              toolCallType: tc.toolCallType,
              metadata: safeJsonParse(tc.metadata, null),
            })),
          );
          
          // Calculate total unrealized PnL
          const totalUnrealizedPnl = positions.reduce((sum, p) => {
            const value = normalizeNumber((p as unknown as Record<string, unknown>).unrealizedPnl);
            return sum + (value ?? 0);
          }, 0);
          
          return {
            modelId: model.id,
            modelName: model.name,
            modelLogo: model.openRoutermodelName,
            positions: (positions || []).map((position) => {
              const symbolKey = position.symbol?.toUpperCase?.() ?? position.symbol;
                const decision = symbolKey ? decisionIndex.get(symbolKey) : undefined;
              const exitPlan = decision
                ? {
                    target: decision.profitTarget,
                    stop: decision.stopLoss,
                    invalidation: decision.invalidationCondition,
                  }
                : null;

              const decisionStatus = decision?.status ?? (
                decision?.result?.success === true
                  ? "FILLED"
                  : decision?.result?.success === false
                    ? "REJECTED"
                    : null
              );

              return {
                ...position,
                signal: decision?.signal ?? position.sign,
                leverage: decision?.leverage ?? position.leverage,
                confidence: decision?.confidence ?? null,
                quantity: position.quantity,
                exitPlan,
                lastDecisionAt: decision?.createdAt?.toISOString?.() ?? null,
                decisionStatus,
              };
            }),
            totalUnrealizedPnl,
            availableCash: portfolio.availableCash,
          };
        } catch (error) {
          console.error(`Error fetching positions for ${model.id}`, error);
          return {
            modelId: model.id,
            modelName: model.name,
            modelLogo: model.openRoutermodelName,
            positions: [],
            totalUnrealizedPnl: 0,
            availableCash: 0,
          };
        }
      }),
  );
}

export async function GET() {
  try {
    const positions = await loadPositions();
    return NextResponse.json({ positions });
  } catch (error) {
    console.error("Error fetching positions:", error);
    return NextResponse.json(
      { error: "Failed to fetch positions" },
      { status: 500 },
    );
  }
}
