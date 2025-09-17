
import React from 'react';
import { ConstructionIcon, PropertyManagementIcon, InvestmentIcon } from './icons';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center">
    <div className="inline-block p-4 bg-brand-secondary rounded-full mb-4">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-brand-dark mb-3">{title}</h3>
    <p className="text-brand-text leading-relaxed">{description}</p>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      icon: <ConstructionIcon className="h-8 w-8 text-brand-primary" />,
      title: 'Full-Cycle Construction',
      description: 'From groundbreaking to finishing touches, we manage every aspect of your construction project with precision and expertise.'
    },
    {
      icon: <PropertyManagementIcon className="h-8 w-8 text-brand-primary" />,
      title: 'Property Management',
      description: 'Hassle-free post-construction maintenance and rental management to ensure your property remains a valuable, income-generating asset.'
    },
    {
      icon: <InvestmentIcon className="h-8 w-8 text-brand-primary" />,
      title: 'Real Estate Investment',
      description: 'Leverage our local expertise in prime Bangalore locations like Sarjapur and Whitefield for high-return property investments.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-brand-dark">Our Services</h2>
          <p className="mt-4 text-lg text-brand-text max-w-2xl mx-auto">We provide end-to-end solutions to build, manage, and grow your real estate assets.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
