"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, A11y } from "swiper/modules";
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ChevronLeft, ChevronRight, ExternalLink, Github, Star } from "lucide-react"
import Image from "next/image"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"
import { useState } from "react";

const projects = [
 {
  title: "Azeem Shah - Luxury Hospitality Portfolio",
  description:
    "A high-end corporate portfolio website crafted for an international hospitality strategist, featuring luxury branding, global business presence, professional achievements, and premium user experience.",
  problem:
    "Traditional business profiles failed to effectively communicate Azeem Shah's international hospitality expertise, leadership journey, and multiple business ventures in a visually compelling way.",
  solution:
    "Built a modern luxury portfolio with immersive visuals, business showcase, interactive global experience section, expertise highlights, testimonials, and strategic call-to-actions to strengthen personal branding and generate consultation opportunities.",
  image: "/azeem-shah.jpg",
 tech: [
  "React",
  "Vite",
  "JavaScript",
  "Tailwind CSS",
  "React Router",
  "Framer Motion",
  "React Hook Form",
  "React Query",
  "Zod",
  "Recharts",
],
  liveUrl: "https://azeemshah.com",
  githubUrl: "https://github.com/Mahii-11/azeem-shah",
  featured: true
},
 {
  title: "Spotless - Commercial Cleaning Services",
  description:
    "A modern corporate website developed for a professional cleaning company, showcasing commercial cleaning services, COVID-19 sanitization, healthcare cleaning solutions, company information, and customer engagement through a clean and responsive interface.",
  problem:
    "The company needed a professional online platform to present its cleaning services, build customer trust, and make it easier for businesses to explore solutions and request cleaning services.",
  solution:
    "Developed a responsive corporate website with dedicated service sections, company highlights, trust-building content, contact information, and clear call-to-actions to improve online visibility and customer engagement.",
  image: "/spotlessbd.png",
  tech: [
    "React",
    "Vite",
    "JavaScript",
    "Tailwind CSS",
    "React Router",
    "Responsive Design"
  ],
  liveUrl: "https://spotlessbd.com/",
  githubUrl: "",
  featured: false
},
  {
  title: "BanglaTech Solution - Technology Company Website",
  description:
    "A modern corporate website developed for a software and technology company, showcasing digital services, completed projects, company expertise, and business solutions through a clean, responsive, and engaging user experience.",

  problem:
    "The company required a professional online presence to effectively showcase its software development services, completed projects, and technical expertise while building credibility and generating new business opportunities.",

  solution:
    "Designed and developed a fully responsive corporate website with service showcases, project portfolio, company overview, smooth animations, intuitive navigation, and strategic call-to-actions to strengthen the company's digital presence and improve client engagement.",

  image: "/banglatech-solution.png",

  tech: [
    "React",
    "Vite",
    "JavaScript",
    "Tailwind CSS",
    "React Router",
    "Framer Motion",
    "TanStack Query",
    "React Hook Form",
    "Swiper.js",
    "Lenis"
  ],

  liveUrl: "https://banglatechsolutionit.com/",
  githubUrl: "",
  featured: true
},
  {
  title: "Dr. Golam Rabbani - Executive Personal Portfolio",
  description:
    "A modern executive portfolio website developed for a public policy expert, showcasing leadership experience, research publications, policy initiatives, latest articles, achievements, and professional engagement through a clean and responsive interface.",

  problem:
    "The client needed a professional digital platform to present his public policy expertise, research contributions, leadership initiatives, and academic publications while strengthening his personal brand and increasing engagement with students, researchers, policymakers, and the public.",

  solution:
    "Designed and developed a responsive executive portfolio website featuring a professional profile, research publications, latest blogs, policy initiatives, achievements, event highlights, and intuitive navigation to establish a strong digital presence and improve audience engagement.",

  image: "/golam-rabbani.png",

  tech: [
    "React",
    "Vite",
    "JavaScript",
    "Tailwind CSS",
    "React Router",
    "Framer Motion",
    "Swiper.js"
  ],

  liveUrl: "https://rabbani.bdtechdemo.online/",
  githubUrl: "",
  featured: true
},
 {
  title: "Touhid Bhuiyan - AI & Cybersecurity Portfolio",

  description:
    "A modern executive portfolio website developed for an Artificial Intelligence and Cybersecurity professional, showcasing expertise, research, publications, media appearances, industry insights, and professional services through a premium and responsive user experience.",

  problem:
    "The client needed a professional digital platform to establish a strong personal brand, showcase expertise in Artificial Intelligence, Cybersecurity, and Digital Trust, publish research and insights, and connect with organizations seeking strategic consulting and training.",

  solution:
    "Designed and developed a premium responsive portfolio website featuring professional branding, service offerings, research highlights, media gallery, industry insights, achievements, and clear call-to-actions to enhance credibility, strengthen digital presence, and increase professional engagement.",

  image: "/touhid-bhuiyan.png",

  tech: [
    "React",
    "Vite",
    "JavaScript",
    "Tailwind CSS",
    "React Router",
    "Framer Motion",
    "React Query",
    "React Hook Form",
    "Swiper.js",
    "Recharts"
  ],

  liveUrl: "https://touhidbhuiyan.com/",
  githubUrl: "",
  featured: true
},
  {
  title: "Amar - Circle Internet Service Website",

  description:
    "A modern corporate website developed for an internet service provider (ISP), showcasing broadband plans, network coverage, company services, customer benefits, and online inquiries through a clean and responsive user experience.",

  problem:
    "The internet service provider needed a modern website that could clearly present its broadband packages, service coverage, and customer support while simplifying the process for potential customers to compare plans and choose the right internet solution.",

  solution:
    "Designed and developed a responsive ISP website featuring internet package comparisons, service highlights, company information, FAQs, contact forms, and conversion-focused call-to-actions to improve customer experience and increase service inquiries.",

  image: "/amarcircle.png",

  tech: [
    "React",
    "Vite",
    "JavaScript",
    "Tailwind CSS",
    "React Router",
    "Framer Motion"
  ],

  liveUrl: "https://amarcircle.net/",
  githubUrl: "",
  featured: false
}
]

