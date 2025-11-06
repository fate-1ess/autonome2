import { DEFAULT_SIMULATOR_OPTIONS, IS_SIMULATION_ENABLED } from "@server/config/env";
import { ExchangeSimulator } from "@/server/features/simulator/exchangeSimulator";
import { ensurePortfolioScheduler } from "@server/features/portfolio/priceTracker";
import { ensureTradeScheduler } from "@server/features/trading/tradeExecutor";

if (typeof window === "undefined") {
  console.log("🚀 Server-side bootstrap: initializing schedulers...");
  if (IS_SIMULATION_ENABLED) {
    void ExchangeSimulator.bootstrap(DEFAULT_SIMULATOR_OPTIONS);
  }
  ensurePortfolioScheduler();
  ensureTradeScheduler();
  console.log("✅ Schedulers initialized");
}
