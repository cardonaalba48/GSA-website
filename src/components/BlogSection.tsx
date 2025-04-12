import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const BlogSection = () => {
  // States for animations and interactive elements
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const sectionRef = useRef(null);
  
  // Colors from the GSA logo for consistent branding (matching other sections)
  const colors = {
    primaryBlue: "#3498db",    // Main triangle blue
    accentRed: "#e74c3c",      // Left triangle red
    accentYellow: "#f1c40f",   // Right triangle yellow
    textDark: "#2c3e50",       // Dark text
    white: "#ffffff"           // Circle and background
  };

const posts = [
  {
    title: "Understanding the Path of Self-Knowledge",
    excerpt: "Explore the fundamental principles of Gnostic teachings and their practical application in daily life for spiritual growth and transformation.",
    image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    date: "March 15, 2024",
    readTime: "5 min read"
  },
  {
    title: "The Science of Meditation",
    excerpt: "Learn about the scientific basis behind meditation and its profound effects on consciousness, brain activity, and overall well-being.",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    date: "March 10, 2024",
    readTime: "4 min read"
  },
  {
    title: "Sacred Symbolism in Ancient Traditions",
    excerpt: "Discover the hidden meanings behind ancient spiritual symbols and their continued relevance in our modern pursuit of self-realization.",
    image: "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    date: "March 5, 2024",
    readTime: "6 min read"
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
      id="blog" 
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-white"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large circle in the background */}
        <div 
          className="absolute -left-48 top-1/2 -translate-y-1/2 rounded-full opacity-5"
          style={{ 
            width: '60vh', 
            height: '60vh',
            backgroundColor: colors.primaryBlue,
            animation: 'pulse 20s infinite ease-in-out'
          }}
        ></div>
        
        {/* Small triangular shape */}
        <div 
          className="absolute -right-32 top-1/3 -translate-y-1/2 opacity-5"
          style={{
            width: '40vh',
            height: '40vh',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            backgroundColor: colors.accentYellow,
            transform: 'rotate(15deg)',
            animation: 'float 15s infinite ease-in-out alternate'
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header with animation */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 overflow-hidden">
          <div>
            <h2 
              className={`font-serif font-bold text-4xl md:text-5xl transition-transform duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ 
                color: colors.textDark,
                transitionDelay: '200ms'
              }}
            >
              Latest Articles
            </h2>
            <div 
              className={`mt-3 mb-4 transition-all duration-1000 md:hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                width: '80px', 
                height: '4px', 
                backgroundImage: `linear-gradient(to right, ${colors.primaryBlue}, ${colors.accentRed})`,
                transitionDelay: '400ms'
              }}
            ></div>
          </div>
          
          <a 
            href="#" 
            className={`group flex items-center gap-2 py-2 px-4 rounded-lg transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
            style={{ 
              color: colors.primaryBlue,
              transitionDelay: '400ms'
            }}
          >
            <span className="font-medium transition-all duration-300 group-hover:translate-x-1">
              View All Articles
            </span>
            <ArrowRight 
              size={18} 
              className="transition-transform duration-300 group-hover:translate-x-2"
            />
          </a>
        </div>

        {/* Blog posts grid with animations */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {posts.map((post, index) => (
            <article 
              key={index}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ 
                transitionDelay: `${600 + index * 200}ms`,
                boxShadow: activeCard === index 
                  ? '0 25px 50px -12px rgba(0, 0, 0, 0.15)' 
                  : '0 10px 30px -15px rgba(0, 0, 0, 0.1)'
              }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Image container with overlay effect */}
              <div className="relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                ></div>
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div 
                  className="absolute bottom-0 left-0 w-full h-1 z-20 transition-all duration-300"
                  style={{ 
                    background: `linear-gradient(90deg, ${colors.primaryBlue}, ${colors.accentRed})`,
                    transform: activeCard === index ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left'
                  }}
                ></div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                {/* Meta information */}
                <div 
                  className="flex items-center gap-4 text-sm text-gray-500 mb-4"
                >
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                {/* Title */}
                <h3 
                  className="text-xl font-bold mb-3 transition-all duration-300 group-hover:text-blue-600"
                  style={{ 
                    color: colors.textDark,
                    transform: activeCard === index ? 'translateX(4px)' : 'translateX(0)'
                  }}
                >
                  {post.title}
                </h3>
                
                {/* Excerpt */}
                <p 
                  className="text-gray-600 mb-6 transition-all duration-300"
                  style={{ 
                    transform: activeCard === index ? 'translateX(4px)' : 'translateX(0)'
                  }}
                >
                  {post.excerpt}
                </p>
                
                {/* Read more link */}
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 font-medium transition-all duration-300 relative overflow-hidden"
                  style={{ 
                    color: colors.primaryBlue,
                    paddingBottom: '2px'
                  }}
                >
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    Read More
                  </span>
                  <ArrowRight 
                    size={16} 
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  />
                  <span 
                    className="absolute bottom-0 left-0 w-full h-0.5 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"
                    style={{ backgroundColor: colors.primaryBlue }}
                  ></span>
                </a>
              </div>
            </article>
          ))}
        </div>
        
        {/* Newsletter signup - additional feature */}
        <div 
          className={`mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-lg transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}
          style={{ transitionDelay: '1200ms' }}
        >
          {/* Decorative elements */}
          <div 
            className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20"
            style={{ 
              background: `linear-gradient(135deg, ${colors.primaryBlue}, ${colors.accentRed})`,
              filter: 'blur(40px)',
              transform: 'translate(30%, -30%)'
            }}
          ></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:max-w-lg">
              <h3 className="text-2xl font-bold mb-4" style={{ color: colors.textDark }}>
                Stay Updated with Our Newsletter
              </h3>
              <p className="text-gray-600 mb-2">
                Subscribe to receive our latest articles, events, and spiritual insights directly to your inbox.
              </p>
            </div>
            
            <div className="w-full md:w-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-64"
                />
                <button
                  className="px-6 py-3 rounded-lg font-medium text-white transition-all duration-300 whitespace-nowrap"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.primaryBlue}, ${colors.accentRed})`,
                    boxShadow: `0 10px 15px -3px ${colors.primaryBlue}30`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = `0 15px 20px -3px ${colors.primaryBlue}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = `0 10px 15px -3px ${colors.primaryBlue}30`;
                  }}
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Global CSS for animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1) translateY(-50%); opacity: 0.05; }
          50% { transform: scale(1.05) translateY(-50%); opacity: 0.1; }
        }
        
        @keyframes float {
          0% { transform: rotate(15deg) translateY(0); }
          100% { transform: rotate(15deg) translateY(-30px); }
        }
      `}</style>
    </section>
  );
};

export default BlogSection;