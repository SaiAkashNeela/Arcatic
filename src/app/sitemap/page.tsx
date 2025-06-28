'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Sitemap() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <section className="relative pt-32 pb-20 bg-dark text-white">
        <div className="absolute inset-0 bg-neural-pattern opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark to-transparent"></div>
        <div className="container-custom relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Sitemap</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8 text-gray-300">Navigate Arcatic with ease. Here's a quick overview of all our main pages and sections.</p>
          </div>
        </div>
      </section>
      <section className="section bg-light relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl"></div>
        <div className="container-custom relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Home */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start">
              <h2 className="text-lg font-bold mb-2 text-primary">Home</h2>
              <Link href="/" className="text-gray-700 hover:text-accent transition-colors">Go to Home</Link>
            </div>
            {/* About */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start">
              <h2 className="text-lg font-bold mb-2 text-primary">About</h2>
              <Link href="/about" className="text-gray-700 hover:text-accent transition-colors">Learn about Arcatic</Link>
            </div>
            {/* Services */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start">
              <h2 className="text-lg font-bold mb-2 text-primary">Services</h2>
              <Link href="/services" className="text-gray-700 hover:text-accent transition-colors mb-2">All Services</Link>
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
                <li><Link href="/services/digital-marketing" className="hover:text-accent">Digital Marketing</Link></li>
                <li><Link href="/services/fashion-designing" className="hover:text-accent">Fashion Designing</Link></li>
                <li><Link href="/services/brand-creation" className="hover:text-accent">Brand Creation</Link></li>
                <li><Link href="/services/photography" className="hover:text-accent">Photography Ads</Link></li>
                <li><Link href="/services/videography" className="hover:text-accent">Videography Ads</Link></li>
                <li><Link href="/services/development" className="hover:text-accent">Web & App Development</Link></li>
              </ul>
            </div>
            {/* Portfolio */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start">
              <h2 className="text-lg font-bold mb-2 text-primary">Portfolio</h2>
              <Link href="/portfolio" className="text-gray-700 hover:text-accent transition-colors">See our work</Link>
            </div>
            {/* Blog */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start">
              <h2 className="text-lg font-bold mb-2 text-primary">Blog</h2>
              <Link href="/blog" className="text-gray-700 hover:text-accent transition-colors">Read our blog</Link>
            </div>
            {/* Contact */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start">
              <h2 className="text-lg font-bold mb-2 text-primary">Contact</h2>
              <Link href="/contact" className="text-gray-700 hover:text-accent transition-colors">Contact us</Link>
            </div>
            {/* Careers */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start">
              <h2 className="text-lg font-bold mb-2 text-primary">Careers</h2>
              <Link href="/careers" className="text-gray-700 hover:text-accent transition-colors">Join our team</Link>
            </div>
            {/* Privacy Policy */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start">
              <h2 className="text-lg font-bold mb-2 text-primary">Privacy Policy</h2>
              <Link href="/privacy-policy" className="text-gray-700 hover:text-accent transition-colors">Read our policy</Link>
            </div>
            {/* Terms of Service */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start">
              <h2 className="text-lg font-bold mb-2 text-primary">Terms of Service</h2>
              <Link href="/terms-of-service" className="text-gray-700 hover:text-accent transition-colors">Read our terms</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
} 