import axios from "axios";
import type { Account } from "./accounts";
import { BASE_URL } from "./config";

export async function getPortfolio(account: Account): Promise<{total: string, available: string}> {
    const response = await axios.get(`${BASE_URL}/api/v1/account?by=index&value=${account.accountIndex}`)
    // console.log("Portfolio Response:", response.data);
    return {total: response.data.accounts[0]?.total_asset_value, available: response.data.accounts[0]?.available_balance};
}