export default function Projects() {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="relative py-6">
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
              Professional Portfolio & Business Websites
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              From executive portfolios to corporate websites, these projects focus on
              creating impactful digital experiences that help businesses and professionals
              grow their online presence.
            </p>
          </div>

             {/* Swiper Carousel Container */}
          <div className="relative w-full h-full group/carousel">
            
            <button
              ref={prevRef}
               className={`absolute left-1 md:left-2 top-1/2 -translate-y-1/2 bg-white border border-neutral-200 p-1.5 md:p-2 rounded-full z-20 shadow-md active:scale-95 text-neutral-700 transition-opacity duration-200 hover:bg-neutral-50 ${
                 isBeginning ? "opacity-0 pointer-events-none" : "opacity-100"
               }`}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              ref={nextRef}
               className={`absolute right-1 md:right-2 top-1/2 -translate-y-1/2 bg-white border border-neutral-200 p-1.5 md:p-2 rounded-full z-20 shadow-md active:scale-95 text-neutral-700 transition-opacity duration-200 hover:bg-neutral-50 ${
               isEnd ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            >
              <ChevronRight size={16} />
            </button>

            <Swiper
              modules={[Navigation, Autoplay, A11y]}
              speed={600}
              slidesPerGroup={1}
              watchOverflow={true}
              grabCursor={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onInit={(swiper) => {
                // Link custom elements inside Swiper's internal navigation parameters
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
                
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              onSlideChange={(swiper) => {
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
             breakpoints={{
  320: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  480: {
    slidesPerView: 1,
    spaceBetween: 12,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 14,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 12,
  },
  1024: {
    slidesPerView: 2,
    spaceBetween: 14,
  },
  1280: {
    slidesPerView: 3,
    spaceBetween: 16,
  },
}}
              className="py-2"
            >
              
                {projects.map((project, index) => (

                  <SwiperSlide
                    key={index}
                     className="h-auto"

                  >
                    <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex sm:h-210 h-full  flex-col rounded-2xl glass noise hover:glow-primary transition-all duration-500 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_6px_18px_rgba(243,164,123,0.10)]"
              >
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-20 flex items-center gap-1 px-2 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                    <Star className="w-3 h-3 fill-current" />
                    Featured
                  </div>
                )}

                {/* Image */}
                <div className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-t-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />

                </div>

                {/* Content */}
                <div className="p-6 pt-2 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  {/* Problem/Solution */}
                  <div className="space-y-2 mb-4  mt-auto">
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
                  <div className="flex gap-3 mt-auto">
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
                  </SwiperSlide>
                   
                ))}
            </Swiper>
            </div>
        </motion.div>
      </div>
    </section>
  )
}
