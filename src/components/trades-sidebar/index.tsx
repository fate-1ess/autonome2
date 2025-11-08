"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { getModelInfo } from "@/shared/models/modelConfig";
import { ExitPlanDialog } from "./exit-plan-dialog";
import { ModelChatTab } from "./model-chat-tab";
import { ModelFilterMenu } from "./model-filter-menu";
import { PositionsTab } from "./positions-tab";
import { SidebarTabs, type ActiveTab } from "./sidebar-tabs";
import { TradesTab } from "./trades-tab";
import { useTradingDashboardData } from "./use-trading-dashboard-data";
import type { ExitPlanSelection, ModelOption } from "./types";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(CustomEase);
  CustomEase.create(
    "hop",
    "M0,0 C0.091,0.543 0.148,0.662 0.277,0.786 0.405,0.909 0.596,0.979 1,1 "
  );
}

export const TRADES_SIDEBAR_COLLAPSED_WIDTH = 384; // px
const COLLAPSED_WIDTH = `${TRADES_SIDEBAR_COLLAPSED_WIDTH}px`;
const EXPANDED_WIDTH = "100vw";

type TradesSidebarProps = {
  isExpanded: boolean;
  onToggle?: () => void;
};

type FilterValue = "all" | string;

export default function TradesSidebar({ isExpanded }: TradesSidebarProps) {
  const [filter, setFilter] = useState<FilterValue>("all");
  const [activeTab, setActiveTab] = useState<ActiveTab>("trades");
  const [selectedExitPlan, setSelectedExitPlan] = useState<ExitPlanSelection | null>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);
  const firstRender = useRef(true);

  const { trades, conversations, positions, modelOptions, loading } = useTradingDashboardData();

  // GSAP animation effect
  useEffect(() => {
    const element = sidebarRef.current;
    if (!element) return;

    if (firstRender.current) {
      firstRender.current = false;
      gsap.set(element, { width: isExpanded ? EXPANDED_WIDTH : COLLAPSED_WIDTH });
      return;
    }

    isAnimating.current = true;

    gsap.killTweensOf(element);

    gsap.to(element, {
      width: isExpanded ? EXPANDED_WIDTH : COLLAPSED_WIDTH,
      duration: 1,
      ease: "hop",
      onComplete: () => {
        isAnimating.current = false;
      },
    });
  }, [isExpanded]);

  const filteredTrades = useMemo(() => {
    if (filter === "all") return trades;
    return trades.filter((trade) => trade.modelKey === filter);
  }, [filter, trades]);

  const filteredConversations = useMemo(() => {
    if (filter === "all") return conversations;
    return conversations.filter((conversation) => (conversation.modelLogo || conversation.modelName) === filter);
  }, [conversations, filter]);

  const filteredPositions = useMemo(() => {
    if (filter === "all") return positions;
    return positions.filter((positionGroup) => (positionGroup.modelLogo || positionGroup.modelName) === filter);
  }, [filter, positions]);

  const modelOptionsLookup = useMemo(() => {
    const lookup = new Map<string, ModelOption>();
    modelOptions.forEach((option) => lookup.set(option.id, option));
    return lookup;
  }, [modelOptions]);

  const selectedModelLabel = filter === "all"
    ? "All Models"
    : modelOptionsLookup.get(filter)?.label ?? getModelInfo(filter).label;

  const isInitialLoading = loading && modelOptions.length === 0;

  const renderFilterMenu = (metaLabel?: string) => (
    <ModelFilterMenu
      selectedLabel={selectedModelLabel}
      filter={filter}
      onFilterChange={setFilter}
      options={modelOptions}
      metaLabel={metaLabel}
      isLoading={isInitialLoading}
    />
  );

  return (
    <div
      ref={sidebarRef}
      className="flex h-full min-h-0 flex-col border-l bg-background"
      style={{
        position: "absolute",
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: 50,
        backgroundColor: "hsl(var(--background))",
      }}
    >
      <SidebarTabs activeTab={activeTab} onChange={setActiveTab} />

      {activeTab === "trades" ? (
        <TradesTab
          trades={filteredTrades}
          loading={loading}
          filterMenu={renderFilterMenu("Showing Last 400 Trades")}
        />
      ) : null}

      {activeTab === "modelchat" ? (
        <ModelChatTab
          conversations={filteredConversations}
          loading={loading}
          filterMenu={renderFilterMenu()}
        />
      ) : null}

      {activeTab === "positions" ? (
        <PositionsTab
          positions={filteredPositions}
          loading={loading}
          filterMenu={renderFilterMenu()}
          onSelectExitPlan={setSelectedExitPlan}
        />
      ) : null}

      <ExitPlanDialog selection={selectedExitPlan} onClose={() => setSelectedExitPlan(null)} />
    </div>
  );
}
