(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/hooks/usePollingFetch.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePollingFetch",
    ()=>usePollingFetch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function usePollingFetch(url, { interval, selector, immediate = true, requestInit, enabled = true }) {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Boolean(immediate));
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const abortRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePollingFetch.useEffect": ()=>{
            if (!url || !enabled) return;
            let cancelled = false;
            const run = {
                "usePollingFetch.useEffect.run": async ()=>{
                    abortRef.current?.abort();
                    const controller = new AbortController();
                    abortRef.current = controller;
                    if (immediate) setLoading(true);
                    try {
                        const response = await fetch(url, {
                            ...requestInit,
                            signal: controller.signal
                        });
                        if (!response.ok) {
                            throw new Error(`Request failed with status ${response.status}`);
                        }
                        const payload = await response.json();
                        if (cancelled) return;
                        const nextData = selector ? selector(payload) : payload;
                        setData(nextData);
                        setError(null);
                    } catch (err) {
                        if (cancelled) return;
                        const error_0 = err instanceof Error ? err : new Error(String(err));
                        if (error_0.name === "AbortError") return;
                        setError(error_0);
                    } finally{
                        if (!cancelled && immediate) setLoading(false);
                    }
                }
            }["usePollingFetch.useEffect.run"];
            run();
            const timer = setInterval(run, interval);
            return ({
                "usePollingFetch.useEffect": ()=>{
                    cancelled = true;
                    abortRef.current?.abort();
                    clearInterval(timer);
                }
            })["usePollingFetch.useEffect"];
        }
    }["usePollingFetch.useEffect"], [
        url,
        interval,
        selector,
        immediate,
        requestInit,
        enabled
    ]);
    return {
        data,
        loading: loading && data == null,
        error
    };
}
_s(usePollingFetch, "uzYfoFlTIdQq8QjCHQUH3pfGahk=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/src/components/ui/skeleton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Skeleton",
    ()=>Skeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
function Skeleton(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "1bc674e902680b4fbe9f4223ca0a1b406789acb267e4c3cff7280eb6e73f1cdd") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1bc674e902680b4fbe9f4223ca0a1b406789acb267e4c3cff7280eb6e73f1cdd";
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
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-accent animate-pulse rounded-md", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "skeleton",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/skeleton.tsx",
            lineNumber: 35,
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
_c = Skeleton;
;
var _c;
__turbopack_context__.k.register(_c, "Skeleton");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePollingFetch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/usePollingFetch.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
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
    const previousTickersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const { data: sanitizedPrices, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePollingFetch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePollingFetch"])(`/api/crypto-prices?symbols=${TRACKED_SYMBOLS.join(",")}`, {
        interval: UPDATE_INTERVAL,
        selector: sanitizePrices
    });
    const displayCoins = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CryptoTracker.useMemo[displayCoins]": ()=>{
            const prices = sanitizedPrices ?? [];
            if (prices.length === 0) {
                return previousTickersRef.current;
            }
            const previous = previousTickersRef.current;
            const previousBySymbol = new Map(previous.map({
                "CryptoTracker.useMemo[displayCoins]": (entry)=>[
                        entry.symbol,
                        entry
                    ]
            }["CryptoTracker.useMemo[displayCoins]"]));
            const latestBySymbol = new Map(prices.map({
                "CryptoTracker.useMemo[displayCoins]": (entry_0)=>[
                        entry_0.symbol,
                        entry_0.price
                    ]
            }["CryptoTracker.useMemo[displayCoins]"]));
            const next = [];
            TRACKED_SYMBOLS.forEach({
                "CryptoTracker.useMemo[displayCoins]": (symbol)=>{
                    const currentPrice = latestBySymbol.get(symbol);
                    const previousEntry = previousBySymbol.get(symbol);
                    if (currentPrice == null) {
                        if (previousEntry) {
                            next.push(previousEntry);
                        }
                        return;
                    }
                    const prevPrice = previousEntry?.price;
                    const diff = prevPrice && prevPrice > 0 ? (currentPrice - prevPrice) / prevPrice : 0;
                    next.push({
                        symbol,
                        price: currentPrice,
                        diff
                    });
                }
            }["CryptoTracker.useMemo[displayCoins]"]);
            previousTickersRef.current = next;
            return next;
        }
    }["CryptoTracker.useMemo[displayCoins]"], [
        sanitizedPrices
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-4 border-b py-[5px] px-6",
        children: loading && displayCoins.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TickerSkeleton, {}, void 0, false, {
            fileName: "[project]/src/components/crypto-tracker.tsx",
            lineNumber: 87,
            columnNumber: 47
        }, this) : displayCoins.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-muted-foreground text-sm",
            children: "Fetching market prices..."
        }, void 0, false, {
            fileName: "[project]/src/components/crypto-tracker.tsx",
            lineNumber: 87,
            columnNumber: 96
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
                                        lineNumber: 92,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground text-sm",
                                        children: coin.symbol
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/crypto-tracker.tsx",
                                        lineNumber: 93,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/crypto-tracker.tsx",
                                lineNumber: 91,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PriceWithDiff, {
                                value: coin.price,
                                diff: coin.diff,
                                decimals: style.decimals
                            }, void 0, false, {
                                fileName: "[project]/src/components/crypto-tracker.tsx",
                                lineNumber: 95,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/crypto-tracker.tsx",
                        lineNumber: 90,
                        columnNumber: 15
                    }, this),
                    index !== displayCoins.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-10 w-px bg-border"
                    }, void 0, false, {
                        fileName: "[project]/src/components/crypto-tracker.tsx",
                        lineNumber: 97,
                        columnNumber: 53
                    }, this)
                ]
            }, coin.symbol, true, {
                fileName: "[project]/src/components/crypto-tracker.tsx",
                lineNumber: 89,
                columnNumber: 14
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/crypto-tracker.tsx",
        lineNumber: 86,
        columnNumber: 10
    }, this);
}
_s(CryptoTracker, "iUJkuzORU5ecln9+YcJrtv3QNoY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePollingFetch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePollingFetch"]
    ];
});
_c = CryptoTracker;
function PriceWithDiff(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "33760bf4934e890562e79faf95828c4b925639c6f56882b27ea026c5c0353708") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "33760bf4934e890562e79faf95828c4b925639c6f56882b27ea026c5c0353708";
    }
    const { value, decimals } = t0;
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
                lineNumber: 129,
                columnNumber: 58
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/crypto-tracker.tsx",
            lineNumber: 129,
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
_c1 = PriceWithDiff;
function sanitizePrices(payload) {
    const entries = Array.isArray(payload?.prices) ? payload.prices : [];
    const sanitized = entries.map((entry)=>{
        const symbol = typeof entry?.symbol === "string" ? entry.symbol.toUpperCase() : "";
        if (!TRACKED_SYMBOL_SET.has(symbol)) return null;
        const price = typeof entry?.price === "number" && Number.isFinite(entry.price) ? entry.price : null;
        if (price == null) return null;
        return {
            symbol: symbol,
            price
        };
    }).filter((entry)=>Boolean(entry));
    sanitized.sort((a, b)=>TRACKED_SYMBOLS.indexOf(a.symbol) - TRACKED_SYMBOLS.indexOf(b.symbol));
    return sanitized;
}
function TickerSkeleton() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "33760bf4934e890562e79faf95828c4b925639c6f56882b27ea026c5c0353708") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "33760bf4934e890562e79faf95828c4b925639c6f56882b27ea026c5c0353708";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex w-full items-center gap-4",
            children: TRACKED_SYMBOLS.map(_TickerSkeletonTRACKED_SYMBOLSMap)
        }, void 0, false, {
            fileName: "[project]/src/components/crypto-tracker.tsx",
            lineNumber: 167,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c2 = TickerSkeleton;
function _TickerSkeletonTRACKED_SYMBOLSMap(symbol) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-1 flex-col items-center gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-4 w-14"
                    }, void 0, false, {
                        fileName: "[project]/src/components/crypto-tracker.tsx",
                        lineNumber: 175,
                        columnNumber: 121
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-4 w-10"
                    }, void 0, false, {
                        fileName: "[project]/src/components/crypto-tracker.tsx",
                        lineNumber: 175,
                        columnNumber: 154
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/crypto-tracker.tsx",
                lineNumber: 175,
                columnNumber: 80
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                className: "h-5 w-24"
            }, void 0, false, {
                fileName: "[project]/src/components/crypto-tracker.tsx",
                lineNumber: 175,
                columnNumber: 193
            }, this)
        ]
    }, symbol, true, {
        fileName: "[project]/src/components/crypto-tracker.tsx",
        lineNumber: 175,
        columnNumber: 10
    }, this);
}
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "CryptoTracker");
__turbopack_context__.k.register(_c1, "PriceWithDiff");
__turbopack_context__.k.register(_c2, "TickerSkeleton");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$animated$2d$theme$2d$toggler$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/animated-theme-toggler.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-client] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minimize-2.js [app-client] (ecmascript) <export default as Minimize2>");
"use client";
;
;
;
;
;
function Header(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "b89f0041af2285a2dcb6e4c883cc6a43a81fbceaa45f8ff93267c64ed9e05234") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b89f0041af2285a2dcb6e4c883cc6a43a81fbceaa45f8ff93267c64ed9e05234";
    }
    const { isSidebarExpanded, onToggleSidebar } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    lineNumber: 25,
                    columnNumber: 51
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-lg font-mono tracking-wider text-foreground",
                    children: "AutonoMe"
                }, void 0, false, {
                    fileName: "[project]/src/components/header.tsx",
                    lineNumber: 27,
                    columnNumber: 12
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/header.tsx",
            lineNumber: 25,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const t2 = isSidebarExpanded ? "Collapse sidebar" : "Expand sidebar";
    let t3;
    if ($[2] !== isSidebarExpanded) {
        t3 = isSidebarExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__["Minimize2"], {
                    className: "h-3.5 w-3.5"
                }, void 0, false, {
                    fileName: "[project]/src/components/header.tsx",
                    lineNumber: 35,
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
                    lineNumber: 35,
                    columnNumber: 85
                }, this),
                "Expand"
            ]
        }, void 0, true);
        $[2] = isSidebarExpanded;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] !== onToggleSidebar || $[5] !== t2 || $[6] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: onToggleSidebar,
            className: "cursor-pointer flex items-center gap-1.5 text-sm font-light text-muted-foreground hover:text-foreground transition-colors",
            "aria-label": t2,
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/components/header.tsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[4] = onToggleSidebar;
        $[5] = t2;
        $[6] = t3;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$animated$2d$theme$2d$toggler$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedThemeToggler"], {
            className: "cursor-pointer text-muted-foreground hover:text-foreground"
        }, void 0, false, {
            fileName: "[project]/src/components/header.tsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== t4) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between border-b px-6 py-4",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-8",
                    children: [
                        t4,
                        t5
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/header.tsx",
                    lineNumber: 60,
                    columnNumber: 84
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/header.tsx",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        $[9] = t4;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    return t6;
}
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
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
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
    if ($[0] !== "ec9eaa275fb367266b970712b1cd803d9c4bede5b052700a86680c3b4a645ba5") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ec9eaa275fb367266b970712b1cd803d9c4bede5b052700a86680c3b4a645ba5";
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/ReferenceLine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
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
const CustomEndDot = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(40);
    if ($[0] !== "c90c61fc62420b61d780be0cfd177e97918c763dbbad0887e4a427e6d6bbb934") {
        for(let $i = 0; $i < 40; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c90c61fc62420b61d780be0cfd177e97918c763dbbad0887e4a427e6d6bbb934";
    }
    const { cx, cy, value, dataKey, index, hoveredLine, seriesMeta, valueMode, chartLength } = t0;
    if (typeof cx !== "number" || typeof cy !== "number" || typeof index !== "number" || chartLength <= 0 || index !== chartLength - 1 || typeof value !== "number" || !Number.isFinite(value)) {
        return null;
    }
    const resolvedKey = typeof dataKey === "string" ? dataKey : typeof dataKey === "number" ? String(dataKey) : undefined;
    if (!resolvedKey) {
        return null;
    }
    const originalKey = seriesMeta[resolvedKey]?.originalKey ?? resolvedKey;
    let color;
    let isDimmed;
    let isHovered;
    let logo;
    let t1;
    if ($[1] !== hoveredLine || $[2] !== originalKey || $[3] !== resolvedKey) {
        const modelInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$modelConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getModelInfo"])(originalKey);
        ({ logo, color } = modelInfo);
        isHovered = hoveredLine === resolvedKey;
        isDimmed = Boolean(hoveredLine && hoveredLine !== resolvedKey);
        t1 = (modelInfo.label || originalKey || resolvedKey).trim().charAt(0).toUpperCase() || "\u2022";
        $[1] = hoveredLine;
        $[2] = originalKey;
        $[3] = resolvedKey;
        $[4] = color;
        $[5] = isDimmed;
        $[6] = isHovered;
        $[7] = logo;
        $[8] = t1;
    } else {
        color = $[4];
        isDimmed = $[5];
        isHovered = $[6];
        logo = $[7];
        t1 = $[8];
    }
    const fallbackGlyph = t1;
    let t2;
    if ($[9] !== value || $[10] !== valueMode) {
        t2 = valueMode === "percent" ? `${value.toFixed(1)}%` : new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 2
        }).format(value);
        $[9] = value;
        $[10] = valueMode;
        $[11] = t2;
    } else {
        t2 = $[11];
    }
    const formattedValue = t2;
    const t3 = isHovered ? 16 : 14;
    const t4 = isDimmed ? 0.3 : 1;
    let t5;
    if ($[12] !== color || $[13] !== cx || $[14] !== cy || $[15] !== t3 || $[16] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: cx,
            cy: cy,
            r: t3,
            fill: color,
            opacity: t4
        }, void 0, false, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 104,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = color;
        $[13] = cx;
        $[14] = cy;
        $[15] = t3;
        $[16] = t4;
        $[17] = t5;
    } else {
        t5 = $[17];
    }
    let t6;
    if ($[18] !== cx || $[19] !== cy || $[20] !== fallbackGlyph || $[21] !== isDimmed || $[22] !== isHovered || $[23] !== logo) {
        t6 = logo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("image", {
            x: cx - (isHovered ? 16 : 14),
            y: cy - (isHovered ? 16 : 14),
            width: isHovered ? 32 : 28,
            height: isHovered ? 32 : 28,
            href: logo,
            preserveAspectRatio: "xMidYMid meet",
            style: {
                clipPath: `circle(${isHovered ? 16 : 14}px at 50% 50%)`,
                pointerEvents: "none"
            },
            opacity: isDimmed ? 0.3 : 1
        }, void 0, false, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 116,
            columnNumber: 17
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
            x: cx,
            y: cy + 4,
            textAnchor: "middle",
            fontSize: isHovered ? 14 : 12,
            fontWeight: 700,
            fill: "#fff",
            opacity: isDimmed ? 0.3 : 1,
            children: fallbackGlyph
        }, void 0, false, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 119,
            columnNumber: 42
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = cx;
        $[19] = cy;
        $[20] = fallbackGlyph;
        $[21] = isDimmed;
        $[22] = isHovered;
        $[23] = logo;
        $[24] = t6;
    } else {
        t6 = $[24];
    }
    const t7 = cx + 25;
    const t8 = cy - 12;
    const t9 = isDimmed ? 0.3 : 1;
    const t10 = isHovered ? "2px solid white" : "none";
    let t11;
    if ($[25] !== color || $[26] !== t10) {
        t11 = {
            backgroundColor: color,
            color: "white",
            padding: "2px 8px",
            borderRadius: "4px",
            fontSize: "12px",
            fontWeight: "bold",
            whiteSpace: "nowrap",
            border: t10
        };
        $[25] = color;
        $[26] = t10;
        $[27] = t11;
    } else {
        t11 = $[27];
    }
    let t12;
    if ($[28] !== formattedValue || $[29] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t11,
            children: formattedValue
        }, void 0, false, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 154,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = formattedValue;
        $[29] = t11;
        $[30] = t12;
    } else {
        t12 = $[30];
    }
    let t13;
    if ($[31] !== t12 || $[32] !== t7 || $[33] !== t8 || $[34] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("foreignObject", {
            x: t7,
            y: t8,
            width: 100,
            height: 24,
            opacity: t9,
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 163,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[31] = t12;
        $[32] = t7;
        $[33] = t8;
        $[34] = t9;
        $[35] = t13;
    } else {
        t13 = $[35];
    }
    let t14;
    if ($[36] !== t13 || $[37] !== t5 || $[38] !== t6) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            children: [
                t5,
                t6,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 174,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[36] = t13;
        $[37] = t5;
        $[38] = t6;
        $[39] = t14;
    } else {
        t14 = $[39];
    }
    return t14;
};
_c = CustomEndDot;
const CustomTooltip = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "c90c61fc62420b61d780be0cfd177e97918c763dbbad0887e4a427e6d6bbb934") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c90c61fc62420b61d780be0cfd177e97918c763dbbad0887e4a427e6d6bbb934";
    }
    const { active, payload, hoveredLine, seriesMeta, valueMode } = t0;
    if (!active || !payload || !payload.length || !hoveredLine) {
        return null;
    }
    let modelInfo;
    let t1;
    let t2;
    if ($[1] !== hoveredLine || $[2] !== payload || $[3] !== seriesMeta || $[4] !== valueMode) {
        t2 = Symbol.for("react.early_return_sentinel");
        bb0: {
            let t3;
            if ($[8] !== hoveredLine) {
                t3 = (p)=>p.dataKey === hoveredLine;
                $[8] = hoveredLine;
                $[9] = t3;
            } else {
                t3 = $[9];
            }
            const hoveredData = payload.find(t3);
            if (!hoveredData || typeof hoveredData.value !== "number") {
                t2 = null;
                break bb0;
            }
            const originalKey = seriesMeta[hoveredLine]?.originalKey ?? hoveredLine;
            let t4;
            if ($[10] !== originalKey) {
                t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$modelConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getModelInfo"])(originalKey);
                $[10] = originalKey;
                $[11] = t4;
            } else {
                t4 = $[11];
            }
            modelInfo = t4;
            t1 = valueMode === "percent" ? `${hoveredData.value.toFixed(1)}%` : new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 2
            }).format(hoveredData.value);
        }
        $[1] = hoveredLine;
        $[2] = payload;
        $[3] = seriesMeta;
        $[4] = valueMode;
        $[5] = modelInfo;
        $[6] = t1;
        $[7] = t2;
    } else {
        modelInfo = $[5];
        t1 = $[6];
        t2 = $[7];
    }
    if (t2 !== Symbol.for("react.early_return_sentinel")) {
        return t2;
    }
    const formattedValue = t1;
    let t3;
    if ($[12] !== modelInfo.color) {
        t3 = {
            backgroundColor: modelInfo.color,
            color: "white",
            padding: "8px 12px",
            borderRadius: "6px",
            fontSize: "14px",
            fontWeight: "bold",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
        };
        $[12] = modelInfo.color;
        $[13] = t3;
    } else {
        t3 = $[13];
    }
    let t4;
    if ($[14] !== formattedValue || $[15] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t3,
            children: formattedValue
        }, void 0, false, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 271,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = formattedValue;
        $[15] = t3;
        $[16] = t4;
    } else {
        t4 = $[16];
    }
    return t4;
};
_c1 = CustomTooltip;
function GlowingLineChart(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(113);
    if ($[0] !== "c90c61fc62420b61d780be0cfd177e97918c763dbbad0887e4a427e6d6bbb934") {
        for(let $i = 0; $i < 113; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c90c61fc62420b61d780be0cfd177e97918c763dbbad0887e4a427e6d6bbb934";
    }
    const { chartData, chartConfig, seriesMeta, valueMode: t1, onValueModeChange, timeFilter: t2, onTimeFilterChange, hoveredLine: externalHoveredLine, onHoverLine } = t0;
    const valueMode = t1 === undefined ? "usd" : t1;
    const timeFilter = t2 === undefined ? "all" : t2;
    const [internalHoveredLine, setInternalHoveredLine] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const hoveredLine = externalHoveredLine ?? internalHoveredLine;
    let t3;
    if ($[1] !== chartConfig) {
        t3 = Object.keys(chartConfig);
        $[1] = chartConfig;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    let t4;
    if ($[3] !== seriesMeta || $[4] !== t3) {
        t4 = t3.filter({
            "GlowingLineChart[(anonymous)()]": (key)=>Boolean(seriesMeta[key])
        }["GlowingLineChart[(anonymous)()]"]);
        $[3] = seriesMeta;
        $[4] = t3;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const modelKeys = t4;
    let t5;
    let t6;
    if ($[6] !== modelKeys || $[7] !== seriesMeta) {
        t5 = ({
            "GlowingLineChart[useEffect()]": ()=>{
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                const logos = modelKeys.map({
                    "GlowingLineChart[useEffect() > modelKeys.map()]": (key_0)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$modelConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getModelInfo"])(seriesMeta[key_0]?.originalKey ?? key_0).logo
                }["GlowingLineChart[useEffect() > modelKeys.map()]"]).filter(_GlowingLineChartUseEffectAnonymous);
                const uniqueLogos = Array.from(new Set(logos));
                uniqueLogos.forEach(_GlowingLineChartUseEffectUniqueLogosForEach);
            }
        })["GlowingLineChart[useEffect()]"];
        t6 = [
            modelKeys,
            seriesMeta
        ];
        $[6] = modelKeys;
        $[7] = seriesMeta;
        $[8] = t5;
        $[9] = t6;
    } else {
        t5 = $[8];
        t6 = $[9];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    const isPercent = valueMode === "percent";
    let t7;
    if ($[10] !== isPercent) {
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
        $[10] = isPercent;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    const yAxisConfig = t7;
    let t8;
    if ($[12] !== onHoverLine) {
        t8 = ({
            "GlowingLineChart[setHoveredLine]": (key_1)=>{
                setInternalHoveredLine(key_1);
                onHoverLine?.(key_1);
            }
        })["GlowingLineChart[setHoveredLine]"];
        $[12] = onHoverLine;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    const setHoveredLine = t8;
    let t9;
    bb0: {
        if (!hoveredLine) {
            let t10;
            if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
                t10 = {
                    stroke: "hsl(var(--muted-foreground))",
                    strokeWidth: 2,
                    strokeDasharray: "5 5",
                    opacity: 0.5
                };
                $[14] = t10;
            } else {
                t10 = $[14];
            }
            t9 = t10;
            break bb0;
        }
        const originalKey = seriesMeta[hoveredLine]?.originalKey ?? hoveredLine;
        let t10;
        if ($[15] !== originalKey) {
            t10 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$modelConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getModelInfo"])(originalKey);
            $[15] = originalKey;
            $[16] = t10;
        } else {
            t10 = $[16];
        }
        const info = t10;
        let t11;
        if ($[17] !== info.color) {
            t11 = {
                stroke: info.color,
                strokeWidth: 2,
                strokeDasharray: "5 5",
                opacity: 0.5
            };
            $[17] = info.color;
            $[18] = t11;
        } else {
            t11 = $[18];
        }
        t9 = t11;
    }
    const tooltipCursor = t9;
    const t10 = valueMode === "usd";
    let t11;
    let t12;
    if ($[19] !== onValueModeChange) {
        t11 = ({
            "GlowingLineChart[<Button>.onClick]": ()=>onValueModeChange?.("usd")
        })["GlowingLineChart[<Button>.onClick]"];
        t12 = ({
            "GlowingLineChart[<Button>.onKeyDown]": (e)=>{
                if (e.key === "Enter" || e.key === " ") {
                    onValueModeChange?.("usd");
                }
            }
        })["GlowingLineChart[<Button>.onKeyDown]"];
        $[19] = onValueModeChange;
        $[20] = t11;
        $[21] = t12;
    } else {
        t11 = $[20];
        t12 = $[21];
    }
    const t13 = valueMode === "usd" ? "default" : "outline";
    let t14;
    if ($[22] !== t10 || $[23] !== t11 || $[24] !== t12 || $[25] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            "aria-pressed": t10,
            className: "h-8 px-3 text-xs font-medium transition-all",
            onClick: t11,
            onKeyDown: t12,
            type: "button",
            variant: t13,
            children: "$"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 446,
            columnNumber: 11
        }, this);
        $[22] = t10;
        $[23] = t11;
        $[24] = t12;
        $[25] = t13;
        $[26] = t14;
    } else {
        t14 = $[26];
    }
    const t15 = valueMode === "percent";
    let t16;
    let t17;
    if ($[27] !== onValueModeChange) {
        t16 = ({
            "GlowingLineChart[<Button>.onClick]": ()=>onValueModeChange?.("percent")
        })["GlowingLineChart[<Button>.onClick]"];
        t17 = ({
            "GlowingLineChart[<Button>.onKeyDown]": (e_0)=>{
                if (e_0.key === "Enter" || e_0.key === " ") {
                    onValueModeChange?.("percent");
                }
            }
        })["GlowingLineChart[<Button>.onKeyDown]"];
        $[27] = onValueModeChange;
        $[28] = t16;
        $[29] = t17;
    } else {
        t16 = $[28];
        t17 = $[29];
    }
    const t18 = valueMode === "percent" ? "default" : "outline";
    let t19;
    if ($[30] !== t15 || $[31] !== t16 || $[32] !== t17 || $[33] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            "aria-pressed": t15,
            className: "h-8 px-3 text-xs font-medium transition-all",
            onClick: t16,
            onKeyDown: t17,
            type: "button",
            variant: t18,
            children: "%"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 479,
            columnNumber: 11
        }, this);
        $[30] = t15;
        $[31] = t16;
        $[32] = t17;
        $[33] = t18;
        $[34] = t19;
    } else {
        t19 = $[34];
    }
    let t20;
    if ($[35] !== t14 || $[36] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1",
            children: [
                t14,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 490,
            columnNumber: 11
        }, this);
        $[35] = t14;
        $[36] = t19;
        $[37] = t20;
    } else {
        t20 = $[37];
    }
    let t21;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-sm font-semibold uppercase tracking-wider",
            children: "TOTAL ACCOUNT VALUE"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 499,
            columnNumber: 11
        }, this);
        $[38] = t21;
    } else {
        t21 = $[38];
    }
    let t22;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center gap-2",
                    children: [
                        t21,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                            className: "border-none bg-green-500/10 text-green-500 hover:bg-green-500/20 transition-colors",
                            variant: "outline",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                    className: "mr-1 h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/glowing-line.tsx",
                                    lineNumber: 506,
                                    columnNumber: 221
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold",
                                    children: "Live"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/glowing-line.tsx",
                                    lineNumber: 506,
                                    columnNumber: 264
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/glowing-line.tsx",
                            lineNumber: 506,
                            columnNumber: 101
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/glowing-line.tsx",
                    lineNumber: 506,
                    columnNumber: 40
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-1 text-xs text-muted-foreground",
                    children: "Real-time model equity tracking"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/glowing-line.tsx",
                    lineNumber: 506,
                    columnNumber: 321
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 506,
            columnNumber: 11
        }, this);
        $[39] = t22;
    } else {
        t22 = $[39];
    }
    const t23 = timeFilter === "all";
    let t24;
    let t25;
    if ($[40] !== onTimeFilterChange) {
        t24 = ({
            "GlowingLineChart[<Button>.onClick]": ()=>onTimeFilterChange?.("all")
        })["GlowingLineChart[<Button>.onClick]"];
        t25 = ({
            "GlowingLineChart[<Button>.onKeyDown]": (e_1)=>{
                if (e_1.key === "Enter" || e_1.key === " ") {
                    onTimeFilterChange?.("all");
                }
            }
        })["GlowingLineChart[<Button>.onKeyDown]"];
        $[40] = onTimeFilterChange;
        $[41] = t24;
        $[42] = t25;
    } else {
        t24 = $[41];
        t25 = $[42];
    }
    const t26 = timeFilter === "all" ? "default" : "outline";
    let t27;
    if ($[43] !== t23 || $[44] !== t24 || $[45] !== t25 || $[46] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            "aria-pressed": t23,
            className: "h-8 px-3 text-xs font-medium transition-all",
            onClick: t24,
            onKeyDown: t25,
            type: "button",
            variant: t26,
            children: "ALL"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 535,
            columnNumber: 11
        }, this);
        $[43] = t23;
        $[44] = t24;
        $[45] = t25;
        $[46] = t26;
        $[47] = t27;
    } else {
        t27 = $[47];
    }
    const t28 = timeFilter === "72h";
    let t29;
    let t30;
    if ($[48] !== onTimeFilterChange) {
        t29 = ({
            "GlowingLineChart[<Button>.onClick]": ()=>onTimeFilterChange?.("72h")
        })["GlowingLineChart[<Button>.onClick]"];
        t30 = ({
            "GlowingLineChart[<Button>.onKeyDown]": (e_2)=>{
                if (e_2.key === "Enter" || e_2.key === " ") {
                    onTimeFilterChange?.("72h");
                }
            }
        })["GlowingLineChart[<Button>.onKeyDown]"];
        $[48] = onTimeFilterChange;
        $[49] = t29;
        $[50] = t30;
    } else {
        t29 = $[49];
        t30 = $[50];
    }
    const t31 = timeFilter === "72h" ? "default" : "outline";
    let t32;
    if ($[51] !== t28 || $[52] !== t29 || $[53] !== t30 || $[54] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            "aria-pressed": t28,
            className: "h-8 px-3 text-xs font-medium transition-all",
            onClick: t29,
            onKeyDown: t30,
            type: "button",
            variant: t31,
            children: "72H"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 568,
            columnNumber: 11
        }, this);
        $[51] = t28;
        $[52] = t29;
        $[53] = t30;
        $[54] = t31;
        $[55] = t32;
    } else {
        t32 = $[55];
    }
    let t33;
    if ($[56] !== t27 || $[57] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1",
            children: [
                t27,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 579,
            columnNumber: 11
        }, this);
        $[56] = t27;
        $[57] = t32;
        $[58] = t33;
    } else {
        t33 = $[58];
    }
    let t34;
    if ($[59] !== t20 || $[60] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-6 py-4 border-b",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-2",
                children: [
                    t20,
                    t22,
                    t33
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/glowing-line.tsx",
                lineNumber: 588,
                columnNumber: 47
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 588,
            columnNumber: 11
        }, this);
        $[59] = t20;
        $[60] = t33;
        $[61] = t34;
    } else {
        t34 = $[61];
    }
    let t35;
    if ($[62] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = {
            left: 10,
            right: 120,
            top: 20,
            bottom: 20
        };
        $[62] = t35;
    } else {
        t35 = $[62];
    }
    let t36;
    if ($[63] !== setHoveredLine) {
        t36 = ({
            "GlowingLineChart[<LineChart>.onMouseLeave]": ()=>setHoveredLine(null)
        })["GlowingLineChart[<LineChart>.onMouseLeave]"];
        $[63] = setHoveredLine;
        $[64] = t36;
    } else {
        t36 = $[64];
    }
    let t37;
    if ($[65] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = {
            background: "transparent"
        };
        $[65] = t37;
    } else {
        t37 = $[65];
    }
    let t38;
    if ($[66] !== chartConfig || $[67] !== modelKeys || $[68] !== seriesMeta) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
            children: modelKeys.map({
                "GlowingLineChart[modelKeys.map()]": (key_2)=>{
                    const originalKey_0 = seriesMeta[key_2]?.originalKey ?? key_2;
                    const modelInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$modelConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getModelInfo"])(originalKey_0);
                    const color = modelInfo.color || chartConfig[key_2]?.color || "hsl(var(--chart-1))";
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: `gradient-${key_2}`,
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
                                lineNumber: 633,
                                columnNumber: 113
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: color,
                                stopOpacity: 0
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/glowing-line.tsx",
                                lineNumber: 633,
                                columnNumber: 169
                            }, this)
                        ]
                    }, `gradient-${key_2}`, true, {
                        fileName: "[project]/src/components/ui/glowing-line.tsx",
                        lineNumber: 633,
                        columnNumber: 18
                    }, this);
                }
            }["GlowingLineChart[modelKeys.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 628,
            columnNumber: 11
        }, this);
        $[66] = chartConfig;
        $[67] = modelKeys;
        $[68] = seriesMeta;
        $[69] = t38;
    } else {
        t38 = $[69];
    }
    let t39;
    if ($[70] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
            children: "Model performance over time"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 645,
            columnNumber: 11
        }, this);
        $[70] = t39;
    } else {
        t39 = $[70];
    }
    let t40;
    if ($[71] !== yAxisConfig.ticks) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
            strokeDasharray: "3 3",
            vertical: false,
            stroke: "hsl(var(--border))",
            opacity: 0.2,
            horizontalPoints: yAxisConfig.ticks
        }, void 0, false, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 652,
            columnNumber: 11
        }, this);
        $[71] = yAxisConfig.ticks;
        $[72] = t40;
    } else {
        t40 = $[72];
    }
    let t41;
    if ($[73] === Symbol.for("react.memo_cache_sentinel")) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
            axisLine: false,
            dataKey: "month",
            tickLine: false,
            tickMargin: 8,
            tick: {
                fill: "hsl(var(--muted-foreground))",
                fontSize: 11
            },
            interval: "preserveStartEnd",
            angle: -45,
            textAnchor: "end",
            height: 60
        }, void 0, false, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 660,
            columnNumber: 11
        }, this);
        $[73] = t41;
    } else {
        t41 = $[73];
    }
    let t42;
    if ($[74] !== isPercent) {
        t42 = ({
            "GlowingLineChart[<YAxis>.tickFormatter]": (v)=>isPercent ? `${Math.round(v)}%` : new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    maximumFractionDigits: 0
                }).format(v)
        })["GlowingLineChart[<YAxis>.tickFormatter]"];
        $[74] = isPercent;
        $[75] = t42;
    } else {
        t42 = $[75];
    }
    let t43;
    if ($[76] === Symbol.for("react.memo_cache_sentinel")) {
        t43 = {
            fill: "hsl(var(--muted-foreground))",
            fontSize: 11
        };
        $[76] = t43;
    } else {
        t43 = $[76];
    }
    let t44;
    if ($[77] !== t42 || $[78] !== yAxisConfig.domain || $[79] !== yAxisConfig.ticks) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
            axisLine: false,
            domain: yAxisConfig.domain,
            ticks: yAxisConfig.ticks,
            tickFormatter: t42,
            tickLine: false,
            tick: t43,
            width: 80
        }, void 0, false, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 694,
            columnNumber: 11
        }, this);
        $[77] = t42;
        $[78] = yAxisConfig.domain;
        $[79] = yAxisConfig.ticks;
        $[80] = t44;
    } else {
        t44 = $[80];
    }
    let t45;
    if ($[81] !== isPercent) {
        t45 = isPercent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferenceLine"], {
            y: 0,
            stroke: "hsl(var(--muted-foreground))",
            strokeDasharray: "5 5",
            opacity: 0.4,
            strokeWidth: 1.5
        }, void 0, false, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 704,
            columnNumber: 24
        }, this);
        $[81] = isPercent;
        $[82] = t45;
    } else {
        t45 = $[82];
    }
    let t46;
    if ($[83] !== hoveredLine || $[84] !== seriesMeta || $[85] !== valueMode) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomTooltip, {
            hoveredLine: hoveredLine,
            seriesMeta: seriesMeta,
            valueMode: valueMode
        }, void 0, false, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 712,
            columnNumber: 11
        }, this);
        $[83] = hoveredLine;
        $[84] = seriesMeta;
        $[85] = valueMode;
        $[86] = t46;
    } else {
        t46 = $[86];
    }
    let t47;
    if ($[87] !== t46 || $[88] !== tooltipCursor) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
            content: t46,
            cursor: tooltipCursor
        }, void 0, false, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 722,
            columnNumber: 11
        }, this);
        $[87] = t46;
        $[88] = tooltipCursor;
        $[89] = t47;
    } else {
        t47 = $[89];
    }
    let t48;
    if ($[90] !== chartConfig || $[91] !== chartData || $[92] !== hoveredLine || $[93] !== modelKeys || $[94] !== seriesMeta || $[95] !== setHoveredLine || $[96] !== valueMode) {
        t48 = modelKeys.map({
            "GlowingLineChart[modelKeys.map()]": (key_3)=>{
                const originalKey_1 = seriesMeta[key_3]?.originalKey ?? key_3;
                const modelInfo_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$modelConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getModelInfo"])(originalKey_1);
                const color_0 = modelInfo_0.color || chartConfig[key_3]?.color || "hsl(var(--chart-1))";
                const isHovered = hoveredLine === key_3;
                const isDimmed = Boolean(hoveredLine && hoveredLine !== key_3);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                    connectNulls: true,
                    dataKey: key_3,
                    type: "monotone",
                    stroke: color_0,
                    strokeWidth: isHovered ? 5 : 3,
                    strokeOpacity: isDimmed ? 0.15 : 0.9,
                    activeDot: false,
                    onMouseEnter: {
                        "GlowingLineChart[modelKeys.map() > <Line>.onMouseEnter]": ()=>setHoveredLine(key_3)
                    }["GlowingLineChart[modelKeys.map() > <Line>.onMouseEnter]"],
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    animationDuration: 300,
                    animationEasing: "ease-in-out",
                    filter: isHovered ? `drop-shadow(0 0 8px ${color_0})` : undefined,
                    dot: {
                        "GlowingLineChart[modelKeys.map() > <Line>.dot]": (dotProps)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomEndDot, {
                                ...dotProps,
                                hoveredLine: hoveredLine,
                                seriesMeta: seriesMeta,
                                valueMode: valueMode,
                                chartLength: chartData.length
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/glowing-line.tsx",
                                lineNumber: 741,
                                columnNumber: 73
                            }, void 0)
                    }["GlowingLineChart[modelKeys.map() > <Line>.dot]"]
                }, key_3, false, {
                    fileName: "[project]/src/components/ui/glowing-line.tsx",
                    lineNumber: 738,
                    columnNumber: 16
                }, this);
            }
        }["GlowingLineChart[modelKeys.map()]"]);
        $[90] = chartConfig;
        $[91] = chartData;
        $[92] = hoveredLine;
        $[93] = modelKeys;
        $[94] = seriesMeta;
        $[95] = setHoveredLine;
        $[96] = valueMode;
        $[97] = t48;
    } else {
        t48 = $[97];
    }
    let t49;
    if ($[98] !== chartData || $[99] !== t36 || $[100] !== t38 || $[101] !== t40 || $[102] !== t44 || $[103] !== t45 || $[104] !== t47 || $[105] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChart"], {
            accessibilityLayer: true,
            data: chartData,
            margin: t35,
            onMouseLeave: t36,
            style: t37,
            children: [
                t38,
                t39,
                t40,
                t41,
                t44,
                t45,
                t47,
                t48
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 758,
            columnNumber: 11
        }, this);
        $[98] = chartData;
        $[99] = t36;
        $[100] = t38;
        $[101] = t40;
        $[102] = t44;
        $[103] = t45;
        $[104] = t47;
        $[105] = t48;
        $[106] = t49;
    } else {
        t49 = $[106];
    }
    let t50;
    if ($[107] !== chartConfig || $[108] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 px-6 pb-0 pt-4 min-h-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                config: chartConfig,
                className: "h-full w-full",
                children: t49
            }, void 0, false, {
                fileName: "[project]/src/components/ui/glowing-line.tsx",
                lineNumber: 773,
                columnNumber: 58
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 773,
            columnNumber: 11
        }, this);
        $[107] = chartConfig;
        $[108] = t49;
        $[109] = t50;
    } else {
        t50 = $[109];
    }
    let t51;
    if ($[110] !== t34 || $[111] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full flex-col",
            children: [
                t34,
                t50
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/glowing-line.tsx",
            lineNumber: 782,
            columnNumber: 11
        }, this);
        $[110] = t34;
        $[111] = t50;
        $[112] = t51;
    } else {
        t51 = $[112];
    }
    return t51;
}
_s(GlowingLineChart, "7QfIvdldA9buu6nRBygZnnCAUO4=");
_c2 = GlowingLineChart;
function _GlowingLineChartUseEffectUniqueLogosForEach(url) {
    const img = new window.Image();
    img.src = url;
}
function _GlowingLineChartUseEffectAnonymous(logo) {
    return typeof logo === "string" && logo.length > 0;
}
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "CustomEndDot");
__turbopack_context__.k.register(_c1, "CustomTooltip");
__turbopack_context__.k.register(_c2, "GlowingLineChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/formatters.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/formatters.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ModelLegend(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "7c6c9b3bae2fd4d06aac7d7bce789bfddd8afeabdb464b77e989a7ca8573788a") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7c6c9b3bae2fd4d06aac7d7bce789bfddd8afeabdb464b77e989a7ca8573788a";
    }
    const { chartData, chartConfig, seriesMeta, valueMode: t1, hoveredLine, onHoverLine } = t0;
    const valueMode = t1 === undefined ? "usd" : t1;
    const [imagesLoaded, setImagesLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t2;
    if ($[1] !== chartConfig) {
        t2 = Object.keys(chartConfig);
        $[1] = chartConfig;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] !== seriesMeta || $[4] !== t2) {
        t3 = t2.filter({
            "ModelLegend[(anonymous)()]": (key)=>Boolean(seriesMeta[key])
        }["ModelLegend[(anonymous)()]"]);
        $[3] = seriesMeta;
        $[4] = t2;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const modelKeys = t3;
    const lastPoint = chartData.at(-1) ?? {
        month: ""
    };
    const isPercent = valueMode === "percent";
    let t4;
    let t5;
    if ($[6] !== modelKeys || $[7] !== seriesMeta) {
        t4 = ({
            "ModelLegend[useEffect()]": ()=>{
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                const modelLogos = modelKeys.map({
                    "ModelLegend[useEffect() > modelKeys.map()]": (key_0)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$modelConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getModelInfo"])(seriesMeta[key_0]?.originalKey ?? key_0).logo
                }["ModelLegend[useEffect() > modelKeys.map()]"]).filter(_ModelLegendUseEffectAnonymous);
                if (modelLogos.length === 0) {
                    setImagesLoaded(true);
                    return;
                }
                setImagesLoaded(false);
                const uniqueLogos = Array.from(new Set(modelLogos));
                let cancelled = false;
                const imagePromises = uniqueLogos.map(_ModelLegendUseEffectUniqueLogosMap);
                Promise.allSettled(imagePromises).finally({
                    "ModelLegend[useEffect() > (anonymous)()]": ()=>{
                        if (!cancelled) {
                            setImagesLoaded(true);
                        }
                    }
                }["ModelLegend[useEffect() > (anonymous)()]"]);
                return ()=>{
                    cancelled = true;
                };
            }
        })["ModelLegend[useEffect()]"];
        t5 = [
            modelKeys,
            seriesMeta
        ];
        $[6] = modelKeys;
        $[7] = seriesMeta;
        $[8] = t4;
        $[9] = t5;
    } else {
        t4 = $[8];
        t5 = $[9];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    if ($[10] !== isPercent) {
        t6 = ({
            "ModelLegend[formatValue]": (v)=>{
                if (typeof v !== "number") {
                    return "";
                }
                if (isPercent) {
                    return `${Math.round(v)}%`;
                }
                const currencyLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrencyValue"])(v);
                return currencyLabel === "N/A" ? "" : currencyLabel;
            }
        })["ModelLegend[formatValue]"];
        $[10] = isPercent;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    const formatValue = t6;
    const sortedModelKeys = [
        ...modelKeys
    ].sort({
        "ModelLegend[(anonymous)()]": (a, b)=>{
            const aValue = typeof lastPoint[a] === "number" ? lastPoint[a] : 0;
            const bValue = typeof lastPoint[b] === "number" ? lastPoint[b] : 0;
            return bValue - aValue;
        }
    }["ModelLegend[(anonymous)()]"]);
    const t7 = "border-t px-6 py-4";
    const t8 = "grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6";
    const t9 = sortedModelKeys.map({
        "ModelLegend[sortedModelKeys.map()]": (key_1)=>{
            const originalKey = seriesMeta[key_1]?.originalKey ?? key_1;
            const modelInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$modelConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getModelInfo"])(originalKey);
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
                                    lineNumber: 164,
                                    columnNumber: 14
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/model-legend.tsx",
                                lineNumber: 154,
                                columnNumber: 22
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": true,
                                className: "h-3 w-3 rounded-full",
                                style: {
                                    backgroundColor: color
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/model-legend.tsx",
                                lineNumber: 167,
                                columnNumber: 46
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium",
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/src/components/model-legend.tsx",
                                lineNumber: 169,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/model-legend.tsx",
                        lineNumber: 152,
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
                        lineNumber: 169,
                        columnNumber: 67
                    }, this)
                ]
            }, key_1, true, {
                fileName: "[project]/src/components/model-legend.tsx",
                lineNumber: 144,
                columnNumber: 14
            }, this);
        }
    }["ModelLegend[sortedModelKeys.map()]"]);
    let t10;
    if ($[12] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t7,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: t8,
                children: t9
            }, void 0, false, {
                fileName: "[project]/src/components/model-legend.tsx",
                lineNumber: 176,
                columnNumber: 31
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/model-legend.tsx",
            lineNumber: 176,
            columnNumber: 11
        }, this);
        $[12] = t9;
        $[13] = t10;
    } else {
        t10 = $[13];
    }
    return t10;
}
_s(ModelLegend, "R1Mhmy6G89sq6JGrh81hp9eL9aA=");
_c = ModelLegend;
function _ModelLegendUseEffectUniqueLogosMap(url) {
    return new Promise((resolve, reject)=>{
        const img = new window.Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = url;
    });
}
function _ModelLegendUseEffectAnonymous(logo) {
    return typeof logo === "string" && logo.length > 0;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$glowing$2d$line$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/glowing-line.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$model$2d$legend$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/model-legend.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$modelConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/modelConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePollingFetch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/usePollingFetch.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.tsx [app-client] (ecmascript)");
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
function PerformanceGraph() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(34);
    if ($[0] !== "7ce3e6041845c40217420960aa84074cb8dd9e32163000eb41f1b961e1e17634") {
        for(let $i = 0; $i < 34; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7ce3e6041845c40217420960aa84074cb8dd9e32163000eb41f1b961e1e17634";
    }
    const [valueMode, setValueMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("usd");
    const [timeFilter, setTimeFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [hoveredLine, setHoveredLine] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            interval: 180000,
            selector: selectPortfolioEntries
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const { data: portfolioData, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePollingFetch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePollingFetch"])("/api/portfolio-history", t0);
    let t1;
    bb0: {
        if (!Array.isArray(portfolioData) || portfolioData.length === 0) {
            let t2;
            let t3;
            if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
                t2 = [];
                t3 = {};
                $[2] = t2;
                $[3] = t3;
            } else {
                t2 = $[2];
                t3 = $[3];
            }
            let t4;
            if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
                t4 = {};
                $[4] = t4;
            } else {
                t4 = $[4];
            }
            let t5;
            if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
                t5 = {
                    chartData: t2,
                    chartConfig: t3,
                    seriesMeta: t4
                };
                $[5] = t5;
            } else {
                t5 = $[5];
            }
            t1 = t5;
            break bb0;
        }
        let t2;
        if ($[6] !== portfolioData) {
            t2 = buildChartArtifacts(portfolioData);
            $[6] = portfolioData;
            $[7] = t2;
        } else {
            t2 = $[7];
        }
        t1 = t2;
    }
    const { chartData, chartConfig, seriesMeta } = t1;
    let t2;
    if ($[8] !== chartData || $[9] !== timeFilter) {
        t2 = filterByTime(chartData, timeFilter);
        $[8] = chartData;
        $[9] = timeFilter;
        $[10] = t2;
    } else {
        t2 = $[10];
    }
    const filteredData = t2;
    let t3;
    if ($[11] !== chartConfig || $[12] !== filteredData || $[13] !== valueMode) {
        t3 = valueMode === "usd" ? filteredData : toPercentData(filteredData, Object.keys(chartConfig));
        $[11] = chartConfig;
        $[12] = filteredData;
        $[13] = valueMode;
        $[14] = t3;
    } else {
        t3 = $[14];
    }
    const displayData = t3;
    if (loading) {
        let t4;
        if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-h-0 px-6 py-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                    className: "h-full w-full rounded-xl"
                }, void 0, false, {
                    fileName: "[project]/src/components/performance-graph.tsx",
                    lineNumber: 129,
                    columnNumber: 54
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/performance-graph.tsx",
                lineNumber: 129,
                columnNumber: 12
            }, this);
            $[15] = t4;
        } else {
            t4 = $[15];
        }
        let t5;
        if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-full flex flex-col overflow-hidden",
                children: [
                    t4,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-shrink-0 border-t px-6 py-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6",
                            children: Array.from({
                                length: 6
                            }).map(_PerformanceGraphAnonymous)
                        }, void 0, false, {
                            fileName: "[project]/src/components/performance-graph.tsx",
                            lineNumber: 136,
                            columnNumber: 120
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/performance-graph.tsx",
                        lineNumber: 136,
                        columnNumber: 70
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/performance-graph.tsx",
                lineNumber: 136,
                columnNumber: 12
            }, this);
            $[16] = t5;
        } else {
            t5 = $[16];
        }
        return t5;
    }
    if (chartData.length === 0) {
        let t4;
        if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-64 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted-foreground",
                    children: "No data available yet..."
                }, void 0, false, {
                    fileName: "[project]/src/components/performance-graph.tsx",
                    lineNumber: 148,
                    columnNumber: 67
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/performance-graph.tsx",
                lineNumber: 148,
                columnNumber: 12
            }, this);
            $[17] = t4;
        } else {
            t4 = $[17];
        }
        return t4;
    }
    let t4;
    if ($[18] !== chartConfig || $[19] !== displayData || $[20] !== hoveredLine || $[21] !== seriesMeta || $[22] !== timeFilter || $[23] !== valueMode) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 min-h-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$glowing$2d$line$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlowingLineChart"], {
                chartConfig: chartConfig,
                chartData: displayData,
                seriesMeta: seriesMeta,
                onValueModeChange: setValueMode,
                valueMode: valueMode,
                timeFilter: timeFilter,
                onTimeFilterChange: setTimeFilter,
                hoveredLine: hoveredLine,
                onHoverLine: setHoveredLine
            }, void 0, false, {
                fileName: "[project]/src/components/performance-graph.tsx",
                lineNumber: 157,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/performance-graph.tsx",
            lineNumber: 157,
            columnNumber: 10
        }, this);
        $[18] = chartConfig;
        $[19] = displayData;
        $[20] = hoveredLine;
        $[21] = seriesMeta;
        $[22] = timeFilter;
        $[23] = valueMode;
        $[24] = t4;
    } else {
        t4 = $[24];
    }
    let t5;
    if ($[25] !== chartConfig || $[26] !== displayData || $[27] !== hoveredLine || $[28] !== seriesMeta || $[29] !== valueMode) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-shrink-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$model$2d$legend$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                chartData: displayData,
                chartConfig: chartConfig,
                seriesMeta: seriesMeta,
                valueMode: valueMode,
                hoveredLine: hoveredLine,
                onHoverLine: setHoveredLine
            }, void 0, false, {
                fileName: "[project]/src/components/performance-graph.tsx",
                lineNumber: 170,
                columnNumber: 41
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/performance-graph.tsx",
            lineNumber: 170,
            columnNumber: 10
        }, this);
        $[25] = chartConfig;
        $[26] = displayData;
        $[27] = hoveredLine;
        $[28] = seriesMeta;
        $[29] = valueMode;
        $[30] = t5;
    } else {
        t5 = $[30];
    }
    let t6;
    if ($[31] !== t4 || $[32] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full flex flex-col overflow-hidden",
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/performance-graph.tsx",
            lineNumber: 182,
            columnNumber: 10
        }, this);
        $[31] = t4;
        $[32] = t5;
        $[33] = t6;
    } else {
        t6 = $[33];
    }
    return t6;
}
_s(PerformanceGraph, "3jTFv/DYCu+s/Sj8KHgmcrnbXEI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePollingFetch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePollingFetch"]
    ];
});
_c = PerformanceGraph;
function _PerformanceGraphAnonymous(_, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
        className: "h-12 w-full rounded-md"
    }, index, false, {
        fileName: "[project]/src/components/performance-graph.tsx",
        lineNumber: 192,
        columnNumber: 10
    }, this);
}
function selectPortfolioEntries(payload) {
    if (!Array.isArray(payload)) return [];
    return payload.filter((item)=>{
        return typeof item?.createdAt === "string" && typeof item?.netPortfolio === "string";
    });
}
function buildChartArtifacts(portfolioData) {
    const points = portfolioData.map((item)=>({
            t: new Date(item.createdAt).getTime(),
            name: item.model.name,
            v: Number(item.netPortfolio)
        })).filter((p)=>Number.isFinite(p.v)).sort((a, b)=>a.t - b.t);
    if (points.length === 0) {
        return {
            chartData: [],
            chartConfig: {},
            seriesMeta: {}
        };
    }
    const modelNames = Array.from(new Set(points.map((p)=>p.name))).filter(Boolean);
    const tolerance = calculateBucketTolerance(points.map((p)=>p.t));
    const usedKeys = new Set();
    const nameToSeriesKey = new Map();
    const seriesMeta = {};
    for (const modelName of modelNames){
        const safeKey = createSeriesKey(modelName, usedKeys);
        nameToSeriesKey.set(modelName, safeKey);
        seriesMeta[safeKey] = {
            originalKey: modelName
        };
    }
    const rows = [];
    let bucketStart = points[0].t;
    let bucketEnd = points[0].t;
    let bucketRows = {};
    const lastKnown = {};
    const flush = ()=>{
        if (!Object.keys(bucketRows).length) {
            return;
        }
        const center = Math.round((bucketStart + bucketEnd) / 2);
        const timestamp = new Date(center).toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit"
        });
        const row = {
            month: timestamp,
            timestamp: center
        };
        for (const [originalName, safeKey] of nameToSeriesKey.entries()){
            const value = bucketRows[safeKey];
            if (typeof value === "number" && Number.isFinite(value)) {
                row[safeKey] = value;
                lastKnown[safeKey] = value;
            } else if (typeof lastKnown[safeKey] === "number") {
                row[safeKey] = lastKnown[safeKey];
            } else {
                row[safeKey] = null;
            }
        }
        rows.push(row);
        bucketRows = {};
    };
    for (const point of points){
        if (point.t - bucketEnd > tolerance) {
            flush();
            bucketStart = point.t;
            bucketEnd = point.t;
        }
        bucketEnd = Math.max(bucketEnd, point.t);
        const safeKey = nameToSeriesKey.get(point.name);
        if (!safeKey) continue;
        bucketRows[safeKey] = point.v;
    }
    flush();
    const chartConfig = {};
    for (const [originalName, safeKey] of nameToSeriesKey.entries()){
        const modelInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$modelConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getModelInfo"])(originalName);
        chartConfig[safeKey] = {
            label: modelInfo.label,
            color: modelInfo.color
        };
    }
    return {
        chartData: rows,
        chartConfig,
        seriesMeta
    };
}
function calculateBucketTolerance(timestamps) {
    if (timestamps.length < 2) {
        return 30_000;
    }
    const gaps = [];
    for(let i = 1; i < timestamps.length; i++){
        gaps.push(timestamps[i] - timestamps[i - 1]);
    }
    gaps.sort((a, b)=>a - b);
    const medianGap = gaps[Math.floor(gaps.length / 2)] || 60_000;
    return Math.min(30_000, Math.max(2_000, Math.floor(medianGap * 0.5)));
}
function filterByTime(data, filter) {
    if (filter !== "72h") return data;
    const cutoffTime = Date.now() - 72 * 60 * 60 * 1000;
    return data.filter((point)=>{
        if (typeof point.timestamp === "number") {
            return point.timestamp >= cutoffTime;
        }
        return true;
    });
}
function toPercentData(data, keys) {
    if (data.length === 0) return data;
    const baseMap = {};
    for (const key of keys){
        for (const row of data){
            const val = row[key];
            if (typeof val === "number" && Number.isFinite(val)) {
                baseMap[key] = val;
                break;
            }
        }
    }
    return data.map((row)=>{
        const next = {
            month: row.month
        };
        if (typeof row.timestamp === "number") {
            next.timestamp = row.timestamp;
        }
        for (const key of keys){
            const base = baseMap[key];
            const value = row[key];
            if (typeof value !== "number" || !Number.isFinite(value)) {
                next[key] = null;
                continue;
            }
            if (typeof base === "number" && Number.isFinite(base) && base !== 0) {
                next[key] = (value - base) / Math.abs(base) * 100;
            } else if (base === 0) {
                next[key] = value === 0 ? 0 : null;
            } else {
                next[key] = null;
            }
        }
        return next;
    });
}
function createSeriesKey(modelName, used) {
    const base = modelName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").trim();
    const initial = base || "series";
    let candidate = initial;
    let index = 1;
    while(used.has(candidate)){
        candidate = `${initial}-${index}`;
        index += 1;
    }
    used.add(candidate);
    return candidate;
}
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
"[project]/src/components/trades-sidebar/exit-plan-dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExitPlanDialog",
    ()=>ExitPlanDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/formatters.ts [app-client] (ecmascript)");
