import React, { useEffect, useRef } from 'react';
import { Phone, Grid, MessageSquare, Calendar, Settings, Users } from 'lucide-react';

interface StatProps {
  value: string;
  label: string;
}

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stats: StatProps[];
  keyPoints: string[];
}

const Stat: React.FC<StatProps> = ({ value, label }) => (
  <div className="text-center">
    <div className="text-2xl font-bold text-primary">{value}</div>
    <div className="text-xs text-gray-400 mt-1">{label}</div>
  </div>
);

const Feature: React.FC<FeatureProps> = ({ icon, title, description, stats, keyPoints }) => {
  const featureRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
        }
      },
      { threshold: 0.1 }
    );

    if (featureRef.current) {
      observer.observe(featureRef.current);
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
      if (cardRef.current) {
        cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
      }
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      observer.disconnect();
      if (card) {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div ref={featureRef} className="feature-card group opacity-0">
      <div 
        ref={cardRef}
        className="p-6 transition-transform duration-200 ease-out"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,166,81,0.3)]">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors">{title}</h3>
        </div>
        
        <div className="flex justify-between mb-6 border-b border-gray-800 pb-4">
          {stats.map((stat, index) => (
            <Stat key={index} {...stat} />
          ))}
        </div>

        <p className="text-gray-400 mb-4">{description}</p>
        
        <ul className="space-y-2">
          {keyPoints.map((point, index) => (
            <li key={index} className="flex items-center text-sm text-gray-300">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const FeatureSection: React.FC = () => {
  const features = [
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "AI Voice Agent",
      description: "Fully automated AI voice agent that can handle inbound and outbound calls",
      stats: [
        { value: "1000x", label: "Call Capacity" },
        { value: "45%", label: "Cost Reduction" },
        { value: "24/7", label: "Availability" }
      ],
      keyPoints: [
        "Natural language processing for human-like interactions",
        "Multi-language support with real-time translation",
        "Advanced call routing and prioritization"
      ]
    },
    {
      icon: <Grid className="h-6 w-6 text-primary" />,
      title: "Custom AI Dashboard CRM",
      description: "Manage, Build, and view all AI agents conversations and real time analytics",
      stats: [
        { value: "99%", label: "Uptime" },
        { value: "5x", label: "Faster Analytics" },
        { value: "Real-Time", label: "Insights" }
      ],
      keyPoints: [
        "Real-time performance monitoring and analytics",
        "Customizable dashboards and reporting",
        "Automated data aggregation and insights"
      ]
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      title: "AI Chatbot",
      description: "Custom built AI chatbot that can handle customer queries and qualify leads",
      stats: [
        { value: "500k+", label: "Chats/Day" },
        { value: "92%", label: "Resolution" },
        { value: "<1s", label: "Response" }
      ],
      keyPoints: [
        "Context-aware conversations with memory",
        "Seamless handoff to human agents",
        "Custom workflow integration"
      ]
    },
    {
      icon: <Calendar className="h-6 w-6 text-primary" />,
      title: "AI Appointment Booking",
      description: "AI integrated agent that automatically books qualified leads into open slots within your calendar",
      stats: [
        { value: "98%", label: "Accuracy" },
        { value: "60%", label: "Time Saved" },
        { value: "0", label: "Conflicts" }
      ],
      keyPoints: [
        "Smart availability detection and optimization",
        "Multi-calendar integration and sync",
        "Automated reminders and follow-ups"
      ]
    },
    {
      icon: <Settings className="h-6 w-6 text-primary" />,
      title: "Custom AI Solutions",
      description: "Custom made solutions with full tech stack and developers",
      stats: [
        { value: "100%", label: "Custom" },
        { value: "75%", label: "Faster Dev" },
        { value: "99%", label: "Uptime" }
      ],
      keyPoints: [
        "Tailored AI models for your business",
        "Full stack integration capabilities",
        "Continuous learning and optimization"
      ]
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Automated Lead Generation",
      description: "AI automated lead generation systems for personalized cold email campaigns and multi channel DM outreach",
      stats: [
        { value: "10x", label: "Lead Gen" },
        { value: "65%", label: "Conversion" },
        { value: "90%", label: "Targeting" }
      ],
      keyPoints: [
        "Multi-channel campaign orchestration",
        "Predictive lead scoring and qualification",
        "Automated personalization at scale"
      ]
    }
  ];

  return (
    <section className="py-20 bg-black relative" id="features">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,166,81,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Innovative tools and powerful automations designed to elevate your business
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;