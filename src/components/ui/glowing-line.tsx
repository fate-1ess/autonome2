"use client";

import { TrendingUp } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis,
  type TooltipProps,
} from "recharts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import { getModelInfo } from "@/lib/modelConfig";

type ChartDatum = { month: string; [key: string]: number | string | null | undefined };
type SeriesMeta = Record<string, { originalKey: string }>;

type GlowingLineChartProps = {
  chartData: ChartDatum[];
  chartConfig: ChartConfig;
  seriesMeta: SeriesMeta;
  valueMode?: "usd" | "percent";
  onValueModeChange?: (mode: "usd" | "percent") => void;
  timeFilter?: "all" | "72h";
  onTimeFilterChange?: (filter: "all" | "72h") => void;
  hoveredLine?: string | null;
  onHoverLine?: (key: string | null) => void;
};

const CustomEndDot = ({
  cx,
  cy,
  value,
  dataKey,
  index,
  hoveredLine,
  seriesMeta,
  valueMode,
  chartLength,
}: {
  cx?: number;
  cy?: number;
  value?: number;
  dataKey?: string | number | ((entry: ChartDatum) => unknown);
  index?: number;
  hoveredLine?: string | null;
  seriesMeta: SeriesMeta;
  valueMode: "usd" | "percent";
  chartLength: number;
}) => {
  if (
    typeof cx !== "number" ||
    typeof cy !== "number" ||
    typeof index !== "number" ||
    chartLength <= 0 ||
    index !== chartLength - 1 ||
    typeof value !== "number" ||
    !Number.isFinite(value)
  ) {
    return null;
  }

  const resolvedKey =
    typeof dataKey === "string"
      ? dataKey
      : typeof dataKey === "number"
        ? String(dataKey)
        : undefined;

  if (!resolvedKey) {
    return null;
  }

  const originalKey = seriesMeta[resolvedKey]?.originalKey ?? resolvedKey;
  const modelInfo = getModelInfo(originalKey);
  const { logo, color } = modelInfo;
  const isHovered = hoveredLine === resolvedKey;
  const isDimmed = Boolean(hoveredLine && hoveredLine !== resolvedKey);
  const fallbackGlyph = (modelInfo.label || originalKey || resolvedKey)
    .trim()
    .charAt(0)
    .toUpperCase() || "•";

  const formattedValue =
    valueMode === "percent"
      ? `${value.toFixed(1)}%`
      : new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          maximumFractionDigits: 2,
        }).format(value);

  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r={isHovered ? 16 : 14}
        fill={color}
        opacity={isDimmed ? 0.3 : 1}
      />
      {logo ? (
        <image
          x={cx - (isHovered ? 16 : 14)}
          y={cy - (isHovered ? 16 : 14)}
          width={isHovered ? 32 : 28}
          height={isHovered ? 32 : 28}
          href={logo}
          preserveAspectRatio="xMidYMid meet"
          style={{
            clipPath: `circle(${isHovered ? 16 : 14}px at 50% 50%)`,
            pointerEvents: "none",
          }}
          opacity={isDimmed ? 0.3 : 1}
        />
      ) : (
        <text
          x={cx}
          y={cy + 4}
          textAnchor="middle"
          fontSize={isHovered ? 14 : 12}
          fontWeight={700}
          fill="#fff"
          opacity={isDimmed ? 0.3 : 1}
        >
          {fallbackGlyph}
        </text>
      )}
      <foreignObject
        x={cx + 25}
        y={cy - 12}
        width={100}
        height={24}
        opacity={isDimmed ? 0.3 : 1}
      >
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

