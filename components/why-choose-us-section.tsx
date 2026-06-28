"use client"

import { motion, useInView, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import { GradientText } from "@/components/ui/gradient-text"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionTransition } from "@/components/ui/section-transition"

const metrics = [
  { value: "3", suffix: "+", label: "Years Building" },
  { value: "10", suffix: "+", label: "Projects Shipped" },
  { value: "4", suffix: "", label: "Client Projects" },
  { value: "500", suffix: "+", label: "End Users Reached" },
]

const differentiators = [
  {
    title: "Production-Grade Code",
    description: "I write software built to last — performant, secure, and maintainable. No shortcuts that become your team's problem six months later.",
  },
  {
    title: "Full-Stack Ownership",
    description: "Frontend to backend, mobile to cloud — I own the entire delivery cycle, reducing coordination overhead and shipping faster.",
  },
  {
    title: "Africa-Context Engineering",
    description: "I build for real constraints: low bandwidth, mobile-first users, and local payment systems — expertise that's hard to find in a generalist hire.",
  },
  {
    title: "Collaborative by Default",
    description: "I document, communicate early, and treat code review as a knowledge-sharing exercise. I make the teams I join better.",
  },
]

export function WhyChooseUsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const orb1Y = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [50, -50])
  const orb2Y = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [-30, 60])

  return (
    <section className="section-padding section-light relative overflow-hidden" id="why" ref={ref}>
      <motion.div style={{ y: orb1Y }} className="pointer-events-none absolute top-0 right-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl will-change-transform" />
      <motion.div style={{ y: orb2Y }} className="pointer-events-none absolute bottom-0 left-1/4 w-80 h-80 bg-accent-cyan/5 rounded-full blur-3xl will-change-transform" />
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block font-mono text-xs uppercase tracking-widest text-accent-cyan mb-4">
            What I Bring
          </span>
          <h2 className="text-headline mb-6">
            Value I Add to <GradientText variant="blue">Your Team</GradientText>
          </h2>
          <p className="text-body">
            I'm a focused engineer who ships real software for real users — with deep full-stack expertise, strong product instincts, and a track record of delivering independently.
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
        <div className="grid md:grid-cols-2 gap-4 lg:gap-5">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border-subtle bg-bg-secondary p-8 hover:border-accent-cyan/30 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              {/* Accent top edge */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r from-accent-cyan/50 via-accent-blue/30 to-transparent group-hover:from-accent-cyan transition-all duration-300" />
              {/* Large faded number */}
              <span className="absolute -top-3 right-4 font-heading text-[7rem] font-black leading-none select-none text-text-primary/4 group-hover:text-text-primary/[0.07] transition-colors duration-300">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="relative z-10">
                <h3 className="font-heading font-semibold text-lg text-text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
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
                Open to the right opportunity
              </h3>
              <p className="text-text-secondary">
                Hiring? I'm available for engineering roles and technical partnerships.
              </p>
            </div>
            <Link href="/contact">
              <motion.button
                className="btn-primary whitespace-nowrap"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get in Touch
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
