"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Mail01Icon,
  Linkedin01Icon,
  NewTwitterIcon,
  SentIcon,
  CheckmarkCircle01Icon,
  AlertCircleIcon,
} from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";
import { contactLinks } from "@/lib/portfolio";

const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Name can only contain letters, spaces, hyphens and apostrophes"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(100, "Email must be less than 100 characters"),
  message: z
    .string()
    .min(1, "Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactIconMap: Record<string, typeof Mail01Icon> = {
  Email: Mail01Icon,
  LinkedIn: Linkedin01Icon,
  Twitter: NewTwitterIcon,
};

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, touchedFields },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  const messageLength = watch("message")?.length || 0;

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = (fieldName: keyof ContactFormData) =>
    cn(
      "w-full px-3 py-2 text-sm rounded-lg bg-muted/30 border outline-none transition-all",
      "focus:ring-2 focus:ring-foreground/10 focus:border-foreground/30",
      errors[fieldName]
        ? "border-red-500 focus:ring-red-500/20 focus:border-red-500"
        : touchedFields[fieldName] && !errors[fieldName]
        ? "border-green-500/50"
        : "border-border"
    );

  return (
    <section id="contact" className="py-8 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Contact</h2>
          <p className="text-lg font-semibold mb-6">Let&apos;s work together</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact links */}
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground mb-4">
                Have a project in mind? Reach out through any of these channels.
              </p>
              {contactLinks.map((link, index) => {
                const isExternal = link.href.startsWith("http");
                const IconComponent = contactIconMap[link.name];
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                  >
                    {IconComponent && (
                      <HugeiconsIcon icon={IconComponent} size={18} className="text-muted-foreground" />
                    )}
                    <div>
                      <p className="text-[10px] text-muted-foreground">{link.name}</p>
                      <p className="text-sm font-medium">{link.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="p-4 rounded-lg border border-border"
            >
              <h3 className="text-sm font-medium mb-4">Send a Message</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                {/* Name field */}
                <div>
                  <input
                    type="text"
                    {...register("name")}
                    placeholder="Your name"
                    className={inputClasses("name")}
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  <AnimatePresence mode="wait">
                    {errors.name && (
                      <motion.p
                        id="name-error"
                        initial={{ opacity: 0, y: -5, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto" }}
                        exit={{ opacity: 0, y: -5, height: 0 }}
                        className="mt-1 text-xs text-red-500 flex items-center gap-1"
                      >
                        <HugeiconsIcon icon={AlertCircleIcon} size={12} />
                        {errors.name.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Email field */}
                <div>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="your@email.com"
                    className={inputClasses("email")}
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  <AnimatePresence mode="wait">
                    {errors.email && (
                      <motion.p
                        id="email-error"
                        initial={{ opacity: 0, y: -5, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto" }}
                        exit={{ opacity: 0, y: -5, height: 0 }}
                        className="mt-1 text-xs text-red-500 flex items-center gap-1"
                      >
                        <HugeiconsIcon icon={AlertCircleIcon} size={12} />
                        {errors.email.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Message field */}
                <div>
                  <textarea
                    rows={3}
                    {...register("message")}
                    placeholder="Your message..."
                    className={cn(inputClasses("message"), "resize-none")}
                    aria-invalid={errors.message ? "true" : "false"}
                    aria-describedby={errors.message ? "message-error" : "message-hint"}
                  />
                  <div className="flex items-center justify-between mt-1">
                    <AnimatePresence mode="wait">
                      {errors.message ? (
                        <motion.p
                          id="message-error"
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="text-xs text-red-500 flex items-center gap-1"
                        >
                          <HugeiconsIcon icon={AlertCircleIcon} size={12} />
                          {errors.message.message}
                        </motion.p>
                      ) : (
                        <span id="message-hint" className="text-[10px] text-muted-foreground">
                          Min 10 characters
                        </span>
                      )}
                    </AnimatePresence>
                    <span
                      className={cn(
                        "text-[10px] transition-colors",
                        messageLength > 1000
                          ? "text-red-500"
                          : messageLength > 900
                          ? "text-amber-500"
                          : "text-muted-foreground"
                      )}
                    >
                      {messageLength}/1000
                    </span>
                  </div>
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-2 px-4 rounded-lg bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center gap-2"
                    >
                      <motion.span
                        className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Sending...
                    </motion.span>
                  ) : (
                    <>
                      Send Message
                      <HugeiconsIcon icon={SentIcon} size={14} />
                    </>
                  )}
                </motion.button>

                {/* Status messages */}
                <AnimatePresence mode="wait">
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 p-2 rounded-lg bg-green-500/10 text-green-600 dark:text-green-400 text-xs"
                    >
                      <HugeiconsIcon icon={CheckmarkCircle01Icon} size={14} />
                      Thanks! I&apos;ll get back to you soon.
                    </motion.div>
                  )}
                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 p-2 rounded-lg bg-red-500/10 text-red-500 text-xs"
                    >
                      <HugeiconsIcon icon={AlertCircleIcon} size={14} />
                      Something went wrong. Please try again.
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
