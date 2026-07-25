import { useEffect, useState, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import logo from "@/assets/brand/mz-logo.png.asset.json";
import cctv from "@/assets/services/cctv.png.asset.json";
import network from "@/assets/services/network.png.asset.json";
import itSupport from "@/assets/services/it-support.png.asset.json";
import computerLab from "@/assets/services/computer-lab.png.asset.json";
import dataCenter from "@/assets/services/data-center.png.asset.json";

const slides = [
  { src: logo.url, alt: "MZ IT Solution" },
  { src: cctv.url, alt: "CCTV Cameras — 24/7 surveillance" },
  { src: network.url, alt: "Network Infrastructure — structured cabling" },
  { src: itSupport.url, alt: "IT Support & Maintenance" },
  { src: computerLab.url, alt: "Computer Lab Setup" },
  { src: dataCenter.url, alt: "Data Center Network" },
];

export function BrandSlideshow() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(0);

  const goTo = useCallback((idx: number) => {
    setI(((idx % slides.length) + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => goTo(i + 1), [i, goTo]);
  const prev = useCallback(() => goTo(i - 1), [i, goTo]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 3500);
    return () => clearInterval(t);
  }, [paused]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].screenX;
    const diff = touchStartX.current - endX;
    if (diff > 40) next();
    else if (diff < -40) prev();
  };

  return (
    <div
      className="relative w-full aspect-[4/5] sm:aspect-[3/4] rounded-3xl overflow-hidden border border-border glow-ring bg-[#0a1a3f] group select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {slides.map((s, idx) => (
        <img
          key={idx}
          src={s.src}
          alt={s.alt}
          loading={idx === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-700 ${idx === i ? "opacity-100" : "opacity-0"}`}
          draggable={false}
        />
      ))}

      {/* Left Arrow */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/60"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/60"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Bottom Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-3 bg-gradient-to-t from-black/60 to-transparent">
        <span className="text-xs font-medium text-white/80 tabular-nums">
          {String(i + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
        <div className="flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => goTo(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${idx === i ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/60"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
