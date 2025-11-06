"use client";

import React, { useMemo, useRef } from "react";
import Image from "next/image";
import NumberFlow, { useCanAnimate } from "@number-flow/react";
import { cn } from "@/lib/utils";
import { usePollingFetch } from "@/hooks/usePollingFetch";
import { Skeleton } from "@/components/ui/skeleton";

const UPDATE_INTERVAL = 30_000;
const TRACKED_SYMBOLS = ["BTC", "ETH", "SOL"] as const;
const TRACKED_SYMBOL_SET = new Set<string>(TRACKED_SYMBOLS);

type CoinSymbol = (typeof TRACKED_SYMBOLS)[number];

type ApiPrice = {
  symbol?: string;
  price?: number | null;
};

type CryptoTicker = {
  symbol: CoinSymbol;
  price: number;
  diff: number;
};

type SanitizedPrice = {
  symbol: CoinSymbol;
  price: number;
};

const COIN_STYLES: Record<CoinSymbol, { badge: string; logo: string; decimals: number }> = {
  BTC: { badge: "BTC", logo: "/btc.svg", decimals: 2 },
  ETH: { badge: "ETH", logo: "/eth.svg", decimals: 2 },
  SOL: { badge: "SOL", logo: "/sol.svg", decimals: 3 },
};


export default function CryptoTracker() {
  const previousTickersRef = useRef<CryptoTicker[]>([]);
  const { data: sanitizedPrices, loading } = usePollingFetch<SanitizedPrice[]>(
    `/api/crypto-prices?symbols=${TRACKED_SYMBOLS.join(",")}`,
    { interval: UPDATE_INTERVAL, selector: sanitizePrices },
  );

  const displayCoins = useMemo(() => {
    const prices = sanitizedPrices ?? [];
    if (prices.length === 0) {
      return previousTickersRef.current;
    }

    const previous = previousTickersRef.current;
    const previousBySymbol = new Map(previous.map((entry) => [entry.symbol, entry]));
    const latestBySymbol = new Map(prices.map((entry) => [entry.symbol, entry.price]));

    const next: CryptoTicker[] = [];

    TRACKED_SYMBOLS.forEach((symbol) => {
      const currentPrice = latestBySymbol.get(symbol);
      const previousEntry = previousBySymbol.get(symbol);

      if (currentPrice == null) {
        if (previousEntry) {
          next.push(previousEntry);
        }
        return;
      }

      const prevPrice = previousEntry?.price;
      const diff = prevPrice && prevPrice > 0
        ? (currentPrice - prevPrice) / prevPrice
        : 0;

      next.push({ symbol, price: currentPrice, diff });
    });

    previousTickersRef.current = next;
    return next;
  }, [sanitizedPrices]);

  return (
    <div className="flex items-center gap-4 border-b py-[5px] px-6">
      {loading && displayCoins.length === 0 ? (
        <TickerSkeleton />
      ) : displayCoins.length === 0 ? (
        <p className="text-muted-foreground text-sm">Fetching market prices...</p>
      ) : (
        displayCoins.map((coin, index) => {
          const style = COIN_STYLES[coin.symbol];
          return (
            <React.Fragment key={coin.symbol}>
              <div className="flex flex-1 flex-col items-center">
                <div className="flex items-center space-x-2">
                  <Image src={`${style.logo}`} alt={`${coin.symbol} logo`} width={16} height={16} />
                  <p className="text-muted-foreground text-sm">{coin.symbol}</p>
                </div>
                <PriceWithDiff value={coin.price} diff={coin.diff} decimals={style.decimals} />
              </div>
              {index !== displayCoins.length - 1 && (
                <div className="h-10 w-px bg-border" />
              )}
            </React.Fragment>
          );
        })
      )}
    </div>
  );
}

function PriceWithDiff({
  value,
  diff,
  decimals,
}: {
  value: number;
  diff: number;
  decimals: number;
}) {

  return (
    <div className="flex items-center gap-2 pt-0.5">
      <NumberFlow
        value={value}
        className="font-mono text-sm font-semibold"
        format={{
          style: "currency",
          currency: "USD",
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        }}
      />
    </div>
  );
}

function sanitizePrices(payload: unknown): SanitizedPrice[] {
  const entries = Array.isArray((payload as { prices?: ApiPrice[] })?.prices)
    ? ((payload as { prices?: ApiPrice[] }).prices as ApiPrice[])
    : [];

  const sanitized = entries
    .map((entry) => {
      const symbol = typeof entry?.symbol === "string" ? entry.symbol.toUpperCase() : "";
      if (!TRACKED_SYMBOL_SET.has(symbol)) return null;
      const price = typeof entry?.price === "number" && Number.isFinite(entry.price)
        ? entry.price
        : null;
      if (price == null) return null;
      return { symbol: symbol as CoinSymbol, price } satisfies SanitizedPrice;
    })
    .filter((entry): entry is SanitizedPrice => Boolean(entry));

  sanitized.sort(
    (a, b) => TRACKED_SYMBOLS.indexOf(a.symbol) - TRACKED_SYMBOLS.indexOf(b.symbol),
  );

  return sanitized;
}

function TickerSkeleton() {
  return (
    <div className="flex w-full items-center gap-4">
      {TRACKED_SYMBOLS.map((symbol) => (
        <div key={symbol} className="flex flex-1 flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-14" />
            <Skeleton className="h-4 w-10" />
          </div>
          <Skeleton className="h-5 w-24" />
        </div>
      ))}
    </div>
  );
}
