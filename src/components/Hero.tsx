
import React from 'react';
import { Github, Mail, MapPin, Phone, Twitter, Instagram } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-16 bg-gradient-to-b from-data-darkBg to-data-darkCard">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4">
              Hello, I'm <span className="text-gradient">Hemali Suthar</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-6 text-data-accent">
              Data Analyst | Data Enthusiast
            </h2>
            <p className="text-lg mb-8 text-gray-300 max-w-2xl">
              A passionate data analyst with a background in computer science, skilled in turning data into actionable insights through storytelling, visualization, and analytical thinking.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-data-highlight" />
                <span>Vienna, Austria</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-data-highlight" />
                <span>hemalisuthar.work@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-data-highlight" />
                <span>+43 6677897979</span>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="#projects" className="border border-data-accent inline-block">
                <span className="px-6 py-2.5 rounded-lg bg-data-darkBg inline-block hover:bg-data-darkCard transition-colors">
                  View Projects
                </span>
              </a>
              <a href="#contact" className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-data-accent/20 to-data-highlight/20 hover:from-data-accent/30 hover:to-data-highlight/30 transition-colors">
                Contact Me
              </a>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="border border-data-accent/30 rounded-xl overflow-hidden backdrop-blur-sm bg-black/30">
              <div className="p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-data-accent">Social Profiles</h3>
                <div className="grid grid-cols-2 gap-3">
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-data-highlight transition-colors">
                    <Github size={18} />
                    <span>GitHub</span>
                  </a>
                  <a href="https://medium.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-data-highlight transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"></path>
                      <path d="M8 9l3 3 3-3"></path>
                      <path d="M8 15h8"></path>
                    </svg>
                    <span>Medium</span>
                  </a>
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-data-highlight transition-colors">
                    <Twitter size={18} />
                    <span>Twitter (X)</span>
                  </a>
                  <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-data-highlight transition-colors">
                    <Instagram size={18} />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
