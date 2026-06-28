"use client"

import {
  Palette,
  Wrench,
  Server,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Users,
  Cloud,
  ShoppingBag,
  Globe,
  type LucideIcon,
} from "lucide-react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import Image from "next/image"
import { useRef, useState, type ReactNode } from "react"
import Link from "next/link"
import { SectionTransition } from "@/components/ui/section-transition"
import StackIcon from "tech-stack-icons"

/* ------------------------------------------------------------------ *
 *  DATA — single source of truth
 *
 *  Map geometry + mobile cards read from here. Every coordinate lives
 *  in one viewBox space (1000 x 680). HTML pill positions are derived
 *  from the same numbers as the SVG geometry, so a node and the line
 *  feeding it can never drift apart.
 * ------------------------------------------------------------------ */

const VBW = 1000
const VBH = 680
const CENTER = { x: 500, y: 340 }
const CORNER = 12 // small radius on the right-angle turns

type QuadrantId = "technologies" | "databases" | "solutions" | "services"
type Point = { x: number; y: number }

interface Leaf {
  label: string
  stack?: string // tech-stack-icons name
  icon?: LucideIcon // lucide glyph (badges)
  spin?: boolean
  x: number
  y: number
}

interface Quadrant {
  id: QuadrantId
  label: string
  /** CSS custom property — exact-matches the Tailwind v4 theme token */
  color: string
  hub: Point
  axis: "h" | "v"
  variant: "tech" | "badge"
  leaves: Leaf[]
}

