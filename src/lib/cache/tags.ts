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

  const tagsNeedingFallback: DataCacheTag[] = [];

  for (const tag of unique) {
    try {
      await revalidateTag(tag, "max");
    } catch (error) {
      if (isStaticGenerationStoreMissing(error)) {
        tagsNeedingFallback.push(...unique);
        break;
      }

      throw error;
    }
  }

  if (tagsNeedingFallback.length > 0) {
    await triggerInternalRevalidate(Array.from(new Set(tagsNeedingFallback)));
  }
}

function isStaticGenerationStoreMissing(error: unknown) {
  if (!(error instanceof Error)) {
    return false;
  }

  const message = error.message.toLowerCase();
  return message.includes("static generation store missing");
}

async function triggerInternalRevalidate(tags: DataCacheTag[]) {
  const endpoint = buildInternalRevalidateUrl();
  if (!endpoint) {
    console.warn(
      `[cache] Unable to determine revalidate endpoint for tags: ${tags.join(", ")}`,
    );
    return;
  }

  const headers: Record<string, string> = {
    "content-type": "application/json",
  };

  const secret = process.env.INTERNAL_REVALIDATE_SECRET ?? "";
  if (secret) {
    headers["x-internal-revalidate-secret"] = secret;
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers,
      cache: "no-store",
      body: JSON.stringify({ tags }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.warn(
        `[cache] Revalidate endpoint returned ${response.status} for tags ${tags.join(", ")}: ${detail}`,
      );
    }
  } catch (error) {
    console.warn(
      `[cache] Failed to reach revalidate endpoint for tags ${tags.join(", ")}`,
      error,
    );
  }
}

function buildInternalRevalidateUrl() {
  const base =
    process.env.INTERNAL_REVALIDATE_URL ??
    process.env.NEXT_PUBLIC_APP_URL ??
    inferLocalBaseUrl();

  if (!base) {
    return undefined;
  }

  const trimmed = base.endsWith("/") ? base.slice(0, -1) : base;
  return `${trimmed}/api/internal/revalidate`;
}

function inferLocalBaseUrl() {
  const port = process.env.PORT ?? "3000";
  return `http://127.0.0.1:${port}`;
}
