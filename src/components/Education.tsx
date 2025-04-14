
import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-data-darkCard to-data-darkBg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center relative">
          <span className="text-gradient">Education</span>
        </h2>
        
        <div className="space-y-12">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 h-full w-0.5 bg-data-primary/30 transform md:-translate-x-1/2"></div>
            
            {/* First education item */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="md:text-right md:pr-12 animate-fade-in pink-glass p-8 rounded-2xl" style={{animationDelay: '0.1s'}}>
                <h3 className="text-2xl font-bold mb-2 text-data-primary">Master of Science in Computer Science</h3>
                <h4 className="text-xl mb-4 text-data-highlight">University of Vienna</h4>
                <div className="flex items-center mb-4 md:justify-end">
                  <Calendar size={16} className="mr-2 text-data-primary" />
                  <span>February 2025 – Present</span>
                </div>
                <p className="text-gray-300">
                  Currently pursuing advanced studies in computer science with a focus on data analytics and machine learning applications.
                </p>
              </div>
              
              <div className="relative md:pl-12 animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="hidden md:block absolute -left-3 top-0 transform -translate-y-1/3 bg-gradient-to-r from-data-primary to-data-highlight p-3 rounded-full">
                  <GraduationCap size={24} className="text-data-darkBg" />
                </div>
              </div>
            </div>
            
            {/* Second education item */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:hidden animate-fade-in pink-glass p-8 rounded-2xl" style={{animationDelay: '0.3s'}}>
                <h3 className="text-2xl font-bold mb-2 text-data-primary">Bachelor's in Computer Science</h3>
                <h4 className="text-xl mb-4 text-data-highlight">Sardar Patel University, India</h4>
                <div className="flex items-center mb-4">
                  <Calendar size={16} className="mr-2 text-data-primary" />
                  <span>2021 – 2024</span>
                </div>
                <p className="text-gray-300">
                  Completed undergraduate studies with a focus on programming fundamentals, data structures, and database systems.
                </p>
              </div>
              
              <div className="relative md:pr-12 order-2 md:order-1 animate-fade-in" style={{animationDelay: '0.4s'}}>
                <div className="hidden md:block absolute -right-3 top-0 transform -translate-y-1/3 bg-gradient-to-r from-data-highlight to-data-primary p-3 rounded-full">
                  <GraduationCap size={24} className="text-data-darkBg" />
                </div>
              </div>
              
              <div className="hidden md:block md:text-left md:pl-12 order-1 md:order-2 animate-fade-in pink-glass p-8 rounded-2xl" style={{animationDelay: '0.3s'}}>
                <h3 className="text-2xl font-bold mb-2 text-data-primary">Bachelor's in Computer Science</h3>
                <h4 className="text-xl mb-4 text-data-highlight">Sardar Patel University, India</h4>
                <div className="flex items-center mb-4">
                  <Calendar size={16} className="mr-2 text-data-primary" />
                  <span>2021 – 2024</span>
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
