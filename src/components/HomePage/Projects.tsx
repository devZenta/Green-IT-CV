"use client"

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"

interface ProjectItem {
  title: string
  description: string
  technologies: string[]
  link: string
  imageUrl?: string
}

export function Projects() {
  const projectItems: ProjectItem[] = [
    {
      title: "Eco-Friendly Website",
      description: "A website built with performance and sustainability in mind, reducing carbon footprint.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      link: "#",
    },
    {
      title: "Green IT Dashboard",
      description: "Dashboard for monitoring the environmental impact of web applications.",
      technologies: ["React", "D3.js", "Node.js"],
      link: "#",
    },
    {
      title: "Sustainable E-commerce Platform",
      description: "E-commerce platform optimized for minimal environmental impact.",
      technologies: ["TypeScript", "Next.js", "MongoDB"],
      link: "#",
    }
  ]

  return (
    <section className="py-16" id="projects">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-primary">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-r from-[#C7CEE8]/20 to-[#C7CEE8]/10 border border-border p-6 rounded-lg h-full flex flex-col"
            >
              {item.imageUrl && (
                <div className="h-40 mb-4 overflow-hidden rounded-md">
                  <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                </div>
              )}
              <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-foreground/80 flex-grow">{item.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.technologies.map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <Link 
                href={item.link} 
                className="mt-4 inline-flex items-center text-primary hover:underline"
              >
                View Project
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}