
import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-data-darkAccent/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="gradient-text">Internship Experience</span>
        </h2>
        
        <div className="relative space-y-12">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 h-full w-px bg-data-blue/30"></div>
          
          {/* Java Developer Intern */}
          <div className="relative pl-16 animate-fade-in">
            <div className="absolute left-0 top-1 p-3 rounded-full bg-gradient-to-r from-data-blue to-data-purple">
              <Briefcase size={20} className="text-white" />
            </div>
            <div className="bg-data-darkCard p-6 rounded-lg shadow-lg">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Java Developer Intern</h3>
                  <h4 className="text-data-teal text-lg">Code Alpha</h4>
                </div>
                <div className="flex items-center text-sm text-gray-300 mt-2 md:mt-0">
                  <Calendar size={16} className="mr-2" />
                  <span>July 2024 – September 2024</span>
                </div>
              </div>
              <p className="text-gray-300">
                Contributed to backend development of internal tools and optimized code performance. Worked with a team of developers to implement new features and fix bugs in the company's products.
              </p>
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
                <span className="text-xs bg-data-darkAccent rounded-full px-3 py-1 text-center">Java</span>
                <span className="text-xs bg-data-darkAccent rounded-full px-3 py-1 text-center">Spring Boot</span>
                <span className="text-xs bg-data-darkAccent rounded-full px-3 py-1 text-center">REST APIs</span>
                <span className="text-xs bg-data-darkAccent rounded-full px-3 py-1 text-center">Git</span>
                <span className="text-xs bg-data-darkAccent rounded-full px-3 py-1 text-center">Team Collaboration</span>
              </div>
            </div>
          </div>
          
          {/* Web Development Intern */}
          <div className="relative pl-16 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="absolute left-0 top-1 p-3 rounded-full bg-gradient-to-r from-data-blue to-data-purple">
              <Briefcase size={20} className="text-white" />
            </div>
            <div className="bg-data-darkCard p-6 rounded-lg shadow-lg">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Web Development Intern</h3>
                  <h4 className="text-data-teal text-lg">[Company Name]</h4>
                </div>
                <div className="flex items-center text-sm text-gray-300 mt-2 md:mt-0">
                  <Calendar size={16} className="mr-2" />
                  <span>Dates</span>
                </div>
              </div>
              <p className="text-gray-300">
                Redesigned company website with React and SCSS, improved UX and page speed. Worked closely with the design team to implement responsive layouts and interactive elements that enhanced user engagement.
              </p>
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
                <span className="text-xs bg-data-darkAccent rounded-full px-3 py-1 text-center">React</span>
                <span className="text-xs bg-data-darkAccent rounded-full px-3 py-1 text-center">SCSS</span>
                <span className="text-xs bg-data-darkAccent rounded-full px-3 py-1 text-center">JavaScript</span>
                <span className="text-xs bg-data-darkAccent rounded-full px-3 py-1 text-center">Responsive Design</span>
                <span className="text-xs bg-data-darkAccent rounded-full px-3 py-1 text-center">UX/UI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
