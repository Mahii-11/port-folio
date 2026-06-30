"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", level: 88 },
      { name: "JavaScript (ES6+)", level: 87 },
      { name: "JSX", level: 90 },
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 88 },
    ],
  },
  {
    title: "UI Engineering",
    skills: [
      { name: "Tailwind CSS", level: 90 },
      { name: "Responsive Web Design", level: 92 },
      { name: "Motion for React", level: 80 },
      { name: "Reusable Components", level: 88 },
    ],
  },
  {
    title: "Development Workflow",
    skills: [
      { name: "REST API Integration", level: 90 },
      { name: "Vite", level: 90 },
      { name: "Git", level: 82 },
      { name: "GitHub", level: 82 },
    ],
  },
  {
    title: "Professional Skills",
    skills: [
      { name: "Problem Solving", level: 88 },
      { name: "Team Collaboration", level: 82 },
      { name: "Code Quality", level: 87 },
      { name: "Continuous Learning", level: 95 },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm">// SKILLS</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Technologies I Work With
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Constantly learning and adapting to new technologies while mastering the fundamentals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="p-6 rounded-2xl glass noise"
              >
                <h3 className="text-lg font-semibold mb-6 text-gradient">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                          className="h-full rounded-full bg-linear-to-r from-primary to-accent"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skill badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 flex flex-wrap justify-center gap-3"
          >
            {[
                 "React.js",
                 "JavaScript",
                 "Vite",
                 "Tailwind CSS",
                 "HTML5",
                 "CSS3",
                 "Motion",
                 "REST APIs",
                 "Git",
                 "GitHub"
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full glass text-sm font-medium hover:glow-primary transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
