"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GradientText } from "@/components/ui/gradient-text"

const testimonials = [
  {
    name: "Sarah Muthoni",
    role: "School Administrator",
    quote: "Since integrating their school management system, we've experienced a significant improvement in efficiency. Our teachers finally have their weekends back!",
    avatar: "SM",
  },
  {
    name: "David Ochieng",
    role: "Factory Manager",
    quote: "I've tested numerous inventory solutions, but Velion stands out for its intuitive design and comprehensive functionality. No more sleepless nights over stock.",
    avatar: "DO",
  },
  {
    name: "Emily Wanjiku",
    role: "E-commerce Owner",
    quote: "The e-commerce platform they built has surpassed our expectations, providing invaluable insights and support as our business continues to grow.",
    avatar: "EW",
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
        {/* Grid Pattern */}
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
            Discover what our satisfied customers have to say about their experiences working with us.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group"
            >
              <div className="relative h-full p-px rounded-2xl bg-gradient-to-b from-white/10 via-white/5 to-transparent">
                <div className="h-full rounded-2xl bg-bg-primary/80 backdrop-blur-sm p-6 lg:p-8">
                  {/* Avatar */}
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-cyan to-accent-blue flex items-center justify-center text-white font-heading font-semibold text-lg ring-4 ring-accent-cyan/20">
                      {testimonial.avatar}
                    </div>
                  </div>

                  {/* Name & Role */}
                  <div className="mb-4">
                    <h3 className="font-heading font-semibold text-text-primary">
                      {testimonial.name}
                    </h3>
                    <p className="text-text-muted text-sm">
                      {testimonial.role}
                    </p>
                  </div>

                  {/* Quote */}
                  <p className="text-text-secondary leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
