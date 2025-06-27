import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Careers - Arcatic',
  description: 'Join our team of talented professionals and grow your career with us.',
};

export default function Careers() {
  const jobOpenings = [
    {
      id: 'digital-marketing-specialist',
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      location: 'San Francisco, CA (Hybrid)',
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
      id: 'fashion-designer',
      title: 'Fashion Designer',
      department: 'Design',
      location: 'San Francisco, CA (On-site)',
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
      id: 'web-developer',
      title: 'Web Developer',
      department: 'Development',
      location: 'Remote',
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
      id: 'data-analyst',
      title: 'Data Analyst',
      department: 'Analytics',
      location: 'Remote',
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
      id: 'project-manager',
      title: 'Project Manager',
      department: 'Operations',
      location: 'San Francisco, CA (Hybrid)',
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
            <p className="text-xl mb-8">
              We're looking for talented individuals who are passionate about making a difference. Explore our current openings and grow your career with us.
            </p>
            <a href="#openings" className="btn btn-primary">
              View Open Positions
            </a>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Work With Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At Arcatic, we believe in creating an environment where talented individuals can thrive, grow, and make an impact.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-4">
                <svg className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovative Work</h3>
              <p className="text-gray-600">
                Work on cutting-edge projects for diverse clients across various industries. Every day brings new challenges and opportunities to innovate.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-4">
                <svg className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Collaborative Culture</h3>
              <p className="text-gray-600">
                Join a team of passionate professionals who value collaboration, creativity, and open communication. We believe great ideas can come from anyone.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-4">
                <svg className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Growth Opportunities</h3>
              <p className="text-gray-600">
                We invest in our team's professional development and provide clear paths for career advancement. Your growth is our success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Benefits & Perks</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive benefits package to support our team's well-being and work-life balance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Current Openings</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our current job opportunities and find the perfect role for your skills and passion.
            </p>
          </div>
          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{job.title}</h3>
                    <p className="text-gray-600 mb-4 md:mb-0">
                      {job.department} • {job.location} • {job.type}
                    </p>
                  </div>
                  <Link href={`/careers/${job.id}`} className="btn btn-primary">
                    View Details
                  </Link>
                </div>
                <div className="mt-6">
                  <p className="text-gray-700 mb-4">{job.description}</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold mb-2">Responsibilities:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {job.responsibilities.slice(0, 3).map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Requirements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {job.requirements.slice(0, 3).map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Application Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've designed a straightforward process to help you find the right role at Arcatic.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Apply Online</h3>
              <p className="text-gray-600">
                Submit your application through our careers page with your resume and cover letter.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Initial Interview</h3>
              <p className="text-gray-600">
                If selected, you'll have a phone or video interview with our recruiting team.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Skills Assessment</h3>
              <p className="text-gray-600">
                Complete a skills assessment or task relevant to the position you're applying for.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Final Interview</h3>
              <p className="text-gray-600">
                Meet with the team and discuss how your skills align with our needs and culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Don't See the Right Fit?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. Send us your resume, and we'll keep you in mind for future opportunities.
          </p>
          <Link href="/contact" className="btn bg-white text-primary hover:bg-gray-100">
            Send Your Resume
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
} 