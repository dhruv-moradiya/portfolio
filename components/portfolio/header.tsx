"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Sun01Icon, Moon01Icon, CheckmarkBadge01Icon } from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";
import { personal } from "@/lib/portfolio";

export function Header() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    queueMicrotask(() => setMounted(true));
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors",
        scrolled ? "bg-background/95 backdrop-blur border-b border-border" : "bg-transparent"
      )}
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center">
              <span className="text-background font-semibold text-xs">{personal.initials}</span>
            </div>
            <span className="hidden sm:flex items-center gap-1 text-sm font-medium">
              {personal.name}
              <HugeiconsIcon icon={CheckmarkBadge01Icon} size={14} className="text-blue-500" fill="currentColor" />
            </span>
          </a>

          {/* Nav */}
          <div className="flex items-center gap-1">
            <nav className="hidden md:flex items-center gap-1 mr-2">
              {[
                { href: "#about", label: "About" },
                { href: "#projects", label: "Work" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {mounted && (
                <HugeiconsIcon
                  icon={theme === "dark" ? Sun01Icon : Moon01Icon}
                  size={18}
                />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
