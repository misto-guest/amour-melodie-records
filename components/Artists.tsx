'use client';

import { useState } from 'react';

export default function Artists() {
  const [selectedArtist, setSelectedArtist] = useState<number | null>(null);

  const artists = [
    {
      name: 'Alexander Reed',
      genre: 'Classical Fusion',
      bio: 'Alexander Reed is a classically trained pianist known for his innovative compositions that blend traditional piano techniques with contemporary electronic elements. His music captures the essence of modern life with a timeless touch.',
      followers: '15.2K',
    },
    {
      name: 'Matteo Rivelli',
      genre: 'Romantic & Impressionist',
      bio: 'Matteo Rivelli is a virtuoso pianist from Italy whose performances are renowned for their emotional depth and technical prowess. He specializes in romantic and impressionist pieces, bringing passionate interpretation to every performance.',
      followers: '12.8K',
    },
    {
      name: 'Elara Michaels',
      genre: 'Cinematic Soundscapes',
      bio: 'Elara Michaels is a celebrated pianist and composer known for her ethereal and cinematic soundscapes. Her music incorporates elements of nature and storytelling, creating immersive experiences that transport listeners to otherworldly realms.',
      followers: '18.5K',
    },
    {
      name: 'Noah Thompson',
      genre: 'Jazz Fusion',
      bio: 'Noah Thompson is an American jazz pianist who has made a name for himself with his unique fusion of jazz, blues, and classical music. His improvisational skills and inventive arrangements have earned him a reputation as one of the most exciting pianists in modern jazz.',
      followers: '14.1K',
    },
    {
      name: 'Sofia Dimitrova',
      genre: 'Contemporary Classical',
      bio: 'Sofia Dimitrova is a Bulgarian pianist whose expressive playing style and technical mastery have captivated audiences across Europe. Specializing in both solo and chamber music, she brings a fresh perspective to classical piano repertoire.',
      followers: '11.3K',
    },
  ];

  return (
    <section id="artists" className="py-24 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-rose-500 bg-clip-text text-transparent">
            Our Artists
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our talented roster of pianists shaping the future of piano music
          </p>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist, index) => (
            <div
              key={index}
              onMouseEnter={() => setSelectedArtist(index)}
              onMouseLeave={() => setSelectedArtist(null)}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-amber-100 ${
                selectedArtist === index ? 'scale-105 border-amber-300' : ''
              }`}
            >
              {/* Artist Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-amber-100 to-rose-100 flex items-center justify-center">
                <div className="text-8xl transform group-hover:scale-110 transition-transform duration-300">
                  {artist.name.charAt(0)}
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-amber-700">
                  {artist.followers}
                </div>
              </div>

              {/* Artist Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{artist.name}</h3>
                <p className="text-sm text-amber-600 font-medium mb-3">{artist.genre}</p>
                <p className="text-gray-600 leading-relaxed">{artist.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-white px-8 py-4 rounded-full shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-rose-500 bg-clip-text text-transparent">5</div>
              <div className="text-sm text-gray-600">Artists</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-rose-500 bg-clip-text text-transparent">80+</div>
              <div className="text-sm text-gray-600">Releases</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-rose-500 bg-clip-text text-transparent">1200+</div>
              <div className="text-sm text-gray-600">Tracks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
