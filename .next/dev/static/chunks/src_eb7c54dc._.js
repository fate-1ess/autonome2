(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/crypto-tracker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CryptoTracker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$number$2d$flow$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@number-flow/react/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$number$2d$flow$2f$react$2f$dist$2f$NumberFlow$2d$client$2d$48rw3j0J$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__N__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/@number-flow/react/dist/NumberFlow-client-48rw3j0J.mjs [app-client] (ecmascript) <export N as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const UPDATE_INTERVAL = 30_000;
const TRACKED_SYMBOLS = [
    "BTC",
    "ETH",
    "SOL"
];
const TRACKED_SYMBOL_SET = new Set(TRACKED_SYMBOLS);
const COIN_STYLES = {
    BTC: {
        badge: "BTC",
        logo: "/btc.svg",
        decimals: 2
    },
    ETH: {
        badge: "ETH",
        logo: "/eth.svg",
        decimals: 2
    },
    SOL: {
        badge: "SOL",
        logo: "/sol.svg",
        decimals: 3
    }
};
function CryptoTracker() {
    _s();
    const [crypto, setCrypto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CryptoTracker.useEffect": ()=>{
            let isMounted = true;
            const fetchCryptoData = {
                "CryptoTracker.useEffect.fetchCryptoData": async ()=>{
                    try {
                        const response = await fetch(`/api/crypto-prices?symbols=${TRACKED_SYMBOLS.join(",")}`, {
                            cache: "no-store"
                        });
                        if (!response.ok) {
                            throw new Error(`Request failed with status ${response.status}`);
                        }
                        const data = await response.json();
                        const entries = Array.isArray(data?.prices) ? data.prices : [];
                        const sanitized = entries.map({
                            "CryptoTracker.useEffect.fetchCryptoData.sanitized": (entry)=>{
                                const symbol = typeof entry?.symbol === "string" ? entry.symbol.toUpperCase() : "";
                                if (!TRACKED_SYMBOL_SET.has(symbol)) return null;
                                const price = typeof entry?.price === "number" && Number.isFinite(entry.price) ? entry.price : null;
                                if (price == null) return null;
                                return {
                                    symbol: symbol,
                                    price
                                };
                            }
                        }["CryptoTracker.useEffect.fetchCryptoData.sanitized"]).filter({
                            "CryptoTracker.useEffect.fetchCryptoData.sanitized": (entry_0)=>Boolean(entry_0)
                        }["CryptoTracker.useEffect.fetchCryptoData.sanitized"]);
                        sanitized.sort({
                            "CryptoTracker.useEffect.fetchCryptoData": (a, b)=>TRACKED_SYMBOLS.indexOf(a.symbol) - TRACKED_SYMBOLS.indexOf(b.symbol)
                        }["CryptoTracker.useEffect.fetchCryptoData"]);
                        if (isMounted) {
                            setCrypto({
                                "CryptoTracker.useEffect.fetchCryptoData": (prev)=>{
                                    const previousBySymbol = new Map(prev.map({
                                        "CryptoTracker.useEffect.fetchCryptoData": (entry_1)=>[
                                                entry_1.symbol,
                                                entry_1
                                            ]
                                    }["CryptoTracker.useEffect.fetchCryptoData"]));
                                    const latestBySymbol = new Map(sanitized.map({
                                        "CryptoTracker.useEffect.fetchCryptoData": (entry_2)=>[
                                                entry_2.symbol,
                                                entry_2.price
                                            ]
                                    }["CryptoTracker.useEffect.fetchCryptoData"]));
                                    const next = [];
                                    TRACKED_SYMBOLS.forEach({
                                        "CryptoTracker.useEffect.fetchCryptoData": (symbol_0)=>{
                                            const currentPrice = latestBySymbol.get(symbol_0);
                                            const previous = previousBySymbol.get(symbol_0);
                                            if (currentPrice == null) {
                                                if (previous) {
                                                    next.push(previous);
                                                }
                                                return;
                                            }
                                            const prevPrice = previous?.price;
                                            const diff = prevPrice && prevPrice > 0 ? (currentPrice - prevPrice) / prevPrice : 0;
                                            next.push({
                                                symbol: symbol_0,
                                                price: currentPrice,
                                                diff
                                            });
                                        }
                                    }["CryptoTracker.useEffect.fetchCryptoData"]);
                                    return next;
                                }
                            }["CryptoTracker.useEffect.fetchCryptoData"]);
                        }
                    } catch (_error) {
                    // Swallow errors to avoid noisy UI when upstream is unavailable
                    }
                }
            }["CryptoTracker.useEffect.fetchCryptoData"];
            fetchCryptoData();
            const interval = setInterval(fetchCryptoData, UPDATE_INTERVAL);
            return ({
                "CryptoTracker.useEffect": ()=>{
                    isMounted = false;
                    clearInterval(interval);
                }
            })["CryptoTracker.useEffect"];
        }
    }["CryptoTracker.useEffect"], []);
    const displayCoins = crypto;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-4 border-b py-[5px] px-6",
        children: displayCoins.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-muted-foreground text-sm",
            children: "Fetching market prices..."
        }, void 0, false, {
            fileName: "[project]/src/components/crypto-tracker.tsx",
            lineNumber: 110,
            columnNumber: 36
        }, this) : displayCoins.map((coin, index)=>{
            const style = COIN_STYLES[coin.symbol];
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-1 flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: `${style.logo}`,
                                        alt: `${coin.symbol} logo`,
                                        width: 16,
                                        height: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/crypto-tracker.tsx",
                                        lineNumber: 115,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground text-sm",
                                        children: coin.symbol
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/crypto-tracker.tsx",
                                        lineNumber: 116,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/crypto-tracker.tsx",
                                lineNumber: 114,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PriceWithDiff, {
                                value: coin.price,
                                diff: coin.diff,
                                decimals: style.decimals
                            }, void 0, false, {
                                fileName: "[project]/src/components/crypto-tracker.tsx",
                                lineNumber: 118,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/crypto-tracker.tsx",
                        lineNumber: 113,
                        columnNumber: 15
                    }, this),
                    index !== displayCoins.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-10 w-px bg-border"
                    }, void 0, false, {
                        fileName: "[project]/src/components/crypto-tracker.tsx",
                        lineNumber: 120,
                        columnNumber: 53
                    }, this)
                ]
            }, coin.symbol, true, {
                fileName: "[project]/src/components/crypto-tracker.tsx",
                lineNumber: 112,
                columnNumber: 14
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/crypto-tracker.tsx",
        lineNumber: 109,
        columnNumber: 10
    }, this);
}
_s(CryptoTracker, "swxaloRz9rFruK3oOdjJQ1gcxpE=");
_c = CryptoTracker;
function PriceWithDiff(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "739e044875c77f40a66c181a6eed5f21664989998e5722497097207d70665a10") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "739e044875c77f40a66c181a6eed5f21664989998e5722497097207d70665a10";
    }
    const { value, diff, decimals } = t0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$number$2d$flow$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useCanAnimate"])();
    const isPositive = diff > 0;
    const isNegative = diff < 0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center gap-1 rounded-full px-2 py-[2px] text-[11px] font-semibold uppercase tracking-wide", isPositive ? "bg-emerald-500/90 text-white" : isNegative ? "bg-red-500/90 text-white" : "bg-muted text-muted-foreground");
    let t1;
    if ($[1] !== decimals) {
        t1 = {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
        };
        $[1] = decimals;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== t1 || $[4] !== value) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 pt-0.5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$number$2d$flow$2f$react$2f$dist$2f$NumberFlow$2d$client$2d$48rw3j0J$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__N__as__default$3e$__["default"], {
                value: value,
                className: "font-mono text-sm font-semibold",
                format: t1
            }, void 0, false, {
                fileName: "[project]/src/components/crypto-tracker.tsx",
                lineNumber: 157,
                columnNumber: 58
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/crypto-tracker.tsx",
            lineNumber: 157,
            columnNumber: 10
        }, this);
        $[3] = t1;
        $[4] = value;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    return t2;
}
_s1(PriceWithDiff, "4Kv/OYeHyQzDalYuIT/icoTaaic=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$number$2d$flow$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useCanAnimate"]
    ];
});
_c1 = PriceWithDiff;
var _c, _c1;
__turbopack_context__.k.register(_c, "CryptoTracker");
__turbopack_context__.k.register(_c1, "PriceWithDiff");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/animated-theme-toggler.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedThemeToggler",
    ()=>AnimatedThemeToggler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const AnimatedThemeToggler = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "b047459ff35bdfd62296e226cf9e356d92e68a06d3d9b9adfd4501f73fd23375") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b047459ff35bdfd62296e226cf9e356d92e68a06d3d9b9adfd4501f73fd23375";
    }
    let className;
    let props;
    let t1;
    if ($[1] !== t0) {
        ({ className, duration: t1, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
        $[4] = t1;
    } else {
        className = $[2];
        props = $[3];
        t1 = $[4];
    }
    const duration = t1 === undefined ? 400 : t1;
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t2;
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ()=>{
            const updateTheme = ()=>{
                setIsDark(document.documentElement.classList.contains("dark"));
            };
            updateTheme();
            const observer = new MutationObserver(updateTheme);
            observer.observe(document.documentElement, {
                attributes: true,
                attributeFilter: [
                    "class"
                ]
            });
            return ()=>observer.disconnect();
        };
        t3 = [];
        $[5] = t2;
        $[6] = t3;
    } else {
        t2 = $[5];
        t3 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[7] !== duration || $[8] !== isDark) {
        t4 = async ()=>{
            if (!buttonRef.current) {
                return;
            }
            await document.startViewTransition(()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"])(()=>{
                    const newTheme = !isDark;
                    setIsDark(newTheme);
                    document.documentElement.classList.toggle("dark");
                    localStorage.setItem("theme", newTheme ? "dark" : "light");
                });
            }).ready;
            const { top, left, width, height } = buttonRef.current.getBoundingClientRect();
            const x = left + width / 2;
            const y = top + height / 2;
            const maxRadius = Math.hypot(Math.max(left, window.innerWidth - left), Math.max(top, window.innerHeight - top));
            document.documentElement.animate({
                clipPath: [
                    `circle(0px at ${x}px ${y}px)`,
                    `circle(${maxRadius}px at ${x}px ${y}px)`
                ]
            }, {
                duration,
                easing: "ease-in-out",
                pseudoElement: "::view-transition-new(root)"
            });
        };
        $[7] = duration;
        $[8] = isDark;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    const toggleTheme = t4;
    let t5;
    if ($[10] !== className) {
        t5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(className);
        $[10] = className;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== isDark) {
        t6 = isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {}, void 0, false, {
            fileName: "[project]/src/components/ui/animated-theme-toggler.tsx",
            lineNumber: 109,
            columnNumber: 19
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {}, void 0, false, {
            fileName: "[project]/src/components/ui/animated-theme-toggler.tsx",
            lineNumber: 109,
            columnNumber: 29
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = isDark;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "sr-only",
            children: "Toggle theme"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/animated-theme-toggler.tsx",
            lineNumber: 117,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== props || $[16] !== t5 || $[17] !== t6 || $[18] !== toggleTheme) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            ref: buttonRef,
            onClick: toggleTheme,
            className: t5,
            ...props,
            children: [
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/animated-theme-toggler.tsx",
            lineNumber: 124,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = props;
        $[16] = t5;
        $[17] = t6;
        $[18] = toggleTheme;
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    return t8;
};
_s(AnimatedThemeToggler, "/XSM8yQTwa/6DCh+xBVI/V/prL4=");
_c = AnimatedThemeToggler;
var _c;
__turbopack_context__.k.register(_c, "AnimatedThemeToggler");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$animated$2d$theme$2d$toggler$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/animated-theme-toggler.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-client] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minimize-2.js [app-client] (ecmascript) <export default as Minimize2>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Header(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "67c832de4cf918ccd3dfc7d84c976e7c7ba6518d3388e873d21ea60d4c1dc851") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "67c832de4cf918ccd3dfc7d84c976e7c7ba6518d3388e873d21ea60d4c1dc851";
    }
    const { isSidebarExpanded, onToggleSidebar } = t0;
    const [, setCurrentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "Header[useEffect()]": ()=>{
                const updateTime = {
                    "Header[useEffect() > updateTime]": ()=>{
                        const now = new Date();
                        const timeString = now.toLocaleTimeString("en-US", {
                            hour12: true,
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit"
                        }).replace(/:/g, ":").toUpperCase();
                        setCurrentTime(timeString);
                    }
                }["Header[useEffect() > updateTime]"];
                updateTime();
                const interval = setInterval(updateTime, 1000);
                return ()=>clearInterval(interval);
            }
        })["Header[useEffect()]"];
        t2 = [];
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    alt: "Autonome logo",
                    height: 32,
                    src: "/logo.png",
                    width: 32,
                    style: {
                        height: "auto"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/header.tsx",
                    lineNumber: 57,
                    columnNumber: 51
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-lg font-mono tracking-wider text-muted-foreground",
                    children: "AutonoMe"
                }, void 0, false, {
                    fileName: "[project]/src/components/header.tsx",
                    lineNumber: 59,
                    columnNumber: 12
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/header.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const t4 = isSidebarExpanded ? "Collapse sidebar" : "Expand sidebar";
    let t5;
    if ($[4] !== isSidebarExpanded) {
        t5 = isSidebarExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__["Minimize2"], {
                    className: "h-3.5 w-3.5"
                }, void 0, false, {
                    fileName: "[project]/src/components/header.tsx",
                    lineNumber: 67,
                    columnNumber: 32
                }, this),
                "Collapse"
            ]
        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                    className: "h-3.5 w-3.5"
                }, void 0, false, {
                    fileName: "[project]/src/components/header.tsx",
                    lineNumber: 67,
                    columnNumber: 85
                }, this),
                "Expand"
            ]
        }, void 0, true);
        $[4] = isSidebarExpanded;
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    let t6;
    if ($[6] !== onToggleSidebar || $[7] !== t4 || $[8] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: onToggleSidebar,
            className: "flex items-center gap-1.5 text-sm font-light text-muted-foreground hover:text-foreground transition-colors",
            "aria-label": t4,
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/components/header.tsx",
            lineNumber: 75,
            columnNumber: 10
        }, this);
        $[6] = onToggleSidebar;
        $[7] = t4;
        $[8] = t5;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$animated$2d$theme$2d$toggler$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedThemeToggler"], {}, void 0, false, {
            fileName: "[project]/src/components/header.tsx",
            lineNumber: 85,
            columnNumber: 10
        }, this);
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== t6) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between border-b px-6 py-4",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-8",
                    children: [
                        t6,
                        t7
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/header.tsx",
                    lineNumber: 92,
                    columnNumber: 84
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/header.tsx",
            lineNumber: 92,
            columnNumber: 10
        }, this);
        $[11] = t6;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    return t8;
}
_s(Header, "n97mZPGXV1BxtxQTVH2mjv3D/9M=");
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
            secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "ba3c165a491ec2993b03ffc50cf3ba726a57d5134ef445a5acacddb50833bbeb") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ba3c165a491ec2993b03ffc50cf3ba726a57d5134ef445a5acacddb50833bbeb";
    }
    let className;
    let props;
    let t1;
    let variant;
    if ($[1] !== t0) {
        ({ className, variant, asChild: t1, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
        $[4] = t1;
        $[5] = variant;
    } else {
        className = $[2];
        props = $[3];
        t1 = $[4];
        variant = $[5];
    }
    const asChild = t1 === undefined ? false : t1;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "span";
    let t2;
    if ($[6] !== className || $[7] !== variant) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className);
        $[6] = className;
        $[7] = variant;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    let t3;
    if ($[9] !== Comp || $[10] !== props || $[11] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
            "data-slot": "badge",
            className: t2,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/badge.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[9] = Comp;
        $[10] = props;
        $[11] = t2;
        $[12] = t3;
    } else {
        t3 = $[12];
    }
    return t3;
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-sm": "size-8",
            "icon-lg": "size-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "1981295a5b14dec6a286624e5c71c884ae28ede63b92f2c1d0dc265cab924e69") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1981295a5b14dec6a286624e5c71c884ae28ede63b92f2c1d0dc265cab924e69";
    }
    let className;
    let props;
    let size;
    let t1;
    let variant;
    if ($[1] !== t0) {
        ({ className, variant, size, asChild: t1, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
        $[4] = size;
        $[5] = t1;
        $[6] = variant;
    } else {
        className = $[2];
        props = $[3];
        size = $[4];
        t1 = $[5];
        variant = $[6];
    }
    const asChild = t1 === undefined ? false : t1;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    let t2;
    if ($[7] !== className || $[8] !== size || $[9] !== variant) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        }));
        $[7] = className;
        $[8] = size;
        $[9] = variant;
        $[10] = t2;
    } else {
        t2 = $[10];
    }
    let t3;
    if ($[11] !== Comp || $[12] !== props || $[13] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
            "data-slot": "button",
            className: t2,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/button.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        $[11] = Comp;
        $[12] = props;
        $[13] = t2;
        $[14] = t3;
    } else {
        t3 = $[14];
    }
    return t3;
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/chart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChartContainer",
    ()=>ChartContainer,
    "ChartLegend",
    ()=>ChartLegend,
    "ChartLegendContent",
    ()=>ChartLegendContent,
    "ChartStyle",
    ()=>ChartStyle,
    "ChartTooltip",
    ()=>ChartTooltip,
    "ChartTooltipContent",
    ()=>ChartTooltipContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Legend.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
