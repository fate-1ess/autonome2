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
"[project]/src/lib/tradingDecisions.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildDecisionIndex",
    ()=>buildDecisionIndex,
    "parseTradingToolCallMetadata",
    ()=>parseTradingToolCallMetadata
]);
const SIGNAL_LOOKUP = {
    LONG: "LONG",
    SHORT: "SHORT",
    HOLD: "HOLD"
};
const toNumber = (value)=>{
    if (value == null) return null;
    if (typeof value === "number") {
        return Number.isFinite(value) ? value : null;
    }
    if (typeof value === "string" && value.trim().length > 0) {
        const parsed = Number.parseFloat(value);
        return Number.isFinite(parsed) ? parsed : null;
    }
    return null;
};
const toStringValue = (value)=>{
    if (typeof value === "string") {
        const trimmed = value.trim();
        return trimmed.length > 0 ? trimmed : null;
    }
    if (typeof value === "number" && Number.isFinite(value)) {
        return value.toString();
    }
    return null;
};
const normalizeSymbol = (value)=>{
    const str = toStringValue(value);
    if (!str) return null;
    return str.toUpperCase();
};
const normalizeSignal = (value)=>{
    const str = toStringValue(value);
    if (!str) return null;
    const upper = str.toUpperCase();
    if (upper in SIGNAL_LOOKUP) {
        return SIGNAL_LOOKUP[upper];
    }
    return null;
};
const parseDecisionCandidate = (value, fallbackSymbol)=>{
    if (typeof value !== "object" || value === null) return null;
    const record = value;
    const symbol = normalizeSymbol(record.symbol ?? record.market ?? fallbackSymbol);
    if (!symbol) return null;
    const signal = normalizeSignal(record.signal ?? record.side ?? record.action);
    if (!signal) return null;
    const quantity = toNumber(record.quantity ?? record.size ?? record.notional ?? record.amount);
    const leverage = toNumber(record.leverage ?? record.leverageRatio);
    const profitTarget = toNumber(record.profitTarget ?? record.target ?? record.profit_target);
    const stopLoss = toNumber(record.stopLoss ?? record.stop ?? record.stop_loss);
    const invalidationCondition = toStringValue(record.invalidationCondition ?? record.invalidCondition ?? record.invalid_condition ?? record.invalidation_condition) ?? null;
    const confidence = toNumber(record.confidence ?? record.confidenceScore ?? record.confidence_percent ?? record.confidence_percentage);
    const status = toStringValue(record.status ?? record.executionStatus ?? record.execution_status) ?? null;
    return {
        symbol,
        signal,
        quantity,
        leverage,
        profitTarget,
        stopLoss,
        invalidationCondition,
        confidence,
        status
    };
};
const parseResultCandidate = (value, fallbackSymbol)=>{
    if (typeof value !== "object" || value === null) return null;
    const record = value;
    const symbol = normalizeSymbol(record.symbol ?? fallbackSymbol);
    if (!symbol) return null;
    const successValue = record.success ?? record.ok ?? record.executed;
    const success = typeof successValue === "boolean" ? successValue : successValue === 1 || successValue === "true";
    const error = toStringValue(record.error ?? record.reason ?? record.message) ?? null;
    return {
        symbol,
        success,
        error
    };
};
const collectDecisionArrays = (raw)=>{
    const collections = [];
    const candidateKeys = [
        "decisions",
        "positions",
        "actions",
        "entries",
        "closedPositions",
        "signals"
    ];
    for (const key of candidateKeys){
        const value = raw[key];
        if (Array.isArray(value)) {
            collections.push(value);
        }
    }
    return collections;
};
const collectResultArrays = (raw)=>{
    const collections = [];
    const candidateKeys = [
        "results",
        "executions",
        "outcomes",
        "closedPositions"
    ];
    for (const key of candidateKeys){
        const value = raw[key];
        if (Array.isArray(value)) {
            collections.push(value);
        }
    }
    return collections;
};
const parseTradingToolCallMetadata = (raw)=>{
    if (typeof raw !== "object" || raw === null) {
        return {
            decisions: [],
            results: [],
            raw
        };
    }
    const record = raw;
    const decisions = [];
    for (const collection of collectDecisionArrays(record)){
        if (!Array.isArray(collection)) continue;
        for (const item of collection){
            const decision = parseDecisionCandidate(item);
            if (decision) {
                decisions.push(decision);
            }
        }
    }
    // Some metadata uses a single object instead of an array
    if (decisions.length === 0) {
        const fallbackDecision = parseDecisionCandidate(record);
        if (fallbackDecision) {
            decisions.push(fallbackDecision);
        }
    }
    const results = [];
    for (const collection of collectResultArrays(record)){
        if (!Array.isArray(collection)) continue;
        for (const item of collection){
            const result = parseResultCandidate(item);
            if (result) {
                results.push(result);
            }
        }
    }
    return {
        decisions,
        results,
        raw
    };
};
const buildDecisionIndex = (toolCalls)=>{
    const index = new Map();
    for (const toolCall of toolCalls){
        const parsed = parseTradingToolCallMetadata(toolCall.metadata);
        if (!parsed.decisions.length) continue;
        const resultLookup = new Map();
        for (const result of parsed.results){
            resultLookup.set(result.symbol, result);
        }
        for (const decision of parsed.decisions){
            const key = decision.symbol;
            if (!key || index.has(key)) {
                continue;
            }
            index.set(key, {
                ...decision,
                toolCallId: toolCall.id,
                createdAt: toolCall.createdAt,
                toolCallType: toolCall.toolCallType,
                result: resultLookup.get(key) ?? null
            });
        }
    }
    return index;
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
"[project]/src/app/api/invocations/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"80d73b61352beb8768620ed32430cb3805a72b8a7c":"$$RSC_SERVER_CACHE_0"},"",""] */ __turbopack_context__.s([
    "$$RSC_SERVER_CACHE_0",
    ()=>$$RSC_SERVER_CACHE_0,
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$cache$2d$wrapper$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/cache-wrapper.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tradingDecisions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/tradingDecisions.ts [app-route] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/lib/prisma'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
var $$RSC_SERVER_CACHE_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$cache$2d$wrapper$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cache"])("default", "80d73b61352beb8768620ed32430cb3805a72b8a7c", 0, async function loadInvocations() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cacheTag"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2f$tags$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DATA_CACHE_TAGS"].INVOCATIONS);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cacheLife"])({
        stale: 60,
        revalidate: 120,
        expire: 600
    });
    const invocations = await db.invocations.findMany({
        include: {
            model: true,
            toolCalls: true
        },
        orderBy: {
            createdAt: "desc"
        },
        take: 100
    });
    const conversations = invocations.map((invocation)=>({
            id: invocation.id,
            modelId: invocation.model.id,
            modelName: invocation.model.name,
            modelLogo: invocation.model.openRoutermodelName,
            response: invocation.response,
            responsePayload: invocation.responsePayload,
            timestamp: invocation.createdAt.toISOString(),
            toolCalls: invocation.toolCalls.map((tc)=>{
                const raw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$json$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeJsonParse"])(tc.metadata, {});
                const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tradingDecisions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseTradingToolCallMetadata"])(raw);
                return {
                    id: tc.id,
                    type: tc.toolCallType,
                    metadata: {
                        raw,
                        decisions: parsed.decisions,
                        results: parsed.results
                    },
                    timestamp: tc.createdAt.toISOString()
                };
            })
        }));
    return conversations;
});
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_CACHE_0, "80d73b61352beb8768620ed32430cb3805a72b8a7c", null);
Object["defineProperty"]($$RSC_SERVER_CACHE_0, "name", {
    value: "loadInvocations",
    writable: false
});
var loadInvocations = $$RSC_SERVER_CACHE_0;
async function GET() {
    try {
        const conversations = await loadInvocations();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            conversations
        });
    } catch (error) {
        console.error("Error fetching invocations:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to fetch invocations"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__cf69dea0._.js.map