
import React from 'react';
import { BarChart3, Code, Database, LineChart, PieChart, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Analysis",
      icon: <BarChart3 size={24} className="text-data-highlight" />,
      skills: ["Pandas", "NumPy", "Excel"]
    },
    {
      title: "Data Visualization",
      icon: <PieChart size={24} className="text-data-highlight" />,
      skills: ["Matplotlib", "Seaborn", "Power BI", "Tableau"]
    },
    {
      title: "Programming",
      icon: <Code size={24} className="text-data-highlight" />,
      skills: ["Python", "SQL", "JavaScript"]
    },
    {
      title: "Machine Learning",
      icon: <LineChart size={24} className="text-data-highlight" />,
      skills: ["Scikit-learn", "Statistical Analysis"]
    },
    {
      title: "Tools & Others",
      icon: <Database size={24} className="text-data-highlight" />,
      skills: ["Jupyter Notebook", "Git", "Google Sheets"]
    },
    {
      title: "Soft Skills",
      icon: <Users size={24} className="text-data-highlight" />,
      skills: ["Critical Thinking", "Communication", "Problem Solving"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-data-darkBg to-data-darkCard">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="text-gradient">Technical Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="backdrop-blur-sm bg-black/20 border border-data-accent/20 rounded-lg p-6 shadow-lg animate-fade-in hover:shadow-data-accent/5 hover:border-data-highlight/30 transition-all duration-300"
              style={{animationDelay: `${0.1 * index}s`}}
            >
              <div className="flex items-center mb-6">
                <div className="mr-3 bg-gradient-to-br from-data-accent/20 to-data-highlight/20 p-2 rounded-md">{category.icon}</div>
                <h3 className="text-xl font-bold text-data-accent">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1.5 bg-data-darkBg/60 rounded-md text-sm border border-data-accent/20 hover:border-data-highlight/50 transition-colors"
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
