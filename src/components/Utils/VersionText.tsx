"use client"

import React from "react"
import { motion } from "framer-motion"

export function VersionText() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="fixed bottom-20 sm:bottom-4 left-1/2 -translate-x-1/2 text-sm text-muted-foreground font-light tracking-wider"
    >
      Version 2025
    </motion.div>
  )
}