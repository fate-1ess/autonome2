import { IsomorphicFetchHttpLibrary, OrderApi, ServerConfiguration } from "../../../lighter-sdk-ts/generated";
import { MARKETS } from "../markets";
import { BASE_URL } from "../config";
import { AccountState } from "./accountState";
import { MarketState } from "./market";
import { matchOrder, RandomSource } from "./orderMatching";
import {
  AccountSnapshot,
  ExchangeSimulatorOptions,
  MarketMetadata,
  MarketEvent,
  OrderSide,
  PositionSummary,
  SimulatedOrderRequest,
  SimulatedOrderResult,
} from "./types";

const DEFAULT_OPTIONS: ExchangeSimulatorOptions = {
  initialCapital: 100_000,
  quoteCurrency: "USDT",
  latency: { minMs: 100, maxMs: 450 },
  slippage: { maxBasisPoints: 12 },
  fees: { makerBps: 2, takerBps: 5 },
  refreshIntervalMs: 3_000,
};

type SimulatorEventType = MarketEvent["type"];

class SimpleEmitter {
  private readonly listeners = new Map<SimulatorEventType, Set<(event: MarketEvent) => void>>();

  on(event: SimulatorEventType, listener: (event: MarketEvent) => void) {
    const listeners = this.listeners.get(event) ?? new Set();
    listeners.add(listener);
    this.listeners.set(event, listeners);
  }

  off(event: SimulatorEventType, listener: (event: MarketEvent) => void) {
    const listeners = this.listeners.get(event);
    listeners?.delete(listener);
    if (listeners && listeners.size === 0) {
      this.listeners.delete(event);
    }
  }

  emit(event: SimulatorEventType, payload: MarketEvent) {
    const listeners = this.listeners.get(event);
    if (!listeners) return;
    for (const listener of listeners) {
      listener(payload);
    }
  }
}

class LinearCongruential implements RandomSource {
  private state: number;

  constructor(seed: number) {
    this.state = seed % 2147483647;
    if (this.state <= 0) {
      this.state += 2147483646;
    }
  }

  next(): number {
    this.state = (this.state * 48271) % 2147483647;
    return this.state / 2147483647;
  }
}

class MathRandomSource implements RandomSource {
  next(): number {
    return Math.random();
  }
}

function buildMarketMetadata(): MarketMetadata[] {
  return Object.entries(MARKETS).map(([symbol, config]) => ({
    symbol,
    marketId: config.marketId,
    priceDecimals: config.priceDecimals,
    qtyDecimals: config.qtyDecimals,
    clientOrderIndex: config.clientOrderIndex,
  }));
}

function normalizeSymbol(symbol: string): string {
  if (!symbol) return symbol;
  const upper = symbol.toUpperCase();
  if (upper.endsWith("USDT")) {
    return upper.replace("USDT", "");
  }
  return upper;
}

declare global {
  // eslint-disable-next-line no-var
  var __exchangeSimulator: Promise<ExchangeSimulator> | undefined;
}

export class ExchangeSimulator {
  static async bootstrap(options?: Partial<ExchangeSimulatorOptions>): Promise<ExchangeSimulator> {
    if (!globalThis.__exchangeSimulator) {
      globalThis.__exchangeSimulator = ExchangeSimulator.create(options);
    }
    return globalThis.__exchangeSimulator;
  }

  private static async create(options?: Partial<ExchangeSimulatorOptions>): Promise<ExchangeSimulator> {
    const merged: ExchangeSimulatorOptions = { ...DEFAULT_OPTIONS, ...options };
    const simulator = new ExchangeSimulator(merged);
    await simulator.initialise();
    return simulator;
  }

  private readonly options: ExchangeSimulatorOptions;
  private readonly accounts = new Map<string, AccountState>();
  private readonly markets = new Map<string, MarketState>();
  private readonly emitter = new SimpleEmitter();
  private readonly rng: RandomSource;
  private readonly orderApi: OrderApi;
  private refreshHandle?: NodeJS.Timeout;

  private constructor(options: ExchangeSimulatorOptions) {
    this.options = options;
    this.rng = typeof options.deterministicSeed === "number" ? new LinearCongruential(options.deterministicSeed) : new MathRandomSource();

    const server = new ServerConfiguration<{ }>(BASE_URL, { });
    const http = new IsomorphicFetchHttpLibrary();
    this.orderApi = new OrderApi({ baseServer: server, httpApi: http, middleware: [], authMethods: {} });
  }

  private getOrCreateAccount(accountId: string): AccountState {
    let account = this.accounts.get(accountId);
    if (!account) {
      account = new AccountState(this.options);
      this.accounts.set(accountId, account);
    }
    return account;
  }

