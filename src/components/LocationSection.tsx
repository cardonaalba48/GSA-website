import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Navigation, Clock, Info, ExternalLink } from 'lucide-react';

const LocationSection = () => {
  // States for animations and interactive elements
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('map');
  const sectionRef = useRef(null);
  
  // Colors from the GSA logo for consistent branding
  const colors = {
    primaryBlue: "#3498db",    // Main triangle blue
    accentRed: "#e74c3c",      // Left triangle red
    accentYellow: "#f1c40f",   // Right triangle yellow
    textDark: "#2c3e50",       // Dark text
    white: "#ffffff"           // Circle and background
  };

  // Location information
  const locationInfo = {
    address: "4437 S River Blvd Unit 130, Independence, MO 64055, USA",
    googleMapsUrl: "https://www.google.com/maps/dir//4437+S+River+Blvd,+Independence,+MO+64055",
    hours: [
      { days: "Monday - Friday", time: "9:00 AM - 5:00 PM" },
      { days: "Saturday", time: "10:00 AM - 3:00 PM" },
      { days: "Sunday", time: "Closed" }
    ],
    directions: [
      "From I-70, take exit 15 for MO-291 S",
      "Continue onto MO-291 S for 3.2 miles",
      "Turn right onto S River Blvd",
      "Our location will be on the right, unit 130"
    ]
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
      id="location" 
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-gray-50"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-0 left-0 opacity-5"
          style={{
            width: '60vh',
            height: '60vh',
            clipPath: 'polygon(0 0, 100% 0, 0 100%)',
            backgroundColor: colors.accentYellow
          }}
        ></div>
        
        <div 
          className="absolute bottom-0 right-0 opacity-5 rounded-full"
          style={{
            width: '40vh',
            height: '40vh',
            backgroundColor: colors.primaryBlue,
            transform: 'translate(30%, 30%)'
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section title */}
        <div className="mb-16 text-center">
          <h2 
            className={`font-serif font-bold text-4xl md:text-5xl transition-transform duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
            style={{ 
              color: colors.textDark,
              transitionDelay: '200ms'
            }}
          >
            Find Us
          </h2>
          <div 
            className={`mx-auto mt-3 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ 
              width: '80px', 
              height: '4px', 
              background: `linear-gradient(to right, ${colors.accentRed}, ${colors.primaryBlue})`,
              transitionDelay: '400ms'
            }}
          ></div>
        </div>

        {/* Location Content */}
        <div className="grid md:grid-cols-5 gap-8">
          {/* Left sidebar with location info */}
          <div 
            className={`md:col-span-2 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg h-full">
              {/* Address with icon */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="p-3 rounded-full"
                    style={{ backgroundColor: `rgba(52, 152, 219, 0.15)`, color: colors.primaryBlue }}
                  >
                    <MapPin size={24} />
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: colors.textDark }}>Our Address</h3>
                </div>
                <p className="text-gray-700 ml-12">{locationInfo.address}</p>
                <a 
                  href={locationInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 ml-12 transition-all duration-300 hover:gap-3"
                  style={{ color: colors.primaryBlue }}
                >
                  <span>Get Directions</span>
                  <Navigation size={16} />
                </a>
              </div>
              
              {/* Hours with icon */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="p-3 rounded-full"
                    style={{ backgroundColor: `rgba(52, 152, 219, 0.15)`, color: colors.primaryBlue }}
                  >
                    <Clock size={24} />
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: colors.textDark }}>Hours</h3>
                </div>
                <div className="ml-12 space-y-2">
                  {locationInfo.hours.map((item, index) => (
                    <div key={index} className="flex justify-between text-gray-700">
                      <span className="font-medium">{item.days}</span>
                      <span>{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Tab navigation for mobile screens */}
              <div className="md:hidden mb-6">
                <div className="flex rounded-lg overflow-hidden border border-gray-200">
                  <button
                    className={`flex-1 py-3 text-sm font-medium ${
                      activeTab === 'map' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-50 text-gray-700'
                    }`}
                    onClick={() => setActiveTab('map')}
                  >
                    Map
                  </button>
                  <button
                    className={`flex-1 py-3 text-sm font-medium ${
                      activeTab === 'directions' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-50 text-gray-700'
                    }`}
                    onClick={() => setActiveTab('directions')}
                  >
                    Directions
                  </button>
                </div>
              </div>
              
              {/* Directions section */}
              <div className={activeTab === 'directions' ? 'block' : 'md:block hidden'}>
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="p-3 rounded-full"
                    style={{ backgroundColor: `rgba(52, 152, 219, 0.15)`, color: colors.primaryBlue }}
                  >
                    <Navigation size={24} />
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: colors.textDark }}>Directions</h3>
                </div>
                <ol className="ml-12 space-y-2 list-decimal list-inside text-gray-700">
                  {locationInfo.directions.map((direction, index) => (
                    <li key={index}>{direction}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
          
          {/* Right side with map */}
          <div 
            className={`md:col-span-3 ${activeTab === 'map' ? 'block' : 'md:block hidden'} transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
            }`}
            style={{ transitionDelay: '700ms' }}
          >
            <div className="bg-white p-4 rounded-2xl shadow-lg h-full overflow-hidden">
              {/* Google Maps iframe */}
              <div className="relative w-full h-0 pb-[75%] md:pb-[100%] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3096.2838290214074!2d-94.36993772334958!3d39.0680127714304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c11f12c8879351%3A0x47d90a6ce6b41e50!2s4437%20S%20River%20Blvd%2C%20Independence%2C%20MO%2064055%2C%20USA!5e0!3m2!1sen!2sus!4v1712271546867!5m2!1sen!2sus"
                  className="absolute inset-0 w-full h-full border-0 rounded-lg"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              
              {/* Caption below map */}
              <div className="flex items-center gap-2 mt-4 text-sm text-gray-600">
                <Info size={16} />
                <p>Click para abrir el mapa y obtener direcciones precisas a nuestra ubicación</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Global CSS for map pin animations */}
      <style jsx global>{`
        @keyframes mapPinBounce {
          0%, 100% { transform: translate(-50%, -100%); }
          50% { transform: translate(-50%, -110%); }
        }
        
        @keyframes mapPinPulse {
          0% { box-shadow: 0 0 0 0 rgba(231, 76, 60, 0.4); }
          70% { box-shadow: 0 0 0 20px rgba(231, 76, 60, 0); }
          100% { box-shadow: 0 0 0 0 rgba(231, 76, 60, 0); }
        }
      `}</style>
    </section>
  );
};

export default LocationSection;