import { createFileRoute } from "@tanstack/react-router";
import { ScreenView } from "@/components/ScreenView";
import * as screen from "@/screens/browse";

export const Route = createFileRoute("/browse")({
  head: () => ({
    meta: [
      { title: "Browse category — Marketly" },
      { name: "description", content: "Browse digital products by category with filters and sorting." },
      { property: "og:title", content: "Browse category — Marketly" },
      { property: "og:description", content: "Browse digital products by category with filters and sorting." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ScreenView screen={screen} />,
});
