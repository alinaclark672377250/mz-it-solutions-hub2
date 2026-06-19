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
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="text-xs uppercase tracking-widest text-primary">About us</div>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold leading-tight">A team obsessed with infrastructure done right.</h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            MZ IT Services was founded by <span className="text-foreground font-medium">Muhammad Zubair</span> — an IT administration and installation specialist — to bring serious, well-documented IT infrastructure to businesses in Lahore. From small offices to multi-floor enterprises, every project gets the same standard of work: clean cabling, labelled patches, and a complete handover pack.
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            <Stat icon={<Award className="h-5 w-5 text-primary" />} v="5+" l="Years of field experience" />
            <Stat icon={<Users className="h-5 w-5 text-primary" />} v="50+" l="Clients served" />
            <Stat icon={<MapPin className="h-5 w-5 text-primary" />} v="Lahore" l="& across Punjab" />
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="rounded-3xl overflow-hidden border border-border glow-ring">
            <img src={photos[4]} alt="MZ IT Services team in Lahore" className="w-full h-[480px] object-cover" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 grid md:grid-cols-3 gap-6">
        {[
          { t: "Our mission", d: "Make professional-grade IT infrastructure accessible and reliable for every business in Pakistan." },
          { t: "Our promise", d: "Honest scoping, clean execution, and a system you can hand to any future engineer without apology." },
          { t: "Our service area", d: "Headquartered in Lahore. We take on projects across Punjab and travel for larger enterprise builds." },
        ].map((b) => (
          <div key={b.t} className="rounded-2xl border border-border/70 bg-surface/40 p-7">
            <div className="font-display text-lg font-semibold">{b.t}</div>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{b.d}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="rounded-3xl border border-border p-10 md:p-14" style={{ background: "linear-gradient(135deg, color-mix(in oklab, var(--primary) 12%, var(--surface)), var(--surface))" }}>
          <h2 className="font-display text-3xl font-bold">Ready to talk?</h2>
          <p className="mt-3 text-muted-foreground max-w-xl">Call {site.phone} or send us your project brief — we'll come back within 24 hours.</p>
          <Button asChild size="lg" className="mt-6 bg-primary text-primary-foreground"><Link to="/contact">Get in touch <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
        </div>
      </section>
    </>
  );
}

function Stat({ icon, v, l }: { icon: React.ReactNode; v: string; l: string }) {
  return (
    <div className="rounded-2xl border border-border/70 bg-surface/40 p-5">
      <div>{icon}</div>
      <div className="mt-3 font-display text-2xl font-bold">{v}</div>
      <div className="text-xs text-muted-foreground">{l}</div>
    </div>
  );
}
