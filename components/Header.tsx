import React from 'react';
import Countdown from './Countdown';

const Header: React.FC = () => {
  const scrollToAppointment = () => {
    document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      <Countdown />
      <div className="bg-brand-light/90 backdrop-blur-md border-b border-brand-dark/5 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex-shrink-0">
            <img 
              src="/AVANTGARDElogo.png" 
              alt="Avant Garde Beverly Hills" 
              className="h-12 md:h-20 w-auto object-contain"
            />
          </div>
          <button
            onClick={scrollToAppointment}
            className="hidden sm:inline-block bg-brand-dark text-brand-light font-sans px-6 py-2 uppercase tracking-wider text-sm hover:bg-brand-gold hover:text-white transition-colors duration-300"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;