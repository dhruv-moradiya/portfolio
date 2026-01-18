"use client";

import { personal } from "@/lib/portfolio";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-8 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
            About
          </h2>
          <p className="text-sm text-foreground/90 leading-relaxed mb-4">
            {personal.aboutBio}
          </p>
          {/* <motion.a
            href={personal.buyMeCoffeeUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 3 }}
            className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <HugeiconsIcon icon={Coffee01Icon} size={14} />
            Buy me a coffee
          </motion.a> */}
        </motion.div>
      </div>
    </section>
  );
}
