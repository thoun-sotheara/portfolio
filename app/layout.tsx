import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PORTFOLIO } from "@/lib/portfolio-data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sotheara Thoun — Full-Stack Developer & Problem Solver",
  description: PORTFOLIO.description,
  applicationName: "Sotheara Portfolio",
  category: "technology",
  authors: [{ name: "Sotheara Thoun", url: PORTFOLIO.siteUrl }],
  creator: "Sotheara Thoun",
  publisher: "Sotheara Thoun",
  alternates: {
    canonical: PORTFOLIO.siteUrl,
  },
  keywords: [
    "Sotheara Thoun",
    "Full-stack Developer",
    "SaaS Developer",
    "E-commerce",
    "Next.js",
    "React",
    "Cambodia Developer",
  ],
  metadataBase: new URL(PORTFOLIO.siteUrl),
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Sotheara Thoun — Full-Stack Developer",
    description:
      "6+ years building high-stakes digital infrastructure. 30+ projects. 5 live SaaS products. Specializing in real-time systems and e-commerce platforms.",
    type: "website",
    siteName: "Sotheara Portfolio",
    locale: "en_US",
    url: PORTFOLIO.siteUrl,
    images: [
      {
        url: PORTFOLIO.ogImage,
        secureUrl: `${PORTFOLIO.siteUrl}${PORTFOLIO.ogImage}`,
        type: "image/png",
        width: 1200,
        height: 630,
        alt: "Sotheara Thoun — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sotheara Thoun — Full-Stack Developer",
    description: "6+ years, 30+ projects, 5 live SaaS products",
    images: [PORTFOLIO.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
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

  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-void antialiased`}
      >
        <script
          type="application/ld+json"
          // Structured data improves rich search understanding for profile pages.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
