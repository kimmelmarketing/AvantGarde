import React from 'react';

const Gallery: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark mb-4">Discover The Collection</h2>
        <p className="font-sans text-lg text-gray-600 max-w-3xl mx-auto mb-16">
          A glimpse into the world of Avant Garde—where Italian craftsmanship meets bold design. Follow our journey on Instagram for the latest arrivals and inspiration.
        </p>
        
        <div className="w-full max-w-sm mx-auto shadow-xl rounded-lg overflow-hidden border border-gray-200">
          <iframe
            src="https://www.instagram.com/avantgardebeverlyhills/embed"
            className="w-full h-[540px] md:h-[640px]"
            style={{ border: 'none' }}
            title="Avant Garde Instagram Feed"
            scrolling="no"
            allowTransparency={true}
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
