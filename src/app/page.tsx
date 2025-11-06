"use client";

import CryptoTracker from "@/components/crypto-tracker";
import Header from "@/components/header";
import PerformanceGraph from "@/components/performance-graph";
import TradesSidebar, { TRADES_SIDEBAR_COLLAPSED_WIDTH } from "@/components/trades-sidebar";
import { LightRays } from "@/components/ui/light-rays";
import { useBoolean } from "@/hooks/useBoolean";

export default function HomePage() {
  const { value: isSidebarExpanded, toggle: toggleSidebar } = useBoolean(false);
  const sidebarOffset = `${TRADES_SIDEBAR_COLLAPSED_WIDTH}px`;
  const contentWidth = `clamp(0px, calc(100% - ${sidebarOffset}), 100%)`;

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <LightRays />
      <Header
        isSidebarExpanded={isSidebarExpanded}
        onToggleSidebar={toggleSidebar}
      />
      <div className="relative flex min-h-0 flex-1">
        <div
          className="flex min-h-0 flex-1 flex-col"
          style={{ width: contentWidth, maxWidth: contentWidth }}
        >
          <CryptoTracker />
          <div className="min-h-0 flex-1">
            <PerformanceGraph />
          </div>
        </div>
        <TradesSidebar
          isExpanded={isSidebarExpanded}
          onToggle={toggleSidebar}
        />
      </div>
    </div>
  );
}