;
;
;
;
// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = {
    light: "",
    dark: ".dark"
};
const ChartContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
function useChart() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "418c1ead9beb10ae52b8c86d1d6aef49407d890d69ea11c688c7e60a251f7ae0") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "418c1ead9beb10ae52b8c86d1d6aef49407d890d69ea11c688c7e60a251f7ae0";
    }
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](ChartContext);
    if (!context) {
        throw new Error("useChart must be used within a <ChartContainer />");
    }
    return context;
}
_s(useChart, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
function ChartContainer(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(28);
    if ($[0] !== "418c1ead9beb10ae52b8c86d1d6aef49407d890d69ea11c688c7e60a251f7ae0") {
        for(let $i = 0; $i < 28; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "418c1ead9beb10ae52b8c86d1d6aef49407d890d69ea11c688c7e60a251f7ae0";
    }
    let children;
    let className;
    let config;
    let id;
    let props;
    if ($[1] !== t0) {
        ({ id, className, children, config, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = config;
        $[5] = id;
        $[6] = props;
    } else {
        children = $[2];
        className = $[3];
        config = $[4];
        id = $[5];
        props = $[6];
    }
    const uniqueId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]();
    let t1;
    if ($[7] !== id || $[8] !== uniqueId) {
        t1 = id || uniqueId.replace(/:/g, "");
        $[7] = id;
        $[8] = uniqueId;
        $[9] = t1;
    } else {
        t1 = $[9];
    }
    const chartId = `chart-${t1}`;
    let t2;
    if ($[10] !== config) {
        t2 = {
            config
        };
        $[10] = config;
        $[11] = t2;
    } else {
        t2 = $[11];
    }
    let t3;
    if ($[12] !== className) {
        t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden min-h-[280px] min-w-0", className);
        $[12] = className;
        $[13] = t3;
    } else {
        t3 = $[13];
    }
    let t4;
    if ($[14] !== chartId || $[15] !== config) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartStyle, {
            id: chartId,
            config: config
        }, void 0, false, {
            fileName: "[project]/src/components/ui/chart.tsx",
            lineNumber: 104,
            columnNumber: 10
        }, this);
        $[14] = chartId;
        $[15] = config;
        $[16] = t4;
    } else {
        t4 = $[16];
    }
    let t5;
    if ($[17] !== children) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
            width: "100%",
            height: "100%",
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/chart.tsx",
            lineNumber: 113,
            columnNumber: 10
        }, this);
        $[17] = children;
        $[18] = t5;
    } else {
        t5 = $[18];
    }
    let t6;
    if ($[19] !== chartId || $[20] !== props || $[21] !== t3 || $[22] !== t4 || $[23] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "chart",
            "data-chart": chartId,
            className: t3,
            ...props,
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/chart.tsx",
            lineNumber: 121,
            columnNumber: 10
        }, this);
        $[19] = chartId;
        $[20] = props;
        $[21] = t3;
        $[22] = t4;
        $[23] = t5;
        $[24] = t6;
    } else {
        t6 = $[24];
    }
    let t7;
    if ($[25] !== t2 || $[26] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartContext.Provider, {
            value: t2,
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/components/ui/chart.tsx",
            lineNumber: 133,
            columnNumber: 10
        }, this);
        $[25] = t2;
        $[26] = t6;
        $[27] = t7;
    } else {
        t7 = $[27];
    }
    return t7;
}
_s1(ChartContainer, "j7NPILheLIfrWAvm8S/GM4Sml/8=");
_c = ChartContainer;
const ChartStyle = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "418c1ead9beb10ae52b8c86d1d6aef49407d890d69ea11c688c7e60a251f7ae0") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "418c1ead9beb10ae52b8c86d1d6aef49407d890d69ea11c688c7e60a251f7ae0";
    }
    const { id, config } = t0;
    let t1;
    if ($[1] !== config) {
        t1 = Object.entries(config).filter(_temp);
        $[1] = config;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const colorConfig = t1;
    if (!colorConfig.length) {
        return null;
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = Object.entries(THEMES);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== colorConfig || $[5] !== id) {
        t3 = t2.map((t4)=>{
            const [theme, prefix] = t4;
            return `
${prefix} [data-chart=${id}] {
${colorConfig.map((t5)=>{
                const [key, itemConfig] = t5;
                const color = itemConfig.theme?.[theme] || itemConfig.color;
                return color ? `  --color-${key}: ${color};` : null;
            }).join("\n")}
}
`;
        });
        $[4] = colorConfig;
        $[5] = id;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const t4 = t3.join("\n");
    let t5;
    if ($[7] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
            dangerouslySetInnerHTML: {
                __html: t4
            }
        }, void 0, false, {
            fileName: "[project]/src/components/ui/chart.tsx",
            lineNumber: 196,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t4;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    return t5;
};
_c1 = ChartStyle;
const ChartTooltip = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"];
function ChartTooltipContent(t0) {
    _s2();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(46);
    if ($[0] !== "418c1ead9beb10ae52b8c86d1d6aef49407d890d69ea11c688c7e60a251f7ae0") {
        for(let $i = 0; $i < 46; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "418c1ead9beb10ae52b8c86d1d6aef49407d890d69ea11c688c7e60a251f7ae0";
    }
    const { active, payload, className, indicator: t1, hideLabel: t2, hideIndicator: t3, label, labelFormatter, labelClassName, formatter, color, nameKey, labelKey } = t0;
    const indicator = t1 === undefined ? "dot" : t1;
    const hideLabel = t2 === undefined ? false : t2;
    const hideIndicator = t3 === undefined ? false : t3;
    const { config } = useChart();
    let t4;
    bb0: {
        if (hideLabel || !payload?.length) {
            t4 = null;
            break bb0;
        }
        const [item] = payload;
        const key = `${labelKey || item?.dataKey || item?.name || "value"}`;
        let t5;
        if ($[1] !== config || $[2] !== item || $[3] !== key) {
            t5 = getPayloadConfigFromPayload(config, item, key);
            $[1] = config;
            $[2] = item;
            $[3] = key;
            $[4] = t5;
        } else {
            t5 = $[4];
        }
        const itemConfig = t5;
        const value = !labelKey && typeof label === "string" ? config[label]?.label || label : itemConfig?.label;
        if (labelFormatter) {
            let t6;
            if ($[5] !== labelClassName) {
                t6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-medium", labelClassName);
                $[5] = labelClassName;
                $[6] = t6;
            } else {
                t6 = $[6];
            }
            let t7;
            if ($[7] !== labelFormatter || $[8] !== payload || $[9] !== value) {
                t7 = labelFormatter(value, payload);
                $[7] = labelFormatter;
                $[8] = payload;
                $[9] = value;
                $[10] = t7;
            } else {
                t7 = $[10];
            }
            let t8;
            if ($[11] !== t6 || $[12] !== t7) {
                t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: t6,
                    children: t7
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/chart.tsx",
                    lineNumber: 277,
                    columnNumber: 14
                }, this);
                $[11] = t6;
                $[12] = t7;
                $[13] = t8;
            } else {
                t8 = $[13];
            }
            t4 = t8;
            break bb0;
        }
        if (!value) {
            t4 = null;
            break bb0;
        }
        let t6;
        if ($[14] !== labelClassName) {
            t6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-medium", labelClassName);
            $[14] = labelClassName;
            $[15] = t6;
        } else {
            t6 = $[15];
        }
        let t7;
        if ($[16] !== t6 || $[17] !== value) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: t6,
                children: value
            }, void 0, false, {
                fileName: "[project]/src/components/ui/chart.tsx",
                lineNumber: 301,
                columnNumber: 12
            }, this);
            $[16] = t6;
            $[17] = value;
            $[18] = t7;
        } else {
            t7 = $[18];
        }
        t4 = t7;
    }
    const tooltipLabel = t4;
    if (!active || !payload?.length) {
        return null;
    }
    const nestLabel = payload.length === 1 && indicator !== "dot";
    let t5;
    if ($[19] !== className) {
        t5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl", className);
        $[19] = className;
        $[20] = t5;
    } else {
        t5 = $[20];
    }
    const t6 = !nestLabel ? tooltipLabel : null;
    let t7;
    if ($[21] !== color || $[22] !== config || $[23] !== formatter || $[24] !== hideIndicator || $[25] !== indicator || $[26] !== nameKey || $[27] !== nestLabel || $[28] !== payload || $[29] !== tooltipLabel) {
        let t8;
        if ($[31] !== color || $[32] !== config || $[33] !== formatter || $[34] !== hideIndicator || $[35] !== indicator || $[36] !== nameKey || $[37] !== nestLabel || $[38] !== tooltipLabel) {
            t8 = ({
                "ChartTooltipContent[(anonymous)()]": (item_1, index)=>{
                    const key_0 = `${nameKey || item_1.name || item_1.dataKey || "value"}`;
                    const itemConfig_0 = getPayloadConfigFromPayload(config, item_1, key_0);
                    const indicatorColor = color || item_1.payload.fill || item_1.color;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5", indicator === "dot" && "items-center"),
                        children: formatter && item_1?.value !== undefined && item_1.name ? formatter(item_1.value, item_1.name, item_1, index, item_1.payload) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                itemConfig_0?.icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(itemConfig_0.icon, {}, void 0, false, {
                                    fileName: "[project]/src/components/ui/chart.tsx",
                                    lineNumber: 333,
                                    columnNumber: 354
                                }, this) : !hideIndicator && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)", {
                                        "h-2.5 w-2.5": indicator === "dot",
                                        "w-1": indicator === "line",
                                        "w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
                                        "my-0.5": nestLabel && indicator === "dashed"
                                    }),
                                    style: {
                                        "--color-bg": indicatorColor,
                                        "--color-border": indicatorColor
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/chart.tsx",
                                    lineNumber: 333,
                                    columnNumber: 396
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-1 justify-between leading-none", nestLabel ? "items-end" : "items-center"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-1.5",
                                            children: [
                                                nestLabel ? tooltipLabel : null,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-muted-foreground",
                                                    children: itemConfig_0?.label || item_1.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/chart.tsx",
                                                    lineNumber: 341,
                                                    columnNumber: 213
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ui/chart.tsx",
                                            lineNumber: 341,
                                            columnNumber: 150
                                        }, this),
                                        item_1.value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-foreground font-mono font-medium tabular-nums",
                                            children: item_1.value.toLocaleString()
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/chart.tsx",
                                            lineNumber: 341,
                                            columnNumber: 319
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/chart.tsx",
                                    lineNumber: 341,
                                    columnNumber: 44
                                }, this)
                            ]
                        }, void 0, true)
                    }, item_1.dataKey, false, {
                        fileName: "[project]/src/components/ui/chart.tsx",
                        lineNumber: 333,
                        columnNumber: 18
                    }, this);
                }
            })["ChartTooltipContent[(anonymous)()]"];
            $[31] = color;
            $[32] = config;
            $[33] = formatter;
            $[34] = hideIndicator;
            $[35] = indicator;
            $[36] = nameKey;
            $[37] = nestLabel;
            $[38] = tooltipLabel;
            $[39] = t8;
        } else {
            t8 = $[39];
        }
        t7 = payload.filter(_ChartTooltipContentPayloadFilter).map(t8);
        $[21] = color;
        $[22] = config;
        $[23] = formatter;
        $[24] = hideIndicator;
        $[25] = indicator;
        $[26] = nameKey;
        $[27] = nestLabel;
        $[28] = payload;
        $[29] = tooltipLabel;
        $[30] = t7;
    } else {
        t7 = $[30];
    }
    let t8;
    if ($[40] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-1.5",
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/components/ui/chart.tsx",
            lineNumber: 372,
            columnNumber: 10
        }, this);
        $[40] = t7;
        $[41] = t8;
    } else {
        t8 = $[41];
    }
    let t9;
    if ($[42] !== t5 || $[43] !== t6 || $[44] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: [
                t6,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/chart.tsx",
            lineNumber: 380,
            columnNumber: 10
        }, this);
        $[42] = t5;
        $[43] = t6;
        $[44] = t8;
        $[45] = t9;
    } else {
        t9 = $[45];
    }
    return t9;
}
_s2(ChartTooltipContent, "NieUY0Ve7cD6UfQwSGHz8JXgxAc=", false, function() {
    return [
        useChart
    ];
});
_c2 = ChartTooltipContent;
function _ChartTooltipContentPayloadFilter(item_0) {
    return item_0.type !== "none";
}
const ChartLegend = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"];
function ChartLegendContent(t0) {
    _s3();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "418c1ead9beb10ae52b8c86d1d6aef49407d890d69ea11c688c7e60a251f7ae0") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "418c1ead9beb10ae52b8c86d1d6aef49407d890d69ea11c688c7e60a251f7ae0";
    }
    const { className, hideIcon: t1, payload, verticalAlign: t2, nameKey } = t0;
    const hideIcon = t1 === undefined ? false : t1;
    const verticalAlign = t2 === undefined ? "bottom" : t2;
    const { config } = useChart();
    if (!payload?.length) {
        return null;
    }
    const t3 = verticalAlign === "top" ? "pb-3" : "pt-3";
    let t4;
    if ($[1] !== className || $[2] !== t3) {
        t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-center gap-4", t3, className);
        $[1] = className;
        $[2] = t3;
        $[3] = t4;
    } else {
        t4 = $[3];
    }
    let t5;
    if ($[4] !== config || $[5] !== hideIcon || $[6] !== nameKey || $[7] !== payload) {
        let t6;
        if ($[9] !== config || $[10] !== hideIcon || $[11] !== nameKey) {
            t6 = ({
                "ChartLegendContent[(anonymous)()]": (item_0)=>{
                    const key = `${nameKey || item_0.dataKey || "value"}`;
                    const itemConfig = getPayloadConfigFromPayload(config, item_0, key);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3"),
                        children: [
                            itemConfig?.icon && !hideIcon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(itemConfig.icon, {}, void 0, false, {
                                fileName: "[project]/src/components/ui/chart.tsx",
                                lineNumber: 435,
                                columnNumber: 173
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-2 w-2 shrink-0 rounded-[2px]",
                                style: {
                                    backgroundColor: item_0.color
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/chart.tsx",
                                lineNumber: 435,
                                columnNumber: 195
                            }, this),
                            itemConfig?.label
                        ]
                    }, item_0.value, true, {
                        fileName: "[project]/src/components/ui/chart.tsx",
                        lineNumber: 435,
                        columnNumber: 18
                    }, this);
                }
            })["ChartLegendContent[(anonymous)()]"];
            $[9] = config;
            $[10] = hideIcon;
            $[11] = nameKey;
            $[12] = t6;
        } else {
            t6 = $[12];
        }
        t5 = payload.filter(_ChartLegendContentPayloadFilter).map(t6);
        $[4] = config;
        $[5] = hideIcon;
        $[6] = nameKey;
        $[7] = payload;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[13] !== t4 || $[14] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/components/ui/chart.tsx",
            lineNumber: 458,
            columnNumber: 10
        }, this);
        $[13] = t4;
        $[14] = t5;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    return t6;
}
_s3(ChartLegendContent, "NieUY0Ve7cD6UfQwSGHz8JXgxAc=", false, function() {
    return [
        useChart
    ];
});
_c3 = ChartLegendContent;
// Helper to extract item config from a payload.
function _ChartLegendContentPayloadFilter(item) {
    return item.type !== "none";
}
function getPayloadConfigFromPayload(config, payload, key) {
    if (typeof payload !== "object" || payload === null) {
        return undefined;
    }
    const payloadPayload = "payload" in payload && typeof payload.payload === "object" && payload.payload !== null ? payload.payload : undefined;
    let configLabelKey = key;
    if (key in payload && typeof payload[key] === "string") {
        configLabelKey = payload[key];
    } else if (payloadPayload && key in payloadPayload && typeof payloadPayload[key] === "string") {
        configLabelKey = payloadPayload[key];
    }
    return configLabelKey in config ? config[configLabelKey] : config[key];
}
;
function _temp(t0) {
    const [, config_0] = t0;
    return config_0.theme || config_0.color;
}
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "ChartContainer");
__turbopack_context__.k.register(_c1, "ChartStyle");
__turbopack_context__.k.register(_c2, "ChartTooltipContent");
__turbopack_context__.k.register(_c3, "ChartLegendContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/modelConfig.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/glowing-line.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlowingLineChart",
    ()=>GlowingLineChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/LineChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/ReferenceLine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$modelConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/modelConfig.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
// Custom dot component for the last point with icon and value
const CustomEndDot = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(36);
    if ($[0] !== "3f45afe4c8b36175b125fcd84eb21575165913f5bcab2a5b222e733a35069d64") {
        for(let $i = 0; $i < 36; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3f45afe4c8b36175b125fcd84eb21575165913f5bcab2a5b222e733a35069d64";
    }
    const { cx, cy, value, dataKey, index, data, hoveredLine } = props;
    if (!cx || !cy || !value || !dataKey || !data) {
        return null;
    }
    if (index !== data.length - 1) {
        return null;
    }
    const t0 = String(dataKey);
    let t1;
    if ($[1] !== t0) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$modelConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getModelInfo"])(t0);
        $[1] = t0;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const modelInfo = t1;
    if (!modelInfo || !modelInfo.logo) {
        return null;
    }
    const { logo, color } = modelInfo;
    const isHovered = hoveredLine === dataKey;
    const isDimmed = hoveredLine && hoveredLine !== dataKey;
    let t2;
    if ($[3] !== value) {
        t2 = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 2
        }).format(value);
        $[3] = value;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const formattedValue = t2;
    const t3 = isHovered ? 16 : 14;
    const t4 = isDimmed ? 0.3 : 1;
    let t5;
    if ($[5] !== color || $[6] !== cx || $[7] !== cy || $[8] !== t3 || $[9] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: cx,
            cy: cy,
            r: t3,
            fill: color,
            opacity: t4
        }, void 0, false, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 86,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = color;
        $[6] = cx;
        $[7] = cy;
        $[8] = t3;
        $[9] = t4;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    const t6 = cx - (isHovered ? 16 : 14);
    const t7 = cy - (isHovered ? 16 : 14);
    const t8 = isHovered ? 32 : 28;
    const t9 = isHovered ? 32 : 28;
    const t10 = `circle(${isHovered ? 16 : 14}px at 50% 50%)`;
    let t11;
    if ($[11] !== t10) {
        t11 = {
            clipPath: t10,
            pointerEvents: "none"
        };
        $[11] = t10;
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    const t12 = isDimmed ? 0.3 : 1;
    let t13;
    if ($[13] !== logo || $[14] !== t11 || $[15] !== t12 || $[16] !== t6 || $[17] !== t7 || $[18] !== t8 || $[19] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("image", {
            x: t6,
            y: t7,
            width: t8,
            height: t9,
            href: logo,
            preserveAspectRatio: "xMidYMid meet",
            style: t11,
            opacity: t12
        }, void 0, false, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 115,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = logo;
        $[14] = t11;
        $[15] = t12;
        $[16] = t6;
        $[17] = t7;
        $[18] = t8;
        $[19] = t9;
        $[20] = t13;
    } else {
        t13 = $[20];
    }
    const t14 = cx + 25;
    const t15 = cy - 12;
    const t16 = isDimmed ? 0.3 : 1;
    const t17 = isHovered ? "2px solid white" : "none";
    let t18;
    if ($[21] !== color || $[22] !== t17) {
        t18 = {
            backgroundColor: color,
            color: "white",
            padding: "2px 8px",
            borderRadius: "4px",
            fontSize: "12px",
            fontWeight: "bold",
            whiteSpace: "nowrap",
            border: t17
        };
        $[21] = color;
        $[22] = t17;
        $[23] = t18;
    } else {
        t18 = $[23];
    }
    let t19;
    if ($[24] !== formattedValue || $[25] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t18,
            children: formattedValue
        }, void 0, false, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 151,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = formattedValue;
        $[25] = t18;
        $[26] = t19;
    } else {
        t19 = $[26];
    }
    let t20;
    if ($[27] !== t14 || $[28] !== t15 || $[29] !== t16 || $[30] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("foreignObject", {
            x: t14,
            y: t15,
            width: 100,
            height: 24,
            opacity: t16,
            children: t19
        }, void 0, false, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 160,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = t14;
        $[28] = t15;
        $[29] = t16;
        $[30] = t19;
        $[31] = t20;
    } else {
        t20 = $[31];
    }
    let t21;
    if ($[32] !== t13 || $[33] !== t20 || $[34] !== t5) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            children: [
                t5,
                t13,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 171,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = t13;
        $[33] = t20;
        $[34] = t5;
        $[35] = t21;
    } else {
        t21 = $[35];
    }
    return t21;
};
_c = CustomEndDot;
// Custom tooltip that shows only the hovered line's value
const CustomTooltip = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "3f45afe4c8b36175b125fcd84eb21575165913f5bcab2a5b222e733a35069d64") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3f45afe4c8b36175b125fcd84eb21575165913f5bcab2a5b222e733a35069d64";
    }
    const { active, payload, hoveredLine } = t0;
    if (!active || !payload || !payload.length || !hoveredLine) {
        return null;
    }
    let modelInfo;
    let t1;
    let t2;
    if ($[1] !== hoveredLine || $[2] !== payload) {
        t2 = Symbol.for("react.early_return_sentinel");
        bb0: {
            let t3;
            if ($[6] !== hoveredLine) {
                t3 = (p)=>p.dataKey === hoveredLine;
                $[6] = hoveredLine;
                $[7] = t3;
            } else {
                t3 = $[7];
            }
            const hoveredData = payload.find(t3);
            if (!hoveredData) {
                t2 = null;
                break bb0;
            }
            let t4;
            if ($[8] !== hoveredLine) {
                t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$modelConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getModelInfo"])(hoveredLine);
                $[8] = hoveredLine;
                $[9] = t4;
            } else {
                t4 = $[9];
            }
            modelInfo = t4;
            if (!modelInfo) {
                t2 = null;
                break bb0;
            }
            t1 = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 2
            }).format(hoveredData.value);
        }
        $[1] = hoveredLine;
        $[2] = payload;
        $[3] = modelInfo;
        $[4] = t1;
        $[5] = t2;
    } else {
        modelInfo = $[3];
        t1 = $[4];
        t2 = $[5];
    }
    if (t2 !== Symbol.for("react.early_return_sentinel")) {
        return t2;
    }
    const formattedValue = t1;
    let t3;
    if ($[10] !== modelInfo.color) {
        t3 = {
            backgroundColor: modelInfo.color,
            color: "white",
            padding: "8px 12px",
            borderRadius: "6px",
            fontSize: "14px",
            fontWeight: "bold",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
        };
        $[10] = modelInfo.color;
        $[11] = t3;
    } else {
        t3 = $[11];
    }
    let t4;
    if ($[12] !== formattedValue || $[13] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t3,
            children: formattedValue
        }, void 0, false, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 269,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = formattedValue;
        $[13] = t3;
        $[14] = t4;
    } else {
        t4 = $[14];
    }
    return t4;
};
_c1 = CustomTooltip;
function GlowingLineChart(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(102);
    if ($[0] !== "3f45afe4c8b36175b125fcd84eb21575165913f5bcab2a5b222e733a35069d64") {
        for(let $i = 0; $i < 102; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3f45afe4c8b36175b125fcd84eb21575165913f5bcab2a5b222e733a35069d64";
    }
    const { chartData, chartConfig, valueMode: t1, onValueModeChange, timeFilter: t2, onTimeFilterChange, hoveredLine: externalHoveredLine, onHoverLine } = t0;
    const valueMode = t1 === undefined ? "usd" : t1;
    const timeFilter = t2 === undefined ? "all" : t2;
    const [internalHoveredLine, setInternalHoveredLine] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const hoveredLine = externalHoveredLine ?? internalHoveredLine;
    let t3;
    if ($[1] !== onHoverLine) {
        t3 = ({
            "GlowingLineChart[setHoveredLine]": (key)=>{
                setInternalHoveredLine(key);
                onHoverLine?.(key);
            }
        })["GlowingLineChart[setHoveredLine]"];
        $[1] = onHoverLine;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    const setHoveredLine = t3;
    let t4;
    if ($[3] !== chartConfig) {
        t4 = Object.keys(chartConfig).filter(_GlowingLineChartAnonymous);
        $[3] = chartConfig;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    const modelKeys = t4;
    let t5;
    let t6;
    if ($[5] !== modelKeys) {
        t5 = ({
            "GlowingLineChart[useEffect()]": ()=>{
                const modelLogos = modelKeys.map(_GlowingLineChartUseEffectModelKeysMap).filter(_GlowingLineChartUseEffectAnonymous);
                modelLogos.forEach(_GlowingLineChartUseEffectModelLogosForEach);
            }
        })["GlowingLineChart[useEffect()]"];
        t6 = [
            modelKeys
        ];
        $[5] = modelKeys;
        $[6] = t5;
        $[7] = t6;
    } else {
        t5 = $[6];
        t6 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    chartData.at(-1) ?? {
        month: ""
    };
    const isPercent = valueMode === "percent";
    let t7;
    if ($[8] !== isPercent) {
        t7 = isPercent ? {
            domain: [
                -100,
                150
            ],
            ticks: [
                -100,
                -50,
                0,
                50,
                100,
                150
            ]
        } : {
            domain: [
                0,
                25000
            ],
            ticks: [
                0,
                5000,
                10000,
                15000,
                20000,
                25000
            ]
        };
        $[8] = isPercent;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    const yAxisConfig = t7;
    const t8 = valueMode === "usd";
    let t10;
    let t9;
    if ($[10] !== onValueModeChange) {
        t9 = ({
            "GlowingLineChart[<Button>.onClick]": ()=>onValueModeChange?.("usd")
        })["GlowingLineChart[<Button>.onClick]"];
        t10 = ({
            "GlowingLineChart[<Button>.onKeyDown]": (e)=>{
                if (e.key === "Enter" || e.key === " ") {
                    onValueModeChange?.("usd");
                }
            }
        })["GlowingLineChart[<Button>.onKeyDown]"];
        $[10] = onValueModeChange;
        $[11] = t10;
        $[12] = t9;
    } else {
        t10 = $[11];
        t9 = $[12];
    }
    const t11 = valueMode === "usd" ? "default" : "outline";
    let t12;
    if ($[13] !== t10 || $[14] !== t11 || $[15] !== t8 || $[16] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            "aria-pressed": t8,
            className: "h-8 px-3 text-xs font-medium transition-all",
            onClick: t9,
            onKeyDown: t10,
            type: "button",
            variant: t11,
            children: "$"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 384,
            columnNumber: 11
        }, this);
        $[13] = t10;
        $[14] = t11;
        $[15] = t8;
        $[16] = t9;
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    const t13 = valueMode === "percent";
    let t14;
    let t15;
    if ($[18] !== onValueModeChange) {
        t14 = ({
            "GlowingLineChart[<Button>.onClick]": ()=>onValueModeChange?.("percent")
        })["GlowingLineChart[<Button>.onClick]"];
        t15 = ({
            "GlowingLineChart[<Button>.onKeyDown]": (e_0)=>{
                if (e_0.key === "Enter" || e_0.key === " ") {
                    onValueModeChange?.("percent");
                }
            }
        })["GlowingLineChart[<Button>.onKeyDown]"];
        $[18] = onValueModeChange;
        $[19] = t14;
        $[20] = t15;
    } else {
        t14 = $[19];
        t15 = $[20];
    }
    const t16 = valueMode === "percent" ? "default" : "outline";
    let t17;
    if ($[21] !== t13 || $[22] !== t14 || $[23] !== t15 || $[24] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            "aria-pressed": t13,
            className: "h-8 px-3 text-xs font-medium transition-all",
            onClick: t14,
            onKeyDown: t15,
            type: "button",
            variant: t16,
            children: "%"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 417,
            columnNumber: 11
        }, this);
        $[21] = t13;
        $[22] = t14;
        $[23] = t15;
        $[24] = t16;
        $[25] = t17;
    } else {
        t17 = $[25];
    }
    let t18;
    if ($[26] !== t12 || $[27] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1",
            children: [
                t12,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 428,
            columnNumber: 11
        }, this);
        $[26] = t12;
        $[27] = t17;
        $[28] = t18;
    } else {
        t18 = $[28];
    }
    let t19;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-sm font-semibold uppercase tracking-wider",
            children: "TOTAL ACCOUNT VALUE"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 437,
            columnNumber: 11
        }, this);
        $[29] = t19;
    } else {
        t19 = $[29];
    }
    let t20;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center items-center gap-2",
                    children: [
                        t19,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                            className: "border-none bg-green-500/10 text-green-500 hover:bg-green-500/20 transition-colors",
                            variant: "outline",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                    className: "h-3.5 w-3.5 mr-1"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/glowing-line.tsx",
                                    lineNumber: 444,
                                    columnNumber: 221
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold",
                                    children: "Live"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/glowing-line.tsx",
                                    lineNumber: 444,
                                    columnNumber: 264
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/glowing-line.tsx",
                            lineNumber: 444,
                            columnNumber: 101
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/glowing-line.tsx",
                    lineNumber: 444,
                    columnNumber: 40
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-muted-foreground mt-1",
                    children: "Real-time model equity tracking"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/glowing-line.tsx",
                    lineNumber: 444,
                    columnNumber: 321
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 444,
            columnNumber: 11
        }, this);
        $[30] = t20;
    } else {
        t20 = $[30];
    }
    const t21 = timeFilter === "all";
    let t22;
    let t23;
    if ($[31] !== onTimeFilterChange) {
        t22 = ({
            "GlowingLineChart[<Button>.onClick]": ()=>onTimeFilterChange?.("all")
        })["GlowingLineChart[<Button>.onClick]"];
        t23 = ({
            "GlowingLineChart[<Button>.onKeyDown]": (e_1)=>{
                if (e_1.key === "Enter" || e_1.key === " ") {
                    onTimeFilterChange?.("all");
                }
            }
        })["GlowingLineChart[<Button>.onKeyDown]"];
        $[31] = onTimeFilterChange;
        $[32] = t22;
        $[33] = t23;
    } else {
        t22 = $[32];
        t23 = $[33];
    }
    const t24 = timeFilter === "all" ? "default" : "outline";
    let t25;
    if ($[34] !== t21 || $[35] !== t22 || $[36] !== t23 || $[37] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            "aria-pressed": t21,
            className: "h-8 px-3 text-xs font-medium transition-all",
            onClick: t22,
            onKeyDown: t23,
            type: "button",
            variant: t24,
            children: "ALL"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 473,
            columnNumber: 11
        }, this);
        $[34] = t21;
        $[35] = t22;
        $[36] = t23;
        $[37] = t24;
        $[38] = t25;
    } else {
        t25 = $[38];
    }
    const t26 = timeFilter === "72h";
    let t27;
    let t28;
    if ($[39] !== onTimeFilterChange) {
        t27 = ({
            "GlowingLineChart[<Button>.onClick]": ()=>onTimeFilterChange?.("72h")
        })["GlowingLineChart[<Button>.onClick]"];
        t28 = ({
            "GlowingLineChart[<Button>.onKeyDown]": (e_2)=>{
                if (e_2.key === "Enter" || e_2.key === " ") {
                    onTimeFilterChange?.("72h");
                }
            }
        })["GlowingLineChart[<Button>.onKeyDown]"];
        $[39] = onTimeFilterChange;
        $[40] = t27;
        $[41] = t28;
    } else {
        t27 = $[40];
        t28 = $[41];
    }
    const t29 = timeFilter === "72h" ? "default" : "outline";
    let t30;
    if ($[42] !== t26 || $[43] !== t27 || $[44] !== t28 || $[45] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            "aria-pressed": t26,
            className: "h-8 px-3 text-xs font-medium transition-all",
            onClick: t27,
            onKeyDown: t28,
            type: "button",
            variant: t29,
            children: "72H"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 506,
            columnNumber: 11
        }, this);
        $[42] = t26;
        $[43] = t27;
        $[44] = t28;
        $[45] = t29;
        $[46] = t30;
    } else {
        t30 = $[46];
    }
    let t31;
    if ($[47] !== t25 || $[48] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1",
            children: [
                t25,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 517,
            columnNumber: 11
        }, this);
        $[47] = t25;
        $[48] = t30;
        $[49] = t31;
    } else {
        t31 = $[49];
    }
    let t32;
    if ($[50] !== t18 || $[51] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-6 py-4 border-b",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-2",
                children: [
                    t18,
                    t20,
                    t31
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/glowing-line.tsx",
                lineNumber: 526,
                columnNumber: 47
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 526,
            columnNumber: 11
        }, this);
        $[50] = t18;
        $[51] = t31;
        $[52] = t32;
    } else {
        t32 = $[52];
    }
    let t33;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = {
            left: 10,
            right: 120,
            top: 20,
            bottom: 60
        };
        $[53] = t33;
    } else {
        t33 = $[53];
    }
    let t34;
    if ($[54] !== setHoveredLine) {
        t34 = ({
            "GlowingLineChart[<LineChart>.onMouseLeave]": ()=>setHoveredLine(null)
        })["GlowingLineChart[<LineChart>.onMouseLeave]"];
        $[54] = setHoveredLine;
        $[55] = t34;
    } else {
        t34 = $[55];
    }
    let t35;
    let t36;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = {
            background: "transparent"
        };
        t36 = Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$modelConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MODEL_INFO"]).map(_GlowingLineChartAnonymous2);
        $[56] = t35;
        $[57] = t36;
    } else {
        t35 = $[56];
        t36 = $[57];
    }
    let t37;
    if ($[58] !== chartConfig || $[59] !== modelKeys) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
            children: [
                t36,
                modelKeys.map({
                    "GlowingLineChart[modelKeys.map()]": (key_3)=>{
                        const modelInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$modelConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getModelInfo"])(key_3);
                        const color = modelInfo?.color || chartConfig[key_3]?.color || "hsl(var(--chart-1))";
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: `gradient-${key_3}`,
                            x1: "0",
                            y1: "0",
                            x2: "0",
                            y2: "1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0%",
                                    stopColor: color,
                                    stopOpacity: 0.3
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/glowing-line.tsx",
                                    lineNumber: 574,
                                    columnNumber: 113
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "100%",
                                    stopColor: color,
                                    stopOpacity: 0
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/glowing-line.tsx",
                                    lineNumber: 574,
                                    columnNumber: 169
                                }, this)
                            ]
                        }, `gradient-${key_3}`, true, {
                            fileName: "[project]/src/components/ui/glowing-line.tsx",
                            lineNumber: 574,
                            columnNumber: 18
                        }, this);
                    }
                }["GlowingLineChart[modelKeys.map()]"])
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 570,
            columnNumber: 11
        }, this);
        $[58] = chartConfig;
        $[59] = modelKeys;
        $[60] = t37;
    } else {
        t37 = $[60];
    }
    let t38;
    if ($[61] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
            children: "Model performance over time"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 585,
            columnNumber: 11
        }, this);
        $[61] = t38;
    } else {
        t38 = $[61];
    }
    let t39;
    if ($[62] !== yAxisConfig.ticks) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
            strokeDasharray: "3 3",
            vertical: false,
            stroke: "hsl(var(--border))",
            opacity: 0.2,
            horizontalPoints: yAxisConfig.ticks
        }, void 0, false, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 592,
            columnNumber: 11
        }, this);
        $[62] = yAxisConfig.ticks;
        $[63] = t39;
    } else {
        t39 = $[63];
    }
    let t40;
    if ($[64] === Symbol.for("react.memo_cache_sentinel")) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
            axisLine: false,
            dataKey: "month",
            tickLine: false,
            tickMargin: 12,
            tick: {
                fill: "hsl(var(--muted-foreground))",
                fontSize: 11
            },
            interval: "preserveStartEnd",
            angle: -45,
            textAnchor: "end",
            height: 80
        }, void 0, false, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 600,
            columnNumber: 11
        }, this);
        $[64] = t40;
    } else {
        t40 = $[64];
    }
    let t41;
    if ($[65] !== isPercent) {
        t41 = ({
            "GlowingLineChart[<YAxis>.tickFormatter]": (v_0)=>isPercent ? `${Math.round(v_0)}%` : new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    maximumFractionDigits: 0
                }).format(v_0)
        })["GlowingLineChart[<YAxis>.tickFormatter]"];
        $[65] = isPercent;
        $[66] = t41;
    } else {
        t41 = $[66];
    }
    let t42;
    if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = {
            fill: "hsl(var(--muted-foreground))",
            fontSize: 11
        };
        $[67] = t42;
    } else {
        t42 = $[67];
    }
    let t43;
    if ($[68] !== t41 || $[69] !== yAxisConfig.domain || $[70] !== yAxisConfig.ticks) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
            axisLine: false,
            domain: yAxisConfig.domain,
            ticks: yAxisConfig.ticks,
            tickFormatter: t41,
            tickLine: false,
            tick: t42,
            width: 80
        }, void 0, false, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 634,
            columnNumber: 11
        }, this);
        $[68] = t41;
        $[69] = yAxisConfig.domain;
        $[70] = yAxisConfig.ticks;
        $[71] = t43;
    } else {
        t43 = $[71];
    }
    let t44;
    if ($[72] !== isPercent) {
        t44 = isPercent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferenceLine"], {
            y: 0,
            stroke: "hsl(var(--muted-foreground))",
            strokeDasharray: "5 5",
            opacity: 0.4,
            strokeWidth: 1.5
        }, void 0, false, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 644,
            columnNumber: 24
        }, this);
        $[72] = isPercent;
        $[73] = t44;
    } else {
        t44 = $[73];
    }
    let t45;
    if ($[74] !== hoveredLine) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomTooltip, {
            hoveredLine: hoveredLine
        }, void 0, false, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 652,
            columnNumber: 11
        }, this);
        $[74] = hoveredLine;
        $[75] = t45;
    } else {
        t45 = $[75];
    }
    const t46 = hoveredLine ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$modelConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MODEL_INFO"][hoveredLine]?.color : "hsl(var(--muted-foreground))";
    let t47;
    if ($[76] !== t46) {
        t47 = {
            stroke: t46,
            strokeWidth: 2,
            strokeDasharray: "5 5",
            opacity: 0.5
        };
        $[76] = t46;
        $[77] = t47;
    } else {
        t47 = $[77];
    }
    let t48;
    if ($[78] !== t45 || $[79] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
            content: t45,
            cursor: t47
        }, void 0, false, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 674,
            columnNumber: 11
        }, this);
        $[78] = t45;
        $[79] = t47;
        $[80] = t48;
    } else {
        t48 = $[80];
    }
    let t49;
    if ($[81] !== chartConfig || $[82] !== chartData || $[83] !== hoveredLine || $[84] !== modelKeys || $[85] !== setHoveredLine) {
        t49 = modelKeys.map({
            "GlowingLineChart[modelKeys.map()]": (key_4)=>{
                const modelInfo_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$modelConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getModelInfo"])(key_4);
                const color_0 = modelInfo_0?.color || chartConfig[key_4]?.color || "hsl(var(--chart-1))";
                const isHovered = hoveredLine === key_4;
                const isDimmed = hoveredLine && hoveredLine !== key_4;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                    connectNulls: true,
                    dataKey: key_4,
                    dot: {
                        "GlowingLineChart[modelKeys.map() > <Line>.dot]": (dotProps)=>{
                            const { key: dotKey, ...rest } = dotProps ?? {};
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomEndDot, {
                                ...rest,
                                chartConfig: chartConfig,
                                data: chartData,
                                hoveredLine: hoveredLine
                            }, dotKey, false, {
                                fileName: "[project]/src/components/ui/glowing-line.tsx",
                                lineNumber: 695,
                                columnNumber: 20
                            }, void 0);
                        }
                    }["GlowingLineChart[modelKeys.map() > <Line>.dot]"],
                    stroke: color_0,
                    strokeWidth: isHovered ? 5 : 3,
                    strokeOpacity: isDimmed ? 0.15 : 0.9,
                    type: "monotone",
                    activeDot: false,
                    onMouseEnter: {
                        "GlowingLineChart[modelKeys.map() > <Line>.onMouseEnter]": ()=>setHoveredLine(key_4)
                    }["GlowingLineChart[modelKeys.map() > <Line>.onMouseEnter]"],
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    animationDuration: 300,
                    animationEasing: "ease-in-out",
                    filter: isHovered ? `drop-shadow(0 0 8px ${color_0})` : undefined
                }, key_4, false, {
                    fileName: "[project]/src/components/ui/glowing-line.tsx",
                    lineNumber: 689,
                    columnNumber: 16
                }, this);
            }
        }["GlowingLineChart[modelKeys.map()]"]);
        $[81] = chartConfig;
        $[82] = chartData;
        $[83] = hoveredLine;
        $[84] = modelKeys;
        $[85] = setHoveredLine;
        $[86] = t49;
    } else {
        t49 = $[86];
    }
    let t50;
    if ($[87] !== chartData || $[88] !== t34 || $[89] !== t37 || $[90] !== t39 || $[91] !== t43 || $[92] !== t44 || $[93] !== t48 || $[94] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChart"], {
            accessibilityLayer: true,
            data: chartData,
            margin: t33,
            onMouseLeave: t34,
            style: t35,
            children: [
                t37,
                t38,
                t39,
                t40,
                t43,
                t44,
                t48,
                t49
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 713,
            columnNumber: 11
        }, this);
        $[87] = chartData;
        $[88] = t34;
        $[89] = t37;
        $[90] = t39;
        $[91] = t43;
        $[92] = t44;
        $[93] = t48;
        $[94] = t49;
        $[95] = t50;
    } else {
        t50 = $[95];
    }
    let t51;
    if ($[96] !== chartConfig || $[97] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 px-6 py-4 min-h-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                config: chartConfig,
                className: "h-full w-full",
                children: t50
            }, void 0, false, {
                fileName: "[project]/src/components/ui/glowing-line.tsx",
                lineNumber: 728,
                columnNumber: 53
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 728,
            columnNumber: 11
        }, this);
        $[96] = chartConfig;
        $[97] = t50;
        $[98] = t51;
    } else {
        t51 = $[98];
    }
    let t52;
    if ($[99] !== t32 || $[100] !== t51) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full flex-col",
            children: [
                t32,
                t51
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 737,
            columnNumber: 11
        }, this);
        $[99] = t32;
        $[100] = t51;
        $[101] = t52;
    } else {
        t52 = $[101];
    }
    return t52;
}
_s(GlowingLineChart, "7QfIvdldA9buu6nRBygZnnCAUO4=");
_c2 = GlowingLineChart;
function _GlowingLineChartAnonymous2(t0) {
    const [key_2, info] = t0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("image", {
        href: info.logo,
        width: "0",
        height: "0"
    }, `preload-${key_2}`, false, {
        fileName: "[project]/src/components/ui/glowing-line.tsx",
        lineNumber: 748,
        columnNumber: 10
    }, this);
}
function _GlowingLineChartUseEffectModelLogosForEach(url) {
    const img = new window.Image();
    img.src = "/deepseek.png";
}
function _GlowingLineChartUseEffectAnonymous(logo) {
    return logo;
}
function _GlowingLineChartUseEffectModelKeysMap(key_1) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$modelConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getModelInfo"])(key_1).logo;
}
function _GlowingLineChartAnonymous(key_0) {
    return key_0 !== "buynnhold_btc";
}
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "CustomEndDot");
__turbopack_context__.k.register(_c1, "CustomTooltip");
__turbopack_context__.k.register(_c2, "GlowingLineChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/model-legend.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ModelLegend
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$modelConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/modelConfig.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ModelLegend(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "5412bda8c429c273ea2a634ebeede9414a12e9dd32a783814f7c9ad1cc42531c") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5412bda8c429c273ea2a634ebeede9414a12e9dd32a783814f7c9ad1cc42531c";
    }
    const { chartData, chartConfig, valueMode: t1, hoveredLine, onHoverLine } = t0;
    const valueMode = t1 === undefined ? "usd" : t1;
    const [imagesLoaded, setImagesLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t2;
    if ($[1] !== chartConfig) {
        t2 = Object.keys(chartConfig).filter(_ModelLegendAnonymous);
        $[1] = chartConfig;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const modelKeys = t2;
    const lastPoint = chartData.at(-1) ?? {
        month: ""
    };
    const isPercent = valueMode === "percent";
    let t3;
    let t4;
    if ($[3] !== modelKeys) {
        t3 = ({
            "ModelLegend[useEffect()]": ()=>{
                const modelLogos = modelKeys.map(_ModelLegendUseEffectModelKeysMap).filter(_ModelLegendUseEffectAnonymous);
                const imagePromises = modelLogos.map(_ModelLegendUseEffectModelLogosMap);
                Promise.all(imagePromises).then({
                    "ModelLegend[useEffect() > (anonymous)()]": ()=>setImagesLoaded(true)
                }["ModelLegend[useEffect() > (anonymous)()]"]).catch({
                    "ModelLegend[useEffect() > (anonymous)()]": ()=>setImagesLoaded(true)
                }["ModelLegend[useEffect() > (anonymous)()]"]);
            }
        })["ModelLegend[useEffect()]"];
        t4 = [
            modelKeys
        ];
        $[3] = modelKeys;
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[6] !== isPercent) {
        t5 = ({
            "ModelLegend[formatValue]": (v)=>{
                if (typeof v !== "number") {
                    return "";
                }
                return isPercent ? `${Math.round(v)}%` : new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    maximumFractionDigits: 2
                }).format(v);
            }
        })["ModelLegend[formatValue]"];
        $[6] = isPercent;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    const formatValue = t5;
    const sortedModelKeys = [
        ...modelKeys
    ].sort({
        "ModelLegend[(anonymous)()]": (a, b)=>{
            const aValue = typeof lastPoint[a] === "number" ? lastPoint[a] : 0;
            const bValue = typeof lastPoint[b] === "number" ? lastPoint[b] : 0;
            return bValue - aValue;
        }
    }["ModelLegend[(anonymous)()]"]);
    const t6 = "border-t px-6 py-4";
    const t7 = "grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6";
    const t8 = sortedModelKeys.map({
        "ModelLegend[sortedModelKeys.map()]": (key_1)=>{
            const modelInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$modelConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getModelInfo"])(key_1);
            const color = modelInfo?.color || chartConfig[key_1]?.color || "hsl(var(--chart-1))";
            const label = modelInfo?.label || chartConfig[key_1]?.label || key_1;
            const logo_0 = modelInfo?.logo;
            const value = typeof lastPoint[key_1] === "number" ? lastPoint[key_1] : undefined;
            const isHovered = hoveredLine === key_1;
            const isDimmed = hoveredLine && hoveredLine !== key_1;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center rounded-md border px-3 py-2 text-sm transition-all cursor-pointer",
                onMouseEnter: {
                    "ModelLegend[sortedModelKeys.map() > <div>.onMouseEnter]": ()=>onHoverLine(key_1)
                }["ModelLegend[sortedModelKeys.map() > <div>.onMouseEnter]"],
                onMouseLeave: {
                    "ModelLegend[sortedModelKeys.map() > <div>.onMouseLeave]": ()=>onHoverLine(null)
                }["ModelLegend[sortedModelKeys.map() > <div>.onMouseLeave]"],
                style: {
                    borderColor: isHovered ? color : "hsl(var(--border))",
                    borderWidth: isHovered ? "2px" : "1px",
                    transform: isHovered ? "scale(1.05)" : "scale(1)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        style: {
                            opacity: isDimmed ? 0.4 : 1
                        },
                        children: [
                            logo_0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: "20px",
                                    height: "20px",
                                    borderRadius: "50%",
                                    backgroundColor: color,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    overflow: "hidden",
                                    flexShrink: 0
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: logo_0,
                                    alt: String(label),
                                    width: 16,
                                    height: 16,
                                    style: {
                                        objectFit: "contain",
                                        display: imagesLoaded ? "block" : "none"
                                    },
                                    unoptimized: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/model-legend.tsx",
                                    lineNumber: 131,
                                    columnNumber: 14
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/model-legend.tsx",
                                lineNumber: 121,
                                columnNumber: 22
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": true,
                                className: "h-3 w-3 rounded-full",
                                style: {
                                    backgroundColor: color
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/model-legend.tsx",
                                lineNumber: 134,
                                columnNumber: 46
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium",
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/src/components/model-legend.tsx",
                                lineNumber: 136,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/model-legend.tsx",
                        lineNumber: 119,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mt-1 text-xs tabular-nums text-muted-foreground",
                        style: {
                            opacity: isDimmed ? 0.4 : 1
                        },
                        children: formatValue(value)
                    }, void 0, false, {
                        fileName: "[project]/src/components/model-legend.tsx",
                        lineNumber: 136,
                        columnNumber: 67
                    }, this)
                ]
            }, key_1, true, {
                fileName: "[project]/src/components/model-legend.tsx",
                lineNumber: 111,
                columnNumber: 14
            }, this);
        }
    }["ModelLegend[sortedModelKeys.map()]"]);
    let t9;
    if ($[8] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t6,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: t7,
                children: t8
            }, void 0, false, {
                fileName: "[project]/src/components/model-legend.tsx",
                lineNumber: 143,
                columnNumber: 30
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/model-legend.tsx",
            lineNumber: 143,
            columnNumber: 10
        }, this);
        $[8] = t8;
        $[9] = t9;
    } else {
        t9 = $[9];
    }
    return t9;
}
_s(ModelLegend, "R1Mhmy6G89sq6JGrh81hp9eL9aA=");
_c = ModelLegend;
function _ModelLegendUseEffectModelLogosMap(url) {
    return new Promise((resolve, reject)=>{
        const img = new window.Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = url;
    });
}
function _ModelLegendUseEffectAnonymous(logo) {
    return logo;
}
function _ModelLegendUseEffectModelKeysMap(key_0) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$modelConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getModelInfo"])(key_0).logo;
}
function _ModelLegendAnonymous(key) {
    return key !== "buynnhold_btc";
}
var _c;
__turbopack_context__.k.register(_c, "ModelLegend");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/performance-graph.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PerformanceGraph
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$glowing$2d$line$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/glowing-line.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$model$2d$legend$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/model-legend.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$modelConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/modelConfig.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function PerformanceGraph() {
    _s();
    const [valueMode, setValueMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("usd");
    const [timeFilter, setTimeFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [hoveredLine, setHoveredLine] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [portfolioData, setPortfolioData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Fetch portfolio history
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PerformanceGraph.useEffect": ()=>{
            const fetchData = {
                "PerformanceGraph.useEffect.fetchData": async ()=>{
                    try {
                        const response = await fetch("/api/portfolio-history");
                        const data = await response.json();
                        setPortfolioData(data);
                        setLoading(false);
                    } catch (error) {
                        console.error("Failed to fetch portfolio history:", error);
                        setLoading(false);
                    }
                }
            }["PerformanceGraph.useEffect.fetchData"];
            fetchData();
            // Refresh every 30 seconds
            const interval = setInterval(fetchData, 1000 * 60 * 3);
            return ({
                "PerformanceGraph.useEffect": ()=>clearInterval(interval)
            })["PerformanceGraph.useEffect"];
        }
    }["PerformanceGraph.useEffect"], []);
    // Transform portfolio data into chart format
    const { chartData, chartConfig } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PerformanceGraph.useMemo": ()=>{
            if (!Array.isArray(portfolioData) || portfolioData.length === 0) {
                return {
                    chartData: [],
                    chartConfig: {}
                };
            }
            // Group data points by timestamp
            const points = portfolioData.map({
                "PerformanceGraph.useMemo.points": (item)=>({
                        t: new Date(item.createdAt).getTime(),
                        name: item.model.name,
                        v: Number(item.netPortfolio)
                    })
            }["PerformanceGraph.useMemo.points"]).filter({
                "PerformanceGraph.useMemo.points": (p)=>Number.isFinite(p.v)
            }["PerformanceGraph.useMemo.points"]).sort({
                "PerformanceGraph.useMemo.points": (a, b)=>a.t - b.t
            }["PerformanceGraph.useMemo.points"]);
            // Get unique model names
            const modelNames = new Set();
            for (const p_0 of points)modelNames.add(p_0.name);
            // Calculate median time gap between data points
            const uniqueTs = Array.from(new Set(points.map({
                "PerformanceGraph.useMemo.uniqueTs": (p_1)=>p_1.t
            }["PerformanceGraph.useMemo.uniqueTs"]))).sort({
                "PerformanceGraph.useMemo.uniqueTs": (a_0, b_0)=>a_0 - b_0
            }["PerformanceGraph.useMemo.uniqueTs"]);
            const gaps = [];
            for(let i = 1; i < uniqueTs.length; i++){
                gaps.push(uniqueTs[i] - uniqueTs[i - 1]);
            }
            const medianGap = gaps.length > 0 ? gaps.sort({
                "PerformanceGraph.useMemo": (a_1, b_1)=>a_1 - b_1
            }["PerformanceGraph.useMemo"])[Math.floor(gaps.length / 2)] : 60_000;
            // Reduce tolerance to 30 seconds to show more data points
            const tolerance = Math.min(30_000, // Max 30 seconds
            Math.max(2_000, Math.floor((medianGap || 60_000) * 0.5)) // Min 2 seconds, 50% of median
            );
            // Bucket data points that are close together
            const rows = [];
            let bucketStart = points[0].t;
            let bucketEnd = points[0].t;
            let bucketRows = {};
            const flush = {
                "PerformanceGraph.useMemo.flush": ()=>{
                    const center = Math.round((bucketStart + bucketEnd) / 2);
                    const timestamp = new Date(center).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit"
                    });
                    rows.push({
                        month: timestamp,
                        ...bucketRows
                    });
                    bucketRows = {};
                }
            }["PerformanceGraph.useMemo.flush"];
            for(let i_0 = 0; i_0 < points.length; i_0++){
                const p_2 = points[i_0];
                if (p_2.t - bucketEnd > tolerance) {
                    flush();
                    bucketStart = p_2.t;
                    bucketEnd = p_2.t;
                }
                bucketEnd = Math.max(bucketEnd, p_2.t);
                bucketRows[p_2.name] = p_2.v;
            }
            flush();
            // Create chart config with colors
            const config = {};
            for (const name of Array.from(modelNames)){
                const modelInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$modelConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getModelInfo"])(name);
                config[name] = {
                    label: modelInfo.label,
                    color: modelInfo.color
                };
            }
            return {
                chartData: rows,
                chartConfig: config
            };
        }
    }["PerformanceGraph.useMemo"], [
        portfolioData
    ]);
    // Filter data based on time filter
    const filteredData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PerformanceGraph.useMemo[filteredData]": ()=>{
            if (timeFilter === "72h") {
                // Get data from last 72 hours
                const cutoffTime = Date.now() - 72 * 60 * 60 * 1000;
                return chartData.filter({
                    "PerformanceGraph.useMemo[filteredData]": (point)=>{
                        const time = new Date(new Date().toDateString() + " " + point.month).getTime();
                        return time >= cutoffTime || isNaN(time);
                    }
                }["PerformanceGraph.useMemo[filteredData]"]);
            }
            return chartData;
        }
    }["PerformanceGraph.useMemo[filteredData]"], [
        chartData,
        timeFilter
    ]);
    // Compute display data based on value mode (USD vs % from first point)
    const PERCENT_SCALE = 100;
    const toPercentData = (source)=>{
        if (source.length === 0) return source;
        const keys = Object.keys(chartConfig);
        // Find the first data point where each model appears
        const baseMap = {};
        for (const k of keys){
            // Find first non-zero value for this model
            for (const row of source){
                const val = row[k];
                if (typeof val === "number" && val > 0) {
                    baseMap[k] = val;
                    break;
                }
            }
        }
        const toPoint = (row_0)=>{
            const out = {
                month: row_0.month
            };
            for (const k_0 of keys){
                const base = baseMap[k_0];
                const val_0 = row_0[k_0];
                if (typeof base === "number" && base > 0 && typeof val_0 === "number" && val_0 > 0) {
                    out[k_0] = (val_0 / base - 1) * PERCENT_SCALE;
                }
            }
            return out;
        };
        return source.map(toPoint);
    };
    const displayData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PerformanceGraph.useMemo[displayData]": ()=>{
            if (valueMode === "usd") {
                return filteredData;
            }
            return toPercentData(filteredData);
        }
    }["PerformanceGraph.useMemo[displayData]"], [
        valueMode,
        filteredData,
        chartConfig
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-64 items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-muted-foreground",
                children: "Loading performance data..."
            }, void 0, false, {
                fileName: "[project]/src/components/performance-graph.tsx",
                lineNumber: 185,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/performance-graph.tsx",
            lineNumber: 184,
            columnNumber: 12
        }, this);
    }
    if (chartData.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-64 items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-muted-foreground",
                children: "No data available yet..."
            }, void 0, false, {
                fileName: "[project]/src/components/performance-graph.tsx",
                lineNumber: 190,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/performance-graph.tsx",
            lineNumber: 189,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full flex flex-col overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-h-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$glowing$2d$line$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlowingLineChart"], {
                    chartConfig: chartConfig,
                    chartData: displayData,
                    onValueModeChange: setValueMode,
                    valueMode: valueMode,
                    timeFilter: timeFilter,
                    onTimeFilterChange: setTimeFilter,
                    hoveredLine: hoveredLine,
                    onHoverLine: setHoveredLine
                }, void 0, false, {
                    fileName: "[project]/src/components/performance-graph.tsx",
                    lineNumber: 195,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/performance-graph.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$model$2d$legend$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    chartData: displayData,
                    chartConfig: chartConfig,
                    valueMode: valueMode,
                    hoveredLine: hoveredLine,
                    onHoverLine: setHoveredLine
                }, void 0, false, {
                    fileName: "[project]/src/components/performance-graph.tsx",
                    lineNumber: 198,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/performance-graph.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/performance-graph.tsx",
        lineNumber: 193,
        columnNumber: 10
    }, this);
}
_s(PerformanceGraph, "DhIogwg29id7sQJUjrJj1y430y0=");
_c = PerformanceGraph;
var _c;
__turbopack_context__.k.register(_c, "PerformanceGraph");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
function Dialog(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "2bac8ec06a7863d9f14b2c27cb151a31efebf489ec79d037377be166695cc3b8") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2bac8ec06a7863d9f14b2c27cb151a31efebf489ec79d037377be166695cc3b8";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
            "data-slot": "dialog",
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dialog.tsx",
            lineNumber: 26,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c = Dialog;
