import { createFileRoute } from "@tanstack/react-router";
import { photos } from "@/lib/site";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Network & CCTV Installations | MZ IT Services" },
      { name: "description", content: "A gallery of recent network rack builds, structured cabling and CCTV installations completed by MZ IT Services in Lahore." },
      { property: "og:title", content: "Our Projects — MZ IT Services" },
      { property: "og:description", content: "Real installations from the field — racks, patch panels, cable management and more." },
      { property: "og:image", content: photos[8] },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

const captions = [
  "Server rack installation",
  "Patch panel termination",
  "Switch & router commissioning",
  "Multi-rack network build",
  "Project handover team",
  "Rack-top assembly",
  "Cable management in progress",
  "Equipment mounting",
  "96-port patch panel — finished",
  "Colour-coded patching",
];

function Projects() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
      <div className="max-w-3xl border-b border-border pb-8">
        <div className="mono-label">Gallery · 10 installations</div>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">From the field.</h1>
        <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl">
          Real photos from real installations across Lahore — racks, patch panels, switches and cable management.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-border">
        {photos.map((src, i) => (
          <figure key={i} className="-mt-px -ml-px border border-border bg-surface group">
            <div className="relative overflow-hidden">
              <img src={src} alt={captions[i]} loading="lazy" className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute top-3 left-3 bg-surface/95 backdrop-blur px-2 py-1 mono-label border border-border">
                IMG_{String(i + 1).padStart(3, "0")}
              </div>
            </div>
            <figcaption className="px-5 py-4 border-t border-border flex items-center justify-between">
              <span className="text-sm font-medium">{captions[i]}</span>
              <span className="w-1.5 h-1.5 bg-accent" />
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
