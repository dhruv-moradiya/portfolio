"use client";

import { motion } from "framer-motion";
import { stack } from "@/lib/portfolio";

export function Stack() {
  return (
    <section id="stack" className="py-8 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">Tech Stack</h2>

          <div className="space-y-4">
            {stack.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-xs font-medium text-muted-foreground mb-2">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + techIndex * 0.03 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-2.5 py-1 text-xs font-medium rounded-md border border-border bg-muted/30 hover:bg-muted transition-colors cursor-default"
                      style={{ borderLeftColor: tech.color, borderLeftWidth: 2 }}
                    >
                      {tech.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
