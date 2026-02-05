'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-rose-500 bg-clip-text text-transparent">
              Amour Melodie
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#about" className="text-gray-700 hover:text-amber-600 transition-colors">
              About
            </Link>
            <Link href="/#artists" className="text-gray-700 hover:text-amber-600 transition-colors">
              Artists
            </Link>
            <Link href="/releases" className="text-gray-700 hover:text-amber-600 transition-colors">
              Releases
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-amber-600 transition-colors">
              Contact
            </Link>
            <Link
              href="/demo"
              className="px-4 py-2 bg-gradient-to-r from-amber-600 to-rose-500 text-white rounded-lg hover:shadow-lg transition-all"
            >
              Send Your Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-amber-50"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link
              href="/#about"
              className="block px-4 py-2 text-gray-700 hover:bg-amber-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#artists"
              className="block px-4 py-2 text-gray-700 hover:bg-amber-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Artists
            </Link>
            <Link
              href="/releases"
              className="block px-4 py-2 text-gray-700 hover:bg-amber-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Releases
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 text-gray-700 hover:bg-amber-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/demo"
              className="block px-4 py-2 bg-gradient-to-r from-amber-600 to-rose-500 text-white rounded-lg text-center"
              onClick={() => setIsOpen(false)}
            >
              Send Your Demo
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
