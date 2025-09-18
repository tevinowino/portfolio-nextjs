"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Globe, Code, Settings, Wrench, Star, Shield } from "lucide-react"

const pricingPlans = [
  {
    name: "Starter",
    price: "KSh 25,000",
    period: "per project",
    description: "Perfect for small businesses and startups",
    features: [
      "Landing Page Development",
      "Responsive Design",
      "Basic SEO Setup",
      "Contact Form Integration",
      "1 Month Support",
      "Mobile Optimization",
    ],
    popular: false,
    cta: "Get Started",
    icon: Globe,
  },
  {
    name: "Professional",
    price: "KSh 75,000",
    period: "per project",
    description: "Ideal for growing businesses",
    features: [
      "Multi-page Website",
      "Blog Integration",
      "Advanced SEO",
      "Analytics Setup",
      "3 Months Support",
      "Performance Optimization",
      "Social Media Integration",
      "Content Management System",
    ],
    popular: true,
    cta: "Most Popular",
    icon: Star,
  },
  {
    name: "Enterprise",
    price: "KSh 150,000",
    period: "per project",
    description: "For large businesses with complex needs",
    features: [
      "E-commerce Platform",
      "Custom Functionality",
      "Advanced Integrations",
      "User Authentication",
      "6 Months Support",
      "Database Integration",
      "Payment Gateway Setup",
      "Admin Dashboard",
      "Security Features",
    ],
    popular: false,
    cta: "Contact Us",
    icon: Shield,
  },
]

const serviceCategories = [
  {
    title: "Website Development",
    icon: Globe,
    description: "Complete web solutions from concept to deployment",
    subcategories: [
      {
        name: "Landing Pages",
        price: "KSh 15,000 - 35,000",
        features: ["Single page design", "Lead capture forms", "Mobile responsive", "Basic SEO"],
      },
      {
        name: "Business Websites",
        price: "KSh 40,000 - 80,000",
        features: ["Multi-page site", "Content management", "Contact forms", "Gallery/portfolio"],
      },
      {
        name: "E-commerce Sites",
        price: "KSh 80,000 - 200,000",
        features: ["Product catalog", "Shopping cart", "Payment integration", "Order management"],
      },
      {
        name: "Blogs & News Sites",
        price: "KSh 30,000 - 60,000",
        features: ["Content management", "Comment system", "Social sharing", "SEO optimization"],
      },
    ],
  },
  {
    title: "SaaS Development",
    icon: Code,
    description: "Scalable software-as-a-service solutions",
    subcategories: [
      {
        name: "MVP Development",
        price: "KSh 200,000 - 500,000",
        features: ["Core functionality", "User authentication", "Basic dashboard", "API development"],
      },
      {
        name: "Full SaaS Platform",
        price: "KSh 500,000 - 1,500,000",
        features: ["Complete platform", "Multi-tenant architecture", "Advanced features", "Scalable infrastructure"],
      },
      {
        name: "SaaS Integrations",
        price: "KSh 50,000 - 150,000",
        features: ["Third-party APIs", "Webhook setup", "Data synchronization", "Custom connectors"],
      },
    ],
  },
  {
    title: "Internal Systems",
    icon: Settings,
    description: "Custom internal tools and management systems",
    subcategories: [
      {
        name: "CRM Systems",
        price: "KSh 150,000 - 400,000",
        features: ["Customer management", "Sales tracking", "Reporting dashboard", "Email integration"],
      },
      {
        name: "Inventory Management",
        price: "KSh 100,000 - 300,000",
        features: ["Stock tracking", "Order management", "Supplier management", "Reports & analytics"],
      },
      {
        name: "HR Management",
        price: "KSh 120,000 - 350,000",
        features: ["Employee records", "Payroll integration", "Leave management", "Performance tracking"],
      },
    ],
  },
  {
    title: "Website Maintenance",
    icon: Wrench,
    description: "Ongoing support and maintenance services",
    subcategories: [
      {
        name: "Basic Maintenance",
        price: "KSh 5,000/month",
        features: ["Security updates", "Backup management", "Uptime monitoring", "Basic support"],
      },
      {
        name: "Standard Maintenance",
        price: "KSh 10,000/month",
        features: ["Content updates", "Performance optimization", "SEO monitoring", "Priority support"],
      },
      {
        name: "Premium Maintenance",
        price: "KSh 20,000/month",
        features: ["24/7 monitoring", "Emergency fixes", "Feature updates", "Dedicated support"],
      },
    ],
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#0A192F] font-saira">
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
              Our <span className="text-teal">Pricing</span> Plans
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transparent pricing for all your web development needs. Choose a plan that fits your budget and
              requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-teal text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <Card
                  className={`bg-white border-0 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                    plan.popular ? "ring-2 ring-teal" : ""
                  }`}
                >
                  <CardHeader className="pb-4 text-center">
                    <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <plan.icon className="w-8 h-8 text-teal" />
                    </div>
                    <CardTitle className="text-2xl text-navy mb-2">{plan.name}</CardTitle>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-navy">{plan.price}</span>
                      <span className="text-gray-500 ml-2">{plan.period}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-teal mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full group ${
                        plan.popular ? "bg-teal hover:bg-teal/90 text-white" : "bg-navy hover:bg-navy/90 text-white"
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Service Categories</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Detailed pricing for specific services and project types
            </p>
          </motion.div>

          <div className="space-y-12">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-0 overflow-hidden">
                  <CardHeader className="bg-gray-50 border-b">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mr-4">
                        <category.icon className="w-6 h-6 text-teal" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-navy mb-1">{category.title}</CardTitle>
                        <p className="text-gray-600 text-sm">{category.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.subcategories.map((subcategory, subIndex) => (
                        <motion.div
                          key={subcategory.name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: subIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                        >
                          <h4 className="font-semibold text-navy mb-2">{subcategory.name}</h4>
                          <p className="text-teal font-bold mb-3">{subcategory.price}</p>
                          <ul className="space-y-1">
                            {subcategory.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                                <CheckCircle className="w-3 h-3 text-teal mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get a custom quote tailored to your specific needs and requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-teal hover:bg-teal/90 text-white py-4 px-8 rounded-full">Get Custom Quote</Button>
              <Button
                variant="outline"
                className="border-navy text-navy hover:bg-navy hover:text-white py-4 px-8 rounded-full bg-transparent"
              >
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
