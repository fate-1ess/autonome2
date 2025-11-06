import { revalidateTag } from "next/cache";

export const DATA_CACHE_TAGS = {
  MODELS: "models",
  INVOCATIONS: "invocations",
  POSITIONS: "positions",
  TRADES: "trades",
  PORTFOLIO_HISTORY: "portfolio-history",
  CRYPTO_PRICES: "crypto-prices",
} as const;

export type DataCacheTag = (typeof DATA_CACHE_TAGS)[keyof typeof DATA_CACHE_TAGS];

export async function revalidateDataTags(...tags: DataCacheTag[]) {
  const unique = Array.from(new Set(tags));
  if (unique.length === 0) {
    return;
  }

  for (const tag of unique) {
    await revalidateTag(tag, "max");
  }
}
