import Link from 'next/link';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';

const quickLinks = [
  { name: 'About', href: '/about' },
  { name: 'Employers', href: '/employers' },
  { name: 'Job Seekers', href: '/job-seekers' },
  { name: 'Industries', href: '/industries' },
  { name: 'Contact', href: '/contact' },
];

const industries = [
  { name: 'Accounting & Finance', href: '/industries/accounting-finance' },
  { name: 'Healthcare', href: '/industries/healthcare' },
  { name: 'Technology', href: '/industries/tech-it' },
  { name: 'Legal', href: '/industries/legal' },
  { name: 'Life Sciences', href: '/industries/life-sciences' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Company Info - Wider */}
          <div className="lg:col-span-5">
            <Image
              src="/images/logo.png"
              alt="Blue Chip Staffing"
              width={160}
              height={50}
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-navy-400 mb-8 leading-relaxed max-w-sm">
              Family-owned staffing agency delivering exceptional 
              recruitment services across all 50 states.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-navy-400">
                211 East 43rd Street, New York, NY 10017
              </p>
              <p>
                <a href="tel:1-800-309-0707" className="text-white hover:text-accent-400 transition-colors">
                  1-800-309-0707
                </a>
              </p>
              <p>
                <a href="mailto:Recruitment@bluechipstaff.com" className="text-white hover:text-accent-400 transition-colors">
                  Recruitment@bluechipstaff.com
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs tracking-widest uppercase text-navy-500 mb-6">Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-navy-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className="lg:col-span-3">
            <h3 className="text-xs tracking-widest uppercase text-navy-500 mb-6">Industries</h3>
            <ul className="space-y-3">
              {industries.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-navy-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/industries"
                  className="text-accent-400 hover:text-accent-300 transition-colors text-sm"
                >
                  View All →
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="lg:col-span-2">
            <h3 className="text-xs tracking-widest uppercase text-navy-500 mb-6">Connect</h3>
            <a
              href="https://www.linkedin.com/company/bluechipstaffing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-navy-300 hover:text-white transition-colors text-sm"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-navy-500">
            <p>
              © {new Date().getFullYear()} Blue Chip Staffing LLC
            </p>
            <p>
              Design by{' '}
              <a
                href="https://vencerdigital.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-400 hover:text-white transition-colors"
              >
                VENCER Digital
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
