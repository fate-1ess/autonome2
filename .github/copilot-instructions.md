## Quick orientation

This repository is a Next.js (App Router) TypeScript project that implements an autonomous AI trading UI and server-side schedulers. Key areas:

- UI: `src/app` and `components/` — most React pages and client components (look for `"use client"` at the top of client files).
- Business logic / workers: `src/lib/*` — trading, price tracking, schedulers, AI orchestration (notably `tradeExecutor.ts`, `priceTracker.ts`, and `tradeSchedulerBootstrap.ts`).
- DB schema & migrations: `prisma/schema.prisma`, `prisma/migrations/` (Prisma is used for telemetry and invocation/tool-call records).
- SDKs and generated code: `generated/prisma/` (Prisma client was generated into repo), and `lighter-sdk-ts/` (local SDK helpers and examples).

## How to run / developer workflows

- Dev server (recommended): `npm run dev` — this runs Next.js dev with turbopack on port 3001 (see `package.json`). Open http://localhost:3001.
- Build: `npm run build` then `npm run start`.
- Start Next + schedulers together: `npm run start:with-schedulers` — this invokes `bun run start-with-schedulers.ts` which starts the scheduler loops and the Next server. Note: this script requires `bun`.
- Prisma dev workflow: use `prisma` CLI from the repo (`npx prisma migrate dev` / `npx prisma generate`) and inspect `prisma/migrations/`.

If you need schedulers running in development without `bun`, you can import and call `ensureTradeScheduler()` and `ensurePortfolioScheduler()` manually on the server side (see `src/lib/tradeSchedulerBootstrap.ts` which is imported by `layout.tsx` and guarded with `typeof window === 'undefined'`).

## Important patterns & gotchas for an AI agent

- Server-only initialization: `src/lib/tradeSchedulerBootstrap.ts` runs only when `typeof window === 'undefined'`. The schedulers are intentionally started on the server; avoid executing scheduler code in browser contexts.
- Global locks/handles: the schedulers use `globalThis.tradeIntervalHandle` and `globalThis.tradeIntervalRunning` to avoid duplication. Preserve this pattern when changing scheduler lifecycle logic.
- Prisma usage: `@prisma/client` is used extensively from server-side code (for example `src/lib/tradeExecutor.ts`). Avoid importing Prisma code into client bundles. The project also includes a generated client under `generated/prisma/` — prefer `@prisma/client` imports but be aware of the generated artifacts.
- Prompt and model orchestration: the main LLM prompt template lives in `src/lib/prompt.ts`. `src/lib/tradeExecutor.ts` builds an enriched prompt and invokes models (OpenRouter wrapper, `@ai-sdk/*` providers). Look here for tool wiring (`createPosition`, `closePosition`) and how tool results are recorded to the DB.
- Schedulers and testing helpers: `tradeExecutor.ts` contains `runManual*` helpers (e.g., `runManualGetPortfolio`) that show how to call internal flows with a mocked `Account` object — useful examples for unit testing or running small smoke tests.

## Environment & secrets

- Environment variables used (discoverable in `.env` and code):
  - `OPENROUTER_API_KEY`, `MISTRAL_API_KEY`, `GOOGLE_GENERATIVE_AI_API_KEY`, `NIM_API_KEY`
  - `DATABASE_URL`, `BETTER_AUTH_SECRET`, `BETTER_AUTH_URL`, `CORS_ORIGIN`
- Secrets: this repo currently contains an active `.env` file with real-looking keys. Do not commit `.env` to version control or expose its contents.

## Files to inspect when making changes

- `src/lib/tradeExecutor.ts` — primary LLM orchestration + DB recording + tool definitions.
- `src/lib/tradeSchedulerBootstrap.ts` — server-only scheduler bootstrap imported by the root layout.
- `start-with-schedulers.ts` — bun entrypoint that runs schedulers and launches Next; useful for production-like local runs.
- `src/lib/prompt.ts` — canonical prompt template and token of what the model sees.
- `prisma/schema.prisma` and `prisma/migrations/` — DB contract and migrations.
- `package.json` — scripts (note `dev` uses port 3001 and turbopack; `start:with-schedulers` uses bun).

## Conventions & stylistic notes to follow

- Prefer server-side code for heavy/IO work (Prisma, SDK calls, schedulers). Client components should be mostly UI-only.
- Client components explicitly use `"use client"` at file top. If you add client behavior, follow this pattern.
- Use `globalThis` guards as above if adding long-running processes to avoid multiple intervals in server hot-reload.
- When invoking LLMs, follow the existing pattern in `tradeExecutor.ts`: build an enriched prompt from `PROMPT`, use provider wrappers (OpenRouter, `@ai-sdk/*`), and persist the invocation/response to Prisma for observability.

## Quick examples (where to look)

- Enriched prompt: see how `tradeExecutor.ts` replaces `{{INVOKATION_TIMES}}`, `{{PORTFOLIO_VALUE}}`, `{{ALL_INDICATOR_DATA}}` in `src/lib/prompt.ts`.
- Tool wiring: `generateText({ tools: { createPosition: tool({...}), closePosition: tool({...}) }})` in `src/lib/tradeExecutor.ts` — tool `execute` implementations call `createPosition()` and `closePosition()` in `src/lib/` and persist a `ToolCalls` record.

## Safety & privacy

- Remove or rotate any sensitive keys in `.env` immediately before sharing the repository.
- Avoid printing entire secrets to logs. When you inspect example helper functions (they contain example apiKey strings), treat them as samples and do not commit real keys into source files.

If any of this is unclear or you want me to expand any section (example runs, tests, or recommended refactors like moving Prisma client instantiation to a safer pattern), tell me which part to iterate on.
