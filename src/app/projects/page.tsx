import React from 'react';
import { Github, ArrowRight, Star, Code } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import projectsData from '../data.json';
import type { Metadata } from 'next';
import { siteConfig } from '../metadata';

const projects = projectsData.projects;

export const metadata: Metadata = {
  title: `My Projects | ${siteConfig.name}`,
  description: 'Explore a collection of my projects, showcasing a range of technologies from full-stack applications to AI-powered tools.',
}

export default function ProjectsPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-background to-background text-foreground py-20 px-4">
        <header className="max-w-5xl mx-auto mb-16 space-y-6">
          <div className="relative">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary animate-gradient-x">
              Featured Projects
            </h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg opacity-20 blur-xl" />
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Explore my latest works combining innovative technology with creative solutions.
          </p>
        </header>

        <main className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-card/30 backdrop-blur-sm rounded-xl border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.2)] overflow-hidden relative"
            >
              <div className="relative h-52 overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.name}
                  width={600}
                  height={300}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-80" />
                
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-primary/20 backdrop-blur-md text-primary-foreground px-3 py-1 rounded-full border border-primary/30">
                  <Star size={14} className="group-hover:text-yellow-400 transition-colors" />
                  <span className="text-sm">Featured</span>
                </div>
              </div>

              <div className="p-6 relative z-10">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Code size={16} className="text-primary" />
                    <span className="text-sm text-primary font-medium tracking-wide">
                      {project.name}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mt-1 text-foreground group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                </div>

                <p className="text-muted-foreground mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="text-xs bg-primary/10 text-primary-foreground px-3 py-1 rounded-full border border-primary/20 hover:border-primary/50 hover:bg-primary/20 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} source code on GitHub`}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-all group/link"
                  >
                    <Github size={18} className="group-hover/link:rotate-12 transition-transform" />
                    <span>Source Code</span>
                  </a>
                  {project.liveDemo && (
                    <a 
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View live demo of ${project.name}`}
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-all group/link"
                    >
                      <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </main>

        <footer className="max-w-5xl mx-auto mt-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Interested in working together?
          </h2>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-4 rounded-lg hover:from-primary/90 hover:to-accent/90 transition-all duration-300 hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.5)] group font-medium"
          >
            Get in Touch
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </footer>
      </div>
    </>
  );
}
