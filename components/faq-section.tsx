"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "What services does Velion Labs offer?",
    answer:
      "We specialize in Website Development (landing pages, e-commerce, blogs), SaaS Development, Internal Systems (CRM, inventory management), and ongoing Website Maintenance. All solutions are custom-built to meet your specific business needs.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity. Landing pages take 1-2 weeks, business websites 3-4 weeks, e-commerce sites 6-8 weeks, and SaaS platforms 3-6 months. We provide detailed timelines during our initial consultation.",
  },
  {
    question: "What's your development process?",
    answer:
      "We follow a structured 5-step process: Discovery & Planning, Design & Prototyping, Development & Testing, Launch & Deployment, and Ongoing Support. This ensures quality delivery and client satisfaction at every stage.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes! All projects include initial support ranging from 1-6 months depending on the plan. We also offer comprehensive maintenance packages starting from KSh 5,000/month including security updates, backups, and performance monitoring.",
  },
  {
    question: "What makes Velion Labs different?",
    answer:
      "We combine technical expertise with deep business understanding. Our team focuses on creating solutions that not only look great but drive real business results. We're also based in Kenya, understanding local market needs and payment preferences.",
  },
  {
    question: "How do you handle payments?",
    answer:
      "We accept bank transfers, mobile money (M-Pesa), and other local payment methods. Payment terms are typically 50% upfront and 50% on completion, with flexible arrangements for larger projects.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 px-4 bg-white" id="faq">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about our services, process, and pricing
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border border-gray-200 hover:shadow-md transition-all duration-300">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="font-semibold text-navy pr-4">{faq.question}</h3>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-teal flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-teal flex-shrink-0" />
                    )}
                  </button>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">Still have questions?</p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-teal text-white rounded-full hover:bg-teal/90 transition-colors"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  )
}
