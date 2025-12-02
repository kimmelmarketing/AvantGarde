import React from 'react';
import BookingWidget from './BookingWidget';

const Appointment: React.FC = () => {
  return (
    <section id="appointment" className="relative py-20 md:py-32 bg-brand-dark text-brand-light">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=3')" }}
      ></div>
      <div className="relative container mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">A Personalized Experience</h2>
        <p className="font-sans text-lg text-brand-light/80 max-w-3xl mx-auto mb-12">
          To ensure the best experience during our sale, we invite you to book a personal styling appointment. Select a time below to meet with our expert stylists.
        </p>
        
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden p-4 md:p-8">
            <BookingWidget />
        </div>
      </div>
    </section>
  );
};

export default Appointment;