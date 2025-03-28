"use client"

import React from "react"
import { motion } from "framer-motion"

interface ExperienceItem {
  position: string
  company: string
  period: string
  description: string
  technologies: string[]
}

export function Experience() {
  const experienceItems: ExperienceItem[] = [
    {
      position: "Senior Developer",
      company: "Green Tech Solutions",
      period: "2021 - Present",
      description: "Leading development of sustainable web applications with focus on minimizing carbon footprint.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Green Hosting"]
    },
    {
      position: "Web Developer",
      company: "Eco Systems Inc",
      period: "2018 - 2021",
      description: "Developed and maintained web applications with attention to performance and efficiency.",
      technologies: ["JavaScript", "TypeScript", "React", "Node.js"]
    }
  ]

  return (
    <section className="py-16 bg-muted/30" id="experience">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-primary">Experience</h2>
        <div className="space-y-8">
          {experienceItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-r from-[#C7CEE8]/20 to-[#C7CEE8]/10 border border-border p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-foreground">{item.position}</h3>
              <div className="flex justify-between items-center mt-2">
                <p className="text-primary font-medium">{item.company}</p>
                <p className="text-sm text-foreground/70">{item.period}</p>
              </div>
              <p className="mt-3 text-foreground/80">{item.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.technologies.map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}