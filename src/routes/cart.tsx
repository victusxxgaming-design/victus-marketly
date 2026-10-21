import { createFileRoute } from "@tanstack/react-router";
import { ScreenView } from "@/components/ScreenView";
import * as screen from "@/screens/cart";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Cart & checkout — Marketly" },
      { name: "description", content: "Review your cart and check out securely." },
      { property: "og:title", content: "Cart & checkout — Marketly" },
      { property: "og:description", content: "Review your cart and check out securely." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ScreenView screen={screen} />,
});
