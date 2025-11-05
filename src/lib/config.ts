import type { ExchangeSimulatorOptions, TradingMode } from "./simulator/types";

export const API_KEY_INDEX = Number(process.env.LIGHTER_API_KEY_INDEX ?? 2);
export const BASE_URL = process.env.LIGHTER_BASE_URL ?? "https://mainnet.zklighter.elliot.ai";

export const TRADING_MODE: TradingMode = (process.env.TRADING_MODE as TradingMode | undefined) ?? "live";

export const DEFAULT_SIMULATOR_OPTIONS: ExchangeSimulatorOptions = {
	initialCapital: Number(process.env.SIM_INITIAL_CAPITAL ?? 10_000),
	quoteCurrency: process.env.SIM_QUOTE_CURRENCY ?? "USDT",
	latency: {
		minMs: Number(process.env.SIM_MIN_LATENCY_MS ?? 40),
		maxMs: Number(process.env.SIM_MAX_LATENCY_MS ?? 250),
	},
	slippage: {
		maxBasisPoints: Number(process.env.SIM_MAX_SLIPPAGE_BPS ?? 10),
	},
	fees: {
		makerBps: Number(process.env.SIM_MAKER_FEE_BPS ?? 2),
		takerBps: Number(process.env.SIM_TAKER_FEE_BPS ?? 5),
	},
	deterministicSeed: process.env.SIM_DETERMINISTIC_SEED ? Number(process.env.SIM_DETERMINISTIC_SEED) : undefined,
	refreshIntervalMs: Number(process.env.SIM_REFRESH_INTERVAL_MS ?? 3_000),
};

export const IS_SIMULATION_ENABLED = TRADING_MODE === "simulated";