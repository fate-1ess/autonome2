import { formatConfidenceValue, formatLeverageValue, formatPriceLabel, formatQuantityValue } from "@/shared/formatting/numberFormat";
import type { Conversation, TradingDecisionCard } from "./types";

export const extractMarkdownPreview = (markdown: string | undefined, limit = 220) => {
  if (!markdown) return "";
  const stripped = markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]*)`/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/[*_>#\-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (stripped.length <= limit) return stripped;
  return `${stripped.slice(0, limit)}…`;
};

export const extractTradingDecisions = (
  toolCalls: Conversation["toolCalls"],
): TradingDecisionCard[] => {
  const decisions: TradingDecisionCard[] = [];

  toolCalls.forEach((tc) => {
    const metadata = tc.metadata;
    const decisionList = metadata?.decisions ?? [];
    const results = metadata?.results ?? [];
    const resultLookup = new Map<string, Conversation["toolCalls"][number]["metadata"]["results"][number]>();
    const isCloseCall = tc.type === "CLOSE_POSITION";

    results.forEach((result) => {
      if (typeof result?.symbol === "string") {
        resultLookup.set(result.symbol.toUpperCase(), result);
      }
    });

    decisionList.forEach((decision, idx) => {
      if (!decision || typeof decision.symbol !== "string") return;
      const symbol = decision.symbol.toUpperCase();
      const normalizedSignal =
        decision.signal === "LONG" || decision.signal === "SHORT" || decision.signal === "HOLD"
          ? decision.signal
          : "HOLD";
      const baseResult = resultLookup.get(symbol) ?? null;
      let effectiveResult = baseResult;
      if (isCloseCall) {
        if (effectiveResult) {
          if (effectiveResult.success === false && !effectiveResult.error) {
            effectiveResult = { ...effectiveResult, success: true };
          }
        } else {
          effectiveResult = { symbol, success: true };
        }
      }
      const status =
        decision.status ??
        (isCloseCall
          ? effectiveResult?.success === false && effectiveResult.error
            ? "FAILED"
            : "CLOSED"
          : effectiveResult?.success === true
            ? "EXECUTED"
            : effectiveResult?.success === false
              ? "REJECTED"
              : null);

      decisions.push({
        key: `${tc.id}-${idx}`,
        symbol,
        signal: normalizedSignal,
        quantity: decision.quantity ?? null,
        leverage: decision.leverage ?? null,
        profitTarget: decision.profitTarget ?? null,
        stopLoss: decision.stopLoss ?? null,
        invalidationCondition: decision.invalidationCondition ?? null,
        confidence: decision.confidence ?? null,
        toolCallType: tc.type,
        status,
        result: effectiveResult ?? null,
        timestamp: tc.timestamp,
      });
    });
  });

  return decisions;
};

export const formatDecisionDetails = (decision: TradingDecisionCard) => ({
  confidenceLabel: formatConfidenceValue(decision.confidence),
  quantityLabel: formatQuantityValue(decision.quantity),
  leverageLabel: formatLeverageValue(decision.leverage),
  targetLabel: formatPriceLabel(decision.profitTarget),
  stopLabel: formatPriceLabel(decision.stopLoss),
});

export const formatTimestamp = (timestamp: string | null) => {
  if (!timestamp) return "--";
  const date = new Date(timestamp);
  if (Number.isNaN(date.getTime())) return "--";
  return date.toLocaleString("en-US", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

export const computeHoldingLabel = (openedAt: string | null, closedAt: string) => {
  if (!openedAt) return "--";
  const openDate = new Date(openedAt);
  const closeDate = new Date(closedAt);
  const diff = closeDate.getTime() - openDate.getTime();
  if (!Number.isFinite(diff) || diff <= 0) return "<1M";

  const totalMinutes = Math.floor(diff / 60_000);
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;

  const parts: string[] = [];
  if (days > 0) parts.push(`${days}D`);
  if (hours > 0) parts.push(`${hours}H`);
  parts.push(`${minutes}M`);
  return parts.join(" ");
};
