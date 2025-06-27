'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: 'Alex Morgan',
      role: 'CEO & Founder',
      bio: 'AI enthusiast with 15+ years of experience in technology and business development.',
    },
    {
      id: 2,
      name: 'Sarah Chen',
      role: 'CTO',
      bio: 'Machine learning expert with a PhD in Computer Science and multiple publications in AI research.',
    },
    {
      id: 3,
      name: 'Michael Rodriguez',
      role: 'Creative Director',
      bio: 'Award-winning designer with expertise in branding, UX/UI, and digital marketing strategies.',
    },
    {
      id: 4,
      name: 'Priya Patel',
      role: 'Head of AI Research',
      bio: 'Former Google AI researcher specializing in natural language processing and computer vision.',
    },
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.',
      icon: (
        <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: 'Excellence',
      description: 'We are committed to delivering the highest quality work in everything we do.',
      icon: (
        <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and partnership to achieve extraordinary results.',
      icon: (
        <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical principles in all our interactions.',
      icon: (
        <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  const milestones = [
    {
      year: '2018',
      title: 'Company Founded',
      description: 'Arcatic was founded with a vision to integrate AI into creative services.',
    },
    {
      year: '2019',
      title: 'First AI Product Launch',
      description: 'Launched our first AI-powered marketing analytics platform.',
    },
    {
      year: '2020',
      title: 'Team Expansion',
      description: 'Grew our team to include AI researchers and creative technologists.',
    },
    {
      year: '2021',
      title: 'Major Client Partnerships',
      description: 'Secured partnerships with Fortune 500 companies for AI integration.',
    },
    {
      year: '2022',
      title: 'Innovation Award',
      description: 'Received industry recognition for our innovative AI solutions.',
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Expanded our services to international markets across three continents.',
    },
  ];

  return (
    <main className="overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-dark text-white">
        <div className="absolute inset-0 bg-neural-pattern opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark to-transparent"></div>
        
        <div className="container-custom relative z-10">
          <div className={`text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-white font-medium text-sm mb-4 backdrop-blur-sm">About Us</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Pioneering <span className="text-gradient">AI-Powered</span> Innovation
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8 text-gray-300">
              We combine artificial intelligence with human creativity to deliver cutting-edge solutions that transform businesses and drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section bg-light relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl"></div>
        
        <div className="container-custom relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="relative">
                <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="/images/about/ai-brain.svg"
                    alt="AI Brain Visualization"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full filter blur-xl"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/10 rounded-full filter blur-xl"></div>
              </div>
            </div>
            
            <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">Our Story</div>
              <h2 className="text-3xl font-bold mb-6 text-dark">From Vision to Reality</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2018, Arcatic began with a simple yet ambitious vision: to make artificial intelligence accessible and practical for businesses of all sizes. Our founders, a team of AI researchers and business strategists, recognized that while AI technology was advancing rapidly, many companies struggled to implement it effectively.
              </p>
              <p className="text-gray-600 mb-6">
                We started by developing custom AI solutions for a handful of clients in the retail and finance sectors. As our reputation grew, so did our team and capabilities. Today, we're proud to serve clients across multiple industries, helping them harness the power of AI to solve complex problems, improve efficiency, and drive innovation.
              </p>
              <p className="text-gray-600">
                Our journey is defined by continuous learning, adaptation, and a relentless pursuit of excellence. As AI technology evolves, so do we, staying at the forefront of innovation to deliver solutions that not only meet current needs but anticipate future challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section bg-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-neural-pattern opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl"></div>
        
        <div className="container-custom relative">
          <div className="grid md:grid-cols-2 gap-16">
            <div className={`glass-card p-8 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 text-primary mb-6">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-white">Our Mission</h2>
              <p className="text-gray-300">
                To empower businesses with intelligent solutions that transform data into actionable insights, drive innovation, and create sustainable competitive advantages. We are committed to making AI technology accessible, practical, and impactful for organizations of all sizes.
              </p>
            </div>
            
            <div className={`glass-card p-8 transition-all duration-700 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 text-primary mb-6">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-white">Our Vision</h2>
              <p className="text-gray-300">
                To be the global leader in AI-driven business solutions, recognized for our innovation, excellence, and the tangible value we create for our clients. We envision a future where AI technology is seamlessly integrated into business operations, enhancing human capabilities and enabling unprecedented growth and efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-neural-pattern opacity-5"></div>
        
        <div className="container-custom relative">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">Our Values</div>
            <h2 className="text-3xl font-bold mb-4 text-dark">Principles That Guide Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our core values define who we are and how we work. They're the foundation of our culture and guide every decision we make.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl shadow-lg p-8 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 text-primary">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-dark">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section bg-light relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl"></div>
        
        <div className="container-custom relative">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">Our Journey</div>
            <h2 className="text-3xl font-bold mb-4 text-dark">Milestones Along the Way</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From our founding to the present day, we've achieved significant milestones that have shaped our growth and success.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-accent"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`relative transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="md:w-1/2 p-4">
                      <div className={`bg-white rounded-xl shadow-lg p-6 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold mb-2 text-dark">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                    
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-white border-4 border-primary"></div>
                    </div>
                    
                    <div className="md:w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-light relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl"></div>
        
        <div className="container-custom relative">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">Our Team</div>
            <h2 className="text-3xl font-bold mb-4 text-dark">Meet the Innovators</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our diverse team combines expertise in AI, design, business strategy, and technology to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={member.id} 
                className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-primary font-bold text-xl">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1 text-dark">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-neural-pattern opacity-10"></div>
        
        <div className="container-custom relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '5+', label: 'Years of Experience' },
              { number: '100+', label: 'Completed Projects' },
              { number: '50+', label: 'Happy Clients' },
              { number: '20+', label: 'AI Experts' },
            ].map((stat, index) => (
              <div 
                key={index} 
                className={`text-center transition-all duration-700 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 text-gradient">{stat.number}</div>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-neural-pattern opacity-10"></div>
        
        <div className="container-custom relative text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the growing list of businesses leveraging our AI-powered solutions to drive growth and innovation.
          </p>
          <Link href="/contact" className="btn bg-white text-primary hover:bg-gray-100 shadow-glow">
            Get Started Now
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
} 