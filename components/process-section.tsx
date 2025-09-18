"use client"

import { Search, Target, Settings, Trophy } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const processSteps = [
    {
      title: "Initial Consultation",
      description:
        "We meet with you to understand your business, project goals, and user needs—defining the scope and vision of your website or software.",
      icon: Search,
    },
    {
      title: "Design & Planning",
      description:
        "Our designers and developers create wireframes, prototypes, and a clear roadmap to ensure a smooth development process.",
      icon: Target,
    },
    {
      title: "Development & Testing",
      description:
        "We build your website or software with clean, scalable code, integrating features while testing for performance and usability.",
      icon: Settings,
    },
    {
      title: "Launch & Support",
      description:
        "We deliver your fully functional product, provide training, and offer ongoing support to ensure your solution grows with your business.",
      icon: Trophy,
    },
  ]

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-[#0A192F] text-white" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-saira mb-6 text-[#2563EB]">
            Our Process for Building Websites & Software
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From the first consultation to delivering your fully functional product, we guide you through every step to ensure success.
          </p>
        </motion.div>

        {/* Vertical timeline */}
        <div className="relative border-l-2 border-[#2563EB]/40 ml-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="mb-10 ml-6 relative"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-6 top-0 w-12 h-12 rounded-full bg-[#2563EB]/20 flex items-center justify-center border-2 border-[#2563EB]">
                <step.icon className="w-6 h-6 text-[#2563EB]" />
              </div>
              <div className="pl-6">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
