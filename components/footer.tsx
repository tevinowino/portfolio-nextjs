"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ArrowUpRight } from "lucide-react"

const socialLinks = [
  { name: "X", href: "https://x.com/velionlabs", icon: "𝕏" },
  { name: "LinkedIn", href: "https://linkedin.com/company/velionlabs", icon: "in" },
  { name: "GitHub", href: "https://github.com/velionlabs", icon: "GH" },
]

const footerLinks = [
  {
    title: "Jump To",
    links: [
      { name: "Home", href: "/" },
      { name: "Web Design", href: "/pricing" },
      { name: "Maintenance", href: "/pricing" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms & Conditions", href: "/terms" },
    ],
  },
]

export function Footer() {
  return (
    <>
      {/* Contact CTA Banner */}
      <section className="bg-bg-secondary border-t border-border-subtle">
        <div className="container-custom py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            {/* Left */}
            <div className="flex items-center gap-8 md:gap-16">
              <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
                Heard<br />enough? →
              </span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-text-primary">
                Contact us
              </h2>
            </div>

            {/* Right - CTA Button */}
            <Link href="/contact">
              <motion.div
                className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-accent-cyan to-accent-blue flex items-center justify-center cursor-pointer shadow-lg shadow-accent-cyan/20"
                whileHover={{ scale: 1.1, rotate: 45 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-bg-primary border-t border-border-subtle">
        <div className="container-custom py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1 lg:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <img 
                  src="/full-logo-no-bg.png" 
                  alt="Velion Consulting" 
                  className="h-8 w-auto brightness-0 invert"
                />
              </Link>
              <p className="text-sm text-text-muted leading-relaxed max-w-xs">
                Building digital solutions that make business feel effortless.
              </p>
            </div>

            {/* Contact Info */}
            <div className="col-span-1">
              <h4 className="font-mono text-xs uppercase tracking-widest text-text-muted mb-4">
                Contact
              </h4>
              <div className="space-y-3 text-sm">
                <a 
                  href="mailto:velionlabs@gmail.com"
                  className="block text-text-secondary hover:text-accent-cyan transition-colors"
                >
                  velionlabs@gmail.com
                </a>
                <a 
                  href="tel:+254794830280"
                  className="block text-text-secondary hover:text-accent-cyan transition-colors"
                >
                  +254 794 830 280
                </a>
                <p className="text-text-muted text-xs mt-4">
                  Mon-Fri: 9AM - 6PM EAT
                </p>
              </div>
            </div>

            {/* Links Columns */}
            {footerLinks.map((column) => (
              <div key={column.title} className="col-span-1">
                <h4 className="font-mono text-xs uppercase tracking-widest text-text-muted mb-4">
                  {column.title}
                </h4>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-text-secondary hover:text-accent-cyan transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Social */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1">
              <h4 className="font-mono text-xs uppercase tracking-widest text-text-muted mb-4">
                Follow Us
              </h4>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-text-muted">
              © {new Date().getFullYear()} Velion Consulting Limited. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs text-text-muted">
              <Link href="/privacy" className="hover:text-accent-cyan transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-accent-cyan transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
