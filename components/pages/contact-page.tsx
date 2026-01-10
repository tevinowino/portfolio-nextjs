"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GradientText } from "@/components/ui/gradient-text"
import { GlowCard } from "@/components/ui/glow-card"
import { Phone, Mail, Clock, Send, CheckCircle, Calendar } from "lucide-react"
import Link from "next/link"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+254 794 830 280", "Mon-Fri: 9AM-6PM EAT"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["velionlabs@gmail.com"],
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon-Fri: 9AM - 6PM", "Sat: 10AM - 4PM"],
  },
]

const services = [
  "Website Development",
  "SaaS Development",
  "E-commerce Platform",
  "Internal Systems",
  "Website Maintenance",
  "Custom Solution",
]

const budgetRanges = [
  "Under KSh 50,000",
  "KSh 50,000 - 100,000",
  "KSh 100,000 - 250,000",
  "KSh 250,000 - 500,000",
  "Over KSh 500,000",
]

export default function ContactPageContent() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  return (
    <main className="min-h-screen bg-bg-primary">
      <div className="noise-overlay" />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-purple/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-accent-cyan mb-4">
              Let's Talk
            </span>
            <h1 className="text-display mb-6">
              Ready to Feel the{" "}
              <GradientText variant="animated">Ease</GradientText>?
            </h1>
            <p className="text-body-lg">
              Let's discuss what's keeping you up at night and how we can take it off your plate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <GlowCard hover={false}>
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 flex items-center justify-center">
                        <Send className="w-5 h-5 text-accent-cyan" />
                      </div>
                      <div>
                        <h2 className="font-heading font-semibold text-xl text-text-primary">Send Us a Message</h2>
                        <p className="text-text-muted text-sm">We'll respond within 24 hours</p>
                      </div>
                    </div>

                    {isSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-12"
                      >
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent-green/20 flex items-center justify-center">
                          <CheckCircle className="w-8 h-8 text-accent-green" />
                        </div>
                        <h3 className="font-heading font-semibold text-xl text-text-primary mb-2">Message Sent!</h3>
                        <p className="text-text-secondary">We'll get back to you within 24 hours.</p>
                      </motion.div>
                    ) : (
                      <form 
                        action="https://formspree.io/f/xgoowvvv"
                        method="POST"
                        className="space-y-5"
                        onSubmit={() => {
                          setTimeout(() => setIsSubmitted(true), 100)
                        }}
                      >
                        <div className="grid md:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-medium text-text-secondary mb-2">Full Name *</label>
                            <input
                              type="text"
                              name="Name"
                              placeholder="John Doe"
                              required
                              className="w-full px-4 py-3 rounded-lg bg-bg-tertiary border border-border-subtle text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-cyan transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-text-secondary mb-2">Email *</label>
                            <input
                              type="email"
                              name="E-Mail"
                              placeholder="john@company.com"
                              required
                              className="w-full px-4 py-3 rounded-lg bg-bg-tertiary border border-border-subtle text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-cyan transition-colors"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-medium text-text-secondary mb-2">Company</label>
                            <input
                              type="text"
                              name="Company"
                              placeholder="Your Company"
                              className="w-full px-4 py-3 rounded-lg bg-bg-tertiary border border-border-subtle text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-cyan transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-text-secondary mb-2">Phone</label>
                            <input
                              type="tel"
                              name="Phone Number"
                              placeholder="+254 7XX XXX XXX"
                              className="w-full px-4 py-3 rounded-lg bg-bg-tertiary border border-border-subtle text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-cyan transition-colors"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-medium text-text-secondary mb-2">Service</label>
                            <select
                              name="Service"
                              className="w-full px-4 py-3 rounded-lg bg-bg-tertiary border border-border-subtle text-text-primary focus:outline-none focus:border-accent-cyan transition-colors appearance-none cursor-pointer"
                            >
                              <option value="">Select a service</option>
                              {services.map((service) => (
                                <option key={service} value={service}>{service}</option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-text-secondary mb-2">Budget</label>
                            <select
                              name="Budget"
                              className="w-full px-4 py-3 rounded-lg bg-bg-tertiary border border-border-subtle text-text-primary focus:outline-none focus:border-accent-cyan transition-colors appearance-none cursor-pointer"
                            >
                              <option value="">Select budget range</option>
                              {budgetRanges.map((range) => (
                                <option key={range} value={range}>{range}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-text-secondary mb-2">What's keeping you up at night? *</label>
                          <textarea
                            name="Message"
                            placeholder="Tell us about the challenges you're facing and how we can help..."
                            rows={5}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-bg-tertiary border border-border-subtle text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-cyan transition-colors resize-none"
                          />
                        </div>

                        {/* Hidden field for form identification */}
                        <input type="hidden" name="_subject" value="New Contact Form Submission - Velion Consulting" />

                        <motion.button
                          type="submit"
                          className="btn-primary w-full"
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                        >
                          Send Message
                          <Send className="w-4 h-4" />
                        </motion.button>
                      </form>
                    )}
                  </div>
                </GlowCard>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-bg-primary rounded-xl border border-border-subtle p-5 hover:border-border-visible transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-accent-cyan" />
                        </div>
                        <div>
                          <h3 className="font-heading font-semibold text-text-primary mb-1">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-text-muted text-sm">{detail}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}

              {/* Quick CTA */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-accent-cyan to-accent-blue rounded-xl p-6 text-center">
                  <Calendar className="w-8 h-8 text-white mx-auto mb-3" />
                  <h3 className="font-heading font-semibold text-white mb-2">Prefer a Call?</h3>
                  <p className="text-white/80 text-sm mb-4">Schedule a free 30-minute consultation</p>
                  <a href="https://wa.me/254794830280?text=Hi!%20I'd%20like%20to%20schedule%20a%20call%20to%20discuss%20my%20project." target="_blank" rel="noopener noreferrer">
                    <button className="w-full py-2.5 rounded-lg bg-white text-accent-blue font-medium hover:bg-white/90 transition-colors">
                      Schedule via WhatsApp
                    </button>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
