"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  code: string;
  phoneE164: string; // e.g. +233554053999
  images: string[]; // first image should be the "card" image
};

function waLink(phoneE164: string, code: string) {
  const digits = phoneE164.replace(/[^\d]/g, "");
  const text = encodeURIComponent(`Hi Oval Home, I want to order mirror code: ${code}`);
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

  return (
    <>
      <article className="rounded-2xl border border-black/10 bg-white shadow-sm">
        <div className="p-3">
          <div className="relative overflow-hidden rounded-xl border border-black/5 bg-[#fbf7f2]">
            <div
              ref={stripRef}
              className="flex w-full snap-x snap-mandatory overflow-x-auto scroll-smooth"
              style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}
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
                    alt={`${code} mirror`}
                    fill
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 33vw"
                    className="object-contain p-2"
                    priority={idx === 0}
                  />
                </button>
              ))}
            </div>

            {hasMany && (
              <div className="pointer-events-none absolute top-2 right-2 rounded-full bg-white/80 px-2 py-1 text-[11px] text-slate-700">
                Swipe
              </div>
            )}
          </div>

          {/* Dots moved OUTSIDE the photo area */}
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

          <div className="mt-3 flex items-center justify-between">
            <p className="text-sm font-semibold">{code}</p>
            <p className="text-xs text-slate-500">Luxury LED Mirror</p>
          </div>

          <a
            href={waLink(phoneE164, code)}
            target="_blank"
            rel="noreferrer"
            className="mt-3 block rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-medium text-white"
          >
            Order on WhatsApp
          </a>

          <p className="mt-2 text-center text-xs text-slate-500">Tap image to zoom</p>
        </div>
      </article>

      {open && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Zoomed view for ${code}`}
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 text-white">
              <p className="text-sm font-semibold">{code}</p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full bg-white/10 px-3 py-1 text-sm"
              >
                Close
              </button>
            </div>

            <div className="relative h-[70vh]">
              <Image
                src={safeImages[zoomIndex]}
                alt={`${code} zoomed`}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            {hasMany && (
              <div className="flex items-center justify-between gap-3 px-4 py-3">
                <button
                  type="button"
                  onClick={() => setZoomIndex((p) => Math.max(0, p - 1))}
                  disabled={zoomIndex === 0}
                  className="rounded-xl bg-white/10 px-4 py-2 text-sm text-white disabled:opacity-40"
                >
                  Prev
                </button>

                <p className="text-xs text-white/70">
                  {zoomIndex + 1} / {safeImages.length}
                </p>

                <button
                  type="button"
                  onClick={() =>
                    setZoomIndex((p) => Math.min(safeImages.length - 1, p + 1))
                  }
                  disabled={zoomIndex === safeImages.length - 1}
                  className="rounded-xl bg-white/10 px-4 py-2 text-sm text-white disabled:opacity-40"
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