"use client";

import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  NewTwitterIcon,
  Linkedin01Icon,
  Github01Icon,
  ArrowUp01Icon,
} from "@hugeicons/core-free-icons";
import { personal, socialLinks } from "@/lib/portfolio";

const footerSocialIcons: Record<string, typeof NewTwitterIcon> = {
  X: NewTwitterIcon,
  LinkedIn: Linkedin01Icon,
  GitHub: Github01Icon,
};

export function Footer() {
  const currentYear = new Date().getFullYear();
  const footerLinks = socialLinks.filter((link) => footerSocialIcons[link.name]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-8 px-4 sm:px-6 border-t border-border"
    >
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center">
              <span className="text-background font-semibold text-xs">{personal.shortName}</span>
            </div>
            <div>
              <p className="text-sm font-medium">{personal.name}</p>
              <p className="text-xs text-muted-foreground">{personal.tagline}</p>
            </div>
          </div>

          {/* Social & Back to top */}
          <div className="flex items-center gap-2">
            {footerLinks.map((link) => {
              const IconComponent = footerSocialIcons[link.name];
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  aria-label={link.name}
                >
                  {IconComponent && <HugeiconsIcon icon={IconComponent} size={16} />}
                </motion.a>
              );
            })}
            <div className="w-px h-4 bg-border mx-1" />
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Back to top"
            >
              <HugeiconsIcon icon={ArrowUp01Icon} size={16} />
            </motion.button>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-4 border-t border-border/50">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} {personal.name}
          </p>
          <p className="text-xs text-muted-foreground">
            Built with Next.js & Tailwind
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
