import React from 'react';

const Hero: React.FC = () => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section 
      id="home" 
      className="relative bg-cover bg-center h-[calc(100vh-80px)] min-h-[500px]" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596238295233-a604f42a033f?q=80&w=1920&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-brand-dark bg-opacity-60"></div>
      <div className="relative container mx-auto px-6 h-full flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          Building Your Future, <br /> Managing Your Assets
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mb-8 text-gray-200">
          Comprehensive construction, property management, and investment services with local expertise and a global reach. We deliver high-return projects and hassle-free management.
        </p>
        <a 
          href="#services" 
          onClick={(e) => handleScroll(e, '#services')}
          className="bg-brand-secondary text-brand-dark font-bold px-10 py-4 rounded-full text-lg hover:bg-amber-400 transition-transform transform hover:scale-105 duration-300"
        >
          Explore Our Services
        </a>
      </div>
    </section>
  );
};

export default Hero;