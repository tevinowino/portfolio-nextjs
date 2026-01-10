"use client"

import { ArrowRight, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"
import { GradientText } from "@/components/ui/gradient-text"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-bg-primary to-bg-bg-secondary pb-30">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-purple/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-cyan/10 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      <div className="container-custom relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-secondary border border-border-subtle text-sm text-text-secondary">
                <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                <span className="font-mono text-xs tracking-wider uppercase">
                  Kenya's Top Software Agency
                </span>
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-display"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              We Build{" "}
              <GradientText variant="animated">
                High-Performance
              </GradientText>
              <br className="hidden sm:block" />
              Digital Systems
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-body-lg max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Stunning Websites. Custom Software. Guaranteed Growth. 
              From lead-generating sites to bespoke software platforms, we build tools that scale your business. 
              Fast. Reliable. Results-Driven. 
              Our Promise: If it doesn’t work, we’ll rebuild it from the ground up.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Link href="/contact">
                <motion.button
                  className="btn-primary text-base px-8 py-4"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              
              <Link href="#why">
                <motion.button
                  className="btn-secondary text-base px-8 py-4"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ShieldCheck className="w-4 h-4" />
                  See How We Care
                </motion.button>
              </Link>
            </motion.div>

          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50, rotate: -5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            <motion.div
              className="relative"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Glow behind crystal */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/30 to-accent-cyan/30 blur-3xl scale-110" />
              
              <motion.img
                src="/blue-crystal.png"
                alt="Innovation and growth visualization"
                className="relative w-full max-w-md h-auto drop-shadow-2xl"
                animate={{
                  rotate: [0, 3, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-border-visible flex justify-center pt-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
        </motion.div>
      </motion.div>
    </section>
  )
}
