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
"[project]/src/lib/config.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API_KEY_INDEX",
    ()=>API_KEY_INDEX,
    "BASE_URL",
    ()=>BASE_URL,
    "DEFAULT_SIMULATOR_OPTIONS",
    ()=>DEFAULT_SIMULATOR_OPTIONS,
    "IS_SIMULATION_ENABLED",
    ()=>IS_SIMULATION_ENABLED,
    "TRADING_MODE",
    ()=>TRADING_MODE
]);
const API_KEY_INDEX = Number(process.env.LIGHTER_API_KEY_INDEX ?? 2);
const BASE_URL = process.env.LIGHTER_BASE_URL ?? "https://mainnet.zklighter.elliot.ai";
const TRADING_MODE = process.env.TRADING_MODE ?? "live";
const DEFAULT_SIMULATOR_OPTIONS = {
    initialCapital: Number(process.env.SIM_INITIAL_CAPITAL ?? 10_000),
    quoteCurrency: process.env.SIM_QUOTE_CURRENCY ?? "USDT",
    latency: {
        minMs: Number(process.env.SIM_MIN_LATENCY_MS ?? 40),
        maxMs: Number(process.env.SIM_MAX_LATENCY_MS ?? 250)
    },
    slippage: {
        maxBasisPoints: Number(process.env.SIM_MAX_SLIPPAGE_BPS ?? 10)
    },
    fees: {
        makerBps: Number(process.env.SIM_MAKER_FEE_BPS ?? 2),
        takerBps: Number(process.env.SIM_TAKER_FEE_BPS ?? 5)
    },
    deterministicSeed: process.env.SIM_DETERMINISTIC_SEED ? Number(process.env.SIM_DETERMINISTIC_SEED) : undefined,
    refreshIntervalMs: Number(process.env.SIM_REFRESH_INTERVAL_MS ?? 3_000)
};
const IS_SIMULATION_ENABLED = TRADING_MODE === "simulated";
}),
"[project]/src/lib/markets.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MARKETS",
    ()=>MARKETS
]);
const MARKETS = {
    "BTC": {
        "marketId": 1,
        "priceDecimals": 10,
        "qtyDecimals": 100000,
        "clientOrderIndex": 0
    },
    "ETH": {
        "marketId": 0,
        "priceDecimals": 100,
        "qtyDecimals": 10000,
        "clientOrderIndex": 1
    },
    "SOL": {
        "marketId": 2,
        "priceDecimals": 1000,
        "qtyDecimals": 1000,
        "clientOrderIndex": 2
    }
};
}),
"[project]/lighter-sdk-ts/generated/rxjsStub.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Observable",
    ()=>Observable,
    "from",
    ()=>from,
    "map",
    ()=>map,
    "mergeMap",
    ()=>mergeMap,
    "of",
    ()=>of
]);
class Observable {
    promise;
    constructor(promise){
        this.promise = promise;
    }
    toPromise() {
        return this.promise;
    }
    pipe(callback) {
        return new Observable(this.promise.then(callback));
    }
}
function from(promise) {
    return new Observable(promise);
}
function of(value) {
    return new Observable(Promise.resolve(value));
}
function mergeMap(callback) {
    return (value)=>callback(value).toPromise();
}
function map(callback) {
    return callback;
}
}),
"[project]/lighter-sdk-ts/generated/http/isomorphic-fetch.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IsomorphicFetchHttpLibrary",
    ()=>IsomorphicFetchHttpLibrary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/http/http.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/rxjsStub.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$node_modules$2f$whatwg$2d$fetch$2f$fetch$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/node_modules/whatwg-fetch/fetch.js [app-route] (ecmascript)");
;
;
;
class IsomorphicFetchHttpLibrary {
    send(request) {
        let method = request.getHttpMethod().toString();
        let body = request.getBody();
        const resultPromise = fetch(request.getUrl(), {
            method: method,
            body: body,
            headers: request.getHeaders(),
            signal: request.getSignal(),
            credentials: "same-origin"
        }).then((resp)=>{
            const headers = {};
            resp.headers.forEach((value, name)=>{
                headers[name] = value;
            });
            const body = {
                text: ()=>resp.text(),
                binary: ()=>resp.blob()
            };
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ResponseContext"](resp.status, headers, body);
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(resultPromise);
    }
}
}),
"[project]/lighter-sdk-ts/generated/http/http.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HttpException",
    ()=>HttpException,
    "HttpInfo",
    ()=>HttpInfo,
    "HttpMethod",
    ()=>HttpMethod,
    "RequestContext",
    ()=>RequestContext,
    "ResponseContext",
    ()=>ResponseContext,
    "SelfDecodingBody",
    ()=>SelfDecodingBody,
    "wrapHttpLibrary",
    ()=>wrapHttpLibrary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/rxjsStub.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$isomorphic$2d$fetch$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/http/isomorphic-fetch.ts [app-route] (ecmascript)");
;
;
var HttpMethod = /*#__PURE__*/ function(HttpMethod) {
    HttpMethod["GET"] = "GET";
    HttpMethod["HEAD"] = "HEAD";
    HttpMethod["POST"] = "POST";
    HttpMethod["PUT"] = "PUT";
    HttpMethod["DELETE"] = "DELETE";
    HttpMethod["CONNECT"] = "CONNECT";
    HttpMethod["OPTIONS"] = "OPTIONS";
    HttpMethod["TRACE"] = "TRACE";
    HttpMethod["PATCH"] = "PATCH";
    return HttpMethod;
}({});
class HttpException extends Error {
    constructor(msg){
        super(msg);
    }
}
function ensureAbsoluteUrl(url) {
    if (url.startsWith("http://") || url.startsWith("https://")) {
        return url;
    }
    return window.location.origin + url;
}
class RequestContext {
    httpMethod;
    headers;
    body;
    url;
    signal;
    /**
     * Creates the request context using a http method and request resource url
     *
     * @param url url of the requested resource
     * @param httpMethod http method
     */ constructor(url, httpMethod){
        this.httpMethod = httpMethod;
        this.headers = {};
        this.body = undefined;
        this.signal = undefined;
        this.url = new URL(ensureAbsoluteUrl(url));
    }
    /*
     * Returns the url set in the constructor including the query string
     *
     */ getUrl() {
        return this.url.toString().endsWith("/") ? this.url.toString().slice(0, -1) : this.url.toString();
    }
    /**
     * Replaces the url set in the constructor with this url.
     *
     */ setUrl(url) {
        this.url = new URL(ensureAbsoluteUrl(url));
    }
    /**
     * Sets the body of the http request either as a string or FormData
     *
     * Note that setting a body on a HTTP GET, HEAD, DELETE, CONNECT or TRACE
     * request is discouraged.
     * https://httpwg.org/http-core/draft-ietf-httpbis-semantics-latest.html#rfc.section.7.3.1
     *
     * @param body the body of the request
     */ setBody(body) {
        this.body = body;
    }
    getHttpMethod() {
        return this.httpMethod;
    }
    getHeaders() {
        return this.headers;
    }
    getBody() {
        return this.body;
    }
    setQueryParam(name, value) {
        this.url.searchParams.set(name, value);
    }
    appendQueryParam(name, value) {
        this.url.searchParams.append(name, value);
    }
    /**
     * Sets a cookie with the name and value. NO check  for duplicate cookies is performed
     *
     */ addCookie(name, value) {
        if (!this.headers["Cookie"]) {
            this.headers["Cookie"] = "";
        }
        this.headers["Cookie"] += name + "=" + value + "; ";
    }
    setHeaderParam(key, value) {
        this.headers[key] = value;
    }
    setSignal(signal) {
        this.signal = signal;
    }
    getSignal() {
        return this.signal;
    }
}
class SelfDecodingBody {
    dataSource;
    constructor(dataSource){
        this.dataSource = dataSource;
    }
    binary() {
        return this.dataSource;
    }
    async text() {
        const data = await this.dataSource;
        // @ts-ignore
        if (data.text) {
            // @ts-ignore
            return data.text();
        }
        return new Promise((resolve, reject)=>{
            const reader = new FileReader();
            reader.addEventListener("load", ()=>resolve(reader.result));
            reader.addEventListener("error", ()=>reject(reader.error));
            reader.readAsText(data);
        });
    }
}
class ResponseContext {
    httpStatusCode;
    headers;
    body;
    constructor(httpStatusCode, headers, body){
        this.httpStatusCode = httpStatusCode;
        this.headers = headers;
        this.body = body;
    }
    /**
     * Parse header value in the form `value; param1="value1"`
     *
     * E.g. for Content-Type or Content-Disposition
     * Parameter names are converted to lower case
     * The first parameter is returned with the key `""`
     */ getParsedHeader(headerName) {
        const result = {};
        if (!this.headers[headerName]) {
            return result;
        }
        const parameters = this.headers[headerName].split(";");
        for (const parameter of parameters){
            let [key, value] = parameter.split("=", 2);
            if (!key) {
                continue;
            }
            key = key.toLowerCase().trim();
            if (value === undefined) {
                result[""] = key;
            } else {
                value = value.trim();
                if (value.startsWith('"') && value.endsWith('"')) {
                    value = value.substring(1, value.length - 1);
                }
                result[key] = value;
            }
        }
        return result;
    }
    async getBodyAsFile() {
        const data = await this.body.binary();
        const fileName = this.getParsedHeader("content-disposition")["filename"] || "";
        const contentType = this.headers["content-type"] || "";
        try {
            return new File([
                data
            ], fileName, {
                type: contentType
            });
        } catch (error) {
            /** Fallback for when the File constructor is not available */ return Object.assign(data, {
                name: fileName,
                type: contentType
            });
        }
    }
    /**
     * Use a heuristic to get a body of unknown data structure.
     * Return as string if possible, otherwise as binary.
     */ getBodyAsAny() {
        try {
            return this.body.text();
        } catch  {}
        try {
            return this.body.binary();
        } catch  {}
        return Promise.resolve(undefined);
    }
}
function wrapHttpLibrary(promiseHttpLibrary) {
    return {
        send (request) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(promiseHttpLibrary.send(request));
        }
    };
}
class HttpInfo extends ResponseContext {
    data;
    constructor(httpStatusCode, headers, body, data){
        super(httpStatusCode, headers, body), this.data = data;
    }
}
}),
"[project]/lighter-sdk-ts/generated/auth/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiKeyAuthentication",
    ()=>ApiKeyAuthentication,
    "configureAuthMethods",
    ()=>configureAuthMethods
]);
class ApiKeyAuthentication {
    apiKey;
    /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */ constructor(apiKey){
        this.apiKey = apiKey;
    }
    getName() {
        return "apiKey";
    }
    applySecurityAuthentication(context) {
        context.setHeaderParam("Authorization", this.apiKey);
    }
}
function configureAuthMethods(config) {
    let authMethods = {};
    if (!config) {
        return authMethods;
    }
    authMethods["default"] = config["default"];
    if (config["apiKey"]) {
        authMethods["apiKey"] = new ApiKeyAuthentication(config["apiKey"]);
    }
    return authMethods;
}
}),
"[project]/lighter-sdk-ts/generated/models/Account.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "Account",
    ()=>Account
]);
class Account {
    'code';
    'message';
    'accountType';
    'index';
    'l1Address';
    'cancelAllTime';
    'totalOrderCount';
    'totalIsolatedOrderCount';
    'pendingOrderCount';
    'availableBalance';
    'status';
    'collateral';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "accountType",
            "baseName": "account_type",
            "type": "number",
            "format": "uint8"
        },
        {
            "name": "index",
            "baseName": "index",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "l1Address",
            "baseName": "l1_address",
            "type": "string",
            "format": ""
        },
        {
            "name": "cancelAllTime",
            "baseName": "cancel_all_time",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "totalOrderCount",
            "baseName": "total_order_count",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "totalIsolatedOrderCount",
            "baseName": "total_isolated_order_count",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "pendingOrderCount",
            "baseName": "pending_order_count",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "availableBalance",
            "baseName": "available_balance",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "number",
            "format": "uint8"
        },
        {
            "name": "collateral",
            "baseName": "collateral",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return Account.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/AccountApiKeys.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "AccountApiKeys",
    ()=>AccountApiKeys
]);
class AccountApiKeys {
    'code';
    'message';
    'apiKeys';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "apiKeys",
            "baseName": "api_keys",
            "type": "Array<ApiKey>",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return AccountApiKeys.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/AccountLimits.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "AccountLimits",
    ()=>AccountLimits
]);
class AccountLimits {
    'code';
    'message';
    'maxLlpPercentage';
    'userTier';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "maxLlpPercentage",
            "baseName": "max_llp_percentage",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "userTier",
            "baseName": "user_tier",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return AccountLimits.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/AccountMarginStats.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "AccountMarginStats",
    ()=>AccountMarginStats
]);
class AccountMarginStats {
    'collateral';
    'portfolioValue';
    'leverage';
    'availableBalance';
    'marginUsage';
    'buyingPower';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "collateral",
            "baseName": "collateral",
            "type": "string",
            "format": ""
        },
        {
            "name": "portfolioValue",
            "baseName": "portfolio_value",
            "type": "string",
            "format": ""
        },
        {
            "name": "leverage",
            "baseName": "leverage",
            "type": "string",
            "format": ""
        },
        {
            "name": "availableBalance",
            "baseName": "available_balance",
            "type": "string",
            "format": ""
        },
        {
            "name": "marginUsage",
            "baseName": "margin_usage",
            "type": "string",
            "format": ""
        },
        {
            "name": "buyingPower",
            "baseName": "buying_power",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return AccountMarginStats.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/AccountMarketStats.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "AccountMarketStats",
    ()=>AccountMarketStats
]);
class AccountMarketStats {
    'marketId';
    'dailyTradesCount';
    'dailyBaseTokenVolume';
    'dailyQuoteTokenVolume';
    'weeklyTradesCount';
    'weeklyBaseTokenVolume';
    'weeklyQuoteTokenVolume';
    'monthlyTradesCount';
    'monthlyBaseTokenVolume';
    'monthlyQuoteTokenVolume';
    'totalTradesCount';
    'totalBaseTokenVolume';
    'totalQuoteTokenVolume';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "marketId",
            "baseName": "market_id",
            "type": "number",
            "format": "uint8"
        },
        {
            "name": "dailyTradesCount",
            "baseName": "daily_trades_count",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "dailyBaseTokenVolume",
            "baseName": "daily_base_token_volume",
            "type": "number",
            "format": "double"
        },
        {
            "name": "dailyQuoteTokenVolume",
            "baseName": "daily_quote_token_volume",
            "type": "number",
            "format": "double"
        },
        {
            "name": "weeklyTradesCount",
            "baseName": "weekly_trades_count",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "weeklyBaseTokenVolume",
            "baseName": "weekly_base_token_volume",
            "type": "number",
            "format": "double"
        },
        {
            "name": "weeklyQuoteTokenVolume",
            "baseName": "weekly_quote_token_volume",
            "type": "number",
            "format": "double"
        },
        {
            "name": "monthlyTradesCount",
            "baseName": "monthly_trades_count",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "monthlyBaseTokenVolume",
            "baseName": "monthly_base_token_volume",
            "type": "number",
            "format": "double"
        },
        {
            "name": "monthlyQuoteTokenVolume",
            "baseName": "monthly_quote_token_volume",
            "type": "number",
            "format": "double"
        },
        {
            "name": "totalTradesCount",
            "baseName": "total_trades_count",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "totalBaseTokenVolume",
            "baseName": "total_base_token_volume",
            "type": "number",
            "format": "double"
        },
        {
            "name": "totalQuoteTokenVolume",
            "baseName": "total_quote_token_volume",
            "type": "number",
            "format": "double"
        }
    ];
    static getAttributeTypeMap() {
        return AccountMarketStats.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/AccountMetadata.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "AccountMetadata",
    ()=>AccountMetadata
]);
class AccountMetadata {
    'accountIndex';
    'name';
    'description';
    /**
    *  Remove After FE uses L1 meta endpoint
    */ 'canInvite';
    /**
    *  Remove After FE uses L1 meta endpoint
    */ 'referralPointsPercentage';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "accountIndex",
            "baseName": "account_index",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "canInvite",
            "baseName": "can_invite",
            "type": "boolean",
            "format": "boolean"
        },
        {
            "name": "referralPointsPercentage",
            "baseName": "referral_points_percentage",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return AccountMetadata.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/AccountMetadatas.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "AccountMetadatas",
    ()=>AccountMetadatas
]);
class AccountMetadatas {
    'code';
    'message';
    'accountMetadatas';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "accountMetadatas",
            "baseName": "account_metadatas",
            "type": "Array<AccountMetadata>",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return AccountMetadatas.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/AccountPnL.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "AccountPnL",
    ()=>AccountPnL
]);
class AccountPnL {
    'code';
    'message';
    'resolution';
    'pnl';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "resolution",
            "baseName": "resolution",
            "type": "string",
            "format": ""
        },
        {
            "name": "pnl",
            "baseName": "pnl",
            "type": "Array<PnLEntry>",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return AccountPnL.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/AccountPosition.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "AccountPosition",
    ()=>AccountPosition
]);
class AccountPosition {
    'marketId';
    'symbol';
    'initialMarginFraction';
    'openOrderCount';
    'pendingOrderCount';
    'positionTiedOrderCount';
    'sign';
    'position';
    'avgEntryPrice';
    'positionValue';
    'unrealizedPnl';
    'realizedPnl';
    'liquidationPrice';
    'totalFundingPaidOut';
    'marginMode';
    'allocatedMargin';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "marketId",
            "baseName": "market_id",
            "type": "number",
            "format": "uint8"
        },
        {
            "name": "symbol",
            "baseName": "symbol",
            "type": "string",
            "format": ""
        },
        {
            "name": "initialMarginFraction",
            "baseName": "initial_margin_fraction",
            "type": "string",
            "format": ""
        },
        {
            "name": "openOrderCount",
            "baseName": "open_order_count",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "pendingOrderCount",
            "baseName": "pending_order_count",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "positionTiedOrderCount",
            "baseName": "position_tied_order_count",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "sign",
            "baseName": "sign",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "position",
            "baseName": "position",
            "type": "string",
            "format": ""
        },
        {
            "name": "avgEntryPrice",
            "baseName": "avg_entry_price",
            "type": "string",
            "format": ""
        },
        {
            "name": "positionValue",
            "baseName": "position_value",
            "type": "string",
            "format": ""
        },
        {
            "name": "unrealizedPnl",
            "baseName": "unrealized_pnl",
            "type": "string",
            "format": ""
        },
        {
            "name": "realizedPnl",
            "baseName": "realized_pnl",
            "type": "string",
            "format": ""
        },
        {
            "name": "liquidationPrice",
            "baseName": "liquidation_price",
            "type": "string",
            "format": ""
        },
        {
            "name": "totalFundingPaidOut",
            "baseName": "total_funding_paid_out",
            "type": "string",
            "format": ""
        },
        {
            "name": "marginMode",
            "baseName": "margin_mode",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "allocatedMargin",
            "baseName": "allocated_margin",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return AccountPosition.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/AccountStats.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "AccountStats",
    ()=>AccountStats
]);
class AccountStats {
    'collateral';
    'portfolioValue';
    'leverage';
    'availableBalance';
    'marginUsage';
    'buyingPower';
    'crossStats';
    'totalStats';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "collateral",
            "baseName": "collateral",
            "type": "string",
            "format": ""
        },
        {
            "name": "portfolioValue",
            "baseName": "portfolio_value",
            "type": "string",
            "format": ""
        },
        {
            "name": "leverage",
            "baseName": "leverage",
            "type": "string",
            "format": ""
        },
        {
            "name": "availableBalance",
            "baseName": "available_balance",
            "type": "string",
            "format": ""
        },
        {
            "name": "marginUsage",
            "baseName": "margin_usage",
            "type": "string",
            "format": ""
        },
        {
            "name": "buyingPower",
            "baseName": "buying_power",
            "type": "string",
            "format": ""
        },
        {
            "name": "crossStats",
            "baseName": "cross_stats",
            "type": "AccountMarginStats",
            "format": ""
        },
        {
            "name": "totalStats",
            "baseName": "total_stats",
            "type": "AccountMarginStats",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return AccountStats.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/AccountTradeStats.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "AccountTradeStats",
    ()=>AccountTradeStats
]);
class AccountTradeStats {
    'dailyTradesCount';
    'dailyVolume';
    'weeklyTradesCount';
    'weeklyVolume';
    'monthlyTradesCount';
    'monthlyVolume';
    'totalTradesCount';
    'totalVolume';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "dailyTradesCount",
            "baseName": "daily_trades_count",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "dailyVolume",
            "baseName": "daily_volume",
            "type": "number",
            "format": "double"
        },
        {
            "name": "weeklyTradesCount",
            "baseName": "weekly_trades_count",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "weeklyVolume",
            "baseName": "weekly_volume",
            "type": "number",
            "format": "double"
        },
        {
            "name": "monthlyTradesCount",
            "baseName": "monthly_trades_count",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "monthlyVolume",
            "baseName": "monthly_volume",
            "type": "number",
            "format": "double"
        },
        {
            "name": "totalTradesCount",
            "baseName": "total_trades_count",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "totalVolume",
            "baseName": "total_volume",
            "type": "number",
            "format": "double"
        }
    ];
    static getAttributeTypeMap() {
        return AccountTradeStats.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/Announcement.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "Announcement",
    ()=>Announcement
]);
class Announcement {
    'title';
    'content';
    'createdAt';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "content",
            "baseName": "content",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "number",
            "format": "int64"
        }
    ];
    static getAttributeTypeMap() {
        return Announcement.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/Announcements.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "Announcements",
    ()=>Announcements
]);
class Announcements {
    'code';
    'message';
    'announcements';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "announcements",
            "baseName": "announcements",
            "type": "Array<Announcement>",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return Announcements.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/ApiKey.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "ApiKey",
    ()=>ApiKey
]);
class ApiKey {
    'accountIndex';
    'apiKeyIndex';
    'nonce';
    'publicKey';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "accountIndex",
            "baseName": "account_index",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "apiKeyIndex",
            "baseName": "api_key_index",
            "type": "number",
            "format": "uint8"
        },
        {
            "name": "nonce",
            "baseName": "nonce",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "publicKey",
            "baseName": "public_key",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return ApiKey.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/Block.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "Block",
    ()=>Block
]);
class Block {
    'commitment';
    'height';
    'stateRoot';
    'priorityOperations';
    'onChainL2Operations';
    'pendingOnChainOperationsPubData';
    'committedTxHash';
    'committedAt';
    'verifiedTxHash';
    'verifiedAt';
    'txs';
    'status';
    'size';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "commitment",
            "baseName": "commitment",
            "type": "string",
            "format": ""
        },
        {
            "name": "height",
            "baseName": "height",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "stateRoot",
            "baseName": "state_root",
            "type": "string",
            "format": ""
        },
        {
            "name": "priorityOperations",
            "baseName": "priority_operations",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "onChainL2Operations",
            "baseName": "on_chain_l2_operations",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "pendingOnChainOperationsPubData",
            "baseName": "pending_on_chain_operations_pub_data",
            "type": "string",
            "format": ""
        },
        {
            "name": "committedTxHash",
            "baseName": "committed_tx_hash",
            "type": "string",
            "format": ""
        },
        {
            "name": "committedAt",
            "baseName": "committed_at",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "verifiedTxHash",
            "baseName": "verified_tx_hash",
            "type": "string",
            "format": ""
        },
        {
            "name": "verifiedAt",
            "baseName": "verified_at",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "txs",
            "baseName": "txs",
            "type": "Array<Tx>",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number",
            "format": "uin16"
        }
    ];
    static getAttributeTypeMap() {
        return Block.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/Blocks.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "Blocks",
    ()=>Blocks
]);
class Blocks {
    'code';
    'message';
    'total';
    'blocks';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "blocks",
            "baseName": "blocks",
            "type": "Array<Block>",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return Blocks.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/BridgeSupportedNetwork.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "BridgeSupportedNetwork",
    ()=>BridgeSupportedNetwork
]);
class BridgeSupportedNetwork {
    'name';
    'chainId';
    'explorer';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "chainId",
            "baseName": "chain_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "explorer",
            "baseName": "explorer",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return BridgeSupportedNetwork.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/Candlestick.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "Candlestick",
    ()=>Candlestick
]);
class Candlestick {
    'timestamp';
    'open';
    'high';
    'low';
    'close';
    'volume0';
    'volume1';
    'lastTradeId';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "open",
            "baseName": "open",
            "type": "number",
            "format": "double"
        },
        {
            "name": "high",
            "baseName": "high",
            "type": "number",
            "format": "double"
        },
        {
            "name": "low",
            "baseName": "low",
            "type": "number",
            "format": "double"
        },
        {
            "name": "close",
            "baseName": "close",
            "type": "number",
            "format": "double"
        },
        {
            "name": "volume0",
            "baseName": "volume0",
            "type": "number",
            "format": "double"
        },
        {
            "name": "volume1",
            "baseName": "volume1",
            "type": "number",
            "format": "double"
        },
        {
            "name": "lastTradeId",
            "baseName": "last_trade_id",
            "type": "number",
            "format": "int64"
        }
    ];
    static getAttributeTypeMap() {
        return Candlestick.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/Candlesticks.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "Candlesticks",
    ()=>Candlesticks
]);
class Candlesticks {
    'code';
    'message';
    'resolution';
    'candlesticks';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "resolution",
            "baseName": "resolution",
            "type": "string",
            "format": ""
        },
        {
            "name": "candlesticks",
            "baseName": "candlesticks",
            "type": "Array<Candlestick>",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return Candlesticks.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/ContractAddress.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "ContractAddress",
    ()=>ContractAddress
]);
class ContractAddress {
    'name';
    'address';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return ContractAddress.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/CurrentHeight.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "CurrentHeight",
    ()=>CurrentHeight
]);
class CurrentHeight {
    'code';
    'message';
    'height';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "height",
            "baseName": "height",
            "type": "number",
            "format": "int64"
        }
    ];
    static getAttributeTypeMap() {
        return CurrentHeight.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/Cursor.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "Cursor",
    ()=>Cursor
]);
class Cursor {
    'nextCursor';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "nextCursor",
            "baseName": "next_cursor",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return Cursor.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/DailyReturn.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "DailyReturn",
    ()=>DailyReturn
]);
class DailyReturn {
    'timestamp';
    'dailyReturn';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "dailyReturn",
            "baseName": "daily_return",
            "type": "number",
            "format": "double"
        }
    ];
    static getAttributeTypeMap() {
        return DailyReturn.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/DepositHistory.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "DepositHistory",
    ()=>DepositHistory
]);
class DepositHistory {
    'code';
    'message';
    'deposits';
    'cursor';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "deposits",
            "baseName": "deposits",
            "type": "Array<DepositHistoryItem>",
            "format": ""
        },
        {
            "name": "cursor",
            "baseName": "cursor",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return DepositHistory.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/DepositHistoryItem.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "DepositHistoryItem",
    ()=>DepositHistoryItem,
    "DepositHistoryItemStatusEnum",
    ()=>DepositHistoryItemStatusEnum
]);
class DepositHistoryItem {
    'id';
    'amount';
    'timestamp';
    'status';
    'l1TxHash';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "string",
            "format": ""
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "DepositHistoryItemStatusEnum",
            "format": ""
        },
        {
            "name": "l1TxHash",
            "baseName": "l1_tx_hash",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return DepositHistoryItem.attributeTypeMap;
    }
    constructor(){}
}
var DepositHistoryItemStatusEnum = /*#__PURE__*/ function(DepositHistoryItemStatusEnum) {
    DepositHistoryItemStatusEnum["Failed"] = "failed";
    DepositHistoryItemStatusEnum["Pending"] = "pending";
    DepositHistoryItemStatusEnum["Completed"] = "completed";
    DepositHistoryItemStatusEnum["Claimable"] = "claimable";
    return DepositHistoryItemStatusEnum;
}({});
}),
"[project]/lighter-sdk-ts/generated/models/DetailedAccount.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "DetailedAccount",
    ()=>DetailedAccount
]);
class DetailedAccount {
    'code';
    'message';
    'accountType';
    'index';
    'l1Address';
    'cancelAllTime';
    'totalOrderCount';
    'totalIsolatedOrderCount';
    'pendingOrderCount';
    'availableBalance';
    'status';
    'collateral';
    'accountIndex';
    'name';
    'description';
    /**
    *  Remove After FE uses L1 meta endpoint
    */ 'canInvite';
    /**
    *  Remove After FE uses L1 meta endpoint
    */ 'referralPointsPercentage';
    'positions';
    'totalAssetValue';
    'crossAssetValue';
    'poolInfo';
    'shares';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "accountType",
            "baseName": "account_type",
            "type": "number",
            "format": "uint8"
        },
        {
            "name": "index",
            "baseName": "index",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "l1Address",
            "baseName": "l1_address",
            "type": "string",
            "format": ""
        },
        {
            "name": "cancelAllTime",
            "baseName": "cancel_all_time",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "totalOrderCount",
            "baseName": "total_order_count",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "totalIsolatedOrderCount",
            "baseName": "total_isolated_order_count",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "pendingOrderCount",
            "baseName": "pending_order_count",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "availableBalance",
            "baseName": "available_balance",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "number",
            "format": "uint8"
        },
        {
            "name": "collateral",
            "baseName": "collateral",
            "type": "string",
            "format": ""
        },
        {
            "name": "accountIndex",
            "baseName": "account_index",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "canInvite",
            "baseName": "can_invite",
            "type": "boolean",
            "format": "boolean"
        },
        {
            "name": "referralPointsPercentage",
            "baseName": "referral_points_percentage",
            "type": "string",
            "format": ""
        },
        {
            "name": "positions",
            "baseName": "positions",
            "type": "Array<AccountPosition>",
            "format": ""
        },
        {
            "name": "totalAssetValue",
            "baseName": "total_asset_value",
            "type": "string",
            "format": ""
        },
        {
            "name": "crossAssetValue",
            "baseName": "cross_asset_value",
            "type": "string",
            "format": ""
        },
        {
            "name": "poolInfo",
            "baseName": "pool_info",
            "type": "PublicPoolInfo",
            "format": ""
        },
        {
            "name": "shares",
            "baseName": "shares",
            "type": "Array<PublicPoolShare>",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return DetailedAccount.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/DetailedAccounts.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "DetailedAccounts",
    ()=>DetailedAccounts
]);
class DetailedAccounts {
    'code';
    'message';
    'total';
    'accounts';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "accounts",
            "baseName": "accounts",
            "type": "Array<DetailedAccount>",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return DetailedAccounts.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/DetailedCandlestick.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "DetailedCandlestick",
    ()=>DetailedCandlestick
]);
class DetailedCandlestick {
    'timestamp';
    'open';
    'high';
    'low';
    'close';
    'volume0';
    'volume1';
    'lastTradeId';
    'tradeCount';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "open",
            "baseName": "open",
            "type": "number",
            "format": "double"
        },
        {
            "name": "high",
            "baseName": "high",
            "type": "number",
            "format": "double"
        },
        {
            "name": "low",
            "baseName": "low",
            "type": "number",
            "format": "double"
        },
        {
            "name": "close",
            "baseName": "close",
            "type": "number",
            "format": "double"
        },
        {
            "name": "volume0",
            "baseName": "volume0",
            "type": "number",
            "format": "double"
        },
        {
            "name": "volume1",
            "baseName": "volume1",
            "type": "number",
            "format": "double"
        },
        {
            "name": "lastTradeId",
            "baseName": "last_trade_id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "tradeCount",
            "baseName": "trade_count",
            "type": "number",
            "format": "int64"
        }
    ];
    static getAttributeTypeMap() {
        return DetailedCandlestick.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/EnrichedTx.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "EnrichedTx",
    ()=>EnrichedTx
]);
class EnrichedTx {
    'code';
    'message';
    'hash';
    'type';
    'info';
    'eventInfo';
    'status';
    'transactionIndex';
    'l1Address';
    'accountIndex';
    'nonce';
    'expireAt';
    'blockHeight';
    'queuedAt';
    'executedAt';
    'sequenceIndex';
    'parentHash';
    'committedAt';
    'verifiedAt';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "hash",
            "baseName": "hash",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "number",
            "format": "uint8"
        },
        {
            "name": "info",
            "baseName": "info",
            "type": "string",
            "format": ""
        },
        {
            "name": "eventInfo",
            "baseName": "event_info",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "transactionIndex",
            "baseName": "transaction_index",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "l1Address",
            "baseName": "l1_address",
            "type": "string",
            "format": ""
        },
        {
            "name": "accountIndex",
            "baseName": "account_index",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "nonce",
            "baseName": "nonce",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "expireAt",
            "baseName": "expire_at",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "blockHeight",
            "baseName": "block_height",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "queuedAt",
            "baseName": "queued_at",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "executedAt",
            "baseName": "executed_at",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "sequenceIndex",
            "baseName": "sequence_index",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "parentHash",
            "baseName": "parent_hash",
            "type": "string",
            "format": ""
        },
        {
            "name": "committedAt",
            "baseName": "committed_at",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "verifiedAt",
            "baseName": "verified_at",
            "type": "number",
            "format": "int64"
        }
    ];
    static getAttributeTypeMap() {
        return EnrichedTx.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/ExchangeStats.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "ExchangeStats",
    ()=>ExchangeStats
]);
class ExchangeStats {
    'code';
    'message';
    'total';
    'orderBookStats';
    'dailyUsdVolume';
    'dailyTradesCount';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "orderBookStats",
            "baseName": "order_book_stats",
            "type": "Array<OrderBookStats>",
            "format": ""
        },
        {
            "name": "dailyUsdVolume",
            "baseName": "daily_usd_volume",
            "type": "number",
            "format": "double"
        },
        {
            "name": "dailyTradesCount",
            "baseName": "daily_trades_count",
            "type": "number",
            "format": "int64"
        }
    ];
    static getAttributeTypeMap() {
        return ExchangeStats.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/ExportData.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "ExportData",
    ()=>ExportData
]);
class ExportData {
    'code';
    'message';
    'dataUrl';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "dataUrl",
            "baseName": "data_url",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return ExportData.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/Funding.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "Funding",
    ()=>Funding
]);
class Funding {
    'timestamp';
    'value';
    'rate';
    'direction';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        },
        {
            "name": "rate",
            "baseName": "rate",
            "type": "string",
            "format": ""
        },
        {
            "name": "direction",
            "baseName": "direction",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return Funding.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/FundingRate.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "FundingRate",
    ()=>FundingRate,
    "FundingRateExchangeEnum",
    ()=>FundingRateExchangeEnum
]);
class FundingRate {
    'marketId';
    'exchange';
    'symbol';
    'rate';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "marketId",
            "baseName": "market_id",
            "type": "number",
            "format": "uint8"
        },
        {
            "name": "exchange",
            "baseName": "exchange",
            "type": "FundingRateExchangeEnum",
            "format": ""
        },
        {
            "name": "symbol",
            "baseName": "symbol",
            "type": "string",
            "format": ""
        },
        {
            "name": "rate",
            "baseName": "rate",
            "type": "number",
            "format": "double"
        }
    ];
    static getAttributeTypeMap() {
        return FundingRate.attributeTypeMap;
    }
    constructor(){}
}
var FundingRateExchangeEnum = /*#__PURE__*/ function(FundingRateExchangeEnum) {
    FundingRateExchangeEnum["Binance"] = "binance";
    FundingRateExchangeEnum["Bybit"] = "bybit";
    FundingRateExchangeEnum["Hyperliquid"] = "hyperliquid";
    FundingRateExchangeEnum["Lighter"] = "lighter";
    return FundingRateExchangeEnum;
}({});
}),
"[project]/lighter-sdk-ts/generated/models/FundingRates.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "FundingRates",
    ()=>FundingRates
]);
class FundingRates {
    'code';
    'message';
    'fundingRates';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "fundingRates",
            "baseName": "funding_rates",
            "type": "Array<FundingRate>",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return FundingRates.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/Fundings.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "Fundings",
    ()=>Fundings
]);
class Fundings {
    'code';
    'message';
    'resolution';
    'fundings';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "resolution",
            "baseName": "resolution",
            "type": "string",
            "format": ""
        },
        {
            "name": "fundings",
            "baseName": "fundings",
            "type": "Array<Funding>",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return Fundings.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/L1Metadata.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "L1Metadata",
    ()=>L1Metadata
]);
class L1Metadata {
    'l1Address';
    'canInvite';
    'referralPointsPercentage';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "l1Address",
            "baseName": "l1_address",
            "type": "string",
            "format": ""
        },
        {
            "name": "canInvite",
            "baseName": "can_invite",
            "type": "boolean",
            "format": "boolean"
        },
        {
            "name": "referralPointsPercentage",
            "baseName": "referral_points_percentage",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return L1Metadata.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/L1ProviderInfo.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "L1ProviderInfo",
    ()=>L1ProviderInfo
]);
class L1ProviderInfo {
    'chainId';
    'networkId';
    'latestBlockNumber';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "chainId",
            "baseName": "chainId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "networkId",
            "baseName": "networkId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "latestBlockNumber",
            "baseName": "latestBlockNumber",
            "type": "number",
            "format": "int64"
        }
    ];
    static getAttributeTypeMap() {
        return L1ProviderInfo.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/LiqTrade.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "LiqTrade",
    ()=>LiqTrade
]);
class LiqTrade {
    'price';
    'size';
    'takerFee';
    'makerFee';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "price",
            "baseName": "price",
            "type": "string",
            "format": ""
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "string",
            "format": ""
        },
        {
            "name": "takerFee",
            "baseName": "taker_fee",
            "type": "string",
            "format": ""
        },
        {
            "name": "makerFee",
            "baseName": "maker_fee",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return LiqTrade.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/Liquidation.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "Liquidation",
    ()=>Liquidation,
    "LiquidationTypeEnum",
    ()=>LiquidationTypeEnum
]);
class Liquidation {
    'id';
    'marketId';
    'type';
    'trade';
    'info';
    'executedAt';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "marketId",
            "baseName": "market_id",
            "type": "number",
            "format": "uint8"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "LiquidationTypeEnum",
            "format": ""
        },
        {
            "name": "trade",
            "baseName": "trade",
            "type": "LiqTrade",
            "format": ""
        },
        {
            "name": "info",
            "baseName": "info",
            "type": "LiquidationInfo",
            "format": ""
        },
        {
            "name": "executedAt",
            "baseName": "executed_at",
            "type": "number",
            "format": "int64"
        }
    ];
    static getAttributeTypeMap() {
        return Liquidation.attributeTypeMap;
    }
    constructor(){}
}
var LiquidationTypeEnum = /*#__PURE__*/ function(LiquidationTypeEnum) {
    LiquidationTypeEnum["Partial"] = "partial";
    LiquidationTypeEnum["Deleverage"] = "deleverage";
    return LiquidationTypeEnum;
}({});
}),
"[project]/lighter-sdk-ts/generated/models/LiquidationInfo.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "LiquidationInfo",
    ()=>LiquidationInfo
]);
class LiquidationInfo {
    'positions';
    'riskInfoBefore';
    'riskInfoAfter';
    'markPrices';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "positions",
            "baseName": "positions",
            "type": "Array<AccountPosition>",
            "format": ""
        },
        {
            "name": "riskInfoBefore",
            "baseName": "risk_info_before",
            "type": "RiskInfo",
            "format": ""
        },
        {
            "name": "riskInfoAfter",
            "baseName": "risk_info_after",
            "type": "RiskInfo",
            "format": ""
        },
        {
            "name": "markPrices",
            "baseName": "mark_prices",
            "type": "{ [key: string]: number; }",
            "format": "double"
        }
    ];
    static getAttributeTypeMap() {
        return LiquidationInfo.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/LiquidationInfos.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "LiquidationInfos",
    ()=>LiquidationInfos
]);
class LiquidationInfos {
    'code';
    'message';
    'liquidations';
    'nextCursor';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "liquidations",
            "baseName": "liquidations",
            "type": "Array<Liquidation>",
            "format": ""
        },
        {
            "name": "nextCursor",
            "baseName": "next_cursor",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return LiquidationInfos.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/MarketInfo.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "MarketInfo",
    ()=>MarketInfo
]);
class MarketInfo {
    'marketId';
    'indexPrice';
    'markPrice';
    'openInterest';
    'lastTradePrice';
    'currentFundingRate';
    'fundingRate';
    'fundingTimestamp';
    'dailyBaseTokenVolume';
    'dailyQuoteTokenVolume';
    'dailyPriceLow';
    'dailyPriceHigh';
    'dailyPriceChange';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "marketId",
            "baseName": "market_id",
            "type": "number",
            "format": "uint8"
        },
        {
            "name": "indexPrice",
            "baseName": "index_price",
            "type": "string",
            "format": ""
        },
        {
            "name": "markPrice",
            "baseName": "mark_price",
            "type": "string",
            "format": ""
        },
        {
            "name": "openInterest",
            "baseName": "open_interest",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastTradePrice",
            "baseName": "last_trade_price",
            "type": "string",
            "format": ""
        },
        {
            "name": "currentFundingRate",
            "baseName": "current_funding_rate",
            "type": "string",
            "format": ""
        },
        {
            "name": "fundingRate",
            "baseName": "funding_rate",
            "type": "string",
            "format": ""
        },
        {
            "name": "fundingTimestamp",
            "baseName": "funding_timestamp",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "dailyBaseTokenVolume",
            "baseName": "daily_base_token_volume",
            "type": "number",
            "format": "double"
        },
        {
            "name": "dailyQuoteTokenVolume",
            "baseName": "daily_quote_token_volume",
            "type": "number",
            "format": "double"
        },
        {
            "name": "dailyPriceLow",
            "baseName": "daily_price_low",
            "type": "number",
            "format": "double"
        },
        {
            "name": "dailyPriceHigh",
            "baseName": "daily_price_high",
            "type": "number",
            "format": "double"
        },
        {
            "name": "dailyPriceChange",
            "baseName": "daily_price_change",
            "type": "number",
            "format": "double"
        }
    ];
    static getAttributeTypeMap() {
        return MarketInfo.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/NextNonce.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "NextNonce",
    ()=>NextNonce
]);
class NextNonce {
    'code';
    'message';
    'nonce';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "nonce",
            "baseName": "nonce",
            "type": "number",
            "format": "int64"
        }
    ];
    static getAttributeTypeMap() {
        return NextNonce.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/Order.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "Order",
    ()=>Order,
    "OrderStatusEnum",
    ()=>OrderStatusEnum,
    "OrderTimeInForceEnum",
    ()=>OrderTimeInForceEnum,
    "OrderTriggerStatusEnum",
    ()=>OrderTriggerStatusEnum,
    "OrderTypeEnum",
    ()=>OrderTypeEnum
]);
class Order {
    'orderIndex';
    'clientOrderIndex';
    'orderId';
    'clientOrderId';
    'marketIndex';
    'ownerAccountIndex';
    'initialBaseAmount';
    'price';
    'nonce';
    'remainingBaseAmount';
    'isAsk';
    'baseSize';
    'basePrice';
    'filledBaseAmount';
    'filledQuoteAmount';
    /**
    *  TODO: remove this
    */ 'side';
    'type';
    'timeInForce';
    'reduceOnly';
    'triggerPrice';
    'orderExpiry';
    'status';
    'triggerStatus';
    'triggerTime';
    'parentOrderIndex';
    'parentOrderId';
    'toTriggerOrderId0';
    'toTriggerOrderId1';
    'toCancelOrderId0';
    'blockHeight';
    'timestamp';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "orderIndex",
            "baseName": "order_index",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "clientOrderIndex",
            "baseName": "client_order_index",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "orderId",
            "baseName": "order_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "clientOrderId",
            "baseName": "client_order_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "marketIndex",
            "baseName": "market_index",
            "type": "number",
            "format": "uint8"
        },
        {
            "name": "ownerAccountIndex",
            "baseName": "owner_account_index",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "initialBaseAmount",
            "baseName": "initial_base_amount",
            "type": "string",
            "format": ""
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "string",
            "format": ""
        },
        {
            "name": "nonce",
            "baseName": "nonce",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "remainingBaseAmount",
            "baseName": "remaining_base_amount",
            "type": "string",
            "format": ""
        },
        {
            "name": "isAsk",
            "baseName": "is_ask",
            "type": "boolean",
            "format": "boolean"
        },
        {
            "name": "baseSize",
            "baseName": "base_size",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "basePrice",
            "baseName": "base_price",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "filledBaseAmount",
            "baseName": "filled_base_amount",
            "type": "string",
            "format": ""
        },
        {
            "name": "filledQuoteAmount",
            "baseName": "filled_quote_amount",
            "type": "string",
            "format": ""
        },
        {
            "name": "side",
            "baseName": "side",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "OrderTypeEnum",
            "format": ""
        },
        {
            "name": "timeInForce",
            "baseName": "time_in_force",
            "type": "OrderTimeInForceEnum",
            "format": ""
        },
        {
            "name": "reduceOnly",
            "baseName": "reduce_only",
            "type": "boolean",
            "format": "boolean"
        },
        {
            "name": "triggerPrice",
            "baseName": "trigger_price",
            "type": "string",
            "format": ""
        },
        {
            "name": "orderExpiry",
            "baseName": "order_expiry",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "OrderStatusEnum",
            "format": ""
        },
        {
            "name": "triggerStatus",
            "baseName": "trigger_status",
            "type": "OrderTriggerStatusEnum",
            "format": ""
        },
        {
            "name": "triggerTime",
            "baseName": "trigger_time",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "parentOrderIndex",
            "baseName": "parent_order_index",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "parentOrderId",
            "baseName": "parent_order_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "toTriggerOrderId0",
            "baseName": "to_trigger_order_id_0",
            "type": "string",
            "format": ""
        },
        {
            "name": "toTriggerOrderId1",
            "baseName": "to_trigger_order_id_1",
            "type": "string",
            "format": ""
        },
        {
            "name": "toCancelOrderId0",
            "baseName": "to_cancel_order_id_0",
            "type": "string",
            "format": ""
        },
        {
            "name": "blockHeight",
            "baseName": "block_height",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "number",
            "format": "int64"
        }
    ];
    static getAttributeTypeMap() {
        return Order.attributeTypeMap;
    }
    constructor(){}
}
var OrderTypeEnum = /*#__PURE__*/ function(OrderTypeEnum) {
    OrderTypeEnum["Limit"] = "limit";
    OrderTypeEnum["Market"] = "market";
    OrderTypeEnum["StopLoss"] = "stop-loss";
    OrderTypeEnum["StopLossLimit"] = "stop-loss-limit";
    OrderTypeEnum["TakeProfit"] = "take-profit";
    OrderTypeEnum["TakeProfitLimit"] = "take-profit-limit";
    OrderTypeEnum["Twap"] = "twap";
    OrderTypeEnum["TwapSub"] = "twap-sub";
    OrderTypeEnum["Liquidation"] = "liquidation";
    return OrderTypeEnum;
}({});
var OrderTimeInForceEnum = /*#__PURE__*/ function(OrderTimeInForceEnum) {
    OrderTimeInForceEnum["GoodTillTime"] = "good-till-time";
    OrderTimeInForceEnum["ImmediateOrCancel"] = "immediate-or-cancel";
    OrderTimeInForceEnum["PostOnly"] = "post-only";
    OrderTimeInForceEnum["Unknown"] = "Unknown";
    return OrderTimeInForceEnum;
}({});
var OrderStatusEnum = /*#__PURE__*/ function(OrderStatusEnum) {
    OrderStatusEnum["InProgress"] = "in-progress";
    OrderStatusEnum["Pending"] = "pending";
    OrderStatusEnum["Open"] = "open";
    OrderStatusEnum["Filled"] = "filled";
    OrderStatusEnum["Canceled"] = "canceled";
    OrderStatusEnum["CanceledPostOnly"] = "canceled-post-only";
    OrderStatusEnum["CanceledReduceOnly"] = "canceled-reduce-only";
    OrderStatusEnum["CanceledPositionNotAllowed"] = "canceled-position-not-allowed";
    OrderStatusEnum["CanceledMarginNotAllowed"] = "canceled-margin-not-allowed";
    OrderStatusEnum["CanceledTooMuchSlippage"] = "canceled-too-much-slippage";
    OrderStatusEnum["CanceledNotEnoughLiquidity"] = "canceled-not-enough-liquidity";
    OrderStatusEnum["CanceledSelfTrade"] = "canceled-self-trade";
    OrderStatusEnum["CanceledExpired"] = "canceled-expired";
    OrderStatusEnum["CanceledOco"] = "canceled-oco";
    OrderStatusEnum["CanceledChild"] = "canceled-child";
    OrderStatusEnum["CanceledLiquidation"] = "canceled-liquidation";
    return OrderStatusEnum;
}({});
var OrderTriggerStatusEnum = /*#__PURE__*/ function(OrderTriggerStatusEnum) {
    OrderTriggerStatusEnum["Na"] = "na";
    OrderTriggerStatusEnum["Ready"] = "ready";
    OrderTriggerStatusEnum["MarkPrice"] = "mark-price";
    OrderTriggerStatusEnum["Twap"] = "twap";
    OrderTriggerStatusEnum["ParentOrder"] = "parent-order";
    return OrderTriggerStatusEnum;
}({});
}),
"[project]/lighter-sdk-ts/generated/models/OrderBook.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "OrderBook",
    ()=>OrderBook,
    "OrderBookStatusEnum",
    ()=>OrderBookStatusEnum
]);
class OrderBook {
    'symbol';
    'marketId';
    'status';
    'takerFee';
    'makerFee';
    'liquidationFee';
    'minBaseAmount';
    'minQuoteAmount';
    'supportedSizeDecimals';
    'supportedPriceDecimals';
    'supportedQuoteDecimals';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "symbol",
            "baseName": "symbol",
            "type": "string",
            "format": ""
        },
        {
            "name": "marketId",
            "baseName": "market_id",
            "type": "number",
            "format": "uint8"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "OrderBookStatusEnum",
            "format": ""
        },
        {
            "name": "takerFee",
            "baseName": "taker_fee",
            "type": "string",
            "format": ""
        },
        {
            "name": "makerFee",
            "baseName": "maker_fee",
            "type": "string",
            "format": ""
        },
        {
            "name": "liquidationFee",
            "baseName": "liquidation_fee",
            "type": "string",
            "format": ""
        },
        {
            "name": "minBaseAmount",
            "baseName": "min_base_amount",
            "type": "string",
            "format": ""
        },
        {
            "name": "minQuoteAmount",
            "baseName": "min_quote_amount",
            "type": "string",
            "format": ""
        },
        {
            "name": "supportedSizeDecimals",
            "baseName": "supported_size_decimals",
            "type": "number",
            "format": "uint8"
        },
        {
            "name": "supportedPriceDecimals",
            "baseName": "supported_price_decimals",
            "type": "number",
            "format": "uint8"
        },
        {
            "name": "supportedQuoteDecimals",
            "baseName": "supported_quote_decimals",
            "type": "number",
            "format": "uint8"
        }
    ];
    static getAttributeTypeMap() {
        return OrderBook.attributeTypeMap;
    }
    constructor(){}
}
var OrderBookStatusEnum = /*#__PURE__*/ function(OrderBookStatusEnum) {
    OrderBookStatusEnum["Inactive"] = "inactive";
    OrderBookStatusEnum["Frozen"] = "frozen";
    OrderBookStatusEnum["Active"] = "active";
    return OrderBookStatusEnum;
}({});
}),
"[project]/lighter-sdk-ts/generated/models/OrderBookDepth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "OrderBookDepth",
    ()=>OrderBookDepth
]);
class OrderBookDepth {
    'code';
    'message';
    'asks';
    'bids';
    'offset';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "asks",
            "baseName": "asks",
            "type": "Array<PriceLevel>",
            "format": ""
        },
        {
            "name": "bids",
            "baseName": "bids",
            "type": "Array<PriceLevel>",
            "format": ""
        },
        {
            "name": "offset",
            "baseName": "offset",
            "type": "number",
            "format": "int64"
        }
    ];
    static getAttributeTypeMap() {
        return OrderBookDepth.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/OrderBookDetail.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "OrderBookDetail",
    ()=>OrderBookDetail,
    "OrderBookDetailStatusEnum",
    ()=>OrderBookDetailStatusEnum
]);
class OrderBookDetail {
    'symbol';
    'marketId';
    'status';
    'takerFee';
    'makerFee';
    'liquidationFee';
    'minBaseAmount';
    'minQuoteAmount';
    'supportedSizeDecimals';
    'supportedPriceDecimals';
    'supportedQuoteDecimals';
    'sizeDecimals';
    'priceDecimals';
    'quoteMultiplier';
    'defaultInitialMarginFraction';
    'minInitialMarginFraction';
    'maintenanceMarginFraction';
    'closeoutMarginFraction';
    'lastTradePrice';
    'dailyTradesCount';
    'dailyBaseTokenVolume';
    'dailyQuoteTokenVolume';
    'dailyPriceLow';
    'dailyPriceHigh';
    'dailyPriceChange';
    'openInterest';
    'dailyChart';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "symbol",
            "baseName": "symbol",
            "type": "string",
            "format": ""
        },
        {
            "name": "marketId",
            "baseName": "market_id",
            "type": "number",
            "format": "uint8"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "OrderBookDetailStatusEnum",
            "format": ""
        },
        {
            "name": "takerFee",
            "baseName": "taker_fee",
            "type": "string",
            "format": ""
        },
        {
            "name": "makerFee",
            "baseName": "maker_fee",
            "type": "string",
            "format": ""
        },
        {
            "name": "liquidationFee",
            "baseName": "liquidation_fee",
            "type": "string",
            "format": ""
        },
        {
            "name": "minBaseAmount",
            "baseName": "min_base_amount",
            "type": "string",
            "format": ""
        },
        {
            "name": "minQuoteAmount",
            "baseName": "min_quote_amount",
            "type": "string",
            "format": ""
        },
        {
            "name": "supportedSizeDecimals",
            "baseName": "supported_size_decimals",
            "type": "number",
            "format": "uint8"
        },
        {
            "name": "supportedPriceDecimals",
            "baseName": "supported_price_decimals",
            "type": "number",
            "format": "uint8"
        },
        {
            "name": "supportedQuoteDecimals",
            "baseName": "supported_quote_decimals",
            "type": "number",
            "format": "uint8"
        },
        {
            "name": "sizeDecimals",
            "baseName": "size_decimals",
            "type": "number",
            "format": "uint8"
        },
        {
            "name": "priceDecimals",
            "baseName": "price_decimals",
            "type": "number",
            "format": "uint8"
        },
        {
            "name": "quoteMultiplier",
            "baseName": "quote_multiplier",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "defaultInitialMarginFraction",
            "baseName": "default_initial_margin_fraction",
            "type": "number",
            "format": "uin16"
        },
        {
            "name": "minInitialMarginFraction",
            "baseName": "min_initial_margin_fraction",
            "type": "number",
            "format": "uin16"
        },
        {
            "name": "maintenanceMarginFraction",
            "baseName": "maintenance_margin_fraction",
            "type": "number",
            "format": "uin16"
        },
        {
            "name": "closeoutMarginFraction",
            "baseName": "closeout_margin_fraction",
            "type": "number",
            "format": "uin16"
        },
        {
            "name": "lastTradePrice",
            "baseName": "last_trade_price",
            "type": "number",
            "format": "double"
        },
        {
            "name": "dailyTradesCount",
            "baseName": "daily_trades_count",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "dailyBaseTokenVolume",
            "baseName": "daily_base_token_volume",
            "type": "number",
            "format": "double"
        },
        {
            "name": "dailyQuoteTokenVolume",
            "baseName": "daily_quote_token_volume",
            "type": "number",
            "format": "double"
        },
        {
            "name": "dailyPriceLow",
            "baseName": "daily_price_low",
            "type": "number",
            "format": "double"
        },
        {
            "name": "dailyPriceHigh",
            "baseName": "daily_price_high",
            "type": "number",
            "format": "double"
        },
        {
            "name": "dailyPriceChange",
            "baseName": "daily_price_change",
            "type": "number",
            "format": "double"
        },
        {
            "name": "openInterest",
            "baseName": "open_interest",
            "type": "number",
            "format": "double"
        },
        {
            "name": "dailyChart",
            "baseName": "daily_chart",
            "type": "{ [key: string]: number; }",
            "format": "double"
        }
    ];
    static getAttributeTypeMap() {
        return OrderBookDetail.attributeTypeMap;
    }
    constructor(){}
}
var OrderBookDetailStatusEnum = /*#__PURE__*/ function(OrderBookDetailStatusEnum) {
    OrderBookDetailStatusEnum["Inactive"] = "inactive";
    OrderBookDetailStatusEnum["Frozen"] = "frozen";
    OrderBookDetailStatusEnum["Active"] = "active";
    return OrderBookDetailStatusEnum;
}({});
}),
"[project]/lighter-sdk-ts/generated/models/OrderBookDetails.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "OrderBookDetails",
    ()=>OrderBookDetails
]);
class OrderBookDetails {
    'code';
    'message';
    'orderBookDetails';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "orderBookDetails",
            "baseName": "order_book_details",
            "type": "Array<OrderBookDetail>",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return OrderBookDetails.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/OrderBookOrders.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "OrderBookOrders",
    ()=>OrderBookOrders
]);
class OrderBookOrders {
    'code';
    'message';
    'totalAsks';
    'asks';
    'totalBids';
    'bids';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "totalAsks",
            "baseName": "total_asks",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "asks",
            "baseName": "asks",
            "type": "Array<SimpleOrder>",
            "format": ""
        },
        {
            "name": "totalBids",
            "baseName": "total_bids",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "bids",
            "baseName": "bids",
            "type": "Array<SimpleOrder>",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return OrderBookOrders.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/OrderBookStats.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "OrderBookStats",
    ()=>OrderBookStats
]);
class OrderBookStats {
    'symbol';
    'lastTradePrice';
    'dailyTradesCount';
    'dailyBaseTokenVolume';
    'dailyQuoteTokenVolume';
    'dailyPriceChange';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "symbol",
            "baseName": "symbol",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastTradePrice",
            "baseName": "last_trade_price",
            "type": "number",
            "format": "double"
        },
        {
            "name": "dailyTradesCount",
            "baseName": "daily_trades_count",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "dailyBaseTokenVolume",
            "baseName": "daily_base_token_volume",
            "type": "number",
            "format": "double"
        },
        {
            "name": "dailyQuoteTokenVolume",
            "baseName": "daily_quote_token_volume",
            "type": "number",
            "format": "double"
        },
        {
            "name": "dailyPriceChange",
            "baseName": "daily_price_change",
            "type": "number",
            "format": "double"
        }
    ];
    static getAttributeTypeMap() {
        return OrderBookStats.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/OrderBooks.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "OrderBooks",
    ()=>OrderBooks
]);
class OrderBooks {
    'code';
    'message';
    'orderBooks';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "orderBooks",
            "baseName": "order_books",
            "type": "Array<OrderBook>",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return OrderBooks.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/Orders.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "Orders",
    ()=>Orders
]);
class Orders {
    'code';
    'message';
    'nextCursor';
    'orders';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "nextCursor",
            "baseName": "next_cursor",
            "type": "string",
            "format": ""
        },
        {
            "name": "orders",
            "baseName": "orders",
            "type": "Array<Order>",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return Orders.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/PnLEntry.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "PnLEntry",
    ()=>PnLEntry
]);
class PnLEntry {
    'timestamp';
    'tradePnl';
    'inflow';
    'outflow';
    'poolPnl';
    'poolInflow';
    'poolOutflow';
    'poolTotalShares';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "tradePnl",
            "baseName": "trade_pnl",
            "type": "number",
            "format": "double"
        },
        {
            "name": "inflow",
            "baseName": "inflow",
            "type": "number",
            "format": "double"
        },
        {
            "name": "outflow",
            "baseName": "outflow",
            "type": "number",
            "format": "double"
        },
        {
            "name": "poolPnl",
            "baseName": "pool_pnl",
            "type": "number",
            "format": "double"
        },
        {
            "name": "poolInflow",
            "baseName": "pool_inflow",
            "type": "number",
            "format": "double"
        },
        {
            "name": "poolOutflow",
            "baseName": "pool_outflow",
            "type": "number",
            "format": "double"
        },
        {
            "name": "poolTotalShares",
            "baseName": "pool_total_shares",
            "type": "number",
            "format": "double"
        }
    ];
    static getAttributeTypeMap() {
        return PnLEntry.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/PositionFunding.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "PositionFunding",
    ()=>PositionFunding,
    "PositionFundingPositionSideEnum",
    ()=>PositionFundingPositionSideEnum
]);
class PositionFunding {
    'timestamp';
    'marketId';
    'fundingId';
    'change';
    'rate';
    'positionSize';
    'positionSide';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "marketId",
            "baseName": "market_id",
            "type": "number",
            "format": "uint8"
        },
        {
            "name": "fundingId",
            "baseName": "funding_id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "change",
            "baseName": "change",
            "type": "string",
            "format": ""
        },
        {
            "name": "rate",
            "baseName": "rate",
            "type": "string",
            "format": ""
        },
        {
            "name": "positionSize",
            "baseName": "position_size",
            "type": "string",
            "format": ""
        },
        {
            "name": "positionSide",
            "baseName": "position_side",
            "type": "PositionFundingPositionSideEnum",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return PositionFunding.attributeTypeMap;
    }
    constructor(){}
}
var PositionFundingPositionSideEnum = /*#__PURE__*/ function(PositionFundingPositionSideEnum) {
    PositionFundingPositionSideEnum["Long"] = "long";
    PositionFundingPositionSideEnum["Short"] = "short";
    return PositionFundingPositionSideEnum;
}({});
}),
"[project]/lighter-sdk-ts/generated/models/PositionFundings.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "PositionFundings",
    ()=>PositionFundings
]);
class PositionFundings {
    'code';
    'message';
    'positionFundings';
    'nextCursor';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "positionFundings",
            "baseName": "position_fundings",
            "type": "Array<PositionFunding>",
            "format": ""
        },
        {
            "name": "nextCursor",
            "baseName": "next_cursor",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return PositionFundings.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/PriceLevel.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "PriceLevel",
    ()=>PriceLevel
]);
class PriceLevel {
    'price';
    'size';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "price",
            "baseName": "price",
            "type": "string",
            "format": ""
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return PriceLevel.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/PublicPool.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "PublicPool",
    ()=>PublicPool
]);
class PublicPool {
    'code';
    'message';
    'accountType';
    'index';
    'l1Address';
    'cancelAllTime';
    'totalOrderCount';
    'totalIsolatedOrderCount';
    'pendingOrderCount';
    'availableBalance';
    'status';
    'collateral';
    'accountIndex';
    'name';
    'description';
    /**
    *  Remove After FE uses L1 meta endpoint
    */ 'canInvite';
    /**
    *  Remove After FE uses L1 meta endpoint
    */ 'referralPointsPercentage';
    'totalAssetValue';
    'crossAssetValue';
    'poolInfo';
    'accountShare';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "accountType",
            "baseName": "account_type",
            "type": "number",
            "format": "uint8"
        },
        {
            "name": "index",
            "baseName": "index",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "l1Address",
            "baseName": "l1_address",
            "type": "string",
            "format": ""
        },
        {
            "name": "cancelAllTime",
            "baseName": "cancel_all_time",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "totalOrderCount",
            "baseName": "total_order_count",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "totalIsolatedOrderCount",
            "baseName": "total_isolated_order_count",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "pendingOrderCount",
            "baseName": "pending_order_count",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "availableBalance",
            "baseName": "available_balance",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "number",
            "format": "uint8"
        },
        {
            "name": "collateral",
            "baseName": "collateral",
            "type": "string",
            "format": ""
        },
        {
            "name": "accountIndex",
            "baseName": "account_index",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "canInvite",
            "baseName": "can_invite",
            "type": "boolean",
            "format": "boolean"
        },
        {
            "name": "referralPointsPercentage",
            "baseName": "referral_points_percentage",
            "type": "string",
            "format": ""
        },
        {
            "name": "totalAssetValue",
            "baseName": "total_asset_value",
            "type": "string",
            "format": ""
        },
        {
            "name": "crossAssetValue",
            "baseName": "cross_asset_value",
            "type": "string",
            "format": ""
        },
        {
            "name": "poolInfo",
            "baseName": "pool_info",
            "type": "PublicPoolInfo",
            "format": ""
        },
        {
            "name": "accountShare",
            "baseName": "account_share",
            "type": "PublicPoolShare",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return PublicPool.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/PublicPoolInfo.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "PublicPoolInfo",
    ()=>PublicPoolInfo
]);
class PublicPoolInfo {
    'status';
    'operatorFee';
    'minOperatorShareRate';
    'totalShares';
    'operatorShares';
    'annualPercentageYield';
    'dailyReturns';
    'sharePrices';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "status",
            "baseName": "status",
            "type": "number",
            "format": "uint8"
        },
        {
            "name": "operatorFee",
            "baseName": "operator_fee",
            "type": "string",
            "format": ""
        },
        {
            "name": "minOperatorShareRate",
            "baseName": "min_operator_share_rate",
            "type": "string",
            "format": ""
        },
        {
            "name": "totalShares",
            "baseName": "total_shares",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "operatorShares",
            "baseName": "operator_shares",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "annualPercentageYield",
            "baseName": "annual_percentage_yield",
            "type": "number",
            "format": "double"
        },
        {
            "name": "dailyReturns",
            "baseName": "daily_returns",
            "type": "Array<DailyReturn>",
            "format": ""
        },
        {
            "name": "sharePrices",
            "baseName": "share_prices",
            "type": "Array<SharePrice>",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return PublicPoolInfo.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/PublicPoolMetadata.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "PublicPoolMetadata",
    ()=>PublicPoolMetadata
]);
class PublicPoolMetadata {
    'code';
    'message';
    'accountIndex';
    'accountType';
    'name';
    'l1Address';
    'annualPercentageYield';
    'status';
    'operatorFee';
    'totalAssetValue';
    'totalShares';
    'accountShare';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "accountIndex",
            "baseName": "account_index",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "accountType",
            "baseName": "account_type",
            "type": "number",
            "format": "uint8"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "l1Address",
            "baseName": "l1_address",
            "type": "string",
            "format": ""
        },
        {
            "name": "annualPercentageYield",
            "baseName": "annual_percentage_yield",
            "type": "number",
            "format": "double"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "number",
            "format": "uint8"
        },
        {
            "name": "operatorFee",
            "baseName": "operator_fee",
            "type": "string",
            "format": ""
        },
        {
            "name": "totalAssetValue",
            "baseName": "total_asset_value",
            "type": "string",
            "format": ""
        },
        {
            "name": "totalShares",
            "baseName": "total_shares",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "accountShare",
            "baseName": "account_share",
            "type": "PublicPoolShare",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return PublicPoolMetadata.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/PublicPoolShare.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "PublicPoolShare",
    ()=>PublicPoolShare
]);
class PublicPoolShare {
    'publicPoolIndex';
    'sharesAmount';
    'entryUsdc';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "publicPoolIndex",
            "baseName": "public_pool_index",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "sharesAmount",
            "baseName": "shares_amount",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "entryUsdc",
            "baseName": "entry_usdc",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return PublicPoolShare.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/PublicPools.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "PublicPools",
    ()=>PublicPools
]);
class PublicPools {
    'code';
    'message';
    'total';
    'publicPools';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "publicPools",
            "baseName": "public_pools",
            "type": "Array<PublicPool>",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return PublicPools.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/ReferralPointEntry.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "ReferralPointEntry",
    ()=>ReferralPointEntry
]);
class ReferralPointEntry {
    'l1Address';
    'totalPoints';
    'weekPoints';
    'totalRewardPoints';
    'weekRewardPoints';
    'rewardPointMultiplier';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "l1Address",
            "baseName": "l1_address",
            "type": "string",
            "format": ""
        },
        {
            "name": "totalPoints",
            "baseName": "total_points",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "weekPoints",
            "baseName": "week_points",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "totalRewardPoints",
            "baseName": "total_reward_points",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "weekRewardPoints",
            "baseName": "week_reward_points",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "rewardPointMultiplier",
            "baseName": "reward_point_multiplier",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return ReferralPointEntry.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/ReferralPoints.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "ReferralPoints",
    ()=>ReferralPoints
]);
class ReferralPoints {
    'referrals';
    'userTotalPoints';
    'userLastWeekPoints';
    'userTotalReferralRewardPoints';
    'userLastWeekReferralRewardPoints';
    'rewardPointMultiplier';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "referrals",
            "baseName": "referrals",
            "type": "Array<ReferralPointEntry>",
            "format": ""
        },
        {
            "name": "userTotalPoints",
            "baseName": "user_total_points",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "userLastWeekPoints",
            "baseName": "user_last_week_points",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "userTotalReferralRewardPoints",
            "baseName": "user_total_referral_reward_points",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "userLastWeekReferralRewardPoints",
            "baseName": "user_last_week_referral_reward_points",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "rewardPointMultiplier",
            "baseName": "reward_point_multiplier",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return ReferralPoints.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/ReqExportData.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "ReqExportData",
    ()=>ReqExportData,
    "ReqExportDataTypeEnum",
    ()=>ReqExportDataTypeEnum
]);
class ReqExportData {
    'auth';
    'accountIndex';
    'marketId';
    'type';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "auth",
            "baseName": "auth",
            "type": "string",
            "format": ""
        },
        {
            "name": "accountIndex",
            "baseName": "account_index",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "marketId",
            "baseName": "market_id",
            "type": "number",
            "format": "uint8"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ReqExportDataTypeEnum",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return ReqExportData.attributeTypeMap;
    }
    constructor(){}
}
var ReqExportDataTypeEnum = /*#__PURE__*/ function(ReqExportDataTypeEnum) {
    ReqExportDataTypeEnum["Funding"] = "funding";
    ReqExportDataTypeEnum["Trade"] = "trade";
    return ReqExportDataTypeEnum;
}({});
}),
"[project]/lighter-sdk-ts/generated/models/ReqGetAccount.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "ReqGetAccount",
    ()=>ReqGetAccount,
    "ReqGetAccountByEnum",
    ()=>ReqGetAccountByEnum
]);
class ReqGetAccount {
    'by';
    'value';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "by",
            "baseName": "by",
            "type": "ReqGetAccountByEnum",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return ReqGetAccount.attributeTypeMap;
    }
    constructor(){}
}
var ReqGetAccountByEnum = /*#__PURE__*/ function(ReqGetAccountByEnum) {
    ReqGetAccountByEnum["Index"] = "index";
    ReqGetAccountByEnum["L1Address"] = "l1_address";
    return ReqGetAccountByEnum;
}({});
}),
"[project]/lighter-sdk-ts/generated/models/ReqGetAccountActiveOrders.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "ReqGetAccountActiveOrders",
    ()=>ReqGetAccountActiveOrders
]);
class ReqGetAccountActiveOrders {
    'accountIndex';
    'marketId';
    /**
    *  made optional to support header auth clients
    */ 'auth';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "accountIndex",
            "baseName": "account_index",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "marketId",
            "baseName": "market_id",
            "type": "number",
            "format": "uint8"
        },
        {
            "name": "auth",
            "baseName": "auth",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return ReqGetAccountActiveOrders.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/ReqGetAccountApiKeys.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "ReqGetAccountApiKeys",
    ()=>ReqGetAccountApiKeys
]);
class ReqGetAccountApiKeys {
    'accountIndex';
    'apiKeyIndex';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "accountIndex",
            "baseName": "account_index",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "apiKeyIndex",
            "baseName": "api_key_index",
            "type": "number",
            "format": "uint8"
        }
    ];
    static getAttributeTypeMap() {
        return ReqGetAccountApiKeys.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/ReqGetAccountByL1Address.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "ReqGetAccountByL1Address",
    ()=>ReqGetAccountByL1Address
]);
class ReqGetAccountByL1Address {
    'l1Address';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "l1Address",
            "baseName": "l1_address",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return ReqGetAccountByL1Address.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/ReqGetAccountInactiveOrders.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "ReqGetAccountInactiveOrders",
    ()=>ReqGetAccountInactiveOrders
]);
class ReqGetAccountInactiveOrders {
    /**
    *  made optional to support header auth clients
    */ 'auth';
    'accountIndex';
    'marketId';
    'askFilter';
    'betweenTimestamps';
    'cursor';
    'limit';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "auth",
            "baseName": "auth",
            "type": "string",
            "format": ""
        },
        {
            "name": "accountIndex",
            "baseName": "account_index",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "marketId",
            "baseName": "market_id",
            "type": "number",
            "format": "uint8"
        },
        {
            "name": "askFilter",
            "baseName": "ask_filter",
            "type": "number",
            "format": "int8"
        },
        {
            "name": "betweenTimestamps",
            "baseName": "between_timestamps",
            "type": "string",
            "format": ""
        },
        {
            "name": "cursor",
            "baseName": "cursor",
            "type": "string",
            "format": ""
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number",
            "format": "int64"
        }
    ];
    static getAttributeTypeMap() {
        return ReqGetAccountInactiveOrders.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/ReqGetAccountLimits.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "ReqGetAccountLimits",
    ()=>ReqGetAccountLimits
]);
class ReqGetAccountLimits {
    'accountIndex';
    /**
    *  made optional to support header auth clients
    */ 'auth';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "accountIndex",
            "baseName": "account_index",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "auth",
            "baseName": "auth",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return ReqGetAccountLimits.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/ReqGetAccountMetadata.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "ReqGetAccountMetadata",
    ()=>ReqGetAccountMetadata,
    "ReqGetAccountMetadataByEnum",
    ()=>ReqGetAccountMetadataByEnum
]);
class ReqGetAccountMetadata {
    'by';
    'value';
    'auth';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "by",
            "baseName": "by",
            "type": "ReqGetAccountMetadataByEnum",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        },
        {
            "name": "auth",
            "baseName": "auth",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return ReqGetAccountMetadata.attributeTypeMap;
    }
    constructor(){}
}
var ReqGetAccountMetadataByEnum = /*#__PURE__*/ function(ReqGetAccountMetadataByEnum) {
    ReqGetAccountMetadataByEnum["Index"] = "index";
    ReqGetAccountMetadataByEnum["L1Address"] = "l1_address";
    return ReqGetAccountMetadataByEnum;
}({});
}),
"[project]/lighter-sdk-ts/generated/models/ReqGetAccountPnL.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "ReqGetAccountPnL",
    ()=>ReqGetAccountPnL,
    "ReqGetAccountPnLByEnum",
    ()=>ReqGetAccountPnLByEnum,
    "ReqGetAccountPnLResolutionEnum",
    ()=>ReqGetAccountPnLResolutionEnum
]);
class ReqGetAccountPnL {
    'auth';
    'by';
    'value';
    'resolution';
    'startTimestamp';
    'endTimestamp';
    'countBack';
    'ignoreTransfers';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "auth",
            "baseName": "auth",
            "type": "string",
            "format": ""
        },
        {
            "name": "by",
            "baseName": "by",
            "type": "ReqGetAccountPnLByEnum",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        },
        {
            "name": "resolution",
            "baseName": "resolution",
            "type": "ReqGetAccountPnLResolutionEnum",
            "format": ""
        },
        {
            "name": "startTimestamp",
            "baseName": "start_timestamp",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "endTimestamp",
            "baseName": "end_timestamp",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "countBack",
            "baseName": "count_back",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "ignoreTransfers",
            "baseName": "ignore_transfers",
            "type": "boolean",
            "format": "boolean"
        }
    ];
    static getAttributeTypeMap() {
        return ReqGetAccountPnL.attributeTypeMap;
    }
    constructor(){}
}
var ReqGetAccountPnLByEnum = /*#__PURE__*/ function(ReqGetAccountPnLByEnum) {
    ReqGetAccountPnLByEnum["Index"] = "index";
    return ReqGetAccountPnLByEnum;
}({});
var ReqGetAccountPnLResolutionEnum = /*#__PURE__*/ function(ReqGetAccountPnLResolutionEnum) {
    ReqGetAccountPnLResolutionEnum["_1m"] = "1m";
    ReqGetAccountPnLResolutionEnum["_5m"] = "5m";
    ReqGetAccountPnLResolutionEnum["_15m"] = "15m";
    ReqGetAccountPnLResolutionEnum["_1h"] = "1h";
    ReqGetAccountPnLResolutionEnum["_4h"] = "4h";
    ReqGetAccountPnLResolutionEnum["_1d"] = "1d";
    return ReqGetAccountPnLResolutionEnum;
}({});
}),
"[project]/lighter-sdk-ts/generated/models/ReqGetAccountTxs.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "ReqGetAccountTxs",
    ()=>ReqGetAccountTxs,
    "ReqGetAccountTxsByEnum",
    ()=>ReqGetAccountTxsByEnum
]);
class ReqGetAccountTxs {
    'index';
    'limit';
    'by';
    'value';
    'types';
    'auth';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "index",
            "baseName": "index",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "by",
            "baseName": "by",
            "type": "ReqGetAccountTxsByEnum",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        },
        {
            "name": "types",
            "baseName": "types",
            "type": "Array<number>",
            "format": "uint8"
        },
        {
            "name": "auth",
            "baseName": "auth",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return ReqGetAccountTxs.attributeTypeMap;
    }
    constructor(){}
}
var ReqGetAccountTxsByEnum = /*#__PURE__*/ function(ReqGetAccountTxsByEnum) {
    ReqGetAccountTxsByEnum["AccountIndex"] = "account_index";
    return ReqGetAccountTxsByEnum;
}({});
}),
"[project]/lighter-sdk-ts/generated/models/ReqGetBlock.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "ReqGetBlock",
    ()=>ReqGetBlock,
    "ReqGetBlockByEnum",
    ()=>ReqGetBlockByEnum
]);
class ReqGetBlock {
    'by';
    'value';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "by",
            "baseName": "by",
            "type": "ReqGetBlockByEnum",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return ReqGetBlock.attributeTypeMap;
    }
    constructor(){}
}
var ReqGetBlockByEnum = /*#__PURE__*/ function(ReqGetBlockByEnum) {
    ReqGetBlockByEnum["Commitment"] = "commitment";
    ReqGetBlockByEnum["Height"] = "height";
    return ReqGetBlockByEnum;
}({});
}),
"[project]/lighter-sdk-ts/generated/models/ReqGetBlockTxs.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "ReqGetBlockTxs",
    ()=>ReqGetBlockTxs,
    "ReqGetBlockTxsByEnum",
    ()=>ReqGetBlockTxsByEnum
]);
class ReqGetBlockTxs {
    'by';
    'value';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "by",
            "baseName": "by",
            "type": "ReqGetBlockTxsByEnum",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return ReqGetBlockTxs.attributeTypeMap;
    }
    constructor(){}
}
var ReqGetBlockTxsByEnum = /*#__PURE__*/ function(ReqGetBlockTxsByEnum) {
    ReqGetBlockTxsByEnum["BlockHeight"] = "block_height";
    ReqGetBlockTxsByEnum["BlockCommitment"] = "block_commitment";
    return ReqGetBlockTxsByEnum;
}({});
}),
"[project]/lighter-sdk-ts/generated/models/ReqGetByAccount.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "ReqGetByAccount",
    ()=>ReqGetByAccount,
    "ReqGetByAccountByEnum",
    ()=>ReqGetByAccountByEnum
]);
class ReqGetByAccount {
    'by';
    'value';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "by",
            "baseName": "by",
            "type": "ReqGetByAccountByEnum",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return ReqGetByAccount.attributeTypeMap;
    }
    constructor(){}
}
var ReqGetByAccountByEnum = /*#__PURE__*/ function(ReqGetByAccountByEnum) {
    ReqGetByAccountByEnum["AccountIndex"] = "account_index";
    return ReqGetByAccountByEnum;
}({});
}),
"[project]/lighter-sdk-ts/generated/models/ReqGetCandlesticks.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "ReqGetCandlesticks",
    ()=>ReqGetCandlesticks,
    "ReqGetCandlesticksResolutionEnum",
    ()=>ReqGetCandlesticksResolutionEnum
]);
class ReqGetCandlesticks {
    'marketId';
    'resolution';
    'startTimestamp';
    'endTimestamp';
    'countBack';
    'setTimestampToEnd';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "marketId",
            "baseName": "market_id",
            "type": "number",
            "format": "uint8"
        },
        {
            "name": "resolution",
            "baseName": "resolution",
            "type": "ReqGetCandlesticksResolutionEnum",
            "format": ""
        },
        {
            "name": "startTimestamp",
            "baseName": "start_timestamp",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "endTimestamp",
            "baseName": "end_timestamp",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "countBack",
            "baseName": "count_back",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "setTimestampToEnd",
            "baseName": "set_timestamp_to_end",
            "type": "boolean",
            "format": "boolean"
        }
    ];
    static getAttributeTypeMap() {
        return ReqGetCandlesticks.attributeTypeMap;
    }
    constructor(){}
}
var ReqGetCandlesticksResolutionEnum = /*#__PURE__*/ function(ReqGetCandlesticksResolutionEnum) {
    ReqGetCandlesticksResolutionEnum["_1m"] = "1m";
    ReqGetCandlesticksResolutionEnum["_5m"] = "5m";
    ReqGetCandlesticksResolutionEnum["_15m"] = "15m";
    ReqGetCandlesticksResolutionEnum["_1h"] = "1h";
    ReqGetCandlesticksResolutionEnum["_4h"] = "4h";
    ReqGetCandlesticksResolutionEnum["_1d"] = "1d";
    return ReqGetCandlesticksResolutionEnum;
}({});
}),
"[project]/lighter-sdk-ts/generated/models/ReqGetDepositHistory.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "ReqGetDepositHistory",
    ()=>ReqGetDepositHistory,
    "ReqGetDepositHistoryFilterEnum",
    ()=>ReqGetDepositHistoryFilterEnum
]);
class ReqGetDepositHistory {
    'accountIndex';
    /**
    *  made optional to support header auth clients
    */ 'auth';
    'l1Address';
    'cursor';
    'filter';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "accountIndex",
            "baseName": "account_index",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "auth",
            "baseName": "auth",
            "type": "string",
            "format": ""
        },
        {
            "name": "l1Address",
            "baseName": "l1_address",
            "type": "string",
            "format": ""
        },
        {
            "name": "cursor",
            "baseName": "cursor",
            "type": "string",
            "format": ""
        },
        {
            "name": "filter",
            "baseName": "filter",
            "type": "ReqGetDepositHistoryFilterEnum",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return ReqGetDepositHistory.attributeTypeMap;
    }
    constructor(){}
}
var ReqGetDepositHistoryFilterEnum = /*#__PURE__*/ function(ReqGetDepositHistoryFilterEnum) {
    ReqGetDepositHistoryFilterEnum["All"] = "all";
    ReqGetDepositHistoryFilterEnum["Pending"] = "pending";
    ReqGetDepositHistoryFilterEnum["Claimable"] = "claimable";
    return ReqGetDepositHistoryFilterEnum;
}({});
}),
"[project]/lighter-sdk-ts/generated/models/ReqGetFastWithdrawInfo.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "ReqGetFastWithdrawInfo",
    ()=>ReqGetFastWithdrawInfo
]);
class ReqGetFastWithdrawInfo {
    'accountIndex';
    /**
    *  made optional to support header auth clients
    */ 'auth';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "accountIndex",
            "baseName": "account_index",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "auth",
            "baseName": "auth",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return ReqGetFastWithdrawInfo.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/ReqGetFundings.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "ReqGetFundings",
    ()=>ReqGetFundings,
    "ReqGetFundingsResolutionEnum",
    ()=>ReqGetFundingsResolutionEnum
]);
class ReqGetFundings {
    'marketId';
    'resolution';
    'startTimestamp';
    'endTimestamp';
    'countBack';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "marketId",
            "baseName": "market_id",
            "type": "number",
            "format": "uint8"
        },
        {
            "name": "resolution",
            "baseName": "resolution",
            "type": "ReqGetFundingsResolutionEnum",
            "format": ""
        },
        {
            "name": "startTimestamp",
            "baseName": "start_timestamp",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "endTimestamp",
            "baseName": "end_timestamp",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "countBack",
            "baseName": "count_back",
            "type": "number",
            "format": "int64"
        }
    ];
    static getAttributeTypeMap() {
        return ReqGetFundings.attributeTypeMap;
    }
    constructor(){}
}
var ReqGetFundingsResolutionEnum = /*#__PURE__*/ function(ReqGetFundingsResolutionEnum) {
    ReqGetFundingsResolutionEnum["_1h"] = "1h";
    ReqGetFundingsResolutionEnum["_1d"] = "1d";
    return ReqGetFundingsResolutionEnum;
}({});
}),
"[project]/lighter-sdk-ts/generated/models/ReqGetL1Metadata.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "ReqGetL1Metadata",
    ()=>ReqGetL1Metadata
]);
class ReqGetL1Metadata {
    /**
    *  made optional to support header auth clients
    */ 'auth';
    'l1Address';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "auth",
            "baseName": "auth",
            "type": "string",
            "format": ""
        },
        {
            "name": "l1Address",
            "baseName": "l1_address",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return ReqGetL1Metadata.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/ReqGetL1Tx.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "ReqGetL1Tx",
    ()=>ReqGetL1Tx
]);
class ReqGetL1Tx {
    'hash';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "hash",
            "baseName": "hash",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return ReqGetL1Tx.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/ReqGetLatestDeposit.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "ReqGetLatestDeposit",
    ()=>ReqGetLatestDeposit
]);
class ReqGetLatestDeposit {
    'l1Address';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "l1Address",
            "baseName": "l1_address",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return ReqGetLatestDeposit.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/ReqGetLiquidationInfos.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "ReqGetLiquidationInfos",
    ()=>ReqGetLiquidationInfos
]);
class ReqGetLiquidationInfos {
    /**
    *  made optional to support header auth clients
    */ 'auth';
    'accountIndex';
    'marketId';
    'cursor';
    'limit';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "auth",
            "baseName": "auth",
            "type": "string",
            "format": ""
        },
        {
            "name": "accountIndex",
            "baseName": "account_index",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "marketId",
            "baseName": "market_id",
            "type": "number",
            "format": "uint8"
        },
        {
            "name": "cursor",
            "baseName": "cursor",
            "type": "string",
            "format": ""
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number",
            "format": "int64"
        }
    ];
    static getAttributeTypeMap() {
        return ReqGetLiquidationInfos.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/ReqGetNextNonce.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "ReqGetNextNonce",
    ()=>ReqGetNextNonce
]);
class ReqGetNextNonce {
    'accountIndex';
    'apiKeyIndex';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "accountIndex",
            "baseName": "account_index",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "apiKeyIndex",
            "baseName": "api_key_index",
            "type": "number",
            "format": "uint8"
        }
    ];
    static getAttributeTypeMap() {
        return ReqGetNextNonce.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/ReqGetOrderBookDetails.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "ReqGetOrderBookDetails",
    ()=>ReqGetOrderBookDetails
]);
class ReqGetOrderBookDetails {
    'marketId';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "marketId",
            "baseName": "market_id",
            "type": "number",
            "format": "uint8"
        }
    ];
    static getAttributeTypeMap() {
        return ReqGetOrderBookDetails.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/ReqGetOrderBookOrders.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "ReqGetOrderBookOrders",
    ()=>ReqGetOrderBookOrders
]);
class ReqGetOrderBookOrders {
    'marketId';
    'limit';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "marketId",
            "baseName": "market_id",
            "type": "number",
            "format": "uint8"
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number",
            "format": "int64"
        }
    ];
    static getAttributeTypeMap() {
        return ReqGetOrderBookOrders.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/ReqGetOrderBooks.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "ReqGetOrderBooks",
    ()=>ReqGetOrderBooks
]);
class ReqGetOrderBooks {
    'marketId';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "marketId",
            "baseName": "market_id",
            "type": "number",
            "format": "uint8"
        }
    ];
    static getAttributeTypeMap() {
        return ReqGetOrderBooks.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/ReqGetPositionFunding.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "ReqGetPositionFunding",
    ()=>ReqGetPositionFunding,
    "ReqGetPositionFundingSideEnum",
    ()=>ReqGetPositionFundingSideEnum
]);
class ReqGetPositionFunding {
    'auth';
    'accountIndex';
    'marketId';
    'cursor';
    'limit';
    'side';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "auth",
            "baseName": "auth",
            "type": "string",
            "format": ""
        },
        {
            "name": "accountIndex",
            "baseName": "account_index",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "marketId",
            "baseName": "market_id",
            "type": "number",
            "format": "uint8"
        },
        {
            "name": "cursor",
            "baseName": "cursor",
            "type": "string",
            "format": ""
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "side",
            "baseName": "side",
            "type": "ReqGetPositionFundingSideEnum",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return ReqGetPositionFunding.attributeTypeMap;
    }
    constructor(){}
}
var ReqGetPositionFundingSideEnum = /*#__PURE__*/ function(ReqGetPositionFundingSideEnum) {
    ReqGetPositionFundingSideEnum["Long"] = "long";
    ReqGetPositionFundingSideEnum["Short"] = "short";
    ReqGetPositionFundingSideEnum["All"] = "all";
    return ReqGetPositionFundingSideEnum;
}({});
}),
"[project]/lighter-sdk-ts/generated/models/ReqGetPublicPools.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "ReqGetPublicPools",
    ()=>ReqGetPublicPools,
    "ReqGetPublicPoolsFilterEnum",
    ()=>ReqGetPublicPoolsFilterEnum
]);
class ReqGetPublicPools {
    'auth';
    'filter';
    'index';
    'limit';
    'accountIndex';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "auth",
            "baseName": "auth",
            "type": "string",
            "format": ""
        },
        {
            "name": "filter",
            "baseName": "filter",
            "type": "ReqGetPublicPoolsFilterEnum",
            "format": ""
        },
        {
            "name": "index",
            "baseName": "index",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "accountIndex",
            "baseName": "account_index",
            "type": "number",
            "format": "int64"
        }
    ];
    static getAttributeTypeMap() {
        return ReqGetPublicPools.attributeTypeMap;
    }
    constructor(){}
}
var ReqGetPublicPoolsFilterEnum = /*#__PURE__*/ function(ReqGetPublicPoolsFilterEnum) {
    ReqGetPublicPoolsFilterEnum["All"] = "all";
    ReqGetPublicPoolsFilterEnum["User"] = "user";
    ReqGetPublicPoolsFilterEnum["Protocol"] = "protocol";
    ReqGetPublicPoolsFilterEnum["AccountIndex"] = "account_index";
    return ReqGetPublicPoolsFilterEnum;
}({});
}),
"[project]/lighter-sdk-ts/generated/models/ReqGetPublicPoolsMetadata.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "ReqGetPublicPoolsMetadata",
    ()=>ReqGetPublicPoolsMetadata,
    "ReqGetPublicPoolsMetadataFilterEnum",
    ()=>ReqGetPublicPoolsMetadataFilterEnum
]);
class ReqGetPublicPoolsMetadata {
    'auth';
    'filter';
    'index';
    'limit';
    'accountIndex';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "auth",
            "baseName": "auth",
            "type": "string",
            "format": ""
        },
        {
            "name": "filter",
            "baseName": "filter",
            "type": "ReqGetPublicPoolsMetadataFilterEnum",
            "format": ""
        },
        {
            "name": "index",
            "baseName": "index",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "accountIndex",
            "baseName": "account_index",
            "type": "number",
            "format": "int64"
        }
    ];
    static getAttributeTypeMap() {
        return ReqGetPublicPoolsMetadata.attributeTypeMap;
    }
    constructor(){}
}
var ReqGetPublicPoolsMetadataFilterEnum = /*#__PURE__*/ function(ReqGetPublicPoolsMetadataFilterEnum) {
    ReqGetPublicPoolsMetadataFilterEnum["All"] = "all";
    ReqGetPublicPoolsMetadataFilterEnum["User"] = "user";
    ReqGetPublicPoolsMetadataFilterEnum["Protocol"] = "protocol";
    ReqGetPublicPoolsMetadataFilterEnum["AccountIndex"] = "account_index";
    return ReqGetPublicPoolsMetadataFilterEnum;
}({});
}),
"[project]/lighter-sdk-ts/generated/models/ReqGetRangeWithCursor.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "ReqGetRangeWithCursor",
    ()=>ReqGetRangeWithCursor
]);
class ReqGetRangeWithCursor {
    'cursor';
    'limit';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "cursor",
            "baseName": "cursor",
            "type": "string",
            "format": ""
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number",
            "format": "int64"
        }
    ];
    static getAttributeTypeMap() {
        return ReqGetRangeWithCursor.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/ReqGetRangeWithIndex.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "ReqGetRangeWithIndex",
    ()=>ReqGetRangeWithIndex
]);
class ReqGetRangeWithIndex {
    'index';
    'limit';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "index",
            "baseName": "index",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number",
            "format": "int64"
        }
    ];
    static getAttributeTypeMap() {
        return ReqGetRangeWithIndex.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/ReqGetRangeWithIndexSortable.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "ReqGetRangeWithIndexSortable",
    ()=>ReqGetRangeWithIndexSortable,
    "ReqGetRangeWithIndexSortableSortEnum",
    ()=>ReqGetRangeWithIndexSortableSortEnum
]);
class ReqGetRangeWithIndexSortable {
    'index';
    'limit';
    'sort';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "index",
            "baseName": "index",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "sort",
            "baseName": "sort",
            "type": "ReqGetRangeWithIndexSortableSortEnum",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return ReqGetRangeWithIndexSortable.attributeTypeMap;
    }
    constructor(){}
}
var ReqGetRangeWithIndexSortableSortEnum = /*#__PURE__*/ function(ReqGetRangeWithIndexSortableSortEnum) {
    ReqGetRangeWithIndexSortableSortEnum["Asc"] = "asc";
    ReqGetRangeWithIndexSortableSortEnum["Desc"] = "desc";
    return ReqGetRangeWithIndexSortableSortEnum;
}({});
}),
"[project]/lighter-sdk-ts/generated/models/ReqGetRecentTrades.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "ReqGetRecentTrades",
    ()=>ReqGetRecentTrades
]);
class ReqGetRecentTrades {
    'marketId';
    'limit';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "marketId",
            "baseName": "market_id",
            "type": "number",
            "format": "uint8"
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number",
            "format": "int64"
        }
    ];
    static getAttributeTypeMap() {
        return ReqGetRecentTrades.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/ReqGetReferralPoints.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "ReqGetReferralPoints",
    ()=>ReqGetReferralPoints
]);
class ReqGetReferralPoints {
    /**
    *  made optional to support header auth clients
    */ 'auth';
    'accountIndex';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "auth",
            "baseName": "auth",
            "type": "string",
            "format": ""
        },
        {
            "name": "accountIndex",
            "baseName": "account_index",
            "type": "number",
            "format": "int64"
        }
    ];
    static getAttributeTypeMap() {
        return ReqGetReferralPoints.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/ReqGetTrades.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "ReqGetTrades",
    ()=>ReqGetTrades,
    "ReqGetTradesSortByEnum",
    ()=>ReqGetTradesSortByEnum,
    "ReqGetTradesSortDirEnum",
    ()=>ReqGetTradesSortDirEnum
]);
class ReqGetTrades {
    'auth';
    'marketId';
    'accountIndex';
    'orderIndex';
    'sortBy';
    'sortDir';
    'cursor';
    '_from';
    'askFilter';
    'limit';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "auth",
            "baseName": "auth",
            "type": "string",
            "format": ""
        },
        {
            "name": "marketId",
            "baseName": "market_id",
            "type": "number",
            "format": "uint8"
        },
        {
            "name": "accountIndex",
            "baseName": "account_index",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "orderIndex",
            "baseName": "order_index",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "sortBy",
            "baseName": "sort_by",
            "type": "ReqGetTradesSortByEnum",
            "format": ""
        },
        {
            "name": "sortDir",
            "baseName": "sort_dir",
            "type": "ReqGetTradesSortDirEnum",
            "format": ""
        },
        {
            "name": "cursor",
            "baseName": "cursor",
            "type": "string",
            "format": ""
        },
        {
            "name": "_from",
            "baseName": "from",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "askFilter",
            "baseName": "ask_filter",
            "type": "number",
            "format": "int8"
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number",
            "format": "int64"
        }
    ];
    static getAttributeTypeMap() {
        return ReqGetTrades.attributeTypeMap;
    }
    constructor(){}
}
var ReqGetTradesSortByEnum = /*#__PURE__*/ function(ReqGetTradesSortByEnum) {
    ReqGetTradesSortByEnum["BlockHeight"] = "block_height";
    ReqGetTradesSortByEnum["Timestamp"] = "timestamp";
    ReqGetTradesSortByEnum["TradeId"] = "trade_id";
    return ReqGetTradesSortByEnum;
}({});
var ReqGetTradesSortDirEnum = /*#__PURE__*/ function(ReqGetTradesSortDirEnum) {
    ReqGetTradesSortDirEnum["Desc"] = "desc";
    return ReqGetTradesSortDirEnum;
}({});
}),
"[project]/lighter-sdk-ts/generated/models/ReqGetTransferFeeInfo.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "ReqGetTransferFeeInfo",
    ()=>ReqGetTransferFeeInfo
]);
class ReqGetTransferFeeInfo {
    'auth';
    'accountIndex';
    'toAccountIndex';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "auth",
            "baseName": "auth",
            "type": "string",
            "format": ""
        },
        {
            "name": "accountIndex",
            "baseName": "account_index",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "toAccountIndex",
            "baseName": "to_account_index",
            "type": "number",
            "format": "int64"
        }
    ];
    static getAttributeTypeMap() {
        return ReqGetTransferFeeInfo.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/ReqGetTransferHistory.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "ReqGetTransferHistory",
    ()=>ReqGetTransferHistory
]);
class ReqGetTransferHistory {
    'accountIndex';
    /**
    *  made optional to support header auth clients
    */ 'auth';
    'cursor';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "accountIndex",
            "baseName": "account_index",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "auth",
            "baseName": "auth",
            "type": "string",
            "format": ""
        },
        {
            "name": "cursor",
            "baseName": "cursor",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return ReqGetTransferHistory.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/ReqGetTx.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "ReqGetTx",
    ()=>ReqGetTx,
    "ReqGetTxByEnum",
    ()=>ReqGetTxByEnum
]);
class ReqGetTx {
    'by';
    'value';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "by",
            "baseName": "by",
            "type": "ReqGetTxByEnum",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return ReqGetTx.attributeTypeMap;
    }
    constructor(){}
}
var ReqGetTxByEnum = /*#__PURE__*/ function(ReqGetTxByEnum) {
    ReqGetTxByEnum["Hash"] = "hash";
    ReqGetTxByEnum["SequenceIndex"] = "sequence_index";
    return ReqGetTxByEnum;
}({});
}),
"[project]/lighter-sdk-ts/generated/models/ReqGetWithdrawHistory.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "ReqGetWithdrawHistory",
    ()=>ReqGetWithdrawHistory,
    "ReqGetWithdrawHistoryFilterEnum",
    ()=>ReqGetWithdrawHistoryFilterEnum
]);
class ReqGetWithdrawHistory {
    'accountIndex';
    /**
    *  made optional to support header auth clients
    */ 'auth';
    'cursor';
    'filter';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "accountIndex",
            "baseName": "account_index",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "auth",
            "baseName": "auth",
            "type": "string",
            "format": ""
        },
        {
            "name": "cursor",
            "baseName": "cursor",
            "type": "string",
            "format": ""
        },
        {
            "name": "filter",
            "baseName": "filter",
            "type": "ReqGetWithdrawHistoryFilterEnum",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return ReqGetWithdrawHistory.attributeTypeMap;
    }
    constructor(){}
}
var ReqGetWithdrawHistoryFilterEnum = /*#__PURE__*/ function(ReqGetWithdrawHistoryFilterEnum) {
    ReqGetWithdrawHistoryFilterEnum["All"] = "all";
    ReqGetWithdrawHistoryFilterEnum["Pending"] = "pending";
    ReqGetWithdrawHistoryFilterEnum["Claimable"] = "claimable";
    return ReqGetWithdrawHistoryFilterEnum;
}({});
}),
"[project]/lighter-sdk-ts/generated/models/RespChangeAccountTier.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "RespChangeAccountTier",
    ()=>RespChangeAccountTier
]);
class RespChangeAccountTier {
    'code';
    'message';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return RespChangeAccountTier.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/RespGetFastBridgeInfo.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "RespGetFastBridgeInfo",
    ()=>RespGetFastBridgeInfo
]);
class RespGetFastBridgeInfo {
    'code';
    'message';
    'fastBridgeLimit';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "fastBridgeLimit",
            "baseName": "fast_bridge_limit",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return RespGetFastBridgeInfo.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/RespPublicPoolsMetadata.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "RespPublicPoolsMetadata",
    ()=>RespPublicPoolsMetadata
]);
class RespPublicPoolsMetadata {
    'code';
    'message';
    'publicPools';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "publicPools",
            "baseName": "public_pools",
            "type": "Array<PublicPoolMetadata>",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return RespPublicPoolsMetadata.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/RespSendTx.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "RespSendTx",
    ()=>RespSendTx
]);
class RespSendTx {
    'code';
    'message';
    'txHash';
    'predictedExecutionTimeMs';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "txHash",
            "baseName": "tx_hash",
            "type": "string",
            "format": ""
        },
        {
            "name": "predictedExecutionTimeMs",
            "baseName": "predicted_execution_time_ms",
            "type": "number",
            "format": "int64"
        }
    ];
    static getAttributeTypeMap() {
        return RespSendTx.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/RespSendTxBatch.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "RespSendTxBatch",
    ()=>RespSendTxBatch
]);
class RespSendTxBatch {
    'code';
    'message';
    'txHash';
    'predictedExecutionTimeMs';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "txHash",
            "baseName": "tx_hash",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "predictedExecutionTimeMs",
            "baseName": "predicted_execution_time_ms",
            "type": "number",
            "format": "int64"
        }
    ];
    static getAttributeTypeMap() {
        return RespSendTxBatch.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/RespWithdrawalDelay.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "RespWithdrawalDelay",
    ()=>RespWithdrawalDelay
]);
class RespWithdrawalDelay {
    'seconds';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "seconds",
            "baseName": "seconds",
            "type": "number",
            "format": "int64"
        }
    ];
    static getAttributeTypeMap() {
        return RespWithdrawalDelay.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/ResultCode.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "ResultCode",
    ()=>ResultCode
]);
class ResultCode {
    'code';
    'message';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return ResultCode.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/RiskInfo.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "RiskInfo",
    ()=>RiskInfo
]);
class RiskInfo {
    'crossRiskParameters';
    'isolatedRiskParameters';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "crossRiskParameters",
            "baseName": "cross_risk_parameters",
            "type": "RiskParameters",
            "format": ""
        },
        {
            "name": "isolatedRiskParameters",
            "baseName": "isolated_risk_parameters",
            "type": "Array<RiskParameters>",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return RiskInfo.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/RiskParameters.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "RiskParameters",
    ()=>RiskParameters
]);
class RiskParameters {
    'marketId';
    'collateral';
    'totalAccountValue';
    'initialMarginReq';
    'maintenanceMarginReq';
    'closeOutMarginReq';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "marketId",
            "baseName": "market_id",
            "type": "number",
            "format": "uint8"
        },
        {
            "name": "collateral",
            "baseName": "collateral",
            "type": "string",
            "format": ""
        },
        {
            "name": "totalAccountValue",
            "baseName": "total_account_value",
            "type": "string",
            "format": ""
        },
        {
            "name": "initialMarginReq",
            "baseName": "initial_margin_req",
            "type": "string",
            "format": ""
        },
        {
            "name": "maintenanceMarginReq",
            "baseName": "maintenance_margin_req",
            "type": "string",
            "format": ""
        },
        {
            "name": "closeOutMarginReq",
            "baseName": "close_out_margin_req",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return RiskParameters.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/SharePrice.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "SharePrice",
    ()=>SharePrice
]);
class SharePrice {
    'timestamp';
    'sharePrice';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "sharePrice",
            "baseName": "share_price",
            "type": "number",
            "format": "double"
        }
    ];
    static getAttributeTypeMap() {
        return SharePrice.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/SimpleOrder.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "SimpleOrder",
    ()=>SimpleOrder
]);
class SimpleOrder {
    'orderIndex';
    'orderId';
    'ownerAccountIndex';
    'initialBaseAmount';
    'remainingBaseAmount';
    'price';
    'orderExpiry';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "orderIndex",
            "baseName": "order_index",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "orderId",
            "baseName": "order_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "ownerAccountIndex",
            "baseName": "owner_account_index",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "initialBaseAmount",
            "baseName": "initial_base_amount",
            "type": "string",
            "format": ""
        },
        {
            "name": "remainingBaseAmount",
            "baseName": "remaining_base_amount",
            "type": "string",
            "format": ""
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "string",
            "format": ""
        },
        {
            "name": "orderExpiry",
            "baseName": "order_expiry",
            "type": "number",
            "format": "int64"
        }
    ];
    static getAttributeTypeMap() {
        return SimpleOrder.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/Status.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "Status",
    ()=>Status
]);
class Status {
    'status';
    'networkId';
    'timestamp';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "status",
            "baseName": "status",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "networkId",
            "baseName": "network_id",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "number",
            "format": "int64"
        }
    ];
    static getAttributeTypeMap() {
        return Status.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/SubAccounts.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "SubAccounts",
    ()=>SubAccounts
]);
class SubAccounts {
    'code';
    'message';
    'l1Address';
    'subAccounts';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "l1Address",
            "baseName": "l1_address",
            "type": "string",
            "format": ""
        },
        {
            "name": "subAccounts",
            "baseName": "sub_accounts",
            "type": "Array<Account>",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return SubAccounts.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/Ticker.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "Ticker",
    ()=>Ticker
]);
class Ticker {
    's';
    'a';
    'b';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "s",
            "baseName": "s",
            "type": "string",
            "format": ""
        },
        {
            "name": "a",
            "baseName": "a",
            "type": "PriceLevel",
            "format": ""
        },
        {
            "name": "b",
            "baseName": "b",
            "type": "PriceLevel",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return Ticker.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/Trade.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "Trade",
    ()=>Trade,
    "TradeTypeEnum",
    ()=>TradeTypeEnum
]);
class Trade {
    'tradeId';
    'txHash';
    'type';
    'marketId';
    'size';
    'price';
    'usdAmount';
    'askId';
    'bidId';
    'askAccountId';
    'bidAccountId';
    'isMakerAsk';
    'blockHeight';
    'timestamp';
    'takerFee';
    'takerPositionSizeBefore';
    'takerEntryQuoteBefore';
    'takerInitialMarginFractionBefore';
    'takerPositionSignChanged';
    'makerFee';
    'makerPositionSizeBefore';
    'makerEntryQuoteBefore';
    'makerInitialMarginFractionBefore';
    'makerPositionSignChanged';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "tradeId",
            "baseName": "trade_id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "txHash",
            "baseName": "tx_hash",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "TradeTypeEnum",
            "format": ""
        },
        {
            "name": "marketId",
            "baseName": "market_id",
            "type": "number",
            "format": "uint8"
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "string",
            "format": ""
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "string",
            "format": ""
        },
        {
            "name": "usdAmount",
            "baseName": "usd_amount",
            "type": "string",
            "format": ""
        },
        {
            "name": "askId",
            "baseName": "ask_id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "bidId",
            "baseName": "bid_id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "askAccountId",
            "baseName": "ask_account_id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "bidAccountId",
            "baseName": "bid_account_id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "isMakerAsk",
            "baseName": "is_maker_ask",
            "type": "boolean",
            "format": "boolean"
        },
        {
            "name": "blockHeight",
            "baseName": "block_height",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "takerFee",
            "baseName": "taker_fee",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "takerPositionSizeBefore",
            "baseName": "taker_position_size_before",
            "type": "string",
            "format": ""
        },
        {
            "name": "takerEntryQuoteBefore",
            "baseName": "taker_entry_quote_before",
            "type": "string",
            "format": ""
        },
        {
            "name": "takerInitialMarginFractionBefore",
            "baseName": "taker_initial_margin_fraction_before",
            "type": "number",
            "format": "uin16"
        },
        {
            "name": "takerPositionSignChanged",
            "baseName": "taker_position_sign_changed",
            "type": "boolean",
            "format": "boolean"
        },
        {
            "name": "makerFee",
            "baseName": "maker_fee",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "makerPositionSizeBefore",
            "baseName": "maker_position_size_before",
            "type": "string",
            "format": ""
        },
        {
            "name": "makerEntryQuoteBefore",
            "baseName": "maker_entry_quote_before",
            "type": "string",
            "format": ""
        },
        {
            "name": "makerInitialMarginFractionBefore",
            "baseName": "maker_initial_margin_fraction_before",
            "type": "number",
            "format": "uin16"
        },
        {
            "name": "makerPositionSignChanged",
            "baseName": "maker_position_sign_changed",
            "type": "boolean",
            "format": "boolean"
        }
    ];
    static getAttributeTypeMap() {
        return Trade.attributeTypeMap;
    }
    constructor(){}
}
var TradeTypeEnum = /*#__PURE__*/ function(TradeTypeEnum) {
    TradeTypeEnum["Trade"] = "trade";
    TradeTypeEnum["Liquidation"] = "liquidation";
    TradeTypeEnum["Deleverage"] = "deleverage";
    return TradeTypeEnum;
}({});
}),
"[project]/lighter-sdk-ts/generated/models/Trades.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "Trades",
    ()=>Trades
]);
class Trades {
    'code';
    'message';
    'nextCursor';
    'trades';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "nextCursor",
            "baseName": "next_cursor",
            "type": "string",
            "format": ""
        },
        {
            "name": "trades",
            "baseName": "trades",
            "type": "Array<Trade>",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return Trades.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/TransferFeeInfo.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "TransferFeeInfo",
    ()=>TransferFeeInfo
]);
class TransferFeeInfo {
    'code';
    'message';
    'transferFeeUsdc';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "transferFeeUsdc",
            "baseName": "transfer_fee_usdc",
            "type": "number",
            "format": "int64"
        }
    ];
    static getAttributeTypeMap() {
        return TransferFeeInfo.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/TransferHistory.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "TransferHistory",
    ()=>TransferHistory
]);
class TransferHistory {
    'code';
    'message';
    'transfers';
    'cursor';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "transfers",
            "baseName": "transfers",
            "type": "Array<TransferHistoryItem>",
            "format": ""
        },
        {
            "name": "cursor",
            "baseName": "cursor",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return TransferHistory.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/TransferHistoryItem.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "TransferHistoryItem",
    ()=>TransferHistoryItem,
    "TransferHistoryItemTypeEnum",
    ()=>TransferHistoryItemTypeEnum
]);
class TransferHistoryItem {
    'id';
    'amount';
    'timestamp';
    'type';
    'fromL1Address';
    'toL1Address';
    'fromAccountIndex';
    'toAccountIndex';
    'txHash';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "string",
            "format": ""
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "TransferHistoryItemTypeEnum",
            "format": ""
        },
        {
            "name": "fromL1Address",
            "baseName": "from_l1_address",
            "type": "string",
            "format": ""
        },
        {
            "name": "toL1Address",
            "baseName": "to_l1_address",
            "type": "string",
            "format": ""
        },
        {
            "name": "fromAccountIndex",
            "baseName": "from_account_index",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "toAccountIndex",
            "baseName": "to_account_index",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "txHash",
            "baseName": "tx_hash",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return TransferHistoryItem.attributeTypeMap;
    }
    constructor(){}
}
var TransferHistoryItemTypeEnum = /*#__PURE__*/ function(TransferHistoryItemTypeEnum) {
    TransferHistoryItemTypeEnum["L2TransferInflow"] = "L2TransferInflow";
    TransferHistoryItemTypeEnum["L2TransferOutflow"] = "L2TransferOutflow";
    return TransferHistoryItemTypeEnum;
}({});
}),
"[project]/lighter-sdk-ts/generated/models/Tx.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "Tx",
    ()=>Tx
]);
class Tx {
    'hash';
    'type';
    'info';
    'eventInfo';
    'status';
    'transactionIndex';
    'l1Address';
    'accountIndex';
    'nonce';
    'expireAt';
    'blockHeight';
    'queuedAt';
    'executedAt';
    'sequenceIndex';
    'parentHash';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "hash",
            "baseName": "hash",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "number",
            "format": "uint8"
        },
        {
            "name": "info",
            "baseName": "info",
            "type": "string",
            "format": ""
        },
        {
            "name": "eventInfo",
            "baseName": "event_info",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "transactionIndex",
            "baseName": "transaction_index",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "l1Address",
            "baseName": "l1_address",
            "type": "string",
            "format": ""
        },
        {
            "name": "accountIndex",
            "baseName": "account_index",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "nonce",
            "baseName": "nonce",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "expireAt",
            "baseName": "expire_at",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "blockHeight",
            "baseName": "block_height",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "queuedAt",
            "baseName": "queued_at",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "executedAt",
            "baseName": "executed_at",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "sequenceIndex",
            "baseName": "sequence_index",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "parentHash",
            "baseName": "parent_hash",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return Tx.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/TxHash.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "TxHash",
    ()=>TxHash
]);
class TxHash {
    'code';
    'message';
    'txHash';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "txHash",
            "baseName": "tx_hash",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return TxHash.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/TxHashes.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "TxHashes",
    ()=>TxHashes
]);
class TxHashes {
    'code';
    'message';
    'txHash';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "txHash",
            "baseName": "tx_hash",
            "type": "Array<string>",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return TxHashes.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/Txs.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "Txs",
    ()=>Txs
]);
class Txs {
    'code';
    'message';
    'txs';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "txs",
            "baseName": "txs",
            "type": "Array<Tx>",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return Txs.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/ValidatorInfo.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "ValidatorInfo",
    ()=>ValidatorInfo
]);
class ValidatorInfo {
    'address';
    'isActive';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "address",
            "baseName": "address",
            "type": "string",
            "format": ""
        },
        {
            "name": "isActive",
            "baseName": "is_active",
            "type": "boolean",
            "format": "boolean"
        }
    ];
    static getAttributeTypeMap() {
        return ValidatorInfo.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/WithdrawHistory.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "WithdrawHistory",
    ()=>WithdrawHistory
]);
class WithdrawHistory {
    'code';
    'message';
    'withdraws';
    'cursor';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "withdraws",
            "baseName": "withdraws",
            "type": "Array<WithdrawHistoryItem>",
            "format": ""
        },
        {
            "name": "cursor",
            "baseName": "cursor",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return WithdrawHistory.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/WithdrawHistoryItem.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "WithdrawHistoryItem",
    ()=>WithdrawHistoryItem,
    "WithdrawHistoryItemStatusEnum",
    ()=>WithdrawHistoryItemStatusEnum,
    "WithdrawHistoryItemTypeEnum",
    ()=>WithdrawHistoryItemTypeEnum
]);
class WithdrawHistoryItem {
    'id';
    'amount';
    'timestamp';
    'status';
    'type';
    'l1TxHash';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "string",
            "format": ""
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "WithdrawHistoryItemStatusEnum",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "WithdrawHistoryItemTypeEnum",
            "format": ""
        },
        {
            "name": "l1TxHash",
            "baseName": "l1_tx_hash",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return WithdrawHistoryItem.attributeTypeMap;
    }
    constructor(){}
}
var WithdrawHistoryItemStatusEnum = /*#__PURE__*/ function(WithdrawHistoryItemStatusEnum) {
    WithdrawHistoryItemStatusEnum["Failed"] = "failed";
    WithdrawHistoryItemStatusEnum["Pending"] = "pending";
    WithdrawHistoryItemStatusEnum["Claimable"] = "claimable";
    WithdrawHistoryItemStatusEnum["Refunded"] = "refunded";
    WithdrawHistoryItemStatusEnum["Completed"] = "completed";
    return WithdrawHistoryItemStatusEnum;
}({});
var WithdrawHistoryItemTypeEnum = /*#__PURE__*/ function(WithdrawHistoryItemTypeEnum) {
    WithdrawHistoryItemTypeEnum["Secure"] = "secure";
    WithdrawHistoryItemTypeEnum["Fast"] = "fast";
    return WithdrawHistoryItemTypeEnum;
}({});
}),
"[project]/lighter-sdk-ts/generated/models/ZkLighterInfo.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "ZkLighterInfo",
    ()=>ZkLighterInfo
]);
class ZkLighterInfo {
    'contractAddress';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "contractAddress",
            "baseName": "contract_address",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return ZkLighterInfo.attributeTypeMap;
    }
    constructor(){}
}
}),
"[project]/lighter-sdk-ts/generated/models/all.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Account$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/Account.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$AccountApiKeys$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/AccountApiKeys.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$AccountLimits$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/AccountLimits.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$AccountMarginStats$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/AccountMarginStats.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$AccountMarketStats$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/AccountMarketStats.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$AccountMetadata$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/AccountMetadata.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$AccountMetadatas$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/AccountMetadatas.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$AccountPnL$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/AccountPnL.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$AccountPosition$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/AccountPosition.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$AccountStats$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/AccountStats.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$AccountTradeStats$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/AccountTradeStats.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Announcement$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/Announcement.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Announcements$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/Announcements.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ApiKey$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ApiKey.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Block$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/Block.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Blocks$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/Blocks.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$BridgeSupportedNetwork$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/BridgeSupportedNetwork.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Candlestick$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/Candlestick.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Candlesticks$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/Candlesticks.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ContractAddress$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ContractAddress.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$CurrentHeight$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/CurrentHeight.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Cursor$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/Cursor.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$DailyReturn$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/DailyReturn.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$DepositHistory$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/DepositHistory.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$DepositHistoryItem$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/DepositHistoryItem.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$DetailedAccount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/DetailedAccount.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$DetailedAccounts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/DetailedAccounts.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$DetailedCandlestick$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/DetailedCandlestick.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$EnrichedTx$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/EnrichedTx.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ExchangeStats$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ExchangeStats.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ExportData$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ExportData.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Funding$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/Funding.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$FundingRate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/FundingRate.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$FundingRates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/FundingRates.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Fundings$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/Fundings.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$L1Metadata$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/L1Metadata.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$L1ProviderInfo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/L1ProviderInfo.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$LiqTrade$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/LiqTrade.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Liquidation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/Liquidation.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$LiquidationInfo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/LiquidationInfo.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$LiquidationInfos$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/LiquidationInfos.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$MarketInfo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/MarketInfo.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$NextNonce$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/NextNonce.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Order$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/Order.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$OrderBook$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/OrderBook.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$OrderBookDepth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/OrderBookDepth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$OrderBookDetail$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/OrderBookDetail.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$OrderBookDetails$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/OrderBookDetails.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$OrderBookOrders$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/OrderBookOrders.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$OrderBookStats$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/OrderBookStats.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$OrderBooks$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/OrderBooks.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Orders$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/Orders.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$PnLEntry$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/PnLEntry.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$PositionFunding$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/PositionFunding.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$PositionFundings$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/PositionFundings.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$PriceLevel$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/PriceLevel.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$PublicPool$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/PublicPool.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$PublicPoolInfo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/PublicPoolInfo.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$PublicPoolMetadata$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/PublicPoolMetadata.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$PublicPoolShare$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/PublicPoolShare.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$PublicPools$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/PublicPools.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReferralPointEntry$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReferralPointEntry.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReferralPoints$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReferralPoints.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqExportData$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqExportData.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetAccount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetAccount.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetAccountActiveOrders$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetAccountActiveOrders.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetAccountApiKeys$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetAccountApiKeys.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetAccountByL1Address$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetAccountByL1Address.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetAccountInactiveOrders$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetAccountInactiveOrders.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetAccountLimits$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetAccountLimits.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetAccountMetadata$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetAccountMetadata.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetAccountPnL$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetAccountPnL.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetAccountTxs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetAccountTxs.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetBlock$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetBlock.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetBlockTxs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetBlockTxs.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetByAccount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetByAccount.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetCandlesticks$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetCandlesticks.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetDepositHistory$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetDepositHistory.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetFastWithdrawInfo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetFastWithdrawInfo.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetFundings$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetFundings.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetL1Metadata$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetL1Metadata.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetL1Tx$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetL1Tx.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetLatestDeposit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetLatestDeposit.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetLiquidationInfos$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetLiquidationInfos.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetNextNonce$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetNextNonce.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetOrderBookDetails$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetOrderBookDetails.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetOrderBookOrders$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetOrderBookOrders.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetOrderBooks$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetOrderBooks.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetPositionFunding$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetPositionFunding.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetPublicPools$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetPublicPools.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetPublicPoolsMetadata$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetPublicPoolsMetadata.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetRangeWithCursor$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetRangeWithCursor.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetRangeWithIndex$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetRangeWithIndex.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetRangeWithIndexSortable$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetRangeWithIndexSortable.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetRecentTrades$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetRecentTrades.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetReferralPoints$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetReferralPoints.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetTrades$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetTrades.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetTransferFeeInfo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetTransferFeeInfo.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetTransferHistory$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetTransferHistory.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetTx$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetTx.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetWithdrawHistory$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetWithdrawHistory.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$RespChangeAccountTier$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/RespChangeAccountTier.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$RespGetFastBridgeInfo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/RespGetFastBridgeInfo.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$RespPublicPoolsMetadata$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/RespPublicPoolsMetadata.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$RespSendTx$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/RespSendTx.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$RespSendTxBatch$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/RespSendTxBatch.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$RespWithdrawalDelay$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/RespWithdrawalDelay.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ResultCode$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ResultCode.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$RiskInfo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/RiskInfo.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$RiskParameters$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/RiskParameters.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$SharePrice$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/SharePrice.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$SimpleOrder$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/SimpleOrder.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Status$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/Status.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$SubAccounts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/SubAccounts.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Ticker$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/Ticker.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Trade$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/Trade.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Trades$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/Trades.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$TransferFeeInfo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/TransferFeeInfo.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$TransferHistory$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/TransferHistory.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$TransferHistoryItem$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/TransferHistoryItem.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Tx$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/Tx.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$TxHash$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/TxHash.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$TxHashes$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/TxHashes.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Txs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/Txs.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ValidatorInfo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ValidatorInfo.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$WithdrawHistory$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/WithdrawHistory.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$WithdrawHistoryItem$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/WithdrawHistoryItem.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ZkLighterInfo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ZkLighterInfo.ts [app-route] (ecmascript)");
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
;
;
;
;
;
;
;
;
}),
"[project]/lighter-sdk-ts/generated/middleware.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PromiseMiddlewareWrapper",
    ()=>PromiseMiddlewareWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/rxjsStub.ts [app-route] (ecmascript)");
;
class PromiseMiddlewareWrapper {
    middleware;
    constructor(middleware){
        this.middleware = middleware;
    }
    pre(context) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(this.middleware.pre(context));
    }
    post(context) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(this.middleware.post(context));
    }
}
}),
"[project]/lighter-sdk-ts/generated/servers.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServerConfiguration",
    ()=>ServerConfiguration,
    "server1",
    ()=>server1,
    "servers",
    ()=>servers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/http/http.ts [app-route] (ecmascript) <locals>");
;
class ServerConfiguration {
    url;
    variableConfiguration;
    constructor(url, variableConfiguration){
        this.url = url;
        this.variableConfiguration = variableConfiguration;
    }
    /**
     * Sets the value of the variables of this server. Variables are included in 
     * the `url` of this ServerConfiguration in the form `{variableName}`
     *
     * @param variableConfiguration a partial variable configuration for the 
     * variables contained in the url
     */ setVariables(variableConfiguration) {
        Object.assign(this.variableConfiguration, variableConfiguration);
    }
    getConfiguration() {
        return this.variableConfiguration;
    }
    getUrl() {
        let replacedUrl = this.url;
        for (const [key, value] of Object.entries(this.variableConfiguration)){
            replacedUrl = replacedUrl.replaceAll(`{${key}}`, value);
        }
        return replacedUrl;
    }
    /**
     * Creates a new request context for this server using the url with variables
     * replaced with their respective values and the endpoint of the request appended.
     *
     * @param endpoint the endpoint to be queried on the server
     * @param httpMethod httpMethod to be used
     *
     */ makeRequestContext(endpoint, httpMethod) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RequestContext"](this.getUrl() + endpoint, httpMethod);
    }
}
const server1 = new ServerConfiguration("https://mainnet.zklighter.elliot.ai", {});
const servers = [
    server1
];
}),
"[project]/lighter-sdk-ts/generated/configuration.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createConfiguration",
    ()=>createConfiguration,
    "mergeConfiguration",
    ()=>mergeConfiguration,
    "wrapOptions",
    ()=>wrapOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$middleware$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/middleware.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$isomorphic$2d$fetch$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/http/isomorphic-fetch.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$servers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/servers.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$auth$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/auth/auth.ts [app-route] (ecmascript)");
;
;
;
;
function createConfiguration(conf = {}) {
    const configuration = {
        baseServer: conf.baseServer !== undefined ? conf.baseServer : __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$servers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["server1"],
        httpApi: conf.httpApi || new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$isomorphic$2d$fetch$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["IsomorphicFetchHttpLibrary"](),
        middleware: conf.middleware || [],
        authMethods: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$auth$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["configureAuthMethods"])(conf.authMethods)
    };
    if (conf.promiseMiddleware) {
        conf.promiseMiddleware.forEach((m)=>configuration.middleware.push(new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$middleware$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PromiseMiddlewareWrapper"](m)));
    }
    return configuration;
}
function mergeConfiguration(conf, options) {
    if (!options) {
        return conf;
    }
    return {
        baseServer: options.baseServer || conf.baseServer,
        httpApi: options.httpApi || conf.httpApi,
        authMethods: options.authMethods || conf.authMethods,
        middleware: mergeMiddleware(conf.middleware, options?.middleware, options?.middlewareMergeStrategy)
    };
}
function mergeMiddleware(staticMiddleware, calltimeMiddleware, strategy = "replace") {
    if (!calltimeMiddleware) {
        return staticMiddleware;
    }
    switch(strategy){
        case "append":
            return staticMiddleware.concat(calltimeMiddleware);
        case "prepend":
            return calltimeMiddleware.concat(staticMiddleware);
        case "replace":
            return calltimeMiddleware;
        default:
            throw new Error(`Unrecognized middleware merge strategy '${strategy}'`);
    }
}
function wrapOptions(options) {
    if (options) {
        return {
            baseServer: options.baseServer,
            httpApi: options.httpApi,
            middleware: options.middleware?.map((m)=>new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$middleware$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PromiseMiddlewareWrapper"](m)),
            middlewareMergeStrategy: options.middlewareMergeStrategy,
            authMethods: options.authMethods
        };
    }
    return;
}
}),
"[project]/lighter-sdk-ts/generated/apis/exception.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Represents an error caused by an api call i.e. it has attributes for a HTTP status code
 * and the returned body object.
 *
 * Example
 * API returns a ErrorMessageObject whenever HTTP status code is not in [200, 299]
 * => ApiException(404, someErrorMessageObject)
 *
 */ __turbopack_context__.s([
    "ApiException",
    ()=>ApiException
]);
class ApiException extends Error {
    code;
    body;
    headers;
    constructor(code, message, body, headers){
        super("HTTP-Code: " + code + "\nMessage: " + message + "\nBody: " + JSON.stringify(body) + "\nHeaders: " + JSON.stringify(headers)), this.code = code, this.body = body, this.headers = headers;
    }
}
}),
"[project]/lighter-sdk-ts/generated/apis/baseapi.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseAPIRequestFactory",
    ()=>BaseAPIRequestFactory,
    "COLLECTION_FORMATS",
    ()=>COLLECTION_FORMATS,
    "RequiredError",
    ()=>RequiredError
]);
const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|"
};
class BaseAPIRequestFactory {
    configuration;
    constructor(configuration){
        this.configuration = configuration;
    }
}
class RequiredError extends Error {
    api;
    method;
    field;
    name;
    constructor(api, method, field){
        super("Required parameter " + field + " was null or undefined when calling " + api + "." + method + "."), this.api = api, this.method = method, this.field = field, this.name = "RequiredError";
    }
}
}),
"[project]/lighter-sdk-ts/generated/models/ObjectSerializer.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ObjectSerializer",
    ()=>ObjectSerializer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Account$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/Account.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$AccountApiKeys$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/AccountApiKeys.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$AccountLimits$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/AccountLimits.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$AccountMarginStats$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/AccountMarginStats.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$AccountMarketStats$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/AccountMarketStats.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$AccountMetadata$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/AccountMetadata.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$AccountMetadatas$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/AccountMetadatas.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$AccountPnL$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/AccountPnL.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$AccountPosition$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/AccountPosition.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$AccountStats$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/AccountStats.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$AccountTradeStats$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/AccountTradeStats.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Announcement$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/Announcement.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Announcements$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/Announcements.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ApiKey$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ApiKey.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Block$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/Block.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Blocks$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/Blocks.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$BridgeSupportedNetwork$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/BridgeSupportedNetwork.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Candlestick$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/Candlestick.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Candlesticks$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/Candlesticks.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ContractAddress$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ContractAddress.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$CurrentHeight$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/CurrentHeight.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Cursor$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/Cursor.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$DailyReturn$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/DailyReturn.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$DepositHistory$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/DepositHistory.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$DepositHistoryItem$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/DepositHistoryItem.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$DetailedAccount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/DetailedAccount.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$DetailedAccounts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/DetailedAccounts.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$DetailedCandlestick$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/DetailedCandlestick.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$EnrichedTx$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/EnrichedTx.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ExchangeStats$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ExchangeStats.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ExportData$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ExportData.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Funding$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/Funding.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$FundingRate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/FundingRate.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$FundingRates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/FundingRates.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Fundings$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/Fundings.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$L1Metadata$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/L1Metadata.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$L1ProviderInfo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/L1ProviderInfo.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$LiqTrade$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/LiqTrade.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Liquidation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/Liquidation.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$LiquidationInfo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/LiquidationInfo.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$LiquidationInfos$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/LiquidationInfos.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$MarketInfo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/MarketInfo.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$NextNonce$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/NextNonce.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Order$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/Order.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$OrderBook$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/OrderBook.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$OrderBookDepth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/OrderBookDepth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$OrderBookDetail$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/OrderBookDetail.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$OrderBookDetails$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/OrderBookDetails.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$OrderBookOrders$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/OrderBookOrders.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$OrderBookStats$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/OrderBookStats.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$OrderBooks$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/OrderBooks.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Orders$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/Orders.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$PnLEntry$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/PnLEntry.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$PositionFunding$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/PositionFunding.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$PositionFundings$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/PositionFundings.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$PriceLevel$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/PriceLevel.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$PublicPool$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/PublicPool.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$PublicPoolInfo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/PublicPoolInfo.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$PublicPoolMetadata$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/PublicPoolMetadata.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$PublicPoolShare$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/PublicPoolShare.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$PublicPools$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/PublicPools.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReferralPointEntry$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReferralPointEntry.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReferralPoints$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReferralPoints.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqExportData$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqExportData.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetAccount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetAccount.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetAccountActiveOrders$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetAccountActiveOrders.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetAccountApiKeys$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetAccountApiKeys.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetAccountByL1Address$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetAccountByL1Address.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetAccountInactiveOrders$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetAccountInactiveOrders.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetAccountLimits$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetAccountLimits.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetAccountMetadata$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetAccountMetadata.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetAccountPnL$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetAccountPnL.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetAccountTxs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetAccountTxs.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetBlock$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetBlock.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetBlockTxs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetBlockTxs.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetByAccount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetByAccount.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetCandlesticks$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetCandlesticks.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetDepositHistory$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetDepositHistory.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetFastWithdrawInfo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetFastWithdrawInfo.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetFundings$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetFundings.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetL1Metadata$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetL1Metadata.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetL1Tx$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetL1Tx.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetLatestDeposit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetLatestDeposit.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetLiquidationInfos$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetLiquidationInfos.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetNextNonce$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetNextNonce.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetOrderBookDetails$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetOrderBookDetails.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetOrderBookOrders$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetOrderBookOrders.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetOrderBooks$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetOrderBooks.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetPositionFunding$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetPositionFunding.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetPublicPools$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetPublicPools.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetPublicPoolsMetadata$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetPublicPoolsMetadata.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetRangeWithCursor$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetRangeWithCursor.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetRangeWithIndex$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetRangeWithIndex.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetRangeWithIndexSortable$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetRangeWithIndexSortable.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetRecentTrades$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetRecentTrades.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetReferralPoints$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetReferralPoints.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetTrades$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetTrades.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetTransferFeeInfo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetTransferFeeInfo.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetTransferHistory$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetTransferHistory.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetTx$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetTx.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetWithdrawHistory$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ReqGetWithdrawHistory.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$RespChangeAccountTier$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/RespChangeAccountTier.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$RespGetFastBridgeInfo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/RespGetFastBridgeInfo.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$RespPublicPoolsMetadata$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/RespPublicPoolsMetadata.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$RespSendTx$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/RespSendTx.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$RespSendTxBatch$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/RespSendTxBatch.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$RespWithdrawalDelay$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/RespWithdrawalDelay.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ResultCode$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ResultCode.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$RiskInfo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/RiskInfo.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$RiskParameters$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/RiskParameters.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$SharePrice$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/SharePrice.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$SimpleOrder$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/SimpleOrder.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Status$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/Status.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$SubAccounts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/SubAccounts.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Ticker$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/Ticker.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Trade$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/Trade.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Trades$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/Trades.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$TransferFeeInfo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/TransferFeeInfo.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$TransferHistory$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/TransferHistory.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$TransferHistoryItem$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/TransferHistoryItem.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Tx$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/Tx.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$TxHash$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/TxHash.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$TxHashes$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/TxHashes.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Txs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/Txs.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ValidatorInfo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ValidatorInfo.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$WithdrawHistory$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/WithdrawHistory.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$WithdrawHistoryItem$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/WithdrawHistoryItem.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ZkLighterInfo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ZkLighterInfo.ts [app-route] (ecmascript)");
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
;
;
;
;
/* tslint:disable:no-unused-variable */ let primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
let enumsMap = new Set([
    "DepositHistoryItemStatusEnum",
    "FundingRateExchangeEnum",
    "LiquidationTypeEnum",
    "OrderTypeEnum",
    "OrderTimeInForceEnum",
    "OrderStatusEnum",
    "OrderTriggerStatusEnum",
    "OrderBookStatusEnum",
    "OrderBookDetailStatusEnum",
    "PositionFundingPositionSideEnum",
    "ReqExportDataTypeEnum",
    "ReqGetAccountByEnum",
    "ReqGetAccountMetadataByEnum",
    "ReqGetAccountPnLByEnum",
    "ReqGetAccountPnLResolutionEnum",
    "ReqGetAccountTxsByEnum",
    "ReqGetBlockByEnum",
    "ReqGetBlockTxsByEnum",
    "ReqGetByAccountByEnum",
    "ReqGetCandlesticksResolutionEnum",
    "ReqGetDepositHistoryFilterEnum",
    "ReqGetFundingsResolutionEnum",
    "ReqGetPositionFundingSideEnum",
    "ReqGetPublicPoolsFilterEnum",
    "ReqGetPublicPoolsMetadataFilterEnum",
    "ReqGetRangeWithIndexSortableSortEnum",
    "ReqGetTradesSortByEnum",
    "ReqGetTradesSortDirEnum",
    "ReqGetTxByEnum",
    "ReqGetWithdrawHistoryFilterEnum",
    "TradeTypeEnum",
    "TransferHistoryItemTypeEnum",
    "WithdrawHistoryItemStatusEnum",
    "WithdrawHistoryItemTypeEnum"
]);
let typeMap = {
    "Account": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Account$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Account"],
    "AccountApiKeys": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$AccountApiKeys$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AccountApiKeys"],
    "AccountLimits": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$AccountLimits$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AccountLimits"],
    "AccountMarginStats": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$AccountMarginStats$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AccountMarginStats"],
    "AccountMarketStats": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$AccountMarketStats$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AccountMarketStats"],
    "AccountMetadata": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$AccountMetadata$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AccountMetadata"],
    "AccountMetadatas": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$AccountMetadatas$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AccountMetadatas"],
    "AccountPnL": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$AccountPnL$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AccountPnL"],
    "AccountPosition": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$AccountPosition$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AccountPosition"],
    "AccountStats": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$AccountStats$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AccountStats"],
    "AccountTradeStats": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$AccountTradeStats$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AccountTradeStats"],
    "Announcement": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Announcement$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Announcement"],
    "Announcements": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Announcements$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Announcements"],
    "ApiKey": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ApiKey$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiKey"],
    "Block": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Block$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Block"],
    "Blocks": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Blocks$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Blocks"],
    "BridgeSupportedNetwork": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$BridgeSupportedNetwork$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BridgeSupportedNetwork"],
    "Candlestick": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Candlestick$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Candlestick"],
    "Candlesticks": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Candlesticks$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Candlesticks"],
    "ContractAddress": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ContractAddress$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ContractAddress"],
    "CurrentHeight": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$CurrentHeight$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CurrentHeight"],
    "Cursor": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Cursor$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Cursor"],
    "DailyReturn": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$DailyReturn$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DailyReturn"],
    "DepositHistory": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$DepositHistory$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DepositHistory"],
    "DepositHistoryItem": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$DepositHistoryItem$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DepositHistoryItem"],
    "DetailedAccount": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$DetailedAccount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DetailedAccount"],
    "DetailedAccounts": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$DetailedAccounts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DetailedAccounts"],
    "DetailedCandlestick": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$DetailedCandlestick$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DetailedCandlestick"],
    "EnrichedTx": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$EnrichedTx$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EnrichedTx"],
    "ExchangeStats": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ExchangeStats$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ExchangeStats"],
    "ExportData": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ExportData$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ExportData"],
    "Funding": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Funding$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Funding"],
    "FundingRate": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$FundingRate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["FundingRate"],
    "FundingRates": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$FundingRates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["FundingRates"],
    "Fundings": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Fundings$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Fundings"],
    "L1Metadata": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$L1Metadata$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["L1Metadata"],
    "L1ProviderInfo": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$L1ProviderInfo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["L1ProviderInfo"],
    "LiqTrade": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$LiqTrade$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LiqTrade"],
    "Liquidation": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Liquidation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Liquidation"],
    "LiquidationInfo": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$LiquidationInfo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LiquidationInfo"],
    "LiquidationInfos": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$LiquidationInfos$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LiquidationInfos"],
    "MarketInfo": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$MarketInfo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MarketInfo"],
    "NextNonce": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$NextNonce$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextNonce"],
    "Order": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Order$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Order"],
    "OrderBook": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$OrderBook$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderBook"],
    "OrderBookDepth": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$OrderBookDepth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderBookDepth"],
    "OrderBookDetail": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$OrderBookDetail$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderBookDetail"],
    "OrderBookDetails": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$OrderBookDetails$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderBookDetails"],
    "OrderBookOrders": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$OrderBookOrders$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderBookOrders"],
    "OrderBookStats": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$OrderBookStats$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderBookStats"],
    "OrderBooks": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$OrderBooks$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderBooks"],
    "Orders": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Orders$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Orders"],
    "PnLEntry": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$PnLEntry$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PnLEntry"],
    "PositionFunding": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$PositionFunding$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PositionFunding"],
    "PositionFundings": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$PositionFundings$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PositionFundings"],
    "PriceLevel": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$PriceLevel$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PriceLevel"],
    "PublicPool": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$PublicPool$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PublicPool"],
    "PublicPoolInfo": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$PublicPoolInfo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PublicPoolInfo"],
    "PublicPoolMetadata": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$PublicPoolMetadata$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PublicPoolMetadata"],
    "PublicPoolShare": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$PublicPoolShare$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PublicPoolShare"],
    "PublicPools": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$PublicPools$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PublicPools"],
    "ReferralPointEntry": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReferralPointEntry$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReferralPointEntry"],
    "ReferralPoints": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReferralPoints$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReferralPoints"],
    "ReqExportData": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqExportData$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReqExportData"],
    "ReqGetAccount": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetAccount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReqGetAccount"],
    "ReqGetAccountActiveOrders": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetAccountActiveOrders$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReqGetAccountActiveOrders"],
    "ReqGetAccountApiKeys": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetAccountApiKeys$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReqGetAccountApiKeys"],
    "ReqGetAccountByL1Address": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetAccountByL1Address$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReqGetAccountByL1Address"],
    "ReqGetAccountInactiveOrders": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetAccountInactiveOrders$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReqGetAccountInactiveOrders"],
    "ReqGetAccountLimits": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetAccountLimits$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReqGetAccountLimits"],
    "ReqGetAccountMetadata": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetAccountMetadata$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReqGetAccountMetadata"],
    "ReqGetAccountPnL": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetAccountPnL$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReqGetAccountPnL"],
    "ReqGetAccountTxs": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetAccountTxs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReqGetAccountTxs"],
    "ReqGetBlock": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetBlock$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReqGetBlock"],
    "ReqGetBlockTxs": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetBlockTxs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReqGetBlockTxs"],
    "ReqGetByAccount": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetByAccount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReqGetByAccount"],
    "ReqGetCandlesticks": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetCandlesticks$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReqGetCandlesticks"],
    "ReqGetDepositHistory": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetDepositHistory$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReqGetDepositHistory"],
    "ReqGetFastWithdrawInfo": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetFastWithdrawInfo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReqGetFastWithdrawInfo"],
    "ReqGetFundings": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetFundings$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReqGetFundings"],
    "ReqGetL1Metadata": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetL1Metadata$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReqGetL1Metadata"],
    "ReqGetL1Tx": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetL1Tx$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReqGetL1Tx"],
    "ReqGetLatestDeposit": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetLatestDeposit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReqGetLatestDeposit"],
    "ReqGetLiquidationInfos": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetLiquidationInfos$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReqGetLiquidationInfos"],
    "ReqGetNextNonce": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetNextNonce$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReqGetNextNonce"],
    "ReqGetOrderBookDetails": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetOrderBookDetails$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReqGetOrderBookDetails"],
    "ReqGetOrderBookOrders": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetOrderBookOrders$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReqGetOrderBookOrders"],
    "ReqGetOrderBooks": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetOrderBooks$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReqGetOrderBooks"],
    "ReqGetPositionFunding": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetPositionFunding$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReqGetPositionFunding"],
    "ReqGetPublicPools": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetPublicPools$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReqGetPublicPools"],
    "ReqGetPublicPoolsMetadata": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetPublicPoolsMetadata$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReqGetPublicPoolsMetadata"],
    "ReqGetRangeWithCursor": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetRangeWithCursor$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReqGetRangeWithCursor"],
    "ReqGetRangeWithIndex": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetRangeWithIndex$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReqGetRangeWithIndex"],
    "ReqGetRangeWithIndexSortable": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetRangeWithIndexSortable$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReqGetRangeWithIndexSortable"],
    "ReqGetRecentTrades": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetRecentTrades$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReqGetRecentTrades"],
    "ReqGetReferralPoints": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetReferralPoints$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReqGetReferralPoints"],
    "ReqGetTrades": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetTrades$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReqGetTrades"],
    "ReqGetTransferFeeInfo": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetTransferFeeInfo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReqGetTransferFeeInfo"],
    "ReqGetTransferHistory": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetTransferHistory$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReqGetTransferHistory"],
    "ReqGetTx": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetTx$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReqGetTx"],
    "ReqGetWithdrawHistory": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ReqGetWithdrawHistory$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReqGetWithdrawHistory"],
    "RespChangeAccountTier": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$RespChangeAccountTier$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RespChangeAccountTier"],
    "RespGetFastBridgeInfo": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$RespGetFastBridgeInfo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RespGetFastBridgeInfo"],
    "RespPublicPoolsMetadata": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$RespPublicPoolsMetadata$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RespPublicPoolsMetadata"],
    "RespSendTx": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$RespSendTx$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RespSendTx"],
    "RespSendTxBatch": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$RespSendTxBatch$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RespSendTxBatch"],
    "RespWithdrawalDelay": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$RespWithdrawalDelay$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RespWithdrawalDelay"],
    "ResultCode": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ResultCode$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ResultCode"],
    "RiskInfo": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$RiskInfo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RiskInfo"],
    "RiskParameters": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$RiskParameters$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RiskParameters"],
    "SharePrice": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$SharePrice$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SharePrice"],
    "SimpleOrder": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$SimpleOrder$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SimpleOrder"],
    "Status": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Status$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Status"],
    "SubAccounts": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$SubAccounts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SubAccounts"],
    "Ticker": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Ticker$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Ticker"],
    "Trade": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Trade$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Trade"],
    "Trades": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Trades$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Trades"],
    "TransferFeeInfo": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$TransferFeeInfo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TransferFeeInfo"],
    "TransferHistory": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$TransferHistory$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TransferHistory"],
    "TransferHistoryItem": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$TransferHistoryItem$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TransferHistoryItem"],
    "Tx": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Tx$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Tx"],
    "TxHash": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$TxHash$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TxHash"],
    "TxHashes": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$TxHashes$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TxHashes"],
    "Txs": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$Txs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Txs"],
    "ValidatorInfo": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ValidatorInfo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ValidatorInfo"],
    "WithdrawHistory": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$WithdrawHistory$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["WithdrawHistory"],
    "WithdrawHistoryItem": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$WithdrawHistoryItem$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["WithdrawHistoryItem"],
    "ZkLighterInfo": __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ZkLighterInfo$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZkLighterInfo"]
};
/**
 * Every mime-type consists of a type, subtype, and optional parameters.
 * The subtype can be composite, including information about the content format.
 * For example: `application/json-patch+json`, `application/merge-patch+json`.
 *
 * This helper transforms a string mime-type into an internal representation.
 * This simplifies the implementation of predicates that in turn define common rules for parsing or stringifying
 * the payload.
 */ const parseMimeType = (mimeType)=>{
    const [type = '', subtype = ''] = mimeType.split('/');
    return {
        type,
        subtype,
        subtypeTokens: subtype.split('+')
    };
};
// This factory creates a predicate function that checks a string mime-type against defined rules.
const mimeTypePredicateFactory = (predicate)=>(mimeType)=>predicate(parseMimeType(mimeType));
// Use this factory when you need to define a simple predicate based only on type and, if applicable, subtype.
const mimeTypeSimplePredicateFactory = (type, subtype)=>mimeTypePredicateFactory((descriptor)=>{
        if (descriptor.type !== type) return false;
        if (subtype != null && descriptor.subtype !== subtype) return false;
        return true;
    });
// Creating a set of named predicates that will help us determine how to handle different mime-types
const isTextLikeMimeType = mimeTypeSimplePredicateFactory('text');
const isJsonMimeType = mimeTypeSimplePredicateFactory('application', 'json');
const isJsonLikeMimeType = mimeTypePredicateFactory((descriptor)=>descriptor.type === 'application' && descriptor.subtypeTokens.some((item)=>item === 'json'));
const isOctetStreamMimeType = mimeTypeSimplePredicateFactory('application', 'octet-stream');
const isFormUrlencodedMimeType = mimeTypeSimplePredicateFactory('application', 'x-www-form-urlencoded');
// Defining a list of mime-types in the order of prioritization for handling.
const supportedMimeTypePredicatesWithPriority = [
    isJsonMimeType,
    isJsonLikeMimeType,
    isTextLikeMimeType,
    isOctetStreamMimeType,
    isFormUrlencodedMimeType
];
const nullableSuffix = " | null";
const optionalSuffix = " | undefined";
const arrayPrefix = "Array<";
const arraySuffix = ">";
const mapPrefix = "{ [key: string]: ";
const mapSuffix = "; }";
class ObjectSerializer {
    static findCorrectType(data, expectedType) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }
            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    let mapping = typeMap[expectedType].mapping;
                    if (mapping != undefined && mapping[discriminatorType]) {
                        return mapping[discriminatorType]; // use the type given in the discriminator
                    } else if (typeMap[discriminatorType]) {
                        return discriminatorType;
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }
    static serialize(data, type, format) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.endsWith(nullableSuffix)) {
            let subType = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType, format);
        } else if (type.endsWith(optionalSuffix)) {
            let subType = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType, format);
        } else if (type.startsWith(arrayPrefix)) {
            let subType = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData = [];
            for (let date of data){
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type.startsWith(mapPrefix)) {
            let subType = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData = {};
            for(let key in data){
                transformedData[key] = ObjectSerializer.serialize(data[key], subType, format);
            }
            return transformedData;
        } else if (type === "Date") {
            if (!(data instanceof Date)) {
                return data;
            }
            if (format == "date") {
                let month = data.getMonth() + 1;
                let monthStr = month < 10 ? "0" + month.toString() : month.toString();
                let day = data.getDate();
                let dayStr = day < 10 ? "0" + day.toString() : day.toString();
                return data.getFullYear() + "-" + monthStr + "-" + dayStr;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            // Get the actual type of this object
            type = this.findCorrectType(data, type);
            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance = {};
            for (let attributeType of attributeTypes){
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }
    static deserialize(data, type, format) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.endsWith(nullableSuffix)) {
            let subType = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType, format);
        } else if (type.endsWith(optionalSuffix)) {
            let subType = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType, format);
        } else if (type.startsWith(arrayPrefix)) {
            let subType = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData = [];
            for (let date of data){
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type.startsWith(mapPrefix)) {
            let subType = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData = {};
            for(let key in data){
                transformedData[key] = ObjectSerializer.deserialize(data[key], subType, format);
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes){
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }
    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */ static normalizeMediaType(mediaType) {
        if (mediaType === undefined) {
            return undefined;
        }
        return (mediaType.split(";")[0] ?? '').trim().toLowerCase();
    }
    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */ static getPreferredMediaType(mediaTypes) {
        /** According to OAS 3 we should default to json */ if (mediaTypes.length === 0) {
            return "application/json";
        }
        const normalMediaTypes = mediaTypes.map(ObjectSerializer.normalizeMediaType);
        for (const predicate of supportedMimeTypePredicatesWithPriority){
            for (const mediaType of normalMediaTypes){
                if (mediaType != null && predicate(mediaType)) {
                    return mediaType;
                }
            }
        }
        throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
    }
    /**
     * Convert data to a string according the given media type
     */ static stringify(data, mediaType) {
        if (isTextLikeMimeType(mediaType)) {
            return String(data);
        }
        if (isJsonLikeMimeType(mediaType)) {
            return JSON.stringify(data);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }
    /**
     * Parse data from a string according to the given media type
     */ static parse(rawData, mediaType) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }
        if (isTextLikeMimeType(mediaType)) {
            return rawData;
        }
        if (isJsonLikeMimeType(mediaType)) {
            return JSON.parse(rawData);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
}),
"[project]/lighter-sdk-ts/generated/util.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Returns if a specific http code is in a given code range
 * where the code range is defined as a combination of digits
 * and "X" (the letter X) with a length of 3
 *
 * @param codeRange string with length 3 consisting of digits and "X" (the letter X)
 * @param code the http status code to be checked against the code range
 */ __turbopack_context__.s([
    "canConsumeForm",
    ()=>canConsumeForm,
    "isCodeInRange",
    ()=>isCodeInRange
]);
function isCodeInRange(codeRange, code) {
    // This is how the default value is encoded in OAG
    if (codeRange === "0") {
        return true;
    }
    if (codeRange == code.toString()) {
        return true;
    } else {
        const codeString = code.toString();
        if (codeString.length != codeRange.length) {
            return false;
        }
        for(let i = 0; i < codeString.length; i++){
            if (codeRange.charAt(i) != "X" && codeRange.charAt(i) != codeString.charAt(i)) {
                return false;
            }
        }
        return true;
    }
}
function canConsumeForm(contentTypes) {
    return contentTypes.indexOf('multipart/form-data') !== -1;
}
}),
"[project]/lighter-sdk-ts/generated/apis/AccountApi.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// TODO: better import syntax?
__turbopack_context__.s([
    "AccountApiRequestFactory",
    ()=>AccountApiRequestFactory,
    "AccountApiResponseProcessor",
    ()=>AccountApiResponseProcessor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/apis/baseapi.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/http/http.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ObjectSerializer.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/apis/exception.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/util.ts [app-route] (ecmascript)");
;
;
;
;
;
class AccountApiRequestFactory extends __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseAPIRequestFactory"] {
    /**
     * Get account by account\'s index. <br>More details about account index: [Account Index](https://apidocs.lighter.xyz/docs/account-index)<hr>**Response Description:**<br><br>1) **Status:** 1 is active 0 is inactive.<br>2) **Collateral:** The amount of collateral in the account.<hr>**Position Details Description:**<br>1) **OOC:** Open order count in that market.<br>2) **Sign:** 1 for Long, -1 for Short.<br>3) **Position:** The amount of position in that market.<br>4) **Avg Entry Price:** The average entry price of the position.<br>5) **Position Value:** The value of the position.<br>6) **Unrealized PnL:** The unrealized profit and loss of the position.<br>7) **Realized PnL:** The realized profit and loss of the position.
     * account
     * @param by 
     * @param value 
     */ async account(by, value, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'by' is not null or undefined
        if (by === null || by === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("AccountApi", "account", "by");
        }
        // verify required parameter 'value' is not null or undefined
        if (value === null || value === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("AccountApi", "account", "value");
        }
        // Path Params
        const localVarPath = '/api/v1/account';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpMethod"].GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (by !== undefined) {
            requestContext.setQueryParam("by", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(by, "'index' | 'l1_address'", ""));
        }
        // Query Params
        if (value !== undefined) {
            requestContext.setQueryParam("value", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(value, "string", ""));
        }
        const defaultAuth = _config?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    /**
     * Get account limits
     * accountLimits
     * @param accountIndex 
     * @param authorization  make required after integ is done
     * @param auth  made optional to support header auth clients
     */ async accountLimits(accountIndex, authorization, auth, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'accountIndex' is not null or undefined
        if (accountIndex === null || accountIndex === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("AccountApi", "accountLimits", "accountIndex");
        }
        // Path Params
        const localVarPath = '/api/v1/accountLimits';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpMethod"].GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (accountIndex !== undefined) {
            requestContext.setQueryParam("account_index", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(accountIndex, "number", "int64"));
        }
        // Query Params
        if (auth !== undefined) {
            requestContext.setQueryParam("auth", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(auth, "string", ""));
        }
        // Header Params
        requestContext.setHeaderParam("authorization", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(authorization, "string", ""));
        const defaultAuth = _config?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    /**
     * Get account metadatas
     * accountMetadata
     * @param by 
     * @param value 
     * @param authorization 
     * @param auth 
     */ async accountMetadata(by, value, authorization, auth, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'by' is not null or undefined
        if (by === null || by === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("AccountApi", "accountMetadata", "by");
        }
        // verify required parameter 'value' is not null or undefined
        if (value === null || value === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("AccountApi", "accountMetadata", "value");
        }
        // Path Params
        const localVarPath = '/api/v1/accountMetadata';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpMethod"].GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (by !== undefined) {
            requestContext.setQueryParam("by", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(by, "'index' | 'l1_address'", ""));
        }
        // Query Params
        if (value !== undefined) {
            requestContext.setQueryParam("value", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(value, "string", ""));
        }
        // Query Params
        if (auth !== undefined) {
            requestContext.setQueryParam("auth", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(auth, "string", ""));
        }
        // Header Params
        requestContext.setHeaderParam("authorization", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(authorization, "string", ""));
        const defaultAuth = _config?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    /**
     * Get accounts by l1_address returns all accounts associated with the given L1 address
     * accountsByL1Address
     * @param l1Address 
     */ async accountsByL1Address(l1Address, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'l1Address' is not null or undefined
        if (l1Address === null || l1Address === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("AccountApi", "accountsByL1Address", "l1Address");
        }
        // Path Params
        const localVarPath = '/api/v1/accountsByL1Address';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpMethod"].GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (l1Address !== undefined) {
            requestContext.setQueryParam("l1_address", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(l1Address, "string", ""));
        }
        const defaultAuth = _config?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    /**
     * Get account api key. Set `api_key_index` to 255 to retrieve all api keys associated with the account.
     * apikeys
     * @param accountIndex 
     * @param apiKeyIndex 
     */ async apikeys(accountIndex, apiKeyIndex, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'accountIndex' is not null or undefined
        if (accountIndex === null || accountIndex === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("AccountApi", "apikeys", "accountIndex");
        }
        // Path Params
        const localVarPath = '/api/v1/apikeys';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpMethod"].GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (accountIndex !== undefined) {
            requestContext.setQueryParam("account_index", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(accountIndex, "number", "int64"));
        }
        // Query Params
        if (apiKeyIndex !== undefined) {
            requestContext.setQueryParam("api_key_index", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(apiKeyIndex, "number", "uint8"));
        }
        const defaultAuth = _config?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    /**
     * Change account tier
     * changeAccountTier
     * @param accountIndex 
     * @param newTier 
     * @param authorization  make required after integ is done
     * @param auth  made optional to support header auth clients
     */ async changeAccountTier(accountIndex, newTier, authorization, auth, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'accountIndex' is not null or undefined
        if (accountIndex === null || accountIndex === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("AccountApi", "changeAccountTier", "accountIndex");
        }
        // verify required parameter 'newTier' is not null or undefined
        if (newTier === null || newTier === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("AccountApi", "changeAccountTier", "newTier");
        }
        // Path Params
        const localVarPath = '/api/v1/changeAccountTier';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpMethod"].POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Header Params
        requestContext.setHeaderParam("authorization", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(authorization, "string", ""));
        // Form Params
        const useForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["canConsumeForm"])([
            'multipart/form-data'
        ]);
        let localVarFormParams;
        if (useForm) {
            localVarFormParams = new FormData();
        } else {
            localVarFormParams = new URLSearchParams();
        }
        if (auth !== undefined) {
            // TODO: replace .append with .set
            localVarFormParams.append('auth', auth);
        }
        if (accountIndex !== undefined) {
            // TODO: replace .append with .set
            localVarFormParams.append('account_index', accountIndex);
        }
        if (newTier !== undefined) {
            // TODO: replace .append with .set
            localVarFormParams.append('new_tier', newTier);
        }
        requestContext.setBody(localVarFormParams);
        if (!useForm) {
            const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].getPreferredMediaType([
                "multipart/form-data"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
        }
        const defaultAuth = _config?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    /**
     * Get L1 metadata
     * l1Metadata
     * @param l1Address 
     * @param authorization  make required after integ is done
     * @param auth  made optional to support header auth clients
     */ async l1Metadata(l1Address, authorization, auth, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'l1Address' is not null or undefined
        if (l1Address === null || l1Address === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("AccountApi", "l1Metadata", "l1Address");
        }
        // Path Params
        const localVarPath = '/api/v1/l1Metadata';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpMethod"].GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (auth !== undefined) {
            requestContext.setQueryParam("auth", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(auth, "string", ""));
        }
        // Query Params
        if (l1Address !== undefined) {
            requestContext.setQueryParam("l1_address", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(l1Address, "string", ""));
        }
        // Header Params
        requestContext.setHeaderParam("authorization", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(authorization, "string", ""));
        const defaultAuth = _config?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    /**
     * Get liquidation infos
     * liquidations
     * @param accountIndex 
     * @param limit 
     * @param authorization  make required after integ is done
     * @param auth  made optional to support header auth clients
     * @param marketId 
     * @param cursor 
     */ async liquidations(accountIndex, limit, authorization, auth, marketId, cursor, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'accountIndex' is not null or undefined
        if (accountIndex === null || accountIndex === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("AccountApi", "liquidations", "accountIndex");
        }
        // verify required parameter 'limit' is not null or undefined
        if (limit === null || limit === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("AccountApi", "liquidations", "limit");
        }
        // Path Params
        const localVarPath = '/api/v1/liquidations';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpMethod"].GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (auth !== undefined) {
            requestContext.setQueryParam("auth", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(auth, "string", ""));
        }
        // Query Params
        if (accountIndex !== undefined) {
            requestContext.setQueryParam("account_index", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(accountIndex, "number", "int64"));
        }
        // Query Params
        if (marketId !== undefined) {
            requestContext.setQueryParam("market_id", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(marketId, "number", "uint8"));
        }
        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(cursor, "string", ""));
        }
        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(limit, "number", "int64"));
        }
        // Header Params
        requestContext.setHeaderParam("authorization", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(authorization, "string", ""));
        const defaultAuth = _config?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    /**
     * Get account PnL chart
     * pnl
     * @param by 
     * @param value 
     * @param resolution 
     * @param startTimestamp 
     * @param endTimestamp 
     * @param countBack 
     * @param authorization 
     * @param auth 
     * @param ignoreTransfers 
     */ async pnl(by, value, resolution, startTimestamp, endTimestamp, countBack, authorization, auth, ignoreTransfers, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'by' is not null or undefined
        if (by === null || by === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("AccountApi", "pnl", "by");
        }
        // verify required parameter 'value' is not null or undefined
        if (value === null || value === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("AccountApi", "pnl", "value");
        }
        // verify required parameter 'resolution' is not null or undefined
        if (resolution === null || resolution === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("AccountApi", "pnl", "resolution");
        }
        // verify required parameter 'startTimestamp' is not null or undefined
        if (startTimestamp === null || startTimestamp === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("AccountApi", "pnl", "startTimestamp");
        }
        // verify required parameter 'endTimestamp' is not null or undefined
        if (endTimestamp === null || endTimestamp === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("AccountApi", "pnl", "endTimestamp");
        }
        // verify required parameter 'countBack' is not null or undefined
        if (countBack === null || countBack === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("AccountApi", "pnl", "countBack");
        }
        // Path Params
        const localVarPath = '/api/v1/pnl';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpMethod"].GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (auth !== undefined) {
            requestContext.setQueryParam("auth", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(auth, "string", ""));
        }
        // Query Params
        if (by !== undefined) {
            requestContext.setQueryParam("by", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(by, "'index'", ""));
        }
        // Query Params
        if (value !== undefined) {
            requestContext.setQueryParam("value", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(value, "string", ""));
        }
        // Query Params
        if (resolution !== undefined) {
            requestContext.setQueryParam("resolution", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(resolution, "'1m' | '5m' | '15m' | '1h' | '4h' | '1d'", ""));
        }
        // Query Params
        if (startTimestamp !== undefined) {
            requestContext.setQueryParam("start_timestamp", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(startTimestamp, "number", "int64"));
        }
        // Query Params
        if (endTimestamp !== undefined) {
            requestContext.setQueryParam("end_timestamp", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(endTimestamp, "number", "int64"));
        }
        // Query Params
        if (countBack !== undefined) {
            requestContext.setQueryParam("count_back", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(countBack, "number", "int64"));
        }
        // Query Params
        if (ignoreTransfers !== undefined) {
            requestContext.setQueryParam("ignore_transfers", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(ignoreTransfers, "boolean", "boolean"));
        }
        // Header Params
        requestContext.setHeaderParam("authorization", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(authorization, "string", ""));
        const defaultAuth = _config?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    /**
     * Get accounts position fundings
     * positionFunding
     * @param accountIndex 
     * @param limit 
     * @param authorization 
     * @param auth 
     * @param marketId 
     * @param cursor 
     * @param side 
     */ async positionFunding(accountIndex, limit, authorization, auth, marketId, cursor, side, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'accountIndex' is not null or undefined
        if (accountIndex === null || accountIndex === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("AccountApi", "positionFunding", "accountIndex");
        }
        // verify required parameter 'limit' is not null or undefined
        if (limit === null || limit === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("AccountApi", "positionFunding", "limit");
        }
        // Path Params
        const localVarPath = '/api/v1/positionFunding';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpMethod"].GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (auth !== undefined) {
            requestContext.setQueryParam("auth", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(auth, "string", ""));
        }
        // Query Params
        if (accountIndex !== undefined) {
            requestContext.setQueryParam("account_index", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(accountIndex, "number", "int64"));
        }
        // Query Params
        if (marketId !== undefined) {
            requestContext.setQueryParam("market_id", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(marketId, "number", "uint8"));
        }
        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(cursor, "string", ""));
        }
        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(limit, "number", "int64"));
        }
        // Query Params
        if (side !== undefined) {
            requestContext.setQueryParam("side", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(side, "'long' | 'short' | 'all'", ""));
        }
        // Header Params
        requestContext.setHeaderParam("authorization", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(authorization, "string", ""));
        const defaultAuth = _config?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    /**
     * Get public pools
     * publicPools
     * @param index 
     * @param limit 
     * @param authorization 
     * @param auth 
     * @param filter 
     * @param accountIndex 
     */ async publicPools(index, limit, authorization, auth, filter, accountIndex, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'index' is not null or undefined
        if (index === null || index === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("AccountApi", "publicPools", "index");
        }
        // verify required parameter 'limit' is not null or undefined
        if (limit === null || limit === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("AccountApi", "publicPools", "limit");
        }
        // Path Params
        const localVarPath = '/api/v1/publicPools';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpMethod"].GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (auth !== undefined) {
            requestContext.setQueryParam("auth", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(auth, "string", ""));
        }
        // Query Params
        if (filter !== undefined) {
            requestContext.setQueryParam("filter", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(filter, "'all' | 'user' | 'protocol' | 'account_index'", ""));
        }
        // Query Params
        if (index !== undefined) {
            requestContext.setQueryParam("index", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(index, "number", "int64"));
        }
        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(limit, "number", "int64"));
        }
        // Query Params
        if (accountIndex !== undefined) {
            requestContext.setQueryParam("account_index", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(accountIndex, "number", "int64"));
        }
        // Header Params
        requestContext.setHeaderParam("authorization", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(authorization, "string", ""));
        const defaultAuth = _config?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    /**
     * Get public pools metadata
     * publicPoolsMetadata
     * @param index 
     * @param limit 
     * @param authorization 
     * @param auth 
     * @param filter 
     * @param accountIndex 
     */ async publicPoolsMetadata(index, limit, authorization, auth, filter, accountIndex, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'index' is not null or undefined
        if (index === null || index === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("AccountApi", "publicPoolsMetadata", "index");
        }
        // verify required parameter 'limit' is not null or undefined
        if (limit === null || limit === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("AccountApi", "publicPoolsMetadata", "limit");
        }
        // Path Params
        const localVarPath = '/api/v1/publicPoolsMetadata';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpMethod"].GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (auth !== undefined) {
            requestContext.setQueryParam("auth", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(auth, "string", ""));
        }
        // Query Params
        if (filter !== undefined) {
            requestContext.setQueryParam("filter", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(filter, "'all' | 'user' | 'protocol' | 'account_index'", ""));
        }
        // Query Params
        if (index !== undefined) {
            requestContext.setQueryParam("index", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(index, "number", "int64"));
        }
        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(limit, "number", "int64"));
        }
        // Query Params
        if (accountIndex !== undefined) {
            requestContext.setQueryParam("account_index", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(accountIndex, "number", "int64"));
        }
        // Header Params
        requestContext.setHeaderParam("authorization", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(authorization, "string", ""));
        const defaultAuth = _config?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
}
class AccountApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to account
     * @throws ApiException if the response code was not in [200, 299]
     */ async accountWithHttpInfo(response) {
        const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].normalizeMediaType(response.headers["content-type"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("200", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "DetailedAccounts", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("400", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ResultCode", "");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Bad request", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "DetailedAccounts", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to accountLimits
     * @throws ApiException if the response code was not in [200, 299]
     */ async accountLimitsWithHttpInfo(response) {
        const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].normalizeMediaType(response.headers["content-type"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("200", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "AccountLimits", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("400", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ResultCode", "");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Bad request", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "AccountLimits", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to accountMetadata
     * @throws ApiException if the response code was not in [200, 299]
     */ async accountMetadataWithHttpInfo(response) {
        const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].normalizeMediaType(response.headers["content-type"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("200", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "AccountMetadatas", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("400", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ResultCode", "");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Bad request", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "AccountMetadatas", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to accountsByL1Address
     * @throws ApiException if the response code was not in [200, 299]
     */ async accountsByL1AddressWithHttpInfo(response) {
        const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].normalizeMediaType(response.headers["content-type"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("200", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "SubAccounts", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("400", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ResultCode", "");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Bad request", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "SubAccounts", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to apikeys
     * @throws ApiException if the response code was not in [200, 299]
     */ async apikeysWithHttpInfo(response) {
        const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].normalizeMediaType(response.headers["content-type"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("200", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "AccountApiKeys", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("400", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ResultCode", "");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Bad request", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "AccountApiKeys", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to changeAccountTier
     * @throws ApiException if the response code was not in [200, 299]
     */ async changeAccountTierWithHttpInfo(response) {
        const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].normalizeMediaType(response.headers["content-type"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("200", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "RespChangeAccountTier", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("400", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ResultCode", "");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Bad request", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "RespChangeAccountTier", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to l1Metadata
     * @throws ApiException if the response code was not in [200, 299]
     */ async l1MetadataWithHttpInfo(response) {
        const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].normalizeMediaType(response.headers["content-type"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("200", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "L1Metadata", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("400", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ResultCode", "");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Bad request", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "L1Metadata", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to liquidations
     * @throws ApiException if the response code was not in [200, 299]
     */ async liquidationsWithHttpInfo(response) {
        const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].normalizeMediaType(response.headers["content-type"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("200", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "LiquidationInfos", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("400", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ResultCode", "");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Bad request", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "LiquidationInfos", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to pnl
     * @throws ApiException if the response code was not in [200, 299]
     */ async pnlWithHttpInfo(response) {
        const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].normalizeMediaType(response.headers["content-type"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("200", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "AccountPnL", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("400", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ResultCode", "");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Bad request", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "AccountPnL", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to positionFunding
     * @throws ApiException if the response code was not in [200, 299]
     */ async positionFundingWithHttpInfo(response) {
        const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].normalizeMediaType(response.headers["content-type"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("200", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "PositionFundings", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("400", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ResultCode", "");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Bad request", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "PositionFundings", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to publicPools
     * @throws ApiException if the response code was not in [200, 299]
     */ async publicPoolsWithHttpInfo(response) {
        const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].normalizeMediaType(response.headers["content-type"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("200", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "PublicPools", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("400", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ResultCode", "");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Bad request", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "PublicPools", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to publicPoolsMetadata
     * @throws ApiException if the response code was not in [200, 299]
     */ async publicPoolsMetadataWithHttpInfo(response) {
        const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].normalizeMediaType(response.headers["content-type"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("200", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "RespPublicPoolsMetadata", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("400", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ResultCode", "");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Bad request", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "RespPublicPoolsMetadata", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
}
}),
"[project]/lighter-sdk-ts/generated/apis/AnnouncementApi.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// TODO: better import syntax?
__turbopack_context__.s([
    "AnnouncementApiRequestFactory",
    ()=>AnnouncementApiRequestFactory,
    "AnnouncementApiResponseProcessor",
    ()=>AnnouncementApiResponseProcessor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/apis/baseapi.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/http/http.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ObjectSerializer.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/apis/exception.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/util.ts [app-route] (ecmascript)");
;
;
;
;
;
class AnnouncementApiRequestFactory extends __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseAPIRequestFactory"] {
    /**
     * Get announcement
     * announcement
     */ async announcement(_options) {
        let _config = _options || this.configuration;
        // Path Params
        const localVarPath = '/api/v1/announcement';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpMethod"].GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        const defaultAuth = _config?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
}
class AnnouncementApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to announcement
     * @throws ApiException if the response code was not in [200, 299]
     */ async announcementWithHttpInfo(response) {
        const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].normalizeMediaType(response.headers["content-type"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("200", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "Announcements", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("400", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ResultCode", "");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Bad request", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "Announcements", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
}
}),
"[project]/lighter-sdk-ts/generated/apis/BlockApi.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// TODO: better import syntax?
__turbopack_context__.s([
    "BlockApiRequestFactory",
    ()=>BlockApiRequestFactory,
    "BlockApiResponseProcessor",
    ()=>BlockApiResponseProcessor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/apis/baseapi.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/http/http.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ObjectSerializer.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/apis/exception.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/util.ts [app-route] (ecmascript)");
;
;
;
;
;
class BlockApiRequestFactory extends __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseAPIRequestFactory"] {
    /**
     * Get block by its height or commitment
     * block
     * @param by 
     * @param value 
     */ async block(by, value, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'by' is not null or undefined
        if (by === null || by === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("BlockApi", "block", "by");
        }
        // verify required parameter 'value' is not null or undefined
        if (value === null || value === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("BlockApi", "block", "value");
        }
        // Path Params
        const localVarPath = '/api/v1/block';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpMethod"].GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (by !== undefined) {
            requestContext.setQueryParam("by", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(by, "'commitment' | 'height'", ""));
        }
        // Query Params
        if (value !== undefined) {
            requestContext.setQueryParam("value", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(value, "string", ""));
        }
        const defaultAuth = _config?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    /**
     * Get blocks
     * blocks
     * @param limit 
     * @param index 
     * @param sort 
     */ async blocks(limit, index, sort, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'limit' is not null or undefined
        if (limit === null || limit === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("BlockApi", "blocks", "limit");
        }
        // Path Params
        const localVarPath = '/api/v1/blocks';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpMethod"].GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (index !== undefined) {
            requestContext.setQueryParam("index", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(index, "number", "int64"));
        }
        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(limit, "number", "int64"));
        }
        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(sort, "'asc' | 'desc'", ""));
        }
        const defaultAuth = _config?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    /**
     * Get current height
     * currentHeight
     */ async currentHeight(_options) {
        let _config = _options || this.configuration;
        // Path Params
        const localVarPath = '/api/v1/currentHeight';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpMethod"].GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        const defaultAuth = _config?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
}
class BlockApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to block
     * @throws ApiException if the response code was not in [200, 299]
     */ async blockWithHttpInfo(response) {
        const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].normalizeMediaType(response.headers["content-type"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("200", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "Blocks", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("400", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ResultCode", "");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Bad request", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "Blocks", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to blocks
     * @throws ApiException if the response code was not in [200, 299]
     */ async blocksWithHttpInfo(response) {
        const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].normalizeMediaType(response.headers["content-type"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("200", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "Blocks", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("400", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ResultCode", "");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Bad request", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "Blocks", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to currentHeight
     * @throws ApiException if the response code was not in [200, 299]
     */ async currentHeightWithHttpInfo(response) {
        const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].normalizeMediaType(response.headers["content-type"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("200", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "CurrentHeight", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("400", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ResultCode", "");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Bad request", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "CurrentHeight", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
}
}),
"[project]/lighter-sdk-ts/generated/apis/BridgeApi.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// TODO: better import syntax?
__turbopack_context__.s([
    "BridgeApiRequestFactory",
    ()=>BridgeApiRequestFactory,
    "BridgeApiResponseProcessor",
    ()=>BridgeApiResponseProcessor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/apis/baseapi.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/http/http.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ObjectSerializer.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/apis/exception.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/util.ts [app-route] (ecmascript)");
;
;
;
;
;
class BridgeApiRequestFactory extends __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseAPIRequestFactory"] {
    /**
     * Get fast bridge info
     * fastbridge_info
     */ async fastbridgeInfo(_options) {
        let _config = _options || this.configuration;
        // Path Params
        const localVarPath = '/api/v1/fastbridge/info';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpMethod"].GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        const defaultAuth = _config?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
}
class BridgeApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to fastbridgeInfo
     * @throws ApiException if the response code was not in [200, 299]
     */ async fastbridgeInfoWithHttpInfo(response) {
        const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].normalizeMediaType(response.headers["content-type"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("200", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "RespGetFastBridgeInfo", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("400", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ResultCode", "");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Bad request", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "RespGetFastBridgeInfo", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
}
}),
"[project]/lighter-sdk-ts/generated/apis/CandlestickApi.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// TODO: better import syntax?
__turbopack_context__.s([
    "CandlestickApiRequestFactory",
    ()=>CandlestickApiRequestFactory,
    "CandlestickApiResponseProcessor",
    ()=>CandlestickApiResponseProcessor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/apis/baseapi.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/http/http.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ObjectSerializer.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/apis/exception.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/util.ts [app-route] (ecmascript)");
;
;
;
;
;
class CandlestickApiRequestFactory extends __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseAPIRequestFactory"] {
    /**
     * Get candlesticks
     * candlesticks
     * @param marketId 
     * @param resolution 
     * @param startTimestamp 
     * @param endTimestamp 
     * @param countBack 
     * @param setTimestampToEnd 
     */ async candlesticks(marketId, resolution, startTimestamp, endTimestamp, countBack, setTimestampToEnd, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'marketId' is not null or undefined
        if (marketId === null || marketId === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("CandlestickApi", "candlesticks", "marketId");
        }
        // verify required parameter 'resolution' is not null or undefined
        if (resolution === null || resolution === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("CandlestickApi", "candlesticks", "resolution");
        }
        // verify required parameter 'startTimestamp' is not null or undefined
        if (startTimestamp === null || startTimestamp === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("CandlestickApi", "candlesticks", "startTimestamp");
        }
        // verify required parameter 'endTimestamp' is not null or undefined
        if (endTimestamp === null || endTimestamp === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("CandlestickApi", "candlesticks", "endTimestamp");
        }
        // verify required parameter 'countBack' is not null or undefined
        if (countBack === null || countBack === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("CandlestickApi", "candlesticks", "countBack");
        }
        // Path Params
        const localVarPath = '/api/v1/candlesticks';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpMethod"].GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (marketId !== undefined) {
            requestContext.setQueryParam("market_id", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(marketId, "number", "uint8"));
        }
        // Query Params
        if (resolution !== undefined) {
            requestContext.setQueryParam("resolution", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(resolution, "'1m' | '5m' | '15m' | '1h' | '4h' | '1d'", ""));
        }
        // Query Params
        if (startTimestamp !== undefined) {
            requestContext.setQueryParam("start_timestamp", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(startTimestamp, "number", "int64"));
        }
        // Query Params
        if (endTimestamp !== undefined) {
            requestContext.setQueryParam("end_timestamp", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(endTimestamp, "number", "int64"));
        }
        // Query Params
        if (countBack !== undefined) {
            requestContext.setQueryParam("count_back", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(countBack, "number", "int64"));
        }
        // Query Params
        if (setTimestampToEnd !== undefined) {
            requestContext.setQueryParam("set_timestamp_to_end", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(setTimestampToEnd, "boolean", "boolean"));
        }
        const defaultAuth = _config?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    /**
     * Get fundings
     * fundings
     * @param marketId 
     * @param resolution 
     * @param startTimestamp 
     * @param endTimestamp 
     * @param countBack 
     */ async fundings(marketId, resolution, startTimestamp, endTimestamp, countBack, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'marketId' is not null or undefined
        if (marketId === null || marketId === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("CandlestickApi", "fundings", "marketId");
        }
        // verify required parameter 'resolution' is not null or undefined
        if (resolution === null || resolution === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("CandlestickApi", "fundings", "resolution");
        }
        // verify required parameter 'startTimestamp' is not null or undefined
        if (startTimestamp === null || startTimestamp === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("CandlestickApi", "fundings", "startTimestamp");
        }
        // verify required parameter 'endTimestamp' is not null or undefined
        if (endTimestamp === null || endTimestamp === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("CandlestickApi", "fundings", "endTimestamp");
        }
        // verify required parameter 'countBack' is not null or undefined
        if (countBack === null || countBack === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("CandlestickApi", "fundings", "countBack");
        }
        // Path Params
        const localVarPath = '/api/v1/fundings';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpMethod"].GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (marketId !== undefined) {
            requestContext.setQueryParam("market_id", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(marketId, "number", "uint8"));
        }
        // Query Params
        if (resolution !== undefined) {
            requestContext.setQueryParam("resolution", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(resolution, "'1h' | '1d'", ""));
        }
        // Query Params
        if (startTimestamp !== undefined) {
            requestContext.setQueryParam("start_timestamp", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(startTimestamp, "number", "int64"));
        }
        // Query Params
        if (endTimestamp !== undefined) {
            requestContext.setQueryParam("end_timestamp", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(endTimestamp, "number", "int64"));
        }
        // Query Params
        if (countBack !== undefined) {
            requestContext.setQueryParam("count_back", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(countBack, "number", "int64"));
        }
        const defaultAuth = _config?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
}
class CandlestickApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to candlesticks
     * @throws ApiException if the response code was not in [200, 299]
     */ async candlesticksWithHttpInfo(response) {
        const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].normalizeMediaType(response.headers["content-type"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("200", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "Candlesticks", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("400", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ResultCode", "");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Bad request", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "Candlesticks", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to fundings
     * @throws ApiException if the response code was not in [200, 299]
     */ async fundingsWithHttpInfo(response) {
        const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].normalizeMediaType(response.headers["content-type"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("200", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "Fundings", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("400", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ResultCode", "");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Bad request", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "Fundings", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
}
}),
"[project]/lighter-sdk-ts/generated/apis/FundingApi.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// TODO: better import syntax?
__turbopack_context__.s([
    "FundingApiRequestFactory",
    ()=>FundingApiRequestFactory,
    "FundingApiResponseProcessor",
    ()=>FundingApiResponseProcessor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/apis/baseapi.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/http/http.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ObjectSerializer.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/apis/exception.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/util.ts [app-route] (ecmascript)");
;
;
;
;
;
class FundingApiRequestFactory extends __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseAPIRequestFactory"] {
    /**
     * Get funding rates
     * funding-rates
     */ async fundingRates(_options) {
        let _config = _options || this.configuration;
        // Path Params
        const localVarPath = '/api/v1/funding-rates';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpMethod"].GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        const defaultAuth = _config?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
}
class FundingApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to fundingRates
     * @throws ApiException if the response code was not in [200, 299]
     */ async fundingRatesWithHttpInfo(response) {
        const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].normalizeMediaType(response.headers["content-type"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("200", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "FundingRates", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("400", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ResultCode", "");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Bad request", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "FundingRates", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
}
}),
"[project]/lighter-sdk-ts/generated/apis/InfoApi.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// TODO: better import syntax?
__turbopack_context__.s([
    "InfoApiRequestFactory",
    ()=>InfoApiRequestFactory,
    "InfoApiResponseProcessor",
    ()=>InfoApiResponseProcessor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/apis/baseapi.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/http/http.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ObjectSerializer.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/apis/exception.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/util.ts [app-route] (ecmascript)");
;
;
;
;
;
class InfoApiRequestFactory extends __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseAPIRequestFactory"] {
    /**
     * Transfer fee info
     * transferFeeInfo
     * @param accountIndex 
     * @param authorization 
     * @param auth 
     * @param toAccountIndex 
     */ async transferFeeInfo(accountIndex, authorization, auth, toAccountIndex, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'accountIndex' is not null or undefined
        if (accountIndex === null || accountIndex === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("InfoApi", "transferFeeInfo", "accountIndex");
        }
        // Path Params
        const localVarPath = '/api/v1/transferFeeInfo';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpMethod"].GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (auth !== undefined) {
            requestContext.setQueryParam("auth", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(auth, "string", ""));
        }
        // Query Params
        if (accountIndex !== undefined) {
            requestContext.setQueryParam("account_index", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(accountIndex, "number", "int64"));
        }
        // Query Params
        if (toAccountIndex !== undefined) {
            requestContext.setQueryParam("to_account_index", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(toAccountIndex, "number", "int64"));
        }
        // Header Params
        requestContext.setHeaderParam("authorization", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(authorization, "string", ""));
        const defaultAuth = _config?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    /**
     * Withdrawal delay in seconds
     * withdrawalDelay
     */ async withdrawalDelay(_options) {
        let _config = _options || this.configuration;
        // Path Params
        const localVarPath = '/api/v1/withdrawalDelay';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpMethod"].GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        const defaultAuth = _config?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
}
class InfoApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to transferFeeInfo
     * @throws ApiException if the response code was not in [200, 299]
     */ async transferFeeInfoWithHttpInfo(response) {
        const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].normalizeMediaType(response.headers["content-type"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("200", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "TransferFeeInfo", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("400", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ResultCode", "");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Bad request", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "TransferFeeInfo", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to withdrawalDelay
     * @throws ApiException if the response code was not in [200, 299]
     */ async withdrawalDelayWithHttpInfo(response) {
        const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].normalizeMediaType(response.headers["content-type"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("200", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "RespWithdrawalDelay", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("400", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ResultCode", "");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Bad request", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "RespWithdrawalDelay", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
}
}),
"[project]/lighter-sdk-ts/generated/apis/NotificationApi.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// TODO: better import syntax?
__turbopack_context__.s([
    "NotificationApiRequestFactory",
    ()=>NotificationApiRequestFactory,
    "NotificationApiResponseProcessor",
    ()=>NotificationApiResponseProcessor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/apis/baseapi.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/http/http.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ObjectSerializer.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/apis/exception.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/util.ts [app-route] (ecmascript)");
;
;
;
;
;
class NotificationApiRequestFactory extends __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseAPIRequestFactory"] {
    /**
     * Ack notification
     * notification_ack
     * @param notifId 
     * @param accountIndex 
     * @param authorization  make required after integ is done
     * @param auth  made optional to support header auth clients
     */ async notificationAck(notifId, accountIndex, authorization, auth, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'notifId' is not null or undefined
        if (notifId === null || notifId === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("NotificationApi", "notificationAck", "notifId");
        }
        // verify required parameter 'accountIndex' is not null or undefined
        if (accountIndex === null || accountIndex === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("NotificationApi", "notificationAck", "accountIndex");
        }
        // Path Params
        const localVarPath = '/api/v1/notification/ack';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpMethod"].POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Header Params
        requestContext.setHeaderParam("authorization", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(authorization, "string", ""));
        // Form Params
        const useForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["canConsumeForm"])([
            'multipart/form-data'
        ]);
        let localVarFormParams;
        if (useForm) {
            localVarFormParams = new FormData();
        } else {
            localVarFormParams = new URLSearchParams();
        }
        if (notifId !== undefined) {
            // TODO: replace .append with .set
            localVarFormParams.append('notif_id', notifId);
        }
        if (auth !== undefined) {
            // TODO: replace .append with .set
            localVarFormParams.append('auth', auth);
        }
        if (accountIndex !== undefined) {
            // TODO: replace .append with .set
            localVarFormParams.append('account_index', accountIndex);
        }
        requestContext.setBody(localVarFormParams);
        if (!useForm) {
            const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].getPreferredMediaType([
                "multipart/form-data"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
        }
        const defaultAuth = _config?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
}
class NotificationApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to notificationAck
     * @throws ApiException if the response code was not in [200, 299]
     */ async notificationAckWithHttpInfo(response) {
        const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].normalizeMediaType(response.headers["content-type"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("200", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ResultCode", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("400", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ResultCode", "");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Bad request", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ResultCode", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
}
}),
"[project]/lighter-sdk-ts/generated/apis/OrderApi.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// TODO: better import syntax?
__turbopack_context__.s([
    "OrderApiRequestFactory",
    ()=>OrderApiRequestFactory,
    "OrderApiResponseProcessor",
    ()=>OrderApiResponseProcessor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/apis/baseapi.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/http/http.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ObjectSerializer.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/apis/exception.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/util.ts [app-route] (ecmascript)");
;
;
;
;
;
class OrderApiRequestFactory extends __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseAPIRequestFactory"] {
    /**
     * Export data
     * export
     * @param type 
     * @param authorization 
     * @param auth 
     * @param accountIndex 
     * @param marketId 
     */ async _export(type, authorization, auth, accountIndex, marketId, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'type' is not null or undefined
        if (type === null || type === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("OrderApi", "_export", "type");
        }
        // Path Params
        const localVarPath = '/api/v1/export';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpMethod"].GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (auth !== undefined) {
            requestContext.setQueryParam("auth", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(auth, "string", ""));
        }
        // Query Params
        if (accountIndex !== undefined) {
            requestContext.setQueryParam("account_index", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(accountIndex, "number", "int64"));
        }
        // Query Params
        if (marketId !== undefined) {
            requestContext.setQueryParam("market_id", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(marketId, "number", "uint8"));
        }
        // Query Params
        if (type !== undefined) {
            requestContext.setQueryParam("type", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(type, "'funding' | 'trade'", ""));
        }
        // Header Params
        requestContext.setHeaderParam("authorization", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(authorization, "string", ""));
        const defaultAuth = _config?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    /**
     * Get account active orders. `auth` can be generated using the SDK.
     * accountActiveOrders
     * @param accountIndex 
     * @param marketId 
     * @param authorization  make required after integ is done
     * @param auth  made optional to support header auth clients
     */ async accountActiveOrders(accountIndex, marketId, authorization, auth, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'accountIndex' is not null or undefined
        if (accountIndex === null || accountIndex === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("OrderApi", "accountActiveOrders", "accountIndex");
        }
        // verify required parameter 'marketId' is not null or undefined
        if (marketId === null || marketId === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("OrderApi", "accountActiveOrders", "marketId");
        }
        // Path Params
        const localVarPath = '/api/v1/accountActiveOrders';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpMethod"].GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (accountIndex !== undefined) {
            requestContext.setQueryParam("account_index", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(accountIndex, "number", "int64"));
        }
        // Query Params
        if (marketId !== undefined) {
            requestContext.setQueryParam("market_id", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(marketId, "number", "uint8"));
        }
        // Query Params
        if (auth !== undefined) {
            requestContext.setQueryParam("auth", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(auth, "string", ""));
        }
        // Header Params
        requestContext.setHeaderParam("authorization", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(authorization, "string", ""));
        const defaultAuth = _config?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    /**
     * Get account inactive orders
     * accountInactiveOrders
     * @param accountIndex 
     * @param limit 
     * @param authorization  make required after integ is done
     * @param auth  made optional to support header auth clients
     * @param marketId 
     * @param askFilter 
     * @param betweenTimestamps 
     * @param cursor 
     */ async accountInactiveOrders(accountIndex, limit, authorization, auth, marketId, askFilter, betweenTimestamps, cursor, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'accountIndex' is not null or undefined
        if (accountIndex === null || accountIndex === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("OrderApi", "accountInactiveOrders", "accountIndex");
        }
        // verify required parameter 'limit' is not null or undefined
        if (limit === null || limit === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("OrderApi", "accountInactiveOrders", "limit");
        }
        // Path Params
        const localVarPath = '/api/v1/accountInactiveOrders';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpMethod"].GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (auth !== undefined) {
            requestContext.setQueryParam("auth", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(auth, "string", ""));
        }
        // Query Params
        if (accountIndex !== undefined) {
            requestContext.setQueryParam("account_index", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(accountIndex, "number", "int64"));
        }
        // Query Params
        if (marketId !== undefined) {
            requestContext.setQueryParam("market_id", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(marketId, "number", "uint8"));
        }
        // Query Params
        if (askFilter !== undefined) {
            requestContext.setQueryParam("ask_filter", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(askFilter, "number", "int8"));
        }
        // Query Params
        if (betweenTimestamps !== undefined) {
            requestContext.setQueryParam("between_timestamps", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(betweenTimestamps, "string", ""));
        }
        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(cursor, "string", ""));
        }
        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(limit, "number", "int64"));
        }
        // Header Params
        requestContext.setHeaderParam("authorization", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(authorization, "string", ""));
        const defaultAuth = _config?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    /**
     * Get exchange stats
     * exchangeStats
     */ async exchangeStats(_options) {
        let _config = _options || this.configuration;
        // Path Params
        const localVarPath = '/api/v1/exchangeStats';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpMethod"].GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        const defaultAuth = _config?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    /**
     * Get order books metadata
     * orderBookDetails
     * @param marketId 
     */ async orderBookDetails(marketId, _options) {
        let _config = _options || this.configuration;
        // Path Params
        const localVarPath = '/api/v1/orderBookDetails';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpMethod"].GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (marketId !== undefined) {
            requestContext.setQueryParam("market_id", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(marketId, "number", "uint8"));
        }
        const defaultAuth = _config?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    /**
     * Get order book orders
     * orderBookOrders
     * @param marketId 
     * @param limit 
     */ async orderBookOrders(marketId, limit, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'marketId' is not null or undefined
        if (marketId === null || marketId === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("OrderApi", "orderBookOrders", "marketId");
        }
        // verify required parameter 'limit' is not null or undefined
        if (limit === null || limit === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("OrderApi", "orderBookOrders", "limit");
        }
        // Path Params
        const localVarPath = '/api/v1/orderBookOrders';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpMethod"].GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (marketId !== undefined) {
            requestContext.setQueryParam("market_id", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(marketId, "number", "uint8"));
        }
        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(limit, "number", "int64"));
        }
        const defaultAuth = _config?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    /**
     * Get order books metadata.<hr>**Response Description:**<br><br>1) **Taker and maker fees** are in percentage.<br>2) **Min base amount:** The amount of base token that can be traded in a single order.<br>3) **Min quote amount:** The amount of quote token that can be traded in a single order.<br>4) **Supported size decimals:** The number of decimal places that can be used for the size of the order.<br>5) **Supported price decimals:** The number of decimal places that can be used for the price of the order.<br>6) **Supported quote decimals:** Size Decimals + Quote Decimals.
     * orderBooks
     * @param marketId 
     */ async orderBooks(marketId, _options) {
        let _config = _options || this.configuration;
        // Path Params
        const localVarPath = '/api/v1/orderBooks';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpMethod"].GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (marketId !== undefined) {
            requestContext.setQueryParam("market_id", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(marketId, "number", "uint8"));
        }
        const defaultAuth = _config?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    /**
     * Get recent trades
     * recentTrades
     * @param marketId 
     * @param limit 
     */ async recentTrades(marketId, limit, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'marketId' is not null or undefined
        if (marketId === null || marketId === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("OrderApi", "recentTrades", "marketId");
        }
        // verify required parameter 'limit' is not null or undefined
        if (limit === null || limit === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("OrderApi", "recentTrades", "limit");
        }
        // Path Params
        const localVarPath = '/api/v1/recentTrades';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpMethod"].GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (marketId !== undefined) {
            requestContext.setQueryParam("market_id", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(marketId, "number", "uint8"));
        }
        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(limit, "number", "int64"));
        }
        const defaultAuth = _config?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    /**
     * Get trades
     * trades
     * @param sortBy 
     * @param limit 
     * @param authorization 
     * @param auth 
     * @param marketId 
     * @param accountIndex 
     * @param orderIndex 
     * @param sortDir 
     * @param cursor 
     * @param _from 
     * @param askFilter 
     */ async trades(sortBy, limit, authorization, auth, marketId, accountIndex, orderIndex, sortDir, cursor, _from, askFilter, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'sortBy' is not null or undefined
        if (sortBy === null || sortBy === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("OrderApi", "trades", "sortBy");
        }
        // verify required parameter 'limit' is not null or undefined
        if (limit === null || limit === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("OrderApi", "trades", "limit");
        }
        // Path Params
        const localVarPath = '/api/v1/trades';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpMethod"].GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (auth !== undefined) {
            requestContext.setQueryParam("auth", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(auth, "string", ""));
        }
        // Query Params
        if (marketId !== undefined) {
            requestContext.setQueryParam("market_id", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(marketId, "number", "uint8"));
        }
        // Query Params
        if (accountIndex !== undefined) {
            requestContext.setQueryParam("account_index", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(accountIndex, "number", "int64"));
        }
        // Query Params
        if (orderIndex !== undefined) {
            requestContext.setQueryParam("order_index", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(orderIndex, "number", "int64"));
        }
        // Query Params
        if (sortBy !== undefined) {
            requestContext.setQueryParam("sort_by", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(sortBy, "'block_height' | 'timestamp' | 'trade_id'", ""));
        }
        // Query Params
        if (sortDir !== undefined) {
            requestContext.setQueryParam("sort_dir", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(sortDir, "'desc'", ""));
        }
        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(cursor, "string", ""));
        }
        // Query Params
        if (_from !== undefined) {
            requestContext.setQueryParam("from", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(_from, "number", "int64"));
        }
        // Query Params
        if (askFilter !== undefined) {
            requestContext.setQueryParam("ask_filter", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(askFilter, "number", "int8"));
        }
        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(limit, "number", "int64"));
        }
        // Header Params
        requestContext.setHeaderParam("authorization", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(authorization, "string", ""));
        const defaultAuth = _config?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
}
class OrderApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to _export
     * @throws ApiException if the response code was not in [200, 299]
     */ async _exportWithHttpInfo(response) {
        const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].normalizeMediaType(response.headers["content-type"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("200", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ExportData", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("400", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ResultCode", "");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Bad request", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ExportData", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to accountActiveOrders
     * @throws ApiException if the response code was not in [200, 299]
     */ async accountActiveOrdersWithHttpInfo(response) {
        const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].normalizeMediaType(response.headers["content-type"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("200", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "Orders", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("400", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ResultCode", "");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Bad request", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "Orders", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to accountInactiveOrders
     * @throws ApiException if the response code was not in [200, 299]
     */ async accountInactiveOrdersWithHttpInfo(response) {
        const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].normalizeMediaType(response.headers["content-type"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("200", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "Orders", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("400", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ResultCode", "");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Bad request", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "Orders", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to exchangeStats
     * @throws ApiException if the response code was not in [200, 299]
     */ async exchangeStatsWithHttpInfo(response) {
        const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].normalizeMediaType(response.headers["content-type"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("200", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ExchangeStats", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("400", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ResultCode", "");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Bad request", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ExchangeStats", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to orderBookDetails
     * @throws ApiException if the response code was not in [200, 299]
     */ async orderBookDetailsWithHttpInfo(response) {
        const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].normalizeMediaType(response.headers["content-type"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("200", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "OrderBookDetails", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("400", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ResultCode", "");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Bad request", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "OrderBookDetails", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to orderBookOrders
     * @throws ApiException if the response code was not in [200, 299]
     */ async orderBookOrdersWithHttpInfo(response) {
        const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].normalizeMediaType(response.headers["content-type"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("200", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "OrderBookOrders", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("400", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ResultCode", "");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Bad request", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "OrderBookOrders", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to orderBooks
     * @throws ApiException if the response code was not in [200, 299]
     */ async orderBooksWithHttpInfo(response) {
        const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].normalizeMediaType(response.headers["content-type"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("200", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "OrderBooks", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("400", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ResultCode", "");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Bad request", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "OrderBooks", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to recentTrades
     * @throws ApiException if the response code was not in [200, 299]
     */ async recentTradesWithHttpInfo(response) {
        const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].normalizeMediaType(response.headers["content-type"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("200", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "Trades", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("400", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ResultCode", "");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Bad request", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "Trades", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to trades
     * @throws ApiException if the response code was not in [200, 299]
     */ async tradesWithHttpInfo(response) {
        const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].normalizeMediaType(response.headers["content-type"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("200", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "Trades", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("400", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ResultCode", "");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Bad request", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "Trades", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
}
}),
"[project]/lighter-sdk-ts/generated/apis/ReferralApi.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// TODO: better import syntax?
__turbopack_context__.s([
    "ReferralApiRequestFactory",
    ()=>ReferralApiRequestFactory,
    "ReferralApiResponseProcessor",
    ()=>ReferralApiResponseProcessor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/apis/baseapi.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/http/http.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ObjectSerializer.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/apis/exception.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/util.ts [app-route] (ecmascript)");
;
;
;
;
;
class ReferralApiRequestFactory extends __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseAPIRequestFactory"] {
    /**
     * Get referral points
     * referral_points
     * @param accountIndex 
     * @param authorization  make required after integ is done
     * @param auth  made optional to support header auth clients
     */ async referralPoints(accountIndex, authorization, auth, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'accountIndex' is not null or undefined
        if (accountIndex === null || accountIndex === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("ReferralApi", "referralPoints", "accountIndex");
        }
        // Path Params
        const localVarPath = '/api/v1/referral/points';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpMethod"].GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (auth !== undefined) {
            requestContext.setQueryParam("auth", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(auth, "string", ""));
        }
        // Query Params
        if (accountIndex !== undefined) {
            requestContext.setQueryParam("account_index", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(accountIndex, "number", "int64"));
        }
        // Header Params
        requestContext.setHeaderParam("authorization", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(authorization, "string", ""));
        const defaultAuth = _config?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
}
class ReferralApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to referralPoints
     * @throws ApiException if the response code was not in [200, 299]
     */ async referralPointsWithHttpInfo(response) {
        const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].normalizeMediaType(response.headers["content-type"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("200", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ReferralPoints", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("400", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ResultCode", "");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Bad request", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ReferralPoints", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
}
}),
"[project]/lighter-sdk-ts/generated/apis/RootApi.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// TODO: better import syntax?
__turbopack_context__.s([
    "RootApiRequestFactory",
    ()=>RootApiRequestFactory,
    "RootApiResponseProcessor",
    ()=>RootApiResponseProcessor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/apis/baseapi.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/http/http.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ObjectSerializer.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/apis/exception.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/util.ts [app-route] (ecmascript)");
;
;
;
;
;
class RootApiRequestFactory extends __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseAPIRequestFactory"] {
    /**
     * Get info of zklighter
     * info
     */ async info(_options) {
        let _config = _options || this.configuration;
        // Path Params
        const localVarPath = '/info';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpMethod"].GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        const defaultAuth = _config?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    /**
     * Get status of zklighter
     * status
     */ async status(_options) {
        let _config = _options || this.configuration;
        // Path Params
        const localVarPath = '/';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpMethod"].GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        const defaultAuth = _config?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
}
class RootApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to info
     * @throws ApiException if the response code was not in [200, 299]
     */ async infoWithHttpInfo(response) {
        const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].normalizeMediaType(response.headers["content-type"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("200", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ZkLighterInfo", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("400", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ResultCode", "");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Bad request", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ZkLighterInfo", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to status
     * @throws ApiException if the response code was not in [200, 299]
     */ async statusWithHttpInfo(response) {
        const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].normalizeMediaType(response.headers["content-type"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("200", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "Status", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("400", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ResultCode", "");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Bad request", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "Status", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
}
}),
"[project]/lighter-sdk-ts/generated/apis/TransactionApi.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// TODO: better import syntax?
__turbopack_context__.s([
    "TransactionApiRequestFactory",
    ()=>TransactionApiRequestFactory,
    "TransactionApiResponseProcessor",
    ()=>TransactionApiResponseProcessor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/apis/baseapi.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/http/http.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/ObjectSerializer.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/apis/exception.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/util.ts [app-route] (ecmascript)");
;
;
;
;
;
class TransactionApiRequestFactory extends __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseAPIRequestFactory"] {
    /**
     * Get transactions of a specific account
     * accountTxs
     * @param limit 
     * @param by 
     * @param value 
     * @param authorization 
     * @param index 
     * @param types 
     * @param auth 
     */ async accountTxs(limit, by, value, authorization, index, types, auth, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'limit' is not null or undefined
        if (limit === null || limit === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("TransactionApi", "accountTxs", "limit");
        }
        // verify required parameter 'by' is not null or undefined
        if (by === null || by === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("TransactionApi", "accountTxs", "by");
        }
        // verify required parameter 'value' is not null or undefined
        if (value === null || value === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("TransactionApi", "accountTxs", "value");
        }
        // Path Params
        const localVarPath = '/api/v1/accountTxs';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpMethod"].GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (index !== undefined) {
            requestContext.setQueryParam("index", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(index, "number", "int64"));
        }
        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(limit, "number", "int64"));
        }
        // Query Params
        if (by !== undefined) {
            requestContext.setQueryParam("by", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(by, "'account_index'", ""));
        }
        // Query Params
        if (value !== undefined) {
            requestContext.setQueryParam("value", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(value, "string", ""));
        }
        // Query Params
        if (types !== undefined) {
            requestContext.setQueryParam("types", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(types, "Array<number>", "uint8"));
        }
        // Query Params
        if (auth !== undefined) {
            requestContext.setQueryParam("auth", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(auth, "string", ""));
        }
        // Header Params
        requestContext.setHeaderParam("authorization", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(authorization, "string", ""));
        const defaultAuth = _config?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    /**
     * Get transactions in a block
     * blockTxs
     * @param by 
     * @param value 
     */ async blockTxs(by, value, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'by' is not null or undefined
        if (by === null || by === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("TransactionApi", "blockTxs", "by");
        }
        // verify required parameter 'value' is not null or undefined
        if (value === null || value === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("TransactionApi", "blockTxs", "value");
        }
        // Path Params
        const localVarPath = '/api/v1/blockTxs';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpMethod"].GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (by !== undefined) {
            requestContext.setQueryParam("by", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(by, "'block_height' | 'block_commitment'", ""));
        }
        // Query Params
        if (value !== undefined) {
            requestContext.setQueryParam("value", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(value, "string", ""));
        }
        const defaultAuth = _config?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    /**
     * Get deposit history
     * deposit_history
     * @param accountIndex 
     * @param l1Address 
     * @param authorization  make required after integ is done
     * @param auth  made optional to support header auth clients
     * @param cursor 
     * @param filter 
     */ async depositHistory(accountIndex, l1Address, authorization, auth, cursor, filter, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'accountIndex' is not null or undefined
        if (accountIndex === null || accountIndex === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("TransactionApi", "depositHistory", "accountIndex");
        }
        // verify required parameter 'l1Address' is not null or undefined
        if (l1Address === null || l1Address === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("TransactionApi", "depositHistory", "l1Address");
        }
        // Path Params
        const localVarPath = '/api/v1/deposit/history';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpMethod"].GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (accountIndex !== undefined) {
            requestContext.setQueryParam("account_index", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(accountIndex, "number", "int64"));
        }
        // Query Params
        if (auth !== undefined) {
            requestContext.setQueryParam("auth", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(auth, "string", ""));
        }
        // Query Params
        if (l1Address !== undefined) {
            requestContext.setQueryParam("l1_address", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(l1Address, "string", ""));
        }
        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(cursor, "string", ""));
        }
        // Query Params
        if (filter !== undefined) {
            requestContext.setQueryParam("filter", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(filter, "'all' | 'pending' | 'claimable'", ""));
        }
        // Header Params
        requestContext.setHeaderParam("authorization", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(authorization, "string", ""));
        const defaultAuth = _config?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    /**
     * Get next nonce for a specific account and api key
     * nextNonce
     * @param accountIndex 
     * @param apiKeyIndex 
     */ async nextNonce(accountIndex, apiKeyIndex, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'accountIndex' is not null or undefined
        if (accountIndex === null || accountIndex === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("TransactionApi", "nextNonce", "accountIndex");
        }
        // verify required parameter 'apiKeyIndex' is not null or undefined
        if (apiKeyIndex === null || apiKeyIndex === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("TransactionApi", "nextNonce", "apiKeyIndex");
        }
        // Path Params
        const localVarPath = '/api/v1/nextNonce';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpMethod"].GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (accountIndex !== undefined) {
            requestContext.setQueryParam("account_index", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(accountIndex, "number", "int64"));
        }
        // Query Params
        if (apiKeyIndex !== undefined) {
            requestContext.setQueryParam("api_key_index", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(apiKeyIndex, "number", "uint8"));
        }
        const defaultAuth = _config?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    /**
     * You need to sign the transaction body before sending it to the server. More details can be found in the Get Started docs: [Get Started For Programmers](https://apidocs.lighter.xyz/docs/get-started-for-programmers)
     * sendTx
     * @param txType 
     * @param txInfo 
     * @param priceProtection 
     */ async sendTx(txType, txInfo, priceProtection, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'txType' is not null or undefined
        if (txType === null || txType === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("TransactionApi", "sendTx", "txType");
        }
        // verify required parameter 'txInfo' is not null or undefined
        if (txInfo === null || txInfo === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("TransactionApi", "sendTx", "txInfo");
        }
        // Path Params
        const localVarPath = '/api/v1/sendTx';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpMethod"].POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Form Params
        const useForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["canConsumeForm"])([
            'multipart/form-data'
        ]);
        let localVarFormParams;
        if (useForm) {
            localVarFormParams = new FormData();
        } else {
            localVarFormParams = new URLSearchParams();
        }
        if (txType !== undefined) {
            // TODO: replace .append with .set
            localVarFormParams.append('tx_type', txType);
        }
        if (txInfo !== undefined) {
            // TODO: replace .append with .set
            localVarFormParams.append('tx_info', txInfo);
        }
        if (priceProtection !== undefined) {
            // TODO: replace .append with .set
            localVarFormParams.append('price_protection', priceProtection);
        }
        requestContext.setBody(localVarFormParams);
        if (!useForm) {
            const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].getPreferredMediaType([
                "multipart/form-data"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
        }
        const defaultAuth = _config?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    /**
     * You need to sign the transaction body before sending it to the server. More details can be found in the Get Started docs: [Get Started For Programmers](https://apidocs.lighter.xyz/docs/get-started-for-programmers)
     * sendTxBatch
     * @param txTypes 
     * @param txInfos 
     */ async sendTxBatch(txTypes, txInfos, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'txTypes' is not null or undefined
        if (txTypes === null || txTypes === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("TransactionApi", "sendTxBatch", "txTypes");
        }
        // verify required parameter 'txInfos' is not null or undefined
        if (txInfos === null || txInfos === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("TransactionApi", "sendTxBatch", "txInfos");
        }
        // Path Params
        const localVarPath = '/api/v1/sendTxBatch';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpMethod"].POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Form Params
        const useForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["canConsumeForm"])([
            'multipart/form-data'
        ]);
        let localVarFormParams;
        if (useForm) {
            localVarFormParams = new FormData();
        } else {
            localVarFormParams = new URLSearchParams();
        }
        if (txTypes !== undefined) {
            // TODO: replace .append with .set
            localVarFormParams.append('tx_types', txTypes);
        }
        if (txInfos !== undefined) {
            // TODO: replace .append with .set
            localVarFormParams.append('tx_infos', txInfos);
        }
        requestContext.setBody(localVarFormParams);
        if (!useForm) {
            const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].getPreferredMediaType([
                "multipart/form-data"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
        }
        const defaultAuth = _config?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    /**
     * Get transfer history
     * transfer_history
     * @param accountIndex 
     * @param authorization  make required after integ is done
     * @param auth  made optional to support header auth clients
     * @param cursor 
     */ async transferHistory(accountIndex, authorization, auth, cursor, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'accountIndex' is not null or undefined
        if (accountIndex === null || accountIndex === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("TransactionApi", "transferHistory", "accountIndex");
        }
        // Path Params
        const localVarPath = '/api/v1/transfer/history';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpMethod"].GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (accountIndex !== undefined) {
            requestContext.setQueryParam("account_index", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(accountIndex, "number", "int64"));
        }
        // Query Params
        if (auth !== undefined) {
            requestContext.setQueryParam("auth", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(auth, "string", ""));
        }
        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(cursor, "string", ""));
        }
        // Header Params
        requestContext.setHeaderParam("authorization", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(authorization, "string", ""));
        const defaultAuth = _config?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    /**
     * Get transaction by hash or sequence index
     * tx
     * @param by 
     * @param value 
     */ async tx(by, value, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'by' is not null or undefined
        if (by === null || by === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("TransactionApi", "tx", "by");
        }
        // verify required parameter 'value' is not null or undefined
        if (value === null || value === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("TransactionApi", "tx", "value");
        }
        // Path Params
        const localVarPath = '/api/v1/tx';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpMethod"].GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (by !== undefined) {
            requestContext.setQueryParam("by", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(by, "'hash' | 'sequence_index'", ""));
        }
        // Query Params
        if (value !== undefined) {
            requestContext.setQueryParam("value", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(value, "string", ""));
        }
        const defaultAuth = _config?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    /**
     * Get L1 transaction by L1 transaction hash
     * txFromL1TxHash
     * @param hash 
     */ async txFromL1TxHash(hash, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'hash' is not null or undefined
        if (hash === null || hash === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("TransactionApi", "txFromL1TxHash", "hash");
        }
        // Path Params
        const localVarPath = '/api/v1/txFromL1TxHash';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpMethod"].GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (hash !== undefined) {
            requestContext.setQueryParam("hash", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(hash, "string", ""));
        }
        const defaultAuth = _config?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    /**
     * Get transactions which are already packed into blocks
     * txs
     * @param limit 
     * @param index 
     */ async txs(limit, index, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'limit' is not null or undefined
        if (limit === null || limit === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("TransactionApi", "txs", "limit");
        }
        // Path Params
        const localVarPath = '/api/v1/txs';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpMethod"].GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (index !== undefined) {
            requestContext.setQueryParam("index", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(index, "number", "int64"));
        }
        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(limit, "number", "int64"));
        }
        const defaultAuth = _config?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    /**
     * Get withdraw history
     * withdraw_history
     * @param accountIndex 
     * @param authorization  make required after integ is done
     * @param auth  made optional to support header auth clients
     * @param cursor 
     * @param filter 
     */ async withdrawHistory(accountIndex, authorization, auth, cursor, filter, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'accountIndex' is not null or undefined
        if (accountIndex === null || accountIndex === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequiredError"]("TransactionApi", "withdrawHistory", "accountIndex");
        }
        // Path Params
        const localVarPath = '/api/v1/withdraw/history';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpMethod"].GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (accountIndex !== undefined) {
            requestContext.setQueryParam("account_index", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(accountIndex, "number", "int64"));
        }
        // Query Params
        if (auth !== undefined) {
            requestContext.setQueryParam("auth", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(auth, "string", ""));
        }
        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(cursor, "string", ""));
        }
        // Query Params
        if (filter !== undefined) {
            requestContext.setQueryParam("filter", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(filter, "'all' | 'pending' | 'claimable'", ""));
        }
        // Header Params
        requestContext.setHeaderParam("authorization", __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].serialize(authorization, "string", ""));
        const defaultAuth = _config?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
}
class TransactionApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to accountTxs
     * @throws ApiException if the response code was not in [200, 299]
     */ async accountTxsWithHttpInfo(response) {
        const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].normalizeMediaType(response.headers["content-type"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("200", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "Txs", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("400", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ResultCode", "");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Bad request", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "Txs", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to blockTxs
     * @throws ApiException if the response code was not in [200, 299]
     */ async blockTxsWithHttpInfo(response) {
        const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].normalizeMediaType(response.headers["content-type"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("200", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "Txs", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("400", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ResultCode", "");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Bad request", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "Txs", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to depositHistory
     * @throws ApiException if the response code was not in [200, 299]
     */ async depositHistoryWithHttpInfo(response) {
        const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].normalizeMediaType(response.headers["content-type"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("200", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "DepositHistory", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("400", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ResultCode", "");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Bad request", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "DepositHistory", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to nextNonce
     * @throws ApiException if the response code was not in [200, 299]
     */ async nextNonceWithHttpInfo(response) {
        const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].normalizeMediaType(response.headers["content-type"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("200", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "NextNonce", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("400", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ResultCode", "");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Bad request", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "NextNonce", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to sendTx
     * @throws ApiException if the response code was not in [200, 299]
     */ async sendTxWithHttpInfo(response) {
        const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].normalizeMediaType(response.headers["content-type"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("200", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "RespSendTx", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("400", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ResultCode", "");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Bad request", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "RespSendTx", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to sendTxBatch
     * @throws ApiException if the response code was not in [200, 299]
     */ async sendTxBatchWithHttpInfo(response) {
        const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].normalizeMediaType(response.headers["content-type"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("200", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "RespSendTxBatch", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("400", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ResultCode", "");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Bad request", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "RespSendTxBatch", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to transferHistory
     * @throws ApiException if the response code was not in [200, 299]
     */ async transferHistoryWithHttpInfo(response) {
        const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].normalizeMediaType(response.headers["content-type"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("200", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "TransferHistory", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("400", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ResultCode", "");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Bad request", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "TransferHistory", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to tx
     * @throws ApiException if the response code was not in [200, 299]
     */ async txWithHttpInfo(response) {
        const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].normalizeMediaType(response.headers["content-type"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("200", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "EnrichedTx", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("400", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ResultCode", "");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Bad request", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "EnrichedTx", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to txFromL1TxHash
     * @throws ApiException if the response code was not in [200, 299]
     */ async txFromL1TxHashWithHttpInfo(response) {
        const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].normalizeMediaType(response.headers["content-type"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("200", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "EnrichedTx", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("400", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ResultCode", "");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Bad request", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "EnrichedTx", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to txs
     * @throws ApiException if the response code was not in [200, 299]
     */ async txsWithHttpInfo(response) {
        const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].normalizeMediaType(response.headers["content-type"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("200", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "Txs", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("400", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ResultCode", "");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Bad request", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "Txs", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to withdrawHistory
     * @throws ApiException if the response code was not in [200, 299]
     */ async withdrawHistoryWithHttpInfo(response) {
        const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].normalizeMediaType(response.headers["content-type"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("200", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "WithdrawHistory", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCodeInRange"])("400", response.httpStatusCode)) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "ResultCode", "");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Bad request", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$ObjectSerializer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ObjectSerializer"].parse(await response.body.text(), contentType), "WithdrawHistory", "");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HttpInfo"](response.httpStatusCode, response.headers, response.body, body);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiException"](response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
}
}),
"[project]/lighter-sdk-ts/generated/types/ObservableAPI.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ObservableAccountApi",
    ()=>ObservableAccountApi,
    "ObservableAnnouncementApi",
    ()=>ObservableAnnouncementApi,
    "ObservableBlockApi",
    ()=>ObservableBlockApi,
    "ObservableBridgeApi",
    ()=>ObservableBridgeApi,
    "ObservableCandlestickApi",
    ()=>ObservableCandlestickApi,
    "ObservableFundingApi",
    ()=>ObservableFundingApi,
    "ObservableInfoApi",
    ()=>ObservableInfoApi,
    "ObservableNotificationApi",
    ()=>ObservableNotificationApi,
    "ObservableOrderApi",
    ()=>ObservableOrderApi,
    "ObservableReferralApi",
    ()=>ObservableReferralApi,
    "ObservableRootApi",
    ()=>ObservableRootApi,
    "ObservableTransactionApi",
    ()=>ObservableTransactionApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/configuration.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/rxjsStub.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$AccountApi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/apis/AccountApi.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$AnnouncementApi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/apis/AnnouncementApi.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$BlockApi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/apis/BlockApi.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$BridgeApi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/apis/BridgeApi.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$CandlestickApi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/apis/CandlestickApi.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$FundingApi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/apis/FundingApi.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$InfoApi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/apis/InfoApi.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$NotificationApi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/apis/NotificationApi.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$OrderApi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/apis/OrderApi.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$ReferralApi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/apis/ReferralApi.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$RootApi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/apis/RootApi.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$TransactionApi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/apis/TransactionApi.ts [app-route] (ecmascript)");
;
;
;
;
class ObservableAccountApi {
    requestFactory;
    responseProcessor;
    configuration;
    constructor(configuration, requestFactory, responseProcessor){
        this.configuration = configuration;
        this.requestFactory = requestFactory || new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$AccountApi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AccountApiRequestFactory"](configuration);
        this.responseProcessor = responseProcessor || new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$AccountApi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AccountApiResponseProcessor"]();
    }
    /**
     * Get account by account\'s index. <br>More details about account index: [Account Index](https://apidocs.lighter.xyz/docs/account-index)<hr>**Response Description:**<br><br>1) **Status:** 1 is active 0 is inactive.<br>2) **Collateral:** The amount of collateral in the account.<hr>**Position Details Description:**<br>1) **OOC:** Open order count in that market.<br>2) **Sign:** 1 for Long, -1 for Short.<br>3) **Position:** The amount of position in that market.<br>4) **Avg Entry Price:** The average entry price of the position.<br>5) **Position Value:** The value of the position.<br>6) **Unrealized PnL:** The unrealized profit and loss of the position.<br>7) **Realized PnL:** The realized profit and loss of the position.
     * account
     * @param by
     * @param value
     */ accountWithHttpInfo(by, value, _options) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfiguration"])(this.configuration, _options);
        const requestContextPromise = this.requestFactory.account(by, value, _config);
        // build promise chain
        let middlewarePreObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(requestContextPromise);
        for (const middleware of _config.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>_config.httpApi.send(ctx))).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((response)=>{
            let middlewarePostObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(response);
            for (const middleware of _config.middleware.reverse()){
                middlewarePostObservable = middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((rsp)=>this.responseProcessor.accountWithHttpInfo(rsp)));
        }));
    }
    /**
     * Get account by account\'s index. <br>More details about account index: [Account Index](https://apidocs.lighter.xyz/docs/account-index)<hr>**Response Description:**<br><br>1) **Status:** 1 is active 0 is inactive.<br>2) **Collateral:** The amount of collateral in the account.<hr>**Position Details Description:**<br>1) **OOC:** Open order count in that market.<br>2) **Sign:** 1 for Long, -1 for Short.<br>3) **Position:** The amount of position in that market.<br>4) **Avg Entry Price:** The average entry price of the position.<br>5) **Position Value:** The value of the position.<br>6) **Unrealized PnL:** The unrealized profit and loss of the position.<br>7) **Realized PnL:** The realized profit and loss of the position.
     * account
     * @param by
     * @param value
     */ account(by, value, _options) {
        return this.accountWithHttpInfo(by, value, _options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((apiResponse)=>apiResponse.data));
    }
    /**
     * Get account limits
     * accountLimits
     * @param accountIndex
     * @param [authorization]  make required after integ is done
     * @param [auth]  made optional to support header auth clients
     */ accountLimitsWithHttpInfo(accountIndex, authorization, auth, _options) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfiguration"])(this.configuration, _options);
        const requestContextPromise = this.requestFactory.accountLimits(accountIndex, authorization, auth, _config);
        // build promise chain
        let middlewarePreObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(requestContextPromise);
        for (const middleware of _config.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>_config.httpApi.send(ctx))).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((response)=>{
            let middlewarePostObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(response);
            for (const middleware of _config.middleware.reverse()){
                middlewarePostObservable = middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((rsp)=>this.responseProcessor.accountLimitsWithHttpInfo(rsp)));
        }));
    }
    /**
     * Get account limits
     * accountLimits
     * @param accountIndex
     * @param [authorization]  make required after integ is done
     * @param [auth]  made optional to support header auth clients
     */ accountLimits(accountIndex, authorization, auth, _options) {
        return this.accountLimitsWithHttpInfo(accountIndex, authorization, auth, _options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((apiResponse)=>apiResponse.data));
    }
    /**
     * Get account metadatas
     * accountMetadata
     * @param by
     * @param value
     * @param [authorization]
     * @param [auth]
     */ accountMetadataWithHttpInfo(by, value, authorization, auth, _options) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfiguration"])(this.configuration, _options);
        const requestContextPromise = this.requestFactory.accountMetadata(by, value, authorization, auth, _config);
        // build promise chain
        let middlewarePreObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(requestContextPromise);
        for (const middleware of _config.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>_config.httpApi.send(ctx))).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((response)=>{
            let middlewarePostObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(response);
            for (const middleware of _config.middleware.reverse()){
                middlewarePostObservable = middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((rsp)=>this.responseProcessor.accountMetadataWithHttpInfo(rsp)));
        }));
    }
    /**
     * Get account metadatas
     * accountMetadata
     * @param by
     * @param value
     * @param [authorization]
     * @param [auth]
     */ accountMetadata(by, value, authorization, auth, _options) {
        return this.accountMetadataWithHttpInfo(by, value, authorization, auth, _options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((apiResponse)=>apiResponse.data));
    }
    /**
     * Get accounts by l1_address returns all accounts associated with the given L1 address
     * accountsByL1Address
     * @param l1Address
     */ accountsByL1AddressWithHttpInfo(l1Address, _options) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfiguration"])(this.configuration, _options);
        const requestContextPromise = this.requestFactory.accountsByL1Address(l1Address, _config);
        // build promise chain
        let middlewarePreObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(requestContextPromise);
        for (const middleware of _config.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>_config.httpApi.send(ctx))).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((response)=>{
            let middlewarePostObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(response);
            for (const middleware of _config.middleware.reverse()){
                middlewarePostObservable = middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((rsp)=>this.responseProcessor.accountsByL1AddressWithHttpInfo(rsp)));
        }));
    }
    /**
     * Get accounts by l1_address returns all accounts associated with the given L1 address
     * accountsByL1Address
     * @param l1Address
     */ accountsByL1Address(l1Address, _options) {
        return this.accountsByL1AddressWithHttpInfo(l1Address, _options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((apiResponse)=>apiResponse.data));
    }
    /**
     * Get account api key. Set `api_key_index` to 255 to retrieve all api keys associated with the account.
     * apikeys
     * @param accountIndex
     * @param [apiKeyIndex]
     */ apikeysWithHttpInfo(accountIndex, apiKeyIndex, _options) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfiguration"])(this.configuration, _options);
        const requestContextPromise = this.requestFactory.apikeys(accountIndex, apiKeyIndex, _config);
        // build promise chain
        let middlewarePreObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(requestContextPromise);
        for (const middleware of _config.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>_config.httpApi.send(ctx))).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((response)=>{
            let middlewarePostObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(response);
            for (const middleware of _config.middleware.reverse()){
                middlewarePostObservable = middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((rsp)=>this.responseProcessor.apikeysWithHttpInfo(rsp)));
        }));
    }
    /**
     * Get account api key. Set `api_key_index` to 255 to retrieve all api keys associated with the account.
     * apikeys
     * @param accountIndex
     * @param [apiKeyIndex]
     */ apikeys(accountIndex, apiKeyIndex, _options) {
        return this.apikeysWithHttpInfo(accountIndex, apiKeyIndex, _options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((apiResponse)=>apiResponse.data));
    }
    /**
     * Change account tier
     * changeAccountTier
     * @param accountIndex
     * @param newTier
     * @param [authorization]  make required after integ is done
     * @param [auth]  made optional to support header auth clients
     */ changeAccountTierWithHttpInfo(accountIndex, newTier, authorization, auth, _options) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfiguration"])(this.configuration, _options);
        const requestContextPromise = this.requestFactory.changeAccountTier(accountIndex, newTier, authorization, auth, _config);
        // build promise chain
        let middlewarePreObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(requestContextPromise);
        for (const middleware of _config.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>_config.httpApi.send(ctx))).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((response)=>{
            let middlewarePostObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(response);
            for (const middleware of _config.middleware.reverse()){
                middlewarePostObservable = middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((rsp)=>this.responseProcessor.changeAccountTierWithHttpInfo(rsp)));
        }));
    }
    /**
     * Change account tier
     * changeAccountTier
     * @param accountIndex
     * @param newTier
     * @param [authorization]  make required after integ is done
     * @param [auth]  made optional to support header auth clients
     */ changeAccountTier(accountIndex, newTier, authorization, auth, _options) {
        return this.changeAccountTierWithHttpInfo(accountIndex, newTier, authorization, auth, _options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((apiResponse)=>apiResponse.data));
    }
    /**
     * Get L1 metadata
     * l1Metadata
     * @param l1Address
     * @param [authorization]  make required after integ is done
     * @param [auth]  made optional to support header auth clients
     */ l1MetadataWithHttpInfo(l1Address, authorization, auth, _options) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfiguration"])(this.configuration, _options);
        const requestContextPromise = this.requestFactory.l1Metadata(l1Address, authorization, auth, _config);
        // build promise chain
        let middlewarePreObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(requestContextPromise);
        for (const middleware of _config.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>_config.httpApi.send(ctx))).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((response)=>{
            let middlewarePostObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(response);
            for (const middleware of _config.middleware.reverse()){
                middlewarePostObservable = middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((rsp)=>this.responseProcessor.l1MetadataWithHttpInfo(rsp)));
        }));
    }
    /**
     * Get L1 metadata
     * l1Metadata
     * @param l1Address
     * @param [authorization]  make required after integ is done
     * @param [auth]  made optional to support header auth clients
     */ l1Metadata(l1Address, authorization, auth, _options) {
        return this.l1MetadataWithHttpInfo(l1Address, authorization, auth, _options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((apiResponse)=>apiResponse.data));
    }
    /**
     * Get liquidation infos
     * liquidations
     * @param accountIndex
     * @param limit
     * @param [authorization]  make required after integ is done
     * @param [auth]  made optional to support header auth clients
     * @param [marketId]
     * @param [cursor]
     */ liquidationsWithHttpInfo(accountIndex, limit, authorization, auth, marketId, cursor, _options) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfiguration"])(this.configuration, _options);
        const requestContextPromise = this.requestFactory.liquidations(accountIndex, limit, authorization, auth, marketId, cursor, _config);
        // build promise chain
        let middlewarePreObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(requestContextPromise);
        for (const middleware of _config.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>_config.httpApi.send(ctx))).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((response)=>{
            let middlewarePostObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(response);
            for (const middleware of _config.middleware.reverse()){
                middlewarePostObservable = middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((rsp)=>this.responseProcessor.liquidationsWithHttpInfo(rsp)));
        }));
    }
    /**
     * Get liquidation infos
     * liquidations
     * @param accountIndex
     * @param limit
     * @param [authorization]  make required after integ is done
     * @param [auth]  made optional to support header auth clients
     * @param [marketId]
     * @param [cursor]
     */ liquidations(accountIndex, limit, authorization, auth, marketId, cursor, _options) {
        return this.liquidationsWithHttpInfo(accountIndex, limit, authorization, auth, marketId, cursor, _options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((apiResponse)=>apiResponse.data));
    }
    /**
     * Get account PnL chart
     * pnl
     * @param by
     * @param value
     * @param resolution
     * @param startTimestamp
     * @param endTimestamp
     * @param countBack
     * @param [authorization]
     * @param [auth]
     * @param [ignoreTransfers]
     */ pnlWithHttpInfo(by, value, resolution, startTimestamp, endTimestamp, countBack, authorization, auth, ignoreTransfers, _options) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfiguration"])(this.configuration, _options);
        const requestContextPromise = this.requestFactory.pnl(by, value, resolution, startTimestamp, endTimestamp, countBack, authorization, auth, ignoreTransfers, _config);
        // build promise chain
        let middlewarePreObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(requestContextPromise);
        for (const middleware of _config.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>_config.httpApi.send(ctx))).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((response)=>{
            let middlewarePostObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(response);
            for (const middleware of _config.middleware.reverse()){
                middlewarePostObservable = middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((rsp)=>this.responseProcessor.pnlWithHttpInfo(rsp)));
        }));
    }
    /**
     * Get account PnL chart
     * pnl
     * @param by
     * @param value
     * @param resolution
     * @param startTimestamp
     * @param endTimestamp
     * @param countBack
     * @param [authorization]
     * @param [auth]
     * @param [ignoreTransfers]
     */ pnl(by, value, resolution, startTimestamp, endTimestamp, countBack, authorization, auth, ignoreTransfers, _options) {
        return this.pnlWithHttpInfo(by, value, resolution, startTimestamp, endTimestamp, countBack, authorization, auth, ignoreTransfers, _options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((apiResponse)=>apiResponse.data));
    }
    /**
     * Get accounts position fundings
     * positionFunding
     * @param accountIndex
     * @param limit
     * @param [authorization]
     * @param [auth]
     * @param [marketId]
     * @param [cursor]
     * @param [side]
     */ positionFundingWithHttpInfo(accountIndex, limit, authorization, auth, marketId, cursor, side, _options) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfiguration"])(this.configuration, _options);
        const requestContextPromise = this.requestFactory.positionFunding(accountIndex, limit, authorization, auth, marketId, cursor, side, _config);
        // build promise chain
        let middlewarePreObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(requestContextPromise);
        for (const middleware of _config.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>_config.httpApi.send(ctx))).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((response)=>{
            let middlewarePostObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(response);
            for (const middleware of _config.middleware.reverse()){
                middlewarePostObservable = middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((rsp)=>this.responseProcessor.positionFundingWithHttpInfo(rsp)));
        }));
    }
    /**
     * Get accounts position fundings
     * positionFunding
     * @param accountIndex
     * @param limit
     * @param [authorization]
     * @param [auth]
     * @param [marketId]
     * @param [cursor]
     * @param [side]
     */ positionFunding(accountIndex, limit, authorization, auth, marketId, cursor, side, _options) {
        return this.positionFundingWithHttpInfo(accountIndex, limit, authorization, auth, marketId, cursor, side, _options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((apiResponse)=>apiResponse.data));
    }
    /**
     * Get public pools
     * publicPools
     * @param index
     * @param limit
     * @param [authorization]
     * @param [auth]
     * @param [filter]
     * @param [accountIndex]
     */ publicPoolsWithHttpInfo(index, limit, authorization, auth, filter, accountIndex, _options) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfiguration"])(this.configuration, _options);
        const requestContextPromise = this.requestFactory.publicPools(index, limit, authorization, auth, filter, accountIndex, _config);
        // build promise chain
        let middlewarePreObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(requestContextPromise);
        for (const middleware of _config.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>_config.httpApi.send(ctx))).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((response)=>{
            let middlewarePostObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(response);
            for (const middleware of _config.middleware.reverse()){
                middlewarePostObservable = middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((rsp)=>this.responseProcessor.publicPoolsWithHttpInfo(rsp)));
        }));
    }
    /**
     * Get public pools
     * publicPools
     * @param index
     * @param limit
     * @param [authorization]
     * @param [auth]
     * @param [filter]
     * @param [accountIndex]
     */ publicPools(index, limit, authorization, auth, filter, accountIndex, _options) {
        return this.publicPoolsWithHttpInfo(index, limit, authorization, auth, filter, accountIndex, _options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((apiResponse)=>apiResponse.data));
    }
    /**
     * Get public pools metadata
     * publicPoolsMetadata
     * @param index
     * @param limit
     * @param [authorization]
     * @param [auth]
     * @param [filter]
     * @param [accountIndex]
     */ publicPoolsMetadataWithHttpInfo(index, limit, authorization, auth, filter, accountIndex, _options) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfiguration"])(this.configuration, _options);
        const requestContextPromise = this.requestFactory.publicPoolsMetadata(index, limit, authorization, auth, filter, accountIndex, _config);
        // build promise chain
        let middlewarePreObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(requestContextPromise);
        for (const middleware of _config.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>_config.httpApi.send(ctx))).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((response)=>{
            let middlewarePostObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(response);
            for (const middleware of _config.middleware.reverse()){
                middlewarePostObservable = middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((rsp)=>this.responseProcessor.publicPoolsMetadataWithHttpInfo(rsp)));
        }));
    }
    /**
     * Get public pools metadata
     * publicPoolsMetadata
     * @param index
     * @param limit
     * @param [authorization]
     * @param [auth]
     * @param [filter]
     * @param [accountIndex]
     */ publicPoolsMetadata(index, limit, authorization, auth, filter, accountIndex, _options) {
        return this.publicPoolsMetadataWithHttpInfo(index, limit, authorization, auth, filter, accountIndex, _options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((apiResponse)=>apiResponse.data));
    }
}
;
class ObservableAnnouncementApi {
    requestFactory;
    responseProcessor;
    configuration;
    constructor(configuration, requestFactory, responseProcessor){
        this.configuration = configuration;
        this.requestFactory = requestFactory || new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$AnnouncementApi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnnouncementApiRequestFactory"](configuration);
        this.responseProcessor = responseProcessor || new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$AnnouncementApi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnnouncementApiResponseProcessor"]();
    }
    /**
     * Get announcement
     * announcement
     */ announcementWithHttpInfo(_options) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfiguration"])(this.configuration, _options);
        const requestContextPromise = this.requestFactory.announcement(_config);
        // build promise chain
        let middlewarePreObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(requestContextPromise);
        for (const middleware of _config.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>_config.httpApi.send(ctx))).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((response)=>{
            let middlewarePostObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(response);
            for (const middleware of _config.middleware.reverse()){
                middlewarePostObservable = middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((rsp)=>this.responseProcessor.announcementWithHttpInfo(rsp)));
        }));
    }
    /**
     * Get announcement
     * announcement
     */ announcement(_options) {
        return this.announcementWithHttpInfo(_options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((apiResponse)=>apiResponse.data));
    }
}
;
class ObservableBlockApi {
    requestFactory;
    responseProcessor;
    configuration;
    constructor(configuration, requestFactory, responseProcessor){
        this.configuration = configuration;
        this.requestFactory = requestFactory || new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$BlockApi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BlockApiRequestFactory"](configuration);
        this.responseProcessor = responseProcessor || new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$BlockApi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BlockApiResponseProcessor"]();
    }
    /**
     * Get block by its height or commitment
     * block
     * @param by
     * @param value
     */ blockWithHttpInfo(by, value, _options) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfiguration"])(this.configuration, _options);
        const requestContextPromise = this.requestFactory.block(by, value, _config);
        // build promise chain
        let middlewarePreObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(requestContextPromise);
        for (const middleware of _config.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>_config.httpApi.send(ctx))).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((response)=>{
            let middlewarePostObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(response);
            for (const middleware of _config.middleware.reverse()){
                middlewarePostObservable = middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((rsp)=>this.responseProcessor.blockWithHttpInfo(rsp)));
        }));
    }
    /**
     * Get block by its height or commitment
     * block
     * @param by
     * @param value
     */ block(by, value, _options) {
        return this.blockWithHttpInfo(by, value, _options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((apiResponse)=>apiResponse.data));
    }
    /**
     * Get blocks
     * blocks
     * @param limit
     * @param [index]
     * @param [sort]
     */ blocksWithHttpInfo(limit, index, sort, _options) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfiguration"])(this.configuration, _options);
        const requestContextPromise = this.requestFactory.blocks(limit, index, sort, _config);
        // build promise chain
        let middlewarePreObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(requestContextPromise);
        for (const middleware of _config.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>_config.httpApi.send(ctx))).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((response)=>{
            let middlewarePostObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(response);
            for (const middleware of _config.middleware.reverse()){
                middlewarePostObservable = middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((rsp)=>this.responseProcessor.blocksWithHttpInfo(rsp)));
        }));
    }
    /**
     * Get blocks
     * blocks
     * @param limit
     * @param [index]
     * @param [sort]
     */ blocks(limit, index, sort, _options) {
        return this.blocksWithHttpInfo(limit, index, sort, _options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((apiResponse)=>apiResponse.data));
    }
    /**
     * Get current height
     * currentHeight
     */ currentHeightWithHttpInfo(_options) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfiguration"])(this.configuration, _options);
        const requestContextPromise = this.requestFactory.currentHeight(_config);
        // build promise chain
        let middlewarePreObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(requestContextPromise);
        for (const middleware of _config.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>_config.httpApi.send(ctx))).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((response)=>{
            let middlewarePostObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(response);
            for (const middleware of _config.middleware.reverse()){
                middlewarePostObservable = middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((rsp)=>this.responseProcessor.currentHeightWithHttpInfo(rsp)));
        }));
    }
    /**
     * Get current height
     * currentHeight
     */ currentHeight(_options) {
        return this.currentHeightWithHttpInfo(_options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((apiResponse)=>apiResponse.data));
    }
}
;
class ObservableBridgeApi {
    requestFactory;
    responseProcessor;
    configuration;
    constructor(configuration, requestFactory, responseProcessor){
        this.configuration = configuration;
        this.requestFactory = requestFactory || new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$BridgeApi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BridgeApiRequestFactory"](configuration);
        this.responseProcessor = responseProcessor || new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$BridgeApi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BridgeApiResponseProcessor"]();
    }
    /**
     * Get fast bridge info
     * fastbridge_info
     */ fastbridgeInfoWithHttpInfo(_options) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfiguration"])(this.configuration, _options);
        const requestContextPromise = this.requestFactory.fastbridgeInfo(_config);
        // build promise chain
        let middlewarePreObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(requestContextPromise);
        for (const middleware of _config.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>_config.httpApi.send(ctx))).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((response)=>{
            let middlewarePostObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(response);
            for (const middleware of _config.middleware.reverse()){
                middlewarePostObservable = middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((rsp)=>this.responseProcessor.fastbridgeInfoWithHttpInfo(rsp)));
        }));
    }
    /**
     * Get fast bridge info
     * fastbridge_info
     */ fastbridgeInfo(_options) {
        return this.fastbridgeInfoWithHttpInfo(_options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((apiResponse)=>apiResponse.data));
    }
}
;
class ObservableCandlestickApi {
    requestFactory;
    responseProcessor;
    configuration;
    constructor(configuration, requestFactory, responseProcessor){
        this.configuration = configuration;
        this.requestFactory = requestFactory || new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$CandlestickApi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CandlestickApiRequestFactory"](configuration);
        this.responseProcessor = responseProcessor || new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$CandlestickApi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CandlestickApiResponseProcessor"]();
    }
    /**
     * Get candlesticks
     * candlesticks
     * @param marketId
     * @param resolution
     * @param startTimestamp
     * @param endTimestamp
     * @param countBack
     * @param [setTimestampToEnd]
     */ candlesticksWithHttpInfo(marketId, resolution, startTimestamp, endTimestamp, countBack, setTimestampToEnd, _options) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfiguration"])(this.configuration, _options);
        const requestContextPromise = this.requestFactory.candlesticks(marketId, resolution, startTimestamp, endTimestamp, countBack, setTimestampToEnd, _config);
        // build promise chain
        let middlewarePreObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(requestContextPromise);
        for (const middleware of _config.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>_config.httpApi.send(ctx))).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((response)=>{
            let middlewarePostObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(response);
            for (const middleware of _config.middleware.reverse()){
                middlewarePostObservable = middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((rsp)=>this.responseProcessor.candlesticksWithHttpInfo(rsp)));
        }));
    }
    /**
     * Get candlesticks
     * candlesticks
     * @param marketId
     * @param resolution
     * @param startTimestamp
     * @param endTimestamp
     * @param countBack
     * @param [setTimestampToEnd]
     */ candlesticks(marketId, resolution, startTimestamp, endTimestamp, countBack, setTimestampToEnd, _options) {
        return this.candlesticksWithHttpInfo(marketId, resolution, startTimestamp, endTimestamp, countBack, setTimestampToEnd, _options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((apiResponse)=>apiResponse.data));
    }
    /**
     * Get fundings
     * fundings
     * @param marketId
     * @param resolution
     * @param startTimestamp
     * @param endTimestamp
     * @param countBack
     */ fundingsWithHttpInfo(marketId, resolution, startTimestamp, endTimestamp, countBack, _options) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfiguration"])(this.configuration, _options);
        const requestContextPromise = this.requestFactory.fundings(marketId, resolution, startTimestamp, endTimestamp, countBack, _config);
        // build promise chain
        let middlewarePreObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(requestContextPromise);
        for (const middleware of _config.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>_config.httpApi.send(ctx))).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((response)=>{
            let middlewarePostObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(response);
            for (const middleware of _config.middleware.reverse()){
                middlewarePostObservable = middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((rsp)=>this.responseProcessor.fundingsWithHttpInfo(rsp)));
        }));
    }
    /**
     * Get fundings
     * fundings
     * @param marketId
     * @param resolution
     * @param startTimestamp
     * @param endTimestamp
     * @param countBack
     */ fundings(marketId, resolution, startTimestamp, endTimestamp, countBack, _options) {
        return this.fundingsWithHttpInfo(marketId, resolution, startTimestamp, endTimestamp, countBack, _options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((apiResponse)=>apiResponse.data));
    }
}
;
class ObservableFundingApi {
    requestFactory;
    responseProcessor;
    configuration;
    constructor(configuration, requestFactory, responseProcessor){
        this.configuration = configuration;
        this.requestFactory = requestFactory || new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$FundingApi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["FundingApiRequestFactory"](configuration);
        this.responseProcessor = responseProcessor || new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$FundingApi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["FundingApiResponseProcessor"]();
    }
    /**
     * Get funding rates
     * funding-rates
     */ fundingRatesWithHttpInfo(_options) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfiguration"])(this.configuration, _options);
        const requestContextPromise = this.requestFactory.fundingRates(_config);
        // build promise chain
        let middlewarePreObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(requestContextPromise);
        for (const middleware of _config.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>_config.httpApi.send(ctx))).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((response)=>{
            let middlewarePostObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(response);
            for (const middleware of _config.middleware.reverse()){
                middlewarePostObservable = middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((rsp)=>this.responseProcessor.fundingRatesWithHttpInfo(rsp)));
        }));
    }
    /**
     * Get funding rates
     * funding-rates
     */ fundingRates(_options) {
        return this.fundingRatesWithHttpInfo(_options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((apiResponse)=>apiResponse.data));
    }
}
;
class ObservableInfoApi {
    requestFactory;
    responseProcessor;
    configuration;
    constructor(configuration, requestFactory, responseProcessor){
        this.configuration = configuration;
        this.requestFactory = requestFactory || new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$InfoApi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InfoApiRequestFactory"](configuration);
        this.responseProcessor = responseProcessor || new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$InfoApi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InfoApiResponseProcessor"]();
    }
    /**
     * Transfer fee info
     * transferFeeInfo
     * @param accountIndex
     * @param [authorization]
     * @param [auth]
     * @param [toAccountIndex]
     */ transferFeeInfoWithHttpInfo(accountIndex, authorization, auth, toAccountIndex, _options) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfiguration"])(this.configuration, _options);
        const requestContextPromise = this.requestFactory.transferFeeInfo(accountIndex, authorization, auth, toAccountIndex, _config);
        // build promise chain
        let middlewarePreObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(requestContextPromise);
        for (const middleware of _config.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>_config.httpApi.send(ctx))).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((response)=>{
            let middlewarePostObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(response);
            for (const middleware of _config.middleware.reverse()){
                middlewarePostObservable = middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((rsp)=>this.responseProcessor.transferFeeInfoWithHttpInfo(rsp)));
        }));
    }
    /**
     * Transfer fee info
     * transferFeeInfo
     * @param accountIndex
     * @param [authorization]
     * @param [auth]
     * @param [toAccountIndex]
     */ transferFeeInfo(accountIndex, authorization, auth, toAccountIndex, _options) {
        return this.transferFeeInfoWithHttpInfo(accountIndex, authorization, auth, toAccountIndex, _options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((apiResponse)=>apiResponse.data));
    }
    /**
     * Withdrawal delay in seconds
     * withdrawalDelay
     */ withdrawalDelayWithHttpInfo(_options) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfiguration"])(this.configuration, _options);
        const requestContextPromise = this.requestFactory.withdrawalDelay(_config);
        // build promise chain
        let middlewarePreObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(requestContextPromise);
        for (const middleware of _config.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>_config.httpApi.send(ctx))).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((response)=>{
            let middlewarePostObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(response);
            for (const middleware of _config.middleware.reverse()){
                middlewarePostObservable = middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((rsp)=>this.responseProcessor.withdrawalDelayWithHttpInfo(rsp)));
        }));
    }
    /**
     * Withdrawal delay in seconds
     * withdrawalDelay
     */ withdrawalDelay(_options) {
        return this.withdrawalDelayWithHttpInfo(_options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((apiResponse)=>apiResponse.data));
    }
}
;
class ObservableNotificationApi {
    requestFactory;
    responseProcessor;
    configuration;
    constructor(configuration, requestFactory, responseProcessor){
        this.configuration = configuration;
        this.requestFactory = requestFactory || new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$NotificationApi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NotificationApiRequestFactory"](configuration);
        this.responseProcessor = responseProcessor || new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$NotificationApi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NotificationApiResponseProcessor"]();
    }
    /**
     * Ack notification
     * notification_ack
     * @param notifId
     * @param accountIndex
     * @param [authorization]  make required after integ is done
     * @param [auth]  made optional to support header auth clients
     */ notificationAckWithHttpInfo(notifId, accountIndex, authorization, auth, _options) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfiguration"])(this.configuration, _options);
        const requestContextPromise = this.requestFactory.notificationAck(notifId, accountIndex, authorization, auth, _config);
        // build promise chain
        let middlewarePreObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(requestContextPromise);
        for (const middleware of _config.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>_config.httpApi.send(ctx))).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((response)=>{
            let middlewarePostObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(response);
            for (const middleware of _config.middleware.reverse()){
                middlewarePostObservable = middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((rsp)=>this.responseProcessor.notificationAckWithHttpInfo(rsp)));
        }));
    }
    /**
     * Ack notification
     * notification_ack
     * @param notifId
     * @param accountIndex
     * @param [authorization]  make required after integ is done
     * @param [auth]  made optional to support header auth clients
     */ notificationAck(notifId, accountIndex, authorization, auth, _options) {
        return this.notificationAckWithHttpInfo(notifId, accountIndex, authorization, auth, _options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((apiResponse)=>apiResponse.data));
    }
}
;
class ObservableOrderApi {
    requestFactory;
    responseProcessor;
    configuration;
    constructor(configuration, requestFactory, responseProcessor){
        this.configuration = configuration;
        this.requestFactory = requestFactory || new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$OrderApi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderApiRequestFactory"](configuration);
        this.responseProcessor = responseProcessor || new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$OrderApi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderApiResponseProcessor"]();
    }
    /**
     * Export data
     * export
     * @param type
     * @param [authorization]
     * @param [auth]
     * @param [accountIndex]
     * @param [marketId]
     */ _exportWithHttpInfo(type, authorization, auth, accountIndex, marketId, _options) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfiguration"])(this.configuration, _options);
        const requestContextPromise = this.requestFactory._export(type, authorization, auth, accountIndex, marketId, _config);
        // build promise chain
        let middlewarePreObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(requestContextPromise);
        for (const middleware of _config.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>_config.httpApi.send(ctx))).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((response)=>{
            let middlewarePostObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(response);
            for (const middleware of _config.middleware.reverse()){
                middlewarePostObservable = middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((rsp)=>this.responseProcessor._exportWithHttpInfo(rsp)));
        }));
    }
    /**
     * Export data
     * export
     * @param type
     * @param [authorization]
     * @param [auth]
     * @param [accountIndex]
     * @param [marketId]
     */ _export(type, authorization, auth, accountIndex, marketId, _options) {
        return this._exportWithHttpInfo(type, authorization, auth, accountIndex, marketId, _options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((apiResponse)=>apiResponse.data));
    }
    /**
     * Get account active orders. `auth` can be generated using the SDK.
     * accountActiveOrders
     * @param accountIndex
     * @param marketId
     * @param [authorization]  make required after integ is done
     * @param [auth]  made optional to support header auth clients
     */ accountActiveOrdersWithHttpInfo(accountIndex, marketId, authorization, auth, _options) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfiguration"])(this.configuration, _options);
        const requestContextPromise = this.requestFactory.accountActiveOrders(accountIndex, marketId, authorization, auth, _config);
        // build promise chain
        let middlewarePreObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(requestContextPromise);
        for (const middleware of _config.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>_config.httpApi.send(ctx))).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((response)=>{
            let middlewarePostObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(response);
            for (const middleware of _config.middleware.reverse()){
                middlewarePostObservable = middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((rsp)=>this.responseProcessor.accountActiveOrdersWithHttpInfo(rsp)));
        }));
    }
    /**
     * Get account active orders. `auth` can be generated using the SDK.
     * accountActiveOrders
     * @param accountIndex
     * @param marketId
     * @param [authorization]  make required after integ is done
     * @param [auth]  made optional to support header auth clients
     */ accountActiveOrders(accountIndex, marketId, authorization, auth, _options) {
        return this.accountActiveOrdersWithHttpInfo(accountIndex, marketId, authorization, auth, _options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((apiResponse)=>apiResponse.data));
    }
    /**
     * Get account inactive orders
     * accountInactiveOrders
     * @param accountIndex
     * @param limit
     * @param [authorization]  make required after integ is done
     * @param [auth]  made optional to support header auth clients
     * @param [marketId]
     * @param [askFilter]
     * @param [betweenTimestamps]
     * @param [cursor]
     */ accountInactiveOrdersWithHttpInfo(accountIndex, limit, authorization, auth, marketId, askFilter, betweenTimestamps, cursor, _options) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfiguration"])(this.configuration, _options);
        const requestContextPromise = this.requestFactory.accountInactiveOrders(accountIndex, limit, authorization, auth, marketId, askFilter, betweenTimestamps, cursor, _config);
        // build promise chain
        let middlewarePreObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(requestContextPromise);
        for (const middleware of _config.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>_config.httpApi.send(ctx))).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((response)=>{
            let middlewarePostObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(response);
            for (const middleware of _config.middleware.reverse()){
                middlewarePostObservable = middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((rsp)=>this.responseProcessor.accountInactiveOrdersWithHttpInfo(rsp)));
        }));
    }
    /**
     * Get account inactive orders
     * accountInactiveOrders
     * @param accountIndex
     * @param limit
     * @param [authorization]  make required after integ is done
     * @param [auth]  made optional to support header auth clients
     * @param [marketId]
     * @param [askFilter]
     * @param [betweenTimestamps]
     * @param [cursor]
     */ accountInactiveOrders(accountIndex, limit, authorization, auth, marketId, askFilter, betweenTimestamps, cursor, _options) {
        return this.accountInactiveOrdersWithHttpInfo(accountIndex, limit, authorization, auth, marketId, askFilter, betweenTimestamps, cursor, _options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((apiResponse)=>apiResponse.data));
    }
    /**
     * Get exchange stats
     * exchangeStats
     */ exchangeStatsWithHttpInfo(_options) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfiguration"])(this.configuration, _options);
        const requestContextPromise = this.requestFactory.exchangeStats(_config);
        // build promise chain
        let middlewarePreObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(requestContextPromise);
        for (const middleware of _config.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>_config.httpApi.send(ctx))).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((response)=>{
            let middlewarePostObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(response);
            for (const middleware of _config.middleware.reverse()){
                middlewarePostObservable = middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((rsp)=>this.responseProcessor.exchangeStatsWithHttpInfo(rsp)));
        }));
    }
    /**
     * Get exchange stats
     * exchangeStats
     */ exchangeStats(_options) {
        return this.exchangeStatsWithHttpInfo(_options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((apiResponse)=>apiResponse.data));
    }
    /**
     * Get order books metadata
     * orderBookDetails
     * @param [marketId]
     */ orderBookDetailsWithHttpInfo(marketId, _options) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfiguration"])(this.configuration, _options);
        const requestContextPromise = this.requestFactory.orderBookDetails(marketId, _config);
        // build promise chain
        let middlewarePreObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(requestContextPromise);
        for (const middleware of _config.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>_config.httpApi.send(ctx))).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((response)=>{
            let middlewarePostObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(response);
            for (const middleware of _config.middleware.reverse()){
                middlewarePostObservable = middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((rsp)=>this.responseProcessor.orderBookDetailsWithHttpInfo(rsp)));
        }));
    }
    /**
     * Get order books metadata
     * orderBookDetails
     * @param [marketId]
     */ orderBookDetails(marketId, _options) {
        return this.orderBookDetailsWithHttpInfo(marketId, _options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((apiResponse)=>apiResponse.data));
    }
    /**
     * Get order book orders
     * orderBookOrders
     * @param marketId
     * @param limit
     */ orderBookOrdersWithHttpInfo(marketId, limit, _options) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfiguration"])(this.configuration, _options);
        const requestContextPromise = this.requestFactory.orderBookOrders(marketId, limit, _config);
        // build promise chain
        let middlewarePreObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(requestContextPromise);
        for (const middleware of _config.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>_config.httpApi.send(ctx))).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((response)=>{
            let middlewarePostObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(response);
            for (const middleware of _config.middleware.reverse()){
                middlewarePostObservable = middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((rsp)=>this.responseProcessor.orderBookOrdersWithHttpInfo(rsp)));
        }));
    }
    /**
     * Get order book orders
     * orderBookOrders
     * @param marketId
     * @param limit
     */ orderBookOrders(marketId, limit, _options) {
        return this.orderBookOrdersWithHttpInfo(marketId, limit, _options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((apiResponse)=>apiResponse.data));
    }
    /**
     * Get order books metadata.<hr>**Response Description:**<br><br>1) **Taker and maker fees** are in percentage.<br>2) **Min base amount:** The amount of base token that can be traded in a single order.<br>3) **Min quote amount:** The amount of quote token that can be traded in a single order.<br>4) **Supported size decimals:** The number of decimal places that can be used for the size of the order.<br>5) **Supported price decimals:** The number of decimal places that can be used for the price of the order.<br>6) **Supported quote decimals:** Size Decimals + Quote Decimals.
     * orderBooks
     * @param [marketId]
     */ orderBooksWithHttpInfo(marketId, _options) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfiguration"])(this.configuration, _options);
        const requestContextPromise = this.requestFactory.orderBooks(marketId, _config);
        // build promise chain
        let middlewarePreObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(requestContextPromise);
        for (const middleware of _config.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>_config.httpApi.send(ctx))).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((response)=>{
            let middlewarePostObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(response);
            for (const middleware of _config.middleware.reverse()){
                middlewarePostObservable = middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((rsp)=>this.responseProcessor.orderBooksWithHttpInfo(rsp)));
        }));
    }
    /**
     * Get order books metadata.<hr>**Response Description:**<br><br>1) **Taker and maker fees** are in percentage.<br>2) **Min base amount:** The amount of base token that can be traded in a single order.<br>3) **Min quote amount:** The amount of quote token that can be traded in a single order.<br>4) **Supported size decimals:** The number of decimal places that can be used for the size of the order.<br>5) **Supported price decimals:** The number of decimal places that can be used for the price of the order.<br>6) **Supported quote decimals:** Size Decimals + Quote Decimals.
     * orderBooks
     * @param [marketId]
     */ orderBooks(marketId, _options) {
        return this.orderBooksWithHttpInfo(marketId, _options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((apiResponse)=>apiResponse.data));
    }
    /**
     * Get recent trades
     * recentTrades
     * @param marketId
     * @param limit
     */ recentTradesWithHttpInfo(marketId, limit, _options) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfiguration"])(this.configuration, _options);
        const requestContextPromise = this.requestFactory.recentTrades(marketId, limit, _config);
        // build promise chain
        let middlewarePreObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(requestContextPromise);
        for (const middleware of _config.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>_config.httpApi.send(ctx))).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((response)=>{
            let middlewarePostObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(response);
            for (const middleware of _config.middleware.reverse()){
                middlewarePostObservable = middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((rsp)=>this.responseProcessor.recentTradesWithHttpInfo(rsp)));
        }));
    }
    /**
     * Get recent trades
     * recentTrades
     * @param marketId
     * @param limit
     */ recentTrades(marketId, limit, _options) {
        return this.recentTradesWithHttpInfo(marketId, limit, _options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((apiResponse)=>apiResponse.data));
    }
    /**
     * Get trades
     * trades
     * @param sortBy
     * @param limit
     * @param [authorization]
     * @param [auth]
     * @param [marketId]
     * @param [accountIndex]
     * @param [orderIndex]
     * @param [sortDir]
     * @param [cursor]
     * @param [_from]
     * @param [askFilter]
     */ tradesWithHttpInfo(sortBy, limit, authorization, auth, marketId, accountIndex, orderIndex, sortDir, cursor, _from, askFilter, _options) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfiguration"])(this.configuration, _options);
        const requestContextPromise = this.requestFactory.trades(sortBy, limit, authorization, auth, marketId, accountIndex, orderIndex, sortDir, cursor, _from, askFilter, _config);
        // build promise chain
        let middlewarePreObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(requestContextPromise);
        for (const middleware of _config.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>_config.httpApi.send(ctx))).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((response)=>{
            let middlewarePostObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(response);
            for (const middleware of _config.middleware.reverse()){
                middlewarePostObservable = middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((rsp)=>this.responseProcessor.tradesWithHttpInfo(rsp)));
        }));
    }
    /**
     * Get trades
     * trades
     * @param sortBy
     * @param limit
     * @param [authorization]
     * @param [auth]
     * @param [marketId]
     * @param [accountIndex]
     * @param [orderIndex]
     * @param [sortDir]
     * @param [cursor]
     * @param [_from]
     * @param [askFilter]
     */ trades(sortBy, limit, authorization, auth, marketId, accountIndex, orderIndex, sortDir, cursor, _from, askFilter, _options) {
        return this.tradesWithHttpInfo(sortBy, limit, authorization, auth, marketId, accountIndex, orderIndex, sortDir, cursor, _from, askFilter, _options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((apiResponse)=>apiResponse.data));
    }
}
;
class ObservableReferralApi {
    requestFactory;
    responseProcessor;
    configuration;
    constructor(configuration, requestFactory, responseProcessor){
        this.configuration = configuration;
        this.requestFactory = requestFactory || new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$ReferralApi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReferralApiRequestFactory"](configuration);
        this.responseProcessor = responseProcessor || new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$ReferralApi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReferralApiResponseProcessor"]();
    }
    /**
     * Get referral points
     * referral_points
     * @param accountIndex
     * @param [authorization]  make required after integ is done
     * @param [auth]  made optional to support header auth clients
     */ referralPointsWithHttpInfo(accountIndex, authorization, auth, _options) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfiguration"])(this.configuration, _options);
        const requestContextPromise = this.requestFactory.referralPoints(accountIndex, authorization, auth, _config);
        // build promise chain
        let middlewarePreObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(requestContextPromise);
        for (const middleware of _config.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>_config.httpApi.send(ctx))).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((response)=>{
            let middlewarePostObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(response);
            for (const middleware of _config.middleware.reverse()){
                middlewarePostObservable = middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((rsp)=>this.responseProcessor.referralPointsWithHttpInfo(rsp)));
        }));
    }
    /**
     * Get referral points
     * referral_points
     * @param accountIndex
     * @param [authorization]  make required after integ is done
     * @param [auth]  made optional to support header auth clients
     */ referralPoints(accountIndex, authorization, auth, _options) {
        return this.referralPointsWithHttpInfo(accountIndex, authorization, auth, _options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((apiResponse)=>apiResponse.data));
    }
}
;
class ObservableRootApi {
    requestFactory;
    responseProcessor;
    configuration;
    constructor(configuration, requestFactory, responseProcessor){
        this.configuration = configuration;
        this.requestFactory = requestFactory || new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$RootApi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RootApiRequestFactory"](configuration);
        this.responseProcessor = responseProcessor || new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$RootApi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RootApiResponseProcessor"]();
    }
    /**
     * Get info of zklighter
     * info
     */ infoWithHttpInfo(_options) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfiguration"])(this.configuration, _options);
        const requestContextPromise = this.requestFactory.info(_config);
        // build promise chain
        let middlewarePreObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(requestContextPromise);
        for (const middleware of _config.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>_config.httpApi.send(ctx))).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((response)=>{
            let middlewarePostObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(response);
            for (const middleware of _config.middleware.reverse()){
                middlewarePostObservable = middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((rsp)=>this.responseProcessor.infoWithHttpInfo(rsp)));
        }));
    }
    /**
     * Get info of zklighter
     * info
     */ info(_options) {
        return this.infoWithHttpInfo(_options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((apiResponse)=>apiResponse.data));
    }
    /**
     * Get status of zklighter
     * status
     */ statusWithHttpInfo(_options) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfiguration"])(this.configuration, _options);
        const requestContextPromise = this.requestFactory.status(_config);
        // build promise chain
        let middlewarePreObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(requestContextPromise);
        for (const middleware of _config.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>_config.httpApi.send(ctx))).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((response)=>{
            let middlewarePostObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(response);
            for (const middleware of _config.middleware.reverse()){
                middlewarePostObservable = middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((rsp)=>this.responseProcessor.statusWithHttpInfo(rsp)));
        }));
    }
    /**
     * Get status of zklighter
     * status
     */ status(_options) {
        return this.statusWithHttpInfo(_options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((apiResponse)=>apiResponse.data));
    }
}
;
class ObservableTransactionApi {
    requestFactory;
    responseProcessor;
    configuration;
    constructor(configuration, requestFactory, responseProcessor){
        this.configuration = configuration;
        this.requestFactory = requestFactory || new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$TransactionApi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TransactionApiRequestFactory"](configuration);
        this.responseProcessor = responseProcessor || new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$TransactionApi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TransactionApiResponseProcessor"]();
    }
    /**
     * Get transactions of a specific account
     * accountTxs
     * @param limit
     * @param by
     * @param value
     * @param [authorization]
     * @param [index]
     * @param [types]
     * @param [auth]
     */ accountTxsWithHttpInfo(limit, by, value, authorization, index, types, auth, _options) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfiguration"])(this.configuration, _options);
        const requestContextPromise = this.requestFactory.accountTxs(limit, by, value, authorization, index, types, auth, _config);
        // build promise chain
        let middlewarePreObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(requestContextPromise);
        for (const middleware of _config.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>_config.httpApi.send(ctx))).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((response)=>{
            let middlewarePostObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(response);
            for (const middleware of _config.middleware.reverse()){
                middlewarePostObservable = middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((rsp)=>this.responseProcessor.accountTxsWithHttpInfo(rsp)));
        }));
    }
    /**
     * Get transactions of a specific account
     * accountTxs
     * @param limit
     * @param by
     * @param value
     * @param [authorization]
     * @param [index]
     * @param [types]
     * @param [auth]
     */ accountTxs(limit, by, value, authorization, index, types, auth, _options) {
        return this.accountTxsWithHttpInfo(limit, by, value, authorization, index, types, auth, _options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((apiResponse)=>apiResponse.data));
    }
    /**
     * Get transactions in a block
     * blockTxs
     * @param by
     * @param value
     */ blockTxsWithHttpInfo(by, value, _options) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfiguration"])(this.configuration, _options);
        const requestContextPromise = this.requestFactory.blockTxs(by, value, _config);
        // build promise chain
        let middlewarePreObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(requestContextPromise);
        for (const middleware of _config.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>_config.httpApi.send(ctx))).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((response)=>{
            let middlewarePostObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(response);
            for (const middleware of _config.middleware.reverse()){
                middlewarePostObservable = middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((rsp)=>this.responseProcessor.blockTxsWithHttpInfo(rsp)));
        }));
    }
    /**
     * Get transactions in a block
     * blockTxs
     * @param by
     * @param value
     */ blockTxs(by, value, _options) {
        return this.blockTxsWithHttpInfo(by, value, _options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((apiResponse)=>apiResponse.data));
    }
    /**
     * Get deposit history
     * deposit_history
     * @param accountIndex
     * @param l1Address
     * @param [authorization]  make required after integ is done
     * @param [auth]  made optional to support header auth clients
     * @param [cursor]
     * @param [filter]
     */ depositHistoryWithHttpInfo(accountIndex, l1Address, authorization, auth, cursor, filter, _options) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfiguration"])(this.configuration, _options);
        const requestContextPromise = this.requestFactory.depositHistory(accountIndex, l1Address, authorization, auth, cursor, filter, _config);
        // build promise chain
        let middlewarePreObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(requestContextPromise);
        for (const middleware of _config.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>_config.httpApi.send(ctx))).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((response)=>{
            let middlewarePostObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(response);
            for (const middleware of _config.middleware.reverse()){
                middlewarePostObservable = middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((rsp)=>this.responseProcessor.depositHistoryWithHttpInfo(rsp)));
        }));
    }
    /**
     * Get deposit history
     * deposit_history
     * @param accountIndex
     * @param l1Address
     * @param [authorization]  make required after integ is done
     * @param [auth]  made optional to support header auth clients
     * @param [cursor]
     * @param [filter]
     */ depositHistory(accountIndex, l1Address, authorization, auth, cursor, filter, _options) {
        return this.depositHistoryWithHttpInfo(accountIndex, l1Address, authorization, auth, cursor, filter, _options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((apiResponse)=>apiResponse.data));
    }
    /**
     * Get next nonce for a specific account and api key
     * nextNonce
     * @param accountIndex
     * @param apiKeyIndex
     */ nextNonceWithHttpInfo(accountIndex, apiKeyIndex, _options) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfiguration"])(this.configuration, _options);
        const requestContextPromise = this.requestFactory.nextNonce(accountIndex, apiKeyIndex, _config);
        // build promise chain
        let middlewarePreObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(requestContextPromise);
        for (const middleware of _config.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>_config.httpApi.send(ctx))).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((response)=>{
            let middlewarePostObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(response);
            for (const middleware of _config.middleware.reverse()){
                middlewarePostObservable = middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((rsp)=>this.responseProcessor.nextNonceWithHttpInfo(rsp)));
        }));
    }
    /**
     * Get next nonce for a specific account and api key
     * nextNonce
     * @param accountIndex
     * @param apiKeyIndex
     */ nextNonce(accountIndex, apiKeyIndex, _options) {
        return this.nextNonceWithHttpInfo(accountIndex, apiKeyIndex, _options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((apiResponse)=>apiResponse.data));
    }
    /**
     * You need to sign the transaction body before sending it to the server. More details can be found in the Get Started docs: [Get Started For Programmers](https://apidocs.lighter.xyz/docs/get-started-for-programmers)
     * sendTx
     * @param txType
     * @param txInfo
     * @param [priceProtection]
     */ sendTxWithHttpInfo(txType, txInfo, priceProtection, _options) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfiguration"])(this.configuration, _options);
        const requestContextPromise = this.requestFactory.sendTx(txType, txInfo, priceProtection, _config);
        // build promise chain
        let middlewarePreObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(requestContextPromise);
        for (const middleware of _config.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>_config.httpApi.send(ctx))).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((response)=>{
            let middlewarePostObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(response);
            for (const middleware of _config.middleware.reverse()){
                middlewarePostObservable = middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((rsp)=>this.responseProcessor.sendTxWithHttpInfo(rsp)));
        }));
    }
    /**
     * You need to sign the transaction body before sending it to the server. More details can be found in the Get Started docs: [Get Started For Programmers](https://apidocs.lighter.xyz/docs/get-started-for-programmers)
     * sendTx
     * @param txType
     * @param txInfo
     * @param [priceProtection]
     */ sendTx(txType, txInfo, priceProtection, _options) {
        return this.sendTxWithHttpInfo(txType, txInfo, priceProtection, _options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((apiResponse)=>apiResponse.data));
    }
    /**
     * You need to sign the transaction body before sending it to the server. More details can be found in the Get Started docs: [Get Started For Programmers](https://apidocs.lighter.xyz/docs/get-started-for-programmers)
     * sendTxBatch
     * @param txTypes
     * @param txInfos
     */ sendTxBatchWithHttpInfo(txTypes, txInfos, _options) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfiguration"])(this.configuration, _options);
        const requestContextPromise = this.requestFactory.sendTxBatch(txTypes, txInfos, _config);
        // build promise chain
        let middlewarePreObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(requestContextPromise);
        for (const middleware of _config.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>_config.httpApi.send(ctx))).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((response)=>{
            let middlewarePostObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(response);
            for (const middleware of _config.middleware.reverse()){
                middlewarePostObservable = middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((rsp)=>this.responseProcessor.sendTxBatchWithHttpInfo(rsp)));
        }));
    }
    /**
     * You need to sign the transaction body before sending it to the server. More details can be found in the Get Started docs: [Get Started For Programmers](https://apidocs.lighter.xyz/docs/get-started-for-programmers)
     * sendTxBatch
     * @param txTypes
     * @param txInfos
     */ sendTxBatch(txTypes, txInfos, _options) {
        return this.sendTxBatchWithHttpInfo(txTypes, txInfos, _options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((apiResponse)=>apiResponse.data));
    }
    /**
     * Get transfer history
     * transfer_history
     * @param accountIndex
     * @param [authorization]  make required after integ is done
     * @param [auth]  made optional to support header auth clients
     * @param [cursor]
     */ transferHistoryWithHttpInfo(accountIndex, authorization, auth, cursor, _options) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfiguration"])(this.configuration, _options);
        const requestContextPromise = this.requestFactory.transferHistory(accountIndex, authorization, auth, cursor, _config);
        // build promise chain
        let middlewarePreObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(requestContextPromise);
        for (const middleware of _config.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>_config.httpApi.send(ctx))).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((response)=>{
            let middlewarePostObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(response);
            for (const middleware of _config.middleware.reverse()){
                middlewarePostObservable = middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((rsp)=>this.responseProcessor.transferHistoryWithHttpInfo(rsp)));
        }));
    }
    /**
     * Get transfer history
     * transfer_history
     * @param accountIndex
     * @param [authorization]  make required after integ is done
     * @param [auth]  made optional to support header auth clients
     * @param [cursor]
     */ transferHistory(accountIndex, authorization, auth, cursor, _options) {
        return this.transferHistoryWithHttpInfo(accountIndex, authorization, auth, cursor, _options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((apiResponse)=>apiResponse.data));
    }
    /**
     * Get transaction by hash or sequence index
     * tx
     * @param by
     * @param value
     */ txWithHttpInfo(by, value, _options) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfiguration"])(this.configuration, _options);
        const requestContextPromise = this.requestFactory.tx(by, value, _config);
        // build promise chain
        let middlewarePreObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(requestContextPromise);
        for (const middleware of _config.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>_config.httpApi.send(ctx))).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((response)=>{
            let middlewarePostObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(response);
            for (const middleware of _config.middleware.reverse()){
                middlewarePostObservable = middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((rsp)=>this.responseProcessor.txWithHttpInfo(rsp)));
        }));
    }
    /**
     * Get transaction by hash or sequence index
     * tx
     * @param by
     * @param value
     */ tx(by, value, _options) {
        return this.txWithHttpInfo(by, value, _options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((apiResponse)=>apiResponse.data));
    }
    /**
     * Get L1 transaction by L1 transaction hash
     * txFromL1TxHash
     * @param hash
     */ txFromL1TxHashWithHttpInfo(hash, _options) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfiguration"])(this.configuration, _options);
        const requestContextPromise = this.requestFactory.txFromL1TxHash(hash, _config);
        // build promise chain
        let middlewarePreObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(requestContextPromise);
        for (const middleware of _config.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>_config.httpApi.send(ctx))).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((response)=>{
            let middlewarePostObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(response);
            for (const middleware of _config.middleware.reverse()){
                middlewarePostObservable = middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((rsp)=>this.responseProcessor.txFromL1TxHashWithHttpInfo(rsp)));
        }));
    }
    /**
     * Get L1 transaction by L1 transaction hash
     * txFromL1TxHash
     * @param hash
     */ txFromL1TxHash(hash, _options) {
        return this.txFromL1TxHashWithHttpInfo(hash, _options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((apiResponse)=>apiResponse.data));
    }
    /**
     * Get transactions which are already packed into blocks
     * txs
     * @param limit
     * @param [index]
     */ txsWithHttpInfo(limit, index, _options) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfiguration"])(this.configuration, _options);
        const requestContextPromise = this.requestFactory.txs(limit, index, _config);
        // build promise chain
        let middlewarePreObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(requestContextPromise);
        for (const middleware of _config.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>_config.httpApi.send(ctx))).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((response)=>{
            let middlewarePostObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(response);
            for (const middleware of _config.middleware.reverse()){
                middlewarePostObservable = middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((rsp)=>this.responseProcessor.txsWithHttpInfo(rsp)));
        }));
    }
    /**
     * Get transactions which are already packed into blocks
     * txs
     * @param limit
     * @param [index]
     */ txs(limit, index, _options) {
        return this.txsWithHttpInfo(limit, index, _options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((apiResponse)=>apiResponse.data));
    }
    /**
     * Get withdraw history
     * withdraw_history
     * @param accountIndex
     * @param [authorization]  make required after integ is done
     * @param [auth]  made optional to support header auth clients
     * @param [cursor]
     * @param [filter]
     */ withdrawHistoryWithHttpInfo(accountIndex, authorization, auth, cursor, filter, _options) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfiguration"])(this.configuration, _options);
        const requestContextPromise = this.requestFactory.withdrawHistory(accountIndex, authorization, auth, cursor, filter, _config);
        // build promise chain
        let middlewarePreObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(requestContextPromise);
        for (const middleware of _config.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((ctx)=>_config.httpApi.send(ctx))).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((response)=>{
            let middlewarePostObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(response);
            for (const middleware of _config.middleware.reverse()){
                middlewarePostObservable = middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((rsp)=>this.responseProcessor.withdrawHistoryWithHttpInfo(rsp)));
        }));
    }
    /**
     * Get withdraw history
     * withdraw_history
     * @param accountIndex
     * @param [authorization]  make required after integ is done
     * @param [auth]  made optional to support header auth clients
     * @param [cursor]
     * @param [filter]
     */ withdrawHistory(accountIndex, authorization, auth, cursor, filter, _options) {
        return this.withdrawHistoryWithHttpInfo(accountIndex, authorization, auth, cursor, filter, _options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((apiResponse)=>apiResponse.data));
    }
}
}),
"[project]/lighter-sdk-ts/generated/types/PromiseAPI.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PromiseAccountApi",
    ()=>PromiseAccountApi,
    "PromiseAnnouncementApi",
    ()=>PromiseAnnouncementApi,
    "PromiseBlockApi",
    ()=>PromiseBlockApi,
    "PromiseBridgeApi",
    ()=>PromiseBridgeApi,
    "PromiseCandlestickApi",
    ()=>PromiseCandlestickApi,
    "PromiseFundingApi",
    ()=>PromiseFundingApi,
    "PromiseInfoApi",
    ()=>PromiseInfoApi,
    "PromiseNotificationApi",
    ()=>PromiseNotificationApi,
    "PromiseOrderApi",
    ()=>PromiseOrderApi,
    "PromiseReferralApi",
    ()=>PromiseReferralApi,
    "PromiseRootApi",
    ()=>PromiseRootApi,
    "PromiseTransactionApi",
    ()=>PromiseTransactionApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/configuration.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$types$2f$ObservableAPI$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/types/ObservableAPI.ts [app-route] (ecmascript)");
;
;
class PromiseAccountApi {
    api;
    constructor(configuration, requestFactory, responseProcessor){
        this.api = new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$types$2f$ObservableAPI$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ObservableAccountApi"](configuration, requestFactory, responseProcessor);
    }
    /**
     * Get account by account\'s index. <br>More details about account index: [Account Index](https://apidocs.lighter.xyz/docs/account-index)<hr>**Response Description:**<br><br>1) **Status:** 1 is active 0 is inactive.<br>2) **Collateral:** The amount of collateral in the account.<hr>**Position Details Description:**<br>1) **OOC:** Open order count in that market.<br>2) **Sign:** 1 for Long, -1 for Short.<br>3) **Position:** The amount of position in that market.<br>4) **Avg Entry Price:** The average entry price of the position.<br>5) **Position Value:** The value of the position.<br>6) **Unrealized PnL:** The unrealized profit and loss of the position.<br>7) **Realized PnL:** The realized profit and loss of the position.
     * account
     * @param by
     * @param value
     */ accountWithHttpInfo(by, value, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.accountWithHttpInfo(by, value, observableOptions);
        return result.toPromise();
    }
    /**
     * Get account by account\'s index. <br>More details about account index: [Account Index](https://apidocs.lighter.xyz/docs/account-index)<hr>**Response Description:**<br><br>1) **Status:** 1 is active 0 is inactive.<br>2) **Collateral:** The amount of collateral in the account.<hr>**Position Details Description:**<br>1) **OOC:** Open order count in that market.<br>2) **Sign:** 1 for Long, -1 for Short.<br>3) **Position:** The amount of position in that market.<br>4) **Avg Entry Price:** The average entry price of the position.<br>5) **Position Value:** The value of the position.<br>6) **Unrealized PnL:** The unrealized profit and loss of the position.<br>7) **Realized PnL:** The realized profit and loss of the position.
     * account
     * @param by
     * @param value
     */ account(by, value, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.account(by, value, observableOptions);
        return result.toPromise();
    }
    /**
     * Get account limits
     * accountLimits
     * @param accountIndex
     * @param [authorization]  make required after integ is done
     * @param [auth]  made optional to support header auth clients
     */ accountLimitsWithHttpInfo(accountIndex, authorization, auth, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.accountLimitsWithHttpInfo(accountIndex, authorization, auth, observableOptions);
        return result.toPromise();
    }
    /**
     * Get account limits
     * accountLimits
     * @param accountIndex
     * @param [authorization]  make required after integ is done
     * @param [auth]  made optional to support header auth clients
     */ accountLimits(accountIndex, authorization, auth, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.accountLimits(accountIndex, authorization, auth, observableOptions);
        return result.toPromise();
    }
    /**
     * Get account metadatas
     * accountMetadata
     * @param by
     * @param value
     * @param [authorization]
     * @param [auth]
     */ accountMetadataWithHttpInfo(by, value, authorization, auth, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.accountMetadataWithHttpInfo(by, value, authorization, auth, observableOptions);
        return result.toPromise();
    }
    /**
     * Get account metadatas
     * accountMetadata
     * @param by
     * @param value
     * @param [authorization]
     * @param [auth]
     */ accountMetadata(by, value, authorization, auth, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.accountMetadata(by, value, authorization, auth, observableOptions);
        return result.toPromise();
    }
    /**
     * Get accounts by l1_address returns all accounts associated with the given L1 address
     * accountsByL1Address
     * @param l1Address
     */ accountsByL1AddressWithHttpInfo(l1Address, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.accountsByL1AddressWithHttpInfo(l1Address, observableOptions);
        return result.toPromise();
    }
    /**
     * Get accounts by l1_address returns all accounts associated with the given L1 address
     * accountsByL1Address
     * @param l1Address
     */ accountsByL1Address(l1Address, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.accountsByL1Address(l1Address, observableOptions);
        return result.toPromise();
    }
    /**
     * Get account api key. Set `api_key_index` to 255 to retrieve all api keys associated with the account.
     * apikeys
     * @param accountIndex
     * @param [apiKeyIndex]
     */ apikeysWithHttpInfo(accountIndex, apiKeyIndex, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.apikeysWithHttpInfo(accountIndex, apiKeyIndex, observableOptions);
        return result.toPromise();
    }
    /**
     * Get account api key. Set `api_key_index` to 255 to retrieve all api keys associated with the account.
     * apikeys
     * @param accountIndex
     * @param [apiKeyIndex]
     */ apikeys(accountIndex, apiKeyIndex, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.apikeys(accountIndex, apiKeyIndex, observableOptions);
        return result.toPromise();
    }
    /**
     * Change account tier
     * changeAccountTier
     * @param accountIndex
     * @param newTier
     * @param [authorization]  make required after integ is done
     * @param [auth]  made optional to support header auth clients
     */ changeAccountTierWithHttpInfo(accountIndex, newTier, authorization, auth, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.changeAccountTierWithHttpInfo(accountIndex, newTier, authorization, auth, observableOptions);
        return result.toPromise();
    }
    /**
     * Change account tier
     * changeAccountTier
     * @param accountIndex
     * @param newTier
     * @param [authorization]  make required after integ is done
     * @param [auth]  made optional to support header auth clients
     */ changeAccountTier(accountIndex, newTier, authorization, auth, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.changeAccountTier(accountIndex, newTier, authorization, auth, observableOptions);
        return result.toPromise();
    }
    /**
     * Get L1 metadata
     * l1Metadata
     * @param l1Address
     * @param [authorization]  make required after integ is done
     * @param [auth]  made optional to support header auth clients
     */ l1MetadataWithHttpInfo(l1Address, authorization, auth, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.l1MetadataWithHttpInfo(l1Address, authorization, auth, observableOptions);
        return result.toPromise();
    }
    /**
     * Get L1 metadata
     * l1Metadata
     * @param l1Address
     * @param [authorization]  make required after integ is done
     * @param [auth]  made optional to support header auth clients
     */ l1Metadata(l1Address, authorization, auth, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.l1Metadata(l1Address, authorization, auth, observableOptions);
        return result.toPromise();
    }
    /**
     * Get liquidation infos
     * liquidations
     * @param accountIndex
     * @param limit
     * @param [authorization]  make required after integ is done
     * @param [auth]  made optional to support header auth clients
     * @param [marketId]
     * @param [cursor]
     */ liquidationsWithHttpInfo(accountIndex, limit, authorization, auth, marketId, cursor, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.liquidationsWithHttpInfo(accountIndex, limit, authorization, auth, marketId, cursor, observableOptions);
        return result.toPromise();
    }
    /**
     * Get liquidation infos
     * liquidations
     * @param accountIndex
     * @param limit
     * @param [authorization]  make required after integ is done
     * @param [auth]  made optional to support header auth clients
     * @param [marketId]
     * @param [cursor]
     */ liquidations(accountIndex, limit, authorization, auth, marketId, cursor, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.liquidations(accountIndex, limit, authorization, auth, marketId, cursor, observableOptions);
        return result.toPromise();
    }
    /**
     * Get account PnL chart
     * pnl
     * @param by
     * @param value
     * @param resolution
     * @param startTimestamp
     * @param endTimestamp
     * @param countBack
     * @param [authorization]
     * @param [auth]
     * @param [ignoreTransfers]
     */ pnlWithHttpInfo(by, value, resolution, startTimestamp, endTimestamp, countBack, authorization, auth, ignoreTransfers, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.pnlWithHttpInfo(by, value, resolution, startTimestamp, endTimestamp, countBack, authorization, auth, ignoreTransfers, observableOptions);
        return result.toPromise();
    }
    /**
     * Get account PnL chart
     * pnl
     * @param by
     * @param value
     * @param resolution
     * @param startTimestamp
     * @param endTimestamp
     * @param countBack
     * @param [authorization]
     * @param [auth]
     * @param [ignoreTransfers]
     */ pnl(by, value, resolution, startTimestamp, endTimestamp, countBack, authorization, auth, ignoreTransfers, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.pnl(by, value, resolution, startTimestamp, endTimestamp, countBack, authorization, auth, ignoreTransfers, observableOptions);
        return result.toPromise();
    }
    /**
     * Get accounts position fundings
     * positionFunding
     * @param accountIndex
     * @param limit
     * @param [authorization]
     * @param [auth]
     * @param [marketId]
     * @param [cursor]
     * @param [side]
     */ positionFundingWithHttpInfo(accountIndex, limit, authorization, auth, marketId, cursor, side, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.positionFundingWithHttpInfo(accountIndex, limit, authorization, auth, marketId, cursor, side, observableOptions);
        return result.toPromise();
    }
    /**
     * Get accounts position fundings
     * positionFunding
     * @param accountIndex
     * @param limit
     * @param [authorization]
     * @param [auth]
     * @param [marketId]
     * @param [cursor]
     * @param [side]
     */ positionFunding(accountIndex, limit, authorization, auth, marketId, cursor, side, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.positionFunding(accountIndex, limit, authorization, auth, marketId, cursor, side, observableOptions);
        return result.toPromise();
    }
    /**
     * Get public pools
     * publicPools
     * @param index
     * @param limit
     * @param [authorization]
     * @param [auth]
     * @param [filter]
     * @param [accountIndex]
     */ publicPoolsWithHttpInfo(index, limit, authorization, auth, filter, accountIndex, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.publicPoolsWithHttpInfo(index, limit, authorization, auth, filter, accountIndex, observableOptions);
        return result.toPromise();
    }
    /**
     * Get public pools
     * publicPools
     * @param index
     * @param limit
     * @param [authorization]
     * @param [auth]
     * @param [filter]
     * @param [accountIndex]
     */ publicPools(index, limit, authorization, auth, filter, accountIndex, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.publicPools(index, limit, authorization, auth, filter, accountIndex, observableOptions);
        return result.toPromise();
    }
    /**
     * Get public pools metadata
     * publicPoolsMetadata
     * @param index
     * @param limit
     * @param [authorization]
     * @param [auth]
     * @param [filter]
     * @param [accountIndex]
     */ publicPoolsMetadataWithHttpInfo(index, limit, authorization, auth, filter, accountIndex, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.publicPoolsMetadataWithHttpInfo(index, limit, authorization, auth, filter, accountIndex, observableOptions);
        return result.toPromise();
    }
    /**
     * Get public pools metadata
     * publicPoolsMetadata
     * @param index
     * @param limit
     * @param [authorization]
     * @param [auth]
     * @param [filter]
     * @param [accountIndex]
     */ publicPoolsMetadata(index, limit, authorization, auth, filter, accountIndex, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.publicPoolsMetadata(index, limit, authorization, auth, filter, accountIndex, observableOptions);
        return result.toPromise();
    }
}
;
class PromiseAnnouncementApi {
    api;
    constructor(configuration, requestFactory, responseProcessor){
        this.api = new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$types$2f$ObservableAPI$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ObservableAnnouncementApi"](configuration, requestFactory, responseProcessor);
    }
    /**
     * Get announcement
     * announcement
     */ announcementWithHttpInfo(_options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.announcementWithHttpInfo(observableOptions);
        return result.toPromise();
    }
    /**
     * Get announcement
     * announcement
     */ announcement(_options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.announcement(observableOptions);
        return result.toPromise();
    }
}
;
class PromiseBlockApi {
    api;
    constructor(configuration, requestFactory, responseProcessor){
        this.api = new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$types$2f$ObservableAPI$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ObservableBlockApi"](configuration, requestFactory, responseProcessor);
    }
    /**
     * Get block by its height or commitment
     * block
     * @param by
     * @param value
     */ blockWithHttpInfo(by, value, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.blockWithHttpInfo(by, value, observableOptions);
        return result.toPromise();
    }
    /**
     * Get block by its height or commitment
     * block
     * @param by
     * @param value
     */ block(by, value, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.block(by, value, observableOptions);
        return result.toPromise();
    }
    /**
     * Get blocks
     * blocks
     * @param limit
     * @param [index]
     * @param [sort]
     */ blocksWithHttpInfo(limit, index, sort, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.blocksWithHttpInfo(limit, index, sort, observableOptions);
        return result.toPromise();
    }
    /**
     * Get blocks
     * blocks
     * @param limit
     * @param [index]
     * @param [sort]
     */ blocks(limit, index, sort, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.blocks(limit, index, sort, observableOptions);
        return result.toPromise();
    }
    /**
     * Get current height
     * currentHeight
     */ currentHeightWithHttpInfo(_options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.currentHeightWithHttpInfo(observableOptions);
        return result.toPromise();
    }
    /**
     * Get current height
     * currentHeight
     */ currentHeight(_options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.currentHeight(observableOptions);
        return result.toPromise();
    }
}
;
class PromiseBridgeApi {
    api;
    constructor(configuration, requestFactory, responseProcessor){
        this.api = new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$types$2f$ObservableAPI$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ObservableBridgeApi"](configuration, requestFactory, responseProcessor);
    }
    /**
     * Get fast bridge info
     * fastbridge_info
     */ fastbridgeInfoWithHttpInfo(_options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.fastbridgeInfoWithHttpInfo(observableOptions);
        return result.toPromise();
    }
    /**
     * Get fast bridge info
     * fastbridge_info
     */ fastbridgeInfo(_options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.fastbridgeInfo(observableOptions);
        return result.toPromise();
    }
}
;
class PromiseCandlestickApi {
    api;
    constructor(configuration, requestFactory, responseProcessor){
        this.api = new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$types$2f$ObservableAPI$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ObservableCandlestickApi"](configuration, requestFactory, responseProcessor);
    }
    /**
     * Get candlesticks
     * candlesticks
     * @param marketId
     * @param resolution
     * @param startTimestamp
     * @param endTimestamp
     * @param countBack
     * @param [setTimestampToEnd]
     */ candlesticksWithHttpInfo(marketId, resolution, startTimestamp, endTimestamp, countBack, setTimestampToEnd, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.candlesticksWithHttpInfo(marketId, resolution, startTimestamp, endTimestamp, countBack, setTimestampToEnd, observableOptions);
        return result.toPromise();
    }
    /**
     * Get candlesticks
     * candlesticks
     * @param marketId
     * @param resolution
     * @param startTimestamp
     * @param endTimestamp
     * @param countBack
     * @param [setTimestampToEnd]
     */ candlesticks(marketId, resolution, startTimestamp, endTimestamp, countBack, setTimestampToEnd, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.candlesticks(marketId, resolution, startTimestamp, endTimestamp, countBack, setTimestampToEnd, observableOptions);
        return result.toPromise();
    }
    /**
     * Get fundings
     * fundings
     * @param marketId
     * @param resolution
     * @param startTimestamp
     * @param endTimestamp
     * @param countBack
     */ fundingsWithHttpInfo(marketId, resolution, startTimestamp, endTimestamp, countBack, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.fundingsWithHttpInfo(marketId, resolution, startTimestamp, endTimestamp, countBack, observableOptions);
        return result.toPromise();
    }
    /**
     * Get fundings
     * fundings
     * @param marketId
     * @param resolution
     * @param startTimestamp
     * @param endTimestamp
     * @param countBack
     */ fundings(marketId, resolution, startTimestamp, endTimestamp, countBack, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.fundings(marketId, resolution, startTimestamp, endTimestamp, countBack, observableOptions);
        return result.toPromise();
    }
}
;
class PromiseFundingApi {
    api;
    constructor(configuration, requestFactory, responseProcessor){
        this.api = new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$types$2f$ObservableAPI$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ObservableFundingApi"](configuration, requestFactory, responseProcessor);
    }
    /**
     * Get funding rates
     * funding-rates
     */ fundingRatesWithHttpInfo(_options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.fundingRatesWithHttpInfo(observableOptions);
        return result.toPromise();
    }
    /**
     * Get funding rates
     * funding-rates
     */ fundingRates(_options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.fundingRates(observableOptions);
        return result.toPromise();
    }
}
;
class PromiseInfoApi {
    api;
    constructor(configuration, requestFactory, responseProcessor){
        this.api = new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$types$2f$ObservableAPI$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ObservableInfoApi"](configuration, requestFactory, responseProcessor);
    }
    /**
     * Transfer fee info
     * transferFeeInfo
     * @param accountIndex
     * @param [authorization]
     * @param [auth]
     * @param [toAccountIndex]
     */ transferFeeInfoWithHttpInfo(accountIndex, authorization, auth, toAccountIndex, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.transferFeeInfoWithHttpInfo(accountIndex, authorization, auth, toAccountIndex, observableOptions);
        return result.toPromise();
    }
    /**
     * Transfer fee info
     * transferFeeInfo
     * @param accountIndex
     * @param [authorization]
     * @param [auth]
     * @param [toAccountIndex]
     */ transferFeeInfo(accountIndex, authorization, auth, toAccountIndex, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.transferFeeInfo(accountIndex, authorization, auth, toAccountIndex, observableOptions);
        return result.toPromise();
    }
    /**
     * Withdrawal delay in seconds
     * withdrawalDelay
     */ withdrawalDelayWithHttpInfo(_options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.withdrawalDelayWithHttpInfo(observableOptions);
        return result.toPromise();
    }
    /**
     * Withdrawal delay in seconds
     * withdrawalDelay
     */ withdrawalDelay(_options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.withdrawalDelay(observableOptions);
        return result.toPromise();
    }
}
;
class PromiseNotificationApi {
    api;
    constructor(configuration, requestFactory, responseProcessor){
        this.api = new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$types$2f$ObservableAPI$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ObservableNotificationApi"](configuration, requestFactory, responseProcessor);
    }
    /**
     * Ack notification
     * notification_ack
     * @param notifId
     * @param accountIndex
     * @param [authorization]  make required after integ is done
     * @param [auth]  made optional to support header auth clients
     */ notificationAckWithHttpInfo(notifId, accountIndex, authorization, auth, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.notificationAckWithHttpInfo(notifId, accountIndex, authorization, auth, observableOptions);
        return result.toPromise();
    }
    /**
     * Ack notification
     * notification_ack
     * @param notifId
     * @param accountIndex
     * @param [authorization]  make required after integ is done
     * @param [auth]  made optional to support header auth clients
     */ notificationAck(notifId, accountIndex, authorization, auth, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.notificationAck(notifId, accountIndex, authorization, auth, observableOptions);
        return result.toPromise();
    }
}
;
class PromiseOrderApi {
    api;
    constructor(configuration, requestFactory, responseProcessor){
        this.api = new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$types$2f$ObservableAPI$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ObservableOrderApi"](configuration, requestFactory, responseProcessor);
    }
    /**
     * Export data
     * export
     * @param type
     * @param [authorization]
     * @param [auth]
     * @param [accountIndex]
     * @param [marketId]
     */ _exportWithHttpInfo(type, authorization, auth, accountIndex, marketId, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api._exportWithHttpInfo(type, authorization, auth, accountIndex, marketId, observableOptions);
        return result.toPromise();
    }
    /**
     * Export data
     * export
     * @param type
     * @param [authorization]
     * @param [auth]
     * @param [accountIndex]
     * @param [marketId]
     */ _export(type, authorization, auth, accountIndex, marketId, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api._export(type, authorization, auth, accountIndex, marketId, observableOptions);
        return result.toPromise();
    }
    /**
     * Get account active orders. `auth` can be generated using the SDK.
     * accountActiveOrders
     * @param accountIndex
     * @param marketId
     * @param [authorization]  make required after integ is done
     * @param [auth]  made optional to support header auth clients
     */ accountActiveOrdersWithHttpInfo(accountIndex, marketId, authorization, auth, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.accountActiveOrdersWithHttpInfo(accountIndex, marketId, authorization, auth, observableOptions);
        return result.toPromise();
    }
    /**
     * Get account active orders. `auth` can be generated using the SDK.
     * accountActiveOrders
     * @param accountIndex
     * @param marketId
     * @param [authorization]  make required after integ is done
     * @param [auth]  made optional to support header auth clients
     */ accountActiveOrders(accountIndex, marketId, authorization, auth, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.accountActiveOrders(accountIndex, marketId, authorization, auth, observableOptions);
        return result.toPromise();
    }
    /**
     * Get account inactive orders
     * accountInactiveOrders
     * @param accountIndex
     * @param limit
     * @param [authorization]  make required after integ is done
     * @param [auth]  made optional to support header auth clients
     * @param [marketId]
     * @param [askFilter]
     * @param [betweenTimestamps]
     * @param [cursor]
     */ accountInactiveOrdersWithHttpInfo(accountIndex, limit, authorization, auth, marketId, askFilter, betweenTimestamps, cursor, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.accountInactiveOrdersWithHttpInfo(accountIndex, limit, authorization, auth, marketId, askFilter, betweenTimestamps, cursor, observableOptions);
        return result.toPromise();
    }
    /**
     * Get account inactive orders
     * accountInactiveOrders
     * @param accountIndex
     * @param limit
     * @param [authorization]  make required after integ is done
     * @param [auth]  made optional to support header auth clients
     * @param [marketId]
     * @param [askFilter]
     * @param [betweenTimestamps]
     * @param [cursor]
     */ accountInactiveOrders(accountIndex, limit, authorization, auth, marketId, askFilter, betweenTimestamps, cursor, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.accountInactiveOrders(accountIndex, limit, authorization, auth, marketId, askFilter, betweenTimestamps, cursor, observableOptions);
        return result.toPromise();
    }
    /**
     * Get exchange stats
     * exchangeStats
     */ exchangeStatsWithHttpInfo(_options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.exchangeStatsWithHttpInfo(observableOptions);
        return result.toPromise();
    }
    /**
     * Get exchange stats
     * exchangeStats
     */ exchangeStats(_options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.exchangeStats(observableOptions);
        return result.toPromise();
    }
    /**
     * Get order books metadata
     * orderBookDetails
     * @param [marketId]
     */ orderBookDetailsWithHttpInfo(marketId, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.orderBookDetailsWithHttpInfo(marketId, observableOptions);
        return result.toPromise();
    }
    /**
     * Get order books metadata
     * orderBookDetails
     * @param [marketId]
     */ orderBookDetails(marketId, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.orderBookDetails(marketId, observableOptions);
        return result.toPromise();
    }
    /**
     * Get order book orders
     * orderBookOrders
     * @param marketId
     * @param limit
     */ orderBookOrdersWithHttpInfo(marketId, limit, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.orderBookOrdersWithHttpInfo(marketId, limit, observableOptions);
        return result.toPromise();
    }
    /**
     * Get order book orders
     * orderBookOrders
     * @param marketId
     * @param limit
     */ orderBookOrders(marketId, limit, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.orderBookOrders(marketId, limit, observableOptions);
        return result.toPromise();
    }
    /**
     * Get order books metadata.<hr>**Response Description:**<br><br>1) **Taker and maker fees** are in percentage.<br>2) **Min base amount:** The amount of base token that can be traded in a single order.<br>3) **Min quote amount:** The amount of quote token that can be traded in a single order.<br>4) **Supported size decimals:** The number of decimal places that can be used for the size of the order.<br>5) **Supported price decimals:** The number of decimal places that can be used for the price of the order.<br>6) **Supported quote decimals:** Size Decimals + Quote Decimals.
     * orderBooks
     * @param [marketId]
     */ orderBooksWithHttpInfo(marketId, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.orderBooksWithHttpInfo(marketId, observableOptions);
        return result.toPromise();
    }
    /**
     * Get order books metadata.<hr>**Response Description:**<br><br>1) **Taker and maker fees** are in percentage.<br>2) **Min base amount:** The amount of base token that can be traded in a single order.<br>3) **Min quote amount:** The amount of quote token that can be traded in a single order.<br>4) **Supported size decimals:** The number of decimal places that can be used for the size of the order.<br>5) **Supported price decimals:** The number of decimal places that can be used for the price of the order.<br>6) **Supported quote decimals:** Size Decimals + Quote Decimals.
     * orderBooks
     * @param [marketId]
     */ orderBooks(marketId, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.orderBooks(marketId, observableOptions);
        return result.toPromise();
    }
    /**
     * Get recent trades
     * recentTrades
     * @param marketId
     * @param limit
     */ recentTradesWithHttpInfo(marketId, limit, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.recentTradesWithHttpInfo(marketId, limit, observableOptions);
        return result.toPromise();
    }
    /**
     * Get recent trades
     * recentTrades
     * @param marketId
     * @param limit
     */ recentTrades(marketId, limit, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.recentTrades(marketId, limit, observableOptions);
        return result.toPromise();
    }
    /**
     * Get trades
     * trades
     * @param sortBy
     * @param limit
     * @param [authorization]
     * @param [auth]
     * @param [marketId]
     * @param [accountIndex]
     * @param [orderIndex]
     * @param [sortDir]
     * @param [cursor]
     * @param [_from]
     * @param [askFilter]
     */ tradesWithHttpInfo(sortBy, limit, authorization, auth, marketId, accountIndex, orderIndex, sortDir, cursor, _from, askFilter, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.tradesWithHttpInfo(sortBy, limit, authorization, auth, marketId, accountIndex, orderIndex, sortDir, cursor, _from, askFilter, observableOptions);
        return result.toPromise();
    }
    /**
     * Get trades
     * trades
     * @param sortBy
     * @param limit
     * @param [authorization]
     * @param [auth]
     * @param [marketId]
     * @param [accountIndex]
     * @param [orderIndex]
     * @param [sortDir]
     * @param [cursor]
     * @param [_from]
     * @param [askFilter]
     */ trades(sortBy, limit, authorization, auth, marketId, accountIndex, orderIndex, sortDir, cursor, _from, askFilter, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.trades(sortBy, limit, authorization, auth, marketId, accountIndex, orderIndex, sortDir, cursor, _from, askFilter, observableOptions);
        return result.toPromise();
    }
}
;
class PromiseReferralApi {
    api;
    constructor(configuration, requestFactory, responseProcessor){
        this.api = new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$types$2f$ObservableAPI$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ObservableReferralApi"](configuration, requestFactory, responseProcessor);
    }
    /**
     * Get referral points
     * referral_points
     * @param accountIndex
     * @param [authorization]  make required after integ is done
     * @param [auth]  made optional to support header auth clients
     */ referralPointsWithHttpInfo(accountIndex, authorization, auth, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.referralPointsWithHttpInfo(accountIndex, authorization, auth, observableOptions);
        return result.toPromise();
    }
    /**
     * Get referral points
     * referral_points
     * @param accountIndex
     * @param [authorization]  make required after integ is done
     * @param [auth]  made optional to support header auth clients
     */ referralPoints(accountIndex, authorization, auth, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.referralPoints(accountIndex, authorization, auth, observableOptions);
        return result.toPromise();
    }
}
;
class PromiseRootApi {
    api;
    constructor(configuration, requestFactory, responseProcessor){
        this.api = new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$types$2f$ObservableAPI$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ObservableRootApi"](configuration, requestFactory, responseProcessor);
    }
    /**
     * Get info of zklighter
     * info
     */ infoWithHttpInfo(_options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.infoWithHttpInfo(observableOptions);
        return result.toPromise();
    }
    /**
     * Get info of zklighter
     * info
     */ info(_options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.info(observableOptions);
        return result.toPromise();
    }
    /**
     * Get status of zklighter
     * status
     */ statusWithHttpInfo(_options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.statusWithHttpInfo(observableOptions);
        return result.toPromise();
    }
    /**
     * Get status of zklighter
     * status
     */ status(_options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.status(observableOptions);
        return result.toPromise();
    }
}
;
class PromiseTransactionApi {
    api;
    constructor(configuration, requestFactory, responseProcessor){
        this.api = new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$types$2f$ObservableAPI$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ObservableTransactionApi"](configuration, requestFactory, responseProcessor);
    }
    /**
     * Get transactions of a specific account
     * accountTxs
     * @param limit
     * @param by
     * @param value
     * @param [authorization]
     * @param [index]
     * @param [types]
     * @param [auth]
     */ accountTxsWithHttpInfo(limit, by, value, authorization, index, types, auth, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.accountTxsWithHttpInfo(limit, by, value, authorization, index, types, auth, observableOptions);
        return result.toPromise();
    }
    /**
     * Get transactions of a specific account
     * accountTxs
     * @param limit
     * @param by
     * @param value
     * @param [authorization]
     * @param [index]
     * @param [types]
     * @param [auth]
     */ accountTxs(limit, by, value, authorization, index, types, auth, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.accountTxs(limit, by, value, authorization, index, types, auth, observableOptions);
        return result.toPromise();
    }
    /**
     * Get transactions in a block
     * blockTxs
     * @param by
     * @param value
     */ blockTxsWithHttpInfo(by, value, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.blockTxsWithHttpInfo(by, value, observableOptions);
        return result.toPromise();
    }
    /**
     * Get transactions in a block
     * blockTxs
     * @param by
     * @param value
     */ blockTxs(by, value, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.blockTxs(by, value, observableOptions);
        return result.toPromise();
    }
    /**
     * Get deposit history
     * deposit_history
     * @param accountIndex
     * @param l1Address
     * @param [authorization]  make required after integ is done
     * @param [auth]  made optional to support header auth clients
     * @param [cursor]
     * @param [filter]
     */ depositHistoryWithHttpInfo(accountIndex, l1Address, authorization, auth, cursor, filter, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.depositHistoryWithHttpInfo(accountIndex, l1Address, authorization, auth, cursor, filter, observableOptions);
        return result.toPromise();
    }
    /**
     * Get deposit history
     * deposit_history
     * @param accountIndex
     * @param l1Address
     * @param [authorization]  make required after integ is done
     * @param [auth]  made optional to support header auth clients
     * @param [cursor]
     * @param [filter]
     */ depositHistory(accountIndex, l1Address, authorization, auth, cursor, filter, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.depositHistory(accountIndex, l1Address, authorization, auth, cursor, filter, observableOptions);
        return result.toPromise();
    }
    /**
     * Get next nonce for a specific account and api key
     * nextNonce
     * @param accountIndex
     * @param apiKeyIndex
     */ nextNonceWithHttpInfo(accountIndex, apiKeyIndex, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.nextNonceWithHttpInfo(accountIndex, apiKeyIndex, observableOptions);
        return result.toPromise();
    }
    /**
     * Get next nonce for a specific account and api key
     * nextNonce
     * @param accountIndex
     * @param apiKeyIndex
     */ nextNonce(accountIndex, apiKeyIndex, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.nextNonce(accountIndex, apiKeyIndex, observableOptions);
        return result.toPromise();
    }
    /**
     * You need to sign the transaction body before sending it to the server. More details can be found in the Get Started docs: [Get Started For Programmers](https://apidocs.lighter.xyz/docs/get-started-for-programmers)
     * sendTx
     * @param txType
     * @param txInfo
     * @param [priceProtection]
     */ sendTxWithHttpInfo(txType, txInfo, priceProtection, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.sendTxWithHttpInfo(txType, txInfo, priceProtection, observableOptions);
        return result.toPromise();
    }
    /**
     * You need to sign the transaction body before sending it to the server. More details can be found in the Get Started docs: [Get Started For Programmers](https://apidocs.lighter.xyz/docs/get-started-for-programmers)
     * sendTx
     * @param txType
     * @param txInfo
     * @param [priceProtection]
     */ sendTx(txType, txInfo, priceProtection, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.sendTx(txType, txInfo, priceProtection, observableOptions);
        return result.toPromise();
    }
    /**
     * You need to sign the transaction body before sending it to the server. More details can be found in the Get Started docs: [Get Started For Programmers](https://apidocs.lighter.xyz/docs/get-started-for-programmers)
     * sendTxBatch
     * @param txTypes
     * @param txInfos
     */ sendTxBatchWithHttpInfo(txTypes, txInfos, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.sendTxBatchWithHttpInfo(txTypes, txInfos, observableOptions);
        return result.toPromise();
    }
    /**
     * You need to sign the transaction body before sending it to the server. More details can be found in the Get Started docs: [Get Started For Programmers](https://apidocs.lighter.xyz/docs/get-started-for-programmers)
     * sendTxBatch
     * @param txTypes
     * @param txInfos
     */ sendTxBatch(txTypes, txInfos, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.sendTxBatch(txTypes, txInfos, observableOptions);
        return result.toPromise();
    }
    /**
     * Get transfer history
     * transfer_history
     * @param accountIndex
     * @param [authorization]  make required after integ is done
     * @param [auth]  made optional to support header auth clients
     * @param [cursor]
     */ transferHistoryWithHttpInfo(accountIndex, authorization, auth, cursor, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.transferHistoryWithHttpInfo(accountIndex, authorization, auth, cursor, observableOptions);
        return result.toPromise();
    }
    /**
     * Get transfer history
     * transfer_history
     * @param accountIndex
     * @param [authorization]  make required after integ is done
     * @param [auth]  made optional to support header auth clients
     * @param [cursor]
     */ transferHistory(accountIndex, authorization, auth, cursor, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.transferHistory(accountIndex, authorization, auth, cursor, observableOptions);
        return result.toPromise();
    }
    /**
     * Get transaction by hash or sequence index
     * tx
     * @param by
     * @param value
     */ txWithHttpInfo(by, value, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.txWithHttpInfo(by, value, observableOptions);
        return result.toPromise();
    }
    /**
     * Get transaction by hash or sequence index
     * tx
     * @param by
     * @param value
     */ tx(by, value, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.tx(by, value, observableOptions);
        return result.toPromise();
    }
    /**
     * Get L1 transaction by L1 transaction hash
     * txFromL1TxHash
     * @param hash
     */ txFromL1TxHashWithHttpInfo(hash, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.txFromL1TxHashWithHttpInfo(hash, observableOptions);
        return result.toPromise();
    }
    /**
     * Get L1 transaction by L1 transaction hash
     * txFromL1TxHash
     * @param hash
     */ txFromL1TxHash(hash, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.txFromL1TxHash(hash, observableOptions);
        return result.toPromise();
    }
    /**
     * Get transactions which are already packed into blocks
     * txs
     * @param limit
     * @param [index]
     */ txsWithHttpInfo(limit, index, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.txsWithHttpInfo(limit, index, observableOptions);
        return result.toPromise();
    }
    /**
     * Get transactions which are already packed into blocks
     * txs
     * @param limit
     * @param [index]
     */ txs(limit, index, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.txs(limit, index, observableOptions);
        return result.toPromise();
    }
    /**
     * Get withdraw history
     * withdraw_history
     * @param accountIndex
     * @param [authorization]  make required after integ is done
     * @param [auth]  made optional to support header auth clients
     * @param [cursor]
     * @param [filter]
     */ withdrawHistoryWithHttpInfo(accountIndex, authorization, auth, cursor, filter, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.withdrawHistoryWithHttpInfo(accountIndex, authorization, auth, cursor, filter, observableOptions);
        return result.toPromise();
    }
    /**
     * Get withdraw history
     * withdraw_history
     * @param accountIndex
     * @param [authorization]  make required after integ is done
     * @param [auth]  made optional to support header auth clients
     * @param [cursor]
     * @param [filter]
     */ withdrawHistory(accountIndex, authorization, auth, cursor, filter, _options) {
        const observableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapOptions"])(_options);
        const result = this.api.withdrawHistory(accountIndex, authorization, auth, cursor, filter, observableOptions);
        return result.toPromise();
    }
}
}),
"[project]/lighter-sdk-ts/generated/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/http/http.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$auth$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/auth/auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$models$2f$all$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/models/all.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$configuration$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/configuration.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$exception$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/apis/exception.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$servers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/servers.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$apis$2f$baseapi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/apis/baseapi.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$rxjsStub$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/rxjsStub.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$types$2f$PromiseAPI$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/types/PromiseAPI.ts [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
}),
"[project]/lighter-sdk-ts/generated/types/PromiseAPI.ts [app-route] (ecmascript) <export PromiseOrderApi as OrderApi>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderApi",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$types$2f$PromiseAPI$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PromiseOrderApi"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$types$2f$PromiseAPI$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/types/PromiseAPI.ts [app-route] (ecmascript)");
}),
"[project]/src/lib/simulator/accountState.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AccountState",
    ()=>AccountState
]);
class AccountState {
    options;
    static CASH_EPSILON = 1e-6;
    cashBalance;
    quoteCurrency;
    positions;
    totalRealized;
    totalFees;
    constructor(options){
        this.options = options;
        this.positions = new Map();
        this.totalRealized = 0;
        this.totalFees = 0;
        this.cashBalance = options.initialCapital;
        this.quoteCurrency = options.quoteCurrency;
    }
    previewCashImpact(side, execution) {
        if (execution.status === "rejected" || execution.totalQuantity === 0) {
            return 0;
        }
        const direction = side === "buy" ? 1 : -1;
        let delta = 0;
        for (const fill of execution.fills){
            const signedQty = direction * fill.quantity;
            delta -= signedQty * fill.price;
            delta -= fill.fee;
        }
        return delta;
    }
    hasSufficientCash(side, execution) {
        const impact = this.previewCashImpact(side, execution);
        if (impact >= 0) {
            return true;
        }
        const projected = this.cashBalance + impact;
        return projected >= -AccountState.CASH_EPSILON;
    }
    applyExecution(symbol, side, execution) {
        if (execution.status === "rejected" || execution.totalQuantity === 0) {
            return;
        }
        const direction = side === "buy" ? 1 : -1;
        for (const fill of execution.fills){
            const signedQty = direction * fill.quantity;
            // Deduct the cost/credit of the fill and the fee from cash
            this.cashBalance -= signedQty * fill.price;
            this.cashBalance -= fill.fee;
            const existing = this.positions.get(symbol) ?? {
                quantity: 0,
                avgEntryPrice: 0,
                realizedPnl: 0,
                markPrice: fill.price
            };
            // If no existing position or adding to existing position in same direction
            if (existing.quantity === 0 || Math.sign(existing.quantity) === Math.sign(signedQty)) {
                const totalQty = existing.quantity + signedQty;
                const prevNotional = existing.avgEntryPrice * Math.abs(existing.quantity);
                const newNotional = fill.price * Math.abs(signedQty);
                existing.quantity = totalQty;
                existing.avgEntryPrice = totalQty !== 0 ? (prevNotional + newNotional) / Math.abs(totalQty) : 0;
            } else {
                // Reducing or flipping position
                const closingQty = Math.min(Math.abs(existing.quantity), Math.abs(signedQty));
                // Calculate realized PnL on the closed portion
                const realized = existing.quantity > 0 ? (fill.price - existing.avgEntryPrice) * closingQty : (existing.avgEntryPrice - fill.price) * closingQty;
                existing.realizedPnl += realized;
                this.totalRealized += realized;
                const remainingQty = existing.quantity + signedQty;
                if (remainingQty === 0) {
                    // Position fully closed
                    existing.quantity = 0;
                    existing.avgEntryPrice = 0;
                // Keep realized PnL for this fill (it will be reported then cleared)
                } else if (Math.sign(remainingQty) === Math.sign(existing.quantity)) {
                    // Position reduced but same direction
                    existing.quantity = remainingQty;
                // avgEntryPrice stays the same
                } else {
                    // Position flipped to opposite direction - this is a NEW position
                    existing.quantity = remainingQty;
                    existing.avgEntryPrice = fill.price;
                // Note: we keep the realized PnL from the flip for reporting,
                // but the new opposite position starts fresh
                }
            }
            existing.markPrice = fill.price;
            this.totalFees += fill.fee;
            // Only delete if both quantity and realized PnL are zero
            // Keep positions with zero quantity if they have realized PnL to report
            if (existing.quantity === 0 && Math.abs(existing.realizedPnl) < 0.01) {
                this.positions.delete(symbol);
            } else {
                this.positions.set(symbol, existing);
            }
        }
    }
    updateMarkPrice(symbol, markPrice) {
        const position = this.positions.get(symbol);
        if (!position) return;
        position.markPrice = markPrice;
    }
    getSnapshot() {
        const positions = [];
        let unrealizedTotal = 0;
        let netPositionValue = 0; // Signed market value of all positions
        for (const [symbol, position] of this.positions.entries()){
            // Skip positions with zero quantity
            if (position.quantity === 0) continue;
            const side = position.quantity >= 0 ? "LONG" : "SHORT";
            const absoluteQuantity = Math.abs(position.quantity);
            // Unrealized PnL is the difference between current value and entry cost
            const unrealized = side === "LONG" ? (position.markPrice - position.avgEntryPrice) * absoluteQuantity : (position.avgEntryPrice - position.markPrice) * absoluteQuantity;
            unrealizedTotal += unrealized;
            // Signed position value reflects long vs short exposure
            netPositionValue += position.markPrice * position.quantity;
            positions.push({
                symbol,
                quantity: absoluteQuantity,
                side,
                avgEntryPrice: position.avgEntryPrice,
                realizedPnl: position.realizedPnl,
                unrealizedPnl: unrealized,
                markPrice: position.markPrice
            });
        }
        // Equity = cash + current value of all positions
        // This represents your total account value
        const equity = this.cashBalance + netPositionValue;
        // Available cash cannot exceed equity and never drops below zero
        const cappedCash = Math.min(this.cashBalance, equity);
        const availableCash = Math.max(cappedCash, 0);
        const borrowedBalance = Math.max(-this.cashBalance, 0);
        return {
            cashBalance: this.cashBalance,
            availableCash,
            borrowedBalance,
            equity,
            marginBalance: equity,
            quoteCurrency: this.quoteCurrency,
            positions,
            totalRealizedPnl: this.totalRealized,
            totalUnrealizedPnl: unrealizedTotal
        };
    }
    getOpenPositions() {
        return this.getSnapshot().positions;
    }
}
}),
"[project]/src/lib/simulator/market.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MarketState",
    ()=>MarketState
]);
class OrderBook {
    metadata;
    snapshot;
    constructor(metadata){
        this.metadata = metadata;
        this.snapshot = {
            symbol: metadata.symbol,
            bids: [],
            asks: [],
            midPrice: 0,
            spread: 0,
            timestamp: Date.now()
        };
    }
    convertLevel(order) {
        // The API already returns decimal strings, so just parse them directly
        const quantity = Number(order.remainingBaseAmount);
        const price = Number(order.price);
        return {
            price,
            quantity
        };
    }
    update(raw) {
        const bids = (raw.bids ?? []).map((order)=>this.convertLevel(order));
        const asks = (raw.asks ?? []).map((order)=>this.convertLevel(order));
        const bestBid = bids[0]?.price;
        const bestAsk = asks[0]?.price;
        const midPrice = bestBid && bestAsk ? (bestBid + bestAsk) / 2 : bestBid ?? bestAsk ?? this.snapshot.midPrice;
        const spread = bestBid && bestAsk ? bestAsk - bestBid : 0;
        this.snapshot = {
            symbol: this.metadata.symbol,
            bids,
            asks,
            midPrice,
            spread,
            timestamp: Date.now()
        };
        return this.snapshot;
    }
    getSnapshot() {
        return this.snapshot;
    }
    getMidPrice() {
        return this.snapshot.midPrice;
    }
}
class MarketState {
    metadata;
    orderApi;
    depth;
    orderBook;
    constructor(metadata, orderApi, depth = 50){
        this.metadata = metadata;
        this.orderApi = orderApi;
        this.depth = depth;
        this.orderBook = new OrderBook(metadata);
    }
    async refresh() {
        const raw = await this.orderApi.orderBookOrders(this.metadata.marketId, this.depth);
        return this.orderBook.update(raw);
    }
    getSnapshot() {
        return this.orderBook.getSnapshot();
    }
    getMidPrice() {
        return this.orderBook.getMidPrice();
    }
}
}),
"[project]/src/lib/simulator/orderMatching.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "matchOrder",
    ()=>matchOrder
]);
const BASIS_POINT = 1 / 10000;
function sampleLatency(ctx) {
    const { minMs, maxMs } = ctx.options.latency;
    if (maxMs <= minMs) return minMs;
    const roll = ctx.rng.next();
    return Math.round(minMs + (maxMs - minMs) * roll);
}
function sampleSlippage(ctx) {
    const bps = ctx.options.slippage.maxBasisPoints;
    if (bps <= 0) return 0;
    return ctx.rng.next() * bps;
}
function asTaker(ctx) {
    const { order, book, options, rng } = ctx;
    const levels = order.side === "buy" ? book.asks : book.bids;
    // Validate order book has liquidity
    if (!levels || levels.length === 0) {
        return {
            fills: [],
            averagePrice: 0,
            totalQuantity: 0,
            totalFees: 0,
            status: "rejected",
            reason: "no liquidity available"
        };
    }
    let remaining = order.quantity;
    const fills = [];
    let totalNotional = 0;
    let totalFees = 0;
    for (const level of levels){
        if (remaining <= 0) break;
        const executable = Math.min(remaining, level.quantity);
        if (executable <= 0) continue;
        const slippageBps = sampleSlippage(ctx);
        const slippageFactor = slippageBps * BASIS_POINT;
        const priceAdjustment = order.side === "buy" ? 1 + slippageFactor : 1 - slippageFactor;
        const price = level.price * priceAdjustment;
        const latencyMs = sampleLatency(ctx);
        const feeRate = options.fees.takerBps * BASIS_POINT;
        const fee = executable * price * feeRate;
        fills.push({
            quantity: executable,
            price,
            maker: false,
            fee,
            slippageBps,
            latencyMs
        });
        remaining -= executable;
        totalNotional += price * executable;
        totalFees += fee;
    }
    if (fills.length === 0) {
        return {
            fills,
            averagePrice: 0,
            totalQuantity: 0,
            totalFees: 0,
            status: "rejected",
            reason: "insufficient liquidity"
        };
    }
    const totalQuantity = fills.reduce((sum, fill)=>sum + fill.quantity, 0);
    const averagePrice = totalNotional / totalQuantity;
    const status = remaining > 0 ? "partial" : "filled";
    return {
        fills,
        averagePrice,
        totalQuantity,
        totalFees,
        status,
        reason: status === "partial" ? "insufficient book depth" : undefined
    };
}
function asMaker(ctx) {
    const { order, options } = ctx;
    const price = order.limitPrice ?? ctx.book.midPrice;
    const slippageBps = 0;
    const latencyMs = sampleLatency(ctx);
    const feeRate = options.fees.makerBps * BASIS_POINT;
    const fee = order.quantity * price * feeRate;
    const fill = {
        quantity: order.quantity,
        price,
        maker: true,
        fee,
        slippageBps,
        latencyMs
    };
    return {
        fills: [
            fill
        ],
        averagePrice: price,
        totalQuantity: order.quantity,
        totalFees: fee,
        status: "filled"
    };
}
function matchOrder(book, order, options, rng) {
    const ctx = {
        book,
        order,
        options,
        rng
    };
    // Market orders should always take liquidity from the book
    if (order.type === "market") {
        return asTaker(ctx);
    }
    // Limit orders need a limit price
    if (order.type === "limit" && typeof order.limitPrice !== "number") {
        return {
            fills: [],
            averagePrice: 0,
            totalQuantity: 0,
            totalFees: 0,
            status: "rejected",
            reason: "limit order missing limitPrice"
        };
    }
    const bestOpposite = order.side === "buy" ? book.asks[0]?.price : book.bids[0]?.price;
    // Check if limit order crosses the book (should execute immediately as taker)
    const shouldTake = typeof order.limitPrice === "number" && bestOpposite !== undefined && (order.side === "buy" && order.limitPrice >= bestOpposite || order.side === "sell" && order.limitPrice <= bestOpposite);
    if (shouldTake) {
        return asTaker(ctx);
    }
    // Otherwise, limit order rests on the book as maker
    if (order.type === "limit" && typeof order.limitPrice === "number") {
        return asMaker(ctx);
    }
    return {
        fills: [],
        averagePrice: 0,
        totalQuantity: 0,
        totalFees: 0,
        status: "rejected",
        reason: "invalid order parameters"
    };
}
}),
"[project]/src/lib/simulator/exchangeSimulator.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExchangeSimulator",
    ()=>ExchangeSimulator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$isomorphic$2d$fetch$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/http/isomorphic-fetch.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$types$2f$PromiseAPI$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__PromiseOrderApi__as__OrderApi$3e$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/types/PromiseAPI.ts [app-route] (ecmascript) <export PromiseOrderApi as OrderApi>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$servers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lighter-sdk-ts/generated/servers.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$markets$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/markets.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/config.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulator$2f$accountState$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/simulator/accountState.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulator$2f$market$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/simulator/market.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulator$2f$orderMatching$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/simulator/orderMatching.ts [app-route] (ecmascript)");
;
;
;
;
;
;
const DEFAULT_OPTIONS = {
    initialCapital: 100_000,
    quoteCurrency: "USDT",
    latency: {
        minMs: 100,
        maxMs: 450
    },
    slippage: {
        maxBasisPoints: 12
    },
    fees: {
        makerBps: 2,
        takerBps: 5
    },
    refreshIntervalMs: 3_000
};
class SimpleEmitter {
    listeners = new Map();
    on(event, listener) {
        const listeners = this.listeners.get(event) ?? new Set();
        listeners.add(listener);
        this.listeners.set(event, listeners);
    }
    off(event, listener) {
        const listeners = this.listeners.get(event);
        listeners?.delete(listener);
        if (listeners && listeners.size === 0) {
            this.listeners.delete(event);
        }
    }
    emit(event, payload) {
        const listeners = this.listeners.get(event);
        if (!listeners) return;
        for (const listener of listeners){
            listener(payload);
        }
    }
}
class LinearCongruential {
    state;
    constructor(seed){
        this.state = seed % 2147483647;
        if (this.state <= 0) {
            this.state += 2147483646;
        }
    }
    next() {
        this.state = this.state * 48271 % 2147483647;
        return this.state / 2147483647;
    }
}
class MathRandomSource {
    next() {
        return Math.random();
    }
}
function buildMarketMetadata() {
    return Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$markets$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MARKETS"]).map(([symbol, config])=>({
            symbol,
            marketId: config.marketId,
            priceDecimals: config.priceDecimals,
            qtyDecimals: config.qtyDecimals,
            clientOrderIndex: config.clientOrderIndex
        }));
}
function normalizeSymbol(symbol) {
    if (!symbol) return symbol;
    const upper = symbol.toUpperCase();
    if (upper.endsWith("USDT")) {
        return upper.replace("USDT", "");
    }
    return upper;
}
class ExchangeSimulator {
    static async bootstrap(options) {
        if (!globalThis.__exchangeSimulator) {
            globalThis.__exchangeSimulator = ExchangeSimulator.create(options);
        }
        return globalThis.__exchangeSimulator;
    }
    static async create(options) {
        const merged = {
            ...DEFAULT_OPTIONS,
            ...options
        };
        const simulator = new ExchangeSimulator(merged);
        await simulator.initialise();
        return simulator;
    }
    options;
    accounts = new Map();
    markets = new Map();
    emitter = new SimpleEmitter();
    rng;
    orderApi;
    refreshHandle;
    constructor(options){
        this.options = options;
        this.rng = typeof options.deterministicSeed === "number" ? new LinearCongruential(options.deterministicSeed) : new MathRandomSource();
        const server = new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$servers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ServerConfiguration"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BASE_URL"], {});
        const http = new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$http$2f$isomorphic$2d$fetch$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["IsomorphicFetchHttpLibrary"]();
        this.orderApi = new __TURBOPACK__imported__module__$5b$project$5d2f$lighter$2d$sdk$2d$ts$2f$generated$2f$types$2f$PromiseAPI$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__PromiseOrderApi__as__OrderApi$3e$__["OrderApi"]({
            baseServer: server,
            httpApi: http,
            middleware: [],
            authMethods: {}
        });
    }
    getOrCreateAccount(accountId) {
        let account = this.accounts.get(accountId);
        if (!account) {
            account = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulator$2f$accountState$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AccountState"](this.options);
            this.accounts.set(accountId, account);
        }
        return account;
    }
    emitAccountSnapshot(accountId) {
        const account = this.accounts.get(accountId);
        if (!account) {
            return;
        }
        this.emitter.emit("account", {
            type: "account",
            payload: {
                accountId,
                snapshot: account.getSnapshot()
            }
        });
    }
    async initialise() {
        for (const metadata of buildMarketMetadata()){
            const market = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulator$2f$market$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MarketState"](metadata, this.orderApi);
            await market.refresh();
            this.markets.set(metadata.symbol, market);
            this.emitter.emit("book", {
                type: "book",
                payload: market.getSnapshot()
            });
        }
        this.startPolling();
    }
    startPolling() {
        if (this.refreshHandle) return;
        this.refreshHandle = setInterval(()=>{
            void this.refreshAll();
        }, this.options.refreshIntervalMs);
    }
    async refreshAll() {
        for (const [symbol, market] of this.markets){
            try {
                const snapshot = await market.refresh();
                for (const account of this.accounts.values()){
                    account.updateMarkPrice(symbol, snapshot.midPrice);
                }
                this.emitter.emit("book", {
                    type: "book",
                    payload: snapshot
                });
            } catch (error) {
                console.error(`[Simulator] Failed to refresh market ${symbol}`, error);
            }
        }
        for (const accountId of this.accounts.keys()){
            this.emitAccountSnapshot(accountId);
        }
    }
    on(event, listener) {
        this.emitter.on(event, listener);
    }
    off(event, listener) {
        this.emitter.off(event, listener);
    }
    getAccountSnapshot(accountId) {
        return this.getOrCreateAccount(accountId).getSnapshot();
    }
    getOpenPositions(accountId) {
        return this.getOrCreateAccount(accountId).getOpenPositions();
    }
    getOrderBook(symbol) {
        const normalized = normalizeSymbol(symbol);
        const market = this.markets.get(normalized);
        if (!market) {
            throw new Error(`Unknown market: ${symbol}`);
        }
        return market.getSnapshot();
    }
    async placeOrder(request, accountId) {
        const symbol = normalizeSymbol(request.symbol);
        const market = this.markets.get(symbol);
        if (!market) {
            return {
                ...this.rejected("unknown symbol"),
                symbol,
                side: request.side,
                type: request.type
            };
        }
        const book = market.getSnapshot();
        const execution = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulator$2f$orderMatching$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["matchOrder"])(book, request, this.options, this.rng);
        const account = this.getOrCreateAccount(accountId);
        if (execution.status === "rejected" || execution.totalQuantity === 0) {
            return {
                ...execution,
                symbol,
                side: request.side,
                type: request.type
            };
        }
        if (!account.hasSufficientCash(request.side, execution)) {
            return {
                fills: [],
                averagePrice: 0,
                totalQuantity: 0,
                totalFees: 0,
                status: "rejected",
                reason: "insufficient available cash",
                symbol,
                side: request.side,
                type: request.type
            };
        }
        account.applyExecution(symbol, request.side, execution);
        account.updateMarkPrice(symbol, market.getMidPrice());
        const result = {
            ...execution,
            symbol,
            side: request.side,
            type: request.type
        };
        this.emitter.emit("trade", {
            type: "trade",
            payload: {
                accountId,
                symbol,
                result,
                timestamp: Date.now()
            }
        });
        this.emitAccountSnapshot(accountId);
        return result;
    }
    async closePositions(symbols, accountId) {
        const outcomes = {};
        for (const symbolRaw of symbols){
            const symbol = normalizeSymbol(symbolRaw);
            const position = this.getOpenPositions(accountId).find((pos)=>normalizeSymbol(pos.symbol) === symbol);
            if (!position || position.quantity === 0) {
                outcomes[symbolRaw] = {
                    ...this.rejected("no open position"),
                    symbol,
                    side: "sell",
                    type: "market"
                };
                continue;
            }
            const side = position.side === "LONG" ? "sell" : "buy";
            const quantity = position.quantity;
            const result = await this.placeOrder({
                symbol,
                side,
                quantity,
                type: "market"
            }, accountId);
            outcomes[symbolRaw] = result;
        }
        return outcomes;
    }
    rejected(reason) {
        return {
            fills: [],
            averagePrice: 0,
            totalQuantity: 0,
            totalFees: 0,
            status: "rejected",
            reason,
            symbol: "",
            side: "buy",
            type: "market"
        };
    }
}
}),
"[project]/src/lib/simulator/api.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleSimAccount",
    ()=>handleSimAccount,
    "handleSimOrder",
    ()=>handleSimOrder,
    "handleSimOrderBook",
    ()=>handleSimOrderBook,
    "handleSimStream",
    ()=>handleSimStream
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/config.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$markets$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/markets.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulator$2f$exchangeSimulator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/simulator/exchangeSimulator.ts [app-route] (ecmascript)");
;
;
;
;
async function ensureSimulator() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["IS_SIMULATION_ENABLED"]) {
        throw new Error("Simulation mode is disabled");
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulator$2f$exchangeSimulator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ExchangeSimulator"].bootstrap(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DEFAULT_SIMULATOR_OPTIONS"]);
}
function normalizeSide(side) {
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
async function handleSimOrder(request) {
    try {
        const simulator = await ensureSimulator();
        const body = await request.json();
        const accountId = typeof body.accountId === "string" && body.accountId.trim().length > 0 ? body.accountId.trim() : "default";
        const symbol = String(body.symbol ?? "").trim();
        const quantity = Number(body.quantity ?? body.size);
        const side = normalizeSide(body.side);
        const orderType = (body.type ?? "market").toLowerCase() === "limit" ? "limit" : "market";
        const limitPrice = body.limitPrice !== undefined ? Number(body.limitPrice) : body.price !== undefined ? Number(body.price) : undefined;
        if (!symbol) {
            throw new Error("Symbol is required");
        }
        if (!Number.isFinite(quantity) || quantity <= 0) {
            throw new Error("Quantity must be a positive number");
        }
        if (limitPrice !== undefined && !Number.isFinite(limitPrice)) {
            throw new Error("limitPrice must be a valid number");
        }
        const order = await simulator.placeOrder({
            symbol,
            side,
            quantity,
            type: orderType,
            limitPrice
        }, accountId);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            order
        });
    } catch (error) {
        const message = error instanceof Error ? error.message : "Unknown error";
        const status = message.includes("disabled") ? 400 : 500;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: message
        }, {
            status
        });
    }
}
async function handleSimAccount(request) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["IS_SIMULATION_ENABLED"]) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Simulation mode is disabled"
        }, {
            status: 400
        });
    }
    const url = new URL(request.url);
    const accountParam = url.searchParams.get("accountId") ?? "default";
    const accountId = accountParam.trim() === "" ? "default" : accountParam.trim();
    const simulator = await ensureSimulator();
    const snapshot = simulator.getAccountSnapshot(accountId);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        account: snapshot,
        accountId
    });
}
async function handleSimOrderBook(request) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["IS_SIMULATION_ENABLED"]) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Simulation mode is disabled"
        }, {
            status: 400
        });
    }
    const url = new URL(request.url);
    const symbol = url.searchParams.get("symbol");
    if (!symbol) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "symbol query parameter is required"
        }, {
            status: 400
        });
    }
    try {
        const simulator = await ensureSimulator();
        const orderBook = simulator.getOrderBook(symbol);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            orderBook
        });
    } catch (error) {
        const message = error instanceof Error ? error.message : "Unknown error";
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: message
        }, {
            status: 400
        });
    }
}
function buildWebSocketResponse(socket) {
    return new Response(null, {
        status: 101,
        webSocket: socket
    });
}
async function handleSimStream(request) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["IS_SIMULATION_ENABLED"]) {
        return new Response("Simulation mode is disabled", {
            status: 400
        });
    }
    const url = new URL(request.url);
    const accountParam = url.searchParams.get("accountId") ?? "default";
    const accountId = accountParam.trim() === "" ? "default" : accountParam.trim();
    const upgrade = request.headers.get("upgrade");
    if (!upgrade || upgrade.toLowerCase() !== "websocket") {
        return new Response("Expected websocket upgrade", {
            status: 400
        });
    }
    const pairCtor = globalThis.WebSocketPair;
    if (!pairCtor) {
        return new Response("WebSocketPair not supported in this runtime", {
            status: 500
        });
    }
    const [client, server] = new pairCtor();
    const simulator = await ensureSimulator();
    server.accept?.();
    const sendEvent = (event)=>{
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
    const teardown = ()=>{
        simulator.off("book", sendEvent);
        simulator.off("trade", sendEvent);
        simulator.off("account", sendEvent);
    };
    server.addEventListener("close", teardown);
    server.addEventListener("error", teardown);
    const snapshot = simulator.getAccountSnapshot(accountId);
    const accountEvent = {
        type: "account",
        payload: {
            accountId,
            snapshot
        }
    };
    server.send(JSON.stringify(accountEvent));
    for (const symbol of Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$markets$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MARKETS"])){
        try {
            const orderBook = simulator.getOrderBook(symbol);
            const bookEvent = {
                type: "book",
                payload: orderBook
            };
            server.send(JSON.stringify(bookEvent));
        } catch (error) {
            console.warn(`[Simulator] Unable to send initial order book for ${symbol}`, error);
        }
    }
    return buildWebSocketResponse(client);
}
}),
"[project]/src/app/api/sim/account/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulator$2f$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/simulator/api.ts [app-route] (ecmascript)");
;
async function GET(request) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simulator$2f$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleSimAccount"])(request);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1c4fd5d9._.js.map