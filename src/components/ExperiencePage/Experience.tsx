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
      position: "Mobile Applications Developer",
      company: "APPIWAY",
      period: "June 2022 - July 2022",
      description: `🔍 Observation internship : 
 Field observed ➡️ Developing an application (Coco Cooking)

🔶 During my internship at Appiway, I had the opportunity to discover the professional world of start-ups and their daily challenges. Not yet knowing whether I wanted to go into software or hardware, I chose this internship to explore the field of software development further. 

🔶 I was lucky enough to work alongside experienced developers who shared their expertise. As a result, I discovered different professions: iOS app development, web development, as well as managing the marketing and advertising aspects. At the same time, the developers also helped me make progress on a personal project, namely the creation of a Discord bot in JavaScript. 

🔶 Thanks to this rewarding experience, I was able to confirm my interest in software development and refine my career path in this field.`,
      technologies: ["Internship", "On-site", "Lille, Hauts-de-France", "EuraTechnologies"]
    },
    {
      position: "Customer Service Employee",
      company: "Boulanger - Household Appliances & Multimedia",
      period: "April 2021 - May 2021",
      description: `🔍 Observation work placement :
Field observed ➡️ After-sales service, computer maintenance and repair

🔶 Before diving into the software field, I did an internship in the after-sales service at Boulanger - Appliances & Multimedia. It was my first immersion in a large company, where I had the opportunity to discover many different trades. 

🔶 During this week, my work placement supervisor helped me acquire new skills by letting me take apart an iPhone, which familiarised me with specific techniques and tools for repairing electronic equipment. After this successful experience, I was also able to dismantle a laptop, broadening my skills. 

🔶 This work placement showed me the diversity of devices that you can be asked to repair, ranging from computers to printers, as well as smaller devices such as Chromecasts. This first hands-on experience gave me a better understanding of the job of computer repairer and also played a key role in helping me think about my career direction. 

🔶 This work placement confirmed my interest in IT, whether in hardware or software, while reinforcing my passion for making it my career in the long term.`,
      technologies: ["Internship", "On-site", "Villeneuve-d'Ascq, Hauts-de-France"]
    }
  ]

  // Split the experience items into groups of 2
  const experienceGroups = [];
  for (let i = 0; i < experienceItems.length; i += 2) {
    experienceGroups.push(experienceItems.slice(i, i + 2));
  }

  return (
    <section className="py-24 mt-16 bg-muted/30" id="experience">
      <div className="max-w-6xl mx-auto px-4">
        <div className="space-y-16">
          {experienceGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="flex flex-col md:flex-row gap-6 md:gap-10">
              {group.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="bg-gradient-to-r from-[#C7CEE8]/20 to-[#C7CEE8]/10 border border-border p-6 rounded-lg flex-1"
                >
                  {/* Date for all screens */}
                  <div className="mb-4">
                    <span className="inline-block bg-primary/10 text-primary font-medium px-3 py-1 rounded-full text-sm">
                      {item.period}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground">{item.position}</h3>
                  <p className="text-primary font-medium mt-2">{item.company}</p>
                  <p className="mt-3 text-foreground/80 whitespace-pre-line">{item.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
              
              {/* If there's only one item in a group, add an empty div for balance */}
              {group.length === 1 && <div className="flex-1 hidden md:block" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}