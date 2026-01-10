"use client"

import { useEffect, useRef, useState } from "react"
import { useInView, motion, useSpring, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedCounterProps {
  value: number | string
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
  labelClassName?: string
  label?: string
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  className,
  labelClassName,
  label,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Handle string values like "24/7" or "99.9%"
  if (typeof value === "string") {
    return (
      <div ref={ref} className="text-center">
        <motion.div
          className={cn("font-mono text-4xl lg:text-5xl font-bold text-text-primary", className)}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {prefix}
          {value}
          {suffix}
        </motion.div>
        {label && (
          <motion.div
            className={cn("font-mono text-xs uppercase tracking-widest text-text-muted mt-2", labelClassName)}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {label}
          </motion.div>
        )}
      </div>
    )
  }

  // Animated number counter
  const spring = useSpring(0, { duration: duration * 1000 })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      spring.set(value)
    }
  }, [isInView, spring, value])

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      setDisplayValue(Math.round(latest * 10) / 10)
    })
    return unsubscribe
  }, [spring])

  return (
    <div ref={ref} className="text-center">
      <motion.div
        className={cn("font-mono text-4xl lg:text-5xl font-bold text-text-primary", className)}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {prefix}
        {displayValue % 1 === 0 ? Math.round(displayValue) : displayValue.toFixed(1)}
        {suffix}
      </motion.div>
      {label && (
        <motion.div
          className={cn("font-mono text-xs uppercase tracking-widest text-text-muted mt-2", labelClassName)}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {label}
        </motion.div>
      )}
    </div>
  )
}
