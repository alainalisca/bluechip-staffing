'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Target,
  Heart,
  Linkedin,
  Globe,
  Handshake,
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const values = [
  {
    icon: Target,
    title: 'Quality First',
    description: 'We prioritize finding the right fit over filling positions quickly. Quality candidates lead to lasting placements.',
  },
  {
    icon: Handshake,
    title: 'Integrity',
    description: 'We operate with complete transparency and honesty in every interaction with clients and candidates.',
  },
  {
    icon: Heart,
    title: 'Diversity & Inclusion',
    description: 'We believe diverse teams drive innovation and are committed to inclusive hiring practices.',
  },
  {
    icon: Globe,
    title: 'Nationwide Reach',
    description: 'With coverage across all 50 states, we deliver local expertise with national capabilities.',
  },
];

const team = [
  {
    name: 'David Hirsch, MBA',
    title: 'Managing Director',
    bio: 'David has served as Managing Director since July 2020, bringing more than 20 years of experience in the staffing and recruiting industry. He holds an MBA from St. John\'s University and has built and led high-performing recruitment teams throughout his career. Prior to joining Blue Chip Staffing, David held leadership roles at several prominent staffing firms, including Robert Half.',
    linkedin: '#',
  },
  {
    name: 'Joel Custodio',
    title: 'VP Staffing',
    bio: 'Joel serves as Vice President of Staffing since February 2022. With several years of experience in recruiting leadership, team development, and workforce strategy, Joel plays an important role in helping organizations strengthen their hiring processes. He specializes in email marketing, outreach strategy, and automation with AI-driven personalization.',
    linkedin: '#',
  },
  {
    name: 'Ellen Levy',
    title: 'Director of Temporary Staffing',
    bio: 'Ellen has served as Director of Temporary Staffing since August 2020. With more than 15 years of experience in the staffing industry, Ellen specializes in helping organizations design and implement effective temporary workforce solutions for project-based work, leave coverage, seasonal demand, and large-scale workforce initiatives.',
    linkedin: '#',
  },
  {
    name: 'Tiffany Drysdale, MSHRM',
    title: 'Director of HR & Payroll',
    bio: 'Tiffany holds a Master of Science in Human Resource Management from Stony Brook University and brings strong expertise in human resources operations, payroll administration, and workforce compliance. She oversees human resources strategy, payroll management, and employee administration across the organization.',
    linkedin: '#',
  },
  {
    name: 'Thomas Lombardo',
    title: 'Senior Staffing Manager',
    bio: 'Thomas has served as Senior Staffing Manager since July 2020, bringing more than eight years of agency recruiting experience. He specializes in contract staffing, contract-to-hire, direct hire, and executive search, supporting organizations from startups to Fortune 500 companies across RPO, MSP, and VMS environments.',
    linkedin: '#',
  },
  {
    name: 'Kristine Delideli',
    title: 'Senior Recruiter',
    bio: 'Kristine has been with Blue Chip Staffing since 2025, serving as a Full-Cycle Recruiter supporting clients across a variety of industries. She specializes in managing the entire recruitment process, from sourcing and screening candidates to coordinating interviews and supporting successful placements.',
    linkedin: '#',
  },
  {
    name: 'Parker Singha',
    title: 'Technical Recruiter',
    bio: 'Parker serves as a Technical Recruiter since May 2024, focusing on identifying and placing technical professionals across a range of industries. He manages the recruitment process from sourcing and candidate engagement through interview coordination and placement.',
    linkedin: '#',
  },
];

export default function AboutPage() {
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
              About Us
            </span>
            <h1 className="heading-1 text-white mb-6">
              Your Partner in{' '}
              <span className="gradient-text">Building Great Teams</span>
            </h1>
            <p className="text-xl text-navy-300 leading-relaxed">
              Blue Chip Staffing is a family-owned and privately operated staffing agency 
              delivering high-end recruitment services across all 50 states. We pride ourselves 
              on exceptional staffing solutions tailored to meet your unique needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <span className="text-accent-600 font-semibold mb-2 block">Our Story</span>
              <h2 className="heading-2 text-navy-900 mb-6">
                Built on Relationships, Driven by Results
              </h2>
              <div className="space-y-4 text-navy-600 leading-relaxed">
                <p>
                  Blue Chip Staffing was founded with a simple mission: to connect great 
                  companies with exceptional talent. As a family-owned business, we understand 
                  the importance of trust, reliability, and personal service.
                </p>
                <p>
                  Over the years, we've grown from a regional staffing firm to a nationwide 
                  recruitment partner, serving organizations across every industry and in all 
                  50 states. Our success is built on long-term relationships with clients and 
                  candidates who trust us to deliver results.
                </p>
                <p>
                  Today, our team of experienced recruiters brings deep industry expertise 
                  and a commitment to quality that sets us apart. We don't just fill positions—we 
                  build teams that drive success.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-accent-50 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-accent-600 mb-2">20+</div>
                  <div className="text-navy-600">Years of Experience</div>
                </div>
                <div className="bg-navy-50 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-navy-800 mb-2">50</div>
                  <div className="text-navy-600">States Covered</div>
                </div>
                <div className="bg-navy-50 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-navy-800 mb-2">22+</div>
                  <div className="text-navy-600">Industries Served</div>
                </div>
                <div className="bg-accent-50 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-accent-600 mb-2">100%</div>
                  <div className="text-navy-600">Client Focus</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-navy-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="heading-2 text-navy-900 mb-4">Our Core Values</h2>
              <p className="text-navy-600 max-w-2xl mx-auto">
                These principles guide everything we do and define who we are as a company.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center mb-4">
                    <value.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-3">{value.title}</h3>
                  <p className="text-navy-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-accent-600 font-semibold mb-2 block">Our Team</span>
              <h2 className="heading-2 text-navy-900 mb-4">Meet the Leadership</h2>
              <p className="text-navy-600 max-w-2xl mx-auto">
                Our experienced team brings decades of combined expertise in staffing, 
                recruitment, and talent acquisition.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <ScrollReveal key={member.name} delay={index * 0.08}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  {/* Placeholder for headshot */}
                  <div className="h-48 bg-gradient-to-br from-navy-100 to-navy-200 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-navy-900">{member.name}</h3>
                        <p className="text-accent-600 font-medium text-sm">{member.title}</p>
                      </div>
                      <a
                        href={member.linkedin}
                        className="w-8 h-8 rounded-full bg-navy-100 flex items-center justify-center hover:bg-accent-500 hover:text-white text-navy-600 transition-colors"
                      >
                        <Linkedin size={16} />
                      </a>
                    </div>
                    <p className="text-navy-600 text-sm leading-relaxed line-clamp-4">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="heading-2 mb-4">Ready to Work With Us?</h2>
            <p className="text-navy-300 max-w-2xl mx-auto mb-8">
              Let's discuss how Blue Chip Staffing can help you find the perfect 
              talent or the perfect opportunity.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Contact Us
                <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link href="/employers" className="btn-outline-white">
                Employer Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
