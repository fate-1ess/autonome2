import { convertToModelMessages, stepCountIs, streamText, type UIMessage } from "ai";
import { google } from "@ai-sdk/google";
import { mistral } from "@ai-sdk/mistral";
import { tools } from "@/ai/tools";

// declare global {
//   // eslint-disable-next-line no-var
//   var __nimClient: ReturnType<typeof createOpenAICompatible> | undefined;
//   // eslint-disable-next-line no-var
//   var __nimApiKey: string | undefined;
// }

// const getNimClient = () => {
//   const apiKey = process.env.NIM_API_KEY;
//   if (!apiKey) {
//     return null;
//   }

//   if (globalThis.__nimClient && globalThis.__nimApiKey === apiKey) {
//     return globalThis.__nimClient;
//   }

//   const client = createOpenAICompatible({
//     name: "nim",
//     baseURL: "https://integrate.api.nvidia.com/v1",
//     headers: {
//       Authorization: `Bearer ${apiKey}`,
//     },
//   });

//   globalThis.__nimClient = client;
//   globalThis.__nimApiKey = apiKey;
//   return client;
// };

export async function POST(req: Request) {
  // const nim = getNimClient();

  // if (!nim) {
  //   return NextResponse.json({ error: "NIM_API_KEY is not configured" }, { status: 500 });
  // }

  const payload = await req.json().catch(() => ({}));
  const { messages: incomingMessages } = payload as { messages?: UIMessage[] };

  const messages = Array.isArray(incomingMessages) ? incomingMessages : [];

  const result = await streamText({
    model: google("gemini-2.5-pro"),
    stopWhen: stepCountIs(20),
    system:
      "You are Autonome's trading analyst assistant. Reference real portfolio, trade, and position data via the provided tools before answering. Use the queryPortfolioSql tool whenever a natural language question requires analytics or aggregation. Include concise numeric evidence in replies and acknowledge when data is unavailable.",
    messages: convertToModelMessages(messages),
    tools,
  });

  return result.toUIMessageStreamResponse({
    sendReasoning: true,
    sendSources: true,
  });
}
