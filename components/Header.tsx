'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const industries = [
  { name: 'Accounting & Finance', href: '/industries/accounting-finance' },
  { name: 'Artificial Intelligence', href: '/industries/artificial-intelligence' },
  { name: 'Banking & Mortgage', href: '/industries/banking-mortgage' },
  { name: 'Construction', href: '/industries/construction' },
  { name: 'Corporate & Professional', href: '/industries/corporate-professional' },
  { name: 'Healthcare', href: '/industries/healthcare' },
  { name: 'Legal/Law', href: '/industries/legal' },
  { name: 'Life Sciences', href: '/industries/life-sciences' },
  { name: 'Technology', href: '/industries/tech-it' },
  { name: 'View All Industries', href: '/industries' },
];

const mainNav = [
  { name: 'About', href: '/about' },
  { name: 'Employers', href: '/employers' },
  { name: 'Job Seekers', href: '/job-seekers' },
  { name: 'Industries', href: '#', hasDropdown: true },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Minimal top bar */}
      <div className="bg-navy-900 text-white py-2 px-6 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="text-xs tracking-widest uppercase text-navy-400">Nationwide Staffing</span>
          <a href="tel:1-800-309-0707" className="text-xs tracking-wide hover:text-accent-300 transition-colors">
            1-800-309-0707
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm'
            : 'bg-white'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Blue Chip Staffing"
                width={160}
                height={50}
                className="h-12 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation - refined spacing */}
            <div className="hidden lg:flex items-center gap-12">
              {mainNav.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <button
                      onMouseEnter={() => setIndustriesOpen(true)}
                      onMouseLeave={() => setIndustriesOpen(false)}
                      className="flex items-center gap-1 text-sm font-sans text-navy-700 hover:text-navy-900 transition-colors tracking-wide"
                    >
                      {item.name}
                      <ChevronDown size={14} className={`transition-transform duration-200 ${industriesOpen ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-sm font-sans text-navy-700 hover:text-navy-900 transition-colors tracking-wide"
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Industries Dropdown - editorial style */}
                  {item.hasDropdown && (
                    <AnimatePresence>
                      {industriesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          onMouseEnter={() => setIndustriesOpen(true)}
                          onMouseLeave={() => setIndustriesOpen(false)}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-white shadow-xl border border-navy-100 p-2"
                        >
                          {industries.map((industry, idx) => (
                            <Link
                              key={industry.name}
                              href={industry.href}
                              className={`block px-4 py-2.5 text-sm text-navy-600 hover:text-navy-900 hover:bg-cream-100 transition-colors ${
                                idx === industries.length - 1 ? 'border-t border-navy-100 mt-2 pt-3 font-medium' : ''
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

            {/* CTA - refined */}
            <div className="hidden lg:block">
              <Link href="/contact" className="btn-primary">
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-navy-900"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu - clean */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-navy-100 overflow-hidden"
            >
              <div className="px-6 py-8 space-y-1">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-navy-900 font-medium py-3 border-b border-navy-100"
                >
                  Home
                </Link>
                {mainNav.filter(item => !item.hasDropdown).map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-navy-700 py-3 border-b border-navy-100"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/industries"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-navy-700 py-3 border-b border-navy-100"
                >
                  Industries
                </Link>
                <div className="pt-6">
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="btn-primary w-full text-center">
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
