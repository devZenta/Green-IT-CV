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
    url: "https://linkedin.com/in/yourusername",
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
    <div className="flex items-center gap-4 mt-8">
      {socialLinks.map((link) => (
        <motion.div
          key={link.name}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            delay: link.delay,
            ease: "easeOut",
          }}
        >
          <Link
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            aria-label={link.name}
          >
            <link.icon className="w-5 h-5 text-primary" />
          </Link>
        </motion.div>
      ))}
    </div>
  )
}