"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getModelInfo } from "@/lib/modelConfig";

type ModelLegendProps = {
  chartData: Array<{ month: string; [key: string]: number | string }>;
  chartConfig: Record<string, { label: string; color: string }>;
  valueMode?: "usd" | "percent";
  hoveredLine: string | null;
  onHoverLine: (key: string | null) => void;
};

export default function ModelLegend({
  chartData,
  chartConfig,
  valueMode = "usd",
  hoveredLine,
  onHoverLine,
}: ModelLegendProps) {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const modelKeys = Object.keys(chartConfig).filter(
    (key) => key !== "buynnhold_btc"
  );
  const lastPoint = chartData.at(-1) ?? { month: "" };
  const isPercent = valueMode === "percent";

  // Preload all model logos
  useEffect(() => {
    const modelLogos = modelKeys
      .map((key) => getModelInfo(key).logo)
      .filter((logo) => logo); // Filter out empty strings
    
    const imagePromises = modelLogos.map((url) => {
      return new Promise((resolve, reject) => {
        const img = new window.Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = url;
      });
    });

    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch(() => setImagesLoaded(true));
  }, [modelKeys]);

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

  // Sort model keys by current value (descending)
  const sortedModelKeys = [...modelKeys].sort((a, b) => {
    const aValue =
      typeof lastPoint[a] === "number" ? (lastPoint[a] as number) : 0;
    const bValue =
      typeof lastPoint[b] === "number" ? (lastPoint[b] as number) : 0;
    return bValue - aValue;
  });

  return (
    <div className="border-t px-6 py-4">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6">
        {sortedModelKeys.map((key) => {
          const modelInfo = getModelInfo(key);
          const color =
            modelInfo?.color ||
            chartConfig[key]?.color ||
            "hsl(var(--chart-1))";
          const label = modelInfo?.label || chartConfig[key]?.label || key;
          const logo = modelInfo?.logo;
          const value =
            typeof lastPoint[key] === "number"
              ? (lastPoint[key] as number)
              : undefined;
          const isHovered = hoveredLine === key;
          const isDimmed = hoveredLine && hoveredLine !== key;

          return (
            <div
              className="flex flex-col items-center justify-center rounded-md border px-3 py-2 text-sm transition-all cursor-pointer"
              key={key}
              onMouseEnter={() => onHoverLine(key)}
              onMouseLeave={() => onHoverLine(null)}
              style={{
                borderColor: isHovered ? color : "hsl(var(--border))",
                borderWidth: isHovered ? "2px" : "1px",
                transform: isHovered ? "scale(1.05)" : "scale(1)",
              }}
            >
              <div className="flex items-center gap-2" style={{ opacity: isDimmed ? 0.4 : 1 }}>
                {logo ? (
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      backgroundColor: color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src={logo}
                      alt={String(label)}
                      width={16}
                      height={16}
                      style={{objectFit:"contain", display: imagesLoaded ? "block" : "none" }}
                      unoptimized
                    />
                  </div>
                ) : (
                  <span
                    aria-hidden
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                )}
                <span className="font-medium">{label}</span>
              </div>
              <span className="mt-1 text-xs tabular-nums text-muted-foreground" style={{ opacity: isDimmed ? 0.4 : 1 }}>
                {formatValue(value)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
