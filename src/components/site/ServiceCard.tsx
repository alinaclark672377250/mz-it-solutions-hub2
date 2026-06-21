import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Camera, Network, Wrench, Server, MonitorSmartphone, Fingerprint } from "lucide-react";
import type { Service } from "@/lib/site";

const icons = { Camera, Network, Wrench, Server, MonitorSmartphone, Fingerprint } as const;

export function ServiceCard({ service, index, className = "" }: { service: Service; index?: number; className?: string }) {
  const Icon = icons[service.icon as keyof typeof icons] ?? Network;
  const num = typeof index === "number" ? String(index + 1).padStart(2, "0") : null;
  return (
    <Link
      to="/services/$slug"
      params={{ slug: service.slug }}
      className={`group relative flex flex-col bg-surface border border-border hover:border-foreground/60 transition-colors ${className}`}
    >
      <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-border">
        {num && <span className="mono-label">{num} / Service</span>}
        <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
      </div>
      <div className="p-6 flex flex-col gap-4 flex-1">
        <Icon className="h-6 w-6 text-foreground" strokeWidth={1.5} />
        <div>
          <h3 className="text-lg font-semibold tracking-tight">{service.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{service.short}</p>
        </div>
        <div className="mt-auto pt-4 border-t border-dashed border-border">
          <span className="mono-label">{service.tagline}</span>
        </div>
      </div>
    </Link>
  );
}
