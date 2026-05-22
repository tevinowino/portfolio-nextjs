"use client"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle, ArrowRight, Globe, Settings, Smartphone, Rocket, GraduationCap, BarChart3 } from "lucide-react"
import Link from "next/link"
import { GradientText } from "@/components/ui/gradient-text"

const USD_RATE = 130

type Currency = "KES" | "USD"

function formatPrice(kesAmount: number, currency: Currency, suffix = "") {
  if (currency === "USD") {
    const usd = Math.round(kesAmount / USD_RATE)
    return `From $${usd.toLocaleString()}${suffix}`
  }
  return `From KSh ${kesAmount.toLocaleString()}${suffix}`
}

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description: "Professional, fast-loading websites that turn visitors into clients. From landing pages to full business sites with CMS.",
    features: [
      "Landing pages",
      "Business websites with CMS",
      "E-commerce with M-Pesa integration",
      "Mobile-responsive design",
      "SEO-ready structure from day one",
      "WhatsApp & contact form integration",
    ],
    basePrice: 25000,
    priceSuffix: "",
    timeline: "1–4 weeks",
    href: "/pricing",
  },
  {
    icon: GraduationCap,
    title: "School Management Systems",
    description: "Purpose-built systems for Kenyan schools — replacing spreadsheets and paper registers with real-time dashboards.",
    features: [
      "Student records & enrollment management",
      "Attendance tracking per session",
      "Grade entry & performance dashboards",
      "Parent portal for progress visibility",
      "CBC curriculum alignment",
      "One-click cohort reports",
    ],
    basePrice: 100000,
    priceSuffix: "",
    timeline: "4–8 weeks",
    href: "/portfolio/stti-hub",
  },
  {
    icon: Settings,
    title: "Custom Software & Internal Tools",
    description: "Bespoke business software — CRMs, inventory systems, HR tools, and operational platforms built for your exact workflow.",
    features: [
      "CRM & customer tracking systems",
      "Inventory & procurement management",
      "HR & payroll tracking tools",
      "API development & system integrations",
      "Admin dashboards & reporting",
      "Role-based access control",
    ],
    basePrice: 100000,
    priceSuffix: "",
    timeline: "6–16 weeks",
    href: "/pricing",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform mobile apps (iOS & Android) built with React Native. Offline-first, bilingual, and optimized for Kenyan users.",
    features: [
      "React Native for iOS & Android",
      "Offline-first architecture",
      "Swahili & English language support",
      "M-Pesa & payment integrations",
      "Push notifications & real-time updates",
      "App Store & Play Store deployment",
    ],
    basePrice: 150000,
    priceSuffix: "",
    timeline: "8–16 weeks",
    href: "/portfolio/shambapal",
  },
  {
    icon: Rocket,
    title: "SaaS & Platform Development",
    description: "Multi-tenant SaaS products and full digital platforms for startups and scale-ups entering the Kenyan market.",
    features: [
      "Multi-tenant SaaS architecture",
      "User authentication & role management",
      "Real-time features & notifications",
      "AI integrations & smart matching",
      "Subscription & payment infrastructure",
      "Admin control panels",
    ],
    basePrice: 200000,
    priceSuffix: "",
    timeline: "12–24 weeks",
    href: "/portfolio/learnify",
  },
  {
    icon: BarChart3,
    title: "SEO & Digital Growth",
    description: "Search engine optimisation for Kenyan businesses — structured data, on-page SEO, and content strategy to drive organic traffic.",
    features: [
      "Technical SEO audit & fixes",
      "Structured data (schema markup)",
      "Google Business Profile setup",
      "Local SEO for Nairobi & Kenya",
      "On-page optimisation",
      "Monthly performance reporting",
    ],
    basePrice: 15000,
    priceSuffix: "/mo",
    timeline: "Ongoing",
    href: "/contact",
  },
]

const process = [
  {
    step: "01",
    title: "Discovery Call",
    description: "We meet to understand your business goals, current pain points, and what success looks like for your project.",
  },
  {
    step: "02",
    title: "Proposal & Scope",
    description: "We send a clear written proposal with timeline, deliverables, and milestone-based pricing — no surprises.",
  },
  {
    step: "03",
    title: "Design & Build",
    description: "We design, develop, and keep you updated throughout. You review at every milestone before we move forward.",
  },
  {
    step: "04",
    title: "Launch & Handover",
    description: "We deploy, test, and hand over your project with documentation and training so you're never stuck.",
  },
  {
    step: "05",
    title: "Ongoing Support",
    description: "Monthly retainers available for maintenance, updates, and continued growth of your digital product.",
  },
]

