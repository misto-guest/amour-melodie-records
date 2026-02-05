'use client';

import { useState } from 'react';

export default function Artists() {
  const [expandedArtist, setExpandedArtist] = useState<number | null>(null);

  const successStory = {
    title: "Unstoppable success with Amour Melodie Records",
    description: "Over time, we've been privileged to collaborate with groundbreaking pioneers in the piano music realm. These partners have risen with us, mirroring Amour Melodie Records' steadfast commitment to pushing the boundaries of piano music."
  };

  const artists = [
    {
      name: 'Alexander Reed',
      genre: 'Classical Fusion',
      bio: 'Alexander Reed is a classically trained pianist known for his innovative compositions that blend traditional piano techniques with contemporary electronic elements. His music captures the essence of modern life with a timeless touch, making him a favorite among both classical music enthusiasts and contemporary music lovers.',
      followers: '15.2K',
      image: 'A',
    },
    {
      name: 'Matteo Rivelli',
      genre: 'Romantic & Impressionist',
      bio: 'Matteo Rivelli is a virtuoso pianist from Italy whose performances are renowned for their emotional depth and technical prowess. He specializes in romantic and impressionist pieces, bringing a passionate and dynamic interpretation to every performance. Rivelli\'s concerts are a journey through the rich landscapes of piano music history.',
      followers: '12.8K',
      image: 'M',
    },
    {
      name: 'Elara Michaels',
      genre: 'Cinematic Soundscapes',
      bio: 'Elara Michaels is a celebrated pianist and composer known for her ethereal and cinematic soundscapes. Her music often incorporates elements of nature and storytelling, creating immersive experiences that transport listeners to otherworldly realms. Michaels\' compositions have been featured in film scores and contemporary dance productions worldwide.',
      followers: '18.5K',
      image: 'E',
    },
    {
      name: 'Noah Thompson',
      genre: 'Jazz Fusion',
      bio: 'Noah Thompson is an American jazz pianist who has made a name for himself with his unique fusion of jazz, blues, and classical music. His improvisational skills and inventive arrangements have earned him a reputation as one of the most exciting pianists in the modern jazz scene. Thompson\'s live performances are an exhilarating blend of spontaneity and precision.',
      followers: '14.1K',
      image: 'N',
    },
    {
      name: 'Sofia Dimitrova',
      genre: 'Contemporary Classical',
      bio: 'Sofia Dimitrova is a Bulgarian pianist whose expressive playing style and technical mastery have captivated audiences across Europe. Specializing in both solo and chamber music, Dimitrova brings a fresh perspective to classical piano repertoire, infusing each piece with a profound emotional resonance. Her dedication to promoting contemporary composers has also made her a significant figure in the modern classical music community.',
      followers: '11.3K',
      image: 'S',
    },
  ];

  return (
    <section id="artists" className="py-24 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Success Stories Section */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-rose-500 bg-clip-text text-transparent">
            Our Artists' Success Stories
          </h2>
          <div className="max-w-4xl mx-auto mb-8 p-8 bg-white rounded-2xl shadow-lg border border-amber-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{successStory.title}</h3>
            <p className="text-lg text-gray-600 leading-relaxed">{successStory.description}</p>
          </div>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-amber-600 to-rose-500 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Get Started
          </a>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-rose-500 bg-clip-text text-transparent">
            Meet Our Artists
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Talented pianists shaping the future of piano music
          </p>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-amber-100 hover:border-amber-300"
            >
              {/* Artist Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-amber-100 to-rose-100 flex items-center justify-center">
                <div className="text-8xl text-amber-600 font-bold">{artist.image}</div>
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-amber-700">
                  {artist.followers}
                </div>
              </div>

              {/* Artist Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{artist.name}</h3>
                <p className="text-sm text-amber-600 font-medium mb-3">{artist.genre}</p>
                <p 
                  className={`text-gray-600 leading-relaxed transition-all duration-300 ${
                    expandedArtist === index ? '' : 'line-clamp-3'
                  }`}
                >
                  {artist.bio}
                </p>
                {artist.bio.length > 150 && (
                  <button
                    onClick={() => setExpandedArtist(expandedArtist === index ? null : index)}
                    className="mt-3 text-amber-600 hover:text-amber-700 font-medium text-sm transition-colors"
                  >
                    {expandedArtist === index ? 'Show less' : 'Read more'}
                  </button>
                )}
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
