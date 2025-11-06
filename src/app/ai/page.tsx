"use client";

import { useMemo, useEffect, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { Send } from "lucide-react";
import { Response } from "@/components/response";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function ChatInterface() {
  const [input, setInput] = useState("");
  const [generation, setGeneration] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const transport = useMemo(
    () =>
      new DefaultChatTransport({
        api: "/api/nvidia",
      }),
    [],
  );

  const { messages, sendMessage } = useChat({
    transport,
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages.length]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) {
      return;
    }
    sendMessage({ text });
    setInput("");
  };

  const handleGenerate = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: input || "Messages during finals week.",
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const json = await response.json().catch(() => ({}));
      setGeneration(json?.notifications ?? json);
    } catch (error) {
      console.error("Failed to generate AI response", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto grid w-full grid-rows-[1fr_auto] overflow-hidden p-4">
      <div className="space-y-4 overflow-y-auto pb-4">
        {messages.length === 0 ? (
          <div className="mt-8 text-center text-muted-foreground">
            Ask me anything to get started!
          </div>
        ) : (
          messages.map((message) => (
            <div
              className={`rounded-lg p-3 ${
                message.role === "user"
                  ? "ml-8 bg-primary/10"
                  : "mr-8 bg-secondary/20"
              }`}
              key={message.id}
            >
              <p className="mb-1 font-semibold text-sm">
                {message.role === "user" ? "You" : "AI Assistant"}
              </p>
              {message.parts?.map((part, partIndex) => {
                if (part.type === "text") {
                  return (
                    <div key={`part-${partIndex}`}>
                      <Response>{part.text}</Response>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          ))
        )}

        {generation && (
          <div className="mr-8 rounded-lg bg-secondary/20 p-3">
            <p className="mb-1 font-semibold text-sm">Generated Result</p>
            <pre className="whitespace-pre-wrap font-sans text-sm">
              {JSON.stringify(generation, null, 2)}
            </pre>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <form
        className="flex w-full items-center space-x-2 border-t pt-2"
        onSubmit={handleSubmit}
      >
        <Input
          autoComplete="off"
          autoFocus
          className="flex-1"
          disabled={isLoading}
          name="message"
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          value={input}
        />
        <Button disabled={isLoading} size="icon" type="submit">
          <Send size={18} />
        </Button>
        <Button
          disabled={isLoading}
          onClick={handleGenerate}
          type="button"
          variant="secondary"
        >
          {isLoading ? "Loading..." : "Generate"}
        </Button>
      </form>
    </div>
  );
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
