"use client";

import { TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  ReferenceLine,
  Tooltip,
} from "recharts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  type ChartConfig,
  ChartContainer,
} from "@/components/ui/chart";
import Image from "next/image";
import { MODEL_INFO, getModelInfo } from "@/lib/modelConfig";

type GlowingLineChartProps = {
  chartData: Array<{ month: string; [key: string]: number | string }>;
  chartConfig: ChartConfig;
  valueMode?: "usd" | "percent";
  onValueModeChange?: (mode: "usd" | "percent") => void;
  timeFilter?: "all" | "72h";
  onTimeFilterChange?: (filter: "all" | "72h") => void;
  hoveredLine?: string | null;
  onHoverLine?: (key: string | null) => void;
};

// Custom dot component for the last point with icon and value
const CustomEndDot = (props: any) => {
  const { cx, cy, value, dataKey, index, data, hoveredLine } = props;

  if (!cx || !cy || !value || !dataKey || !data) {
    return null;
  }

  // Only render on the last data point
  if (index !== data.length - 1) {
    return null;
  }

  const modelInfo = getModelInfo(String(dataKey));
  if (!modelInfo || !modelInfo.logo) {
    return null;
  }

  const { logo, color } = modelInfo;
  const isHovered = hoveredLine === dataKey;
  const isDimmed = hoveredLine && hoveredLine !== dataKey;

  const formattedValue = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(value);

  return (
    <g>
      {/* Main circle with logo background */}
      <circle
        cx={cx}
        cy={cy}
        r={isHovered ? 16 : 14}
        fill={color}
        opacity={isDimmed ? 0.3 : 1}
      />
      {/* Model logo as image - full size */}
      <image
        x={cx - (isHovered ? 16 : 14)}
        y={cy - (isHovered ? 16 : 14)}
        width={isHovered ? 32 : 28}
        height={isHovered ? 32 : 28}
        href={logo}
        preserveAspectRatio="xMidYMid meet"
        style={{
          clipPath: `circle(${isHovered ? 16 : 14}px at 50% 50%)`,
          pointerEvents: 'none'
        }}
        opacity={isDimmed ? 0.3 : 1}
      />
      {/* Value label */}
      <foreignObject x={cx + 25} y={cy - 12} width={100} height={24} opacity={isDimmed ? 0.3 : 1}>
        <div
          style={{
            backgroundColor: color,
            color: "white",
            padding: "2px 8px",
            borderRadius: "4px",
            fontSize: "12px",
            fontWeight: "bold",
            whiteSpace: "nowrap",
            border: isHovered ? "2px solid white" : "none",
          }}
        >
          {formattedValue}
        </div>
      </foreignObject>
    </g>
  );
};

// Custom tooltip that shows only the hovered line's value
const CustomTooltip = ({
  active,
  payload,
  hoveredLine,
}: {
  active?: boolean;
  payload?: Array<{
    value: number;
    dataKey: string;
    color: string;
    payload: { month: string };
  }>;
  hoveredLine?: string | null;
}) => {
  if (!active || !payload || !payload.length || !hoveredLine) {
    return null;
  }

  const hoveredData = payload.find((p) => p.dataKey === hoveredLine);
  if (!hoveredData) {
    return null;
  }

  const modelInfo = getModelInfo(hoveredLine);
  if (!modelInfo) {
    return null;
  }

  const formattedValue = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(hoveredData.value);

  return (
    <div
      style={{
        backgroundColor: modelInfo.color,
        color: "white",
        padding: "8px 12px",
        borderRadius: "6px",
        fontSize: "14px",
        fontWeight: "bold",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      }}
    >
      {formattedValue}
    </div>
  );
};

