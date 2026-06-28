"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GradientText } from "@/components/ui/gradient-text"
import { CheckCircle2, ArrowRight, Code2, Globe, Smartphone, BookOpen, Briefcase, GraduationCap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const heroStats = [
  { value: "3+", label: "Years Building" },
  { value: "10+", label: "Projects Shipped" },
  { value: "500+", label: "End Users Reached" },
]

const frontendSkills = ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "React Native", "Remix"]
const backendSkills = ["Node.js", "Express.js", "NestJS", "Convex", "REST APIs", "Firebase"]
const databaseSkills = ["MongoDB", "PostgreSQL", "Supabase", "Prisma", "Firebase Firestore"]
const toolSkills = ["Git", "Docker", "Vercel", "Clerk", "Stripe", "Twilio", "Prisma"]
const expertiseAreas = ["System Design", "API Architecture", "Performance Optimization", "AI Integration", "Agile/SCRUM", "Technical Mentorship"]

const values = [
  {
    icon: Code2,
    year: "Engineer",
    title: "Production-Grade Code",
    description: "I write software built for the real world — performant, secure, and maintainable from day one.",
    variant: "blue",
  },
  {
    icon: Globe,
    year: "Focus",
    title: "Africa-First Thinking",
    description: "I build for real constraints: low bandwidth, mobile-first users, and multilingual audiences.",
    variant: "default",
  },
  {
    icon: BookOpen,
    year: "Principle",
    title: "Ship Early, Learn Fast",
    description: "I build lean, I ship early, and I solve real problems. Working software in users' hands beats perfect code in a repo.",
    variant: "default",
  },
  {
    icon: GraduationCap,
    year: "Mission",
    title: "Grow the Ecosystem",
    description: "Teaching at Starehe Boys' Centre and mentoring the next generation of Kenyan engineers.",
    variant: "default",
  },
]

