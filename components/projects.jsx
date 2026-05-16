"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Star } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "CloudDash Analytics",
    description: "A real-time analytics dashboard for SaaS businesses. Built with React and D3.js to visualize complex data sets with interactive charts and customizable widgets.",
    problem: "Businesses struggled to understand their data across multiple sources.",
    solution: "Created unified dashboard with real-time sync, custom alerts, and exportable reports.",
    image: "/project-1.png",
    tech: ["React", "TypeScript", "D3.js", "TailwindCSS", "WebSocket"],
    liveUrl: "https://clouddash.demo.com",
    githubUrl: "https://github.com/alexchen/clouddash",
    featured: true
  },
  {
    title: "ShopFlow E-commerce",
    description: "Full-featured e-commerce platform with cart management, payment processing, and inventory tracking. Optimized for conversion with A/B tested checkout flows.",
    problem: "Client's existing store had 70% cart abandonment rate.",
    solution: "Redesigned checkout flow reducing abandonment to 35%, increasing revenue by 50%.",
    image: "/project-2.png",
    tech: ["Next.js", "Stripe", "Prisma", "PostgreSQL", "Vercel"],
    liveUrl: "https://shopflow.demo.com",
    githubUrl: "https://github.com/alexchen/shopflow",
    featured: true
  },
  {
    title: "TeamSync Collaboration",
    description: "Real-time collaboration tool for remote teams featuring video calls, shared documents, and project management with intuitive drag-and-drop interfaces.",
    problem: "Remote teams needed a unified platform for async and sync communication.",
    solution: "Built integrated workspace with 99.9% uptime and sub-100ms latency.",
    image: "/project-3.png",
    tech: ["React", "WebRTC", "Socket.io", "Redis", "AWS"],
    liveUrl: "https://teamsync.demo.com",
    githubUrl: "https://github.com/alexchen/teamsync",
    featured: false
  },
  {
    title: "HealthTrack Pro",
    description: "Healthcare appointment scheduling system with patient portal, doctor availability management, and automated reminders. HIPAA compliant architecture.",
    problem: "Clinic was losing patients due to scheduling friction and no-shows.",
    solution: "Automated system reduced no-shows by 60% and improved booking efficiency.",
    image: "/project-4.png",
    tech: ["Next.js", "TypeScript", "Twilio", "PostgreSQL", "Docker"],
    liveUrl: "https://healthtrack.demo.com",
    githubUrl: "https://github.com/alexchen/healthtrack",
    featured: false
  },
  {
    title: "FinanceHub Dashboard",
    description: "Personal finance management app with expense tracking, budget planning, and investment portfolio visualization. Bank-grade security with 2FA.",
    problem: "Users wanted a simple way to track spending across multiple accounts.",
    solution: "Unified dashboard with AI-powered insights and automated categorization.",
    image: "/project-5.png",
    tech: ["React", "Node.js", "Plaid API", "MongoDB", "Chart.js"],
    liveUrl: "https://financehub.demo.com",
    githubUrl: "https://github.com/alexchen/financehub",
    featured: true
  },
  {
    title: "ContentCraft CMS",
    description: "Headless CMS with visual editor, multi-language support, and API-first architecture. Built for marketing teams who need speed without developer dependency.",
    problem: "Marketing team bottlenecked by developer availability for content updates.",
    solution: "No-code editor with instant publishing and version control.",
    image: "/project-6.png",
    tech: ["Next.js", "GraphQL", "Sanity", "Vercel Edge", "TypeScript"],
    liveUrl: "https://contentcraft.demo.com",
    githubUrl: "https://github.com/alexchen/contentcraft",
    featured: false
  }
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm">// PROJECTS</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Featured Work
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A selection of projects I&apos;ve built for clients and personal exploration. 
              Each one taught me something new.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl glass noise overflow-hidden hover:glow-primary transition-all duration-500"
              >
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-20 flex items-center gap-1 px-2 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                    <Star className="w-3 h-3 fill-current" />
                    Featured
                  </div>
                )}

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 pt-2">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Problem/Solution */}
                  <div className="space-y-2 mb-4">
                    <p className="text-xs">
                      <span className="text-primary font-semibold">Problem:</span>{" "}
                      <span className="text-muted-foreground">{project.problem}</span>
                    </p>
                    <p className="text-xs">
                      <span className="text-accent font-semibold">Solution:</span>{" "}
                      <span className="text-muted-foreground">{project.solution}</span>
                    </p>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-muted text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="text-[10px] px-2 py-0.5 rounded-md bg-muted text-muted-foreground">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>

                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 gradient-border pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
