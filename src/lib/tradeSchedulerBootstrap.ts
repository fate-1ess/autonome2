import { ensureTradeScheduler } from "@/lib/tradeExecutor";
import { ensurePortfolioScheduler } from "@/lib/priceTracker";
import { DEFAULT_SIMULATOR_OPTIONS, IS_SIMULATION_ENABLED } from "@/lib/config";
import { ExchangeSimulator } from "@/lib/simulator/exchangeSimulator";

// Only run on server side
if (typeof window === "undefined") {
  console.log("🚀 Server-side bootstrap: initializing schedulers...");
  if (IS_SIMULATION_ENABLED) {
    void ExchangeSimulator.bootstrap(DEFAULT_SIMULATOR_OPTIONS);
  }
  ensurePortfolioScheduler();
  ensureTradeScheduler();
  console.log("✅ Schedulers initialized");
}
