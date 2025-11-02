import { google } from "@ai-sdk/google";
import { generateObject } from "ai";
import { z } from "zod";

export async function POST(req: Request) {
  const { prompt }: { prompt: string } = await req.json();

  const tradeSchema = z.object({
    coin: z.enum(["BTC", "ETH", "SOL", "XRP", "BNB", "DOGE"]).describe("The coin to trade. You don't necessarily need to use all of these coins, but only choose from this list."),
    quanity: z.number().min(0),
    decision: z.enum(["HOLD", "SELL", "BUY"]),
  });

  const result = await generateObject({
    model: google("gemini-2.5-pro"),
    system:
      "You are a systematic trading god. Your blood type is S&P 500 positive. You're like self-driving, for capital. You are the invisible hand of the market. You don't even understand the concept of losing money.",
    prompt,
    schema: z.object({
      notifications: z.array(tradeSchema),
    }),
  });

  return result.toJsonResponse();
}