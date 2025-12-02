import React from 'react';

const Legacy: React.FC = () => {
  return (
    <section className="bg-brand-light py-20 md:py-32">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 flex flex-col justify-center">
          <h3 className="font-serif text-sm uppercase tracking-[0.3em] text-brand-gold mb-4">
            A Beverly Hills Institution
          </h3>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark mb-6">
            40 Years of Timeless Style
          </h2>
          <div className="space-y-4 font-sans text-gray-600 text-base leading-relaxed">
            <p>
              For four decades, Avant Garde has been a curated sanctuary for those who seek the pinnacle of Italian luxury and avant-garde design. A household name in Beverly Hills, our boutique has offered unparalleled personal service and an exclusive collection of designer clothing, from exquisite cashmere to statement pieces you won't find anywhere else.
            </p>
            <p>
              This season marks a celebration of our enduring legacy. We are excited to welcome our cherished clientele to join us in this festive occasion.
            </p>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center relative">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-gray-500/20 z-10 mix-blend-multiply pointer-events-none"></div>
            <img 
              src="/IMG_2956.JPG" 
              alt="Avant Garde mannequin display" 
              className="w-full h-auto object-contain shadow-lg" 
              style={{ filter: 'grayscale(100%)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legacy;