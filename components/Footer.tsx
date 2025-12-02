import React from 'react';

const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-brand-light/70 font-sans">
      <div className="container mx-auto px-6 py-12 text-center">
        <div className="flex justify-center mb-6">
          <img 
            src="/AVANTGARDElogo.png" 
            alt="Avant Garde Beverly Hills" 
            className="h-20 w-auto brightness-0 invert opacity-90"
          />
        </div>
        <p className="mb-6">9612 Brighton Way, Beverly Hills, CA 90210</p>
        <div className="flex justify-center items-center mb-8">
          <a 
            href="https://www.instagram.com/avantgardebeverlyhills/?hl=en" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-brand-light/70 hover:text-brand-gold transition-colors duration-300"
          >
            <InstagramIcon className="w-6 h-6" />
          </a>
        </div>
        <p className="text-sm text-brand-light/50">
          &copy; {currentYear} Avant Garde Beverly Hills. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;