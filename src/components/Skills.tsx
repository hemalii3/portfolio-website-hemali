
import React from 'react';
import { BarChart3, Code, Database, LineChart, PieChart } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Analysis",
      icon: <BarChart3 size={24} className="text-data-blue" />,
      skills: [
        { name: "Pandas", level: 90 },
        { name: "NumPy", level: 85 },
        { name: "Excel", level: 90 }
      ]
    },
    {
      title: "Data Visualization",
      icon: <PieChart size={24} className="text-data-purple" />,
      skills: [
        { name: "Matplotlib", level: 85 },
        { name: "Seaborn", level: 80 },
        { name: "Power BI", level: 75 },
        { name: "Tableau", level: 70 }
      ]
    },
    {
      title: "Programming",
      icon: <Code size={24} className="text-data-pink" />,
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 85 },
        { name: "JavaScript", level: 70 }
      ]
    },
    {
      title: "Machine Learning",
      icon: <LineChart size={24} className="text-data-teal" />,
      skills: [
        { name: "Scikit-learn", level: 60 },
        { name: "Statistical Analysis", level: 75 }
      ]
    },
    {
      title: "Tools & Others",
      icon: <Database size={24} className="text-data-blue" />,
      skills: [
        { name: "Jupyter Notebook", level: 95 },
        { name: "Git", level: 80 },
        { name: "Google Sheets", level: 90 }
      ]
    },
    {
      title: "Soft Skills",
      icon: <Database size={24} className="text-data-purple" />,
      skills: [
        { name: "Critical Thinking", level: 90 },
        { name: "Communication", level: 85 },
        { name: "Problem Solving", level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-data-darkAccent/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="gradient-text">Technical Skills</span>
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
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-data-darkBg rounded-full h-2">
                      <div 
                        className="skill-bar rounded-full"
                        style={{width: `${skill.level}%`}}
                      ></div>
                    </div>
                  </div>
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
