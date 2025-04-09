"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface EducationItem {
  degree: string
  institution: string
  period: string
  description: string
  logo?: string 
}

export function Education() {
  const educationItems: EducationItem[] = [
    {
      degree: "Master's Degree",
      institution: "ENIGMA-School",
      period: "2027 - 2029",
      description: "Master of Science in Computer Science with a focus on Network systems & Cloud or Backend development.",
      logo: "/logo/enigma_school_logo.png" 
    },
    {
      degree: "Bachelor's Degree",
      institution: "ENIGMA-School",
      period: "2024 - 2027",
      description: "Bachelor of Science in Computer Science with a focus on Software Engineering and Cybersecurity.",
      logo: "/logo/enigma_school_logo.png" 
    },
    {
      degree: "High School",
      institution: "Saint Paul's School",
      period: "2021 - 2024",
      description: "High School Diploma with a focus on Science and Mathematics.",
      logo: "/logo/saint_paul_logo.png" 
    },
    {
      degree: "Secondary School",
      institution: "Dominique Savio College",
      period: "2017 - 2021",
      description: "Secondary School Diploma.",
      logo: "/logo/dominique_savio_logo.png" 
    }
  ]

  return (
    <section className="py-8 -mt-12" id="education">
      <div className="max-w-4xl mx-auto px-4">
        <div className="space-y-8 mt-42">
          {educationItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-r from-[#C7CEE8]/20 to-[#C7CEE8]/10 border border-border p-6 rounded-lg"
            >
              <div className="flex items-start gap-4">
                {item.logo && (
                  <div className="flex-shrink-0 w-14 h-14 rounded-md overflow-hidden bg-white/10 flex items-center justify-center p-1">
                    <Image 
                      src={item.logo} 
                      alt={`${item.institution} logo`} 
                      width={50} 
                      height={50}
                      className="object-contain"
                    />
                  </div>
                )}
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-foreground">{item.degree}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-primary font-medium">{item.institution}</p>
                    <p className="text-sm text-foreground/70">{item.period}</p>
                  </div>
                  <p className="mt-3 text-foreground/80">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}