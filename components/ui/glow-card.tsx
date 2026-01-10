"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface GlowCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: "blue" | "cyan" | "purple"
  hover?: boolean
}

export function GlowCard({
  children,
  className,
  glowColor = "blue",
  hover = true,
}: GlowCardProps) {
  const glowColors = {
    blue: "from-accent-blue/20 via-accent-cyan/20 to-accent-blue/20",
    cyan: "from-accent-cyan/20 via-accent-blue/20 to-accent-cyan/20",
    purple: "from-accent-purple/20 via-accent-cyan/20 to-accent-purple/20",
  }

  return (
    <motion.div
      className={cn("relative group", className)}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Glow effect */}
      <div
        className={cn(
          "absolute -inset-px rounded-xl opacity-0 blur-xl transition-opacity duration-500",
          hover && "group-hover:opacity-100",
          `bg-gradient-to-r ${glowColors[glowColor]}`
        )}
      />

      {/* Border gradient */}
      <div
        className={cn(
          "absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300",
          hover && "group-hover:opacity-100",
          "bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple p-[1px]"
        )}
      >
        <div className="h-full w-full rounded-xl bg-bg-secondary" />
      </div>

      {/* Content */}
      <div
        className={cn(
          "relative rounded-xl bg-bg-secondary border border-border-subtle",
          hover && "group-hover:border-transparent",
          "transition-colors duration-300"
        )}
      >
        {children}
      </div>
    </motion.div>
  )
}
