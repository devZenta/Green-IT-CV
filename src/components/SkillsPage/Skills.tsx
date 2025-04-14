"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface Skill {
  name: string
  icon: string
  category: "frontend" | "backend" | "database" | "devops" | "tools" | "network"
  proficiency?: "obtained" | "learning" | "certifying" | "frequent" | "basics" | "mastered"
}

const categories = [
  { id: "frontend", title: "Frontend" },
  { id: "backend", title: "Backend" },
  { id: "database", title: "Database" },
  { id: "devops", title: "DevOps" },
  { id: "network", title: "Network" },
  { id: "tools", title: "Tools" },
]

const skills: Skill[] = [
  
  { name: "React", icon: "/skills/frontend/react_logo.svg", category: "frontend", proficiency: "learning" },
  { name: "Next JS", icon: "/skills/frontend/nextjs_logo.svg", category: "frontend", proficiency: "learning" },
  { name: "Tailwind CSS", icon: "/skills/frontend/tailwind_css_logo.svg", category: "frontend", proficiency: "learning" },
  { name: "Shadcn UI", icon: "/skills/frontend/shadcn_ui_logo.webp", category: "frontend", proficiency: "frequent" },


  { name: "JavaScript", icon: "/skills/backend/javascript_logo.svg", category: "backend", proficiency: "basics" },
  { name: "TypeScript", icon: "/skills/backend/typescript_logo.svg", category: "backend", proficiency: "learning" },
  { name: "Python", icon: "/skills/backend/python_logo.svg", category: "backend", proficiency: "basics" },
  { name: "C", icon: "/skills/backend/c_logo.svg", category: "backend", proficiency: "basics" },
  { name:  "Java", icon: "/skills/backend/java_logo.svg", category: "backend", proficiency: "basics" },
  { name: "Blueprint", icon: "/skills/tools/unreal_engine_logo.svg", category: "backend", proficiency: "learning" },
  { name: "Express", icon: "/skills/backend/express_js_logo.svg", category: "backend", proficiency: "learning" },
  { name: "Discord JS", icon: "/skills/backend/discord_js_logo.svg", category: "backend", proficiency: "mastered" },

  
  { name: "MongoDB", icon: "/skills/database/mongodb_logo.svg", category: "database", proficiency: "learning" },
  { name: "SQL", icon: "/skills/database/sql_logo.svg", category: "database", proficiency: "learning" },
  { name: "SQLite", icon: "/skills/database/sqlite_logo.svg", category: "database", proficiency: "basics" },
  { name: "Prisma", icon: "/skills/database/prisma_logo.svg", category: "database", proficiency: "basics" },
  { name: "Sequelize", icon: "/skills/database/sequelize_logo.svg", category: "database", proficiency: "basics" },

  
  { name: "Docker", icon: "/skills/devops/docker_logo.svg", category: "devops", proficiency: "learning" },
  { name: "GitHub Actions", icon: "/skills/devops/github_actions_logo.svg", category: "devops", proficiency: "learning" },
  { name: "Firebase", icon: "/skills/devops/firebase_logo.svg", category: "devops", proficiency: "learning" },
  { name: "GitHub Pages", icon: "/skills/tools/github_logo.svg", category: "devops", proficiency: "frequent" },
  { name: "Vercel", icon: "/skills/devops/vercel_logo.svg", category: "devops", proficiency: "frequent" },
  { name: "Railway", icon: "/skills/devops/railway_logo.svg", category: "devops", proficiency: "frequent" },


  { name: "CCNA 1", icon: "/skills/network/ccna1_logo.webp", category: "network", proficiency: "obtained" },
  { name: "CCNA 2", icon: "/skills/network/ccna2_logo.webp", category: "network", proficiency: "obtained" },
  { name: "CSNA", icon: "/skills/network/stormshield_logo.webp", category: "network", proficiency: "certifying" },
  { name: "IOT", icon: "/skills/network/iot_logo.webp", category: "network", proficiency: "obtained" },
  { name: "Cisco Packet Tracer", icon: "/skills/network/cisco_packet_tracer_logo.svg", category: "network", proficiency: "frequent" },

  
  { name: "Git", icon: "/skills/tools/git_logo.svg", category: "tools", proficiency: "frequent" },
  { name: "GitHub", icon: "/skills/tools/github_logo.svg", category: "tools", proficiency: "frequent" },
  { name: "Figma", icon: "/skills/tools/figma_logo.svg", category: "tools", proficiency: "learning" },
  { name: "VS Code", icon: "/skills/tools/vs_code_logo.svg", category: "tools", proficiency: "frequent" },
  { name: "Postman", icon: "/skills/tools/postman_logo.svg", category: "tools", proficiency: "frequent" },
  { name: "JetBrains", icon: "/skills/tools/jetbrains_logo.svg", category: "tools", proficiency: "frequent" },
  { name: "Unreal Engine", icon: "/skills/tools/unreal_engine_logo.svg", category: "tools", proficiency: "learning" },
  { name: "Ubuntu", icon: "/skills/tools/ubuntu_logo.svg", category: "tools", proficiency: "learning" },
]

