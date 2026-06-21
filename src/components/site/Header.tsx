import { Link } from "@tanstack/react-router";
import { Menu, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { site } from "@/lib/site";
import { Logo } from "./Logo";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-3">
          <Logo className="h-8 w-8" />
          <div className="leading-tight">
            <div className="text-sm font-bold tracking-tight">MZ IT Services</div>
            <div className="mono-label">Lahore · PK</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "px-3 py-2 text-sm text-foreground font-semibold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href={`tel:${site.phoneIntl}`} className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5">
            <Phone className="h-3.5 w-3.5" /> {site.phone}
          </a>
          <Button asChild size="sm" className="rounded-none bg-foreground text-background hover:bg-accent text-xs font-bold tracking-widest uppercase px-5 py-5">
            <Link to="/contact">Schedule Audit</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon"><Menu className="h-5 w-5" /></Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background w-72">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <div className="mt-8 flex flex-col gap-1">
              {nav.map((n) => (
                <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="px-3 py-3 rounded-md hover:bg-muted text-base">
                  {n.label}
                </Link>
              ))}
              <Button asChild className="mt-4 rounded-none bg-foreground text-background hover:bg-accent uppercase tracking-widest text-xs font-bold">
                <Link to="/contact" onClick={() => setOpen(false)}>Schedule Audit</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
