import { Github, Globe, ArrowRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    title: "Project Alpha",
    description: "A next-generation AI-powered analytics dashboard that transforms complex data into actionable insights.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "OpenAI"],
    image: "/api/placeholder/800/400",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "AI & Analytics"
  },
  {
    title: "Project Beta",
    description: "Real-time collaboration platform enabling seamless team communication and project management.",
    tech: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    image: "/api/placeholder/800/400",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "Collaboration Tools"
  },
  {
    title: "Project Gamma",
    description: "E-commerce solution with advanced inventory management and real-time sales analytics.",
    tech: ["Next.js", "Prisma", "Stripe", "AWS"],
    image: "/api/placeholder/800/400",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "E-commerce"
  },
  {
    title: "Project Delta",
    description: "Mobile-first social platform for connecting creative professionals and showcasing portfolios.",
    tech: ["React Native", "Firebase", "TailwindCSS", "Cloud Functions"],
    image: "/api/placeholder/800/400",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "Social Platform"
  }
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-20 px-4">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
          Featured Projects
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl">
          Explore my latest works combining innovative technology with creative solutions.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="group bg-gray-800/50 rounded-xl border border-blue-900/30 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] overflow-hidden"
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <div className="mb-4">
                <span className="text-sm text-blue-400 font-medium">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mt-1 text-white">
                  {project.title}
                </h3>
              </div>

              <p className="text-gray-300 mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, index) => (
                  <span 
                    key={index}
                    className="text-xs bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full border border-blue-800/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4">
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group/link"
                >
                  <Globe size={18} className="group-hover/link:rotate-12 transition-transform" />
                  <span>Live Demo</span>
                </a>
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group/link"
                >
                  <Github size={18} className="group-hover/link:rotate-12 transition-transform" />
                  <span>Source Code</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="max-w-5xl mx-auto mt-20 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Interested in working together?
        </h2>
        <Link 
          href="/contact"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] group"
        >
          Get in Touch
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  )
}