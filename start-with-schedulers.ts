#!/usr/bin/env bun

// Start the schedulers in the background
import { ensureTradeScheduler } from "./src/lib/tradeExecutor";
import { ensurePortfolioScheduler } from "./src/lib/priceTracker";

console.log("🚀 Starting schedulers...");
ensurePortfolioScheduler();
ensureTradeScheduler();
console.log("✅ Schedulers running");

// Start Next.js server
import { spawn } from "child_process";

const nextProcess = spawn("bun", ["next", "start"], {
  stdio: "inherit",
  env: process.env,
});

nextProcess.on("exit", (code) => {
  console.log(`Next.js exited with code ${code}`);
  process.exit(code ?? 0);
});

// Handle graceful shutdown
process.on("SIGTERM", () => {
  console.log("Shutting down schedulers...");
  if (globalThis.tradeIntervalHandle) clearInterval(globalThis.tradeIntervalHandle);
  nextProcess.kill();
  process.exit(0);
});
