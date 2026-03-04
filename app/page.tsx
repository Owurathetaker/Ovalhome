// app/page.tsx
import Image from "next/image";
import FeaturedCard from "./components/FeaturedCard";

const PHONE_E164 = "+233554053999";
const WA_NUMBER = "233554053999";
const HERO_SRC = "/hero-mirror.jpg";

// Social links
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
    : "Hi Oval Home 👋🏽\nI want to order an LED mirror.\nLocation: ____\nWhen can I receive it?";
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

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
      className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
    >
      <span className="text-slate-700 transition group-hover:text-slate-900">
        {children}
      </span>
    </a>
  );
}

function InstagramSvg() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
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
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14 8.5V7.2c0-.8.4-1.2 1.3-1.2h1.6V3h-2.2C12.6 3 12 4.3 12 6.7V8.5H10v3h2V21h3v-9.5h2.1l.4-3H15Z" />
    </svg>
  );
}

function TikTokSvg() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14 3v10.2a3.8 3.8 0 1 1-3.2-3.7V6.2a7 7 0 1 0 6.2 6.9V7.2c1.1.8 2.4 1.3 3.8 1.4V5.6c-2.2-.2-4-1.9-4.4-2.6H14Z" />
    </svg>
  );
}

function InfoPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] text-slate-700 shadow-sm">
      {children}
    </span>
  );
}

function MiniCard({
  title,
  desc,
  cta,
  href,
}: {
  title: string;
  desc: string;
  cta: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group rounded-2xl border border-black/10 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <p className="text-sm font-semibold text-slate-900">{title}</p>
      <p className="mt-1 text-xs text-slate-600">{desc}</p>
      <p className="mt-3 text-xs font-medium text-slate-900 underline decoration-black/20 underline-offset-4">
        {cta}
      </p>
    </a>
  );
}

export default function Page() {
  const WA_LINK = waLink();

  return (
    <main className="min-h-screen bg-[#fbf7f2] text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-black/5 bg-[#fbf7f2]/90 backdrop-blur">
        <div className="border-b border-black/5 bg-white/60">
          <div className="mx-auto max-w-6xl px-4 py-2 text-center text-[11px] text-slate-700">
            Accra: same-day / next-day delivery • Nationwide delivery available
          </div>
        </div>

        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden rounded-full border border-black/10 bg-white">
              <Image
                src="/oval-logo.png"
                alt="Oval Home"
                fill
                className="object-contain"
              />
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
            Order on WhatsApp
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-5">
        <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
          <div className="relative h-[240px] bg-[#0b0f14] sm:h-[320px] md:h-[420px] lg:h-[460px]">
            <Image
              src={HERO_SRC}
              alt="Oval Home LED mirror"
              fill
              priority
              className="object-contain"
            />
          </div>

          <div className="p-5 md:p-6">
            <div className="flex flex-wrap gap-2">
              <InfoPill>Imported quality</InfoPill>
              <InfoPill>Clean finishing</InfoPill>
              <InfoPill>Accra fast delivery</InfoPill>
            </div>

            <h1 className="mt-3 text-2xl font-semibold md:text-3xl">
              Luxury LED mirrors for modern spaces.
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              Swipe photos for angles. Tap to zoom. Use the code to order on WhatsApp.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="#categories"
                className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-sm hover:bg-black/[0.02]"
              >
                Browse categories
              </a>
              <a
                href="#designs"
                className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-sm hover:bg-black/[0.02]"
              >
                View all designs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Categories (Tier 2 conversion + search intent) */}
      <section id="categories" className="mx-auto max-w-6xl px-4 pt-8">
        <div className="mb-4 flex items-end justify-between">
          <h2 className="text-lg font-semibold">Shop by category</h2>
          <p className="text-xs text-slate-500">Tap → WhatsApp</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <MiniCard
            title="LED Bathroom Mirrors"
            desc="Modern LED designs for bathrooms."
            cta="Ask for available LED designs"
            href={waLink(
              "Hi Oval Home 👋🏽\nI’m interested in LED Bathroom Mirrors.\nLocation: ____\nBudget range: ____\nPlease show available designs."
            )}
          />
          <MiniCard
            title="Decorative Mirrors"
            desc="Elegant pieces for interiors."
            cta="Ask for decorative options"
            href={waLink(
              "Hi Oval Home 👋🏽\nI’m interested in Decorative Mirrors.\nLocation: ____\nRoom: ____\nPlease show available designs."
            )}
          />
          <MiniCard
            title="Wall Mirrors"
            desc="Clean shapes and modern looks."
            cta="Ask for wall mirror options"
            href={waLink(
              "Hi Oval Home 👋🏽\nI’m interested in Wall Mirrors.\nLocation: ____\nSize preference: ____\nPlease show options."
            )}
          />
          <MiniCard
            title="Custom Enquiries"
            desc="Send size + space and we recommend."
            cta="Send your details"
            href={waLink(
              "Hi Oval Home 👋🏽\nI want a mirror recommendation.\nLocation: ____\nSpace: ____\nPreferred size: ____\nBudget: ____"
            )}
          />
        </div>
      </section>

      {/* Delivery + trust (Tier 2 credibility) */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold">Delivery</p>
            <p className="mt-2 text-sm text-slate-600">
              Accra: same-day / next-day delivery
              <br />
              Nationwide: 2–3 days
            </p>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold">Packaging</p>
            <p className="mt-2 text-sm text-slate-600">
              Mirrors are securely packaged for safe delivery.
            </p>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold">Quality</p>
            <p className="mt-2 text-sm text-slate-600">
              Imported designs with clean finishing for modern spaces.
            </p>
          </div>
        </div>
      </section>

      {/* All Designs */}
      <section id="designs" className="mx-auto max-w-6xl px-4 pb-8">
        <div className="mb-4 flex items-end justify-between">
          <h2 className="text-lg font-semibold">All Designs</h2>
          <p className="text-xs text-slate-500">{PRODUCT_ORDER.length} products</p>
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
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 md:flex-row md:justify-between">
          <div>
            <p className="font-medium">Oval Home</p>
            <p className="text-xs text-slate-500">Luxury LED Mirrors</p>
          </div>

          <div className="flex items-center gap-2">
            <SocialIcon href={SOCIALS.instagram} label="Instagram">
              <InstagramSvg />
            </SocialIcon>
            <SocialIcon href={SOCIALS.facebook} label="Facebook">
              <FacebookSvg />
            </SocialIcon>
            <SocialIcon href={SOCIALS.tiktok} label="TikTok">
              <TikTokSvg />
            </SocialIcon>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="ml-2 rounded-full bg-slate-900 px-4 py-2 text-sm text-white"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}