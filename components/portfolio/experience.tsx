"use client";

import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { Building06Icon, Calendar01Icon } from "@hugeicons/core-free-icons";
import { experience } from "@/lib/portfolio";

export function Experience() {
  return (
    <section id="experience" className="py-8 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">Experience</h2>

          <div className="space-y-4">
            {experience.map((exp, index) => (
              <motion.div
                key={`${exp.title}-${exp.company}`}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="pb-4 border-b border-border last:border-0 last:pb-0"
              >
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-sm font-medium">{exp.title}</h3>
                  {index === 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="px-1.5 py-0.5 text-[10px] font-medium bg-green-500/10 text-green-600 dark:text-green-400 rounded"
                    >
                      Current
                    </motion.span>
                  )}
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                  <span className="flex items-center gap-1">
                    <HugeiconsIcon icon={Building06Icon} size={12} />
                    {exp.company}
                  </span>
                  <span className="flex items-center gap-1">
                    <HugeiconsIcon icon={Calendar01Icon} size={12} />
                    {exp.period}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mb-2">{exp.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
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
