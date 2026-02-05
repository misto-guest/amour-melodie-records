import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Amour Melodie Records | Enchanting Piano Melodies - Amsterdam Piano Label',
    template: '%s | Amour Melodie Records'
  },
  description: "Amsterdam's premier piano music label. Discover enchanting piano melodies from world-class pianists. 5 Artists, 80+ Releases, 1200+ Tracks. Submit your demo today.",
  keywords: ['piano music label', 'Amsterdam music label', 'neo-classical piano', 'contemporary piano', 'piano artists', 'classical fusion', 'piano recordings', 'Dutch music label', 'piano label Netherlands', 'Amour Melodie Records'],
  authors: [{ name: 'Amour Melodie Records' }],
  creator: 'Amour Melodie Records',
  publisher: 'Amour Melodie Records',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://amourmelodierecords.net',
    languages: {
      'en-US': 'https://amourmelodierecords.net/en',
      'nl-NL': 'https://amourmelodierecords.net/nl',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://amourmelodierecords.net',
    title: 'Amour Melodie Records | Enchanting Piano Melodies',
    description: 'Amsterdam\'s premier piano music label. Discover enchanting piano melodies from world-class pianists.',
    siteName: 'Amour Melodie Records',
    images: [
      {
        url: 'https://amourmelodierecords.net/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Amour Melodie Records - Piano Music Label',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amour Melodie Records | Enchanting Piano Melodies',
    description: 'Amsterdam\'s premier piano music label. Discover enchanting piano melodies.',
    images: ['https://amourmelodierecords.net/twitter-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://amourmelodierecords.net/#organization",
        "name": "Amour Melodie Records",
        "url": "https://amourmelodierecords.net",
        "logo": "https://amourmelodierecords.net/logo.png",
        "sameAs": [
          "https://facebook.com/amourmelodierecords",
          "https://twitter.com/amourmelodierecords",
          "https://instagram.com/amourmelodierecords",
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "World Trade Center Amsterdam, 8th floor, Strawinskylaan 1",
          "addressLocality": "Amsterdam",
          "postalCode": "1077 XW",
          "addressCountry": "NL"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://amourmelodierecords.net/#website",
        "url": "https://amourmelodierecords.net",
        "name": "Amour Melodie Records",
        "publisher": {
          "@id": "https://amourmelodierecords.net/#organization"
        }
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaMarkup),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
