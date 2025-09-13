import {
  Calendar,
  Download,
  ArrowRight,
  Code2,
  Laptop,
  Brain,
  Server
} from 'lucide-react';
import type { Metadata } from 'next';
import { siteConfig } from '../metadata';

export const metadata: Metadata = {
  title: `About Me | ${siteConfig.name}`,
  description: 'Learn about my professional journey, skills, and expertise in full-stack web development. Discover the passion that drives me to create impactful digital solutions.',
}

export default function AboutPage() {
const experiences = [
  {
    role: "Full Stack Software Engineer",
    company: "Finite Pay",
    period: "February 2025 – Present",
    description: "Building and maintaining fintech solutions for digital payments and banking services, with a strong focus on performance, security, and scalability.",
    achievements: [
      "Contributed to building the first version of the Finite Pay application from the ground up",
      "Implemented a real-time payment processing system handling 1,000+ daily transactions",
      "Reduced API response time by 40% through performance optimization and caching strategies",
      "Developed a robust automated testing suite achieving 85% code coverage",
      "Co-developed an innovative payment gateway that streamlined transaction workflows"
    ]
  },
  {
    role: "Founding Software Engineer",
    company: "Learnify",
    period: "2025 – Present",
    description: "Leading the development of scalable web platforms tailored for schools and learning institutions in Kenya, with a mission to revolutionize digital education.",
    achievements: [
      "Designed and developed the Learnify web application using Remix and Firebase",
      "Built core features including course catalogs, student progress dashboards, and educator analytics",
      "Established a modern, responsive UI aligned with brand goals and optimized for student engagement",
      "Integrated Firebase for authentication, storage, and real-time updates"
    ]
  },
  {
    role: "Full Stack Developer",
    company: "Freelance",
    period: "2023 – 2024",
    description: "Delivered tailored web and mobile applications for clients across various industries with a focus on usability and performance.",
    achievements: [
      "Successfully completed multiple end-to-end client projects on time and within scope",
      "Improved user experience through interactive and accessible UI/UX designs",
      "Built reusable component libraries to accelerate project delivery",
      "Implemented responsive designs and optimized applications for mobile performance"
    ]
  }
];

  const skills = [
    {
      category: "Frontend Development",
      icon: Code2,
      items: ["React", "Remix", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      category: "Backend Development",
      icon: Server,
      items: ["Node.js", "MongoDB", "PostgreSQL", "Supabase", "Express.js", "Firebase"]
    },
    {
      category: "Tools & Platforms",
      icon: Laptop,
      items: ["Git", "Docker", "Vercel"]
    },
    {
      category: "Areas of Expertise",
      icon: Brain,
      items: ["System Design","Problem Solving", "Performance Optimization", "CI/CD", "Agile", "SCRUM"]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground py-20 px-4 mt-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-card to-background opacity-50"></div>
      <div className="max-w-5xl mx-auto relative z-10">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
            About Me
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate full-stack developer dedicated to creating impactful digital solutions for education and businesses.
          </p>
        </header>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={index} className="bg-card/50 p-6 rounded-xl border border-border hover:scale-105 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon size={24} className="text-primary" />
                    <h3 className="text-xl font-semibold">{skill.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, itemIndex) => (
                      <span key={itemIndex} className="text-sm bg-primary/10 text-primary-foreground px-3 py-1 rounded-full border border-primary/20">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Professional Experience</h2>
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div key={index} className="bg-card/50 p-6 rounded-xl border border-border hover:scale-105 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary">{experience.role}</h3>
                    <p className="text-muted-foreground">{experience.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                    <Calendar size={18} />
                    <span>{experience.period}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{experience.description}</p>
                <ul className="space-y-2">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-center gap-2 text-muted-foreground">
                      <ArrowRight size={16} className="text-primary" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <a href="/resume.pdf" download className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <Download size={20} />
            <span>Download Resume</span>
          </a>
        </section>
      </div>
    </div>
  );
}
