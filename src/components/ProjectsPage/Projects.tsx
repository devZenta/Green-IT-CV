"use client"

import React from "react"
import { motion } from "framer-motion"
import { Github } from "lucide-react"

interface ProjectItem {
  title: string
  description: string
  technologies: string[]
  link: string
}

export function Projects() {
  const projectItems: ProjectItem[] = [
    {
      title: "Villani Racing League",
      description: "Creating a video game as part of our course on the unreal engine, we decided to create a car racing simulation game. Game under development.",
      technologies: ["Blueprint", "Unreal Engine 5", "Fab", "In Development", "Private For The Moment"],
      link: "https://github.com/devZenta/Villani-Racing-League",
    },
    {
      title: "TaskFlow AI",
      description: "Task management tool that uses AI to help users organize their tasks and projects more efficiently. Explain your project, then the IA will create the components for your project.",
      technologies: ["TypeScript", "Next JS", "NextAuth", "Tailwind", "Prisma", "PostgreSQL", "OpenAI", "Framer-Motion", "Figma", "In Development"],
      link: "https://github.com/devZenta/TaskFlow",
    },
    {
      title: "ENIGMA School Discord Bot",
      description: "ENIGMA School Discord Bot is a bot designed to enhance the experience of students at ENIGMA School. It provides various features such as a role management, and a command to display the school's schedule. The bot is built using Node.js and the Discord.js library.",
      technologies: ["JavaScript", "Discord JS", "In Development"],
      link: "https://github.com/devZenta/ENIGMA-School-Discord-Bot",
    },
    {
      title: "BabyFoot Tracker Discord Bot",
      description: "BabyFoot Tracker is a Discord bot designed to manage and track table football games. The bot allows users to create accounts, start matches with random teams, view player statistics, and display leaderboards. It is built using Node.js and the Discord.js library, with Sequelize for database management.",
      technologies: ["JavaScript", "Discord JS", "Sequelize", "Finish"],
      link: "https://github.com/devZenta/BabyFoot-Tracker-Discord-Bot",
    },
    {
      title: "Brick Breaker",
      description: "This project is a classic brick breaker game developed using C and SDL. The game features multiple difficulty levels, each with different settings for brick life, player lives, ball speed, and paddle speed. The player controls a paddle to bounce a ball and break bricks, aiming to clear all bricks to win the game.",
      technologies: ["C", "SDL2", "Finish"],
      link: "https://github.com/devZenta/BrickBreaker",
    },
    {
      title: "Graphic Naval Battle",
      description: "Bataille Navale is a classic battleship game implemented in Java using Swing for the graphical user interface. This project allows two players to place their ships on a grid and take turns attacking each other's ships until one player wins.",
      technologies: ["Java", "Swing", "Finish"],
      link: "https://github.com/devZenta/Battleship",
    }
  ]

  return (
    <section className="py-16 mt-16 md:mt-28" id="projects">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {projectItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="bg-gradient-to-r from-[#C7CEE8]/20 to-[#C7CEE8]/10 border border-border p-5 rounded-lg h-full flex flex-col mt-4"
            >
              <div className="flex justify-between items-start">
                <motion.a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold text-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1 group"
                  whileHover={{ x: 3 }}
                >
                  {item.title}
                  <motion.svg 
                    className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                    />
                  </motion.svg>
                </motion.a>
                
                <motion.a 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-300"
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: "rgba(161, 161, 252, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`View ${item.title} on GitHub`}
                >
                  <Github className="w-5 h-5 text-primary" />
                </motion.a>
              </div>
              
              <p className="mt-1.5 text-foreground/80 flex-grow">{item.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.technologies.map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}