"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Users, Zap, Layers } from "lucide-react"
import Image from "next/image"

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Building reusable, maintainable, and scalable frontend solutions."
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Collaborating with backend developers to deliver dynamic and reliable web applications."
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Delivering fast, responsive, and optimized user experiences."
  },
  {
    icon: Layers,
    title: "Modern Development",
    description:
      "Developing dynamic web applications using modern frontend technologies and best practices."
  }
];

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left side - Photo and About text */}
          <div>
            {/* Developer Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8 flex justify-center lg:justify-start"
            >
              <div className="relative group">
                {/* Gradient glow behind image */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-primary rounded-full opacity-75 blur-md group-hover:opacity-100 transition-opacity duration-300" />
                {/* Border container */}
                <div className="relative p-1 bg-gradient-to-r from-primary via-purple-500 to-primary rounded-full">
                  <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden bg-background">
                    <Image
                      src="/mahi.png"
                      alt="Alex Chen - Senior Frontend Developer"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      priority
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <span className="text-primary font-mono text-sm">// ABOUT ME</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Frontend Developer Building Modern{" "}
              <span className="text-gradient"> Web Experiences</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a Frontend Developer passionate about creating responsive, dynamic,
                and user-focused web applications with React.js and modern frontend technologies.
              </p>
              <p>
                Currently, I work remotely at Banglatech Solution,
                where I develop modern user interfaces, integrate APIs, and build scalable frontend solutions
                with a strong focus on clean code, performance, and user experience.
              </p>
              <p>
                I enjoy solving real-world problems, learning new technologies,
                and continuously improving my skills.
                I also leverage modern AI tools to accelerate development, enhance UI implementation,
                and debug efficiently while ensuring I understand every solution I deliver.
              </p>
            </div>
          </div>

          {/* Right side - Highlight cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-2xl glass noise hover:glow-primary transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
