'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const services = [
  {
    title: 'Executive Search',
    description: 'C-level and VP-level leadership placement',
    href: '/employers#services',
  },
  {
    title: 'Direct Hire',
    description: 'Permanent placements with 90-day guarantee',
    href: '/employers#services',
  },
  {
    title: 'Contract Staffing',
    description: 'Flexible talent for any duration',
    href: '/employers#services',
  },
  {
    title: 'Contract-to-Hire',
    description: 'Evaluate before you commit',
    href: '/employers#services',
  },
];

const industries = [
  'Accounting & Finance',
  'Healthcare',
  'Technology',
  'Legal',
  'Life Sciences',
  'Manufacturing',
  'Construction',
  'Artificial Intelligence',
];

const stats = [
  { value: '50', label: 'States', suffix: '' },
  { value: '20', label: 'Years', suffix: '+' },
  { value: '22', label: 'Industries', suffix: '+' },
];

export default function Home() {
  return (
    <>
      {/* Hero Section - Editorial asymmetric layout */}
      <section className="min-h-[90vh] flex items-center bg-cream-50 relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-navy-900 hidden lg:block" />
        
        <div className="container-editorial section-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="eyebrow mb-6 block">Nationwide Staffing</span>
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-navy-900 mb-8 leading-[1.1]">
                  Elevating your workforce to{' '}
                  <em className="not-italic text-accent-600">new heights</em>
                </h1>
                <div className="divider mb-8" />
                <p className="text-lg text-navy-600 max-w-md mb-10 leading-relaxed">
                  Family-owned recruitment firm delivering exceptional 
                  staffing solutions across all 50 states since 2004.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/employers" className="btn-primary group">
                    Find Talent
                    <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={16} />
                  </Link>
                  <Link href="/job-seekers" className="btn-secondary">
                    Find Jobs
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Right - Image placeholder / Stats */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Image placeholder - editorial style */}
              <div className="aspect-[4/5] bg-navy-800 relative">
                <div className="absolute inset-0 flex items-end p-8">
                  <div className="text-white">
                    <span className="text-xs tracking-widest uppercase text-navy-400 block mb-2">Established</span>
                    <span className="font-display text-6xl">2004</span>
                  </div>
                </div>
                {/* Decorative overlay */}
                <div className="absolute top-8 -left-8 w-32 h-32 border border-accent-500/30" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar - Editorial large typography */}
      <section className="bg-navy-900 text-white py-16 md:py-20">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-3 gap-8 md:gap-16">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <span className="font-display text-5xl md:text-7xl lg:text-8xl block mb-2">
                    {stat.value}<span className="text-accent-400">{stat.suffix}</span>
                  </span>
                  <span className="text-xs md:text-sm tracking-widest uppercase text-navy-400">{stat.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Editorial layout */}
      <section className="section-padding bg-cream-50">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Left - Heading */}
            <div className="lg:col-span-4">
              <ScrollReveal direction="left">
                <span className="eyebrow mb-4 block">What We Do</span>
                <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">
                  Staffing solutions tailored to your needs
                </h2>
                <p className="text-navy-600 leading-relaxed mb-8">
                  Our dedicated team understands the importance of quality, competitive 
                  pricing, speed, and ethics in recruitment.
                </p>
                <Link href="/employers" className="inline-flex items-center text-sm font-medium text-navy-900 group">
                  View All Services
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </Link>
              </ScrollReveal>
            </div>

            {/* Right - Services list */}
            <div className="lg:col-span-8">
              <div className="space-y-0">
                {services.map((service, index) => (
                  <ScrollReveal key={service.title} delay={index * 0.1} direction="right">
                    <Link 
                      href={service.href}
                      className="group block py-8 border-b border-navy-200 hover:border-navy-900 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="text-xs text-navy-400 mb-2 block">0{index + 1}</span>
                          <h3 className="font-display text-2xl md:text-3xl text-navy-900 mb-2 group-hover:text-accent-600 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-navy-500">{service.description}</p>
                        </div>
                        <ArrowUpRight className="text-navy-300 group-hover:text-navy-900 transition-colors flex-shrink-0 mt-2" size={24} />
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section - Editorial grid */}
      <section className="section-padding bg-white">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
              <div>
                <span className="eyebrow mb-4 block">Industries</span>
                <h2 className="font-display text-4xl md:text-5xl text-navy-900">
                  Areas of expertise
                </h2>
              </div>
              <Link href="/industries" className="inline-flex items-center text-sm font-medium text-navy-900 group">
                View All 22 Industries
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </Link>
            </div>
          </ScrollReveal>

          {/* Editorial bento grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-navy-200">
            {industries.map((industry, index) => (
              <ScrollReveal key={industry} delay={index * 0.05}>
                <Link
                  href={`/industries/${industry.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-')}`}
                  className="group bg-white p-8 md:p-10 hover:bg-cream-100 transition-colors block h-full"
                >
                  <span className="text-xs text-navy-400 mb-4 block">0{index + 1}</span>
                  <h3 className="font-display text-xl md:text-2xl text-navy-900 group-hover:text-accent-600 transition-colors">
                    {industry}
                  </h3>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section - Editorial split */}
      <section className="bg-navy-900 text-white">
        <div className="grid lg:grid-cols-2">
          {/* Left - Image/Visual */}
          <div className="aspect-square lg:aspect-auto bg-navy-800 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-[12rem] md:text-[16rem] text-navy-700/50 select-none">
                BC
              </span>
            </div>
          </div>

          {/* Right - Content */}
          <div className="section-padding flex items-center">
            <div className="max-w-lg">
              <ScrollReveal direction="right">
                <span className="eyebrow text-accent-400 mb-4 block">Why Blue Chip</span>
                <h2 className="font-display text-4xl md:text-5xl mb-8">
                  Built on relationships, driven by results
                </h2>
                <div className="space-y-6 text-navy-300 mb-10">
                  <p className="leading-relaxed">
                    As a family-owned business, we understand the importance of trust, 
                    reliability, and personal service. Our success is built on long-term 
                    relationships with clients who trust us to deliver.
                  </p>
                  <p className="leading-relaxed">
                    We dont just fill positions—we build teams that drive success.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-8 mb-10">
                  <div>
                    <span className="font-display text-4xl text-accent-400 block mb-1">100%</span>
                    <span className="text-sm text-navy-400">Contingency Based</span>
                  </div>
                  <div>
                    <span className="font-display text-4xl text-accent-400 block mb-1">90 Day</span>
                    <span className="text-sm text-navy-400">Placement Guarantee</span>
                  </div>
                </div>
                <Link href="/about" className="btn-outline-light">
                  Learn Our Story
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Minimal editorial */}
      <section className="section-padding bg-cream-50">
        <div className="container-editorial text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-900 mb-6">
              Ready to elevate your team?
            </h2>
            <p className="text-lg text-navy-600 mb-10">
              Whether youre looking to hire top talent or find your next opportunity, 
              were here to help you succeed.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/employers" className="btn-primary">
                Im Hiring
              </Link>
              <Link href="/job-seekers" className="btn-secondary">
                Im Job Seeking
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
