import { createFileRoute } from "@tanstack/react-router";
import { ScreenView } from "@/components/ScreenView";
import * as screen from "@/screens/adminOrders";

export const Route = createFileRoute("/admin/orders")({
  head: () => ({
    meta: [
      { title: "Admin orders — Marketly" },
      { name: "description", content: "Manage orders, refunds and license keys." },
      { property: "og:title", content: "Admin orders — Marketly" },
      { property: "og:description", content: "Manage orders, refunds and license keys." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ScreenView screen={screen} />,
});