;
;
;
;
;
function ExitPlanDialog(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "c37c0e8c8df3ab7c6fc14d3449ad52f55be85b8bc68adc9cdb84f838661395c2") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c37c0e8c8df3ab7c6fc14d3449ad52f55be85b8bc68adc9cdb84f838661395c2";
    }
    const { selection, onClose } = t0;
    const t1 = Boolean(selection);
    let t2;
    if ($[1] !== onClose) {
        t2 = ({
            "ExitPlanDialog[<Dialog>.onOpenChange]": (open)=>!open && onClose()
        })["ExitPlanDialog[<Dialog>.onOpenChange]"];
        $[1] = onClose;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] !== selection) {
        t3 = selection ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            className: "flex items-center justify-between gap-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    selection.position.symbol,
                                    " Exit Plan"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/trades-sidebar/exit-plan-dialog.tsx",
                                lineNumber: 35,
                                columnNumber: 137
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/trades-sidebar/exit-plan-dialog.tsx",
                            lineNumber: 35,
                            columnNumber: 72
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                            children: [
                                selection.modelLabel,
                                " · ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    variant: "outline",
                                    className: `font-semibold ${selection.position.signal === "HOLD" ? "border-muted text-foreground" : selection.position.signal === "LONG" ? "border-green-500/20 bg-green-500/10 text-green-500" : "border-red-500/20 bg-red-500/10 text-red-500"}`,
                                    children: selection.position.signal ?? selection.position.sign
                                }, void 0, false, {
                                    fileName: "[project]/src/components/trades-sidebar/exit-plan-dialog.tsx",
                                    lineNumber: 35,
                                    columnNumber: 245
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/trades-sidebar/exit-plan-dialog.tsx",
                            lineNumber: 35,
                            columnNumber: 201
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/trades-sidebar/exit-plan-dialog.tsx",
                    lineNumber: 35,
                    columnNumber: 58
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between rounded-lg px-3 py-2",
                            style: {
                                backgroundColor: `${selection.modelColor}14`,
                                border: `1px solid ${selection.modelColor}33`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
                                    children: "Confidence"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/trades-sidebar/exit-plan-dialog.tsx",
                                    lineNumber: 38,
                                    columnNumber: 12
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-semibold tabular-nums",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatConfidenceValue"])(selection.position.confidence)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/trades-sidebar/exit-plan-dialog.tsx",
                                    lineNumber: 38,
                                    columnNumber: 115
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/trades-sidebar/exit-plan-dialog.tsx",
                            lineNumber: 35,
                            columnNumber: 638
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
                                            fileName: "[project]/src/components/trades-sidebar/exit-plan-dialog.tsx",
                                            lineNumber: 38,
                                            columnNumber: 321
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold tabular-nums",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPriceLabel"])(selection.position.exitPlan?.target)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/trades-sidebar/exit-plan-dialog.tsx",
                                            lineNumber: 38,
                                            columnNumber: 398
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/trades-sidebar/exit-plan-dialog.tsx",
                                    lineNumber: 38,
                                    columnNumber: 270
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-muted-foreground uppercase tracking-wide",
                                            children: "Stop"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/trades-sidebar/exit-plan-dialog.tsx",
                                            lineNumber: 38,
                                            columnNumber: 562
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold tabular-nums",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPriceLabel"])(selection.position.exitPlan?.stop)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/trades-sidebar/exit-plan-dialog.tsx",
                                            lineNumber: 38,
                                            columnNumber: 637
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/trades-sidebar/exit-plan-dialog.tsx",
                                    lineNumber: 38,
                                    columnNumber: 511
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-muted-foreground uppercase tracking-wide",
                                            children: "Invalid Condition"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/trades-sidebar/exit-plan-dialog.tsx",
                                            lineNumber: 38,
                                            columnNumber: 775
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "rounded-md bg-muted/30 p-2 text-sm leading-relaxed",
                                            children: selection.position.exitPlan?.invalidation ?? "\u2014"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/trades-sidebar/exit-plan-dialog.tsx",
                                            lineNumber: 38,
                                            columnNumber: 863
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/trades-sidebar/exit-plan-dialog.tsx",
                                    lineNumber: 38,
                                    columnNumber: 748
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/trades-sidebar/exit-plan-dialog.tsx",
                            lineNumber: 38,
                            columnNumber: 235
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/trades-sidebar/exit-plan-dialog.tsx",
                    lineNumber: 35,
                    columnNumber: 611
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/trades-sidebar/exit-plan-dialog.tsx",
            lineNumber: 35,
            columnNumber: 22
        }, this) : null;
        $[3] = selection;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== t1 || $[6] !== t2 || $[7] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
            open: t1,
            onOpenChange: t2,
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/components/trades-sidebar/exit-plan-dialog.tsx",
            lineNumber: 46,
            columnNumber: 10
        }, this);
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    return t4;
}
_c = ExitPlanDialog;
var _c;
__turbopack_context__.k.register(_c, "ExitPlanDialog");
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
"[project]/src/components/trades-sidebar/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "computeHoldingLabel",
    ()=>computeHoldingLabel,
    "extractMarkdownPreview",
    ()=>extractMarkdownPreview,
    "extractTradingDecisions",
    ()=>extractTradingDecisions,
    "formatDecisionDetails",
    ()=>formatDecisionDetails,
    "formatTimestamp",
    ()=>formatTimestamp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/formatters.ts [app-client] (ecmascript)");
