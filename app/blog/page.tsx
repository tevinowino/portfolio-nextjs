// "use client"

// import { motion } from "framer-motion"
// import { Header } from "@/components/header"
// import { Footer } from "@/components/footer"
// import { GradientText } from "@/components/ui/gradient-text"
// import { GlowCard } from "@/components/ui/glow-card"
// import { Calendar, Clock, User, Search, ArrowRight } from "lucide-react"
// import Link from "next/link"
// import { useState, useMemo } from "react"

// const blogPosts = [
//   {
//     slug: "future-of-ai-in-business",
//     title: "The Future of AI in Business: Trends to Watch in 2024",
//     excerpt: "Explore the latest AI trends reshaping industries and how your business can leverage artificial intelligence.",
//     author: "Sarah Chen",
//     date: "2024-01-15",
//     readTime: "8 min",
//     category: "Artificial Intelligence",
//     featured: true,
//   },
//   {
//     slug: "cloud-security-best-practices",
//     title: "Cloud Security Best Practices: Protecting Your Digital Assets",
//     excerpt: "Essential cloud security strategies to safeguard your business data and maintain compliance.",
//     author: "Michael Thompson",
//     date: "2024-01-10",
//     readTime: "6 min",
//     category: "Cybersecurity",
//     featured: false,
//   },
//   {
//     slug: "digital-transformation-guide",
//     title: "Digital Transformation: A Complete Guide for Modern Businesses",
//     excerpt: "Key steps to successfully transform your business operations and stay competitive.",
//     author: "Alex Rodriguez",
//     date: "2024-01-05",
//     readTime: "12 min",
//     category: "Digital Transformation",
//     featured: false,
//   },
//   {
//     slug: "devops-automation-benefits",
//     title: "DevOps Automation: Streamlining Your Development Pipeline",
//     excerpt: "How DevOps automation can reduce deployment time and improve code quality.",
//     author: "Emily Davis",
//     date: "2023-12-28",
//     readTime: "7 min",
//     category: "DevOps",
//     featured: false,
//   },
//   {
//     slug: "data-analytics-roi",
//     title: "Maximizing ROI with Data Analytics: A Strategic Approach",
//     excerpt: "Implement data analytics solutions that deliver measurable business value.",
//     author: "Sarah Chen",
//     date: "2023-12-20",
//     readTime: "9 min",
//     category: "Data Analytics",
//     featured: false,
//   },
// ]

// const categories = ["All", "Artificial Intelligence", "Cybersecurity", "Digital Transformation", "DevOps", "Data Analytics"]

// export default function BlogPage() {
//   const [activeCategory, setActiveCategory] = useState("All")
//   const [searchQuery, setSearchQuery] = useState("")

//   const filteredPosts = useMemo(() => {
//     let filtered = blogPosts
//     if (activeCategory !== "All") {
//       filtered = filtered.filter((p) => p.category === activeCategory)
//     }
//     if (searchQuery) {
//       filtered = filtered.filter(
//         (p) =>
//           p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           p.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
//       )
//     }
//     return filtered
//   }, [activeCategory, searchQuery])

//   const featuredPost = filteredPosts.find((p) => p.featured)
//   const regularPosts = filteredPosts.filter((p) => !p.featured)

//   return (
//     <main className="min-h-screen bg-bg-primary">
//       <div className="noise-overlay" />
//       <Header />

//       {/* Hero */}
//       <section className="pt-32 pb-16 section-padding relative overflow-hidden">
//         <div className="absolute inset-0">
//           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl" />
//         </div>

//         <div className="container-custom relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center max-w-3xl mx-auto mb-10"
//           >
//             <span className="inline-block font-mono text-xs uppercase tracking-widest text-accent-cyan mb-4">
//               Insights
//             </span>
//             <h1 className="text-display mb-6">
//               Our <GradientText variant="animated">Blog</GradientText>
//             </h1>
//             <p className="text-body-lg">
//               Insights, trends, and expert advice on technology and business innovation.
//             </p>
//           </motion.div>

//           {/* Search */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="max-w-md mx-auto mb-8"
//           >
//             <div className="relative">
//               <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
//               <input
//                 type="text"
//                 placeholder="Search articles..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full pl-12 pr-4 py-3 rounded-xl bg-bg-secondary border border-border-subtle text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-cyan transition-colors"
//               />
//             </div>
//           </motion.div>

