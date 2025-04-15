
import React, { useEffect, useRef, useState } from 'react';
import { Github, Mail, MapPin, Phone, Twitter, Instagram, Linkedin, Download } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Hero = () => {
  const [displayName, setDisplayName] = useState('');
  const [displayTitle, setDisplayTitle] = useState('');
  const fullName = "Hello, I'm Hemali Suthar";
  const fullTitle = "Data Analyst | Data Enthusiast";
  const nameRef = useRef(0);
  const titleRef = useRef(0);
  
  useEffect(() => {
    // Animation for name
    if (nameRef.current < fullName.length) {
      const nameTimer = setTimeout(() => {
        setDisplayName(fullName.substring(0, nameRef.current + 1));
        nameRef.current += 1;
      }, 100);
      return () => clearTimeout(nameTimer);
    } else if (titleRef.current < fullTitle.length) {
      // Start title animation after name is complete
      const titleTimer = setTimeout(() => {
        setDisplayTitle(fullTitle.substring(0, titleRef.current + 1));
        titleRef.current += 1;
      }, 100);
      return () => clearTimeout(titleTimer);
    }
  }, [displayName, displayTitle]);
  
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-16 bg-gradient-to-b from-data-darkBg to-data-navy relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-white rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-data-darkAccent rounded-full blur-[150px]"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 min-h-[4rem] md:min-h-[4.5rem] lg:min-h-[5rem]">
              <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent bg-size-200 animate-gradient-shift">{displayName}</span>
              <span className="typing-cursor">|</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-8 text-data-primary min-h-[2rem] md:min-h-[2.5rem]">
              {displayTitle}
              {displayName === fullName && displayTitle !== fullTitle && <span className="typing-cursor">|</span>}
            </h2>
            <p className="text-lg mb-10 text-gray-300 max-w-2xl leading-relaxed">
              A passionate data analyst with a background in computer science, skilled in turning data into actionable insights through storytelling, visualization, and analytical thinking.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center gap-2 bg-data-navy/50 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 hover:border-white/30 transition-all animate-fade-in hover:translate-y-[-3px]" style={{animationDelay: '0.1s'}}>
                <MapPin size={16} className="text-data-primary" />
                <span>Vienna, Austria</span>
              </div>
              <div className="flex items-center gap-2 bg-data-navy/50 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 hover:border-white/30 transition-all animate-fade-in hover:translate-y-[-3px]" style={{animationDelay: '0.2s'}}>
                <Mail size={16} className="text-data-primary" />
                <span>hemalisuthar.work@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 bg-data-navy/50 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 hover:border-white/30 transition-all animate-fade-in hover:translate-y-[-3px]" style={{animationDelay: '0.3s'}}>
                <Phone size={16} className="text-data-primary" />
                <span>+43 6677897979</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-6">
              <a 
                href="#projects" 
                className="btn-primary"
              >
                <span className="relative z-10">View Projects</span>
              </a>
              <a 
                href="#contact" 
                className="btn-primary"
              >
                <span className="relative z-10">Contact Me</span>
              </a>
              <a 
                href="/resume.pdf" 
                download
                className="btn-primary flex items-center gap-2"
              >
                <span className="relative z-10 flex items-center">
                  Resume
                  <Download size={16} className="ml-2 group-hover:translate-y-[2px] transition-transform" />
                </span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <Card className="bg-gradient-to-br from-data-navy/80 to-data-darkBg/80 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl hover:shadow-blue-glow overflow-hidden animate-float">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-data-primary border-b border-white/10 pb-3">Connect With Me</h3>
                <div className="grid grid-cols-2 gap-6">
                  <a 
                    href="https://github.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group flex items-center gap-3 hover:text-data-primary transition-all"
                  >
                    <div className="p-2 rounded-lg bg-data-darkAccent/50 group-hover:bg-data-darkAccent group-hover:scale-110 transition-all">
                      <Github size={18} />
                    </div>
                    <span>GitHub</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group flex items-center gap-3 hover:text-data-primary transition-all"
                  >
                    <div className="p-2 rounded-lg bg-data-darkAccent/50 group-hover:bg-data-darkAccent group-hover:scale-110 transition-all">
                      <Linkedin size={18} />
                    </div>
                    <span>LinkedIn</span>
                  </a>
                  <a 
                    href="https://medium.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group flex items-center gap-3 hover:text-data-primary transition-all"
                  >
                    <div className="p-2 rounded-lg bg-data-darkAccent/50 group-hover:bg-data-darkAccent group-hover:scale-110 transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"></path>
                        <path d="M8 9l3 3 3-3"></path>
                        <path d="M8 15h8"></path>
                      </svg>
                    </div>
                    <span>Medium</span>
                  </a>
                  <a 
                    href="https://twitter.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group flex items-center gap-3 hover:text-data-primary transition-all"
                  >
                    <div className="p-2 rounded-lg bg-data-darkAccent/50 group-hover:bg-data-darkAccent group-hover:scale-110 transition-all">
                      <Twitter size={18} />
                    </div>
                    <span>Twitter</span>
                  </a>
                  <a 
                    href="https://instagram.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group flex items-center gap-3 hover:text-data-primary transition-all"
                  >
                    <div className="p-2 rounded-lg bg-data-darkAccent/50 group-hover:bg-data-darkAccent group-hover:scale-110 transition-all">
                      <Instagram size={18} />
                    </div>
                    <span>Instagram</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
