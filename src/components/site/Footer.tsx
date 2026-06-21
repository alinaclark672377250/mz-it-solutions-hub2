import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { services, site } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-surface-elevated">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <Logo />
            <span className="font-bold tracking-tight">MZ IT Services</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-sm">
            Field-proven IT infrastructure for offices, schools and institutions across Lahore. Engineered by Muhammad Zubair.
          </p>
          <div className="mt-6 mono-label">Est. Lahore · Punjab · PK</div>
        </div>

        <div className="md:col-span-3">
          <h4 className="mono-label">Services</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="text-foreground/80 hover:text-accent transition-colors">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="mono-label">Company</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="text-foreground/80 hover:text-accent">About</Link></li>
            <li><Link to="/projects" className="text-foreground/80 hover:text-accent">Projects</Link></li>
            <li><Link to="/contact" className="text-foreground/80 hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="mono-label">Reach Us</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-accent" /><a href={`tel:${site.phoneIntl}`} className="hover:text-accent">{site.phone}</a></li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-accent" /><a href={`mailto:${site.email}`} className="hover:text-accent break-all">{site.email}</a></li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-accent" /><span>{site.address}</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 mono-label flex flex-col sm:flex-row gap-2 justify-between">
          <div>© {new Date().getFullYear()} MZ IT Services — All rights reserved</div>
          <div>v1.0 · Built in Lahore</div>
        </div>
      </div>
    </footer>
  );
}
