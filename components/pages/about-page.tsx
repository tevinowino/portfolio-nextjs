"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GradientText } from "@/components/ui/gradient-text"
import { CheckCircle2, Heart, Sparkles, Shield, Code2, ArrowRight, Zap, Target } from "lucide-react"
import Link from "next/link"

// Stats for the Hero
const heroStats = [
  { value: "99%", label: "Client Satisfaction" },
  { value: "100%", label: "Kenyan Talent" },
  { value: "24/7", label: "Support System" },
]

// Capabilities for the Feature Section
const capabilities = [
  "Measurable Business Growth",
  "Human-Centric Design",
  "Customized Cloud Systems",
  "Reliable Expert Guidance",
  "Multi-Industry Expertise",
  "Long-Term Partnership",
]

// Values/Milestones for the Grid
const values = [
  {
    icon: Target,
    year: "2025",
    title: "The Vision",
    description: "Founded with a clear mission: to bridge the gap between complex code and human peace of mind.",
    variant: "blue", // Featured card style
  },
  {
    icon: Heart,
    year: "Values",
    title: "Empathy First",
    description: "We solve human frustrations before we write a single line of code.",
    variant: "default",
  },
  {
    icon: Sparkles,
    year: "Method",
    title: "Radical Simplicity",
    description: "Complexity is lazy. We obsess over making your technology invisible.",
    variant: "default",
  },
  {
    icon: Shield,
    year: "Promise",
    title: "Unyielding Integrity",
    description: "Your data is sacred. We treat your business ROI as if it were our own.",
    variant: "default",
  },
]

export default function AboutPageContent() {
  return (
    <main className="min-h-screen bg-bg-primary">
      <div className="noise-overlay" />
      <Header />

      {/* Hero Section - Matched to Reference Layout */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 section-padding">
        <div className="container-custom">
          <div className="items-center">
            
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
                <span className="font-mono text-xs uppercase tracking-widest text-text-primary">About Us</span>
              </div>
              
              <h1 className="text-display mb-6">
                Born to <br />
                <GradientText variant="blue">Humanize Tech</GradientText>
              </h1>
              
              <p className="text-body-lg mb-8">
                Velion Consulting wasn't founded to build "apps." It was founded to meaningfully improve the lives of Kenyan business owners. We bridge the gap between cutting-edge code and your peace of mind.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Link href="/contact">
                  <button className="btn-primary">
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                <Link href="/portfolio">
                   <button className="px-6 py-3 rounded-full border border-white/10 text-white font-medium hover:bg-white/5 transition-colors">
                    View Our Work
                  </button>
                </Link>
              </div>

              {/* Stats Row */}
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
        </div>
      </section>

      {/* Feature Section - Image Left, Text Right */}
      <section className="section-padding bg-bg-primary">
        <div className="container-custom">
           <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              {/* Left: Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-[500px] w-full rounded-[2.5rem] overflow-hidden order-2 lg:order-1"
              >
                 <img 
                   src="https://images.unsplash.com/photo-1573164574230-db1d5e960238?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dr"
                   alt="Team Collaboration"
                   className="absolute inset-0 w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-accent-blue/10 mix-blend-overlay" />
              </motion.div>

              {/* Right: Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                 <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
                    <span className="font-mono text-xs uppercase tracking-widest text-text-primary">Our Mission</span>
                 </div>
                 
                 <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
                    Unlock our expertise to drive <GradientText variant="blue">success across industries.</GradientText>
                 </h2>
                 
                 <p className="text-text-secondary leading-relaxed mb-8">
                    "When software works, you don't notice it. You just go home on time. You see your kids. You sleep better. That's what we build."
                 </p>

                 {/* Checkmark Layout */}
                 <div className="grid sm:grid-cols-2 gap-4">
                    {capabilities.map((cap) => (
                      <div key={cap} className="flex items-center gap-3">
                         <CheckCircle2 className="w-5 h-5 text-accent-cyan flex-shrink-0" />
                         <span className="text-sm font-medium text-white/90">{cap}</span>
                      </div>
                    ))}
                 </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* Values/Milestones Grid */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-custom">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-8 items-end mb-16">
            <div>
               <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
                  <span className="font-mono text-xs uppercase tracking-widest text-text-primary">Our DNA</span>
               </div>
               <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white">
                  Our journey, values <br /> and principles.
               </h2>
            </div>
            <p className="text-text-secondary leading-relaxed max-w-md">
               Discover the driving forces that shape our firm. Each principle reflects our commitment to excellence and your peace of mind.
            </p>
          </div>

          {/* Grid Cards */}
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
                      relative p-8 rounded-3xl flex flex-col justify-between min-h-[320px] group transition-all duration-300
                      ${isBlue 
                        ? "bg-accent-blue border-transparent text-white shadow-lg shadow-accent-blue/20" 
                        : "bg-bg-primary border border-white/5 hover:border-white/10 hover:bg-white/5"
                      }
                   `}
                 >
                    {/* Icon & Year */}
                    <div className="flex justify-between items-start mb-auto">
                       <div className={`
                          w-12 h-12 rounded-full flex items-center justify-center
                          ${isBlue ? "bg-white/20 text-white" : "bg-white/5 text-accent-cyan"}
                       `}>
                          <Icon className="w-6 h-6" />
                       </div>
                    </div>

                    {/* Content */}
                    <div>
                        <span className={`block text-xs font-mono uppercase tracking-widest mb-3 ${isBlue ? "text-white/80" : "text-text-muted"}`}>
                           {item.year}
                        </span>
                        <h3 className={`font-heading text-xl font-bold mb-3 ${isBlue ? "text-white" : "text-white"}`}>
                           {item.title}
                        </h3>
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

      <Footer />
    </main>
  )
}
