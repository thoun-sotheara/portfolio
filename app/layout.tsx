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
  openGraph: {
    title: "Sotheara Thoun — Full-Stack Developer",
    description:
      "6+ years building high-stakes digital infrastructure. 30+ projects. 5 live SaaS products. Specializing in real-time systems and e-commerce platforms.",
    type: "website",
    url: PORTFOLIO.siteUrl,
    images: [
      {
        url: PORTFOLIO.ogImage,
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
    images: [PORTFOLIO.ogImage.replace("opengraph", "twitter")],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-void antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
