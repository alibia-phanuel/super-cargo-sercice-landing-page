import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "Super Cargo Service | Import Chine → Cameroun",
  description:
    "Super Cargo Service vous accompagne dans vos achats, importations, contrôle qualité, transport et livraison de la Chine vers le Cameroun.",
  keywords: [
    "import Chine Cameroun",
    "cargo Chine Cameroun",
    "transport maritime Cameroun",
    "achat Chine",
    "dédouanement Cameroun",
    "Super Cargo Service",
  ],
  icons: {
    icon: [
      { url: "/logo.ico" },
      { url: "/logo.ico", sizes: "32x32", type: "image/x-icon" },
    ],
    shortcut: "/logo.ico",
    apple: "/logo.ico",
  },
  openGraph: {
    title: "Super Cargo Service | Import Chine → Cameroun",
    description:
      "Votre partenaire de confiance entre la Chine et le Cameroun : achat, contrôle qualité, transport et livraison.",
    url: SITE.url,
    siteName: "Super Cargo Service",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Super Cargo Service | Import Chine → Cameroun",
    description:
      "Votre partenaire de confiance entre la Chine et le Cameroun : achat, contrôle qualité, transport et livraison.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Super Cargo Service",
  description:
    "Accompagnement des achats et importations entre la Chine et le Cameroun : achat, négociation, contrôle qualité, transport maritime et aérien, dédouanement, livraison.",
  areaServed: ["Cameroun", "Mali", "Togo", "Gabon", "Guinée équatoriale"],
  telephone: SITE.phonePrimary,
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "Yaoundé",
      addressCountry: "CM",
      streetAddress: "Entrée PMI Tsinga",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Douala",
      addressCountry: "CM",
      streetAddress: "Face Hôpital Bali",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