function DialogTrigger(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "2bac8ec06a7863d9f14b2c27cb151a31efebf489ec79d037377be166695cc3b8") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2bac8ec06a7863d9f14b2c27cb151a31efebf489ec79d037377be166695cc3b8";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
            "data-slot": "dialog-trigger",
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dialog.tsx",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c1 = DialogTrigger;
function DialogPortal(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "2bac8ec06a7863d9f14b2c27cb151a31efebf489ec79d037377be166695cc3b8") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2bac8ec06a7863d9f14b2c27cb151a31efebf489ec79d037377be166695cc3b8";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
            "data-slot": "dialog-portal",
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dialog.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c2 = DialogPortal;
function DialogClose(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "2bac8ec06a7863d9f14b2c27cb151a31efebf489ec79d037377be166695cc3b8") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2bac8ec06a7863d9f14b2c27cb151a31efebf489ec79d037377be166695cc3b8";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
            "data-slot": "dialog-close",
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dialog.tsx",
            lineNumber: 110,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c3 = DialogClose;
function DialogOverlay(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "2bac8ec06a7863d9f14b2c27cb151a31efebf489ec79d037377be166695cc3b8") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2bac8ec06a7863d9f14b2c27cb151a31efebf489ec79d037377be166695cc3b8";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
            "data-slot": "dialog-overlay",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dialog.tsx",
            lineNumber: 150,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c4 = DialogOverlay;
