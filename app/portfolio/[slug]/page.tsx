import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GradientText } from "@/components/ui/gradient-text"
import { ArrowLeft, Calendar, Users, TrendingUp, Quote, ExternalLink, CheckCircle, Clock } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const projectsData = {
  "learnify": {
    title: "Learnify – EdTech SaaS for Schools",
    category: "Educational Harmony",
    client: "Learnify (Velion Labs)",
    duration: "Ongoing",
    teamSize: "Solo Developer",
    status: "Live",
    image: "/portfolio/learnify.png",
    liveUrl: null,
    overview:
      "Learnify is a multi-tenant SaaS platform built to modernize school management in Kenya. It replaces manual grading, attendance registers, and parent communication with a unified digital system powered by AI.",
    problem: {
      title: "The Challenge",
      description:
        "Kenyan schools run on paper. Teachers spend their evenings marking books, manually computing grades, and chasing parents for communication. There was no affordable, locally-adapted school management system that worked for the Kenyan curriculum.",
      challenges: [
        "Manual exam marking consuming teacher time outside school hours",
        "No centralized system for student records and attendance",
        "Parents with zero visibility into their child's progress",
        "Existing tools too expensive or not adapted to Kenya's CBC curriculum",
        "Multi-school scalability with a single platform",
      ],
    },
    solution: {
      title: "The Solution",
      description:
        "We designed Learnify as a multi-tenant SaaS where each school gets its own isolated workspace. AI-powered tools handle grading assistance, while dashboards give teachers, students, and parents real-time insight.",
      features: [
        "Multi-tenant architecture — each school is isolated and independently managed",
        "AI-powered exam analysis and grading assistance",
        "Real-time student performance dashboards",
        "Automated attendance tracking and reporting",
        "Parent portal for progress visibility",
        "Admin controls for teachers and staff roles",
      ],
    },
    technologies: ["Next.js", "Firebase", "AI APIs", "TailwindCSS", "Vercel"],
    results: {
      title: "Measurable Impact",
      metrics: [
        { label: "Schools", value: "10+", description: "Initial institutions onboarded" },
        { label: "Admin Work", value: "60%", description: "Reduction in manual administrative tasks" },
        { label: "Availability", value: "99.9%", description: "Platform uptime since launch" },
      ],
    },
    testimonial: {
      quote:
        "Learnify gave our teachers their evenings back. Grading that used to take hours now takes minutes, and parents finally know what's happening in class.",
      author: "Pilot School Administrator",
      position: "Early Adopter, Nairobi",
    },
    timeline: [
      { phase: "Research & Discovery", duration: "3 weeks", description: "Mapped CBC curriculum requirements and interviewed teachers across 4 schools" },
      { phase: "Architecture & Design", duration: "2 weeks", description: "Designed multi-tenant data model and UI for all user roles" },
      { phase: "Core Development", duration: "10 weeks", description: "Built student management, attendance, grading, and parent portal modules" },
      { phase: "AI Integration", duration: "3 weeks", description: "Integrated AI grading assistance and performance analytics" },
      { phase: "Pilot & Launch", duration: "Ongoing", description: "Rolling onboarding with active support and feature iteration" },
    ],
  },

  "digital-moran": {
    title: "Digital Moran Agency Platform",
    category: "Effortless Transactions",
    client: "Digital Moran NGO",
    duration: "3 months",
    teamSize: "Solo Developer",
    status: "Live",
    image: "/portfolio/digitalmoran.png",
    liveUrl: "https://agency.digitalmoran.africa",
    overview:
      "Digital Moran is a Kenyan NGO empowering youth with tech skills and career opportunities. Velion Consulting built their full agency platform from scratch — a system that handles gigs, jobs, real-time chat, dispute resolution, and AI-powered opportunity matching.",
    problem: {
      title: "The Challenge",
      description:
        "Digital Moran was operating manually — posting opportunities on WhatsApp groups, matching mentors via spreadsheets, and losing track of applicants. They needed a centralized platform that could scale their mission without scaling their admin overhead.",
      challenges: [
        "No centralized hub for gigs, jobs, and mentorship opportunities",
        "Manual matching of youth to mentors was slow and error-prone",
        "No way to track applications, disputes, or outcomes",
        "Communication scattered across WhatsApp and email",
        "Limited ability to demonstrate impact to funders",
      ],
    },
    solution: {
      title: "The Solution",
      description:
        "We built a full agency platform with authenticated user roles, a gig and job marketplace, real-time chat, dispute resolution workflows, and an AI matching engine that connects youth to the right opportunities.",
      features: [
        "Gig and job marketplace with search and filtering",
        "AI-powered opportunity matching based on skills and profile",
        "Real-time chat between youth and opportunity providers",
        "Dispute resolution system with admin oversight",
        "Mentor matching and session booking",
        "Impact dashboard for reporting to funders",
      ],
    },
    technologies: ["Next.js", "Firebase", "TailwindCSS", "Vercel"],
    results: {
      title: "Measurable Impact",
      metrics: [
        { label: "Youth Reached", value: "100+", description: "Onboarded in the first rollout phase" },
        { label: "Mentorships", value: "20+", description: "Connections facilitated through the platform" },
        { label: "Downtime", value: "Zero", description: "Since platform launch" },
      ],
    },
    testimonial: {
      quote:
        "Velion Consulting built the entire Digital Moran Agency Platform from the ground up. The system handles gigs, jobs, real-time chat, dispute resolution, and AI matching. It's exactly what we envisioned and more.",
      author: "Siloma Stephen",
      position: "Founder, Digital Moran",
    },
    timeline: [
      { phase: "Discovery", duration: "2 weeks", description: "Workshops with the Digital Moran team to map all user flows and platform requirements" },
      { phase: "Design", duration: "2 weeks", description: "UI/UX design for youth, mentor, and admin roles" },
      { phase: "Core Platform", duration: "6 weeks", description: "Built marketplace, authentication, profiles, and job listings" },
      { phase: "Real-time & AI Features", duration: "3 weeks", description: "Integrated Firebase real-time chat and AI matching engine" },
      { phase: "Testing & Launch", duration: "1 week", description: "Staff testing, final fixes, and live deployment" },
    ],
  },

  "stti-hub": {
    title: "STTI Hub — Starehe Boys' Centre LMS",
    category: "Educational Harmony",
    client: "Starehe Boys' Centre",
    duration: "6 weeks",
    teamSize: "Solo Developer",
    status: "Live",
    image: "/portfolio/stti.png",
    liveUrl: null,
    overview:
      "Starehe Boys' Centre runs a high-intensity coding bootcamp through their STTI programme. We built a custom Learning Management System that replaced manual tracking with real-time dashboards for grades, attendance, and student progress.",
    problem: {
      title: "The Challenge",
      description:
        "The STTI coding bootcamp was tracking 37 students using spreadsheets and manual registers. Instructors had no way to see a student's full picture at a glance — grades, attendance, and project submissions were siloed in different places.",
      challenges: [
        "Manual attendance registers prone to errors and loss",
        "No unified view of student performance across modules",
        "Students had no visibility into their own progress",
        "Generating end-of-cohort reports was a full day's work",
        "No system to flag at-risk students early",
      ],
    },
    solution: {
      title: "The Solution",
      description:
        "We built a purpose-fit LMS for the STTI bootcamp — simple enough for instructors to use without training, powerful enough to give every student and admin a real-time view of performance.",
      features: [
        "Student onboarding with profile management",
        "Real-time attendance tracking per session",
        "Grade entry and module-by-module performance dashboard",
        "Student portal — each student sees their own grades and attendance",
        "Admin overview with at-risk student flagging",
        "One-click cohort reports for end-of-programme review",
      ],
    },
    technologies: ["Next.js", "Supabase", "Tailwind CSS", "Vercel"],
    results: {
      title: "Measurable Impact",
      metrics: [
        { label: "Students", value: "37", description: "Onboarded with zero downtime on day one" },
        { label: "Admin Time", value: "80%", description: "Reduction in manual reporting time" },
        { label: "Uptime", value: "100%", description: "Throughout the entire bootcamp cohort" },
      ],
    },
    testimonial: {
      quote:
        "The system went live on day one of the cohort without a single issue. Our instructors adapted immediately and students love seeing their dashboards. It made the whole programme feel more professional.",
      author: "STTI Programme Lead",
      position: "Starehe Boys' Centre",
    },
    timeline: [
      { phase: "Requirements Gathering", duration: "3 days", description: "Sat with STTI instructors to map the exact tracking workflow and report formats needed" },
      { phase: "Database Design", duration: "3 days", description: "Designed Supabase schema for multi-role access — admin, instructor, student" },
      { phase: "Core Development", duration: "4 weeks", description: "Built attendance module, grade entry, and student dashboards" },
      { phase: "Testing & Handover", duration: "1 week", description: "Live testing with instructors, student onboarding walkthrough, and deployment" },
    ],
  },

  "shambapal": {
    title: "ShambaPal – Farm Management App",
    category: "Custom SaaS",
    client: "ShambaPal",
    duration: "3 months",
    teamSize: "Solo Developer",
    status: "Live",
    image: "/portfolio/shambapal.png",
    liveUrl: null,
    overview:
      "ShambaPal is a mobile-first farm management application built for smallholder farmers in Kenya. It brings modern agricultural tools — crop tracking, expense logging, harvest records, and advisory alerts — to farmers' phones via a React Native app.",
    problem: {
      title: "The Challenge",
      description:
        "Smallholder farmers in Kenya operate almost entirely without digital tools. Planting records, input costs, and harvest data live in notebooks or nowhere at all. Without structured records, farmers can't access credit, can't track profitability, and can't make data-driven decisions.",
      challenges: [
        "No digital record-keeping for planting cycles, inputs, or harvests",
        "Farmers unable to access credit without financial history",
        "Difficulty tracking farm profitability across seasons",
        "Low smartphone literacy requiring a very simple, Swahili-friendly UI",
        "Unreliable internet access in rural areas",
      ],
    },
    solution: {
      title: "The Solution",
      description:
        "We built ShambaPal as a React Native mobile app optimized for low-bandwidth environments. The interface is built for simplicity — large touch targets, minimal text, and a flow that mirrors how farmers already think about their work.",
      features: [
        "Crop planning and planting cycle tracker",
        "Input and expense logging (seeds, fertiliser, labour)",
        "Harvest recording with per-season profit calculation",
        "Weather alerts and crop advisory notifications",
        "Offline-first architecture — works without internet",
        "Swahili and English language support",
      ],
    },
    technologies: ["React Native", "Expo", "Firebase", "TypeScript"],
    results: {
      title: "Measurable Impact",
      metrics: [
        { label: "Farmers", value: "200+", description: "Active users across Kenya's farming regions" },
        { label: "Offline Support", value: "100%", description: "Core features work without internet" },
        { label: "Platforms", value: "iOS + Android", description: "Single codebase deployed to both stores" },
      ],
    },
    testimonial: {
      quote:
        "Before ShambaPal, I was writing everything in a notebook that I kept losing. Now I can see exactly what I spent and what I earned from each season, right on my phone.",
      author: "Farmer, Nakuru County",
      position: "ShambaPal Early User",
    },
    timeline: [
      { phase: "User Research", duration: "2 weeks", description: "Visited farms in Nakuru and Kiambu to observe how farmers currently keep records" },
      { phase: "UI/UX Design", duration: "2 weeks", description: "Designed a simplified mobile UI tested with farmers who had never used an app before" },
      { phase: "Core Development", duration: "8 weeks", description: "Built crop, expense, and harvest tracking modules with offline-first Firebase sync" },
      { phase: "Field Testing", duration: "2 weeks", description: "Tested with 15 farmers, iterated on confusing flows, added Swahili translations" },
      { phase: "Launch", duration: "1 week", description: "Deployed to Expo and submitted to Play Store and App Store" },
    ],
  },

  "intentional-studios": {
    title: "Intentional Studios — Premium Branding Agency Website",
    category: "Authority Presence",
    client: "Intentional Studios KE",
    duration: "3 weeks",
    teamSize: "Solo Developer",
    status: "Live",
    image: "/portfolio/intentional-studios.png",
    liveUrl: "https://www.intentionalstudioske.com",
    overview:
      "Intentional Studios is a premium Kenyan branding and digital agency founded in 2018 — an elite collective of designers, photographers, videographers, and digital marketers. They came to Velion Consulting with world-class creative work but a digital presence that didn't match their positioning. We built them a website worthy of their brand.",
    problem: {
      title: "The Challenge",
      description:
        "A premium agency that prides itself on 'digital supremacy' was operating without a website that reflected that standard. Potential clients Googling them found nothing that communicated the quality of their work or the depth of their services.",
      challenges: [
        "No website that matched their high-end brand positioning",
        "Portfolio scattered across Behance and social media with no unified home",
        "16+ client brands with no structured showcase",
        "Service offerings (branding, photography, video, digital marketing) were not clearly presented",
        "WhatsApp inquiries with no professional digital intake flow",
      ],
    },
    solution: {
      title: "The Solution",
      description:
        "We designed and built a minimalist, high-impact Next.js website that leads with their best work and positions Intentional Studios as the premium choice. The site is built around their four service pillars with a portfolio gallery, client logos carousel, and a clear path to contact.",
      features: [
        "Minimalist dark aesthetic aligned with their brand identity",
        "Client logo carousel showcasing 16+ brands they've worked with",
        "Portfolio gallery with 9+ featured case studies",
        "Four-pillar service breakdown (Branding, Photography, Videography, Digital Marketing)",
        "Culture and legacy section establishing trust and credibility",
        "WhatsApp CTA integration for direct client inquiries",
        "Fully responsive and fast-loading with Next.js image optimization",
      ],
    },
    technologies: ["Next.js", "TailwindCSS", "Vercel"],
    results: {
      title: "Measurable Impact",
      metrics: [
        { label: "Services Showcased", value: "4", description: "Branding, photography, video, and digital marketing" },
        { label: "Client Brands", value: "16+", description: "Displayed in the client showcase carousel" },
        { label: "Performance", value: "95+", description: "Lighthouse performance score" },
      ],
    },
    testimonial: {
      quote:
        "Our website finally reflects who we are. Clients come to us already sold because the site communicates our standard before we even say a word.",
      author: "Intentional Studios",
      position: "Founder, Intentional Studios KE",
    },
    timeline: [
      { phase: "Brand Alignment", duration: "3 days", description: "Reviewed their existing brand assets, portfolio, and competitive positioning to define the site direction" },
      { phase: "Design", duration: "1 week", description: "Designed a minimalist dark aesthetic with clear service hierarchy and portfolio-first layout" },
      { phase: "Development", duration: "1.5 weeks", description: "Built all sections, client carousel, portfolio gallery, and WhatsApp CTA integration" },
      { phase: "Content & Launch", duration: "3 days", description: "Loaded client work, tested responsiveness, and deployed to production" },
    ],
  },

  "traffic-buddy": {
    title: "Traffic Buddy — NTSA Driving Theory Platform",
    category: "Educational Harmony",
    client: "Traffic Buddy",
    duration: "2 months",
    teamSize: "Solo Developer",
    status: "Live",
    image: "/portfolio/traffic-buddy.png",
    liveUrl: "https://trafficbuddy.app",
    overview:
      "Traffic Buddy is a free, interactive driving theory platform built for Kenyan learner drivers preparing for their NTSA licensing exam. Instead of memorizing a Highway Code book, learners work through real Kenyan road scenarios, road signs, and mock exams — all bilingual in English and Swahili.",
    problem: {
      title: "The Challenge",
      description:
        "Thousands of Kenyans sit the NTSA driving theory test every year. The only preparation option was a printed Highway Code book — no interactive learning, no practice tests, no feedback. Failure rates were high and learners had no way to gauge their readiness.",
      challenges: [
        "No free, digital platform for NTSA theory test preparation",
        "Existing resources were textbook-only with no interactivity or feedback",
        "High failure rates due to poor preparation tools",
        "No visual training for Kenya's 45 official road signs",
        "Swahili-speaking learners underserved by English-only resources",
        "Boda boda riders needed motorcycle-specific scenario training",
      ],
    },
    solution: {
      title: "The Solution",
      description:
        "We built Traffic Buddy as a fully interactive web platform aligned to the official NTSA curriculum. Learners progress through structured modules, practice with smart flashcards, test themselves on road signs, and simulate the real NTSA exam before sitting it.",
      features: [
        "100+ interactive scenarios depicting real Kenyan road situations (junctions, roundabouts, highways)",
        "20 structured topic modules aligned to the NTSA curriculum",
        "45 road signs with visual references and quizzes",
        "Smart flashcard system using spaced repetition",
        "Mock NTSA exams with timed sessions and instant feedback",
        "QR-verified certificates of completion",
        "Bilingual interface — full English and Swahili support",
        "Free to start with optional Pro upgrade",
      ],
    },
    technologies: ["Next.js", "Supabase", "TailwindCSS", "Vercel"],
    results: {
      title: "Measurable Impact",
      metrics: [
        { label: "Scenarios", value: "100+", description: "Interactive real Kenyan road situations" },
        { label: "Modules", value: "20", description: "NTSA-aligned topic modules" },
        { label: "Languages", value: "2", description: "Full English and Swahili support" },
      ],
    },
    testimonial: {
      quote:
        "I'd never been behind the wheel before. Traffic Buddy walked me through everything from zero — the scenarios felt like actual Kenyan roads. I passed my theory test first try.",
      author: "Learner Driver",
      position: "Traffic Buddy User, Nairobi",
    },
    timeline: [
      { phase: "Curriculum Research", duration: "2 weeks", description: "Mapped the full NTSA theory exam syllabus and sourced Kenya's official road sign library" },
      { phase: "Content Architecture", duration: "1 week", description: "Structured 20 modules, scenario library, and flashcard system with bilingual content" },
      { phase: "Core Platform", duration: "5 weeks", description: "Built module progression, interactive scenarios, road sign quizzes, and mock exam engine" },
      { phase: "Spaced Repetition & Certificates", duration: "2 weeks", description: "Integrated smart flashcard algorithm and QR-verified certificate generation" },
      { phase: "Swahili Localisation & Launch", duration: "1 week", description: "Full Swahili translation, testing, and live deployment" },
    ],
  },

  "wearetell": {
    title: "We Are Tell – Climate Action Platform",
    category: "Authority Presence",
    client: "We Are Tell",
    duration: "4 weeks",
    teamSize: "Solo Developer",
    status: "Live",
    image: "/portfolio/wearetell.png",
    liveUrl: null,
    overview:
      "We Are Tell is a climate action community platform built to give Kenyan climate advocates a proper digital home. The platform supports community organizing, campaign publishing, resource sharing, and member engagement around environmental advocacy.",
    problem: {
      title: "The Challenge",
      description:
        "Climate action groups in Kenya were operating without a dedicated digital space. Their community existed across WhatsApp groups and social media, making it hard to coordinate campaigns, share resources, or establish credibility with partners and funders.",
      challenges: [
        "No owned digital platform — reliant on social media and WhatsApp",
        "Campaigns and resources scattered with no central archive",
        "Difficult to onboard new members or demonstrate community scale",
        "No way to present the organisation professionally to partners and donors",
        "Content updates required developer involvement",
      ],
    },
    solution: {
      title: "The Solution",
      description:
        "We built a clean, content-rich platform that serves as both a public face for We Are Tell and an internal hub for community activity — with a CMS so the team can manage their own content without technical support.",
      features: [
        "Public-facing home for the climate community with mission and impact messaging",
        "Campaign pages with custom layouts and calls-to-action",
        "Resource library for advocacy materials and reports",
        "Member-facing community area for updates and engagement",
        "Admin CMS — team can publish campaigns and resources independently",
        "Mobile-responsive design optimized for low-bandwidth connections",
      ],
    },
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
    results: {
      title: "Measurable Impact",
      metrics: [
        { label: "Delivery", value: "4 weeks", description: "From kickoff to live platform" },
        { label: "CMS", value: "Self-managed", description: "Team publishes without developer support" },
        { label: "Performance", value: "95+", description: "Lighthouse performance score" },
      ],
    },
    testimonial: {
      quote:
        "We finally have a platform that represents what we do. Partners take us more seriously now, and our community has a proper home online.",
      author: "We Are Tell Team",
      position: "Climate Advocacy, Kenya",
    },
    timeline: [
      { phase: "Discovery", duration: "3 days", description: "Brand review, content audit, and platform goals workshop with the We Are Tell team" },
      { phase: "Design", duration: "1 week", description: "Wireframes and visual design aligned with their climate brand identity" },
      { phase: "Development", duration: "2 weeks", description: "Built all pages, CMS integration, and campaign components" },
      { phase: "Content & Launch", duration: "1 week", description: "Content population, team training on CMS, and live deployment" },
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const project = projectsData[params.slug as keyof typeof projectsData]
  if (!project) return {}
  return {
    title: `${project.title} | Velion Consulting Portfolio`,
    description: project.overview.slice(0, 155) + (project.overview.length > 155 ? "..." : ""),
    openGraph: {
      title: project.title,
      description: project.overview.slice(0, 155),
      url: `https://velionconsulting.com/portfolio/${params.slug}`,
      images: [{ url: project.image, width: 1200, height: 630, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: project.title,
      description: project.overview.slice(0, 155),
      images: [project.image],
    },
  }
}

export default async function ProjectDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const project = projectsData[params.slug as keyof typeof projectsData]

  if (!project) {
    notFound()
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://velionconsulting.com" },
      { "@type": "ListItem", "position": 2, "name": "Portfolio", "item": "https://velionconsulting.com/portfolio" },
      { "@type": "ListItem", "position": 3, "name": project.title, "item": `https://velionconsulting.com/portfolio/${params.slug}` },
    ],
  }

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.overview,
    "url": `https://velionconsulting.com/portfolio/${params.slug}`,
    "image": `https://velionconsulting.com${project.image}`,
    "creator": {
      "@type": "Organization",
      "name": "Velion Consulting",
      "url": "https://velionconsulting.com"
    },
    "client": project.client,
    "dateCreated": "2025",
    "keywords": project.technologies.join(", "),
    "review": {
      "@type": "Review",
      "reviewBody": project.testimonial.quote,
      "author": {
        "@type": "Person",
        "name": project.testimonial.author,
        "jobTitle": project.testimonial.position
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      }
    }
  }

  return (
    <main className="min-h-screen bg-bg-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />
      <div className="noise-overlay" />
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-8 section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-purple/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10 max-w-5xl">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-text-muted hover:text-accent-cyan transition-colors text-sm mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-accent-cyan/90 text-white text-xs font-medium">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-bg-secondary text-text-secondary text-xs font-medium border border-border-subtle flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-green" />
              {project.status}
            </span>
            <span className="flex items-center gap-1.5 text-text-muted text-xs">
              <Calendar className="w-3.5 h-3.5" />
              {project.duration}
            </span>
            <span className="flex items-center gap-1.5 text-text-muted text-xs">
              <Users className="w-3.5 h-3.5" />
              {project.teamSize}
            </span>
          </div>

          <h1 className="text-display mb-4">{project.title}</h1>
          <p className="text-body-lg max-w-2xl mb-2">
            Client: <span className="text-text-primary font-medium">{project.client}</span>
          </p>

          {/* Hero image */}
          <div className="mt-8 rounded-2xl overflow-hidden border border-border-subtle">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-custom max-w-5xl">
          <p className="text-body-lg text-text-secondary leading-relaxed">{project.overview}</p>
        </div>
      </section>

      {/* Problem + Solution */}
      <section className="section-padding section-light">
        <div className="container-custom max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Problem */}
            <div className="rounded-2xl border border-border-subtle bg-bg-secondary p-8">
              <h2 className="font-heading font-bold text-2xl text-text-primary mb-4">
                {project.problem.title}
              </h2>
              <p className="text-text-secondary mb-6 leading-relaxed">{project.problem.description}</p>
              <div className="space-y-3">
                {project.problem.challenges.map((challenge, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-purple mt-2 shrink-0" />
                    <p className="text-text-secondary text-sm">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Solution */}
            <div className="rounded-2xl border border-accent-cyan/20 bg-accent-cyan/5 p-8">
              <h2 className="font-heading font-bold text-2xl text-text-primary mb-4">
                {project.solution.title}
              </h2>
              <p className="text-text-secondary mb-6 leading-relaxed">{project.solution.description}</p>
              <div className="space-y-3">
                {project.solution.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-accent-cyan mt-0.5 shrink-0" />
                    <p className="text-text-secondary text-sm">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stack */}
          <div className="mt-8 p-6 rounded-2xl border border-border-subtle bg-bg-secondary">
            <h3 className="font-heading font-semibold text-text-primary mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-bg-tertiary text-text-secondary text-sm border border-border-subtle font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-custom max-w-5xl">
          <div className="flex items-center gap-3 mb-10">
            <TrendingUp className="w-6 h-6 text-accent-cyan" />
            <h2 className="font-heading font-bold text-2xl text-text-primary">
              {project.results.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {project.results.metrics.map((metric, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border-subtle bg-bg-primary p-6 text-center"
              >
                <div className="text-4xl font-heading font-bold text-accent-cyan mb-2">
                  {metric.value}
                </div>
                <div className="text-text-primary font-semibold mb-1">{metric.label}</div>
                <div className="text-text-muted text-sm">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding section-light">
        <div className="container-custom max-w-3xl">
          <div className="rounded-2xl border border-border-subtle bg-bg-secondary p-8 lg:p-12">
            <Quote className="w-10 h-10 text-accent-cyan/40 mb-6" />
            <blockquote className="text-xl text-text-primary leading-relaxed mb-8 italic">
              "{project.testimonial.quote}"
            </blockquote>
            <div className="flex items-center gap-4 pt-6 border-t border-border-subtle">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-accent-cyan to-accent-blue flex items-center justify-center text-white font-heading font-semibold text-sm shrink-0">
                {project.testimonial.author.split(" ").map(w => w[0]).join("").slice(0, 2)}
              </div>
              <div>
                <div className="font-heading font-semibold text-text-primary">
                  {project.testimonial.author}
                </div>
                <div className="text-text-muted text-sm">{project.testimonial.position}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-custom max-w-3xl">
          <h2 className="font-heading font-bold text-2xl text-text-primary mb-10 flex items-center gap-3">
            <Clock className="w-6 h-6 text-accent-cyan" />
            Project Timeline
          </h2>

          <div className="space-y-6">
            {project.timeline.map((phase, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-accent-cyan/10 border border-accent-cyan/40 flex items-center justify-center text-accent-cyan text-xs font-bold shrink-0">
                    {i + 1}
                  </div>
                  {i < project.timeline.length - 1 && (
                    <div className="w-px flex-1 bg-border-subtle mt-2" />
                  )}
                </div>
                <div className="pb-6">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="font-heading font-semibold text-text-primary">{phase.phase}</h3>
                    <span className="text-accent-cyan text-xs font-mono">{phase.duration}</span>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding pb-20">
        <div className="container-custom max-w-3xl">
          <div className="rounded-2xl border border-border-subtle bg-bg-secondary p-8 lg:p-12 text-center">
            <h2 className="font-heading font-bold text-2xl text-text-primary mb-3">
              Ready for Similar Results?
            </h2>
            <p className="text-text-muted mb-8 max-w-md mx-auto">
              Let's discuss how we can build something like this for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="btn-primary">
                  Book a Free Call
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </button>
              </Link>
              <Link href="/portfolio">
                <button className="btn-secondary">
                  See More Work
                </button>
              </Link>
            </div>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-text-muted hover:text-accent-cyan transition-colors text-sm"
              >
                View Live Site <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
