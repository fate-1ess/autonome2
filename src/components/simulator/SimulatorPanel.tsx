"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import useSimStream, { MarketEvent } from "./useSimStream";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { ScrollArea } from "../ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const SYMBOLS = ["BTC", "ETH", "SOL"] as const;
const DEFAULT_ACCOUNT_ID = "demo";

type OrderBookLevel = {
  price: number;
  quantity: number;
};

type OrderBookSnapshot = {
  symbol: string;
  bids: OrderBookLevel[];
  asks: OrderBookLevel[];
  midPrice: number;
  spread: number;
  timestamp: number;
};

type AccountPosition = {
  symbol: string;
  side: "LONG" | "SHORT";
  quantity: number;
  avgEntryPrice: number;
  realizedPnl: number;
  unrealizedPnl: number;
  markPrice: number;
};

type AccountOption = {
  id: string;
  label: string;
};

type AccountSnapshot = {
  cashBalance: number;
  availableCash?: number;
  borrowedBalance?: number;
  equity: number;
  marginBalance: number;
  quoteCurrency: string;
  positions: AccountPosition[];
  totalRealizedPnl: number;
  totalUnrealizedPnl: number;
};

type EventLogEntry = {
  id: string;
  label: string;
  payload: unknown;
  timestamp: number;
};

const normalizeSymbol = (value: string) => value.toUpperCase().replace(/USDT$/i, "");

const numberFormatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function formatUsd(value: number | null | undefined) {
  if (value === undefined || value === null || !Number.isFinite(value)) {
    return "—";
  }
  return `$${numberFormatter.format(value)}`;
}

