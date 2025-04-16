
import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <section id="hero" className="min-h-[60vh] flex flex-col justify-center">
      <div>
        <div className="space-y-5">
          <p 
            style={{ transitionDelay: '100ms' }}
            className={`font-mono text-green transition-all duration-300 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'}`}
          >
            Hi, my name is
          </p>
          
          <h1 
            style={{ transitionDelay: '200ms' }}
            className={`text-5xl md:text-7xl font-semibold text-lightest-slate transition-all duration-300 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'}`}
          >
            Hemali Suthar.
          </h1>
          
          <h2 
            style={{ transitionDelay: '300ms' }}
            className={`text-4xl md:text-6xl font-semibold text-slate transition-all duration-300 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'}`}
          >
            Data Analyst
          </h2>
          
          <p 
            style={{ transitionDelay: '400ms' }}
            className={`text-lg text-slate max-w-xl mt-6 transition-all duration-300 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'}`}
          >
            I see, play, analyze, and visualize data to make the right decisions. 
            Currently focused on building insightful dashboards and extracting meaningful insights
            that drive business value.
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
    </section>
  );
};

export default Hero;
