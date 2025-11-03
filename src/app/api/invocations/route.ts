import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../generated/prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
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
      timestamp: invocation.createdAt,
      toolCalls: invocation.toolCalls.map((tc) => ({
        id: tc.id,
        type: tc.toolCallType,
        metadata: JSON.parse(tc.metadata),
        timestamp: tc.createdAt,
      })),
    }));

    return NextResponse.json({ conversations });
  } catch (error) {
    console.error("Error fetching invocations:", error);
    return NextResponse.json(
      { error: "Failed to fetch invocations" },
      { status: 500 }
    );
  }
}
