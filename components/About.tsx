import Link from 'next/link';

export default function About() {
  const features = [
    {
      icon: '🎹',
      title: 'Skillful Mastery',
      description: 'With years dedicated to immersing ourselves in the realm of piano music, we have honed our expertise and established a global network to enrich your musical journey.',
    },
    {
      icon: '❤️',
      title: 'Dedication',
      description: 'Deeply entrenched in the realm of enchanting piano melodies, it goes beyond mere music; it\'s a cultural phenomenon. Positioned at the forefront of this melodic revolution, we embody unwavering devotion.',
    },
    {
      icon: '🌍',
      title: 'Global Resonance',
      description: 'Our impact extends far beyond borders. Artists associated with Amour Melodie Records have propelled enchanting piano tunes onto stages worldwide, creating a universal resonance.',
    },
    {
      icon: '🎵',
      title: 'Diverse Repertoire',
      description: 'Embracing the richness of musical diversity and artists, we recognize the significance of every note. Our mission is to amplify the symphonies of all, celebrating the harmonious variety within piano music.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-rose-500 bg-clip-text text-transparent">
            What Makes Amour Melodie Records Special?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Where Piano Music Thrives - Our mission is to discover, nurture, and elevate the harmonies that define global musical experiences.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-amber-100 hover:border-amber-300 hover:scale-105"
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-amber-600 to-rose-500 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
