"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { useState, useRef } from "react"
import { useInView } from "framer-motion"
import { GradientText } from "@/components/ui/gradient-text"
import Link from "next/link"

const faqs = [
  {
    question: "What services does Velion Consulting offer?",
    answer: "We specialize in Website Development (landing pages, e-commerce, blogs), SaaS Development, Internal Systems (CRM, inventory management), and ongoing Website Maintenance. All solutions are custom-built to meet your specific business needs.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity. Landing pages take 1-2 weeks, business websites 3-4 weeks, e-commerce sites 6-8 weeks, and SaaS platforms 3-6 months. We provide detailed timelines during our initial consultation.",
  },
  {
    question: "What's your development process?",
    answer: "We follow a structured 5-step process: Discovery & Planning, Design & Prototyping, Development & Testing, Launch & Deployment, and Ongoing Support. This ensures quality delivery and client satisfaction at every stage.",
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes! All projects include initial support ranging from 1-6 months depending on the plan. We also offer comprehensive maintenance packages starting from KSh 5,000/month including security updates, backups, and performance monitoring.",
  },
  {
    question: "What makes Velion Consulting different?",
    answer: "We combine technical expertise with deep business understanding. Our team focuses on creating solutions that not only look great but drive real business results. We're also based in Kenya, understanding local market needs and payment preferences.",
  },
  {
    question: "How do you handle payments?",
    answer: "We accept bank transfers, mobile money (M-Pesa), and other local payment methods. Payment terms are typically 50% upfront and 50% on completion, with flexible arrangements for larger projects.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="section-padding bg-bg-primary" id="faq" ref={ref}>
      <div className="container-custom max-w-3xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block font-mono text-xs uppercase tracking-widest text-accent-cyan mb-4">
            FAQ
          </span>
          <h2 className="text-headline mb-4">
            Common <GradientText variant="blue">Questions</GradientText>
          </h2>
          <p className="text-body">
            Everything you need to know about working with us.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              >
                <div
                  className={`bg-bg-secondary rounded-xl border transition-colors duration-200 ${
                    isOpen ? "border-accent-cyan/30" : "border-border-subtle hover:border-border-visible"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4"
                  >
                    <h3 className="font-heading font-semibold text-text-primary pr-4">
                      {faq.question}
                    </h3>
                    <motion.div
                      className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                        isOpen ? "bg-accent-cyan text-white" : "bg-bg-tertiary text-text-muted"
                      }`}
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5">
                          <div className="pt-2 border-t border-border-subtle">
                            <p className="text-text-secondary leading-relaxed pt-4">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-text-muted mb-4">Still have questions?</p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-accent-cyan hover:text-accent-blue transition-colors font-medium"
          >
            Contact us directly
            <span className="text-lg">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
