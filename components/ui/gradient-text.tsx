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
    default:
      "bg-gradient-to-b from-white/90 via-white/50 to-white/10",
    blue: "bg-gradient-to-b from-white/90 via-white/50 to-white/10",
    purple: "bg-gradient-to-b from-white/90 via-white/50 to-white/10",
    animated:
      "bg-gradient-to-b from-white/90 via-white/50 to-white/10",
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
