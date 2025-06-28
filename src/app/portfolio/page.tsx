'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-dark text-white">
        <div className="absolute inset-0 bg-neural-pattern opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark to-transparent"></div>
        
        <div className="container-custom relative z-10">
          <div className={`text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-white font-medium text-sm mb-4 backdrop-blur-sm">Coming Soon</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Our <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8 text-gray-300">
              We're working on showcasing our best work.
            </p>
          </div>
        </div>
      </section>

      {/* Under Construction Section */}
      <section className="section bg-light relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl"></div>
        
        <div className="container-custom relative">
          <div className={`text-center py-20 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 text-primary mb-8">
              <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-6 text-dark">This Page is Under Construction</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We're currently working on creating an amazing portfolio to showcase our projects and achievements. Please check back soon!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn btn-primary">
                Contact Us
              </Link>
              <Link href="/services" className="btn bg-gray-200 text-gray-800 hover:bg-gray-300">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 