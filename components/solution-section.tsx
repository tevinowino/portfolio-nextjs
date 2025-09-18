"use client"

import { ChevronDown } from "lucide-react"
import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"

export function SolutionSection() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const solutions = [
    {
      title: "Customized Strategy Development",
      description:
        "Tailor-made strategies to address your unique business challenges and opportunities, ensuring sustainable growth and competitive advantage.",
    },
    {
      title: "Operational Efficiency Optimization",
      description:
        "Streamline your processes and improve efficiency with our expert guidance, technologies and best practices to maximize your operational performance.",
    },
    {
      title: "Market Analysis and Insights",
      description:
        "Gain valuable market insights and stay ahead of the competition with our comprehensive analysis and data-driven recommendations.",
    },
    {
      title: "Leadership and Team Building",
      description:
        "Enhance your leadership capabilities and foster a high-performing team through our specialized coaching and development programs.",
    },
  ]

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-[#dae6ff] to-[#ffffff]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className=" rounded-3xl p-8 md:p-12 lg:p-16"
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
            <h2 className="text-4xl sm:text-6xl font-saira mb-6">
              <span className="text-gray-400">WHAT WE CAN DO</span> <span className="text-[#2563EB]">FOR YOU?</span>
            </h2>
          </motion.div>

          {/* Flex container for image + accordion */}
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* Left Image */}
            <motion.div
              className="lg:w-2/5 flex-shrink-0"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src="/strategy.jpg"
                alt="Solutions Illustration"
                className="rounded-2xl w-full object-cover"
              />
            </motion.div>

            {/* Accordion + CTA */}
            <div className="lg:w-2/3 space-y-4">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  className="bg-[#1a1a2e] rounded-xl overflow-hidden"
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                >
                  <motion.button
                    onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between text-white hover:bg-[#16213e] transition-colors"
                    whileHover={{ backgroundColor: "#16213e" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <h3 className="text-xl font-semibold font-saira">{solution.title}</h3>
                    <motion.div
                      animate={{ rotate: openAccordion === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <ChevronDown className="h-5 w-5" />
                    </motion.div>
                  </motion.button>
                  <AnimatePresence>
                    {openAccordion === index && (
                      <motion.div
                        className="px-6 pb-6 text-gray-300"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <motion.p
                          className="leading-relaxed"
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -10, opacity: 0 }}
                          transition={{ duration: 0.2, delay: 0.1 }}
                        >
                          {solution.description}
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}

              {/* CTA Button */}
              <motion.div
                className="mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <button className="px-8 py-4 bg-[#2563EB] text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors">
                  Get Started
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
