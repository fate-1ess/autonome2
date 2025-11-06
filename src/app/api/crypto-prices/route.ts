import { NextResponse } from "next/server";
import { CandlestickApi, IsomorphicFetchHttpLibrary, ServerConfiguration } from "../../../../lighter-sdk-ts/generated";
import { BASE_URL, DEFAULT_SIMULATOR_OPTIONS, IS_SIMULATION_ENABLED } from "@/lib/config";
import { MARKETS } from "@/lib/markets";
import { ExchangeSimulator } from "@/lib/simulator/exchangeSimulator";
import { normalizeNumber, parseSymbols } from "@/lib/formatters";

const candlestickApi = new CandlestickApi({
  baseServer: new ServerConfiguration<{ }>(BASE_URL, { }),
  httpApi: new IsomorphicFetchHttpLibrary(),
  middleware: [],
  authMethods: {},
});


export async function GET(request: Request) {
  const url = new URL(request.url);
  const symbols = parseSymbols(url.searchParams.get("symbols"));

  try {
    const prices = await getCachedPrices(symbols);

    return NextResponse.json({ prices });
  } catch (error) {
    console.error("[crypto-prices] Failed to load prices", error);
    return NextResponse.json({ error: "Failed to load prices", prices: [] }, { status: 500 });
  }
}

async function getCachedPrices(symbols: string[]) {
  const normalizedSymbols = symbols.map((symbol) => symbol.toUpperCase());
  if (IS_SIMULATION_ENABLED) {
    return getSimulatedPrices(normalizedSymbols);
  }

  try {
    const livePrices = await getLighterPrices(normalizedSymbols);
    const hasLivePrices = livePrices.some((entry) => entry.price != null);
    if (hasLivePrices) {
      return livePrices;
    }
    console.warn(
      `[crypto-prices] Live price feed returned no data for ${normalizedSymbols.join(",")}, falling back to simulator`,
    );
  } catch (error) {
    console.warn(
      `[crypto-prices] Live price fetch failed, falling back to simulator`,
      error instanceof Error ? error.message : error,
    );
  }

  return getSimulatedPrices(normalizedSymbols);
}

async function getLighterPrices(symbols: string[]) {
  const now = Date.now();
  const results = await Promise.all(
    symbols.map(async (symbol) => {
      const market = MARKETS[symbol as keyof typeof MARKETS];
      if (!market) {
        return { symbol, price: null };
      }

      try {
        const candles = await candlestickApi.candlesticks(
          market.marketId,
          "1m",
          now - 1000 * 60 * 15,
          now,
          1,
          false,
        );
        const last = candles.candlesticks?.[candles.candlesticks.length - 1];
        const price = normalizeNumber(last?.close);
        return { symbol, price };
      } catch (error) {
        console.warn(`[crypto-prices] Failed to fetch market ${symbol}`, error instanceof Error ? error.message : error);
        return { symbol, price: null };
      }
    }),
  );

  return results;
}

async function getSimulatedPrices(symbols: string[]) {
  const simulator = await ExchangeSimulator.bootstrap(DEFAULT_SIMULATOR_OPTIONS);
  return symbols.map((symbol) => {
    try {
      const snapshot = simulator.getOrderBook(symbol);
      const price = typeof snapshot?.midPrice === "number" && Number.isFinite(snapshot.midPrice)
        ? snapshot.midPrice
        : null;
      return { symbol, price };
    } catch (error) {
      console.warn(`[crypto-prices] Simulator missing market ${symbol}`, error instanceof Error ? error.message : error);
      return { symbol, price: null };
    }
  });
}
