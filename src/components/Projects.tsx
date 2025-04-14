
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  description: string;
  tools: string[];
  link: string;
  github?: string;
  image: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      description: "Analyzed customer behavior and churn rates to uncover key factors using EDA and visualization.",
      tools: ["Python", "Pandas", "Seaborn"],
      link: "#",
      github: "https://github.com/",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      description: "Built an interactive sales performance dashboard for regional analysis.",
      tools: ["Power BI", "Excel"],
      link: "#",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      description: "Fetched global COVID data via APIs and created a live tracker with visual insights.",
      tools: ["Python", "API", "Matplotlib"],
      link: "#",
      github: "https://github.com/",
      image: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 4,
      description: "Performed market basket analysis and trend detection in user purchase patterns.",
      tools: ["Excel", "Python", "Tableau"],
      link: "#",
      image: "https://images.unsplash.com/photo-1526570207772-784d36084510?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 5,
      description: "Collected and analyzed tweets to identify public sentiment on trending topics.",
      tools: ["Python", "Tweepy", "NLP"],
      link: "#",
      github: "https://github.com/",
      image: "https://images.unsplash.com/photo-1600096194534-95cf5b4e035f?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 6,
      description: "Created a content-based movie recommender using user preferences.",
      tools: ["Python", "Pandas", "Cosine Similarity"],
      link: "#",
      github: "https://github.com/",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 7,
      description: "Cleaned raw survey data and built an analytical report to present trends.",
      tools: ["Google Forms", "Excel", "Python"],
      link: "#",
      image: "https://images.unsplash.com/photo-1590650046871-92c887180603?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-data-darkBg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="text-gradient">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group pink-glass rounded-2xl overflow-hidden shadow-xl hover:shadow-glow transition-all duration-500 flex flex-col animate-fade-in"
              style={{animationDelay: `${(project.id - 1) * 0.1}s`}}
            >
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`Project ${project.id}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-data-darkBg to-transparent opacity-70"></div>
              </div>
              
              <div className="p-6 flex-grow">
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, index) => (
                    <span key={index} className="text-xs bg-black/40 rounded-full px-3 py-1 border border-data-primary/30">{tool}</span>
                  ))}
                </div>
              </div>
              
              <div className="px-6 pb-6 mt-auto flex gap-3">
                <a 
                  href={project.link}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-data-primary hover:text-data-highlight transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>View Project</span>
                </a>
                
                {project.github && (
                  <a 
                    href={project.github}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-data-primary hover:text-data-highlight transition-colors"
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
