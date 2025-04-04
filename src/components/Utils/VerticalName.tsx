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
        transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
        className={cn(
          "fixed left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6",
          className
        )}
      >
        <div className="w-px h-24 bg-primary/20">
          <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm -top-1 -left-1.5" />
        </div>
        <div className="vertical-text tracking-widest text-primary/60 font-light text-xs">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            HUGO
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="mt-2"
          >
            GHESQUIER
          </motion.span>
        </div>
        <div className="w-px h-24 bg-primary/20">
          <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm -bottom-1 -left-1.5" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
        className={cn(
          "fixed right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6",
          className
        )}
      >
        <div className="w-px h-24 bg-primary/20">
          <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm -top-1 -left-1.5" />
        </div>
        <div className="vertical-text-right tracking-widest text-primary/60 font-light text-xs">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            HUGO
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="mt-2"
          >
            GHESQUIER
          </motion.span>
        </div>
        <div className="w-px h-24 bg-primary/20">
          <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm -bottom-1 -left-1.5" />
        </div>
      </motion.div>
    </>
  )
}