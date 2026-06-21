import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/lib/site";
import { ServiceCard } from "@/components/site/ServiceCard";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — CCTV, Networks, Data Centers | MZ IT Services Lahore" },
      { name: "description", content: "Our full range of services: CCTV installation, network infrastructure, IT support, data center setup, computer labs and biometric access control in Lahore." },
      { property: "og:title", content: "Our Services — MZ IT Services" },
      { property: "og:description", content: "Six specialist IT infrastructure services delivered across Lahore and Punjab." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
      <div className="max-w-3xl border-b border-border pb-8">
        <div className="mono-label">Services · 06 capabilities</div>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">Everything you need to run a modern IT environment.</h1>
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          From a single CCTV camera to a full data-center build-out, we deliver end-to-end IT infrastructure with documentation, support and a finish you can be proud of.
        </p>
      </div>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-border">
        {services.map((s, i) => (
          <div key={s.slug} className="-mt-px -ml-px">
            <ServiceCard service={s} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
}
