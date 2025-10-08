
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
      title: "Shyam Rasoi",
      description: "Designed and developed a responsive restaurant website for Shyam Rasoi, a top-rated vegetarian restaurant located in Bhuj, Gujarat. Features include complete menu listings, gallery, blog, and contact details with SEO optimization.",
      tools: ["React", "Responsive Design", "SEO", "UI/UX Design"],
      link: "https://shyamrasoibhuj.com/",
      featured: true
    },
    {
      id: 2,
      title: "Mina Bandhej Store",
      description: "Developed a fully responsive e-commerce website for Mina Bandhej, a traditional saree and bandhani store. Implemented product listings, category filters, wishlist, cart functionality with integrated offers and secure checkout.",
      tools: ["React", "E-commerce", "API Integration", "UI/UX Design"],
      link: "https://www.minabandhej.in/",
      featured: true
    },
    {
      id: 3,
      title: "Teque7 Website Redesign",
      description: "Redesigned the company website in collaboration with a senior developer to improve performance, user experience, and modernize the overall design. Implemented responsive layouts and optimized page loading.",
      tools: ["React.js", "Next.js", "JavaScript", "PHP"],
      link: "https://example.com/teque7",
      featured: true
    },
    {
      id: 4,
      title: "Business Intelligence & Data Analytics - Mercedes-Benz",
      description: "Designed interactive Power BI dashboards integrating financial, automotive, and demographic datasets to provide actionable insights for investors and stakeholders. Analyzed revenue trends, stock prices, and COVID-19 impact.",
      tools: ["Python", "Power BI", "SQL", "Excel", "Web Scraping"],
      link: "https://example.com/mercedes-bi",
      github: "https://github.com",
      featured: true
    },
    {
      id: 5,
      title: "911 Emergency Calls Data Analysis",
      description: "Conducted exploratory data analysis on ~99k emergency call records, identifying patterns and trends. Applied advanced visualizations to uncover temporal and spatial patterns in public safety data.",
      tools: ["Python", "Pandas", "Seaborn", "Matplotlib", "Jupyter"],
      link: "https://example.com/911-analysis",
      github: "https://github.com",
      featured: true
    },
    {
      id: 6,
      title: "Alzheimer's Disease Prediction",
      description: "Preprocessed CT/MRI brain scans and built a Convolutional Neural Network to classify different stages of Alzheimer's with ~99% accuracy. Demonstrated effective multi-class medical image classification.",
      tools: ["Python", "TensorFlow", "Keras", "OpenCV", "CNN"],
      link: "https://example.com/alzheimer-prediction",
      github: "https://github.com",
      featured: true
    },
    {
      id: 7,
      title: "Online Retail Customer Segmentation",
      description: "Applied RFM analysis and clustering algorithms (KMeans, DBSCAN) on UK retail data to segment customers. Identified high-value and low-engagement customer segments to support targeted marketing strategies.",
      tools: ["Python", "Scikit-learn", "KMeans", "DBSCAN", "RFM Analysis"],
      link: "https://example.com/customer-segmentation",
      github: "https://github.com",
      featured: true
    }
  ];
  
  return (
    <section id="projects" className={`mb-24 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <h2 className="section-heading">Projects</h2>
      
      <div className="space-y-8 sm:space-y-12 mt-6 sm:mt-10">
        {projects.filter(p => p.featured).map((project) => (
          <div 
            key={project.id}
            className="bg-light-navy/30 p-4 sm:p-6 md:p-8 rounded-lg hover:bg-[#1EAEDB]/10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            onMouseEnter={() => setFocusedProjectId(project.id)}
            onMouseLeave={() => setFocusedProjectId(null)}
          >
            <div className="group">
              <div className="flex flex-col justify-between">
                <h3 className="flex items-start sm:items-center text-xl sm:text-2xl text-white font-semibold mb-2 sm:mb-3">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-[#1EAEDB] transition-colors mr-2 inline-link"
                  >
                    {project.title}
                  </a>
                  <ExternalLink size={18} className="text-[#1EAEDB] mt-1 sm:mt-0" />
                </h3>
                
                <p className="text-base sm:text-lg md:text-xl text-light-slate mb-3 sm:mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                  {project.tools.map((tool) => (
                    <span key={tool} className="text-[#1EAEDB] text-sm sm:text-base">{tool}</span>
                  ))}
                </div>
                
                <div className="flex gap-3 sm:gap-4 text-white/80">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`transition-all duration-300 bg-[#1EAEDB]/10 p-2 rounded-full ${focusedProjectId === project.id ? 'text-[#1EAEDB] scale-110' : 'text-white/80 hover:text-[#1EAEDB]'}`}
                      aria-label="GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-[#1EAEDB] transition-colors bg-[#1EAEDB]/10 p-2 rounded-full"
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
      
      <div className="text-center mt-8 sm:mt-12">
        <Link to="/projects" className="button-link inline-flex items-center group text-[#1EAEDB] font-semibold text-base sm:text-lg">
          <span>View Full Project Archive</span>
          <ExternalLink size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};

export default Projects;
