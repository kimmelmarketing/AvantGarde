
import React from 'react';

const Hero: React.FC = () => {
  const scrollToSaleDetails = () => {
    document.getElementById('sale-details')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white bg-brand-dark">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/IMG_5630.JPG')" }}
      ></div>
      {/* Added pt-20 to push content down visually so it floats better below the header */}
      <div className="relative z-10 px-6 pt-20">
        <h2 className="font-serif text-xl md:text-2xl uppercase tracking-[0.3em] mb-4">
          Avant Garde Boutique
        </h2>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-wide leading-tight mb-6">
          Grand Holiday Sale
        </h1>
        <p className="font-sans max-w-3xl mx-auto text-lg md:text-xl text-brand-light/90 mb-10">
          Enjoy up to 70% off select merchandise. This is your exclusive opportunity to acquire timeless pieces from our iconic Beverly Hills collection this season.
        </p>
        <button
          onClick={scrollToSaleDetails}
          className="bg-brand-gold text-white font-sans px-10 py-4 uppercase tracking-wider text-base hover:bg-white hover:text-brand-dark transition-colors duration-300"
        >
          Discover The Sale
        </button>
      </div>
    </section>
  );
};

export default Hero;