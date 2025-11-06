import { cacheLife, cacheTag } from "next/cache";
import { NextResponse } from "next/server";
import { MODEL_INFO } from "@/lib/modelConfig";
import { prisma } from "@server/db/prisma";
import { DATA_CACHE_TAGS } from "@/lib/cache/tags";

async function loadModels() {
  'use cache';
  cacheTag(DATA_CACHE_TAGS.MODELS);
  cacheLife("hours");

  const models = await prisma.models.findMany({
    select: { id: true, name: true },
    orderBy: { name: "asc" },
  });

  return models.map((model) => ({
    id: model.id,
    name: model.name,
  }));
}

export async function GET() {
  try {
    const models = await loadModels();
    return NextResponse.json({ models });
  } catch (error) {
    console.error("Failed to fetch models", error);
    // Fallback: return built-in models so the UI can still render when DB is down
    const fallback = Object.entries(MODEL_INFO).map(([id, info]) => ({
      id,
      name: info.label || id,
    }));
    return NextResponse.json(
      { models: fallback, warning: "Prisma unavailable" },
      { status: 200 },
    );
  }
}
