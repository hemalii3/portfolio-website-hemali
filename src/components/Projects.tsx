
import React, { useState, useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';
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

  const projects: Project[] = [
    {
      id: 1,
      title: "Build a Spotify Connected App",
      description: "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
      tools: ["React", "Express", "Spotify API", "Heroku"],
      link: "https://example.com/project1",
      github: "https://github.com/user/project1",
      image: "public/lovable-uploads/e701160d-f2ca-45ed-96e2-a1fb988aa954.png",
      featured: true
    },
    {
      id: 2,
      title: "Spotify Profile",
      description: "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      tools: ["React", "Express", "Spotify API", "Heroku"],
      link: "https://example.com/project2",
      image: "public/lovable-uploads/926ab928-2cb3-435f-b112-5f9289919df3.png",
      featured: true
    },
    {
      id: 3,
      title: "Halcyon Theme",
      description: "Minimal dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.",
      tools: ["VS Code", "Sublime Text", "Atom", "iTerm"],
      link: "https://example.com/project3",
      github: "https://github.com/user/project3",
      image: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?q=80&w=2070&auto=format&fit=crop",
      featured: true
    },
    {
      id: 4,
      title: "brittanychiang.com (v4)",
      description: "An old portfolio site built with Gatsby with 6k+ stars and 3k+ forks.",
      tools: ["Gatsby", "Styled Components", "Netlify"],
      link: "https://example.com/project4",
      github: "https://github.com/user/project4",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop",
      featured: true
    },
    {
      id: 5,
      title: "Market Basket Analysis",
      description: "Implemented association rule mining algorithms to analyze transaction records, discovering hidden purchase patterns that increased average order value by 18%.",
      tools: ["Python", "Pandas", "Apriori Algorithm"],
      link: "https://example.com/project5",
      featured: false
    },
    {
      id: 6,
      title: "Social Media Sentiment Analysis",
      description: "Built a sophisticated NLP system that processed social media posts to extract sentiment patterns, enabling brands to respond proactively to emerging reputation issues.",
      tools: ["Python", "NLP", "NLTK", "SpaCy"],
      link: "https://example.com/project6",
      github: "https://github.com/user/project6",
      featured: false
    }
  ];
  
  return (
    <section id="projects" className={`mb-24 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <h2 className="section-heading">Projects</h2>
      
      {/* Featured Projects */}
      <div className="space-y-16 mt-10">
        {projects.filter(p => p.featured).map((project) => (
          <div 
            key={project.id}
            className="grid grid-cols-12 gap-4 group"
          >
            {/* Project Image */}
            <div className="col-span-12 md:col-span-5 rounded overflow-hidden">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto object-cover rounded"
                />
              </a>
            </div>
            
            {/* Project Content */}
            <div className="col-span-12 md:col-span-7">
              <h3 className="flex items-center text-xl text-white font-semibold mb-3">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white/80 transition-colors mr-2"
                >
                  {project.title}
                </a>
                <ExternalLink size={16} className="text-white/70" />
              </h3>
              
              <p className="text-slate mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tools.map((tool) => (
                  <span key={tool} className="skill-tag">{tool}</span>
                ))}
              </div>
              
              <div className="flex gap-3 text-white/70">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <Github size={20} />
                  </a>
                )}
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="Live Project"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Link to="/projects" className="button-outline inline-flex items-center group">
          <span>View Full Project Archive</span>
          <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};

export default Projects;
