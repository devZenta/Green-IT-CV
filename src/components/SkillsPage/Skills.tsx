"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface Skill {
  name: string
  icon: string
  category: "frontend" | "backend" | "database" | "devops" | "tools" | "network"
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
  
  { name: "React", icon: "/skills/frontend/react_logo.svg", category: "frontend" },
  { name: "Next JS", icon: "/skills/frontend/nextjs_logo.svg", category: "frontend" },
  { name: "Tailwind CSS", icon: "/skills/frontend/tailwind_css_logo.svg", category: "frontend" },
  { name: "Tailwind UI", icon: "/skills/frontend/tailwind_ui_logo.jpeg", category: "frontend" },
  { name: "HTML5", icon: "/skills/frontend/html5_logo.svg", category: "frontend" },
  { name: "CSS3", icon: "/skills/frontend/css3_logo.svg", category: "frontend" },
  { name: "Material UI", icon: "/skills/frontend/material_ui_logo.svg", category: "frontend" },
  { name: "Framer Motion", icon: "/skills/frontend/framer_motion_logo.svg", category: "frontend" },
  { name: "Shadcn UI", icon: "/skills/frontend/shadcn_ui_logo.jpg", category: "frontend" },
  { name: "Radix UI", icon: "/skills/frontend/radix_ui_logo.svg", category: "frontend" },


  { name: "JavaScript", icon: "/skills/backend/javascript_logo.svg", category: "backend" },
  { name: "TypeScript", icon: "/skills/backend/typescript_logo.svg", category: "backend" },
  { name: "Python", icon: "/skills/backend/python_logo.svg", category: "backend" },
  { name: "C", icon: "/skills/backend/c_logo.svg", category: "backend" },
  { name:  "Java", icon: "/skills/backend/java_logo.svg", category: "backend" },
  { name: "Blueprint", icon: "/skills/tools/unreal_engine_logo.svg", category: "backend" },
  { name: "Node JS", icon: "/skills/backend/node_js_logo.svg", category: "backend" },
  { name: "Express", icon: "/skills/backend/express_js_logo.svg", category: "backend" },

  
  { name: "MongoDB", icon: "/skills/database/mongodb_logo.svg", category: "database" },
  { name: "SQL", icon: "/skills/database/sql_logo.svg", category: "database" },
  { name: "SQLite", icon: "/skills/database/sqlite_logo.svg", category: "database" },
  { name: "Prisma", icon: "/skills/database/prisma_logo.svg", category: "database" },
  { name: "Sequelize", icon: "/skills/database/sequelize_logo.svg", category: "database" },

  
  { name: "Docker", icon: "/skills/devops/docker_logo.svg", category: "devops" },
  { name: "GitHub Actions", icon: "/skills/devops/github_actions_logo.svg", category: "devops" },
  { name: "Firebase", icon: "/skills/devops/firebase_logo.svg", category: "devops" },
  { name: "GitHub Pages", icon: "/skills/tools/github_logo.svg", category: "devops" },
  { name: "Vercel", icon: "/skills/devops/vercel_logo.svg", category: "devops" },
  { name: "Railway", icon: "/skills/devops/railway_logo.svg", category: "devops" },


  { name: "CCNA 1", icon: "/skills/network/ccna1_logo.png", category: "network" },
  { name: "CCNA 2", icon: "/skills/network/ccna2_logo.png", category: "network" },
  { name: "IOT", icon: "/skills/network/iot_logo.png", category: "network" },
  { name: "Cisco Packet Tracer", icon: "/skills/network/cisco_packet_tracer_logo.svg", category: "network" },

  
  { name: "Git", icon: "/skills/tools/git_logo.svg", category: "tools" },
  { name: "GitHub", icon: "/skills/tools/github_logo.svg", category: "tools" },
  { name: "Figma", icon: "/skills/tools/figma_logo.svg", category: "tools" },
  { name: "VS Code", icon: "/skills/tools/vs_code_logo.svg", category: "tools" },
  { name: "Postman", icon: "/skills/tools/postman_logo.svg", category: "tools" },
  { name: "Unreal Engine", icon: "/skills/tools/unreal_engine_logo.svg", category: "tools" },
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
      className="group flex items-center bg-background/50 border border-border/40 hover:border-primary/30 rounded-lg p-3 transition-colors duration-200"
    >
      <div className="w-7 h-7 mr-4 relative flex-shrink-0">
        <Image
          src={skill.icon}
          alt={skill.name}
          width={28}
          height={28}
          className="object-contain group-hover:scale-110 transition-transform duration-200"
        />
      </div>
      <span className="text-sm text-foreground/80 group-hover:text-primary transition-colors duration-200">
        {skill.name}
      </span>
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
        {categories.map((category, index) => (
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
        className="max-w-4xl mx-auto"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
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