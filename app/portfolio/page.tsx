import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: "thoughtreflex",
    title: "ThoughtReflex – AI Mental Wellness Platform",
    category: "Custom SaaS",
    description:
      "Developed an AI-powered therapy and journaling application offering therapist, coach, and friend conversational modes for emotional growth.",
    image: "/portfolio/thoughtreflex.png",
    technologies: ["Next.js", "Firebase", "Gemini API"],
    client: "In-house Project",
    impact: "30+ active users, positive feedback on mental health support",
  },
  {
    id: "digital-moran",
    title: "Digital Moran Agency Platform",
    category: "Web & Mobile Development",
    description:
      "Built a platform connecting Kenyan youth to gigs, mentorship, and job opportunities in partnership with an NGO.",
    image: "/portfolio/digitalmoran.png",
    technologies: ["Next.js", "Firebase", "TailwindCSS"],
    client: "Digital Moran NGO",
    impact: "Helped youths secure tech jobs and mentorship opportunities",
  },
  {
    id: "learnify",
    title: "Learnify – EdTech SaaS for Schools",
    category: "Digital Transformation",
    description:
      "Created a multi-tenant SaaS platform for schools with AI tools, exam management, attendance tracking, and parent dashboards.",
    image: "/portfolio/learnify.png",
    technologies: ["Next.js", "Firebase", "AI APIs"],
    client: "Learnify",
    impact: "In development – designed to modernize curriculum delivery in Kenya",
  },
  {
    id: "portfolio-website",
    title: "Personal Developer Portfolio",
    category: "Web Development",
    description:
      "Designed and developed a modern personal portfolio showcasing projects, skills, and achievements with a clean, responsive UI.",
    image: "/portfolio/portfolio-site.png",
    technologies: ["Next.js", "TailwindCSS", "Vercel"],
    client: "Tevin Owino (Developer)",
    impact: "Increased visibility and improved personal branding",
  },
  {
    id: "eca-industries",
    title: "Sub-Saharan ECA Industries Website",
    category: "Web Development",
    description:
      "Developed a professional website for a tissue processing company to showcase products, streamline inquiries, and boost credibility.",
    image: "/portfolio/sseil.png",
    technologies: ["React", "TailwindCSS", "Netlify"],
    client: "Sub-Saharan ECA Industries",
    impact: "Enhanced company visibility and streamlined client engagement",
  },
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen font-saira">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6">
              Our <span className="text-teal">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover how we've helped businesses transform their operations, increase efficiency, and achieve
              remarkable growth through innovative digital solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                All Projects
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">
                Digital Transformation
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">
                Custom SaaS
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">
                Enterprise Systems
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-teal text-white">{project.category}</Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-teal transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Client</p>
                      <p className="text-sm font-medium text-navy">{project.client}</p>
                    </div>
                    <Link href={`/portfolio/${project.id}`}>
                      <Button variant="ghost" size="sm" className="text-teal hover:text-teal hover:bg-teal/10">
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how we can help transform your business with innovative digital solutions.
            </p>
            <Button className="bg-teal hover:bg-teal/90 text-white px-8 py-3 text-lg">Book a Free Consultation</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
