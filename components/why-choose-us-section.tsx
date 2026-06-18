"use client"

import { Shield, Zap, Users, Headphones } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GradientText } from "@/components/ui/gradient-text"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { GlowCard } from "@/components/ui/glow-card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionTransition } from "@/components/ui/section-transition"

const metrics = [
  { value: "99.9", suffix: "%", label: "Uptime SLA" },
  { value: "10", suffix: "x", label: "Performance" },
  { value: "3", suffix: "x", label: "Avg ROI" },
  { value: "24/7", suffix: "", label: "Support" },
]

const differentiators = [
  {
    icon: Shield,
    title: "Security-First Approach",
    description: "Every solution prioritizes data protection and compliance, giving you peace of mind.",
  },
  {
    icon: Zap,
    title: "Built for Scale",
    description: "Our solutions grow with your business, adapting to serve 100 or 100,000 customers.",
  },
  {
    icon: Users,
    title: "Business-First Mindset",
    description: "We solve business problems. Every decision is made with your ROI in mind.",
  },
  {
    icon: Headphones,
    title: "Ongoing Partnership",
    description: "Continuous support, optimization, and strategic guidance long after launch.",
  },
]

export function WhyChooseUsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="section-padding section-light relative" id="why" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block font-mono text-xs uppercase tracking-widest text-accent-cyan mb-4">
            Why Velion Consulting
          </span>
          <h2 className="text-headline mb-6">
            Built <GradientText variant="blue">Different</GradientText>
          </h2>
          <p className="text-body">
            We're not just another agency. We're your strategic technology partner, 
            committed to your long-term success.
          </p>
        </motion.div>

        {/* Metrics Row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-xl bg-bg-secondary border border-border-subtle"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            >
              <AnimatedCounter
                value={metric.value}
                suffix={metric.suffix}
                label={metric.label}
                duration={2}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-linear-to-r from-transparent via-border-visible to-transparent mb-16" />

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
          {differentiators.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <GlowCard>
                  <div className="p-6 lg:p-8 flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-accent-blue to-accent-cyan flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-text-primary mb-2">
                        {item.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-bg-secondary rounded-2xl border border-border-subtle p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading font-semibold text-xl text-text-primary mb-1">
                Ready to get started?
              </h3>
              <p className="text-text-secondary">
                Let's discuss your project requirements.
              </p>
            </div>
            <Link href="#contact">
              <motion.button
                className="btn-primary whitespace-nowrap"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule a Call
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Smooth transition gradient overlay to next section (Navy) */}
      <SectionTransition fromColor="#f5f3ee" toColor="#1B2A41" height="h-32" />
    </section>
  )
}
