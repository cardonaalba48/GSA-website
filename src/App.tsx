import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TeachingsSection from './components/TeachingsSection';
import PracticesSection from './components/PracticesSection';
import EventsSection from './components/EventsSection';
import ResourcesSection from './components/ResourcesSection';
import TestimonialsSection from './components/TestimonialsSection.tsx';
import BlogSection from './components/BlogSection';
import QuotesSection from './components/QuotesSection';
import ClassesSection from './components/ClassesSection';
import ContactSection from './components/ContactSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TeachingsSection />
        <PracticesSection />
        <EventsSection />
        <ResourcesSection />
        <TestimonialsSection />
        <BlogSection />
        <QuotesSection />
        <ClassesSection />
        <ContactSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;