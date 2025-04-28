import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What services does VelaxAI offer?",
    answer: "We specialize in AI-powered automation, chatbot integrations, data analysis, web development, app development, and custom intelligent systems for modern businesses."
  },
  {
    question: "How long does it take to implement a solution?",
    answer: "Most implementations are completed in 1-3 weeks depending on the complexity."
  },
  {
    question: "Is support provided after deployment?",
    answer: "Yes! We offer ongoing support to ensure your AI solutions continue to perform and improve."
  },
  {
    question: "Can VelaxAI integrate with my current tools?",
    answer: "Absolutely. We build flexible AI systems that integrate with CRMs, ERPs, Slack, and more."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-black relative" id="faq">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,166,81,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="card-glow cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">{faq.question}</h3>
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 text-primary" />
                  ) : (
                    <Plus className="h-5 w-5 text-primary" />
                  )}
                </div>
                {openIndex === index && (
                  <p className="text-gray-400 mt-4">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;