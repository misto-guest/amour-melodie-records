import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-100 via-rose-50 to-amber-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          {/* Label Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full text-sm font-medium text-amber-700 mb-6 border border-amber-200">
            <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 animate-pulse"></span>
            Amsterdam's Premier Piano Label
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-rose-500 to-amber-600 bg-clip-text text-transparent">
            Enchanting Piano Melodies
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            At Amour Melodie Records, we transcend the boundaries of a traditional music label.
            We are the visionary creators leading a revolution in piano music.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="group px-8 py-4 bg-gradient-to-r from-amber-600 to-rose-500 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Get Started
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              href="/releases"
              className="group px-8 py-4 bg-white text-amber-700 rounded-full font-semibold text-lg border-2 border-amber-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300"
            >
              Latest Releases
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* Piano Keys Decorative Element */}
          <div className="mt-16 flex justify-center">
            <div className="flex">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className={`w-8 h-24 mx-0.5 rounded-b-lg transition-all duration-300 ${
                    i % 2 === 0
                      ? 'bg-gradient-to-b from-gray-800 to-gray-900'
                      : 'bg-gradient-to-b from-white to-gray-100 border border-gray-200'
                  } hover:scale-110`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
