'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsOfService() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Terms of <span className="text-gradient">Service</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8 text-gray-300">
              Last Updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="section bg-light relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl"></div>
        
        <div className="container-custom relative">
          {/* Quick Summary Card */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center gap-4 shadow-glow">
            <div className="flex-shrink-0">
              <svg className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0a8 8 0 11-16 0 8 8 0 0116 0z" /></svg>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-1 text-dark">Key Terms at a Glance</h2>
              <ul className="text-gray-700 text-sm list-disc pl-5 space-y-1">
                <li>By using Arcatic, you agree to our terms and privacy policy.</li>
                <li>Your content remains yours, but you grant us rights to use it for service delivery.</li>
                <li>We protect your data and intellectual property.</li>
                <li>Contact us for any questions or clarifications.</li>
              </ul>
            </div>
          </div>

          <div className={`bg-white rounded-xl shadow-lg p-8 md:p-12 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}> 
            {/* Section: Introduction */}
            <div className="mb-10">
              <div className="flex items-center mb-2">
                <svg className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                <h2 className="text-lg font-bold text-dark">Introduction</h2>
              </div>
              <p className="text-gray-600">Welcome to Arcatic. By using our website and services, you agree to these terms. Please read them carefully.</p>
            </div>
            {/* Section: Communications */}
            <div className="mb-10">
              <div className="flex items-center mb-2">
                <svg className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 7.165 6 9.388 6 12v2.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                <h2 className="text-lg font-bold text-dark">Communications</h2>
              </div>
              <p className="text-gray-600">By using our services, you may receive emails and updates. You can opt out at any time.</p>
            </div>
            {/* Section: Purchases */}
            <div className="mb-10">
              <div className="flex items-center mb-2">
                <svg className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <h2 className="text-lg font-bold text-dark">Purchases</h2>
              </div>
              <p className="text-gray-600">If you purchase services, you agree to provide accurate information and comply with payment terms. Third-party payment processors may be used.</p>
            </div>
            {/* Section: Content & Intellectual Property */}
            <div className="mb-10">
              <div className="flex items-center mb-2">
                <svg className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 018 0v2m-4-4v4m0 0v4m0-4c-1.104 0-2-.896-2-2s.896-2 2-2z" /></svg>
                <h2 className="text-lg font-bold text-dark">Content & Intellectual Property</h2>
              </div>
              <p className="text-gray-600">You retain ownership of your content, but grant us rights to use it for service delivery. Our site and services are protected by copyright and trademark laws.</p>
            </div>
            {/* Section: Termination & Limitation of Liability */}
            <div className="mb-10">
              <div className="flex items-center mb-2">
                <svg className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7" /></svg>
                <h2 className="text-lg font-bold text-dark">Termination & Limitation of Liability</h2>
              </div>
              <p className="text-gray-600">We may suspend or terminate your access for violations. We are not liable for indirect damages. Please use our services responsibly.</p>
            </div>
            {/* Section: Governing Law & Changes */}
            <div className="mb-10">
              <div className="flex items-center mb-2">
                <svg className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <h2 className="text-lg font-bold text-dark">Governing Law & Changes</h2>
              </div>
              <p className="text-gray-600">These terms are governed by UK law. We may update terms as needed and will notify you of changes.</p>
            </div>
            {/* Section: Contact */}
            <div className="mb-2">
              <div className="flex items-center mb-2">
                <svg className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0a8 8 0 11-16 0 8 8 0 0116 0z" /></svg>
                <h2 className="text-lg font-bold text-dark">Contact Us</h2>
              </div>
              <p className="text-gray-600">Email: <a href="mailto:legal@arcatic.com" className="text-primary hover:underline">legal@arcatic.com</a><br />Address: 42 Innovation House, Tech City, London EC1V 2PY, United Kingdom<br />Phone: +44 (0) 20 7123 4567</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 