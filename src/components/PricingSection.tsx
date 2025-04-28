import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Link } from './Link';

interface PlanFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  description: string;
  price: string;
  period: string;
  features: PlanFeature[];
  buttonText: string;
  isPopular?: boolean;
}

const PricingSection: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans: PricingPlan[] = [
    {
      name: "Starter",
      description: "Perfect for small businesses getting started",
      price: isAnnual ? "$29" : "$39",
      period: isAnnual ? "/month, billed annually" : "/month",
      features: [
        { text: "AI-powered growth insights", included: true },
        { text: "Basic analytics dashboard", included: true },
        { text: "Monthly performance reports", included: true },
        { text: "Email support", included: true },
        { text: "Up to 3 team members", included: true },
        { text: "Advanced competitor analysis", included: false },
        { text: "Custom growth strategies", included: false },
        { text: "Dedicated account manager", included: false },
      ],
      buttonText: "Get Started",
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses and teams",
      price: isAnnual ? "$79" : "$99",
      period: isAnnual ? "/month, billed annually" : "/month",
      features: [
        { text: "AI-powered growth insights", included: true },
        { text: "Advanced analytics dashboard", included: true },
        { text: "Weekly performance reports", included: true },
        { text: "Priority email & chat support", included: true },
        { text: "Up to 10 team members", included: true },
        { text: "Advanced competitor analysis", included: true },
        { text: "Custom growth strategies", included: true },
        { text: "Dedicated account manager", included: false },
      ],
      buttonText: "Get Started",
      isPopular: true,
    },
    {
      name: "Enterprise",
      description: "For established companies seeking scale",
      price: isAnnual ? "$199" : "$249",
      period: isAnnual ? "/month, billed annually" : "/month",
      features: [
        { text: "AI-powered growth insights", included: true },
        { text: "Custom analytics dashboard", included: true },
        { text: "Daily performance reports", included: true },
        { text: "24/7 priority support", included: true },
        { text: "Unlimited team members", included: true },
        { text: "Advanced competitor analysis", included: true },
        { text: "Custom growth strategies", included: true },
        { text: "Dedicated account manager", included: true },
      ],
      buttonText: "Contact Sales",
    },
  ];

  return (
    <section className="py-20 bg-white" id="pricing">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Choose the plan that best fits your business needs. All plans include our core AI features.
          </p>
          
          <div className="flex items-center justify-center mb-8">
            <span className={`mr-3 ${isAnnual ? 'text-gray-900 font-medium' : 'text-gray-600'}`}>
              Annual
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-emerald-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`ml-3 ${!isAnnual ? 'text-gray-900 font-medium' : 'text-gray-600'}`}>
              Monthly
            </span>
            <span className="ml-2 bg-emerald-100 text-emerald-800 text-xs font-medium px-2 py-1 rounded">
              Save 20%
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-2xl overflow-hidden border transition-transform hover:scale-105 ${
                plan.isPopular 
                  ? 'border-emerald-600 shadow-lg relative' 
                  : 'border-gray-200 shadow-md'
              }`}
            >
              {plan.isPopular && (
                <div className="bg-emerald-600 text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className={`h-5 w-5 mr-2 mt-0.5 ${feature.included ? 'text-emerald-600' : 'text-gray-300'}`} />
                      <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/pricing/${plan.name.toLowerCase()}`}
                  className={`w-full block text-center py-3 rounded-md font-medium transition-colors ${
                    plan.isPopular
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                      : 'border border-emerald-600 text-emerald-600 hover:bg-emerald-50'
                  }`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;