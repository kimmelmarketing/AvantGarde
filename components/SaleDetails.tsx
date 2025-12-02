
import React from 'react';

const SaleDetails: React.FC = () => {
  const scrollToAppointment = () => {
    document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="sale-details" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark mb-4">Exclusive Holiday Sale</h2>
        <p className="font-sans text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Celebrating 40 years in Beverly Hills, we invite you to our exclusive holiday event. This is an unprecedented opportunity to acquire timeless pieces from our curated collections.
        </p>
        <div className="max-w-4xl mx-auto border-2 border-brand-gold p-10 md:p-16 relative">
          <span className="font-serif text-brand-dark text-5xl md:text-7xl font-bold tracking-tight block leading-tight">Up to 70% Off</span>
          <h3 className="font-serif text-2xl font-semibold mt-4 text-gray-700">Select Merchandise</h3>
        </div>

        <div className="mt-16">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-gray-400 mb-8">Featuring Collections From</p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 font-serif text-lg md:text-xl text-brand-dark max-w-5xl mx-auto leading-relaxed">
            <span className="whitespace-nowrap">AVANT TOI</span>
            <span className="text-brand-gold hidden md:inline">•</span>
            <span className="whitespace-nowrap">CIVIDINI</span>
            <span className="text-brand-gold hidden md:inline">•</span>
            <span className="whitespace-nowrap">MARC LEBIHAN</span>
            <span className="text-brand-gold hidden md:inline">•</span>
            <span className="whitespace-nowrap">CO.GO</span>
            <span className="text-brand-gold hidden md:inline">•</span>
            <span className="whitespace-nowrap">BARBARA BOLOGNA</span>
            <span className="text-brand-gold hidden md:inline">•</span>
            <span className="whitespace-nowrap">ALBUM DI FAMIGLIA</span>
            <span className="text-brand-gold hidden md:inline">•</span>
            <span className="whitespace-nowrap">TONET</span>
            <span className="text-gray-400 italic text-base ml-2">and more</span>
          </div>
        </div>

         <button
          onClick={scrollToAppointment}
          className="mt-12 bg-brand-dark text-brand-light font-sans px-10 py-4 uppercase tracking-wider text-base hover:bg-brand-gold hover:text-white transition-colors duration-300"
        >
          Book a Private Viewing
        </button>
      </div>
    </section>
  );
};

export default SaleDetails;
