import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  
  // Colors from the branding (matching About section)
  const colors = {
    primaryBlue: "#3498db",
    accentRed: "#e74c3c",
    accentYellow: "#f1c40f",
    textDark: "#2c3e50",
    white: "#ffffff"
  };

  // Navigation links with dropdown options
  const navLinks = [
    { href: "#home", text: "Home" },
    { 
      href: "#about", 
      text: "About Us",
      dropdown: [
        { href: "#philosophy", text: "Philosophy" },
        { href: "#mission", text: "Our Mission" }
      ]
    },
    { href: "#teachings", text: "Teachings" },
    { href: "#events", text: "Events" },
    { href: "#resources", text: "Resources" },
    { href: "#quotes", text: "Quotes" },
    { href: "#classes", text: "Classes" },
    { href: "#contact", text: "Contact" }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll events to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active section detection
      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle dropdown menu toggle
  const handleDropdownHover = (index) => {
    setHoveredLink(index);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/90 shadow-md backdrop-blur-md py-2' 
          : 'bg-white/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo with animation */}
          <div className="flex items-center group">
            <div className="relative overflow-hidden">
              <img 
                src="/images/gsa-logo.png" 
                alt="Gnostic Spiritual Alliance" 
                className="h-16 w-auto transition-transform duration-500 group-hover:scale-105" 
              />
              <div 
                className="absolute bottom-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ background: `linear-gradient(to right, ${colors.accentRed}, ${colors.primaryBlue})` }}
              ></div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link, index) => (
              <div 
                key={link.href}
                className="relative group"
                onMouseEnter={() => handleDropdownHover(index)}
                onMouseLeave={() => handleDropdownHover(null)}
              >
                <a 
                  href={link.href} 
                  className={`px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-all duration-300 relative ${
                    activeSection === link.href.substring(1) 
                      ? `text-${colors.primaryBlue.substring(1)}` 
                      : 'text-gray-700 hover:text-blue-500'
                  }`}
                >
                  <span className="relative z-10">{link.text}</span>
                  
                  {/* Active indicator */}
                  {activeSection === link.href.substring(1) && (
                    <span 
                      className="absolute bottom-0 left-0 w-full h-0.5 transform"
                      style={{ background: colors.primaryBlue }}
                    ></span>
                  )}
                  
                  {/* Hover effect */}
                  <span 
                    className="absolute bottom-0 left-0 w-full h-full bg-gray-100 rounded-md transform scale-x-0 scale-y-0 group-hover:scale-x-100 group-hover:scale-y-100 transition-transform duration-300 origin-bottom opacity-0 group-hover:opacity-20"
                  ></span>
                  
                  {/* Dropdown indicator */}
                  {link.dropdown && (
                    <ChevronDown size={14} className="inline-block ml-1 transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </a>
                
                {/* Dropdown menu */}
                {link.dropdown && hoveredLink === index && (
                  <div 
                    className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 transform transition-all duration-300 opacity-100"
                    style={{ 
                      borderTop: `3px solid ${colors.primaryBlue}`,
                    }}
                  >
                    {link.dropdown.map(item => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                      >
                        {item.text}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Action button */}
            <a
              href="#join"
              className="ml-4 px-4 py-2 rounded-lg font-medium text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              style={{ 
                background: `linear-gradient(135deg, ${colors.primaryBlue}, ${colors.accentRed})`,
                boxShadow: `0 4px 6px -1px ${colors.primaryBlue}30`
              }}
            >
              Join Us
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu} 
              className="text-gray-700 hover:text-blue-500 transition-colors duration-300 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={24} className="transform transition-transform duration-300 rotate-90" />
              ) : (
                <Menu size={24} className="transform transition-transform duration-300 hover:rotate-12" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map(link => (
            <React.Fragment key={link.href}>
              <a
                href={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  activeSection === link.href.substring(1) 
                    ? `text-${colors.primaryBlue.substring(1)} bg-blue-50`
                    : 'text-gray-700 hover:text-blue-500 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.text}
              </a>
              
              {/* Dropdown items for mobile */}
              {link.dropdown && link.dropdown.map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block pl-6 py-2 text-sm text-gray-600 hover:text-blue-500 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.text}
                </a>
              ))}
            </React.Fragment>
          ))}
          
          {/* Mobile action button */}
          <a
            href="#join"
            className="block mx-3 my-2 px-4 py-2 rounded-lg font-medium text-white text-center transition-all duration-300"
            style={{ 
              background: `linear-gradient(135deg, ${colors.primaryBlue}, ${colors.accentRed})`,
              boxShadow: `0 4px 6px -1px ${colors.primaryBlue}30`
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            Join Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;