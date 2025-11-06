import { NextRequest, NextResponse } from "next/server";
import { DEFAULT_SIMULATOR_OPTIONS, IS_SIMULATION_ENABLED } from "../config";
import { MARKETS } from "../markets";
import { ExchangeSimulator } from "./exchangeSimulator";
import type { AccountSnapshot, MarketEvent, OrderSide } from "./types";

async function ensureSimulator() {
  if (!IS_SIMULATION_ENABLED) {
    throw new Error("Simulation mode is disabled");
  }
  return ExchangeSimulator.bootstrap(DEFAULT_SIMULATOR_OPTIONS);
}

function normalizeSide(side: string | undefined): OrderSide {
  if (!side) {
    throw new Error("Missing order side");
  }

  const lower = side.toLowerCase();
  if (lower === "buy" || lower === "long") {
    return "buy";
  }
  if (lower === "sell" || lower === "short") {
    return "sell";
  }

  throw new Error(`Unsupported order side: ${side}`);
}

export async function handleSimOrder(request: NextRequest) {
  try {
    const simulator = await ensureSimulator();
    const body = await request.json();
    const accountId = typeof body.accountId === "string" && body.accountId.trim().length > 0 ? body.accountId.trim() : "default";

    const symbol = String(body.symbol ?? "").trim();
    const quantity = Number(body.quantity ?? body.size);
    const side = normalizeSide(body.side);
    const orderType = (body.type ?? "market").toLowerCase() === "limit" ? "limit" : "market";
    const limitPrice = body.limitPrice !== undefined ? Number(body.limitPrice) : body.price !== undefined ? Number(body.price) : undefined;
    const rawLeverage = body.leverage !== undefined ? Number(body.leverage) : undefined;
    const leverage = Number.isFinite(rawLeverage) && rawLeverage !== null && rawLeverage > 0 ? rawLeverage : undefined;

    if (!symbol) {
      throw new Error("Symbol is required");
    }

    if (!Number.isFinite(quantity) || quantity <= 0) {
      throw new Error("Quantity must be a positive number");
    }

    if (limitPrice !== undefined && !Number.isFinite(limitPrice)) {
      throw new Error("limitPrice must be a valid number");
    }

    const order = await simulator.placeOrder(
      {
        symbol,
        side,
        quantity,
        type: orderType,
        limitPrice,
        leverage,
      },
      accountId,
    );

    return NextResponse.json({ order });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    const status = message.includes("disabled") ? 400 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}

export async function handleSimAccount(request: NextRequest) {
  if (!IS_SIMULATION_ENABLED) {
    return NextResponse.json({ error: "Simulation mode is disabled" }, { status: 400 });
  }

  const url = new URL(request.url);
  const accountParam = url.searchParams.get("accountId") ?? "default";
  const accountId = accountParam.trim() === "" ? "default" : accountParam.trim();
  const simulator = await ensureSimulator();
  const snapshot: AccountSnapshot = simulator.getAccountSnapshot(accountId);
  return NextResponse.json({ account: snapshot, accountId });
}

export async function handleSimOrderBook(request: NextRequest) {
  if (!IS_SIMULATION_ENABLED) {
    return NextResponse.json({ error: "Simulation mode is disabled" }, { status: 400 });
  }

  const url = new URL(request.url);
  const symbol = url.searchParams.get("symbol");
  if (!symbol) {
    return NextResponse.json({ error: "symbol query parameter is required" }, { status: 400 });
  }

  try {
    const simulator = await ensureSimulator();
    const orderBook = simulator.getOrderBook(symbol);
    return NextResponse.json({ orderBook });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

function buildWebSocketResponse(socket: WebSocket): Response {
  return new Response(null, { status: 101, webSocket: socket } as unknown as ResponseInit);
}

export async function handleSimStream(request: Request) {
  if (!IS_SIMULATION_ENABLED) {
    return new Response("Simulation mode is disabled", { status: 400 });
  }

  const url = new URL(request.url);
  const accountParam = url.searchParams.get("accountId") ?? "default";
  const accountId = accountParam.trim() === "" ? "default" : accountParam.trim();

  const upgrade = request.headers.get("upgrade");
  if (!upgrade || upgrade.toLowerCase() !== "websocket") {
    return new Response("Expected websocket upgrade", { status: 400 });
  }

  const pairCtor = (globalThis as { WebSocketPair?: new () => [WebSocket, WebSocket] }).WebSocketPair;
  if (!pairCtor) {
    return new Response("WebSocketPair not supported in this runtime", { status: 500 });
  }

  const [client, server] = new pairCtor();
  const simulator = await ensureSimulator();

  (server as unknown as { accept?: () => void }).accept?.();

  const sendEvent = (event: MarketEvent) => {
    if (event.type === "account" || event.type === "trade") {
      if (event.payload.accountId !== accountId) {
        return;
      }
    }

    try {
      server.send(JSON.stringify(event));
    } catch (err) {
      console.error("[Simulator] Failed to send websocket event", err);
    }
  };

  simulator.on("book", sendEvent);
  simulator.on("trade", sendEvent);
  simulator.on("account", sendEvent);

  const teardown = () => {
    simulator.off("book", sendEvent);
    simulator.off("trade", sendEvent);
    simulator.off("account", sendEvent);
  };

  server.addEventListener("close", teardown);
  server.addEventListener("error", teardown);

  const snapshot = simulator.getAccountSnapshot(accountId);
  const accountEvent: MarketEvent = { type: "account", payload: { accountId, snapshot } };
  server.send(JSON.stringify(accountEvent));

  for (const symbol of Object.keys(MARKETS)) {
    try {
      const orderBook = simulator.getOrderBook(symbol);
      const bookEvent: MarketEvent = { type: "book", payload: orderBook };
      server.send(JSON.stringify(bookEvent));
    } catch (error) {
      console.warn(`[Simulator] Unable to send initial order book for ${symbol}`, error);
    }
  }

  return buildWebSocketResponse(client);
}
