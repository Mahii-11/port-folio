"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Star } from "lucide-react"
import Image from "next/image"

const projects = [
{
  title: "GadgetGlobe - Electronics E-Commerce Platform",

  description:
    "A modern e-commerce platform developed for an electronics retailer, featuring a seamless shopping experience, categorized products, promotional campaigns, secure checkout, and a fully responsive interface optimized for desktop and mobile users.",

  problem:
    "The business needed a scalable online shopping platform where customers could easily discover products, compare options, browse promotional offers, and complete purchases through a fast and intuitive shopping experience.",

  solution:
    "Developed a feature-rich e-commerce platform with advanced product categorization, promotional banners, shopping cart, responsive product listings, streamlined checkout flow, and user-focused navigation to improve product discovery and increase online sales.",

  image: "/gadget-globe.png",

  tech: [
    "React",
    "Vite",
    "JavaScript",
    "Tailwind CSS",
    "React Router",
    "Redux Toolkit",
    "React Query",
    "Axios",
    "Swiper.js",
    "Framer Motion"
  ],

  liveUrl: "https://gadget.banglatechsolutionit.com/",
  githubUrl: "",
  featured: true
  },
  
]

export default function EcomProject() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-5 relative">
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
    E-Commerce Platforms
  </h2>

  <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
    A collection of modern e-commerce platforms designed to deliver seamless
    shopping experiences, simplify product discovery, and drive online sales
    through intuitive and user-focused interfaces.
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
