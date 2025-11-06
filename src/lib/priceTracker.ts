import { revalidateDataTags, DATA_CACHE_TAGS } from "@/lib/cache/tags";
import { getPortfolio } from "./getPortfolio";
import { prisma } from "@server/db/prisma";

const PORTFOLIO_INTERVAL_MS = 1000 * 60 * 5;

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
  console.log('[Portfolio Tracker] Recording portfolios...');
  const models = await prisma.models.findMany();
  console.log(`[Portfolio Tracker] Found ${models.length} models`);

  let recordedAny = false;
  for (const model of models) {
    try {
      const portfolio = await getPortfolio({
        apiKey: model.lighterApiKey,
        modelName: model.openRoutermodelName,
        name: model.name,
        invocationCount: model.invocationCount,
        id: model.id,
        accountIndex: model.accountIndex,
        totalMinutes: model.totalMinutes,
      });

      // Only save if we got valid portfolio data
      if (portfolio && portfolio.total && !isNaN(parseFloat(portfolio.total))) {
        await prisma.portfolioSize.create({
          data: {
            modelId: model.id,
            netPortfolio: portfolio.total,
          },
        });
        recordedAny = true;
        console.log(`[Portfolio Tracker] ✓ Recorded ${model.name}: $${portfolio.total}`);
      } else {
        console.warn(`[Portfolio Tracker] Invalid portfolio data for ${model.name}:`, portfolio);
      }
    } catch (error) {
      console.error(`[Portfolio Tracker] Error recording portfolio for ${model.name}:`, error);
    }
  }

  if (recordedAny) {
    await revalidateDataTags(DATA_CACHE_TAGS.PORTFOLIO_HISTORY);
  }
}
