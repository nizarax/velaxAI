import React from 'react';

interface LinkProps {
  to: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({ to, className, children, onClick }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Handle internal navigation
    if (to.startsWith('#') || to.startsWith('/')) {
      const targetId = to.replace(/^[/#]/, '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Handle external links
      window.open(to + '?overlayCalendar=true', '_blank');
    }
    
    if (onClick) onClick();
  };

  return (
    <a href={to} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};