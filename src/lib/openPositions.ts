import { AccountApi, ApiKeyAuthentication, IsomorphicFetchHttpLibrary, ServerConfiguration } from "../../lighter-sdk-ts/generated";
import { BASE_URL, DEFAULT_SIMULATOR_OPTIONS, IS_SIMULATION_ENABLED } from "./config";
import { ExchangeSimulator } from "./simulator/exchangeSimulator";

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
  exitPlan?: string | null;
}

const toNumber = (value: unknown): number | null => {
  if (typeof value === "number") return Number.isFinite(value) ? value : null;
  if (typeof value === "string") {
    const parsed = Number.parseFloat(value);
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
};

export async function getOpenPositions(
  apiKey: string,
  accountIndex: string,
  accountId?: string,
): Promise<OpenPositionSummary[]> {
  if (IS_SIMULATION_ENABLED) {
    const simulator = await ExchangeSimulator.bootstrap(DEFAULT_SIMULATOR_OPTIONS);
    const simulatorAccountId = accountId && accountId.length > 0 ? accountId : "default";
    const accountSnapshot = simulator.getAccountSnapshot(simulatorAccountId);
    const availableCapital = accountSnapshot.availableCash ?? Math.max(accountSnapshot.cashBalance, 0);

    return simulator.getOpenPositions(simulatorAccountId).map((position) => {
      const quantity = position.quantity;
      const entryPrice = position.avgEntryPrice ?? null;
      const notionalEntry =
        entryPrice != null ? entryPrice * Math.abs(quantity) : position.markPrice != null ? position.markPrice * Math.abs(quantity) : null;
      const leverage =
        availableCapital > 0 && notionalEntry != null ? Math.min(10, notionalEntry / availableCapital) : undefined;

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
      };
    });
  }

  const accountApi = new AccountApi({
    baseServer: new ServerConfiguration<{  }>(BASE_URL, {  }),
    httpApi: new IsomorphicFetchHttpLibrary(),
    middleware: [],
    authMethods: {
      apiKey: new ApiKeyAuthentication(apiKey),
    },
  });

  const currentOpenOrders = await accountApi.accountWithHttpInfo("index", accountIndex);
  const positions = currentOpenOrders.data.accounts[0]?.positions ?? [];

  return positions.map((accountPosition) => {
    const quantity = toNumber(accountPosition.position) ?? 0;
    const entryPrice = toNumber(accountPosition.avgEntryPrice);
    const positionValue = toNumber(accountPosition.positionValue);
    const markPrice =
      positionValue != null && quantity !== 0 ? positionValue / Math.abs(quantity) : toNumber(accountPosition.avgEntryPrice);

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
    };
  });
}
