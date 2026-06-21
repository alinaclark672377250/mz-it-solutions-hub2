export function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect x="0.5" y="0.5" width="39" height="39" rx="3" fill="oklch(0.18 0.03 250)" />
      <text
        x="20"
        y="26"
        textAnchor="middle"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="16"
        fontWeight="800"
        letterSpacing="-0.04em"
        fill="white"
      >
        MZ
      </text>
      <rect x="32" y="32" width="6" height="6" fill="oklch(0.66 0.19 42)" />
    </svg>
  );
}
