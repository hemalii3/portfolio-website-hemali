
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
        <div className="space-y-4 sm:space-y-5">
          <div 
            style={{ transitionDelay: '100ms' }}
            className={`flex items-center gap-2 sm:gap-4 transition-all duration-300 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'}`}
          >
            <p className="font-mono text-sm sm:text-base">Hi, my name is</p>
          </div>
          
          <h1 
            style={{ transitionDelay: '200ms' }}
            className={`text-3xl sm:text-5xl md:text-7xl font-semibold text-lightest-slate transition-all duration-300 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'}`}
          >
            Hemali Suthar.
          </h1>
          
          <h2 
            style={{ transitionDelay: '300ms' }}
            className={`text-2xl sm:text-4xl md:text-6xl font-semibold text-slate transition-all duration-300 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'}`}
          >
            Data Analyst
          </h2>
          
          <p 
            style={{ transitionDelay: '400ms' }}
            className={`text-base sm:text-lg text-slate max-w-xl mt-4 sm:mt-6 transition-all duration-300 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'}`}
          >
            I create webpages and work with data to make decisions. I know my way to make things work.
          </p>
          
          <div 
            style={{ transitionDelay: '500ms' }}
            className={`mt-6 sm:mt-10 transition-all duration-300 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'}`}
          >
            <a 
              href="#projects" 
              className="button-outline inline-flex items-center text-sm sm:text-base"
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
