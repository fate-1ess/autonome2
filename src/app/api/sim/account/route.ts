import { NextRequest } from "next/server";
import { handleSimAccount } from "@/server/features/simulator/api";

export async function GET(request: NextRequest) {
  return handleSimAccount(request);
}
