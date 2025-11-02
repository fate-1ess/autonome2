"use client"
import { useState } from "react";
import CryptoTracker from "@/components/crypto-tracker";
import Header from "@/components/header";
import PerformanceGraph from "@/components/performance-graph";
import TradesSidebar from "@/components/trades-sidebar";
import { LightRays } from "@/components/ui/light-rays";

export default function HomePage() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <LightRays />
      <Header
        isSidebarExpanded={isSidebarExpanded}
        onToggleSidebar={() => setIsSidebarExpanded(!isSidebarExpanded)}
      />
      <div className="relative flex min-h-0 flex-1">
        <div className="flex min-h-0 flex-1 flex-col">
          <CryptoTracker />
          <div className="min-h-0 flex-1">
            <PerformanceGraph />
          </div>
        </div>
        <TradesSidebar
          isExpanded={isSidebarExpanded}
          onToggle={() => setIsSidebarExpanded(!isSidebarExpanded)}
        />
      </div>
    </div>
  );
}
