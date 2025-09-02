import type * as React from "react"
import { useRef } from "react"

export function useEnterSubmit() {
  const formRef = useRef<HTMLFormElement>(null)
  const onKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (
      event.key === "Enter" &&
      !event.shiftKey &&
      !event.nativeEvent.isComposing
    ) {
      formRef.current?.requestSubmit()
      event.preventDefault()
    }
  }

  return { formRef, onKeyDown }
}