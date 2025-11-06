import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { NextResponse } from "next/server";

declare global {
  // eslint-disable-next-line no-var
  var __nimClient: ReturnType<typeof createOpenAICompatible> | undefined;
  // eslint-disable-next-line no-var
  var __nimApiKey: string | undefined;
}

const getNimClient = () => {
  const apiKey = process.env.NIM_API_KEY;
  if (!apiKey) {
    return null;
  }

  if (globalThis.__nimClient && globalThis.__nimApiKey === apiKey) {
    return globalThis.__nimClient;
  }

  const client = createOpenAICompatible({
    name: "nim",
    baseURL: "https://integrate.api.nvidia.com/v1",
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });

  globalThis.__nimClient = client;
  globalThis.__nimApiKey = apiKey;
  return client;
};

export async function POST(req: Request) {
  const nim = getNimClient();

  if (!nim) {
    return NextResponse.json({ error: "NIM_API_KEY is not configured" }, { status: 500 });
  }

  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = await streamText({
    model: nim.chatModel("moonshotai/kimi-k2-instruct-0905"),
    system: "You are a helpful assistant.",
    messages: convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