function SkillItem({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.05,
        ease: "easeOut"
      }}
      className="group flex items-center justify-between bg-transparent border-2 border-border/60 hover:border-primary/70 rounded-lg p-7 transition-all duration-200 h-24"
    >
      <div className="flex items-center">
        <div className="w-14 h-14 mr-6 relative flex-shrink-0">
          <Image
            src={skill.icon}
            alt={skill.name}
            width={56}
            height={56}
            className="object-contain group-hover:scale-110 transition-transform duration-200"
          />
        </div>
        <div>
          <span className="text-lg font-medium text-foreground/90 group-hover:text-primary transition-colors duration-200">
            {skill.name}
          </span>
          
          {skill.proficiency && (
            <div className="mt-1">
              <span 
                className={cn(
                  "text-xs px-2 py-0.5 rounded-full font-medium",
                  {
                    "bg-green-500/10 text-green-500 border border-green-500/20": skill.proficiency === "obtained",
                    "bg-amber-500/10 text-amber-500 border border-amber-500/20": skill.proficiency === "learning",
                    "bg-blue-500/10 text-blue-500 border border-blue-500/20": skill.proficiency === "certifying",
                    "bg-purple-500/10 text-purple-500 border border-purple-500/20": skill.proficiency === "frequent",
                    "bg-teal-500/10 text-teal-500 border border-teal-500/20": skill.proficiency === "basics",
                    "bg-indigo-500/10 text-indigo-500 border border-indigo-500/20": skill.proficiency === "mastered"
                  }
                )}
              >
                {skill.proficiency === "obtained" ? "Obtained" : 
                 skill.proficiency === "learning" ? "Learning" : 
                 skill.proficiency === "certifying" ? "Certifying" :
                 skill.proficiency === "frequent" ? "Frequently Used" :
                 skill.proficiency === "basics" ? "Basics" :
                 "Mastered"}
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="py-32 md:py-40 mt-10">
      <motion.div 
        className="flex flex-wrap justify-center gap-3 mb-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {categories.map((category) => (
          <motion.button
            key={category.id}
            variants={buttonVariants}
            onClick={() => setActiveCategory(category.id)}
            className={cn(
              "px-5 py-2 text-sm rounded-full transition-colors duration-200",
              activeCategory === category.id 
                ? "bg-primary text-white" 
                : "bg-background/80 border border-border hover:border-primary/50 text-foreground/70 hover:text-foreground"
            )}
          >
            {category.title}
          </motion.button>
        ))}
      </motion.div>

      <motion.div 
        key={activeCategory}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="max-w-5xl mx-auto"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
  {skills
    .filter(skill => skill.category === activeCategory)
    .map((skill, index) => (
      <SkillItem key={skill.name} skill={skill} index={index} />
    ))}
</div>
      </motion.div>
    </div>
  )
}