"use client"

import { ArrowRight, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"
import { GradientText } from "@/components/ui/gradient-text"
import Link from "next/link"
import dynamic from "next/dynamic"

import { SectionTransition } from "@/components/ui/section-transition"

const ShaderGradientCanvas = dynamic(
  () => import("@shadergradient/react").then((mod) => mod.ShaderGradientCanvas),
  { ssr: false }
)

const ShaderGradient = dynamic(
  () => import("@shadergradient/react").then((mod) => mod.ShaderGradient),
  { ssr: false }
)

export function HeroSection() {
  return (
    <section className="relative isolate min-h-screen flex items-center justify-center overflow-hidden pb-30">
      {/* Background backup color/gradient behind the canvas */}
      <div className="absolute inset-0 bg-linear-to-br from-bg-primary to-bg-bg-secondary -z-20" />

      {/* Background Effects — Shader Gradient */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <ShaderGradientCanvas pixelDensity={0.9} fov={45} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
          <ShaderGradient
            control="props"
            animate="on"
            brightness={0.9}
            cAzimuthAngle={180}
            cDistance={3.6}
            cPolarAngle={90}
            cameraZoom={1}
            color1="#1B2A41"
            color2="#00BFA6"
            color3="#10b2ce"
            envPreset="city"
            grain="on"
            lightType="3d"
            positionX={-1.4}
            positionY={0}
            positionZ={0}
            range="disabled"
            rangeEnd={40}
            rangeStart={0}
            reflection={0.1}
            rotationX={0}
            rotationY={10}
            rotationZ={50}
            shader="defaults"
            type="plane"
            uAmplitude={1}
            uDensity={2.6}
            uFrequency={5.5}
            uSpeed={0.3}
            uStrength={4}
            uTime={0}
            wireframe={false}
          />
        </ShaderGradientCanvas>
      </div>

      <div className="container-custom relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          {/* Content */}
          <motion.div
            className="space-y-8 text-center flex flex-col items-center justify-center w-full"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
            </motion.div>

            {/* Headline */}
            <h1 className="text-display">
              We Build{" "}
              <GradientText variant="animated">
                High-Performance
              </GradientText>
              <br className="hidden sm:block" />
              Digital Systems
            </h1>

            {/* Subheadline */}
            <motion.p
              className="text-body-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Stunning Websites. Custom Software. Guaranteed Growth.
              From lead-generating sites to bespoke software platforms, we build tools that scale your business.
              Fast. Reliable. Results-Driven.
              Our Promise: If it doesn't work, we'll rebuild it from the ground up.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
            >
              <Link href="/contact">
                <motion.button
                  className="btn-primary text-base px-8 py-4"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book a Free Call
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
                  Why Velion
                </motion.button>
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* Smooth transition gradient overlay at the bottom to blend with next section */}
      <SectionTransition fromColor="transparent" toColor="#1B2A41" height="h-64" />

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
