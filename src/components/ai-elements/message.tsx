"use client";

import type { ReactNode } from "react";
import { cn } from "@/shared/utils/classNames";

export function Message({
  from,
  children,
  className,
}: {
  from: "user" | "assistant" | "system";
  children: ReactNode;
  className?: string;
}) {
  const isUser = from === "user";
  return (
    <div className={cn("flex", isUser ? "justify-end" : "justify-start")}> 
      <div
        className={cn(
          "max-w-[min(90%,46rem)] rounded-2xl border px-5 py-4 text-sm leading-relaxed shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/80 transition-colors",
          isUser
            ? "border-primary/40 bg-primary/90 text-primary-foreground"
            : "border-border/60 bg-card/80 text-foreground",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}

export function MessageContent({ children }: { children: ReactNode }) {
  return <div className="space-y-4">{children}</div>;
}
