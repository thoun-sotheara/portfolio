import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sotheara Portfolio",
    short_name: "Sotheara",
    description:
      "Full-stack engineer specializing in SaaS and e-commerce systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    lang: "en-US",
    orientation: "portrait",
  };
}
