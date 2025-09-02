"use client"
import React, { useRef, useEffect } from "react";
import {
  type ChatRequestOptions,
  type Message,
  type UseChatHelpers,
} from "@ai-sdk/react"
import {
  Bot,
  CornerDownLeft,
  Loader2,
  MoreHorizontal,
  PlusCircle,
  Trash,
  User,
} from "lucide-react"
import { useState } from "react"
import Textarea from "react-textarea-autosize"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { useEnterSubmit } from "@/lib/hooks/use-enter-submit"
import { cn } from "@/lib/utils"
import { BorderBeam } from "@/components/magicui/border-beam"; // Import BorderBeam

export interface ChatProps
  extends Pick<
  UseChatHelpers,
  | "messages"
  | "input"
  | "isLoading"
  | "handleInputChange"
  | "handleSubmit"
  | "stop"
  | "setMessages"
  > {
  suggestions?: string[]
  isLoading: boolean
  isGenerating: boolean
  append: (
    message: Omit<Message, "id"> | ChatRequestOptions,
  ) => Promise<string | null | undefined>
}

export function Chat({
  messages,
  input,
  isLoading,
  handleInputChange,
  handleSubmit,
  stop,
  setMessages,
  suggestions,
  append,
  isGenerating,
}: ChatProps) {
  const { formRef, onKeyDown } = useEnterSubmit()
  const inputRef = React.useRef<HTMLTextAreaElement>(null)

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <div className="flex size-full flex-col">
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.length === 0 && (
            <div className="flex h-full items-center justify-center text-center text-muted-foreground">
              <p>Start a conversation to see responses here.</p>
            </div>
          )}
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex items-start gap-4 ${
                m.role === "user" ? "justify-end" : ""
                }`}
            >
              {m.role === "assistant" && (
                <div className="flex size-8 shrink-0 select-none items-center justify-center rounded-md border bg-primary text-primary-foreground shadow">
                  <Bot className="size-4" />
                </div>
              )}
              <div className="flex-1 overflow-hidden">
                <div className="flex items-center gap-2">
                  <p className="font-medium text-sm">
                    {m.role === "user" ? "You" : "AI Assistant"}
                  </p>
                </div>
                <div
                  className={`prose dark:prose-invert rounded-lg p-3 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                    }`}
                >
                  {m.content}
                </div>
              </div>
              {m.role === "user" && (
                <div className="flex size-8 shrink-0 select-none items-center justify-center rounded-md border bg-background shadow">
                  <User className="size-4" />
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="flex flex-col items-center justify-center p-4">
        {isGenerating && (
          <Button variant="outline" onClick={stop} className="mb-4">
            <Loader2 className="mr-2 size-4 animate-spin" />
            Stop generating
          </Button>
        )}
        <div
          className={cn(
            "relative w-full overflow-hidden rounded-lg border bg-background shadow-lg",
            isLoading && "dark:bg-zinc-900",
          )}
        >
          {/* We wrap the form inside a new relative div to contain the BorderBeam */}
          <div className="relative w-full overflow-hidden rounded-lg">
            <form onSubmit={handleSubmit} className="flex items-center">
              <Textarea
                ref={inputRef}
                tabIndex={0}
                onKeyDown={onKeyDown}
                rows={1}
                value={input}
                onChange={handleInputChange}
                placeholder="Send a message."
                spellCheck={false}
                style={{ resize: "none" }}
                className="max-h-[60px] w-full bg-transparent px-4 py-[1.3rem] focus-within:outline-none sm:text-sm"
              />
              <div className="absolute right-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size="icon"
                      type="submit"
                      disabled={isLoading || input === ""}
                    >
                      <CornerDownLeft className="size-4" />
                    </Button>
                  </TooltipTrigger>
                </Tooltip>
              </div>
            </form>
            {/* The BorderBeam component is placed here */}
            <BorderBeam />
          </div>
        </div>
      </div>
    </div>
  )
}