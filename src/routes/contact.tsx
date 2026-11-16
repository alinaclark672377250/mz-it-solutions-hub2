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
      <div className="max-w-2xl">
        <div className="text-xs uppercase tracking-widest text-primary">Contact</div>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold">Let's plan your project.</h1>
        <p className="mt-5 text-lg text-muted-foreground">Tell us what you need. We usually respond within 24 hours and can be on-site for a free survey across Lahore.</p>
      </div>

      <div className="mt-14 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-surface/40 p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Your name"><Input name="name" required placeholder="Ahmed Khan" /></Field>
              <Field label="Phone"><Input name="phone" required placeholder="0300 0000000" /></Field>
            </div>
            <Field label="Email"><Input name="email" type="email" required placeholder="you@company.com" /></Field>
            <Field label="Service of interest">
              <select name="service" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                <option value="General enquiry">General enquiry</option>
                {services.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
              </select>
            </Field>
            <Field label="Project details"><Textarea name="message" required rows={5} placeholder="Tell us about the site, building, number of cameras or drops, timeline…" /></Field>
            <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              <Send className="mr-2 h-4 w-4" /> Send enquiry
            </Button>
            {sent && <p className="text-sm text-primary">Opening your email app… If nothing happens, email us directly at {site.email}.</p>}
          </form>
        </div>

        <aside className="lg:col-span-5 space-y-4">
          <InfoCard icon={<Phone className="h-5 w-5" />} label="Call us" value={site.phone} href={`tel:${site.phoneIntl}`} />
          <InfoCard icon={<MessageCircle className="h-5 w-5" />} label="WhatsApp" value="Chat instantly" href={site.whatsapp} external />
          <InfoCard icon={<Mail className="h-5 w-5" />} label="Email" value={site.email} href={`mailto:${site.email}`} />
          <InfoCard icon={<MapPin className="h-5 w-5" />} label="Location" value={site.address} />
          <InfoCard icon={<Clock className="h-5 w-5" />} label="Hours" value="Mon–Sat · 9am – 8pm" />

          <div className="rounded-3xl overflow-hidden border border-border h-64">
            <iframe
              title="Lahore map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=74.20%2C31.40%2C74.45%2C31.62&layer=mapnik&marker=31.5204%2C74.3587"
              className="w-full h-full"
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
      <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

function InfoCard({ icon, label, value, href, external }: { icon: React.ReactNode; label: string; value: string; href?: string; external?: boolean }) {
  const inner = (
    <div className="flex items-start gap-3 rounded-2xl border border-border/70 bg-surface/40 p-5 hover:border-primary/60 transition">
      <div className="text-primary mt-0.5">{icon}</div>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="mt-0.5 font-medium break-all">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener" : undefined}>{inner}</a> : inner;
}
