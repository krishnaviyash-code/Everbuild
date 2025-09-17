
import React from 'react';
import { TwitterIcon, FacebookIcon, InstagramIcon } from './icons';

const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  
  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold mb-4">Ever Build</h3>
            <p className="text-gray-400">Building tomorrow's landmarks, today.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map(link => (
                 <li key={link.name}>
                  <a href={link.href} onClick={(e) => handleScroll(e, link.href)} className="text-gray-400 hover:text-white transition-colors duration-300">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300"><TwitterIcon /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300"><FacebookIcon /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300"><InstagramIcon /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Ever Build Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
