import React, { useState, useEffect, useRef } from 'react';
import { Book, Video, FileText, Newspaper, ExternalLink } from 'lucide-react';

const ResourcesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  // Colors from the logo for consistent branding
  const colors = {
    primaryBlue: "#3498db",
    accentRed: "#e74c3c",
    accentYellow: "#f1c40f",
    textDark: "#2c3e50",
    white: "#ffffff"
  };

  // Resource categories
  const resources = [
    {
      title: "Books",
      icon: <Book size={24} />,
      description: "Essential readings on Gnostic teachings and spiritual development.",
      items: [
        {
          title: "The Perfect Matrimony",
          author: "Samael Aun Weor",
          description: "Fundamental text on esoteric Christianity and spiritual alchemy."
        },
        {
          title: "Revolutionary Psychology",
          author: "Samael Aun Weor",
          description: "Guide to psychological transformation and self-knowledge."
        },
        {
          title: "The Great Rebellion",
          author: "Samael Aun Weor",
          description: "Exploration of inner revolution and consciousness awakening."
        }
      ]
    },
    {
      title: "Video Lectures",
      icon: <Video size={24} />,
      description: "In-depth video presentations on various Gnostic topics.",
      items: [
        {
          title: "Introduction to Gnosis",
          duration: "60 min",
          description: "Overview of fundamental Gnostic concepts and practices."
        },
        {
          title: "Meditation Techniques",
          duration: "45 min",
          description: "Step-by-step guide to various meditation practices."
        },
        {
          title: "Self-Knowledge",
          duration: "55 min",
          description: "Understanding and working with psychological aspects."
        }
      ]
    },
    {
      title: "Study Guides",
      icon: <FileText size={24} />,
      description: "Structured materials for systematic learning and practice.",
      items: [
        {
          title: "Beginner's Guide to Meditation",
          format: "PDF",
          description: "Complete guide for starting your meditation practice."
        },
        {
          title: "Self-Observation Workbook",
          format: "PDF",
          description: "Practical exercises for developing self-awareness."
        },
        {
          title: "Dream Yoga Manual",
          format: "PDF",
          description: "Instructions for conscious astral experiences."
        }
      ]
    },
    {
      title: "Articles",
      icon: <Newspaper size={24} />,
      description: "Regular updates on spiritual topics and practical guidance.",
      items: [
        {
          title: "Understanding the Three Brains",
          readTime: "10 min",
          description: "Explanation of intellectual, emotional, and motor centers."
        },
        {
          title: "The Science of Meditation",
          readTime: "15 min",
          description: "Scientific perspective on meditation benefits."
        },
        {
          title: "Working with Dreams",
          readTime: "12 min",
          description: "Guide to dream interpretation and astral projection."
        }
      ]
    }
  ];

  // Intersection Observer
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
      id="resources" 
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `
            radial-gradient(circle at 30% 20%, ${colors.accentYellow}40, transparent 70%),
            radial-gradient(circle at 70% 80%, ${colors.primaryBlue}40, transparent 70%)
          `
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 
            className={`font-serif font-bold text-4xl sm:text-5xl md:text-6xl mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ 
              color: colors.textDark,
              transitionDelay: '200ms'
            }}
          >
            Resources
          </h2>
          <p 
            className={`max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            Access our comprehensive collection of materials to deepen your understanding and practice of Gnostic teachings.
          </p>
        </div>

        {/* Resources grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {resources.map((category, index) => (
            <div 
              key={category.title}
              className={`bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-1000 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${600 + (index * 200)}ms` }}
            >
              {/* Category header */}
              <div className="p-8 bg-gradient-to-r from-blue-500 to-blue-600">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-white">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white ml-4">{category.title}</h3>
                </div>
                <p className="text-blue-100">{category.description}</p>
              </div>

              {/* Resource items */}
              <div className="p-6">
                <div className="space-y-6">
                  {category.items.map((item, i) => (
                    <div 
                      key={i}
                      className="group p-4 rounded-xl transition-all duration-300 hover:bg-gray-50"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                            {item.title}
                          </h4>
                          <p className="text-sm text-gray-500 mt-1">
                            {'author' in item && item.author ? `By ${item.author}` : ''}
                            {'duration' in item && item.duration ? `Duration: ${item.duration}` : ''}
                            {'format' in item && item.format ? `Format: ${item.format}` : ''}
                            {'readTime' in item && item.readTime ? `Read time: ${item.readTime}` : ''}
                          </p>
                          <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                        </div>
                        <div className="text-gray-400 group-hover:text-blue-500 transition-colors duration-300">
                          <ExternalLink size={20} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div 
          className={`mt-16 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '1400ms' }}
        >
          <a 
            href="#contact"
            className="inline-block px-8 py-4 rounded-xl font-medium text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            style={{ 
              background: `linear-gradient(135deg, ${colors.primaryBlue}, ${colors.accentRed})`,
              boxShadow: `0 10px 20px -5px ${colors.primaryBlue}30`
            }}
          >
            Access All Resources
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;