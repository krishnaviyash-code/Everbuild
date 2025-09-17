
import React, { useState } from 'react';
import { MenuIcon, XIcon } from './icons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-brand-primary">
            Ever Build
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={(e) => handleScroll(e, link.href)} className="text-brand-text hover:text-brand-primary transition duration-300">
                {link.name}
              </a>
            ))}
          </nav>
          <a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="hidden md:inline-block bg-brand-secondary text-brand-dark font-semibold px-6 py-2 rounded-full hover:bg-amber-400 transition duration-300">
            Get a Quote
          </a>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-dark">
              {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={(e) => handleScroll(e, link.href)} className="text-brand-text hover:text-brand-primary transition duration-300 text-lg">
                {link.name}
              </a>
            ))}
             <a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="bg-brand-secondary text-brand-dark font-semibold px-6 py-2 rounded-full hover:bg-amber-400 transition duration-300 w-3/4 text-center">
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
