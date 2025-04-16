import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  description: string;
  tools: string[];
  link: string;
  github?: string;
  image?: string;
  featured: boolean;
}

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('projects');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const featuredProjects: Project[] = [
    {
      id: 1,
      title: "Customer Churn Analysis",
      description: "A comprehensive analysis of customer attrition patterns that reduced churn by 23%. Developed data visualizations and predictive models to identify at-risk segments and implemented dashboards for monitoring key retention metrics.",
      tools: ["Python", "Pandas", "Scikit-learn", "Tableau"],
      link: "https://example.com/project1",
      github: "https://github.com/user/project1",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Sales Performance Dashboard",
      description: "Created a dynamic, multi-dimensional dashboard that integrated data from 5 different sources to provide real-time performance insights across 12 regions, resulting in a 15% increase in quarterly sales.",
      tools: ["Power BI", "Excel", "SQL", "DAX"],
      link: "https://example.com/project2",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop",
      featured: true
    },
    {
      id: 3,
      title: "COVID-19 Data Tracker",
      description: "Engineered an end-to-end data pipeline that ingested, processed, and visualized COVID-19 statistics from multiple international sources. Featured interactive maps and trend analysis used by healthcare organizations.",
      tools: ["Python", "API", "Matplotlib", "Pandas", "Plotly"],
      link: "https://example.com/project3",
      github: "https://github.com/user/project3",
      image: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?q=80&w=2070&auto=format&fit=crop",
      featured: true
    }
  ];

  const otherProjects: Project[] = [
    {
      id: 4,
      title: "Market Basket Analysis",
      description: "Implemented association rule mining algorithms to analyze transaction records, discovering hidden purchase patterns that increased average order value by 18%.",
      tools: ["Python", "Pandas", "Apriori Algorithm"],
      link: "https://example.com/project4",
      featured: false
    },
    {
      id: 5,
      title: "Social Media Sentiment Analysis",
      description: "Built a sophisticated NLP system that processed social media posts to extract sentiment patterns, enabling brands to respond proactively to emerging reputation issues.",
      tools: ["Python", "NLP", "NLTK", "SpaCy"],
      link: "https://example.com/project5",
      github: "https://github.com/user/project5",
      featured: false
    },
    {
      id: 6,
      title: "Movie Recommendation System",
      description: "Developed a hybrid recommendation engine that achieved 89% recommendation accuracy and increased user engagement time by 27%.",
      tools: ["Python", "Collaborative Filtering", "TensorFlow"],
      link: "https://example.com/project6",
      github: "https://github.com/user/project6",
      featured: false
    }
  ];
  
  return (
    <section id="projects" className={`mb-24 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <h2 className="numbered-heading">Some Things I've Built</h2>
      
      {/* Featured Projects */}
      <div className="space-y-24 mt-10">
        {featuredProjects.map((project, i) => (
          <div 
            key={project.id}
            className={`relative grid grid-cols-12 items-center gap-4`}
          >
            {/* Project Image */}
            <div className={`col-span-12 md:col-span-7 ${i % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block relative rounded overflow-hidden aspect-video"
              >
                <div className="absolute inset-0 bg-green/20 z-10 group-hover:opacity-0 transition-opacity"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover filter brightness-50 hover:brightness-80 transition-all"
                />
              </a>
            </div>
            
            {/* Project Content */}
            <div className={`col-span-12 md:col-span-6 md:col-start-7 ${
              i % 2 === 0 ? 'md:order-2 md:col-start-6 md:text-right z-10' : 'md:order-1 md:col-start-1 md:col-end-7'
            }`}>
              <div className="featured-project-content">
                <p className="font-mono text-green text-sm mb-2">Featured Project</p>
                <h3 className="text-lightest-slate text-2xl font-semibold mb-4">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-green transition-colors"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="bg-light-navy p-6 rounded shadow-lg mb-4">
                  <p className="text-slate">{project.description}</p>
                </div>
                <ul className={`flex flex-wrap gap-3 mb-6 text-sm font-mono ${i % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                  {project.tools.map((tool) => (
                    <li key={tool} className="text-slate">{tool}</li>
                  ))}
                </ul>
                <div className={`flex gap-5 text-lightest-slate ${i % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-green transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-green transition-colors"
                    aria-label="Live Project"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Other Projects */}
      <div className="mt-24">
        <h3 className="text-center text-2xl font-semibold text-lightest-slate mb-10">Other Noteworthy Projects</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-light-navy rounded-md p-6 flex flex-col h-full hover:-translate-y-2 transition-transform duration-200"
            >
              <header className="flex justify-between items-start mb-6">
                <FolderGit2 size={40} className="text-green" />
                <div className="flex gap-3">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-lightest-slate hover:text-green transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lightest-slate hover:text-green transition-colors"
                    aria-label="Live Project"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </header>
              
              <h4 className="text-lightest-slate text-xl font-medium mb-2">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-green transition-colors"
                >
                  {project.title}
                </a>
              </h4>
              
              <p className="text-slate mb-6 flex-grow">{project.description}</p>
              
              <footer>
                <ul className="flex flex-wrap gap-2 text-xs font-mono text-slate">
                  {project.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </footer>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/projects" className="button-outline inline-flex items-center">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
