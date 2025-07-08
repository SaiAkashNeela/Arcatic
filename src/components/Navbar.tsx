'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className={`text-2xl font-bold ${scrolled ? 'text-dark' : 'text-white'}`}>Arcatic</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className={`${scrolled ? 'text-dark' : 'text-white'} hover:text-primary transition-colors`}>
              Home
            </Link>
            <Link href="/about" className={`${scrolled ? 'text-dark' : 'text-white'} hover:text-primary transition-colors`}>
              About Us
            </Link>
            <Link href="/services" className={`${scrolled ? 'text-dark' : 'text-white'} hover:text-primary transition-colors`}>
              Services
            </Link>
            <Link href="/portfolio" className={`${scrolled ? 'text-dark' : 'text-white'} hover:text-primary transition-colors`}>
              Portfolio
            </Link>
            <Link href="/blog" className={`${scrolled ? 'text-dark' : 'text-white'} hover:text-primary transition-colors`}>
              Blog
            </Link>
            <Link href="/careers" className={`${scrolled ? 'text-dark' : 'text-white'} hover:text-primary transition-colors`}>
              Careers
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact" className="btn btn-primary shadow-glow">
              Get a Free Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`${scrolled ? 'text-dark' : 'text-white'} hover:text-primary focus:outline-none transition-colors`}
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white rounded-lg shadow-lg p-4 absolute left-4 right-4 top-16 transition-all duration-300 ease-in-out">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-dark hover:text-primary transition-colors" onClick={toggleMenu}>
                Home
              </Link>
              <Link href="/about" className="text-dark hover:text-primary transition-colors" onClick={toggleMenu}>
                About Us
              </Link>
              <Link href="/services" className="text-dark hover:text-primary transition-colors" onClick={toggleMenu}>
                Services
              </Link>
              <Link href="/portfolio" className="text-dark hover:text-primary transition-colors" onClick={toggleMenu}>
                Portfolio
              </Link>
              <Link href="/blog" className="text-dark hover:text-primary transition-colors" onClick={toggleMenu}>
                Blog
              </Link>
              <Link href="/careers" className="text-dark hover:text-primary transition-colors" onClick={toggleMenu}>
                Careers
              </Link>
              <Link href="/contact" className="btn btn-primary inline-block text-center shadow-glow" onClick={toggleMenu}>
                Get a Free Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
