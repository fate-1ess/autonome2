import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { DATA_CACHE_TAGS, type DataCacheTag } from "@/lib/cache/tags";

const SECRET_HEADER = "x-internal-revalidate-secret";

function isValidTag(tag: string): tag is DataCacheTag {
  return Object.values(DATA_CACHE_TAGS).includes(tag as DataCacheTag);
}

export async function POST(req: NextRequest) {
  const secret = process.env.INTERNAL_REVALIDATE_SECRET;
  if (secret) {
    const provided = req.headers.get(SECRET_HEADER);
    if (provided !== secret) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const maybeTags =
    typeof body === "object" && body !== null && Array.isArray((body as { tags?: unknown }).tags)
      ? ((body as { tags: unknown[] }).tags ?? [])
      : [];

  const uniqueTags = Array.from(new Set(maybeTags.map(String)));
  const validTags = uniqueTags.filter(isValidTag);
  const ignored = uniqueTags.filter((tag) => !isValidTag(tag));

  if (validTags.length === 0) {
    return NextResponse.json({ revalidated: [], ignored }, { status: 400 });
  }

  for (const tag of validTags) {
    await revalidateTag(tag, "max");
  }

  return NextResponse.json({ revalidated: validTags, ignored });
}
