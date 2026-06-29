import { createFileRoute } from "@tanstack/react-router";

import { Home2026 } from "@/components/home2026/Home2026";

import logoImg from "@/assets/asyas-logo-transparent.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Asya's Gourmet | Turkish Restaurant in Jeddah" },
      {
        name: "description",
        content:
          "Asya's Gourmet serves Turkish breakfast, pide, gozleme, grills, desserts, coffee, tea, and fresh drinks in Jeddah.",
      },
      { property: "og:title", content: "Asya's Gourmet | Turkish Restaurant in Jeddah" },
      {
        property: "og:description",
        content: "Turkish breakfast, bakery, grills, sweets, coffee, and tea from Asya's Gourmet.",
      },
      { property: "og:image", content: logoImg },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return <Home2026 />;
}
