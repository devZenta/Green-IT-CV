"use client"

import React from "react"
import { motion } from "framer-motion"

export function VersionText() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: 1.2, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      className="fixed bottom-20 sm:bottom-12 left-1/2 -translate-x-1/2 z-30"
    >
      <motion.div 
        className="px-5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border-t border-white/10"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ 
          duration: 0.6, 
          delay: 1.4, 
          ease: "easeOut" 
        }}
      >
        <p className="text-sm font-light tracking-wider text-white/90">
          <motion.span 
            className="font-normal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.6 }}
          >
            v
          </motion.span>
          <motion.span 
            className="font-normal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.8 }}
          >
            2025
          </motion.span>
        </p>
      </motion.div>
    </motion.div>
  )
}