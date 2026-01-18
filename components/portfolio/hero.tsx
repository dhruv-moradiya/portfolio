"use client"

import { motion } from "framer-motion"

export function Hero() {
  const letters = "DM".split("")

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />

      {/* Animated DM */}
      <div className="relative z-10 flex items-center justify-center">
        <motion.div
          className="flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              className="font-mono text-[20vw] md:text-[25vw] font-bold tracking-tighter leading-none"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.6, -0.05, 0.01, 0.99],
              }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2"
            animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
