"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Calendar } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function FinalCTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const benefits = [
    "Free 30-minute strategy consultation",
    "Custom technology roadmap for your business",
    "No-obligation project estimate",
    "Expert guidance on your next steps",
  ]

  return (
    <section id="contact" className="py-20 px-4 md:px-6 lg:px-8 bg-navy text-white" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 text-balance"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Ready to future-proof your business?
        </motion.h2>
        <motion.p
          className="text-xl text-gray-300 mb-8 text-pretty"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Don't let outdated technology hold you back. Let's discuss how we can transform your challenges into
          competitive advantages.
        </motion.p>

        <motion.div
          className="bg-white/5 rounded-2xl p-8 mb-8 backdrop-blur-sm border border-white/10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          whileHover={{
            scale: 1.02,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            transition: { duration: 0.2 },
          }}
        >
          <motion.h3
            className="text-xl font-semibold mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            What you'll get in your free consultation:
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{
                  duration: 0.5,
                  delay: 0.8 + index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.9 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  <CheckCircle className="h-5 w-5 text-teal flex-shrink-0" />
                </motion.div>
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" className="bg-teal hover:bg-teal/90 text-white text-lg px-8 py-4">
              <Calendar className="mr-2 h-5 w-5" />
              Book Your Free Consultation
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-navy text-lg px-8 py-4 bg-transparent"
            >
              Call Us: (555) 123-4567
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>

        <motion.p
          className="text-sm text-gray-400 mt-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          Trusted by 50+ businesses • 99% client satisfaction • Free consultation
        </motion.p>
      </div>
    </section>
  )
}
