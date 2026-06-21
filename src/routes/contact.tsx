import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { site, services } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — MZ IT Services Lahore | Request a Quote" },
      { name: "description", content: "Contact MZ IT Services for CCTV, networking, data center and IT support quotes in Lahore. Call 0303 4435797 or email us today." },
      { property: "og:title", content: "Contact MZ IT Services" },
      { property: "og:description", content: "Call, WhatsApp or email us — usually back within 24 hours." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const phone = data.get("phone");
    const service = data.get("service");
    const message = data.get("message");
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0AService: ${service}%0D%0A%0D%0A${message}`;
    window.location.href = `mailto:${site.email}?subject=Quote%20request%20from%20${encodeURIComponent(String(name))}&body=${body}`;
    setSent(true);
  }

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
      <div className="max-w-3xl border-b border-border pb-8">
        <div className="mono-label">Contact · Engineering enquiries</div>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">Let's plan your project.</h1>
        <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl">
          Tell us what you need. We usually respond within 24 hours and can be on-site for a free survey across Lahore.
        </p>
      </div>

      <div className="mt-12 grid lg:grid-cols-12 gap-0 border border-border bg-surface">
        <form onSubmit={onSubmit} className="lg:col-span-7 p-8 md:p-10 space-y-5 border-b lg:border-b-0 lg:border-r border-border">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Your name"><Input name="name" required placeholder="Ahmed Khan" className="rounded-none border-border" /></Field>
            <Field label="Phone"><Input name="phone" required placeholder="0300 0000000" className="rounded-none border-border" /></Field>
          </div>
          <Field label="Email"><Input name="email" type="email" required placeholder="you@company.com" className="rounded-none border-border" /></Field>
          <Field label="Service of interest">
            <select name="service" className="flex h-10 w-full border border-border bg-background px-3 py-2 text-sm">
              <option value="General enquiry">General enquiry</option>
              {services.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
            </select>
          </Field>
          <Field label="Project details"><Textarea name="message" required rows={5} placeholder="Tell us about the site, building, number of cameras or drops, timeline…" className="rounded-none border-border" /></Field>
          <Button type="submit" size="lg" className="w-full rounded-none bg-foreground text-background hover:bg-accent uppercase tracking-widest text-xs font-bold py-6">
            <Send className="mr-2 h-4 w-4" /> Send Enquiry
          </Button>
          {sent && <p className="text-sm text-accent">Opening your email app… If nothing happens, email us directly at {site.email}.</p>}
        </form>

        <aside className="lg:col-span-5 p-8 md:p-10 bg-surface-elevated space-y-3">
          <div className="mono-label mb-2">Direct channels</div>
          <InfoCard icon={<Phone className="h-4 w-4" />} label="Call us" value={site.phone} href={`tel:${site.phoneIntl}`} />
          <InfoCard icon={<MessageCircle className="h-4 w-4" />} label="WhatsApp" value="Chat instantly" href={site.whatsapp} external />
          <InfoCard icon={<Mail className="h-4 w-4" />} label="Email" value={site.email} href={`mailto:${site.email}`} />
          <InfoCard icon={<MapPin className="h-4 w-4" />} label="Location" value={site.address} />
          <InfoCard icon={<Clock className="h-4 w-4" />} label="Hours" value="Mon–Sat · 9am – 8pm" />

          <div className="border border-border h-56 mt-4 overflow-hidden">
            <iframe
              title="Lahore map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=74.20%2C31.40%2C74.45%2C31.62&layer=mapnik&marker=31.5204%2C74.3587"
              className="w-full h-full grayscale"
              loading="lazy"
            />
          </div>
        </aside>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mono-label">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

function InfoCard({ icon, label, value, href, external }: { icon: React.ReactNode; label: string; value: string; href?: string; external?: boolean }) {
  const inner = (
    <div className="flex items-start gap-3 border border-border bg-surface p-4 hover:border-accent transition-colors">
      <div className="text-accent mt-0.5">{icon}</div>
      <div>
        <div className="mono-label">{label}</div>
        <div className="mt-0.5 font-medium break-all text-sm">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener" : undefined}>{inner}</a> : inner;
}
