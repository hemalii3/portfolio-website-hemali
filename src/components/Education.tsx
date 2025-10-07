
import React, { useState, useEffect } from 'react';

const Education = () => {
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
      description: "Currently pursuing advanced studies in computer science with a focus on data analytics and machine learning applications."
    },
    {
      degree: "Bachelor's in Computer Science",
      institution: "Sardar Patel University, India",
      period: "2021 – 2024",
      description: "Completed undergraduate studies with a focus on programming fundamentals, data structures, and database systems."
    }
  ];
  
  return (
    <section id="education" className={`mb-24 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <h2 className="section-heading">Education</h2>
      
      <div className="space-y-12 mt-10">
        {educationData.map((education, index) => (
          <div key={index} className="bg-light-navy/30 p-6 rounded-lg">
            <h3 className="text-xl font-medium text-lightest-slate mb-2">
              {education.degree}{' '}
              <span className="text-white">@ {education.institution}</span>
            </h3>
            
            <p className="font-mono text-sm text-slate mb-4">
              {education.period}
            </p>
            
            <p className="text-slate mb-4">{education.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
