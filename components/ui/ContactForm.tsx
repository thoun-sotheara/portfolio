"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { PORTFOLIO } from "@/lib/portfolio-data";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const hasFormEndpoint = Boolean(PORTFOLIO.formspreeEndpoint);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");

    if (!hasFormEndpoint) {
      const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      );

      window.location.href = `mailto:${PORTFOLIO.email}?subject=${subject}&body=${body}`;
      setFormState("idle");
      setFormData({ name: "", email: "", message: "" });
      return;
    }

    try {
      const response = await fetch(PORTFOLIO.formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setFormState("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setFormState("idle"), 4000);
      } else {
        setFormState("error");
        setTimeout(() => setFormState("idle"), 3000);
      }
    } catch (err) {
      setFormState("error");
      setTimeout(() => setFormState("idle"), 3000);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
    >
      {/* Name */}
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="label-text text-ink-secondary">
          Your Name
        </label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Sotheara"
          required
          className="rounded-lg border border-white/[0.08] bg-white/[0.02] px-4 py-2.5 text-sm text-ink-primary placeholder:text-ink-tertiary transition-all duration-200 focus:border-accent/40 focus:bg-white/[0.04] focus:outline-none"
          disabled={formState === "loading"}
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="label-text text-ink-secondary">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="samakisolution@gmail.com"
          required
          className="rounded-lg border border-white/[0.08] bg-white/[0.02] px-4 py-2.5 text-sm text-ink-primary placeholder:text-ink-tertiary transition-all duration-200 focus:border-accent/40 focus:bg-white/[0.04] focus:outline-none"
          disabled={formState === "loading"}
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="label-text text-ink-secondary">
          Message
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell me about your project..."
          required
          rows={5}
          className="rounded-lg border border-white/[0.08] bg-white/[0.02] px-4 py-2.5 text-sm text-ink-primary placeholder:text-ink-tertiary transition-all duration-200 focus:border-accent/40 focus:bg-white/[0.04] focus:outline-none resize-none"
          disabled={formState === "loading"}
        />
      </div>

      {/* Status Message */}
      {formState === "success" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3"
        >
          <CheckCircle className="h-4 w-4 stroke-[2] text-emerald-400" />
          <span className="text-sm text-emerald-200">Message sent. I'll get back to you soon.</span>
        </motion.div>
      )}

      {formState === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3"
        >
          <AlertCircle className="h-4 w-4 stroke-[2] text-red-400" />
          <span className="text-sm text-red-200">Something went wrong. Try again or email directly.</span>
        </motion.div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={formState === "loading"}
        className="group relative inline-flex h-11 items-center gap-2 overflow-hidden rounded-full bg-accent px-6 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_40px_rgba(124,110,224,0.5)] disabled:opacity-60"
      >
        {formState === "loading" ? (
          <>
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <span>Send Message</span>
            <Send className="h-4 w-4 stroke-[2] transition-transform duration-300 group-hover:translate-x-1" />
          </>
        )}
      </button>

      <p className="text-xs text-ink-tertiary">
        {hasFormEndpoint ? "Or email directly: " : "Submit opens your email app for now: "}
        <a href={`mailto:${PORTFOLIO.email}`} className="text-accent hover:underline">{PORTFOLIO.email}</a>
      </p>
    </motion.form>
  );
}
