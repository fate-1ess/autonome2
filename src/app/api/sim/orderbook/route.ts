import { NextRequest } from "next/server";
import { handleSimOrderBook } from "@/lib/simulator/api";

export async function GET(request: NextRequest) {
  return handleSimOrderBook(request);
}
