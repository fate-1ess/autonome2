import { tool as createTool, generateObject } from "ai";
import { z } from "zod";
import { google } from "@ai-sdk/google";
import { prisma } from "@server/db/prisma";
import { getPortfolio } from "@server/features/trading/getPortfolio";
import { getOpenPositions } from "@/server/features/trading/openPositions";
import { normalizeNumber } from "@/shared/formatting/numberFormat";
import { getArray, safeJsonParse } from "@/shared/utils/json";
import { SQL_ASSISTANT_PROMPT } from "@/ai/sqlPrompt";
import { ToolCallType } from "@prisma/client";

const MAX_RESULT_ROWS = 100;

const SQL_GENERATION_SCHEMA = z.object({
  sql: z
    .string()
    .describe("A single PostgreSQL query that answers the question. Must be read-only."),
  reasoning: z
    .string()
    .optional()
    .describe("Short justification for the selected query."),
});

function enforceReadOnly(sql: string): string {
  const trimmed = sql.trim();
  const forbidden = /(INSERT|UPDATE|DELETE|ALTER|DROP|TRUNCATE|GRANT|REVOKE|CREATE|MERGE|CALL|EXECUTE|REPLACE|COMMENT|VACUUM)\b/i;
  if (!/^(SELECT|WITH)\b/i.test(trimmed)) {
    throw new Error("Generated SQL must start with SELECT or WITH.");
  }
  if (forbidden.test(trimmed)) {
    throw new Error("Generated SQL contains forbidden operations.");
  }

  const withoutSemicolon = trimmed.endsWith(";") ? trimmed.slice(0, -1) : trimmed;
  const hasLimit = /LIMIT\s+\d+/i.test(withoutSemicolon);
  if (hasLimit) {
    return withoutSemicolon;
  }
  return `${withoutSemicolon}\nLIMIT ${MAX_RESULT_ROWS}`;
}

function coerceRow(row: unknown): Record<string, unknown> {
  if (!row || typeof row !== "object") {
    return {};
  }

  return Object.fromEntries(
    Object.entries(row as Record<string, unknown>).map(([key, value]) => {
      if (value instanceof Date) {
        return [key, value.toISOString()];
      }
      if (typeof value === "bigint") {
        const asNumber = Number(value);
        return [key, Number.isSafeInteger(asNumber) ? asNumber : value.toString()];
      }
      if (typeof value === "object" && value !== null) {
        try {
          return [key, JSON.parse(JSON.stringify(value))];
        } catch {
          return [key, String(value)];
        }
      }
      return [key, value];
    }),
  );
}

export const queryPortfolioSql = createTool({
  description:
    "Translate a natural language analytics question into a read-only SQL query over Autonome's trading database and return the results.",
  inputSchema: z.object({
    question: z.string().describe("User's natural language analytics question"),
  }),
  execute: async ({ question }) => {
    const generation = await generateObject({
      model: google("gemini-2.5-pro"),
      system: SQL_ASSISTANT_PROMPT,
      prompt: `User question: ${question}`,
      schema: SQL_GENERATION_SCHEMA,
    });

    const sql = enforceReadOnly(generation.object.sql);
    const startedAt = Date.now();
    const rawRows = (await prisma.$queryRawUnsafe(sql)) as unknown[];
    const durationMs = Date.now() - startedAt;

    const rows = rawRows.slice(0, MAX_RESULT_ROWS).map(coerceRow);
    const columns = rows.length > 0 ? Object.keys(rows[0]!) : [];

    return {
      question,
      sql,
      durationMs,
      rowCount: rows.length,
      truncated: rawRows.length > rows.length,
      columns,
      rows,
      reasoning: generation.object.reasoning,
    };
  },
});

export const getModelsOverview = createTool({
  description: "Fetch model metadata such as name, router model, invocation counts, and tracked minutes.",
  inputSchema: z
    .object({
      search: z
        .string()
        .describe("Case-insensitive substring to filter model names")
        .optional(),
      limit: z
        .number()
        .int()
        .min(1)
        .max(25)
        .default(10)
        .describe("Maximum number of models to return"),
    }),
  execute: async ({ search, limit }) => {
    const models = await prisma.models.findMany({
      where: search
        ? {
            OR: [
              { name: { contains: search, mode: "insensitive" } },
              { openRoutermodelName: { contains: search, mode: "insensitive" } },
            ],
          }
        : undefined,
      orderBy: { name: "asc" },
      take: limit ?? 10,
    });

    return models.map((model) => ({
      id: model.id,
      name: model.name,
      routerModel: model.openRoutermodelName,
      invocationCount: model.invocationCount,
      totalMinutes: model.totalMinutes,
      accountIndex: model.accountIndex,
    }));
  },
});

