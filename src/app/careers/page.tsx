"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

// Define job type
interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openJobModal = (job: Job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeJobModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const jobOpenings = [
    {
      id: 'ARC-MKT-2023',
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      location: 'London, UK (Hybrid)',
      type: 'Full-time',
      description: 'We are looking for a Digital Marketing Specialist to develop and implement marketing strategies across digital channels.',
      responsibilities: [
        'Develop and execute digital marketing campaigns across various platforms',
        'Analyze campaign performance and optimize for better results',
        'Manage social media accounts and create engaging content',
        'Work with SEO strategies to improve website visibility',
        'Collaborate with the creative team on marketing materials',
        'Stay up-to-date with the latest digital marketing trends and technologies'
      ],
      requirements: [
        'Bachelor\'s degree in Marketing, Communications, or related field',
        '2+ years of experience in digital marketing',
        'Proficiency in digital marketing tools and analytics platforms',
        'Strong understanding of SEO, SEM, and social media marketing',
        'Excellent written and verbal communication skills',
        'Creative thinking and problem-solving abilities'
      ]
    },
    {
      id: 'ARC-DSN-2023',
      title: 'Fashion Designer',
      department: 'Design',
      location: 'London, UK (On-site)',
      type: 'Full-time',
      description: 'We are seeking a talented Fashion Designer to create innovative designs for our clients in the fashion industry.',
      responsibilities: [
        'Create original designs for clothing and accessories',
        'Develop concept boards and sketches for client presentations',
        'Select fabrics, colors, and patterns for collections',
        'Collaborate with clients to understand their brand vision',
        'Work with production teams to ensure designs are executed properly',
        'Stay current with fashion trends and industry developments'
      ],
      requirements: [
        'Bachelor\'s degree in Fashion Design or related field',
        '3+ years of experience in fashion design',
        'Proficient in design software such as Adobe Illustrator and Photoshop',
        'Strong portfolio demonstrating creativity and technical skills',
        'Knowledge of textiles, materials, and production processes',
        'Excellent communication and presentation skills'
      ]
    },
    {
      id: 'ARC-DEV-2023',
      title: 'Web Developer',
      department: 'Development',
      location: 'London, UK (Remote)',
      type: 'Full-time',
      description: 'We are looking for a skilled Web Developer to build and maintain websites and web applications for our clients.',
      responsibilities: [
        'Develop responsive websites and web applications',
        'Write clean, efficient, and well-documented code',
        'Collaborate with designers to implement visual elements',
        'Optimize applications for maximum speed and scalability',
        'Troubleshoot and fix bugs in existing projects',
        'Stay up-to-date with emerging technologies and industry trends'
      ],
      requirements: [
        'Bachelor\'s degree in Computer Science or related field (or equivalent experience)',
        '3+ years of experience in web development',
        'Proficiency in HTML, CSS, JavaScript, and modern frameworks (React, Next.js, etc.)',
        'Experience with responsive design and cross-browser compatibility',
        'Knowledge of version control systems (Git)',
        'Strong problem-solving skills and attention to detail'
      ]
    },
    {
      id: 'ARC-DAT-2023',
      title: 'Data Analyst',
      department: 'Analytics',
      location: 'London, UK (Remote)',
      type: 'Full-time',
      description: 'We are seeking a Data Analyst to help our clients make data-driven decisions by analyzing and interpreting complex data sets.',
      responsibilities: [
        'Collect, process, and analyze large data sets',
        'Develop and implement data collection systems',
        'Create reports and visualizations to communicate findings',
        'Identify trends and patterns in data to inform business strategies',
        'Collaborate with teams to understand data needs',
        'Ensure data accuracy and integrity'
      ],
      requirements: [
        'Bachelor\'s degree in Statistics, Mathematics, Computer Science, or related field',
        '2+ years of experience in data analysis',
        'Proficiency in data analysis tools and programming languages (SQL, Python, R)',
        'Experience with data visualization tools (Tableau, Power BI)',
        'Strong analytical and problem-solving skills',
        'Excellent communication skills for presenting technical information'
      ]
    },
    {
      id: 'ARC-PM-2023',
      title: 'Project Manager',
      department: 'Operations',
      location: 'London, UK (Hybrid)',
      type: 'Full-time',
      description: 'We are looking for an experienced Project Manager to lead and oversee client projects from inception to completion.',
      responsibilities: [
        'Plan, execute, and close projects on time and within budget',
        'Define project scope, goals, and deliverables with clients',
        'Coordinate internal resources and third parties for project execution',
        'Develop detailed project plans and monitor progress',
        'Manage changes to project scope, schedule, and costs',
        'Communicate project status to stakeholders and leadership'
      ],
      requirements: [
        'Bachelor\'s degree in Business, Management, or related field',
        '5+ years of experience in project management',
        'PMP certification preferred',
        'Strong leadership and team management skills',
        'Excellent communication and client relationship skills',
        'Experience with project management software and methodologies'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Competitive Salary',
      description: 'We offer competitive compensation packages based on experience and skills.',
      icon: (
        <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Health Benefits',
      description: 'Comprehensive health, dental, and vision insurance for you and your dependents.',
      icon: (
        <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: 'Flexible Work',
      description: 'Flexible working hours and remote work options for many positions.',
      icon: (
        <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Professional Development',
      description: 'Ongoing training, education stipends, and career growth opportunities.',
      icon: (
        <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      )
    },
    {
      title: 'Paid Time Off',
      description: 'Generous vacation policy, paid holidays, and sick leave.',
      icon: (
        <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      title: 'Team Events',
      description: 'Regular team-building activities, social events, and company retreats.',
      icon: (
        <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-300 mb-8">
              We're looking for passionate individuals to help us build the future of AI-powered solutions.
            </p>
            <a href="#openings" className="btn btn-primary">View Open Positions</a>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Join Arcatic?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a dynamic work environment where innovation thrives and your ideas matter. Join us and be part of a team that's shaping the future with AI.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4 text-primary">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section id="openings" className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Current Openings</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our current job opportunities and find a role where you can make an impact.
            </p>
          </div>
          
          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-wrap justify-between items-start">
                    <div>
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                        Job ID: {job.id}
                      </span>
                      <h3 className="text-xl font-bold mt-2">{job.title}</h3>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center text-gray-600 text-sm">
                          <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center text-gray-600 text-sm">
                          <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center text-gray-600 text-sm">
                          <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{job.type}</span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => openJobModal(job)}
                      className="mt-4 md:mt-0 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                  <p className="mt-4 text-gray-600">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Application CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Don't See a Perfect Fit?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. Send us your resume and let us know how you can contribute.
          </p>
          <a href="mailto:careers@arcatic.com" className="btn bg-white text-primary hover:bg-gray-100">
            Send Your Resume
          </a>
        </div>
      </section>

      {/* Job Modal */}
      {isModalOpen && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    Job ID: {selectedJob.id}
                  </span>
                  <h2 className="text-2xl font-bold mt-2">{selectedJob.title}</h2>
                  <div className="mt-2 flex flex-wrap gap-4">
                    <div className="flex items-center text-gray-600">
                      <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span>{selectedJob.department}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{selectedJob.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{selectedJob.type}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={closeJobModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-3">Job Description</h3>
                <p className="text-gray-600">{selectedJob.description}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-3">Responsibilities</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  {selectedJob.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-3">Requirements</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  {selectedJob.requirements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-3">How to Apply</h3>
                <p className="text-gray-600 mb-4">
                  Please send your resume and cover letter to <a href="mailto:careers@arcatic.com" className="text-primary hover:underline">careers@arcatic.com</a> with the subject line: "{selectedJob.id} - {selectedJob.title} Application"
                </p>
                <p className="text-gray-600">
                  We look forward to learning more about you and how you can contribute to our team!
                </p>
              </div>
            </div>
            
            <div className="p-6 border-t flex justify-end">
              <button
                onClick={closeJobModal}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors mr-3"
              >
                Close
              </button>
              <a
                href={`mailto:careers@arcatic.com?subject=${selectedJob.id} - ${selectedJob.title} Application`}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
} 