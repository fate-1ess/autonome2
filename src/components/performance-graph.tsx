"use client";

import { useState, useEffect, useMemo } from "react";
import { GlowingLineChart } from "./ui/glowing-line";
import ModelLegend from "./model-legend";
import { getModelInfo } from "@/lib/modelConfig";

type DataPoint = {
  month: string;
  [key: string]: number | string;
};

type PortfolioEntry = {
  id: string;
  modelId: string;
  netPortfolio: string;
  createdAt: string;
  updatedAt: string;
  model: {
    name: string;
    openRoutermodelName: string;
  };
};

export default function PerformanceGraph() {
  const [valueMode, setValueMode] = useState<"usd" | "percent">("usd");
  const [timeFilter, setTimeFilter] = useState<"all" | "72h">("all");
  const [hoveredLine, setHoveredLine] = useState<string | null>(null);
  const [portfolioData, setPortfolioData] = useState<PortfolioEntry[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch portfolio history
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/portfolio-history");
        const data = await response.json();
        setPortfolioData(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch portfolio history:", error);
        setLoading(false);
      }
    };

    fetchData();
    // Refresh every 30 seconds
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  // Transform portfolio data into chart format
  const { chartData, chartConfig } = useMemo(() => {
    if (!Array.isArray(portfolioData) || portfolioData.length === 0) {
      return { chartData: [], chartConfig: {} };
    }

    // Group data points by timestamp
    const points = portfolioData
      .map((item) => ({
        t: new Date(item.createdAt).getTime(),
        name: item.model.name,
        v: Number(item.netPortfolio),
      }))
      .filter((p) => Number.isFinite(p.v))
      .sort((a, b) => a.t - b.t);

    // Get unique model names
    const modelNames = new Set<string>();
    for (const p of points) modelNames.add(p.name);

    // Calculate median time gap between data points
    const uniqueTs = Array.from(new Set(points.map((p) => p.t))).sort(
      (a, b) => a - b
    );
    const gaps: number[] = [];
    for (let i = 1; i < uniqueTs.length; i++) {
      gaps.push(uniqueTs[i] - uniqueTs[i - 1]);
    }
    const medianGap =
      gaps.length > 0
        ? gaps.sort((a, b) => a - b)[Math.floor(gaps.length / 2)]
        : 60_000;
    // Reduce tolerance to 30 seconds to show more data points
    const tolerance = Math.min(
      30_000, // Max 30 seconds
      Math.max(2_000, Math.floor((medianGap || 60_000) * 0.5)) // Min 2 seconds, 50% of median
    );

    // Bucket data points that are close together
    const rows: DataPoint[] = [];
    let bucketStart = points[0].t;
    let bucketEnd = points[0].t;
    let bucketRows: Record<string, number> = {};

    const flush = () => {
      const center = Math.round((bucketStart + bucketEnd) / 2);
      const timestamp = new Date(center).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });
      rows.push({ month: timestamp, ...bucketRows });
      bucketRows = {};
    };

    for (let i = 0; i < points.length; i++) {
      const p = points[i];
      if (p.t - bucketEnd > tolerance) {
        flush();
        bucketStart = p.t;
        bucketEnd = p.t;
      }
      bucketEnd = Math.max(bucketEnd, p.t);
      bucketRows[p.name] = p.v;
    }
    flush();

    // Create chart config with colors
    const config: Record<string, { label: string; color: string }> = {};
    for (const name of Array.from(modelNames)) {
      const modelInfo = getModelInfo(name);
      config[name] = {
        label: modelInfo.label,
        color: modelInfo.color,
      };
    }

    return { chartData: rows, chartConfig: config };
  }, [portfolioData]);

  // Filter data based on time filter
  const filteredData = useMemo(() => {
    if (timeFilter === "72h") {
      // Get data from last 72 hours
      const cutoffTime = Date.now() - 72 * 60 * 60 * 1000;
      return chartData.filter((point) => {
        const time = new Date(
          new Date().toDateString() + " " + point.month
        ).getTime();
        return time >= cutoffTime || isNaN(time);
      });
    }
    return chartData;
  }, [chartData, timeFilter]);

  // Compute display data based on value mode (USD vs % from first point)
  const PERCENT_SCALE = 100;

  const toPercentData = (source: DataPoint[]): DataPoint[] => {
    if (source.length === 0) return source;
    
    const keys = Object.keys(chartConfig);
    
    // Find the first data point where each model appears
    const baseMap: Record<string, number> = {};
    for (const k of keys) {
      // Find first non-zero value for this model
      for (const row of source) {
        const val = row[k];
        if (typeof val === "number" && val > 0) {
          baseMap[k] = val;
          break;
        }
      }
    }

    const toPoint = (row: DataPoint): DataPoint => {
      const out: DataPoint = { month: row.month };
      for (const k of keys) {
        const base = baseMap[k];
        const val = row[k];
        if (typeof base === "number" && base > 0 && typeof val === "number" && val > 0) {
          out[k] = (val / base - 1) * PERCENT_SCALE;
        }
      }
      return out;
    };

    return source.map(toPoint);
  };

  const displayData: DataPoint[] = useMemo(() => {
    if (valueMode === "usd") {
      return filteredData;
    }
    return toPercentData(filteredData);
  }, [valueMode, filteredData, chartConfig]);

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <p className="text-muted-foreground">Loading performance data...</p>
      </div>
    );
  }

  if (chartData.length === 0) {
    return (
      <div className="flex h-64 items-center justify-center">
        <p className="text-muted-foreground">No data available yet...</p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col overflow-hidden">
      <div className="flex-1 min-h-0">
        <GlowingLineChart
          chartConfig={chartConfig}
          chartData={displayData}
          onValueModeChange={setValueMode}
          valueMode={valueMode}
          timeFilter={timeFilter}
          onTimeFilterChange={setTimeFilter}
          hoveredLine={hoveredLine}
          onHoverLine={setHoveredLine}
        />
      </div>
      <div className="flex-shrink-0">
        <ModelLegend
          chartData={displayData}
          chartConfig={chartConfig}
          valueMode={valueMode}
          hoveredLine={hoveredLine}
          onHoverLine={setHoveredLine}
        />
      </div>
    </div>
  );
}
