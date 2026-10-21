import { createFileRoute } from "@tanstack/react-router";
import { ScreenView } from "@/components/ScreenView";
import * as screen from "@/screens/darkBrowse";

export const Route = createFileRoute("/dark/browse")({
  head: () => ({
    meta: [
      { title: "Browse (dark) — Marketly" },
      { name: "description", content: "Browse category in dark theme." },
      { property: "og:title", content: "Browse (dark) — Marketly" },
      { property: "og:description", content: "Browse category in dark theme." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ScreenView screen={screen} />,
});
