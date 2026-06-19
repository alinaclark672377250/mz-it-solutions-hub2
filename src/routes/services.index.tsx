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
      <div className="max-w-3xl">
        <div className="text-xs uppercase tracking-widest text-primary">Services</div>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold">Everything you need to run a modern IT environment.</h1>
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
          From a single CCTV camera to a full data center build-out, we deliver end-to-end IT infrastructure with documentation, support and a finish you can be proud of.
        </p>
      </div>
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((s) => <ServiceCard key={s.slug} service={s} />)}
      </div>
    </section>
  );
}
