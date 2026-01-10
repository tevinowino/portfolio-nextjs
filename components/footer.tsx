'use client'

import Link from "next/link"
import { Mail, Phone } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  { name: "Website Development", href: "/services" },
  { name: "Custom Software", href: "/services" },
  { name: "School Systems", href: "/services" },
  { name: "Maintenance", href: "/pricing" },
]

const company = [
  { name: "About Us", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
]

const legal = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
]

export function Footer() {
  return (
    <footer className="bg-charcoal text-white py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand & Contact */}
          <div className="md:col-span-2">
            <motion.div
              className="flex items-center space-x-3 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.img
                src="/full-logo-no-bg.png"
                alt="Velion Consulting Logo"
                className="h-10 w-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-sm">
              Kenya's leading software agency. We build stunning websites and custom systems 
              that give business owners their time back.
            </p>
            <div className="space-y-2">
              <a 
                href="mailto:velionlabs@gmail.com" 
                className="flex items-center space-x-3 hover:text-teal transition-colors"
              >
                <Mail className="h-4 w-4 text-teal" />
                <span className="text-gray-400 hover:text-white transition-colors">velionlabs@gmail.com</span>
              </a>
              <a 
                href="tel:+254794830280" 
                className="flex items-center space-x-3 hover:text-teal transition-colors"
              >
                <Phone className="h-4 w-4 text-teal" />
                <span className="text-gray-400 hover:text-white transition-colors">+254 794 830 280</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              {services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-teal transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-teal transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; 2025 Velion Consulting. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            {legal.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className="hover:text-teal transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
