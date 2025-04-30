
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
      <h2 className="section-heading">About Me</h2>
      
      <div className="grid grid-cols-1 gap-12">
        <div>
          <div className="text-slate space-y-5 text-xl">
            <p>
              Hello! I'm <span className="highlight-word">Hemali</span>, a data analyst passionate about transforming raw data into 
              actionable insights. My journey in the data world began during my computer science studies 
              when I discovered the power of <span className="highlight-word">data-driven decision making</span>.
            </p>
            <p>
              I specialize in analyzing <span className="highlight-word">complex datasets</span>, creating insightful <span className="highlight-word">visualizations</span>, and 
              developing <span className="highlight-word">machine learning models</span> that help organizations make better strategic decisions. 
              With a strong foundation in statistics and programming, I enjoy solving challenging problems 
              and uncovering hidden patterns in data.
            </p>
            <p>
              When I'm not immersed in data, you might find me exploring new visualization techniques, 
              contributing to open-source projects, or sharing knowledge through blog posts and community forums.
            </p>
            
            <p>Here are a few technologies I've been working with recently:</p>
          </div>
          
          <ul className="skills-list grid grid-cols-2 gap-x-4 gap-y-4 mt-8 mb-8">
            <li className="flex items-center text-slate">
              <span className="text-[#1EAEDB] mr-2">▹</span>
              <span className="text-lg">Python (Pandas, NumPy)</span>
            </li>
            <li className="flex items-center text-slate">
              <span className="text-[#1EAEDB] mr-2">▹</span>
              <span className="text-lg">SQL</span>
            </li>
            <li className="flex items-center text-slate">
              <span className="text-[#1EAEDB] mr-2">▹</span>
              <span className="text-lg">Tableau</span>
            </li>
            <li className="flex items-center text-slate">
              <span className="text-[#1EAEDB] mr-2">▹</span>
              <span className="text-lg">Power BI</span>
            </li>
            <li className="flex items-center text-slate">
              <span className="text-[#1EAEDB] mr-2">▹</span>
              <span className="text-lg">Machine Learning</span>
            </li>
            <li className="flex items-center text-slate">
              <span className="text-[#1EAEDB] mr-2">▹</span>
              <span className="text-lg">R</span>
            </li>
            <li className="flex items-center text-slate">
              <span className="text-[#1EAEDB] mr-2">▹</span>
              <span className="text-lg">Data Visualization</span>
            </li>
            <li className="flex items-center text-slate">
              <span className="text-[#1EAEDB] mr-2">▹</span>
              <span className="text-lg">Statistical Analysis</span>
            </li>
          </ul>
          
          <div className="mt-10 flex flex-wrap gap-6">
            <a 
              href="#contact" 
              className="button-outline inline-flex items-center text-lg"
            >
              Contact Me
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="button-outline inline-flex items-center text-lg"
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
