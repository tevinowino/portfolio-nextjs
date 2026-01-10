// "use client"

// import { motion } from "framer-motion"
// import { Header } from "@/components/header"
// import { Footer } from "@/components/footer"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Calendar, Clock, User, ArrowLeft, Share2, BookmarkPlus, ArrowRight } from "lucide-react"
// import Link from "next/link"
// import { notFound } from "next/navigation"

// // Mock blog post data - in a real app, this would come from a CMS or database
// const blogPosts = {
//   "future-of-ai-in-business": {
//     title: "The Future of AI in Business: Trends to Watch in 2024",
//     excerpt:
//       "Explore the latest AI trends that are reshaping industries and discover how your business can leverage artificial intelligence for competitive advantage.",
//     author: "Sarah Chen",
//     date: "2024-01-15",
//     readTime: "8 min read",
//     category: "Artificial Intelligence",
//     image: "/placeholder.svg?height=400&width=800",
//     content: `
//       <p>Artificial Intelligence is no longer a futuristic concept—it's a present reality that's transforming how businesses operate across every industry. As we move through 2024, several key AI trends are emerging that will define the competitive landscape for years to come.</p>

//       <h2>1. Generative AI Goes Mainstream</h2>
//       <p>Generative AI tools like ChatGPT, Claude, and specialized business applications are becoming integral to daily operations. Companies are using these tools for content creation, code generation, customer service, and strategic planning.</p>

//       <h2>2. AI-Powered Automation</h2>
//       <p>Beyond simple task automation, AI is enabling intelligent process automation that can handle complex decision-making scenarios. This includes everything from supply chain optimization to personalized customer experiences.</p>

//       <h2>3. Ethical AI and Governance</h2>
//       <p>As AI becomes more prevalent, businesses are investing heavily in AI governance frameworks to ensure ethical use, bias mitigation, and regulatory compliance.</p>

//       <h2>Key Takeaways for Business Leaders</h2>
//       <ul>
//         <li>Start with pilot projects to understand AI's impact on your specific business</li>
//         <li>Invest in employee training and change management</li>
//         <li>Develop clear AI governance policies</li>
//         <li>Focus on AI solutions that solve real business problems</li>
//       </ul>

//       <p>The businesses that succeed in the AI era will be those that thoughtfully integrate these technologies while maintaining focus on human value and ethical considerations.</p>
//     `,
//   },
//   // Add more blog posts as needed
// }

// const relatedPosts = [
//   {
//     slug: "cloud-security-best-practices",
//     title: "Cloud Security Best Practices: Protecting Your Digital Assets",
//     category: "Cybersecurity",
//     image: "/placeholder.svg?height=200&width=300",
//   },
//   {
//     slug: "digital-transformation-guide",
//     title: "Digital Transformation: A Complete Guide for Modern Businesses",
//     category: "Digital Transformation",
//     image: "/placeholder.svg?height=200&width=300",
//   },
//   {
//     slug: "devops-automation-benefits",
//     title: "DevOps Automation: Streamlining Your Development Pipeline",
//     category: "DevOps",
//     image: "/placeholder.svg?height=200&width=300",
//   },
// ]

// interface BlogPostPageProps {
//   params: {
//     slug: string
//   }
// }

// export default function BlogPostPage({ params }: BlogPostPageProps) {
//   const post = blogPosts[params.slug as keyof typeof blogPosts]

//   if (!post) {
//     notFound()
//   }

//   return (
//     <main className="min-h-screen bg-[#0A192F]">
//       <Header />

//       {/* Hero Section */}
//       <section className="pt-32 pb-12 px-4">
//         <div className="max-w-4xl mx-auto">
//           <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
//             <Button asChild variant="ghost" className="text-white hover:text-teal mb-8 p-0">
//               <Link href="/blog">
//                 <ArrowLeft className="w-4 h-4 mr-2" />
//                 Back to Blog
//               </Link>
//             </Button>

