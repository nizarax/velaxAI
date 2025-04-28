import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from './Link';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header-backdrop py-4">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="logo-square"></div>
            <span className="logo-text">
              <span className="text-white">Velax</span>
              {' '}
              <span className="text-primary">AI</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="#features" className="nav-item">
              <span className="w-2 h-2 rounded-full bg-primary/30 mr-2"></span>
              Features
            </Link>
            <Link to="#solutions" className="nav-item">
              <span className="w-2 h-2 rounded-full bg-primary/30 mr-2"></span>
              Solutions
            </Link>
            <Link to="#contact" className="nav-item">
              <span className="w-2 h-2 rounded-full bg-primary/30 mr-2"></span>
              Contact
            </Link>
            <Link 
              to="https://cal.com/velax/30min" 
              className="glow-button"
            >
              Book Now
            </Link>
          </nav>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link 
              to="#features" 
              className="nav-item"
              onClick={() => setIsOpen(false)}
            >
              <span className="w-2 h-2 rounded-full bg-primary/30 mr-2"></span>
              Features
            </Link>
            <Link 
              to="#solutions" 
              className="nav-item"
              onClick={() => setIsOpen(false)}
            >
              <span className="w-2 h-2 rounded-full bg-primary/30 mr-2"></span>
              Solutions
            </Link>
            <Link 
              to="#contact" 
              className="nav-item"
              onClick={() => setIsOpen(false)}
            >
              <span className="w-2 h-2 rounded-full bg-primary/30 mr-2"></span>
              Contact
            </Link>
            <Link 
              to="https://cal.com/velax/30min" 
              className="glow-button block text-center"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;