import React, { useState, useEffect, useRef } from 'react';
import { Info, ChevronRight, Lightbulb, Star, Compass, PenTool } from 'lucide-react';

const AboutSection = () => {
  // States for animations and interactive elements
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'philosophy'>('mission');
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  
  // Colors from the logo for consistent branding
  const colors = {
    primaryBlue: "#3498db",    // Main triangle blue
    accentRed: "#e74c3c",      // Left triangle red
    accentYellow: "#f1c40f",   // Right triangle yellow
    textDark: "#2c3e50",       // Dark text
    white: "#ffffff"           // Circle and background
  };

  // Tabs content
  const tabsContent = {
    mission: {
      title: "Our Mission",
      description: "To provide practical tools and ancient wisdom for self-knowledge and inner transformation. We guide students in discovering answers to fundamental questions about existence through direct experience, helping them overcome fears and find their true purpose.",
      icon: <Compass size={24} />
    },
    vision: {
      title: "Our Vision",
      description: "To make this Ancient Knowledge accessible to all, recognizing that individual transformation is the key to societal change. As Samael Aun Weor states: 'The populace is the sum of all individuals. It is impossible to change people and populace if the individual does not change himself.'",
      icon: <Star size={24} />
    },
    philosophy: {
      title: "Our Philosophy",
      description: "Gnosis is the Initiation Knowledge that leads to our Inner God, our Real Being here and now, guiding us to the Self-Realization of the Being - the full development of all Human and Spiritual possibilities and the fusion of the Human and Divine within each person.",
      icon: <Lightbulb size={24} />
    }
  };

  // Knowledge areas with expanded data
  const knowledgeAreas = [
    { 
      label: "Philosophy", 
      icon: <Lightbulb size={20} />,
      color: colors.primaryBlue,
      description: "Exploring fundamental questions: Who are we? Where do we come from? Where are we going? What are we living for?"
    },
    { 
      label: "Science", 
      icon: <Compass size={20} />,
      color: colors.accentRed,
      description: "A practical and analytical approach to understanding consciousness and the laws of nature through direct experience."
    },
    { 
      label: "Art", 
      icon: <PenTool size={20} />,
      color: colors.accentYellow,
      description: "Expression of spiritual principles through sacred art, found in ancient mystery schools worldwide."
    },
    { 
      label: "Mysticism", 
      icon: <Star size={20} />,
      color: colors.primaryBlue,
      description: "Direct experiential knowledge of spiritual truths, beyond belief or theory, including the study of world religions."
    }
  ];

  // Core features
  const coreFeatures = [
    {
      title: "Self-Knowledge",
      description: "Learn to know yourself through practical techniques, meditation, and conscious work on your psychology."
    },
    {
      title: "Direct Experience",
      description: "Discover truth through personal experience rather than beliefs or theories, seeing and feeling with your internal senses."
    },
    {
      title: "Practical Methods",
      description: "Access tools for relaxation, meditation, problem dissolution, and the elimination of psychological defects."
    }
  ];

  // Handle mouse move for 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePosition({ x, y });
    }
  };

  const resetMousePosition = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  // Calculate 3D transform based on mouse position
  const calculate3DTransform = () => {
    const rotateX = mousePosition.y * 10; // -5 to 5 degrees
    const rotateY = -mousePosition.x * 10; // -5 to 5 degrees
    return `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

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
      id="about" 
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden"
    >
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `
            radial-gradient(circle at 20% 30%, ${colors.accentRed}40, transparent 70%),
            radial-gradient(circle at 80% 70%, ${colors.primaryBlue}40, transparent 70%),
            linear-gradient(45deg, transparent 48%, ${colors.accentYellow}20 50%, transparent 52%)
          `
        }}></div>
      </div>

      {/* Enhanced decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Sacred geometry symbol - enhanced */}
        <div 
          className="absolute left-0 bottom-0 opacity-10"
          style={{ 
            width: '60vh', 
            height: '60vh',
          }}
        >
          <div className="absolute w-full h-full rounded-full border-4 border-blue-500 animate-pulse-slow"></div>
          <div 
            className="absolute w-2/3 h-2/3 rounded-full border-4 border-red-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{ animation: 'pulse 15s infinite ease-in-out 1s' }}
          ></div>
        </div>
        
        {/* Enhanced triangle shape */}
        <div 
          className="absolute top-0 right-0 opacity-10"
          style={{
            width: '40vh',
            height: '40vh',
            clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
            backgroundColor: colors.accentYellow,
            transform: 'translate(40%, -15%) rotate(15deg)',
            animation: 'floatRotate 30s infinite linear'
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Enhanced section title */}
        <div className="overflow-hidden mb-12 sm:mb-20 text-center">
          <h2 
            className={`font-serif font-bold text-4xl sm:text-5xl md:text-6xl transition-transform duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
            style={{ 
              color: colors.textDark,
              transitionDelay: '200ms',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            About Gnosis
          </h2>
          <div 
            className={`mx-auto mt-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ 
              width: '120px', 
              height: '6px', 
              backgroundImage: `linear-gradient(to right, ${colors.accentRed}, ${colors.primaryBlue})`,
              transitionDelay: '400ms',
              borderRadius: '3px'
            }}
          ></div>
          
          {/* Enhanced subtitle */}
          <p 
            className={`max-w-3xl mx-auto mt-6 sm:mt-8 text-lg sm:text-xl text-gray-700 transition-all duration-1000 px-2 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            Gnosis was taught in the Schools of Mysteries from Egypt, Greece, India, China, Mexico, Peru, Troy, Rome, Carthage, Chaldea, and now this Ancient Knowledge is being taught publicly once again.
          </p>
        </div>

        {/* Main content grid - redesigned for better UX */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left content column */}
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <div className="space-y-6">
              {/* Key concept heading */}
              <h3 className="text-xl sm:text-2xl font-serif font-semibold text-blue-600">
                What is Gnosis?
              </h3>
              
              {/* Main concept description */}
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Gnosis is found within the depths of the conscience; it is our innate heritage since the dawn of Creation. 
                It represents direct experience and seeing, touching, and feeling with our conscience and internal senses, 
                beyond our body, mind, and affects. Unfortunately, humanity has forgotten how to tap into this Knowledge, 
                but through practical work and dedication, we can rediscover our true nature.
              </p>

              {/* Additional key questions */}
              <div className="mt-8 space-y-4">
                <h4 className="text-lg font-medium text-gray-800">Essential Questions We Explore:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="flex-shrink-0 mt-1 text-blue-500" size={18} />
                    <span className="ml-2">Can heaven and hell be proven by direct experience?</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="flex-shrink-0 mt-1 text-blue-500" size={18} />
                    <span className="ml-2">Why do we fear hunger, loneliness, sickness, poverty?</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="flex-shrink-0 mt-1 text-blue-500" size={18} />
                    <span className="ml-2">What happens after death? Is Re-Incarnation possible?</span>
                  </li>
                </ul>
              </div>
              
              {/* Feature list with icons */}
              <div className="space-y-4 mt-8">
                <h4 className="text-lg font-medium text-gray-800">What You Will Learn:</h4>
                {coreFeatures.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center bg-white p-4 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-blue-100"
                  >
                    <div 
                      className="p-2 rounded-full mr-4 flex-shrink-0"
                      style={{ backgroundColor: `${colors.primaryBlue}15`, color: colors.primaryBlue }}
                    >
                      <ChevronRight size={18} />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900">{feature.title}</h5>
                      <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right content with tabs - completely redesigned */}
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            {/* Tabs navigation - cleaner design */}
            <div 
              className={`flex rounded-lg bg-gray-50 p-1 mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '900ms' }}
            >
              {Object.entries(tabsContent).map(([key, tab]) => (
                <button
                  key={key}
                  className={`flex-1 flex items-center justify-center py-3 px-4 text-sm font-medium rounded-md transition-all duration-300 ${
                    activeTab === key 
                      ? 'bg-white shadow-md text-blue-600' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                  onClick={() => setActiveTab(key as 'mission' | 'vision' | 'philosophy')}
                >
                  <span className="mr-2">{tab.icon}</span>
                  <span>{tab.title}</span>
                </button>
              ))}
            </div>
            
            {/* Tab content with clean design */}
            <div 
              className={`bg-white rounded-xl p-6 shadow-lg border border-gray-100 mb-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '1000ms' }}
            >
              <h3 className="text-xl font-medium mb-4" style={{ color: colors.textDark }}>
                {tabsContent[activeTab].title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {tabsContent[activeTab].description}
              </p>
            </div>
            
            {/* Course information section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-serif font-semibold text-blue-600 mb-6">
                About Our Courses
              </h3>
              
              <div className="space-y-6">
                <p className="text-gray-700">
                  Our courses are designed to provide you with the tools and techniques to start knowing yourself, 
                  offering a new perspective in understanding and coping with life's challenges:
                </p>

                {/* Course benefits */}
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="p-1 rounded-full mr-3 mt-1" style={{ backgroundColor: `${colors.primaryBlue}15` }}>
                      <ChevronRight size={16} className="text-blue-500" />
                    </div>
                    <p className="text-gray-600">Learn how to relax your body and mind through meditation</p>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 rounded-full mr-3 mt-1" style={{ backgroundColor: `${colors.primaryBlue}15` }}>
                      <ChevronRight size={16} className="text-blue-500" />
                    </div>
                    <p className="text-gray-600">Discover techniques for problem dissolution and finding inner balance</p>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 rounded-full mr-3 mt-1" style={{ backgroundColor: `${colors.primaryBlue}15` }}>
                      <ChevronRight size={16} className="text-blue-500" />
                    </div>
                    <p className="text-gray-600">Learn about astral projection, chakras, and esoteric alchemy</p>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 rounded-full mr-3 mt-1" style={{ backgroundColor: `${colors.primaryBlue}15` }}>
                      <ChevronRight size={16} className="text-blue-500" />
                    </div>
                    <p className="text-gray-600">Develop methods for eliminating bad habits and psychological defects</p>
                  </li>
                </ul>

                {/* Course schedule */}
                <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                  <h4 className="text-lg font-medium text-gray-800 mb-4">Public Lectures</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-32 font-medium text-gray-700">Wednesday</div>
                      <div className="text-gray-600">6:00 – 7:00 PM</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-32 font-medium text-gray-700">Saturday</div>
                      <div className="text-gray-600">2:00 – 3:00 PM</div>
                    </div>
                  </div>
                </div>

                {/* Call to action */}
                <div className="mt-8">
                  <a 
                    href="#contact" 
                    className="inline-block px-8 py-4 rounded-xl font-medium text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                    style={{ 
                      background: `linear-gradient(135deg, ${colors.primaryBlue}, ${colors.accentRed})`,
                      boxShadow: `0 10px 20px -5px ${colors.primaryBlue}30`
                    }}
                  >
                    Start Your Journey
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Knowledge Areas Section */}
        <div className="mt-20">
          <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-center mb-12">
            The Four Pillars of Knowledge
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {knowledgeAreas.map((area, index) => (
              <div 
                key={area.label}
                className={`bg-white rounded-xl p-6 shadow-lg border border-gray-100 transition-all duration-1000 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${900 + (index * 100)}ms` }}
              >
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${area.color}15`, color: area.color }}
                >
                  {area.icon}
                </div>
                <h4 className="text-lg font-medium mb-2" style={{ color: colors.textDark }}>
                  {area.label}
                </h4>
                <p className="text-gray-600 text-sm">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
          50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.2; }
        }
        
        @keyframes floatRotate {
          0% { transform: translate(40%, -15%) rotate(15deg); }
          50% { transform: translate(40%, -20%) rotate(30deg); }
          100% { transform: translate(40%, -15%) rotate(15deg); }
        }
        
        .animate-pulse-slow {
          animation: pulse 10s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;