import React from 'react';

const PracticesSection = () => {
  const practices = [
    {
      title: "Meditation",
      description: "Learn various meditation techniques for developing consciousness.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80"
    },
    {
      title: "Self-Observation",
      description: "Develop the skill of conscious attention and self-awareness.",
      image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80"
    },
    {
      title: "Energy Work",
      description: "Practice exercises for working with subtle energies.",
      image: "https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section id="practices" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif font-bold text-center text-[#333333] mb-12">Spiritual Practices</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {practices.map((practice, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <img 
                src={practice.image}
                alt={practice.title}
                className="w-full h-64 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{practice.title}</h3>
                  <p className="text-white/80">{practice.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticesSection;