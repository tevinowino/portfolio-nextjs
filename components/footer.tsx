'use client'

import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { GradientText } from "@/components/ui/gradient-text"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
]

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
)

const socials = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/tevin-owino",
    icon: LinkedInIcon,
    label: "Tevin Owino on LinkedIn",
  },
  {
    name: "GitHub",
    href: "https://github.com/tevinowino",
    icon: GitHubIcon,
    label: "Tevin Owino on GitHub",
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@tevinowino",
    icon: TikTokIcon,
    label: "Tevin Owino on TikTok",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/tevinowino",
    icon: InstagramIcon,
    label: "Tevin Owino on Instagram",
  },
]

export function Footer() {
  return (
    <footer className="bg-charcoal text-white py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand & Contact */}
          <div className="md:col-span-2">
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="font-heading font-bold text-2xl text-white tracking-tight">
                Tevin<GradientText variant="blue" className="ml-1">Owino</GradientText>
              </span>
            </motion.div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-sm">
              Full-stack software engineer with 3+ years shipping production software. Open to engineering roles and technical partnerships.
            </p>

            <address className="not-italic space-y-2 mb-6">
              <a
                href="mailto:tevinowino65@gmail.com"
                className="flex items-center space-x-3 hover:text-teal transition-colors"
              >
                <Mail className="h-4 w-4 text-teal shrink-0" />
                <span className="text-gray-400 hover:text-white transition-colors">tevinowino65@gmail.com</span>
              </a>
              <a
                href="tel:+254794830280"
                className="flex items-center space-x-3 hover:text-teal transition-colors"
              >
                <Phone className="h-4 w-4 text-teal shrink-0" />
                <span className="text-gray-400 hover:text-white transition-colors">+254 794 830 280</span>
              </a>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-teal shrink-0" />
                <span className="text-gray-400">Nairobi, Kenya</span>
              </div>
            </address>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socials.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-teal hover:border-teal/40 transition-colors"
                  >
                    <Icon />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-gray-400">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-teal transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Open To */}
          <div>
            <h3 className="font-semibold mb-4">Open To</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Client Projects</li>
              <li>Engineering Roles</li>
              <li>Technical Mentorship</li>
              <li>Speaking Engagements</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; 2026 Tevin Owino. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Founder of{" "}
            <a
              href="https://velionconsulting.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal hover:text-white transition-colors"
            >
              Velion Consulting
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
