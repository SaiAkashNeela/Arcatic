import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Our Services - Arcatic',
  description: 'Explore our comprehensive range of services including digital marketing, design, development, and business solutions.',
};

export default function Services() {
  const services = [
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      description: 'Strategic online marketing campaigns that drive traffic and conversions.',
      icon: (
        <svg className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      ),
      features: [
        'Search Engine Optimization (SEO)',
        'Pay-Per-Click (PPC) Advertising',
        'Social Media Marketing',
        'Content Marketing',
        'Email Marketing Campaigns',
        'Analytics and Reporting'
      ]
    },
    {
      id: 'fashion-designing',
      title: 'Fashion Designing',
      description: 'Creative fashion design solutions for brands and individual clients.',
      icon: (
        <svg className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      features: [
        'Custom Clothing Design',
        'Brand Identity for Fashion Labels',
        'Collection Development',
        'Trend Analysis and Research',
        'Technical Design and Patterns',
        'Sustainable Fashion Solutions'
      ]
    },
    {
      id: 'brand-creation',
      title: 'Brand Creation',
      description: 'Comprehensive brand development from concept to market positioning.',
      icon: (
        <svg className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      features: [
        'Brand Strategy Development',
        'Logo and Visual Identity Design',
        'Brand Guidelines Creation',
        'Brand Messaging and Voice',
        'Brand Positioning Strategy',
        'Rebranding Services'
      ]
    },
    {
      id: 'photography',
      title: 'Photography Ads',
      description: 'Professional photography services for advertising and marketing materials.',
      icon: (
        <svg className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      features: [
        'Product Photography',
        'Lifestyle and Brand Photography',
        'Commercial Photography',
        'Fashion Photography',
        'Food and Beverage Photography',
        'Real Estate Photography'
      ]
    },
    {
      id: 'videography',
      title: 'Videography Ads',
      description: 'High-quality video production for commercials and promotional content.',
      icon: (
        <svg className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      features: [
        'Commercial Video Production',
        'Brand Story Videos',
        'Product Demonstrations',
        'Testimonial Videos',
        'Social Media Video Content',
        'Aerial Videography'
      ]
    },
    {
      id: 'data-analysis',
      title: 'Data Analysis',
      description: 'Comprehensive data analysis to drive informed business decisions.',
      icon: (
        <svg className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      features: [
        'Business Intelligence',
        'Market Research Analysis',
        'Customer Behavior Analysis',
        'Performance Metrics Tracking',
        'Predictive Analytics',
        'Data Visualization and Reporting'
      ]
    },
    {
      id: 'business-analysis',
      title: 'Business Analysis',
      description: 'Strategic business analysis to optimize operations and drive growth.',
      icon: (
        <svg className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      features: [
        'Process Optimization',
        'Strategic Planning',
        'Competitive Analysis',
        'SWOT Analysis',
        'Business Requirements Documentation',
        'Change Management'
      ]
    },
    {
      id: 'development',
      title: 'Web & App Development',
      description: 'Custom web and mobile app solutions tailored to your business needs.',
      icon: (
        <svg className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      features: [
        'Custom Website Development',
        'E-commerce Solutions',
        'Mobile App Development',
        'Web Application Development',
        'UI/UX Design',
        'Maintenance and Support'
      ]
    },
    {
      id: 'innovation',
      title: 'Innovation R&D',
      description: 'Research and development services to drive innovation in your business.',
      icon: (
        <svg className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      features: [
        'Product Innovation',
        'Technology Research',
        'Proof of Concept Development',
        'Innovation Workshops',
        'Digital Transformation Strategy',
        'Emerging Technology Integration'
      ]
    }
  ];

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl mb-8">
              We offer a comprehensive range of services to help your business grow and succeed in today's competitive market.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
                <div className="mb-6">{service.icon}</div>
                <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link href={`/services/${service.id}`} className="btn btn-primary">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      {services.map((service) => (
        <section key={service.id} id={service.id} className="section bg-gray-50">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6">{service.icon}</div>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-6 w-6 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link href="/contact" className="btn btn-primary">
                    Request a Quote
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-300">
                  {/* Replace with actual service images */}
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-500">{service.title} Image</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="section bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and let's discuss how we can help your business grow.
          </p>
          <Link href="/contact" className="btn bg-white text-primary hover:bg-gray-100">
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
} 