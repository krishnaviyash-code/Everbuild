import React from 'react';

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  location: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, title, location, description }) => (
  <div className="group relative overflow-hidden rounded-lg shadow-lg">
    <img src={imageUrl} alt={title} className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-6">
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      <p className="text-brand-secondary">{location}</p>
      <p className="text-gray-200 mt-2 text-sm max-w-sm">{description}</p>
      <button className="mt-4 bg-brand-secondary text-brand-dark font-semibold px-5 py-2 rounded-full text-sm hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black/50 focus:ring-brand-secondary transition duration-300">
        Learn More
      </button>
    </div>
  </div>
);

const Projects: React.FC = () => {
  const projects = [
    { 
      imageUrl: 'https://picsum.photos/600/400?random=10', 
      title: 'Sarjapur Residential Complex', 
      location: 'Bangalore',
      description: 'A modern living space with state-of-the-art amenities designed for urban families.'
    },
    { 
      imageUrl: 'https://picsum.photos/600/400?random=11', 
      title: 'Whitefield Tech Park', 
      location: 'Bangalore',
      description: 'Eco-friendly commercial complex housing leading tech companies, fostering innovation.'
    },
    { 
      imageUrl: 'https://picsum.photos/600/400?random=12', 
      title: 'Electronic City Commercial Hub', 
      location: 'Bangalore',
      description: 'A bustling commercial center with retail spaces and offices, driving economic growth.'
    },
    { 
      imageUrl: 'https://picsum.photos/600/400?random=13', 
      title: 'Government Infra Initiative', 
      location: 'Karnataka',
      description: 'A large-scale public infrastructure project completed ahead of schedule and under budget.'
    },
    { 
      imageUrl: 'https://picsum.photos/600/400?random=14', 
      title: 'Luxury Villa Project', 
      location: 'Bangalore',
      description: 'Exclusive gated community featuring bespoke villas with premium finishes and private gardens.'
    },
    { 
      imageUrl: 'https://picsum.photos/600/400?random=15', 
      title: 'Modern Apartments', 
      location: 'Bangalore',
      description: 'Affordable and stylish apartment complex focused on community living and sustainable design.'
    },
  ];

  return (
    <section id="projects" className="py-20 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-brand-dark">Our Landmark Projects</h2>
          <p className="mt-4 text-lg text-brand-text max-w-2xl mx-auto">A glimpse into the quality and value we deliver across various sectors.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;