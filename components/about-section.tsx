"use client"

import { Heart, Users, Briefcase, Star, ArrowRight, ShieldCheck, Zap } from "lucide-react"
import { motion, useInView, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import { GradientText } from "@/components/ui/gradient-text"
import Link from "next/link"
import { SectionTransition } from "@/components/ui/section-transition"

const capabilities = [
  {
    icon: Zap,
    title: "Fintech Engineering",
    description: "Engineer at Finite Pay — built real-time payment systems that scaled to 500+ users and 1,000+ daily transactions in a production fintech environment.",
    stat: "500+ Users",
  },
  {
    icon: ShieldCheck,
    title: "Founder-Level Ownership",
    description: "Founded Velion Consulting and delivered four client projects across EdTech, AgriTech, FinTech, and Climate — managing everything from architecture to deployment.",
    stat: "4 Projects Shipped",
  },
  {
    icon: Users,
    title: "Instructor & Mentor",
    description: "Teaching full-stack development at Starehe Boys' Centre. Students have shipped real apps — a sign I communicate complex topics clearly.",
    stat: "Active Instructor",
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const orb1Y = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [40, -60])
  const orb2Y = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [-30, 50])
  const leftY  = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [20, -20])
  const rightY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [35, -35])

  return (
    <section id="what-we-do" className="section-padding bg-bg-primary relative overflow-hidden pt-[300px] sm:pt-0" ref={ref}>
      {/* Parallax background orbs */}
      <motion.div style={{ y: orb1Y }} className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none will-change-transform" />
      <motion.div style={{ y: orb2Y }} className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-purple/5 rounded-full blur-3xl pointer-events-none will-change-transform" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <motion.div style={{ y: leftY }} className="will-change-transform">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-accent-cyan mb-4">
              About Me
            </span>

            <h2 className="text-display mb-8">
              Engineer. Builder. <GradientText variant="blue">Instructor.</GradientText>
            </h2>

            <p className="text-body-lg mb-8">
              I'm Tevin Owino — a full-stack software engineer with 3+ years shipping production software across fintech, edtech, agritech, and climate. I bring both the technical depth to build complex systems and the product instinct to know what actually matters.
            </p>

            <p className="text-text-secondary mb-10 leading-relaxed">
              I founded Velion Consulting to deliver custom software for African startups, and I teach full-stack development at Starehe Boys' Centre. I'm now looking to bring that same execution energy to a high-impact engineering team.
            </p>

            <Link href="/about">
              <motion.button
                className="group flex items-center gap-2 text-text-primary font-medium hover:text-accent-cyan transition-colors"
                whileHover={{ x: 4 }}
              >
                Read More About Me
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>
          </motion.div>

          {/* Right Visual - Modern Cards Stack */}
          <motion.div style={{ y: rightY }} className="relative will-change-transform">
            <div className="grid gap-6">
              {capabilities.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="group relative"
                  >
                    <div className="relative rounded-2xl bg-bg-secondary border border-border-subtle p-6 hover:border-accent-cyan/30 transition-colors duration-300">
                      {/* Hover Glow */}
                      <div className="absolute inset-0 bg-linear-to-r from-accent-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                      
                      <div className="relative flex items-start gap-5">
                        <div className="w-12 h-12 rounded-xl bg-bg-tertiary flex items-center justify-center shrink-0 group-hover:bg-accent-cyan/10 transition-colors duration-300">
                          <Icon className="w-6 h-6 text-text-secondary group-hover:text-accent-cyan transition-colors duration-300" />
                        </div>
                        
                        <div>
                          <h3 className="font-heading font-semibold text-lg text-text-primary mb-2 group-hover:text-accent-cyan transition-colors duration-300">
                            {item.title}
                          </h3>
                          <p className="text-sm text-text-muted leading-relaxed mb-3">
                            {item.description}
                          </p>
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-bg-tertiary/50 border border-border-subtle text-xs font-mono text-accent-cyan">
                            <Star className="w-3 h-3 fill-accent-cyan" />
                            {item.stat}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Smooth transition gradient overlay to next section (Cream) */}
      <SectionTransition fromColor="#1B2A41" toColor="#f5f3ee" height="h-32" />
    </section>
  )
}
