import { createFileRoute } from "@tanstack/react-router";
import { ScreenView } from "@/components/ScreenView";
import * as screen from "@/screens/darkProduct";

export const Route = createFileRoute("/dark/product")({
  head: () => ({
    meta: [
      { title: "Product (dark) — Marketly" },
      { name: "description", content: "Product detail in dark theme." },
      { property: "og:title", content: "Product (dark) — Marketly" },
      { property: "og:description", content: "Product detail in dark theme." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ScreenView screen={screen} />,
});
