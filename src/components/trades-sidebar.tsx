"use client";

import { ChevronDown, Send } from "lucide-react";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getModelInfo } from "@/lib/modelConfig";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

type Trade = {
  id: string;
  model: string;
  modelName: string;
  symbols: string[];
  timestamp: string;
  results?: any[];
  tradeType?: "long" | "short";
  entryPrice?: number;
  exitPrice?: number;
  quantity?: number;
  notionalEntry?: number;
  notionalExit?: number;
  holdingTime?: string;
  netPnl?: number;
};

type Position = {
  symbol: string;
  position: string;
  sign: "LONG" | "SHORT";
  unrealizedPnl: string;
  realizedPnl: string;
  liquidationPrice: string;
  leverage?: number;
  notional?: string;
  exitPlan?: string;
};

type ModelPositions = {
  modelId: string;
  modelName: string;
  modelLogo: string;
  positions: Position[];
  totalUnrealizedPnl?: number;
  availableCash?: number;
};

type Conversation = {
  id: string;
  modelId: string;
  modelName: string;
  modelLogo: string;
  response: string;
  timestamp: string;
  toolCalls: {
    id: string;
    type: string;
    metadata: any;
    timestamp: string;
  }[];
};

type TradesSidebarProps = {
  isExpanded: boolean;
  onToggle: () => void;
};