//           {/* Categories */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="flex flex-wrap justify-center gap-2"
//           >
//             {categories.map((category) => (
//               <motion.button
//                 key={category}
//                 onClick={() => setActiveCategory(category)}
//                 className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
//                   activeCategory === category
//                     ? "bg-accent-cyan text-white"
//                     : "bg-bg-secondary border border-border-subtle text-text-secondary hover:border-border-visible"
//                 }`}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 {category}
//               </motion.button>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Featured Post */}
//       {featuredPost && (
//         <section className="section-padding bg-bg-secondary pt-8">
//           <div className="container-custom">
//             <h2 className="font-heading font-semibold text-lg text-text-primary mb-6 text-center">
//               Featured Article
//             </h2>
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <GlowCard>
//                 <div className="p-6 lg:p-8">
//                   <div className="flex flex-col lg:flex-row gap-6">
//                     <div className="lg:w-2/3">
//                       <span className="inline-block px-3 py-1 rounded-full bg-accent-cyan/20 text-accent-cyan text-xs font-medium mb-4">
//                         {featuredPost.category}
//                       </span>
//                       <h3 className="text-2xl font-heading font-semibold text-text-primary mb-3">
//                         {featuredPost.title}
//                       </h3>
//                       <p className="text-text-secondary mb-4 leading-relaxed">
//                         {featuredPost.excerpt}
//                       </p>
//                       <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
//                         <span className="flex items-center gap-1">
//                           <User className="w-4 h-4" />
//                           {featuredPost.author}
//                         </span>
//                         <span className="flex items-center gap-1">
//                           <Calendar className="w-4 h-4" />
//                           {new Date(featuredPost.date).toLocaleDateString()}
//                         </span>
//                         <span className="flex items-center gap-1">
//                           <Clock className="w-4 h-4" />
//                           {featuredPost.readTime}
//                         </span>
//                       </div>
//                       <Link href={`/blog/${featuredPost.slug}`}>
//                         <motion.button
//                           className="btn-primary"
//                           whileHover={{ scale: 1.02 }}
//                           whileTap={{ scale: 0.98 }}
//                         >
//                           Read Article
//                           <ArrowRight className="w-4 h-4" />
//                         </motion.button>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </GlowCard>
//             </motion.div>
//           </div>
//         </section>
//       )}

//       {/* Blog Posts Grid */}
//       <section className="section-padding bg-bg-primary">
//         <div className="container-custom">
//           {regularPosts.length > 0 ? (
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {regularPosts.map((post, index) => (
//                 <motion.div
//                   key={post.slug}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                 >
//                   <GlowCard>
//                     <div className="p-5">
//                       <span className="inline-block px-2 py-0.5 rounded bg-bg-tertiary text-accent-cyan text-xs font-medium mb-3">
//                         {post.category}
//                       </span>
//                       <h3 className="font-heading font-semibold text-lg text-text-primary mb-2 line-clamp-2">
//                         {post.title}
//                       </h3>
//                       <p className="text-text-secondary text-sm mb-4 line-clamp-2">
//                         {post.excerpt}
//                       </p>
//                       <div className="flex items-center gap-3 text-xs text-text-muted mb-4">
//                         {/* <span className="flex items-center gap-1">
//                           <User className="w-3 h-3" />
//                           {post.author}
//                         </span> */}
//                         <span className="flex items-center gap-1">
//                           <Clock className="w-3 h-3" />
//                           {post.readTime}
//                         </span>
//                       </div>
//                       <Link
//                         href={`/blog/${post.slug}`}
//                         className="inline-flex items-center gap-1 text-accent-cyan text-sm font-medium hover:underline"
//                       >
//                         Read More
//                         <ArrowRight className="w-3 h-3" />
//                       </Link>
//                     </div>
//                   </GlowCard>
//                 </motion.div>
//               ))}
//             </div>
//           ) : (
//             <div className="text-center py-12">
//               <Search className="w-12 h-12 text-text-muted mx-auto mb-4" />
//               <h3 className="font-heading font-semibold text-xl text-text-primary mb-2">No Posts Found</h3>
//               <p className="text-text-secondary mb-6">Try adjusting your search or filters.</p>
//               <button
//                 onClick={() => {
//                   setActiveCategory("All")
//                   setSearchQuery("")
//                 }}
//                 className="btn-secondary"
//               >
//                 Clear Filters
//               </button>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Newsletter */}
//       <section className="section-padding bg-bg-secondary">
//         <div className="container-custom max-w-2xl">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="bg-bg-primary rounded-2xl border border-border-subtle p-8 text-center"
//           >
//             <h2 className="font-heading font-semibold text-xl text-text-primary mb-2">
//               Stay Updated
//             </h2>
//             <p className="text-text-secondary mb-6">
//               Get the latest insights on technology and business innovation.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-1 px-4 py-3 rounded-lg bg-bg-secondary border border-border-subtle text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-cyan transition-colors"
//               />
//               <motion.button
//                 className="btn-primary whitespace-nowrap"
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 Subscribe
//               </motion.button>
//             </div>
//             <p className="text-text-muted text-xs mt-4">No spam, unsubscribe anytime.</p>
//           </motion.div>
//         </div>
//       </section>

//       <Footer />
//     </main>
//   )
// }
