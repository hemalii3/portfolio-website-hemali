
import React from 'react';
import { Github, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4">
              Hello, I'm <span className="text-data-accent">Hemali Suthar</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-6 text-data-highlight">
              Data Analyst | Data Enthusiast
            </h2>
            <p className="text-lg mb-8 text-gray-300 max-w-2xl">
              A passionate data analyst with a background in computer science, skilled in turning data into actionable insights through storytelling, visualization, and analytical thinking.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-data-secondary" />
                <span>Vienna, Austria</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-data-secondary" />
                <span>Email@example.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-data-secondary" />
                <span>+43 XXXX XXXXXXX</span>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="#projects" className="border border-data-secondary inline-block">
                <span className="px-6 py-2.5 rounded-lg bg-data-darkBg inline-block hover:bg-data-darkAccent transition-colors">
                  View Projects
                </span>
              </a>
              <a href="#contact" className="px-6 py-2.5 rounded-lg bg-data-darkAccent hover:bg-data-secondary/20 transition-colors">
                Contact Me
              </a>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="border border-data-secondary rounded-xl overflow-hidden">
              <div className="bg-data-darkAccent p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Social Profiles</h3>
                <div className="grid grid-cols-2 gap-3">
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-data-accent transition-colors">
                    <Github size={18} />
                    <span>GitHub</span>
                  </a>
                  <a href="https://medium.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-data-accent transition-colors">
                    <ExternalLink size={18} />
                    <span>Medium</span>
                  </a>
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-data-accent transition-colors">
                    <ExternalLink size={18} />
                    <span>Twitter (X)</span>
                  </a>
                  <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-data-accent transition-colors">
                    <ExternalLink size={18} />
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