export const getPortfolioHistory = createTool({
  description: "Return recent portfolio history entries with normalized numeric totals.",
  inputSchema: z
    .object({
      modelName: z.string().describe("Exact model name to filter by").optional(),
      limit: z
        .number()
        .int()
        .min(1)
        .max(200)
        .default(60)
        .describe("Maximum number of snapshots to return"),
    }),
  execute: async ({ modelName, limit }) => {
    const snapshots = await prisma.portfolioSize.findMany({
      where: modelName
        ? {
            model: {
              name: {
                equals: modelName,
                mode: "insensitive",
              },
            },
          }
        : undefined,
      include: {
        model: {
          select: {
            name: true,
            openRoutermodelName: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
      take: limit ?? 60,
    });

    return snapshots.map((entry) => {
      const totalNumeric = normalizeNumber(entry.netPortfolio);
      return {
        id: entry.id,
        modelId: entry.modelId,
        modelName: entry.model.name,
        routerModel: entry.model.openRoutermodelName,
        netPortfolioRaw: entry.netPortfolio,
        netPortfolio: totalNumeric,
        createdAt: entry.createdAt.toISOString(),
        updatedAt: entry.updatedAt.toISOString(),
      };
    });
  },
});

export const getOpenPositionsTool = createTool({
  description: "Fetch current open positions and portfolio liquidity for tracked models.",
  inputSchema: z
    .object({
      modelName: z.string().describe("Exact model name to inspect").optional(),
    }),
  execute: async ({ modelName }) => {
    const models = await prisma.models.findMany({
      where: modelName
        ? {
            name: {
              equals: modelName,
              mode: "insensitive",
            },
          }
        : undefined,
      orderBy: { name: "asc" },
    });

    if (models.length === 0) {
      return [];
    }

    const results = await Promise.all(
      models.map(async (model) => {
        try {
          const [positions, portfolio] = await Promise.all([
            getOpenPositions(model.lighterApiKey, model.accountIndex, model.id),
            getPortfolio({
              apiKey: model.lighterApiKey,
              accountIndex: model.accountIndex,
              id: model.id,
              invocationCount: model.invocationCount,
              modelName: model.openRoutermodelName,
              name: model.name,
              totalMinutes: model.totalMinutes,
            }),
          ]);

          return {
            modelId: model.id,
            modelName: model.name,
            routerModel: model.openRoutermodelName,
            totalPortfolioValue: portfolio.totalValue,
            availableCash: portfolio.availableCash,
            positions,
          };
        } catch (error) {
          const message = error instanceof Error ? error.message : String(error);
          return {
            modelId: model.id,
            modelName: model.name,
            routerModel: model.openRoutermodelName,
            error: message,
          };
        }
      }),
    );

    return results;
  },
});

export const getRecentTradesTool = createTool({
  description: "Return recently closed trades derived from CLOSE_POSITION tool calls.",
  inputSchema: z
    .object({
      modelName: z.string().describe("Exact model name to filter by").optional(),
      limit: z
        .number()
        .int()
        .min(1)
        .max(100)
        .default(25)
        .describe("Maximum number of entries to inspect"),
    }),
  execute: async ({ modelName, limit }) => {
    const closeCalls = await prisma.toolCalls.findMany({
      where: {
        toolCallType: ToolCallType.CLOSE_POSITION,
        invocation: modelName
          ? {
              model: {
                name: {
                  equals: modelName,
                  mode: "insensitive",
                },
              },
            }
          : undefined,
      },
      include: {
        invocation: {
          include: {
            model: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
      take: limit ?? 25,
    });

    return closeCalls.map((call) => {
      const metadata = safeJsonParse<Record<string, unknown>>(call.metadata, {});
      const closedPositions = getArray<Record<string, unknown>>(metadata["closedPositions"]);

      const parsedPositions = closedPositions.map((position) => ({
        symbol: typeof position.symbol === "string" ? position.symbol : null,
        side: typeof position.side === "string" ? position.side : null,
        quantity: normalizeNumber(position.quantity),
        entryPrice: normalizeNumber(position.entryPrice ?? position.markPrice),
        exitPrice: normalizeNumber(position.exitPrice ?? position.markPrice),
        netPnl: normalizeNumber(position.netPnl ?? position.realizedPnl ?? position.unrealizedPnl),
      }));

      return {
        id: call.id,
        modelId: call.invocation.modelId,
        modelName: call.invocation.model.name,
        routerModel: call.invocation.model.openRoutermodelName,
        createdAt: call.createdAt.toISOString(),
        parsedPositions,
        rawMetadata: metadata,
      };
    });
  },
});

export const tools = {
  queryPortfolioSql,
  get_models_overview: getModelsOverview,
  get_portfolio_history: getPortfolioHistory,
  get_open_positions: getOpenPositionsTool,
  get_recent_trades: getRecentTradesTool,
};
