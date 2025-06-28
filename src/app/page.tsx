'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 1,
      title: 'Digital Marketing',
      description: 'AI-powered marketing strategies that drive traffic and conversions with precision targeting.',
      icon: (
        <svg className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      ),
      link: '/services/digital-marketing',
    },
    {
      id: 2,
      title: 'Fashion Designing',
      description: 'Innovative fashion design solutions powered by AI trend analysis and creative algorithms.',
      icon: (
        <svg className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      link: '/services/fashion-designing',
    },
    {
      id: 3,
      title: 'Brand Creation',
      description: 'Data-driven brand development from concept to market positioning using AI insights.',
      icon: (
        <svg className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      link: '/services/brand-creation',
    },
    {
      id: 4,
      title: 'Photography Ads',
      description: 'AI-enhanced photography services that capture attention and drive engagement.',
      icon: (
        <svg className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      link: '/services/photography',
    },
    {
      id: 5,
      title: 'Videography Ads',
      description: 'High-impact video production with AI-driven editing and optimization techniques.',
      icon: (
        <svg className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      link: '/services/videography',
    },
    {
      id: 6,
      title: 'Web & App Development',
      description: 'Cutting-edge web and mobile solutions powered by AI and machine learning technologies.',
      icon: (
        <svg className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      link: '/services/development',
    },
  ];

  const features = [
    {
      title: 'AI-Powered Solutions',
      description: 'We leverage artificial intelligence to deliver smarter, more efficient solutions.',
      icon: (
        <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: 'Data-Driven Strategies',
      description: 'We analyze data to create personalized strategies that deliver measurable results.',
      icon: (
        <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: 'Innovative Approach',
      description: 'We stay ahead of trends with continuous innovation and adaptive technologies.',
      icon: (
        <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: 'Scalable Solutions',
      description: 'Our solutions grow with your business, adapting to changing needs and challenges.',
      icon: (
        <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      content: 'Arcatics AI-driven approach transformed our brand identity. Their team delivered exceptional results that exceeded our expectations.',
      avatar: '/images/avatar-1.jpg',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Marketing Director, Fashion Forward',
      content: 'The AI-powered fashion design services provided by Arcatic helped us launch our new collection with unprecedented success.',
      avatar: '/images/avatar-2.jpg',
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Founder, GrowBiz',
      content: 'Their data-driven marketing strategies increased our online presence by 200%. We have seen a significant boost in conversions and sales.',
      avatar: '/images/avatar-3.jpg',
    },
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'Brand Redesign',
      category: 'Brand Creation',
      image: '/images/portfolio-1.jpg',
    },
    {
      id: 2,
      title: 'E-commerce Website',
      category: 'Web Development',
      image: '/images/portfolio-2.jpg',
    },
    {
      id: 3,
      title: 'Product Campaign',
      category: 'Photography',
      image: '/images/portfolio-3.jpg',
    },
    {
      id: 4,
      title: 'Fashion Collection',
      category: 'Fashion Design',
      image: '/images/portfolio-4.jpg',
    },
  ];

  return (
    <main className="overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-dark">
        <div className="absolute inset-0 bg-neural-pattern opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark to-transparent"></div>
        
        <div className="container-custom relative z-10 py-24 md:py-36">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Innovating with <br />
                <span className="text-primary">AI-Powered</span> Solutions
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                We combine artificial intelligence with human creativity to deliver cutting-edge services that drive growth and transform businesses.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn btn-primary shadow-glow">
                  Get a Free Consultation
                </Link>
                <Link href="/services" className="btn bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 border border-white/30">
                  Explore Our Services
                </Link>
              </div>
            </div>
            
            <div className={`relative transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="relative h-96 w-full">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-80 h-80">
                    {/* 3D Floating Elements */}
                    <div className="absolute top-0 left-0 w-16 h-16 bg-primary rounded-lg shadow-glow transform rotate-45 animate-float" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute top-20 right-0 w-12 h-12 bg-secondary rounded-full shadow-glow animate-float" style={{ animationDelay: '1.2s' }}></div>
                    <div className="absolute bottom-10 left-10 w-14 h-14 bg-accent rounded-lg shadow-glow transform -rotate-12 animate-float" style={{ animationDelay: '0.8s' }}></div>
                    <div className="absolute bottom-0 right-20 w-10 h-10 bg-primary/80 rounded-full shadow-glow animate-float" style={{ animationDelay: '1.5s' }}></div>
                    
                    {/* Central Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-white shadow-glow flex items-center justify-center">
                        <svg className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70">
          <span className="text-sm mb-2">Scroll to explore</span>
          <svg className="h-6 w-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-light relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl"></div>
        
        <div className="container-custom relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-primary to-accent p-1 shadow-glow">
                <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-white">
                  {/* Neural network SVG illustration */}
                  <div className="w-full h-full bg-gray-50 flex items-center justify-center p-4">
                    <svg
                      viewBox="0 0 800 600"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                    >
                      {/* Background grid */}
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(99, 102, 241, 0.1)" strokeWidth="1" />
                      </pattern>
                      <rect width="800" height="600" fill="url(#grid)" />

                      {/* Neural Network Nodes */}
                      {/* Input Layer */}
                      <circle cx="150" cy="150" r="20" fill="rgba(99, 102, 241, 0.8)" className="animate-pulse-slow" />
                      <circle cx="150" cy="250" r="20" fill="rgba(99, 102, 241, 0.8)" className="animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
                      <circle cx="150" cy="350" r="20" fill="rgba(99, 102, 241, 0.8)" className="animate-pulse-slow" style={{ animationDelay: '1s' }} />
                      <circle cx="150" cy="450" r="20" fill="rgba(99, 102, 241, 0.8)" className="animate-pulse-slow" style={{ animationDelay: '1.5s' }} />

                      {/* Hidden Layer 1 */}
                      <circle cx="300" cy="180" r="20" fill="rgba(99, 102, 241, 0.8)" className="animate-pulse-slow" style={{ animationDelay: '0.2s' }} />
                      <circle cx="300" cy="300" r="20" fill="rgba(99, 102, 241, 0.8)" className="animate-pulse-slow" style={{ animationDelay: '0.7s' }} />
                      <circle cx="300" cy="420" r="20" fill="rgba(99, 102, 241, 0.8)" className="animate-pulse-slow" style={{ animationDelay: '1.2s' }} />

                      {/* Hidden Layer 2 */}
                      <circle cx="450" cy="200" r="20" fill="rgba(99, 102, 241, 0.8)" className="animate-pulse-slow" style={{ animationDelay: '0.3s' }} />
                      <circle cx="450" cy="400" r="20" fill="rgba(99, 102, 241, 0.8)" className="animate-pulse-slow" style={{ animationDelay: '0.8s' }} />

                      {/* Output Layer */}
                      <circle cx="600" cy="200" r="20" fill="rgba(16, 185, 129, 0.8)" className="animate-pulse-slow" style={{ animationDelay: '0.4s' }} />
                      <circle cx="600" cy="300" r="20" fill="rgba(16, 185, 129, 0.8)" className="animate-pulse-slow" style={{ animationDelay: '0.9s' }} />
                      <circle cx="600" cy="400" r="20" fill="rgba(16, 185, 129, 0.8)" className="animate-pulse-slow" style={{ animationDelay: '1.4s' }} />

                      {/* Connections - Input to Hidden Layer 1 */}
                      <line x1="150" y1="150" x2="300" y2="180" stroke="rgba(99, 102, 241, 0.5)" strokeWidth="2" />
                      <line x1="150" y1="150" x2="300" y2="300" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" />
                      <line x1="150" y1="150" x2="300" y2="420" stroke="rgba(99, 102, 241, 0.2)" strokeWidth="2" />
                      
                      <line x1="150" y1="250" x2="300" y2="180" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" />
                      <line x1="150" y1="250" x2="300" y2="300" stroke="rgba(99, 102, 241, 0.5)" strokeWidth="2" />
                      <line x1="150" y1="250" x2="300" y2="420" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" />
                      
                      <line x1="150" y1="350" x2="300" y2="180" stroke="rgba(99, 102, 241, 0.2)" strokeWidth="2" />
                      <line x1="150" y1="350" x2="300" y2="300" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" />
                      <line x1="150" y1="350" x2="300" y2="420" stroke="rgba(99, 102, 241, 0.5)" strokeWidth="2" />
                      
                      <line x1="150" y1="450" x2="300" y2="180" stroke="rgba(99, 102, 241, 0.1)" strokeWidth="2" />
                      <line x1="150" y1="450" x2="300" y2="300" stroke="rgba(99, 102, 241, 0.2)" strokeWidth="2" />
                      <line x1="150" y1="450" x2="300" y2="420" stroke="rgba(99, 102, 241, 0.5)" strokeWidth="2" />

                      {/* Connections - Hidden Layer 1 to Hidden Layer 2 */}
                      <line x1="300" y1="180" x2="450" y2="200" stroke="rgba(99, 102, 241, 0.5)" strokeWidth="2" />
                      <line x1="300" y1="180" x2="450" y2="400" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" />
                      
                      <line x1="300" y1="300" x2="450" y2="200" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" />
                      <line x1="300" y1="300" x2="450" y2="400" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" />
                      
                      <line x1="300" y1="420" x2="450" y2="200" stroke="rgba(99, 102, 241, 0.2)" strokeWidth="2" />
                      <line x1="300" y1="420" x2="450" y2="400" stroke="rgba(99, 102, 241, 0.5)" strokeWidth="2" />

                      {/* Connections - Hidden Layer 2 to Output */}
                      <line x1="450" y1="200" x2="600" y2="200" stroke="rgba(99, 102, 241, 0.5)" strokeWidth="2" />
                      <line x1="450" y1="200" x2="600" y2="300" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" />
                      <line x1="450" y1="200" x2="600" y2="400" stroke="rgba(99, 102, 241, 0.2)" strokeWidth="2" />
                      
                      <line x1="450" y1="400" x2="600" y2="200" stroke="rgba(99, 102, 241, 0.2)" strokeWidth="2" />
                      <line x1="450" y1="400" x2="600" y2="300" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" />
                      <line x1="450" y1="400" x2="600" y2="400" stroke="rgba(99, 102, 241, 0.5)" strokeWidth="2" />

                      {/* Data flow animation */}
                      <circle cx="225" cy="215" r="5" fill="rgba(16, 185, 129, 0.8)">
                        <animateMotion
                          path="M 0 0 L 150 85"
                          dur="3s"
                          repeatCount="indefinite"
                        />
                      </circle>
                      <circle cx="375" cy="300" r="5" fill="rgba(16, 185, 129, 0.8)">
                        <animateMotion
                          path="M 0 0 L 150 0"
                          dur="2.5s"
                          repeatCount="indefinite"
                        />
                      </circle>
                      <circle cx="525" cy="300" r="5" fill="rgba(16, 185, 129, 0.8)">
                        <animateMotion
                          path="M 0 0 L 150 0"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 flex items-center space-x-2">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-bold">AI-Powered</span>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 flex items-center space-x-2">
                <svg className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span className="font-bold">Data-Driven</span>
              </div>
            </div>
            
            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">About Arcatic</div>
              <h2 className="text-3xl font-bold mb-6 text-dark">Transforming Businesses with AI Innovation</h2>
              <p className="text-gray-600 mb-6">
                Arcatic is a full-service agency dedicated to helping businesses grow through innovative AI-powered solutions. We combine creativity, technology, and data-driven strategies to deliver exceptional results.
              </p>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3 text-dark">Our Mission</h3>
                <p className="text-gray-600">
                  To empower businesses with cutting-edge AI solutions that drive growth and success in the digital age.
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3 text-dark">Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading AI-powered agency known for innovation, quality, and client satisfaction.
                </p>
              </div>
              <Link href="/about" className="btn btn-primary shadow-glow">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-neural-pattern opacity-5"></div>
        
        <div className="container-custom relative">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">Our Services</div>
            <h2 className="text-3xl font-bold mb-4 text-dark">AI-Powered Solutions for Your Business</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of AI-enhanced services to meet your business needs. Our team of experts is dedicated to delivering high-quality solutions tailored to your specific requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className="bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group overflow-hidden"
              >
                <div className="p-8">
                  <div className="mb-4 text-primary group-hover:text-accent transition-colors duration-300">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-dark">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link href={service.link} className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors group-hover:translate-x-2 duration-300">
                    Learn more
                    <svg className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
                <div className="h-1 w-full bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/services" className="btn btn-primary shadow-glow">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-neural-pattern opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl"></div>
        
        <div className="container-custom relative">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-white font-medium text-sm mb-4">Why Choose Us</div>
            <h2 className="text-3xl font-bold mb-4 text-white">The Arcatic Advantage</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              At Arcatic, we pride ourselves on delivering exceptional value to our clients through our unique approach and commitment to excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-light relative overflow-hidden">
        <div className="absolute inset-0 bg-neural-pattern opacity-5"></div>
        
        <div className="container-custom relative">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">Testimonials</div>
            <h2 className="text-3xl font-bold mb-4 text-dark">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl shadow-lg p-8 relative">
                <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4">
                  <svg className="h-16 w-16 text-primary/10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 overflow-hidden">
                    {/* Replace with actual avatar images */}
                    <div className="w-full h-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-dark">{testimonial.name}</h3>
                    <p className="text-primary text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
                
                <div className="mt-6 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="h-5 w-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
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
            Contact us today for a free consultation and let's discuss how our AI-powered solutions can help your business grow.
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