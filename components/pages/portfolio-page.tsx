"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GradientText } from "@/components/ui/gradient-text"
import { ArrowRight, ExternalLink, Heart, TrendingUp } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const projects = [
  {
    id: "learnify",
    title: "Learnify – EdTech SaaS for Schools",
    category: "Educational Harmony",
    theWhy: "To give teachers their weekends back and end the paperwork chase.",
    theResult: "Automated grading for 10+ schools, reducing admin work by 60%.",
    image: "/portfolio/learnify.png",
    technologies: ["Next.js", "Firebase", "AI APIs"],
    featured: true,
    status: "In Development",
    link: "#",
  },
  {
    id: "eca-industries",
    title: "Sub-Saharan ECA Industries",
    category: "Authority Presence",
    theWhy: "To replace manufacturing chaos with sales confidence.",
    theResult: "A 3x increase in digital leads through a streamlined inquiry system.",
    image: "/portfolio/sseil.png",
    technologies: ["React", "TailwindCSS", "Netlify"],
    featured: true,
    status: "Live",
    link: "#",
  },
  {
    id: "thoughtreflex",
    title: "ThoughtReflex – Mental Wellness",
    category: "Custom SaaS",
    theWhy: "To make mental wellness accessible through AI companionship.",
    theResult: "85% user engagement with AI-powered therapy and journaling.",
    image: "/portfolio/thoughtreflex.png",
    technologies: ["Next.js", "Firebase", "Gemini API"],
    featured: false,
    status: "Live",
    link: "https://thoughtreflex.vercel.app",
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
]

export default function PortfolioPageContent() {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <main className="min-h-screen bg-bg-primary">
      <div className="noise-overlay" />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-purple/10 rounded-full blur-3xl" />
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
                    <div className="absolute top-4 left-4 flex gap-2">
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
                      <p className="text-text-secondary">
                        {project.theWhy}
                      </p>
                    </div>

                    {/* The Result */}
                    <div className="mb-6 p-4 rounded-xl bg-accent-cyan/5 border border-accent-cyan/20">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-accent-green" />
                        <span className="font-mono text-xs uppercase tracking-widest text-accent-green">
                          The Result
                        </span>
                      </div>
                      <p className="text-text-primary font-medium">
                        {project.theResult}
                      </p>
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

                    {/* Link */}
                    {project.link !== "#" && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <motion.button
                          className="text-accent-cyan text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all"
                          whileHover={{ x: 4 }}
                        >
                          View Project
                          <ExternalLink className="w-4 h-4" />
                        </motion.button>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="section-padding bg-bg-primary">
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
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 rounded-full bg-accent-cyan/90 text-white text-xs font-medium">
                        {project.category}
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
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-bg-tertiary text-text-muted text-xs"
                        >
                          {tech}
                        </span>
                      ))}
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
