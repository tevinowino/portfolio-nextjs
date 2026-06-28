"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GradientText } from "@/components/ui/gradient-text"
import { ArrowRight, ExternalLink, Github, Smartphone } from "lucide-react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"

type Project = {
  id: string
  title: string
  badge: string
  category: string
  description: string
  outcomes: string[]
  technologies: string[]
  featured: boolean
  links: { live?: string; source?: string }
}

const projects: Project[] = [
  {
    id: "learnify",
    title: "Learnify",
    badge: "Personal Project · EdTech SaaS",
    category: "EdTech",
    description: "A multi-tenant SaaS platform designed and built to modernize curriculum delivery in Kenyan schools. Serves schools and educational institutions, giving educators, students, and parents a unified digital experience — from attendance tracking to AI-powered learning tools.",
    outcomes: [
      "Multi-tenant architecture supporting multiple institutions on one platform",
      "AI-powered features for educators to streamline lesson planning and assessment",
      "Parent-facing dashboards for real-time student progress visibility",
      "Live at learnifykenya.co.ke",
    ],
    technologies: ["Next.js", "Firebase", "React", "Tailwind CSS", "TypeScript"],
    featured: true,
    links: { live: "https://learnifykenya.co.ke" },
  },
  {
    id: "thoughtreflex",
    title: "ThoughtReflex",
    badge: "Personal Project · AI Mental Wellness",
    category: "AI & Mental Health",
    description: "An AI-powered mental wellness journaling app built around the belief that mental health support should be accessible, non-clinical, and deeply personal. Features Mira — an empathetic AI companion with Therapist, Coach, and Friend modes.",
    outcomes: [
      "30+ active users since launch",
      "Three distinct AI interaction modes for different emotional needs",
      "Journaling, reflection, and guided goal-setting in a single product",
      "Built and shipped solo, end-to-end",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API"],
    featured: true,
    links: {},
  },
  {
    id: "wearetell",
    title: "We Are Tell",
    badge: "Velion Consulting · Climate & Storytelling",
    category: "Climate & Social Impact",
    description: "A climate action and storytelling platform built for a global audience of climate advocates, researchers, and activists. Delivered as a full-stack Velion Consulting engagement — covering design, development, authentication infrastructure, and production deployment.",
    outcomes: [
      "Full production deployment on Vercel with custom subdomain and OAuth infrastructure",
      "Clerk-based authentication with CNAME records correctly configured end-to-end",
      "Content management and publishing tools for climate storytellers globally",
      "Delivered and transitioned to client with full documentation",
    ],
    technologies: ["Next.js", "Clerk", "Tailwind CSS", "Vercel", "TypeScript"],
    featured: true,
    links: {},
  },
  {
    id: "shambapal",
    title: "ShambaPal",
    badge: "Velion Consulting · AgriTech",
    category: "AgriTech Mobile",
    description: "A React Native mobile application connecting Kenyan farmers with agricultural resources, market pricing data, and farming guidance — built for mobile-first users in rural and peri-urban Kenya. Firebase powers real-time sync so farmers receive up-to-date market data without needing to manually refresh.",
    outcomes: [
      "Cross-platform mobile app targeting Android-first Kenyan farmers",
      "Real-time Firebase sync for market price data and agricultural resources",
      "Designed for low-bandwidth and intermittent connectivity environments",
      "Delivered end-to-end through Velion Consulting",
    ],
    technologies: ["React Native", "Firebase", "TypeScript", "Tailwind CSS"],
    featured: false,
    links: {},
  },
  {
    id: "digital-moran",
    title: "Digital Moran",
    badge: "Velion Consulting · Youth Empowerment",
    category: "Youth & Mentorship",
    description: "A youth-focused platform connecting Kenyan youths with gigs, jobs, and mentorship opportunities in tech. Built in partnership with the Digital Moran NGO — bridges the gap between emerging developers seeking their first opportunity and companies looking for young talent. Personally motivated: solves a problem I lived firsthand.",
    outcomes: [
      "Connects Kenyan youth with tech jobs, gigs, and mentorship",
      "Serves the Digital Moran NGO's community empowerment mission",
      "Full-stack Next.js build with Firebase backend",
      "100+ youth reached, 20+ mentorships facilitated",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    featured: false,
    links: { live: "https://agency.digitalmoran.africa" },
  },
  {
    id: "stti-hub",
    title: "STTI Hub",
    badge: "Velion Consulting · Learning Management",
    category: "EdTech / LMS",
    description: "A custom learning management system built for Starehe Boys' Centre, supporting both high school students and adult learners in structured digital education. Manages course content, student progress tracking, assessments, and educator tools — tailored specifically for the Starehe Boys' Centre context and curriculum.",
    outcomes: [
      "Custom LMS serving both high school and adult learner tracks",
      "Educator-facing tools for content delivery and progress tracking",
      "Student dashboards with structured assessment management",
      "Actively used by Starehe Boys' Centre staff and students",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    featured: false,
    links: {},
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
              My Work
            </span>
            <h1 className="text-display mb-6">
              Real Software.{" "}
              <GradientText variant="animated">Real Users.</GradientText>
            </h1>
            <p className="text-body-lg">
              Real software, shipped for real users. Here's a selection of products I've built — solo, as a founder, and through Velion Consulting.
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
            <h2 className="text-headline">Flagship Projects</h2>
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
                <div className="grid lg:grid-cols-2 gap-8 items-start bg-bg-primary rounded-2xl border border-border-subtle overflow-hidden">
                  {/* Image placeholder with category color */}
                  <div className="relative h-64 lg:h-80 bg-bg-secondary flex items-center justify-center">
                    <img
                      src={`/portfolio/${project.id}.png`}
                      alt={`${project.title} — ${project.category}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement
                        target.style.display = "none"
                      }}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-bg-primary/80 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                      <span className="px-3 py-1 rounded-full bg-accent-cyan/90 text-white text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8">
                    <span className="inline-block font-mono text-xs uppercase tracking-widest text-accent-cyan mb-2">
                      {project.badge}
                    </span>
                    <h3 className="font-heading font-bold text-2xl text-text-primary mb-4">
                      {project.title}
                    </h3>

                    <p className="text-text-secondary text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Key Outcomes */}
                    <div className="mb-6 p-4 rounded-xl bg-accent-cyan/5 border border-accent-cyan/20">
                      <span className="font-mono text-xs uppercase tracking-widest text-accent-cyan mb-3 block">
                        Key Outcomes
                      </span>
                      <ul className="space-y-1.5">
                        {project.outcomes.map((outcome) => (
                          <li key={outcome} className="flex items-start gap-2 text-sm text-text-primary">
                            <ArrowRight className="w-3.5 h-3.5 text-accent-cyan shrink-0 mt-0.5" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 rounded-lg bg-bg-tertiary text-text-muted text-xs border border-border-subtle">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4 flex-wrap">
                      {project.links.live && (
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                          <motion.button
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-sm font-medium hover:bg-accent-cyan/20 transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live Site
                          </motion.button>
                        </a>
                      )}
                      {project.links.source && (
                        <a href={project.links.source} target="_blank" rel="noopener noreferrer">
                          <motion.button
                            className="text-text-muted text-sm font-medium flex items-center gap-2 hover:text-text-primary transition-colors"
                            whileHover={{ x: 4 }}
                          >
                            <Github className="w-4 h-4" />
                            Source Code
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
                  <div className="relative h-48 overflow-hidden bg-bg-primary">
                    <img
                      src={`/portfolio/${project.id}.png`}
                      alt={`${project.title} — ${project.category}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement
                        target.style.display = "none"
                      }}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-bg-secondary via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
                      <span className="px-2 py-1 rounded-full bg-accent-cyan/90 text-white text-xs font-medium">
                        {project.category}
                      </span>
                      {project.id === "shambapal" && (
                        <span className="px-2 py-1 rounded-full bg-accent-purple/80 text-white text-xs font-medium flex items-center gap-1">
                          <Smartphone className="w-3 h-3" />
                          Mobile
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-5">
                    <span className="font-mono text-xs uppercase tracking-widest text-accent-cyan mb-1 block">
                      {project.badge}
                    </span>
                    <h3 className="font-heading font-semibold text-lg text-text-primary mb-3">
                      {project.title}
                    </h3>

                    <p className="text-text-muted text-sm mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-0.5 rounded bg-bg-tertiary text-text-muted text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 flex-wrap pt-2 border-t border-border-subtle">
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-accent-cyan text-xs font-medium hover:underline"
                        >
                          Live Site <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      {project.links.source && (
                        <a
                          href={project.links.source}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-text-muted text-xs hover:text-text-primary transition-colors"
                        >
                          Source <Github className="w-3 h-3" />
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
              Have an idea? Let's <GradientText variant="blue">Build It.</GradientText>
            </h2>
            <p className="text-text-secondary mb-8 max-w-xl mx-auto">
              Whether you're a startup, an SME, or a founder with a vision — I'd love to hear about what you're building.
            </p>
            <Link href="/contact">
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get in Touch
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