  private emitAccountSnapshot(accountId: string) {
    const account = this.accounts.get(accountId);
    if (!account) {
      return;
    }

    this.emitter.emit(
      "account",
      { type: "account", payload: { accountId, snapshot: account.getSnapshot() } } as MarketEvent,
    );
  }

  private async initialise() {
    for (const metadata of buildMarketMetadata()) {
      const market = new MarketState(metadata, this.orderApi);
      await market.refresh();
      this.markets.set(metadata.symbol, market);
      this.emitter.emit("book", { type: "book", payload: market.getSnapshot() } as MarketEvent);
    }

    this.startPolling();
  }

  private startPolling() {
    if (this.refreshHandle) return;
    this.refreshHandle = setInterval(() => {
      void this.refreshAll();
    }, this.options.refreshIntervalMs);
  }

  private async refreshAll() {
    for (const [symbol, market] of this.markets) {
      try {
        const snapshot = await market.refresh();
        for (const account of this.accounts.values()) {
          account.updateMarkPrice(symbol, snapshot.midPrice);
        }
        this.emitter.emit("book", { type: "book", payload: snapshot } as MarketEvent);
      } catch (error) {
        console.error(`[Simulator] Failed to refresh market ${symbol}`, error);
      }
    }
    for (const accountId of this.accounts.keys()) {
      this.emitAccountSnapshot(accountId);
    }
  }

  on(event: SimulatorEventType, listener: (event: MarketEvent) => void) {
    this.emitter.on(event, listener);
  }

  off(event: SimulatorEventType, listener: (event: MarketEvent) => void) {
    this.emitter.off(event, listener);
  }

  getAccountSnapshot(accountId: string): AccountSnapshot {
    return this.getOrCreateAccount(accountId).getSnapshot();
  }

  getOpenPositions(accountId: string): PositionSummary[] {
    return this.getOrCreateAccount(accountId).getOpenPositions();
  }

  getOrderBook(symbol: string) {
    const normalized = normalizeSymbol(symbol);
    const market = this.markets.get(normalized);
    if (!market) {
      throw new Error(`Unknown market: ${symbol}`);
    }
    return market.getSnapshot();
  }

  async placeOrder(request: SimulatedOrderRequest, accountId: string): Promise<SimulatedOrderResult> {
    const symbol = normalizeSymbol(request.symbol);
    const market = this.markets.get(symbol);
    if (!market) {
      return { ...this.rejected("unknown symbol"), symbol, side: request.side, type: request.type };
    }

    const book = market.getSnapshot();
    const execution = matchOrder(book, request, this.options, this.rng);
    const account = this.getOrCreateAccount(accountId);

    if (execution.status === "rejected" || execution.totalQuantity === 0) {
      return { ...execution, symbol, side: request.side, type: request.type };
    }

    if (!account.hasSufficientCash(request.side, execution)) {
      return {
        fills: [],
        averagePrice: 0,
        totalQuantity: 0,
        totalFees: 0,
        status: "rejected",
        reason: "insufficient available cash",
        symbol,
        side: request.side,
        type: request.type,
      };
    }

    account.applyExecution(symbol, request.side, execution);
    account.updateMarkPrice(symbol, market.getMidPrice());

    const result: SimulatedOrderResult = { ...execution, symbol, side: request.side, type: request.type };

    this.emitter.emit(
      "trade",
      {
        type: "trade",
        payload: { accountId, symbol, result, timestamp: Date.now() },
      } as MarketEvent,
    );
    this.emitAccountSnapshot(accountId);

    return result;
  }

  async closePositions(symbols: string[], accountId: string): Promise<Record<string, SimulatedOrderResult>> {
    const outcomes: Record<string, SimulatedOrderResult> = {};

    for (const symbolRaw of symbols) {
      const symbol = normalizeSymbol(symbolRaw);
      const position = this.getOpenPositions(accountId).find((pos) => normalizeSymbol(pos.symbol) === symbol);
      if (!position || position.quantity === 0) {
        outcomes[symbolRaw] = { ...this.rejected("no open position"), symbol, side: "sell", type: "market" };
        continue;
      }

      const side: OrderSide = position.side === "LONG" ? "sell" : "buy";
      const quantity = position.quantity;
      const result = await this.placeOrder({ symbol, side, quantity, type: "market" }, accountId);
      outcomes[symbolRaw] = result;
    }

    return outcomes;
  }

  private rejected(reason: string): SimulatedOrderResult {
    return {
      fills: [],
      averagePrice: 0,
      totalQuantity: 0,
      totalFees: 0,
      status: "rejected",
      reason,
      symbol: "",
      side: "buy",
      type: "market",
    };
  }
}
