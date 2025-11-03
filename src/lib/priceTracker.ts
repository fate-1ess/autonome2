import { getPortfolio } from "./getPortfolio";
import { PrismaClient } from "../../generated/prisma/client";
const prisma = new PrismaClient();

const PORTFOLIO_INTERVAL_MS = 1000 * 60 * 2;

export function ensurePortfolioScheduler() {
  if (globalThis.portfolioIntervalHandle) {
    return;
  }

  void recordPortfolios();

  globalThis.portfolioIntervalHandle = setInterval(() => {
    void recordPortfolios();
  }, PORTFOLIO_INTERVAL_MS);
}

async function recordPortfolios() {
  const models = await prisma.models.findMany();

  for (const model of models) {
    const portfolio = await getPortfolio({
      apiKey: model.lighterApiKey,
      modelName: model.openRoutermodelName,
      name: model.name,
      invocationCount: model.invocationCount,
      id: model.id,
      accountIndex: model.accountIndex,
      totalMinutes: model.totalMinutes,
    });

    await prisma.portfolioSize.create({
      data: {
        modelId: model.id,
        netPortfolio: portfolio.total,
      },
    });
  }
}
