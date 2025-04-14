
import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tools: string[];
  link: string;
  github?: string;
  category: string;
  image: string;
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Customer Churn Analysis",
      description: "Analyzed customer behavior and churn rates to uncover key factors using EDA and visualization.",
      tools: ["Python", "Pandas", "Seaborn"],
      link: "#",
      github: "https://github.com/",
      category: "data-analysis",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Sales Dashboard in Power BI",
      description: "Built an interactive sales performance dashboard for regional analysis.",
      tools: ["Power BI", "Excel"],
      link: "#",
      category: "visualization",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "COVID-19 Data Tracker",
      description: "Fetched global COVID data via APIs and created a live tracker with visual insights.",
      tools: ["Python", "API", "Matplotlib"],
      link: "#",
      github: "https://github.com/",
      category: "data-analysis",
      image: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "E-commerce Product Analysis",
      description: "Performed market basket analysis and trend detection in user purchase patterns.",
      tools: ["Excel", "Python", "Tableau"],
      link: "#",
      category: "data-analysis",
      image: "https://images.unsplash.com/photo-1526570207772-784d36084510?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Twitter Sentiment Analysis",
      description: "Collected and analyzed tweets to identify public sentiment on trending topics.",
      tools: ["Python", "Tweepy", "NLP"],
      link: "#",
      github: "https://github.com/",
      category: "machine-learning",
      image: "https://images.unsplash.com/photo-1600096194534-95cf5b4e035f?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Movie Recommendation System",
      description: "Created a content-based movie recommender using user preferences.",
      tools: ["Python", "Pandas", "Cosine Similarity"],
      link: "#",
      github: "https://github.com/",
      category: "machine-learning",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 7,
      title: "Survey Data Cleaning & Report",
      description: "Cleaned raw survey data and built an analytical report to present trends.",
      tools: ["Google Forms", "Excel", "Python"],
      link: "#",
      category: "visualization",
      image: "https://images.unsplash.com/photo-1590650046871-92c887180603?q=80&w=2070&auto=format&fit=crop"
    }
  ];
  
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'data-analysis', label: 'Data Analysis' },
    { id: 'visualization', label: 'Visualization' },
    { id: 'machine-learning', label: 'Machine Learning' }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-data-darkBg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="gradient-text">Projects</span>
        </h2>
        
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Filter size={20} className="mr-2 text-data-teal" />
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter.id 
                  ? 'bg-data-blue text-white' 
                  : 'bg-data-darkCard hover:bg-data-darkAccent'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group bg-data-darkCard rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col animate-fade-in"
              style={{animationDelay: `${(project.id - 1) * 0.1}s`}}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-data-darkBg to-transparent opacity-70"></div>
              </div>
              
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, index) => (
                    <span key={index} className="text-xs bg-data-darkAccent rounded-full px-3 py-1">{tool}</span>
                  ))}
                </div>
              </div>
              
              <div className="px-6 pb-6 mt-auto flex gap-3">
                <a 
                  href={project.link}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-data-teal hover:text-data-blue transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>View Project</span>
                </a>
                
                {project.github && (
                  <a 
                    href={project.github}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-data-teal hover:text-data-blue transition-colors"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
