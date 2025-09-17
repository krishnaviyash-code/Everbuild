
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-light">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
