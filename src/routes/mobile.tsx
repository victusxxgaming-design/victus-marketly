import { createFileRoute } from "@tanstack/react-router";
import { ScreenView } from "@/components/ScreenView";
import * as screen from "@/screens/mobileHome";

export const Route = createFileRoute("/mobile")({
  head: () => ({
    meta: [
      { title: "Mobile home — Marketly" },
      { name: "description", content: "Marketly mobile home screen." },
      { property: "og:title", content: "Mobile home — Marketly" },
      { property: "og:description", content: "Marketly mobile home screen." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ScreenView screen={screen} />,
});
