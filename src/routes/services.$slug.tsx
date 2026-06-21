import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { serviceBySlug, services, site } from "@/lib/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = serviceBySlug(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    const title = s ? `${s.title} in Lahore — MZ IT Services` : "Service — MZ IT Services";
    const desc = s ? `${s.title}: ${s.tagline}. Professional ${s.title.toLowerCase()} services across Lahore by MZ IT Services.` : "";
    return {
      meta: [
        { title }, { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        ...(s ? [{ property: "og:image", content: s.hero }] : []),
        { property: "og:url", content: s ? `/services/${s.slug}` : "/services" },
      ],
      links: s ? [{ rel: "canonical", href: `/services/${s.slug}` }] : [],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-4 py-32 text-center">
      <h1 className="text-3xl font-bold">Service not found</h1>
      <Link to="/services" className="mt-6 inline-flex text-accent">Back to services</Link>
    </div>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const idx = services.findIndex((s) => s.slug === service.slug) + 1;

  return (
    <>
      <section className="bg-surface-elevated">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 md:py-10">
          <div className="grid lg:grid-cols-12 border border-border bg-surface">
            <div className="lg:col-span-7 p-8 md:p-14 flex flex-col justify-center">
              <Link to="/services" className="inline-flex items-center mono-label hover:text-accent">
                <ArrowLeft className="mr-1.5 h-3 w-3" /> All services
              </Link>
              <div className="mt-6 flex items-center gap-3">
                <span className="mono-label">Service · {String(idx).padStart(2, "0")} / 06</span>
                <span className="w-1.5 h-1.5 bg-accent" />
              </div>
              <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">{service.title}</h1>
              <p className="mt-4 mono-label">{service.tagline}</p>
              <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">{service.description}</p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-none bg-foreground text-background hover:bg-accent uppercase tracking-widest text-xs font-bold px-8 py-6">
                  <Link to="/contact">Get a Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-none border-border bg-transparent uppercase tracking-widest text-xs font-bold px-8 py-6">
                  <a href={site.whatsapp} target="_blank" rel="noopener"><MessageCircle className="mr-2 h-4 w-4" /> WhatsApp</a>
                </Button>
                <Button asChild variant="ghost" size="lg" className="rounded-none">
                  <a href={`tel:${site.phoneIntl}`}><Phone className="mr-2 h-4 w-4" />{site.phone}</a>
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5 relative bg-surface-elevated border-t lg:border-t-0 lg:border-l border-border min-h-[420px]">
              <img src={service.hero} alt={`${service.title} by MZ IT Services`} className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <div className="mono-label">What's included</div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">Scope of delivery.</h2>
          <p className="mt-3 text-muted-foreground max-w-xl">Every {service.title.toLowerCase()} engagement covers the essentials below — and we tailor the scope to your site.</p>
          <ul className="mt-8 border border-border divide-y divide-border bg-surface">
            {service.features.map((f: string, i: number) => (
              <li key={f} className="grid grid-cols-12 gap-4 px-5 py-4">
                <span className="col-span-2 mono-label pt-0.5">{String(i + 1).padStart(2, "0")}</span>
                <span className="col-span-1 text-accent"><Check className="h-4 w-4 mt-0.5" /></span>
                <span className="col-span-9 text-sm">{f}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-5 border border-border bg-surface p-8">
          <div className="mono-label">Why MZ</div>
          <h3 className="mt-3 text-xl font-bold tracking-tight">Why choose MZ IT Services</h3>
          <ul className="mt-6 space-y-5 text-sm">
            <li><div className="font-semibold">Local team, fast response</div><div className="text-muted-foreground mt-1">Lahore-based engineers, on-site usually within 24 hours.</div></li>
            <li><div className="font-semibold">Documented hand-over</div><div className="text-muted-foreground mt-1">Network diagrams, IP plans and patch schedules delivered with every project.</div></li>
            <li><div className="font-semibold">Clean cable management</div><div className="text-muted-foreground mt-1">Colour-coded, labelled and serviceable — see our projects page for proof.</div></li>
            <li><div className="font-semibold">Transparent pricing</div><div className="text-muted-foreground mt-1">Itemised BOQ with no hidden charges.</div></li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="border-b border-border pb-6 mb-8">
          <div className="mono-label">More services</div>
          <h2 className="mt-3 text-2xl font-bold tracking-tight">Other things we do.</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-0 border-l border-t border-border">
          {others.map((s, i) => (
            <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="-mt-px -ml-px border border-border p-6 bg-surface hover:border-foreground/60 transition-colors group">
              <div className="mono-label">0{i + 1}</div>
              <div className="mt-3 font-semibold tracking-tight">{s.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
              <ArrowRight className="mt-4 h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
