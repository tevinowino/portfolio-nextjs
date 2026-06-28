"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { GraduationCap, Sprout, HeartPulse, Leaf, ArrowUpRight, ArrowRight } from "lucide-react"
import { GradientText } from "@/components/ui/gradient-text"
import Link from "next/link"
import Image from "next/image"
import { SectionTransition } from "@/components/ui/section-transition"

const solutions = [
  {
    id: "edtech",
    icon: GraduationCap,
    title: "EdTech & LMS",
    shortTitle: "Education",
    description: "Multi-tenant SaaS platforms, school management systems, and AI-powered learning tools built for Kenyan schools and institutions.",
    image: "https://plus.unsplash.com/premium_photo-1680807869780-e0876a6f3cd5?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    colSpan: "md:col-span-2",
  },
  {
    id: "agritech",
    icon: Sprout,
    title: "AgriTech & Mobile",
    shortTitle: "AgriTech",
    description: "Mobile-first farm management apps connecting Kenyan farmers with real-time market data and resources.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&auto=format&fit=crop&q=80",
    colSpan: "md:col-span-1",
  },
  {
    id: "mental-health",
    icon: HeartPulse,
    title: "AI & Mental Wellness",
    shortTitle: "AI Wellness",
    description: "AI-native apps with empathetic companions, journaling tools, and personalized healing pathways.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&auto=format&fit=crop&q=80",
    colSpan: "md:col-span-1",
  },
  {
    id: "climate",
    icon: Leaf,
    title: "Climate & Social Impact",
    shortTitle: "Impact",
    description: "Full-stack platforms for climate advocacy, NGOs, and community-driven storytelling — built for global audiences.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80",
    colSpan: "md:col-span-2",
  },
]

function SolutionCard({ solution, index, isInView }: {
  solution: typeof solutions[number]
  index: number
  isInView: boolean
}) {
  const cardRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ["start end", "end start"] })
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"])
  const Icon = solution.icon

  return (
    <motion.div
      ref={cardRef}
      key={solution.id}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className={`${solution.colSpan}`}
    >
      <Link href="/portfolio" className="group relative block h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-bg-secondary">
        {/* Background Image — parallax layer */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <motion.div style={{ y: imageY }} className="absolute inset-[-10%] will-change-transform">
            <Image
              src={solution.image}
              alt={solution.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority={index < 2}
            />
          </motion.div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-300 group-hover:via-black/50" />
        </div>

        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 lg:p-8">
          {/* Top Row: Tag & Icon */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
              <Icon className="h-4 w-4 text-accent-cyan shadow-glow-cyan" />
              <span className="font-mono text-xs font-medium uppercase tracking-wider text-white">
                {solution.shortTitle}
              </span>
            </div>
            <div className="flex h-10 w-10 translate-y-2 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <ArrowUpRight className="h-5 w-5 text-white" />
            </div>
          </div>

          {/* Bottom Content */}
          <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
            <h3 className="mb-3 font-heading text-2xl font-bold leading-tight text-white md:text-3xl">
              {solution.title}
            </h3>
            <p className="max-w-md text-sm leading-relaxed text-white/80 md:text-base">
              {solution.description}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export function SolutionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { scrollYProgress: sectionScroll } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const headerY = useTransform(sectionScroll, [0, 1], [25, -25])

  return (
    <section className="section-padding bg-bg-primary relative" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div style={{ y: headerY }} className="will-change-transform">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.4 }}
        >
          <span className="inline-block font-mono text-xs uppercase tracking-widest text-accent-cyan mb-4">
            Areas I Work In
          </span>
          <h2 className="text-headline mb-4">
            Building for{" "}
            <GradientText variant="blue">Real Impact</GradientText>
          </h2>
          <p className="text-body">
            I focus on domains where well-built software can change lives in a measurable way — from classroom to farm to clinic.
          </p>
        </motion.div>
        </motion.div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] lg:auto-rows-[380px]">
          {solutions.map((solution, index) => (
            <SolutionCard key={solution.id} solution={solution} index={index} isInView={isInView} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link href="/portfolio">
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              See My Projects
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Smooth transition gradient overlay to next section (Cream) */}
      <SectionTransition fromColor="#1B2A41" toColor="#f5f3ee" height="h-32" />
    </section>
  )
}
