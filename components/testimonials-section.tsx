"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GradientText } from "@/components/ui/gradient-text"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Siloma Stephen",
    role: "Founder",
    company: "Digital Moran",
    quote: "Velion Consulting built the entire Digital Moran Agency Platform from the ground up. The system handles gigs, jobs, real-time chat, dispute resolution, and AI matching. It's exactly what we envisioned and more.",
    avatar: "SS",
  },
  {
    name: "STTI Programme Lead",
    role: "Programme Director",
    company: "Starehe Boys' Centre",
    quote: "The system went live on day one of the cohort without a single issue. Our instructors adapted immediately and students love seeing their dashboards. It made the whole programme feel more professional.",
    avatar: "SP",
  },
  {
    name: "Farmer, Nakuru County",
    role: "Early User",
    company: "ShambaPal",
    quote: "Before ShambaPal, I was writing everything in a notebook that I kept losing. Now I can see exactly what I spent and what I earned from each season, right on my phone.",
    avatar: "NK",
  },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="section-padding bg-bg-secondary relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-purple/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block font-mono text-xs uppercase tracking-widest text-accent-cyan mb-4">
            Testimonials
          </span>
          <h2 className="text-headline mb-4">
            What Our <GradientText variant="blue">Clients Say</GradientText>
          </h2>
          <p className="text-body">
            Real feedback from real businesses we've built for.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group"
            >
              <div className="relative h-full p-px rounded-2xl bg-gradient-to-b from-white/10 via-white/5 to-transparent">
                  <div className="h-full rounded-2xl bg-bg-primary/80 backdrop-blur-sm p-6 lg:p-8 flex flex-col">
                    {/* Large quote mark */}
                    <Quote className="w-8 h-8 text-accent-cyan/40 mb-4 flex-shrink-0" />

                    {/* Quote */}
                    <p className="text-text-secondary leading-relaxed flex-1 mb-6">
                      "{testimonial.quote}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-border-subtle">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-cyan to-accent-blue flex items-center justify-center text-white font-heading font-semibold text-sm ring-2 ring-accent-cyan/20 flex-shrink-0">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-text-primary text-sm">
                          {testimonial.name}
                        </h3>
                        <p className="text-text-muted text-xs">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