function DialogContent(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "2bac8ec06a7863d9f14b2c27cb151a31efebf489ec79d037377be166695cc3b8") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2bac8ec06a7863d9f14b2c27cb151a31efebf489ec79d037377be166695cc3b8";
    }
    let children;
    let className;
    let props;
    let t1;
    if ($[1] !== t0) {
        ({ className, children, showCloseButton: t1, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = props;
        $[5] = t1;
    } else {
        children = $[2];
        className = $[3];
        props = $[4];
        t1 = $[5];
    }
    const showCloseButton = t1 === undefined ? true : t1;
    let t2;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
            fileName: "[project]/src/components/ui/dialog.tsx",
            lineNumber: 192,
            columnNumber: 10
        }, this);
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== className) {
        t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", className);
        $[7] = className;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] !== showCloseButton) {
        t4 = showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
            "data-slot": "dialog-close",
            className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                    fileName: "[project]/src/components/ui/dialog.tsx",
                    lineNumber: 207,
                    columnNumber: 443
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "sr-only",
                    children: "Close"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dialog.tsx",
                    lineNumber: 207,
                    columnNumber: 452
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/dialog.tsx",
            lineNumber: 207,
            columnNumber: 29
        }, this);
        $[9] = showCloseButton;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== children || $[12] !== props || $[13] !== t3 || $[14] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
            "data-slot": "dialog-portal",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                    "data-slot": "dialog-content",
                    className: t3,
                    ...props,
                    children: [
                        children,
                        t4
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/dialog.tsx",
                    lineNumber: 215,
                    columnNumber: 54
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/dialog.tsx",
            lineNumber: 215,
            columnNumber: 10
        }, this);
        $[11] = children;
        $[12] = props;
        $[13] = t3;
        $[14] = t4;
        $[15] = t5;
    } else {
        t5 = $[15];
    }
    return t5;
}
_c5 = DialogContent;
function DialogHeader(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "2bac8ec06a7863d9f14b2c27cb151a31efebf489ec79d037377be166695cc3b8") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2bac8ec06a7863d9f14b2c27cb151a31efebf489ec79d037377be166695cc3b8";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 text-center sm:text-left", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "dialog-header",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dialog.tsx",
            lineNumber: 258,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c6 = DialogHeader;
