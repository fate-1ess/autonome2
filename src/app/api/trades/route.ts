import { cacheLife, cacheTag } from "next/cache";
import { NextResponse } from "next/server";
import { prisma } from "@server/db/prisma";
import { normalizeNumber } from "@/shared/formatting/numberFormat";
import { getArray, safeJsonParse } from "@/shared/utils/json";
import { DATA_CACHE_TAGS } from "@/server/cache/dataTags";

type CreatePositionRecord = {
  createdAt: Date;
  symbol: string;
  modelId: string;
  side?: string;
  quantity: number | null;
};

type CompletedTrade = {
  id: string;
  modelId: string;
  modelName: string;
  modelRouterName: string;
  symbol: string;
  side: string;
  quantity: number | null;
  entryPrice: number | null;
  exitPrice: number | null;
  entryNotional: number | null;
  exitNotional: number | null;
  netPnl: number | null;
  openedAt: string | null;
  closedAt: string;
  holdingTime: string | null;
  timestamp: string;
};

const canonicalSymbol = (symbol: string | undefined | null) => {
  if (!symbol) return "";
  return symbol.toUpperCase().replace(/[^A-Z0-9]/g, "").replace(/USDT$/, "");
};

const formatDuration = (openedAt: Date, closedAt: Date) => {
  const diffMs = closedAt.getTime() - openedAt.getTime();
  if (diffMs <= 0) return "<1M";
  const totalMinutes = Math.floor(diffMs / 60000);
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;

  const parts: string[] = [];
  if (days > 0) parts.push(`${days}D`);
  if (hours > 0) parts.push(`${hours}H`);
  parts.push(`${minutes}M`);
  return parts.join(" ");
};

const formatTimestamp = (date: Date) => {
  return date.toLocaleString("en-US", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

const consumeLatestCreateRecord = (
  lookup: Map<string, CreatePositionRecord[]>,
  modelId: string,
  symbol: string,
  closedAt: Date,
) => {
  const key = `${modelId}|${symbol}`;
  const records = lookup.get(key);
  if (!records || records.length === 0) return null;

  for (let i = records.length - 1; i >= 0; i -= 1) {
    if (records[i].createdAt <= closedAt) {
      const [record] = records.splice(i, 1);
      return record;
    }
  }
  return null;
};

async function loadTrades() {
  'use cache';
  cacheTag(DATA_CACHE_TAGS.TRADES);
  cacheLife({ stale: 0, revalidate: 10, expire: 60 });

  const closeCalls = await prisma.toolCalls.findMany({
      where: { toolCallType: "CLOSE_POSITION" },
      include: {
        invocation: {
          include: {
            model: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
      take: 400,
    });

  if (closeCalls.length === 0) {
    return [] as CompletedTrade[];
  }

  const modelIds = Array.from(
    new Set(closeCalls.map((call) => call.invocation.modelId)),
  );

  const createCalls = await prisma.toolCalls.findMany({
    where: {
      toolCallType: "CREATE_POSITION",
      invocation: {
        modelId: { in: modelIds },
      },
    },
    include: {
      invocation: {
        select: {
          modelId: true,
        },
      },
    },
    orderBy: { createdAt: "asc" },
  });

  const createLookup = new Map<string, CreatePositionRecord[]>();

  for (const call of createCalls) {
    const metadata = safeJsonParse<Record<string, unknown>>(call.metadata, {});
    const positions = getArray<Record<string, unknown>>(metadata.positions);

    for (const position of positions) {
      const symbol = canonicalSymbol(
        typeof position.symbol === "string" ? position.symbol : undefined,
      );
      if (!symbol) continue;
      const record: CreatePositionRecord = {
        createdAt: call.createdAt,
        symbol,
        modelId: call.invocation.modelId,
        side: typeof position.side === "string" ? position.side : undefined,
        quantity: normalizeNumber(position.quantity),
      };

      const key = `${record.modelId}|${record.symbol}`;
      const existing = createLookup.get(key) ?? [];
      existing.push(record);
      createLookup.set(key, existing);
    }
  }

  const trades = closeCalls.flatMap((call) => {
    const metadata = safeJsonParse<Record<string, unknown>>(call.metadata, {});
    const closedPositions = getArray<Record<string, unknown>>(metadata["closedPositions"]);
    const fallbackSymbols = getArray<unknown>(metadata["symbols"]);

    if (closedPositions.length === 0) {
      return [] as CompletedTrade[];
    }

    const closedAt = call.createdAt;
    const model = call.invocation.model;
    const modelId = call.invocation.modelId;
    const closingTrades: CompletedTrade[] = [];

    closedPositions.forEach((position: any, idx: number) => {
      const symbolCandidate =
        typeof position.symbol === "string"
          ? position.symbol
          : (typeof fallbackSymbols[idx] === "string"
            ? (fallbackSymbols[idx] as string)
            : undefined);
      const symbol = canonicalSymbol(symbolCandidate);
      if (!symbol) {
        return;
      }

      const createRecord = consumeLatestCreateRecord(createLookup, modelId, symbol, closedAt);
      const entryPrice = normalizeNumber(position.entryPrice ?? position.markPrice);
      const exitPrice = normalizeNumber(position.exitPrice ?? position.markPrice);
      const quantity = normalizeNumber(position.quantity ?? createRecord?.quantity);
      const entryNotional = position.entryNotional != null
        ? normalizeNumber(position.entryNotional)
        : entryPrice != null && quantity != null
          ? entryPrice * quantity
          : null;
      const exitNotional = position.exitNotional != null
        ? normalizeNumber(position.exitNotional)
        : exitPrice != null && quantity != null
          ? exitPrice * quantity
          : null;
      const pnl = normalizeNumber(position.netPnl ?? position.realizedPnl ?? position.unrealizedPnl);
      const openedAt = createRecord?.createdAt ?? null;
      const holdingTime = openedAt ? formatDuration(openedAt, closedAt) : null;

      closingTrades.push({
        id: `${call.id}:${symbol}:${idx}`,
        modelId,
        modelName: model.name,
        modelRouterName: model.openRoutermodelName,
        symbol,
        side: typeof position.side === "string"
          ? position.side.toUpperCase()
          : createRecord?.side?.toUpperCase() ?? "LONG",
        quantity,
        entryPrice,
        exitPrice,
        entryNotional,
        exitNotional,
        netPnl: pnl,
        openedAt: openedAt ? openedAt.toISOString() : null,
        closedAt: closedAt.toISOString(),
        holdingTime,
        timestamp: formatTimestamp(closedAt),
      });
    });

    return closingTrades;
  });

  return trades;
}

export async function GET() {
  try {
    const trades = await loadTrades();
    return NextResponse.json({ trades });
  } catch (error) {
    console.error("Error fetching trades:", error);
    return NextResponse.json({ error: "Failed to fetch trades" }, { status: 500 });
  }
}
