import { 
    Calendar, 
    MapPin, 
    Mail, 
    Download, 
    ArrowRight,
    Code2,
    Globe,
    Laptop,
    Brain,
    Server
  } from 'lucide-react'
  import Link from 'next/link'
  
  export default function AboutPage() {
    const experiences = [
      {
        role: "Senior Full Stack Developer",
        company: "Tech Innovators Inc",
        period: "2021 - Present",
        description: "Led development of enterprise-scale applications, mentored junior developers, and implemented CI/CD pipelines.",
        achievements: [
          "Reduced application load time by 40%",
          "Implemented microservices architecture",
          "Led team of 5 developers"
        ]
      },
      {
        role: "Full Stack Developer",
        company: "Digital Solutions Lab",
        period: "2018 - 2021",
        description: "Developed and maintained multiple client projects using React, Node.js, and AWS.",
        achievements: [
          "Delivered 15+ successful projects",
          "Introduced automated testing",
          "Improved code review process"
        ]
      }
    ];
  
    const skills = [
      {
        category: "Frontend Development",
        icon: Code2,
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
      },
      {
        category: "Backend Development",
        icon: Server,
        items: ["Node.js", "Python", "PostgreSQL", "Redis"]
      },
      {
        category: "Tools & Platforms",
        icon: Laptop,
        items: ["Git", "Docker", "AWS", "Vercel"]
      },
      {
        category: "Areas of Expertise",
        icon: Brain,
        items: ["System Design", "Performance Optimization", "CI/CD", "Agile"]
      }
    ];
  
    return (
      <div className="min-h-screen bg-gray-900 text-gray-100 py-20 px-4">
        {/* Hero Section */}
        <div className="max-w-5xl mx-auto">
          <div className="relative mb-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#1e40af_0%,transparent_70%)] opacity-30"></div>
            <div className="relative">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
                About Me
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mb-8">
                A passionate full-stack developer with 2+ years of experience building innovative web solutions. 
                I specialize in creating scalable applications that combine elegant design with robust functionality.
              </p>
              
              <div className="flex flex-col md:flex-row gap-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <MapPin className="text-blue-400" size={20} />
                  <span>Nairobi, Kenya</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="text-blue-400" size={20} />
                  <a href="mailto:john@example.com" className="hover:text-blue-400 transition-colors">
                    tevinowino65@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="text-blue-400" size={20} />
                  <a href="https://example.com" className="hover:text-blue-400 transition-colors">
                    codewithtevin.com
                  </a>
                </div>
              </div>
            </div>
          </div>
  
          {/* Skills Section */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div 
                    key={index}
                    className="bg-gray-800/50 p-6 rounded-xl border border-blue-900/30 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.2)]"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Icon size={24} className="text-blue-400" />
                      <h3 className="text-xl font-semibold">{skill.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, itemIndex) => (
                        <span 
                          key={itemIndex}
                          className="text-sm bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full border border-blue-800/50"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
  
          {/* Experience Section */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8">Professional Experience</h2>
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <div 
                  key={index}
                  className="bg-gray-800/50 p-6 rounded-xl border border-blue-900/30 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.2)]"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-blue-400">{experience.role}</h3>
                      <p className="text-gray-300">{experience.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0">
                      <Calendar size={18} />
                      <span>{experience.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{experience.description}</p>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li 
                        key={achievementIndex}
                        className="flex items-center gap-2 text-gray-300"
                      >
                        <ArrowRight size={16} className="text-blue-400" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
  
          {/* CTA Section */}
          <section className="text-center">
            <a 
              href="/resume.pdf"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] group"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </a>
          </section>
        </div>
      </div>
    )
  }