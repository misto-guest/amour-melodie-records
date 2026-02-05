import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Platforms from '@/components/Platforms';
import Artists from '@/components/Artists';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Amour Melodie Records | Enchanting Piano Melodies',
  description: 'Where Piano Music Thrives. Amour Melodie Records is the premier destination for enchanting piano melodies, groundbreaking artists, and unforgettable musical experiences.',
  keywords: 'piano, classical music, instrumental, Amsterdam, music label, Amour Melodie Records, neo-classical, contemporary piano',
  openGraph: {
    title: 'Amour Melodie Records | Enchanting Piano Melodies',
    description: 'Where Piano Music Thrives. Premier destination for enchanting piano melodies and groundbreaking artists.',
    type: 'website',
    url: 'https://amourmelodierecords.net',
    siteName: 'Amour Melodie Records',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amour Melodie Records | Enchanting Piano Melodies',
    description: 'Where Piano Music Thrives. Premier destination for enchanting piano melodies and groundbreaking artists.',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Platforms />
        <Artists />
      </main>
      <Footer />
    </div>
  );
}
