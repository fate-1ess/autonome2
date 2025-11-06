import { AccountApi, ApiKeyAuthentication, IsomorphicFetchHttpLibrary, ServerConfiguration } from "../../lighter-sdk-ts/generated";
import { BASE_URL, DEFAULT_SIMULATOR_OPTIONS, IS_SIMULATION_ENABLED } from "./config";
import { ExchangeSimulator } from "./simulator/exchangeSimulator";
import type { TradingSignal } from "./tradingDecisions";

export interface ExitPlanSummary {
  target: number | null;
  stop: number | null;
  invalidation: string | null;
}

export interface OpenPositionSummary {
  symbol: string;
  position: string;
  quantity: number;
  sign: "LONG" | "SHORT";
  unrealizedPnl: string;
  realizedPnl: string;
  liquidationPrice: string | null;
  leverage?: number;
  notional?: string;
  entryPrice?: number | null;
  markPrice?: number | null;
  exitPlan?: ExitPlanSummary | null;
  confidence?: number | null;
  signal?: TradingSignal;
  lastDecisionAt?: string | null;
  decisionStatus?: string | null;
}

const toNumber = (value: unknown): number | null => {
  if (typeof value === "number") return Number.isFinite(value) ? value : null;
  if (typeof value === "string") {
    const parsed = Number.parseFloat(value);
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
};

async function buildSimulatorPositions(accountId?: string): Promise<OpenPositionSummary[]> {
  const simulator = await ExchangeSimulator.bootstrap(DEFAULT_SIMULATOR_OPTIONS);
  const simulatorAccountId = accountId && accountId.length > 0 ? accountId : "default";

  return simulator.getOpenPositions(simulatorAccountId).map((position) => {
    const quantity = position.quantity;
    const entryPrice = position.avgEntryPrice ?? null;
    const notionalEntry = Number.isFinite(position.notional)
      ? position.notional
      : entryPrice != null
        ? entryPrice * Math.abs(quantity)
        : position.markPrice != null
          ? position.markPrice * Math.abs(quantity)
          : null;
    const leverage = position.leverage != null && Number.isFinite(position.leverage) ? position.leverage : undefined;

    return {
      symbol: position.symbol,
      position: position.quantity.toFixed(4),
      quantity,
      sign: position.side,
      unrealizedPnl: position.unrealizedPnl.toFixed(2),
      realizedPnl: position.realizedPnl.toFixed(2),
      liquidationPrice: null,
      leverage,
      notional: notionalEntry != null ? notionalEntry.toFixed(2) : undefined,
      entryPrice,
      markPrice: position.markPrice ?? null,
      exitPlan: null,
      confidence: null,
      signal: position.side,
      lastDecisionAt: null,
      decisionStatus: null,
    };
  });
}

type OpenPositionOptions = {
  fallbackToSimulator?: boolean;
};

export async function getOpenPositions(
  apiKey: string,
  accountIndex: string,
  accountId?: string,
  options?: OpenPositionOptions,
): Promise<OpenPositionSummary[]> {
  const fallbackToSimulator = options?.fallbackToSimulator ?? false;

  if (IS_SIMULATION_ENABLED) {
    return buildSimulatorPositions(accountId);
  }

  if (!apiKey || apiKey.trim().length === 0) {
    if (fallbackToSimulator) {
      console.warn(`[openPositions] Missing API key for account ${accountIndex}; using simulator fallback.`);
      return buildSimulatorPositions(accountId);
    }
    throw new Error(`Missing API key for account index ${accountIndex}`);
  }

  const accountApi = new AccountApi({
    baseServer: new ServerConfiguration<{ }>(BASE_URL, { }),
    httpApi: new IsomorphicFetchHttpLibrary(),
    middleware: [],
    authMethods: {
      apiKey: new ApiKeyAuthentication(apiKey),
    },
  });

  try {
    const currentOpenOrders = await accountApi.accountWithHttpInfo("index", accountIndex);
    const positions = currentOpenOrders.data.accounts[0]?.positions ?? [];

    return positions.map((accountPosition) => {
      const quantity = toNumber(accountPosition.position) ?? 0;
      const entryPrice = toNumber(accountPosition.avgEntryPrice);
      const positionValue = toNumber(accountPosition.positionValue);
      const markPrice =
        positionValue != null && quantity !== 0
          ? positionValue / Math.abs(quantity)
          : toNumber(accountPosition.avgEntryPrice);

      return {
        symbol: accountPosition.symbol,
        position: accountPosition.position,
        quantity,
        sign: accountPosition.sign === 1 ? "LONG" : "SHORT",
        unrealizedPnl: accountPosition.unrealizedPnl,
        realizedPnl: accountPosition.realizedPnl,
        liquidationPrice: accountPosition.liquidationPrice,
        leverage: undefined,
        notional: accountPosition.positionValue,
        entryPrice,
        markPrice,
        exitPlan: null,
        confidence: null,
        signal: accountPosition.sign === 1 ? "LONG" : "SHORT",
        lastDecisionAt: null,
        decisionStatus: null,
      };
    });
  } catch (error) {
    if (fallbackToSimulator) {
      console.warn(
        `[openPositions] Failed to load live positions for account ${accountIndex}, using simulator fallback`,
        error instanceof Error ? error.message : error,
      );
      return buildSimulatorPositions(accountId);
    }
    throw error;
  }
}
