"use client"
import { useEffect, useRef } from "react";

export type MarketEvent = {
  type: "book" | "trade" | "account";
  payload: any;
};

export default function useSimStream(
  onEvent: (ev: MarketEvent) => void,
  onError?: (err: Event) => void,
  options?: { accountId?: string }
) {
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const proto = window.location.protocol === "https:" ? "wss:" : "ws:";
    const base = `${proto}//${window.location.host}`;
    const query = options?.accountId ? `?accountId=${encodeURIComponent(options.accountId)}` : "";
    const url = `${base}/api/sim/stream${query}`;
    let cancelled = false;
    let retryHandle: ReturnType<typeof setTimeout> | null = null;

    const connect = () => {
      if (cancelled) return;

      const ws = new WebSocket(url);
      wsRef.current = ws;

      ws.addEventListener("message", (msg) => {
        try {
          const data = JSON.parse(msg.data);
          if (data && data.type) {
            onEvent(data as MarketEvent);
          }
        } catch (err) {
          // ignore malformed messages
        }
      });

      const notifyError = (event: Event) => {
        if (onError) {
          onError(event);
        }
      };

      ws.addEventListener("error", notifyError);
      ws.addEventListener("close", (event) => {
        notifyError(event);
        if (!cancelled) {
          retryHandle = setTimeout(connect, 1500);
        }
      });
    };

    connect();

    return () => {
      cancelled = true;
      if (retryHandle) {
        clearTimeout(retryHandle);
        retryHandle = null;
      }
      const existing = wsRef.current;
      if (existing) {
        try {
          existing.close();
        } catch (error) {
          // ignore
        }
      }
      wsRef.current = null;
    };
  }, [onEvent, onError, options?.accountId]);
}
