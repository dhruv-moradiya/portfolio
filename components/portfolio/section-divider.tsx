"use client"

import { motion } from "framer-motion"

interface SectionDividerProps {
  variant?: "dots" | "line" | "fade" | "space"
}

export function SectionDivider({ variant = "dots" }: SectionDividerProps) {
  if (variant === "space") {
    return <div className="h-4" />
  }

  if (variant === "line") {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-2">
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-border to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />
      </div>
    )
  }

  if (variant === "fade") {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-3">
        <motion.div
          className="h-8 bg-gradient-to-b from-transparent via-muted/30 to-transparent rounded-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        />
      </div>
    )
  }

  // Default: dots
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-4">
      <motion.div
        className="flex items-center justify-center gap-1.5"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
        <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
        <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
      </motion.div>
    </div>
  )
}
