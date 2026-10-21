import { createFileRoute } from "@tanstack/react-router";
import { ScreenView } from "@/components/ScreenView";
import * as screen from "@/screens/home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Home — Marketly" },
      { name: "description", content: "Discover UI kits, templates, presets and code starters from independent creators." },
      { property: "og:title", content: "Home — Marketly" },
      { property: "og:description", content: "Discover UI kits, templates, presets and code starters from independent creators." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ScreenView screen={screen} />,
});
