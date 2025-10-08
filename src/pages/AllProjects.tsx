import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { ExternalLink, Github, Mail, Phone, MapPin, Book, Linkedin, Twitter, Instagram, ArrowLeft } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tools: string[];
  link: string;
  github?: string;
}

const AllProjects = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [focusedProjectId, setFocusedProjectId] = useState<number | null>(null);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Shyam Rasoi",
      description: "Designed and developed a responsive restaurant website for Shyam Rasoi, a top-rated vegetarian restaurant located in Bhuj, Gujarat. Features include complete menu listings, gallery, blog, and contact details with SEO optimization.",
      tools: ["React", "Responsive Design", "SEO", "UI/UX Design"],
      link: "https://shyamrasoibhuj.com/",
    },
    {
      id: 2,
      title: "Mina Bandhej Store",
      description: "Developed a fully responsive e-commerce website for Mina Bandhej, a traditional saree and bandhani store. Implemented product listings, category filters, wishlist, cart functionality with integrated offers and secure checkout.",
      tools: ["React", "E-commerce", "API Integration", "UI/UX Design"],
      link: "https://www.minabandhej.in/",
    },
    {
      id: 3,
      title: "Teque7 Website Redesign",
      description: "Redesigned the company website in collaboration with a senior developer to improve performance, user experience, and modernize the overall design. Implemented responsive layouts and optimized page loading.",
      tools: ["React.js", "Next.js", "JavaScript", "PHP"],
      link: "https://example.com/teque7",
    },
    {
      id: 4,
      title: "Business Intelligence & Data Analytics - Mercedes-Benz",
      description: "Designed interactive Power BI dashboards integrating financial, automotive, and demographic datasets to provide actionable insights for investors and stakeholders. Analyzed revenue trends, stock prices, and COVID-19 impact.",
      tools: ["Python", "Power BI", "SQL", "Excel", "Web Scraping"],
      link: "https://example.com/mercedes-bi",
      github: "https://github.com",
    },
    {
      id: 5,
      title: "911 Emergency Calls Data Analysis",
      description: "Conducted exploratory data analysis on ~99k emergency call records, identifying patterns and trends. Applied advanced visualizations to uncover temporal and spatial patterns in public safety data.",
      tools: ["Python", "Pandas", "Seaborn", "Matplotlib", "Jupyter"],
      link: "https://example.com/911-analysis",
      github: "https://github.com",
    },
    {
      id: 6,
      title: "Alzheimer's Disease Prediction",
      description: "Preprocessed CT/MRI brain scans and built a Convolutional Neural Network to classify different stages of Alzheimer's with ~99% accuracy. Demonstrated effective multi-class medical image classification.",
      tools: ["Python", "TensorFlow", "Keras", "OpenCV", "CNN"],
      link: "https://example.com/alzheimer-prediction",
      github: "https://github.com",
    },
    {
      id: 7,
      title: "Online Retail Customer Segmentation",
      description: "Applied RFM analysis and clustering algorithms (KMeans, DBSCAN) on UK retail data to segment customers. Identified high-value and low-engagement customer segments to support targeted marketing strategies.",
      tools: ["Python", "Scikit-learn", "KMeans", "DBSCAN", "RFM Analysis"],
      link: "https://example.com/customer-segmentation",
      github: "https://github.com",
    }
  ];
  
  return (
    <Layout>
      <div className="py-10">
        {/* Back navigation arrow */}
        <Link to="/" className="flex items-center text-light-slate mb-4 hover:text-[#1EAEDB] transition-colors inline-flex">
          <ArrowLeft size={20} className="mr-2" />
          <span>Back to Home</span>
        </Link>
        
        <h1 className="text-4xl text-lightest-slate font-bold mb-12">All Projects</h1>
        
        <p className="text-light-slate mb-16 max-w-2xl text-xl">
          A comprehensive archive of all the data science and analytics projects I've worked on. 
          Each project demonstrates different aspects of my skills in data analysis, visualization, 
          and machine learning.
        </p>
        
        <div 
          className={`space-y-12 transition-all duration-500 ${isMounted ? 'opacity-100' : 'opacity-0'} mb-24`}
        >
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-light-navy/30 p-8 rounded-lg hover:bg-[#1EAEDB]/10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              onMouseEnter={() => setFocusedProjectId(project.id)}
              onMouseLeave={() => setFocusedProjectId(null)}
            >
              <div className="group">
                <div className="flex flex-col justify-between">
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
        
        {/* Contact Section */}
        <section id="contact" className="transition-opacity duration-500 opacity-100 mt-16 mb-12">
          <h2 className="section-heading">Get In Touch</h2>
          
          <div className="text-center max-w-xl mx-auto">
            <p className="text-light-slate mb-8 text-xl">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hello, 
              I'll do my best to get back to you!
            </p>
            
            <div className="space-y-6 text-left mb-10 bg-light-navy/30 p-8 rounded-lg hover:bg-[#1EAEDB]/10 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center">
                <Mail size={22} className="text-[#1EAEDB] mr-4" />
                <a 
                  href="mailto:contact.hemali3@gmail.com" 
                  className="text-white hover:text-[#1EAEDB] transition-colors inline-link text-xl"
                >
                  contact.hemali3@gmail.com
                </a>
              </div>
              
              <div className="flex items-center">
                <Phone size={22} className="text-[#1EAEDB] mr-4" />
                <a 
                  href="tel:+43 6677897979" 
                  className="text-white hover:text-[#1EAEDB] transition-colors inline-link text-xl"
                >
                  +43 6677897979
                </a>
              </div>
              
              <div className="flex items-center">
                <MapPin size={22} className="text-[#1EAEDB] mr-4" />
                <span className="text-white text-xl">Vienna, Austria</span>
              </div>
            </div>
            
            {/* Social media icons */}
            <div className="flex justify-center space-x-6 mb-8">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-light-slate hover:text-[#1EAEDB] transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-light-slate hover:text-[#1EAEDB] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://twitter.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-light-slate hover:text-[#1EAEDB] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a 
                href="https://instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-light-slate hover:text-[#1EAEDB] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://goodreads.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-light-slate hover:text-[#1EAEDB] transition-colors"
                aria-label="Goodreads"
              >
                <Book size={24} />
              </a>
            </div>
            
            <a 
              href="mailto:contact.hemali3@gmail.com" 
              className="button-link inline-flex items-center group text-lg font-semibold"
            >
              <span>Say Hello</span>
              <ExternalLink size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AllProjects;
