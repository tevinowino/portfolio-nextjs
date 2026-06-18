"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, Heart, TrendingUp, BookOpen, ExternalLink } from "lucide-react"
import { GradientText } from "@/components/ui/gradient-text"
import { SectionTransition } from "@/components/ui/section-transition"
import Link from "next/link"
import Image from "next/image"

type Project = {
  id: string
  title: string
  category: string
  theWhy: string
  theResult: string
  image: string
  technologies: string[]
  link: string
}

const FALLBACK_IMG = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=80"

function ProjectCardImage({ src, alt }: { src: string; alt: string }) {
  const [imgSrc, setImgSrc] = useState(src)
  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
      className="object-cover transition-transform duration-500 group-hover:scale-105"
      onError={() => setImgSrc(FALLBACK_IMG)}
    />
  )
}

const projects: Project[] = [
  {
    id: "learnify",
    title: "Learnify – EdTech SaaS for Schools",
    category: "Educational Harmony",
    theWhy: "To give teachers their weekends back and end the paperwork chase.",
    theResult: "Built a multi-tenant SaaS for Kenyan schools with student profiles, grading, and automated report compilation.",
    image: "/portfolio/learnify.png",
    technologies: ["Next.js", "Firebase", "AI APIs"],
    link: "#",
  },
  {
    id: "digital-moran",
    title: "Digital Moran Agency Platform",
    category: "Effortless Transactions",
    theWhy: "To connect Kenyan youth to opportunities they deserve.",
    theResult: "100+ youth reached, 20+ mentorships facilitated with automated payments.",
    image: "/portfolio/digitalmoran.png",
    technologies: ["Next.js", "Firebase", "TailwindCSS"],
    link: "https://agency.digitalmoran.africa",
  },
  {
    id: "stti-hub",
    title: "STTI Hub — Starehe Boys' Centre LMS",
    category: "Educational Harmony",
    theWhy: "To replace manual progress tracking for coding bootcamps.",
    theResult: "Onboarded cohorts with zero downtime. Real-time grades, progress tracker, and attendance metrics.",
    image: "/portfolio/stti.png",
    technologies: ["Next.js", "Supabase", "Tailwind CSS"],
    link: "#",
  },
  {
    id: "intentional-studios",
    title: "Intentional Studios — Agency Website",
    category: "Authority Presence",
    theWhy: "To build a digital home reflecting their elite branding positioning.",
    theResult: "High-impact Next.js site that became their primary direct client acquisition channel.",
    image: "/portfolio/intentional-studios.png",
    technologies: ["Next.js", "TailwindCSS", "Vercel"],
    link: "https://www.intentionalstudioske.com",
  },
  {
    id: "traffic-buddy",
    title: "Traffic Buddy – NTSA Driving Platform",
    category: "Educational Harmony",
    theWhy: "To give Kenyan learner drivers a structured alternative to paper guides.",
    theResult: "Bilingual platform with interactive scenarios, NTSA modules, and QR-verified certificates.",
    image: "/portfolio/traffic-buddy.png",
    technologies: ["Next.js", "Supabase", "TailwindCSS"],
    link: "https://trafficbuddy.app",
  },
]

