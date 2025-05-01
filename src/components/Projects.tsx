
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
  const [focusedProjectId, setFocusedProjectId] = useState<number | null>(null);
  
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
      title: "Data Analysis Dashboard",
      description: "An interactive dashboard for visualizing complex datasets with customizable filters and real-time updates.",
      tools: ["React", "D3.js", "Python", "Flask"],
      link: "https://example.com/project5",
      github: "https://github.com/user/project5",
      image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop",
      featured: true
    }
  ];
  
  return (
    <section id="projects" className={`mb-24 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <h2 className="section-heading">Projects</h2>
      
      <div className="space-y-12 mt-10">
        {projects.filter(p => p.featured).map((project) => (
          <div 
            key={project.id}
            className="bg-light-navy/30 p-8 rounded-lg hover:bg-[#1EAEDB]/10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            onMouseEnter={() => setFocusedProjectId(project.id)}
            onMouseLeave={() => setFocusedProjectId(null)}
          >
            <div className="grid grid-cols-12 gap-8 group">
              <div className="col-span-12 md:col-span-4 rounded overflow-hidden mb-4 md:mb-0">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block overflow-hidden rounded-lg"
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto object-cover rounded transition-transform duration-500 group-hover:scale-105 max-h-[150px]" 
                  />
                </a>
              </div>
              
              <div className="col-span-12 md:col-span-8 flex flex-col justify-between">
                <h3 className="flex items-center text-2xl text-white font-semibold mb-3">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-[#1EAEDB] transition-colors mr-2 inline-link"
                  >
                    {project.title}
                  </a>
                  <ExternalLink size={20} className="text-[#1EAEDB]" />
                </h3>
                
                <p className="text-xl text-light-slate mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool) => (
                    <span key={tool} className="text-[#1EAEDB]">{tool}</span>
                  ))}
                </div>
                
                <div className="flex gap-4 text-white/80">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`transition-all duration-300 bg-[#1EAEDB]/10 p-2 rounded-full ${focusedProjectId === project.id ? 'text-[#1EAEDB] scale-110' : 'text-white/80 hover:text-[#1EAEDB]'}`}
                      aria-label="GitHub Repository"
                    >
                      <Github size={22} />
                    </a>
                  )}
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-[#1EAEDB] transition-colors bg-[#1EAEDB]/10 p-2 rounded-full"
                    aria-label="Live Project"
                  >
                    <ExternalLink size={22} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Link to="/projects" className="button-link inline-flex items-center group text-[#1EAEDB] font-semibold text-lg">
          <span>View Full Project Archive</span>
          <ExternalLink size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};

export default Projects;