const CustomTooltip = ({
  active,
  payload,
  hoveredLine,
  seriesMeta,
  valueMode,
}: {
  active?: boolean;
  payload?: Array<{
    value: number;
    dataKey: string;
  }>;
  hoveredLine?: string | null;
  seriesMeta: SeriesMeta;
  valueMode: "usd" | "percent";
}) => {
  if (!active || !payload || !payload.length || !hoveredLine) {
    return null;
  }

  const hoveredData = payload.find((p) => p.dataKey === hoveredLine);
  if (!hoveredData || typeof hoveredData.value !== "number") {
    return null;
  }

  const originalKey = seriesMeta[hoveredLine]?.originalKey ?? hoveredLine;
  const modelInfo = getModelInfo(originalKey);

  const formattedValue =
    valueMode === "percent"
      ? `${hoveredData.value.toFixed(1)}%`
      : new Intl.NumberFormat("en-US", {
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
  seriesMeta,
  valueMode = "usd",
  onValueModeChange,
  timeFilter = "all",
  onTimeFilterChange,
  hoveredLine: externalHoveredLine,
  onHoverLine,
}: GlowingLineChartProps) {
  const [internalHoveredLine, setInternalHoveredLine] = useState<string | null>(null);
  const hoveredLine = externalHoveredLine ?? internalHoveredLine;

  const modelKeys = useMemo(
    () => Object.keys(chartConfig).filter((key) => Boolean(seriesMeta[key])),
    [chartConfig, seriesMeta]
  );

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const logos = modelKeys
      .map((key) => getModelInfo(seriesMeta[key]?.originalKey ?? key).logo)
      .filter((logo) => typeof logo === "string" && logo.length > 0);

    const uniqueLogos = Array.from(new Set(logos));

    uniqueLogos.forEach((url) => {
      const img = new window.Image();
      img.src = url;
    });
  }, [modelKeys, seriesMeta]);

  const isPercent = valueMode === "percent";

  const yAxisConfig = isPercent
    ? { domain: [-100, 150] as [number, number], ticks: [-100, -50, 0, 50, 100, 150] }
    : { domain: [0, 25000] as [number, number], ticks: [0, 5000, 10000, 15000, 20000, 25000] };

  const setHoveredLine = (key: string | null) => {
    setInternalHoveredLine(key);
    onHoverLine?.(key);
  };

  const tooltipCursor = useMemo<TooltipProps<number, string>["cursor"]>(() => {
    if (!hoveredLine) {
      return {
        stroke: "hsl(var(--muted-foreground))",
        strokeWidth: 2,
        strokeDasharray: "5 5",
        opacity: 0.5,
      };
    }

    const originalKey = seriesMeta[hoveredLine]?.originalKey ?? hoveredLine;
    const info = getModelInfo(originalKey);
    return {
      stroke: info.color,
      strokeWidth: 2,
      strokeDasharray: "5 5",
      opacity: 0.5,
    };
  }, [hoveredLine, seriesMeta]);

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
            <div className="flex items-center justify-center gap-2">
              <h2 className="text-sm font-semibold uppercase tracking-wider">
                TOTAL ACCOUNT VALUE
              </h2>
              <Badge className="border-none bg-green-500/10 text-green-500 hover:bg-green-500/20 transition-colors" variant="outline">
                <TrendingUp className="mr-1 h-3.5 w-3.5" />
                <span className="font-semibold">Live</span>
              </Badge>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">Real-time model equity tracking</p>
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
      <div className="flex-1 px-6 pb-0 pt-4 min-h-0">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{ left: 10, right: 120, top: 20, bottom: 20 }}
            onMouseLeave={() => setHoveredLine(null)}
            style={{ background: "transparent" }}
          >
            <defs>
              {modelKeys.map((key) => {
                const originalKey = seriesMeta[key]?.originalKey ?? key;
                const modelInfo = getModelInfo(originalKey);
                const color = modelInfo.color || chartConfig[key]?.color || "hsl(var(--chart-1))";

                return (
                  <linearGradient key={`gradient-${key}`} id={`gradient-${key}`} x1="0" y1="0" x2="0" y2="1">
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
              tickMargin={8}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
              interval="preserveStartEnd"
              angle={-45}
              textAnchor="end"
              height={60}
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
              content={
                <CustomTooltip
                  hoveredLine={hoveredLine}
                  seriesMeta={seriesMeta}
                  valueMode={valueMode}
                />
              }
              cursor={tooltipCursor}
            />
            {modelKeys.map((key) => {
              const originalKey = seriesMeta[key]?.originalKey ?? key;
              const modelInfo = getModelInfo(originalKey);
              const color = modelInfo.color || chartConfig[key]?.color || "hsl(var(--chart-1))";
              const isHovered = hoveredLine === key;
              const isDimmed = Boolean(hoveredLine && hoveredLine !== key);

              return (
                <Line
                  key={key}
                  connectNulls
                  dataKey={key}
                  type="monotone"
                  stroke={color}
                  strokeWidth={isHovered ? 5 : 3}
                  strokeOpacity={isDimmed ? 0.15 : 0.9}
                  activeDot={false}
                  onMouseEnter={() => setHoveredLine(key)}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  animationDuration={300}
                  animationEasing="ease-in-out"
                  filter={isHovered ? `drop-shadow(0 0 8px ${color})` : undefined}
                  dot={(dotProps) => (
                    <CustomEndDot
                      {...dotProps}
                      hoveredLine={hoveredLine}
                      seriesMeta={seriesMeta}
                      valueMode={valueMode}
                      chartLength={chartData.length}
                    />
                  )}
                />
              );
            })}
          </LineChart>
        </ChartContainer>
      </div>
    </div>
  );
}
