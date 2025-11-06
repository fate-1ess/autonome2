import { useEffect, useRef, useState } from "react";

type Options<T> = {
  interval: number;
  selector?: (raw: unknown) => T;
  immediate?: boolean;
  requestInit?: RequestInit;
  enabled?: boolean;
};

export function usePollingFetch<T = unknown>(
  url: string | null,
  { interval, selector, immediate = true, requestInit, enabled = true }: Options<T>,
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(Boolean(immediate));
  const [error, setError] = useState<Error | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (!url || !enabled) return;

    let cancelled = false;

    const run = async () => {
      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;
      if (immediate) setLoading(true);

      try {
        const response = await fetch(url, {
          cache: 'no-store',
          ...requestInit,
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const payload = await response.json();
        if (cancelled) return;

        const nextData = selector ? selector(payload) : (payload as T);
        setData(nextData);
        setError(null);
      } catch (err) {
        if (cancelled) return;
        const error = err instanceof Error ? err : new Error(String(err));
        if (error.name === "AbortError") return;
        setError(error);
      } finally {
        if (!cancelled && immediate) setLoading(false);
      }
    };

    run();
    const timer = setInterval(run, interval);

    return () => {
      cancelled = true;
      abortRef.current?.abort();
      clearInterval(timer);
    };
  }, [url, interval, selector, immediate, requestInit, enabled]);

  return {
    data,
    loading: loading && data == null,
    error,
  } as const;
}
