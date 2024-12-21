import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Twitter, 
  Globe,
  Code2,
  Server,
  FileCode2,
  Cloud,
  Layers,
  Database,
  Palette,
  Box
} from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  const skills = [
    { name: 'React', icon: Code2, color: '#61DAFB' },
    { name: 'Node.js', icon: Server, color: '#339933' },
    { name: 'TypeScript', icon: FileCode2, color: '#3178C6' },
    { name: 'AWS', icon: Cloud, color: '#FF9900' },
    { name: 'Next.js', icon: Layers, color: '#ffffff' },
    { name: 'PostgreSQL', icon: Database, color: '#4169E1' },
    { name: 'Tailwind CSS', icon: Palette, color: '#06B6D4' },
    { name: 'Docker', icon: Box, color: '#2496ED' }
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#1e40af_0%,transparent_70%)] opacity-30"></div>
        <div className="max-w-5xl mx-auto relative">
          <div className="space-y-8">
            <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
              Hi, I'm Tevin
              <br />
              <span className="text-white">Full Stack Developer</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl">
              Building next-generation digital experiences with cutting-edge technology. Transforming ideas into reality through code.
            </p>
            
            <div className="flex gap-4">
              <Link 
                href="/projects" 
                className="group inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:bg-blue-700"
              >
                <span className="relative z-10">View Projects</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
              
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 border border-blue-500/30 px-6 py-3 rounded-lg hover:border-blue-400 hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] transition-all duration-300"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 px-4 bg-gray-900/50 backdrop-blur-sm border-t border-b border-blue-900/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((project) => (
              <div key={project} 
                className="group bg-gray-800/50 p-6 rounded-xl border border-blue-900/30 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.2)]"
              >
                <div className="h-48 bg-gray-700/50 rounded-lg mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-900/20 to-cyan-900/20 group-hover:scale-105 transition-transform duration-500"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-400">Project {project}</h3>
                <p className="text-gray-400 mb-4">
                  A brief description of this amazing project and the technologies used to build it.
                </p>
                <Link 
                  href={`/projects/${project}`}
                  className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-2 group/link"
                >
                  Learn More
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Skills & Technologies</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill) => {
              const Icon = skill.icon
              return (
                <div 
                  key={skill.name} 
                  className="group p-4 border border-blue-900/30 rounded-lg text-center hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] bg-gray-800/30"
                >
                  <Icon 
                    className="w-8 h-8 mx-auto mb-2 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" 
                    size={32}
                  />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Social Links */}
      <footer className="py-8 px-4 border-t border-blue-900/30">
        <div className="max-w-5xl mx-auto flex justify-center gap-6">
          <a 
            href="https://github.com" 
            className="text-gray-400 hover:text-white hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all duration-300"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://linkedin.com" 
            className="text-gray-400 hover:text-white hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all duration-300"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="https://twitter.com" 
            className="text-gray-400 hover:text-white hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all duration-300"
          >
            <Twitter size={24} />
          </a>
        </div>
      </footer>
    </div>
  )
}
