import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getOpenPositions } from "@/lib/openPositions";
import { getPortfolio } from "@/lib/getPortfolio";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const models = await prisma.models.findMany();
    
    const allPositions = await Promise.all(
      models.map(async (model) => {
        try {
          const positions = await getOpenPositions(model.lighterApiKey, model.accountIndex, model.id);
          const portfolio = await getPortfolio({
            apiKey: model.lighterApiKey,
            accountIndex: model.accountIndex,
            id: model.id,
            modelName: model.openRoutermodelName,
            name: model.name,
            invocationCount: model.invocationCount,
            totalMinutes: model.totalMinutes,
          });
          
          // Calculate total unrealized PnL
          const totalUnrealizedPnl = positions.reduce((sum, p) => {
            return sum + parseFloat(p.unrealizedPnl || "0");
          }, 0);
          
          return {
            modelId: model.id,
            modelName: model.name,
            modelLogo: model.openRoutermodelName,
            positions: positions || [],
            totalUnrealizedPnl,
            availableCash: parseFloat(portfolio.available || "0"),
          };
        } catch (error) {
          console.error(`Error fetching positions for ${model.name}:`, error);
          return {
            modelId: model.id,
            modelName: model.name,
            modelLogo: model.openRoutermodelName,
            positions: [],
            totalUnrealizedPnl: 0,
            availableCash: 0,
          };
        }
      })
    );

    return NextResponse.json({ positions: allPositions });
  } catch (error) {
    console.error("Error fetching positions:", error);
    return NextResponse.json(
      { error: "Failed to fetch positions" },
      { status: 500 }
    );
  }
}
