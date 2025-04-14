
import React from 'react';
import { BarChart3, Code, Database, LineChart, PieChart, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Analysis",
      icon: <BarChart3 size={24} className="text-white" />,
      skills: ["Pandas", "NumPy", "Excel"]
    },
    {
      title: "Data Visualization",
      icon: <PieChart size={24} className="text-white" />,
      skills: ["Matplotlib", "Seaborn", "Power BI", "Tableau"]
    },
    {
      title: "Programming",
      icon: <Code size={24} className="text-white" />,
      skills: ["Python", "SQL", "JavaScript"]
    },
    {
      title: "Machine Learning",
      icon: <LineChart size={24} className="text-white" />,
      skills: ["Scikit-learn", "Statistical Analysis"]
    },
    {
      title: "Tools & Others",
      icon: <Database size={24} className="text-white" />,
      skills: ["Jupyter Notebook", "Git", "Google Sheets"]
    },
    {
      title: "Soft Skills",
      icon: <Users size={24} className="text-white" />,
      skills: ["Critical Thinking", "Communication", "Problem Solving"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-data-darkBg to-data-darkCard">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="text-white">Technical Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-black/50 backdrop-blur-md border border-white/10 rounded-xl p-8 shadow-xl hover:shadow-white/5 transition-all duration-300 animate-fade-in"
              style={{animationDelay: `${0.1 * index}s`}}
            >
              <div className="flex items-center mb-6">
                <div className="mr-3 bg-gradient-to-br from-white/20 to-white/5 p-3 rounded-full">{category.icon}</div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-4 py-2 bg-white/5 rounded-full text-sm border border-white/20 hover:border-white/40 transition-colors"
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
