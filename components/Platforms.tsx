export default function Platforms() {
  const streamingPlatforms = [
    { name: 'Spotify', url: '#', icon: '🎧', color: 'from-green-500 to-green-600' },
    { name: 'Apple Music', url: '#', icon: '🍎', color: 'from-pink-500 to-pink-600' },
    { name: 'YouTube Music', url: '#', icon: '▶️', color: 'from-red-500 to-red-600' },
    { name: 'SoundCloud', url: '#', icon: '☁️', color: 'from-orange-500 to-orange-600' },
    { name: 'Bandcamp', url: '#', icon: '💿', color: 'from-blue-500 to-blue-600' },
    { name: 'Tidal', url: '#', icon: '🌊', color: 'from-cyan-500 to-cyan-600' },
  ];

  const podcastPlatforms = [
    { name: 'Spotify Podcasts', url: '#', icon: '🎙️' },
    { name: 'Apple Podcasts', url: '#', icon: '🍎' },
    { name: 'Google Podcasts', url: '#', icon: '🔊' },
    { name: 'SoundCloud', url: '#', icon: '☁️' },
  ];

  return (
    <>
      {/* Streaming Section */}
      <section className="py-20 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-rose-500 bg-clip-text text-transparent">
              Stream Our Music
            </h2>
            <p className="text-lg text-gray-600">
              Listen to our releases on your favorite platform
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {streamingPlatforms.map((platform, index) => (
              <a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-amber-300 flex flex-col items-center justify-center space-y-3 hover:scale-105"
              >
                <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                  {platform.icon}
                </div>
                <div className="text-sm font-semibold text-gray-700 text-center">
                  {platform.name}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Podcast Section */}
      <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-rose-500 bg-clip-text text-transparent">
            Listen Our Podcast On
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {podcastPlatforms.map((platform, index) => (
              <a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-100 hover:border-amber-300 flex flex-col items-center justify-center space-y-2 hover:scale-105"
              >
                <div className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                  {platform.icon}
                </div>
                <div className="text-xs font-semibold text-gray-700 text-center">
                  {platform.name}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
