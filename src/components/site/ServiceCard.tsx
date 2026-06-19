import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Camera, Network, Wrench, Server, MonitorSmartphone, Fingerprint } from "lucide-react";
import type { Service } from "@/lib/site";

const icons = { Camera, Network, Wrench, Server, MonitorSmartphone, Fingerprint } as const;

export function ServiceCard({ service, className = "" }: { service: Service; className?: string }) {
  const Icon = icons[service.icon as keyof typeof icons] ?? Network;
  return (
    <Link
      to="/services/$slug"
      params={{ slug: service.slug }}
      className={`group relative flex flex-col gap-4 rounded-2xl border border-border/70 bg-surface/50 p-6 transition-all hover:border-primary/60 hover:bg-surface ${className}`}
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{ background: "radial-gradient(ellipse at top, color-mix(in oklab, var(--primary) 12%, transparent), transparent 60%)" }} />
      <div className="flex items-center justify-between">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
          <Icon className="h-5 w-5" />
        </div>
        <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
      </div>
      <div>
        <h3 className="font-display text-lg font-semibold">{service.title}</h3>
        <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{service.short}</p>
      </div>
    </Link>
  );
}
