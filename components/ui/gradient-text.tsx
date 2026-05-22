"use client"

import { cn } from "@/lib/utils"

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "blue" | "purple" | "animated"
}

export function GradientText({
  children,
  className,
  variant = "default",
}: GradientTextProps) {
  const variants = {
    // Dark-section-only: white fade for hero / dark backgrounds
    default: "bg-gradient-to-b from-white/90 via-white/50 to-white/10",
    animated: "bg-gradient-to-b from-white/90 via-white/50 to-white/10",
    // Works on both dark and light — uses overrideable CSS variables
    blue: "bg-gradient-to-r from-accent-blue to-accent-cyan",
    purple: "bg-gradient-to-r from-accent-purple to-accent-cyan",
  }

  return (
    <span
      className={cn(
        "bg-clip-text text-transparent",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
