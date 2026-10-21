import { createFileRoute } from "@tanstack/react-router";
import { ScreenView } from "@/components/ScreenView";
import * as screen from "@/screens/adminDashboard";

export const Route = createFileRoute("/admin/")({
  head: () => ({
    meta: [
      { title: "Admin dashboard — Marketly" },
      { name: "description", content: "Marketplace analytics and operations overview." },
      { property: "og:title", content: "Admin dashboard — Marketly" },
      { property: "og:description", content: "Marketplace analytics and operations overview." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ScreenView screen={screen} />,
});
