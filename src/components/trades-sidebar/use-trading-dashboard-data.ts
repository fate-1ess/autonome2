import { useMemo } from "react";
import { usePollingFetch } from "@/hooks/usePollingFetch";
import { getModelInfo } from "@/shared/models/modelConfig";
import { normalizeNumber } from "@/shared/formatting/numberFormat";
import type {
  Conversation,
  ModelOption,
  ModelPositions,
  Trade,
  TradingDashboardData,
} from "./types";

type TradesResponse = { trades?: unknown };
type PositionsResponse = { positions?: unknown };
type ConversationsResponse = { conversations?: unknown };

export const TRADES_ENDPOINT = "/api/trades";
const POSITIONS_ENDPOINT = "/api/positions";
const CONVERSATIONS_ENDPOINT = "/api/invocations";
const REFRESH_INTERVAL = 10_000;

export function useTradingDashboardData(): TradingDashboardData {
  const { data: trades, loading: tradesLoading } = usePollingFetch<Trade[]>(TRADES_ENDPOINT, {
    interval: REFRESH_INTERVAL,
    selector: selectTrades,
  });

  const { data: positions, loading: positionsLoading } = usePollingFetch<ModelPositions[]>(
    POSITIONS_ENDPOINT,
    {
      interval: REFRESH_INTERVAL,
      selector: selectPositions,
    },
  );

  const { data: conversations, loading: conversationsLoading } = usePollingFetch<Conversation[]>(
    CONVERSATIONS_ENDPOINT,
    {
      interval: REFRESH_INTERVAL,
      selector: selectConversations,
    },
  );

  const modelOptions = useMemo(
    () => buildModelOptions(trades ?? [], positions ?? [], conversations ?? []),
    [trades, positions, conversations],
  );

  const loading = Boolean(tradesLoading || positionsLoading || conversationsLoading);

  return {
    trades: trades ?? [],
    positions: positions ?? [],
    conversations: conversations ?? [],
    modelOptions,
    loading,
  };
}

function selectTrades(payload: unknown): Trade[] {
  const rawTrades = Array.isArray((payload as TradesResponse)?.trades)
    ? ((payload as TradesResponse).trades as unknown[])
    : [];

  return rawTrades
    .map((trade: any) => {
      const rawSide = typeof trade?.side === "string" ? trade.side.toUpperCase() : "LONG";
      const side = rawSide === "SHORT" || rawSide === "LONG" ? rawSide : "UNKNOWN";
      const modelKey = trade?.modelRouterName || trade?.modelName || trade?.modelId;

      if (!trade?.id || !modelKey) return null;

      return {
        id: String(trade.id),
        modelId: String(trade.modelId ?? modelKey ?? ""),
        modelName: String(trade.modelName ?? ""),
        modelRouterName: String(trade.modelRouterName ?? ""),
        modelKey: String(modelKey),
        symbol: String(trade.symbol ?? ""),
        side,
        quantity: normalizeNumber(trade.quantity),
        entryPrice: normalizeNumber(trade.entryPrice),
        exitPrice: normalizeNumber(trade.exitPrice),
        entryNotional: normalizeNumber(trade.entryNotional),
        exitNotional: normalizeNumber(trade.exitNotional),
        netPnl: normalizeNumber(trade.netPnl),
        openedAt: typeof trade.openedAt === "string" ? trade.openedAt : null,
        closedAt:
          typeof trade.closedAt === "string" ? trade.closedAt : new Date().toISOString(),
        holdingTime: typeof trade.holdingTime === "string" ? trade.holdingTime : null,
        timestamp: typeof trade.timestamp === "string" ? trade.timestamp : null,
      } satisfies Trade;
    })
    .filter((trade): trade is Trade => Boolean(trade?.id));
}

function selectPositions(payload: unknown): ModelPositions[] {
  const rawPositions = Array.isArray((payload as PositionsResponse)?.positions)
    ? ((payload as PositionsResponse).positions as ModelPositions[])
    : [];
  return rawPositions.filter((entry) => Array.isArray(entry?.positions));
}

function selectConversations(payload: unknown): Conversation[] {
  const rawConversations = Array.isArray((payload as ConversationsResponse)?.conversations)
    ? ((payload as ConversationsResponse).conversations as Conversation[])
    : [];
  return rawConversations.filter((conversation) => Boolean(conversation?.id));
}

function buildModelOptions(
  trades: Trade[],
  positions: ModelPositions[],
  conversations: Conversation[],
): ModelOption[] {
  const map = new Map<string, ModelOption>();

  const register = (id?: string, fallbackName?: string) => {
    if (!id) return;
    const info = getModelInfo(id);
    const existing = map.get(id);
    const logo = info.logo || existing?.logo || "";
    const color = info.logo ? info.color : existing?.color ?? info.color;
    const label = info.logo
      ? info.label
      : existing?.label && existing.label !== existing.id
        ? existing.label
        : fallbackName ?? info.label ?? id;

    map.set(id, { id, label, logo, color });
  };

  trades.forEach((trade) => register(trade.modelKey, trade.modelName));
  conversations.forEach((conversation) =>
    register(conversation.modelLogo || conversation.modelName, conversation.modelName),
  );
  positions.forEach((positionGroup) =>
    register(positionGroup.modelLogo || positionGroup.modelName, positionGroup.modelName),
  );

  return Array.from(map.values());
}
