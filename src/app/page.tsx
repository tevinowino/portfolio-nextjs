"use client";
import { useState, useEffect, useRef, lazy, Suspense } from "react";
import {
  Github,
  Linkedin,
  User,
  Code,
  Globe,
  Coffee,
  ExternalLink,
  ArrowRight,
  Star,
  Eye,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiDocker,
  SiMongodb,
  SiSupabase,
  SiExpress,
  SiRedux,
  SiPug,
} from "react-icons/si";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

const Hero = lazy(() => import("./components/Hero"));

export default function HomePage() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const skills = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
    { name: "Express.js", icon: SiExpress, color: "#000000" },
    { name: "Redux", icon: SiRedux, color: "#764ABC" },
    { name: "Pug", icon: SiPug, color: "#A86454" },
  ];

  const aboutMeItems = [
    {
      icon: User,
      title: "Who I Am",
      content:
        "A passionate full-stack developer and the Founding Software Engineer at Learnify, working to revolutionize education in Kenya.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Code,
      title: "What I Do",
      content:
        "I specialize in building scalable web applications using modern technologies like Remix, React, and MongoDB to create impactful digital solutions.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Globe,
      title: "Experience",
      content:
        "Skilled in full-stack web development, with a strong background in JavaScript, Node.js, and database management. Completed a fullstack development bootcamp at GoMyCode.",
      gradient: "from-purple-500 to-violet-500",
    },
    {
      icon: Coffee,
      title: "Interests",
      content:
        "Beyond coding, I enjoy playing and watching football, reading novels, listening to music, and drawing. I'm also passionate about AI, open-source contributions, and mentoring others in tech.",
      gradient: "from-orange-500 to-amber-500",
    },
  ];

  const featuredProjects = [
    {
      name: "Learnify",
      image: "/images/learnify.png",
      description:
        "A multi-tenant SaaS platform offering web solutions to schools and educational institutions in Kenya. Built with Next.js and Firebase, Learnify provides features like AI-powered tools, student onboarding, parent dashboards, attendance tracking, and exam management. It aims to revolutionize curriculum delivery in Kenyan schools.",
      technologies: ["Next.js", "Firebase", "React", "Tailwind CSS"],
      github: "https://github.com/tevinowino/learnify",
      liveDemo: "https://www.learnifykenya.co.ke/",
    },
    {
      name: "ShopSmart E-commerce App",
      image: "/images/shopsmart.png",
      description:
        "A full-featured e-commerce application built using the MERN stack and Remix. It supports user authentication, product categorization, advanced search filters, cart management, secure payments, and order tracking. The app also integrates user reviews and offers responsive performance for large product catalogs.",
      technologies: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "Remix",
        "TypeScript",
      ],
      github:
        "https://github.com/tevinowino/dash/tree/Cart-and-model-Implementation",
    },
    {
      name: "ThoughtReflex",
      image: "/images/thoughtreflex.png",
      description:
        "An AI-powered mental wellness app that helps users process emotions, track mental health, and grow from past traumas. It features an empathetic AI companion named Mira with three modes (Therapist, Coach, Friend), journaling, reflection tools, and personalized goal suggestions to guide healing and growth.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API"],
      github: "https://github.com/tevinowino/To-Do-App-GMC",
      liveDemo: "https://thoughtreflex.vercel.app",
    },
    {
      name: "Digital Moran",
      image: "/images/digitalmoran.png",
      description:
        "A youth-focused platform built in partnership with the Digital Moran NGO to help Kenyan youths access gigs, jobs, and mentorship opportunities in tech. The app connects learners with real-world opportunities, empowering them to grow their skills and secure meaningful work.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
      github: "https://github.com/tevinowino/digitalmoran",
      liveDemo: "https://agency.digitalmoran.africa",
    },
  ];

  // Duplicate projects for seamless infinite scroll
  const duplicatedProjects = [...featuredProjects, ...featuredProjects];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <section>
          <Hero />
      </section>
      {/* Enhanced Featured Projects Section with Infinite Scroll */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-purple-900/10"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover some of my most impactful work, from educational
              platforms to AI-powered applications.
            </p>
          </motion.div>

          {/* Infinite Scrolling Container */}
          <div className="relative">
            <div className="flex gap-6 animate-scroll-infinite">
              {duplicatedProjects.map((project, index) => (
                <motion.div
                  key={`${project.name}-${index}`}
                  className="flex-shrink-0 w-80 group"
                  onMouseEnter={() => setHoveredProject(project.name)}
                  onMouseLeave={() => setHoveredProject(null)}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-card/60 to-background/60 border border-border hover:border-primary/50 transition-all duration-500 backdrop-blur-sm">
                    {/* Project Image */}
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>

                      {/* Hover Overlay */}
                      <AnimatePresence>
                        {hoveredProject === project.name && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-primary/20 backdrop-blur-sm flex items-center justify-center gap-4"
                          >
                            <motion.a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 bg-primary/20 rounded-full border border-primary/30 hover:bg-primary/30 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Github size={20} className="text-foreground" />
                            </motion.a>
                            {project.liveDemo && (
                              <motion.a
                                href={project.liveDemo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-accent/20 rounded-full border border-accent/30 hover:bg-accent/30 transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <ExternalLink
                                  size={20}
                                  className="text-accent-foreground"
                                />
                              </motion.a>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Project Stats */}
                      <div className="absolute top-4 right-4 flex gap-2">
                        <div className="flex items-center gap-1 bg-primary/20 backdrop-blur-sm rounded-full px-2 py-1 text-xs">
                          <Star size={12} className="text-yellow-400" />
                          <span className="text-foreground">
                            {/* project.stars */}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 bg-green-500/20 backdrop-blur-sm rounded-full px-2 py-1 text-xs">
                          <Eye size={12} className="text-green-400" />
                          <span className="text-foreground">
                            {/* project.views */}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                        {project.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary-foreground border border-primary/30"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="text-xs px-2 py-1 rounded-full bg-secondary/20 text-secondary-foreground border border-secondary/30">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-16"
          >
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent px-8 py-4 rounded-2xl font-medium text-primary-foreground hover:from-primary/90 hover:to-accent/90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40"
            >
              View All Projects
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform duration-300"
                size={18}
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Enhanced About Section with Video */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-blue-900/10"></div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-400/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, 30, 0],
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 6 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-accent">
              About Me
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get to know the person behind the code and the passion that drives
              my work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - About Cards */}
            <div className="space-y-6">
              {aboutMeItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group p-6 bg-gradient-to-br from-card/50 to-background/50 rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 transform hover:-translate-y-1 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className={`p-4 bg-gradient-to-br ${item.gradient}/20 rounded-xl group-hover:${item.gradient}/30 transition-all duration-300 relative overflow-hidden`}
                      whileHover={{ scale: 1.05, rotate: 5 }}
                    >
                      <item.icon
                        size={24}
                        className="text-foreground relative z-10"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                      ></div>
                    </motion.div>
                    <div className="flex-1">
                      <h3
                        className={`text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r ${item.gradient}`}
                      >
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Side - Video Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="w-full">
                {/* Video Container */}
                <HeroVideoDialog
                  className="block"
                  animationStyle="from-center"
                  videoSrc="/video.mp4"
                  thumbnailSrc="/images/video-thumbnail.png"
                  thumbnailAlt="Video Thumbnail"
                />
              </div>

              {/* Additional Info Cards */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-border text-center"
                >
                  <div className="text-2xl font-bold text-cyan-400">2+</div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-border text-center"
                >
                  <div className="text-2xl font-bold text-purple-400">5+</div>
                  <div className="text-sm text-muted-foreground">
                    Projects Built
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-purple-900/10"></div>
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-green-400 to-accent">
              Skills & Technologies
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The tools and technologies I use to bring ideas to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group p-6 border border-border rounded-2xl text-center hover:border-primary/50 transition-all duration-300 bg-gradient-to-br from-card/30 to-background/30 hover:from-card/50 hover:to-background/50 transform hover:-translate-y-2 backdrop-blur-sm relative overflow-hidden"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Background Glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
                    style={{ backgroundColor: skill.color }}
                  ></div>

                  <Icon
                    className="w-12 h-12 mx-auto mb-4 transition-all duration-300 relative z-10 text-foreground"
                    style={{
                      color:
                        hoveredSkill === skill.name
                          ? skill.color
                          : "hsl(var(--foreground))",
                      transform:
                        hoveredSkill === skill.name
                          ? "scale(1.2) rotate(5deg)"
                          : "scale(1)",
                      filter:
                        hoveredSkill === skill.name
                          ? `drop-shadow(0 0 12px ${skill.color}50)`
                          : "none",
                    }}
                  />
                  <span className="text-foreground/80 group-hover:text-foreground transition-colors font-medium relative z-10">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-12 px-4 border-t border-border backdrop-blur-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-4">
                Let's Connect
              </h3>
              <p className="text-muted-foreground">
                Always open to discussing new opportunities and exciting
                projects.
              </p>
            </motion.div>

            <div className="flex justify-center gap-6 mb-8">
              {[
                {
                  icon: Github,
                  href: "https://github.com/tevinowino",
                  color: "from-gray-400 to-gray-600",
                },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/in/tevin-owino",
                  color: "from-blue-400 to-blue-600",
                },
              ].map((social, index) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  className={`group p-4 rounded-full bg-gradient-to-br ${social.color}/10 border border-border hover:border-primary/50 transition-all duration-300 backdrop-blur-sm`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon
                    size={24}
                    className="text-primary group-hover:text-accent-foreground transition-colors"
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes scroll-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-infinite {
          animation: scroll-infinite 30s linear infinite;
          width: calc(
            344px * 8
          ); /* (w-80 + gap-6) * duplicated project count */
        }

        .animate-scroll-infinite:hover {
          animation-play-state: paused;
        }

        @keyframes particle {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(720deg);
            opacity: 0;
          }
        }

        @keyframes scanline {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          30% {
            opacity: 1;
          }
          60% {
            opacity: 1;
          }
          90% {
            transform: translateY(8px);
            opacity: 0;
          }
          100% {
            transform: translateY(8px);
            opacity: 0;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(2deg);
          }
        }

        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3),
              0 0 40px rgba(59, 130, 246, 0.1),
              0 0 60px rgba(59, 130, 246, 0.05);
          }
          50% {
            box-shadow: 0 0 30px rgba(6, 182, 212, 0.4),
              0 0 60px rgba(6, 182, 212, 0.2), 0 0 90px rgba(6, 182, 212, 0.1);
          }
        }

        @keyframes pulse-ring {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }

        .animate-gradient {
          animation: gradient 8s linear infinite;
          background-size: 300% auto;
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

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }

        .animate-pulse-ring {
          animation: pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(30, 41, 59, 0.5);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #3b82f6, #06b6d4);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #2563eb, #0891b2);
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Video controls custom styling */
        video::-webkit-media-controls {
          display: none !important;
        }

        video::-webkit-media-controls-enclosure {
          display: none !important;
        }

        /* Enhance text selection */
        ::selection {
          background: rgba(59, 130, 246, 0.3);
          color: white;
        }

        ::-moz-selection {
          background: rgba(59, 130, 246, 0.3);
          color: white;
        }

        /* Focus states for accessibility */
        .focus\\:ring-2:focus {
          outline: 2px solid transparent;
          outline-offset: 2px;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
        }

        /* Improved button transitions */
        .group:hover {
          transform: translateY(-2px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Enhanced backdrop blur for better browser support */
        .backdrop-blur-sm {
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
        }

        /* Loading animation for images */
        img {
          transition: opacity 0.3s ease-in-out;
        }

        img[src=""] {
          opacity: 0;
        }

        /* Improved gradient text support */
        .bg-clip-text {
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Dark mode optimizations */
        @media (prefers-color-scheme: dark) {
          .bg-gradient-to-br {
            background-image: linear-gradient(135deg, var(--tw-gradient-stops));
          }
        }

        /* Reduced motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll-infinite,
          .animate-gradient,
          .animate-float,
          .animate-glow,
          .animate-pulse-ring {
            animation: none;
          }

          * {
            transition-duration: 0.01ms !important;
          }
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .border-blue-500\\/20 {
            border-color: #3b82f6;
          }

          .text-blue-100\\/70 {
            color: #dbeafe;
          }
        }
      `}</style>
    </div>
  );
}
