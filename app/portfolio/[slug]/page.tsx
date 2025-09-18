import { Header } from "@/components/header"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Users, TrendingUp, Star, Quote } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const projectsData = {
  "thoughtreflex": {
    title: "ThoughtReflex – AI Mental Wellness Platform",
    category: "Custom SaaS",
    client: "Personal Project",
    duration: "4 months",
    teamSize: "Solo Developer",
    image: "/portfolio/thoughtreflex.png",
    overview:
      "ThoughtReflex was built to make mental wellness support accessible for everyone. It combines journaling, reflection, and conversational AI in a single platform designed for emotional growth.",

    problem: {
      title: "The Challenge",
      description:
        "Therapy is expensive, stigmatized, or inaccessible for many people. Users needed a safe, always-available companion to process emotions, set goals, and reflect on personal growth.",
      challenges: [
        "Limited access to affordable therapy",
        "Lack of empathetic digital mental health tools",
        "Users struggling with consistency in journaling",
        "Privacy and trust concerns with personal data",
        "Need for different support modes (therapist, coach, friend)",
      ],
    },

    solution: {
      title: "The Solution",
      description:
        "We developed an AI-powered journaling and therapy platform with customizable conversational modes and a modern, calming interface.",
      features: [
        "Three AI modes: Therapist, Coach, and Friend",
        "Secure journaling with private user accounts",
        "Goal setting and growth tracking",
        "Emotion detection and tailored responses",
        "Responsive, distraction-free writing interface",
      ],
    },

    technologies: ["Next.js", "Firebase", "Gemini API", "TailwindCSS", "Vercel"],

    results: {
      title: "Measurable Impact",
      metrics: [
        { label: "Users", value: "30+", description: "Early adopters in first launch month" },
        { label: "Engagement", value: "85%", description: "Users returned weekly to journal" },
        { label: "Feedback", value: "Highly Positive", description: "Users reported feeling supported and understood" },
      ],
    },

    testimonial: {
      quote:
        "ThoughtReflex became my daily check-in. The AI feels supportive, almost human. It helped me open up in ways I never expected.",
      author: "Anonymous Beta User",
      position: "Early Tester",
      avatar: "/placeholder.svg?height=80&width=80",
    },

    timeline: [
      { phase: "Concept & Research", duration: "2 weeks", description: "Explored user pain points and therapy approaches" },
      { phase: "Prototyping", duration: "3 weeks", description: "Designed journaling interface and AI flows" },
      { phase: "Development", duration: "8 weeks", description: "Built journaling system and integrated Gemini API" },
      { phase: "Testing", duration: "3 weeks", description: "User testing and improvements" },
      { phase: "Launch", duration: "2 weeks", description: "Deployed app and onboarded early users" },
    ],
  },

  "digital-moran": {
    title: "Digital Moran Agency Platform",
    category: "Web & Mobile Development",
    client: "Digital Moran NGO",
    duration: "3 months",
    teamSize: "Solo Developer",
    image: "/portfolio/digitalmoran.png",
    overview:
      "Digital Moran is an NGO in Kenya that empowers youth with tech skills and mentorship. I built a platform that connects young people with gigs, mentors, and job opportunities.",

    problem: {
      title: "The Challenge",
      description:
        "Youth in Kenya face high unemployment rates. Many lack a centralized platform to find gigs, mentorship, and career opportunities tailored to their skills.",
      challenges: [
        "High youth unemployment and underemployment",
        "Scattered access to job postings and mentorship programs",
        "Need for a digital hub connecting youth to opportunities",
        "Limited resources for scalable outreach",
      ],
    },

    solution: {
      title: "The Solution",
      description:
        "We created a responsive platform for youth empowerment, providing access to gigs, mentorship, and career resources.",
      features: [
        "User-friendly job and gig listings",
        "Mentorship matching system",
        "Youth-focused resources and success stories",
        "Mobile-first design for accessibility",
      ],
    },

    technologies: ["Next.js", "Firebase", "TailwindCSS"],

    results: {
      title: "Measurable Impact",
      metrics: [
        { label: "Reach", value: "100+", description: "Youths onboarded during early rollout" },
        { label: "Mentorships", value: "20+", description: "Connections made through platform" },
        { label: "Feedback", value: "Positive", description: "Users found jobs and internships via platform" },
      ],
    },

    testimonial: {
      quote:
        "The platform Velion Labs built has made a huge difference. Our youth can now access gigs and mentorship more easily, which is exactly what our mission needed.",
      author: "Stephen Siloma",
      position: "Founder, Digital Moran",
      avatar: "/placeholder.svg?height=80&width=80",
    },

    timeline: [
      { phase: "Discovery", duration: "2 weeks", description: "Workshops with NGO to identify needs" },
      { phase: "Design", duration: "2 weeks", description: "Wireframes and mobile-first UI design" },
      { phase: "Development", duration: "6 weeks", description: "Built platform core features" },
      { phase: "Testing & Deployment", duration: "2 weeks", description: "NGO staff and youth pilot testing" },
    ],
  },

  "learnify": {
    title: "Learnify – EdTech SaaS for Schools",
    category: "Digital Transformation",
    client: "Learnify (Own Agency)",
    duration: "Ongoing",
    teamSize: "Solo Developer",
    image: "/portfolio/learnify.png",
    overview:
      "Learnify is my SaaS startup aimed at revolutionizing education in Kenya. It provides AI-powered tools, exam management, student onboarding, and parent dashboards for schools.",

    problem: {
      title: "The Challenge",
      description:
        "Schools in Kenya struggle with outdated systems and manual processes, making it hard to deliver modern, efficient, and personalized education experiences.",
      challenges: [
        "Manual exam management and grading",
        "No AI integration in learning systems",
        "Difficulty onboarding and tracking students",
        "Parents lacking visibility into student progress",
      ],
    },

    solution: {
      title: "The Solution",
      description:
        "We designed Learnify as a multi-tenant SaaS platform that modernizes education delivery with AI-powered features.",
      features: [
        "AI-powered learning and exam analysis",
        "Student onboarding workflows",
        "Parent dashboards with insights",
        "Attendance tracking and performance reports",
        "Multi-tenant architecture for scalability",
      ],
    },

    technologies: ["Next.js", "Firebase", "AI APIs", "TailwindCSS"],

    results: {
      title: "Projected Impact",
      metrics: [
        { label: "Schools", value: "10+", description: "Initial target institutions" },
        { label: "Students", value: "5,000+", description: "Projected users in first year" },
        { label: "Efficiency", value: "50%", description: "Expected reduction in manual admin work" },
      ],
    },

    testimonial: {
      quote:
        "Learnify has the potential to reshape how schools in Kenya deliver education. Its AI tools will empower both teachers and students.",
      author: "Pilot School Teacher",
      position: "Early User",
      avatar: "/placeholder.svg?height=80&width=80",
    },

    timeline: [
      { phase: "Research", duration: "1 month", description: "Studied Kenyan curriculum and school needs" },
      { phase: "MVP Development", duration: "3 months", description: "Built initial platform features" },
      { phase: "Pilot Testing", duration: "Ongoing", description: "Testing in selected schools" },
    ],
  },

  "portfolio-website": {
    title: "Personal Developer Portfolio",
    category: "Web Development",
    client: "Self",
    duration: "2 weeks",
    teamSize: "Solo Developer",
    image: "/placeholder.svg?height=400&width=800",
    overview:
      "A modern personal portfolio website showcasing my projects, skills, and achievements with a clean, responsive UI.",

    problem: {
      title: "The Challenge",
      description:
        "A software developer needed a digital presence that represented their skills and projects effectively, while also being easy to maintain and scale.",
      challenges: [
        "Showcasing multiple complex projects clearly",
        "Ensuring mobile responsiveness and fast load speeds",
        "Keeping design simple but visually appealing",
        "Making portfolio easy to update with new projects",
      ],
    },

    solution: {
      title: "The Solution",
      description:
        "We built and designed a portfolio site with a modern design, optimized performance, and flexible project showcase system.",
      features: [
        "Responsive grid-based project showcase",
        "Dynamic project data structure for easy updates",
        "SEO optimization for visibility",
        "Fast loading through static optimization",
      ],
    },

    technologies: ["Next.js", "TailwindCSS", "Vercel"],

    results: {
      title: "Measurable Impact",
      metrics: [
        { label: "Performance", value: "95+", description: "Lighthouse performance score" },
        { label: "Visitors", value: "500+", description: "In first month of launch" },
        { label: "Opportunities", value: "3+", description: "Job leads from portfolio exposure" },
      ],
    },

    testimonial: {
      quote:
        "The portfolio represents me perfectly. Recruiters and clients have complimented its clarity and design.",
      author: "Tevin Owino",
      position: "Software Engineer",
      avatar: "portfolio/portfolio-site.png",
    },

    timeline: [
      { phase: "Design", duration: "1 week", description: "Wireframes and UI design" },
      { phase: "Development", duration: "1 week", description: "Built using Next.js and TailwindCSS" },
      { phase: "Launch", duration: "2 days", description: "Deployed on Vercel" },
    ],
  },

  "eca-industries": {
    title: "Sub-Saharan ECA Industries Website",
    category: "Web Development",
    client: "Sub-Saharan ECA Industries",
    duration: "1 month",
    teamSize: "Solo Developer",
    image: "/placeholder.svg?height=400&width=800",
    overview:
      "We designed developed a professional website for Sub-Saharan ECA Industries, a tissue processing company, to enhance credibility and attract new clients.",

    problem: {
      title: "The Challenge",
      description:
        "The company lacked an online presence, making it hard for potential customers to learn about their products and services.",
      challenges: [
        "No existing website or digital footprint",
        "Difficulty showcasing products professionally",
        "No online inquiry system for clients",
        "Need for modern branding and credibility",
      ],
    },

    solution: {
      title: "The Solution",
      description:
        "We built a clean, professional website that highlights products, streamlines inquiries, and improves company visibility.",
      features: [
        "Product showcase pages",
        "Contact and inquiry forms",
        "Responsive mobile-first design",
        "Brand-aligned visual design",
      ],
    },

    technologies: ["React", "TailwindCSS", "Netlify"],

    results: {
      title: "Measurable Impact",
      metrics: [
        { label: "Visibility", value: "100%", description: "Established online presence" },
        { label: "Leads", value: "3x", description: "Increase in client inquiries" },
        { label: "Brand Perception", value: "Improved", description: "Professional image established" },
      ],
    },

    testimonial: {
      quote:
        "The new website gave our company the professional image we needed. Clients can now easily reach us, and we’ve already seen an increase in inquiries.",
      author: "Operations Manager",
      position: "Sub-Saharan ECA Industries",
      avatar: "/portfolio/sseil.png",
    },

    timeline: [
      { phase: "Planning", duration: "1 week", description: "Defined site goals and brand alignment" },
      { phase: "Development", duration: "2 weeks", description: "Built responsive site with React" },
      { phase: "Launch", duration: "1 week", description: "Deployed and tested with client team" },
    ],
  },
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projectsData[params.slug as keyof typeof projectsData]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen font-saira">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-8 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <Link href="/portfolio">
              <Button variant="ghost" className="text-blue-950 hover:underline">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
              </Button>
            </Link>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="p-8 md:p-12">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <Badge className="bg-teal text-white px-4 py-2">{project.category}</Badge>
                <div className="flex items-center text-gray-600">
                  <Calendar className="mr-2 h-4 w-4" />
                  {project.duration}
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="mr-2 h-4 w-4" />
                  {project.teamSize}
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">{project.title}</h1>
              <p className="text-xl text-gray-600 mb-6">
                Client: <span className="font-semibold text-navy">{project.client}</span>
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">{project.overview}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-8 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-white rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-navy mb-6">{project.problem.title}</h2>
            <p className="text-lg text-gray-700 mb-8">{project.problem.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.problem.challenges.map((challenge, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700">{challenge}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-8 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-white rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-navy mb-6">{project.solution.title}</h2>
            <p className="text-lg text-gray-700 mb-8">{project.solution.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {project.solution.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-xl font-semibold text-navy mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-8 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-white rounded-3xl p-8 md:p-12">
            <div className="flex items-center mb-8">
              <TrendingUp className="mr-3 h-8 w-8 text-teal" />
              <h2 className="text-3xl font-bold text-navy">{project.results.title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.results.metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-teal mb-2">{metric.value}</div>
                  <div className="text-lg font-semibold text-navy mb-1">{metric.label}</div>
                  <div className="text-sm text-gray-600">{metric.description}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-8 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white rounded-3xl p-8 md:p-12 text-center">
            <Quote className="mx-auto mb-6 h-12 w-12 text-teal" />
            <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 italic leading-relaxed">
              "{project.testimonial.quote}"
            </blockquote>

            <div className="flex items-center justify-center space-x-4">
              <img
                src={project.testimonial.avatar || "/placeholder.svg"}
                alt={project.testimonial.author}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-semibold text-navy text-lg">{project.testimonial.author}</div>
                <div className="text-gray-600">{project.testimonial.position}</div>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-8 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-navy mb-8 text-center">Project Timeline</h2>

            <div className="space-y-8">
              {project.timeline.map((phase, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-teal rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-navy mb-1">{phase.phase}</h3>
                    <p className="text-teal font-medium mb-2">{phase.duration}</p>
                    <p className="text-gray-700">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Ready for Similar Results?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how we can help transform your business with innovative solutions.
            </p>
            <Button className="bg-teal hover:bg-teal/90 text-white px-8 py-3 text-lg">Start Your Project Today</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
