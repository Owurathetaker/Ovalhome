// app/mirrors-in-accra/page.tsx

import type { Metadata } from "next";

const WA_NUMBER = "233554053999";

function waLink(message?: string) {
  const text = message
    ? message
    : "Hi Oval Home 👋🏽\nI want a mirror recommendation.\nLocation: ____\nSpace: ____\nBudget: ____";
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const metadata: Metadata = {
  title: "LED Mirrors in Accra, Ghana | Oval Home",
  description:
    "Find LED mirrors in Accra, Ghana. Shop bathroom mirrors, decorative mirrors, full-length mirrors, and modern wall mirrors from Oval Home.",
};

export default function MirrorsInAccraPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "LED Mirrors in Accra, Ghana | Oval Home",
    url: "https://ovalhome.vercel.app/mirrors-in-accra",
    description:
      "Find LED mirrors in Accra, Ghana. Oval Home supplies bathroom mirrors, decorative mirrors, full-length mirrors, and modern wall mirrors with delivery available.",
    about: {
      "@type": "Thing",
      name: "LED Mirrors in Accra",
    },
    provider: {
      "@type": "HomeGoodsStore",
      name: "Oval Home",
      url: "https://ovalhome.vercel.app",
    },
  };
  return (
    <main className="min-h-screen bg-[#fbf7f2] text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      <section className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-2xl font-semibold md:text-3xl">
          LED Mirrors in Accra, Ghana
        </h1>

        <p className="mt-4 text-sm leading-7 text-slate-600">
          Looking for LED mirrors in Accra? Oval Home supplies modern LED mirrors,
          bathroom mirrors, decorative mirrors, and full-length mirrors designed
          for homes, salons, and personal spaces across Ghana.
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-600">
          Our mirrors combine clean design, LED lighting, and durable finishing
          to give your space a premium look without unnecessary complexity.
          Whether you need a mirror for your bathroom, bedroom, or dressing area,
          we have options that fit different styles and budgets.
        </p>

        <div className="mt-6">
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-6">
        <h2 className="text-lg font-semibold">Types of Mirrors Available</h2>

        <div className="mt-4 space-y-6 text-sm text-slate-600 leading-7">
          <div>
            <h3 className="font-semibold text-slate-900">
              LED Bathroom Mirrors
            </h3>
            <p>
              LED bathroom mirrors provide clean lighting and a modern look,
              making them perfect for daily grooming, makeup, and creating a
              premium bathroom setup. These mirrors are ideal for both small and
              large bathrooms in Accra homes.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              Full-Length Mirrors
            </h3>
            <p>
              Full-length LED mirrors are perfect for bedrooms and dressing
              areas. They give you a complete view while adding a modern,
              stylish touch to your space.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              Decorative Mirrors
            </h3>
            <p>
              Decorative mirrors enhance interiors and add character to living
              spaces, hallways, and bedrooms. They are a simple way to upgrade
              your home without major changes.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              Wall Mirrors
            </h3>
            <p>
              Wall mirrors are versatile and suitable for everyday use. They fit
              into different spaces including bathrooms, bedrooms, and living
              areas while maintaining a clean, minimal look.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-6">
        <h2 className="text-lg font-semibold">
          Why Buy Mirrors from Oval Home?
        </h2>

        <ul className="mt-4 space-y-3 text-sm text-slate-600">
          <li>• Modern LED mirror designs</li>
          <li>• Clean finishing and quality materials</li>
          <li>• Affordable pricing (from GHS 300)</li>
          <li>• Fast delivery in Accra</li>
          <li>• Nationwide delivery across Ghana</li>
        </ul>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-6">
        <h2 className="text-lg font-semibold">
          Where to Buy Mirrors in Accra
        </h2>

        <p className="mt-4 text-sm leading-7 text-slate-600">
          If you are searching for where to buy mirrors in Accra, Oval Home makes
          the process simple. You can browse available mirror designs online and
          order directly through WhatsApp.
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-600">
          We handle delivery and ensure your mirror arrives safely. Whether you
          need a bathroom mirror, decorative mirror, or full-length mirror, we
          provide reliable service and quality products across Ghana.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <div className="rounded-2xl border border-black/10 bg-white p-6 text-center shadow-sm">
          <h2 className="text-lg font-semibold">
            Ready to get your mirror?
          </h2>

          <p className="mt-2 text-sm text-slate-600">
            Browse available designs or chat with us directly to find the perfect
            mirror for your space.
          </p>

          <div className="mt-4 flex justify-center gap-3">
            <a
              href="/#designs"
              className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm"
            >
              View Designs
            </a>

            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-slate-900 px-4 py-2 text-sm text-white"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}