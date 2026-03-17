'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Building2, Briefcase, Clock } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const services = [
  {
    icon: Users,
    title: 'Executive Search',
    description: 'C-level and VP-level leadership placement with extensive vetting and market expertise.',
  },
  {
    icon: Briefcase,
    title: 'Direct Hire',
    description: 'Permanent placements backed by our 90-day guarantee for lasting success.',
  },
  {
    icon: Clock,
    title: 'Contract Staffing',
    description: 'Flexible, on-demand talent solutions for projects of any duration.',
  },
  {
    icon: Building2,
    title: 'Contract-to-Hire',
    description: 'Evaluate talent in real scenarios before making permanent commitments.',
  },
];

const industries = [
  'Accounting & Finance',
  'Artificial Intelligence',
  'Banking & Mortgage',
  'Construction',
  'Healthcare',
  'Legal',
  'Life Sciences',
  'Technology',
];

const clientTypes = [
  { label: 'Enterprise', count: '500+' },
  { label: 'Mid-Market', count: '1,200+' },
  { label: 'Startups', count: '300+' },
  { label: 'Government', count: '150+' },
];

const stats = [
  { value: '50', label: 'States', suffix: '' },
  { value: '20', label: 'Years', suffix: '+' },
  { value: '22', label: 'Industries', suffix: '' },
  { value: '100', label: 'Contingency', suffix: '%' },
];

export default function Home() {
  return (
    <>
      {/* Hero Section - Hunt Club dark style */}
      <section className="relative min-h-screen flex items-center bg-navy-950 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900" />
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 pt-40">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-accent-400 text-sm font-semibold tracking-wider uppercase mb-6">
                Nationwide Recruitment
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
                Your workforce is your 
                <span className="text-accent-400"> competitive advantage.</span>
                <br />We help you build it.
              </h1>
              <p className="text-xl text-navy-300 max-w-2xl mb-10 leading-relaxed">
                Family-owned staffing firm delivering exceptional talent across all 50 states. 
                From executive search to contract staffing, we find the people who drive results.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/employers" className="btn-primary">
                  Find Talent
                  <ArrowRight className="ml-2" size={18} />
                </Link>
                <Link href="/job-seekers" className="btn-outline-light">
                  Find Jobs
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-950 to-transparent" />
      </section>

      {/* Stats Bar */}
      <section className="bg-navy-900 border-y border-navy-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <span className="text-4xl md:text-5xl font-bold text-white">
                  {stat.value}<span className="text-accent-400">{stat.suffix}</span>
                </span>
                <span className="block text-sm text-navy-400 mt-1">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Prop Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <span className="eyebrow mb-4 block">Why Blue Chip</span>
              <h2 className="headline-section text-navy-900 mb-6">
                Today&apos;s companies need a partner who understands their challenges.
              </h2>
              <p className="text-lg text-navy-600 leading-relaxed mb-6">
                When you work with Blue Chip, you get more than a staffing vendor—you get a 
                dedicated partner invested in your success. Our family-owned approach means 
                we prioritize relationships over transactions.
              </p>
              <p className="text-navy-500 leading-relaxed mb-8">
                With over 20 years of experience and a nationwide network, we connect you 
                with pre-vetted talent that competitors simply can&apos;t access.
              </p>
              <Link href="/about" className="btn-dark">
                Learn More About Us
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                {services.map((service) => (
                  <div
                    key={service.title}
                    className="card-light"
                  >
                    <service.icon className="w-8 h-8 text-accent-500 mb-4" />
                    <h3 className="font-semibold text-navy-900 mb-2">{service.title}</h3>
                    <p className="text-sm text-navy-500 leading-relaxed">{service.description}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Who We Serve - Hunt Club tabs style */}
      <section className="section-padding bg-navy-50">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="eyebrow mb-4 block">Who We Serve</span>
              <h2 className="headline-section text-navy-900 mb-4">
                We partner with companies of every size.
              </h2>
              <p className="text-navy-600">
                From startups to Fortune 500s, we deliver talent solutions tailored to your stage and scale.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {clientTypes.map((type, index) => (
              <ScrollReveal key={type.label} delay={index * 0.1}>
                <div className="bg-white rounded-xl border border-navy-100 p-6 text-center hover:border-accent-500 hover:shadow-lg transition-all cursor-pointer">
                  <span className="text-3xl font-bold text-navy-900 block mb-1">{type.count}</span>
                  <span className="text-sm text-navy-500">{type.label} Clients</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
              <div>
                <span className="eyebrow mb-4 block">Industries</span>
                <h2 className="headline-section text-navy-900">
                  Deep expertise across 22 industries.
                </h2>
              </div>
              <Link href="/industries" className="text-accent-600 font-medium hover:text-accent-700 flex items-center gap-2">
                View All Industries
                <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <ScrollReveal key={industry} delay={index * 0.05}>
                <Link
                  href={`/industries/${industry.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-')}`}
                  className="group block bg-navy-900 rounded-xl p-6 hover:bg-navy-800 transition-colors"
                >
                  <span className="text-xs text-navy-500 block mb-2">0{index + 1}</span>
                  <h3 className="text-white font-medium group-hover:text-accent-400 transition-colors">
                    {industry}
                  </h3>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-navy-950">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-accent-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
                Our Process
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                A modern approach to recruitment.
              </h2>
              <p className="text-navy-300">
                We combine deep industry expertise with a relationship-first approach 
                to deliver candidates who make an immediate impact.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'We learn your business, culture, and exactly what success looks like for each role.' },
              { step: '02', title: 'Search', description: 'Our nationwide network and 20+ years of relationships surface candidates others miss.' },
              { step: '03', title: 'Placement', description: 'Rigorous vetting ensures culture fit and capability. Backed by our 90-day guarantee.' },
            ].map((item) => (
              <ScrollReveal key={item.step} delay={Number(item.step) * 0.05}>
                <div className="relative">
                  <span className="text-6xl font-bold text-navy-800 absolute -top-4 -left-2">{item.step}</span>
                  <div className="relative z-10 pt-12">
                    <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                    <p className="text-navy-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="headline-section text-navy-900 mb-6">
              Ready to build your team?
            </h2>
            <p className="text-lg text-navy-600 mb-10 max-w-2xl mx-auto">
              Whether you&apos;re looking to hire top talent or find your next opportunity, 
              we&apos;re here to help you succeed.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/employers" className="btn-primary">
                I&apos;m Hiring
                <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link href="/job-seekers" className="btn-secondary">
                I&apos;m Looking for Work
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
