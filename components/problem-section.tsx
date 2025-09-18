"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Globe, Zap, Code, TrendingUp, Phone } from "lucide-react"

export function ProblemSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState(null)

const problems = [
  {
    title: "Website or App Not Driving Results?",
    description:
      "Many businesses have online platforms that fail to engage visitors or convert them into customers.",
    solution:
      "We design and develop websites and apps that attract, engage, and convert users, turning your online presence into a growth engine.",
    impact: "Average 150% increase in conversion rates and 80% improvement in user engagement within 3 months.",
    icon: Globe,
    bgImage: "linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%), url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%232563EB\" fill-opacity=\"0.03\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
  },
  {
    title: "Operational Inefficiencies?",
    description:
      "Manual processes and slow workflows can drain time and resources, slowing down your business growth.",
    solution:
      "We optimize workflows, automate repetitive tasks, and integrate technology to make your operations faster, smarter, and more cost-effective.",
    impact: "Reduce operational costs by 40% and increase team productivity by 200% through smart automation.",
    icon: Zap,
    bgImage: "linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(251, 191, 36, 0.05) 100%), url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23F59E0B\" fill-opacity=\"0.03\"%3E%3Cpath d=\"M30 0L32 28L60 30L32 32L30 60L28 32L0 30L28 28z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
  },
  {
    title: "Complex Technology Needs?",
    description:
      "Upgrading systems or building custom solutions can feel overwhelming and risky for growing businesses.",
    solution:
      "We create reliable, scalable web apps and custom SaaS platforms tailored to your business, ensuring technology supports your growth rather than hindering it.",
    impact: "Launch custom solutions 60% faster with 99.9% uptime and seamless scalability for future growth.",
    icon: Code,
    bgImage: "linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(196, 181, 253, 0.05) 100%), url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23A855F7\" fill-opacity=\"0.03\"%3E%3Crect x=\"0\" y=\"0\" width=\"30\" height=\"30\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
  },
  {
    title: "Difficulty Staying Competitive?",
    description:
      "Market shifts and competition can make it hard to know where to focus your efforts for growth.",
    solution:
      "We provide data-driven insights, market research, and strategic guidance to help you make informed decisions and stay ahead of the competition.",
    impact: "Achieve 3x faster market response time and 120% revenue growth through strategic digital transformation.",
    icon: TrendingUp,
    bgImage: "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(52, 211, 153, 0.05) 100%), url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%2310B981\" fill-opacity=\"0.03\"%3E%3Cpath d=\"M0 30L15 15L30 30L45 15L60 30L45 45L30 30L15 45z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
  },
];

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
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-6 text-balance font-saira border-b-1 border-blue-950 inline-block pb-2">
              Are You Running Into These Problems?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {problems.map((problem, index) => {
              const IconComponent = problem.icon
              const isHovered = hoveredIndex === index
              
              return (
                <motion.div
                  key={index}
                  className="relative overflow-hidden rounded-2xl cursor-pointer group"
                  style={{
                    background: problem.bgImage,
                    minHeight: isHovered ? '400px' : '280px'
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  layout
                >
                  {/* Background overlay for better text readability */}
                  <motion.div 
                    className="absolute inset-0 bg-white/80 backdrop-blur-sm"
                    initial={{ opacity: 0.8 }}
                    animate={{ opacity: isHovered ? 0.95 : 0.8 }}
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
                        className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-blue-50"
                        whileHover={{
                          backgroundColor: "#EFF6FF",
                          transition: { duration: 0.2 },
                        }}
                      >
                        <IconComponent 
                          className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors duration-200" 
                        />
                      </motion.div>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                      {problem.title}
                    </h3>

                    {/* Problem Description */}
                    <p className="text-gray-600 leading-relaxed text-center text-sm mb-4">
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
                              <h4 className="text-sm font-semibold text-gray-900 mb-2">Our Solution:</h4>
                              <p className="text-xs text-gray-600 leading-relaxed">
                                {problem.solution}
                              </p>
                            </div>

                            {/* Impact */}
                            <div>
                              <h4 className="text-sm font-semibold text-gray-900 mb-2">Expected Impact:</h4>
                              <p className="text-xs text-green-700 font-medium leading-relaxed">
                                {problem.impact}
                              </p>
                            </div>

                            {/* CTA Button */}
                            <motion.button
                              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 mt-4"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              transition={{ duration: 0.1 }}
                            >
                              <Phone className="w-4 h-4" />
                              Book a Call
                            </motion.button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Hover Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
