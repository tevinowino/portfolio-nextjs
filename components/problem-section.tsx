"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Globe, Zap, Code, TrendingUp, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProblemSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const problems = [
    {
      title: "Website or App Not Driving Results?",
      description: "Many businesses have online platforms that fail to engage visitors or convert them into customers.",
      solution:
        "We design and develop websites and apps that attract, engage, and convert users, turning your online presence into a growth engine.",
      impact: "Average 150% increase in conversion rates and 80% improvement in user engagement within 3 months.",
      icon: Globe,
      color: "from-blue-500/10 to-blue-600/5",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: "Operational Inefficiencies?",
      description:
        "Manual processes and slow workflows can drain time and resources, slowing down your business growth.",
      solution:
        "We optimize workflows, automate repetitive tasks, and integrate technology to make your operations faster, smarter, and more cost-effective.",
      impact: "Reduce operational costs by 40% and increase team productivity by 200% through smart automation.",
      icon: Zap,
      color: "from-amber-500/10 to-amber-600/5",
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
    },
    {
      title: "Complex Technology Needs?",
      description:
        "Upgrading systems or building custom solutions can feel overwhelming and risky for growing businesses.",
      solution:
        "We create reliable, scalable web apps and custom SaaS platforms tailored to your business, ensuring technology supports your growth rather than hindering it.",
      impact: "Launch custom solutions 60% faster with 99.9% uptime and seamless scalability for future growth.",
      icon: Code,
      color: "from-purple-500/10 to-purple-600/5",
      iconBg: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      title: "Difficulty Staying Competitive?",
      description: "Market shifts and competition can make it hard to know where to focus your efforts for growth.",
      solution:
        "We provide data-driven insights, market research, and strategic guidance to help you make informed decisions and stay ahead of the competition.",
      impact:
        "Achieve 3x faster market response time and 120% revenue growth through strategic digital transformation.",
      icon: TrendingUp,
      color: "from-emerald-500/10 to-emerald-600/5",
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
  ]

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-[#0A192F]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 text-balance font-saira">
              Are You Running Into These Problems?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-saira">
              We understand the challenges growing businesses face. Here's how we help solve them.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem, index) => {
              const IconComponent = problem.icon
              const isHovered = hoveredIndex === index

              return (
                <motion.div
                  key={index}
                  className="relative overflow-hidden rounded-2xl cursor-pointer group bg-white border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    transition: { duration: 0.3 },
                  }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  layout
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${problem.color}`}
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: isHovered ? 0.8 : 0.5 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Content */}
                  <div className="relative z-10 p-6 h-full flex flex-col">
                    {/* Icon */}
                    <motion.div
                      className="flex justify-center mb-4"
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <motion.div
                        className={`w-12 h-12 ${problem.iconBg} rounded-full flex items-center justify-center`}
                        whileHover={{
                          rotate: 360,
                          transition: { duration: 0.3 },
                        }}
                      >
                        <IconComponent className={`w-6 h-6 ${problem.iconColor}`} />
                      </motion.div>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-navy text-center mb-3 font-saira">{problem.title}</h3>

                    {/* Problem Description */}
                    <p className="text-gray-600 leading-relaxed text-center text-sm mb-4 font-saira">
                      {problem.description}
                    </p>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, y: 20 }}
                          animate={{ opacity: 1, height: "auto", y: 0 }}
                          exit={{ opacity: 0, height: 0, y: 20 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="mt-auto"
                        >
                          <div className="border-t border-gray-200 pt-4 space-y-4">
                            {/* Solution */}
                            <div>
                              <h4 className="text-sm font-semibold text-navy mb-2 font-saira">Our Solution:</h4>
                              <p className="text-xs text-gray-600 leading-relaxed font-saira">{problem.solution}</p>
                            </div>

                            {/* Impact */}
                            <div>
                              <h4 className="text-sm font-semibold text-navy mb-2 font-saira">Expected Impact:</h4>
                              <p className="text-xs text-emerald-700 font-medium leading-relaxed font-saira">
                                {problem.impact}
                              </p>
                            </div>

                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                              <Button className="w-full bg-teal hover:bg-teal/90 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 mt-4 font-saira group">
                                Get Started
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </Button>
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-teal/5 to-blue/5 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              )
            })}
          </div>

          <motion.div
            className="text-center mt-12 pt-8 border-t border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <p className="text-lg text-gray-600 mb-6 font-saira">
              Ready to solve these challenges and accelerate your business growth?
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-[#03102b] hover:bg-[#03102b]/90 text-white px-8 py-4 rounded-full font-saira group"
              >
                Book a Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
