import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-black relative" id="about">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,166,81,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">About</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-400 mb-6">
            VelaxAI was founded by Nasir Shaik, a young entrepreneur passionate about blending automation and human-like AI to scale businesses. We're on a mission to help modern companies unlock new levels of productivity and profit through custom AI solutions.
          </p>
          <div className="flex items-center justify-center gap-2 text-primary">
            <span>✍️</span>
            <p className="font-medium">Built with care by Nasir Shaik</p>
          </div>
          <p className="text-gray-400 mt-2">Founder & CEO of VelaxAI</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;