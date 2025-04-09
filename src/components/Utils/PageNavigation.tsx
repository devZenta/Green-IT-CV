"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"

const pageOrder = [
  { path: "/", label: "Home" },
  { path: "/education", label: "Education" },
  { path: "/skills", label: "Skills" },
  { path: "/projects", label: "Projects" },
  { path: "/experience", label: "Experience" }
]

export function PageNavigation() {
  const pathname = usePathname()
  
  const currentIndex = pageOrder.findIndex(page => page.path === pathname)
  
  const prevPage = currentIndex > 0 ? pageOrder[currentIndex - 1] : null
  const nextPage = currentIndex < pageOrder.length - 1 ? pageOrder[currentIndex + 1] : null

  return (
    <>
      {prevPage && (
        <motion.div
          className="fixed left-10 sm:left-16 bottom-24 z-40 group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <Link href={prevPage.path} className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-primary" />
            </motion.div>
            <span className="text-sm font-medium text-foreground/70 group-hover:text-primary transition-colors relative">
              {prevPage.label}
              <span className="absolute inset-x-0 bottom-0 h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </span>
          </Link>
        </motion.div>
      )}

      {/* Bouton suivant */}
      {nextPage && (
        <motion.div
          className="fixed right-10 sm:right-16 bottom-24 z-40 group"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <Link href={nextPage.path} className="flex items-center gap-2 group">
            <span className="text-sm font-medium text-foreground/70 group-hover:text-primary transition-colors relative">
              {nextPage.label}
              <span className="absolute inset-x-0 bottom-0 h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-300" />
            </span>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              <ArrowRight className="w-5 h-5 text-primary" />
            </motion.div>
          </Link>
        </motion.div>
      )}
    </>
  )
}