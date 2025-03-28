"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { usePathname, useRouter } from "next/navigation"

interface NavItem {
  name: string
  url: string
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)
  console.log("isMobile", isMobile)
  
  // Déterminer l'onglet actif basé sur l'URL actuelle
  const [activeTab, setActiveTab] = useState(items[0].name)
  
  // Synchroniser l'onglet actif avec le pathname actuel
  useEffect(() => {
    const currentItem = items.find(item => pathname === item.url || pathname.startsWith(item.url + "/"))
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

  const handleNavigation = (url: string, name: string) => {
    setActiveTab(name)
    router.push(url)
  }

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-8 sm:pt-14",
        className,
      )}
    >
      <div className="flex items-center gap-4 bg-gradient-to-r from-[#C7CEE8] to-[#C7CEE8] border border-border backdrop-blur-lg py-2 px-2 rounded-full shadow-lg">
        {items.map((item) => {
          const isActive = activeTab === item.name

          return (
            <div
              key={item.name}
              onClick={() => handleNavigation(item.url, item.name)}
              className={cn(
                "relative cursor-pointer text-base font-semibold px-8 py-3 rounded-full transition-colors",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-muted text-primary",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
              </span>
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
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-1.5 bg-primary rounded-t-full">
                    <div className="absolute w-14 h-7 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-10 h-7 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-5 h-5 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}