"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type TimelineItem = {
  id: string
  date: string
  title: string
  description: string
}

type HorizontalTimelineProps = {
  items: TimelineItem[]
  className?: string
}

export function HorizontalTimeline({ items, className }: HorizontalTimelineProps) {
  const [activeItem, setActiveItem] = useState(items[0].id)

  return (
    <div className={cn("w-full overflow-hidden py-10", className)}>
      {/* Timeline track - simple line */}
      <div className="relative mb-16">
        {/* Simple track line */}
        <div className="absolute top-1/2 h-0.5 w-full -translate-y-1/2 bg-primary/20" />

        <div className="relative flex justify-between px-4 md:px-12">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className="relative z-10 flex flex-col items-center"
            >
              {/* Simple date marker instead of circle */}
              <div className={cn(
                "transition-colors duration-200 py-2 px-3 rounded",
                activeItem === item.id 
                  ? "bg-primary/10 text-primary" 
                  : "text-foreground/70 hover:text-foreground"
              )}>
                <span className="font-medium">{item.date}</span>
              </div>
              
              {/* Simple indicator line */}
              {activeItem === item.id && (
                <div className="w-0.5 h-4 bg-primary mt-2"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content - clean and simple */}
      <div className="px-4">
        <div className="bg-gradient-to-r from-[#C7CEE8]/20 to-[#C7CEE8]/10 border border-border p-6 rounded-lg">
          {items.map((item) => (
            activeItem === item.id && (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                <div className="h-px w-full bg-border my-3"></div>
                <p className="text-foreground/80 whitespace-pre-line">{item.description}</p>
              </motion.div>
            )
          ))}
        </div>
      </div>
    </div>
  )
}