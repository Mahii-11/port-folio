"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, MapPin } from "lucide-react"

const experiences = [
  {
    role: "Frontend Developer",
    company: "Banglatech Solution",
    location: "Remote • Bangladesh",
    period: "Nov 2025 – Present",
    description:
      "Building modern, responsive, and dynamic web applications using React.js while collaborating with backend developers to deliver production-ready features.",

    achievements: [
  "Delivered multiple production-ready web applications, including e-commerce, portfolio, and business websites.",
  "Developed responsive and dynamic user interfaces using React.js, Vite, and Tailwind CSS.",
  "Integrated REST APIs to build scalable, data-driven web applications.",
  "Contributed to large-scale platforms such as blood donation, charity, and news management systems.",
  "Built reusable components, implemented skeleton loading, and created smooth user interactions to enhance user experience.",
  "Collaborated closely with backend developers to deliver reliable and maintainable frontend solutions."
],
    tech: [
      "React.js",
      "JavaScript",
      "Vite",
      "Tailwind CSS",
      "REST APIs",
      "Motion",
      "Git",
      "GitHub"
    ]
  },

  {
    role: "Frontend Development Journey",
    company: "Self-Learning & Personal Projects",
    location: "Remote",
    period: "2024 – 2025",
    description:
      "Built a strong frontend foundation through consistent practice, real-world projects, and modern web development.",

    achievements: [
      "Built multiple responsive React projects.",
      "Learned component-based architecture and state management.",
      "Worked with REST APIs and dynamic data rendering.",
      "Focused on clean UI, reusable components, and performance."
    ],

    tech: [
      "React.js",
      "JavaScript",
      "Vite",
      "Tailwind CSS",
      "REST APIs"
    ]
  },

  {
    role: "Started Web Development",
    company: "Learning Journey",
    location: "Online",
    period: "Sept -2024",
    description:
      "Began my journey into frontend development with a passion for creating modern web experiences.",

    achievements: [
      "Learned HTML, CSS, and modern JavaScript.",
      "Built small projects to strengthen problem-solving skills.",
      "Established a solid foundation for React development."
    ],

    tech: [
      "HTML5",
      "CSS3",
      "JavaScript"
    ]
  }
];

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="mt-10 relative">
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
                  Professional Experience
             </h2>
           <p className="text-muted-foreground mt-4">
               Contributing to production-ready web applications and delivering modern frontend solutions.
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
