export default function Platforms() {
  const platforms = [
    { name: 'Spotify', url: '#', icon: '🎧', color: 'from-green-500 to-green-600' },
    { name: 'Apple Music', url: '#', icon: '🍎', color: 'from-pink-500 to-pink-600' },
    { name: 'YouTube Music', url: '#', icon: '▶️', color: 'from-red-500 to-red-600' },
    { name: 'SoundCloud', url: '#', icon: '☁️', color: 'from-orange-500 to-orange-600' },
    { name: 'Bandcamp', url: '#', icon: '💿', color: 'from-blue-500 to-blue-600' },
    { name: 'Tidal', url: '#', icon: '🌊', color: 'from-cyan-500 to-cyan-600' },
  ];

  return (
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
          {platforms.map((platform, index) => (
            <a
              key={index}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-amber-300 flex flex-col items-center justify-center space-y-3 hover:scale-105`}
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
  );
}
