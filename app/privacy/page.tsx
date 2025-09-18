"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const sections = [
  {
    title: "Information We Collect",
    content: `
      <p>We collect information you provide directly to us, such as when you:</p>
      <ul>
        <li>Fill out contact forms or request quotes</li>
        <li>Subscribe to our newsletter</li>
        <li>Communicate with us via email or phone</li>
        <li>Use our website and services</li>
      </ul>
      <p>This may include your name, email address, phone number, company information, and project details.</p>
    `,
  },
  {
    title: "How We Use Your Information",
    content: `
      <p>We use the information we collect to:</p>
      <ul>
        <li>Provide, maintain, and improve our services</li>
        <li>Respond to your inquiries and provide customer support</li>
        <li>Send you technical notices, updates, and marketing communications</li>
        <li>Analyze usage patterns and improve our website</li>
        <li>Comply with legal obligations</li>
      </ul>
    `,
  },
  {
    title: "Information Sharing",
    content: `
      <p>We do not sell, trade, or otherwise transfer your personal information to third parties except:</p>
      <ul>
        <li>With your explicit consent</li>
        <li>To trusted service providers who assist in operating our website and conducting business</li>
        <li>When required by law or to protect our rights</li>
        <li>In connection with a business transfer or acquisition</li>
      </ul>
    `,
  },
  {
    title: "Data Security",
    content: `
      <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
      <ul>
        <li>Encryption of sensitive data</li>
        <li>Regular security assessments</li>
        <li>Access controls and authentication</li>
        <li>Secure data storage and transmission</li>
      </ul>
    `,
  },
  {
    title: "Your Rights",
    content: `
      <p>You have the right to:</p>
      <ul>
        <li>Access, update, or delete your personal information</li>
        <li>Opt-out of marketing communications</li>
        <li>Request data portability</li>
        <li>Lodge a complaint with supervisory authorities</li>
      </ul>
      <p>To exercise these rights, please contact us at privacy@velionlabs.com.</p>
    `,
  },
  {
    title: "Cookies and Tracking",
    content: `
      <p>We use cookies and similar tracking technologies to:</p>
      <ul>
        <li>Remember your preferences</li>
        <li>Analyze website traffic and usage</li>
        <li>Improve user experience</li>
        <li>Provide personalized content</li>
      </ul>
      <p>You can control cookie settings through your browser preferences.</p>
    `,
  },
]

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0A192F]">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Privacy <span className="text-teal">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal
              information.
            </p>
            <p className="text-sm text-gray-400 mt-4">Last updated: January 15, 2024</p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl text-navy">{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div
                      className="prose prose-gray max-w-none"
                      dangerouslySetInnerHTML={{ __html: section.content }}
                      style={{
                        color: "#6b7280",
                        lineHeight: "1.7",
                      }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Questions About Privacy?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              If you have any questions about this Privacy Policy or our data practices, please contact us.
            </p>
            <div className="space-y-2 text-gray-600">
              <p>
                <strong>Email:</strong> privacy@velionlabs.com
              </p>
              <p>
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
              <p>
                <strong>Address:</strong> 123 Innovation Drive, Tech District, CA 94105
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
