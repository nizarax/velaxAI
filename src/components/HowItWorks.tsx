import React from 'react';
import { ClipboardCheck, LineChart, Zap, Users } from 'lucide-react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Step: React.FC<StepProps> = ({ number, title, description, icon }) => {
  return (
    <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
      <div className="flex-shrink-0 bg-primary text-white w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold z-10 shadow-[0_0_20px_rgba(0,166,81,0.3)]">
        {number}
      </div>
      <div className="flex-grow">
        <div className="card-glow group">
          <div className="flex items-center mb-3">
            <div className="mr-3 text-primary">
              {icon}
            </div>
            <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors">{title}</h3>
          </div>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
      {number < 4 && (
        <>
          <div className="process-line" />
          <div className="process-dot" />
        </>
      )}
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-black relative" id="solutions">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,166,81,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How VelaxAI Works
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Our simple 4-step process helps you transform your business with minimal effort and maximum results.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-12 md:space-y-24">
          <Step 
            number={1} 
            title="Connect Your Data"
            description="Integrate your business data with our platform securely. We support various data sources and APIs for seamless connection."
            icon={<ClipboardCheck className="h-6 w-6" />}
          />
          <Step 
            number={2} 
            title="AI Analysis"
            description="Our AI analyzes your data, identifies patterns, and develops insights based on your industry benchmarks and business goals."
            icon={<LineChart className="h-6 w-6" />}
          />
          <Step 
            number={3} 
            title="Strategic Recommendations"
            description="Receive personalized growth strategies and actionable recommendations to implement across your business operations."
            icon={<Zap className="h-6 w-6" />}
          />
          <Step 
            number={4} 
            title="Implement & Grow"
            description="Put the recommendations into action, track your progress, and watch your business grow with ongoing optimization."
            icon={<Users className="h-6 w-6" />}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;