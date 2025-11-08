import { cacheLife, cacheTag } from "next/cache";
import { NextResponse } from "next/server";
import { parseTradingToolCallMetadata } from "@/server/features/trading/tradingDecisions";
import { prisma } from "@server/db/prisma";
import { safeJsonParse } from "@/shared/utils/json";
import { DATA_CACHE_TAGS } from "@/server/cache/dataTags";

async function loadInvocations() {
  'use cache';
  cacheTag(DATA_CACHE_TAGS.INVOCATIONS);
  cacheLife({ stale: 30, revalidate: 60, expire: 300 });

  const invocations = await prisma.invocations.findMany({
      include: {
        model: true,
        toolCalls: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 100,
    });

  const conversations = invocations.map((invocation) => ({
    id: invocation.id,
    modelId: invocation.model.id,
    modelName: invocation.model.name,
    modelLogo: invocation.model.openRoutermodelName,
    response: invocation.response,
    responsePayload: invocation.responsePayload,
    timestamp: invocation.createdAt.toISOString(),
    toolCalls: invocation.toolCalls.map((tc) => {
      const raw = safeJsonParse(tc.metadata, {});
      const parsed = parseTradingToolCallMetadata(raw);
      return {
        id: tc.id,
        type: tc.toolCallType,
        metadata: {
          raw,
          decisions: parsed.decisions,
          results: parsed.results,
        },
        timestamp: tc.createdAt.toISOString(),
      };
    }),
  }));

  return conversations;
}

export async function GET() {
  try {
    const conversations = await loadInvocations();
    return NextResponse.json({ conversations });
  } catch (error) {
    console.error("Error fetching invocations:", error);
    return NextResponse.json(
      { error: "Failed to fetch invocations" },
      { status: 500 },
    );
  }
}
