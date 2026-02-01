// app/page.tsx
import Image from "next/image";
import FeaturedCard from "./components/FeaturedCard";

const PHONE_E164 = "+233554053999";
const WA_LINK = "https://wa.me/233554053999";

// ✅ CHANGE THIS to the exact file you added in /public
const HERO_SRC = "/hero-mirror.jpg";

// All product codes on the page
const ALL_CODES = [
  "F-005",
  "L-1072",
  "L-1127",
  "L-1164",
  "Y-009",
  "Z-001",
  "Z-002",
  "Z-005",
  "Z-008",
  "Z-010",
];

// Featured (keep exactly these 6)
const FEATURED_CODES = ["Z-008", "Z-005", "L-1127", "Z-002", "L-1164", "Z-001"];
const FEATURED_SET = new Set(FEATURED_CODES);
const MORE_CODES = ALL_CODES.filter((c) => !FEATURED_SET.has(c));

function SimpleDesignCard({
  code,
  phoneE164,
}: {
  code: string;
  phoneE164: string;
}) {
  const waDigits = phoneE164.replace(/[^\d]/g, "");
  const waText = encodeURIComponent(
    `Hi Oval Home, I want to order mirror code: ${code}`
  );
  const wa = `https://wa.me/${waDigits}?text=${waText}`;

  return (
    <article className="rounded-2xl border border-black/10 bg-white p-3 shadow-sm">
      <div className="relative h-[240px] overflow-hidden rounded-xl border border-black/5 bg-[#fbf7f2]">
        <Image
          src={`/${code}_card.jpg`}
          alt={`${code} mirror`}
          fill
          className="object-contain p-2"
          sizes="(max-width: 768px) 92vw, (max-width: 1200px) 45vw, 33vw"
        />
      </div>

      <div className="mt-3 flex items-center justify-between">
        <p className="text-sm font-semibold">{code}</p>
        <p className="text-xs text-slate-500">More designs</p>
      </div>

      <a
        href={wa}
        target="_blank"
        rel="noreferrer"
        className="mt-3 block rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-medium text-white shadow-sm"
      >
        Order on WhatsApp
      </a>
    </article>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#fbf7f2] text-slate-900">
      {/* Header (announcement bar moved INSIDE header so it doesn't sit above it) */}
      <header className="sticky top-0 z-20 border-b border-black/5 bg-[#fbf7f2]/90 backdrop-blur">
        {/* Announcement bar */}
        <div className="border-b border-black/5 bg-white/60">
          <div className="mx-auto max-w-6xl px-4 py-2 text-center text-[11px] text-slate-600">
            Nationwide delivery • Fast WhatsApp ordering
          </div>
        </div>

        {/* Main header row */}
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
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
          {/* Hero image banner (contain = no cropping) */}
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

          {/* Copy + CTAs */}
          <div className="p-5 md:p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h1 className="text-2xl font-semibold leading-tight md:text-3xl">
                  Luxury LED mirrors for modern spaces.
                </h1>

                <p className="mt-2 max-w-2xl text-sm text-slate-600">
                  Swipe photos for angles. Tap to zoom. Use the code to order on WhatsApp.
                </p>

                {/* ✅ Steps: always one clean line (scrolls if needed, no ugly wrap) */}
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
                  href="#featured"
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

      {/* Featured */}
      <section id="featured" className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="text-lg font-semibold">Featured Designs</h2>
          <p className="text-xs text-slate-500">6 hand-picked best sellers</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <FeaturedCard
            code="Z-008"
            phoneE164={PHONE_E164}
            images={["/Z-008_card.jpg", "/Z-008_1.jpg", "/Z-008_2.jpg", "/Z-008_3.jpg"]}
          />
          <FeaturedCard
            code="Z-005"
            phoneE164={PHONE_E164}
            images={["/Z-005_card.jpg", "/Z-005_1.jpg", "/Z-005_2.jpg", "/Z-005_3.jpg"]}
          />
          <FeaturedCard
            code="L-1127"
            phoneE164={PHONE_E164}
            images={["/L-1127_card.jpg", "/L-1127_1.jpg", "/L-1127_2.jpg", "/L-1127_3.jpg"]}
          />
          <FeaturedCard
            code="Z-002"
            phoneE164={PHONE_E164}
            images={["/Z-002_card.jpg", "/Z-002_1.jpg", "/Z-002_2.jpg", "/Z-002_3.jpg"]}
          />
          <FeaturedCard
            code="L-1164"
            phoneE164={PHONE_E164}
            images={["/L-1164_card.jpg", "/L-1164_1.jpg"]}
          />
          <FeaturedCard
            code="Z-001"
            phoneE164={PHONE_E164}
            images={["/Z-001_card.jpg", "/Z-001_1.jpg", "/Z-001_2.jpg", "/Z-001_3.jpg"]}
          />
        </div>

        {/* Collapsible More Designs */}
        <details className="mt-10 rounded-2xl border border-black/10 bg-white shadow-sm">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-4">
            <div>
              <p className="text-base font-semibold">More Designs</p>
              <p className="mt-1 text-xs text-slate-500">
                Tap to open • then choose a code and order on WhatsApp
              </p>
            </div>

            <span className="rounded-full bg-black/5 px-3 py-1 text-xs text-slate-700">
              Show / Hide
            </span>
          </summary>

          <div className="px-4 pb-4">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {MORE_CODES.map((code) => (
                <SimpleDesignCard key={code} code={code} phoneE164={PHONE_E164} />
              ))}
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Delivery is nationwide. Delivery fee depends on location.
            </p>
          </div>
        </details>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/5 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <p>Oval Home • Luxury LED Mirrors</p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-slate-900"
          >
            Order on WhatsApp
          </a>
        </div>
      </footer>
    </main>
  );
}