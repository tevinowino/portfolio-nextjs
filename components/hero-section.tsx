"use client"

import { ArrowRight, ShieldCheck } from "lucide-react"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
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

const WORDS = ["Full-Stack", "Frontend", "Founding"] as const

function TypewriterWord() {
  const prefersReducedMotion = useReducedMotion()
  const [wordIdx, setWordIdx] = useState(0)
  const [charCount, setCharCount] = useState(WORDS[0].length)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion) return
    const word = WORDS[wordIdx]
    if (!deleting) {
      if (charCount < word.length) {
        const t = setTimeout(() => setCharCount((c) => c + 1), 80)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setDeleting(true), 1800)
        return () => clearTimeout(t)
      }
    } else {
      if (charCount > 0) {
        const t = setTimeout(() => setCharCount((c) => c - 1), 48)
        return () => clearTimeout(t)
      } else {
        setDeleting(false)
        setWordIdx((i) => (i + 1) % WORDS.length)
      }
    }
  }, [wordIdx, charCount, deleting, prefersReducedMotion])

  const displayed = prefersReducedMotion ? WORDS[0] : WORDS[wordIdx].slice(0, charCount)

  return (
    <>
      <GradientText variant="animated">{displayed}</GradientText>
      {!prefersReducedMotion && (
        <motion.span
          aria-hidden
          className="inline-block w-[2px] h-[0.8em] align-middle rounded-sm bg-accent-cyan ml-0.5"
          animate={{ opacity: [1, 1, 0, 0] }}
          transition={{ duration: 0.9, repeat: Infinity, times: [0, 0.45, 0.5, 1], ease: "linear" }}
        />
      )}
    </>
  )
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] })
  const contentY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, -70])
  const orb1Y = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, -110])
  const orb2Y = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [30, -80])

  return (
    <section ref={sectionRef} className="relative isolate min-h-screen flex items-center justify-center overflow-hidden pb-30">
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

      {/* Parallax ambient orbs — above ShaderGradient, below text */}
      <motion.div
        style={{ y: orb1Y }}
        className="pointer-events-none absolute top-1/4 left-[8%] w-[480px] h-[480px] bg-accent-cyan/6 rounded-full blur-[100px] will-change-transform"
      />
      <motion.div
        style={{ y: orb2Y }}
        className="pointer-events-none absolute bottom-1/3 right-[8%] w-80 h-80 bg-accent-blue/8 rounded-full blur-[80px] will-change-transform"
      />

      <div className="container-custom relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          {/* Content — parallax lift on scroll-out */}
          <motion.div style={{ y: contentY }} className="w-full will-change-transform">
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
              Hi, I'm Tevin —{" "}
              <TypewriterWord />
              <br className="hidden sm:block" />
              Software Engineer
            </h1>

            {/* Subheadline */}
            <motion.p
              className="text-body-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              I ship production-grade software that real users depend on — from EdTech platforms to AI-powered apps.
              3+ years building across the full stack. Open to engineering roles.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
            >
              <Link href="/portfolio">
                <motion.button
                  className="btn-primary text-base px-8 py-4"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View My Work
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>

              <Link href="/contact">
                <motion.button
                  className="btn-secondary text-base px-8 py-4"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ShieldCheck className="w-4 h-4" />
                  Work With Me
                </motion.button>
              </Link>
            </motion.div>

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
