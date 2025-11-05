import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { MODEL_INFO } from "@/lib/modelConfig";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const models = await prisma.models.findMany({
      select: { id: true, name: true },
      orderBy: { name: "asc" },
    });

    return NextResponse.json({
      models: models.map((model) => ({
        id: model.id,
        name: model.name,
      })),
    });
  } catch (error) {
    console.error("Failed to fetch models", error);
    // Fallback: return built-in models so the UI can still render when DB is down
    const fallback = Object.entries(MODEL_INFO).map(([id, info]) => ({ id, name: info.label || id }));
    return NextResponse.json({ models: fallback }, { status: 200 });
  }
}
