import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const toolCalls = await prisma.toolCalls.findMany({
      where: {
        toolCallType: "CLOSE_POSITION",
      },
      include: {
        invocation: {
          include: {
            model: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 400,
    });

    const trades = toolCalls.map((toolCall) => {
      const metadata = JSON.parse(toolCall.metadata);
      const symbols = metadata.symbols || [];
      const results = metadata.results || [];
      
      return {
        id: toolCall.id,
        model: toolCall.invocation.model.name,
        modelName: toolCall.invocation.model.openRoutermodelName,
        timestamp: toolCall.createdAt,
        symbols: symbols,
        results: results,
      };
    });

    return NextResponse.json({ trades });
  } catch (error) {
    console.error("Error fetching trades:", error);
    return NextResponse.json(
      { error: "Failed to fetch trades" },
      { status: 500 }
    );
  }
}
