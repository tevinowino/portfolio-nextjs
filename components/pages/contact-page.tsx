"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GradientText } from "@/components/ui/gradient-text"
import { GlowCard } from "@/components/ui/glow-card"
import { EnquiryForm } from "@/components/enquiry-form"
import { Phone, Mail, MapPin, Calendar } from "lucide-react"

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
)

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: ["tevinowino65@gmail.com", "velionconsulting@gmail.com"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+254 794 830 280"],
  },
  {
    icon: MapPin,
    title: "Location",
    details: ["Nairobi, Kenya"],
  },
]

const openTo = [
  "Full-stack engineering roles — contract or full-time",
  "Custom software builds and technical partnerships",
  "Technical mentorship and developer education",
  "Collaborations in EdTech, AgriTech, FinTech, or Mental Health",
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
              Let's Connect
            </span>
            <h1 className="text-display mb-6">
              Let's Work{" "}
              <GradientText variant="animated">Together</GradientText>
            </h1>
            <p className="text-body-lg">
              Whether you're a founder who needs a technical partner, a company hiring a senior engineer, or a developer who wants to connect — reach out. I respond within 24 hours.
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
                        <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 flex items-center justify-center shrink-0">
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

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="bg-bg-primary rounded-xl border border-border-subtle p-5">
                  <h3 className="font-heading font-semibold text-text-primary mb-3">Online</h3>
                  <div className="space-y-2">
                    <a
                      href="https://github.com/tevinowino"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-text-muted hover:text-text-primary transition-colors text-sm"
                    >
                      <span className="text-accent-cyan"><GitHubIcon /></span>
                      github.com/tevinowino
                    </a>
                    <a
                      href="https://linkedin.com/in/tevin-owino"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-text-muted hover:text-text-primary transition-colors text-sm"
                    >
                      <span className="text-accent-cyan"><LinkedInIcon /></span>
                      linkedin.com/in/tevin-owino
                    </a>
                    <a
                      href="https://tiktok.com/@tevinowino"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-text-muted hover:text-text-primary transition-colors text-sm"
                    >
                      <span className="text-accent-cyan"><TikTokIcon /></span>
                      tiktok.com/@tevinowino
                    </a>
                    <a
                      href="https://instagram.com/tevinowino"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-text-muted hover:text-text-primary transition-colors text-sm"
                    >
                      <span className="text-accent-cyan"><InstagramIcon /></span>
                      instagram.com/tevinowino
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* What I'm Open To */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="bg-linear-to-br from-accent-cyan to-accent-blue rounded-xl p-6">
                  <Calendar className="w-8 h-8 text-white mb-3" />
                  <h3 className="font-heading font-semibold text-white mb-3">What I'm Available For</h3>
                  <ul className="space-y-1.5">
                    {openTo.map((item) => (
                      <li key={item} className="text-white/85 text-xs flex items-start gap-2">
                        <span className="text-white mt-0.5">·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
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
