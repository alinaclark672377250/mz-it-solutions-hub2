import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, MessageCircle, ShieldCheck, Cable, Clock, MapPin, Sparkles, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services, site, photos } from "@/lib/site";
import { ServiceCard } from "@/components/site/ServiceCard";
import { BrandSlideshow } from "@/components/site/BrandSlideshow";
import promoVideo from "@/assets/promo-video.mp4.asset.json";
import promoVideo2 from "@/assets/promo-video-2.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MZ IT Services — CCTV, Network & IT Infrastructure in Lahore" },
      { name: "description", content: "Lahore-based specialists in CCTV cameras, structured cabling, data center networks, biometric access control and IT support. Trusted by businesses across Punjab." },
      { property: "og:title", content: "MZ IT Services — Enterprise IT, Built Right" },
      { property: "og:description", content: "CCTV, networks, data centers and biometric systems — installed clean, supported well." },
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
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-20 pb-24 lg:pt-28 lg:pb-32 relative">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-muted-foreground">Serving Lahore & Punjab</span>
              </div>
              <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
                Enterprise IT Infrastructure, <span className="text-gradient">Built Right.</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
                MZ IT Services designs, installs and maintains CCTV systems, structured networks, data-center racks and biometric access control for businesses, schools and institutions across Lahore.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
                  <Link to="/contact">Request a Site Survey <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-border bg-transparent hover:bg-surface">
                  <a href={site.whatsapp} target="_blank" rel="noopener"><MessageCircle className="mr-2 h-4 w-4" /> WhatsApp Us</a>
                </Button>
                <Button asChild variant="ghost" size="lg" className="hover:bg-surface">
                  <a href={`tel:${site.phoneIntl}`}><Phone className="mr-2 h-4 w-4" /> {site.phone}</a>
                </Button>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Licensed installers</div>
                <div className="flex items-center gap-2"><Cable className="h-4 w-4 text-primary" /> Cat6 / Cat6A / Fiber</div>
                <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> 24/7 support contracts</div>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <BrandSlideshow />
            </div>

          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border/60 bg-surface/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { v: "100+", l: "Racks Deployed" },
            { v: "500+", l: "Cameras Installed" },
            { v: "50+", l: "Happy Clients" },
            { v: "5+", l: "Years of Service" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-4xl font-bold text-gradient">{s.v}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-24">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-primary">What we do</div>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold">Five services. One reliable partner.</h2>
          </div>
          <Link to="/services" className="hidden sm:inline-flex items-center text-sm text-muted-foreground hover:text-primary">
            All services <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => <ServiceCard key={s.slug} service={s} />)}
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-24">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-widest text-primary">How we work</div>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold">A simple, accountable process.</h2>
          <p className="mt-4 text-muted-foreground">From a quick phone call to a fully documented hand-over — here's exactly what to expect.</p>
        </div>
        <ol className="mt-12 grid md:grid-cols-5 gap-4">
          {[
            { t: "Consult", d: "Free phone or on-site consultation to understand your goals." },
            { t: "Site Survey", d: "We map the building, count drops, and check power and cooling." },
            { t: "Design & Quote", d: "Detailed BOQ, network diagram and timeline — no surprises." },
            { t: "Install", d: "Our team handles cabling, racks, devices and clean labeling." },
            { t: "Support", d: "Documented handover plus optional AMC for ongoing care." },
          ].map((step, i) => (
            <li key={step.t} className="relative rounded-2xl border border-border/70 bg-surface/40 p-6">
              <div className="text-xs font-mono text-primary">0{i + 1}</div>
              <div className="mt-2 font-display text-lg font-semibold">{step.t}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Featured projects */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-24">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs uppercase tracking-widest text-primary">From the field</div>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold">Recent installations</h2>
          </div>
          <Link to="/projects" className="hidden sm:inline-flex items-center text-sm text-muted-foreground hover:text-primary">
            View gallery <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[photos[8], photos[1], photos[3], photos[0], photos[5], photos[7], photos[6], photos[4], photos[13], photos[14], photos[15]].map((src, i) => (
            <div key={i} className={`relative overflow-hidden rounded-xl border border-border ${i === 0 ? "row-span-2 col-span-2" : ""}`}>
              <img src={src} alt={`MZ IT Services project ${i + 1}`} loading="lazy" className="h-full w-full object-cover transition hover:scale-105 duration-500" style={{ minHeight: i === 0 ? 380 : 180 }} />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-24">
        <div className="rounded-3xl border border-border bg-surface/50 p-10 md:p-14 relative overflow-hidden">
          <Sparkles className="absolute top-6 right-6 h-6 w-6 text-primary/40" />
          <blockquote className="font-display text-2xl md:text-3xl leading-snug">
            "Zubair's team rebuilt our entire data rack and rewired three floors with proper Cat6A. Cable management is a work of art — and zero downtime during the cutover."
          </blockquote>
          <div className="mt-6 text-sm text-muted-foreground">— IT Manager, corporate office, Lahore</div>
        </div>
      </section>

      {/* Promo Videos */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-24">
        <div className="text-center mb-10">
          <div className="text-xs uppercase tracking-widest text-primary">See us in action</div>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold">Watch our work</h2>
        </div>
        <div className="rounded-3xl overflow-hidden border border-border bg-black/80 aspect-video">
          <video
            src={promoVideo.url}
            controls
            playsInline
            className="w-full h-full"
            poster={photos[1]}
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="mt-8 rounded-3xl overflow-hidden border border-border bg-black/80 aspect-video">
          <video
            src={promoVideo2.url}
            controls
            playsInline
            className="w-full h-full"
            poster={photos[11]}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-24">
        <div className="relative overflow-hidden rounded-3xl border border-border p-10 md:p-16" style={{ background: "linear-gradient(135deg, color-mix(in oklab, var(--primary) 14%, var(--surface)), var(--surface))" }}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-3xl md:text-4xl font-bold">Planning a new office, lab or data rack?</h3>
              <p className="mt-4 text-muted-foreground">Get a free site survey and detailed quote — usually within 48 hours.</p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90"><Link to="/contact">Get a Quote <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
              <Button asChild variant="outline" size="lg" className="border-border bg-transparent"><a href={`tel:${site.phoneIntl}`}><Phone className="mr-2 h-4 w-4" />{site.phone}</a></Button>
            </div>
          </div>
          <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4 text-primary" /> Based in Lahore. We travel across Punjab for larger projects.</div>
        </div>
      </section>
    </>
  );
}
