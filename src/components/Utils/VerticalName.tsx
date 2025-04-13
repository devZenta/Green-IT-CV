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
          "fixed left-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-5",
          className
        )}
      >
        <div className="relative h-20 flex justify-center items-center">
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: 70 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-[2px] bg-black/40 rounded-full"
          />
          <div className="absolute bottom-0 w-2.5 h-2.5 rounded-full bg-black/40" />
          <div className="absolute top-0 w-2.5 h-2.5 rounded-full bg-black/40" />
        </div>
        
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black to-black/70 blur-[2px] rounded-md -z-10 opacity-20" />
          <div className="vertical-text tracking-widest text-black font-medium text-xs px-2 py-3">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.0 }}
            >
              HUGO
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.2 }}
              className="mt-3"
            >
              GHESQUIER
            </motion.span>
          </div>
        </motion.div>
        
        <div className="relative h-20 flex justify-center items-center">
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: 70 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-[2px] bg-black/40 rounded-full"
          />
          <div className="absolute top-0 w-2.5 h-2.5 rounded-full bg-black/40" />
          <div className="absolute bottom-0 w-2.5 h-2.5 rounded-full bg-black/40" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
        className={cn(
          "fixed right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-5",
          className
        )}
      >
        <div className="relative h-20 flex justify-center items-center">
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: 70 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-[2px] bg-black/40 rounded-full"
          />
          <div className="absolute bottom-0 w-2.5 h-2.5 rounded-full bg-black/40" />
          <div className="absolute top-0 w-2.5 h-2.5 rounded-full bg-black/40" />
        </div>
        
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-l from-black to-black/70 blur-[2px] rounded-md -z-10 opacity-20" />
          <div className="vertical-text-right tracking-widest text-black font-medium text-xs px-2 py-3">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.0 }}
            >
              HUGO
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.2 }}
              className="mt-3"
            >
              GHESQUIER
            </motion.span>
          </div>
        </motion.div>
        
        <div className="relative h-20 flex justify-center items-center">
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: 70 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-[2px] bg-black/40 rounded-full"
          />
          <div className="absolute top-0 w-2.5 h-2.5 rounded-full bg-black/40" />
          <div className="absolute bottom-0 w-2.5 h-2.5 rounded-full bg-black/40" />
        </div>
      </motion.div>
    </>
  )
}