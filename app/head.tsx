import { PORTFOLIO } from "@/lib/portfolio-data";

export default function Head() {
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
    publisher: {
      "@type": "Person",
      name: "Sotheara Thoun",
      url: PORTFOLIO.siteUrl,
    },
  };

  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [personSchema, websiteSchema],
  };

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
      />
    </>
  );
}