export function GlowingLineChart({
  chartData,
  chartConfig,
  valueMode = "usd",
  onValueModeChange,
  timeFilter = "all",
  onTimeFilterChange,
  hoveredLine: externalHoveredLine,
  onHoverLine,
}: GlowingLineChartProps) {
  const [internalHoveredLine, setInternalHoveredLine] = useState<string | null>(null);
  const hoveredLine = externalHoveredLine ?? internalHoveredLine;

  const setHoveredLine = (key: string | null) => {
    setInternalHoveredLine(key);
    onHoverLine?.(key);
  };

  // Extract all model keys dynamically from chartConfig, excluding buynnhold_btc
  const modelKeys = Object.keys(chartConfig).filter(key => key !== "buynnhold_btc");

  // Preload all model logos to prevent flickering
  useEffect(() => {
    const modelLogos = modelKeys
      .map((key) => getModelInfo(key).logo)
      .filter((logo) => logo); // Filter out empty strings
    
    modelLogos.forEach((url) => {
      const img = new window.Image();
      img.src = "/deepseek.png" ;
    });
  }, [modelKeys]);

  const lastPoint = chartData.at(-1) ?? { month: "" };

  const isPercent = valueMode === "percent";

  const formatValue = (v?: number): string => {
    if (typeof v !== "number") {
      return "";
    }
    return isPercent
      ? `${Math.round(v)}%`
      : new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          maximumFractionDigits: 2,
        }).format(v);
  };

  // Fixed Y-axis domain for USD mode, dynamic for percent mode
  const yAxisConfig = isPercent 
    ? {
        domain: [-100, 150] as [number, number],
        ticks: [-100, -50, 0, 50, 100, 150]
      }
    : {
        domain: [0, 25000] as [number, number],
        ticks: [0, 5000, 10000, 15000, 20000, 25000]
      };



  return (
    <div className="flex h-full flex-col">
      <div className="px-6 py-4 border-b">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1">
            <Button
              aria-pressed={valueMode === "usd"}
              className="h-8 px-3 text-xs font-medium transition-all"
              onClick={() => onValueModeChange?.("usd")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  onValueModeChange?.("usd");
                }
              }}
              type="button"
              variant={valueMode === "usd" ? "default" : "outline"}
            >
              $
            </Button>
            <Button
              aria-pressed={valueMode === "percent"}
              className="h-8 px-3 text-xs font-medium transition-all"
              onClick={() => onValueModeChange?.("percent")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  onValueModeChange?.("percent");
                }
              }}
              type="button"
              variant={valueMode === "percent" ? "default" : "outline"}
            >
              %
            </Button>
          </div>
          <div className="text-center">
            <div className="flex justify-center items-center gap-2">
              <h2 className="text-sm font-semibold uppercase tracking-wider">
                TOTAL ACCOUNT VALUE
              </h2>
              <Badge
                className="border-none bg-green-500/10 text-green-500 hover:bg-green-500/20 transition-colors"
                variant="outline"
              >
                <TrendingUp className="h-3.5 w-3.5 mr-1" />
                <span className="font-semibold">Live</span>
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Real-time model equity tracking</p>
          </div>
          <div className="flex items-center gap-1">
            <Button
              aria-pressed={timeFilter === "all"}
              className="h-8 px-3 text-xs font-medium transition-all"
              onClick={() => onTimeFilterChange?.("all")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  onTimeFilterChange?.("all");
                }
              }}
              type="button"
              variant={timeFilter === "all" ? "default" : "outline"}
            >
              ALL
            </Button>
            <Button
              aria-pressed={timeFilter === "72h"}
              className="h-8 px-3 text-xs font-medium transition-all"
              onClick={() => onTimeFilterChange?.("72h")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  onTimeFilterChange?.("72h");
                }
              }}
              type="button"
              variant={timeFilter === "72h" ? "default" : "outline"}
            >
              72H
            </Button>
          </div>
        </div>
      </div>
      <div className="flex-1 px-6 py-4 min-h-0">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 10,
              right: 120,
              top: 20,
              bottom: 60,
            }}
            onMouseLeave={() => setHoveredLine(null)}
            style={{
              background: "transparent",
            }}
          >
            <defs>
              {/* Preload images in SVG defs to prevent flickering */}
              {Object.entries(MODEL_INFO).map(([key, info]) => (
                <image
                  key={`preload-${key}`}
                  href={info.logo}
                  width="0"
                  height="0"
                />
              ))}
              {/* Gradient for each model line */}
              {modelKeys.map((key) => {
                const modelInfo = getModelInfo(key);
                const color = modelInfo?.color || chartConfig[key]?.color || "hsl(var(--chart-1))";
                return (
                  <linearGradient
                    key={`gradient-${key}`}
                    id={`gradient-${key}`}
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor={color} stopOpacity={0.3} />
                    <stop offset="100%" stopColor={color} stopOpacity={0} />
                  </linearGradient>
                );
              })}
            </defs>
            <title>Model performance over time</title>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="hsl(var(--border))"
              opacity={0.2}
              horizontalPoints={yAxisConfig.ticks}
            />
            <XAxis
              axisLine={false}
              dataKey="month"
              tickLine={false}
              tickMargin={12}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
              interval="preserveStartEnd"
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis
              axisLine={false}
              domain={yAxisConfig.domain}
              ticks={yAxisConfig.ticks}
              tickFormatter={(v: number) =>
                isPercent
                  ? `${Math.round(v)}%`
                  : new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      maximumFractionDigits: 0,
                    }).format(v)
              }
              tickLine={false}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
              width={80}
            />
            {/* Reference line at starting value */}
            {isPercent && (
              <ReferenceLine
                y={0}
                stroke="hsl(var(--muted-foreground))"
                strokeDasharray="5 5"
                opacity={0.4}
                strokeWidth={1.5}
              />
            )}
            <Tooltip
              content={<CustomTooltip hoveredLine={hoveredLine} />}
              cursor={{
                stroke: hoveredLine ? MODEL_INFO[hoveredLine]?.color : "hsl(var(--muted-foreground))",
                strokeWidth: 2,
                strokeDasharray: "5 5",
                opacity: 0.5,
              }}
            />
            {modelKeys.map((key) => {
              const modelInfo = getModelInfo(key);
              const color = modelInfo?.color || chartConfig[key]?.color || "hsl(var(--chart-1))";
              const isHovered = hoveredLine === key;
              const isDimmed = hoveredLine && hoveredLine !== key;

              return (
                <Line
                  key={key}
                  connectNulls
                  dataKey={key}
                  dot={(dotProps) => {
                    const { key: dotKey, ...rest } = (dotProps as any) ?? {};
                    return (
                      <CustomEndDot
                        key={dotKey}
                        {...rest}
                        chartConfig={chartConfig}
                        data={chartData}
                        hoveredLine={hoveredLine}
                      />
                    );
                  }}
                  stroke={color}
                  strokeWidth={isHovered ? 5 : 3}
                  strokeOpacity={isDimmed ? 0.15 : 0.9}
                  type="monotone"
                  activeDot={false}
                  onMouseEnter={() => setHoveredLine(key)}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  animationDuration={300}
                  animationEasing="ease-in-out"
                  filter={isHovered ? `drop-shadow(0 0 8px ${color})` : undefined}
                />
              );
            })}
          </LineChart>
        </ChartContainer>
      </div>
    </div>
  );
}
