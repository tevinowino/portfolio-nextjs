'use client'

import { Shield, Zap, Users, Headphones, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

export function WhyChooseUsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const differentiators = [
    {
      icon: Shield,
      title: "Security-First Approach",
      description:
        "Every solution we build prioritizes data protection and compliance, giving you peace of mind and protecting your business reputation.",
      metric: "99.9%",
      metricLabel: "Uptime SLA"
    },
    {
      icon: Zap,
      title: "Built for Scale",
      description:
        "Our solutions grow with your business. Whether you're serving 100 or 100,000 customers, our architecture adapts to your needs.",
      metric: "10x",
      metricLabel: "Performance Gain"
    },
    {
      icon: Users,
      title: "Business-First Mindset",
      description:
        "We don't just build technology—we solve business problems. Every decision is made with your ROI and growth objectives in mind.",
      metric: "3x",
      metricLabel: "ROI Average"
    },
    {
      icon: Headphones,
      title: "Ongoing Partnership",
      description:
        "Your success is our success. We provide continuous support, optimization, and strategic guidance long after launch.",
      metric: "24/7",
      metricLabel: "Support Coverage"
    },
  ]

  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="lg:max-w-2xl">
              <h2 className="text-4xl lg:text-5xl text-navy font-saira mb-6 leading-tight">
                Why <span className="font-bold text-blue-800">Velion Labs</span>?
              </h2>
              <p className="text-xl text-gray-600 font-saira leading-relaxed">
                We're not just another development agency. We're your strategic technology partner, committed to your long-term success.
              </p>
            </div>
            <div className="text-right">
              <img src="/text-logo-no-bg.png" alt="Logo" className="w-20"/>
            </div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Image Section */}

          {/* Differentiators */}
          <div className="lg:col-span-2 space-y-1">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                className="group relative bg-white border-l-4 border-gray-200 hover:border-blue-800 transition-all duration-300"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <div className="p-8 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-6 flex-1">
                      {/* Icon */}
                      <div className="w-12 h-12 bg-navy flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-semibold text-navy mb-3 group-hover:text-blue-800 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Metric */}
                    <div className="text-right ml-6 flex-shrink-0">
                      <div className="text-2xl font-bold text-navy">{item.metric}</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">
                        {item.metricLabel}
                      </div>
                    </div>

                    {/* Arrow */}
                    <motion.div
                      className="ml-4 opacity-0 group-hover:opacity-100 flex-shrink-0"
                      initial={{ x: -10 }}
                      animate={{ x: hoveredIndex === index ? 0 : -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="h-5 w-5 text-blue-800" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center space-x-8 p-6 bg-white border border-gray-200">
            <div className="text-left">
              <div className="text-lg font-semibold text-navy">Ready to get started?</div>
              <div className="text-gray-600">Let's discuss your project requirements</div>
            </div>
            <motion.button
              className="px-8 py-3 bg-navy text-white font-medium hover:bg-blue-800 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule a Call
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}