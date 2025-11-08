"use client";

import { forwardRef, useImperativeHandle, useRef, type ReactNode, type UIEvent } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/shared/utils/classNames";

export interface ConversationHandle {
  scrollToBottom: () => void;
}

export const Conversation = forwardRef<
  ConversationHandle,
  { className?: string; children: ReactNode; onScroll?: (event: UIEvent<HTMLDivElement>) => void }
>(
  ({ className, children, onScroll }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
      scrollToBottom: () => {
        const node = containerRef.current;
        if (node) {
          node.scrollTo({ top: node.scrollHeight, behavior: "smooth" });
        }
      },
    }));

    return (
      <div ref={containerRef} onScroll={onScroll} className={cn("flex-1 overflow-y-auto", className)}>
        {children}
      </div>
    );
  },
);
Conversation.displayName = "Conversation";

export function ConversationContent({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("flex flex-col gap-4 pb-28", className)}>{children}</div>;
}

export function ConversationScrollButton({
  onClick,
  className,
}: {
  onClick: () => void;
  className?: string;
}) {
  return (
    <div className={cn("pointer-events-none sticky bottom-4 flex justify-center", className)}>
      <Button
        type="button"
        variant="secondary"
        size="sm"
        className="pointer-events-auto shadow"
        onClick={onClick}
      >
        Scroll to bottom
      </Button>
    </div>
  );
}
