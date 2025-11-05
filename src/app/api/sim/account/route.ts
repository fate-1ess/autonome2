import { NextRequest } from "next/server";
import { handleSimAccount } from "@/lib/simulator/api";

export async function GET(request: NextRequest) {
  return handleSimAccount(request);
}
