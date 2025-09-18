"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, User, Search, ArrowRight } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    slug: "future-of-ai-in-business",
    title: "The Future of AI in Business: Trends to Watch in 2024",
    excerpt:
      "Explore the latest AI trends that are reshaping industries and discover how your business can leverage artificial intelligence for competitive advantage.",
    author: "Sarah Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Artificial Intelligence",
    image: "/placeholder.svg?height=300&width=500",
    featured: true,
  },
  {
    slug: "cloud-security-best-practices",
    title: "Cloud Security Best Practices: Protecting Your Digital Assets",
    excerpt:
      "Learn essential cloud security strategies to safeguard your business data and maintain compliance in an increasingly digital world.",
    author: "Michael Thompson",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Cybersecurity",
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
  },
  {
    slug: "digital-transformation-guide",
    title: "Digital Transformation: A Complete Guide for Modern Businesses",
    excerpt:
      "Discover the key steps to successfully transform your business operations and stay competitive in the digital age.",
    author: "Alex Rodriguez",
    date: "2024-01-05",
    readTime: "12 min read",
    category: "Digital Transformation",
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
  },
  {
    slug: "devops-automation-benefits",
    title: "DevOps Automation: Streamlining Your Development Pipeline",
    excerpt:
      "Learn how DevOps automation can reduce deployment time, improve code quality, and enhance team collaboration.",
    author: "Emily Davis",
    date: "2023-12-28",
    readTime: "7 min read",
    category: "DevOps",
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
  },
  {
    slug: "data-analytics-roi",
    title: "Maximizing ROI with Data Analytics: A Strategic Approach",
    excerpt:
      "Understand how to implement data analytics solutions that deliver measurable business value and drive decision-making.",
    author: "Sarah Chen",
    date: "2023-12-20",
    readTime: "9 min read",
    category: "Data Analytics",
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
  },
  {
    slug: "mobile-app-development-trends",
    title: "Mobile App Development Trends Shaping 2024",
    excerpt:
      "Stay ahead of the curve with the latest mobile development trends, from cross-platform solutions to emerging technologies.",
    author: "Michael Thompson",
    date: "2023-12-15",
    readTime: "5 min read",
    category: "Mobile Development",
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
  },
]

const categories = [
  "All",
  "Artificial Intelligence",
  "Cybersecurity",
  "Digital Transformation",
  "DevOps",
  "Data Analytics",
  "Mobile Development",
]

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

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
              Our <span className="text-teal">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Insights, trends, and expert advice on technology, digital transformation, and business innovation.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input placeholder="Search articles..." className="pl-10 bg-white border-0 h-12 text-lg" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-white mb-8">Featured Article</h2>
              <Card className="bg-white border-0 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <Badge className="mb-4 bg-teal text-white">{featuredPost.category}</Badge>
                    <h3 className="text-2xl font-bold text-navy mb-4 leading-tight">{featuredPost.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-6">
                      <User className="w-4 h-4 mr-2" />
                      <span className="mr-4">{featuredPost.author}</span>
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="mr-4">{new Date(featuredPost.date).toLocaleDateString()}</span>
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <Button asChild className="bg-teal hover:bg-teal/90 text-white group">
                      <Link href={`/blog/${featuredPost.slug}`}>
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Categories Filter */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={
                  category === "All"
                    ? "bg-teal hover:bg-teal/90 text-white"
                    : "border-white text-white hover:bg-white hover:text-navy"
                }
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-0 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 left-4 bg-teal text-white">{post.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-navy mb-3 leading-tight group-hover:text-teal transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center text-xs text-gray-500 mb-4">
                      <User className="w-3 h-3 mr-1" />
                      <span className="mr-3">{post.author}</span>
                      <Calendar className="w-3 h-3 mr-1" />
                      <span className="mr-3">{new Date(post.date).toLocaleDateString()}</span>
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <Button asChild variant="ghost" className="p-0 h-auto text-teal hover:text-teal/80 group">
                      <Link href={`/blog/${post.slug}`}>
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Stay Updated</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest insights on technology trends and business innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input placeholder="Enter your email" className="flex-1" />
              <Button className="bg-teal hover:bg-teal/90 text-white px-8">Subscribe</Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">No spam, unsubscribe at any time.</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
