"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  code: string;
  phoneE164: string; // e.g. +233554053999
  images: string[]; // first image should be the "card" image
};

const PRODUCT_META: Record<string, { name: string; desc: string }> = {
  "Z-008": {
    name: "Full-Length LED Mirror",
    desc: "Ideal for bedrooms, dressing spaces, and outfit checks.",
  },
  "Z-005": {
    name: "Decorative Wall Mirror",
    desc: "A clean modern piece for stylish interiors and statement walls.",
  },
  "L-1127": {
    name: "Bathroom LED Mirror",
    desc: "Perfect for modern bathrooms with a clean premium finish.",
  },
  "Z-002": {
    name: "Modern Wall Mirror",
    desc: "A sleek option for everyday spaces that need a polished look.",
  },
  "L-1164": {
    name: "Minimal LED Mirror",
    desc: "Simple and elegant design for clean modern interiors.",
  },
  "Z-001": {
    name: "Premium Vanity Mirror",
    desc: "Great for dressing areas, beauty spaces, and refined setups.",
  },
  "F-005": {
    name: "Statement LED Mirror",
    desc: "Designed to stand out in stylish rooms and modern homes.",
  },
  "Y-009": {
    name: "Decor Accent Mirror",
    desc: "Adds a soft luxury touch to bedrooms, halls, and living spaces.",
  },
  "L-1072": {
    name: "Luxury Bathroom Mirror",
    desc: "A premium pick for bathrooms and elegant interior upgrades.",
  },
  "Z-010": {
    name: "Classic LED Mirror",
    desc: "A clean versatile mirror for modern spaces and everyday use.",
  },
};

function waLink(phoneE164: string, code: string) {
  const digits = phoneE164.replace(/[^\d]/g, "");
  const productName = PRODUCT_META[code]?.name ?? "LED Mirror";
  const text = encodeURIComponent(
    [
      "Hi Oval Home 👋🏽",
      `I want to order: ${productName}`,
      `Mirror code: ${code}`,
      "Location: ____",
      "Preferred size (optional): ____",
      "When can I receive it?",
    ].join("\n")
  );
  return `https://wa.me/${digits}?text=${text}`;
}

