import { NextRequest } from "next/server";
import { handleSimOrderBook } from "@/server/features/simulator/api";

export async function GET(request: NextRequest) {
  return handleSimOrderBook(request);
}
