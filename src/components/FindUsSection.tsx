import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Navigation, Clock, Car } from 'lucide-react';

const FindUsSection = () => {
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

  // Location information
  const locationInfo = {
    address: "4437 S River Blvd Unit 130",
    city: "Independence",
    state: "MO",
    zip: "64055",
    hours: {
      monday: "6:00 PM - 8:00 PM",
      wednesday: "6:00 PM - 8:00 PM",
      friday: "6:00 PM - 8:00 PM",
      saturday: "10:00 AM - 12:00 PM"
    }
  };

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
      id="find-us" 
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `
            radial-gradient(circle at 20% 20%, ${colors.accentRed}40, transparent 70%),
            radial-gradient(circle at 80% 80%, ${colors.primaryBlue}40, transparent 70%)
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
            Find Us
          </h2>
          <p 
            className={`max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            Visit our center in Independence, MO. We're here to welcome you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Interactive Map */}
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="p-8 bg-gradient-to-r from-blue-500 to-blue-600">
                <h3 className="text-2xl font-bold text-white mb-2">Our Location</h3>
                <p className="text-blue-100">
                  Find us at our center in Independence, MO
                </p>
              </div>

              <div className="p-8">
                <div className="rounded-xl overflow-hidden shadow-lg relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.123456789012!2d-94.4155!3d39.0912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0f1234567890%3A0xabcdef1234567890!2s4437%20S%20River%20Blvd%20Unit%20130%2C%20Independence%2C%20MO%2064055!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl"
                  ></iframe>
                  <a 
                    href="https://www.google.com/maps/dir/?api=1&destination=4437+S+River+Blvd+Unit+130,+Independence,+MO+64055"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-blue-600 px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 hover:shadow-lg"
                  >
                    <Navigation size={16} />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Location Information */}
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="p-8 bg-gradient-to-r from-blue-500 to-blue-600">
                <h3 className="text-2xl font-bold text-white mb-2">Visit Us</h3>
                <p className="text-blue-100">
                  We look forward to welcoming you to our center
                </p>
              </div>

              <div className="p-8">
                <div className="space-y-8">
                  {/* Address */}
                  <div className="flex items-start">
                    <MapPin className="flex-shrink-0 mt-1 text-blue-500" size={20} />
                    <div className="ml-4">
                      <h4 className="font-medium text-gray-900">Address</h4>
                      <p className="text-gray-600 mt-1">{locationInfo.address}</p>
                      <p className="text-gray-600">{locationInfo.city}, {locationInfo.state} {locationInfo.zip}</p>
                      <div className="mt-2">
                        <a 
                          href="https://www.google.com/maps/dir/?api=1&destination=4437+S+River+Blvd+Unit+130,+Independence,+MO+64055"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1"
                        >
                          <Navigation size={14} />
                          Get directions to our center
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start">
                    <Clock className="flex-shrink-0 mt-1 text-blue-500" size={20} />
                    <div className="ml-4">
                      <h4 className="font-medium text-gray-900">Hours</h4>
                      <div className="mt-2 space-y-1">
                        <p className="text-gray-600">Monday: {locationInfo.hours.monday}</p>
                        <p className="text-gray-600">Wednesday: {locationInfo.hours.wednesday}</p>
                        <p className="text-gray-600">Friday: {locationInfo.hours.friday}</p>
                        <p className="text-gray-600">Saturday: {locationInfo.hours.saturday}</p>
                      </div>
                    </div>
                  </div>

                  {/* Parking */}
                  <div className="flex items-start">
                    <Car className="flex-shrink-0 mt-1 text-blue-500" size={20} />
                    <div className="ml-4">
                      <h4 className="font-medium text-gray-900">Parking</h4>
                      <p className="text-gray-600 mt-1">
                        Free parking is available in front of the building and in the surrounding area.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUsSection; 