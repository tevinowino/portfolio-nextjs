"use client"

import { Search, Target, Settings, Trophy } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const processSteps = [
    {
      title: "Initial Consultation",
      description:
        "We meet with you to understand your business, project goals, and user needs—defining the scope and vision of your website or software.",
      icon: Search,
      step: "01",
    },
    {
      title: "Design & Planning",
      description:
        "Our designers and developers create wireframes, prototypes, and a clear roadmap to ensure a smooth development process.",
      icon: Target,
      step: "02",
    },
    {
      title: "Development & Testing",
      description:
        "We build your website or software with clean, scalable code, integrating features while testing for performance and usability.",
      icon: Settings,
      step: "03",
    },
    {
      title: "Launch & Support",
      description:
        "We deliver your fully functional product, provide training, and offer ongoing support to ensure your solution grows with your business.",
      icon: Trophy,
      step: "04",
    },
  ]

  return (
    <section
      className="bg-gradient-to-br from-[#0A192F] to-[#1a365d] text-white py-20 px-4 md:px-6 lg:px-8"
      ref={ref}
      id="process"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-balance font-saira mb-6">
            Our <span className="text-[#2563EB]">Proven Process</span> for Success
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed text-pretty font-saira">
            From the first consultation to delivering your fully functional product, we guide you through every step to
            ensure success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[#2563EB] to-transparent z-0" />
              )}

              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#2563EB] rounded-full flex items-center justify-center text-white font-bold font-saira text-lg shadow-lg">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="mb-6 p-4 bg-[#2563EB]/20 rounded-xl w-fit group-hover:bg-[#2563EB]/30 transition-colors duration-300">
                  <step.icon className="w-8 h-8 text-[#2563EB]" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4 font-saira text-white group-hover:text-[#2563EB] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed font-saira">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-[#2563EB] hover:bg-[#2563EB]/90 text-white px-8 py-4 rounded-full transition-all duration-300 font-saira text-lg"
            >
              Start Your Project Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