const QUADRANTS: Quadrant[] = [
  {
    id: "technologies",
    label: "Technologies",
    color: "var(--color-accent-cyan)",
    hub: { x: 300, y: 340 },
    axis: "h",
    variant: "tech",
    leaves: [
      { label: "HTML", stack: "html5", x: 200, y: 180 },
      { label: "CSS", stack: "css3", x: 130, y: 232 },
      { label: "React", stack: "react", spin: true, x: 80, y: 284 },
      { label: "Next.js", stack: "nextjs2", x: 60, y: 340 },
      { label: "JavaScript", stack: "js", x: 80, y: 396 },
      { label: "Node.js", stack: "nodejs", x: 130, y: 448 },
      { label: "Express", stack: "expressjs", x: 200, y: 500 },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    color: "var(--color-accent-purple)",
    hub: { x: 700, y: 340 },
    axis: "h",
    variant: "tech",
    leaves: [
      { label: "PostgreSQL", stack: "postgresql", x: 800, y: 260 },
      { label: "Supabase", stack: "supabase", x: 870, y: 316 },
      { label: "Firebase", stack: "firebase", x: 870, y: 364 },
      { label: "MongoDB", stack: "mongodb", x: 800, y: 420 },
    ],
  },
  {
    id: "solutions",
    label: "Solutions",
    color: "var(--color-accent-blue)",
    hub: { x: 500, y: 160 },
    axis: "v",
    variant: "badge",
    leaves: [
      { label: "CRM", icon: Users, x: 260, y: 60 },
      { label: "SaaS", icon: Cloud, x: 420, y: 60 },
      { label: "E-Commerce", icon: ShoppingBag, x: 580, y: 60 },
      { label: "Portals", icon: Globe, x: 740, y: 60 },
    ],
  },
  {
    id: "services",
    label: "Services",
    color: "var(--color-accent-green)",
    hub: { x: 500, y: 520 },
    axis: "v",
    variant: "badge",
    leaves: [
      { label: "Web Design", icon: Palette, x: 320, y: 620 },
      { label: "Maintenance", icon: Wrench, x: 500, y: 620 },
      { label: "SEO Strategy", icon: TrendingUp, x: 680, y: 620 },
    ],
  },
]

const services = [
  {
    icon: Palette,
    title: "Custom Web Design",
    description: "Visually striking, mobile-first websites that turn visitors into loyal clients.",
    features: ["UI/UX Design", "Responsive Layouts", "Brand Identity"],
    color: "text-rose-400",
    bg: "bg-rose-400/10",
    border: "group-hover:border-rose-400/30",
    gradient: "from-rose-500/20 to-pink-500/5",
  },
  {
    icon: Wrench,
    title: "System Maintenance",
    description: "Proactive security updates and optimizations to ensure 100% peace of mind.",
    features: ["Security Audits", "Daily Backups", "Speed Optimization"],
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "group-hover:border-amber-400/30",
    gradient: "from-amber-500/20 to-orange-500/5",
  },
  {
    icon: Server,
    title: "Web Hosting & Security",
    description: "High-performance servers with 99.9% uptime and fortress-grade security.",
    features: ["SSL Certificates", "DDoS Protection", "CDN Integration"],
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "group-hover:border-emerald-400/30",
    gradient: "from-emerald-500/20 to-teal-500/5",
  },
  {
    icon: TrendingUp,
    title: "Digital Strategy & SEO",
    description: "Data-driven strategies to climb search rankings and dominate your market.",
    features: ["Keyword Research", "Content Strategy", "Analytics Setup"],
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "group-hover:border-blue-400/30",
    gradient: "from-blue-500/20 to-cyan-500/5",
  },
]

/* ------------------------------------------------------------------ *
 *  GEOMETRY — orthogonal (right-angle) routing with rounded corners
 * ------------------------------------------------------------------ */

// viewBox -> container percentage
const px = (v: number) => `${(v / VBW) * 100}%`
const py = (v: number) => `${(v / VBH) * 100}%`
const r1 = (n: number) => Math.round(n * 10) / 10

// Drop duplicate and collinear waypoints so corners only round real turns.
function clean(pts: Point[]): Point[] {
  const dedup: Point[] = []
  for (const p of pts) {
    const last = dedup[dedup.length - 1]
    if (last && last.x === p.x && last.y === p.y) continue
    dedup.push(p)
  }
  const out: Point[] = []
  for (let i = 0; i < dedup.length; i++) {
    if (i === 0 || i === dedup.length - 1) {
      out.push(dedup[i])
      continue
    }
    const a = out[out.length - 1]
    const c = dedup[i]
    const b = dedup[i + 1]
    const cross = (c.x - a.x) * (b.y - a.y) - (c.y - a.y) * (b.x - a.x)
    if (Math.abs(cross) < 0.001) continue // collinear -> not a real corner
    out.push(c)
  }
  return out
}

// Build an orthogonal path, rounding each interior corner by up to `r`.
function orthPath(rawPts: Point[], r: number): string {
  const p = clean(rawPts)
  if (p.length < 2) return ""
  if (p.length === 2) return `M ${p[0].x} ${p[0].y} L ${p[1].x} ${p[1].y}`

  let d = `M ${p[0].x} ${p[0].y}`
  for (let i = 1; i < p.length - 1; i++) {
    const a = p[i - 1]
    const c = p[i]
    const b = p[i + 1]
    const inLen = Math.hypot(c.x - a.x, c.y - a.y)
    const outLen = Math.hypot(b.x - c.x, b.y - c.y)
    const ri = Math.min(r, inLen / 2, outLen / 2)
    const entry = { x: c.x + ((a.x - c.x) / inLen) * ri, y: c.y + ((a.y - c.y) / inLen) * ri }
    const exit = { x: c.x + ((b.x - c.x) / outLen) * ri, y: c.y + ((b.y - c.y) / outLen) * ri }
    d += ` L ${r1(entry.x)} ${r1(entry.y)} Q ${c.x} ${c.y} ${r1(exit.x)} ${r1(exit.y)}`
  }
  const end = p[p.length - 1]
  return `${d} L ${end.x} ${end.y}`
}

// Waypoints from hub to leaf: out along the axis, square turn, in to the node.
function branchPts(q: Quadrant, leaf: Leaf): Point[] {
  if (q.axis === "h") {
    const midX = (q.hub.x + leaf.x) / 2
    return [q.hub, { x: midX, y: q.hub.y }, { x: midX, y: leaf.y }, { x: leaf.x, y: leaf.y }]
  }
  const midY = (q.hub.y + leaf.y) / 2
  return [q.hub, { x: q.hub.x, y: midY }, { x: leaf.x, y: midY }, { x: leaf.x, y: leaf.y }]
}

const branchPath = (q: Quadrant, leaf: Leaf) => orthPath(branchPts(q, leaf), CORNER)
const trackPath = (q: Quadrant, leaf: Leaf) => orthPath([CENTER, ...branchPts(q, leaf)], CORNER)
const spinePath = (hub: Point) => `M ${CENTER.x} ${CENTER.y} L ${hub.x} ${hub.y}`

/* ------------------------------------------------------------------ *
 *  ORCHESTRATION MAP
 * ------------------------------------------------------------------ */

type Focus = QuadrantId | "center" | null

function TechMap({ active }: { active: boolean }) {
  const [focus, setFocus] = useState<Focus>(null)
  const reduce = useReducedMotion()

  const isLit = (id: QuadrantId) => focus === null || focus === "center" || focus === id
  const isHot = (id: QuadrantId) => focus === id || focus === "center"

  let revealStep = 0

  return (
    <div className="relative h-full w-full select-none">
      <style>{`
        /* Slow conic sweep behind the core (not an idle float). */
        @keyframes tm-orbit { to { transform: rotate(360deg); } }
        .tm-orbit { animation: tm-orbit 14s linear infinite; }
        /* squircle is a progressive enhancement; border-radius is the fallback. */
        .tm-squircle { corner-shape: squircle; }
        @media (prefers-reduced-motion: reduce) {
          .tm-orbit { animation: none; }
        }
      `}</style>

      {/* faint engineering grid */}
      <div className="dot-pattern pointer-events-none absolute inset-0 opacity-[0.05]" />

      {/* ---------------- WIRING ---------------- */}
      <svg viewBox={`0 0 ${VBW} ${VBH}`} className="pointer-events-none absolute inset-0 z-0 h-full w-full">
        <defs>
          <filter id="tm-spark" x="-120%" y="-120%" width="340%" height="340%">
            <feGaussianBlur stdDeviation="5" />
          </filter>
        </defs>

        {QUADRANTS.map((q) => {
          const lit = isLit(q.id)
          const hot = isHot(q.id)
          const lineOpacity = hot ? 0.7 : lit ? 0.28 : 0.07

          return (
            <g key={q.id}>
              {/* spine: core -> hub */}
              <motion.path
                d={spinePath(q.hub)}
                stroke={q.color}
                strokeWidth={2}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={reduce ? false : { pathLength: 0, opacity: 0 }}
                animate={active ? { pathLength: 1, opacity: lineOpacity + 0.1 } : { pathLength: 0, opacity: 0 }}
                transition={{ pathLength: { duration: 0.9, delay: 0.2 }, opacity: { duration: 0.3 } }}
              />

              {/* branches: hub -> each leaf (squared, rounded corners) */}
              {q.leaves.map((leaf) => {
                const step = revealStep++
                return (
                  <motion.path
                    key={leaf.label}
                    d={branchPath(q, leaf)}
                    stroke={q.color}
                    strokeWidth={1.5}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={reduce ? false : { pathLength: 0, opacity: 0 }}
                    animate={active ? { pathLength: 1, opacity: lineOpacity } : { pathLength: 0, opacity: 0 }}
                    transition={{
                      pathLength: { duration: 0.7, delay: 0.5 + step * 0.05 },
                      opacity: { duration: 0.3 },
                    }}
                  />
                )
              })}

              {/* travelling data pulses (skipped under reduced motion) */}
              {!reduce && active && (
                <g style={{ opacity: focus === null || lit ? 1 : 0.15, transition: "opacity .3s" }}>
                  {q.leaves.map((leaf, i) => {
                    const d = trackPath(q, leaf)
                    const dur = 2.6 + (i % 4) * 0.35
                    const begin = `${(i * 0.55).toFixed(2)}s`
                    const rad = hot ? 4 : 2.6
                    return (
                      <g key={leaf.label}>
                        <circle r={rad * 2.4} fill={q.color} opacity={hot ? 0.5 : 0.28} filter="url(#tm-spark)">
                          <animateMotion dur={`${dur}s`} begin={begin} repeatCount="indefinite" path={d} />
                        </circle>
                        <circle r={rad} fill={q.color} opacity={hot ? 1 : 0.85}>
                          <animateMotion dur={`${dur}s`} begin={begin} repeatCount="indefinite" path={d} />
                        </circle>
                      </g>
                    )
                  })}
                </g>
              )}
            </g>
          )
        })}
      </svg>

      {/* ---------------- CORE ---------------- */}
      <div
        className="group absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
        onMouseEnter={() => setFocus("center")}
        onMouseLeave={() => setFocus(null)}
      >
        <motion.div
          initial={reduce ? false : { scale: 0, opacity: 0 }}
          animate={active ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 16 }}
          className="relative flex h-28 w-28 items-center justify-center"
        >
          {/* breathing aura */}
          <div
            className="absolute -inset-3 rounded-full blur-xl"
            style={{
              background: "radial-gradient(circle, var(--color-accent-cyan), transparent 70%)",
              opacity: focus === "center" ? 0.55 : 0.3,
              transition: "opacity .4s",
            }}
          />
          {/* rotating conic ring */}
          <div
            className="tm-orbit absolute inset-0 rounded-[1.75rem]"
            style={{
              background: "conic-gradient(from 0deg, transparent, var(--color-accent-cyan), transparent 55%)",
              maskImage: "radial-gradient(transparent 58%, #000 60%)",
              WebkitMaskImage: "radial-gradient(transparent 58%, #000 60%)",
              opacity: 0.7,
            }}
          />
          {/* logo plate */}
          <div className="tm-squircle relative flex h-full w-full items-center justify-center overflow-hidden rounded-[1.75rem] bg-[#1B2A41] p-3 shadow-2xl ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-105">
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: "radial-gradient(circle at 50% 30%, rgba(34,211,238,0.22), transparent 70%)" }}
            />
            <Image
              src="/icon.png"
              alt="Tevin Owino"
              width={68}
              height={68}
              className="relative z-10 object-contain drop-shadow-[0_0_12px_rgba(34,211,238,0.5)]"
            />
          </div>
        </motion.div>
      </div>

      {/* ---------------- HUB LABELS + LEAVES ---------------- */}
      {QUADRANTS.map((q) => {
        const lit = isLit(q.id)
        return (
          <div key={q.id}>
            {/* hub label */}
            <NodeShell x={q.hub.x} y={q.hub.y} active={active} reduce={reduce} delay={0.35} z={30}>
              <div
                onMouseEnter={() => setFocus(q.id)}
                onMouseLeave={() => setFocus(null)}
                className="tm-squircle flex cursor-pointer items-center gap-2 rounded-full bg-white px-4 py-2.5 shadow-md transition-all duration-300 hover:scale-105"
                style={{ opacity: lit ? 1 : 0.4 }}
              >
                <span className="relative flex h-2 w-2" style={{ color: q.color }}>
                  {!reduce && (
                    <span
                      className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                      style={{ background: "currentColor" }}
                    />
                  )}
                  <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: "currentColor" }} />
                </span>
                <span className="font-heading text-[10px] font-bold uppercase tracking-wider text-text-primary">
                  {q.label}
                </span>
              </div>
            </NodeShell>

            {/* leaves */}
            {q.leaves.map((leaf, i) => (
              <NodeShell key={leaf.label} x={leaf.x} y={leaf.y} active={active} reduce={reduce} delay={0.6 + i * 0.05} z={20}>
                <div
                  onMouseEnter={() => setFocus(q.id)}
                  onMouseLeave={() => setFocus(null)}
                  style={{ opacity: lit ? 1 : 0.35, transition: "opacity .3s, transform .3s" }}
                  className={
                    q.variant === "tech"
                      ? "flex cursor-pointer items-center gap-1.5 rounded-full bg-bg-primary px-3 py-1.5 font-mono text-[10.5px] font-medium text-text-primary shadow-sm ring-1 ring-black/5 transition-transform hover:scale-110"
                      : "flex cursor-pointer items-center gap-1.5 rounded-full bg-[#1B2A41] px-3.5 py-1.5 font-mono text-[10px] font-bold text-white transition-transform hover:scale-110"
                  }
                >
                  {leaf.stack ? (
                    <StackIcon
                      name={leaf.stack}
                      className={`h-4 w-4 ${leaf.spin && !reduce ? "animate-[spin_20s_linear_infinite]" : ""}`}
                    />
                  ) : leaf.icon ? (
                    <leaf.icon className="h-3.5 w-3.5" style={{ color: q.color }} />
                  ) : null}
                  {leaf.label}
                </div>
              </NodeShell>
            ))}
          </div>
        )
      })}
    </div>
  )
}

