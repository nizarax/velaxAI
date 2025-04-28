import React from 'react';
import { Link } from './Link';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,166,81,0.15),transparent_50%)]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Accelerate Your Business Growth?
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that are already using VelaxAI to achieve unprecedented growth and success.
          </p>
          <Link 
            to="https://cal.com/velax/30min" 
            className="glow-button inline-flex items-center justify-center"
          >
            Schedule a Demo <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;