import logo from "@/assets/brand/mz-logo.png.asset.json";

export function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <img
      src={logo.url}
      alt="MZ IT Services logo"
      className={`${className} rounded-md object-cover`}
      loading="eager"
    />
  );
}
