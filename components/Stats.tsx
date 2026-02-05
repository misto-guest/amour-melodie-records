'use client';

import { useState } from 'react';

export default function Stats() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const stats = [
    { number: '5', label: 'Artists', suffix: '' },
    { number: '80', label: 'Releases', suffix: '+' },
    { number: '1200', label: 'Tracks', suffix: '+' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`text-center p-8 rounded-2xl transition-all duration-300 ${
                hoveredIndex === index
                  ? 'bg-gradient-to-br from-amber-50 to-rose-50 scale-105 shadow-xl'
                  : 'bg-gradient-to-br from-gray-50 to-amber-50 hover:shadow-lg'
              }`}
            >
              <div className={`text-6xl font-bold mb-2 bg-gradient-to-r from-amber-600 to-rose-500 bg-clip-text text-transparent transition-transform duration-300 ${
                hoveredIndex === index ? 'scale-110' : 'scale-100'
              }`}>
                {stat.number}
                <span className="text-4xl">{stat.suffix}</span>
              </div>
              <div className="text-xl text-gray-600 font-medium uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
