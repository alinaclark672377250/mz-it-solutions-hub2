import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Users, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { photos, site } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — MZ IT Services | IT Infrastructure Team in Lahore" },
      { name: "description", content: "Meet Muhammad Zubair and the MZ IT Services team — Lahore-based IT infrastructure specialists with hundreds of completed installations." },
      { property: "og:title", content: "About MZ IT Services" },
      { property: "og:description", content: "The story behind Lahore's go-to team for clean network and CCTV installations." },
      { property: "og:image", content: photos[4] },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="bg-surface-elevated">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 md:py-10">
          <div className="grid lg:grid-cols-12 border border-border bg-surface">
            <div className="lg:col-span-7 p-8 md:p-14">
              <div className="mono-label">About · MZ IT Services</div>
              <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
                A team obsessed with
                <span className="block text-muted-foreground font-normal mt-1">infrastructure done right.</span>
              </h1>
              <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                MZ IT Services was founded by <span className="text-foreground font-semibold">Muhammad Zubair</span> — an IT administration and installation specialist — to bring serious, well-documented IT infrastructure to businesses in Lahore. From small offices to multi-floor enterprises, every project gets the same standard: clean cabling, labelled patches, and a complete handover pack.
              </p>
              <div className="mt-10 grid sm:grid-cols-3 gap-0 border-l border-t border-border">
                <Stat icon={<Award className="h-4 w-4 text-accent" />} v="5+" l="Years of field experience" />
                <Stat icon={<Users className="h-4 w-4 text-accent" />} v="50+" l="Clients served" />
                <Stat icon={<MapPin className="h-4 w-4 text-accent" />} v="Lahore" l="& across Punjab" />
              </div>
            </div>
            <div className="lg:col-span-5 relative bg-surface-elevated border-t lg:border-t-0 lg:border-l border-border min-h-[420px]">
              <img src={photos[4]} alt="MZ IT Services team in Lahore" className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-3 gap-0 border-l border-t border-border">
          {[
            { t: "Our mission", d: "Make professional-grade IT infrastructure accessible and reliable for every business in Pakistan." },
            { t: "Our promise", d: "Honest scoping, clean execution, and a system you can hand to any future engineer without apology." },
            { t: "Our service area", d: "Headquartered in Lahore. We take projects across Punjab and travel for larger enterprise builds." },
          ].map((b, i) => (
            <div key={b.t} className="-mt-px -ml-px border border-border bg-surface p-8">
              <div className="mono-label">0{i + 1}</div>
              <div className="mt-3 text-lg font-semibold tracking-tight">{b.t}</div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="border border-border bg-foreground text-background p-10 md:p-14 grid md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8">
            <div className="mono-label" style={{ color: "color-mix(in oklab, white 60%, transparent)" }}>Next step</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">Ready to talk?</h2>
            <p className="mt-3 opacity-80 max-w-lg">Call {site.phone} or send us your project brief — we will come back within 24 hours.</p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Button asChild size="lg" className="rounded-none bg-accent text-accent-foreground hover:bg-accent/90 uppercase tracking-widest text-xs font-bold px-8 py-6">
              <Link to="/contact">Get in touch <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ icon, v, l }: { icon: React.ReactNode; v: string; l: string }) {
  return (
    <div className="-mt-px -ml-px border border-border bg-surface p-6">
      <div>{icon}</div>
      <div className="mt-3 text-2xl font-bold tracking-tight">{v}</div>
      <div className="text-xs text-muted-foreground mt-1">{l}</div>
    </div>
  );
}
