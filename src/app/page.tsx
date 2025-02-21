'use client';
import { useState } from 'react';
import {
  Github,
  Linkedin,
  User,
  Code,
  Globe,
  Coffee,
} from 'lucide-react';
import Link from 'next/link';
import {
  SiReact, SiNodedotjs, SiJavascript, SiTypescript, SiNextdotjs,
  SiTailwindcss, SiDocker, SiMongodb, SiSupabase, SiExpress,
  SiRedux, SiPug
} from "react-icons/si";
import Hero from './components/Hero';

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
      content: "Beyond coding, I enjoy playing and watching football, reading novels, listening to music, and drawing. I'm also passionate about AI, open-source contributions, and mentoring others in tech."
    }
  ];


  return (
    <div className="min-h-screen bg-[#030014] text-gray-100">
      {/* Hero Section */}
      <section>
        < Hero />
      </section>

      {/* About Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 to-purple-900/5"></div>
        <div className="max-w-5xl mx-auto relative">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutMeItems.map((item) => (
              <div
                key={item.title}
                className="group p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-blue-500/20 hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-1 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-lg group-hover:from-blue-600/30 group-hover:to-cyan-600/30 transition-colors duration-300">
                    <item.icon size={24} className="text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">{item.title}</h3>
                    <p className="text-blue-100/70 leading-relaxed">{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/5 to-purple-900/5"></div>
        <div className="max-w-5xl mx-auto relative">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">Skills & Technologies</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="group p-6 border border-blue-500/20 rounded-xl text-center hover:border-cyan-500/50 transition-all duration-300 bg-gradient-to-br from-gray-800/30 to-gray-900/30 hover:from-gray-800/50 hover:to-gray-900/50 transform hover:-translate-y-1 backdrop-blur-sm"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <Icon
                    className="w-12 h-12 mx-auto mb-4 transition-all duration-300"
                    style={{
                      color: hoveredSkill === skill.name ? skill.color : '#9CA3AF',
                      transform: hoveredSkill === skill.name ? 'scale(1.1)' : 'scale(1)',
                      filter: hoveredSkill === skill.name ? 'drop-shadow(0 0 8px rgba(0, 255, 255, 0.5))' : 'none'
                    }}
                  />
                  <span className="text-blue-100/80 group-hover:text-white transition-colors font-medium">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-blue-500/20 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center gap-6">
            {[
              { icon: Github, href: "https://github.com/tevinowino" },
              { icon: Linkedin, href: "www.linkedin.com/in/tevin-owino" },
            ].map((social) => (
              <Link
                key={social.href}
                href={social.href}
                className="text-blue-400 hover:text-cyan-300 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
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
        @keyframes particle {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) rotate(720deg); opacity: 0; }
        }

        @keyframes scanline {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
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

        .animate-particle {
          animation: particle 3s ease-in-out infinite;
        }

        .animate-scanline {
          animation: scanline 2s linear infinite;
        }

        .group:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}