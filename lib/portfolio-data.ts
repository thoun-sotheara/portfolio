/**
 * Portfolio Configuration & Data
 * Update these constants to personalize the entire site
 */

export const PORTFOLIO = {
  // Personal Identity
  name: "Sotheara Thoun",
  role: "Full-Stack Developer",
  age: 24,
  tagline: "I design and ship high-stakes product systems with measurable performance.",
  
  // Contact
  email: "samakisolution@gmail.com",
  github: "https://github.com/thoun-sotheara",
  facebook: "https://www.facebook.com/thoun.sotheara.259744",
  resumeUrl: "/resume?download=1",
  formspreeEndpoint: "https://formspree.io/f/xvzdvkjb",
  
  // Experience & Stats
  yearsExperience: 6, // 2020-2023 (3yr company) + 2023-2026 (3yr freelance)
  projectsCompleted: 30,
  liveSaasProducts: 5,
  
  // SEO & Metadata
  siteUrl: "https://sotheara-portfolio.vercel.app",
  description: "Full-stack engineer specializing in SaaS and e-commerce platforms. 6+ years delivering performant, reliable product systems and scalable frontend architecture.",
  ogImage: "/opengraph-image",
  
  // Image Paths (replace with actual paths after uploading)
  portraitImage: "/images/portrait.png", // Upload to public/images/
  screenshotPos: "/images/screenshots/pos-dashboard.png", // Upload screenshots here
  screenshotEcom: "/images/screenshots/ecommerce-flow.png",
  screenshotDesignSystem: "/images/screenshots/design-system.png",
};

export const AVAILABILITY = {
  status: "Available for full-time and freelance projects",
  nextAvailable: "Immediately",
};

export const RESUME_DATA = {
  title: "Full-Stack Developer",
  summary:
    "Full-stack engineer with 6+ years delivering SaaS and e-commerce products in production. Strengths include frontend architecture, performance engineering, accessible UI systems, and real-time product workflows.",
  strengths: [
    "Frontend architecture and scaling with React and Next.js",
    "Performance engineering for Core Web Vitals and interaction latency",
    "Design systems with TypeScript contracts and accessibility standards",
    "Realtime dashboards, optimistic workflows, and resilient state orchestration",
  ],
  techStack: [
    "Next.js 15",
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "PostgreSQL",
    "Redis",
    "WebSockets",
    "Stripe",
    "Radix UI",
  ],
  highlights: [
    {
      title: "E-commerce Inventory Dashboard",
      period: "2024",
      impact: "+312% performance gain, 2,500+ users, 99.95% uptime.",
      body:
        "Designed a real-time stock and fulfillment platform with websocket-driven updates, conflict resolution, and fast reporting for multi-warehouse operations.",
    },
    {
      title: "E-commerce Conversion Platform",
      period: "2023",
      impact: "+42% conversion lift, 0.8s LCP, $280K monthly revenue.",
      body:
        "Built a high-performance storefront using server-driven filtering, lightweight client state, and streamlined checkout feedback around Stripe payments.",
    },
    {
      title: "Enterprise Design System",
      period: "2022",
      impact: "120+ reusable components adopted by 8 teams.",
      body:
        "Created an accessible component foundation with strict TypeScript contracts and scalable patterns that reduced UI duplication and sped up delivery.",
    },
  ],
};
