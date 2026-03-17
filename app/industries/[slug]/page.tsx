import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, CheckCircle, MapPin, Phone } from 'lucide-react';
import { industries, getIndustryBySlug, getAllIndustrySlugs } from '@/lib/industries';
import ScrollReveal from '@/components/ScrollReveal';

export async function generateStaticParams() {
  return getAllIndustrySlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const industry = getIndustryBySlug(params.slug);
  
  if (!industry) {
    return {
      title: 'Industry Not Found',
    };
  }

  return {
    title: `${industry.name} Staffing | Blue Chip Staffing`,
    description: industry.longDescription,
  };
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = getIndustryBySlug(params.slug);

  if (!industry) {
    notFound();
  }

  const Icon = industry.icon;

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center">
                <Icon className="text-white" size={32} />
              </div>
              <span className="px-4 py-2 rounded-full bg-accent-500/20 text-accent-300 text-sm font-medium">
                Industry Expertise
              </span>
            </div>
            <h1 className="heading-1 text-white mb-6">
              {industry.name}{' '}
              <span className="gradient-text">Staffing</span>
            </h1>
            <p className="text-xl text-navy-300 leading-relaxed mb-8">
              {industry.longDescription}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary group">
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <a href="tel:1-800-309-0707" className="btn-outline-white">
                <Phone className="mr-2" size={18} />
                1-800-309-0707
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Support */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="left">
              <span className="text-accent-600 font-semibold mb-2 block">Who We Serve</span>
              <h2 className="heading-2 text-navy-900 mb-6">Industries We Support</h2>
              <p className="text-navy-600 leading-relaxed mb-6">
                Our specialized recruiters understand the unique challenges and requirements 
                of your sector, delivering candidates who can make an immediate impact.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {industry.industriesWeSupport.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-navy-700">
                    <CheckCircle size={18} className="text-accent-500 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-navy-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-navy-900 mb-4">Staffing Solutions</h3>
                <p className="text-navy-600 mb-6">
                  We offer flexible staffing models to match your hiring needs and budget.
                </p>
                <div className="space-y-3">
                  {industry.staffingSolutions.map((solution) => (
                    <div
                      key={solution}
                      className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent-500" />
                      <span className="font-medium text-navy-800">{solution}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Roles We Recruit */}
      <section className="section-padding bg-navy-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-accent-600 font-semibold mb-2 block">Positions</span>
              <h2 className="heading-2 text-navy-900 mb-4">Roles We Recruit</h2>
              <p className="text-navy-600 max-w-2xl mx-auto">
                From entry-level professionals to senior executives, we recruit across 
                all levels and specializations.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {industry.rolesWeRecruit.map((role) => (
                  <div
                    key={role}
                    className="flex items-center gap-2 p-3 rounded-lg hover:bg-navy-50 transition-colors"
                  >
                    <CheckCircle size={16} className="text-accent-500 flex-shrink-0" />
                    <span className="text-sm text-navy-700">{role}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Nationwide Coverage */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-accent-600 to-accent-500 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <ScrollReveal direction="left">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin size={24} />
                  <span className="font-semibold">Nationwide Coverage</span>
                </div>
                <h2 className="heading-2 mb-4">
                  {industry.shortName} Staffing Across All 50 States
                </h2>
                <p className="text-white/80 leading-relaxed">
                  Whether you're in New York, California, or anywhere in between, 
                  Blue Chip Staffing has the network and expertise to deliver 
                  qualified {industry.shortName.toLowerCase()} professionals to your organization.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <div className="flex flex-wrap gap-4 md:justify-end">
                  <Link href="/contact" className="bg-white text-accent-600 px-6 py-3 rounded-lg font-semibold hover:bg-navy-50 transition-colors">
                    Schedule Consultation
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

      {/* Other Industries */}
      <section className="section-padding bg-navy-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="heading-3 text-navy-900 mb-4">Explore Other Industries</h2>
            </div>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-3">
            {industries
              .filter((ind) => ind.slug !== industry.slug)
              .slice(0, 8)
              .map((ind) => (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="px-4 py-2 bg-white rounded-full text-sm text-navy-700 hover:bg-accent-500 hover:text-white transition-colors shadow-sm"
                >
                  {ind.shortName}
                </Link>
              ))}
            <Link
              href="/industries"
              className="px-4 py-2 bg-accent-500 rounded-full text-sm text-white hover:bg-accent-600 transition-colors shadow-sm"
            >
              View All →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
