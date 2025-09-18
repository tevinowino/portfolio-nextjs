"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const sections = [
  {
    title: "Acceptance of Terms",
    content: `
      <p>By accessing and using the Velion Labs website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
    `,
  },
  {
    title: "Services Description",
    content: `
      <p>Velion Labs provides technology consulting, custom software development, cloud infrastructure, cybersecurity, and digital transformation services. Our services are provided subject to these terms and any additional terms agreed upon in writing.</p>
      <ul>
        <li>Custom Software Development</li>
        <li>Cloud Infrastructure & DevOps</li>
        <li>Cybersecurity & Compliance</li>
        <li>Digital Transformation Consulting</li>
        <li>Technology Strategy and Planning</li>
      </ul>
    `,
  },
  {
    title: "Client Responsibilities",
    content: `
      <p>As a client, you agree to:</p>
      <ul>
        <li>Provide accurate and complete information necessary for service delivery</li>
        <li>Respond promptly to requests for information or feedback</li>
        <li>Make timely payments according to agreed terms</li>
        <li>Respect intellectual property rights</li>
        <li>Use our services in compliance with applicable laws</li>
      </ul>
    `,
  },
  {
    title: "Payment Terms",
    content: `
      <p>Payment terms are specified in individual service agreements. Generally:</p>
      <ul>
        <li>Invoices are due within 30 days of receipt</li>
        <li>Late payments may incur interest charges</li>
        <li>Services may be suspended for overdue accounts</li>
        <li>All prices are in USD unless otherwise specified</li>
      </ul>
    `,
  },
  {
    title: "Intellectual Property",
    content: `
      <p>Intellectual property rights are handled as follows:</p>
      <ul>
        <li>Custom work created specifically for clients becomes client property upon full payment</li>
        <li>Pre-existing Velion Labs intellectual property remains our property</li>
        <li>Third-party components are subject to their respective licenses</li>
        <li>Clients grant us the right to use project details for portfolio purposes</li>
      </ul>
    `,
  },
  {
    title: "Confidentiality",
    content: `
      <p>We maintain strict confidentiality regarding:</p>
      <ul>
        <li>Client business information and data</li>
        <li>Project details and specifications</li>
        <li>Proprietary processes and methodologies</li>
        <li>Any information marked as confidential</li>
      </ul>
      <p>This confidentiality obligation survives termination of our relationship.</p>
    `,
  },
  {
    title: "Limitation of Liability",
    content: `
      <p>Our liability is limited as follows:</p>
      <ul>
        <li>Total liability shall not exceed the amount paid for services</li>
        <li>We are not liable for indirect, consequential, or punitive damages</li>
        <li>Force majeure events excuse performance delays</li>
        <li>Clients are responsible for data backups and security</li>
      </ul>
    `,
  },
  {
    title: "Termination",
    content: `
      <p>Either party may terminate services:</p>
      <ul>
        <li>With 30 days written notice for ongoing services</li>
        <li>Immediately for material breach of terms</li>
        <li>Upon completion of project deliverables</li>
        <li>By mutual agreement</li>
      </ul>
      <p>Termination does not affect accrued rights and obligations.</p>
    `,
  },
]

export default function TermsPage() {
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
              Terms of <span className="text-teal">Service</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              These terms govern your use of our services and establish the framework for our professional relationship.
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
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Questions About These Terms?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              If you have any questions about these Terms of Service, please contact our legal team.
            </p>
            <div className="space-y-2 text-gray-600">
              <p>
                <strong>Email:</strong> legal@velionlabs.com
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
