import React, { useState, useEffect, useRef } from 'react';

const Footer = () => {
  // States for animations and interactive elements
  const [isInView, setIsInView] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const footerRef = useRef(null);

  // Colors from the GSA logo for consistent branding (same as Hero)
  const colors = {
    primaryBlue: "#3498db",    // Main triangle blue
    accentRed: "#e74c3c",      // Left triangle red
    accentYellow: "#f1c40f",   // Right triangle yellow
    textDark: "#2c3e50",       // Dark text
    white: "#ffffff"           // Circle and background
  };

  // Check if footer is in viewport to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  // Quick links data structure
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Teachings", href: "#teachings" },
        { label: "Practices", href: "#practices" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Books", href: "#" },
        { label: "Videos", href: "#" },
        { label: "Study Guides", href: "#" },
        { label: "Articles", href: "#" }
      ]
    },
    {
      title: "Contact",
      links: [
        { label: "Get in Touch", href: "#contact" },
        { label: "Newsletter", href: "#" },
        { label: "Location", href: "#" },
        { label: "Support", href: "#" }
      ]
    }
  ];

  return (
    <footer 
      ref={footerRef}
      className="relative overflow-hidden text-gray-200"
      style={{ 
        background: `linear-gradient(135deg, 
          ${colors.textDark} 0%,
          #1a2634 100%)`,
        borderTop: '1px solid rgba(255,255,255,0.1)'
      }}
    >
      {/* Sacred geometry decorative elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-20">
        {/* Large decorative circle */}
        <div 
          className="absolute bottom-0 right-0 rounded-full border-4 transform translate-x-1/4 translate-y-1/4"
          style={{ 
            width: '70vh', 
            height: '70vh', 
            borderColor: colors.primaryBlue,
            animation: 'footerPulse 15s infinite ease-in-out'
          }}
        ></div>
        
        {/* Triangle decorative element */}
        <div 
          className="absolute bottom-0 left-0 transform -translate-x-1/3 translate-y-1/3"
          style={{
            width: '40vh',
            height: '40vh',
            clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
            backgroundColor: colors.accentRed,
            animation: 'footerRotate 30s infinite linear'
          }}
        ></div>
        
        {/* Small geometric elements scattered in footer */}
        <div 
          className="absolute top-10 right-1/4 rounded-full"
          style={{ 
            width: '15vh', 
            height: '15vh',
            backgroundColor: `${colors.accentYellow}30`,
            animation: 'footerFloat 20s infinite ease-in-out'
          }}
        ></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Upper footer section with links */}
        <div className="grid md:grid-cols-4 gap-8 pb-12 border-b border-gray-700">
          {/* First three columns - Quick links, Resources, Contact */}
          {footerLinks.map((section, sectionIndex) => (
            <div 
              key={section.title}
              className={`transition-all duration-1000 transform ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${sectionIndex * 100}ms` }}
            >
              <h3 className="text-xl font-bold mb-6 relative inline-block text-white">
                <span className="relative z-10">{section.title}</span>
                <span 
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r transform transition-all duration-500"
                  style={{ 
                    width: '100%', 
                    background: `linear-gradient(to right, ${colors.primaryBlue}, ${colors.accentRed})`,
                    transformOrigin: 'left'
                  }}
                ></span>
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, index) => (
                  <li 
                    key={link.label}
                    className={`transition-all duration-700 transform ${
                      isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                    style={{ transitionDelay: `${(sectionIndex * 100) + (index * 100) + 200}ms` }}
                  >
                    <a 
                      href={link.href} 
                      className="group flex items-center relative overflow-hidden text-gray-400 hover:text-white transition-colors duration-300"
                      onMouseEnter={() => setHoveredLink(`${section.title}-${link.label}`)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <span className="mr-2 text-xs opacity-0 transform -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        {hoveredLink === `${section.title}-${link.label}` ? '→' : ''}
                      </span>
                      <span>{link.label}</span>
                      <span 
                        className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-300" 
                        style={{ 
                          background: `linear-gradient(to right, ${colors.primaryBlue}, ${colors.accentYellow})`,
                          transformOrigin: 'left'
                        }}
                      ></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Fourth column - Visit Us */}
          <div 
            className={`transition-all duration-1000 transform ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <h3 className="text-xl font-bold mb-6 relative inline-block text-white">
              <span className="relative z-10">Visit Us</span>
              <span 
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r transform transition-all duration-500"
                style={{ 
                  width: '100%', 
                  background: `linear-gradient(to right, ${colors.primaryBlue}, ${colors.accentRed})`,
                  transformOrigin: 'left'
                }}
              ></span>
            </h3>
            <div className="backdrop-blur-sm p-6 rounded-lg bg-white bg-opacity-5 shadow-xl border border-gray-700">
              <p 
                className={`mb-3 transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                4437 S River Blvd Unit 130
              </p>
              <p 
                className={`mb-3 transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
                style={{ transitionDelay: '500ms' }}
              >
                Independence, MO
              </p>
              <p 
                className={`mb-3 transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                United States
              </p>
              <p 
                className={`font-medium text-white transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
                style={{ transitionDelay: '700ms' }}
              >
                +1 816-500-0000
              </p>
            </div>
            
            {/* Social media icons */}
            <div 
              className={`mt-6 flex space-x-4 transition-all duration-1000 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              {[
                { name: 'facebook', path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z', href: 'https://www.facebook.com/GnosticSpiritualAlliance/' },
                { name: 'twitter', path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z', href: '#' },
                { name: 'instagram', path: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.5 2h9a5.5 5.5 0 015.5 5.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2z', href: 'https://www.instagram.com/gnosisspiritual/' },
                { name: 'youtube', path: 'M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z M9.75 15.02V8.48l5.75 3.27-5.75 3.27z', href: 'https://www.youtube.com/channel/UCGjCxjjNZ0joIPF7wSh6Icw' }
              ].map((icon, index) => (
                <a
                  key={icon.name}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`h-12 w-12 rounded-full flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:shadow-lg bg-white bg-opacity-5 hover:bg-opacity-10`}
                  style={{ 
                    transitionDelay: `${800 + (index * 100)}ms`,
                    boxShadow: hoveredLink === `social-${icon.name}` ? `0 0 20px ${colors.primaryBlue}80` : 'none'
                  }}
                  onMouseEnter={() => setHoveredLink(`social-${icon.name}`)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-5 h-5"
                  >
                    <path d={icon.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter subscription section */}
        <div 
          className={`mt-16 p-8 rounded-xl backdrop-blur-sm bg-white bg-opacity-5 border border-gray-700 shadow-xl transition-all duration-1000 transform ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '900ms' }}
        >
          <div className="md:flex items-center justify-between space-y-6 md:space-y-0">
            <div className="md:w-1/2 md:pr-8">
              <h3 className="text-2xl font-bold text-white mb-3">Stay Connected</h3>
              <p className="text-gray-300">Get updates on our latest teachings and events delivered directly to your inbox.</p>
            </div>
            <div className="md:w-1/2">
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow py-3 px-4 rounded-lg bg-white bg-opacity-10 border border-gray-600 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-20 transition-all duration-300 placeholder-gray-400 text-white" 
                />
                <button 
                  type="submit" 
                  className="relative overflow-hidden py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.primaryBlue}, ${colors.accentRed})`,
                    boxShadow: '0 4px 15px rgba(52, 152, 219, 0.3)'
                  }}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom footer section */}
        <div className="pt-8 mt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2025 Gnostic Spiritual Alliance. All rights reserved.
          </p>
        </div>
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes footerPulse {
          0%, 100% { transform: translate(25%, 25%) scale(1); opacity: 0.1; }
          50% { transform: translate(25%, 25%) scale(1.1); opacity: 0.2; }
        }
        
        @keyframes footerRotate {
          0% { transform: translate(-33%, 33%) rotate(0deg); }
          100% { transform: translate(-33%, 33%) rotate(360deg); }
        }
        
        @keyframes footerFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;