;
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
        const isCloseCall = tc.type === "CLOSE_POSITION";
        results.forEach((result)=>{
            if (typeof result?.symbol === "string") {
                resultLookup.set(result.symbol.toUpperCase(), result);
            }
        });
        decisionList.forEach((decision, idx)=>{
            if (!decision || typeof decision.symbol !== "string") return;
            const symbol = decision.symbol.toUpperCase();
            const normalizedSignal = decision.signal === "LONG" || decision.signal === "SHORT" || decision.signal === "HOLD" ? decision.signal : "HOLD";
            const baseResult = resultLookup.get(symbol) ?? null;
            let effectiveResult = baseResult;
            if (isCloseCall) {
                if (effectiveResult) {
                    if (effectiveResult.success === false && !effectiveResult.error) {
                        effectiveResult = {
                            ...effectiveResult,
                            success: true
                        };
                    }
                } else {
                    effectiveResult = {
                        symbol,
                        success: true
                    };
                }
            }
            const status = decision.status ?? (isCloseCall ? effectiveResult?.success === false && effectiveResult.error ? "FAILED" : "CLOSED" : effectiveResult?.success === true ? "EXECUTED" : effectiveResult?.success === false ? "REJECTED" : null);
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
                result: effectiveResult ?? null,
                timestamp: tc.timestamp
            });
        });
    });
    return decisions;
};
const formatDecisionDetails = (decision)=>({
        confidenceLabel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatConfidenceValue"])(decision.confidence),
        quantityLabel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatQuantityValue"])(decision.quantity),
        leverageLabel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatLeverageValue"])(decision.leverage),
        targetLabel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPriceLabel"])(decision.profitTarget),
        stopLabel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPriceLabel"])(decision.stopLoss)
    });
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/trades-sidebar/loading-skeletons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModelChatSkeleton",
    ()=>ModelChatSkeleton,
    "PositionsListSkeleton",
    ()=>PositionsListSkeleton,
    "TradesListSkeleton",
    ()=>TradesListSkeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.tsx [app-client] (ecmascript)");
