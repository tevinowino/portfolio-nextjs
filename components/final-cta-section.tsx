"use client"

import { CheckCircle, Calendar, Phone } from "lucide-react"
import { motion, useInView, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import { GradientText } from "@/components/ui/gradient-text"
import Link from "next/link"
import { SectionTransition } from "@/components/ui/section-transition"

const benefits = [
  "Full-stack engineering roles — contract or full-time",
  "Technical partnerships and custom software builds",
  "Developer mentorship and education initiatives",
]

export function FinalCTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const orb1Y = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [60, -60])
  const orb2Y = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [-40, 70])

  return (
    <section id="contact" className="section-padding bg-bg-primary relative overflow-hidden" ref={ref}>
      {/* Parallax background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div style={{ y: orb1Y }} className="absolute top-0 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl will-change-transform" />
        <motion.div style={{ y: orb2Y }} className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-purple/10 rounded-full blur-3xl will-change-transform" />
      </div>

      <div className="container-custom relative z-10 max-w-4xl">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-headline mb-4">
            Let's Work{" "}
            <GradientText variant="animated">Together</GradientText>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            I'm actively looking for engineering roles where I can ship high-impact software. If you're building something meaningful — or hiring someone who does — I'd love to connect.
          </p>
        </motion.div>

        {/* Benefits Card */}
        <motion.div
          className="bg-bg-secondary rounded-2xl border border-border-subtle p-8 mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="font-heading font-semibold text-lg text-text-primary mb-6 text-center">
            What I'm available for:
          </h3>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <CheckCircle className="w-5 h-5 text-accent-green shrink-0" />
                <span className="text-text-secondary">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link href="/contact">
            <motion.button
              className="btn-primary text-base px-8 py-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Calendar className="w-5 h-5" />
              Get in Touch
            </motion.button>
          </Link>

          <Link href="tel:+254794830280">
            <motion.button
              className="btn-secondary text-base px-8 py-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-5 h-5" />
              Call Me
            </motion.button>
          </Link>
        </motion.div>

        {/* Trust Indicators */}
        <motion.p
          className="text-center text-text-muted text-sm mt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <span className="inline-flex items-center gap-4 flex-wrap justify-center">
            <span>Building for African startups and SMEs</span>
            <span className="w-1 h-1 rounded-full bg-text-muted" />
            <span>Responding within 24 hours</span>
          </span>
        </motion.p>
      </div>

      {/* Smooth transition gradient overlay to next section (Dark Gray / Footer) */}
      <SectionTransition fromColor="#1B2A41" toColor="#18181b" height="h-32" />
    </section>
  )
}
