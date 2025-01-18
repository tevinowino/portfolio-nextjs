import React from 'react';
import { Github, ArrowRight, Star, Code } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import projectsData from '../data.json';
import Head from 'next/head';

const projects = projectsData.projects;

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>My Projects | Portfolio</title>
        <meta name="description" content="Explore my latest works combining innovative technology with creative solutions." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100 py-20 px-4">
        {/* Header with animated gradient */}
        <header className="max-w-5xl mx-auto mb-16 space-y-6">
          <div className="relative">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 animate-gradient-x">
              Featured Projects
            </h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg opacity-20 blur-xl" />
          </div>
          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
            Explore my latest works combining innovative technology with creative solutions.
          </p>
        </header>

        {/* Projects Grid */}
        <main className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-gray-800/30 backdrop-blur-sm rounded-xl border border-blue-900/30 hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] overflow-hidden relative"
            >
              {/* Project Image with parallax effect */}
              <div className="relative h-52 overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.name}
                  width={600}
                  height={300}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-80" />
                
                {/* Floating badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-blue-500/20 backdrop-blur-md text-blue-300 px-3 py-1 rounded-full border border-blue-400/30">
                  <Star size={14} className="group-hover:text-yellow-400 transition-colors" />
                  <span className="text-sm">Featured</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 relative z-10">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Code size={16} className="text-blue-400" />
                    <span className="text-sm text-blue-400 font-medium tracking-wide">
                      {project.name}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mt-1 text-white group-hover:text-blue-300 transition-colors">
                    {project.name}
                  </h3>
                </div>

                {/* Project description */}
                <p className="text-gray-300 mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="text-xs bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full border border-blue-800/50 hover:border-blue-400/50 hover:bg-blue-900/50 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} source code on GitHub`}
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-all group/link"
                  >
                    <Github size={18} className="group-hover/link:rotate-12 transition-transform" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </main>

        {/* Contact CTA */}
        <footer className="max-w-5xl mx-auto mt-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
            Interested in working together?
          </h2>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg hover:from-blue-500 hover:to-blue-600 transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] group font-medium"
          >
            Get in Touch
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </footer>
      </div>
    </>
  );
}
