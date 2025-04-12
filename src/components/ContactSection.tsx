import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Navigation } from 'lucide-react';

const ContactSection = () => {
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

  // Contact information
  const contactInfo = {
    address: "4437 S River Blvd Unit 130",
    city: "Independence",
    state: "MO",
    phone: "+1 816-500-0000",
    email: "info@gnosticspiritual.org",
    social: {
      facebook: "https://www.facebook.com/GnosticSpiritualAlliance/",
      instagram: "https://www.instagram.com/gnosisspiritual/",
      youtube: "https://www.youtube.com/channel/UCGjCxjjNZ0joIPF7wSh6Icw"
    }
  };

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
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
      id="contact" 
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
            Contact Us
          </h2>
          <p 
            className={`max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            Have questions? We're here to help. Reach out to us through any of the following channels.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact information card */}
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="p-8 bg-gradient-to-r from-blue-500 to-blue-600">
                <h3 className="text-2xl font-bold text-white mb-2">Get in Touch</h3>
                <p className="text-blue-100">
                  Visit our center or contact us through any of these methods.
                </p>
              </div>

              <div className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="flex-shrink-0 mt-1 text-blue-500" size={20} />
                    <div className="ml-4">
                      <h4 className="font-medium text-gray-900">Our Location</h4>
                      <p className="text-gray-600 mt-1">{contactInfo.address}</p>
                      <p className="text-gray-600">{contactInfo.city}, {contactInfo.state}</p>
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

                  <div className="flex items-start">
                    <Phone className="flex-shrink-0 mt-1 text-blue-500" size={20} />
                    <div className="ml-4">
                      <h4 className="font-medium text-gray-900">Call Us</h4>
                      <p className="text-gray-600 mt-1">{contactInfo.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="flex-shrink-0 mt-1 text-blue-500" size={20} />
                    <div className="ml-4">
                      <h4 className="font-medium text-gray-900">Email Us</h4>
                      <p className="text-gray-600 mt-1">{contactInfo.email}</p>
                    </div>
                  </div>
                </div>

                {/* Social media links */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a 
                      href={contactInfo.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-blue-50"
                    >
                      <Facebook className="text-blue-500" size={20} />
                    </a>
                    <a 
                      href={contactInfo.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-blue-50"
                    >
                      <Instagram className="text-blue-500" size={20} />
                    </a>
                    <a 
                      href={contactInfo.social.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-blue-50"
                    >
                      <Youtube className="text-blue-500" size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg font-medium text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.primaryBlue}, ${colors.accentRed})`,
                    boxShadow: `0 10px 20px -5px ${colors.primaryBlue}30`
                  }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Donation section */}
        <div 
          className={`mt-20 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '1000ms' }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Support Our Mission</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Help us deliver the message to Humanity. Gnostic Spiritual Alliance is a non-profit 501(c) organization. 
            All donations are tax deductible.
          </p>
          <a 
            href="#donate"
            className="inline-block px-8 py-4 rounded-xl font-medium text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            style={{ 
              background: `linear-gradient(135deg, ${colors.primaryBlue}, ${colors.accentRed})`,
              boxShadow: `0 10px 20px -5px ${colors.primaryBlue}30`
            }}
          >
            Make a Donation
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;