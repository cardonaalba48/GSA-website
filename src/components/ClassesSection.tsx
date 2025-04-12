import React, { useState, useEffect, useRef } from 'react';

const ClassesSection = () => {
  // States for animations and interactive elements
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(false);
  const sectionRef = useRef(null);
  
  // Colors from the GSA logo for consistent branding - matching HeroSection
  const colors = {
    primaryBlue: "#3498db",    // Main triangle blue
    accentRed: "#e74c3c",      // Left triangle red
    accentYellow: "#f1c40f",   // Right triangle yellow
    textDark: "#2c3e50",       // Dark text
    white: "#ffffff"           // Circle and background
  };

  // Classes data for easier management
  const classesData = [
    {
      id: 'in-person',
      title: 'In-Person Classes',
      items: [
        'Wednesdays: 6:00 PM – 7:00 PM',
        'Saturdays: 2:00 PM – 3:00 PM',
        'Location: 4437 S River Blvd, Unit 130, Independence, MO'
      ],
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      )
    },
    {
      id: 'virtual',
      title: 'Virtual Classes',
      items: [
        'Introductory Level: 7 lessons',
        'Level A: 60 lessons in modules',
        'Level B: 30 lessons and practices',
        'Advanced Levels: Require in-person participation'
      ],
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      )
    },
    {
      id: 'online',
      title: 'Online Resources',
      items: [
        'Coming soon: Lessons on our YouTube channel.'
      ],
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
        </svg>
      ),
      hasButton: true
    }
  ];

  // Intersection Observer to trigger animations when the section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="classes" 
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      style={{ 
        backgroundColor: `${colors.primaryBlue}05`, 
        minHeight: '80vh' 
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large decorative circle */}
        <div 
          className="absolute top-1/2 right-0 rounded-full opacity-10"
          style={{ 
            width: '60vh', 
            height: '60vh',
            border: `3px solid ${colors.primaryBlue}`,
            transform: 'translate(30%, -30%)',
            animation: 'pulse 15s infinite ease-in-out'
          }}
        ></div>
        
        {/* Small geometric shapes */}
        <div 
          className="absolute bottom-0 left-0 opacity-10"
          style={{
            width: '40vh',
            height: '40vh',
            clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
            backgroundColor: colors.accentRed,
            transform: 'translate(-30%, 30%) rotate(45deg)',
            animation: 'rotate 30s infinite linear'
          }}
        ></div>
        
        <div 
          className="absolute top-0 left-1/2 opacity-10"
          style={{
            width: '20vh',
            height: '20vh',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            backgroundColor: colors.accentYellow,
            transform: 'translate(-50%, -30%) rotate(15deg)',
            animation: 'rotate 20s infinite linear reverse'
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section title with animation */}
        <div className="overflow-hidden mb-16 text-center">
          <h2 
            className={`font-serif font-bold text-4xl md:text-5xl transition-transform duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
            style={{ 
              color: colors.textDark,
              transitionDelay: '200ms'
            }}
          >
            Classes & Resources
          </h2>
          <div 
            className={`mx-auto mt-3 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ 
              width: '80px', 
              height: '4px', 
              backgroundColor: colors.primaryBlue,
              transitionDelay: '400ms'
            }}
          ></div>
        </div>

        {/* Classes cards with staggered animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {classesData.map((classItem, index) => (
            <div 
              key={classItem.id}
              className={`relative bg-white rounded-xl p-8 shadow-lg transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              } ${hoveredCard === classItem.id ? 'transform scale-105' : ''}`}
              style={{ 
                transitionDelay: `${400 + index * 200}ms`,
                borderTop: `4px solid ${
                  index === 0 ? colors.accentRed : 
                  index === 1 ? colors.primaryBlue : 
                  colors.accentYellow
                }`,
                boxShadow: hoveredCard === classItem.id ? 
                  `0 20px 30px -10px ${colors.primaryBlue}20` : 
                  `0 10px 20px -5px ${colors.primaryBlue}10`
              }}
              onMouseEnter={() => setHoveredCard(classItem.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Icon with color transition */}
              <div 
                className="mb-6 transition-colors duration-300 flex justify-center md:justify-start"
                style={{ 
                  color: hoveredCard === classItem.id ? 
                    (index === 0 ? colors.accentRed : 
                    index === 1 ? colors.primaryBlue : 
                    colors.accentYellow) : 
                    colors.textDark
                }}
              >
                {classItem.icon}
              </div>

              {/* Card title */}
              <h3 
                className="text-2xl font-bold mb-4 transition-colors duration-300"
                style={{ 
                  color: hoveredCard === classItem.id ? 
                    (index === 0 ? colors.accentRed : 
                    index === 1 ? colors.primaryBlue : 
                    colors.accentYellow) : 
                    colors.textDark
                }}
              >
                {classItem.title}
              </h3>

              {/* Card content */}
              <ul className="space-y-3 mb-6">
                {classItem.items.map((item, itemIndex) => (
                  <li 
                    key={itemIndex} 
                    className="flex items-center"
                    style={{ color: colors.textDark }}
                  >
                    <div 
                      className="h-1.5 w-1.5 rounded-full mr-2"
                      style={{ 
                        backgroundColor: index === 0 ? colors.accentRed : 
                        index === 1 ? colors.primaryBlue : 
                        colors.accentYellow
                      }}
                    ></div>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Conditional button */}
              {classItem.hasButton && (
                <a 
                  href="#" 
                  className="inline-block mt-4 px-6 py-3 rounded-full font-medium transition-all duration-300"
                  style={{ 
                    backgroundColor: hoveredButton ? colors.primaryBlue : 'transparent',
                    color: hoveredButton ? colors.white : colors.primaryBlue,
                    borderWidth: '2px',
                    borderColor: colors.primaryBlue,
                    transform: hoveredButton ? 'translateY(-2px)' : 'translateY(0)',
                    boxShadow: hoveredButton ? `0 10px 15px -3px ${colors.primaryBlue}40` : 'none'
                  }}
                  onMouseEnter={() => setHoveredButton(true)}
                  onMouseLeave={() => setHoveredButton(false)}
                >
                  Watch Introductory Video
                </a>
              )}

              {/* Decorative shape in the background */}
              <div 
                className="absolute bottom-0 right-0 pointer-events-none opacity-5"
                style={{
                  width: '150px',
                  height: '150px',
                  clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                  backgroundColor: index === 0 ? colors.accentRed : 
                    index === 1 ? colors.primaryBlue : 
                    colors.accentYellow,
                  transform: 'translate(30%, 30%) rotate(15deg)',
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* Final CTA section with animation */}
        <div 
          className={`text-center py-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '1000ms' }}
        >
          <h3 className="font-serif text-2xl font-bold mb-4" style={{ color: colors.textDark }}>
            Ready to Start Your Journey?
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: colors.textDark }}>
            Join our next class or contact us for more information about how to begin your spiritual development with the Gnostic Spiritual Alliance.
          </p>
          <a 
            href="#contact" 
            className="inline-block px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-xl"
            style={{ 
              background: `linear-gradient(135deg, ${colors.primaryBlue}, ${colors.accentRed})`,
              color: colors.white,
              boxShadow: `0 10px 20px -5px ${colors.primaryBlue}40`,
              transform: 'translateY(0)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = `0 15px 25px -5px ${colors.primaryBlue}60`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = `0 10px 20px -5px ${colors.primaryBlue}40`;
            }}
          >
            Register for Classes
          </a>
        </div>
      </div>

      {/* Global CSS for animations - matching HeroSection */}
      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.05); opacity: 0.2; }
        }
        
        @keyframes rotate {
          from { transform: translate(-30%, 30%) rotate(0deg); }
          to { transform: translate(-30%, 30%) rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default ClassesSection;