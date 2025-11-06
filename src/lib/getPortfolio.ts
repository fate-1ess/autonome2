import { AccountApi, ApiKeyAuthentication, IsomorphicFetchHttpLibrary, ServerConfiguration } from "../../lighter-sdk-ts/generated";
import type { Account } from "./accounts";
import { BASE_URL, DEFAULT_SIMULATOR_OPTIONS, IS_SIMULATION_ENABLED } from "./config";
import { ExchangeSimulator } from "./simulator/exchangeSimulator";

export type PortfolioSnapshot = {
    totalValue: number;
    availableCash: number;
    total: string;
    available: string;
};

const normalizeNumber = (value: unknown): number | null => {
    if (typeof value === "number") {
        return Number.isFinite(value) ? value : null;
    }
    if (typeof value === "string" && value.trim().length > 0) {
        const parsed = Number.parseFloat(value);
        return Number.isFinite(parsed) ? parsed : null;
    }
    return null;
};

const formatCurrencyString = (value: number): string => value.toFixed(2);

async function buildSimulatorPortfolio(account: Account): Promise<PortfolioSnapshot> {
    const simulator = await ExchangeSimulator.bootstrap(DEFAULT_SIMULATOR_OPTIONS);
    const accountId = account.id || "default";
    const snapshot = simulator.getAccountSnapshot(accountId);

    const equityValue = Number.isFinite(snapshot.equity) ? snapshot.equity : 0;
    const usableFromSnapshot = Number.isFinite(snapshot.availableCash) ? snapshot.availableCash : undefined;
    const fallbackUsable = Math.min(snapshot.cashBalance, equityValue);
    const availableCash = Math.max(usableFromSnapshot ?? fallbackUsable, 0);

    return {
        totalValue: equityValue,
        availableCash,
        total: formatCurrencyString(equityValue),
        available: formatCurrencyString(availableCash),
    };
}

type PortfolioOptions = {
    fallbackToSimulator?: boolean;
};

export async function getPortfolio(account: Account, options?: PortfolioOptions): Promise<PortfolioSnapshot> {
    const fallbackToSimulator = options?.fallbackToSimulator ?? false;

    if (IS_SIMULATION_ENABLED) {
        return buildSimulatorPortfolio(account);
    }

    if (!account.apiKey || account.apiKey.trim().length === 0) {
        if (fallbackToSimulator) {
            console.warn(`[getPortfolio] Missing API key for account ${account.accountIndex}; using simulator fallback.`);
            return buildSimulatorPortfolio(account);
        }
        throw new Error(`Missing API key for account index ${account.accountIndex}`);
    }

    const accountApi = new AccountApi({
        baseServer: new ServerConfiguration<{ }>(BASE_URL, { }),
        httpApi: new IsomorphicFetchHttpLibrary(),
        middleware: [],
        authMethods: {
            apiKey: new ApiKeyAuthentication(account.apiKey),
        },
    });

    try {
        const response = await accountApi.accountWithHttpInfo("index", account.accountIndex);
        const accountData = (response.data?.accounts?.[0] ?? {}) as Record<string, unknown>;
        const totalValue =
            normalizeNumber(
                accountData["totalAssetValue"] ?? accountData["total_asset_value"] ?? accountData["total"],
            ) ?? 0;
        const rawAvailable = normalizeNumber(
            accountData["availableBalance"] ?? accountData["available_balance"] ?? accountData["available"],
        );

        const cappedAvailable =
            totalValue > 0 && rawAvailable != null
                ? Math.min(rawAvailable, totalValue)
                : rawAvailable ?? totalValue;

        const availableCash = Math.max(cappedAvailable ?? 0, 0);

        return {
            totalValue,
            availableCash,
            total: formatCurrencyString(totalValue),
            available: formatCurrencyString(availableCash),
        };
    } catch (error) {
        if (fallbackToSimulator) {
            console.warn(
                `[getPortfolio] Failed to fetch live portfolio for account ${account.accountIndex}, using simulator fallback`,
                error instanceof Error ? error.message : error,
            );
            return buildSimulatorPortfolio(account);
        }
        throw error;
    }
}