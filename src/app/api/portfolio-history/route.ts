import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Fetch portfolio size history with model information
    const portfolioData = await prisma.portfolioSize.findMany({
      include: {
        model: {
          select: {
            name: true,
            openRoutermodelName: true,
          },
        },
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    return NextResponse.json(portfolioData);
  } catch (error) {
    console.error("Failed to fetch portfolio history:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unknown error while fetching portfolio history",
      },
      { status: 500 }
    );
  }
}
