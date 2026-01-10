"use client"

import { Heart, Users, Briefcase, Star, ArrowRight, ShieldCheck, Zap } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GradientText } from "@/components/ui/gradient-text"
import Link from "next/link"

const capabilities = [
  {
    icon: Users,
    title: "We Humanize Tech",
    description: "Technology should feel natural, not alien. We build interfaces that your grandmother could use.",
    stat: "Zero Learning Curve",
  },
  {
    icon: ShieldCheck,
    title: "We Guard Your Peace",
    description: "Security isn't a feature; it's a promise. We build fortress-grade systems so you can sleep soundly.",
    stat: "100% Secure",
  },
  {
    icon: Zap,
    title: "We Accelerate Growth",
    description: "Speed matters. Our optimized performance ensures you never lose a customer to a loading screen.",
    stat: "< 1s Load Time",
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="what-we-do" className="section-padding bg-bg-primary relative overflow-hidden pt-[300px] sm:pt-0" ref={ref}>
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-accent-cyan mb-4">
              What We Do
            </span>
            
            <h2 className="text-display mb-8">
              We Don't Just Write Code, We <GradientText variant="blue">Solve Your Headaches</GradientText>.
            </h2>
            
            <p className="text-body-lg mb-8">
              At Velion, we believe technology should be a source of relief, not stress. 
              We've seen brilliant headteachers buried in paperwork, manufacturers losing sleep over inventory, 
              and retailers overwhelmed by slow sales.
            </p>
            
            <p className="text-text-secondary mb-10 leading-relaxed">
              We exist to give you back your time and your passion by making technology invisible, 
              intuitive, and helpful. We advocate for your peace of mind in a digital world.
            </p>

            <Link href="/about">
              <motion.button 
                className="group flex items-center gap-2 text-text-primary font-medium hover:text-accent-cyan transition-colors"
                whileHover={{ x: 4 }}
              >
                Read Our Story
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Visual - Modern Cards Stack */}
          <div className="relative">
            <div className="grid gap-6">
              {capabilities.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="group relative"
                  >
                    <div className="relative rounded-2xl bg-bg-secondary border border-border-subtle p-6 hover:border-accent-cyan/30 transition-colors duration-300">
                      {/* Hover Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                      
                      <div className="relative flex items-start gap-5">
                        <div className="w-12 h-12 rounded-xl bg-bg-tertiary flex items-center justify-center flex-shrink-0 group-hover:bg-accent-cyan/10 transition-colors duration-300">
                          <Icon className="w-6 h-6 text-text-secondary group-hover:text-accent-cyan transition-colors duration-300" />
                        </div>
                        
                        <div>
                          <h3 className="font-heading font-semibold text-lg text-text-primary mb-2 group-hover:text-accent-cyan transition-colors duration-300">
                            {item.title}
                          </h3>
                          <p className="text-sm text-text-muted leading-relaxed mb-3">
                            {item.description}
                          </p>
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-bg-tertiary/50 border border-border-subtle text-xs font-mono text-accent-cyan">
                            <Star className="w-3 h-3 fill-accent-cyan" />
                            {item.stat}
                          </div>
                        </div>
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
