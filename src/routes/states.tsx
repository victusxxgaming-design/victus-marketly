import { createFileRoute } from "@tanstack/react-router";
import { ScreenView } from "@/components/ScreenView";
import * as screen from "@/screens/states";

export const Route = createFileRoute("/states")({
  head: () => ({
    meta: [
      { title: "System states — Marketly" },
      { name: "description", content: "Loading, empty and error states." },
      { property: "og:title", content: "System states — Marketly" },
      { property: "og:description", content: "Loading, empty and error states." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ScreenView screen={screen} />,
});