const experience = [
  {
    role: "Founder & Software Engineer",
    company: "Velion Consulting",
    period: "January 2026 – Present",
    bullets: [
      "Delivered four client projects across EdTech, AgriTech, FinTech, and Climate verticals",
      "Built We Are Tell — a full-stack climate platform with Clerk auth, CNAME config, and Vercel infrastructure",
      "Built ShambaPal — a React Native agritech app connecting Kenyan farmers with real-time market data",
      "Built STTI Hub — custom LMS for Starehe Boys' Centre serving high school and adult learners",
      "Defined proprietary client engagement frameworks for consistent, high-quality project delivery",
    ],
  },
  {
    role: "Software Engineer & Tech Instructor",
    company: "Starehe Boys' Centre",
    period: "January 2026 – Present",
    bullets: [
      "Teaching full-stack web development (React, Node.js, Express) to students with no prior coding experience",
      "Students have built and shipped real projects including a Pokemon API app and a full Task Manager application",
      "Preparing adult learners for KASNEB ICT Paper 6 professional examinations",
    ],
  },
  {
    role: "Software Engineer",
    company: "Finite Pay",
    period: "February 2025 – March 2026",
    bullets: [
      "Contributed to building the Finite Pay application from the ground up as an early engineer",
      "Implemented a real-time payment processing system handling 1,000+ daily transactions",
      "Reduced API response time by 40% through performance optimization and caching strategies",
      "Developed an automated testing suite achieving 85% code coverage",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Freelance",
    period: "2023 – 2024",
    bullets: [
      "Completed multiple end-to-end client projects on time and within scope",
      "Built reusable component libraries to accelerate project delivery",
      "Worked directly with clients to translate business requirements into working software",
    ],
  },
]

export default function AboutPageContent() {
  return (
    <main className="min-h-screen bg-bg-primary">
      <div className="noise-overlay" />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
              <span className="font-mono text-xs uppercase tracking-widest text-text-primary">About Me</span>
            </div>

            <h1 className="text-display mb-6">
              Full-Stack Engineer. <br />
              <GradientText variant="blue">Founder. Instructor.</GradientText>
            </h1>

            <p className="text-body-lg mb-8 max-w-2xl">
              Building impactful software for Africa — one product at a time.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/contact">
                <button className="btn-primary">
                  Work With Me
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/portfolio">
                <button className="px-6 py-3 rounded-full border border-white/10 text-white font-medium hover:bg-white/5 transition-colors">
                  View Projects
                </button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 py-8 border-t border-white/10">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-text-muted uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section-padding section-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] w-full rounded-[2.5rem] overflow-hidden order-2 lg:order-1"
            >
              <Image
                src="/founder.jpeg"
                alt="Tevin Owino — Full-Stack Software Engineer and Founder, Nairobi Kenya"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-accent-blue/10 mix-blend-overlay" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-bg-primary/90 backdrop-blur-sm rounded-xl p-4 border border-border-subtle">
                  <div className="text-text-primary font-heading font-semibold">Tevin Owino</div>
                  <div className="text-accent-cyan text-sm font-mono">Founder & Lead Engineer · Nairobi, Kenya</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
                <span className="font-mono text-xs uppercase tracking-widest text-text-primary">Who I Am</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
                Hi, I'm <GradientText variant="blue">Tevin Owino</GradientText>
              </h2>

              <div className="space-y-4 text-text-secondary leading-relaxed mb-8">
                <p>
                  I'm a full-stack software engineer based in Nairobi, Kenya. I founded Velion Consulting in January 2026 to provide custom software development for African startups and SMEs — helping businesses turn ideas into scalable digital products without the overhead of hiring full engineering teams.
                </p>
                <p>
                  I broke into tech without a formal computer science background or industry connections. That experience shapes how I work: I build lean, I ship early, and I solve real problems. Today I work across the full stack — React and Next.js on the frontend, Node.js and Express on the backend — with a growing focus on AI-native product development.
                </p>
                <p>
                  Alongside my consulting work, I teach full-stack web development at Starehe Boys' Centre and mentor the next generation of Kenyan developers. I'm also pursuing a BSc in Computer Science at the Open University of Kenya.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Code2, label: "Full-Stack Engineer", detail: "Next.js, React, Firebase, Node.js" },
                  { icon: Globe, label: "Based in Nairobi", detail: "Working with clients across Africa" },
                  { icon: Smartphone, label: "Mobile Developer", detail: "React Native for Android & iOS" },
                  { icon: Briefcase, label: "Founder", detail: "Velion Consulting · est. 2026" },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="flex items-start gap-3 p-4 rounded-xl bg-bg-secondary border border-border-subtle">
                      <Icon className="w-4 h-4 text-accent-cyan mt-0.5 shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-text-primary">{item.label}</div>
                        <div className="text-xs text-text-muted">{item.detail}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="section-padding bg-bg-primary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 items-end mb-16">
            <div>
              <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
                <span className="font-mono text-xs uppercase tracking-widest text-text-primary">Skills & Expertise</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white">
                Technologies I build <GradientText variant="blue">with.</GradientText>
              </h2>
            </div>
            <p className="text-text-secondary leading-relaxed max-w-md">
              A full-stack toolkit spanning frontend, backend, databases, and deployment — honed across production projects for real users.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: "Frontend", skills: frontendSkills, color: "text-accent-cyan", bg: "bg-accent-cyan/10" },
              { label: "Backend", skills: backendSkills, color: "text-accent-blue", bg: "bg-accent-blue/10" },
              { label: "Databases", skills: databaseSkills, color: "text-accent-purple", bg: "bg-accent-purple/10" },
              { label: "Tools & Platforms", skills: toolSkills, color: "text-accent-green", bg: "bg-accent-green/10" },
              { label: "Areas of Expertise", skills: expertiseAreas, color: "text-amber-400", bg: "bg-amber-400/10" },
            ].map((group, index) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative p-6 rounded-2xl bg-bg-secondary border border-border-subtle hover:border-border-visible transition-colors"
              >
                <span className={`block text-xs font-mono uppercase tracking-widest mb-4 ${group.color}`}>
                  {group.label}
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-2.5 py-1 rounded-full text-xs font-medium text-text-primary border border-border-subtle ${group.bg}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values/Approach Grid */}
      <section className="section-padding section-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 items-end mb-16">
            <div>
              <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
                <span className="font-mono text-xs uppercase tracking-widest text-text-primary">How I Think</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white">
                Principles that shape <br />my work.
              </h2>
            </div>
            <p className="text-text-secondary leading-relaxed max-w-md">
              The values and convictions I bring to every project, client, and collaboration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, index) => {
              const Icon = item.icon
              const isBlue = item.variant === "blue"

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`
                    relative p-8 rounded-3xl flex flex-col justify-between min-h-[280px] group transition-all duration-300
                    ${isBlue
                      ? "bg-accent-blue border-transparent text-white shadow-lg shadow-accent-blue/20"
                      : "bg-bg-primary border border-white/5 hover:border-white/10 hover:bg-white/5"
                    }
                  `}
                >
                  <div className="flex justify-between items-start mb-auto">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isBlue ? "bg-white/20 text-white" : "bg-white/5 text-accent-cyan"}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <span className={`block text-xs font-mono uppercase tracking-widest mb-3 ${isBlue ? "text-white/80" : "text-text-muted"}`}>
                      {item.year}
                    </span>
                    <h3 className="font-heading text-xl font-bold mb-3 text-white">{item.title}</h3>
                    <p className={`text-sm leading-relaxed ${isBlue ? "text-white/90" : "text-text-secondary"}`}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="section-padding bg-bg-primary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 mb-8">
              <span className="font-mono text-xs uppercase tracking-widest text-text-primary">Professional Experience</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-12">
              Where I've <GradientText variant="blue">built things.</GradientText>
            </h2>

            <div className="space-y-8">
              {experience.map((job, index) => (
                <motion.div
                  key={job.company}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative p-6 lg:p-8 rounded-2xl bg-bg-secondary border border-border-subtle hover:border-accent-cyan/30 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-heading font-bold text-lg text-text-primary">{job.role}</h3>
                      <span className="text-accent-cyan font-medium text-sm">{job.company}</span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-bg-tertiary border border-border-subtle text-text-muted text-xs font-mono whitespace-nowrap self-start">
                      {job.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-sm text-text-secondary">
                        <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section-padding section-light">
        <div className="container-custom max-w-4xl">
          <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-text-primary">Education</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-12">
            Where I'm <GradientText variant="blue">still learning.</GradientText>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                institution: "Open University of Kenya",
                degree: "BSc Computer Science",
                period: "September 2025 – July 2028 (In Progress)",
                icon: GraduationCap,
              },
              {
                institution: "GOMYCODE Kenya",
                degree: "Full-Stack Web Development Bootcamp",
                period: "July 2024 – January 2025",
                icon: Code2,
              },
            ].map((edu) => {
              const Icon = edu.icon
              return (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-bg-secondary border border-border-subtle"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-accent-cyan" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-text-primary mb-1">{edu.institution}</h3>
                      <p className="text-accent-cyan text-sm font-medium mb-1">{edu.degree}</p>
                      <p className="text-text-muted text-xs font-mono">{edu.period}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-text-muted text-sm mb-4">Ready to build something great together?</p>
            <Link href="/contact">
              <button className="btn-primary">
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
