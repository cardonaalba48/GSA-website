import React, { useState, useEffect, useRef } from 'react';
import { Book, Heart, Users } from 'lucide-react';

const TeachingsSection = () => {
  // States for animations and interactive elements
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const sectionRef = useRef(null);
  
  // Colors from the GSA logo for consistent branding (matching ContactSection)
  const colors = {
    primaryBlue: "#3498db",    // Main triangle blue
    accentRed: "#e74c3c",      // Left triangle red
    accentYellow: "#f1c40f",   // Right triangle yellow
    textDark: "#2c3e50",       // Dark text
    white: "#ffffff"           // Circle and background
  };

  const teachings = [
    {
      icon: Book,
      title: "Fundamental Principles",
      description: "Learn the core principles of Gnostic philosophy and practical spirituality that form the foundation of self-transformation.",
      color: colors.primaryBlue,
      bgColor: `${colors.primaryBlue}15`
    },
    {
      icon: Heart,
      title: "Self-Knowledge",
      description: "Discover ancient techniques for understanding yourself, your consciousness, and the hidden dimensions of your inner world.",
      color: colors.accentRed,
      bgColor: `${colors.accentRed}15`
    },
    {
      icon: Users,
      title: "Practical Application",
      description: "Apply ancient wisdom to modern life through daily practices that lead to spiritual growth and lasting inner harmony.",
      color: colors.accentYellow,
      bgColor: `${colors.accentYellow}15`
    }
  ];

  // Intersection Observer to trigger animations when section comes into view
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
      id="teachings" 
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: `${colors.primaryBlue}05` }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Sacred geometry pattern in the background */}
        <div 
          className="absolute top-0 right-0 opacity-5"
          style={{
            width: '60vh',
            height: '60vh',
            borderRadius: '50%',
            border: `2px solid ${colors.accentYellow}`,
            transform: 'translate(30%, -30%)',
            animation: 'slowRotate 40s infinite linear'
          }}
        ></div>
        
        {/* Triangle shape */}
        <div 
          className="absolute bottom-0 left-0 opacity-5"
          style={{
            width: '40vh',
            height: '40vh',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            backgroundColor: colors.accentRed,
            transform: 'translate(-30%, 30%) rotate(180deg)',
            animation: 'float 20s infinite ease-in-out'
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
            Core Teachings
          </h2>
          <div 
            className={`mx-auto mt-3 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ 
              width: '80px', 
              height: '4px', 
              backgroundImage: `linear-gradient(to right, ${colors.accentYellow}, ${colors.primaryBlue})`,
              transitionDelay: '400ms'
            }}
          ></div>
          <p 
            className={`max-w-2xl mx-auto mt-6 text-lg text-gray-600 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            Explore the fundamental aspects of Gnostic wisdom that guide our path toward spiritual awakening and self-realization.
          </p>
        </div>

        {/* Teaching cards grid with animations */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {teachings.map((teaching, index) => (
            <div 
              key={index}
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: `${600 + index * 200}ms` }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div 
                className="bg-white p-8 md:p-10 rounded-2xl shadow-lg relative overflow-hidden h-full group cursor-pointer transition-all duration-500"
                style={{
                  transform: activeCard === index ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: activeCard === index 
                    ? `0 20px 30px -10px ${teaching.color}20` 
                    : '0 10px 20px -10px rgba(0,0,0,0.1)'
                }}
              >
                {/* Decorative circle */}
                <div 
                  className="absolute top-0 right-0 w-32 h-32 -mt-12 -mr-12 rounded-full opacity-10 transition-transform duration-700 group-hover:scale-110"
                  style={{ 
                    backgroundColor: teaching.color 
                  }}
                ></div>
                
                {/* Icon with animated background */}
                <div 
                  className="relative z-10 mb-8 transition-all duration-500 group-hover:scale-110"
                  style={{ transformOrigin: 'center left' }}
                >
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500"
                    style={{ 
                      backgroundColor: teaching.bgColor,
                      transform: activeCard === index ? 'rotate(5deg)' : 'rotate(0)',
                    }}
                  >
                    <teaching.icon 
                      size={32} 
                      color={teaching.color}
                      className="transition-transform duration-500 group-hover:scale-110" 
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 
                    className="text-2xl font-bold mb-4 transition-all duration-300 group-hover:translate-x-1"
                    style={{ color: colors.textDark }}
                  >
                    {teaching.title}
                  </h3>
                  
                  <p className="text-gray-600 transition-all duration-300 group-hover:translate-x-1">
                    {teaching.description}
                  </p>
                  
                  {/* Learn more link with animation */}
                  <div 
                    className="mt-6 inline-flex items-center font-medium transition-all duration-300 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"
                    style={{ color: teaching.color }}
                  >
                    Learn more
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
                
                {/* Bottom decoration */}
                <div 
                  className="absolute bottom-0 left-0 h-1 transition-all duration-500 group-hover:opacity-100"
                  style={{ 
                    backgroundColor: teaching.color,
                    width: activeCard === index ? '100%' : '0%',
                    opacity: '0.7'
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA button */}
        <div 
          className={`mt-16 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}
          style={{ transitionDelay: '1200ms' }}
        >
          <button
            className="inline-flex items-center gap-2 py-3 px-8 rounded-lg font-medium transition-all duration-500"
            style={{ 
              background: `linear-gradient(135deg, ${colors.primaryBlue}, ${colors.accentRed})`,
              color: colors.white,
              boxShadow: `0 10px 20px -5px ${colors.primaryBlue}30`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = `0 15px 25px -5px ${colors.primaryBlue}50`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = `0 10px 20px -5px ${colors.primaryBlue}30`;
            }}
          >
            Explore All Teachings
          </button>
        </div>
      </div>

      {/* Global CSS for animations */}
      <style jsx global>{`
        @keyframes slowRotate {
          from { transform: translate(30%, -30%) rotate(0deg); }
          to { transform: translate(30%, -30%) rotate(360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translate(-30%, 30%) rotate(180deg); }
          50% { transform: translate(-30%, 30%) rotate(180deg) translateY(-20px); }
        }
      `}</style>
    </section>
  );
};

export default TeachingsSection;