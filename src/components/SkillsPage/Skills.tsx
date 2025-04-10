"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

// Définition de l'interface pour les compétences
interface Skill {
  name: string
  icon: string
  category: "frontend" | "backend" | "database" | "devops" | "tools" | "other"
}

// Définition des catégories
const categories = [
  { id: "frontend", title: "Frontend" },
  { id: "backend", title: "Backend" },
  { id: "database", title: "Bases de données" },
  { id: "devops", title: "DevOps" },
  { id: "tools", title: "Outils" },
  { id: "other", title: "Autres" }
]

// Les compétences
const skills: Skill[] = [
  // Frontend
  { name: "React", icon: "/images/skills/react.svg", category: "frontend" },
  { name: "Next.js", icon: "/images/skills/nextjs.svg", category: "frontend" },
  { name: "TypeScript", icon: "/images/skills/typescript.svg", category: "frontend" },
  { name: "Tailwind CSS", icon: "/images/skills/tailwind.svg", category: "frontend" },
  { name: "HTML5", icon: "/images/skills/html5.svg", category: "frontend" },
  { name: "CSS3", icon: "/images/skills/css3.svg", category: "frontend" },
  { name: "JavaScript", icon: "/images/skills/javascript.svg", category: "frontend" },

  // Backend
  { name: "Node.js", icon: "/images/skills/nodejs.svg", category: "backend" },
  { name: "Express", icon: "/images/skills/express.svg", category: "backend" },
  { name: "PHP", icon: "/images/skills/php.svg", category: "backend" },

  // Databases
  { name: "MongoDB", icon: "/images/skills/mongodb.svg", category: "database" },
  { name: "PostgreSQL", icon: "/images/skills/postgresql.svg", category: "database" },
  { name: "MySQL", icon: "/images/skills/mysql.svg", category: "database" },

  // DevOps
  { name: "Docker", icon: "/images/skills/docker.svg", category: "devops" },
  { name: "GitHub Actions", icon: "/images/skills/github-actions.svg", category: "devops" },
  { name: "Vercel", icon: "/images/skills/vercel.svg", category: "devops" },

  // Tools
  { name: "Git", icon: "/images/skills/git.svg", category: "tools" },
  { name: "Figma", icon: "/images/skills/figma.svg", category: "tools" },
  { name: "VS Code", icon: "/images/skills/vscode.svg", category: "tools" },
  { name: "Jest", icon: "/images/skills/jest.svg", category: "tools" }
]

// Composant pour afficher une compétence individuelle
function SkillItem({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="flex flex-col items-center"
    >
      <div className="relative w-16 h-16 md:w-20 md:h-20 mb-3 bg-white/80 dark:bg-gray-800/80 rounded-full p-3 flex items-center justify-center shadow-sm">
        <Image
          src={skill.icon}
          alt={skill.name}
          width={48}
          height={48}
          className="object-contain"
        />
      </div>
      <p className="text-sm md:text-base text-center font-medium text-gray-800 dark:text-gray-200">
        {skill.name}
      </p>
    </motion.div>
  )
}

// Composant pour une catégorie de compétences
function SkillCategory({ category, categoryId }: { category: string; categoryId: string }) {
  const categorySkills = skills.filter(skill => skill.category === categoryId)
  
  if (categorySkills.length === 0) return null
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <motion.div 
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center mb-8"
      >
        <div className="w-10 h-[2px] bg-primary mr-4" />
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
          {category}
        </h2>
      </motion.div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-6 gap-y-8">
        {categorySkills.map((skill, index) => (
          <SkillItem key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  )
}

// Composant principal pour la section des compétences
export function Skills() {
  return (
    <div className="py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16 md:mb-24"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Compétences Techniques
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Un aperçu des technologies et outils que j&apos;utilise au quotidien
        </p>
      </motion.div>

      <div className="space-y-16 md:space-y-24">
        {categories.map((category) => (
          <SkillCategory 
            key={category.id} 
            category={category.title} 
            categoryId={category.id} 
          />
        ))}
      </div>
    </div>
  )
}