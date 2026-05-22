"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GradientText } from "@/components/ui/gradient-text"
import { GlowCard } from "@/components/ui/glow-card"
import { EnquiryForm } from "@/components/enquiry-form"
import { Phone, Mail, Clock, Calendar } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+254 794 830 280", "Mon-Fri: 9AM-6PM EAT"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["velionconsulting@gmail.com"],
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon-Fri: 9AM - 6PM", "Sat: 10AM - 4PM"],
  },
]

export default function ContactPageContent() {
  const { scrollY } = useScroll()
  const orb1Y = useTransform(scrollY, [0, 600], [0, -80])
  const orb2Y = useTransform(scrollY, [0, 600], [0, -50])

  return (
    <main className="min-h-screen bg-bg-primary">
      <div className="noise-overlay" />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div style={{ y: orb1Y }} className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl" />
          <motion.div style={{ y: orb2Y }} className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-purple/10 rounded-full blur-3xl" />
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

      {/* Form & Info */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">

            {/* Enquiry Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <GlowCard hover={false}>
                  <div className="p-6 lg:p-8">
                    <EnquiryForm />
                  </div>
                </GlowCard>
              </motion.div>
            </div>

            {/* Contact Info sidebar */}
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

              {/* WhatsApp CTA */}
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
                  <a
                    href="https://wa.me/254794830280?text=Hi!%20I'd%20like%20to%20schedule%20a%20call%20to%20discuss%20my%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
