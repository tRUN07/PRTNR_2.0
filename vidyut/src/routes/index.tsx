import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Operational Excellence — Scalable, Audit-Ready Infrastructure" },
      {
        name: "description",
        content:
          "Turning operational complexity into scalable, audit-ready infrastructure for founders scaling, restructuring, or professionalising their operations.",
      },
    ],
  }),
});

function Index() {
  // The real site is pure HTML/CSS at /site/index.html (in /public).
  // It's previewed here via an iframe so the Lovable preview renders it as-is.
  return (
    <iframe
      src="/site/index.html"
      title="Static site preview"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        border: "0",
      }}
    />
  );
}
