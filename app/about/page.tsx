"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const teamMembers = [
  {
    name: "Alex Rodriguez",
    role: "CEO & Founder",
    bio: "15+ years in technology consulting with expertise in digital transformation and strategic planning.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    bio: "Former senior engineer at top tech companies, specializing in scalable architecture and AI solutions.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Michael Thompson",
    role: "Head of Strategy",
    bio: "MBA with 12+ years in business strategy and operational excellence across multiple industries.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Emily Davis",
    role: "Lead Developer",
    bio: "Full-stack developer with expertise in modern web technologies and cloud infrastructure.",
    image: "/placeholder.svg?height=300&width=300",
  },
]

const values = [
  {
    title: "Innovation First",
    description:
      "We stay ahead of technology trends to deliver cutting-edge solutions that give our clients a competitive advantage.",
  },
  {
    title: "Client Success",
    description:
      "Your success is our success. We measure our achievements by the tangible results we deliver for your business.",
  },
  {
    title: "Transparency",
    description: "Clear communication, honest timelines, and transparent pricing. No hidden costs or surprises.",
  },
  {
    title: "Quality Excellence",
    description: "We maintain the highest standards in everything we do, from code quality to client service.",
  },
]

const stats = [
  { number: "150+", label: "Projects Completed" },
  { number: "50+", label: "Happy Clients" },
  { number: "5", label: "Years Experience" },
  { number: "24/7", label: "Support Available" },
]

export default function AboutPage() {
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
              About <span className="text-teal">Velion Labs</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're a team of passionate technologists and strategists dedicated to helping businesses unlock their full
              potential through innovative digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-teal mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Founded in 2019, Velion Labs emerged from a simple observation: businesses were struggling to keep
                    pace with rapid technological change while maintaining operational excellence.
                  </p>
                  <p>
                    Our founders, having worked at leading technology companies, recognized the gap between cutting-edge
                    solutions and practical business implementation. We set out to bridge this gap by combining deep
                    technical expertise with strategic business insight.
                  </p>
                  <p>
                    Today, we're proud to have helped over 50 businesses transform their operations, streamline their
                    processes, and achieve sustainable growth through technology.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Velion Labs team collaboration"
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-0 h-full hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-navy mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">The experts behind your success</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-0 h-full hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-lg font-bold text-navy mb-2">{member.name}</h3>
                    <Badge variant="secondary" className="mb-4">
                      {member.role}
                    </Badge>
                    <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Ready to Work Together?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-teal hover:bg-teal/90 text-white">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-navy text-navy hover:bg-navy hover:text-white bg-transparent"
              >
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
