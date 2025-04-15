
import React, { useEffect, useState } from 'react';
import { ChevronRight, Download } from 'lucide-react';

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-5">
          <p 
            style={{ transitionDelay: '100ms' }}
            className={`font-mono text-[#64ffda] mb-6 transition-all duration-300 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'}`}
          >
            Hi, my name is
          </p>
          
          <h1 
            style={{ transitionDelay: '200ms' }}
            className={`text-5xl md:text-7xl font-semibold text-[#ccd6f6] leading-tight transition-all duration-300 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'}`}
          >
            Hemali Suthar.
          </h1>
          
          <h2 
            style={{ transitionDelay: '300ms' }}
            className={`text-4xl md:text-6xl font-semibold text-[#8892b0] leading-tight mt-2 transition-all duration-300 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'}`}
          >
            I turn data into insights.
          </h2>
          
          <p 
            style={{ transitionDelay: '400ms' }}
            className={`text-lg text-[#8892b0] max-w-xl mt-6 transition-all duration-300 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'}`}
          >
            I'm a data analyst with a background in computer science, specialized in transforming raw data into actionable business strategies. 
            Currently, I focus on building insightful dashboards and data visualizations that tell compelling stories.
          </p>
          
          <div 
            style={{ transitionDelay: '500ms' }}
            className={`mt-10 transition-all duration-300 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'}`}
          >
            <a 
              href="#projects" 
              className="button-outline inline-flex items-center"
            >
              Check out my projects <ChevronRight size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Social links vertical */}
      <div 
        className={`fixed left-5 bottom-0 hidden md:block transition-all duration-300 ${isMounted ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '1000ms' }}
      >
        <ul className="flex flex-col items-center space-y-6 after:content-[''] after:block after:w-px after:h-24 after:bg-[#a8b2d1] after:mx-auto after:mt-6">
          <li>
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#a8b2d1] hover:text-[#64ffda] hover:transform hover:translate-y-[-3px] transition-all duration-300"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </li>
          <li>
            <a 
              href="https://linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#a8b2d1] hover:text-[#64ffda] hover:transform hover:translate-y-[-3px] transition-all duration-300"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </li>
          <li>
            <a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#a8b2d1] hover:text-[#64ffda] hover:transform hover:translate-y-[-3px] transition-all duration-300"
              aria-label="Twitter"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
          </li>
          <li>
            <a 
              href="mailto:hemalisuthar.work@gmail.com" 
              className="text-[#a8b2d1] hover:text-[#64ffda] hover:transform hover:translate-y-[-3px] transition-all duration-300"
              aria-label="Email"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </li>
        </ul>
      </div>
      
      {/* Email link vertical */}
      <div 
        className={`fixed right-5 bottom-0 hidden md:block transition-all duration-300 ${isMounted ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '1100ms' }}
      >
        <div className="flex flex-col items-center space-y-6 after:content-[''] after:block after:w-px after:h-24 after:bg-[#a8b2d1] after:mx-auto after:mt-6">
          <a 
            href="mailto:hemalisuthar.work@gmail.com" 
            className="font-mono text-[#a8b2d1] hover:text-[#64ffda] hover:transform hover:translate-y-[-3px] transition-all duration-300 vertical-text"
            style={{ writingMode: 'vertical-rl' }}
          >
            hemalisuthar.work@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
