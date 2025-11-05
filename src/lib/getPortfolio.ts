import axios from "axios";
import type { Account } from "./accounts";
import { BASE_URL, DEFAULT_SIMULATOR_OPTIONS, IS_SIMULATION_ENABLED } from "./config";
import { ExchangeSimulator } from "./simulator/exchangeSimulator";

export async function getPortfolio(account: Account): Promise<{total: string, available: string}> {
    if (IS_SIMULATION_ENABLED) {
        const simulator = await ExchangeSimulator.bootstrap(DEFAULT_SIMULATOR_OPTIONS);
        const accountId = account.id || "default";
        const snapshot = simulator.getAccountSnapshot(accountId);
        const available = snapshot.availableCash ?? Math.max(snapshot.cashBalance, 0);
        return {
            total: snapshot.equity.toFixed(2),
            available: available.toFixed(2),
        };
    }

    const response = await axios.get(`${BASE_URL}/api/v1/account?by=index&value=${account.accountIndex}`)
    // console.log("Portfolio Response:", response.data);
    return {total: response.data.accounts[0]?.total_asset_value, available: response.data.accounts[0]?.available_balance};
}