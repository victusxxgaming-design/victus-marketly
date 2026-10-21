import { createFileRoute } from "@tanstack/react-router";
import { ScreenView } from "@/components/ScreenView";
import * as screen from "@/screens/search";

export const Route = createFileRoute("/search")({
  head: () => ({
    meta: [
      { title: "Search — Marketly" },
      { name: "description", content: "Instant search across the Marketly catalog." },
      { property: "og:title", content: "Search — Marketly" },
      { property: "og:description", content: "Instant search across the Marketly catalog." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ScreenView screen={screen} />,
});
