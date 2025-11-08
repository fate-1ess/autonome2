"use client";

import { useEffect, useMemo, useRef, useState, type UIEventHandler } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
  type ConversationHandle,
} from "@/components/ai-elements/conversation";
import { Message, MessageContent } from "@/components/ai-elements/message";
import { PromptInput } from "@/components/ai-elements/prompt-input";
import { Loader } from "@/components/ai-elements/loader";
import { Response } from "@/components/response";
import { SqlResultCard, type SqlResultPayload } from "@/components/ai/sql-result-card";

function ChatInterface() {
  const transport = useMemo(() => new DefaultChatTransport({ api: "/api/chat" }), []);
  const {
    messages,
    status,
    sendMessage,
    stop,
    error,
  } = useChat({ transport });

  const conversationRef = useRef<ConversationHandle>(null);
  const [isNearBottom, setIsNearBottom] = useState(true);
  const [draft, setDraft] = useState("");

  useEffect(() => {
    if (isNearBottom) {
      conversationRef.current?.scrollToBottom();
    }
  }, [messages, isNearBottom]);

  const handleScroll: UIEventHandler<HTMLDivElement> = (event) => {
    const node = event.currentTarget;
    const distanceToBottom = node.scrollHeight - node.scrollTop - node.clientHeight;
    setIsNearBottom(distanceToBottom < 160);
  };

  const handleSend = (value: string) => {
    sendMessage({ text: value });
    setDraft("");
    setIsNearBottom(true);
  };

  return (
    <div className="mx-auto flex h-full w-full max-w-6xl flex-col gap-6 px-4 py-6 md:px-6">
      <section className="flex flex-1 flex-col overflow-hidden rounded-3xl border bg-background/70 shadow-xl ring-1 ring-border/60 backdrop-blur supports-[backdrop-filter]:bg-background/55">
        <div className="border-b border-border/60 px-6 py-5">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-lg font-semibold tracking-tight">Autonome Research Console</h1>
              <p className="text-sm text-muted-foreground">
                Chat with your trading data, run ad-hoc SQL, and reference live portfolio telemetry in one place.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-2 rounded-full border border-dashed px-3 py-1">SQL insights</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-dashed px-3 py-1">Portfolio metrics</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-dashed px-3 py-1">Model summaries</span>
            </div>
          </div>
        </div>
        <Conversation
          ref={conversationRef}
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto px-5 pb-8 pt-6 md:px-8"
        >
          <ConversationContent className="gap-5 pb-32">
            {messages.length === 0 && (
              <div className="mx-auto w-full max-w-3xl rounded-2xl border border-dashed border-border/60 bg-muted/40 p-6 text-sm text-muted-foreground">
                <p className="font-medium text-foreground">Ask anything about your autonomous traders.</p>
                <ul className="mt-3 space-y-2 text-left">
                  <li className="flex gap-2"><span aria-hidden>•</span><span>“Summarize the most profitable model this week and include closed trade totals.”</span></li>
                  <li className="flex gap-2"><span aria-hidden>•</span><span>“Show average leverage and confidence by model for the past 20 invocations.”</span></li>
                  <li className="flex gap-2"><span aria-hidden>•</span><span>“What is the cumulative realized PnL across BTC trades in the simulator?”</span></li>
                </ul>
              </div>
            )}

            {messages.map((message) => (
              <Message key={message.id} from={message.role}>
                <MessageContent>
                  {message.parts.map((part, index) => {
                    const key = `${message.id}-${index}`;
                    if (part.type === "text") {
                      return (
                        <Response
                          key={key}
                          className="prose prose-sm max-w-none leading-relaxed dark:prose-invert"
                        >
                          {part.text}
                        </Response>
                      );
                    }
                    if (part.type === "reasoning") {
                      return (
                        <div
                          key={key}
                          className="rounded-lg border-l-4 border-primary/50 bg-muted/30 px-3 py-2 text-xs text-muted-foreground"
                        >
                          {part.text}
                        </div>
                      );
                    }
                    if (part.type === "source-url") {
                      return (
                        <a
                          key={key}
                          href={part.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-medium text-primary underline"
                        >
                          Source
                        </a>
                      );
                    }
                    if (part.type === "tool-queryPortfolioSql") {
                      return renderSqlToolPart(part, key);
                    }
                    return null;
                  })}
                </MessageContent>
              </Message>
            ))}

            {status === "submitted" && (
              <div className="flex justify-start text-muted-foreground">
                <Loader />
              </div>
            )}

            {error && (
              <div className="rounded-lg border border-destructive/50 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                {error.message}
              </div>
            )}
          </ConversationContent>
        </Conversation>
        {!isNearBottom && (
          <ConversationScrollButton
            onClick={() => {
              setIsNearBottom(true);
              conversationRef.current?.scrollToBottom();
            }}
            className="-mb-2"
          />
        )}
      </section>

      <PromptInput
        value={draft}
        onChange={setDraft}
        onSubmit={handleSend}
        onStop={status === "streaming" ? stop : undefined}
        isStreaming={status === "streaming"}
        className="rounded-2xl border border-border/70 bg-background/80 shadow-lg ring-1 ring-border/50 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      />
    </div>
  );
}

function renderSqlToolPart(
  part: {
    type: string;
    state?: string;
    errorText?: string;
    output?: unknown;
  },
  key: string,
) {
  if (part.state === "input-available" || part.state === "input-streaming" || part.state === "output-progress") {
    return (
      <div key={key} className="rounded-lg border border-dashed bg-muted/30 p-4 text-sm text-muted-foreground">
        Running portfolio query…
      </div>
    );
  }

  if (part.state === "output-error") {
    return (
      <div key={key} className="rounded-lg border border-destructive bg-destructive/10 p-4 text-sm text-destructive">
        {part.errorText ?? "The SQL tool failed."}
      </div>
    );
  }

  if (part.state === "output-available" && isSqlPayload(part.output)) {
    return <SqlResultCard key={key} payload={part.output} />;
  }

  return null;
}

function isSqlPayload(payload: unknown): payload is SqlResultPayload {
  if (!payload || typeof payload !== "object") {
    return false;
  }
  const candidate = payload as Record<string, unknown>;
  return typeof candidate.sql === "string" && Array.isArray(candidate.rows);
}

export default function AIPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="mx-auto flex w-full items-center justify-center p-4 text-muted-foreground">
        Loading chat...
      </div>
    );
  }

  return <ChatInterface />;
}
