import { NextResponse } from "next/server";
import { ensureTradeScheduler } from "@/lib/tradeExecutor";
import { ensurePortfolioScheduler } from "@/lib/priceTracker";

declare global {
  // eslint-disable-next-line no-var
  var __schedulersInitialized: boolean | undefined;
}

export async function GET() {
  const isBuildPhase =
    typeof process !== "undefined" && process.env.NEXT_PHASE === "phase-production-build";

  if (isBuildPhase) {
    return NextResponse.json({
      status: "skipped",
      message: "Schedulers are not started during the production build phase",
    });
  }

  const alreadyRunning = globalThis.__schedulersInitialized === true;

  if (!alreadyRunning) {
    console.log("🚀 Initializing schedulers...");
    ensurePortfolioScheduler();
    ensureTradeScheduler();
    globalThis.__schedulersInitialized = true;
    console.log("✅ Schedulers initialized");
  }

  return NextResponse.json({
    status: "ok",
    message: alreadyRunning ? "Schedulers already running" : "Schedulers started",
    tradeInterval: globalThis.tradeIntervalHandle ? "running" : "not running",
    portfolioInterval: globalThis.portfolioIntervalHandle ? "running" : "not running",
  });
}
