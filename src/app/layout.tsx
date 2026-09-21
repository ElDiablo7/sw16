import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileFloatingCTA from "@/components/MobileFloatingCTA";
import WhatsAppButton from "@/components/WhatsAppButton";
import AISalesAssistant from "@/components/AISalesAssistant";
import { BUSINESS_NAME, PHONE_NUMBER, ADDRESS } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    template: `${BUSINESS_NAME} | %s`,
    default: `${BUSINESS_NAME} | London's Trusted Local Removals Company`,
  },
  description: "Professional house and flat removals, single item collections, long distance moves, and furniture transport in London. Fully insured, trustworthy, and reliable.",
  openGraph: {
    title: `${BUSINESS_NAME} | London's Trusted Local Removals Company`,
    description: "Professional house and flat removals, single item collections, long distance moves, and furniture transport in London.",
    url: "https://sw16moves.co.uk",
    siteName: BUSINESS_NAME,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${BUSINESS_NAME} Removals`,
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS_NAME} | London's Trusted Local Removals Company`,
    description: "Professional house and flat removals, single item collections, long distance moves, and furniture transport in London.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS_NAME,
    address: {
      "@type": "PostalAddress",
      streetAddress: "12 Lyndhurst Avenue",
      addressLocality: "London",
      postalCode: "SW16 4UF",
      addressCountry: "GB",
    },
    telephone: "07466228506",
    areaServed: "London",
    priceRange: "££",
    image: "https://sw16moves.co.uk/logo.png",
    knowsAbout: ["Mover", "House Removals", "Furniture Transport", "Man and Van"],
  };

  return (
    <html lang="en-GB">
      <body className={`${inter.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
        <MobileFloatingCTA />
        <WhatsAppButton />
        <AISalesAssistant />
      </body>
    </html>
  );
}
