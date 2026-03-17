'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { industries } from '@/lib/industries';

export default function IndustriesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent-500/20 text-accent-300 text-sm font-medium mb-6">
              Industries We Serve
            </span>
            <h1 className="heading-1 text-white mb-6">
              Specialized Expertise Across{' '}
              <span className="gradient-text">Every Sector</span>
            </h1>
            <p className="text-xl text-navy-300 leading-relaxed">
              From healthcare to technology, finance to manufacturing, our recruiters 
              bring deep industry knowledge to every placement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <ScrollReveal key={industry.slug} delay={index * 0.05}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-navy-100 h-full flex flex-col"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <industry.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-2 group-hover:text-accent-600 transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-navy-600 text-sm leading-relaxed flex-grow">
                    {industry.description}
                  </p>
                  <div className="flex items-center text-accent-600 font-medium mt-4 text-sm">
                    Learn More
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-navy-50">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="heading-2 text-navy-900 mb-4">Don't See Your Industry?</h2>
            <p className="text-navy-600 max-w-2xl mx-auto mb-8">
              We work with organizations across virtually every sector. 
              Contact us to discuss your specific staffing needs.
            </p>
            <Link href="/contact" className="btn-primary">
              Contact Us
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
