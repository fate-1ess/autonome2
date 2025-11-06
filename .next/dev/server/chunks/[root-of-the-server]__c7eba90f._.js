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
"[project]/src/app/api/trades/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
;
const prisma = new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]();
const canonicalSymbol = (symbol)=>{
    if (!symbol) return "";
    return symbol.toUpperCase().replace(/[^A-Z0-9]/g, "").replace(/USDT$/, "");
};
const toNumber = (value)=>{
    if (value == null) return null;
    if (typeof value === "number") return Number.isFinite(value) ? value : null;
    if (typeof value === "string" && value.length > 0) {
        const parsed = Number.parseFloat(value);
        return Number.isFinite(parsed) ? parsed : null;
    }
    return null;
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
async function GET() {
    try {
        const closeCalls = await prisma.toolCalls.findMany({
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
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                trades: []
            });
        }
        const modelIds = Array.from(new Set(closeCalls.map((call)=>call.invocation.modelId)));
        const createCalls = await prisma.toolCalls.findMany({
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
            let metadata;
            try {
                metadata = JSON.parse(call.metadata ?? "{}");
            } catch  {
                metadata = {};
            }
            const positions = Array.isArray(metadata.positions) ? metadata.positions : [];
            for (const position of positions){
                const symbol = canonicalSymbol(position.symbol);
                if (!symbol) continue;
                const record = {
                    createdAt: call.createdAt,
                    symbol,
                    modelId: call.invocation.modelId,
                    side: typeof position.side === "string" ? position.side : undefined,
                    quantity: toNumber(position.quantity)
                };
                const key = `${record.modelId}|${record.symbol}`;
                const existing = createLookup.get(key) ?? [];
                existing.push(record);
                createLookup.set(key, existing);
            }
        }
        const trades = closeCalls.flatMap((call)=>{
            let metadata;
            try {
                metadata = JSON.parse(call.metadata ?? "{}");
            } catch  {
                metadata = {};
            }
            const closedPositions = Array.isArray(metadata.closedPositions) ? metadata.closedPositions : [];
            if (closedPositions.length === 0) {
                return [];
            }
            const closedAt = call.createdAt;
            const model = call.invocation.model;
            const modelId = call.invocation.modelId;
            const closingTrades = [];
            closedPositions.forEach((position, idx)=>{
                const symbol = canonicalSymbol(position.symbol ?? metadata.symbols?.[idx]);
                if (!symbol) {
                    return;
                }
                const createRecord = consumeLatestCreateRecord(createLookup, modelId, symbol, closedAt);
                const entryPrice = toNumber(position.entryPrice ?? position.markPrice);
                const exitPrice = toNumber(position.exitPrice ?? position.markPrice);
                const quantity = toNumber(position.quantity ?? createRecord?.quantity);
                const entryNotional = position.entryNotional != null ? toNumber(position.entryNotional) : entryPrice != null && quantity != null ? entryPrice * quantity : null;
                const exitNotional = position.exitNotional != null ? toNumber(position.exitNotional) : exitPrice != null && quantity != null ? exitPrice * quantity : null;
                const pnl = toNumber(position.netPnl ?? position.realizedPnl ?? position.unrealizedPnl);
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

//# sourceMappingURL=%5Broot-of-the-server%5D__c7eba90f._.js.map