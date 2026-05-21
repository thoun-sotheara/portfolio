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

      <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <a
          href="https://t.me/sotheara_thoun"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-sky-400/35 bg-gradient-to-r from-[#2AABEE]/80 to-[#1A88D9]/80 px-5 text-sm font-semibold text-white transition-all duration-200 hover:from-[#2AABEE] hover:to-[#1A88D9]"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M21.6 4.4L18.6 18.5C18.4 19.5 17.9 19.7 17 19.2L12.6 16L10.5 18C10.3 18.2 10.1 18.4 9.7 18.4L10 13.8L18.4 6.2C18.8 5.8 18.3 5.6 17.8 5.9L7.5 12.4L3.1 11C2.2 10.7 2.2 10.1 3.3 9.7L20.2 3.1C21 2.8 21.8 3.3 21.6 4.4Z"
              fill="currentColor"
            />
          </svg>
          <span>Telegram Chat</span>
        </a>

        <a
          href="https://wa.me/?text=Hi%20Sotheara%2C%20I%20need%20a%20website%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-emerald-400/35 bg-emerald-500/80 px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-emerald-500"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M20.5 11.8C20.5 16.5 16.7 20.3 12 20.3C10.5 20.3 9 19.9 7.8 19.1L3.5 20.3L4.8 16.2C3.9 14.8 3.5 13.4 3.5 11.8C3.5 7.1 7.3 3.3 12 3.3C16.7 3.3 20.5 7.1 20.5 11.8Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.2 9.4C9.4 8.9 9.6 8.8 9.9 8.8C10.1 8.8 10.3 8.8 10.4 9L11.3 10.3C11.5 10.6 11.5 10.8 11.3 11.1L10.9 11.6C10.7 11.8 10.7 12 10.8 12.2C11.2 12.9 11.8 13.5 12.6 13.9C12.8 14 13 14 13.2 13.8L13.7 13.4C14 13.2 14.2 13.2 14.5 13.4L15.8 14.3C16.1 14.5 16.2 14.7 16.2 14.9C16.2 15.2 16.1 15.4 15.6 15.6C15.1 15.8 14.5 15.9 13.9 15.7C12.7 15.3 11.5 14.5 10.5 13.5C9.5 12.5 8.7 11.3 8.3 10.1C8.1 9.5 8.2 8.9 8.4 8.4L9.2 9.4Z"
              fill="currentColor"
            />
          </svg>
          <span>WhatsApp Chat</span>
        </a>
      </div>
    </motion.form>
  );
}