export default function FeaturedCard({ code, phoneE164, images }: Props) {
  const safeImages = useMemo(() => images.filter(Boolean), [images]);
  const hasMany = safeImages.length > 1;

  const [active, setActive] = useState(0);
  const stripRef = useRef<HTMLDivElement | null>(null);

  // Modal (zoom)
  const [open, setOpen] = useState(false);
  const [zoomIndex, setZoomIndex] = useState(0);

  // Touch (modal swipe)
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const meta = PRODUCT_META[code] ?? {
    name: "Luxury LED Mirror",
    desc: "Clean modern mirror for stylish spaces.",
  };

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;

    const onScroll = () => {
      const w = el.clientWidth || 1;
      const idx = Math.round(el.scrollLeft / w);
      setActive(Math.max(0, Math.min(idx, safeImages.length - 1)));
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => el.removeEventListener("scroll", onScroll);
  }, [safeImages.length]);

  const goTo = (idx: number) => {
    const el = stripRef.current;
    if (!el) return;
    const w = el.clientWidth || 1;
    el.scrollTo({ left: idx * w, behavior: "smooth" });
  };

  const onTapImage = () => {
    setZoomIndex(active);
    setOpen(true);
  };

  const close = () => setOpen(false);

  const prevZoom = () => {
    if (!hasMany) return;
    setZoomIndex((i) => (i - 1 + safeImages.length) % safeImages.length);
  };

  const nextZoom = () => {
    if (!hasMany) return;
    setZoomIndex((i) => (i + 1) % safeImages.length);
  };

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prevZoom();
      if (e.key === "ArrowRight") nextZoom();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, hasMany, safeImages.length]);

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0]?.clientX ?? null;
    touchEndX.current = null;
  }

  function onTouchMove(e: React.TouchEvent) {
    touchEndX.current = e.touches[0]?.clientX ?? null;
  }

  function onTouchEnd() {
    const start = touchStartX.current;
    const end = touchEndX.current;
    if (start == null || end == null) return;

    const delta = end - start;
    const threshold = 45;
    if (delta > threshold) prevZoom();
    if (delta < -threshold) nextZoom();

    touchStartX.current = null;
    touchEndX.current = null;
  }

  return (
    <>
      <article className="rounded-2xl border border-black/10 bg-white shadow-sm">
        <div className="p-3">
          <div className="relative overflow-hidden rounded-xl border border-black/5 bg-[#fbf7f2]">
            <div
              ref={stripRef}
              className="flex w-full snap-x snap-mandatory overflow-x-auto scroll-smooth"
              style={{
                WebkitOverflowScrolling: "touch",
                scrollbarWidth: "none",
              }}
            >
              {safeImages.map((src, idx) => (
                <button
                  key={src + idx}
                  type="button"
                  onClick={onTapImage}
                  className="relative h-[240px] w-full flex-none snap-center md:h-[260px] lg:h-[240px]"
                  aria-label={`View ${code} image ${idx + 1}`}
                >
                  <Image
                    src={src}
                    alt={`${meta.name} - ${code}`}
                    fill
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 33vw"
                    className="object-contain p-2"
                    priority={idx === 0}
                  />
                </button>
              ))}
            </div>

            {hasMany && (
              <div className="pointer-events-none absolute right-2 top-2 rounded-full bg-white/80 px-2 py-1 text-[11px] text-slate-700">
                Swipe
              </div>
            )}
          </div>

          {hasMany && (
            <div className="mt-2 flex items-center justify-center gap-2">
              {safeImages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  className={`h-2 w-2 rounded-full transition ${
                    i === active ? "bg-slate-900" : "bg-slate-300"
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          )}

          <div className="mt-3">
            <p className="text-sm font-semibold text-slate-900">{meta.name}</p>
            <p className="mt-1 text-xs text-slate-500">Code: {code}</p>
            <p className="mt-2 text-xs leading-5 text-slate-600">{meta.desc}</p>
          </div>

          <a
            href={waLink(phoneE164, code)}
            target="_blank"
            rel="noreferrer"
            className="mt-3 block rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-medium text-white"
          >
            Check price & order
          </a>

          <p className="mt-2 text-center text-xs text-slate-500">
            Swipe for more angles • Tap to zoom
          </p>
        </div>
      </article>

      {open && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Zoomed view for ${code}`}
          onClick={close}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 text-white">
              <div>
                <p className="text-sm font-semibold">{meta.name}</p>
                <p className="text-xs text-white/70">Code: {code}</p>
              </div>
              <button
                type="button"
                onClick={close}
                className="rounded-full bg-white/10 px-3 py-1 text-sm"
              >
                Close
              </button>
            </div>

            <div
              className="relative h-[70vh]"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <Image
                src={safeImages[zoomIndex]}
                alt={`${meta.name} - ${code} zoomed`}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />

              {hasMany && (
                <>
                  <button
                    type="button"
                    onClick={prevZoom}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 px-3 py-2 text-sm font-medium text-slate-900 shadow hover:bg-white"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={nextZoom}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 px-3 py-2 text-sm font-medium text-slate-900 shadow hover:bg-white"
                  >
                    ›
                  </button>
                </>
              )}
            </div>

            {hasMany && (
              <div className="flex items-center justify-between gap-3 px-4 py-3">
                <button
                  type="button"
                  onClick={prevZoom}
                  className="rounded-xl bg-white/10 px-4 py-2 text-sm text-white"
                >
                  Prev
                </button>

                <p className="text-xs text-white/70">
                  {zoomIndex + 1} / {safeImages.length}
                </p>

                <button
                  type="button"
                  onClick={nextZoom}
                  className="rounded-xl bg-white/10 px-4 py-2 text-sm text-white"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}