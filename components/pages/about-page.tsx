"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GradientText } from "@/components/ui/gradient-text"
import { CheckCircle2, Heart, Sparkles, Shield, ArrowRight, Target, Code2, Globe, Smartphone, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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
      <section className="section-padding section-light">
        <div className="container-custom">
           <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              {/* Left: Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-[500px] w-full rounded-[2.5rem] overflow-hidden order-2 lg:order-1"
              >
                 <Image 
                   src="https://images.unsplash.com/photo-1573164574230-db1d5e960238?q=80&w=2069&auto=format&fit=crop"
                   alt="Team Collaboration"
                   fill
                   sizes="(max-width: 1024px) 100vw, 50vw"
                   className="object-cover"
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
      <section className="section-padding bg-bg-primary">
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

      {/* Founder Section — E-E-A-T signal for AI search engines */}
      <section className="section-padding section-light" id="founder">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 mb-8">
              <span className="font-mono text-xs uppercase tracking-widest text-text-primary">The Person Behind the Code</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Bio */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
                  Hi, I'm <GradientText variant="blue">Tevin Owino</GradientText>
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  I'm a full-stack software engineer based in Nairobi, Kenya, and the founder of Velion Consulting. I started this agency because I kept watching talented Kenyan business owners lose time, money, and sleep to software that didn't fit their reality.
                </p>
                <p className="text-text-secondary leading-relaxed mb-4">
                  I personally oversee every project from the first discovery call to the final deployment. No account managers, no hand-offs to junior developers. When you hire Velion Consulting, you get me — and my full attention on your business.
                </p>
                <p className="text-text-secondary leading-relaxed mb-8">
                  I've built platforms for NGOs, schools, farmers, and agencies across Kenya. Every project has taught me that the best software is the kind you forget is there — because it just works.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Code2, label: "Full-Stack Engineer", detail: "Next.js, React, Firebase, Supabase" },
                    { icon: Globe, label: "Based in Nairobi", detail: "Working with clients across Kenya" },
                    { icon: Smartphone, label: "Mobile Developer", detail: "React Native for iOS & Android" },
                    { icon: BookOpen, label: "Founded 2025", detail: "Built for Kenyan businesses" },
                  ].map((item) => {
                    const Icon = item.icon
                    return (
                      <div key={item.label} className="flex items-start gap-3 p-4 rounded-xl bg-bg-secondary border border-border-subtle">
                        <Icon className="w-4 h-4 text-accent-cyan mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-sm font-medium text-text-primary">{item.label}</div>
                          <div className="text-xs text-text-muted">{item.detail}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </motion.div>

              {/* Right: Photo placeholder + CTA */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-8"
              >
                <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-3xl overflow-hidden border-2 border-accent-cyan/20">
                  <Image
                    src="/founder.jpeg"
                    alt="Tevin Owino — Founder, Velion Consulting"
                    fill
                    sizes="320px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-text-primary font-heading font-semibold text-sm">Tevin Owino</div>
                    <div className="text-accent-cyan text-xs font-mono">Founder & Lead Engineer</div>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-text-muted text-sm mb-4">Ready to build something great together?</p>
                  <Link href="/contact">
                    <button className="btn-primary">
                      Book a Free Call
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
