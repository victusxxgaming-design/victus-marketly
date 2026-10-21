import { createFileRoute } from "@tanstack/react-router";
import { ScreenView } from "@/components/ScreenView";
import * as screen from "@/screens/product";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "Product detail — Marketly" },
      { name: "description", content: "Product details, licenses, previews and reviews." },
      { property: "og:title", content: "Product detail — Marketly" },
      { property: "og:description", content: "Product details, licenses, previews and reviews." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ScreenView screen={screen} />,
});