export default function TradesSidebar({
  isExpanded,
  onToggle,
}: TradesSidebarProps) {
  const [trades, setTrades] = useState<Trade[]>([]);
  const [positions, setPositions] = useState<ModelPositions[]>([]);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [filter, setFilter] = useState<"all" | string>("all");
  const [activeTab, setActiveTab] = useState<
    "trades" | "modelchat" | "positions"
  >("trades");
  const [chatMessage, setChatMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [expandedResponses, setExpandedResponses] = useState<Set<string>>(new Set());

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 10000); // Refresh every 10 seconds
    return () => clearInterval(interval);
  }, []);

  const fetchData = async () => {
    try {
      const [tradesRes, positionsRes, conversationsRes] = await Promise.all([
        fetch("/api/trades"),
        fetch("/api/positions"),
        fetch("/api/invocations"),
      ]);

      const tradesData = await tradesRes.json();
      const positionsData = await positionsRes.json();
      const conversationsData = await conversationsRes.json();

      setTrades(tradesData.trades || []);
      setPositions(positionsData.positions || []);
      setConversations(conversationsData.conversations || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleString("en-US", {
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const filteredTrades =
    filter === "all" ? trades : trades.filter((t) => t.model === filter);

  const filteredConversations =
    filter === "all" ? conversations : conversations.filter((c) => c.modelId === filter);

  const filteredPositions = 
    filter === "all" ? positions : positions.filter((p) => p.modelId === filter);

  // Get unique models for the filter dropdown
  const uniqueModels = Array.from(
    new Set([
      ...trades.map(t => t.model),
      ...conversations.map(c => c.modelId),
      ...positions.map(p => p.modelId)
    ])
  ).filter(modelId => {
    // Filter out invalid model IDs (like UUIDs or other garbage)
    // Valid model IDs should match known patterns
    const modelInfo = getModelInfo(modelId);
    // If it has a real label (not just the modelId returned as label), it's valid
    return modelInfo.label !== modelId || modelInfo.logo !== "";
  });

  // Get the selected model's color for background
  const selectedModelInfo = filter !== "all" ? getModelInfo(filter) : null;

  const toggleResponseExpansion = (convId: string) => {
    setExpandedResponses((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(convId)) {
        newSet.delete(convId);
      } else {
        newSet.add(convId);
      }
      return newSet;
    });
  };

  return (
    <div
      className={`flex h-full flex-col border-l bg-background transition-all duration-1000 ease-[cubic-bezier(0.091,0.543,0.148,0.909)] ${
        isExpanded ? "w-full" : "w-96"
      }`}
      style={{
        position: isExpanded ? "absolute" : "relative",
        right: 0,
        top: 0,
        zIndex: isExpanded ? 50 : 1,
        backgroundColor: selectedModelInfo 
          ? `${selectedModelInfo.color}15` 
          : "hsl(var(--background))",
      }}
    >
      {/* Tabs */}
      <div className="border-b">
        <div className="flex">
          <button
            className={`flex-1 px-4 py-3 font-semibold text-xs uppercase tracking-wider transition-colors ${
              activeTab === "trades"
                ? "border-primary border-b-2 bg-background text-foreground"
                : "bg-muted/30 text-muted-foreground hover:bg-muted/50"
            }`}
            onClick={() => setActiveTab("trades")}
            type="button"
          >
            Completed Trades
          </button>
          <button
            className={`flex-1 px-4 py-3 font-semibold text-xs uppercase tracking-wider transition-colors ${
              activeTab === "modelchat"
                ? "border-primary border-b-2 bg-background text-foreground"
                : "bg-muted/30 text-muted-foreground hover:bg-muted/50"
            }`}
            onClick={() => setActiveTab("modelchat")}
            type="button"
          >
            ModelChat
          </button>
          <button
            className={`flex-1 px-4 py-3 font-semibold text-xs uppercase tracking-wider transition-colors ${
              activeTab === "positions"
                ? "border-primary border-b-2 bg-background text-foreground"
                : "bg-muted/30 text-muted-foreground hover:bg-muted/50"
            }`}
            onClick={() => setActiveTab("positions")}
            type="button"
          >
            Positions
          </button>
        </div>
      </div>

      {/* Content based on active tab */}
      {activeTab === "trades" && (
        <>
          {/* Filter info */}
          <div className="border-b bg-muted/30 px-3 py-[7px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-medium text-xs uppercase tracking-wide">
                  Filter:
                </span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      className="flex items-center gap-1 rounded border bg-background px-2 py-1 font-medium text-xs transition-colors hover:bg-accent"
                      type="button"
                    >
                      {filter === "all" ? "All Models" : getModelInfo(filter).label}
                      <ChevronDown className="h-3 w-3" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuItem onClick={() => setFilter("all")}>
                      All Models
                    </DropdownMenuItem>
                    {uniqueModels.map((modelId) => {
                      const modelInfo = getModelInfo(modelId);
                      return (
                        <DropdownMenuItem key={modelId} onClick={() => setFilter(modelId)}>
                          <div className="flex items-center gap-2">
                            <div
                              style={{
                                width: "16px",
                                height: "16px",
                                borderRadius: "50%",
                                backgroundColor: modelInfo.color,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                overflow: "hidden",
                              }}
                            >
                              <Image
                                alt={modelInfo.label}
                                src="/deepseek.png"
                                width={10}
                                height={10}
                                style={{ objectFit: "contain" }}
                              />
                            </div>
                            {modelInfo.label}
                          </div>
                        </DropdownMenuItem>
                      );
                    })}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <span className="text-muted-foreground text-xs">
                Showing Last 400 Trades
              </span>
            </div>
          </div>

          {/* Trades list */}
          <ScrollArea className="flex-1 overflow-auto">
            {loading ? (
              <div className="flex items-center justify-center p-8">
                <p className="text-muted-foreground text-sm">Loading trades...</p>
              </div>
            ) : filteredTrades.length === 0 ? (
              <div className="flex items-center justify-center p-8">
                <p className="text-muted-foreground text-sm">No completed trades yet</p>
              </div>
            ) : (
              <div>
                {filteredTrades.map((trade, idx) => {
                  const modelInfo = getModelInfo(trade.model);

                  return (
                    <div key={trade.id}>
                      <div 
                        className="px-4 py-4 transition-colors hover:bg-accent/30 rounded"
                        style={{
                          // Always apply the model-specific subtle background so each
                          // trade item is tinted by its model even when no filter is set.
                          backgroundColor: `${modelInfo.color}10`,
                        }}
                      >
                        {/* Header with model and time */}
                        <div className="mb-3 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div
                              style={{
                                width: "24px",
                                height: "24px",
                                borderRadius: "50%",
                                backgroundColor: modelInfo.color,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                overflow: "hidden",
                              }}
                            >
                              <Image
                                alt={modelInfo.label}
                                src="/deepseek.png" 
                                width={18}
                                height={18}
                                style={{ objectFit: "contain" }}
                              />
                            </div>
                            <span className="font-semibold text-sm">
                              {modelInfo.label}
                            </span>
                          </div>
                          <span className="text-muted-foreground text-xs">
                            {formatDate(trade.timestamp)}
                          </span>
                        </div>

                        {/* Trade description */}
                        <div className="mb-3 flex flex-wrap items-center gap-1.5 text-sm">
                          <span className="text-muted-foreground">completed a</span>
                          <span className={`font-semibold ${trade.tradeType === 'long' ? 'text-green-500' : 'text-red-500'}`}>
                            {trade.tradeType || 'long'}
                          </span>
                          <span className="text-muted-foreground">trade on</span>
                          {trade.symbols.map((symbol) => (
                            <Badge
                              key={symbol}
                              className="font-semibold text-xs"
                              variant="outline"
                            >
                              {symbol}!
                            </Badge>
                          ))}
                        </div>

                        {/* Trade details */}
                        {trade.entryPrice && trade.exitPrice && (
                          <div className="space-y-1 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Price:</span>
                              <span className="font-light">
                                {formatPrice(trade.entryPrice)} → {formatPrice(trade.exitPrice)}
                              </span>
                            </div>
                            {trade.quantity && (
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Quantity:</span>
                                <span className="font-light">{trade.quantity.toFixed(2)}</span>
                              </div>
                            )}
                            {trade.notionalEntry && trade.notionalExit && (
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Notional:</span>
                                <span className="font-light">
                                  {formatPrice(trade.notionalEntry)} → {formatPrice(trade.notionalExit)}
                                </span>
                              </div>
                            )}
                            {trade.holdingTime && (
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Holding time:</span>
                                <span className="font-light">{trade.holdingTime}</span>
                              </div>
                            )}
                            {trade.netPnl !== undefined && (
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">NET P&L:</span>
                                <span className={`font-bold text-base ${trade.netPnl >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                  {trade.netPnl >= 0 ? '+' : ''}{formatPrice(trade.netPnl)}
                                </span>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Trade results (fallback for old format) */}
                        {trade.results && trade.results.length > 0 && !trade.entryPrice && (
                          <div className="space-y-1 text-xs">
                            {trade.results.map((result: any, i: number) => (
                              <div key={i} className="flex justify-between">
                                <span className="text-muted-foreground">
                                  {result.symbol}:
                                </span>
                                <span
                                  className={`font-light ${
                                    result.success
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }`}
                                >
                                  {result.success ? "Closed" : result.error || "Failed"}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      {idx < filteredTrades.length - 1 && (
                        <div className="border-b mx-4" />
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </ScrollArea>
        </>
      )}

      {activeTab === "modelchat" && (
        <div className="flex h-full flex-col">
          {/* Filter info */}
          <div className="border-b bg-muted/30 px-3 py-[7px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-medium text-xs uppercase tracking-wide">
                  Filter:
                </span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      className="flex items-center gap-1 rounded border bg-background px-2 py-1 font-medium text-xs transition-colors hover:bg-accent"
                      type="button"
                    >
                      {filter === "all" ? "All Models" : getModelInfo(filter).label}
                      <ChevronDown className="h-3 w-3" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuItem onClick={() => setFilter("all")}>
                      All Models
                    </DropdownMenuItem>
                    {uniqueModels.map((modelId) => {
                      const modelInfo = getModelInfo(modelId);
                      return (
                        <DropdownMenuItem key={modelId} onClick={() => setFilter(modelId)}>
                          <div className="flex items-center gap-2">
                            <div
                              style={{
                                width: "16px",
                                height: "16px",
                                borderRadius: "50%",
                                backgroundColor: modelInfo.color,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                overflow: "hidden",
                              }}
                            >
                              <Image
                                alt={modelInfo.label}
                                src="/deepseek.png"
                                width={10}
                                height={10}
                                style={{ objectFit: "contain" }}
                              />
                            </div>
                            {modelInfo.label}
                          </div>
                        </DropdownMenuItem>
                      );
                    })}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>

          <ScrollArea className="flex-1 overflow-auto">
            {loading ? (
              <div className="flex items-center justify-center p-8">
                <p className="text-muted-foreground text-sm">Loading conversations...</p>
              </div>
            ) : filteredConversations.length === 0 ? (
              <div className="flex items-center justify-center p-8">
                <div className="text-center text-muted-foreground">
                  <p className="mb-2 font-medium text-sm">ModelChat</p>
                  <p className="text-xs">
                    No conversations yet. Models will appear here after making trading decisions.
                  </p>
                </div>
              </div>
            ) : (
              <div>
                {filteredConversations.map((conv, idx) => {
                  const modelInfo = getModelInfo(conv.modelName);
                  const isExpanded = expandedResponses.has(conv.id);
                  const shouldTruncate = conv.response && conv.response.length > 300;
                  const displayResponse = isExpanded || !shouldTruncate
                    ? conv.response
                    : conv.response?.substring(0, 300) + "...";

                  return (
                    <div key={conv.id}>
                      <div 
                        className="px-4 py-4 transition-colors hover:bg-accent/30 rounded"
                        style={{
                          // Apply model-specific tint for each conversation block.
                          backgroundColor: `${modelInfo.color}10`,
                        }}
                      >
                        {/* Model header */}
                        <div className="mb-3 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div
                              style={{
                                width: "24px",
                                height: "24px",
                                borderRadius: "50%",
                                backgroundColor: modelInfo.color,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                overflow: "hidden",
                              }}
                            >
                              <Image
                                alt={modelInfo.label}
                                src="/deepseek.png" 
                                width={18}
                                height={18}
                                style={{ objectFit: "contain" }}
                                
                              />
                            </div>
                            <span className="font-semibold text-sm">{modelInfo.label}</span>
                          </div>
                          <span className="text-muted-foreground text-xs">
                            {formatDate(conv.timestamp)}
                          </span>
                        </div>

                        {/* Response */}
                        <div
                          className="mb-2 rounded-lg p-3"
                          style={{
                            // Use model color for the response card background and border
                            // for a consistent per-model appearance.
                            backgroundColor: `${modelInfo.color}15`,
                            border: `2px solid ${modelInfo.color}33`,
                          }}
                        >
                          <p className="whitespace-pre-wrap text-sm leading-relaxed">
                            {displayResponse || "No response"}
                          </p>
                          {shouldTruncate && (
                            <button
                              onClick={() => toggleResponseExpansion(conv.id)}
                              className="mt-2 text-xs text-muted-foreground hover:text-foreground transition-colors italic"
                              type="button"
                            >
                              {isExpanded ? "click to collapse" : "click to expand"}
                            </button>
                          )}
                        </div>

                        {/* Tool calls */}
                        {conv.toolCalls.length > 0 && (
                          <div className="flex flex-wrap gap-1.5">
                            {conv.toolCalls.map((tc) => (
                              <Badge
                                key={tc.id}
                                variant="outline"
                                className="text-xs"
                              >
                                {tc.type.replace(/_/g, " ")}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                      {idx < filteredConversations.length - 1 && (
                        <div className="border-b mx-4" />
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </ScrollArea>
        </div>
      )}

      {activeTab === "positions" && (
        <>
          {/* Filter info */}
          <div className="border-b bg-muted/30 px-3 py-[7px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-medium text-xs uppercase tracking-wide">
                  Filter:
                </span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      className="flex items-center gap-1 rounded border bg-background px-2 py-1 font-medium text-xs transition-colors hover:bg-accent"
                      type="button"
                    >
                      {filter === "all" ? "All Models" : getModelInfo(filter).label}
                      <ChevronDown className="h-3 w-3" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuItem onClick={() => setFilter("all")}>
                      All Models
                    </DropdownMenuItem>
                    {uniqueModels.map((modelId) => {
                      const modelInfo = getModelInfo(modelId);
                      return (
                        <DropdownMenuItem key={modelId} onClick={() => setFilter(modelId)}>
                          <div className="flex items-center gap-2">
                            <div
                              style={{
                                width: "16px",
                                height: "16px",
                                borderRadius: "50%",
                                backgroundColor: modelInfo.color,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                overflow: "hidden",
                              }}
                            >
                              <Image
                                alt={modelInfo.label}
                                src="/deepseek.png"
                                width={10}
                                height={10}
                                style={{ objectFit: "contain" }}
                              />
                            </div>
                            {modelInfo.label}
                          </div>
                        </DropdownMenuItem>
                      );
                    })}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>

        <ScrollArea className="flex-1 overflow-auto">
          {loading ? (
            <div className="flex items-center justify-center p-8">
              <p className="text-muted-foreground text-sm">Loading positions...</p>
            </div>
          ) : filteredPositions.length === 0 || filteredPositions.every(p => p.positions.length === 0) ? (
            <div className="flex items-center justify-center p-8">
              <div className="text-center text-muted-foreground">
                <p className="mb-2 font-medium text-sm">No Open Positions</p>
                <p className="text-xs">
                  Open positions will appear here when models create trades.
                </p>
              </div>
            </div>
          ) : (
            <div>
              {filteredPositions.map((modelPos, modelIdx) => {
                if (modelPos.positions.length === 0) return null;
                const modelInfo = getModelInfo(modelPos.modelName);
                const totalUnrealizedPnl = modelPos.totalUnrealizedPnl ?? 
                  modelPos.positions.reduce((sum, p) => sum + parseFloat(p.unrealizedPnl), 0);

                return (
                  <div
                    key={modelPos.modelId}
                    className={`px-4 py-4 ${modelIdx > 0 ? 'border-t border-muted' : ''}`}
                    style={{
                      // Tint the whole model block so all rows under this model share
                      // the model-specific subtle background by default.
                      backgroundColor: `${modelInfo.color}10`,
                    }}
                  >
                    {/* Model header with total P&L */}
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          style={{
                            width: "24px",
                            height: "24px",
                            borderRadius: "50%",
                            backgroundColor: modelInfo.color,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            overflow: "hidden",
                          }}
                        >
                          <Image
                            alt={modelInfo.label}
                            src="/deepseek.png" 
                            width={18}
                            height={18}
                            style={{ objectFit: "contain" }}
                            
                          />
                        </div>
                        <span className="font-semibold text-sm uppercase">
                          {modelInfo.label}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-muted-foreground">TOTAL UNREALIZED P&L:</div>
                        <div className={`font-semibold text-sm ${totalUnrealizedPnl >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                          {formatPrice(totalUnrealizedPnl)}
                        </div>
                      </div>
                    </div>

                    {/* Table header */}
                    <div className="mb-2 grid grid-cols-6 gap-2 border-b pb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      <div>SIDE</div>
                      <div>COIN</div>
                      <div>LEVERAGE</div>
                      <div>NOTIONAL</div>
                      <div className="text-center">EXIT PLAN</div>
                      <div className="text-right">UNREAL P&L</div>
                    </div>

                    {/* Positions rows */}
                    <div className="space-y-2">
                      {modelPos.positions.map((position, idx) => {
                        const isLong = position.sign === "LONG";
                        const unrealizedPnl = parseFloat(position.unrealizedPnl);
                        const isProfitable = unrealizedPnl > 0;

                        return (
                          <div
                            key={idx}
                            className="grid grid-cols-6 gap-2 items-center text-xs py-2 rounded hover:bg-accent/30 transition-colors"
                          >
                            <div>
                              <Badge
                                className={`font-semibold text-xs ${
                                  !isLong
                                    ? "border-red-500/20 bg-red-500/10 text-red-500"
                                    : "border-green-500/20 bg-green-500/10 text-green-500"
                                }`}
                                variant="outline"
                              >
                                {position.sign}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-1">
                              <span className="font-semibold">{position.symbol}</span>
                            </div>
                            <div className="font-medium">
                              {position.leverage || '10'}X
                            </div>
                            <div className="font-medium text-green-500">
                              {position.notional ? formatPrice(parseFloat(position.notional)) : 'N/A'}
                            </div>
                            <div className="text-center">
                              <button
                                className="rounded border px-2 py-0.5 text-xs hover:bg-accent transition-colors"
                                type="button"
                              >
                                VIEW
                              </button>
                            </div>
                            <div className={`text-right font-semibold ${
                              isProfitable ? "text-green-500" : "text-red-500"
                            }`}>
                              {isProfitable ? "+" : ""}{formatPrice(unrealizedPnl)}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Available cash */}
                    {modelPos.availableCash !== undefined && (
                      <div className="mt-3 pt-3 border-t text-xs">
                        <div className="flex justify-between">
                          <span className="font-semibold uppercase tracking-wide text-muted-foreground">
                            AVAILABLE CASH:
                          </span>
                          <span className="font-semibold">
                            {formatPrice(modelPos.availableCash)}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </ScrollArea>
        </>
      )}
    </div>
  );
}
