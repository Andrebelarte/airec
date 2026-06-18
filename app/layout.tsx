import type { Metadata } from "next";
import { Space_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const siteUrl = "https://www.elexio.se";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Elexio – AI-receptionist för svenska företag",
    template: "%s | Elexio",
  },
  description:
    "Elexio är en svensktalande AI-receptionist som svarar i telefon dygnet runt, bokar möten och svarar på frågor. Missa aldrig ett samtal igen.",
  keywords: [
    "AI-receptionist",
    "AI telefonsvarare",
    "svensk AI",
    "automatisk telefonsvarare",
    "AI för företag",
    "samtalshantering",
    "bokningssystem",
  ],
  authors: [{ name: "Elexio" }],
  creator: "Elexio",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: siteUrl,
    siteName: "Elexio",
    title: "Elexio – AI-receptionist för svenska företag",
    description:
      "En svensktalande AI som hanterar samtal, bokar möten och svarar på frågor. Dygnet runt, alltid tillgänglig.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elexio – AI-receptionist för svenska företag",
    description:
      "En svensktalande AI som hanterar samtal, bokar möten och svarar på frågor. Dygnet runt, alltid tillgänglig.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Elexio",
    url: siteUrl,
    description:
      "Svensktalande AI-receptionist som svarar i telefon dygnet runt, bokar möten och svarar på frågor.",
    logo: `${siteUrl}/opengraph-image`,
    image: `${siteUrl}/opengraph-image`,
    areaServed: "SE",
    knowsLanguage: "sv-SE",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      areaServed: "SE",
      availableLanguage: "Swedish",
    },
  };

  return (
    <html lang="sv" className={`${spaceMono.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen flex flex-col font-[family-name:var(--font-space-grotesk)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