/* Positions + reveals a single node. Centering lives on the outer shell so
   framer-motion's entrance transform never fights the -50% translate. */
function NodeShell({
  x,
  y,
  active,
  reduce,
  delay,
  z = 20,
  children,
}: {
  x: number
  y: number
  active: boolean
  reduce: boolean | null
  delay: number
  z?: number
  children: ReactNode
}) {
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: px(x), top: py(y), zIndex: z }}>
      <motion.div
        initial={reduce ? false : { scale: 0.4, opacity: 0 }}
        animate={active ? { scale: 1, opacity: 1 } : { scale: 0.4, opacity: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay }}
      >
        {children}
      </motion.div>
    </div>
  )
}

/* ------------------------------------------------------------------ *
 *  SECTION
 * ------------------------------------------------------------------ */

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="section-padding section-light relative overflow-hidden" ref={ref}>
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-blue/5 blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* header */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent-cyan">
              <span className="h-px w-6 bg-accent-cyan/60" />
              Stack & Tools
            </span>
            <h2 className="text-headline mb-6">
              Technologies I <br />
              <span className="text-text-muted">Build With</span>
            </h2>
            <p className="text-body mb-8">
              A full-stack toolkit spanning frontend, backend, databases, and deployment — wired together to build reliable, scalable software.
            </p>
            <Link href="/portfolio">
              <motion.button className="btn-primary" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                See Projects
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </Link>

            {/* quick legend — reads the same data as the map */}
            <div className="mt-10 hidden grid-cols-2 gap-3 lg:grid">
              {QUADRANTS.map((q) => (
                <div key={q.id} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: q.color }} />
                  <span className="font-mono text-[11px] uppercase tracking-wide text-text-muted">{q.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* mobile only: cards (hidden on sm+) */}
          <div className="sm:hidden">
            <div className="grid gap-4">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  >
                    <div
                      className={`group relative h-full overflow-hidden rounded-2xl border border-border-subtle bg-bg-secondary p-6 transition-colors duration-300 hover:bg-bg-tertiary ${service.border}`}
                    >
                      <div
                        className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                      />
                      <div className="relative z-10">
                        <div
                          className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${service.bg} transition-transform duration-300 group-hover:scale-110`}
                        >
                          <Icon className={`h-6 w-6 ${service.color}`} />
                        </div>
                        <h3 className="mb-3 font-heading text-lg font-semibold text-text-primary">{service.title}</h3>
                        <p className="mb-6 text-sm leading-relaxed text-text-secondary">{service.description}</p>
                        <ul className="space-y-2">
                          {service.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-center gap-2 text-xs font-medium text-text-muted transition-colors group-hover:text-text-primary"
                            >
                              <CheckCircle2 className={`h-3 w-3 ${service.color}`} />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* orchestration map — visible sm+ */}
          <div className="relative hidden sm:block h-[420px] md:h-[500px] overflow-hidden rounded-3xl lg:col-span-8 lg:h-[580px]">
            <TechMap active={isInView} />
          </div>
        </div>
      </div>

      <SectionTransition fromColor="#f5f3ee" toColor="#1B2A41" height="h-32" />
    </section>
  )
}