;
;
;
function TradesListSkeleton(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "516cda24fd0fc1ead939edefce262e8f1857601cedc44dd89d412acc3370be8b") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "516cda24fd0fc1ead939edefce262e8f1857601cedc44dd89d412acc3370be8b";
    }
    const { count: t1 } = t0;
    const count = t1 === undefined ? 3 : t1;
    let t2;
    if ($[1] !== count) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4 p-4",
            children: Array.from({
                length: count
            }).map(_TradesListSkeletonAnonymous)
        }, void 0, false, {
            fileName: "[project]/src/components/trades-sidebar/loading-skeletons.tsx",
            lineNumber: 17,
            columnNumber: 10
        }, this);
        $[1] = count;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    return t2;
}
_c = TradesListSkeleton;
function _TradesListSkeletonAnonymous(_, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-md border border-border/60 bg-muted/20 p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                className: "h-6 w-6 rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/src/components/trades-sidebar/loading-skeletons.tsx",
                                lineNumber: 28,
                                columnNumber: 187
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                className: "h-4 w-24"
                            }, void 0, false, {
                                fileName: "[project]/src/components/trades-sidebar/loading-skeletons.tsx",
                                lineNumber: 28,
                                columnNumber: 232
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/trades-sidebar/loading-skeletons.tsx",
                        lineNumber: 28,
                        columnNumber: 146
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-3 w-16"
                    }, void 0, false, {
                        fileName: "[project]/src/components/trades-sidebar/loading-skeletons.tsx",
                        lineNumber: 28,
                        columnNumber: 271
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/trades-sidebar/loading-skeletons.tsx",
                lineNumber: 28,
                columnNumber: 90
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 flex flex-wrap items-center gap-2 text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-4 w-20"
                    }, void 0, false, {
                        fileName: "[project]/src/components/trades-sidebar/loading-skeletons.tsx",
                        lineNumber: 28,
                        columnNumber: 374
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-5 w-14 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/trades-sidebar/loading-skeletons.tsx",
                        lineNumber: 28,
                        columnNumber: 407
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-4 w-12"
                    }, void 0, false, {
                        fileName: "[project]/src/components/trades-sidebar/loading-skeletons.tsx",
                        lineNumber: 28,
                        columnNumber: 453
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-5 w-16 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/trades-sidebar/loading-skeletons.tsx",
                        lineNumber: 28,
                        columnNumber: 486
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/trades-sidebar/loading-skeletons.tsx",
                lineNumber: 28,
                columnNumber: 310
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-3 w-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/trades-sidebar/loading-skeletons.tsx",
                        lineNumber: 28,
                        columnNumber: 565
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-3 w-3/4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/trades-sidebar/loading-skeletons.tsx",
                        lineNumber: 28,
                        columnNumber: 600
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-3 w-5/6"
                    }, void 0, false, {
                        fileName: "[project]/src/components/trades-sidebar/loading-skeletons.tsx",
                        lineNumber: 28,
                        columnNumber: 634
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/trades-sidebar/loading-skeletons.tsx",
                lineNumber: 28,
                columnNumber: 538
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-3 w-16"
                    }, void 0, false, {
                        fileName: "[project]/src/components/trades-sidebar/loading-skeletons.tsx",
                        lineNumber: 28,
                        columnNumber: 730
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-6 w-24"
                    }, void 0, false, {
                        fileName: "[project]/src/components/trades-sidebar/loading-skeletons.tsx",
                        lineNumber: 28,
                        columnNumber: 763
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/trades-sidebar/loading-skeletons.tsx",
                lineNumber: 28,
                columnNumber: 674
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/src/components/trades-sidebar/loading-skeletons.tsx",
        lineNumber: 28,
        columnNumber: 10
    }, this);
}
function ModelChatSkeleton(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "516cda24fd0fc1ead939edefce262e8f1857601cedc44dd89d412acc3370be8b") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "516cda24fd0fc1ead939edefce262e8f1857601cedc44dd89d412acc3370be8b";
    }
    const { count: t1 } = t0;
    const count = t1 === undefined ? 3 : t1;
    let t2;
    if ($[1] !== count) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4 p-4",
            children: Array.from({
                length: count
            }).map(_ModelChatSkeletonAnonymous)
        }, void 0, false, {
            fileName: "[project]/src/components/trades-sidebar/loading-skeletons.tsx",
            lineNumber: 44,
            columnNumber: 10
        }, this);
        $[1] = count;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    return t2;
}
_c1 = ModelChatSkeleton;
function _ModelChatSkeletonAnonymous(_, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-md border border-border/60 bg-muted/15 p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                className: "h-6 w-6 rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/src/components/trades-sidebar/loading-skeletons.tsx",
                                lineNumber: 55,
                                columnNumber: 187
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                className: "h-4 w-28"
                            }, void 0, false, {
                                fileName: "[project]/src/components/trades-sidebar/loading-skeletons.tsx",
                                lineNumber: 55,
                                columnNumber: 232
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/trades-sidebar/loading-skeletons.tsx",
                        lineNumber: 55,
                        columnNumber: 146
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-3 w-20"
                    }, void 0, false, {
                        fileName: "[project]/src/components/trades-sidebar/loading-skeletons.tsx",
                        lineNumber: 55,
                        columnNumber: 271
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/trades-sidebar/loading-skeletons.tsx",
                lineNumber: 55,
                columnNumber: 90
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                className: "h-12 w-full rounded-md"
            }, void 0, false, {
                fileName: "[project]/src/components/trades-sidebar/loading-skeletons.tsx",
                lineNumber: 55,
                columnNumber: 310
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-3 w-1/2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/trades-sidebar/loading-skeletons.tsx",
                        lineNumber: 55,
                        columnNumber: 389
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-3 w-2/3"
                    }, void 0, false, {
                        fileName: "[project]/src/components/trades-sidebar/loading-skeletons.tsx",
                        lineNumber: 55,
                        columnNumber: 423
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-3 w-1/3"
                    }, void 0, false, {
                        fileName: "[project]/src/components/trades-sidebar/loading-skeletons.tsx",
                        lineNumber: 55,
                        columnNumber: 457
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/trades-sidebar/loading-skeletons.tsx",
                lineNumber: 55,
                columnNumber: 357
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/src/components/trades-sidebar/loading-skeletons.tsx",
        lineNumber: 55,
        columnNumber: 10
    }, this);
}
function PositionsListSkeleton(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "516cda24fd0fc1ead939edefce262e8f1857601cedc44dd89d412acc3370be8b") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "516cda24fd0fc1ead939edefce262e8f1857601cedc44dd89d412acc3370be8b";
    }
    const { groups: t1, rows: t2 } = t0;
    const groups = t1 === undefined ? 2 : t1;
    const rows = t2 === undefined ? 3 : t2;
    let t3;
    if ($[1] !== groups) {
        t3 = Array.from({
            length: groups
        });
        $[1] = groups;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    let t4;
    if ($[3] !== rows || $[4] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4 p-4",
            children: t3.map({
                "PositionsListSkeleton[(anonymous)()]": (_, groupIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-md border border-border/60 bg-muted/15",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between border-b px-4 py-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                className: "h-6 w-6 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/trades-sidebar/loading-skeletons.tsx",
                                                lineNumber: 84,
                                                columnNumber: 256
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                className: "h-4 w-24"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/trades-sidebar/loading-skeletons.tsx",
                                                lineNumber: 84,
                                                columnNumber: 301
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/trades-sidebar/loading-skeletons.tsx",
                                        lineNumber: 84,
                                        columnNumber: 215
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                        className: "h-4 w-24"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/trades-sidebar/loading-skeletons.tsx",
                                        lineNumber: 84,
                                        columnNumber: 340
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/trades-sidebar/loading-skeletons.tsx",
                                lineNumber: 84,
                                columnNumber: 145
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-6 gap-x-2 border-b bg-muted/30 px-4 py-2",
                                children: Array.from({
                                    length: 6
                                }).map(_PositionsListSkeletonAnonymousAnonymous)
                            }, void 0, false, {
                                fileName: "[project]/src/components/trades-sidebar/loading-skeletons.tsx",
                                lineNumber: 84,
                                columnNumber: 379
                            }, this),
                            Array.from({
                                length: rows
                            }).map(_PositionsListSkeletonAnonymousAnonymous2),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t px-4 py-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-4 w-32"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/trades-sidebar/loading-skeletons.tsx",
                                    lineNumber: 88,
                                    columnNumber: 97
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/trades-sidebar/loading-skeletons.tsx",
                                lineNumber: 88,
                                columnNumber: 61
                            }, this)
                        ]
                    }, groupIdx, true, {
                        fileName: "[project]/src/components/trades-sidebar/loading-skeletons.tsx",
                        lineNumber: 84,
                        columnNumber: 66
                    }, this)
            }["PositionsListSkeleton[(anonymous)()]"])
        }, void 0, false, {
            fileName: "[project]/src/components/trades-sidebar/loading-skeletons.tsx",
            lineNumber: 83,
            columnNumber: 10
        }, this);
        $[3] = rows;
        $[4] = t3;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    return t4;
}
_c2 = PositionsListSkeleton;
function _PositionsListSkeletonAnonymousAnonymous2(___0, rowIdx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-6 gap-x-2 px-4 py-3 text-xs",
        children: Array.from({
            length: 6
        }).map(_PositionsListSkeletonAnonymousAnonymousAnonymous)
    }, rowIdx, false, {
        fileName: "[project]/src/components/trades-sidebar/loading-skeletons.tsx",
        lineNumber: 99,
        columnNumber: 10
    }, this);
}
function _PositionsListSkeletonAnonymousAnonymousAnonymous(___, cellIdx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
        className: "h-4 w-full"
    }, cellIdx, false, {
        fileName: "[project]/src/components/trades-sidebar/loading-skeletons.tsx",
        lineNumber: 104,
        columnNumber: 10
    }, this);
}
function _PositionsListSkeletonAnonymousAnonymous(__, idx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
        className: "h-3 w-full"
    }, idx, false, {
        fileName: "[project]/src/components/trades-sidebar/loading-skeletons.tsx",
        lineNumber: 107,
        columnNumber: 10
    }, this);
}
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "TradesListSkeleton");
__turbopack_context__.k.register(_c1, "ModelChatSkeleton");
__turbopack_context__.k.register(_c2, "PositionsListSkeleton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/trades-sidebar/model-chat-tab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModelChatTab",
    ()=>ModelChatTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/react-markdown/lib/index.js [app-client] (ecmascript) <export Markdown as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remark-gfm/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rehype$2d$raw$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/rehype-raw/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/scroll-area.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$modelConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/modelConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trades$2d$sidebar$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/trades-sidebar/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trades$2d$sidebar$2f$loading$2d$skeletons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/trades-sidebar/loading-skeletons.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
function ModelChatTab(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "95d573a3f3666536d44407591ccef3572679e74332f8cfdfcf0a078d1d1364f4") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "95d573a3f3666536d44407591ccef3572679e74332f8cfdfcf0a078d1d1364f4";
    }
    const { conversations, loading, filterMenu } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = new Set();
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [expandedResponses, setExpandedResponses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {};
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const [activeConversationPanels, setActiveConversationPanels] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "ModelChatTab[toggleResponseExpansion]": (conversationId)=>{
                setExpandedResponses({
                    "ModelChatTab[toggleResponseExpansion > setExpandedResponses()]": (prev)=>{
                        const next = new Set(prev);
                        if (next.has(conversationId)) {
                            next.delete(conversationId);
                            setActiveConversationPanels({
                                "ModelChatTab[toggleResponseExpansion > setExpandedResponses() > setActiveConversationPanels()]": (panels)=>{
                                    const updated = {
                                        ...panels
                                    };
                                    delete updated[conversationId];
                                    return updated;
                                }
                            }["ModelChatTab[toggleResponseExpansion > setExpandedResponses() > setActiveConversationPanels()]"]);
                        } else {
                            next.add(conversationId);
                            setActiveConversationPanels({
                                "ModelChatTab[toggleResponseExpansion > setExpandedResponses() > setActiveConversationPanels()]": (panels_0)=>({
                                        ...panels_0,
                                        [conversationId]: panels_0[conversationId] ?? "response"
                                    })
                            }["ModelChatTab[toggleResponseExpansion > setExpandedResponses() > setActiveConversationPanels()]"]);
                        }
                        return next;
                    }
                }["ModelChatTab[toggleResponseExpansion > setExpandedResponses()]"]);
            }
        })["ModelChatTab[toggleResponseExpansion]"];
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const toggleResponseExpansion = t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "ModelChatTab[setConversationPanel]": (conversationId_0, panel)=>{
                setExpandedResponses({
                    "ModelChatTab[setConversationPanel > setExpandedResponses()]": (prev_0)=>{
                        if (prev_0.has(conversationId_0)) {
                            return prev_0;
                        }
                        const next_0 = new Set(prev_0);
                        next_0.add(conversationId_0);
                        return next_0;
                    }
                }["ModelChatTab[setConversationPanel > setExpandedResponses()]"]);
                setActiveConversationPanels({
                    "ModelChatTab[setConversationPanel > setActiveConversationPanels()]": (panels_1)=>({
                            ...panels_1,
                            [conversationId_0]: panel
                        })
                }["ModelChatTab[setConversationPanel > setActiveConversationPanels()]"]);
            }
        })["ModelChatTab[setConversationPanel]"];
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    const setConversationPanel = t4;
    let t5;
    if ($[5] !== activeConversationPanels || $[6] !== conversations || $[7] !== expandedResponses || $[8] !== loading) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
            className: "flex-1 overflow-auto",
            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trades$2d$sidebar$2f$loading$2d$skeletons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModelChatSkeleton"], {}, void 0, false, {
                fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
                lineNumber: 114,
                columnNumber: 66
            }, this) : conversations.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center p-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center text-muted-foreground",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-2 font-medium text-sm",
                            children: "ModelChat"
                        }, void 0, false, {
                            fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
                            lineNumber: 114,
                            columnNumber: 224
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs",
                            children: "No conversations yet. Models will appear here after making trading decisions."
                        }, void 0, false, {
                            fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
                            lineNumber: 114,
                            columnNumber: 277
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
                    lineNumber: 114,
                    columnNumber: 173
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
                lineNumber: 114,
                columnNumber: 119
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: conversations.map({
                    "ModelChatTab[conversations.map()]": (conv, idx)=>{
                        const modelKey = conv.modelLogo || conv.modelName;
                        const modelInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$modelConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getModelInfo"])(modelKey || conv.modelName);
                        const modelColor = modelInfo.color || "#888888";
                        const modelLabel = modelInfo.logo ? modelInfo.label : conv.modelName || modelKey || "Unknown Model";
                        const isExpanded = expandedResponses.has(conv.id);
                        const previewText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trades$2d$sidebar$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractMarkdownPreview"])(conv.response);
                        const tradingDecisions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trades$2d$sidebar$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractTradingDecisions"])(conv.toolCalls);
                        const activePanel = activeConversationPanels[conv.id] ?? "response";
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
                                                                alt: modelLabel,
                                                                src: modelInfo.logo,
                                                                width: 18,
                                                                height: 18,
                                                                style: {
                                                                    objectFit: "contain"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
                                                                lineNumber: 135,
                                                                columnNumber: 42
                                                            }, this) : null
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
                                                            lineNumber: 126,
                                                            columnNumber: 115
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-semibold",
                                                            children: modelLabel
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
                                                            lineNumber: 137,
                                                            columnNumber: 42
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 74
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trades$2d$sidebar$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTimestamp"])(conv.timestamp)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 107
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
                                            lineNumber: 126,
                                            columnNumber: 18
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: {
                                                "ModelChatTab[conversations.map() > <button>.onClick]": ()=>toggleResponseExpansion(conv.id)
                                            }["ModelChatTab[conversations.map() > <button>.onClick]"],
                                            className: "w-full text-left",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-lg border p-3 transition-colors",
                                                style: {
                                                    backgroundColor: `${modelColor}12`,
                                                    borderColor: `${modelColor}33`
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm leading-relaxed text-muted-foreground cursor-pointer",
                                                        children: previewText || "No response yet."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 22
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground",
                                                        children: isExpanded ? "Hide context" : "Click to expand"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 137
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
                                                lineNumber: 139,
                                                columnNumber: 105
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
                                            lineNumber: 137,
                                            columnNumber: 201
                                        }, this),
                                        isExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 rounded-lg border bg-background/70 p-1",
                                                    style: {
                                                        borderColor: `${modelColor}22`
                                                    },
                                                    children: [
                                                        "response",
                                                        "decisions"
                                                    ].map({
                                                        "ModelChatTab[conversations.map() > (anonymous)()]": (panel_0)=>{
                                                            const isActive = activePanel === panel_0;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: {
                                                                    "ModelChatTab[conversations.map() > (anonymous)() > <button>.onClick]": ()=>setConversationPanel(conv.id, panel_0)
                                                                }["ModelChatTab[conversations.map() > (anonymous)() > <button>.onClick]"],
                                                                className: `flex-1 cursor-pointer rounded-md px-3 py-1 text-xs font-semibold uppercase tracking-wide transition-colors ${isActive ? "bg-accent text-foreground" : "text-muted-foreground hover:bg-accent/40"}`,
                                                                children: panel_0 === "response" ? "Response" : "Trading Decisions"
                                                            }, panel_0, false, {
                                                                fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
                                                                lineNumber: 147,
                                                                columnNumber: 32
                                                            }, this);
                                                        }
                                                    }["ModelChatTab[conversations.map() > (anonymous)()]"])
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 343
                                                }, this),
                                                activePanel === "response" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-lg border bg-background/60 p-3",
                                                        style: {
                                                            borderColor: `${modelColor}33`
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
                                                                fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
                                                                lineNumber: 153,
                                                                columnNumber: 80
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
                                                            lineNumber: 153,
                                                            columnNumber: 24
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 122
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 113
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                    children: tradingDecisions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-lg border border-dashed bg-background/40 p-3 text-xs text-muted-foreground",
                                                        children: "No explicit trading decisions recorded for this invocation."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 266
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-3",
                                                        children: tradingDecisions.map({
                                                            "ModelChatTab[conversations.map() > tradingDecisions.map()]": (decision)=>{
                                                                const { confidenceLabel, quantityLabel, leverageLabel, targetLabel, stopLabel } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trades$2d$sidebar$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDecisionDetails"])(decision);
                                                                const isCloseCall = decision.toolCallType === "CLOSE_POSITION";
                                                                const signalLabel = isCloseCall ? `Close ${decision.signal}` : decision.signal;
                                                                const badgeVariant = decision.signal === "HOLD" ? "secondary" : "outline";
                                                                const badgeClass = (()=>{
                                                                    if (isCloseCall) {
                                                                        return "border-amber-500/30 bg-amber-500/12 text-amber-600";
                                                                    }
                                                                    if (decision.signal === "SHORT") {
                                                                        return "border-red-500/20 bg-red-500/10 text-red-500";
                                                                    }
                                                                    if (decision.signal === "LONG") {
                                                                        return "border-green-500/20 bg-green-500/10 text-green-500";
                                                                    }
                                                                    return "border-muted text-foreground";
                                                                })();
                                                                const statusLabel = decision.status ?? (decision.result?.success === true ? "EXECUTED" : decision.result?.success === false ? "REJECTED" : null);
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "rounded-xl border bg-background/60 p-3 shadow-sm",
                                                                    style: {
                                                                        borderColor: `${modelColor}33`
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
                                                                                                    fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
                                                                                                    lineNumber: 180,
                                                                                                    columnNumber: 184
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                                    variant: badgeVariant,
                                                                                                    className: `text-xs font-semibold uppercase ${badgeClass}`,
                                                                                                    children: signalLabel
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
                                                                                                    lineNumber: 180,
                                                                                                    columnNumber: 272
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
                                                                                            lineNumber: 180,
                                                                                            columnNumber: 133
                                                                                        }, this),
                                                                                        statusLabel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-[10px] uppercase tracking-wider text-muted-foreground",
                                                                                            children: statusLabel
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
                                                                                            lineNumber: 180,
                                                                                            columnNumber: 404
                                                                                        }, this) : null
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
                                                                                    lineNumber: 180,
                                                                                    columnNumber: 96
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
                                                                                    children: confidenceLabel
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
                                                                                    lineNumber: 180,
                                                                                    columnNumber: 515
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
                                                                            lineNumber: 180,
                                                                            columnNumber: 30
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-xs uppercase tracking-wide text-muted-foreground",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    children: "Quantity"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
                                                                                    lineNumber: 180,
                                                                                    columnNumber: 740
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-right font-medium text-foreground tabular-nums",
                                                                                    children: quantityLabel
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
                                                                                    lineNumber: 180,
                                                                                    columnNumber: 759
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    children: "Leverage"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
                                                                                    lineNumber: 180,
                                                                                    columnNumber: 849
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-right font-medium text-foreground tabular-nums",
                                                                                    children: leverageLabel
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
                                                                                    lineNumber: 180,
                                                                                    columnNumber: 868
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    children: "Target"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
                                                                                    lineNumber: 180,
                                                                                    columnNumber: 958
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-right font-medium text-foreground tabular-nums",
                                                                                    children: targetLabel
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
                                                                                    lineNumber: 180,
                                                                                    columnNumber: 975
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    children: "Stop"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
                                                                                    lineNumber: 180,
                                                                                    columnNumber: 1063
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-right font-medium text-foreground tabular-nums",
                                                                                    children: stopLabel
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
                                                                                    lineNumber: 180,
                                                                                    columnNumber: 1078
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "col-span-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "text-muted-foreground",
                                                                                            children: "Invalidation"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
                                                                                            lineNumber: 180,
                                                                                            columnNumber: 1192
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "mt-1 text-foreground",
                                                                                            children: decision.invalidationCondition ?? "\u2014"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
                                                                                            lineNumber: 180,
                                                                                            columnNumber: 1249
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
                                                                                    lineNumber: 180,
                                                                                    columnNumber: 1164
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
                                                                            lineNumber: 180,
                                                                            columnNumber: 631
                                                                        }, this)
                                                                    ]
                                                                }, decision.key, true, {
                                                                    fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
                                                                    lineNumber: 178,
                                                                    columnNumber: 34
                                                                }, this);
                                                            }
                                                        }["ModelChatTab[conversations.map() > tradingDecisions.map()]"])
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 434
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 224
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
                                            lineNumber: 142,
                                            columnNumber: 311
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
                                    lineNumber: 124,
                                    columnNumber: 39
                                }, this),
                                idx < conversations.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-b mx-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
                                    lineNumber: 182,
                                    columnNumber: 161
                                }, this)
                            ]
                        }, conv.id, true, {
                            fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
                            lineNumber: 124,
                            columnNumber: 20
                        }, this);
                    }
                }["ModelChatTab[conversations.map()]"])
            }, void 0, false, {
                fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
                lineNumber: 114,
                columnNumber: 396
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
            lineNumber: 114,
            columnNumber: 10
        }, this);
        $[5] = activeConversationPanels;
        $[6] = conversations;
        $[7] = expandedResponses;
        $[8] = loading;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== filterMenu || $[11] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full flex-col",
            children: [
                filterMenu,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/trades-sidebar/model-chat-tab.tsx",
            lineNumber: 195,
            columnNumber: 10
        }, this);
        $[10] = filterMenu;
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    return t6;
}
_s(ModelChatTab, "DNhfwy8j6HJghbTbqlN1wf57nI4=");
_c = ModelChatTab;
var _c;
__turbopack_context__.k.register(_c, "ModelChatTab");
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
"[project]/src/components/trades-sidebar/model-filter-menu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModelFilterMenu",
    ()=>ModelFilterMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
