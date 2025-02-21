import {
  Calendar,
  Download,
  ArrowRight,
  Code2,
  Laptop,
  Brain,
  Server
} from 'lucide-react';

export default function AboutPage() {
  const experiences = [
    {
      role: "Full Stack Software Engineer",
      company: "Finite Pay",
      period: "2024 - Present",
      description: "Building and maintaining financial technology solutions for digital payments and banking services.",
      achievements: [
        "Implemented real-time payment processing system handling 1000+ transactions daily",
        "Reduced API response time by 40% through optimization and caching strategies",
        "Developed automated testing suite achieving 85% code coverage",
        "Participated in the development of a revolutionary payment gateway"
      ]
    },
    {
      role: "Founding Software Engineer",
      company: "Learnify",
      period: "2024 - Present",
      description: "Building scalable web solutions for schools and learning institutions in Kenya.",
      achievements: [
        "Developed a fully functional learnify website, that is yet to be published"
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Freelance",
      period: "2022 - 2024",
      description: "Worked on various client projects focusing on web and mobile applications.",
      achievements: [
        "Delivered successful projects",
        "Enhanced UX through interactive UI/UX designs"
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
    <div className="min-h-screen bg-gray-900 text-gray-100 py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-50"></div>
      <div className="max-w-5xl mx-auto relative z-10">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text">
            About Me
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Passionate full-stack developer dedicated to creating impactful digital solutions for education and businesses.
          </p>
        </header>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={index} className="bg-gray-800/50 p-6 rounded-xl border border-blue-900/30 hover:scale-105 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon size={24} className="text-blue-400" />
                    <h3 className="text-xl font-semibold">{skill.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, itemIndex) => (
                      <span key={itemIndex} className="text-sm bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full border border-blue-800/50">
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
              <div key={index} className="bg-gray-800/50 p-6 rounded-xl border border-blue-900/30 hover:scale-105 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl">
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
                    <li key={achievementIndex} className="flex items-center gap-2 text-gray-300">
                      <ArrowRight size={16} className="text-blue-400" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <a href="/resume.pdf" download className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <Download size={20} />
            <span>Download Resume</span>
          </a>
        </section>
      </div>
    </div>
  );
}
