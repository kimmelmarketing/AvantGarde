
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SaleDetails from './components/SaleDetails';
import Legacy from './components/Legacy';
import Gallery from './components/Gallery';
import Appointment from './components/Appointment';
import Location from './components/Location';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-light">
      <Header />
      <main>
        <Hero />
        <SaleDetails />
        <Legacy />
        <Gallery />
        <Appointment />
        <Location />
      </main>
      <Footer />
    </div>
  );
};

export default App;
