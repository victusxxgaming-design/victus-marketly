import { createFileRoute } from "@tanstack/react-router";
import { ScreenView } from "@/components/ScreenView";
import * as screen from "@/screens/adminProducts";

export const Route = createFileRoute("/admin/products")({
  head: () => ({
    meta: [
      { title: "Admin products — Marketly" },
      { name: "description", content: "Manage the product catalog." },
      { property: "og:title", content: "Admin products — Marketly" },
      { property: "og:description", content: "Manage the product catalog." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ScreenView screen={screen} />,
});
