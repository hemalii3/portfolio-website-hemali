
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
          <div className="text-light-slate space-y-5 text-xl">
            <p>
              Hello! I'm <span className="highlight-word">Hemali</span>, web developer and aspiring data analyst passionate about making <span className="highlight-word">web pages feel alive</span> and transforming raw data into <span className="highlight-word">actionable insights</span>. My journey in the data world began during my computer science studies when I discovered <span className="highlight-word">art of web pages</span>. I enjoy working with data as well.
            </p>
            <p>
              I specialize in developing <span className="highlight-word">web pages</span>, <span className="highlight-word">APIs designing</span>, and visualising and working with <span className="highlight-word">complex data</span>. I work with <span className="highlight-word">SQL</span>, <span className="highlight-word">R</span>, <span className="highlight-word">Python</span> and <span className="highlight-word">Power BI</span> when putting my skills in actual work.
            </p>
            <p>
              When I'm not immersed in data, you might find me reading murder mystery or boring articles, listening songs or exploring completely new topic of IT.
            </p>
            
            <p>Here are a few technologies I've been working with recently:</p>
          </div>
          
          <ul className="skills-list grid grid-cols-2 gap-x-4 gap-y-4 mt-8 mb-8">
            <li className="flex items-center text-light-slate">
              <span className="text-[#1EAEDB] mr-2">▹</span>
              <span className="text-lg">Python</span>
            </li>
            <li className="flex items-center text-light-slate">
              <span className="text-[#1EAEDB] mr-2">▹</span>
              <span className="text-lg">R</span>
            </li>
            <li className="flex items-center text-light-slate">
              <span className="text-[#1EAEDB] mr-2">▹</span>
              <span className="text-lg">SQL</span>
            </li>
            <li className="flex items-center text-light-slate">
              <span className="text-[#1EAEDB] mr-2">▹</span>
              <span className="text-lg">Power BI</span>
            </li>
            <li className="flex items-center text-light-slate">
              <span className="text-[#1EAEDB] mr-2">▹</span>
              <span className="text-lg">React JS</span>
            </li>
            <li className="flex items-center text-light-slate">
              <span className="text-[#1EAEDB] mr-2">▹</span>
              <span className="text-lg">PHP</span>
            </li>
            <li className="flex items-center text-light-slate">
              <span className="text-[#1EAEDB] mr-2">▹</span>
              <span className="text-lg">Vue JS</span>
            </li>
            <li className="flex items-center text-light-slate">
              <span className="text-[#1EAEDB] mr-2">▹</span>
              <span className="text-lg">Next JS</span>
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
