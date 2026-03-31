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
  title: "LED Mirrors in Accra, Ghana | Oval Home",
  description:
    "Shop LED mirrors in Accra, Ghana. Oval Home offers bathroom mirrors, decorative mirrors, vanity mirrors, and full-length mirrors with fast delivery in Accra and nationwide.",
  verification: {
    google: "w1QF-fXQRcZrAR4Oi9fKM8DVu5RZ9rJGQUtLdiDoyj4",
  },
  openGraph: {
    title: "LED Mirrors in Accra, Ghana | Oval Home",
    description:
      "Shop LED mirrors in Accra, Ghana. Oval Home offers bathroom mirrors, decorative mirrors, vanity mirrors, and full-length mirrors with fast delivery in Accra and nationwide.",
    images: ["https://ovalhome.vercel.app/og.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LED Mirrors in Accra, Ghana | Oval Home",
    description:
      "Shop LED mirrors in Accra, Ghana. Oval Home offers bathroom mirrors, decorative mirrors, vanity mirrors, and full-length mirrors with fast delivery in Accra and nationwide.",
    images: ["https://ovalhome.vercel.app/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}