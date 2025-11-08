import { cacheLife, cacheTag } from "next/cache";
import { NextResponse } from "next/server";
import { prisma } from "@server/db/prisma"; 
import { DATA_CACHE_TAGS } from "@/server/cache/dataTags";

async function loadPortfolioHistory() {
  'use cache';
  cacheTag(DATA_CACHE_TAGS.PORTFOLIO_HISTORY);
  cacheLife({ stale: 60, revalidate: 120, expire: 600 });

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

  return portfolioData.map((entry) => ({
    ...entry,
    createdAt: entry.createdAt.toISOString(),
    updatedAt: entry.updatedAt.toISOString(),
  }));
}

export async function GET() {
  try {
    const portfolioHistory = await loadPortfolioHistory();
    return NextResponse.json(portfolioHistory);
  } catch (error) {
    console.error("Failed to fetch portfolio history:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unknown error while fetching portfolio history",
      },
      { status: 500 },
    );
  }
}
