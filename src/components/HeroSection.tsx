import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ArrowRight, Heart, Book, Sparkles, Wind } from 'lucide-react';

const HeroSection = () => {
  // States for animations and interactive elements
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredButton, setHoveredButton] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const heroRef = useRef(null);
  
  // Colors from the GSA logo for consistent branding
  const colors = {
    primaryBlue: "#3498db",    // Main triangle blue
    accentRed: "#e74c3c",      // Left triangle red
    accentYellow: "#f1c40f",   // Right triangle yellow
    textDark: "#2c3e50",       // Dark text
    white: "#ffffff"           // Circle and background
  };

  // Key concepts representing GSA
  const conceptCards = [
    { icon: <Heart size={24} />, title: "Universal Love", color: colors.accentRed },
    { icon: <Book size={24} />, title: "Ancient Wisdom", color: colors.primaryBlue },
    { icon: <Sparkles size={24} />, title: "Consciousness", color: colors.accentYellow },
    { icon: <Wind size={24} />, title: "Transformation", color: colors.primaryBlue }
  ];
  
  // Initialize animations and scroll/mouse listeners
  useEffect(() => {
    // Trigger entrance animations after a brief delay
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
    // Setup parallax scroll effect
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    // Setup mouse tracking for 3D effect
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        setMousePosition({
          x: (clientX / innerWidth - 0.5) * 2, // -1 to 1 range
          y: (clientY / innerHeight - 0.5) * 2 // -1 to 1 range
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Clean up event listeners and timers
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  // Calculate opacity based on scroll position for fade effect
  const calculateOpacity = () => {
    const maxScroll = 600;
    return 1 - Math.min(scrollPosition / maxScroll, 0.7);
  };

  // Calculate perspective transformation based on mouse position for 3D effect
  const calculate3DTransform = (intensity = 1) => {
    const rotateX = mousePosition.y * 5 * intensity; 
    const rotateY = -mousePosition.x * 5 * intensity;
    return `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  // Calculate parallax offset for background image and elements
  const calculateParallax = (factor = 0.15) => {
    return `translateY(${scrollPosition * factor}px)`;
  };

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Main hero section"
    >
      {/* Light background effect with rotating gradient and parallax */}
      <div className="absolute inset-0 z-0 bg-sky-50">
        {/* Dynamic animated background */}
        <div 
          className="absolute inset-0 transform transition-transform duration-300 ease-out"
          style={{ opacity: 0.9, transform: calculateParallax(0.1) }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-blue-50"></div>
          
          {/* Animated mesh gradient overlay with logo colors */}
          <div 
            className="absolute inset-0 animate-pulse" 
            style={{ 
              backgroundImage: `
                radial-gradient(circle at 20% 30%, ${colors.accentRed}10 0%, transparent 35%),
                radial-gradient(circle at 80% 20%, ${colors.accentYellow}15 0%, transparent 35%),
                radial-gradient(circle at 50% 50%, ${colors.primaryBlue}10 0%, transparent 45%),
                radial-gradient(circle at 80% 70%, ${colors.accentRed}15 0%, transparent 35%)
              `,
              animation: 'gradientShift 15s ease infinite'
            }}
          ></div>
          
          {/* Triangle background element */}
          <div 
            className="absolute inset-0 opacity-10" 
            style={{
              backgroundImage: `
                linear-gradient(135deg, ${colors.accentRed}20, transparent 70%),
                linear-gradient(225deg, ${colors.accentYellow}20, transparent 70%),
                linear-gradient(315deg, ${colors.primaryBlue}20, transparent 70%)
              `
            }}
          ></div>
          
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 6 + 1}px`,
                  height: `${Math.random() * 6 + 1}px`,
                  backgroundColor: i % 3 === 0 ? colors.accentRed : i % 3 === 1 ? colors.accentYellow : colors.primaryBlue,
                  opacity: 0.3,
                  animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                  animationDelay: `${Math.random() * 10}s`
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Sacred geometry decorative elements with advanced 3D transformations */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {/* 3D Triangle logo in background */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-out"
          style={{
            width: '70vh',
            height: '70vh',
            transformStyle: 'preserve-3d',
            transform: calculate3DTransform(0.5)
          }}
        >
          {/* Triangle outline */}
          <div 
            className="absolute inset-0 opacity-15"
            style={{
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              border: `2px solid ${colors.primaryBlue}`,
              animation: 'rotate 45s infinite linear'
            }}
          ></div>
          
          {/* Inner circle */}
          <div 
            className="absolute top-1/2 left-1/2 w-3/5 h-3/5 rounded-full transform -translate-x-1/2 -translate-y-1/2 opacity-15 border-2"
            style={{ 
              borderColor: colors.primaryBlue,
              animation: 'pulse 8s infinite ease-in-out'
            }}
          ></div>
          
          {/* Glowing heart */}
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10 text-red-500"
            style={{
              filter: 'blur(2px)',
              animation: 'glow 3s infinite alternate ease-in-out'
            }}
          >
            <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Main content container with entrance animations */}
      <div 
        className={`relative z-20 max-w-7xl mx-auto px-6 text-center transition-all duration-1500 transform ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`} 
        style={{ opacity: calculateOpacity() }}
      >
        {/* Organization logo with 3D effect */}
        <div className="mb-6 flex justify-center overflow-hidden">
          <div 
            className={`inline-block transition-all duration-1000 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <img 
              src="/images/gsa-logo.png"
              alt="Gnostic Spiritual Alliance"
              className="h-24 md:h-28 w-auto"
              style={{ filter: 'drop-shadow(0 0 10px rgba(52, 152, 219, 0.3))' }}
            />
          </div>
        </div>
        
        {/* Organization name with staggered entrance */}
        <div className="overflow-hidden mb-2">
          <h2 
            className={`inline-block font-medium uppercase tracking-widest text-base md:text-lg transition-transform duration-1000 ${
              isLoaded ? 'translate-y-0' : 'translate-y-full'
            }`}
            style={{ 
              color: colors.textDark,
              textShadow: '0 2px 4px rgba(0,0,0,0.05)',
              transitionDelay: '300ms',
              letterSpacing: '0.2em'
            }}
          >
            Gnostic Spiritual Alliance
          </h2>
        </div>
        
        {/* Main headline with reveal animation and gradient text */}
        <div className="overflow-hidden mb-6">
          <h1 
            className={`font-serif font-bold text-4xl md:text-6xl lg:text-7xl leading-tight transition-transform duration-1000 ${
              isLoaded ? 'translate-y-0' : 'translate-y-full'
            }`}
            style={{ 
              color: colors.textDark,
              textShadow: '0 2px 8px rgba(0,0,0,0.05)',
              transitionDelay: '500ms'
            }}
          >
            Discover Your Path to<br />
            <span className="text-transparent bg-clip-text animate-gradient-text" style={{ 
              backgroundImage: `linear-gradient(to right, ${colors.accentRed}, ${colors.primaryBlue}, ${colors.accentYellow}, ${colors.accentRed})`,
              backgroundSize: '200% 100%'
            }}>
              Inner Enlightenment
            </span>
          </h1>
        </div>
        
        {/* Interactive concept cards with hover effects */}
        <div 
          className={`flex flex-wrap justify-center gap-4 md:gap-6 mb-10 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          {conceptCards.map((card, index) => (
            <div 
              key={card.title} 
              className="group relative px-4 py-3 sm:px-5 sm:py-4 rounded-xl backdrop-blur-md transition-all duration-300 cursor-pointer"
              style={{ 
                backgroundColor: hoveredCard === index ? `${card.color}10` : `${colors.textDark}05`,
                borderWidth: '1px',
                borderColor: hoveredCard === index ? card.color : `${colors.textDark}10`,
                transform: hoveredCard === index ? 'translateY(-5px)' : 'translateY(0)',
                boxShadow: hoveredCard === index ? `0 10px 25px -5px ${card.color}20` : 'none'
              }}
              onMouseEnter={() => setHoveredCard(index as any)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-center gap-3">
                <div 
                  className="text-gray-600 transition-colors duration-300"
                  style={{ color: hoveredCard === index ? card.color : colors.textDark }}
                >
                  {card.icon}
                </div>
                <span 
                  className="text-sm sm:text-base font-medium"
                  style={{ 
                    color: colors.textDark,
                    textShadow: '0 1px 2px rgba(0,0,0,0.05)'
                  }}
                >
                  {card.title}
                </span>
              </div>
              <div 
                className="absolute bottom-0 left-0 h-1 transition-all duration-300 group-hover:opacity-100"
                style={{ 
                  width: hoveredCard === index ? '100%' : '0%',
                  background: card.color,
                  opacity: 0,
                  transition: 'width 0.3s, opacity 0.2s'
                }}
              ></div>
            </div>
          ))}
        </div>
        
        {/* Description text with fade-in animation */}
        <div 
          className={`max-w-3xl mx-auto mb-12 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '900ms' }}
        >
          <p 
            className="text-lg md:text-xl leading-relaxed" 
            style={{ 
              color: colors.textDark,
              textShadow: '0 1px 3px rgba(0,0,0,0.05)'
            }}
          >
            Join us on a transformative journey that unites ancient wisdom 
            with modern understanding. Our approach integrates spiritual practices 
            with scientific insights to guide your path toward personal enlightenment 
            and universal consciousness.
          </p>
        </div>
        
        {/* Interactive call-to-action buttons with glass effect */}
        <div 
          className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '1100ms' }}
        >
          {/* Primary CTA button with advanced hover effects */}
          <a 
            href="#teachings" 
            className="group relative overflow-hidden px-8 py-4 rounded-full font-medium flex items-center justify-center transform transition-all duration-300 hover:shadow-xl backdrop-blur-sm"
            style={{ 
              backgroundColor: hoveredButton === 'primary' ? colors.primaryBlue : 'rgba(52, 152, 219, 0.1)',
              color: hoveredButton === 'primary' ? colors.white : colors.primaryBlue,
              borderWidth: '1px',
              borderColor: colors.primaryBlue,
              boxShadow: hoveredButton === 'primary' ? '0 10px 25px -5px rgba(52, 152, 219, 0.5)' : 'none'
            }}
            onMouseEnter={() => setHoveredButton('primary' as any)}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>Begin Your Journey</span>
              <ArrowRight size={18} className={`transition-transform duration-300 ${hoveredButton === 'primary' ? 'translate-x-1' : 'translate-x-0'}`} />
            </span>
            <div 
              className={`absolute inset-0 transition-transform duration-500 ${
                hoveredButton === 'primary' ? 'scale-x-100' : 'scale-x-0'
              }`}
              style={{ 
                background: colors.primaryBlue, 
                transformOrigin: 'left',
                zIndex: 1
              }}
            ></div>
          </a>
          
          {/* Secondary join button with glow effect */}
          <a 
            href="#join" 
            className="relative px-8 py-4 rounded-full font-medium flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
            style={{ 
              backgroundColor: hoveredButton === 'secondary' ? 'rgba(52, 152, 219, 0.1)' : 'transparent',
              color: colors.primaryBlue,
              borderWidth: '1px',
              borderColor: colors.primaryBlue,
              overflow: 'hidden'
            }}
            onMouseEnter={() => setHoveredButton('secondary' as any)}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <span className="z-10 relative">Join Our Community</span>
            <div 
              className={`absolute inset-0 opacity-0 transition-opacity duration-300 ${
                hoveredButton === 'secondary' ? 'opacity-15' : ''
              }`}
              style={{ 
                backgroundImage: `radial-gradient(circle at center, ${colors.primaryBlue}, transparent 70%)`,
                filter: 'blur(10px)'
              }}
            ></div>
          </a>
        </div>
        
        {/* Elegant scroll indicator with animation */}
        <div 
          className={`absolute left-1/2 -translate-x-1/2 bottom-8 transition-all duration-1000 ${
            isLoaded ? 'opacity-70 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '1300ms' }}
        >
          <div className="flex flex-col items-center gap-2">
            <p className="text-gray-500 text-xs tracking-wider mb-1">EXPLORE MORE</p>
            <div className="w-0.5 h-6 bg-gray-300 relative">
              <div className="absolute inset-x-0 top-0 h-1/2 bg-blue-500 animate-scroll-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Global CSS for animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.2; }
          50% { transform: translate(-50%, -50%) scale(1.05); opacity: 0.3; }
        }
        
        @keyframes rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        @keyframes glow {
          from { opacity: 0.1; filter: blur(2px); }
          to { opacity: 0.3; filter: blur(4px); }
        }
        
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-40px) translateX(0); }
          75% { transform: translateY(-60px) translateX(-10px); }
          100% { transform: translateY(-80px) translateX(0); opacity: 0; }
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes animate-gradient-text {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient-text {
          animation: animate-gradient-text 5s ease infinite;
        }
        
        @keyframes scroll-pulse {
          0%, 100% { opacity: 0; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(100%); }
        }
        
        .animate-scroll-pulse {
          animation: scroll-pulse 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;