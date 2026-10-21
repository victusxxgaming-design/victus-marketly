import { createFileRoute } from "@tanstack/react-router";
import { ScreenView } from "@/components/ScreenView";
import * as screen from "@/screens/studioSubmit";

export const Route = createFileRoute("/studio/submit")({
  head: () => ({
    meta: [
      { title: "Submit product — Marketly" },
      { name: "description", content: "Submit a new product step by step." },
      { property: "og:title", content: "Submit product — Marketly" },
      { property: "og:description", content: "Submit a new product step by step." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ScreenView screen={screen} />,
});
