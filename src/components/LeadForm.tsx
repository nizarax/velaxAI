import React, { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';

const LeadForm: React.FC = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
        }
      },
      { threshold: 0.1 }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => observer.disconnect();
  }, []);

  if (isSubmitted) {
    return (
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,166,81,0.15),transparent_50%)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center py-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Thank You!</h2>
            <p className="text-lg text-gray-300 mb-8">
              We've received your request and will get back to you shortly.
            </p>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20">
              <Check className="w-8 h-8 text-primary" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,166,81,0.15),transparent_50%)]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={formRef} className="max-w-5xl mx-auto border border-[#1A2A1F] rounded-xl shadow-lg opacity-0">
          <div className="grid md:grid-cols-2 gap-12 items-center p-8 md:p-12">
            <form 
              action="https://formspree.io/f/mldbdzwa" 
              method="POST"
              onSubmit={() => setIsSubmitted(true)}
              className="space-y-8"
            >
              <div>
                <label htmlFor="fullName" className="block text-white mb-2">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  className="w-full bg-black/50 border border-primary/30 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 focus:shadow-[0_0_15px_rgba(0,166,81,0.3)]"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-black/50 border border-primary/30 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 focus:shadow-[0_0_15px_rgba(0,166,81,0.3)]"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-white mb-2">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className="w-full bg-black/50 border border-primary/30 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 focus:shadow-[0_0_15px_rgba(0,166,81,0.3)]"
                  placeholder="Acme Inc"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-white mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full bg-black/50 border border-primary/30 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 focus:shadow-[0_0_15px_rgba(0,166,81,0.3)]"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-4 px-8 font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,166,81,0.5)] transform hover:-translate-y-1"
              >
                Book a Free Demo →
              </button>
            </form>

            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-white text-lg">100% Free AI Automation Consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-white text-lg">See Custom AI Solutions in Action</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-white text-lg">Save Time, Scale Faster with AI</span>
                </div>
              </div>

              <div className="border border-[#1A2A1F] rounded-lg p-6">
                <p className="text-gray-300 italic mb-4">
                  "VelaxAI built us custom solutions that saved us months of work. The results were insane!"
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Alex Morgan"
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-white">Alex Morgan</h4>
                    <p className="text-sm text-gray-400">CEO, NovaTech</p>
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

export default LeadForm;