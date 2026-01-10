"use client"

import { Palette, Wrench, Server, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"

const services = [
  {
    icon: Palette,
    title: "Custom Web Design",
    description: "Visually striking, mobile-first websites that turn visitors into loyal clients.",
    features: ["UI/UX Design", "Responsive Layouts", "Brand Identity"],
    color: "text-rose-400",
    bg: "bg-rose-400/10",
    border: "group-hover:border-rose-400/30",
    gradient: "from-rose-500/20 to-pink-500/5",
  },
  {
    icon: Wrench,
    title: "System Maintenance",
    description: "Proactive security updates and optimizations to ensure 100% peace of mind.",
    features: ["Security Audits", "Daily Backups", "Speed Optimization"],
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "group-hover:border-amber-400/30",
    gradient: "from-amber-500/20 to-orange-500/5",
  },
  {
    icon: Server,
    title: "Web Hosting & Security",
    description: "High-performance servers with 99.9% uptime and fortress-grade security.",
    features: ["SSL Certificates", "DDoS Protection", "CDN Integration"],
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "group-hover:border-emerald-400/30",
    gradient: "from-emerald-500/20 to-teal-500/5",
  },
  {
    icon: TrendingUp,
    title: "Digital Strategy & SEO",
    description: "Data-driven strategies to climb search rankings and dominate your market.",
    features: ["Keyword Research", "Content Strategy", "Analytics Setup"],
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "group-hover:border-blue-400/30",
    gradient: "from-blue-500/20 to-cyan-500/5",
  },
]

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="section-padding bg-bg-primary relative overflow-hidden" ref={ref}>
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-blue/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Header */}
          <motion.div 
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-accent-cyan mb-4">
              More Growth Solutions
            </span>
            <h2 className="text-headline mb-6">
              Keep Your <br />
              <span className="text-white/50">Presence Strong</span>
            </h2>
            <p className="text-body mb-8">
              Beyond the core systems, we provide the essential fuel to keep your digital engine running smoothly. From robust security to pixel-perfect design.
            </p>
            <Link href="/contact">
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Side: Grid */}
          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  >
                    <div className={`group h-full relative overflow-hidden rounded-2xl bg-bg-secondary border border-white/5 p-6 hover:bg-white/5 transition-colors duration-300 ${service.border}`}>
                      
                      {/* Hover Gradient Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      
                      <div className="relative z-10">
                        {/* Icon */}
                        <div className={`w-12 h-12 rounded-xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className={`w-6 h-6 ${service.color}`} />
                        </div>

                        {/* Content */}
                        <h3 className="font-heading font-semibold text-lg text-text-primary mb-3">
                          {service.title}
                        </h3>
                        <p className="text-text-secondary text-sm leading-relaxed mb-6">
                          {service.description}
                        </p>

                        {/* Features List */}
                        <ul className="space-y-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-xs font-medium text-text-muted group-hover:text-text-primary transition-colors">
                              <CheckCircle2 className={`w-3 h-3 ${service.color}`} />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
