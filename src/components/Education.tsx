
import React, { useState, useEffect } from 'react';

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
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('education');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  
  const educationData = [
    {
      degree: "Master of Science in Computer Science",
      institution: "University of Vienna",
      period: "February 2025 – Present",
      description: "Currently pursuing advanced studies in computer science with a focus on data analytics and machine learning applications.",
      courses: ["Advanced Data Science", "Statistical Machine Learning", "Big Data Analytics", "Natural Language Processing"]
    },
    {
      degree: "Bachelor's in Computer Science",
      institution: "Sardar Patel University, India",
      period: "2021 – 2024",
      description: "Completed undergraduate studies with a focus on programming fundamentals, data structures, and database systems.",
      courses: ["Data Structures & Algorithms", "Database Management Systems", "Object-Oriented Programming", "Computer Networks"]
    }
  ];
  
  return (
    <section id="education" className={`mb-24 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <h2 className="numbered-heading">Education</h2>
      
      <div className="flex flex-col md:flex-row mt-10">
        {/* Tab Buttons */}
        <div className="flex md:flex-col overflow-x-auto mb-6 md:mb-0 md:mr-8 md:min-w-[140px]">
          {educationData.map((item, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-4 py-3 text-left font-mono text-sm whitespace-nowrap border-b-2 md:border-b-0 md:border-l-2 transition-all ${
                activeTab === i 
                  ? 'text-green border-green bg-light-navy md:bg-light-navy' 
                  : 'text-slate border-lightest-navy hover:text-green hover:bg-light-navy/50'
              }`}
            >
              {item.institution.split(',')[0]}
            </button>
          ))}
        </div>
        
        {/* Tab Content */}
        <div className="flex-1">
          {educationData.map((education, idx) => (
            <div
              key={idx}
              className={`space-y-4 transition-all duration-300 ${
                activeTab === idx ? 'block opacity-100' : 'hidden opacity-0'
              }`}
            >
              <h3 className="text-xl font-medium text-lightest-slate">
                {education.degree}{' '}
                <span className="text-green">@ {education.institution}</span>
              </h3>
              
              <p className="font-mono text-sm text-slate">
                {education.period}
              </p>
              
              <p className="text-slate">{education.description}</p>
              
              <div className="mt-4">
                <h4 className="text-lightest-slate mb-2 font-medium">Notable Courses</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {education.courses.map((course, i) => (
                    <li key={i} className="flex">
                      <span className="text-green mr-2">▹</span>
                      <span className="text-slate">{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
