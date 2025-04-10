"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

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
    url: "mailto:hugo.ghesquier@gmail.com",
    icon: Mail,
    delay: 0.4,
  },
]

export function QuoteContent() {
  return (
    <div className="relative z-20 w-full px-4 max-w-7xl mx-auto mt-20 md:mt-32 lg:mt-40 mb-10 md:mb-16 rounded-[40px] py-12 md:py-16 xl:py-28 flex flex-col items-center">
      <motion.div 
        className="w-full flex justify-start pl-10 md:pl-16 lg:pl-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <p className="md:text-md text-xs text-red-500 lg:text-lg xl:text-xl ml-24 md:ml-32 lg:ml-44 xl:ml-52 self-start">
          Hello there
        </p>
      </motion.div>
      <div className="mt-2 md:mt-3 text-xl tracking-tighter md:text-4xl lg:text-5xl xl:text-6xl text-center">
        <motion.div 
          className="flex gap-1 md:gap-2 lg:gap-3 xl:gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
        >
          <h1 className="font-semibold">&quot;Welcome</h1>
          <p className="font-thin">to my interactive</p>
        </motion.div>
        <motion.div 
          className="flex gap-1 md:gap-2 lg:gap-3 xl:gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
        >
          <h1 className="font-semibold">CV</h1>
          <p className="font-thin">where my</p>
          <h1 className="font-semibold">skills and</h1>
        </motion.div>
        <motion.div 
          className="flex gap-1 md:gap-2 lg:gap-3 xl:gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
        >
          <h1 className="font-semibold">projects</h1>
          <p className="font-thin">are</p>
          <h1 className="font-semibold">showcased</h1>
          <p className="font-thin">in</p>
        </motion.div>
        <motion.h1 
          className="font-thin"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
        >
          detail...&quot;
        </motion.h1>
      </div>
      
      {/* Boutons sociaux */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2, ease: "easeInOut" }}
        className="flex items-center justify-center gap-6 mt-14 md:mt-20 relative z-40"
      >
        {socialLinks.map((link) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.2 + link.delay,
              ease: "easeOut",
            }}
            className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors cursor-pointer"
            style={{ position: 'relative', zIndex: 50 }}
          >
            <link.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}