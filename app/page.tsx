// app/page.tsx
import Image from "next/image";
import FeaturedCard from "./components/FeaturedCard";

const PHONE_E164 = "+233554053999";
const WA_NUMBER = "233554053999";
const HERO_SRC = "/hero-mirror.jpg";

const SOCIALS = {
  instagram: "https://www.instagram.com/oval.co?igsh=YmVpMzRjemxoZzd1",
  facebook: "https://www.facebook.com/share/1D4DvGXTWt/?mibextid=wwXIfr",
  tiktok: "https://www.tiktok.com/@oval.home?_r=1&_t=ZS-93Z2gicwpyn",
};

const PRODUCT_ORDER = [
  "Z-008",
  "Z-005",
  "L-1127",
  "Z-002",
  "L-1164",
  "Z-001",
  "F-005",
  "Y-009",
  "L-1072",
  "Z-010",
] as const;

type Code = (typeof PRODUCT_ORDER)[number];

const PRODUCT_IMAGES: Record<Code, string[]> = {
  "Z-008": ["/Z-008_card.jpg", "/Z-008_1.jpg", "/Z-008_2.jpg", "/Z-008_3.jpg"],
  "Z-005": ["/Z-005_card.jpg", "/Z-005_1.jpg", "/Z-005_2.jpg", "/Z-005_3.jpg"],
  "L-1127": ["/L-1127_card.jpg", "/L-1127_1.jpg", "/L-1127_2.jpg", "/L-1127_3.jpg"],
  "Z-002": ["/Z-002_card.jpg", "/Z-002_1.jpg", "/Z-002_2.jpg", "/Z-002_3.jpg"],
  "L-1164": ["/L-1164_card.jpg", "/L-1164_1.jpg"],
  "Z-001": ["/Z-001_card.jpg", "/Z-001_1.jpg", "/Z-001_2.jpg", "/Z-001_3.jpg"],
  "F-005": ["/F-005_card.jpg", "/F-005_1.jpg", "/F-005_2.jpg", "/F-005_3.jpg"],
  "Y-009": ["/Y-009_card.jpg", "/Y-009_1.jpg", "/Y-009_2.jpg", "/Y-009_3.jpg"],
  "L-1072": ["/L-1072_card.jpg", "/L-1072_1.jpg", "/L-1072_2.jpg", "/L-1072_3.jpg"],
  "Z-010": ["/Z-010_card.jpg"],
};

function waLink(message?: string) {
  const text = message
    ? message
    : "Hi Oval Home 👋🏽\nI want to order a mirror.\nLocation: ____\nWhen can I receive it?";
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

export default function Page() {
  const WA_LINK = waLink();

  return (
    <main className="min-h-screen bg-[#fbf7f2] text-slate-900">
      
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-black/5 bg-[#fbf7f2]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden rounded-full border border-black/10 bg-white">
              <Image src="/oval-logo.png" alt="Oval Home" fill className="object-contain" />
            </div>
            <div>
              <p className="text-sm font-semibold">Oval Home</p>
              <p className="text-[11px] text-slate-500">Luxury LED Mirrors</p>
            </div>
          </div>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white"
          >
            Check price & order
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-5">
        <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
          <div className="relative h-[260px] bg-[#0b0f14] md:h-[420px]">
            <Image src={HERO_SRC} alt="Oval Home LED mirror" fill priority className="object-contain" />
          </div>

          <div className="p-5 md:p-6">
            <h1 className="text-2xl font-semibold md:text-3xl">
              Modern LED mirrors for bedrooms, bathrooms & stylish spaces
            </h1>

            <p className="mt-2 text-sm text-slate-600">
              Browse designs below → check price → order instantly on WhatsApp.
            </p>

            <a
              href="#featured"
              className="mt-4 inline-block rounded-full bg-slate-900 px-5 py-2 text-sm text-white"
            >
              View Popular Mirrors
            </a>
          </div>
        </div>
      </section>

      {/* Featured Mirrors */}
      <section id="featured" className="mx-auto max-w-6xl px-4 pt-8">
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Featured Mirrors</h2>
          <p className="text-xs text-slate-500">Most requested designs</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <FeaturedCard code="Z-008" phoneE164={PHONE_E164} images={PRODUCT_IMAGES["Z-008"]} />
          <FeaturedCard code="L-1127" phoneE164={PHONE_E164} images={PRODUCT_IMAGES["L-1127"]} />
          <FeaturedCard code="Z-005" phoneE164={PHONE_E164} images={PRODUCT_IMAGES["Z-005"]} />
        </div>
      </section>

      {/* All Designs */}
      <section className="mx-auto max-w-6xl px-4 pt-10 pb-8">
        <h2 className="mb-4 text-lg font-semibold">All Designs</h2>

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
        <div className="mx-auto max-w-6xl px-4 py-8 flex justify-between">
          <p className="text-sm">Oval Home</p>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm text-white"
          >
            WhatsApp
          </a>
        </div>
      </footer>

      {/* Floating CTA */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-lg"
      >
        Chat to order
      </a>
    </main>
  );
}