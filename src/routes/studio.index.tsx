import { createFileRoute } from "@tanstack/react-router";
import { ScreenView } from "@/components/ScreenView";
import * as screen from "@/screens/studio";

export const Route = createFileRoute("/studio/")({
  head: () => ({
    meta: [
      { title: "Creator studio — Marketly" },
      { name: "description", content: "Creator studio performance dashboard." },
      { property: "og:title", content: "Creator studio — Marketly" },
      { property: "og:description", content: "Creator studio performance dashboard." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ScreenView screen={screen} />,
});