export function LatestWorkSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [windowWidth, setWindowWidth] = useState(1200)
  const [trackWidth, setTrackWidth] = useState(0)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth)
      const handleResize = () => setWindowWidth(window.innerWidth)
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    if (containerRef.current) {
      setTrackWidth(containerRef.current.offsetWidth)
    }
  }, [windowWidth])

  const getVisibleCount = () => {
    if (windowWidth < 640) return 1
    if (windowWidth < 1024) return 2
    return 3
  }

  const visibleCount = getVisibleCount()
  const gap = 24
  const cardWidth = trackWidth ? (trackWidth - (visibleCount - 1) * gap) / visibleCount : 350
  const maxIndex = Math.max(0, projects.length - visibleCount)

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  return (
    <section className="section-padding bg-bg-primary relative overflow-hidden" id="work">
      <div className="container-custom relative z-10">
        {/* Header with Navigation Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-accent-cyan mb-4">
              Our Latest Work
            </span>
            <h2 className="text-headline">
              Real Systems. <GradientText variant="blue">Real Impact.</GradientText>
            </h2>
            <p className="text-body mt-4">
              We focus on solving core operations and building authority. Explore case studies of software platforms we've deployed.
            </p>
          </div>

          {/* Nav Controls */}
          {maxIndex > 0 && (
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="w-12 h-12 rounded-full border border-border-visible bg-bg-secondary/40 backdrop-blur-md flex items-center justify-center text-text-primary hover:border-accent-cyan/50 hover:text-accent-cyan disabled:opacity-30 disabled:hover:text-text-primary disabled:hover:border-border-visible transition-colors cursor-pointer"
                aria-label="Previous Project"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex === maxIndex}
                className="w-12 h-12 rounded-full border border-border-visible bg-bg-secondary/40 backdrop-blur-md flex items-center justify-center text-text-primary hover:border-accent-cyan/50 hover:text-accent-cyan disabled:opacity-30 disabled:hover:text-text-primary disabled:hover:border-border-visible transition-colors cursor-pointer"
                aria-label="Next Project"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* Carousel Track Container */}
        <div ref={containerRef} className="overflow-hidden w-full relative pb-4">
          <motion.div
            className="flex gap-6"
            animate={{ x: -currentIndex * (cardWidth + gap) }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                style={{ width: cardWidth }}
                className="group relative shrink-0 rounded-2xl border border-border-subtle bg-bg-secondary/40 backdrop-blur-xs p-5 flex flex-col justify-between h-[490px] hover:border-accent-cyan/30 transition-all duration-300 hover:translate-y-[-2px]"
              >
                {/* Visual Area */}
                <div>
                  <div className="relative h-44 rounded-xl overflow-hidden mb-5 bg-bg-primary">
                    <ProjectCardImage src={project.image} alt={project.title} />
                    <div className="absolute inset-0 bg-linear-to-t from-bg-secondary/90 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-accent-cyan/85 text-white text-[10px] font-mono tracking-wider uppercase">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-lg text-text-primary mb-4 leading-snug line-clamp-1">
                    {project.title}
                  </h3>

                  {/* Metric Why & Result Grid */}
                  <div className="grid grid-cols-1 gap-2 mb-4">
                    <div className="p-3 rounded-lg bg-bg-primary/40 border border-border-subtle/50 text-xs">
                      <div className="flex items-center gap-1.5 text-accent-cyan mb-1">
                        <Heart className="w-3.5 h-3.5" />
                        <span className="font-mono text-[9px] uppercase tracking-wider font-semibold">The Why</span>
                      </div>
                      <p className="text-text-secondary line-clamp-2 leading-relaxed">{project.theWhy}</p>
                    </div>

                    <div className="p-3 rounded-lg bg-accent-cyan/5 border border-accent-cyan/10 text-xs">
                      <div className="flex items-center gap-1.5 text-accent-green mb-1">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span className="font-mono text-[9px] uppercase tracking-wider font-semibold">The Result</span>
                      </div>
                      <p className="text-text-primary line-clamp-2 leading-relaxed font-medium">{project.theResult}</p>
                    </div>
                  </div>
                </div>

                {/* Footer details: Tech & Action */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded bg-bg-tertiary text-text-muted text-[10px] font-mono border border-border-subtle">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-border-subtle/60">
                    <Link
                      href={`/portfolio/${project.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-cyan hover:text-accent-blue transition-colors group/btn"
                    >
                      <BookOpen className="w-4 h-4" />
                      Case Study
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>

                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-text-muted hover:text-text-primary transition-colors text-xs"
                      >
                        Live Site
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Indicator dots for mobile */}
        {maxIndex > 0 && (
          <div className="flex justify-center gap-1.5 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "w-6 bg-accent-cyan" : "w-1.5 bg-border-visible"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Smooth transition to next section (Dark Gray) */}
      <SectionTransition fromColor="#1B2A41" toColor="#18181b" height="h-32" />
    </section>
  )
}
