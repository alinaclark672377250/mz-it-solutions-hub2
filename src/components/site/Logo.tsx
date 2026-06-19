export function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="mz-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.82 0.14 210)" />
          <stop offset="100%" stopColor="oklch(0.78 0.16 70)" />
        </linearGradient>
      </defs>
      <rect x="1.5" y="1.5" width="37" height="37" rx="9" fill="none" stroke="url(#mz-g)" strokeWidth="1.5" />
      <path d="M9 28 L9 12 L15 22 L21 12 L21 28" fill="none" stroke="url(#mz-g)" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M22 12 L31 12 L22 28 L31 28" fill="none" stroke="url(#mz-g)" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
