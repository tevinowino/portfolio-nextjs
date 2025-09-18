"use client"

import { Target, Heart, Lightbulb } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Helping businesses unlock their potential through smart technology choices",
    },
    {
      icon: Heart,
      title: "People-First",
      description: "Building lasting partnerships based on trust, transparency, and results",
    },
    {
      icon: Lightbulb,
      title: "Innovation-Focused",
      description: "Staying ahead of technology trends to keep your business competitive",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 md:px-6 lg:px-8 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-navy mb-6 text-balance font-saira"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Built to keep your business in the technology wave
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 mb-6 leading-relaxed font-saira"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Founded by technology veterans who understand the challenges of scaling a business, Velion Labs was born
              from a simple belief: technology should accelerate growth, not hinder it.
            </motion.p>
            <motion.p
              className="text-lg text-gray-600 mb-8 leading-relaxed font-saira"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              We've been in your shoes. We know what it's like to need technology solutions that actually work,
              delivered by people who understand your business goals, not just code.
            </motion.p>

            <div className="space-y-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.8 + index * 0.2,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    x: 10,
                    transition: { duration: 0.2 },
                  }}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <value.icon className="h-6 w-6 text-teal mt-1 flex-shrink-0" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 50, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <motion.div
              className="bg-gradient-to-br from-teal/10 to-orange/10 rounded-2xl p-8"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.3 },
              }}
            >
              <motion.img
                src="/about.png"
                alt="Velion Labs team collaborating on technology solutions"
                className="w-full h-auto rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
