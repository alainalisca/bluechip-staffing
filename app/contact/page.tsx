'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Linkedin,
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const offices = [
  { state: 'New York City (HQ)', address: '211 East 43rd Street, Floor 7, New York, NY 10017' },
  { state: 'California', address: '500 S. Sepulveda Blvd., Los Angeles, CA 90049' },
  { state: 'Texas', address: '440 Louisiana Street, Houston, TX 77002' },
  { state: 'Illinois', address: '605 N Michigan Ave, Chicago, IL 60611' },
  { state: 'Florida', address: '1110 Brickell Ave, Miami, FL 33131' },
  { state: 'Massachusetts', address: '265 Franklin Street, Boston, MA 02110' },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    type: 'employer',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulated submission - replace with actual Formspree endpoint
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
              Contact Us
            </span>
            <h1 className="heading-1 text-white mb-6">
              Let's Start a{' '}
              <span className="gradient-text">Conversation</span>
            </h1>
            <p className="text-xl text-navy-300 leading-relaxed">
              Ready to find top talent or your next opportunity? 
              Our team is here to help you succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative -mt-12 z-10 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            <motion.a
              href="tel:1-800-309-0707"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl shadow-xl p-6 flex items-center gap-4 hover:shadow-2xl transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center flex-shrink-0">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <p className="text-sm text-navy-500">Call Us</p>
                <p className="text-lg font-semibold text-navy-900">1-800-309-0707</p>
              </div>
            </motion.a>

            <motion.a
              href="mailto:Recruitment@bluechipstaff.com"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-6 flex items-center gap-4 hover:shadow-2xl transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center flex-shrink-0">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <p className="text-sm text-navy-500">Email Us</p>
                <p className="text-lg font-semibold text-navy-900 break-all">Recruitment@bluechipstaff.com</p>
              </div>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-6 flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center flex-shrink-0">
                <Clock className="text-white" size={24} />
              </div>
              <div>
                <p className="text-sm text-navy-500">Business Hours</p>
                <p className="text-lg font-semibold text-navy-900">Mon–Fri: 9am–6pm</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form & Info Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollReveal direction="left">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-navy-100">
                <h2 className="heading-3 text-navy-900 mb-6">Send Us a Message</h2>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="text-green-600" size={32} />
                    </div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-2">Message Sent!</h3>
                    <p className="text-navy-600">
                      Thank you for reaching out. A member of our team will contact you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-navy-700 mb-1">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formState.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-navy-700 mb-1">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formState.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-navy-700 mb-1">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="type" className="block text-sm font-medium text-navy-700 mb-1">
                        I am a... *
                      </label>
                      <select
                        id="type"
                        name="type"
                        required
                        value={formState.type}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all"
                      >
                        <option value="employer">Employer / Hiring Manager</option>
                        <option value="jobseeker">Job Seeker</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-navy-700 mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-navy-700 mb-1">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formState.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all"
                        placeholder="How can we help?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-1">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all resize-none"
                        placeholder="Tell us more about your needs..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2" size={18} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Office Locations */}
            <ScrollReveal direction="right">
              <div className="space-y-6">
                <div>
                  <h2 className="heading-3 text-navy-900 mb-4">Office Locations</h2>
                  <p className="text-navy-600 mb-6">
                    With offices across the country, we're always close by. 
                    Visit us or connect with our local teams.
                  </p>
                </div>

                <div className="space-y-4">
                  {offices.map((office) => (
                    <div
                      key={office.state}
                      className="flex items-start gap-4 p-4 bg-navy-50 rounded-xl hover:bg-navy-100 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-accent-100 flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-accent-600" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy-900">{office.state}</h3>
                        <p className="text-sm text-navy-600">{office.address}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-6 text-white mt-8">
                  <h3 className="font-semibold mb-4">Connect With Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.linkedin.com/company/bluechipstaffing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-500 transition-colors"
                    >
                      <Linkedin size={22} />
                    </a>
                  </div>
                  <p className="text-sm text-navy-300 mt-4">
                    Follow us on LinkedIn for the latest job opportunities and company updates.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
