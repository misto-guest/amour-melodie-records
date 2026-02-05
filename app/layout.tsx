import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: 'Amour Melodie Records | Enchanting Piano Melodies',
    template: '%s | Amour Melodie Records'
  },
  description: "Where Piano Music Thrives. Amour Melodie Records is the premier destination for enchanting piano melodies, groundbreaking artists, and unforgettable musical experiences.",
  keywords: ['piano', 'classical music', 'instrumental', 'Amsterdam', 'music label', 'neo-classical', 'contemporary piano'],
  authors: [{ name: 'Amour Melodie Records' }],
  creator: 'Amour Melodie Records',
  publisher: 'Amour Melodie Records',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://amourmelodierecords.net',
    title: 'Amour Melodie Records | Enchanting Piano Melodies',
    description: 'Where Piano Music Thrives. Premier destination for enchanting piano melodies and groundbreaking artists.',
    siteName: 'Amour Melodie Records',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amour Melodie Records | Enchanting Piano Melodies',
    description: 'Where Piano Music Thrives. Premier destination for enchanting piano melodies and groundbreaking artists.',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
