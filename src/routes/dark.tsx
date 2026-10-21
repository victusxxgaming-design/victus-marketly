import { createFileRoute } from "@tanstack/react-router";
import { ScreenView } from "@/components/ScreenView";
import * as screen from "@/screens/darkHome";

export const Route = createFileRoute("/dark")({
  head: () => ({
    meta: [
      { title: "Home (dark) — Marketly" },
      { name: "description", content: "Marketly home in dark theme." },
      { property: "og:title", content: "Home (dark) — Marketly" },
      { property: "og:description", content: "Marketly home in dark theme." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ScreenView screen={screen} />,
});
