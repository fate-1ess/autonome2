"use client";

import { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/shared/utils/classNames";

export function PromptInput({
  value,
  onChange,
  onSubmit,
  onStop,
  isStreaming = false,
  placeholder,
  className,
}: {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
  onStop?: () => void;
  isStreaming?: boolean;
  placeholder?: string;
  className?: string;
}) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    onSubmit(trimmed);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("grid gap-2 rounded-xl border bg-card p-4 shadow-sm", className)}
    >
      <Textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder ?? "Ask anything about your trading data..."}
        className="min-h-[96px] resize-none"
      />
      <div className="flex items-center justify-end gap-2">
        {isStreaming && (
          <Button type="button" variant="outline" onClick={onStop} size="sm">
            Stop
          </Button>
        )}
        <Button type="submit" disabled={!value.trim()} size="sm">
          Send
        </Button>
      </div>
    </form>
  );
}
