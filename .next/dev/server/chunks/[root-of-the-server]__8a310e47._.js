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
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

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
"[project]/src/app/api/invocations/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tradingDecisions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/tradingDecisions.ts [app-route] (ecmascript)");
;
;
;
const prisma = new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]();
async function GET() {
    try {
        const invocations = await prisma.invocations.findMany({
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
                timestamp: invocation.createdAt,
                toolCalls: invocation.toolCalls.map((tc)=>{
                    const raw = JSON.parse(tc.metadata);
                    const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tradingDecisions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseTradingToolCallMetadata"])(raw);
                    return {
                        id: tc.id,
                        type: tc.toolCallType,
                        metadata: {
                            raw,
                            decisions: parsed.decisions,
                            results: parsed.results
                        },
                        timestamp: tc.createdAt
                    };
                })
            }));
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

//# sourceMappingURL=%5Broot-of-the-server%5D__8a310e47._.js.map