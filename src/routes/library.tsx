import { createFileRoute } from "@tanstack/react-router";
import { ScreenView } from "@/components/ScreenView";
import * as screen from "@/screens/library";

export const Route = createFileRoute("/library")({
  head: () => ({
    meta: [
      { title: "My library — Marketly" },
      { name: "description", content: "Your purchased products, downloads and licenses." },
      { property: "og:title", content: "My library — Marketly" },
      { property: "og:description", content: "Your purchased products, downloads and licenses." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ScreenView screen={screen} />,
});
