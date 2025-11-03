import { ensureTradeScheduler } from "@/lib/tradeExecutor";
import { ensurePortfolioScheduler } from "@/lib/priceTracker";

// Only run on server side
if (typeof window === "undefined") {
  console.log("🚀 Server-side bootstrap: initializing schedulers...");
  ensurePortfolioScheduler();
  ensureTradeScheduler();
  console.log("✅ Schedulers initialized");
}
