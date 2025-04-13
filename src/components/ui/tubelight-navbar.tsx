"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState("")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const currentItem = items.find(item => item.url === pathname)
    if (currentItem) {
      setActiveTab(currentItem.name)
    }
  }, [pathname, items])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <motion.div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-24 pointer-events-none",
        className,
      )}
      initial={{ opacity: 0, y: isMobile ? 50 : -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 20
      }}
    >
      <motion.div 
        className="flex items-center gap-4 bg-background/5 border border-border backdrop-blur-lg py-3 px-4 rounded-full shadow-lg pointer-events-auto w-fit mx-auto"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ 
          duration: 0.4, 
          delay: 0.8,
          type: "spring",
          stiffness: 300
        }}
      >
        {items.map((item, index) => {
          const isActive = activeTab === item.name

          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.9 + (index * 0.1)
              }}
            >
              <Link
                href={item.url}
                onClick={() => setActiveTab(item.name)}
                className={cn(
                  "relative cursor-pointer text-base font-semibold px-8 py-3 rounded-full transition-colors",
                  "text-foreground/80 hover:text-primary",
                  isActive && "bg-muted text-primary",
                )}
              >
                <span className="hidden md:inline">{item.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-1.5 bg-primary rounded-t-full">
                      <div className="absolute w-14 h-7 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-10 h-7 bg-primary/20 rounded-full blur-md -top-1" />
                      <div className="absolute w-5 h-5 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </Link>
            </motion.div>
          )
        })}
      </motion.div>
    </motion.div>
  )
}