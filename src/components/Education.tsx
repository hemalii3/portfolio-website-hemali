
import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-data-darkBg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center relative">
          <span className="gradient-text">Education</span>
        </h2>
        
        <div className="space-y-12">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 h-full w-0.5 bg-data-darkAccent transform md:-translate-x-1/2"></div>
            
            {/* First education item */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="md:text-right md:pr-12 animate-fade-in" style={{animationDelay: '0.1s'}}>
                <h3 className="text-2xl font-bold mb-2">Master of Science in Computer Science</h3>
                <h4 className="text-xl mb-4 text-data-teal">University of Vienna</h4>
                <div className="flex items-center mb-4 md:justify-end">
                  <Calendar size={16} className="mr-2" />
                  <span>February 2025 – Present</span>
                </div>
                <p className="text-gray-300">
                  Currently pursuing advanced studies in computer science with a focus on data analytics and machine learning applications.
                </p>
              </div>
              
              <div className="relative md:pl-12 animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="hidden md:block absolute -left-3 top-0 transform -translate-y-1/3 bg-gradient-to-r from-data-blue to-data-purple p-3 rounded-full">
                  <GraduationCap size={24} className="text-white" />
                </div>
                <div className="p-6 rounded-lg gradient-border bg-data-darkCard shadow-lg h-full flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-4">Key Focus Areas</h3>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="bg-data-darkAccent py-2 px-3 rounded">Data Mining</div>
                      <div className="bg-data-darkAccent py-2 px-3 rounded">Machine Learning</div>
                      <div className="bg-data-darkAccent py-2 px-3 rounded">Data Visualization</div>
                      <div className="bg-data-darkAccent py-2 px-3 rounded">Statistical Analysis</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Second education item */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:hidden animate-fade-in" style={{animationDelay: '0.3s'}}>
                <h3 className="text-2xl font-bold mb-2">Bachelor's in Computer Science</h3>
                <h4 className="text-xl mb-4 text-data-teal">[College Name]</h4>
                <div className="flex items-center mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span>Year – Year</span>
                </div>
                <p className="text-gray-300">
                  Completed undergraduate studies with a focus on programming fundamentals, data structures, and database systems.
                </p>
              </div>
              
              <div className="relative md:pr-12 order-2 md:order-1 animate-fade-in" style={{animationDelay: '0.4s'}}>
                <div className="relative md:ml-auto p-6 rounded-lg gradient-border bg-data-darkCard shadow-lg h-full flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-4">Core Competencies</h3>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="bg-data-darkAccent py-2 px-3 rounded">Algorithms</div>
                      <div className="bg-data-darkAccent py-2 px-3 rounded">Database Design</div>
                      <div className="bg-data-darkAccent py-2 px-3 rounded">Python Programming</div>
                      <div className="bg-data-darkAccent py-2 px-3 rounded">Web Development</div>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block absolute -right-3 top-0 transform -translate-y-1/3 bg-gradient-to-r from-data-blue to-data-purple p-3 rounded-full">
                  <GraduationCap size={24} className="text-white" />
                </div>
              </div>
              
              <div className="hidden md:block md:text-left md:pl-12 order-1 md:order-2 animate-fade-in" style={{animationDelay: '0.3s'}}>
                <h3 className="text-2xl font-bold mb-2">Bachelor's in Computer Science</h3>
                <h4 className="text-xl mb-4 text-data-teal">[College Name]</h4>
                <div className="flex items-center mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span>Year – Year</span>
                </div>
                <p className="text-gray-300">
                  Completed undergraduate studies with a focus on programming fundamentals, data structures, and database systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
