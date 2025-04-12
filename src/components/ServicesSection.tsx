import React, { useState, useEffect, useRef } from 'react';
import { Book, Users, Globe, Clock, Calendar, Star, ChevronRight } from 'lucide-react';

const ServicesSection = () => {
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

  // Course types data
  type Schedule = {
    days: string;
    times: string[];
  } | {
    format: string;
    availability: string;
  };

  type CourseType = {
    title: string;
    icon: React.ReactNode;
    description: string;
    features: string[];
    schedule: Schedule;
  };

  const courseTypes: CourseType[] = [
    {
      title: "In-Person Courses",
      icon: <Users size={24} />,
      description: "Join our local community for direct interaction and hands-on learning experience.",
      features: [
        "Personal guidance from experienced instructors",
        "Interactive group discussions and practices",
        "Access to physical study materials and resources",
        "Community support and networking opportunities"
      ],
      schedule: {
        days: "Wednesday and Saturday",
        times: ["6:00 PM - 7:00 PM", "2:00 PM - 3:00 PM"]
      }
    },
    {
      title: "Virtual/Online Courses",
      icon: <Globe size={24} />,
      description: "Learn at your own pace from anywhere in the world with our comprehensive online program.",
      features: [
        "Flexible learning schedule",
        "Access to recorded lectures and materials",
        "Online community support",
        "Interactive virtual workshops"
      ],
      schedule: {
        format: "Self-paced with live sessions",
        availability: "24/7 access to materials"
      }
    }
  ];

  // Common course topics
  const commonTopics = [
    {
      title: "Self-Discovery",
      description: "Learn techniques for understanding your psychology and inner nature.",
      icon: <Star size={20} />
    },
    {
      title: "Meditation Practices",
      description: "Master various meditation techniques for consciousness development.",
      icon: <Clock size={20} />
    },
    {
      title: "Esoteric Studies",
      description: "Explore ancient wisdom and practical spiritual teachings.",
      icon: <Book size={20} />
    },
    {
      title: "Regular Practice",
      description: "Establish a consistent practice routine with guidance and support.",
      icon: <Calendar size={20} />
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
      id="services" 
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `
            radial-gradient(circle at 80% 20%, ${colors.primaryBlue}40, transparent 70%),
            radial-gradient(circle at 20% 80%, ${colors.accentRed}40, transparent 70%)
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
            Our Courses
          </h2>
          <p 
            className={`max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            We acknowledge that life's challenges are constant, and no one is exempt. Our courses provide the tools 
            and techniques for self-knowledge and practical solutions to life's challenges.
          </p>
        </div>

        {/* Course types grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {courseTypes.map((course, index) => (
            <div 
              key={course.title}
              className={`bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-1000 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${600 + (index * 200)}ms` }}
            >
              {/* Course header */}
              <div className="p-8 bg-gradient-to-r from-blue-500 to-blue-600">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-white">
                    {course.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white ml-4">{course.title}</h3>
                </div>
                <p className="text-blue-100">{course.description}</p>
              </div>

              {/* Course details */}
              <div className="p-8">
                <div className="mb-8">
                  <h4 className="text-lg font-medium text-gray-900 mb-4">Key Features:</h4>
                  <ul className="space-y-3">
                    {course.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <ChevronRight className="flex-shrink-0 mt-1 text-blue-500" size={16} />
                        <span className="ml-2 text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Schedule information */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-medium text-gray-900 mb-4">Schedule:</h4>
                  {'days' in course.schedule ? (
                    <>
                      <p className="text-gray-600 mb-2">
                        <span className="font-medium">Days:</span> {course.schedule.days}
                      </p>
                      <div className="space-y-1">
                        {course.schedule.times.map((time, i) => (
                          <p key={i} className="text-gray-600">
                            <span className="font-medium">Time:</span> {time}
                          </p>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="text-gray-600 mb-2">
                        <span className="font-medium">Format:</span> {course.schedule.format}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Availability:</span> {course.schedule.availability}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Common topics section */}
        <div className="mt-20">
          <h3 
            className={`text-2xl sm:text-3xl font-serif font-semibold text-center mb-12 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1000ms' }}
          >
            What You Will Learn
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {commonTopics.map((topic, index) => (
              <div 
                key={topic.title}
                className={`bg-white rounded-xl p-6 shadow-lg border border-gray-100 transition-all duration-1000 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${1200 + (index * 100)}ms` }}
              >
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${colors.primaryBlue}15`, color: colors.primaryBlue }}
                >
                  {topic.icon}
                </div>
                <h4 className="text-lg font-medium mb-2" style={{ color: colors.textDark }}>
                  {topic.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div 
          className={`mt-16 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '1600ms' }}
        >
          <a 
            href="#contact"
            className="inline-block px-8 py-4 rounded-xl font-medium text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            style={{ 
              background: `linear-gradient(135deg, ${colors.primaryBlue}, ${colors.accentRed})`,
              boxShadow: `0 10px 20px -5px ${colors.primaryBlue}30`
            }}
          >
            Start Your Journey Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 