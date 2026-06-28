"use client"

import { Search, Target, Settings, Trophy, Rocket } from "lucide-react"
import { motion, useInView, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import { GradientText } from "@/components/ui/gradient-text"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionTransition } from "@/components/ui/section-transition"

const processSteps = [
  {
    title: "Understand",
    description: "I dig into your business goals, user needs, and constraints before writing a single line of code.",
    icon: Search,
    step: "01",
  },
  {
    title: "Architect",
    description: "I design a clean, scalable system architecture — component boundaries, data models, and API contracts first.",
    icon: Target,
    step: "02",
  },
  {
    title: "Build",
    description: "Incremental delivery with clean code, comprehensive testing, and early feedback loops at every stage.",
    icon: Settings,
    step: "03",
  },
  {
    title: "Ship",
    description: "Rigorous QA, performance optimization, and production deployment with monitoring from day one.",
    icon: Rocket,
    step: "04",
  },
  {
    title: "Iterate",
    description: "Post-launch support, feature extensions, and strategic guidance as your product evolves.",
    icon: Trophy,
    step: "05",
  },
]

export function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const reduce = useReducedMotion()
  const lineWidth = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"])
  const orb1Y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [60, -60])
  const orb2Y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-40, 50])

  return (
    <section
      className="section-padding bg-bg-secondary overflow-hidden relative"
      ref={ref}
      id="process"
    >
      <motion.div style={{ y: orb1Y }} className="pointer-events-none absolute top-0 left-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl will-change-transform" />
      <motion.div style={{ y: orb2Y }} className="pointer-events-none absolute bottom-0 right-1/4 w-80 h-80 bg-accent-purple/5 rounded-full blur-3xl will-change-transform" />
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block font-mono text-xs uppercase tracking-widest text-accent-cyan mb-4">
            How I Work
          </span>
          <h2 className="text-headline mb-6">
            My <GradientText variant="blue">Approach</GradientText>
          </h2>
          <p className="text-body">
            From first conversation to production deployment — a deliberate, transparent process that delivers software worth using.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Progress Line */}
          <div className="absolute top-[60px] left-0 right-0 h-[2px] bg-border-subtle">
            <motion.div
              className="h-full bg-linear-to-r from-accent-blue via-accent-cyan to-accent-purple"
              style={{ width: lineWidth }}
            />
          </div>

          {/* Steps */}
          <div className="grid grid-cols-5 gap-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  {/* Step Number Badge */}
                  <div className="relative z-10 w-[120px] h-[120px] mx-auto mb-6">
                    <motion.div
                      className="absolute inset-0 rounded-full bg-bg-primary border-2 border-border-visible flex items-center justify-center"
                      whileHover={{ 
                        scale: 1.1,
                        borderColor: "var(--accent-cyan)",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-center">
                        <span className="font-mono text-xs text-accent-cyan tracking-wider">STEP</span>
                        <div className="font-mono text-3xl font-bold text-text-primary">{step.step}</div>
                      </div>
                    </motion.div>
                    
                    {/* Glow on hover */}
                    <div className="absolute inset-0 rounded-full bg-accent-cyan/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-bg-tertiary mb-3">
                      <Icon className="w-5 h-5 text-accent-cyan" />
                    </div>
                    <h3 className="font-heading font-semibold text-text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-6">
          {processSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                className="relative flex gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                {/* Left - Step Number & Line */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-bg-primary border-2 border-accent-cyan flex items-center justify-center shrink-0">
                    <span className="font-mono text-lg font-bold text-accent-cyan">{step.step}</span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="w-[2px] flex-1 bg-linear-to-b from-accent-cyan to-transparent my-2" />
                  )}
                </div>

                {/* Right - Content */}
                <div className="flex-1 pb-6">
                  <div className="bg-bg-tertiary rounded-xl p-5 border border-border-subtle">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="w-5 h-5 text-accent-cyan" />
                      <h3 className="font-heading font-semibold text-text-primary">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link href="/contact">
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Work With Me
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Smooth transition gradient overlay to next section (Cream) */}
      <SectionTransition fromColor="#18181b" toColor="#f5f3ee" height="h-32" />
    </section>
  )
}
