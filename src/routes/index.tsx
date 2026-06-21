import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, MessageCircle, ShieldCheck, Cable, Clock, MapPin, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services, site, photos } from "@/lib/site";
import { ServiceCard } from "@/components/site/ServiceCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MZ IT Services — CCTV, Network & IT Infrastructure in Lahore" },
      { name: "description", content: "Lahore-based specialists in CCTV cameras, structured cabling, data center networks, biometric access control and IT support. Trusted by businesses across Punjab." },
      { property: "og:title", content: "MZ IT Services — Infrastructure that works." },
      { property: "og:description", content: "CCTV, networks, data centers and biometric systems — engineered, documented and serviceable." },
      { property: "og:image", content: photos[1] },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Capabilities />
      <ServicesGrid />
      <Process />
      <FieldGallery />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <section className="bg-surface-elevated">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-border bg-surface">
          {/* Vertical metadata rail */}
          <div className="hidden lg:flex lg:col-span-1 border-r border-border flex-col items-center py-8 justify-between bg-surface-elevated">
            <span className="-rotate-90 whitespace-nowrap mono-label">Verified Infrastructure</span>
            <div className="flex flex-col gap-3">
              <div className="w-1 h-1 rounded-full bg-border" />
              <div className="w-1 h-1 rounded-full bg-border" />
              <div className="w-1 h-1 bg-accent" />
            </div>
            <span className="mono-label">v1.0</span>
          </div>

          {/* Content */}
          <div className="lg:col-span-6 p-8 md:p-14 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-2.5 h-2.5 bg-accent" />
              <span className="mono-label">Lahore, Pakistan // Engineering Group</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-[1.05] tracking-tight">
              MZ IT SERVICES
              <span className="block text-muted-foreground font-normal mt-2 text-3xl md:text-5xl">Infrastructure that works.</span>
            </h1>

            <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-lg leading-relaxed">
              Specialized engineering for data centers, network architecture and security systems. Directed by Muhammad Zubair with a focus on field-proven reliability.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {[
                { t: "Connectivity", d: "Network design & cabling." },
                { t: "Security", d: "CCTV & biometric access control." },
                { t: "Support", d: "SLA-based maintenance & on-site IT." },
                { t: "Hardware", d: "Data center racks & patch panels." },
              ].map((b) => (
                <div key={b.t} className="border-l-2 border-border pl-4 hover:border-accent transition-colors">
                  <h3 className="font-bold text-sm uppercase tracking-wider">{b.t}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{b.d}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-none bg-foreground text-background hover:bg-accent uppercase tracking-widest text-xs font-bold px-8 py-6">
                <Link to="/contact">Schedule Audit</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-none border-border bg-transparent hover:bg-surface-elevated uppercase tracking-widest text-xs font-bold px-8 py-6">
                <Link to="/projects">View Project Specs</Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="rounded-none hover:bg-surface-elevated text-sm">
                <a href={`tel:${site.phoneIntl}`}><Phone className="mr-2 h-4 w-4" />{site.phone}</a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-5 relative bg-surface-elevated border-t lg:border-t-0 lg:border-l border-border min-h-[500px]">
            <img
              src={photos[1]}
              alt="MZ IT Services network rack installation in Lahore"
              loading="eager"
              className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-foreground/5 pointer-events-none" />
            <div className="absolute bottom-8 left-0 right-0 px-8">
              <div className="bg-surface border border-border p-6 shadow-card">
                <div className="flex justify-between items-start mb-4">
                  <div className="mono-label">Deployment_Ref · 2025.04</div>
                  <span className="inline-block w-2 h-2 bg-accent mt-1.5" />
                </div>
                <p className="font-bold text-sm leading-snug">
                  Real field performance across data centers in Lahore and surrounding Punjab.
                </p>
                <div className="mt-4 grid grid-cols-3 gap-3 mono-label">
                  <div><div className="text-foreground font-bold text-base">96</div>port panel</div>
                  <div><div className="text-foreground font-bold text-base">Cat6A</div>certified</div>
                  <div><div className="text-foreground font-bold text-base">0</div>downtime</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Status strip */}
        <div className="border-x border-b border-border bg-surface px-6 py-3 flex flex-wrap items-center justify-between gap-3 mono-label">
          <span>Status · Engineering-grade deployments</span>
          <span className="hidden md:inline">Coverage · Lahore + Punjab</span>
          <span>Response · On-site within 24h</span>
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
      <div className="grid lg:grid-cols-12 gap-10 border border-border bg-surface">
        {[
          { k: "100+", l: "Racks deployed" },
          { k: "500+", l: "Cameras installed" },
          { k: "50+", l: "Active clients" },
          { k: "5+", l: "Years field experience" },
        ].map((s, i) => (
          <div key={s.l} className={`lg:col-span-3 p-8 ${i !== 0 ? "border-t lg:border-t-0 lg:border-l border-border" : ""}`}>
            <div className="mono-label">0{i + 1}</div>
            <div className="mt-3 text-4xl font-bold tracking-tight">{s.k}</div>
            <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServicesGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
      <div className="flex items-end justify-between gap-6 mb-10 border-b border-border pb-6">
        <div>
          <div className="mono-label">Capabilities</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">Six services. One reliable partner.</h2>
        </div>
        <Link to="/services" className="hidden sm:inline-flex items-center mono-label hover:text-accent">
          All services <ArrowRight className="ml-2 h-3.5 w-3.5" />
        </Link>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-border">
        {services.map((s, i) => (
          <div key={s.slug} className="-mt-px -ml-px">
            <ServiceCard service={s} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { t: "Consult", d: "Phone or on-site consultation to understand goals." },
    { t: "Survey", d: "We map the building, drops, power and cooling." },
    { t: "Design", d: "Detailed BOQ, diagram and timeline — no surprises." },
    { t: "Install", d: "Cabling, racks, devices, labelled and tested." },
    { t: "Support", d: "Documented handover + optional AMC." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
      <div className="grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-4">
          <div className="mono-label">Engagement Process</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">A simple, accountable five-step process.</h2>
          <p className="mt-4 text-muted-foreground">From a phone call to a fully documented handover — here is exactly what to expect.</p>
          <div className="mt-6 flex items-center gap-3">
            <ShieldCheck className="h-4 w-4 text-accent" />
            <span className="text-sm">Licensed installers · documented handover</span>
          </div>
          <div className="mt-2 flex items-center gap-3">
            <Cable className="h-4 w-4 text-accent" />
            <span className="text-sm">Cat6 / Cat6A / Fiber certification</span>
          </div>
          <div className="mt-2 flex items-center gap-3">
            <Clock className="h-4 w-4 text-accent" />
            <span className="text-sm">24/7 support contracts available</span>
          </div>
        </div>
        <ol className="lg:col-span-8 border border-border bg-surface divide-y divide-border">
          {steps.map((s, i) => (
            <li key={s.t} className="grid grid-cols-12 gap-4 p-6 hover:bg-surface-elevated transition-colors">
              <div className="col-span-2 mono-label pt-1">Step {String(i + 1).padStart(2, "0")}</div>
              <div className="col-span-3 font-bold tracking-tight">{s.t}</div>
              <div className="col-span-7 text-sm text-muted-foreground">{s.d}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function FieldGallery() {
  const pics = [photos[8], photos[1], photos[3], photos[0], photos[5], photos[7]];
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
      <div className="flex items-end justify-between gap-6 mb-10 border-b border-border pb-6">
        <div>
          <div className="mono-label">From the field</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">Recent installations.</h2>
        </div>
        <Link to="/projects" className="hidden sm:inline-flex items-center mono-label hover:text-accent">
          View gallery <ArrowRight className="ml-2 h-3.5 w-3.5" />
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-0 border-l border-t border-border">
        {pics.map((src, i) => (
          <figure key={i} className="-mt-px -ml-px relative border border-border bg-surface overflow-hidden group">
            <img
              src={src}
              alt={`MZ IT Services installation ${i + 1}`}
              loading="lazy"
              className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <figcaption className="absolute top-3 left-3 bg-surface/95 backdrop-blur px-2 py-1 mono-label border border-border">
              IMG_{String(i + 1).padStart(3, "0")}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
      <div className="border border-border bg-foreground text-background p-10 md:p-14 grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8">
          <div className="mono-label" style={{ color: "color-mix(in oklab, white 60%, transparent)" }}>Next step</div>
          <h3 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">Planning a new office, lab or data rack?</h3>
          <p className="mt-4 text-base opacity-80 max-w-xl">Free site survey and itemised quote — usually within 48 hours across Lahore.</p>
          <div className="mt-5 flex items-center gap-2 text-sm opacity-80">
            <MapPin className="h-4 w-4 text-accent" /> Based in Lahore · we travel across Punjab.
          </div>
        </div>
        <div className="md:col-span-4 flex flex-wrap gap-3 md:justify-end">
          <Button asChild size="lg" className="rounded-none bg-accent text-accent-foreground hover:bg-accent/90 uppercase tracking-widest text-xs font-bold px-6 py-6">
            <Link to="/contact">Get a Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-none border-white/30 bg-transparent text-background hover:bg-white/10 uppercase tracking-widest text-xs font-bold px-6 py-6">
            <a href={site.whatsapp} target="_blank" rel="noopener"><MessageCircle className="mr-2 h-4 w-4" /> WhatsApp</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
