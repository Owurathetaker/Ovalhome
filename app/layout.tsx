import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ovalhome.vercel.app"),
  title: "Oval Home — Luxury LED Mirrors",
  description:
    "Luxury LED mirrors with nationwide delivery. Browse designs and order easily on WhatsApp.",
  openGraph: {
    title: "Oval Home — Luxury LED Mirrors",
    description:
      "Luxury LED mirrors with nationwide delivery. Browse designs and order easily on WhatsApp.",
    images: ["/og.jpg"],
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "w1QF-fXQRcZrAR4Oi9fKM8DVu5RZ9rJGQUtLdiDoyj4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://ovalhome.vercel.app",
    name: "Oval Home",
    image: "https://ovalhome.vercel.app/og.jpg",
    url: "https://ovalhome.vercel.app",
    telephone: "+233554053999",
    priceRange: "$$",
    areaServed: "Ghana",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Accra",
      addressCountry: "GH",
    },
    description:
      "Oval Home supplies premium LED mirrors with fast delivery in Accra and nationwide delivery across Ghana.",
    sameAs: ["https://wa.me/233554053999"],
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {children}
      </body>
    </html>
  );
}