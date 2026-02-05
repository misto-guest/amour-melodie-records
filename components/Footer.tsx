import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com', icon: '📘' },
    { name: 'Twitter', url: 'https://twitter.com', icon: '🐦' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
    { name: 'Instagram', url: 'https://instagram.com', icon: '📷' },
  ];

  const quickLinks = [
    { name: 'Send Your Demo', url: '/demo' },
    { name: 'Contact Us', url: '/contact' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent mb-4">
              Amour Melodie Records
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Enchanting Piano Melodies - Where Piano Music Thrives. Our mission is to discover, nurture, and elevate the harmonies that define global musical experiences.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="text-xl">📧</div>
                <div>
                  <div className="font-semibold text-white">Email</div>
                  <a href="mailto:contact@amourmelodierecords.net" className="text-amber-400 hover:text-amber-300 transition-colors">
                    contact@amourmelodierecords.net
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="text-xl">📍</div>
                <div>
                  <div className="font-semibold text-white">Address</div>
                  <div className="text-gray-400">
                    World Trade Center Amsterdam<br />
                    8th floor, Strawinskylaan 1<br />
                    1077 XW Amsterdam
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="text-xl">🌐</div>
                <div>
                  <div className="font-semibold text-white">Languages</div>
                  <div className="text-gray-400">
                    We zijn te bereiken in het Nederlands en Engels!
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className="text-gray-400 hover:text-amber-400 transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
                >
                  <span className="text-xl">{social.icon}</span>
                  <span className="text-sm group-hover:text-amber-400 transition-colors">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 p-6 bg-gray-800 rounded-xl">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold text-white mb-2">Subscribe</h3>
            <p className="text-gray-400 text-sm mb-4">Stay updated with our latest releases and artist news.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-amber-500 text-white placeholder-gray-400"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-amber-600 to-rose-500 text-white rounded-lg hover:shadow-lg transition-all font-semibold"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© {currentYear} Amour Melodie Records All Rights Reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy" className="hover:text-amber-400 transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-amber-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
