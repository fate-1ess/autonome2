import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getOpenPositions } from "@/lib/openPositions";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const models = await prisma.models.findMany();
    
    const allPositions = await Promise.all(
      models.map(async (model) => {
        try {
          const positions = await getOpenPositions(model.lighterApiKey, model.accountIndex);
          return {
            modelId: model.id,
            modelName: model.name,
            modelLogo: model.openRoutermodelName,
            positions: positions || [],
          };
        } catch (error) {
          console.error(`Error fetching positions for ${model.name}:`, error);
          return {
            modelId: model.id,
            modelName: model.name,
            modelLogo: model.openRoutermodelName,
            positions: [],
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
