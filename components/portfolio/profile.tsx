"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  NewTwitterIcon,
  Linkedin01Icon,
  Github01Icon,
  DribbbleIcon,
  YoutubeIcon,
  Location01Icon,
  Download04Icon,
  CheckmarkBadge01Icon,
} from "@hugeicons/core-free-icons";
import { personal, socialLinks } from "@/lib/portfolio";
import type { SocialLink } from "@/types/portfolio";

const socialIconMap: Record<string, typeof NewTwitterIcon> = {
  X: NewTwitterIcon,
  LinkedIn: Linkedin01Icon,
  GitHub: Github01Icon,
  Dribbble: DribbbleIcon,
  YouTube: YoutubeIcon,
};

export function Profile() {
  return (
    <section className="pt-24 pb-6 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        {/* Profile header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-start gap-4 mb-4"
        >
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-border"
          >
            <Image
              src={personal.profileImage}
              alt={personal.name}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex items-center gap-1.5 mb-1"
            >
              <h1 className="text-lg font-semibold">{personal.name}</h1>
              <HugeiconsIcon icon={CheckmarkBadge01Icon} size={16} className="text-blue-500" fill="currentColor" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-sm text-muted-foreground mb-2"
            >
              {personal.bio}
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex items-center gap-3 text-xs text-muted-foreground"
            >
              <span className="flex items-center gap-1">
                <HugeiconsIcon icon={Location01Icon} size={12} />
                {personal.location}
              </span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                {personal.status}
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex items-center gap-1.5 mb-4"
        >
          {socialLinks.map((link: SocialLink, index) => {
            const IconComponent = socialIconMap[link.name];
            return (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                title={link.name}
              >
                {IconComponent && <HugeiconsIcon icon={IconComponent} size={18} />}
              </motion.a>
            );
          })}
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="flex gap-3"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 py-2 px-4 rounded-lg bg-foreground text-background text-sm font-medium text-center hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </motion.a>
          <motion.a
            href={personal.resumeUrl}
            download
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="py-2 px-4 rounded-lg border border-border text-sm font-medium hover:bg-muted transition-colors flex items-center gap-2"
          >
            <HugeiconsIcon icon={Download04Icon} size={16} />
            Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
