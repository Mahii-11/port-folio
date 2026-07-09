"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Quote, Star } from "lucide-react"

{/*
  
  const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechStart Inc",
    content: "Alex transformed our outdated platform into a modern, blazing-fast application. Our user engagement increased by 200% after the redesign. Exceptional attention to detail and communication throughout the project.",
    avatar: "SM",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Product Manager, DataFlow",
    content: "Working with Alex was a game-changer for our team. They delivered a complex analytics dashboard ahead of schedule and the code quality was impeccable. Highly recommend for any serious project.",
    avatar: "MC",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, ShopLocal",
    content: "Our e-commerce conversion rate jumped 45% after Alex optimized our checkout flow. They understood our business goals and translated them into technical solutions that actually moved the needle.",
    avatar: "ER",
    rating: 5
  }
]
  */}

const stats = [
  { value: "8+", label: "Projects Completed" },
  { value: "5+", label: "Ongoing Client Projects" },
  { value: "100%", label: "Commitment" },
  { value: "24h", label: "Response Time" }
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm">// EXPERIENCE</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Professional Journey

            </h2>
            <p className="text-muted-foreground mt-4">
              Building real-world solutions through ongoing client collaborations and continuous learning.
            </p>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl glass noise"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-3xl md:text-4xl font-bold text-gradient mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Testimonial cards 
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="group p-6 rounded-2xl glass noise hover:glow-primary transition-all duration-300"
              >
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                
            
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  &quot;{testimonial.content}&quot;
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-bold text-primary-foreground">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            
            ))}
            
          </div>
          */}
        </motion.div>
        
      </div>
    </section>
  )
}
