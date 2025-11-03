const NOF1_API_URL = "https://nof1.ai/api/conversations";
const ALLOWED_SYMBOLS = new Set(["BTC", "ETH", "SOL"]);
const ACCOUNT_SECTION_HEADER = "### HERE IS YOUR ACCOUNT INFORMATION & PERFORMANCE";

interface ConversationsResponse {
  conversations?: Array<{
    user_prompt?: string;
  }>;
}

interface IndicatorData {
  currentTime: string | null;
  allIndicatorData: string;
}

const minutesPattern = /It has been\s+\d+\s+minutes since you started trading\.\s*/i;
const invokedPattern = /\s*and you've been invoked\s+\d+\s+times(?=\.)/i;
const currentTimePattern = /The current time is\s+([^\.\n]+)(?:\.)?/i;
// Strip any leading numeric prefix like "807376. " or "434033. " that can appear before sentences.
const numberPrefixPattern = /^\s*\d+\.\s+/;
const accountSectionPattern = new RegExp(
  `${ACCOUNT_SECTION_HEADER.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[\s\S]*$`,
  "i",
);

export async function fetchIndicatorData(): Promise<IndicatorData> {
  const response = await fetch(NOF1_API_URL, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch indicator data: ${response.statusText}`);
  }

  const data = (await response.json()) as ConversationsResponse;
  const userPrompt = data.conversations?.[0]?.user_prompt;

  if (!userPrompt) {
    throw new Error("No conversation data available");
  }

  return extractIndicatorData(userPrompt);
}

function extractIndicatorData(prompt: string): IndicatorData {
  let cleaned = prompt
    .replace(minutesPattern, "")
    .replace(invokedPattern, "")
    .replace(accountSectionPattern, "")
    .trim();

  const currentTimeMatch = cleaned.match(currentTimePattern);
  const currentTime = currentTimeMatch?.[1]?.trim() ?? null;

  if (currentTimeMatch) {
    cleaned = cleaned.replace(currentTimeMatch[0], "").trim();
  }

  // Remove number prefix after other replacements
  cleaned = cleaned.replace(numberPrefixPattern, "").trim();

  const sectionMatches = [...cleaned.matchAll(/### [^\n]+\n/g)];

  if (sectionMatches.length === 0) {
    return {
      currentTime,
      allIndicatorData: normalizeWhitespace(cleaned),
    };
  }

  const assembledSections: string[] = [];

  const initialSegment = cleaned.slice(0, sectionMatches[0].index).trim();
  if (initialSegment) {
    const normalizedInitial = normalizeWhitespace(initialSegment).replace(/\n?---$/, "").trim();
    if (normalizedInitial) {
      assembledSections.push(normalizedInitial);
    }
  }

  for (let index = 0; index < sectionMatches.length; index += 1) {
    const currentMatch = sectionMatches[index];
    const start = currentMatch.index ?? 0;
    const end =
      index + 1 < sectionMatches.length
        ? sectionMatches[index + 1].index ?? cleaned.length
        : cleaned.length;
    const section = cleaned.slice(start, end).trim();

    if (!section) {
      continue;
    }

    const header = currentMatch[0].trim();

    if (header.toUpperCase() === ACCOUNT_SECTION_HEADER) {
      continue;
    }

    const symbolMatch = header.match(/^### ALL (\w+) DATA$/i);
    if (symbolMatch) {
      const symbol = symbolMatch[1].toUpperCase();
      if (!ALLOWED_SYMBOLS.has(symbol)) {
        continue;
      }
    }

    const normalizedSection = normalizeWhitespace(section);
    if (!normalizedSection) {
      continue;
    }

    if (assembledSections.length > 0) {
      assembledSections.push("---");
    }

    assembledSections.push(normalizedSection);
  }

  return {
    currentTime,
    allIndicatorData: assembledSections.join("\n\n").trim(),
  };
}

function normalizeWhitespace(value: string): string {
  return value.replace(/\s+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();
}

export type { IndicatorData };
