import React from 'react';
import { Link } from './Link';
import { Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-[#1A2A1F]" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <span className="text-xl font-bold gradient-text">VelaxAI</span>
            </div>
            <p className="text-gray-400 mb-6">
              AI-powered growth strategies and insights to help your business reach its full potential.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/velax_ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/nasir-shaik-a78b42343/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/velax_ai?igsh=MTdzd2VjZGN3N29yNA==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Product</h3>
            <ul className="space-y-3">
              <li><Link to="#features" className="text-gray-400 hover:text-primary transition-colors">Features</Link></li>
              <li><Link to="#solutions" className="text-gray-400 hover:text-primary transition-colors">How It Works</Link></li>
              <li><Link to="#testimonials" className="text-gray-400 hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link to="https://cal.com/velax/30min" className="text-gray-400 hover:text-primary transition-colors">Get Started</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><Link to="#about" className="text-gray-400 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="#faq" className="text-gray-400 hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="#contact" className="text-gray-400 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-3">
              <li>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-primary mr-2" />
                  <a href="mailto:velaxxai@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
                    velaxxai@gmail.com
                  </a>
                </div>
              </li>
              <li>
                <Link 
                  to="https://cal.com/velax/30min"
                  className="glow-button inline-block mt-4"
                >
                  Schedule a Demo
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-[#1A2A1F] mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <div className="mb-4 md:mb-0">
            © 2024, VelaxAI Inc - All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link to="/terms" className="hover:text-primary transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link to="/cookies" className="hover:text-primary transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;