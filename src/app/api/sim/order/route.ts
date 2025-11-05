import { NextRequest } from "next/server";
import { handleSimOrder } from "@/lib/simulator/api";

export async function POST(request: NextRequest) {
  return handleSimOrder(request);
}
