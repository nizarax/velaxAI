import React, { useEffect, useRef } from 'react';
import { Link } from './Link';
import { ArrowRight, TrendingUp, Target, DollarSign } from 'lucide-react';

const HeroSection: React.FC = () => {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Counter animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.counter-value');
            counters.forEach((counter: Element) => {
              const target = parseInt(counter.textContent || '0', 10);
              let count = 0;
              const duration = 2000;
              const increment = target / (duration / 16);
              
              const updateCount = () => {
                if (count < target) {
                  count += increment;
                  counter.textContent = Math.min(Math.round(count), target) + '%';
                  requestAnimationFrame(updateCount);
                }
              };
              
              updateCount();
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-black relative overflow-hidden">
      <div className="hero-glow" />
      <div className="mouse-glow" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            AI Automations For
            <br />
            <span className="gradient-text">Service Based</span>
            <br />
            Businesses & Agencies
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl">
            Full stack AI developed systems to boost conversions, automate workflows, and scale your business.
          </p>

          <Link 
            to="https://cal.com/velax/30min" 
            className="cta-button flex items-center justify-center mb-16"
          >
            Get Started Now <ArrowRight className="ml-2 h-6 w-6" />
          </Link>

          <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
            <div className="stats-card group transform-gpu">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Monthly Growth</h3>
                  <div className="text-4xl font-bold text-primary counter-value">85</div>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="stats-graph">
                <div className="stats-line"></div>
              </div>
              <div className="mt-2 flex justify-between text-sm">
                <span className="text-gray-500">Previous: 45%</span>
                <span className="text-primary">+40%</span>
              </div>
            </div>

            <div className="stats-card group transform-gpu">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Conversion Rate</h3>
                  <div className="text-4xl font-bold text-primary counter-value">65</div>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Target className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="stats-graph">
                <div className="stats-line"></div>
              </div>
              <div className="mt-2 flex justify-between text-sm">
                <span className="text-gray-500">Previous: 30%</span>
                <span className="text-primary">+35%</span>
              </div>
            </div>

            <div className="stats-card group transform-gpu">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">ROI Boost</h3>
                  <div className="text-4xl font-bold text-primary counter-value">95</div>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="stats-graph">
                <div className="stats-line"></div>
              </div>
              <div className="mt-2 flex justify-between text-sm">
                <span className="text-gray-500">Previous: 50%</span>
                <span className="text-primary">+45%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;