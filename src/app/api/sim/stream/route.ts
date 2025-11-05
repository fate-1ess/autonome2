import { handleSimStream } from "@/lib/simulator/api";

export const runtime = "edge";

export async function GET(request: Request) {
  return handleSimStream(request);
}
