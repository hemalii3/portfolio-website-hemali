
import React, { useEffect, useState } from 'react';

const About = () => {
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
    
    const section = document.getElementById('about');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  
  return (
    <section id="about" className={`mb-24 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <h2 className="numbered-heading">About Me</h2>
      
      <div className="grid grid-cols-1 gap-12">
        <div>
          <div className="text-slate space-y-4">
            <p>
              Hello! I'm Hemali, a data analyst passionate about transforming raw data into 
              actionable insights. My journey in the data world began during my computer science studies 
              when I discovered the power of data-driven decision making.
            </p>
            <p>
              I specialize in analyzing complex datasets, creating insightful visualizations, and 
              developing machine learning models that help organizations make better strategic decisions. 
              With a strong foundation in statistics and programming, I enjoy solving challenging problems 
              and uncovering hidden patterns in data.
            </p>
            <p>
              When I'm not immersed in data, you might find me exploring new visualization techniques, 
              contributing to open-source projects, or sharing knowledge through blog posts and community forums.
            </p>
            
            <p>Here are a few technologies I've been working with recently:</p>
          </div>
          
          <ul className="skills-list grid grid-cols-2 gap-x-2 gap-y-3 mt-5">
            <li className="flex items-center text-slate">
              <span className="text-green mr-2">▹</span>Python (Pandas, NumPy)
            </li>
            <li className="flex items-center text-slate">
              <span className="text-green mr-2">▹</span>SQL
            </li>
            <li className="flex items-center text-slate">
              <span className="text-green mr-2">▹</span>Tableau
            </li>
            <li className="flex items-center text-slate">
              <span className="text-green mr-2">▹</span>Power BI
            </li>
            <li className="flex items-center text-slate">
              <span className="text-green mr-2">▹</span>Machine Learning
            </li>
            <li className="flex items-center text-slate">
              <span className="text-green mr-2">▹</span>R
            </li>
            <li className="flex items-center text-slate">
              <span className="text-green mr-2">▹</span>Data Visualization
            </li>
            <li className="flex items-center text-slate">
              <span className="text-green mr-2">▹</span>Statistical Analysis
            </li>
          </ul>
          
          <div className="mt-10 flex space-x-6">
            <a 
              href="#contact" 
              className="button-outline inline-flex items-center"
            >
              Contact Me
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="button-outline inline-flex items-center"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