export default function SimulatorPanel() {
  const [accountId, setAccountId] = useState<string>(DEFAULT_ACCOUNT_ID);
  const [accountOptions, setAccountOptions] = useState<AccountOption[]>([
    { id: DEFAULT_ACCOUNT_ID, label: "Demo account" },
  ]);
  const [symbol, setSymbol] = useState<(typeof SYMBOLS)[number]>(SYMBOLS[0]);
  const [book, setBook] = useState<OrderBookSnapshot | null>(null);
  const [account, setAccount] = useState<AccountSnapshot | null>(null);
  const [events, setEvents] = useState<EventLogEntry[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const [orderSide, setOrderSide] = useState<"buy" | "sell">("buy");
  const [orderType, setOrderType] = useState<"market" | "limit">("market");
  const [orderSize, setOrderSize] = useState<string>("");
  const [orderPrice, setOrderPrice] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const normalizedSymbol = useMemo(() => normalizeSymbol(symbol), [symbol]);

  const pushError = useCallback((scope: string, message: string) => {
    setErrors((prev) => {
      const filtered = prev.filter((entry) => !entry.startsWith(`${scope}:`));
      return [`${scope}: ${message}`, ...filtered].slice(0, 6);
    });
  }, []);

  const clearError = useCallback((scope: string) => {
    setErrors((prev) => prev.filter((entry) => !entry.startsWith(`${scope}:`)));
  }, []);

  const fetchBook = useCallback(
    async (targetSymbol: string) => {
      try {
        const response = await fetch(
          `/api/sim/orderbook?symbol=${encodeURIComponent(targetSymbol)}`,
          { cache: "no-store" },
        );

        if (!response.ok) {
          const text = await response.text();
          throw new Error(text || `Request failed (${response.status})`);
        }

        const data = await response.json();
        const snapshot = data.orderBook as OrderBookSnapshot;
        setBook(snapshot);
        clearError("orderbook");
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        pushError("orderbook", message);
        setBook(null);
      }
    },
    [clearError, pushError],
  );

  const fetchAccount = useCallback(
    async (targetAccountId: string) => {
      try {
        const response = await fetch(
          `/api/sim/account?accountId=${encodeURIComponent(targetAccountId)}`,
          { cache: "no-store" },
        );

        if (!response.ok) {
          const text = await response.text();
          throw new Error(text || `Request failed (${response.status})`);
        }

        const data = await response.json();
        setAccount(data.account as AccountSnapshot);
        clearError("account");
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        pushError("account", message);
        setAccount(null);
      }
    },
    [clearError, pushError],
  );

  // Fetch orderbook on mount and when symbol changes
  useEffect(() => {
    void fetchBook(symbol);
  }, [fetchBook, symbol]);

  // Fetch account on mount and when accountId changes
  useEffect(() => {
    void fetchAccount(accountId);
  }, [accountId, fetchAccount]);

  // Auto-refresh orderbook every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      void fetchBook(symbol);
    }, 10_000);
    return () => clearInterval(interval);
  }, [symbol, fetchBook]);

  // Auto-refresh account every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      void fetchAccount(accountId);
    }, 10_000);
    return () => clearInterval(interval);
  }, [accountId, fetchAccount]);

  useEffect(() => {
    setEvents([]);
  }, [accountId]);

  useEffect(() => {
    let cancelled = false;

    const loadAccounts = async () => {
      try {
        const response = await fetch("/api/models", { cache: "no-store" });

        if (!response.ok) {
          const text = await response.text();
          throw new Error(text || `Request failed (${response.status})`);
        }

        const data = await response.json();
        if (cancelled) return;

        const fetched = Array.isArray(data.models)
          ? (data.models as Array<{ id: string; name?: string | null }>).
              map((model) => ({
                id: model.id,
                label: model.name && model.name.trim().length > 0 ? model.name : model.id,
              }))
          : [];

        const fallback = { id: DEFAULT_ACCOUNT_ID, label: "Demo account" };
        const options = fetched.length > 0 ? [...fetched] : [fallback];
        if (!options.some((option) => option.id === fallback.id)) {
          options.push(fallback);
        }

        setAccountOptions(options);
        clearError("models");

        setAccountId((previous) => {
          if (previous === DEFAULT_ACCOUNT_ID && fetched.length > 0) {
            return fetched[0]?.id ?? previous;
          }
          if (!options.some((option) => option.id === previous)) {
            return options[0]?.id ?? DEFAULT_ACCOUNT_ID;
          }
          return previous;
        });
      } catch (error) {
        if (cancelled) return;
        const message = error instanceof Error ? error.message : String(error);
        pushError("models", message);
        setAccountOptions((prev) => (prev.length > 0 ? prev : [{ id: DEFAULT_ACCOUNT_ID, label: "Demo account" }]));
      }
    };

    void loadAccounts();

    return () => {
      cancelled = true;
    };
  }, [clearError, pushError, setAccountId]);

  const appendEvent = useCallback((label: string, payload: unknown) => {
    setEvents((prev) => {
      const entry: EventLogEntry = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        label,
        payload,
        timestamp: Date.now(),
      };
      return [entry, ...prev].slice(0, 150);
    });
  }, []);

  const handleStreamEvent = useCallback(
    (event: MarketEvent) => {
      if (event.type === "book") {
        const snapshot = event.payload as OrderBookSnapshot;
        if (normalizeSymbol(snapshot.symbol) === normalizedSymbol) {
          setBook(snapshot);
        }
      }

      if (event.type === "account") {
        setAccount(event.payload.snapshot);
      }

      appendEvent(event.type, event.payload);
    },
    [appendEvent, normalizedSymbol],
  );

  const handleStreamError = useCallback(() => {
    pushError("stream", "unable to maintain realtime connection");
  }, [pushError]);

  useSimStream(handleStreamEvent, handleStreamError, { accountId });

  const handleSubmitOrder = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();
      const quantity = Number(orderSize);
      if (!Number.isFinite(quantity) || quantity <= 0) {
        pushError("order", "enter a valid size greater than zero");
        return;
      }

      const payload: Record<string, unknown> = {
        accountId,
        symbol,
        side: orderSide,
        type: orderType,
        quantity,
      };

      if (orderType === "limit") {
        const price = Number(orderPrice);
        if (!Number.isFinite(price) || price <= 0) {
          pushError("order", "limit orders require a positive price");
          return;
        }
        payload.limitPrice = price;
      }

      setIsSubmitting(true);
      try {
        const response = await fetch("/api/sim/order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const text = await response.text();
        const data = text ? JSON.parse(text) : {};

        if (!response.ok) {
          throw new Error(typeof data?.error === "string" ? data.error : text || "request failed");
        }

        appendEvent("order", data);
        clearError("order");
        if (response.ok) {
          await fetchAccount(accountId);
          await fetchBook(symbol);
        }
        if (orderType === "market") {
          setOrderPrice("");
        }
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        pushError("order", message);
      } finally {
        setIsSubmitting(false);
      }
    },
    [accountId, appendEvent, clearError, fetchAccount, fetchBook, orderPrice, orderSide, orderSize, orderType, pushError, symbol],
  );

  const topAsks = useMemo(() => (book?.asks ?? []).slice(0, 10), [book]);
  const topBids = useMemo(() => (book?.bids ?? []).slice(0, 10), [book]);

  const accountMetrics = useMemo(() => {
    if (!account) return [];

    const rawAvailable = account.availableCash ?? account.cashBalance;
    const available = Math.max(Math.min(rawAvailable ?? 0, account.equity ?? 0), 0);
    const borrowed = Math.max(account.borrowedBalance ?? Math.max(-account.cashBalance, 0), 0);

    const metrics = [
      { label: "Account Value", value: formatUsd(account.equity) },
      { label: "Available Cash", value: formatUsd(available) },
      { label: "Realized PnL", value: formatUsd(account.totalRealizedPnl) },
      { label: "Unrealized PnL", value: formatUsd(account.totalUnrealizedPnl) },
    ];

    if (borrowed > 0.005) {
      metrics.splice(2, 0, { label: "Margin Used", value: formatUsd(borrowed) });
    }

    return metrics;
  }, [account]);

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-1">
            <CardTitle className="text-xl font-semibold">Simulator Control Panel</CardTitle>
            <p className="text-muted-foreground text-sm">
              Interact with the simulated exchange and monitor account state in real time.
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:gap-4">
            <div>
              <Label htmlFor="account-id" className="text-xs uppercase tracking-wide">
                Account
              </Label>
              <Select value={accountId} onValueChange={setAccountId}>
                <SelectTrigger id="account-id" className="w-56">
                  <SelectValue placeholder="Select account" />
                </SelectTrigger>
                <SelectContent>
                  {accountOptions.map((option) => (
                    <SelectItem key={option.id} value={option.id}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        {accountMetrics.length > 0 && (
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {accountMetrics.map((metric) => (
                <div key={metric.label} className="rounded-lg border bg-muted/30 p-4">
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                  <p className="text-lg font-semibold">{metric.value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        )}
      </Card>

      <div className="grid gap-6 xl:grid-cols-[2fr_1fr]">
        <Card>
          <CardHeader className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle className="text-lg">Order Book · {symbol}</CardTitle>
              {book && (
                <p className="text-muted-foreground text-sm">
                  Spread: {numberFormatter.format(book.spread)} · Mid: {formatUsd(book.midPrice)}
                </p>
              )}
            </div>
            <Select value={symbol} onValueChange={(value) => setSymbol(value as (typeof SYMBOLS)[number])}>
              <SelectTrigger>
                <SelectValue placeholder="Symbol" />
              </SelectTrigger>
              <SelectContent>
                {SYMBOLS.map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardHeader>
          <CardContent>
            {book ? (
              <div className="grid gap-6 lg:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-sm font-semibold text-red-500">Asks</h3>
                  <div className="rounded-md border">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b text-xs uppercase text-muted-foreground">
                          <th className="p-2 text-left">Price</th>
                          <th className="p-2 text-right">Size</th>
                        </tr>
                      </thead>
                      <tbody>
                        {topAsks.map((level, index) => (
                          <tr key={`ask-${index}`} className="border-b last:border-b-0">
                            <td className="p-2 text-left text-red-500">{numberFormatter.format(level.price)}</td>
                            <td className="p-2 text-right">{level.quantity.toFixed(4)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-sm font-semibold text-emerald-500">Bids</h3>
                  <div className="rounded-md border">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b text-xs uppercase text-muted-foreground">
                          <th className="p-2 text-left">Price</th>
                          <th className="p-2 text-right">Size</th>
                        </tr>
                      </thead>
                      <tbody>
                        {topBids.map((level, index) => (
                          <tr key={`bid-${index}`} className="border-b last:border-b-0">
                            <td className="p-2 text-left text-emerald-500">{numberFormatter.format(level.price)}</td>
                            <td className="p-2 text-right">{level.quantity.toFixed(4)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-muted-foreground text-sm">Waiting for order book data…</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Submit Order</CardTitle>
            <p className="text-muted-foreground text-sm">
              Orders execute against the simulator using the selected account.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmitOrder} className="space-y-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Side</Label>
                  <Select value={orderSide} onValueChange={(value) => setOrderSide(value as "buy" | "sell")}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="buy">Buy</SelectItem>
                      <SelectItem value="sell">Sell</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Type</Label>
                  <Select value={orderType} onValueChange={(value) => setOrderType(value as "market" | "limit")}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="market">Market</SelectItem>
                      <SelectItem value="limit">Limit</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="order-size">Size</Label>
                <Input
                  id="order-size"
                  value={orderSize}
                  onChange={(event) => setOrderSize(event.target.value)}
                  placeholder="0.01"
                  inputMode="decimal"
                  required
                />
              </div>

              {orderType === "limit" && (
                <div className="space-y-2">
                  <Label htmlFor="order-price">Limit Price</Label>
                  <Input
                    id="order-price"
                    value={orderPrice}
                    onChange={(event) => setOrderPrice(event.target.value)}
                    placeholder="40000"
                    inputMode="decimal"
                  />
                </div>
              )}

              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? "Submitting…" : `Submit ${orderSide.toUpperCase()} ${orderType.toUpperCase()}`}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Open Positions</CardTitle>
          </CardHeader>
          <CardContent>
            {account && account.positions.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b text-xs uppercase text-muted-foreground">
                      <th className="p-2 text-left">Symbol</th>
                      <th className="p-2 text-left">Side</th>
                      <th className="p-2 text-right">Qty</th>
                      <th className="p-2 text-right">Entry</th>
                      <th className="p-2 text-right">Mark</th>
                      <th className="p-2 text-right">Realized</th>
                      <th className="p-2 text-right">Unrealized</th>
                    </tr>
                  </thead>
                  <tbody>
                    {account.positions.map((position) => (
                      <tr key={position.symbol} className="border-b last:border-b-0">
                        <td className="p-2 text-left">{position.symbol}</td>
                        <td className="p-2 text-left">{position.side}</td>
                        <td className="p-2 text-right">{position.quantity.toFixed(4)}</td>
                        <td className="p-2 text-right">{numberFormatter.format(position.avgEntryPrice)}</td>
                        <td className="p-2 text-right">{numberFormatter.format(position.markPrice)}</td>
                        <td className="p-2 text-right">{formatUsd(position.realizedPnl)}</td>
                        <td className={`p-2 text-right ${position.unrealizedPnl >= 0 ? "text-emerald-500" : "text-red-500"}`}>
                          {formatUsd(position.unrealizedPnl)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-muted-foreground text-sm">No open positions for this account.</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Activity Log</CardTitle>
            <p className="text-muted-foreground text-sm">Latest simulator events for the selected account.</p>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-64">
              <div className="space-y-3">
                {events.map((entry) => (
                  <div key={entry.id} className="rounded-lg border bg-muted/30 p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium uppercase text-muted-foreground">
                        {entry.label}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {new Date(entry.timestamp).toLocaleTimeString()}
                      </span>
                    </div>
                    <pre className="mt-2 text-xs leading-5">
                      {JSON.stringify(entry.payload, null, 2)}
                    </pre>
                  </div>
                ))}
                {events.length === 0 && (
                  <p className="text-muted-foreground text-sm">Events will appear here once activity starts.</p>
                )}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>

      {errors.length > 0 && (
        <Card className="border-destructive/60 bg-destructive/5">
          <CardHeader>
            <CardTitle className="text-lg text-destructive">Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              {errors.map((error) => (
                <li key={error} className="font-mono">
                  {error}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
