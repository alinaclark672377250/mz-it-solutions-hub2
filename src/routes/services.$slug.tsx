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
      <h1 className="font-display text-3xl font-bold">Service not found</h1>
      <Link to="/services" className="mt-6 inline-flex text-primary">Back to services</Link>
    </div>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 lg:py-28 grid lg:grid-cols-12 gap-10 relative">
          <div className="lg:col-span-7">
            <Link to="/services" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary"><ArrowLeft className="mr-1 h-3.5 w-3.5" /> All services</Link>
            <div className="mt-6 text-xs uppercase tracking-widest text-primary">{service.tagline}</div>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold leading-[1.05]">{service.title}</h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-2xl">{service.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90"><Link to="/contact">Get a Quote <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
              <Button asChild variant="outline" size="lg" className="border-border bg-transparent"><a href={site.whatsapp} target="_blank" rel="noopener"><MessageCircle className="mr-2 h-4 w-4" /> WhatsApp</a></Button>
              <Button asChild variant="ghost" size="lg"><a href={`tel:${site.phoneIntl}`}><Phone className="mr-2 h-4 w-4" />{site.phone}</a></Button>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border border-border glow-ring">
              <img src={service.hero} alt={`${service.title} by MZ IT Services`} className="w-full h-[420px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="font-display text-3xl font-bold">What's included</h2>
          <p className="mt-3 text-muted-foreground">Every {service.title.toLowerCase()} engagement covers the essentials below — and we'll tailor the scope to your site.</p>
          <ul className="mt-8 space-y-3">
            {service.features.map((f: string) => (
              <li key={f} className="flex items-start gap-3 rounded-xl border border-border/70 bg-surface/40 px-4 py-3.5">
                <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-border bg-surface/40 p-8">
          <h3 className="font-display text-xl font-semibold">Why choose MZ IT Services</h3>
          <ul className="mt-6 space-y-5 text-sm">
            <li><div className="font-medium">Local team, fast response</div><div className="text-muted-foreground mt-1">Lahore-based engineers, on-site usually within 24 hours.</div></li>
            <li><div className="font-medium">Documented hand-over</div><div className="text-muted-foreground mt-1">Network diagrams, IP plans and patch schedules delivered with every project.</div></li>
            <li><div className="font-medium">Clean cable management</div><div className="text-muted-foreground mt-1">Colour-coded, labelled and serviceable — see our projects page for proof.</div></li>
            <li><div className="font-medium">Transparent pricing</div><div className="text-muted-foreground mt-1">Itemised BOQ with no hidden charges.</div></li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="text-xs uppercase tracking-widest text-primary">More services</div>
        <h2 className="mt-2 font-display text-2xl font-bold">Other things we do</h2>
        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          {others.map((s) => (
            <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="rounded-2xl border border-border/70 bg-surface/40 p-6 hover:border-primary/60 transition">
              <div className="font-display font-semibold">{s.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
