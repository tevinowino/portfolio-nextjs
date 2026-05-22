"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GradientText } from "@/components/ui/gradient-text"
import { ArrowRight, ExternalLink, Heart, TrendingUp, Smartphone, BookOpen } from "lucide-react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

type Project = {
  id: string
  title: string
  category: string
  theWhy: string
  theResult: string
  image: string
  technologies: string[]
  featured: boolean
  status: string
  link: string
  mobileApp?: boolean
}

const projects: Project[] = [
  {
    id: "learnify",
    title: "Learnify – EdTech SaaS for Schools",
    category: "Educational Harmony",
    theWhy: "To give teachers their weekends back and end the paperwork chase.",
    theResult: "Built and launched a multi-tenant SaaS platform for Kenyan schools, with full student management, attendance tracking, and AI-powered tools.",
    image: "/portfolio/learnify.png",
    technologies: ["Next.js", "Firebase", "AI APIs"],
    featured: true,
    status: "Live",
    link: "#",
  },
  {
    id: "digital-moran",
    title: "Digital Moran Agency Platform",
    category: "Effortless Transactions",
    theWhy: "To connect Kenyan youth to opportunities they deserve.",
    theResult: "100+ youth reached, 20+ mentorships facilitated.",
    image: "/portfolio/digitalmoran.png",
    technologies: ["Next.js", "Firebase", "TailwindCSS"],
    featured: true,
    status: "Live",
    link: "https://agency.digitalmoran.africa",
  },
  {
    id: "stti-hub",
    title: "STTI Hub — Starehe Boys' Centre LMS",
    category: "Educational Harmony",
    theWhy: "To replace manual progress tracking for high-intensity coding bootcamps.",
    theResult: "37 students onboarded with zero downtime. Each student gets a real-time dashboard for grades and attendance.",
    image: "/portfolio/stti.png",
    technologies: ["Next.js", "Supabase", "Tailwind CSS"],
    featured: true,
    status: "Live",
    link: "#",
  },
  {
    id: "intentional-studios",
    title: "Intentional Studios — Branding Agency Website",
    category: "Authority Presence",
    theWhy: "To build a premium digital presence that matched their elite positioning and 16+ client portfolio.",
    theResult: "A high-impact Next.js website that established their 'digital supremacy' brand and became their primary client acquisition channel.",
    image: "/portfolio/intentional-studios.png",
    technologies: ["Next.js", "TailwindCSS", "Vercel"],
    featured: true,
    status: "Live",
    link: "https://www.intentionalstudioske.com",
  },
  {
    id: "shambapal",
    title: "ShambaPal – Farm Management App",
    category: "Custom SaaS",
    theWhy: "To give smallholder farmers in Kenya access to modern farm management tools on their phones.",
    theResult: "Digitized farm operations for agricultural businesses across Kenya, accessible entirely from a mobile device.",
    image: "/portfolio/shambapal.png",
    technologies: ["React Native", "Expo", "Firebase"],
    featured: false,
    status: "Live",
    link: "#",
    mobileApp: true,
  },
  {
    id: "traffic-buddy",
    title: "Traffic Buddy – NTSA Driving Theory Platform",
    category: "Educational Harmony",
    theWhy: "To give Kenyan learner drivers a free, structured alternative to memorizing the Highway Code book.",
    theResult: "Launched a bilingual platform with 100+ interactive scenarios, 20 NTSA-aligned modules, and QR-verified certificates — free to start.",
    image: "/portfolio/traffic-buddy.png",
    technologies: ["Next.js", "Supabase", "TailwindCSS"],
    featured: false,
    status: "Live",
    link: "https://trafficbuddy.app",
  },
  {
    id: "wearetell",
    title: "We Are Tell – Climate Action Platform",
    category: "Authority Presence",
    theWhy: "To build a digital home for climate action communities in Kenya.",
    theResult: "Delivered a fully functional platform for climate advocacy and community engagement.",
    image: "/portfolio/wearetell.png",
    technologies: ["Next.js", "Tailwind CSS"],
    featured: false,
    status: "Live",
    link: "#",
  },
]

