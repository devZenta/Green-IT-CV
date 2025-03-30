"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface VerticalNameProps {
  className?: string
}

export function VerticalName({ className }: VerticalNameProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={cn(
          "fixed left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4",
          className
        )}
      >
        <div className="w-px h-20 bg-border" />
        <div className="vertical-text tracking-widest text-muted-foreground font-light">
          HUGO GHESQUIER
        </div>
        <div className="w-px h-20 bg-border" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={cn(
          "fixed right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4",
          className
        )}
      >
        <div className="w-px h-20 bg-border" />
        <div className="vertical-text-right tracking-widest text-muted-foreground font-light">
          HUGO GHESQUIER
        </div>
        <div className="w-px h-20 bg-border" />
      </motion.div>
    </>
  )
}