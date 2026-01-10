"use client"

import { ArrowRight, CheckCircle, Calendar, Phone } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GradientText } from "@/components/ui/gradient-text"
import Link from "next/link"

const benefits = [
  "Free 30-minute strategy consultation",
  "Custom technology roadmap",
  "No-obligation project estimate",
  "Expert guidance on next steps",
]

export function FinalCTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="section-padding bg-bg-primary relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 max-w-4xl">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-headline mb-4">
            Ready to{" "}
            <GradientText variant="animated">Future-Proof</GradientText>
            {" "}Your Business?
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Don't let outdated technology hold you back. Let's discuss how we can transform 
            your challenges into competitive advantages.
          </p>
        </motion.div>

        {/* Benefits Card */}
        <motion.div
          className="bg-bg-secondary rounded-2xl border border-border-subtle p-8 mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="font-heading font-semibold text-lg text-text-primary mb-6 text-center">
            What you'll get in your free consultation:
          </h3>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <CheckCircle className="w-5 h-5 text-accent-green flex-shrink-0" />
                <span className="text-text-secondary">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link href="/book">
            <motion.button
              className="btn-primary text-base px-8 py-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Calendar className="w-5 h-5" />
              Book Free Consultation
            </motion.button>
          </Link>
          
          <Link href="tel:+254794830280">
            <motion.button
              className="btn-secondary text-base px-8 py-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </motion.button>
          </Link>
        </motion.div>

        {/* Trust Indicators */}
        <motion.p
          className="text-center text-text-muted text-sm mt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <span className="inline-flex items-center gap-4 flex-wrap justify-center">
            <span>Trusted by 50+ businesses</span>
            <span className="w-1 h-1 rounded-full bg-text-muted" />
            <span>99% client satisfaction</span>
            <span className="w-1 h-1 rounded-full bg-text-muted" />
            <span>Free consultation</span>
          </span>
        </motion.p>
      </div>
    </section>
  )
}
