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
"[project]/src/lib/modelConfig.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Model configuration for display
__turbopack_context__.s([
    "MODEL_INFO",
    ()=>MODEL_INFO,
    "getModelInfo",
    ()=>getModelInfo
]);
const MODEL_INFO = {
    // "deepseek-r1t2": {
    //   logo: "https://nof1.ai/logos_white/deepseek_logo.png",
    //   color: "#4D6BFE",
    //   label: "DeepSeek R1T2",
    // },  
    "deepseek-v3.1-terminus": {
        logo: "https://nof1.ai/logos_white/deepseek_logo.png",
        color: "#4D6BFE",
        label: "DeepSeek V3.1 Terminus"
    },
    "claude-sonnet-4.5": {
        logo: "https://nof1.ai/logos_white/Claude_logo.png",
        color: "#FF6B35",
        label: "Claude Sonnet 4.5"
    },
    "grok-4": {
        logo: "https://nof1.ai/logos_white/Grok_logo.webp",
        color: "#000000",
        label: "Grok 4"
    },
    "qwen3-max": {
        logo: "https://nof1.ai/logos_white/qwen_logo.png",
        color: "#8B5CF6",
        label: "Qwen3 Max"
    },
    "glm-4.5-air": {
        logo: "/glm.svg",
        color: "#343333",
        label: "GLM 4.5 Air"
    },
    "minimax-m2": {
        logo: "/minimax.png",
        color: "#E62176",
        label: "Minimax M2"
    },
    "buynnhold-btc": {
        logo: "",
        color: "#F7931A",
        label: "Buy & Hold BTC"
    }
};
const deriveModelCandidates = (rawName)=>{
    const trimmed = (rawName ?? "").trim();
    if (!trimmed) {
        return [];
    }
    const candidates = new Set();
    const add = (value)=>{
        if (!value) return;
        const candidate = value.trim();
        if (candidate) {
            candidates.add(candidate);
            candidates.add(candidate.toLowerCase());
        }
    };
    add(trimmed);
    const afterSlash = trimmed.includes("/") ? trimmed.split("/").pop() ?? trimmed : trimmed;
    add(afterSlash);
    const beforeColon = trimmed.includes(":") ? trimmed.split(":")[0] : trimmed;
    add(beforeColon);
    const afterSlashBeforeColon = afterSlash.includes(":") ? afterSlash.split(":")[0] : afterSlash;
    add(afterSlashBeforeColon);
    const expanded = Array.from(candidates);
    for (const candidate of expanded){
        const normalized = candidate.toLowerCase().replace(/[\s_.]+/g, "-").replace(/[/:]+/g, "-").replace(/[^a-z0-9-]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
        if (normalized) {
            candidates.add(normalized);
        }
    }
    return Array.from(candidates).filter(Boolean);
};
function getModelInfo(modelName) {
    const candidates = deriveModelCandidates(modelName);
    for (const candidate of candidates){
        if (MODEL_INFO[candidate]) {
            return MODEL_INFO[candidate];
        }
    }
    return {
        logo: "",
        color: "#888888",
        label: modelName
    };
}
}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/src/server/db/prisma.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma ?? new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]();
if ("TURBOPACK compile-time truthy", 1) {
    globalForPrisma.prisma = prisma;
}
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
const REVALIDATION_PROFILE = {
    expire: 0
};
async function revalidateDataTags(...tags) {
    const unique = Array.from(new Set(tags));
    if (unique.length === 0) {
        return;
    }
    for (const tag of unique){
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidateTag"])(tag, REVALIDATION_PROFILE);
    }
}
}),
"[project]/src/app/api/models/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"8015c9869574d43921a6daad29341033c9a7e20ac2":"$$RSC_SERVER_CACHE_0"},"",""] */ __turbopack_context__.s([
    "$$RSC_SERVER_CACHE_0",
    ()=>$$RSC_SERVER_CACHE_0,
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$cache$2d$wrapper$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/cache-wrapper.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$modelConfig$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/modelConfig.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/db/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2f$tags$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cache/tags.ts [app-route] (ecmascript)");
;
;
;
;
;
;
;
var $$RSC_SERVER_CACHE_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$cache$2d$wrapper$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cache"])("default", "8015c9869574d43921a6daad29341033c9a7e20ac2", 0, async function loadModels() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cacheTag"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2f$tags$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DATA_CACHE_TAGS"].MODELS);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cacheLife"])("hours");
    const models = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].models.findMany({
        select: {
            id: true,
            name: true
        },
        orderBy: {
            name: "asc"
        }
    });
    return models.map((model)=>({
            id: model.id,
            name: model.name
        }));
});
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_CACHE_0, "8015c9869574d43921a6daad29341033c9a7e20ac2", null);
Object["defineProperty"]($$RSC_SERVER_CACHE_0, "name", {
    value: "loadModels",
    writable: false
});
var loadModels = $$RSC_SERVER_CACHE_0;
async function GET() {
    try {
        const models = await loadModels();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            models
        });
    } catch (error) {
        console.error("Failed to fetch models", error);
        // Fallback: return built-in models so the UI can still render when DB is down
        const fallback = Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$modelConfig$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MODEL_INFO"]).map(([id, info])=>({
                id,
                name: info.label || id
            }));
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            models: fallback,
            warning: "Prisma unavailable"
        }, {
            status: 200
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9d8e72c1._.js.map