"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, MapPin } from "lucide-react"

const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA (Remote)",
    period: "2022 - Present",
    description: "Leading frontend development for enterprise SaaS products serving 50K+ users. Architected micro-frontend infrastructure that improved deployment frequency by 300%.",
    achievements: [
      "Reduced page load time by 60% through code splitting and lazy loading",
      "Led team of 4 developers, mentoring juniors and conducting code reviews",
      "Implemented design system adopted across 3 product teams"
    ],
    tech: ["React", "TypeScript", "Next.js", "GraphQL", "Tailwind CSS"]
  },
  {
    role: "Frontend Developer",
    company: "Digital Agency Pro",
    location: "New York, NY",
    period: "2020 - 2022",
    description: "Built responsive web applications for clients across fintech, healthcare, and e-commerce sectors. Delivered 15+ projects on time and within budget.",
    achievements: [
      "Developed e-commerce platform handling $2M+ monthly transactions",
      "Created reusable component library reducing development time by 40%",
      "Integrated complex REST APIs and payment gateways"
    ],
    tech: ["React", "JavaScript", "Redux", "SCSS", "REST APIs"]
  },
  {
    role: "Junior Frontend Developer",
    company: "StartupHub Inc",
    location: "Austin, TX",
    period: "2019 - 2020",
    description: "Contributed to early-stage startup building analytics dashboard. Grew from junior to mid-level within 12 months.",
    achievements: [
      "Built interactive data visualization components with D3.js",
      "Improved test coverage from 30% to 85%",
      "Collaborated closely with UX team to implement pixel-perfect designs"
    ],
    tech: ["React", "D3.js", "JavaScript", "CSS", "Jest"]
  }
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm">// EXPERIENCE</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Where I&apos;ve Worked
            </h2>
            <p className="text-muted-foreground mt-4">
              5+ years of professional experience building web applications
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? 'md:pr-[calc(50%+2rem)]' : 'md:pl-[calc(50%+2rem)]'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary glow-primary -translate-x-1/2 translate-y-1.5 hidden md:block" />
                
                <div className="ml-6 md:ml-0 p-6 rounded-2xl glass noise group hover:glow-primary transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                      {exp.period}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
