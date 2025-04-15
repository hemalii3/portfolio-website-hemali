
import React, { useState, useEffect } from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    const section = document.getElementById('education');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  
  const educationData = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'University of Vienna',
      period: 'February 2025 – Present',
      description: 'Currently pursuing advanced studies in computer science with a focus on data analytics and machine learning applications.',
      courses: ['Advanced Data Science', 'Statistical Machine Learning', 'Big Data Analytics', 'Natural Language Processing']
    },
    {
      degree: 'Bachelor's in Computer Science',
      institution: 'Sardar Patel University, India',
      period: '2021 – 2024',
      description: 'Completed undergraduate studies with a focus on programming fundamentals, data structures, and database systems.',
      courses: ['Data Structures & Algorithms', 'Database Management Systems', 'Object-Oriented Programming', 'Computer Networks']
    }
  ];
  
  return (
    <section id="education" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`numbered-heading mb-16 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Education
        </h2>
        
        <div className={`flex flex-col md:flex-row transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Tab Buttons */}
          <div className="flex md:flex-col overflow-x-auto mb-6 md:mb-0 md:mr-8 md:min-w-[180px]">
            {educationData.map((item, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-4 py-3 text-left font-mono text-sm whitespace-nowrap border-b-2 md:border-b-0 md:border-l-2 transition-all ${
                  activeTab === i 
                    ? 'text-[#64ffda] border-[#64ffda] bg-[#112240] md:bg-[#112240]' 
                    : 'text-[#8892b0] border-[#233554] hover:text-[#64ffda] hover:bg-[#112240]/50'
                }`}
              >
                {item.institution.split(',')[0]}
              </button>
            ))}
          </div>
          
          {/* Tab Content */}
          <div className="flex-1 bg-[#112240]/30 p-6 rounded min-h-[320px]">
            {educationData.map((education, idx) => (
              <div
                key={idx}
                className={`space-y-4 transition-all duration-300 ${
                  activeTab === idx ? 'block opacity-100' : 'hidden opacity-0'
                }`}
              >
                <h3 className="text-xl font-medium text-[#ccd6f6]">
                  {education.degree}{' '}
                  <span className="text-[#64ffda]">@ {education.institution}</span>
                </h3>
                
                <p className="font-mono text-sm text-[#a8b2d1] flex items-center">
                  <Calendar size={14} className="mr-2 text-[#64ffda]" />
                  {education.period}
                </p>
                
                <p className="text-[#8892b0]">{education.description}</p>
                
                <ul className="mt-4 space-y-2">
                  {education.courses.map((course, i) => (
                    <li key={i} className="flex">
                      <span className="text-[#64ffda] mr-2">▹</span>
                      <span>{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
