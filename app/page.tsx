
"use client";

import { useEffect, useState } from "react";
import { CinematicBackground } from "@/components/ui/CinematicBackground";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { BusinessMetrics } from "@/components/sections/BusinessMetrics";
import { Lab } from "@/components/sections/Lab";
import { TechStack } from "@/components/sections/TechStack";
import { Process } from "@/components/sections/Process";
import { ContactForm } from "@/components/ui/ContactForm";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { PORTFOLIO } from "@/lib/portfolio-data";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sotheara Thoun",
  alternateName: "Thoun Sotheara",
  jobTitle: "Full-Stack Developer",
  url: PORTFOLIO.siteUrl,
  image: `${PORTFOLIO.siteUrl}${PORTFOLIO.ogImage}`,
  email: `mailto:${PORTFOLIO.email}`,
  sameAs: [PORTFOLIO.github, PORTFOLIO.facebook],
  description: PORTFOLIO.description,
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "SaaS Architecture",
    "E-commerce Systems",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Sotheara Portfolio",
  url: PORTFOLIO.siteUrl,
  inLanguage: "en-US",
  description: PORTFOLIO.description,
};

// ─── Nav ──────────────────────────────────────────────────────────────────────

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/[0.08] bg-void/78 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12"
        style={{
          maskImage:
            "linear-gradient(to bottom, black 60%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 60%, transparent 100%)",
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 no-underline"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 ring-1 ring-accent/20 transition-all duration-300 group-hover:bg-accent/20 group-hover:ring-accent/40">
            <span className="text-sm font-bold text-accent">ST</span>
          </div>
          <span className="text-sm font-semibold text-ink-primary">
            Sotheara
          </span>
        </a>

        {/* Links */}
        <nav className="hidden items-center gap-1 sm:flex">
          {[
            ["About", "#about"],
            ["Services", "#services"],
            ["Work", "#work"],
            ["Lab", "#lab"],
            ["Stack", "#stack"],
            ["Process", "#process"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="rounded-full px-4 py-1.5 text-sm text-ink-secondary transition-all duration-200 hover:bg-white/[0.05] hover:text-ink-primary"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="inline-flex h-9 items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.04] px-5 text-sm font-medium text-ink-secondary transition-all duration-200 hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
        >
          Free Consult
        </a>
      </div>
    </header>
  );
}

// ─── Footer / Contact ─────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer
      id="contact"
      className="relative mx-auto max-w-7xl border-t border-white/[0.05] px-6 py-28 lg:px-12 lg:py-40"
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 flex flex-col gap-3"
      >
        <div className="flex items-center gap-4">
          <span className="label-text text-ink-tertiary">Get in Touch</span>
          <div className="h-px flex-1 bg-gradient-to-r from-white/[0.08] to-transparent" />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        {/* Left: Message */}
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-semibold tracking-tight text-ink-primary lg:text-5xl">
            Ready to scale your business online?
          </h2>
          <p className="max-w-md text-base leading-relaxed text-ink-secondary">
            I help real estate, cafes, restaurants, and local businesses launch
            fast websites that convert visitors into customers.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {[
              "Free discovery call",
              "Clear timeline",
              "Mobile-first delivery",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/[0.1] bg-white/[0.03] px-3 py-1 text-xs text-ink-tertiary"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6"
        >
          <div className="rounded-2xl border border-sky-400/30 bg-gradient-to-r from-sky-500/30 to-blue-600/30 p-4">
            <p className="label-text text-sky-100">
              Need a fast response? Let&apos;s talk directly on Telegram.
            </p>
            <a
              href="https://t.me/sotheara_thoun"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex h-11 items-center gap-2 rounded-full bg-sky-500 px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-sky-400"
            >
              <span aria-hidden="true">✈</span>
              <span>💬 Chat Instantly on Telegram</span>
            </a>
            <p className="mt-2 text-xs text-sky-100/90">
              Fastest support channel for project quotes and urgent fixes.
            </p>
          </div>
          <ContactForm />
        </motion.div>
      </div>

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="mt-16 flex flex-col gap-6 border-t border-white/[0.05] pt-16"
      >
        <div className="flex flex-col gap-2">
          <span className="label-text text-ink-tertiary">Find me elsewhere</span>
          <div className="flex flex-wrap gap-3">
            {[
              { name: "GitHub", url: "https://github.com/thoun-sotheara" },
              { name: "Facebook", url: "https://www.facebook.com/thoun.sotheara.259744" },
            ].map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/[0.08] px-4 py-2 text-sm text-ink-tertiary transition-colors duration-200 hover:border-accent/40 hover:text-accent"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="mt-12 flex flex-col items-start gap-2 border-t border-white/[0.05] pt-8 sm:flex-row sm:items-center sm:justify-between">
        <span className="label-text text-ink-tertiary">
          © {new Date().getFullYear()} Sotheara Thoun — Built with Next.js 15, Tailwind CSS &
          Framer Motion
        </span>
        <span className="label-text text-ink-tertiary">
          Designed & developed by Sotheara · Updated Apr 23, 2026
        </span>
      </div>
    </footer>
  );
}

function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollBottom = window.scrollY + window.innerHeight;
      const threshold = document.documentElement.scrollHeight - 280;
      setShow(scrollBottom >= threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-[70] inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.12] bg-void/80 text-ink-primary backdrop-blur-md transition-all duration-300 hover:border-accent/60 hover:bg-accent/20 hover:text-accent"
    >
      <ArrowUp className="h-4 w-4 stroke-[2.2]" />
    </button>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <CinematicBackground>
        <Nav />
        <main>
          <Hero />
          <About />
          <Services />
          <FeaturedWork />
          <BusinessMetrics />
          <Lab />
          <TechStack />
          <Process />
        </main>
        <Footer />
        <ScrollToTopButton />
      </CinematicBackground>
    </>
  );
}
