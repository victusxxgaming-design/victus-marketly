import { createFileRoute } from "@tanstack/react-router";
import { ScreenView } from "@/components/ScreenView";
import * as screen from "@/screens/studioPayouts";

export const Route = createFileRoute("/studio/payouts")({
  head: () => ({
    meta: [
      { title: "Seller payouts — Marketly" },
      { name: "description", content: "Seller payouts and Stripe Connect status." },
      { property: "og:title", content: "Seller payouts — Marketly" },
      { property: "og:description", content: "Seller payouts and Stripe Connect status." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ScreenView screen={screen} />,
});
