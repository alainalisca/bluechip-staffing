'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const industries = [
  { name: 'Accounting & Finance', href: '/industries/accounting-finance' },
  { name: 'Artificial Intelligence', href: '/industries/artificial-intelligence' },
  { name: 'Healthcare', href: '/industries/healthcare' },
  { name: 'Legal', href: '/industries/legal' },
  { name: 'Life Sciences', href: '/industries/life-sciences' },
  { name: 'Technology', href: '/industries/tech-it' },
  { name: 'Venture Capital & PE', href: '/industries/venture-capital' },
  { name: 'View All Industries →', href: '/industries' },
];

const mainNav = [
  { name: 'About', href: '/about' },
  { name: 'Employers', href: '/employers' },
  { name: 'Job Seekers', href: '/job-seekers' },
  { name: 'Industries', href: '#', hasDropdown: 'industries' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Blue Chip Staffing"
              width={160}
              height={50}
              className={`h-10 w-auto transition-all duration-300 ${
                isScrolled ? '' : 'brightness-0 invert'
              }`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {mainNav.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.hasDropdown)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.hasDropdown ? (
                  <button
                    className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                      isScrolled ? 'text-navy-700 hover:text-navy-900' : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {item.name}
                    <ChevronDown size={14} className={`transition-transform ${activeDropdown === item.hasDropdown ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-sm font-medium transition-colors ${
                      isScrolled ? 'text-navy-700 hover:text-navy-900' : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Industries Dropdown */}
                {item.hasDropdown === 'industries' && (
                  <AnimatePresence>
                    {activeDropdown === 'industries' && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-navy-100 py-2 overflow-hidden"
                      >
                        {industries.map((industry, idx) => (
                          <Link
                            key={industry.name}
                            href={industry.href}
                            className={`block px-4 py-2.5 text-sm text-navy-600 hover:bg-navy-50 hover:text-navy-900 transition-colors ${
                              idx === industries.length - 1 ? 'border-t border-navy-100 mt-1 pt-3 text-accent-600 font-medium' : ''
                            }`}
                          >
                            {industry.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className={`inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                isScrolled
                  ? 'bg-accent-500 text-white hover:bg-accent-600'
                  : 'bg-white text-navy-900 hover:bg-white/90'
              }`}
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 ${isScrolled ? 'text-navy-900' : 'text-white'}`}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-navy-100 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-1">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-navy-900 font-medium border-b border-navy-100"
              >
                Home
              </Link>
              {mainNav.filter(item => !item.hasDropdown).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 text-navy-700 border-b border-navy-100"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/industries"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-navy-700 border-b border-navy-100"
              >
                Industries
              </Link>
              <div className="pt-4">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center bg-accent-500 text-white py-3 rounded-lg font-medium"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
