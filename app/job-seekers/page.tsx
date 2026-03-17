'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Briefcase,
  TrendingUp,
  Users,
  MapPin,
  CheckCircle,
  Star,
  FileText,
  Building2,
  Clock,
  DollarSign,
  Heart,
  Award,
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const benefits = [
  {
    icon: Briefcase,
    title: 'Access Top Opportunities',
    description: 'Get connected to positions at leading companies that may not be publicly advertised.',
  },
  {
    icon: Users,
    title: 'Personal Career Partner',
    description: 'Work with dedicated recruiters who understand your goals and advocate for you.',
  },
  {
    icon: MapPin,
    title: 'Nationwide Reach',
    description: 'Explore opportunities across all 50 states with one trusted partner.',
  },
  {
    icon: DollarSign,
    title: 'Competitive Compensation',
    description: 'We negotiate on your behalf to ensure you receive fair market value.',
  },
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'Find roles that align with your long-term career aspirations.',
  },
  {
    icon: Heart,
    title: 'Free Service',
    description: 'Our services are completely free for job seekers—always.',
  },
];

const jobTypes = [
  {
    icon: Building2,
    title: 'Direct Hire',
    description: 'Full-time permanent positions with excellent benefits and growth potential.',
  },
  {
    icon: Clock,
    title: 'Contract',
    description: 'Flexible assignments ranging from weeks to months based on your preferences.',
  },
  {
    icon: CheckCircle,
    title: 'Contract-to-Hire',
    description: 'Try out a role before committing full-time—great for finding the right fit.',
  },
  {
    icon: Star,
    title: 'Executive Roles',
    description: 'C-level and VP-level positions for experienced leaders ready for their next challenge.',
  },
];

const industries = [
  'Accounting & Finance',
  'Healthcare',
  'Technology',
  'Legal',
  'Manufacturing',
  'Human Resources',
  'Marketing',
  'Banking & Finance',
  'Insurance',
  'Nonprofit',
  'Real Estate',
  'Project Management',
];

const steps = [
  {
    number: '1',
    title: 'Submit Your Resume',
    description: 'Share your resume and tell us about your career goals and preferences.',
  },
  {
    number: '2',
    title: 'Meet Your Recruiter',
    description: 'Connect with a dedicated recruiter who specializes in your industry.',
  },
  {
    number: '3',
    title: 'Explore Opportunities',
    description: 'Review curated job matches that align with your skills and aspirations.',
  },
  {
    number: '4',
    title: 'Interview & Land the Job',
    description: 'Get interview prep, feedback, and support through the entire process.',
  },
];

export default function JobSeekersPage() {
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
              For Job Seekers
            </span>
            <h1 className="heading-1 text-white mb-6">
              Find Your{' '}
              <span className="gradient-text">Dream Career</span>
            </h1>
            <p className="text-xl text-navy-300 leading-relaxed mb-8">
              Connect with top employers nationwide. Whether you're seeking a full-time role, 
              contract position, or executive opportunity, we're here to help you succeed.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary group">
                Submit Your Resume
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <a href="tel:1-800-309-0707" className="btn-outline-white">
                Talk to a Recruiter
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-accent-600 font-semibold mb-2 block">Why Work With Us</span>
              <h2 className="heading-2 text-navy-900 mb-4">Your Career, Our Priority</h2>
              <p className="text-navy-600 max-w-2xl mx-auto">
                We're more than just a staffing agency—we're your career partner, 
                dedicated to helping you find the right opportunity.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={benefit.title} delay={index * 0.08}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full border border-navy-100">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center mb-4">
                    <benefit.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-2">{benefit.title}</h3>
                  <p className="text-navy-600 leading-relaxed">{benefit.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Job Types Section */}
      <section className="section-padding bg-navy-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <span className="text-accent-600 font-semibold mb-2 block">Opportunities</span>
              <h2 className="heading-2 text-navy-900 mb-6">
                Find the Right Fit for Your Career
              </h2>
              <p className="text-navy-600 leading-relaxed mb-6">
                Whether you're looking for stability, flexibility, or your next big leadership 
                role, we have opportunities to match your goals.
              </p>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <span
                    key={industry}
                    className="px-3 py-1 bg-white rounded-full text-sm text-navy-700 border border-navy-200"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 gap-4">
              {jobTypes.map((type, index) => (
                <ScrollReveal key={type.title} delay={index * 0.1} direction="right">
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow h-full">
                    <div className="w-12 h-12 rounded-lg bg-accent-100 flex items-center justify-center mb-4">
                      <type.icon className="text-accent-600" size={24} />
                    </div>
                    <h3 className="font-semibold text-navy-900 mb-2">{type.title}</h3>
                    <p className="text-navy-600 text-sm">{type.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-accent-600 font-semibold mb-2 block">How It Works</span>
              <h2 className="heading-2 text-navy-900 mb-4">Your Path to Success</h2>
              <p className="text-navy-600 max-w-2xl mx-auto">
                Getting started is easy. Here's how we help you find your next opportunity.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">{step.title}</h3>
                  <p className="text-navy-600 text-sm">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial/Trust Section */}
      <section className="section-padding bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <Award className="mx-auto mb-6 text-accent-400" size={48} />
              <h2 className="heading-2 mb-6">Trusted by Thousands of Professionals</h2>
              <p className="text-xl text-navy-300 leading-relaxed mb-8">
                "Blue Chip Staffing helped me find my dream job in just two weeks. 
                Their recruiters truly understood what I was looking for and connected 
                me with the perfect opportunity."
              </p>
              <p className="text-accent-400 font-semibold">— Recent Placement</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-accent-600 to-accent-500 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <ScrollReveal direction="left">
                <h2 className="heading-2 mb-4">Ready to Take the Next Step?</h2>
                <p className="text-white/80 leading-relaxed">
                  Submit your resume today and let our expert recruiters connect you 
                  with opportunities that match your skills and career goals.
                </p>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <div className="flex flex-wrap gap-4 md:justify-end">
                  <Link href="/contact" className="bg-white text-accent-600 px-6 py-3 rounded-lg font-semibold hover:bg-navy-50 transition-colors inline-flex items-center">
                    <FileText className="mr-2" size={20} />
                    Submit Resume
                  </Link>
                  <a href="tel:1-800-309-0707" className="border-2 border-white/30 px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                    Call Us
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
