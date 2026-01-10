"use client"

import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import { GradientText } from "@/components/ui/gradient-text"
import Link from "next/link"
import Image from "next/image"

// Progress bar data - capabilities that solve client problems
const capabilities = [
  {
    label: "Website & Business Growth",
    percentage: 95,
    description: "Websites that convert visitors into customers",
  },
  {
    label: "Creativity & Innovation",
    percentage: 88,
    description: "Fresh designs that stand out from competition",
  },
  {
    label: "Technical Excellence",
    percentage: 92,
    description: "Reliable, scalable solutions built to last",
  },
  {
    label: "Client Satisfaction",
    percentage: 97,
    description: "Results that exceed expectations",
  },
]

// Stats data
const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 200, suffix: "+", label: "Hours Saved" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 3, suffix: "+", label: "Years Experience" },
]

// Animated counter hook
function useCounter(end: number, duration: number = 2000, shouldStart: boolean = false) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    if (!shouldStart) return
    
    let startTime: number | null = null
    let animationFrame: number
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * end))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }
    
    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, shouldStart])
  
  return count
}

// Progress Bar Component
function ProgressBar({ 
  capability, 
  index, 
  isInView 
}: { 
  capability: typeof capabilities[0]
  index: number
  isInView: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-text-primary font-medium text-sm">
          {capability.label}
        </span>
        <span className="font-mono text-accent-cyan text-sm font-semibold">
          {capability.percentage}%
        </span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent-cyan to-accent-blue"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${capability.percentage}%` } : {}}
          transition={{ 
            duration: 1.2, 
            delay: 0.4 + index * 0.15,
            ease: [0.25, 0.46, 0.45, 0.94] 
          }}
        />
      </div>
    </motion.div>
  )
}

// Stat Card Component
function StatCard({ 
  stat, 
  index, 
  isInView 
}: { 
  stat: typeof stats[0]
  index: number
  isInView: boolean
}) {
  const count = useCounter(stat.value, 2000, isInView)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
      className="text-center"
    >
      <div className="font-mono text-4xl lg:text-5xl font-bold text-white mb-1">
        {count}{stat.suffix}
      </div>
      <div className="text-text-muted text-sm uppercase tracking-wider">
        {stat.label}
      </div>
    </motion.div>
  )
}

export function ProblemSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  
  const isContentInView = useInView(contentRef, { once: true, margin: "-100px" })
  const isStatsInView = useInView(statsRef, { once: true, margin: "-50px" })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Subtle parallax for images
  const imageY1 = useTransform(scrollYProgress, [0, 1], [40, -40])
  const imageY2 = useTransform(scrollYProgress, [0, 1], [60, -60])
  const springY1 = useSpring(imageY1, { stiffness: 100, damping: 30 })
  const springY2 = useSpring(imageY2, { stiffness: 100, damping: 30 })

  // Content fade and slide
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const contentY = useTransform(scrollYProgress, [0, 0.3], [60, 0])
  const springContentY = useSpring(contentY, { stiffness: 100, damping: 30 })

  return (
    <section 
      className="section-padding bg-bg-primary relative overflow-hidden" 
      ref={containerRef}
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left Side - Images */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              {/* First Image */}
              <motion.div 
                style={{ y: springY1 }}
                className="relative"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src="/about.png"
                    alt="Team collaboration"
                    fill
                    className="object-cover transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 to-transparent" />
                </div>
              </motion.div>
              
              {/* Second Image - offset */}
              <motion.div 
                style={{ y: springY2 }}
                className="relative mt-8"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src="/strategy.jpg"
                    alt="Strategic planning"
                    fill
                    className="object-cover transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 to-transparent" />
                </div>
              </motion.div>
            </div>

            {/* Decorative badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:-right-6"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent-cyan to-accent-blue flex items-center justify-center shadow-lg shadow-accent-cyan/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">3+</div>
                  <div className="text-[10px] uppercase tracking-wider text-white/80">Years</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Content */}
          <motion.div 
            ref={contentRef}
            style={{ opacity: contentOpacity, y: springContentY }}
            className="order-1 lg:order-2"
          >
            {/* Badge */}
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block font-mono text-xs uppercase tracking-widest text-accent-cyan mb-4 px-3 py-1 rounded-full border border-accent-cyan/30 bg-accent-cyan/5"
            >
              Challenges We Solve
            </motion.span>

            {/* Headline */}
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-headline mb-6"
            >
              Turning Digital Challenges Into{" "}
              <GradientText variant="blue">Business Growth</GradientText>
            </motion.h2>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-body mb-8"
            >
              We understand the frustrations of outdated websites, slow systems, and missed opportunities. 
              Our team transforms these pain points into competitive advantages—delivering solutions that 
              attract customers, save time, and drive real results.
            </motion.p>

            {/* Progress Bars */}
            <div className="space-y-5 mb-8">
              {capabilities.map((capability, index) => (
                <ProgressBar 
                  key={capability.label}
                  capability={capability}
                  index={index}
                  isInView={isContentInView}
                />
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link href="/contact">
                <motion.button
                  className="btn-primary"
                  whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(34, 211, 238, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Let's Solve Your Challenges
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <div 
          ref={statsRef}
          className="relative"
        >
          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-border-visible to-transparent mb-12" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <StatCard 
                key={stat.label}
                stat={stat}
                index={index}
                isInView={isStatsInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