function ModelFilterMenu(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(29);
    if ($[0] !== "0d1354810ced33a9123a4abbf6d0c417f739a250cc8c986d31d6e335c6181f7e") {
        for(let $i = 0; $i < 29; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0d1354810ced33a9123a4abbf6d0c417f739a250cc8c986d31d6e335c6181f7e";
    }
    const { selectedLabel, onFilterChange, options, metaLabel, isLoading } = t0;
    if (isLoading) {
        let t1;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-medium text-xs uppercase tracking-wide",
                        children: "Filter:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/trades-sidebar/model-filter-menu.tsx",
                        lineNumber: 33,
                        columnNumber: 53
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-7 w-32"
                    }, void 0, false, {
                        fileName: "[project]/src/components/trades-sidebar/model-filter-menu.tsx",
                        lineNumber: 33,
                        columnNumber: 129
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/trades-sidebar/model-filter-menu.tsx",
                lineNumber: 33,
                columnNumber: 12
            }, this);
            $[1] = t1;
        } else {
            t1 = $[1];
        }
        let t2;
        if ($[2] !== metaLabel) {
            t2 = metaLabel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                className: "h-3 w-28"
            }, void 0, false, {
                fileName: "[project]/src/components/trades-sidebar/model-filter-menu.tsx",
                lineNumber: 40,
                columnNumber: 24
            }, this) : null;
            $[2] = metaLabel;
            $[3] = t2;
        } else {
            t2 = $[3];
        }
        let t3;
        if ($[4] !== t2) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b px-3 py-[7px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        t1,
                        t2
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/trades-sidebar/model-filter-menu.tsx",
                    lineNumber: 48,
                    columnNumber: 52
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/trades-sidebar/model-filter-menu.tsx",
                lineNumber: 48,
                columnNumber: 12
            }, this);
            $[4] = t2;
            $[5] = t3;
        } else {
            t3 = $[5];
        }
        return t3;
    }
    let t1;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-medium text-xs uppercase tracking-wide",
            children: "Filter:"
        }, void 0, false, {
            fileName: "[project]/src/components/trades-sidebar/model-filter-menu.tsx",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    const t2 = options.length === 0;
    let t3;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
            className: "h-3 w-3"
        }, void 0, false, {
            fileName: "[project]/src/components/trades-sidebar/model-filter-menu.tsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== selectedLabel || $[9] !== t2) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
            asChild: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "flex items-center gap-1 rounded border bg-background px-2 cursor-pointer py-1 font-medium text-xs transition-colors hover:bg-accent disabled:opacity-60 disabled:cursor-not-allowed",
                type: "button",
                disabled: t2,
                children: [
                    selectedLabel,
                    t3
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/trades-sidebar/model-filter-menu.tsx",
                lineNumber: 73,
                columnNumber: 46
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/trades-sidebar/model-filter-menu.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[8] = selectedLabel;
        $[9] = t2;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== onFilterChange) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
            onClick: {
                "ModelFilterMenu[<DropdownMenuItem>.onClick]": ()=>onFilterChange("all")
            }["ModelFilterMenu[<DropdownMenuItem>.onClick]"],
            children: "All Models"
        }, void 0, false, {
            fileName: "[project]/src/components/trades-sidebar/model-filter-menu.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        $[11] = onFilterChange;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] !== onFilterChange || $[14] !== options) {
        let t7;
        if ($[16] !== onFilterChange) {
            t7 = ({
                "ModelFilterMenu[options.map()]": (option)=>{
                    const swatchColor = option.color || "#888888";
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        onClick: {
                            "ModelFilterMenu[options.map() > <DropdownMenuItem>.onClick]": ()=>onFilterChange(option.id)
                        }["ModelFilterMenu[options.map() > <DropdownMenuItem>.onClick]"],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 cursor-pointer",
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
                                    children: option.logo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        alt: option.label,
                                        src: option.logo,
                                        width: 10,
                                        height: 10,
                                        style: {
                                            objectFit: "contain"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/trades-sidebar/model-filter-menu.tsx",
                                        lineNumber: 108,
                                        columnNumber: 33
                                    }, this) : null
                                }, void 0, false, {
                                    fileName: "[project]/src/components/trades-sidebar/model-filter-menu.tsx",
                                    lineNumber: 99,
                                    columnNumber: 133
                                }, this),
                                option.label
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/trades-sidebar/model-filter-menu.tsx",
                            lineNumber: 99,
                            columnNumber: 77
                        }, this)
                    }, option.id, false, {
                        fileName: "[project]/src/components/trades-sidebar/model-filter-menu.tsx",
                        lineNumber: 97,
                        columnNumber: 18
                    }, this);
                }
            })["ModelFilterMenu[options.map()]"];
            $[16] = onFilterChange;
            $[17] = t7;
        } else {
            t7 = $[17];
        }
        t6 = options.map(t7);
        $[13] = onFilterChange;
        $[14] = options;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    let t7;
    if ($[18] !== t5 || $[19] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
            align: "start",
            children: [
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/trades-sidebar/model-filter-menu.tsx",
            lineNumber: 127,
            columnNumber: 10
        }, this);
        $[18] = t5;
        $[19] = t6;
        $[20] = t7;
    } else {
        t7 = $[20];
    }
    let t8;
    if ($[21] !== t4 || $[22] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 ",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                    children: [
                        t4,
                        t7
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/trades-sidebar/model-filter-menu.tsx",
                    lineNumber: 136,
                    columnNumber: 56
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/trades-sidebar/model-filter-menu.tsx",
            lineNumber: 136,
            columnNumber: 10
        }, this);
        $[21] = t4;
        $[22] = t7;
        $[23] = t8;
    } else {
        t8 = $[23];
    }
    let t9;
    if ($[24] !== metaLabel) {
        t9 = metaLabel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-muted-foreground text-xs",
            children: metaLabel
        }, void 0, false, {
            fileName: "[project]/src/components/trades-sidebar/model-filter-menu.tsx",
            lineNumber: 145,
            columnNumber: 22
        }, this) : null;
        $[24] = metaLabel;
        $[25] = t9;
    } else {
        t9 = $[25];
    }
    let t10;
    if ($[26] !== t8 || $[27] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-b px-3 py-[7px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    t8,
                    t9
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/trades-sidebar/model-filter-menu.tsx",
                lineNumber: 153,
                columnNumber: 51
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/trades-sidebar/model-filter-menu.tsx",
            lineNumber: 153,
            columnNumber: 11
        }, this);
        $[26] = t8;
        $[27] = t9;
        $[28] = t10;
    } else {
        t10 = $[28];
    }
    return t10;
}
_c = ModelFilterMenu;
var _c;
__turbopack_context__.k.register(_c, "ModelFilterMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/trades-sidebar/positions-tab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PositionsTab",
    ()=>PositionsTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/scroll-area.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$modelConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/modelConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/formatters.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trades$2d$sidebar$2f$loading$2d$skeletons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/trades-sidebar/loading-skeletons.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
function PositionsTab(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "2bbc35f6c5324a37d5a18b9203c2953ce43584e1552337a365acb40f2a5f4746") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2bbc35f6c5324a37d5a18b9203c2953ce43584e1552337a365acb40f2a5f4746";
    }
    const { positions, loading, filterMenu, onSelectExitPlan } = t0;
    let t1;
    if ($[1] !== loading || $[2] !== onSelectExitPlan || $[3] !== positions) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
            className: "flex-1 overflow-auto",
            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trades$2d$sidebar$2f$loading$2d$skeletons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PositionsListSkeleton"], {}, void 0, false, {
                fileName: "[project]/src/components/trades-sidebar/positions-tab.tsx",
                lineNumber: 30,
                columnNumber: 66
            }, this) : positions.length === 0 || positions.every(_PositionsTabPositionsEvery) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center p-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center text-muted-foreground",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-2 font-medium text-sm",
                            children: "No Open Positions"
                        }, void 0, false, {
                            fileName: "[project]/src/components/trades-sidebar/positions-tab.tsx",
                            lineNumber: 30,
                            columnNumber: 272
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs",
                            children: "Open positions will appear here when models create trades."
                        }, void 0, false, {
                            fileName: "[project]/src/components/trades-sidebar/positions-tab.tsx",
                            lineNumber: 30,
                            columnNumber: 333
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/trades-sidebar/positions-tab.tsx",
                    lineNumber: 30,
                    columnNumber: 221
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/trades-sidebar/positions-tab.tsx",
                lineNumber: 30,
                columnNumber: 167
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: positions.map({
                    "PositionsTab[positions.map()]": (modelPos, modelIdx)=>{
                        if (modelPos.positions.length === 0) {
                            return null;
                        }
                        const modelKey = modelPos.modelLogo || modelPos.modelName;
                        const modelInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$modelConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getModelInfo"])(modelKey || modelPos.modelName);
                        const modelColor = modelInfo.color || "#888888";
                        const modelLabel = modelInfo.logo ? modelInfo.label : modelPos.modelName;
                        const totalUnrealizedNumeric = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeNumber"])(modelPos.totalUnrealizedPnl) ?? modelPos.positions.reduce(_PositionsTabPositionsMapModelPosPositionsReduce, 0);
                        const totalIsPositive = totalUnrealizedNumeric >= 0;
                        const totalUnrealizedLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatSignedCurrencyValue"])(totalUnrealizedNumeric);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                backgroundColor: `${modelColor}15`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-b px-4 py-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
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
                                                            fileName: "[project]/src/components/trades-sidebar/positions-tab.tsx",
                                                            lineNumber: 53,
                                                            columnNumber: 42
                                                        }, this) : null
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/trades-sidebar/positions-tab.tsx",
                                                        lineNumber: 44,
                                                        columnNumber: 144
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-semibold",
                                                        children: modelLabel
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/trades-sidebar/positions-tab.tsx",
                                                        lineNumber: 55,
                                                        columnNumber: 42
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/trades-sidebar/positions-tab.tsx",
                                                lineNumber: 44,
                                                columnNumber: 103
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-right",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] uppercase tracking-wider text-muted-foreground",
                                                        children: "Total Unrealized P&L:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/trades-sidebar/positions-tab.tsx",
                                                        lineNumber: 55,
                                                        columnNumber: 135
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `font-bold text-base tabular-nums ${totalIsPositive ? "text-green-500" : "text-red-500"}`,
                                                        children: totalUnrealizedLabel
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/trades-sidebar/positions-tab.tsx",
                                                        lineNumber: 55,
                                                        columnNumber: 242
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/trades-sidebar/positions-tab.tsx",
                                                lineNumber: 55,
                                                columnNumber: 107
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/trades-sidebar/positions-tab.tsx",
                                        lineNumber: 44,
                                        columnNumber: 52
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/trades-sidebar/positions-tab.tsx",
                                    lineNumber: 44,
                                    columnNumber: 16
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-6 gap-x-2 border-b bg-muted/30 px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: "SIDE"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/trades-sidebar/positions-tab.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 542
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: "COIN"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/trades-sidebar/positions-tab.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 557
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center",
                                                    children: "LEVERAGE"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/trades-sidebar/positions-tab.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 572
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-right",
                                                    children: "NOTIONAL"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/trades-sidebar/positions-tab.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 615
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center",
                                                    children: "EXIT PLAN"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/trades-sidebar/positions-tab.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 657
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-right",
                                                    children: "UNREAL P&L"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/trades-sidebar/positions-tab.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 701
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/trades-sidebar/positions-tab.tsx",
                                            lineNumber: 55,
                                            columnNumber: 400
                                        }, this),
                                        modelPos.positions.map({
                                            "PositionsTab[positions.map() > modelPos.positions.map()]": (position_0, idx)=>{
                                                const unrealizedPnl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeNumber"])(position_0.unrealizedPnl) ?? 0;
                                                const isPnlPositive = unrealizedPnl >= 0;
                                                const hasExitPlan = Boolean(position_0.exitPlan?.target || position_0.exitPlan?.stop || position_0.exitPlan?.invalidation);
                                                const signal = position_0.signal ?? position_0.sign;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `grid grid-cols-6 gap-x-2 px-4 py-2.5 text-xs transition-colors hover:bg-accent/20 ${idx < modelPos.positions.length - 1 ? "border-b" : ""}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `font-bold uppercase ${signal === "LONG" ? "text-green-500" : "text-red-500"}`,
                                                                children: signal
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/trades-sidebar/positions-tab.tsx",
                                                                lineNumber: 61,
                                                                columnNumber: 277
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/trades-sidebar/positions-tab.tsx",
                                                            lineNumber: 61,
                                                            columnNumber: 242
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1.5",
                                                            children: [
                                                                renderSymbolIcon(position_0.symbol),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-bold",
                                                                    children: position_0.symbol
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/trades-sidebar/positions-tab.tsx",
                                                                    lineNumber: 61,
                                                                    columnNumber: 475
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/trades-sidebar/positions-tab.tsx",
                                                            lineNumber: 61,
                                                            columnNumber: 395
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold tabular-nums",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatLeverageValue"])(position_0.leverage)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/trades-sidebar/positions-tab.tsx",
                                                                lineNumber: 61,
                                                                columnNumber: 585
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/trades-sidebar/positions-tab.tsx",
                                                            lineNumber: 61,
                                                            columnNumber: 535
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-end",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold tabular-nums text-green-500",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrencyValue"])(position_0.notional)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/trades-sidebar/positions-tab.tsx",
                                                                lineNumber: 61,
                                                                columnNumber: 728
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/trades-sidebar/positions-tab.tsx",
                                                            lineNumber: 61,
                                                            columnNumber: 681
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-center",
                                                            children: hasExitPlan ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: {
                                                                    "PositionsTab[positions.map() > modelPos.positions.map() > <button>.onClick]": ()=>onSelectExitPlan({
                                                                            modelLabel,
                                                                            modelColor,
                                                                            position: position_0
                                                                        })
                                                                }["PositionsTab[positions.map() > modelPos.positions.map() > <button>.onClick]"],
                                                                className: "cursor-pointer rounded border border-foreground/20 bg-background px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide transition-colors hover:bg-accent",
                                                                children: "VIEW"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/trades-sidebar/positions-tab.tsx",
                                                                lineNumber: 61,
                                                                columnNumber: 904
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-muted-foreground",
                                                                children: "—"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/trades-sidebar/positions-tab.tsx",
                                                                lineNumber: 67,
                                                                columnNumber: 296
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/trades-sidebar/positions-tab.tsx",
                                                            lineNumber: 61,
                                                            columnNumber: 839
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-end",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `font-bold tabular-nums ${isPnlPositive ? "text-green-500" : "text-red-500"}`,
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatSignedCurrencyValue"])(unrealizedPnl)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/trades-sidebar/positions-tab.tsx",
                                                                lineNumber: 67,
                                                                columnNumber: 398
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/trades-sidebar/positions-tab.tsx",
                                                            lineNumber: 67,
                                                            columnNumber: 351
                                                        }, this)
                                                    ]
                                                }, `${modelPos.modelId}-${position_0.symbol}-${idx}`, true, {
                                                    fileName: "[project]/src/components/trades-sidebar/positions-tab.tsx",
                                                    lineNumber: 61,
                                                    columnNumber: 28
                                                }, this);
                                            }
                                        }["PositionsTab[positions.map() > modelPos.positions.map()]"]),
                                        modelPos.availableCash !== undefined ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-t px-4 py-2 text-xs bg-muted/20",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold uppercase tracking-wide text-muted-foreground",
                                                        children: "Available Cash:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/trades-sidebar/positions-tab.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 227
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold tabular-nums",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrencyValue"])(modelPos.availableCash)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/trades-sidebar/positions-tab.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 323
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/trades-sidebar/positions-tab.tsx",
                                                lineNumber: 69,
                                                columnNumber: 176
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/trades-sidebar/positions-tab.tsx",
                                            lineNumber: 69,
                                            columnNumber: 120
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/trades-sidebar/positions-tab.tsx",
                                    lineNumber: 55,
                                    columnNumber: 395
                                }, this),
                                modelIdx < positions.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-2"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/trades-sidebar/positions-tab.tsx",
                                    lineNumber: 69,
                                    columnNumber: 478
                                }, this)
                            ]
                        }, modelPos.modelId, true, {
                            fileName: "[project]/src/components/trades-sidebar/positions-tab.tsx",
                            lineNumber: 42,
                            columnNumber: 20
                        }, this);
                    }
                }["PositionsTab[positions.map()]"])
            }, void 0, false, {
                fileName: "[project]/src/components/trades-sidebar/positions-tab.tsx",
                lineNumber: 30,
                columnNumber: 433
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/trades-sidebar/positions-tab.tsx",
            lineNumber: 30,
            columnNumber: 10
        }, this);
        $[1] = loading;
        $[2] = onSelectExitPlan;
        $[3] = positions;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[5] !== filterMenu || $[6] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full flex-col",
            children: [
                filterMenu,
                t1
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/trades-sidebar/positions-tab.tsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[5] = filterMenu;
        $[6] = t1;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    return t2;
}
_c = PositionsTab;
function _PositionsTabPositionsMapModelPosPositionsReduce(sum, position) {
    return sum + ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeNumber"])(position.unrealizedPnl) ?? 0);
}
function _PositionsTabPositionsEvery(group) {
    return group.positions.length === 0;
}
const SYMBOL_ICON_MAP = {
    BTC: {
        src: "/btc.svg",
        alt: "BTC"
    },
    ETH: {
        src: "/eth.svg",
        alt: "ETH"
    },
    SOL: {
        src: "/sol.svg",
        alt: "SOL"
    }
};
function renderSymbolIcon(symbol) {
    const icon = SYMBOL_ICON_MAP[symbol];
    if (!icon) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-lg",
            children: "●"
        }, void 0, false, {
            fileName: "[project]/src/components/trades-sidebar/positions-tab.tsx",
            lineNumber: 116,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        src: icon.src,
        alt: icon.alt,
        width: 16,
        height: 16
    }, void 0, false, {
        fileName: "[project]/src/components/trades-sidebar/positions-tab.tsx",
        lineNumber: 118,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "PositionsTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/trades-sidebar/sidebar-tabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SidebarTabs",
    ()=>SidebarTabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
const tabs = [
    {
        key: "trades",
        label: "Completed Trades"
    },
    {
        key: "modelchat",
        label: "ModelChat"
    },
    {
        key: "positions",
        label: "Positions"
    }
];
function SidebarTabs(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "b6c99cdc741927e840e46ae60a906069645b16585fbdec9360f185f8e43e3b66") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b6c99cdc741927e840e46ae60a906069645b16585fbdec9360f185f8e43e3b66";
    }
    const { activeTab, onChange } = t0;
    let t1;
    if ($[1] !== activeTab || $[2] !== onChange) {
        t1 = tabs.map({
            "SidebarTabs[tabs.map()]": (tab)=>{
                const isActive = activeTab === tab.key;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: `flex-1 px-4 py-3 text-xs font-semibold uppercase tracking-wider cursor-pointer transition-colors ${isActive ? "border-primary border-b-2 bg-background text-foreground" : "bg-muted/30 text-muted-foreground hover:bg-muted/50"}`,
                    onClick: {
                        "SidebarTabs[tabs.map() > <button>.onClick]": ()=>onChange(tab.key)
                    }["SidebarTabs[tabs.map() > <button>.onClick]"],
                    type: "button",
                    children: tab.label
                }, tab.key, false, {
                    fileName: "[project]/src/components/trades-sidebar/sidebar-tabs.tsx",
                    lineNumber: 37,
                    columnNumber: 16
                }, this);
            }
        }["SidebarTabs[tabs.map()]"]);
        $[1] = activeTab;
        $[2] = onChange;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-b",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex",
                children: t1
            }, void 0, false, {
                fileName: "[project]/src/components/trades-sidebar/sidebar-tabs.tsx",
                lineNumber: 50,
                columnNumber: 36
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/trades-sidebar/sidebar-tabs.tsx",
            lineNumber: 50,
            columnNumber: 10
        }, this);
        $[4] = t1;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    return t2;
}
_c = SidebarTabs;
var _c;
__turbopack_context__.k.register(_c, "SidebarTabs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/trades-sidebar/trades-tab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TradesTab",
    ()=>TradesTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/scroll-area.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$modelConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/modelConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/formatters.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trades$2d$sidebar$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/trades-sidebar/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trades$2d$sidebar$2f$loading$2d$skeletons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/trades-sidebar/loading-skeletons.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
function TradesTab(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "5840ae4297ef74285beff72eb67e9944f8bdf21ac7552b6a56e839863b35521c") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5840ae4297ef74285beff72eb67e9944f8bdf21ac7552b6a56e839863b35521c";
    }
    const { trades, loading, filterMenu } = t0;
    let t1;
    if ($[1] !== loading || $[2] !== trades) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
            className: "flex-1 overflow-auto",
            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trades$2d$sidebar$2f$loading$2d$skeletons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TradesListSkeleton"], {}, void 0, false, {
                fileName: "[project]/src/components/trades-sidebar/trades-tab.tsx",
                lineNumber: 30,
                columnNumber: 66
            }, this) : trades.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center p-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted-foreground text-sm",
                    children: "No completed trades yet"
                }, void 0, false, {
                    fileName: "[project]/src/components/trades-sidebar/trades-tab.tsx",
                    lineNumber: 30,
                    columnNumber: 167
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/trades-sidebar/trades-tab.tsx",
                lineNumber: 30,
                columnNumber: 113
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: trades.map({
                    "TradesTab[trades.map()]": (trade, idx)=>{
                        const modelInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$modelConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getModelInfo"])(trade.modelKey || trade.modelName);
                        const modelColor = modelInfo.color || "#888888";
                        const modelLabel = modelInfo.logo ? modelInfo.label : trade.modelName || trade.modelRouterName || trade.modelKey || "Unknown Model";
                        const isShort = trade.side === "SHORT";
                        const netPnlValue = trade.netPnl ?? 0;
                        const isProfitable = netPnlValue >= 0;
                        const timestampLabel = trade.timestamp ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trades$2d$sidebar$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTimestamp"])(trade.closedAt);
                        const holdingLabel = trade.holdingTime ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trades$2d$sidebar$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeHoldingLabel"])(trade.openedAt, trade.closedAt);
                        const quantityLabel = trade.quantity != null ? trade.quantity.toFixed(3) : "--";
                        const entryPriceLabel = trade.entryPrice != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(trade.entryPrice) : "--";
                        const exitPriceLabel = trade.exitPrice != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(trade.exitPrice) : "--";
                        const entryNotionalLabel = trade.entryNotional != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(trade.entryNotional) : "--";
                        const exitNotionalLabel = trade.exitNotional != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(trade.exitNotional) : "--";
                        const pnlLabel = trade.netPnl != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(trade.netPnl) : "--";
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
                                                                fileName: "[project]/src/components/trades-sidebar/trades-tab.tsx",
                                                                lineNumber: 57,
                                                                columnNumber: 42
                                                            }, this) : null
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/trades-sidebar/trades-tab.tsx",
                                                            lineNumber: 48,
                                                            columnNumber: 115
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-semibold",
                                                            children: modelLabel
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/trades-sidebar/trades-tab.tsx",
                                                            lineNumber: 59,
                                                            columnNumber: 42
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/trades-sidebar/trades-tab.tsx",
                                                    lineNumber: 48,
                                                    columnNumber: 74
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: timestampLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/trades-sidebar/trades-tab.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 107
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/trades-sidebar/trades-tab.tsx",
                                            lineNumber: 48,
                                            columnNumber: 18
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-3 flex flex-wrap items-center gap-1.5 text-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-muted-foreground",
                                                    children: "completed a"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/trades-sidebar/trades-tab.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 250
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                    variant: isShort ? "outline" : "default",
                                                    className: `text-xs font-semibold ${isShort ? "border-red-500/20 bg-red-500/10 text-red-500" : "bg-green-500/20 text-green-700"}`,
                                                    children: isShort ? "SHORT" : "LONG"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/trades-sidebar/trades-tab.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 308
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-muted-foreground",
                                                    children: "trade on"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/trades-sidebar/trades-tab.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 524
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                    variant: "outline",
                                                    className: "text-xs font-semibold",
                                                    children: trade.symbol
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/trades-sidebar/trades-tab.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 579
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/trades-sidebar/trades-tab.tsx",
                                            lineNumber: 59,
                                            columnNumber: 184
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
                                                            fileName: "[project]/src/components/trades-sidebar/trades-tab.tsx",
                                                            lineNumber: 59,
                                                            columnNumber: 739
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-light",
                                                            children: [
                                                                entryPriceLabel,
                                                                trade.exitPrice != null ? ` → ${exitPriceLabel}` : ""
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/trades-sidebar/trades-tab.tsx",
                                                            lineNumber: 59,
                                                            columnNumber: 792
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/trades-sidebar/trades-tab.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 701
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-muted-foreground",
                                                            children: "Quantity:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/trades-sidebar/trades-tab.tsx",
                                                            lineNumber: 59,
                                                            columnNumber: 944
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-light",
                                                            children: quantityLabel
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/trades-sidebar/trades-tab.tsx",
                                                            lineNumber: 59,
                                                            columnNumber: 1000
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/trades-sidebar/trades-tab.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 906
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-muted-foreground",
                                                            children: "Notional:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/trades-sidebar/trades-tab.tsx",
                                                            lineNumber: 59,
                                                            columnNumber: 1095
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-light",
                                                            children: [
                                                                entryNotionalLabel,
                                                                trade.exitNotional != null ? ` → ${exitNotionalLabel}` : ""
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/trades-sidebar/trades-tab.tsx",
                                                            lineNumber: 59,
                                                            columnNumber: 1151
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/trades-sidebar/trades-tab.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 1057
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-muted-foreground",
                                                            children: "Holding time:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/trades-sidebar/trades-tab.tsx",
                                                            lineNumber: 59,
                                                            columnNumber: 1312
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-light",
                                                            children: holdingLabel
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/trades-sidebar/trades-tab.tsx",
                                                            lineNumber: 59,
                                                            columnNumber: 1372
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/trades-sidebar/trades-tab.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 1274
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/trades-sidebar/trades-tab.tsx",
                                            lineNumber: 59,
                                            columnNumber: 666
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
                                                        fileName: "[project]/src/components/trades-sidebar/trades-tab.tsx",
                                                        lineNumber: 59,
                                                        columnNumber: 1507
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-base font-bold tabular-nums ${isProfitable ? "text-green-500" : "text-red-500"}`,
                                                        children: [
                                                            isProfitable && trade.netPnl != null ? "+" : "",
                                                            pnlLabel
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/trades-sidebar/trades-tab.tsx",
                                                        lineNumber: 59,
                                                        columnNumber: 1590
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/trades-sidebar/trades-tab.tsx",
                                                lineNumber: 59,
                                                columnNumber: 1456
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/trades-sidebar/trades-tab.tsx",
                                            lineNumber: 59,
                                            columnNumber: 1434
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/trades-sidebar/trades-tab.tsx",
                                    lineNumber: 46,
                                    columnNumber: 40
                                }, this),
                                idx < trades.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-4 border-b"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/trades-sidebar/trades-tab.tsx",
                                    lineNumber: 59,
                                    columnNumber: 1807
                                }, this)
                            ]
                        }, trade.id, true, {
                            fileName: "[project]/src/components/trades-sidebar/trades-tab.tsx",
                            lineNumber: 46,
                            columnNumber: 20
                        }, this);
                    }
                }["TradesTab[trades.map()]"])
            }, void 0, false, {
                fileName: "[project]/src/components/trades-sidebar/trades-tab.tsx",
                lineNumber: 30,
                columnNumber: 248
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/trades-sidebar/trades-tab.tsx",
            lineNumber: 30,
            columnNumber: 10
        }, this);
        $[1] = loading;
        $[2] = trades;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] !== filterMenu || $[5] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full flex-col",
            children: [
                filterMenu,
                t1
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/trades-sidebar/trades-tab.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[4] = filterMenu;
        $[5] = t1;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    return t2;
}
_c = TradesTab;
var _c;
__turbopack_context__.k.register(_c, "TradesTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/trades-sidebar/use-trading-dashboard-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TRADES_ENDPOINT",
    ()=>TRADES_ENDPOINT,
    "useTradingDashboardData",
    ()=>useTradingDashboardData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePollingFetch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/usePollingFetch.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$modelConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/modelConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/formatters.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
const TRADES_ENDPOINT = "/api/trades";
const POSITIONS_ENDPOINT = "/api/positions";
const CONVERSATIONS_ENDPOINT = "/api/invocations";
const REFRESH_INTERVAL = 10_000;
function useTradingDashboardData() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(26);
    if ($[0] !== "61bf55de4bbec087610296e1996b9a6b25b7ba684d0fde3302865992b3aa55d3") {
        for(let $i = 0; $i < 26; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "61bf55de4bbec087610296e1996b9a6b25b7ba684d0fde3302865992b3aa55d3";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            interval: REFRESH_INTERVAL,
            selector: selectTrades
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const { data: trades, loading: tradesLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePollingFetch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePollingFetch"])(TRADES_ENDPOINT, t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            interval: REFRESH_INTERVAL,
            selector: selectPositions
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const { data: positions, loading: positionsLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePollingFetch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePollingFetch"])(POSITIONS_ENDPOINT, t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            interval: REFRESH_INTERVAL,
            selector: selectConversations
        };
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const { data: conversations, loading: conversationsLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePollingFetch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePollingFetch"])(CONVERSATIONS_ENDPOINT, t2);
    let t3;
    if ($[4] !== trades) {
        t3 = trades ?? [];
        $[4] = trades;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== positions) {
        t4 = positions ?? [];
        $[6] = positions;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== conversations) {
        t5 = conversations ?? [];
        $[8] = conversations;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== t3 || $[11] !== t4 || $[12] !== t5) {
        t6 = buildModelOptions(t3, t4, t5);
        $[10] = t3;
        $[11] = t4;
        $[12] = t5;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    const modelOptions = t6;
    const loading = Boolean(tradesLoading || positionsLoading || conversationsLoading);
    let t7;
    if ($[14] !== trades) {
        t7 = trades ?? [];
        $[14] = trades;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== positions) {
        t8 = positions ?? [];
        $[16] = positions;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] !== conversations) {
        t9 = conversations ?? [];
        $[18] = conversations;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    let t10;
    if ($[20] !== loading || $[21] !== modelOptions || $[22] !== t7 || $[23] !== t8 || $[24] !== t9) {
        t10 = {
            trades: t7,
            positions: t8,
            conversations: t9,
            modelOptions,
            loading
        };
        $[20] = loading;
        $[21] = modelOptions;
        $[22] = t7;
        $[23] = t8;
        $[24] = t9;
        $[25] = t10;
    } else {
        t10 = $[25];
    }
    return t10;
}
_s(useTradingDashboardData, "cp+BcBIuccECCqWP7QQTNixLC90=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePollingFetch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePollingFetch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePollingFetch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePollingFetch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePollingFetch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePollingFetch"]
    ];
});
function selectTrades(payload) {
    const rawTrades = Array.isArray(payload?.trades) ? payload.trades : [];
    return rawTrades.map((trade)=>{
        const rawSide = typeof trade?.side === "string" ? trade.side.toUpperCase() : "LONG";
        const side = rawSide === "SHORT" || rawSide === "LONG" ? rawSide : "UNKNOWN";
        const modelKey = trade?.modelRouterName || trade?.modelName || trade?.modelId;
        if (!trade?.id || !modelKey) return null;
        return {
            id: String(trade.id),
            modelId: String(trade.modelId ?? modelKey ?? ""),
            modelName: String(trade.modelName ?? ""),
            modelRouterName: String(trade.modelRouterName ?? ""),
            modelKey: String(modelKey),
            symbol: String(trade.symbol ?? ""),
            side,
            quantity: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeNumber"])(trade.quantity),
            entryPrice: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeNumber"])(trade.entryPrice),
            exitPrice: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeNumber"])(trade.exitPrice),
            entryNotional: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeNumber"])(trade.entryNotional),
            exitNotional: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeNumber"])(trade.exitNotional),
            netPnl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeNumber"])(trade.netPnl),
            openedAt: typeof trade.openedAt === "string" ? trade.openedAt : null,
            closedAt: typeof trade.closedAt === "string" ? trade.closedAt : new Date().toISOString(),
            holdingTime: typeof trade.holdingTime === "string" ? trade.holdingTime : null,
            timestamp: typeof trade.timestamp === "string" ? trade.timestamp : null
        };
    }).filter((trade)=>Boolean(trade?.id));
}
function selectPositions(payload) {
    const rawPositions = Array.isArray(payload?.positions) ? payload.positions : [];
    return rawPositions.filter((entry)=>Array.isArray(entry?.positions));
}
function selectConversations(payload) {
    const rawConversations = Array.isArray(payload?.conversations) ? payload.conversations : [];
    return rawConversations.filter((conversation)=>Boolean(conversation?.id));
}
function buildModelOptions(trades, positions, conversations) {
    const map = new Map();
    const register = (id, fallbackName)=>{
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
    };
    trades.forEach((trade)=>register(trade.modelKey, trade.modelName));
    conversations.forEach((conversation)=>register(conversation.modelLogo || conversation.modelName, conversation.modelName));
    positions.forEach((positionGroup)=>register(positionGroup.modelLogo || positionGroup.modelName, positionGroup.modelName));
    return Array.from(map.values());
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/trades-sidebar/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TRADES_SIDEBAR_COLLAPSED_WIDTH",
    ()=>TRADES_SIDEBAR_COLLAPSED_WIDTH,
    "default",
    ()=>TradesSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$CustomEase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/CustomEase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$modelConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/modelConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trades$2d$sidebar$2f$exit$2d$plan$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/trades-sidebar/exit-plan-dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trades$2d$sidebar$2f$model$2d$chat$2d$tab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/trades-sidebar/model-chat-tab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trades$2d$sidebar$2f$model$2d$filter$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/trades-sidebar/model-filter-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trades$2d$sidebar$2f$positions$2d$tab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/trades-sidebar/positions-tab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trades$2d$sidebar$2f$sidebar$2d$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/trades-sidebar/sidebar-tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trades$2d$sidebar$2f$trades$2d$tab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/trades-sidebar/trades-tab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trades$2d$sidebar$2f$use$2d$trading$2d$dashboard$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/trades-sidebar/use-trading-dashboard-data.ts [app-client] (ecmascript)");
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
;
// Register GSAP plugins
if ("TURBOPACK compile-time truthy", 1) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$CustomEase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomEase"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$CustomEase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomEase"].create("hop", "M0,0 C0.091,0.543 0.148,0.662 0.277,0.786 0.405,0.909 0.596,0.979 1,1 ");
}
const TRADES_SIDEBAR_COLLAPSED_WIDTH = 384; // px
const COLLAPSED_WIDTH = `${TRADES_SIDEBAR_COLLAPSED_WIDTH}px`;
const EXPANDED_WIDTH = "100vw";
function TradesSidebar(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(56);
    if ($[0] !== "ee390f332ab24332c57fe7c4898723a1b600190ff26e0724d7d034f2a999290a") {
        for(let $i = 0; $i < 56; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ee390f332ab24332c57fe7c4898723a1b600190ff26e0724d7d034f2a999290a";
    }
    const { isExpanded } = t0;
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("trades");
    const [selectedExitPlan, setSelectedExitPlan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const sidebarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isAnimating = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const firstRender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const { trades, conversations, positions, modelOptions, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trades$2d$sidebar$2f$use$2d$trading$2d$dashboard$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTradingDashboardData"])();
    let t1;
    let t2;
    if ($[1] !== isExpanded) {
        t1 = ({
            "TradesSidebar[useEffect()]": ()=>{
                const element = sidebarRef.current;
                if (!element) {
                    return;
                }
                if (firstRender.current) {
                    firstRender.current = false;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(element, {
                        width: isExpanded ? EXPANDED_WIDTH : COLLAPSED_WIDTH
                    });
                    return;
                }
                isAnimating.current = true;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].killTweensOf(element);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(element, {
                    width: isExpanded ? EXPANDED_WIDTH : COLLAPSED_WIDTH,
                    duration: 1,
                    ease: "hop",
                    onComplete: ()=>{
                        isAnimating.current = false;
                    }
                });
            }
        })["TradesSidebar[useEffect()]"];
        t2 = [
            isExpanded
        ];
        $[1] = isExpanded;
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    bb0: {
        if (filter === "all") {
            t3 = trades;
            break bb0;
        }
        let t4;
        if ($[4] !== filter || $[5] !== trades) {
            let t5;
            if ($[7] !== filter) {
                t5 = ({
                    "TradesSidebar[trades.filter()]": (trade)=>trade.modelKey === filter
                })["TradesSidebar[trades.filter()]"];
                $[7] = filter;
                $[8] = t5;
            } else {
                t5 = $[8];
            }
            t4 = trades.filter(t5);
            $[4] = filter;
            $[5] = trades;
            $[6] = t4;
        } else {
            t4 = $[6];
        }
        t3 = t4;
    }
    const filteredTrades = t3;
    let t4;
    bb1: {
        if (filter === "all") {
            t4 = conversations;
            break bb1;
        }
        let t5;
        if ($[9] !== conversations || $[10] !== filter) {
            let t6;
            if ($[12] !== filter) {
                t6 = ({
                    "TradesSidebar[conversations.filter()]": (conversation)=>(conversation.modelLogo || conversation.modelName) === filter
                })["TradesSidebar[conversations.filter()]"];
                $[12] = filter;
                $[13] = t6;
            } else {
                t6 = $[13];
            }
            t5 = conversations.filter(t6);
            $[9] = conversations;
            $[10] = filter;
            $[11] = t5;
        } else {
            t5 = $[11];
        }
        t4 = t5;
    }
    const filteredConversations = t4;
    let t5;
    bb2: {
        if (filter === "all") {
            t5 = positions;
            break bb2;
        }
        let t6;
        if ($[14] !== filter || $[15] !== positions) {
            let t7;
            if ($[17] !== filter) {
                t7 = ({
                    "TradesSidebar[positions.filter()]": (positionGroup)=>(positionGroup.modelLogo || positionGroup.modelName) === filter
                })["TradesSidebar[positions.filter()]"];
                $[17] = filter;
                $[18] = t7;
            } else {
                t7 = $[18];
            }
            t6 = positions.filter(t7);
            $[14] = filter;
            $[15] = positions;
            $[16] = t6;
        } else {
            t6 = $[16];
        }
        t5 = t6;
    }
    const filteredPositions = t5;
    let lookup;
    if ($[19] !== modelOptions) {
        lookup = new Map();
        modelOptions.forEach({
            "TradesSidebar[modelOptions.forEach()]": (option)=>lookup.set(option.id, option)
        }["TradesSidebar[modelOptions.forEach()]"]);
        $[19] = modelOptions;
        $[20] = lookup;
    } else {
        lookup = $[20];
    }
    const modelOptionsLookup = lookup;
    let t6;
    if ($[21] !== filter || $[22] !== modelOptionsLookup) {
        t6 = filter === "all" ? "All Models" : modelOptionsLookup.get(filter)?.label ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$modelConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getModelInfo"])(filter).label;
        $[21] = filter;
        $[22] = modelOptionsLookup;
        $[23] = t6;
    } else {
        t6 = $[23];
    }
    const selectedModelLabel = t6;
    const isInitialLoading = loading && modelOptions.length === 0;
    let t7;
    if ($[24] !== filter || $[25] !== isInitialLoading || $[26] !== modelOptions || $[27] !== selectedModelLabel) {
        t7 = ({
            "TradesSidebar[renderFilterMenu]": (metaLabel)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trades$2d$sidebar$2f$model$2d$filter$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModelFilterMenu"], {
                    selectedLabel: selectedModelLabel,
                    filter: filter,
                    onFilterChange: setFilter,
                    options: modelOptions,
                    metaLabel: metaLabel,
                    isLoading: isInitialLoading
                }, void 0, false, {
                    fileName: "[project]/src/components/trades-sidebar/index.tsx",
                    lineNumber: 201,
                    columnNumber: 55
                }, this)
        })["TradesSidebar[renderFilterMenu]"];
        $[24] = filter;
        $[25] = isInitialLoading;
        $[26] = modelOptions;
        $[27] = selectedModelLabel;
        $[28] = t7;
    } else {
        t7 = $[28];
    }
    const renderFilterMenu = t7;
    let t8;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            position: "absolute",
            right: 0,
            top: 0,
            zIndex: 50,
            backgroundColor: "hsl(var(--background))"
        };
        $[29] = t8;
    } else {
        t8 = $[29];
    }
    let t9;
    if ($[30] !== activeTab) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trades$2d$sidebar$2f$sidebar$2d$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarTabs"], {
            activeTab: activeTab,
            onChange: setActiveTab
        }, void 0, false, {
            fileName: "[project]/src/components/trades-sidebar/index.tsx",
            lineNumber: 227,
            columnNumber: 10
        }, this);
        $[30] = activeTab;
        $[31] = t9;
    } else {
        t9 = $[31];
    }
    let t10;
    if ($[32] !== activeTab || $[33] !== filteredTrades || $[34] !== loading || $[35] !== renderFilterMenu) {
        t10 = activeTab === "trades" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trades$2d$sidebar$2f$trades$2d$tab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TradesTab"], {
            trades: filteredTrades,
            loading: loading,
            filterMenu: renderFilterMenu("Showing Last 400 Trades")
        }, void 0, false, {
            fileName: "[project]/src/components/trades-sidebar/index.tsx",
            lineNumber: 235,
            columnNumber: 36
        }, this) : null;
        $[32] = activeTab;
        $[33] = filteredTrades;
        $[34] = loading;
        $[35] = renderFilterMenu;
        $[36] = t10;
    } else {
        t10 = $[36];
    }
    let t11;
    if ($[37] !== activeTab || $[38] !== filteredConversations || $[39] !== loading || $[40] !== renderFilterMenu) {
        t11 = activeTab === "modelchat" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trades$2d$sidebar$2f$model$2d$chat$2d$tab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModelChatTab"], {
            conversations: filteredConversations,
            loading: loading,
            filterMenu: renderFilterMenu()
        }, void 0, false, {
            fileName: "[project]/src/components/trades-sidebar/index.tsx",
            lineNumber: 246,
            columnNumber: 39
        }, this) : null;
        $[37] = activeTab;
        $[38] = filteredConversations;
        $[39] = loading;
        $[40] = renderFilterMenu;
        $[41] = t11;
    } else {
        t11 = $[41];
    }
    let t12;
    if ($[42] !== activeTab || $[43] !== filteredPositions || $[44] !== loading || $[45] !== renderFilterMenu) {
        t12 = activeTab === "positions" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trades$2d$sidebar$2f$positions$2d$tab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PositionsTab"], {
            positions: filteredPositions,
            loading: loading,
            filterMenu: renderFilterMenu(),
            onSelectExitPlan: setSelectedExitPlan
        }, void 0, false, {
            fileName: "[project]/src/components/trades-sidebar/index.tsx",
            lineNumber: 257,
            columnNumber: 39
        }, this) : null;
        $[42] = activeTab;
        $[43] = filteredPositions;
        $[44] = loading;
        $[45] = renderFilterMenu;
        $[46] = t12;
    } else {
        t12 = $[46];
    }
    let t13;
    if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = ({
            "TradesSidebar[<ExitPlanDialog>.onClose]": ()=>setSelectedExitPlan(null)
        })["TradesSidebar[<ExitPlanDialog>.onClose]"];
        $[47] = t13;
    } else {
        t13 = $[47];
    }
    let t14;
    if ($[48] !== selectedExitPlan) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trades$2d$sidebar$2f$exit$2d$plan$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExitPlanDialog"], {
            selection: selectedExitPlan,
            onClose: t13
        }, void 0, false, {
            fileName: "[project]/src/components/trades-sidebar/index.tsx",
            lineNumber: 277,
            columnNumber: 11
        }, this);
        $[48] = selectedExitPlan;
        $[49] = t14;
    } else {
        t14 = $[49];
    }
    let t15;
    if ($[50] !== t10 || $[51] !== t11 || $[52] !== t12 || $[53] !== t14 || $[54] !== t9) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: sidebarRef,
            className: "flex h-full flex-col border-l bg-background",
            style: t8,
            children: [
                t9,
                t10,
                t11,
                t12,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/trades-sidebar/index.tsx",
            lineNumber: 285,
            columnNumber: 11
        }, this);
        $[50] = t10;
        $[51] = t11;
        $[52] = t12;
        $[53] = t14;
        $[54] = t9;
        $[55] = t15;
    } else {
        t15 = $[55];
    }
    return t15;
}
_s(TradesSidebar, "cEFq9sS3TiLxaXV49I4poZPQtjc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trades$2d$sidebar$2f$use$2d$trading$2d$dashboard$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTradingDashboardData"]
    ];
});
_c = TradesSidebar;
var _c;
__turbopack_context__.k.register(_c, "TradesSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/trades-sidebar.tsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trades$2d$sidebar$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/trades-sidebar/index.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/trades-sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trades$2d$sidebar$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trades$2d$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/trades-sidebar.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trades$2d$sidebar$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/trades-sidebar/index.tsx [app-client] (ecmascript)");
}),
"[project]/src/components/ui/light-rays.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LightRays",
    ()=>LightRays
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const createRays = (count, cycle)=>{
    if (count <= 0) return [];
    return Array.from({
        length: count
    }, (_, index)=>{
        const left = 8 + Math.random() * 84;
        const rotate = -28 + Math.random() * 56;
        const width = 160 + Math.random() * 160;
        const swing = 0.8 + Math.random() * 1.8;
        const delay = Math.random() * cycle;
        const duration = cycle * (0.75 + Math.random() * 0.5);
        const intensity = 0.6 + Math.random() * 0.5;
        return {
            id: `${index}-${Math.round(left * 10)}`,
            left,
            rotate,
            width,
            swing,
            delay,
            duration,
            intensity
        };
    });
};
const Ray = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(24);
    if ($[0] !== "7cef3f8cd8b0b53b64bf91442b2f395d4546205c26c9833f48a1e7443fb1de3c") {
        for(let $i = 0; $i < 24; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7cef3f8cd8b0b53b64bf91442b2f395d4546205c26c9833f48a1e7443fb1de3c";
    }
    const { left, rotate, width, swing, delay, duration, intensity } = t0;
    const t1 = `${left}%`;
    const t2 = `${width}px`;
    let t3;
    if ($[1] !== t1 || $[2] !== t2) {
        t3 = {
            "--ray-left": t1,
            "--ray-width": t2
        };
        $[1] = t1;
        $[2] = t2;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const t4 = t3;
    let t5;
    if ($[4] !== rotate) {
        t5 = {
            rotate
        };
        $[4] = rotate;
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    let t6;
    if ($[6] !== intensity) {
        t6 = [
            0,
            intensity,
            0
        ];
        $[6] = intensity;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    const t7 = rotate - swing;
    const t8 = rotate + swing;
    const t9 = rotate - swing;
    let t10;
    if ($[8] !== t7 || $[9] !== t8 || $[10] !== t9) {
        t10 = [
            t7,
            t8,
            t9
        ];
        $[8] = t7;
        $[9] = t8;
        $[10] = t9;
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] !== t10 || $[13] !== t6) {
        t11 = {
            opacity: t6,
            rotate: t10
        };
        $[12] = t10;
        $[13] = t6;
        $[14] = t11;
    } else {
        t11 = $[14];
    }
    const t12 = duration * 0.1;
    let t13;
    if ($[15] !== delay || $[16] !== duration || $[17] !== t12) {
        t13 = {
            duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
            repeatDelay: t12
        };
        $[15] = delay;
        $[16] = duration;
        $[17] = t12;
        $[18] = t13;
    } else {
        t13 = $[18];
    }
    let t14;
    if ($[19] !== t11 || $[20] !== t13 || $[21] !== t4 || $[22] !== t5) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "pointer-events-none absolute -top-[12%] left-[var(--ray-left)] h-[var(--light-rays-length)] w-[var(--ray-width)] origin-top -translate-x-1/2 rounded-full bg-gradient-to-b from-[color-mix(in_srgb,var(--light-rays-color)_70%,transparent)] to-transparent opacity-0 mix-blend-screen blur-[var(--light-rays-blur)]",
            style: t4,
            initial: t5,
            animate: t11,
            transition: t13
        }, void 0, false, {
            fileName: "[project]/src/components/ui/light-rays.tsx",
            lineNumber: 141,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t11;
        $[20] = t13;
        $[21] = t4;
        $[22] = t5;
        $[23] = t14;
    } else {
        t14 = $[23];
    }
    return t14;
};
_c = Ray;
function LightRays(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(37);
    if ($[0] !== "7cef3f8cd8b0b53b64bf91442b2f395d4546205c26c9833f48a1e7443fb1de3c") {
        for(let $i = 0; $i < 37; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7cef3f8cd8b0b53b64bf91442b2f395d4546205c26c9833f48a1e7443fb1de3c";
    }
    let className;
    let props;
    let ref;
    let style;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    if ($[1] !== t0) {
        ({ className, style, count: t1, color: t2, blur: t3, speed: t4, length: t5, ref, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
        $[4] = ref;
        $[5] = style;
        $[6] = t1;
        $[7] = t2;
        $[8] = t3;
        $[9] = t4;
        $[10] = t5;
    } else {
        className = $[2];
        props = $[3];
        ref = $[4];
        style = $[5];
        t1 = $[6];
        t2 = $[7];
        t3 = $[8];
        t4 = $[9];
        t5 = $[10];
    }
    const count = t1 === undefined ? 7 : t1;
    const color = t2 === undefined ? "rgba(160, 210, 255, 0.2)" : t2;
    const blur = t3 === undefined ? 36 : t3;
    const speed = t4 === undefined ? 14 : t4;
    const length = t5 === undefined ? "70vh" : t5;
    let t6;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = [];
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    const [rays, setRays] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t6);
    const cycleDuration = Math.max(speed, 0.1);
    let t7;
    let t8;
    if ($[12] !== count || $[13] !== cycleDuration) {
        t7 = ({
            "LightRays[useEffect()]": ()=>{
                setRays(createRays(count, cycleDuration));
            }
        })["LightRays[useEffect()]"];
        t8 = [
            count,
            cycleDuration
        ];
        $[12] = count;
        $[13] = cycleDuration;
        $[14] = t7;
        $[15] = t8;
    } else {
        t7 = $[14];
        t8 = $[15];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t7, t8);
    let t9;
    if ($[16] !== className) {
        t9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pointer-events-none absolute inset-0 isolate overflow-hidden rounded-[inherit]", className);
        $[16] = className;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    const t10 = `${blur}px`;
    let t11;
    if ($[18] !== color || $[19] !== length || $[20] !== style || $[21] !== t10) {
        t11 = {
            "--light-rays-color": color,
            "--light-rays-blur": t10,
            "--light-rays-length": length,
            ...style
        };
        $[18] = color;
        $[19] = length;
        $[20] = style;
        $[21] = t10;
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    const t12 = t11;
    let t13;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = {
            background: "radial-gradient(circle at 20% 15%, color-mix(in srgb, var(--light-rays-color) 45%, transparent), transparent 70%)"
        };
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    let t14;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "aria-hidden": true,
            className: "absolute inset-0 opacity-60",
            style: t13
        }, void 0, false, {
            fileName: "[project]/src/components/ui/light-rays.tsx",
            lineNumber: 271,
            columnNumber: 11
        }, this);
        $[24] = t14;
    } else {
        t14 = $[24];
    }
    let t15;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = {
            background: "radial-gradient(circle at 80% 10%, color-mix(in srgb, var(--light-rays-color) 35%, transparent), transparent 75%)"
        };
        $[25] = t15;
    } else {
        t15 = $[25];
    }
    let t16;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "aria-hidden": true,
            className: "absolute inset-0 opacity-60",
            style: t15
        }, void 0, false, {
            fileName: "[project]/src/components/ui/light-rays.tsx",
            lineNumber: 287,
            columnNumber: 11
        }, this);
        $[26] = t16;
    } else {
        t16 = $[26];
    }
    let t17;
    if ($[27] !== rays) {
        t17 = rays.map(_LightRaysRaysMap);
        $[27] = rays;
        $[28] = t17;
    } else {
        t17 = $[28];
    }
    let t18;
    if ($[29] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 overflow-hidden",
            children: [
                t14,
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/light-rays.tsx",
            lineNumber: 302,
            columnNumber: 11
        }, this);
        $[29] = t17;
        $[30] = t18;
    } else {
        t18 = $[30];
    }
    let t19;
    if ($[31] !== props || $[32] !== ref || $[33] !== t12 || $[34] !== t18 || $[35] !== t9) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: t9,
            style: t12,
            ...props,
            children: t18
        }, void 0, false, {
            fileName: "[project]/src/components/ui/light-rays.tsx",
            lineNumber: 310,
            columnNumber: 11
        }, this);
        $[31] = props;
        $[32] = ref;
        $[33] = t12;
        $[34] = t18;
        $[35] = t9;
        $[36] = t19;
    } else {
        t19 = $[36];
    }
    return t19;
}
_s(LightRays, "nOwz92w+VASRXoFtpgXwYvZ5hqQ=");
_c1 = LightRays;
function _LightRaysRaysMap(ray) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Ray, {
        ...ray
    }, ray.id, false, {
        fileName: "[project]/src/components/ui/light-rays.tsx",
        lineNumber: 323,
        columnNumber: 10
    }, this);
}
var _c, _c1;
__turbopack_context__.k.register(_c, "Ray");
__turbopack_context__.k.register(_c1, "LightRays");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useBoolean.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBoolean",
    ()=>useBoolean
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useBoolean(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "f6a8301400bcd4c1a21ef3f601e128a16fa2cba6ae8d3bfd95fa54e6c2074832") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f6a8301400bcd4c1a21ef3f601e128a16fa2cba6ae8d3bfd95fa54e6c2074832";
    }
    const initial = t0 === undefined ? false : t0;
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initial);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "useBoolean[setTrue]": ()=>setValue(true)
        })["useBoolean[setTrue]"];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const setTrue = t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "useBoolean[setFalse]": ()=>setValue(false)
        })["useBoolean[setFalse]"];
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const setFalse = t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "useBoolean[toggle]": ()=>setValue(_useBooleanToggleSetValue)
        })["useBoolean[toggle]"];
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const toggle = t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "useBoolean[set]": (next)=>setValue(next)
        })["useBoolean[set]"];
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    const set = t4;
    let t5;
    if ($[5] !== value) {
        t5 = {
            value,
            setTrue,
            setFalse,
            toggle,
            set
        };
        $[5] = value;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    return t5;
}
_s(useBoolean, "SfNoMBvK9aVYEr/zPo8IyelSSW4=");
function _useBooleanToggleSetValue(prev) {
    return !prev;
}
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$crypto$2d$tracker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/crypto-tracker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$performance$2d$graph$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/performance-graph.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trades$2d$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/trades-sidebar.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trades$2d$sidebar$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/trades-sidebar/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trades$2d$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/trades-sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$light$2d$rays$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/light-rays.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBoolean$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useBoolean.ts [app-client] (ecmascript)");
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "f83258442c9d3928d4241bd59c1030df0e28f2200c5e68f6ee0225cd2fccd299") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f83258442c9d3928d4241bd59c1030df0e28f2200c5e68f6ee0225cd2fccd299";
    }
    const { value: isSidebarExpanded, toggle: toggleSidebar } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBoolean$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBoolean"])(false);
    const sidebarOffset = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trades$2d$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRADES_SIDEBAR_COLLAPSED_WIDTH"]}px`;
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$light$2d$rays$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LightRays"], {}, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 25,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] !== isSidebarExpanded || $[3] !== toggleSidebar) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            isSidebarExpanded: isSidebarExpanded,
            onToggleSidebar: toggleSidebar
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, this);
        $[2] = isSidebarExpanded;
        $[3] = toggleSidebar;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            marginRight: sidebarOffset
        };
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$crypto$2d$tracker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 45,
            columnNumber: 10
        }, this);
        $[5] = t2;
        $[6] = t3;
    } else {
        t2 = $[5];
        t3 = $[6];
    }
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-0 flex-1 flex-col",
            style: t2,
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-h-0 flex-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$performance$2d$graph$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 54,
                        columnNumber: 103
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 54,
                    columnNumber: 71
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== isSidebarExpanded || $[9] !== toggleSidebar) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex min-h-0 flex-1",
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trades$2d$sidebar$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    isExpanded: isSidebarExpanded,
                    onToggle: toggleSidebar
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 61,
                    columnNumber: 60
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 61,
            columnNumber: 10
        }, this);
        $[8] = isSidebarExpanded;
        $[9] = toggleSidebar;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== t1 || $[12] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-screen flex-col overflow-hidden",
            children: [
                t0,
                t1,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[11] = t1;
        $[12] = t5;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    return t6;
}
_s(HomePage, "7uaAksHR1NwVnfb4x17k29Nv1gI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBoolean$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBoolean"]
    ];
});
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_a857312e._.js.map