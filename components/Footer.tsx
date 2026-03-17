import Link from 'next/link';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';

const services = [
  { name: 'Executive Search', href: '/employers#services' },
  { name: 'Direct Hire', href: '/employers#services' },
  { name: 'Contract Staffing', href: '/employers#services' },
  { name: 'Contract-to-Hire', href: '/employers#services' },
];

const industries = [
  { name: 'Accounting & Finance', href: '/industries/accounting-finance' },
  { name: 'Healthcare', href: '/industries/healthcare' },
  { name: 'Technology', href: '/industries/tech-it' },
  { name: 'Legal', href: '/industries/legal' },
  { name: 'Life Sciences', href: '/industries/life-sciences' },
  { name: 'View All →', href: '/industries' },
];

const company = [
  { name: 'About', href: '/about' },
  { name: 'Employers', href: '/employers' },
  { name: 'Job Seekers', href: '/job-seekers' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo & Info */}
          <div className="col-span-2">
            <Image
              src="/images/logo.png"
              alt="Blue Chip Staffing"
              width={140}
              height={45}
              className="h-10 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-navy-400 text-sm leading-relaxed mb-6 max-w-xs">
              Family-owned staffing agency delivering exceptional recruitment 
              services across all 50 states since 2004.
            </p>
            <div className="space-y-1 text-sm">
              <p className="text-navy-500">211 East 43rd Street, Floor 7</p>
              <p className="text-navy-500">New York, NY 10017</p>
              <p className="mt-3">
                <a href="tel:1-800-309-0707" className="text-white hover:text-accent-400 transition-colors">
                  1-800-309-0707
                </a>
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-2.5">
              {services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-navy-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Industries</h4>
            <ul className="space-y-2.5">
              {industries.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`text-sm transition-colors ${
                      link.name === 'View All →' 
                        ? 'text-accent-400 hover:text-accent-300' 
                        : 'text-navy-400 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2.5">
              {company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-navy-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a
                href="https://www.linkedin.com/company/bluechipstaffing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-navy-400 hover:text-white transition-colors text-sm"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-navy-500">
            <p>© {new Date().getFullYear()} Blue Chip Staffing LLC. All rights reserved.</p>
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