//             <Badge className="mb-6 bg-teal text-white text-sm">{post.category}</Badge>

//             <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">{post.title}</h1>

//             <div className="flex items-center text-gray-300 mb-8">
//               <User className="w-5 h-5 mr-2" />
//               <span className="mr-6">{post.author}</span>
//               <Calendar className="w-5 h-5 mr-2" />
//               <span className="mr-6">{new Date(post.date).toLocaleDateString()}</span>
//               <Clock className="w-5 h-5 mr-2" />
//               <span>{post.readTime}</span>
//             </div>

//             <div className="flex items-center gap-4 mb-8">
//               <Button
//                 variant="outline"
//                 className="border-white text-white hover:bg-white hover:text-navy bg-transparent"
//               >
//                 <Share2 className="w-4 h-4 mr-2" />
//                 Share
//               </Button>
//               <Button
//                 variant="outline"
//                 className="border-white text-white hover:bg-white hover:text-navy bg-transparent"
//               >
//                 <BookmarkPlus className="w-4 h-4 mr-2" />
//                 Save
//               </Button>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Featured Image */}
//       <section className="pb-12 px-4">
//         <div className="max-w-4xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="rounded-2xl overflow-hidden shadow-2xl"
//           >
//             <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-64 md:h-96 object-cover" />
//           </motion.div>
//         </div>
//       </section>

//       {/* Article Content */}
//       <section className="py-12 px-4">
//         <div className="max-w-4xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <Card className="bg-white border-0 shadow-xl">
//               <CardContent className="p-8 md:p-12">
//                 <div
//                   className="prose prose-lg max-w-none"
//                   dangerouslySetInnerHTML={{ __html: post.content }}
//                   style={{
//                     color: "#1c1c1e",
//                     lineHeight: "1.7",
//                   }}
//                 />
//               </CardContent>
//             </Card>
//           </motion.div>
//         </div>
//       </section>

//       {/* Author Bio */}
//       <section className="py-12 px-4">
//         <div className="max-w-4xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <Card className="bg-white border-0 shadow-lg">
//               <CardContent className="p-8">
//                 <div className="flex items-center space-x-4">
//                   <img
//                     src="/placeholder.svg?height=80&width=80"
//                     alt={post.author}
//                     className="w-16 h-16 rounded-full object-cover"
//                   />
//                   <div>
//                     <h3 className="text-xl font-bold text-navy mb-2">{post.author}</h3>
//                     <p className="text-gray-600 leading-relaxed">
//                       Senior Technology Consultant at Velion Consulting with over 10 years of experience in AI and digital
//                       transformation. Passionate about helping businesses leverage cutting-edge technology for
//                       sustainable growth.
//                     </p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </div>
//       </section>

//       {/* Related Posts */}
//       <section className="py-20 px-4">
//         <div className="max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Related Articles</h2>
//             <p className="text-xl text-gray-300">Continue exploring our insights and expertise</p>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {relatedPosts.map((relatedPost, index) => (
//               <motion.div
//                 key={relatedPost.slug}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <Card className="bg-white border-0 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
//                   <CardContent className="p-0">
//                     <div className="relative overflow-hidden rounded-t-lg">
//                       <img
//                         src={relatedPost.image || "/placeholder.svg"}
//                         alt={relatedPost.title}
//                         className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//                       />
//                       <Badge className="absolute top-4 left-4 bg-teal text-white text-xs">{relatedPost.category}</Badge>
//                     </div>
//                     <div className="p-6">
//                       <h3 className="text-lg font-bold text-navy mb-4 leading-tight group-hover:text-teal transition-colors">
//                         {relatedPost.title}
//                       </h3>
//                       <Button asChild variant="ghost" className="p-0 h-auto text-teal hover:text-teal/80 group">
//                         <Link href={`/blog/${relatedPost.slug}`}>
//                           Read Article
//                           <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
//                         </Link>
//                       </Button>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </main>
//   )
// }
