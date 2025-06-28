'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
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
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8 text-gray-300">
              Last Updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="section bg-light relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl"></div>
        
        <div className="container-custom relative">
          <div className={`bg-white rounded-xl shadow-lg p-8 md:p-12 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="prose prose-lg max-w-none">
              <h2>Introduction</h2>
              <p>
                At Arcatic ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p>
                Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site or use our services.
              </p>

              <h2>Information We Collect</h2>
              <p>We may collect information about you in a variety of ways:</p>
              <h3>Personal Data</h3>
              <p>
                When you visit our website or use our services, we may collect personally identifiable information, such as:
              </p>
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name</li>
                <li>Job title</li>
                <li>IP address</li>
              </ul>

              <h3>Usage Data</h3>
              <p>
                We may also collect information on how the website is accessed and used. This usage data may include:
              </p>
              <ul>
                <li>Browser type and version</li>
                <li>Time spent on pages</li>
                <li>Page visit sequence</li>
                <li>Other diagnostic data</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>We may use the information we collect about you for various purposes, including:</p>
              <ul>
                <li>To provide and maintain our services</li>
                <li>To notify you about changes to our services</li>
                <li>To allow you to participate in interactive features of our services</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information to improve our services</li>
                <li>To monitor the usage of our services</li>
                <li>To detect, prevent, and address technical issues</li>
                <li>To fulfill any other purpose for which you provide it</li>
              </ul>

              <h2>Disclosure of Your Information</h2>
              <p>We may share information we have collected about you in certain situations, including:</p>
              <h3>Business Transfers</h3>
              <p>
                If we or our subsidiaries are involved in a merger, acquisition, or asset sale, your personal data may be transferred.
              </p>

              <h3>Third-Party Service Providers</h3>
              <p>
                We may share your information with third-party vendors, service providers, and other third parties who perform services on our behalf.
              </p>

              <h3>Legal Requirements</h3>
              <p>
                We may disclose your information where we are legally required to do so to comply with applicable law, governmental requests, judicial proceedings, court orders, or legal processes.
              </p>

              <h2>Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier.
              </p>
              <p>
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our services.
              </p>

              <h2>Data Security</h2>
              <p>
                We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
              </p>

              <h2>Your Data Protection Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal data, including:
              </p>
              <ul>
                <li>The right to access, update, or delete your information</li>
                <li>The right to rectification</li>
                <li>The right to object to processing</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>

              <h2>Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children under 16. If we learn we have collected or received personal information from a child under 16, we will delete that information.
              </p>

              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p>
                Email: <a href="mailto:privacy@arcatic.com" className="text-primary hover:underline">privacy@arcatic.com</a><br />
                Address: 42 Innovation House, Tech City, London EC1V 2PY, United Kingdom<br />
                Phone: +44 (0) 20 7123 4567
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 