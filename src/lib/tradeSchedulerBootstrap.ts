import { ensureTradeScheduler } from "@/lib/tradeExecutor";
import { ensurePortfolioScheduler } from "@/lib/priceTracker";
import { DEFAULT_SIMULATOR_OPTIONS, IS_SIMULATION_ENABLED } from "@/lib/config";
import { ExchangeSimulator } from "@/lib/simulator/exchangeSimulator";

declare global {
  // eslint-disable-next-line no-var
  var __autonomeSchedulersStarted: boolean | undefined;
}

const isBuildPhase =
  typeof process !== "undefined" && process.env.NEXT_PHASE === "phase-production-build";

// Only run on the Node.js runtime after boot (skip static prerender builds)
if (typeof window === "undefined" && !isBuildPhase) {
  const firstBootstrap = !globalThis.__autonomeSchedulersStarted;
  if (firstBootstrap) {
    globalThis.__autonomeSchedulersStarted = true;
    console.log("🚀 Server-side bootstrap: initializing schedulers...");
  }
  if (IS_SIMULATION_ENABLED) {
    void ExchangeSimulator.bootstrap(DEFAULT_SIMULATOR_OPTIONS);
  }
  ensurePortfolioScheduler();
  ensureTradeScheduler();
  if (firstBootstrap) {
    console.log("✅ Schedulers initialized");
  }
}
