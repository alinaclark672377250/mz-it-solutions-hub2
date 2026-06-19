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
  "Finished patch panel — 96 ports",
  "Colour-coded patching",
];

function Projects() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
      <div className="max-w-2xl">
        <div className="text-xs uppercase tracking-widest text-primary">Gallery</div>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold">From the field.</h1>
        <p className="mt-5 text-lg text-muted-foreground">Real photos from real installations across Lahore — racks, patch panels, switches and cable management.</p>
      </div>
      <div className="mt-12 columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {photos.map((src, i) => (
          <figure key={i} className="break-inside-avoid rounded-2xl overflow-hidden border border-border bg-surface/40 group">
            <img src={src} alt={captions[i]} loading="lazy" className="w-full h-auto group-hover:scale-[1.02] transition duration-500" />
            <figcaption className="px-4 py-3 text-sm text-muted-foreground">{captions[i]}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
