"use client"

import React from "react"
import { motion } from "framer-motion"

interface EducationItem {
  degree: string
  institution: string
  period: string
  description: string
}

export function Education() {
  const educationItems: EducationItem[] = [
    {
      degree: "Master's Degree",
      institution: "University Name",
      period: "2020 - 2022",
      description: "Computer Science with focus on sustainable development and green IT solutions."
    },
    {
      degree: "Bachelor's Degree",
      institution: "University Name",
      period: "2017 - 2020",
      description: "Information Technology with minor in Environmental Studies."
    }
  ]

  return (
    <section className="py-16" id="education">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-primary">Education</h2>
        <div className="space-y-8">
          {educationItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-r from-[#C7CEE8]/20 to-[#C7CEE8]/10 border border-border p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-foreground">{item.degree}</h3>
              <div className="flex justify-between items-center mt-2">
                <p className="text-primary font-medium">{item.institution}</p>
                <p className="text-sm text-foreground/70">{item.period}</p>
              </div>
              <p className="mt-3 text-foreground/80">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}