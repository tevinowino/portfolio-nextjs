"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Code, Cloud, Shield, Zap, Users, BarChart3 } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored software solutions built to your exact specifications and business requirements.",
    features: [
      "Web Applications",
      "Mobile Apps (iOS & Android)",
      "Desktop Applications",
      "API Development",
      "Database Design",
      "System Integration",
    ],
    price: "Starting at $15,000",
    timeline: "8-16 weeks",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure & DevOps",
    description: "Scalable cloud solutions and automated deployment pipelines for modern businesses.",
    features: [
      "AWS/Azure/GCP Setup",
      "CI/CD Pipeline Implementation",
      "Container Orchestration",
      "Infrastructure as Code",
      "Monitoring & Logging",
      "Auto-scaling Solutions",
    ],
    price: "Starting at $8,000",
    timeline: "4-8 weeks",
  },
  {
    icon: Shield,
    title: "Cybersecurity & Compliance",
    description: "Comprehensive security audits and compliance solutions to protect your business.",
    features: [
      "Security Audits",
      "Penetration Testing",
      "GDPR/HIPAA Compliance",
      "Data Encryption",
      "Access Control Systems",
      "Security Training",
    ],
    price: "Starting at $5,000",
    timeline: "2-6 weeks",
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "End-to-end digital transformation to modernize your business processes and systems.",
    features: [
      "Process Automation",
      "Legacy System Modernization",
      "Workflow Optimization",
      "Digital Strategy Planning",
      "Change Management",
      "Training & Support",
    ],
    price: "Starting at $25,000",
    timeline: "12-24 weeks",
  },
  {
    icon: Users,
    title: "Technology Consulting",
    description: "Strategic technology guidance to help you make informed decisions about your tech stack.",
    features: [
      "Technology Assessment",
      "Architecture Planning",
      "Vendor Selection",
      "ROI Analysis",
      "Risk Assessment",
      "Implementation Roadmap",
    ],
    price: "Starting at $3,000",
    timeline: "2-4 weeks",
  },
  {
    icon: BarChart3,
    title: "Data Analytics & AI",
    description: "Harness the power of your data with advanced analytics and AI-driven insights.",
    features: [
      "Data Pipeline Development",
      "Business Intelligence Dashboards",
      "Machine Learning Models",
      "Predictive Analytics",
      "Data Visualization",
      "AI Integration",
    ],
    price: "Starting at $12,000",
    timeline: "6-12 weeks",
  },
]

const process = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description:
      "We start by understanding your business goals, current challenges, and technical requirements through detailed consultations.",
  },
  {
    step: "02",
    title: "Strategy & Planning",
    description:
      "Our team develops a comprehensive strategy and project roadmap tailored to your specific needs and budget.",
  },
  {
    step: "03",
    title: "Design & Development",
    description:
      "We bring your vision to life with cutting-edge technology, following best practices and industry standards.",
  },
  {
    step: "04",
    title: "Testing & Deployment",
    description:
      "Rigorous testing ensures quality and reliability before we deploy your solution to production environments.",
  },
  {
    step: "05",
    title: "Support & Maintenance",
    description:
      "Ongoing support and maintenance to ensure your solution continues to perform optimally as your business grows.",
  },
]

const industries = [
  "Healthcare & Medical",
  "Financial Services",
  "E-commerce & Retail",
  "Manufacturing",
  "Education & EdTech",
  "Real Estate",
  "Logistics & Supply Chain",
  "Professional Services",
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0A192F]">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-teal">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation
              journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                id={service.title.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "")} // Added IDs for anchor navigation
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-0 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-teal" />
                    </div>
                    <CardTitle className="text-xl text-navy mb-2">{service.title}</CardTitle>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-navy mb-3">What's Included:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-teal mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-gray-100">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-500">Starting Price:</span>
                          <span className="font-semibold text-navy">{service.price}</span>
                        </div>
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-sm text-gray-500">Timeline:</span>
                          <span className="font-semibold text-navy">{service.timeline}</span>
                        </div>

                        <Button className="w-full bg-teal hover:bg-teal/90 text-white group">
                          Get Quote
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </motion.div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1">
                  <Card className="bg-white border-0 p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-teal text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-bold text-navy">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </Card>
                </div>

                {index < process.length - 1 && (
                  <div className="hidden md:block">
                    <ArrowRight className="w-8 h-8 text-teal" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Industries We Serve</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our expertise spans across multiple industries and business sectors
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Badge
                  variant="secondary"
                  className="w-full py-3 px-4 text-center bg-white text-navy hover:bg-teal hover:text-white transition-colors duration-300"
                >
                  {industry}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Let's discuss your project</p>
            <Button className="bg-teal hover:bg-teal/90 text-white py-4 px-8 rounded-full">Contact Us</Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
