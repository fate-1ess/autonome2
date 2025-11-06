# Autonome AI Trading Dashboard

Autonome is a Next.js 16 (App Router) dashboard that monitors AI-driven cryptocurrency trading strategies. It visualises model performance, active positions, simulator events, and the conversational reasoning behind every trade. Background schedulers execute trading loops on both live exchanges and an in-repo simulator, while the UI polls lightweight JSON APIs for fresh data.

## Feature Highlights
- Positions, completed trades, and ModelChat transcripts in a single responsive sidebar
- Live vs simulated execution controlled with the `TRADING_MODE` flag
- Five-minute trade and portfolio schedulers that deduplicate via `globalThis`
- Prisma-backed history for invocations, tool calls, and portfolio snapshots
- Custom Lighter signer for live order placement plus a full-featured exchange simulator
- Streaming simulator dashboard (`/simulator`) with WebSocket updates

## Architecture Overview
- **Framework**: Next.js 16 + React 19 with the App Router and Turbopack dev server
- **UI**: Tailwind CSS, Radix UI primitives, shadcn-inspired components under `src/components`
- **Server modules**: `src/lib/*` hosts schedulers, trading services, pricing, and simulator logic (server-only imports)
- **APIs**: REST-style routes in `src/app/api/*` expose trades, positions, invocations, portfolio history, and simulator controls
- **Persistence**: Prisma schema (`prisma/schema.prisma`) tracks models, runs, tool calls, and portfolio size snapshots
- **Generated Code**: Lighter SDK bindings in `lighter-sdk-ts/generated` and Prisma client artifacts in `generated/prisma` (do not edit by hand)

## Prerequisites
- Node.js 20+ (Bun 1.1+ recommended for production scripts)
- PostgreSQL compatible database (Prisma manages migrations)
- API keys for OpenRouter/NIM/Lighter plus database connection env vars

## Quick Start
```bash
# 1. Install dependencies
bun install        # or: npm install

# 2. Copy env vars (see below) into .env.local

# 3. Run migrations (development)
npx prisma db push

# 4. Boot the dashboard (Turbopack on port 3001)
npm run dev        # or: bun run dev

# 5. Visit the app
open http://localhost:3001
```

The scheduling loops auto-start during server boot via `src/lib/tradeSchedulerBootstrap.ts`, which is imported from `src/app/layout.tsx`. No additional process manager is required in development.

## Environment Variables
| Variable | Description |
| --- | --- |
| `DATABASE_URL` | PostgreSQL connection string used by Prisma |
| `TRADING_MODE` | `live` (real exchange) or `simulated` (in-repo simulator) |
| `OPENROUTER_API_KEY` | Required for AI model orchestration |
| `NIM_API_KEY` | Lighter network auth |
| `LIGHTER_BASE_URL` | Lighter REST endpoint |
| `LIGHTER_API_KEY_INDEX` | Index of the signer key to use |
| `SIM_*` | Optional overrides for simulator behaviour |

Create a `.env.local` (or `.env`) file with the values that apply to your environment before starting the app.

## Data & Execution Flow
- `ensureTradeScheduler` and `ensurePortfolioScheduler` (5‑minute cadence) run in the background, orchestrating market data pulls and order decisions
- `tradeExecutor.ts` enriches prompts, calls OpenRouter, and routes tool calls to `createPosition`/`closePosition`; both live and simulator branches must be kept in sync when tool signatures change
- `priceTracker.ts` persists `portfolio.total` as exact decimal strings so the `PerformanceGraph` parser stays lossless
- Every workflow writes into `Invocations`, appends `ToolCalls` metadata JSON, and upserts `PortfolioSize` to keep UI charts accurate
- Live orders use the custom Lighter signer (`lighter-sdk-ts/signer.ts`), while simulator orders flow through `ExchangeSimulator`

## Directory Guide
- `src/components` – shared client UI (mode toggle, performance chart, sidebar, AI chat, simulator widgets)
- `src/app` – Next.js routes (`/`, `/ai`, `/simulator`, and `/api/*` endpoints)
- `src/lib` – server-only business logic (accounts, markets, schedulers, trading, simulator utilities)
- `public` – static assets such as model badges (`/glm.png`, `/minimax.png`)
- `prisma` – schema and migrations
- `generated/prisma` – Prisma client (auto-generated; regenerate via `npx prisma generate`)
- `lighter-sdk-ts` – upstream Lighter SDK + signer implementation (generated files under `lighter-sdk-ts/generated`)

## Database & Prisma
- Update the schema in `prisma/schema.prisma` and run `npx prisma migrate dev` during development or `npx prisma migrate deploy` for production migrations
- The project ships with pre-generated Prisma client files under `generated/prisma`; regenerate after schema changes
- `prisma/config.ts` holds runtime Prisma configuration hooks if you need to adjust connection pooling

## Simulator & Testing Tips
- Set `TRADING_MODE=simulated` to route requests through `/api/sim/*` and stream events to the `/simulator` page (`useSimStream.tsx` handles the WebSocket)
- Simulator metadata is shared with live trading through `src/lib/markets.ts`; remember to keep both maps aligned
- Diagnostic helpers like `runManualCreatePosition()` in `tradeExecutor.ts` can be invoked manually for ad-hoc testing (guard with `if ((import.meta as { main?: boolean }).main)` when adding new ones)

## Production Deployment
- Run `bun run start-with-schedulers.ts` (or `node start-with-schedulers.ts`) to launch Next.js after booting the schedulers so background intervals stay alive
- Ensure migrations are applied (`npx prisma migrate deploy`) and the environment is fully populated before starting the process
- Scheduler and trading modules log to stdout; keep log statements concise because they surface directly in deployment monitoring

## Regenerating External Clients
- **Prisma**: `npx prisma generate`
- **Lighter SDK**: Follow the instructions in `lighter-sdk-ts/README.md` (OpenAPI generator)

## Support & Troubleshooting
- Missing data in the UI usually traces back to scheduler imports; verify `src/lib/tradeSchedulerBootstrap.ts` ran and hit `/api/init-schedulers` once after deploy to register timers
- Chart gaps or stale panels typically mean the polling cadence (10s for trades, 3m for performance) fell out of sync with scheduler intervals—adjust both sides together
- For unexpected simulator output, confirm event shapes against `src/lib/simulator/types.ts`

Happy trading!
