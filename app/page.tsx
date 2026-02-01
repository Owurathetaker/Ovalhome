// app/page.tsx
import Image from "next/image";
import FeaturedCard from "./components/FeaturedCard";

const PHONE_E164 = "+233554053999";
const WA_LINK = "https://wa.me/233554053999";
const HERO_SRC = "/hero-mirror.jpg";

// Social links (from you)
const SOCIALS = {
  instagram: "https://www.instagram.com/oval.co?igsh=YmVpMzRjemxoZzd1",
  facebook: "https://www.facebook.com/share/1D4DvGXTWt/?mibextid=wwXIfr",
  tiktok: "https://www.tiktok.com/@oval.home?_r=1&_t=ZS-93Z2gicwpyn",
};

// Product order (extras first, no-sample last)
const PRODUCT_ORDER = [
  "Z-008",
  "Z-005",
  "L-1127",
  "Z-002",
  "L-1164",
  "Z-001",
  "F-005",
  "Y-009",
  "L-1072", // no samples -> last
  "Z-010",  // no samples -> last
] as const;

type Code = (typeof PRODUCT_ORDER)[number];

// Images per product (safe: if a file doesn’t exist, remove it from this list)
const PRODUCT_IMAGES: Record<Code, string[]> = {
  "Z-008": ["/Z-008_card.jpg", "/Z-008_1.jpg", "/Z-008_2.jpg", "/Z-008_3.jpg"],
  "Z-005": ["/Z-005_card.jpg", "/Z-005_1.jpg", "/Z-005_2.jpg", "/Z-005_3.jpg"],
  "L-1127": ["/L-1127_card.jpg", "/L-1127_1.jpg", "/L-1127_2.jpg", "/L-1127_3.jpg"],
  "Z-002": ["/Z-002_card.jpg", "/Z-002_1.jpg", "/Z-002_2.jpg", "/Z-002_3.jpg"],
  "L-1164": ["/L-1164_card.jpg", "/L-1164_1.jpg"],
  "Z-001": ["/Z-001_card.jpg", "/Z-001_1.jpg", "/Z-001_2.jpg", "/Z-001_3.jpg"],

  // If you have more angles later, just add them here
  "F-005": ["/F-005_card.jpg", "/F-005_1.jpg", "/F-005_2.jpg", "/F-005_3.jpg"],
  "Y-009": ["/Y-009_card.jpg", "/Y-009_1.jpg", "/Y-009_2.jpg", "/Y-009_3.jpg"],

  // No samples (card only)
  "L-1072": ["/L-1072_card.jpg"],
  "Z-010": ["/Z-010_card.jpg"],
};

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white shadow-sm transition
                 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
    >
      <span className="text-slate-700 transition group-hover:text-slate-900">
        {children}
      </span>
    </a>
  );
}

function InstagramSvg() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 16.2A4.2 4.2 0 1 0 12 7.8a4.2 4.2 0 0 0 0 8.4Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M17.4 6.8h.01"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FacebookSvg() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14 8.5V7.2c0-.8.4-1.2 1.3-1.2h1.6V3h-2.2C12.6 3 12 4.3 12 6.7V8.5H10v3h2V21h3v-9.5h2.1l.4-3H15Z"
        fill="currentColor"
      />
    </svg>
  );
}

function TikTokSvg() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14 3v10.2a3.8 3.8 0 1 1-3.2-3.7V6.2a7 7 0 1 0 6.2 6.9V7.2c1.1.8 2.4 1.3 3.8 1.4V5.6c-2.2-.2-4-1.9-4.4-2.6H14Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#fbf7f2] text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-black/5 bg-[#fbf7f2]/90 backdrop-blur">
        {/* Announcement bar (inside header) */}
        <div className="border-b border-black/5 bg-white/60">
          <div className="mx-auto max-w-6xl px-4 py-2 text-center text-[11px] text-slate-600">
            Nationwide delivery • Fast WhatsApp ordering
          </div>
        </div>

        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden rounded-full border border-black/10 bg-white">
              <Image
                src="/oval-logo.png"
                alt="Oval Home"
                fill
                sizes="36px"
                className="object-contain"
                priority
              />
            </div>

            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-wide">Oval Home</p>
              <p className="text-[11px] text-slate-500">Luxury LED Mirrors</p>
            </div>
          </div>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm"
          >
            Order on WhatsApp
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-5">
        <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
          <div className="relative w-full bg-[#0b0f14]">
            <div className="relative h-[240px] sm:h-[320px] md:h-[420px] lg:h-[460px]">
              <Image
                src={HERO_SRC}
                alt="Oval Home LED mirror"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1100px"
              />
            </div>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10" />

            <div className="absolute left-4 top-4">
              <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white backdrop-blur">
                Premium • Modern • Minimal
              </span>
            </div>
          </div>

          <div className="p-5 md:p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h1 className="text-2xl font-semibold leading-tight md:text-3xl">
                  Luxury LED mirrors for modern spaces.
                </h1>

                <p className="mt-2 max-w-2xl text-sm text-slate-600">
                  Swipe photos for angles. Tap to zoom. Use the code to order on WhatsApp.
                </p>

                {/* Steps: always one line (scrolls if needed) */}
                <div
                  className="mt-4 flex gap-2 overflow-x-auto whitespace-nowrap pb-1 text-xs text-slate-700
                             [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                  <span className="shrink-0 rounded-full border border-black/10 bg-[#fbf7f2] px-3 py-1">
                    1) Pick a design
                  </span>
                  <span className="shrink-0 rounded-full border border-black/10 bg-[#fbf7f2] px-3 py-1">
                    2) Tap “Order on WhatsApp”
                  </span>
                  <span className="shrink-0 rounded-full border border-black/10 bg-[#fbf7f2] px-3 py-1">
                    3) Delivery nationwide
                  </span>
                </div>
              </div>

              <div className="flex gap-2 md:flex-col md:items-end">
                <a
                  href="#designs"
                  className="rounded-xl border border-black/10 bg-white px-4 py-3 text-center text-sm font-medium shadow-sm"
                >
                  View designs
                </a>

                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-medium text-white shadow-sm"
                >
                  Chat now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Designs (all 10 visible) */}
      <section id="designs" className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="text-lg font-semibold">All Designs</h2>
          <p className="text-xs text-slate-500">10 products • swipe to view angles</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCT_ORDER.map((code) => (
            <FeaturedCard
              key={code}
              code={code}
              phoneE164={PHONE_E164}
              images={PRODUCT_IMAGES[code]}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/5 bg-white">
        {/* subtle animated divider (cheap + classy) */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-black/10 to-transparent animate-pulse" />

        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="text-sm text-slate-600">
              <p className="font-medium text-slate-900">Oval Home</p>
              <p className="text-xs">Luxury LED Mirrors • Nationwide delivery</p>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              <SocialIcon href={SOCIALS.instagram} label="Oval Home on Instagram">
                <InstagramSvg />
              </SocialIcon>
              <SocialIcon href={SOCIALS.facebook} label="Oval Home on Facebook">
                <FacebookSvg />
              </SocialIcon>
              <SocialIcon href={SOCIALS.tiktok} label="Oval Home on TikTok">
                <TikTokSvg />
              </SocialIcon>

              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="ml-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition
                           hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>

          <p className="mt-4 text-xs text-slate-500">
            Tip: Tap any mirror to zoom. Then place your order on WhatsApp using the code.
          </p>
        </div>
      </footer>
    </main>
  );
}