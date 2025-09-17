
import React from 'react';
import { CheckCircleIcon } from './icons';

const FeatureItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start">
    <div className="flex-shrink-0">
      <CheckCircleIcon className="h-6 w-6 text-brand-secondary" />
    </div>
    <span className="ml-3 text-brand-text">{children}</span>
  </li>
);

const WhyChooseUs: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-extrabold text-brand-dark mb-4">Why Ever Build?</h2>
            <p className="text-lg text-brand-text mb-8">
              We combine deep local knowledge with a commitment to excellence, ensuring every project is a success for our clients and investors.
            </p>
            <ul className="space-y-4 text-lg">
              <FeatureItem>
                <strong>Proven Track Record:</strong> Successful high-return projects including government initiatives and prime properties.
              </FeatureItem>
              <FeatureItem>
                <strong>End-to-End Solutions:</strong> From initial plans to long-term property management, we handle everything.
              </FeatureItem>
              <FeatureItem>
                <strong>Local Expertise, Global Standards:</strong> In-depth knowledge of Bangalore's real estate market, delivered with world-class quality.
              </FeatureItem>
              <FeatureItem>
                <strong>Tailored Services:</strong> If you own land, we provide customized construction and management solutions to fit your needs.
              </FeatureItem>
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="https://picsum.photos/800/600?random=1" 
              alt="Construction site meeting" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
