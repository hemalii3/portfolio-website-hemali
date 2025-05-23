
import React, { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';

const Experience = () => {
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
      <h2 className="section-heading">Where I've Worked</h2>
      
      <div className="space-y-12 mt-10">
        {experienceData.map((experience, index) => (
          <div key={index} className="bg-light-navy/30 p-6 rounded-lg">
            <h3 className="text-xl font-medium text-lightest-slate mb-2">
              {experience.title}{' '}
              <span className="text-white">
                @ <a href={experience.url} className="inline-link" target="_blank" rel="noopener noreferrer">
                    {experience.company}
                    <ExternalLink size={14} className="inline ml-1" />
                  </a>
              </span>
            </h3>
            
            <p className="font-mono text-sm text-slate mb-4">
              {experience.period}
            </p>
            
            <ul className="space-y-2 mb-4">
              {experience.description.map((bullet, i) => (
                <li key={i} className="flex">
                  <span className="text-white mr-2">▹</span>
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
    </section>
  );
};

export default Experience;
