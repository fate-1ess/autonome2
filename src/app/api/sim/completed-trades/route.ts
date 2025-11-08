import { NextRequest, NextResponse } from "next/server";
import { ToolCallType } from "@prisma/client";

import { prisma } from "@server/db/prisma";
import { normalizeNumber } from "@shared/formatting/numberFormat";
import { getArray, safeJsonParse } from "@shared/utils/json";

type CompletedTrade = {
  id: string;
  modelId: string;
  modelName: string | null;
  symbol: string;
  direction: "LONG" | "SHORT";
  notional: number | null;
  realizedPnl: number | null;
  leverage: number | null;
  confidence: number | null;
  closedAt: string | null;
  invocationId: string;
};

type TradeStats = {
  tradeCount: number;
  totalRealized: number;
  expectancy: number | null;
  averageLeverage: number | null;
  medianLeverage: number | null;
  maxLeverage: number | null;
  leverageValues: number[];
  averageConfidence: number | null;
  medianConfidence: number | null;
  confidenceValues: number[];
};

function average(values: number[]): number | null {
  if (!values.length) {
    return null;
  }
  const sum = values.reduce((acc, value) => acc + value, 0);
  return sum / values.length;
}

function median(values: number[]): number | null {
  if (!values.length) {
    return null;
  }
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  }
  return sorted[mid];
}

function normaliseConfidence(value: number | null | undefined): number | null {
  if (value === null || value === undefined) {
    return null;
  }
  if (!Number.isFinite(value)) {
    return null;
  }
  if (value <= 0) {
    return null;
  }
  return value > 1 ? value / 100 : value;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const modelId = searchParams.get("modelId") ?? undefined;
  const takeParam = Number.parseInt(searchParams.get("limit") ?? "200", 10);
  const take = Number.isFinite(takeParam) && takeParam > 0 ? Math.min(takeParam, 500) : 200;

  if (!modelId) {
    return NextResponse.json({ trades: [], stats: buildStats([]) });
  }

  const toolCalls = await prisma.toolCalls.findMany({
    where: {
      toolCallType: ToolCallType.CLOSE_POSITION,
      invocation: {
        modelId,
      },
    },
    include: {
      invocation: {
        select: {
          id: true,
          modelId: true,
          model: {
            select: {
              name: true,
            },
          },
          toolCalls: {
            where: {
              toolCallType: ToolCallType.CREATE_POSITION,
            },
            select: {
              metadata: true,
              createdAt: true,
            },
          },
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    take,
  });

  const trades: CompletedTrade[] = [];

  for (const call of toolCalls) {
    const metadata = safeJsonParse<Record<string, unknown>>(call.metadata, {});
    const closedPositions = getArray<Record<string, unknown>>(metadata["closedPositions"]);

    const invocation = call.invocation;
    const createIndex = buildCreateIndex(invocation.toolCalls ?? []);

    closedPositions.forEach((position, index) => {
      const symbolRaw = typeof position.symbol === "string" ? position.symbol : null;
      if (!symbolRaw) {
        return;
      }

      const sideValue = typeof position.side === "string" ? position.side.toUpperCase() : "LONG";
      const direction: "LONG" | "SHORT" = sideValue === "SHORT" ? "SHORT" : "LONG";

      const quantity = normalizeNumber(position.quantity);
      const exitPrice = normalizeNumber(position.exitPrice ?? position.markPrice ?? position.entryPrice);
      const notional = quantity !== null && exitPrice !== null ? Math.abs(quantity * exitPrice) : null;

      const realizedPnl = normalizeNumber(position.realizedPnl ?? position.netPnl ?? position.unrealizedPnl);
      const closedAt = typeof position.closedAt === "string" ? position.closedAt : null;

      const createInfo = createIndex.get(symbolRaw.toUpperCase());
      const leverage = createInfo?.leverage ?? null;
      const confidence = createInfo?.confidence ?? null;

      trades.push({
        id: `${call.id}:${index}`,
        modelId: invocation.modelId,
        modelName: invocation.model?.name ?? null,
        symbol: symbolRaw,
        direction,
        notional,
        realizedPnl,
        leverage,
        confidence,
        closedAt,
        invocationId: invocation.id,
      });
    });
  }

  return NextResponse.json({
    trades,
    stats: buildStats(trades),
  });
}

type CreateToolCall = {
  metadata: string;
  createdAt: Date;
};

function buildCreateIndex(toolCalls: CreateToolCall[]) {
  const index = new Map<string, { leverage: number | null; confidence: number | null; createdAt: number }>();

  for (const call of toolCalls) {
    const metadata = safeJsonParse<Record<string, unknown>>(call.metadata, {});
    const decisions = getArray<Record<string, unknown>>(metadata["decisions"]);
    const timestamp = call.createdAt.getTime();

    for (const decision of decisions) {
      const symbolRaw = typeof decision.symbol === "string" ? decision.symbol : null;
      if (!symbolRaw) {
        continue;
      }

      const leverage = normalizeNumber(decision.leverage);
      const confidence = normaliseConfidence(normalizeNumber(decision.confidence));
      const key = symbolRaw.toUpperCase();
      const existing = index.get(key);

      if (!existing || existing.createdAt <= timestamp) {
        index.set(key, {
          leverage: leverage && leverage > 0 ? leverage : null,
          confidence,
          createdAt: timestamp,
        });
      }
    }
  }

  return index;
}

function buildStats(trades: CompletedTrade[]): TradeStats {
  if (!trades.length) {
    return {
      tradeCount: 0,
      totalRealized: 0,
      expectancy: null,
      averageLeverage: null,
      medianLeverage: null,
      maxLeverage: null,
      leverageValues: [],
      averageConfidence: null,
      medianConfidence: null,
      confidenceValues: [],
    };
  }

  const realizedValues = trades
    .map((trade) => trade.realizedPnl)
    .filter((value): value is number => value !== null && Number.isFinite(value));
  const leverageValues = trades
    .map((trade) => trade.leverage)
    .filter((value): value is number => value !== null && Number.isFinite(value) && value > 0);
  const confidenceValues = trades
    .map((trade) => trade.confidence)
    .filter((value): value is number => value !== null && Number.isFinite(value) && value > 0);

  const totalRealized = realizedValues.reduce((acc, value) => acc + value, 0);
  const tradeCount = trades.length;

  return {
    tradeCount,
    totalRealized,
    expectancy: tradeCount > 0 ? totalRealized / tradeCount : null,
    averageLeverage: average(leverageValues),
    medianLeverage: median(leverageValues),
    maxLeverage: leverageValues.length ? Math.max(...leverageValues) : null,
    leverageValues,
    averageConfidence: average(confidenceValues),
    medianConfidence: median(confidenceValues),
    confidenceValues,
  };
}
