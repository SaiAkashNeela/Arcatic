'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 1,
      title: 'AI-Powered Digital Marketing',
      category: 'marketing',
      description: 'Leverage artificial intelligence to optimize your marketing campaigns, target the right audience, and maximize ROI.',
      features: [
        'Predictive audience targeting',
        'AI-driven content optimization',
        'Automated campaign management',
        'Real-time performance analytics',
        'Conversion rate optimization'
      ],
      image: '/images/services/ai-marketing.svg',
      link: '/services/digital-marketing',
    },
    {
      id: 2,
      title: 'Intelligent Fashion Design',
      category: 'design',
      description: 'Combine AI trend analysis with creative design to create fashion that resonates with your target audience.',
      features: [
        'AI trend forecasting',
        'Style recommendation algorithms',
        'Virtual fitting technology',
        'Design optimization',
        'Sustainable material selection'
      ],
      image: '/images/services/fashion-design.svg',
      link: '/services/fashion-designing',
    },
    {
      id: 3,
      title: 'Data-Driven Brand Creation',
      category: 'branding',
      description: 'Create a compelling brand identity backed by data insights and AI-powered market analysis.',
      features: [
        'AI-powered market research',
        'Brand personality mapping',
        'Competitive positioning analysis',
        'Visual identity generation',
        'Brand voice development'
      ],
      image: '/images/services/brand-creation.svg',
      link: '/services/brand-creation',
    },
    {
      id: 4,
      title: 'Enhanced Photography Services',
      category: 'media',
      description: 'Utilize AI image enhancement and optimization to create stunning photography that captures attention.',
      features: [
        'AI-powered image enhancement',
        'Automated photo editing',
        'Visual style consistency',
        'Audience engagement analysis',
        'Optimal platform formatting'
      ],
      image: '/images/services/photography.svg',
      link: '/services/photography',
    },
    {
      id: 5,
      title: 'Smart Video Production',
      category: 'media',
      description: 'Create high-impact video content with AI-driven editing, optimization, and audience analysis.',
      features: [
        'Automated video editing',
        'Engagement optimization',
        'AI-powered scene selection',
        'Audience retention analysis',
        'Platform-specific optimization'
      ],
      image: '/images/services/videography.svg',
      link: '/services/videography',
    },
    {
      id: 6,
      title: 'Intelligent Web Development',
      category: 'development',
      description: 'Build cutting-edge websites and applications powered by AI and machine learning technologies.',
      features: [
        'AI-driven user experience',
        'Personalized content delivery',
        'Intelligent search functionality',
        'Behavior prediction algorithms',
        'Automated testing and optimization'
      ],
      image: '/images/services/web-development.svg',
      link: '/services/development',
    },
    {
      id: 7,
      title: 'Predictive Business Analysis',
      category: 'analysis',
      description: 'Harness the power of AI to analyze business data, identify trends, and make data-driven decisions.',
      features: [
        'Predictive analytics',
        'Market trend forecasting',
        'Competitive intelligence',
        'Business process optimization',
        'Strategic recommendation engine'
      ],
      image: '/images/services/business-analysis.svg',
      link: '/services/business-analysis',
    },
    {
      id: 8,
      title: 'AI Research & Development',
      category: 'innovation',
      description: 'Stay ahead of the curve with custom AI research and development tailored to your business needs.',
      features: [
        'Custom AI model development',
        'Industry-specific solutions',
        'Proof of concept creation',
        'Technology integration',
        'Ongoing AI optimization'
      ],
      image: '/images/services/ai-research.svg',
      link: '/services/ai-research',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'design', name: 'Design' },
    { id: 'branding', name: 'Branding' },
    { id: 'media', name: 'Media' },
    { id: 'development', name: 'Development' },
    { id: 'analysis', name: 'Analysis' },
    { id: 'innovation', name: 'Innovation' },
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.category === activeTab);

  return (
    <main className="overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-dark text-white">
        <div className="absolute inset-0 bg-neural-pattern opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark to-transparent"></div>
        
        <div className="container-custom relative z-10">
          <div className={`text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-white font-medium text-sm mb-4 backdrop-blur-sm">Our Services</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              <span className="text-gradient">AI-Powered</span> Solutions <br />for Modern Businesses
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8 text-gray-300">
              We combine artificial intelligence with human creativity to deliver cutting-edge services that drive growth and transform businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Services Filter Section */}
      <section className="py-8 bg-light sticky top-0 z-30 shadow-md backdrop-blur-md bg-light/90">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                  activeTab === category.id
                    ? 'bg-primary text-white shadow-glow'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="section bg-light relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl"></div>
        
        <div className="container-custom relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div 
                key={service.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="mb-6 flex justify-center">
                    <div className="w-32 h-32">
                      <img src={service.image} alt={service.title} className="w-full h-full" />
                    </div>
                  </div>
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-xs mb-4">
                    {categories.find(cat => cat.id === service.category)?.name}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-dark">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6 flex-grow">
                    <h4 className="font-semibold text-dark mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-14 0 9 9 0 0114 0z" />
                          </svg>
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    href={service.link} 
                    className="mt-auto inline-flex items-center text-primary font-medium hover:text-accent transition-colors"
                  >
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
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-neural-pattern opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl"></div>
        
        <div className="container-custom relative">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-white font-medium text-sm mb-4">Our Process</div>
            <h2 className="text-3xl font-bold mb-4 text-white">How We Deliver AI-Powered Excellence</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our structured approach combines AI technology with human expertise to deliver exceptional results for your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We begin by understanding your business goals, challenges, and target audience through in-depth consultation.',
                icon: (
                  <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                ),
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'Our AI systems analyze data to develop a tailored strategy that aligns with your business objectives.',
                icon: (
                  <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
              },
              {
                step: '03',
                title: 'Execution',
                description: 'We implement the strategy using our AI-powered tools and creative expertise to deliver high-quality solutions.',
                icon: (
                  <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                ),
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'Our AI continuously monitors performance, learns, and adapts to optimize results and maximize ROI.',
                icon: (
                  <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
              },
            ].map((process, index) => (
              <div 
                key={index} 
                className={`glass-card p-6 transition-all duration-700 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-primary">
                    {process.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{process.step}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{process.title}</h3>
                <p className="text-gray-300">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-neural-pattern opacity-5"></div>
        
        <div className="container-custom relative">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">Our Technologies</div>
            <h2 className="text-3xl font-bold mb-4 text-dark">Cutting-Edge AI Technologies</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We leverage the latest AI technologies to deliver innovative solutions that give your business a competitive edge.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Machine Learning',
                description: 'Algorithms that learn from data to make predictions and decisions without explicit programming.',
                icon: (
                  <svg className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
              },
              {
                title: 'Natural Language Processing',
                description: 'Technology that enables computers to understand, interpret, and generate human language.',
                icon: (
                  <svg className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                ),
              },
              {
                title: 'Computer Vision',
                description: 'AI systems that can identify and process images and visual data similar to human vision.',
                icon: (
                  <svg className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                ),
              },
              {
                title: 'Predictive Analytics',
                description: 'Using data, statistical algorithms, and machine learning techniques to identify future outcomes.',
                icon: (
                  <svg className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
              },
              {
                title: 'Generative AI',
                description: 'AI systems that can create new content including text, images, audio, and video.',
                icon: (
                  <svg className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: 'Automated Decision Systems',
                description: 'AI-powered systems that can make decisions without human intervention based on data analysis.',
                icon: (
                  <svg className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                  </svg>
                ),
              },
            ].map((tech, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl shadow-lg p-8 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 text-primary">{tech.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-dark">{tech.title}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-neural-pattern opacity-10"></div>
        
        <div className="container-custom relative text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how our AI-powered solutions can help your business grow.
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