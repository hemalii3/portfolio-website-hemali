
import React from 'react';
import { Github, Mail, MapPin, Phone, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-16 bg-gradient-to-b from-data-darkBg to-data-navy relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-data-darkAccent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Hello, I'm <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent bg-size-200 animate-gradient-shift">Hemali Suthar</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-8 text-data-primary">
              Data Analyst | Data Enthusiast
            </h2>
            <p className="text-lg mb-10 text-gray-300 max-w-2xl leading-relaxed">
              A passionate data analyst with a background in computer science, skilled in turning data into actionable insights through storytelling, visualization, and analytical thinking.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center gap-2 bg-data-navy/50 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 hover:border-white/30 transition-all">
                <MapPin size={16} className="text-data-primary" />
                <span>Vienna, Austria</span>
              </div>
              <div className="flex items-center gap-2 bg-data-navy/50 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 hover:border-white/30 transition-all">
                <Mail size={16} className="text-data-primary" />
                <span>hemalisuthar.work@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 bg-data-navy/50 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 hover:border-white/30 transition-all">
                <Phone size={16} className="text-data-primary" />
                <span>+43 6677897979</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-6">
              <a 
                href="#projects" 
                className="group relative px-8 py-3 rounded-lg bg-gradient-to-r from-data-darkAccent to-data-navy text-white font-medium shadow-lg hover:shadow-blue-glow hover:translate-y-[-2px] transition-all overflow-hidden"
              >
                <span className="relative z-10">View Projects</span>
                <span className="absolute inset-0 bg-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </a>
              <a 
                href="#contact" 
                className="group relative px-8 py-3 rounded-lg bg-transparent border-2 border-white/20 text-white font-medium hover:border-white/50 hover:bg-white/5 transition-all"
              >
                <span className="relative">Contact Me</span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <Card className="bg-gradient-to-br from-data-navy to-data-darkBg border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl hover:shadow-blue-glow overflow-hidden">
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
            
            {/* Quick stats or highlights */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gradient-to-br from-data-navy to-data-darkBg border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:translate-y-[-2px]">
                <CardContent className="p-4 text-center">
                  <h4 className="text-lg font-bold text-white">9+</h4>
                  <p className="text-sm text-white/70">Projects Completed</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-data-navy to-data-darkBg border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:translate-y-[-2px]">
                <CardContent className="p-4 text-center">
                  <h4 className="text-lg font-bold text-white">4+</h4>
                  <p className="text-sm text-white/70">Years Experience</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