export default function ServicesPageContent() {
  const [currency, setCurrency] = useState<Currency>("KES")
  const { scrollY } = useScroll()
  const orbY = useTransform(scrollY, [0, 600], [0, -100])

  return (
    <main className="min-h-screen bg-bg-primary">
      <div className="noise-overlay" />
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div style={{ y: orbY }} className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-blue/5 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10 max-w-3xl text-center mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-accent-cyan mb-4">
              What We Build
            </span>
            <h1 className="text-display mb-6">
              Services Built for{" "}
              <GradientText variant="blue">Kenyan Businesses</GradientText>
            </h1>
            <p className="text-text-secondary text-lg max-w-xl mx-auto mb-8">
              From a KSh 25,000 landing page to a fully custom SaaS platform — we build digital products that work the way your business works.
            </p>
            <Link href="/pricing">
              <button className="btn-primary">
                View Transparent Pricing
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Sticky Currency Toggle */}
      <div className="sticky top-28 z-50 flex justify-center -mt-8 mb-12 pointer-events-none px-4">
        <div className="inline-flex items-center p-1.5 rounded-full bg-[#0d1117]/80 backdrop-blur-md border border-white/10 pointer-events-auto shadow-2xl">
          <button
            onClick={() => setCurrency("KES")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              currency === "KES" ? "bg-white text-black shadow-sm" : "text-text-muted hover:text-white"
            }`}
          >
            KES
          </button>
          <button
            onClick={() => setCurrency("USD")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              currency === "USD" ? "bg-white text-black shadow-sm" : "text-text-muted hover:text-white"
            }`}
          >
            USD
          </button>
        </div>
      </div>

      {/* Services Grid */}
      <section className="section-padding pt-0 section-light">
        <div className="container-custom max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="h-full rounded-2xl border border-border-subtle bg-bg-primary p-6 hover:border-accent-cyan/30 transition-colors duration-200 flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center mb-4 group-hover:bg-accent-cyan/20 transition-colors">
                      <Icon className="w-6 h-6 text-accent-cyan" />
                    </div>
                    <h2 className="font-heading font-bold text-text-primary text-lg mb-2">
                      {service.title}
                    </h2>
                    <p className="text-text-secondary text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6 flex-1">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-text-secondary">
                          <CheckCircle className="w-4 h-4 text-accent-cyan mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-border-subtle">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-accent-cyan font-heading font-semibold text-sm">
                          {formatPrice(service.basePrice, currency, service.priceSuffix)}
                        </span>
                        <span className="text-text-muted text-xs font-mono">{service.timeline}</span>
                      </div>
                      <Link href={service.href}>
                        <button className="w-full py-2.5 px-4 rounded-xl border border-accent-cyan/30 text-accent-cyan text-sm font-medium hover:bg-accent-cyan/10 transition-colors flex items-center justify-center gap-2 group-hover:border-accent-cyan/60">
                          Learn More
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-padding bg-bg-primary">
        <div className="container-custom max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-accent-cyan mb-4">
              How It Works
            </span>
            <h2 className="text-headline mb-4">
              How Does Velion's <GradientText variant="blue">Development Process Work?</GradientText>
            </h2>
            <p className="text-body">
              A simple, transparent process that keeps you informed at every stage.
            </p>
          </motion.div>

          <div className="space-y-6">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-accent-cyan/10 border border-accent-cyan/40 flex items-center justify-center font-mono text-accent-cyan font-bold text-sm flex-shrink-0">
                    {step.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="w-px flex-1 bg-border-subtle mt-2" />
                  )}
                </div>
                <div className="pb-6">
                  <h3 className="font-heading font-semibold text-text-primary mb-1">{step.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-bg-secondary pb-20">
        <div className="container-custom max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border-subtle bg-bg-primary p-8 lg:p-12 text-center"
          >
            <h2 className="font-heading font-bold text-2xl text-text-primary mb-3">
              Ready to Build Something?
            </h2>
            <p className="text-text-muted mb-8 max-w-md mx-auto">
              Book a free discovery call. We'll listen first, then tell you exactly what we'd build and what it would cost.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="btn-primary">
                  Book a Free Call
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/pricing">
                <button className="btn-secondary">
                  View Pricing
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
