import { ensureTradeScheduler } from "@/lib/tradeExecutor";
import { ensurePortfolioScheduler } from "@/lib/priceTracker";

ensurePortfolioScheduler();

ensureTradeScheduler();
