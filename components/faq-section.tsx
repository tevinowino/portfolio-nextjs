"use client"

import { motion, useInView } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { useState, useRef } from "react"
import { GradientText } from "@/components/ui/gradient-text"
import Link from "next/link"
import { SectionTransition } from "@/components/ui/section-transition"

const faqs = [
  {
    question: "What services does Velion Consulting offer?",
    answer: "We build custom software systems, websites, SaaS platforms, school management systems, and internal business tools. We also offer ongoing maintenance and support retainers.",
  },
  {
    question: "How long does a typical project take?",
    answer: "It depends on scope. A landing page takes 1–2 weeks. A multi-page business website takes 2–4 weeks. Custom software systems typically take 4–8 weeks from discovery to launch.",
  },
  {
    question: "What is your development process?",
    answer: "We follow a 5-step process: Discovery, Design, Develop, Deploy, and Support. Every project starts with a discovery call where we understand your goals before writing a single line of code.",
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes. All projects come with a support period after launch. We also offer monthly maintenance retainers starting from KSh 5,000/month for ongoing peace of mind.",
  },
  {
    question: "What makes Velion Consulting different from other software agencies in Kenya?",
    answer: "We don't hand off projects to junior developers or disappear after launch. Tevin personally oversees every project from discovery to delivery. You get a senior engineer who treats your business like his own.",
  },
  {
    question: "How do you handle payments?",
    answer: "We work on a milestone-based payment structure. A deposit is required to begin, with subsequent payments tied to project milestones. We accept M-PESA and bank transfer.",
  },
  {
    question: "How much does a school management system cost in Kenya?",
    answer: "A custom school management system in Kenya starts from KSh 100,000 depending on the modules required — such as attendance tracking, grade management, parent portals, and reporting dashboards. Contact us for a tailored quote.",
  },
  {
    question: "How much does a website cost in Kenya?",
    answer: "Website development in Kenya starts from KSh 25,000 for a landing page, KSh 40,000 for a portfolio or business site, and KSh 80,000+ for an e-commerce site with M-Pesa integration. All prices include design, development, and deployment.",
  },
  {
    question: "Do you work with businesses outside Nairobi?",
    answer: "Yes. We work with clients across Kenya and remotely with businesses worldwide. Our entire process — from discovery to delivery — can be completed online via calls, emails, and collaborative tools.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="section-padding section-light relative overflow-hidden" id="faq" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-12 items-start relative">
          
          {/* Left Column: Title & Floating Crystal Decoration */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-start relative"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-accent-cyan mb-4">
              FAQ
            </span>
            <h2 className="text-headline mb-4">
              Frequently Asked <br />
              <GradientText variant="blue">Questions</GradientText>
            </h2>
            <p className="text-body max-w-md">
              Everything you need to know about working with us.
            </p>

            {/* Decorative Floating Crystal (Large & Cut off on the left, Desktop Only) */}
            <div className="absolute left-[-260px] top-[140px] w-[500px] h-[500px] pointer-events-none hidden lg:block select-none opacity-45 mix-blend-screen animate-float">
              <img
                src="/crystal.png"
                alt="Decorative Crystal"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-7 relative z-10 w-full">
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
                        aria-expanded={isOpen}
                      >
                        <h3 className="font-heading font-semibold text-text-primary pr-4">
                          {faq.question}
                        </h3>
                        <motion.div
                          className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
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

                      {/* Answer always in DOM — CSS controls visibility for crawler access */}
                      <div
                        className="overflow-hidden transition-all duration-300 ease-in-out"
                        style={{ maxHeight: isOpen ? "500px" : "0px" }}
                        aria-hidden={!isOpen}
                      >
                        <div className="px-5 pb-5">
                          <div className="pt-2 border-t border-border-subtle">
                            <p className="text-text-secondary leading-relaxed pt-4">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-text-muted mb-4">Still have questions?</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-accent-cyan hover:text-accent-blue transition-colors font-medium"
          >
            Contact us directly
            <span className="text-lg">→</span>
          </Link>
        </motion.div>
      </div>

      {/* Smooth transition gradient overlay to next section (Dark Gray) */}
      <SectionTransition fromColor="#f5f3ee" toColor="#18181b" height="h-32" />
    </section>
  )
}
