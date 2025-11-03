import { NextResponse } from "next/server";
import { ensureTradeScheduler } from "@/lib/tradeExecutor";
import { ensurePortfolioScheduler } from "@/lib/priceTracker";

// Initialize schedulers when this route is first hit
let initialized = false;

export async function GET() {
  if (!initialized) {
    console.log("🚀 Initializing schedulers...");
    ensurePortfolioScheduler();
    ensureTradeScheduler();
    initialized = true;
    console.log("✅ Schedulers initialized");
  }
  
  return NextResponse.json({ 
    status: "ok", 
    message: initialized ? "Schedulers already running" : "Schedulers started",
    tradeInterval: globalThis.tradeIntervalHandle ? "running" : "not running",
  });
}
