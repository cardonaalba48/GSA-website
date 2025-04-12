import React, { useState, useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';

const QuotesSection = () => {
  // States for animations and interactive elements
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredQuote, setHoveredQuote] = useState(null);
  const sectionRef = useRef(null);
  
  // Colors from the GSA logo for consistent branding
  const colors = {
    primaryBlue: "#3498db",    // Main triangle blue
    accentRed: "#e74c3c",      // Left triangle red
    accentYellow: "#f1c40f",   // Right triangle yellow
    textDark: "#2c3e50",       // Dark text
    white: "#ffffff"           // Circle and background
  };

  // Expanded quotes data with additional styling options
  const quotes = [
    {
      text: "The truth is within oneself; it is not outside. To find it within oneself is to understand the essence of life.",
      author: "VM Samael Aun Weor",
      primaryColor: colors.primaryBlue,
      accentColor: colors.accentYellow,
      decorativeElement: "circle"
    },
    {
      text: "Meditation is the path to self-discovery and the awakening of consciousness.",
      author: "VM Rabolu",
      primaryColor: colors.accentRed,
      accentColor: colors.primaryBlue,
      decorativeElement: "triangle"
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
      id="quotes" 
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large circle in the background */}
        <div 
          className="absolute -top-1/3 -right-1/4 rounded-full opacity-5"
          style={{ 
            width: '70vh', 
            height: '70vh',
            backgroundColor: colors.primaryBlue,
            animation: 'pulse 15s infinite ease-in-out'
          }}
        ></div>
        
        {/* Small triangular shape */}
        <div 
          className="absolute -bottom-16 -left-16 opacity-5"
          style={{
            width: '25vh',
            height: '25vh',
            clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
            backgroundColor: colors.accentRed,
            transform: 'rotate(15deg)',
            animation: 'rotate 30s infinite linear'
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
            Inspirational Quotes
          </h2>
          <div 
            className={`mx-auto mt-3 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ 
              width: '80px', 
              height: '4px', 
              backgroundImage: `linear-gradient(to right, ${colors.accentRed}, ${colors.primaryBlue})`,
              transitionDelay: '400ms'
            }}
          ></div>
        </div>

        {/* Quotes grid with animations */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {quotes.map((quote, index) => (
            <div 
              key={index}
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: `${500 + index * 200}ms` }}
              onMouseEnter={() => setHoveredQuote(index)}
              onMouseLeave={() => setHoveredQuote(null)}
            >
              <blockquote 
                className="bg-white p-8 md:p-10 rounded-2xl shadow-lg relative overflow-hidden h-full transition-all duration-300"
                style={{ 
                  transform: hoveredQuote === index ? 'translateY(-5px)' : 'translateY(0)',
                  boxShadow: hoveredQuote === index 
                    ? `0 20px 25px -5px ${quote.primaryColor}20, 0 10px 10px -5px ${quote.primaryColor}10` 
                    : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                }}
              >
                {/* Decorative elements */}
                {quote.decorativeElement === 'circle' && (
                  <div 
                    className="absolute top-0 right-0 w-32 h-32 -mt-10 -mr-10 rounded-full opacity-10"
                    style={{ backgroundColor: quote.primaryColor }}
                  ></div>
                )}
                
                {quote.decorativeElement === 'triangle' && (
                  <div 
                    className="absolute top-0 right-0 opacity-10"
                    style={{
                      width: '150px',
                      height: '150px',
                      clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                      backgroundColor: quote.primaryColor,
                      transform: 'translate(30%, -30%) rotate(15deg)',
                    }}
                  ></div>
                )}
                
                {/* Quote icon */}
                <div 
                  className="mb-6 relative z-10"
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: `${quote.primaryColor}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: quote.primaryColor,
                    transition: 'all 0.3s ease',
                    transform: hoveredQuote === index ? 'scale(1.1)' : 'scale(1)'
                  }}
                >
                  <Quote size={24} />
                </div>
                
                {/* Quote text */}
                <p 
                  className="text-xl md:text-2xl font-serif italic mb-6 relative z-10"
                  style={{ 
                    color: colors.textDark,
                    lineHeight: '1.6'
                  }}
                >
                  {quote.text}
                </p>
                
                {/* Author with accent line */}
                <div className="flex items-center relative z-10">
                  <div 
                    style={{ 
                      width: '30px', 
                      height: '2px', 
                      backgroundColor: quote.accentColor,
                      marginRight: '12px'
                    }}
                  ></div>
                  <span 
                    className="font-medium"
                    style={{ color: quote.primaryColor }}
                  >
                    {quote.author}
                  </span>
                </div>
                
                {/* Decorative sacred geometry element */}
                <div className="absolute bottom-0 left-0 w-full h-32 opacity-5 overflow-hidden">
                  <div 
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                    style={{
                      width: '200px',
                      height: '200px',
                      borderRadius: '50%',
                      border: `2px solid ${quote.accentColor}`,
                      animation: 'slowPulse 8s infinite ease-in-out'
                    }}
                  ></div>
                </div>
              </blockquote>
            </div>
          ))}
        </div>
      </div>

      {/* Global CSS for animations */}
      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.05; }
          50% { transform: scale(1.03); opacity: 0.1; }
        }
        
        @keyframes slowPulse {
          0%, 100% { transform: translate(-50%, 30%) scale(1); opacity: 0.3; }
          50% { transform: translate(-50%, 30%) scale(1.1); opacity: 0.5; }
        }
        
        @keyframes rotate {
          from { transform: rotate(15deg); }
          to { transform: rotate(375deg); }
        }
      `}</style>
    </section>
  );
};

export default QuotesSection;