function DialogFooter(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "2bac8ec06a7863d9f14b2c27cb151a31efebf489ec79d037377be166695cc3b8") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2bac8ec06a7863d9f14b2c27cb151a31efebf489ec79d037377be166695cc3b8";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "dialog-footer",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dialog.tsx",
            lineNumber: 299,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c7 = DialogFooter;
function DialogTitle(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "2bac8ec06a7863d9f14b2c27cb151a31efebf489ec79d037377be166695cc3b8") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2bac8ec06a7863d9f14b2c27cb151a31efebf489ec79d037377be166695cc3b8";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg leading-none font-semibold", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
            "data-slot": "dialog-title",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dialog.tsx",
            lineNumber: 340,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c8 = DialogTitle;
function DialogDescription(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "2bac8ec06a7863d9f14b2c27cb151a31efebf489ec79d037377be166695cc3b8") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2bac8ec06a7863d9f14b2c27cb151a31efebf489ec79d037377be166695cc3b8";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
            "data-slot": "dialog-description",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dialog.tsx",
            lineNumber: 381,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/scroll-area.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollArea",
    ()=>ScrollArea,
    "ScrollBar",
    ()=>ScrollBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-scroll-area/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
function ScrollArea(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "f3bdcd00a330e8be7e873b1c0df2a3015393889da83b03f89500f4b393c6d327") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f3bdcd00a330e8be7e873b1c0df2a3015393889da83b03f89500f4b393c6d327";
    }
    let children;
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, children, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = props;
    } else {
        children = $[2];
        className = $[3];
        props = $[4];
    }
    let t1;
    if ($[5] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative", className);
        $[5] = className;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    let t2;
    if ($[7] !== children) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
            "data-slot": "scroll-area-viewport",
            className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/scroll-area.tsx",
            lineNumber: 41,
            columnNumber: 10
        }, this);
        $[7] = children;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    let t3;
    let t4;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollBar, {}, void 0, false, {
            fileName: "[project]/src/components/ui/scroll-area.tsx",
            lineNumber: 50,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Corner"], {}, void 0, false, {
            fileName: "[project]/src/components/ui/scroll-area.tsx",
            lineNumber: 51,
            columnNumber: 10
        }, this);
        $[9] = t3;
        $[10] = t4;
    } else {
        t3 = $[9];
        t4 = $[10];
    }
    let t5;
    if ($[11] !== props || $[12] !== t1 || $[13] !== t2) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
            "data-slot": "scroll-area",
            className: t1,
            ...props,
            children: [
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/scroll-area.tsx",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        $[11] = props;
        $[12] = t1;
        $[13] = t2;
        $[14] = t5;
    } else {
        t5 = $[14];
    }
    return t5;
}
_c = ScrollArea;
function ScrollBar(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "f3bdcd00a330e8be7e873b1c0df2a3015393889da83b03f89500f4b393c6d327") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f3bdcd00a330e8be7e873b1c0df2a3015393889da83b03f89500f4b393c6d327";
    }
    let className;
    let props;
    let t1;
    if ($[1] !== t0) {
        ({ className, orientation: t1, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
        $[4] = t1;
    } else {
        className = $[2];
        props = $[3];
        t1 = $[4];
    }
    const orientation = t1 === undefined ? "vertical" : t1;
    const t2 = orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent";
    const t3 = orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent";
    let t4;
    if ($[5] !== className || $[6] !== t2 || $[7] !== t3) {
        t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex touch-none p-px transition-colors select-none", t2, t3, className);
        $[5] = className;
        $[6] = t2;
        $[7] = t3;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaThumb"], {
            "data-slot": "scroll-area-thumb",
            className: "bg-border relative flex-1 rounded-full"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/scroll-area.tsx",
            lineNumber: 111,
            columnNumber: 10
        }, this);
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== orientation || $[11] !== props || $[12] !== t4) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"], {
            "data-slot": "scroll-area-scrollbar",
            orientation: orientation,
            className: t4,
            ...props,
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/components/ui/scroll-area.tsx",
            lineNumber: 118,
            columnNumber: 10
        }, this);
        $[10] = orientation;
        $[11] = props;
        $[12] = t4;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    return t6;
}
_c1 = ScrollBar;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "ScrollArea");
__turbopack_context__.k.register(_c1, "ScrollBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropdownMenu",
    ()=>DropdownMenu,
    "DropdownMenuCheckboxItem",
    ()=>DropdownMenuCheckboxItem,
    "DropdownMenuContent",
    ()=>DropdownMenuContent,
    "DropdownMenuGroup",
    ()=>DropdownMenuGroup,
    "DropdownMenuItem",
    ()=>DropdownMenuItem,
    "DropdownMenuLabel",
    ()=>DropdownMenuLabel,
    "DropdownMenuPortal",
    ()=>DropdownMenuPortal,
    "DropdownMenuRadioGroup",
    ()=>DropdownMenuRadioGroup,
    "DropdownMenuRadioItem",
    ()=>DropdownMenuRadioItem,
    "DropdownMenuSeparator",
    ()=>DropdownMenuSeparator,
    "DropdownMenuShortcut",
    ()=>DropdownMenuShortcut,
    "DropdownMenuSub",
    ()=>DropdownMenuSub,
    "DropdownMenuSubContent",
    ()=>DropdownMenuSubContent,
    "DropdownMenuSubTrigger",
    ()=>DropdownMenuSubTrigger,
    "DropdownMenuTrigger",
    ()=>DropdownMenuTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as CircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function DropdownMenu(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "ed7914eeaa0bb5ff8e721cc3dd6f5ab5f78b7e338f953010b984ac72c98d0eb0") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ed7914eeaa0bb5ff8e721cc3dd6f5ab5f78b7e338f953010b984ac72c98d0eb0";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
            "data-slot": "dropdown-menu",
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dropdown-menu.tsx",
            lineNumber: 28,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c = DropdownMenu;
function DropdownMenuPortal(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "ed7914eeaa0bb5ff8e721cc3dd6f5ab5f78b7e338f953010b984ac72c98d0eb0") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ed7914eeaa0bb5ff8e721cc3dd6f5ab5f78b7e338f953010b984ac72c98d0eb0";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
            "data-slot": "dropdown-menu-portal",
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dropdown-menu.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c1 = DropdownMenuPortal;
function DropdownMenuTrigger(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "ed7914eeaa0bb5ff8e721cc3dd6f5ab5f78b7e338f953010b984ac72c98d0eb0") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ed7914eeaa0bb5ff8e721cc3dd6f5ab5f78b7e338f953010b984ac72c98d0eb0";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
            "data-slot": "dropdown-menu-trigger",
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dropdown-menu.tsx",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c2 = DropdownMenuTrigger;
function DropdownMenuContent(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "ed7914eeaa0bb5ff8e721cc3dd6f5ab5f78b7e338f953010b984ac72c98d0eb0") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ed7914eeaa0bb5ff8e721cc3dd6f5ab5f78b7e338f953010b984ac72c98d0eb0";
    }
    let className;
    let props;
    let t1;
    if ($[1] !== t0) {
        ({ className, sideOffset: t1, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
        $[4] = t1;
    } else {
        className = $[2];
        props = $[3];
        t1 = $[4];
    }
    const sideOffset = t1 === undefined ? 4 : t1;
    let t2;
    if ($[5] !== className) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", className);
        $[5] = className;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== props || $[8] !== sideOffset || $[9] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dropdown-menu-content",
                sideOffset: sideOffset,
                className: t2,
                ...props
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 129,
                columnNumber: 40
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dropdown-menu.tsx",
            lineNumber: 129,
            columnNumber: 10
        }, this);
        $[7] = props;
        $[8] = sideOffset;
        $[9] = t2;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    return t3;
}
_c3 = DropdownMenuContent;
function DropdownMenuGroup(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "ed7914eeaa0bb5ff8e721cc3dd6f5ab5f78b7e338f953010b984ac72c98d0eb0") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ed7914eeaa0bb5ff8e721cc3dd6f5ab5f78b7e338f953010b984ac72c98d0eb0";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
            "data-slot": "dropdown-menu-group",
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dropdown-menu.tsx",
            lineNumber: 159,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c4 = DropdownMenuGroup;
function DropdownMenuItem(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "ed7914eeaa0bb5ff8e721cc3dd6f5ab5f78b7e338f953010b984ac72c98d0eb0") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ed7914eeaa0bb5ff8e721cc3dd6f5ab5f78b7e338f953010b984ac72c98d0eb0";
    }
    let className;
    let inset;
    let props;
    let t1;
    if ($[1] !== t0) {
        ({ className, inset, variant: t1, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = inset;
        $[4] = props;
        $[5] = t1;
    } else {
        className = $[2];
        inset = $[3];
        props = $[4];
        t1 = $[5];
    }
    const variant = t1 === undefined ? "default" : t1;
    let t2;
    if ($[6] !== className) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className);
        $[6] = className;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] !== inset || $[9] !== props || $[10] !== t2 || $[11] !== variant) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
            "data-slot": "dropdown-menu-item",
            "data-inset": inset,
            "data-variant": variant,
            className: t2,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dropdown-menu.tsx",
            lineNumber: 208,
            columnNumber: 10
        }, this);
        $[8] = inset;
        $[9] = props;
        $[10] = t2;
        $[11] = variant;
        $[12] = t3;
    } else {
        t3 = $[12];
    }
    return t3;
}
_c5 = DropdownMenuItem;
function DropdownMenuCheckboxItem(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "ed7914eeaa0bb5ff8e721cc3dd6f5ab5f78b7e338f953010b984ac72c98d0eb0") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ed7914eeaa0bb5ff8e721cc3dd6f5ab5f78b7e338f953010b984ac72c98d0eb0";
    }
    let checked;
    let children;
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, children, checked, ...props } = t0);
        $[1] = t0;
        $[2] = checked;
        $[3] = children;
        $[4] = className;
        $[5] = props;
    } else {
        checked = $[2];
        children = $[3];
        className = $[4];
        props = $[5];
    }
    let t1;
    if ($[6] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className);
        $[6] = className;
        $[7] = t1;
    } else {
        t1 = $[7];
    }
    let t2;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                    className: "size-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                    lineNumber: 259,
                    columnNumber: 143
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 259,
                columnNumber: 106
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dropdown-menu.tsx",
            lineNumber: 259,
            columnNumber: 10
        }, this);
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    let t3;
    if ($[9] !== checked || $[10] !== children || $[11] !== props || $[12] !== t1) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckboxItem"], {
            "data-slot": "dropdown-menu-checkbox-item",
            className: t1,
            checked: checked,
            ...props,
            children: [
                t2,
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/dropdown-menu.tsx",
            lineNumber: 266,
            columnNumber: 10
        }, this);
        $[9] = checked;
        $[10] = children;
        $[11] = props;
        $[12] = t1;
        $[13] = t3;
    } else {
        t3 = $[13];
    }
    return t3;
}
_c6 = DropdownMenuCheckboxItem;
function DropdownMenuRadioGroup(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "ed7914eeaa0bb5ff8e721cc3dd6f5ab5f78b7e338f953010b984ac72c98d0eb0") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ed7914eeaa0bb5ff8e721cc3dd6f5ab5f78b7e338f953010b984ac72c98d0eb0";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroup"], {
            "data-slot": "dropdown-menu-radio-group",
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dropdown-menu.tsx",
            lineNumber: 297,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c7 = DropdownMenuRadioGroup;
function DropdownMenuRadioItem(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "ed7914eeaa0bb5ff8e721cc3dd6f5ab5f78b7e338f953010b984ac72c98d0eb0") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ed7914eeaa0bb5ff8e721cc3dd6f5ab5f78b7e338f953010b984ac72c98d0eb0";
    }
    let children;
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, children, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = props;
    } else {
        children = $[2];
        className = $[3];
        props = $[4];
    }
    let t1;
    if ($[5] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className);
        $[5] = className;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    let t2;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__["CircleIcon"], {
                    className: "size-2 fill-current"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                    lineNumber: 341,
                    columnNumber: 143
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 341,
                columnNumber: 106
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dropdown-menu.tsx",
            lineNumber: 341,
            columnNumber: 10
        }, this);
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] !== children || $[9] !== props || $[10] !== t1) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioItem"], {
            "data-slot": "dropdown-menu-radio-item",
            className: t1,
            ...props,
            children: [
                t2,
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/dropdown-menu.tsx",
            lineNumber: 348,
            columnNumber: 10
        }, this);
        $[8] = children;
        $[9] = props;
        $[10] = t1;
        $[11] = t3;
    } else {
        t3 = $[11];
    }
    return t3;
}
_c8 = DropdownMenuRadioItem;
function DropdownMenuLabel(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "ed7914eeaa0bb5ff8e721cc3dd6f5ab5f78b7e338f953010b984ac72c98d0eb0") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ed7914eeaa0bb5ff8e721cc3dd6f5ab5f78b7e338f953010b984ac72c98d0eb0";
    }
    let className;
    let inset;
    let props;
    if ($[1] !== t0) {
        ({ className, inset, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = inset;
        $[4] = props;
    } else {
        className = $[2];
        inset = $[3];
        props = $[4];
    }
    let t1;
    if ($[5] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className);
        $[5] = className;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    let t2;
    if ($[7] !== inset || $[8] !== props || $[9] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            "data-slot": "dropdown-menu-label",
            "data-inset": inset,
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dropdown-menu.tsx",
            lineNumber: 394,
            columnNumber: 10
        }, this);
        $[7] = inset;
        $[8] = props;
        $[9] = t1;
        $[10] = t2;
    } else {
        t2 = $[10];
    }
    return t2;
}
_c9 = DropdownMenuLabel;
function DropdownMenuSeparator(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "ed7914eeaa0bb5ff8e721cc3dd6f5ab5f78b7e338f953010b984ac72c98d0eb0") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ed7914eeaa0bb5ff8e721cc3dd6f5ab5f78b7e338f953010b984ac72c98d0eb0";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-border -mx-1 my-1 h-px", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
            "data-slot": "dropdown-menu-separator",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dropdown-menu.tsx",
            lineNumber: 436,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c10 = DropdownMenuSeparator;
