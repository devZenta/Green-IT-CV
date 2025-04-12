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
  
  { name: "React", icon: "/images/skills/react.svg", category: "frontend" },
  { name: "Next.js", icon: "/images/skills/nextjs.svg", category: "frontend" },
  { name: "Tailwind CSS", icon: "/images/skills/tailwind.svg", category: "frontend" },
  { name: "Tailwind UI", icon: "/images/skills/tailwind-ui.svg", category: "frontend" },
  { name: "HTML5", icon: "/images/skills/html5.svg", category: "frontend" },
  { name: "CSS3", icon: "/images/skills/css3.svg", category: "frontend" },
  { name: "Material UI", icon: "/images/skills/material-ui.svg", category: "frontend" },
  { name: "Framer Motion", icon: "/images/skills/framer-motion.svg", category: "frontend" },
  { name: "Shadcn UI", icon: "/images/skills/shadcn-ui.svg", category: "frontend" },
  { name: "Radix UI", icon: "/images/skills/radix-ui.svg", category: "frontend" },


  { name: "JavaScript", icon: "/images/skills/javascript.svg", category: "backend" },
  { name: "TypeScript", icon: "/images/skills/typescript.svg", category: "backend" },
  { name: "Python", icon: "/images/skills/python.svg", category: "backend" },
  { name: "C", icon: "/images/skills/c.svg", category: "backend" },
  { name:  "Java", icon: "/images/skills/java.svg", category: "backend" },
  { name: "Blueprint", icon: "/images/skills/blueprint.svg", category: "backend" },
  { name: "Node.js", icon: "/images/skills/nodejs.svg", category: "backend" },
  { name: "Express", icon: "/images/skills/express.svg", category: "backend" },

  
  { name: "MongoDB", icon: "/images/skills/mongodb.svg", category: "database" },
  { name: "SQL", icon: "/images/skills/postgresql.svg", category: "database" },
  { name: "SQLite", icon: "/images/skills/sqlite.svg", category: "database" },
  { name: "Prisma", icon: "/images/skills/prisma.svg", category: "database" },
  { name: "Mongoose", icon: "/images/skills/mongoose.svg", category: "database" },
  { name: "Sequelize", icon: "/images/skills/sequelize.svg", category: "database" },

  
  { name: "Docker", icon: "/images/skills/docker.svg", category: "devops" },
  { name: "GitHub Actions", icon: "/images/skills/github-actions.svg", category: "devops" },
  { name: "Firebase", icon: "/images/skills/firebase.svg", category: "devops" },
  { name: "GitHub Pages", icon: "/images/skills/github-pages.svg", category: "devops" },
  { name: "Vercel", icon: "/images/skills/vercel.svg", category: "devops" },
  { name: "Railway", icon: "/images/skills/railway.svg", category: "devops" },


  { name: "CCNA 1", icon: "/images/skills/ccna.svg", category: "network" },
  { name: "CCNA 2", icon: "/images/skills/ccna.svg", category: "network" },
  { name: "CSNA", icon: "/images/skills/csna.svg", category: "network" },
  { name: "Cisco Packet Tracer", icon: "/images/skills/cisco-packet-tracer.svg", category: "network" },

  
  { name: "Git", icon: "/images/skills/git.svg", category: "tools" },
  { name: "Figma", icon: "/images/skills/figma.svg", category: "tools" },
  { name: "VS Code", icon: "/images/skills/vscode.svg", category: "tools" },
  { name: "Postman", icon: "/images/skills/postman.svg", category: "tools" },
  { name: "Unreal Engine", icon: "/images/skills/unreal-engine.svg", category: "tools" },
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