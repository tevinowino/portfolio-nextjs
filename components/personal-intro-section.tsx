"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { GradientText } from "@/components/ui/gradient-text"
import Image from "next/image"
import Link from "next/link"
import { SectionTransition } from "@/components/ui/section-transition"

const techStack = ["TypeScript", "React", "Next.js", "Node.js", "Firebase", "React Native"]

export function PersonalIntroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const imageY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [-20, 20])
  const textY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [15, -15])

  return (
    <section className="section-padding bg-bg-primary relative overflow-hidden" ref={ref}>
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent-cyan/5 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-72 h-72 bg-accent-blue/6 rounded-full blur-3xl" />

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Image column */}
          <motion.div
            className="relative order-last lg:order-first"
            style={{ y: imageY }}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Decoration: blurred glow layer */}
            <div className="absolute inset-0 translate-x-5 translate-y-5 bg-accent-cyan/15 rounded-[2.5rem] blur-3xl" />
            {/* Decoration: offset border frame */}
            <div className="absolute -top-3 -left-3 right-3 bottom-3 border border-accent-cyan/20 rounded-[2.5rem]" />

            {/* Photo */}
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] max-h-[580px]">
              <Image
                src="/founder.jpeg"
                alt="Tevin Owino — Full-Stack Software Engineer"
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-bg-primary/30 via-transparent to-transparent" />
            </div>

            {/* Floating status badge */}
            <motion.div
              className="absolute -bottom-4 right-4 lg:-right-6 flex items-center gap-2.5 rounded-xl border border-accent-green/30 bg-bg-secondary/90 backdrop-blur-md px-4 py-3 shadow-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-green" />
              </span>
              <span className="text-text-primary text-sm font-medium whitespace-nowrap">Open to hire</span>
            </motion.div>
          </motion.div>

          {/* Text column */}
          <motion.div
            style={{ y: textY }}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-accent-cyan mb-4">
              About Me
            </span>
            <h2 className="text-headline mb-6">
              I'm <GradientText variant="animated">Tevin Owino</GradientText>
            </h2>
            <p className="text-body mb-4">
              Full-stack software engineer based in Nairobi, Kenya. For the past 3+ years I've been
              building production-grade software across EdTech, FinTech, AgriTech, and AI — platforms
              that real people depend on every day.
            </p>
            <p className="text-body mb-8">
              I'm also a software instructor, a founder, and someone who genuinely loves the craft.
              I bring business thinking to engineering decisions and engineering rigour to product
              thinking — and I make the teams I join better.
            </p>

            {/* Tech stack pills */}
            <div className="flex flex-wrap gap-2 mb-10">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full border border-border-visible bg-bg-secondary text-text-muted text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Link href="/about">
              <motion.button
                className="btn-secondary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More About Me
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>

        </div>
      </div>

      <SectionTransition fromColor="#1B2A41" toColor="#f5f3ee" height="h-32" />
    </section>
  )
}
