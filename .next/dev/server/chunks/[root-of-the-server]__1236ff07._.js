module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/module [external] (module, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("module", () => require("module"));

module.exports = mod;
}),
"[externals]/next/dist/server/lib/incremental-cache/tags-manifest.external.js [external] (next/dist/server/lib/incremental-cache/tags-manifest.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/lib/incremental-cache/tags-manifest.external.js", () => require("next/dist/server/lib/incremental-cache/tags-manifest.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/lib/formatters.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatConfidenceValue",
    ()=>formatConfidenceValue,
    "formatCurrency",
    ()=>formatCurrency,
    "formatCurrencyValue",
    ()=>formatCurrencyValue,
    "formatLeverageValue",
    ()=>formatLeverageValue,
    "formatPriceLabel",
    ()=>formatPriceLabel,
    "formatQuantityValue",
    ()=>formatQuantityValue,
    "formatSignedCurrencyValue",
    ()=>formatSignedCurrencyValue,
    "normalizeNumber",
    ()=>normalizeNumber,
    "parseSymbols",
    ()=>parseSymbols
]);
const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});
const DEFAULT_SYMBOLS = [
    "BTC",
    "ETH",
    "SOL"
];
const normalizeNumber = (value)=>{
    if (value == null) return null;
    if (typeof value === "number") return Number.isFinite(value) ? value : null;
    if (typeof value === "string" && value.length > 0) {
        const parsed = Number.parseFloat(value);
        return Number.isFinite(parsed) ? parsed : null;
    }
    return null;
};
const formatCurrency = (value)=>{
    const numeric = normalizeNumber(value);
    return currencyFormatter.format(numeric ?? 0);
};
const formatCurrencyValue = (value)=>{
    const numeric = normalizeNumber(value);
    if (numeric == null) return "N/A";
    return formatCurrency(numeric);
};
const formatSignedCurrencyValue = (value)=>{
    const numeric = normalizeNumber(value);
    if (numeric == null) return "--";
    const formatted = formatCurrency(Math.abs(numeric));
    return numeric > 0 ? `+${formatted}` : formatted;
};
const formatLeverageValue = (value)=>{
    const numeric = normalizeNumber(value);
    if (numeric == null) return "--";
    if (Number.isInteger(numeric)) return `${numeric}x`;
    return `${numeric.toFixed(2)}x`;
};
const formatQuantityValue = (value)=>{
    const numeric = normalizeNumber(value);
    if (numeric == null) return "--";
    if (Math.abs(numeric) >= 1) return numeric.toFixed(2);
    return numeric.toPrecision(3);
};
const formatConfidenceValue = (value)=>{
    const numeric = normalizeNumber(value);
    if (numeric == null) return "----";
    const percentage = numeric <= 1 ? numeric * 100 : numeric;
    if (!Number.isFinite(percentage) || percentage < 0) return "----";
    if (percentage >= 99.5) return "100%";
    if (percentage >= 10) return `${percentage.toFixed(0)}%`;
    return `${percentage.toFixed(1)}%`;
};
const formatPriceLabel = (value)=>{
    const numeric = normalizeNumber(value);
    if (numeric == null) return "—";
    return formatCurrency(numeric);
};
const parseSymbols = (raw)=>{
    if (!raw) {
        return [
            ...DEFAULT_SYMBOLS
        ];
    }
    const deduped = new Set();
    raw.split(",").map((symbol)=>symbol.trim().toUpperCase()).filter(Boolean).forEach((symbol)=>deduped.add(symbol));
    return deduped.size > 0 ? Array.from(deduped) : [
        ...DEFAULT_SYMBOLS
    ];
};
}),
"[project]/src/lib/utils/json.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getArray",
    ()=>getArray,
    "isRecord",
    ()=>isRecord,
    "safeJsonParse",
    ()=>safeJsonParse
]);
const isRecord = (value)=>{
    return typeof value === "object" && value !== null && !Array.isArray(value);
};
const safeJsonParse = (value, fallback)=>{
    if (!value) {
        return fallback;
    }
    try {
        const parsed = JSON.parse(value);
        return parsed ?? fallback;
    } catch  {
        return fallback;
    }
};
const getArray = (value)=>{
    return Array.isArray(value) ? value : [];
};
}),
"[project]/src/lib/cache/tags.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DATA_CACHE_TAGS",
    ()=>DATA_CACHE_TAGS,
    "revalidateDataTags",
    ()=>revalidateDataTags
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-route] (ecmascript)");
;
const DATA_CACHE_TAGS = {
    MODELS: "models",
    INVOCATIONS: "invocations",
    POSITIONS: "positions",
    TRADES: "trades",
    PORTFOLIO_HISTORY: "portfolio-history",
    CRYPTO_PRICES: "crypto-prices"
};
async function revalidateDataTags(...tags) {
    const unique = Array.from(new Set(tags));
    if (unique.length === 0) {
        return;
    }
    for (const tag of unique){
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidateTag"])(tag, "max");
    }
}
}),
"[project]/src/app/api/trades/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"809cb9318515600e434d26cf3fbdaa92d15b9d8b46":"$$RSC_SERVER_CACHE_0"},"",""] */ __turbopack_context__.s([
    "$$RSC_SERVER_CACHE_0",
    ()=>$$RSC_SERVER_CACHE_0,
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$cache$2d$wrapper$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/cache-wrapper.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/lib/prisma'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/formatters.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$json$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/json.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2f$tags$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cache/tags.ts [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
const canonicalSymbol = (symbol)=>{
    if (!symbol) return "";
    return symbol.toUpperCase().replace(/[^A-Z0-9]/g, "").replace(/USDT$/, "");
};
const formatDuration = (openedAt, closedAt)=>{
    const diffMs = closedAt.getTime() - openedAt.getTime();
    if (diffMs <= 0) return "<1M";
    const totalMinutes = Math.floor(diffMs / 60000);
    const days = Math.floor(totalMinutes / (60 * 24));
    const hours = Math.floor(totalMinutes % (60 * 24) / 60);
    const minutes = totalMinutes % 60;
    const parts = [];
    if (days > 0) parts.push(`${days}D`);
    if (hours > 0) parts.push(`${hours}H`);
    parts.push(`${minutes}M`);
    return parts.join(" ");
};
const formatTimestamp = (date)=>{
    return date.toLocaleString("en-US", {
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });
};
const consumeLatestCreateRecord = (lookup, modelId, symbol, closedAt)=>{
    const key = `${modelId}|${symbol}`;
    const records = lookup.get(key);
    if (!records || records.length === 0) return null;
    for(let i = records.length - 1; i >= 0; i -= 1){
        if (records[i].createdAt <= closedAt) {
            const [record] = records.splice(i, 1);
            return record;
        }
    }
    return null;
};
var $$RSC_SERVER_CACHE_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$cache$2d$wrapper$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cache"])("default", "809cb9318515600e434d26cf3fbdaa92d15b9d8b46", 0, async function loadTrades() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cacheTag"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2f$tags$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DATA_CACHE_TAGS"].TRADES);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cacheLife"])({
        stale: 60,
        revalidate: 180,
        expire: 900
    });
    const closeCalls = await db.toolCalls.findMany({
        where: {
            toolCallType: "CLOSE_POSITION"
        },
        include: {
            invocation: {
                include: {
                    model: true
                }
            }
        },
        orderBy: {
            createdAt: "desc"
        },
        take: 400
    });
    if (closeCalls.length === 0) {
        return [];
    }
    const modelIds = Array.from(new Set(closeCalls.map((call)=>call.invocation.modelId)));
    const createCalls = await db.toolCalls.findMany({
        where: {
            toolCallType: "CREATE_POSITION",
            invocation: {
                modelId: {
                    in: modelIds
                }
            }
        },
        include: {
            invocation: {
                select: {
                    modelId: true
                }
            }
        },
        orderBy: {
            createdAt: "asc"
        }
    });
    const createLookup = new Map();
    for (const call of createCalls){
        const metadata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$json$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeJsonParse"])(call.metadata, {});
        const positions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$json$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getArray"])(metadata.positions);
        for (const position of positions){
            const symbol = canonicalSymbol(typeof position.symbol === "string" ? position.symbol : undefined);
            if (!symbol) continue;
            const record = {
                createdAt: call.createdAt,
                symbol,
                modelId: call.invocation.modelId,
                side: typeof position.side === "string" ? position.side : undefined,
                quantity: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeNumber"])(position.quantity)
            };
            const key = `${record.modelId}|${record.symbol}`;
            const existing = createLookup.get(key) ?? [];
            existing.push(record);
            createLookup.set(key, existing);
        }
    }
    const trades = closeCalls.flatMap((call)=>{
        const metadata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$json$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeJsonParse"])(call.metadata, {});
        const closedPositions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$json$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getArray"])(metadata["closedPositions"]);
        const fallbackSymbols = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$json$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getArray"])(metadata["symbols"]);
        if (closedPositions.length === 0) {
            return [];
        }
        const closedAt = call.createdAt;
        const model = call.invocation.model;
        const modelId = call.invocation.modelId;
        const closingTrades = [];
        closedPositions.forEach((position, idx)=>{
            const symbolCandidate = typeof position.symbol === "string" ? position.symbol : typeof fallbackSymbols[idx] === "string" ? fallbackSymbols[idx] : undefined;
            const symbol = canonicalSymbol(symbolCandidate);
            if (!symbol) {
                return;
            }
            const createRecord = consumeLatestCreateRecord(createLookup, modelId, symbol, closedAt);
            const entryPrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeNumber"])(position.entryPrice ?? position.markPrice);
            const exitPrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeNumber"])(position.exitPrice ?? position.markPrice);
            const quantity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeNumber"])(position.quantity ?? createRecord?.quantity);
            const entryNotional = position.entryNotional != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeNumber"])(position.entryNotional) : entryPrice != null && quantity != null ? entryPrice * quantity : null;
            const exitNotional = position.exitNotional != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeNumber"])(position.exitNotional) : exitPrice != null && quantity != null ? exitPrice * quantity : null;
            const pnl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeNumber"])(position.netPnl ?? position.realizedPnl ?? position.unrealizedPnl);
            const openedAt = createRecord?.createdAt ?? null;
            const holdingTime = openedAt ? formatDuration(openedAt, closedAt) : null;
            closingTrades.push({
                id: `${call.id}:${symbol}:${idx}`,
                modelId,
                modelName: model.name,
                modelRouterName: model.openRoutermodelName,
                symbol,
                side: typeof position.side === "string" ? position.side.toUpperCase() : createRecord?.side?.toUpperCase() ?? "LONG",
                quantity,
                entryPrice,
                exitPrice,
                entryNotional,
                exitNotional,
                netPnl: pnl,
                openedAt: openedAt ? openedAt.toISOString() : null,
                closedAt: closedAt.toISOString(),
                holdingTime,
                timestamp: formatTimestamp(closedAt)
            });
        });
        return closingTrades;
    });
    return trades;
});
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_CACHE_0, "809cb9318515600e434d26cf3fbdaa92d15b9d8b46", null);
Object["defineProperty"]($$RSC_SERVER_CACHE_0, "name", {
    value: "loadTrades",
    writable: false
});
var loadTrades = $$RSC_SERVER_CACHE_0;
async function GET() {
    try {
        const trades = await loadTrades();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            trades
        });
    } catch (error) {
        console.error("Error fetching trades:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to fetch trades"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1236ff07._.js.map