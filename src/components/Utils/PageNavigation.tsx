"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Définition de l'ordre des pages pour la navigation
const pageOrder = [
  { path: "/", label: "Home" },
  { path: "/education", label: "Education" },
  { path: "/skills", label: "Skills" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" }
]

export function PageNavigation() {
  const pathname = usePathname()
  
  // Trouver l'index de la page actuelle
  const currentIndex = pageOrder.findIndex(page => page.path === pathname)
  
  // Déterminer les pages précédente et suivante
  const prevPage = currentIndex > 0 ? pageOrder[currentIndex - 1] : null
  const nextPage = currentIndex < pageOrder.length - 1 ? pageOrder[currentIndex + 1] : null

  const buttonVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
    hover: { scale: 1.1, backgroundColor: "rgba(0, 0, 0, 0.9)" }
  }

  return (
    <>
      {/* Bouton précédent */}
      {prevPage && (
        <motion.div
          className="fixed left-6 bottom-20 z-40"
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <motion.div
            whileHover="hover"
            variants={buttonVariants}
          >
            <Link href={prevPage.path}>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black/70 backdrop-blur-md border-t border-white/10 shadow-lg cursor-pointer">
                <ChevronLeft className="w-5 h-5 text-white" />
                <span className="sr-only">Go to {prevPage.label}</span>
              </div>
            </Link>
          </motion.div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-primary/70 whitespace-nowrap">
            {prevPage.label}
          </div>
        </motion.div>
      )}

      {/* Bouton suivant */}
      {nextPage && (
        <motion.div
          className="fixed right-6 bottom-20 z-40"
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <motion.div
            whileHover="hover"
            variants={buttonVariants}
          >
            <Link href={nextPage.path}>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black/70 backdrop-blur-md border-t border-white/10 shadow-lg cursor-pointer">
                <ChevronRight className="w-5 h-5 text-white" />
                <span className="sr-only">Go to {nextPage.label}</span>
              </div>
            </Link>
          </motion.div>
          <div className="absolute -bottom-6 right-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-primary/70 whitespace-nowrap">
            {nextPage.label}
          </div>
        </motion.div>
      )}
    </>
  )
}