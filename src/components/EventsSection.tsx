import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Clock, MapPin, Users, ChevronRight } from 'lucide-react';

const EventsSection = () => {
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

  // Regular events data
  const regularEvents = [
    {
      title: "Public Lectures",
      schedule: [
        { day: "Wednesday", time: "6:00 PM - 7:00 PM" },
        { day: "Saturday", time: "2:00 PM - 3:00 PM" }
      ],
      location: "4437 S River Blvd Unit 130, Independence, MO",
      description: "Join us for our regular public lectures where we explore fundamental Gnostic concepts and practices.",
      icon: <Users size={24} />
    }
  ];

  // Special events or workshops
  const specialEvents = [
    {
      title: "Meditation Workshop",
      date: "March 23, 2024",
      time: "10:00 AM - 2:00 PM",
      location: "Main Hall",
      description: "A comprehensive workshop on meditation techniques and their practical application in daily life.",
      features: [
        "Guided meditation sessions",
        "Breathing techniques",
        "Mindfulness practices",
        "Group discussions"
      ],
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Spiritual Retreat",
      date: "April 19-21, 2024",
      time: "Friday 6:00 PM - Sunday 4:00 PM",
      location: "Mountain Retreat Center",
      description: "A weekend of deep spiritual practice, self-reflection, and connection with nature.",
      features: [
        "Silent meditation periods",
        "Nature walks",
        "Group activities",
        "Personal reflection time"
      ],
      image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Esoteric Studies Intensive",
      date: "May 18, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Study Hall",
      description: "An in-depth exploration of esoteric knowledge and its practical applications.",
      features: [
        "Sacred geometry",
        "Symbolism studies",
        "Practical exercises",
        "Group discussions"
      ],
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
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
      id="events" 
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `
            radial-gradient(circle at 70% 30%, ${colors.accentRed}40, transparent 70%),
            radial-gradient(circle at 30% 70%, ${colors.primaryBlue}40, transparent 70%)
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
            Events
          </h2>
          <p 
            className={`max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            Join us for regular lectures and special events designed to deepen your understanding and practice of Gnostic teachings.
          </p>
        </div>

        {/* Regular events section */}
        <div className="mb-20">
          <h3 
            className={`text-2xl sm:text-3xl font-serif font-semibold text-center mb-12 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            Regular Activities
          </h3>

          <div className="grid gap-8">
            {regularEvents.map((event, index) => (
              <div 
                key={event.title}
                className={`bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-1000 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${800 + (index * 200)}ms` }}
              >
                <div className="p-8 bg-gradient-to-r from-blue-500 to-blue-600">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-white">
                      {event.icon}
                    </div>
                    <h4 className="text-2xl font-bold text-white ml-4">{event.title}</h4>
                  </div>
                  <p className="text-blue-100">{event.description}</p>
                </div>

                <div className="p-8">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-4">Schedule:</h5>
                      <ul className="space-y-3">
                        {event.schedule.map((time, i) => (
                          <li key={i} className="flex items-start">
                            <Clock className="flex-shrink-0 mt-1 text-blue-500" size={16} />
                            <div className="ml-2">
                              <span className="block text-gray-900 font-medium">{time.day}</span>
                              <span className="text-gray-600">{time.time}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-4">Location:</h5>
                      <div className="flex items-start">
                        <MapPin className="flex-shrink-0 mt-1 text-blue-500" size={16} />
                        <span className="ml-2 text-gray-600">{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Special events section */}
        <div>
          <h3 
            className={`text-2xl sm:text-3xl font-serif font-semibold text-center mb-12 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1000ms' }}
          >
            Upcoming Special Events
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {specialEvents.map((event, index) => (
              <div 
                key={event.title}
                className={`bg-white rounded-xl p-6 shadow-lg border border-gray-100 transition-all duration-1000 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${1200 + (index * 100)}ms` }}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                    <p className="text-white/90">{event.date}</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <Calendar className="text-blue-500" size={20} />
                    <span className="ml-2 text-gray-600">{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="text-blue-500" size={20} />
                    <span className="ml-2 text-gray-600">{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="text-blue-500" size={20} />
                    <span className="ml-2 text-gray-600">{event.location}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{event.description}</p>

                <div className="space-y-2">
                  {event.features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <ChevronRight className="text-blue-500" size={16} />
                      <span className="ml-2 text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
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
            Register for an Event
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;