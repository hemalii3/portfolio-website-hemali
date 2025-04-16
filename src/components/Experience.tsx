
import React, { useState, useEffect } from 'react';

const Experience = () => {
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
    
    const section = document.getElementById('experience');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const experienceData = [
    {
      title: "Java Developer Intern",
      company: "Code Alpha",
      period: "July 2024 – September 2024",
      url: "https://example.com",
      description: [
        "Contributed to backend development of internal tools and optimized code performance",
        "Worked with a team of developers to implement new features and fix bugs in the company's products",
        "Developed RESTful APIs using Spring Boot and integrated with frontend applications",
        "Participated in code reviews and improved system performance by 25%"
      ],
      skills: ["Java", "Spring Boot", "REST APIs", "Git", "Team Collaboration"]
    },
    {
      title: "Web Development Intern",
      company: "TechSolutions",
      period: "January 2024 – May 2024",
      url: "https://example.com",
      description: [
        "Redesigned company website with React and SCSS, improved UX and page speed",
        "Worked closely with the design team to implement responsive layouts and interactive elements",
        "Increased site performance metrics by 40% through code optimization and modern frontend practices",
        "Built reusable component library that reduced development time for future projects"
      ],
      skills: ["React", "SCSS", "JavaScript", "Responsive Design", "UX/UI"]
    }
  ];
  
  return (
    <section id="experience" className={`mb-24 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <h2 className="numbered-heading">Where I've Worked</h2>
      
      <div className="flex flex-col md:flex-row mt-10">
        {/* Tab Buttons */}
        <div className="flex md:flex-col overflow-x-auto mb-6 md:mb-0 md:mr-8 md:min-w-[140px]">
          {experienceData.map((item, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-4 py-3 text-left font-mono text-sm whitespace-nowrap border-b-2 md:border-b-0 md:border-l-2 transition-all ${
                activeTab === i 
                  ? 'text-green border-green bg-light-navy md:bg-light-navy' 
                  : 'text-slate border-lightest-navy hover:text-green hover:bg-light-navy/50'
              }`}
            >
              {item.company}
            </button>
          ))}
        </div>
        
        {/* Tab Content */}
        <div className="flex-1">
          {experienceData.map((experience, idx) => (
            <div
              key={idx}
              className={`space-y-4 transition-all duration-300 ${
                activeTab === idx ? 'block opacity-100' : 'hidden opacity-0'
              }`}
            >
              <h3 className="text-xl font-medium text-lightest-slate">
                {experience.title}{' '}
                <span className="text-green">
                  @ <a href={experience.url} className="inline-link" target="_blank" rel="noopener noreferrer">{experience.company}</a>
                </span>
              </h3>
              
              <p className="font-mono text-sm text-slate">
                {experience.period}
              </p>
              
              <ul className="space-y-2">
                {experience.description.map((bullet, i) => (
                  <li key={i} className="flex">
                    <span className="text-green mr-2">▹</span>
                    <span className="text-slate">{bullet}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {experience.skills.map((skill, i) => (
                  <span key={i} className="text-xs px-3 py-1 rounded font-mono bg-light-navy text-lightest-slate">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
