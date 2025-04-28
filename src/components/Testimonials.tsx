import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  rating: number;
  imageSrc: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "VelaxAI transformed our marketing strategy completely. We've seen a 40% increase in conversion rates since implementation.",
    author: "Sarah Johnson",
    position: "CMO",
    company: "TechVision Inc.",
    rating: 5,
    imageSrc: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    quote: "The AI-driven insights helped us identify new market opportunities we hadn't considered. Our growth has been exponential.",
    author: "Michael Chen",
    position: "CEO",
    company: "Innovate Solutions",
    rating: 5,
    imageSrc: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    quote: "I was skeptical at first, but the results speak for themselves. The ROI on our campaigns has improved by 65%.",
    author: "Jessica Miller",
    position: "Digital Marketing Director",
    company: "Growth Pioneers",
    rating: 4,
    imageSrc: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, position, company, rating, imageSrc }) => {
  return (
    <div className="card-glow w-[350px] md:w-[400px] h-[250px] mx-4 flex flex-col justify-between">
      <div>
        <div className="flex items-center mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star 
              key={i} 
              className={`h-5 w-5 ${i < rating ? 'text-primary fill-primary' : 'text-gray-700'}`} 
            />
          ))}
        </div>
        <p className="text-gray-300 mb-6 italic">{quote}</p>
      </div>
      <div className="flex items-center mt-auto">
        <img 
          src={imageSrc} 
          alt={author} 
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <div>
          <h4 className="font-semibold text-white">{author}</h4>
          <p className="text-sm text-gray-400">{position}, {company}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden" id="testimonials">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,166,81,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Don't take our word for it — see how VelaxAI has transformed businesses just like yours.
          </p>
        </div>

        <div className="flex justify-center items-center gap-6 flex-wrap">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;