export default function PortfolioPageContent() {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  const { scrollY } = useScroll()
  const orb1Y = useTransform(scrollY, [0, 600], [0, -80])
  const orb2Y = useTransform(scrollY, [0, 600], [0, -50])

  return (
    <main className="min-h-screen bg-bg-primary">
      <div className="noise-overlay" />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div style={{ y: orb1Y }} className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl" />
          <motion.div style={{ y: orb2Y }} className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-purple/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-accent-cyan mb-4">
              Our Work
            </span>
            <h1 className="text-display mb-6">
              Stories of{" "}
              <GradientText variant="animated">Transformation</GradientText>
            </h1>
            <p className="text-body-lg">
              Every project starts with a frustration and ends with relief.
              Here's how we've helped businesses find their ease.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-accent-cyan mb-2">
              Featured
            </span>
            <h2 className="text-headline">Client Success Stories</h2>
          </motion.div>

          <div className="space-y-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center bg-bg-primary rounded-2xl border border-border-subtle overflow-hidden">
                  {/* Image */}
                  <div className="relative h-64 lg:h-80 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                      <span className="px-3 py-1 rounded-full bg-accent-cyan/90 text-white text-xs font-medium">
                        {project.category}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-bg-secondary/90 backdrop-blur-sm text-text-primary text-xs font-medium border border-border-subtle">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8">
                    <h3 className="font-heading font-bold text-2xl text-text-primary mb-6">
                      {project.title}
                    </h3>

                    {/* The Why */}
                    <div className="mb-4 p-4 rounded-xl bg-bg-secondary/50 border border-border-subtle">
                      <div className="flex items-center gap-2 mb-2">
                        <Heart className="w-4 h-4 text-accent-cyan" />
                        <span className="font-mono text-xs uppercase tracking-widest text-accent-cyan">
                          The Why
                        </span>
                      </div>
                      <p className="text-text-secondary">{project.theWhy}</p>
                    </div>

                    {/* The Result */}
                    <div className="mb-6 p-4 rounded-xl bg-accent-cyan/5 border border-accent-cyan/20">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-accent-green" />
                        <span className="font-mono text-xs uppercase tracking-widest text-accent-green">
                          The Result
                        </span>
                      </div>
                      <p className="text-text-primary font-medium">{project.theResult}</p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg bg-bg-tertiary text-text-muted text-xs border border-border-subtle"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4 flex-wrap">
                      <Link href={`/portfolio/${project.id}`}>
                        <motion.button
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-sm font-medium hover:bg-accent-cyan/20 transition-colors"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <BookOpen className="w-4 h-4" />
                          View Case Study
                        </motion.button>
                      </Link>
                      {project.link !== "#" && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <motion.button
                            className="text-text-muted text-sm font-medium flex items-center gap-2 hover:text-text-primary transition-colors"
                            whileHover={{ x: 4 }}
                          >
                            Live Site
                            <ExternalLink className="w-4 h-4" />
                          </motion.button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="section-padding section-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-headline">More Projects</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="group relative h-full rounded-2xl border border-border-subtle bg-bg-secondary overflow-hidden hover:border-accent-cyan/30 transition-colors">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
                      <span className="px-2 py-1 rounded-full bg-accent-cyan/90 text-white text-xs font-medium">
                        {project.category}
                      </span>
                      {project.mobileApp && (
                        <span className="px-2 py-1 rounded-full bg-accent-purple/80 text-white text-xs font-medium flex items-center gap-1">
                          <Smartphone className="w-3 h-3" />
                          Mobile App
                        </span>
                      )}
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 rounded-full bg-bg-secondary/90 backdrop-blur-sm text-text-primary text-xs font-medium border border-border-subtle">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-heading font-semibold text-lg text-text-primary mb-3">
                      {project.title}
                    </h3>

                    <p className="text-text-muted text-sm mb-2">
                      <span className="text-accent-cyan">Why:</span> {project.theWhy}
                    </p>
                    <p className="text-text-secondary text-sm mb-4">
                      <span className="text-accent-green">Result:</span> {project.theResult}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-bg-tertiary text-text-muted text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 flex-wrap pt-2 border-t border-border-subtle">
                      <Link href={`/portfolio/${project.id}`}>
                        <motion.span
                          className="inline-flex items-center gap-1.5 text-accent-cyan text-xs font-medium hover:gap-2 transition-all cursor-pointer"
                          whileHover={{ x: 2 }}
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          View Case Study
                        </motion.span>
                      </Link>
                      {project.link !== "#" && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-text-muted text-xs hover:text-text-primary transition-colors"
                        >
                          Live Site <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-custom max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-bg-primary rounded-2xl border border-border-subtle p-8 lg:p-12 text-center"
          >
            <h2 className="text-headline mb-4">
              Ready to Tell <GradientText variant="blue">Your Story</GradientText>?
            </h2>
            <p className="text-text-secondary mb-8 max-w-xl mx-auto">
              Let's discuss your challenges and create a success story together.
            </p>
            <Link href="/contact">
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
