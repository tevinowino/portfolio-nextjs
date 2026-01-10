"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Download, AlertTriangle, CheckCircle } from "lucide-react"
import { GradientText } from "@/components/ui/gradient-text"

export function LeadCaptureSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitted, setIsSubmitted] = useState(false)

  return (
    <section className="section-padding bg-bg-primary relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 max-w-4xl">
        <motion.div
          className="bg-bg-secondary rounded-2xl border border-border-subtle overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2">
            {/* Left - Content */}
            <div className="p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-amber-500">
                  Free Guide
                </span>
              </div>

              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-text-primary mb-4">
                These Mistakes Are{" "}
                <GradientText variant="blue">Costing You Money!</GradientText>
              </h2>

              <p className="text-text-secondary mb-6">
                You've got a system, but is it doing its job? If your software isn't user-friendly, 
                fast, and engaging, it's just a digital weight holding you back.
              </p>

              <p className="text-text-muted text-sm">
                Download our exclusive guide: <strong className="text-text-primary">"5 Digital Bottlenecks 
                Costing Kenyan Businesses Millions—and How to Fix Them Fast."</strong>
              </p>
            </div>

            {/* Right - Form */}
            <div className="bg-bg-tertiary/50 p-8 lg:p-10 flex items-center">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center w-full"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent-green/20 flex items-center justify-center">
                    <CheckCircle className="w-7 h-7 text-accent-green" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-text-primary mb-2">
                    Check Your Email!
                  </h3>
                  <p className="text-text-secondary text-sm">
                    Your guide is on its way. Check your inbox!
                  </p>
                </motion.div>
              ) : (
                <form
                  action="https://formspree.io/f/xgoowvvv"
                  method="POST"
                  className="w-full space-y-4"
                  onSubmit={() => {
                    setTimeout(() => setIsSubmitted(true), 100)
                  }}
                >
                  <input type="hidden" name="_subject" value="Guide Download Request - Velion Consulting" />
                  
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-bg-primary border border-border-subtle text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-cyan transition-colors"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-bg-primary border border-border-subtle text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-cyan transition-colors"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="btn-primary w-full"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download className="w-4 h-4" />
                    Download Free Guide
                  </motion.button>

                  <p className="text-text-muted text-xs text-center">
                    No spam. Unsubscribe anytime.
                  </p>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
