
import React from 'react';

const Location: React.FC = () => {
  return (
    <section id="location" className="bg-white">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2">
        <div className="p-12 md:p-20 flex flex-col justify-center">
          <h3 className="font-serif text-sm uppercase tracking-[0.3em] text-brand-gold mb-4">
            Visit Us
          </h3>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark mb-8">
            Beverly Hills
          </h2>
          <div className="font-sans space-y-6 text-gray-700">
            <div>
              <h4 className="font-semibold tracking-wider uppercase text-brand-dark mb-1">Address</h4>
              <p>9612 Brighton Way, Beverly Hills, CA 90210</p>
            </div>
            <div>
              <h4 className="font-semibold tracking-wider uppercase text-brand-dark mb-1">Store Hours</h4>
              <p>Monday - Saturday: 10am - 6pm</p>
              <p>Sunday: Closed</p>
            </div>
            <div>
              <h4 className="font-semibold tracking-wider uppercase text-brand-dark mb-1">Contact</h4>
              <p>310.550.0504</p>
            </div>
            <a 
              href="https://maps.app.goo.gl/Z7u3CTRKez4qE9WW7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-brand-dark text-brand-light font-sans px-8 py-3 uppercase tracking-wider text-sm hover:bg-brand-gold hover:text-white transition-colors duration-300"
            >
              Get Directions
            </a>
          </div>
        </div>
        <div className="min-h-[400px] lg:min-h-0">
          <iframe
            src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=9612%20Brighton%20Way%2C%20Beverly%20Hills%2C%20CA%2090210+(Avant%20Garde%20Beverly%20Hills)&t=&z=15&ie=UTF8&iwloc=B&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Avant Garde Boutique Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;
