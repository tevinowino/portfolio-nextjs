'use client';
import { useState } from 'react';
import {
  ArrowRight,
  Github,
  Linkedin,
  User,
  Code,
  Globe,
  Coffee,
  Mail
} from 'lucide-react';
import Link from 'next/link';
import {
  SiReact, SiNodedotjs, SiJavascript, SiTypescript, SiNextdotjs,
  SiTailwindcss, SiDocker, SiMongodb, SiSupabase, SiExpress,
  SiRedux, SiPug
} from "react-icons/si";

export default function HomePage() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const skills = [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
    { name: 'Express.js', icon: SiExpress, color: '#000000' },
    { name: 'Redux', icon: SiRedux, color: '#764ABC' },
    { name: 'Pug', icon: SiPug, color: '#A86454' }];

  const aboutMeItems = [
    {
      icon: User,
      title: "Who I Am",
      content: "A passionate full-stack developer and the Founding Software Engineer at Learnify, working to revolutionize education in Kenya."
    },
    {
      icon: Code,
      title: "What I Do",
      content: "I specialize in building scalable web applications using modern technologies like Remix, React, and MongoDB to create impactful digital solutions."
    },
    {
      icon: Globe,
      title: "Experience",
      content: "Skilled in full-stack web development, with a strong background in JavaScript, Node.js, and database management. Completed a fullstack development bootcamp at GoMyCode."
    },
    {
      icon: Coffee,
      title: "Interests",
      content: "Beyond coding, I enjoy playing and watching football, reading novels, listening to music, and drawing. I’m also passionate about AI, open-source contributions, and mentoring others in tech."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center py-20 px-4 overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0">
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.15]">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(#1e40af 1px, transparent 1px),
                               linear-gradient(to right, #1e40af 1px, transparent 1px)`,
              backgroundSize: '4rem 4rem',
              transform: 'skewY(-12deg)',
              transformOrigin: '0 0',
            }}></div>
          </div>

          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-blue-600/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-gray-900 to-transparent"></div>

          {/* Animated Dots */}
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-500/20"
              style={{
                width: Math.random() * 4 + 2 + 'px',
                height: Math.random() * 4 + 2 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `-${Math.random() * 10}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text bg-gradient-to-r from-white via-blue-400 to-white animate-gradient">
                Hi, I am Tevin
                <br />
                <span className="text-blue-600">Full Stack Developer</span>
              </h1>
            </div>

            <p className="text-xl text-gray-300 max-w-2xl animate-slide-up">
              Building next-generation digital experiences with cutting-edge technology.
              Transforming ideas into reality through code.
            </p>

            <div className="flex flex-wrap gap-4 animate-slide-up">
              <Link
                href="/projects"
                className="group relative inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10">View Projects</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </Link>

              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 border border-blue-500/30 px-6 py-3 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10">Contact Me</span>
                <Mail className="group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-blue-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-500/50 rounded-full flex justify-center p-1">
            <div className="w-1 h-3 bg-blue-500/50 rounded-full animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-500/5"></div>
        <div className="max-w-5xl mx-auto relative">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutMeItems.map((item) => (
              <div
                key={item.title}
                className="group p-6 bg-gray-800/50 rounded-xl border border-blue-900/30 hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/30 transition-colors duration-300">
                    <item.icon size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-400">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Skills & Technologies</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="group p-6 border border-blue-900/30 rounded-xl text-center hover:border-blue-500/50 transition-all duration-300 bg-gray-800/30 hover:bg-gray-800/50 transform hover:-translate-y-1"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <Icon
                    className="w-12 h-12 mx-auto mb-4 transition-all duration-300"
                    style={{
                      color: hoveredSkill === skill.name ? skill.color : '#9CA3AF',
                      transform: hoveredSkill === skill.name ? 'scale(1.1)' : 'scale(1)'
                    }}
                  />
                  <span className="text-gray-300 group-hover:text-white transition-colors font-medium">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-blue-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center gap-6">
            {[
              { icon: Github, href: "https://github.com/tevinowino" },
              { icon: Linkedin, href: "www.linkedin.com/in/tevin-owino" },
            ].map((social) => (
              <Link
                key={social.href}
                href={social.href}
                className="text-gray-400 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon size={24} />
              </Link>
            ))}
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-1000px) rotate(720deg); opacity: 0; }
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes scroll {
          0% { transform: translateY(0); opacity: 0; }
          30% { opacity: 1; }
          60% { opacity: 1; }
          90% { transform: translateY(8px); opacity: 0; }
          100% { transform: translateY(8px); opacity: 0; }
        }

        .animate-gradient {
          animation: gradient 6s linear infinite;
          background-size: 200% auto;
        }

        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}