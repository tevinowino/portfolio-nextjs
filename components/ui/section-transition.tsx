import React from "react"
import { cn } from "@/lib/utils"

interface SectionTransitionProps {
  fromColor: string // e.g. "#1B2A41", "#f5f3ee", "#18181b"
  toColor: string   // e.g. "#1B2A41", "#f5f3ee", "#18181b"
  height?: string   // Tailwind height class (e.g. "h-24", "h-32", "h-40")
  position?: "top" | "bottom"
  className?: string
}

/**
 * A reusable component to handle smooth gradient transitions between sections.
 * Positioned absolutely with a negative z-index so it stays below all interactive elements.
 */
export function SectionTransition({
  fromColor,
  toColor,
  height = "h-32",
  position = "bottom",
  className,
}: SectionTransitionProps) {
  const direction = position === "bottom" ? "to bottom" : "to top"

  return (
    <div
      className={cn(
        "absolute left-0 right-0 pointer-events-none -z-10",
        position === "bottom" ? "bottom-0" : "top-0",
        height,
        className
      )}
      style={{
        background: `linear-gradient(${direction}, ${fromColor} 0%, ${toColor} 100%)`,
      }}
    />
  )
}