function DropdownMenuShortcut(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "ed7914eeaa0bb5ff8e721cc3dd6f5ab5f78b7e338f953010b984ac72c98d0eb0") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ed7914eeaa0bb5ff8e721cc3dd6f5ab5f78b7e338f953010b984ac72c98d0eb0";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground ml-auto text-xs tracking-widest", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            "data-slot": "dropdown-menu-shortcut",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dropdown-menu.tsx",
            lineNumber: 477,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c11 = DropdownMenuShortcut;
function DropdownMenuSub(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "ed7914eeaa0bb5ff8e721cc3dd6f5ab5f78b7e338f953010b984ac72c98d0eb0") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ed7914eeaa0bb5ff8e721cc3dd6f5ab5f78b7e338f953010b984ac72c98d0eb0";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sub"], {
            "data-slot": "dropdown-menu-sub",
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dropdown-menu.tsx",
            lineNumber: 506,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c12 = DropdownMenuSub;
function DropdownMenuSubTrigger(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "ed7914eeaa0bb5ff8e721cc3dd6f5ab5f78b7e338f953010b984ac72c98d0eb0") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ed7914eeaa0bb5ff8e721cc3dd6f5ab5f78b7e338f953010b984ac72c98d0eb0";
    }
    let children;
    let className;
    let inset;
    let props;
    if ($[1] !== t0) {
        ({ className, inset, children, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = inset;
        $[5] = props;
    } else {
        children = $[2];
        className = $[3];
        inset = $[4];
        props = $[5];
    }
    let t1;
    if ($[6] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className);
        $[6] = className;
        $[7] = t1;
    } else {
        t1 = $[7];
    }
    let t2;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
            className: "ml-auto size-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dropdown-menu.tsx",
            lineNumber: 554,
            columnNumber: 10
        }, this);
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    let t3;
    if ($[9] !== children || $[10] !== inset || $[11] !== props || $[12] !== t1) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubTrigger"], {
            "data-slot": "dropdown-menu-sub-trigger",
            "data-inset": inset,
            className: t1,
            ...props,
            children: [
                children,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/dropdown-menu.tsx",
            lineNumber: 561,
            columnNumber: 10
        }, this);
        $[9] = children;
        $[10] = inset;
        $[11] = props;
        $[12] = t1;
        $[13] = t3;
    } else {
        t3 = $[13];
    }
    return t3;
}
_c13 = DropdownMenuSubTrigger;
function DropdownMenuSubContent(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "ed7914eeaa0bb5ff8e721cc3dd6f5ab5f78b7e338f953010b984ac72c98d0eb0") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ed7914eeaa0bb5ff8e721cc3dd6f5ab5f78b7e338f953010b984ac72c98d0eb0";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubContent"], {
            "data-slot": "dropdown-menu-sub-content",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dropdown-menu.tsx",
            lineNumber: 604,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c14 = DropdownMenuSubContent;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14;
__turbopack_context__.k.register(_c, "DropdownMenu");
__turbopack_context__.k.register(_c1, "DropdownMenuPortal");
__turbopack_context__.k.register(_c2, "DropdownMenuTrigger");
__turbopack_context__.k.register(_c3, "DropdownMenuContent");
__turbopack_context__.k.register(_c4, "DropdownMenuGroup");
__turbopack_context__.k.register(_c5, "DropdownMenuItem");
__turbopack_context__.k.register(_c6, "DropdownMenuCheckboxItem");
__turbopack_context__.k.register(_c7, "DropdownMenuRadioGroup");
__turbopack_context__.k.register(_c8, "DropdownMenuRadioItem");
__turbopack_context__.k.register(_c9, "DropdownMenuLabel");
__turbopack_context__.k.register(_c10, "DropdownMenuSeparator");
__turbopack_context__.k.register(_c11, "DropdownMenuShortcut");
__turbopack_context__.k.register(_c12, "DropdownMenuSub");
__turbopack_context__.k.register(_c13, "DropdownMenuSubTrigger");
__turbopack_context__.k.register(_c14, "DropdownMenuSubContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/trades-sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TradesSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/react-markdown/lib/index.js [app-client] (ecmascript) <export Markdown as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remark-gfm/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rehype$2d$raw$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/rehype-raw/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/scroll-area.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$modelConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/modelConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
const normalizeNumber = (value)=>{
    if (value == null) return null;
    if (typeof value === "number") return Number.isFinite(value) ? value : null;
    if (typeof value === "string" && value.length > 0) {
        const parsed = Number.parseFloat(value);
        return Number.isFinite(parsed) ? parsed : null;
    }
    return null;
};
const formatCurrency = (value)=>new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(value ?? 0);
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
    if (Math.abs(numeric) >= 1) {
        return numeric.toFixed(2);
    }
    return numeric.toPrecision(3);
};
const formatConfidenceValue = (value)=>{
    const numeric = normalizeNumber(value);
    if (numeric == null) return "----";
    const percentage = numeric <= 1 ? numeric * 100 : numeric;
    if (!Number.isFinite(percentage)) return "----";
    if (percentage < 0) return "----";
    if (percentage >= 99.5) return "100%";
    if (percentage >= 10) return `${percentage.toFixed(0)}%`;
    return `${percentage.toFixed(1)}%`;
};
const formatPriceLabel = (value)=>{
    const numeric = normalizeNumber(value);
    if (numeric == null) return "—";
    return formatCurrency(numeric);
};
const extractMarkdownPreview = (markdown, limit = 220)=>{
    if (!markdown) return "";
    const stripped = markdown.replace(/```[\s\S]*?```/g, " ").replace(/`([^`]*)`/g, "$1").replace(/\*\*([^*]+)\*\*/g, "$1").replace(/[*_>#\-]/g, " ").replace(/\s+/g, " ").trim();
    if (stripped.length <= limit) return stripped;
    return `${stripped.slice(0, limit)}…`;
};
const extractTradingDecisions = (toolCalls)=>{
    const decisions = [];
    toolCalls.forEach((tc)=>{
        const metadata = tc.metadata;
        const decisionList = metadata?.decisions ?? [];
        const results = metadata?.results ?? [];
        const resultLookup = new Map();
        results.forEach((result)=>{
            if (typeof result?.symbol === "string") {
                resultLookup.set(result.symbol.toUpperCase(), result);
            }
        });
        decisionList.forEach((decision, idx)=>{
            if (!decision || typeof decision.symbol !== "string") return;
            const symbol = decision.symbol.toUpperCase();
            const normalizedSignal = decision.signal === "LONG" || decision.signal === "SHORT" || decision.signal === "HOLD" ? decision.signal : "HOLD";
            const result = resultLookup.get(symbol) ?? null;
            const status = decision.status ?? (result?.success === true ? "EXECUTED" : result?.success === false ? "REJECTED" : null);
            decisions.push({
                key: `${tc.id}-${idx}`,
                symbol,
                signal: normalizedSignal,
                quantity: decision.quantity ?? null,
                leverage: decision.leverage ?? null,
                profitTarget: decision.profitTarget ?? null,
                stopLoss: decision.stopLoss ?? null,
                invalidationCondition: decision.invalidationCondition ?? null,
                confidence: decision.confidence ?? null,
                toolCallType: tc.type,
                status,
                result,
                timestamp: tc.timestamp
            });
        });
    });
    return decisions;
};
const formatTimestamp = (timestamp)=>{
    if (!timestamp) return "--";
    const date = new Date(timestamp);
    if (Number.isNaN(date.getTime())) return "--";
    return date.toLocaleString("en-US", {
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });
};
const computeHoldingLabel = (openedAt, closedAt)=>{
    if (!openedAt) return "--";
    const openDate = new Date(openedAt);
    const closeDate = new Date(closedAt);
    const diff = closeDate.getTime() - openDate.getTime();
    if (!Number.isFinite(diff) || diff <= 0) return "<1M";
    const totalMinutes = Math.floor(diff / 60_000);
    const days = Math.floor(totalMinutes / (60 * 24));
    const hours = Math.floor(totalMinutes % (60 * 24) / 60);
    const minutes = totalMinutes % 60;
    const parts = [];
    if (days > 0) parts.push(`${days}D`);
    if (hours > 0) parts.push(`${hours}H`);
    parts.push(`${minutes}M`);
    return parts.join(" ");
};
function TradesSidebar({ isExpanded, onToggle: _onToggle }) {
    _s();
    const [trades, setTrades] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [positions, setPositions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [conversations, setConversations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("trades");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [expandedResponses, setExpandedResponses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [activeConversationPanels, setActiveConversationPanels] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [selectedExitPlan, setSelectedExitPlan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TradesSidebar.useEffect": ()=>{
            fetchData();
            const interval = setInterval(fetchData, 10_000); // Refresh every 10 seconds
            return ({
                "TradesSidebar.useEffect": ()=>clearInterval(interval)
            })["TradesSidebar.useEffect"];
        }
    }["TradesSidebar.useEffect"], []);
    const fetchData = async ()=>{
        try {
            const [tradesRes, positionsRes, conversationsRes] = await Promise.all([
                fetch("/api/trades"),
                fetch("/api/positions"),
                fetch("/api/invocations")
            ]);
            const tradesData = await tradesRes.json();
            const positionsData = await positionsRes.json();
            const conversationsData = await conversationsRes.json();
            const normalizedTrades = Array.isArray(tradesData.trades) ? tradesData.trades.map((trade)=>{
                const rawSide = typeof trade.side === "string" ? trade.side.toUpperCase() : "LONG";
                const side = rawSide === "SHORT" || rawSide === "LONG" ? rawSide : "UNKNOWN";
                const modelKey = trade.modelRouterName || trade.modelName || trade.modelId;
                return {
                    id: trade.id,
                    modelId: trade.modelId,
                    modelName: trade.modelName,
                    modelRouterName: trade.modelRouterName,
                    modelKey,
                    symbol: trade.symbol,
                    side,
                    quantity: normalizeNumber(trade.quantity),
                    entryPrice: normalizeNumber(trade.entryPrice),
                    exitPrice: normalizeNumber(trade.exitPrice),
                    entryNotional: normalizeNumber(trade.entryNotional),
                    exitNotional: normalizeNumber(trade.exitNotional),
                    netPnl: normalizeNumber(trade.netPnl),
                    openedAt: typeof trade.openedAt === "string" ? trade.openedAt : null,
                    closedAt: typeof trade.closedAt === "string" ? trade.closedAt : new Date().toISOString(),
                    holdingTime: typeof trade.holdingTime === "string" ? trade.holdingTime : null,
                    timestamp: typeof trade.timestamp === "string" ? trade.timestamp : null
                };
            }) : [];
            setTrades(normalizedTrades);
            setPositions(positionsData.positions || []);
            setConversations(conversationsData.conversations || []);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
        }
    };
    const filteredTrades = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TradesSidebar.useMemo[filteredTrades]": ()=>{
            if (filter === "all") return trades;
            return trades.filter({
                "TradesSidebar.useMemo[filteredTrades]": (trade_0)=>trade_0.modelKey === filter
            }["TradesSidebar.useMemo[filteredTrades]"]);
        }
    }["TradesSidebar.useMemo[filteredTrades]"], [
        filter,
        trades
    ]);
    const filteredConversations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TradesSidebar.useMemo[filteredConversations]": ()=>{
            if (filter === "all") return conversations;
            return conversations.filter({
                "TradesSidebar.useMemo[filteredConversations]": (conversation)=>(conversation.modelLogo || conversation.modelName) === filter
            }["TradesSidebar.useMemo[filteredConversations]"]);
        }
    }["TradesSidebar.useMemo[filteredConversations]"], [
        conversations,
        filter
    ]);
    const filteredPositions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TradesSidebar.useMemo[filteredPositions]": ()=>{
            if (filter === "all") return positions;
            return positions.filter({
                "TradesSidebar.useMemo[filteredPositions]": (positionGroup)=>(positionGroup.modelLogo || positionGroup.modelName) === filter
            }["TradesSidebar.useMemo[filteredPositions]"]);
        }
    }["TradesSidebar.useMemo[filteredPositions]"], [
        filter,
        positions
    ]);
    const modelOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TradesSidebar.useMemo[modelOptions]": ()=>{
            const map = new Map();
            const register = {
                "TradesSidebar.useMemo[modelOptions].register": (id, fallbackName)=>{
                    if (!id) return;
                    const info = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$modelConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getModelInfo"])(id);
                    const existing = map.get(id);
                    const logo = info.logo || existing?.logo || "";
                    const color = info.logo ? info.color : existing?.color ?? info.color;
                    const label = info.logo ? info.label : existing?.label && existing.label !== existing.id ? existing.label : fallbackName ?? info.label ?? id;
                    map.set(id, {
                        id,
                        label,
                        logo,
                        color
                    });
                }
            }["TradesSidebar.useMemo[modelOptions].register"];
            trades.forEach({
                "TradesSidebar.useMemo[modelOptions]": (trade_1)=>register(trade_1.modelKey, trade_1.modelName)
            }["TradesSidebar.useMemo[modelOptions]"]);
            conversations.forEach({
                "TradesSidebar.useMemo[modelOptions]": (conversation_0)=>register(conversation_0.modelLogo || conversation_0.modelName, conversation_0.modelName)
            }["TradesSidebar.useMemo[modelOptions]"]);
            positions.forEach({
                "TradesSidebar.useMemo[modelOptions]": (positionGroup_0)=>register(positionGroup_0.modelLogo || positionGroup_0.modelName, positionGroup_0.modelName)
            }["TradesSidebar.useMemo[modelOptions]"]);
            return Array.from(map.values());
        }
    }["TradesSidebar.useMemo[modelOptions]"], [
        conversations,
        positions,
        trades
    ]);
    const modelOptionsLookup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TradesSidebar.useMemo[modelOptionsLookup]": ()=>{
            const lookup = new Map();
            modelOptions.forEach({
                "TradesSidebar.useMemo[modelOptionsLookup]": (option)=>lookup.set(option.id, option)
            }["TradesSidebar.useMemo[modelOptionsLookup]"]);
            return lookup;
        }
    }["TradesSidebar.useMemo[modelOptionsLookup]"], [
        modelOptions
    ]);
    const selectedModelLabel = filter === "all" ? "All Models" : modelOptionsLookup.get(filter)?.label ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$modelConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getModelInfo"])(filter).label;
    const toggleResponseExpansion = (convId)=>{
        setExpandedResponses((prev)=>{
            const newSet = new Set(prev);
            if (newSet.has(convId)) {
                newSet.delete(convId);
                setActiveConversationPanels((panelState)=>{
                    const next = {
                        ...panelState
                    };
                    delete next[convId];
                    return next;
                });
            } else {
                newSet.add(convId);
                setActiveConversationPanels((panelState_0)=>({
                        ...panelState_0,
                        [convId]: panelState_0[convId] ?? "response"
                    }));
            }
            return newSet;
        });
    };
    const setConversationPanel = (convId_0, panel)=>{
        setExpandedResponses((prev_0)=>{
            if (prev_0.has(convId_0)) return prev_0;
            const next_0 = new Set(prev_0);
            next_0.add(convId_0);
            return next_0;
        });
        setActiveConversationPanels((prev_1)=>({
                ...prev_1,
                [convId_0]: panel
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex h-full flex-col border-l bg-background transition-all duration-1000 ease-[cubic-bezier(0.091,0.543,0.148,0.909)] ${isExpanded ? "w-full" : "w-96"}`,
        style: {
            position: isExpanded ? "absolute" : "relative",
            right: 0,
            top: 0,
            zIndex: isExpanded ? 50 : 1,
            backgroundColor: "hsl(var(--background))"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `flex-1 px-4 py-3 font-semibold text-xs uppercase tracking-wider transition-colors ${activeTab === "trades" ? "border-primary border-b-2 bg-background text-foreground" : "bg-muted/30 text-muted-foreground hover:bg-muted/50"}`,
                            onClick: ()=>setActiveTab("trades"),
                            type: "button",
                            children: "Completed Trades"
                        }, void 0, false, {
                            fileName: "[project]/src/components/trades-sidebar.tsx",
                            lineNumber: 375,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `flex-1 px-4 py-3 font-semibold text-xs uppercase tracking-wider transition-colors ${activeTab === "modelchat" ? "border-primary border-b-2 bg-background text-foreground" : "bg-muted/30 text-muted-foreground hover:bg-muted/50"}`,
                            onClick: ()=>setActiveTab("modelchat"),
                            type: "button",
                            children: "ModelChat"
                        }, void 0, false, {
                            fileName: "[project]/src/components/trades-sidebar.tsx",
                            lineNumber: 378,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `flex-1 px-4 py-3 font-semibold text-xs uppercase tracking-wider transition-colors ${activeTab === "positions" ? "border-primary border-b-2 bg-background text-foreground" : "bg-muted/30 text-muted-foreground hover:bg-muted/50"}`,
                            onClick: ()=>setActiveTab("positions"),
                            type: "button",
                            children: "Positions"
                        }, void 0, false, {
                            fileName: "[project]/src/components/trades-sidebar.tsx",
                            lineNumber: 381,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/trades-sidebar.tsx",
                    lineNumber: 374,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/trades-sidebar.tsx",
                lineNumber: 373,
                columnNumber: 7
            }, this),
            activeTab === "trades" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-b bg-muted/30 px-3 py-[7px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium text-xs uppercase tracking-wide",
                                            children: "Filter:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/trades-sidebar.tsx",
                                            lineNumber: 393,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                                    asChild: true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "flex items-center gap-1 rounded border bg-background px-2 py-1 font-medium text-xs transition-colors hover:bg-accent",
                                                        type: "button",
                                                        children: [
                                                            selectedModelLabel,
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                className: "h-3 w-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                lineNumber: 400,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/trades-sidebar.tsx",
                                                        lineNumber: 398,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/trades-sidebar.tsx",
                                                    lineNumber: 397,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                                    align: "start",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                            onClick: ()=>setFilter("all"),
                                                            children: "All Models"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/trades-sidebar.tsx",
                                                            lineNumber: 404,
                                                            columnNumber: 21
                                                        }, this),
                                                        modelOptions.map((option_0)=>{
                                                            const swatchColor = option_0.color || "#888888";
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                onClick: ()=>setFilter(option_0.id),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                width: "16px",
                                                                                height: "16px",
                                                                                borderRadius: "50%",
                                                                                backgroundColor: swatchColor,
                                                                                display: "flex",
                                                                                alignItems: "center",
                                                                                justifyContent: "center",
                                                                                overflow: "hidden"
                                                                            },
                                                                            children: option_0.logo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                alt: option_0.label,
                                                                                src: option_0.logo,
                                                                                width: 10,
                                                                                height: 10,
                                                                                style: {
                                                                                    objectFit: "contain"
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                                lineNumber: 421,
                                                                                columnNumber: 48
                                                                            }, this) : null
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                            lineNumber: 411,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        option_0.label
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                    lineNumber: 410,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, option_0.id, false, {
                                                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                lineNumber: 409,
                                                                columnNumber: 26
                                                            }, this);
                                                        })
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/trades-sidebar.tsx",
                                                    lineNumber: 403,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/trades-sidebar.tsx",
                                            lineNumber: 396,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/trades-sidebar.tsx",
                                    lineNumber: 392,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-muted-foreground text-xs",
                                    children: "Showing Last 400 Trades"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/trades-sidebar.tsx",
                                    lineNumber: 432,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/trades-sidebar.tsx",
                            lineNumber: 391,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/trades-sidebar.tsx",
                        lineNumber: 390,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                        className: "flex-1 overflow-auto",
                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center p-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground text-sm",
                                children: "Loading trades..."
                            }, void 0, false, {
                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                lineNumber: 441,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/trades-sidebar.tsx",
                            lineNumber: 440,
                            columnNumber: 24
                        }, this) : filteredTrades.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center p-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground text-sm",
                                children: "No completed trades yet"
                            }, void 0, false, {
                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                lineNumber: 443,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/trades-sidebar.tsx",
                            lineNumber: 442,
                            columnNumber: 54
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: filteredTrades.map((trade_2, idx)=>{
                                const modelInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$modelConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getModelInfo"])(trade_2.modelKey || trade_2.modelName);
                                const modelColor = modelInfo.color || "#888888";
                                const modelLabel = modelInfo.logo ? modelInfo.label : trade_2.modelName || trade_2.modelRouterName || trade_2.modelKey || "Unknown Model";
                                const isShort = trade_2.side === "SHORT";
                                const netPnlValue = trade_2.netPnl ?? 0;
                                const isProfitable = netPnlValue >= 0;
                                const timestampLabel = trade_2.timestamp ?? formatTimestamp(trade_2.closedAt);
                                const holdingLabel = trade_2.holdingTime ?? computeHoldingLabel(trade_2.openedAt, trade_2.closedAt);
                                const quantityLabel = trade_2.quantity != null ? trade_2.quantity.toFixed(3) : "--";
                                const entryPriceLabel = trade_2.entryPrice != null ? formatCurrency(trade_2.entryPrice) : "--";
                                const exitPriceLabel = trade_2.exitPrice != null ? formatCurrency(trade_2.exitPrice) : "--";
                                const entryNotionalLabel = trade_2.entryNotional != null ? formatCurrency(trade_2.entryNotional) : "--";
                                const exitNotionalLabel = trade_2.exitNotional != null ? formatCurrency(trade_2.exitNotional) : "--";
                                const pnlLabel = trade_2.netPnl != null ? formatCurrency(trade_2.netPnl) : "--";
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded px-4 py-4 transition-colors hover:bg-accent/30",
                                            style: {
                                                backgroundColor: `${modelColor}10`
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-3 flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        width: "24px",
                                                                        height: "24px",
                                                                        borderRadius: "50%",
                                                                        backgroundColor: modelColor,
                                                                        display: "flex",
                                                                        alignItems: "center",
                                                                        justifyContent: "center",
                                                                        overflow: "hidden"
                                                                    },
                                                                    children: modelInfo.logo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: modelInfo.logo,
                                                                        alt: modelLabel,
                                                                        width: 18,
                                                                        height: 18,
                                                                        style: {
                                                                            objectFit: "contain"
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                        lineNumber: 476,
                                                                        columnNumber: 49
                                                                    }, this) : null
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                    lineNumber: 466,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm font-semibold",
                                                                    children: modelLabel
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                    lineNumber: 480,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/trades-sidebar.tsx",
                                                            lineNumber: 465,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-muted-foreground",
                                                            children: timestampLabel
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/trades-sidebar.tsx",
                                                            lineNumber: 482,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/trades-sidebar.tsx",
                                                    lineNumber: 464,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-3 flex flex-wrap items-center gap-1.5 text-xs",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-muted-foreground",
                                                            children: "completed a"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/trades-sidebar.tsx",
                                                            lineNumber: 486,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: isShort ? "outline" : "default",
                                                            className: `text-xs font-semibold ${isShort ? "border-red-500/20 bg-red-500/10 text-red-500" : "bg-green-500/20 text-green-700"}`,
                                                            children: isShort ? "SHORT" : "LONG"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/trades-sidebar.tsx",
                                                            lineNumber: 487,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-muted-foreground",
                                                            children: "trade on"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/trades-sidebar.tsx",
                                                            lineNumber: 490,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: "outline",
                                                            className: "text-xs font-semibold",
                                                            children: trade_2.symbol
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/trades-sidebar.tsx",
                                                            lineNumber: 491,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/trades-sidebar.tsx",
                                                    lineNumber: 485,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1 text-xs",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-muted-foreground",
                                                                    children: "Price:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                    lineNumber: 498,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-light",
                                                                    children: [
                                                                        entryPriceLabel,
                                                                        trade_2.exitPrice != null ? ` → ${exitPriceLabel}` : ""
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                    lineNumber: 499,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/trades-sidebar.tsx",
                                                            lineNumber: 497,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-muted-foreground",
                                                                    children: "Quantity:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                    lineNumber: 505,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-light",
                                                                    children: quantityLabel
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                    lineNumber: 506,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/trades-sidebar.tsx",
                                                            lineNumber: 504,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-muted-foreground",
                                                                    children: "Notional:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                    lineNumber: 509,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-light",
                                                                    children: [
                                                                        entryNotionalLabel,
                                                                        trade_2.exitNotional != null ? ` → ${exitNotionalLabel}` : ""
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                    lineNumber: 510,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/trades-sidebar.tsx",
                                                            lineNumber: 508,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-muted-foreground",
                                                                    children: "Holding time:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                    lineNumber: 516,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-light",
                                                                    children: holdingLabel
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                    lineNumber: 517,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/trades-sidebar.tsx",
                                                            lineNumber: 515,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/trades-sidebar.tsx",
                                                    lineNumber: 496,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-semibold uppercase tracking-wide",
                                                                children: "NET P&L:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                lineNumber: 523,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-base font-bold tabular-nums ${isProfitable ? "text-green-500" : "text-red-500"}`,
                                                                children: [
                                                                    isProfitable && trade_2.netPnl != null ? "+" : "",
                                                                    pnlLabel
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                lineNumber: 524,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/trades-sidebar.tsx",
                                                        lineNumber: 522,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/trades-sidebar.tsx",
                                                    lineNumber: 521,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/trades-sidebar.tsx",
                                            lineNumber: 461,
                                            columnNumber: 23
                                        }, this),
                                        idx < filteredTrades.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mx-4 border-b"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/trades-sidebar.tsx",
                                            lineNumber: 531,
                                            columnNumber: 59
                                        }, this)
                                    ]
                                }, trade_2.id, true, {
                                    fileName: "[project]/src/components/trades-sidebar.tsx",
                                    lineNumber: 460,
                                    columnNumber: 20
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/trades-sidebar.tsx",
                            lineNumber: 444,
                            columnNumber: 24
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/trades-sidebar.tsx",
                        lineNumber: 439,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            activeTab === "modelchat" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-full flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-b bg-muted/30 px-3 py-[7px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-xs uppercase tracking-wide",
                                        children: "Filter:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/trades-sidebar.tsx",
                                        lineNumber: 543,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                                asChild: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "flex items-center gap-1 rounded border bg-background px-2 py-1 font-medium text-xs transition-colors hover:bg-accent",
                                                    type: "button",
                                                    children: [
                                                        selectedModelLabel,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            className: "h-3 w-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/trades-sidebar.tsx",
                                                            lineNumber: 550,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/trades-sidebar.tsx",
                                                    lineNumber: 548,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                                lineNumber: 547,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                                align: "start",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                        onClick: ()=>setFilter("all"),
                                                        children: "All Models"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/trades-sidebar.tsx",
                                                        lineNumber: 554,
                                                        columnNumber: 21
                                                    }, this),
                                                    modelOptions.map((option_1)=>{
                                                        const swatchColor_0 = option_1.color || "#888888";
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                            onClick: ()=>setFilter(option_1.id),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            width: "16px",
                                                                            height: "16px",
                                                                            borderRadius: "50%",
                                                                            backgroundColor: swatchColor_0,
                                                                            display: "flex",
                                                                            alignItems: "center",
                                                                            justifyContent: "center",
                                                                            overflow: "hidden"
                                                                        },
                                                                        children: option_1.logo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            alt: option_1.label,
                                                                            src: option_1.logo,
                                                                            width: 10,
                                                                            height: 10,
                                                                            style: {
                                                                                objectFit: "contain"
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                            lineNumber: 571,
                                                                            columnNumber: 48
                                                                        }, this) : null
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                        lineNumber: 561,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    option_1.label
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                lineNumber: 560,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, option_1.id, false, {
                                                            fileName: "[project]/src/components/trades-sidebar.tsx",
                                                            lineNumber: 559,
                                                            columnNumber: 26
                                                        }, this);
                                                    })
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                                lineNumber: 553,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/trades-sidebar.tsx",
                                        lineNumber: 546,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                lineNumber: 542,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/trades-sidebar.tsx",
                            lineNumber: 541,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/trades-sidebar.tsx",
                        lineNumber: 540,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                        className: "flex-1 overflow-auto",
                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center p-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground text-sm",
                                children: "Loading conversations..."
                            }, void 0, false, {
                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                lineNumber: 587,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/trades-sidebar.tsx",
                            lineNumber: 586,
                            columnNumber: 24
                        }, this) : filteredConversations.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center p-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center text-muted-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-2 font-medium text-sm",
                                        children: "ModelChat"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/trades-sidebar.tsx",
                                        lineNumber: 590,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs",
                                        children: "No conversations yet. Models will appear here after making trading decisions."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/trades-sidebar.tsx",
                                        lineNumber: 591,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                lineNumber: 589,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/trades-sidebar.tsx",
                            lineNumber: 588,
                            columnNumber: 61
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: filteredConversations.map((conv, idx_0)=>{
                                const modelKey_0 = conv.modelLogo || conv.modelName;
                                const modelInfo_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$modelConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getModelInfo"])(modelKey_0 || conv.modelName);
                                const modelColor_0 = modelInfo_0.color || "#888888";
                                const modelLabel_0 = modelInfo_0.logo ? modelInfo_0.label : conv.modelName || modelKey_0 || "Unknown Model";
                                const isExpanded_0 = expandedResponses.has(conv.id);
                                const previewText = extractMarkdownPreview(conv.response);
                                const tradingDecisions = extractTradingDecisions(conv.toolCalls);
                                const activeSection = activeConversationPanels[conv.id] ?? "response";
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded px-4 py-4 transition-colors hover:bg-accent/30",
                                            style: {
                                                backgroundColor: `${modelColor_0}10`
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-3 flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        width: "24px",
                                                                        height: "24px",
                                                                        borderRadius: "50%",
                                                                        backgroundColor: modelColor_0,
                                                                        display: "flex",
                                                                        alignItems: "center",
                                                                        justifyContent: "center",
                                                                        overflow: "hidden"
                                                                    },
                                                                    children: modelInfo_0.logo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        alt: modelLabel_0,
                                                                        src: modelInfo_0.logo,
                                                                        width: 18,
                                                                        height: 18,
                                                                        style: {
                                                                            objectFit: "contain"
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                        lineNumber: 621,
                                                                        columnNumber: 51
                                                                    }, this) : null
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                    lineNumber: 611,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm font-semibold",
                                                                    children: modelLabel_0
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                    lineNumber: 625,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/trades-sidebar.tsx",
                                                            lineNumber: 610,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-muted-foreground",
                                                            children: formatTimestamp(conv.timestamp)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/trades-sidebar.tsx",
                                                            lineNumber: 627,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/trades-sidebar.tsx",
                                                    lineNumber: 609,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>toggleResponseExpansion(conv.id),
                                                    className: "w-full text-left",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-lg border p-3 transition-colors",
                                                        style: {
                                                            backgroundColor: `${modelColor_0}12`,
                                                            borderColor: `${modelColor_0}33`
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm leading-relaxed text-muted-foreground",
                                                                children: previewText || "No response yet."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                lineNumber: 637,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground",
                                                                children: isExpanded_0 ? "Hide context" : "Click to expand"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                lineNumber: 640,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/trades-sidebar.tsx",
                                                        lineNumber: 633,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/trades-sidebar.tsx",
                                                    lineNumber: 632,
                                                    columnNumber: 25
                                                }, this),
                                                isExpanded_0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 rounded-lg border bg-background/70 p-1",
                                                            style: {
                                                                borderColor: `${modelColor_0}22`
                                                            },
                                                            children: [
                                                                "response",
                                                                "decisions"
                                                            ].map((panel_0)=>{
                                                                const isActive = activeSection === panel_0;
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>setConversationPanel(conv.id, panel_0),
                                                                    className: `flex-1 rounded-md px-3 py-1 text-xs font-semibold uppercase tracking-wide transition-colors ${isActive ? "bg-accent text-foreground" : "text-muted-foreground hover:bg-accent/40"}`,
                                                                    children: panel_0 === "response" ? "Response" : "Trading Decisions"
                                                                }, panel_0, false, {
                                                                    fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                    lineNumber: 652,
                                                                    columnNumber: 30
                                                                }, this);
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/trades-sidebar.tsx",
                                                            lineNumber: 647,
                                                            columnNumber: 29
                                                        }, this),
                                                        activeSection === "response" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "rounded-lg border bg-background/60 p-3",
                                                                style: {
                                                                    borderColor: `${modelColor_0}33`
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "prose prose-invert prose-sm max-w-none",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__["default"], {
                                                                        remarkPlugins: [
                                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
                                                                        ],
                                                                        rehypePlugins: [
                                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rehype$2d$raw$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
                                                                        ],
                                                                        children: conv.response || "No response"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                        lineNumber: 663,
                                                                        columnNumber: 37
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                    lineNumber: 662,
                                                                    columnNumber: 35
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                lineNumber: 659,
                                                                columnNumber: 33
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/trades-sidebar.tsx",
                                                            lineNumber: 658,
                                                            columnNumber: 61
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                            children: tradingDecisions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "rounded-lg border border-dashed bg-background/40 p-3 text-xs text-muted-foreground",
                                                                children: "No explicit trading decisions recorded for this invocation."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                lineNumber: 669,
                                                                columnNumber: 66
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-3",
                                                                children: tradingDecisions.map((decision)=>{
                                                                    const confidenceLabel = formatConfidenceValue(decision.confidence);
                                                                    const quantityLabel_0 = formatQuantityValue(decision.quantity);
                                                                    const leverageLabel = formatLeverageValue(decision.leverage);
                                                                    const targetLabel = formatPriceLabel(decision.profitTarget);
                                                                    const stopLabel = formatPriceLabel(decision.stopLoss);
                                                                    const statusLabel = decision.status ?? (decision.result?.success === true ? "EXECUTED" : decision.result?.success === false ? "REJECTED" : null);
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "rounded-xl border bg-background/60 p-3 shadow-sm",
                                                                        style: {
                                                                            borderColor: `${modelColor_0}33`
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex flex-wrap items-start justify-between gap-4",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex flex-col gap-1",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "flex flex-wrap items-center gap-2",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                        className: "text-sm font-semibold uppercase tracking-wide",
                                                                                                        children: decision.symbol
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                                                        lineNumber: 685,
                                                                                                        columnNumber: 49
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                                        variant: decision.signal === "HOLD" ? "secondary" : "outline",
                                                                                                        className: `text-xs font-semibold uppercase ${decision.signal === "SHORT" ? "border-red-500/20 bg-red-500/10 text-red-500" : decision.signal === "LONG" ? "border-green-500/20 bg-green-500/10 text-green-500" : "border-muted text-foreground"}`,
                                                                                                        children: decision.signal
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                                                        lineNumber: 688,
                                                                                                        columnNumber: 49
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                        className: "text-[11px] uppercase tracking-wide text-muted-foreground",
                                                                                                        children: decision.toolCallType.replace(/_/g, " ")
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                                                        lineNumber: 691,
                                                                                                        columnNumber: 49
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                                                lineNumber: 684,
                                                                                                columnNumber: 47
                                                                                            }, this),
                                                                                            statusLabel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "text-[11px] font-semibold uppercase tracking-wide text-muted-foreground",
                                                                                                children: statusLabel
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                                                lineNumber: 695,
                                                                                                columnNumber: 62
                                                                                            }, this) : null
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                                        lineNumber: 683,
                                                                                        columnNumber: 45
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
                                                                                        children: confidenceLabel
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                                        lineNumber: 699,
                                                                                        columnNumber: 45
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                                lineNumber: 682,
                                                                                columnNumber: 43
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-xs uppercase tracking-wide text-muted-foreground",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: "Quantity"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                                        lineNumber: 704,
                                                                                        columnNumber: 45
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "text-right font-medium text-foreground tabular-nums",
                                                                                        children: quantityLabel_0
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                                        lineNumber: 705,
                                                                                        columnNumber: 45
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: "Leverage"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                                        lineNumber: 708,
                                                                                        columnNumber: 45
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "text-right font-medium text-foreground tabular-nums",
                                                                                        children: leverageLabel
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                                        lineNumber: 709,
                                                                                        columnNumber: 45
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: "Target"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                                        lineNumber: 712,
                                                                                        columnNumber: 45
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "text-right font-medium text-foreground tabular-nums",
                                                                                        children: targetLabel
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                                        lineNumber: 713,
                                                                                        columnNumber: 45
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: "Stop"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                                        lineNumber: 716,
                                                                                        columnNumber: 45
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "text-right font-medium text-foreground tabular-nums",
                                                                                        children: stopLabel
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                                        lineNumber: 717,
                                                                                        columnNumber: 45
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "col-span-2",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "text-muted-foreground",
                                                                                                children: "Invalidation"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                                                lineNumber: 721,
                                                                                                columnNumber: 47
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "mt-1 text-foreground",
                                                                                                children: decision.invalidationCondition ?? "—"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                                                lineNumber: 722,
                                                                                                columnNumber: 47
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                                        lineNumber: 720,
                                                                                        columnNumber: 45
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                                lineNumber: 703,
                                                                                columnNumber: 43
                                                                            }, this)
                                                                        ]
                                                                    }, decision.key, true, {
                                                                        fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                        lineNumber: 679,
                                                                        columnNumber: 32
                                                                    }, this);
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                lineNumber: 671,
                                                                columnNumber: 44
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/trades-sidebar.tsx",
                                                            lineNumber: 668,
                                                            columnNumber: 44
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/trades-sidebar.tsx",
                                                    lineNumber: 646,
                                                    columnNumber: 42
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/trades-sidebar.tsx",
                                            lineNumber: 606,
                                            columnNumber: 23
                                        }, this),
                                        idx_0 < filteredConversations.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-b mx-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/trades-sidebar.tsx",
                                            lineNumber: 733,
                                            columnNumber: 68
                                        }, this)
                                    ]
                                }, conv.id, true, {
                                    fileName: "[project]/src/components/trades-sidebar.tsx",
                                    lineNumber: 605,
                                    columnNumber: 20
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/trades-sidebar.tsx",
                            lineNumber: 595,
                            columnNumber: 24
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/trades-sidebar.tsx",
                        lineNumber: 585,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/trades-sidebar.tsx",
                lineNumber: 538,
                columnNumber: 37
            }, this),
            activeTab === "positions" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-b bg-muted/30 px-3 py-[7px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-xs uppercase tracking-wide",
                                        children: "Filter:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/trades-sidebar.tsx",
                                        lineNumber: 745,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                                asChild: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "flex items-center gap-1 rounded border bg-background px-2 py-1 font-medium text-xs transition-colors hover:bg-accent",
                                                    type: "button",
                                                    children: [
                                                        selectedModelLabel,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            className: "h-3 w-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/trades-sidebar.tsx",
                                                            lineNumber: 752,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/trades-sidebar.tsx",
                                                    lineNumber: 750,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                                lineNumber: 749,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                                align: "start",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                        onClick: ()=>setFilter("all"),
                                                        children: "All Models"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/trades-sidebar.tsx",
                                                        lineNumber: 756,
                                                        columnNumber: 21
                                                    }, this),
                                                    modelOptions.map((option_2)=>{
                                                        const swatchColor_1 = option_2.color || "#888888";
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                            onClick: ()=>setFilter(option_2.id),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            width: "16px",
                                                                            height: "16px",
                                                                            borderRadius: "50%",
                                                                            backgroundColor: swatchColor_1,
                                                                            display: "flex",
                                                                            alignItems: "center",
                                                                            justifyContent: "center",
                                                                            overflow: "hidden"
                                                                        },
                                                                        children: option_2.logo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            alt: option_2.label,
                                                                            src: option_2.logo,
                                                                            width: 10,
                                                                            height: 10,
                                                                            style: {
                                                                                objectFit: "contain"
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                            lineNumber: 773,
                                                                            columnNumber: 48
                                                                        }, this) : null
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                        lineNumber: 763,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    option_2.label
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                lineNumber: 762,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, option_2.id, false, {
                                                            fileName: "[project]/src/components/trades-sidebar.tsx",
                                                            lineNumber: 761,
                                                            columnNumber: 26
                                                        }, this);
                                                    })
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                                lineNumber: 755,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/trades-sidebar.tsx",
                                        lineNumber: 748,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                lineNumber: 744,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/trades-sidebar.tsx",
                            lineNumber: 743,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/trades-sidebar.tsx",
                        lineNumber: 742,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                        className: "flex-1 overflow-auto",
                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center p-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground text-sm",
                                children: "Loading positions..."
                            }, void 0, false, {
                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                lineNumber: 789,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/trades-sidebar.tsx",
                            lineNumber: 788,
                            columnNumber: 22
                        }, this) : filteredPositions.length === 0 || filteredPositions.every((p_0)=>p_0.positions.length === 0) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center p-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center text-muted-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-2 font-medium text-sm",
                                        children: "No Open Positions"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/trades-sidebar.tsx",
                                        lineNumber: 792,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs",
                                        children: "Open positions will appear here when models create trades."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/trades-sidebar.tsx",
                                        lineNumber: 793,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                lineNumber: 791,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/trades-sidebar.tsx",
                            lineNumber: 790,
                            columnNumber: 117
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: filteredPositions.map((modelPos)=>{
                                if (modelPos.positions.length === 0) return null;
                                const modelKey_1 = modelPos.modelLogo || modelPos.modelName;
                                const modelInfo_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$modelConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getModelInfo"])(modelKey_1 || modelPos.modelName);
                                const modelColor_1 = modelInfo_1.color || "#888888";
                                const modelLabel_1 = modelInfo_1.logo ? modelInfo_1.label : modelPos.modelName;
                                const totalUnrealizedNumeric = normalizeNumber(modelPos.totalUnrealizedPnl) ?? modelPos.positions.reduce((sum, p)=>sum + (normalizeNumber(p.unrealizedPnl) ?? 0), 0);
                                const totalIsPositive = totalUnrealizedNumeric >= 0;
                                const totalUnrealizedLabel = formatSignedCurrencyValue(totalUnrealizedNumeric);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "sticky top-0 z-10 border-b px-4 py-2.5",
                                            style: {
                                                backgroundColor: `${modelColor_1}18`,
                                                borderColor: `${modelColor_1}33`
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            modelInfo_1.logo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm",
                                                                style: {
                                                                    color: modelColor_1
                                                                },
                                                                children: modelInfo_1.logo
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                lineNumber: 815,
                                                                columnNumber: 47
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex h-5 w-5 items-center justify-center rounded bg-muted text-[10px]",
                                                                children: modelLabel_1.charAt(0)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                lineNumber: 819,
                                                                columnNumber: 39
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-xs",
                                                                style: {
                                                                    color: modelColor_1
                                                                },
                                                                children: modelLabel_1
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                lineNumber: 822,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-muted-foreground text-[10px]",
                                                                children: [
                                                                    "(",
                                                                    modelPos.positions.length,
                                                                    ")"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                lineNumber: 827,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/trades-sidebar.tsx",
                                                        lineNumber: 814,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            modelPos.availableCash !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-right",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-muted-foreground text-[9px] uppercase tracking-wider",
                                                                        children: "Cash"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                        lineNumber: 833,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "font-semibold text-xs tabular-nums",
                                                                        children: formatCurrencyValue(modelPos.availableCash)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                        lineNumber: 834,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                lineNumber: 832,
                                                                columnNumber: 68
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-right",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-muted-foreground text-[9px] uppercase tracking-wider",
                                                                        children: "Total PnL"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                        lineNumber: 839,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `font-semibold text-xs tabular-nums ${totalIsPositive ? "text-green-500" : "text-red-500"}`,
                                                                        children: totalUnrealizedLabel
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                        lineNumber: 840,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                lineNumber: 838,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/trades-sidebar.tsx",
                                                        lineNumber: 831,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                                lineNumber: 813,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/trades-sidebar.tsx",
                                            lineNumber: 809,
                                            columnNumber: 21
                                        }, this),
                                        modelPos.positions.map((position, idx_1)=>{
                                            const unrealizedPnl = normalizeNumber(position.unrealizedPnl) ?? 0;
                                            const isPnlPositive = unrealizedPnl >= 0;
                                            const hasExitPlan = Boolean(position.exitPlan?.target || position.exitPlan?.stop || position.exitPlan?.invalidation);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "px-4 py-3 transition-colors hover:bg-accent/30",
                                                        style: {
                                                            backgroundColor: `${modelColor_1}08`
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mb-2 flex items-center justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-bold text-sm",
                                                                                children: position.symbol
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                                lineNumber: 859,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                variant: "outline",
                                                                                className: `font-semibold text-[10px] ${position.signal === "HOLD" ? "border-muted" : position.signal === "LONG" ? "border-green-500/30 bg-green-500/10 text-green-500" : "border-red-500/30 bg-red-500/10 text-red-500"}`,
                                                                                children: position.signal ?? position.sign
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                                lineNumber: 860,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            position.leverage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-muted-foreground text-[10px]",
                                                                                children: formatLeverageValue(position.leverage)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                                lineNumber: 863,
                                                                                columnNumber: 55
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                        lineNumber: 858,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `font-bold text-sm tabular-nums ${isPnlPositive ? "text-green-500" : "text-red-500"}`,
                                                                        children: formatSignedCurrencyValue(unrealizedPnl)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                        lineNumber: 867,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                lineNumber: 857,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-3 gap-x-3 gap-y-1.5 text-xs",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-muted-foreground text-[9px] uppercase tracking-wider",
                                                                                children: "Qty"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                                lineNumber: 874,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "font-medium tabular-nums",
                                                                                children: formatQuantityValue(position.quantity)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                                lineNumber: 875,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                        lineNumber: 873,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-muted-foreground text-[9px] uppercase tracking-wider",
                                                                                children: "Notional"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                                lineNumber: 878,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "font-medium tabular-nums",
                                                                                children: formatCurrencyValue(position.notional)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                                lineNumber: 879,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                        lineNumber: 877,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-muted-foreground text-[9px] uppercase tracking-wider",
                                                                                children: "Liq Price"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                                lineNumber: 882,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "font-medium tabular-nums",
                                                                                children: formatCurrencyValue(position.liquidationPrice)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                                lineNumber: 883,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                        lineNumber: 881,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-muted-foreground text-[9px] uppercase tracking-wider",
                                                                                children: "Confidence"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                                lineNumber: 886,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "font-semibold tabular-nums",
                                                                                children: formatConfidenceValue(position.confidence)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                                lineNumber: 887,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                        lineNumber: 885,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-muted-foreground text-[9px] uppercase tracking-wider",
                                                                                children: "Real. PnL"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                                lineNumber: 890,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "font-medium tabular-nums",
                                                                                children: formatCurrencyValue(position.realizedPnl)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                                lineNumber: 891,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                        lineNumber: 889,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    hasExitPlan && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-end",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: ()=>{
                                                                                setSelectedExitPlan({
                                                                                    modelLabel: modelLabel_1,
                                                                                    modelColor: modelColor_1,
                                                                                    position
                                                                                });
                                                                            },
                                                                            className: "rounded bg-accent px-2 py-1 font-medium text-[9px] uppercase tracking-wider transition-colors hover:bg-accent/70",
                                                                            children: "Exit Plan"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                            lineNumber: 894,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                        lineNumber: 893,
                                                                        columnNumber: 47
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                                                lineNumber: 872,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/trades-sidebar.tsx",
                                                        lineNumber: 854,
                                                        columnNumber: 27
                                                    }, this),
                                                    idx_1 < modelPos.positions.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mx-4 border-b"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/trades-sidebar.tsx",
                                                        lineNumber: 906,
                                                        columnNumber: 69
                                                    }, this)
                                                ]
                                            }, position.symbol, true, {
                                                fileName: "[project]/src/components/trades-sidebar.tsx",
                                                lineNumber: 853,
                                                columnNumber: 24
                                            }, this);
                                        })
                                    ]
                                }, modelPos.modelId, true, {
                                    fileName: "[project]/src/components/trades-sidebar.tsx",
                                    lineNumber: 807,
                                    columnNumber: 20
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/trades-sidebar.tsx",
                            lineNumber: 797,
                            columnNumber: 22
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/trades-sidebar.tsx",
                        lineNumber: 787,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: Boolean(selectedExitPlan),
                onOpenChange: (open)=>{
                    if (!open) {
                        setSelectedExitPlan(null);
                    }
                },
                children: selectedExitPlan ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "max-w-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    className: "flex items-center justify-between gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                selectedExitPlan.position.symbol,
                                                " Exit Plan"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/trades-sidebar.tsx",
                                            lineNumber: 923,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: "outline",
                                            className: `font-semibold ${selectedExitPlan.position.signal === "HOLD" ? "border-muted text-foreground" : selectedExitPlan.position.signal === "LONG" ? "border-green-500/20 bg-green-500/10 text-green-500" : "border-red-500/20 bg-red-500/10 text-red-500"}`,
                                            children: selectedExitPlan.position.signal ?? selectedExitPlan.position.sign
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/trades-sidebar.tsx",
                                            lineNumber: 926,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/trades-sidebar.tsx",
                                    lineNumber: 922,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: [
                                        selectedExitPlan.modelLabel,
                                        " · ",
                                        selectedExitPlan.position.symbol
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/trades-sidebar.tsx",
                                    lineNumber: 930,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/trades-sidebar.tsx",
                            lineNumber: 921,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between rounded-lg px-3 py-2",
                                    style: {
                                        backgroundColor: `${selectedExitPlan.modelColor}14`,
                                        border: `1px solid ${selectedExitPlan.modelColor}33`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
                                            children: "Confidence"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/trades-sidebar.tsx",
                                            lineNumber: 939,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-semibold tabular-nums",
                                            children: formatConfidenceValue(selectedExitPlan.position.confidence)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/trades-sidebar.tsx",
                                            lineNumber: 942,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/trades-sidebar.tsx",
                                    lineNumber: 935,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-muted-foreground uppercase tracking-wide",
                                                    children: "Target"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/trades-sidebar.tsx",
                                                    lineNumber: 948,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold tabular-nums",
                                                    children: formatPriceLabel(selectedExitPlan.position.exitPlan?.target)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/trades-sidebar.tsx",
                                                    lineNumber: 949,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/trades-sidebar.tsx",
                                            lineNumber: 947,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-muted-foreground uppercase tracking-wide",
                                                    children: "Stop"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/trades-sidebar.tsx",
                                                    lineNumber: 954,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold tabular-nums",
                                                    children: formatPriceLabel(selectedExitPlan.position.exitPlan?.stop)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/trades-sidebar.tsx",
                                                    lineNumber: 955,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/trades-sidebar.tsx",
                                            lineNumber: 953,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-muted-foreground uppercase tracking-wide",
                                                    children: "Invalid Condition"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/trades-sidebar.tsx",
                                                    lineNumber: 960,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "rounded-md bg-muted/30 p-2 text-sm leading-relaxed",
                                                    children: selectedExitPlan.position.exitPlan?.invalidation ?? "—"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/trades-sidebar.tsx",
                                                    lineNumber: 961,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/trades-sidebar.tsx",
                                            lineNumber: 959,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/trades-sidebar.tsx",
                                    lineNumber: 946,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/trades-sidebar.tsx",
                            lineNumber: 934,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/trades-sidebar.tsx",
                    lineNumber: 920,
                    columnNumber: 29
                }, this) : null
            }, void 0, false, {
                fileName: "[project]/src/components/trades-sidebar.tsx",
                lineNumber: 915,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/trades-sidebar.tsx",
        lineNumber: 365,
        columnNumber: 10
    }, this);
}
_s(TradesSidebar, "mI1AJp3RkPiEL5h4Sel8viq9J8M=");
_c = TradesSidebar;
var _c;
__turbopack_context__.k.register(_c, "TradesSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/aurora-background.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuroraBackground",
    ()=>AuroraBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
const AuroraBackground = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "d931a7493f56f3b87eaf92594ac8179031c1565fd501bd5d2e31114048153c7b") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d931a7493f56f3b87eaf92594ac8179031c1565fd501bd5d2e31114048153c7b";
    }
    let children;
    let className;
    let props;
    let t1;
    if ($[1] !== t0) {
        ({ className, children, showRadialGradient: t1, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = props;
        $[5] = t1;
    } else {
        children = $[2];
        className = $[3];
        props = $[4];
        t1 = $[5];
    }
    const showRadialGradient = t1 === undefined ? true : t1;
    let t2;
    if ($[6] !== className) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("transition-bg relative flex h-[100vh] flex-col items-center justify-center bg-zinc-50 text-slate-950 dark:bg-zinc-900", className);
        $[6] = className;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            "--aurora": "repeating-linear-gradient(100deg,#3b82f6_10%,#a5b4fc_15%,#93c5fd_20%,#ddd6fe_25%,#60a5fa_30%)",
            "--dark-gradient": "repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)",
            "--white-gradient": "repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)",
            "--blue-300": "#93c5fd",
            "--blue-400": "#60a5fa",
            "--blue-500": "#3b82f6",
            "--indigo-300": "#a5b4fc",
            "--violet-200": "#ddd6fe",
            "--black": "#000",
            "--white": "#fff",
            "--transparent": "transparent"
        };
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    const t4 = showRadialGradient && "[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]";
    let t5;
    if ($[9] !== t4) {
        t5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("after:animate-aurora pointer-events-none absolute -inset-[10px] [background-image:var(--white-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-50 blur-[10px] invert filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-difference after:content-[\"\"] dark:[background-image:var(--dark-gradient),var(--aurora)] dark:invert-0 after:dark:[background-image:var(--dark-gradient),var(--aurora)]", t4);
        $[9] = t4;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 overflow-hidden",
            style: t3,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: t5
            }, void 0, false, {
                fileName: "[project]/src/components/ui/aurora-background.tsx",
                lineNumber: 79,
                columnNumber: 94
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ui/aurora-background.tsx",
            lineNumber: 79,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== children || $[14] !== props || $[15] !== t2 || $[16] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: t2,
                ...props,
                children: [
                    t6,
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/aurora-background.tsx",
                lineNumber: 87,
                columnNumber: 16
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ui/aurora-background.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = children;
        $[14] = props;
        $[15] = t2;
        $[16] = t6;
        $[17] = t7;
    } else {
        t7 = $[17];
    }
    return t7;
};
_c = AuroraBackground;
var _c;
__turbopack_context__.k.register(_c, "AuroraBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$crypto$2d$tracker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/crypto-tracker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$performance$2d$graph$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/performance-graph.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trades$2d$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/trades-sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$aurora$2d$background$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/aurora-background.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function HomePage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "ec7ab7c69957a97825af44f7c86cdaed51d6dfabc424098933bb30b594b48f94") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ec7ab7c69957a97825af44f7c86cdaed51d6dfabc424098933bb30b594b48f94";
    }
    const [isSidebarExpanded, setIsSidebarExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] !== isSidebarExpanded) {
        t0 = ({
            "HomePage[<Header>.onToggleSidebar]": ()=>setIsSidebarExpanded(!isSidebarExpanded)
        })["HomePage[<Header>.onToggleSidebar]"];
        $[1] = isSidebarExpanded;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    if ($[3] !== isSidebarExpanded || $[4] !== t0) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            isSidebarExpanded: isSidebarExpanded,
            onToggleSidebar: t0
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, this);
        $[3] = isSidebarExpanded;
        $[4] = t0;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$crypto$2d$tracker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 41,
            columnNumber: 10
        }, this);
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-0 flex-1 flex-col",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-h-0 flex-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$performance$2d$graph$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 48,
                        columnNumber: 92
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 48,
                    columnNumber: 60
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 48,
            columnNumber: 10
        }, this);
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== isSidebarExpanded) {
        t4 = ({
            "HomePage[<TradesSidebar>.onToggle]": ()=>setIsSidebarExpanded(!isSidebarExpanded)
        })["HomePage[<TradesSidebar>.onToggle]"];
        $[8] = isSidebarExpanded;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== isSidebarExpanded || $[11] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex min-h-0 flex-1",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trades$2d$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    isExpanded: isSidebarExpanded,
                    onToggle: t4
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 65,
                    columnNumber: 60
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        $[10] = isSidebarExpanded;
        $[11] = t4;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] !== t1 || $[14] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$aurora$2d$background$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuroraBackground"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-screen flex-col overflow-hidden",
                children: [
                    t1,
                    t5
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 74,
                columnNumber: 28
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        $[13] = t1;
        $[14] = t5;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    return t6;
}
_s(HomePage, "W6ztXc1oEFEEjtp86CQGqgSCIls=");
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_eb7c54dc._.js.map