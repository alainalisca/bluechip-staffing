'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Users,
  Search,
  Clock,
  CheckCircle,
  Shield,
  DollarSign,
  Zap,
  Award,
  Building2,
  Briefcase,
  Target,
  TrendingUp,
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const services = [
  {
    icon: Search,
    title: 'Executive Search',
    description: 'Build superior leadership teams by identifying transformational and diverse leaders for C-level and VP-level roles. Our executive search practice combines deep industry knowledge with a rigorous vetting process.',
    features: ['C-Suite Placement', 'VP-Level Roles', 'Board Members', 'Confidential Searches'],
  },
  {
    icon: Users,
    title: 'Direct Hire',
    description: 'Add full-time employees from entry to senior-level positions. We handle the entire recruitment process, presenting only the most qualified candidates who match your culture and requirements.',
    features: ['No Retainer Fees', '90-Day Guarantee', 'All Experience Levels', 'Cultural Fit Focus'],
  },
  {
    icon: Clock,
    title: 'Contract Staffing',
    description: 'Hire professionals on a temporary basis for short or long-term assignments. Perfect for project-based work, seasonal demands, or covering employee leaves.',
    features: ['Flexible Terms', 'Quick Deployment', 'Project-Based', 'Seasonal Support'],
  },
  {
    icon: CheckCircle,
    title: 'Contract-to-Hire',
    description: 'Evaluate candidates on the job before making a permanent commitment. This approach reduces hiring risk while ensuring the right fit for both parties.',
    features: ['Risk Mitigation', 'Performance Evaluation', 'Seamless Conversion', 'Flexible Timelines'],
  },
  {
    icon: Building2,
    title: 'Managed Services',
    description: 'Let us manage your entire contingent workforce program. We handle everything from sourcing and onboarding to payroll and compliance.',
    features: ['Program Management', 'Vendor Consolidation', 'Cost Control', 'Compliance Oversight'],
  },
  {
    icon: Briefcase,
    title: 'Payrolling Services',
    description: 'Already found your candidate? We can handle the administrative burden of payroll, benefits, and compliance while you focus on your business.',
    features: ['Payroll Processing', 'Benefits Administration', 'Tax Compliance', 'HR Support'],
  },
];

const benefits = [
  {
    icon: Award,
    title: 'Quality Candidates',
    description: 'We thoroughly vet every candidate to ensure they meet your standards.',
  },
  {
    icon: DollarSign,
    title: 'Competitive Pricing',
    description: 'Industry-leading rates that work within your budget.',
  },
  {
    icon: Zap,
    title: 'Fast Turnaround',
    description: 'Quick response times and efficient placement processes.',
  },
  {
    icon: Shield,
    title: '90-Day Guarantee',
    description: 'Direct hire placements backed by our satisfaction guarantee.',
  },
  {
    icon: Target,
    title: 'Industry Expertise',
    description: 'Specialized recruiters who understand your sector.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'From single hires to large workforce initiatives.',
  },
];

const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We learn about your company, culture, and specific hiring needs.',
  },
  {
    step: '02',
    title: 'Strategy',
    description: 'We develop a customized recruitment strategy tailored to your requirements.',
  },
  {
    step: '03',
    title: 'Sourcing',
    description: 'Our recruiters tap into extensive networks to identify top candidates.',
  },
  {
    step: '04',
    title: 'Screening',
    description: 'Rigorous vetting ensures only qualified candidates are presented.',
  },
  {
    step: '05',
    title: 'Presentation',
    description: 'You receive a shortlist of pre-screened, qualified candidates.',
  },
  {
    step: '06',
    title: 'Placement',
    description: 'We coordinate interviews, negotiations, and onboarding support.',
  },
];

export default function EmployersPage() {
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
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent-500/20 text-accent-300 text-sm font-medium mb-6">
              For Employers
            </span>
            <h1 className="heading-1 text-white mb-6">
              Find the{' '}
              <span className="gradient-text">Perfect Talent</span>{' '}
              for Your Team
            </h1>
            <p className="text-xl text-navy-300 leading-relaxed mb-8">
              From executive search to contract staffing, we deliver tailored recruitment 
              solutions that help you build high-performing teams across all 50 states.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary group">
                Schedule Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <a href="tel:1-800-309-0707" className="btn-outline-white">
                Call 1-800-309-0707
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-accent-600 font-semibold mb-2 block">Our Services</span>
              <h2 className="heading-2 text-navy-900 mb-4">Comprehensive Staffing Solutions</h2>
              <p className="text-navy-600 max-w-2xl mx-auto">
                Whether you need one executive or an entire department, we have the 
                expertise and resources to deliver.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.08}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full border border-navy-100">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center mb-4">
                    <service.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-3">{service.title}</h3>
                  <p className="text-navy-600 text-sm leading-relaxed mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-navy-700">
                        <CheckCircle size={16} className="text-accent-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-navy-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="heading-2 text-navy-900 mb-4">Why Partner With Us?</h2>
              <p className="text-navy-600 max-w-2xl mx-auto">
                We're not just another staffing agency. We're your strategic hiring partner.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={benefit.title} delay={index * 0.08}>
                <div className="flex gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-accent-100 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="text-accent-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-1">{benefit.title}</h3>
                    <p className="text-navy-600 text-sm">{benefit.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-accent-600 font-semibold mb-2 block">Our Process</span>
              <h2 className="heading-2 text-navy-900 mb-4">How We Work</h2>
              <p className="text-navy-600 max-w-2xl mx-auto">
                Our proven recruitment process ensures you get the right talent, every time.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((item, index) => (
              <ScrollReveal key={item.step} delay={index * 0.1}>
                <div className="relative p-6">
                  <div className="text-6xl font-bold text-navy-100 absolute top-0 left-0">
                    {item.step}
                  </div>
                  <div className="relative pt-8 pl-4">
                    <h3 className="text-xl font-semibold text-navy-900 mb-2">{item.title}</h3>
                    <p className="text-navy-600">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-accent-600 to-accent-500 text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <ScrollReveal direction="left">
              <h2 className="heading-2 mb-4">Ready to Build Your Dream Team?</h2>
              <p className="text-white/80 leading-relaxed">
                Let's discuss your hiring needs. Our team is ready to help you find 
                the perfect candidates to drive your business forward.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="flex flex-wrap gap-4 md:justify-end">
                <Link href="/contact" className="bg-white text-accent-600 px-6 py-3 rounded-lg font-semibold hover:bg-navy-50 transition-colors">
                  Get Started
                </Link>
                <a href="tel:1-800-309-0707" className="border-2 border-white/30 px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Call Us Now
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
