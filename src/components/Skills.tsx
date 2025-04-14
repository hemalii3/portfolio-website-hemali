
import React from 'react';
import { BarChart3, Code, Database, LineChart, PieChart } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Analysis",
      icon: <BarChart3 size={24} className="text-data-secondary" />,
      skills: ["Pandas", "NumPy", "Excel"]
    },
    {
      title: "Data Visualization",
      icon: <PieChart size={24} className="text-data-secondary" />,
      skills: ["Matplotlib", "Seaborn", "Power BI", "Tableau"]
    },
    {
      title: "Programming",
      icon: <Code size={24} className="text-data-secondary" />,
      skills: ["Python", "SQL", "JavaScript"]
    },
    {
      title: "Machine Learning",
      icon: <LineChart size={24} className="text-data-secondary" />,
      skills: ["Scikit-learn", "Statistical Analysis"]
    },
    {
      title: "Tools & Others",
      icon: <Database size={24} className="text-data-secondary" />,
      skills: ["Jupyter Notebook", "Git", "Google Sheets"]
    },
    {
      title: "Soft Skills",
      icon: <Database size={24} className="text-data-secondary" />,
      skills: ["Critical Thinking", "Communication", "Problem Solving"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-data-darkAccent/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="text-data-accent">Technical Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-data-darkCard rounded-lg p-6 shadow-lg animate-fade-in"
              style={{animationDelay: `${0.1 * index}s`}}
            >
              <div className="flex items-center mb-6">
                <div className="mr-3">{category.icon}</div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1.5 bg-data-darkAccent rounded-md text-sm border border-data-secondary/30"
                  >
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

export default Skills;
