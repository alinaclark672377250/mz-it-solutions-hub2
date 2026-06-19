import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { services, site } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-surface/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5">
            <Logo />
            <span className="font-display font-bold">MZ IT Services</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Enterprise IT infrastructure, CCTV and network solutions across Lahore and Punjab.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Services</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="text-foreground/80 hover:text-primary transition-colors">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Company</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="text-foreground/80 hover:text-primary">About</Link></li>
            <li><Link to="/projects" className="text-foreground/80 hover:text-primary">Projects</Link></li>
            <li><Link to="/contact" className="text-foreground/80 hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Reach Us</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary" /><a href={`tel:${site.phoneIntl}`} className="hover:text-primary">{site.phone}</a></li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary" /><a href={`mailto:${site.email}`} className="hover:text-primary break-all">{site.email}</a></li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary" /><span>{site.address}</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 text-xs text-muted-foreground flex flex-col sm:flex-row gap-2 justify-between">
          <div>© {new Date().getFullYear()} MZ IT Services. All rights reserved.</div>
          <div>Built with care in Lahore.</div>
        </div>
      </div>
    </footer>
  );
}
