"use client";

import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { Github01Icon, LinkSquare01Icon } from "@hugeicons/core-free-icons";
import { projects } from "@/lib/portfolio";

export function Projects() {
  return (
    <section id="projects" className="py-8 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Projects</h2>
            <span className="text-xs text-muted-foreground">{projects.length} projects</span>
          </div>

          <div className="space-y-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.01 }}
                className="p-4 rounded-lg border border-border hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm font-medium">{project.title}</h3>
                      {index === 0 && (
                        <motion.span
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                          className="px-1.5 py-0.5 text-[10px] font-medium bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded"
                        >
                          Featured
                        </motion.span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2">{project.description}</p>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-1.5 rounded text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <HugeiconsIcon icon={Github01Icon} size={16} />
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-1.5 rounded text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <HugeiconsIcon icon={LinkSquare01Icon} size={16} />
                      </motion.a>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 text-[10px] bg-muted rounded text-muted-foreground">
                      {tech}
                    </span>
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
