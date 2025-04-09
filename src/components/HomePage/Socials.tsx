"use client"

import React from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/devZenta",
    icon: Github,
    delay: 0.2,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/hugo-ghesquier/",
    icon: Linkedin,
    delay: 0.3,
  },
  {
    name: "Email",
    url: "mailto:your.email@example.com",
    icon: Mail,
    delay: 0.4,
  },
]

export function SocialButtons() {
  return (
    <div className="flex items-center justify-center gap-10 -mt-20">
      {socialLinks.map((link) => (
        <motion.div
          key={link.name}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2.5,
            delay: link.delay * 1.5,
            ease: "easeInOut",
          }}
        >
          <Link
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            aria-label={link.name}
          >
            <link.icon className="w-7 h-7 text-primary" />
          </Link>
        </motion.div>
      ))}
    </div>
  )
}