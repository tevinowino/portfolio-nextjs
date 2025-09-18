"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="bg-charcoal text-white py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <motion.div
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.img
                src="/full-logo-no-bg.png"
                alt="Velion Labs Logo"
                className="h-10 w-auto"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Helping businesses grow through secure, scalable, and reliable digital solutions. Your technology partner
              for sustainable growth.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-teal" />
                <span className="text-gray-400">hello@velionlabs.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-teal" />
                <span className="text-gray-400">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-teal" />
                <span className="text-gray-400">San Francisco, CA</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/services#web-development" className="hover:text-teal transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="/services#digital-transformation" className="hover:text-teal transition-colors">
                  Digital Transformation
                </a>
              </li>
              <li>
                <a href="/services#custom-saas" className="hover:text-teal transition-colors">
                  Custom SaaS
                </a>
              </li>
              <li>
                <a href="/services#support-optimization" className="hover:text-teal transition-colors">
                  Support & Optimization
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/about" className="hover:text-teal transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/portfolio" className="hover:text-teal transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-teal transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-teal transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Velion Labs. All rights reserved. Built for businesses that refuse to settle.</p>
        </div>
      </div>
    </footer>
  )
}
