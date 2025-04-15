
import React from 'react';
import { BarChart3, Code, Database, LineChart, PieChart, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Analysis",
      icon: <BarChart3 size={24} className="text-white" />,
      desc: "Expertise in analyzing and interpreting complex datasets",
      skills: ["Pandas", "NumPy", "Excel", "Data Cleaning", "Statistical Analysis"]
    },
    {
      title: "Data Visualization",
      icon: <PieChart size={24} className="text-white" />,
      desc: "Turning data into compelling visual stories",
      skills: ["Matplotlib", "Seaborn", "Power BI", "Tableau", "D3.js"]
    },
    {
      title: "Programming",
      icon: <Code size={24} className="text-white" />,
      desc: "Building solutions with various programming languages",
      skills: ["Python", "SQL", "JavaScript", "R", "Java"]
    },
    {
      title: "Machine Learning",
      icon: <LineChart size={24} className="text-white" />,
      desc: "Applying algorithms to predict outcomes and find patterns",
      skills: ["Scikit-learn", "TensorFlow", "Statistical Models", "Classification", "Regression"]
    },
    {
      title: "Tools & Others",
      icon: <Database size={24} className="text-white" />,
      desc: "Leveraging advanced tools for data workflows",
      skills: ["Jupyter Notebook", "Git", "Google Sheets", "Azure", "AWS"]
    },
    {
      title: "Soft Skills",
      icon: <Users size={24} className="text-white" />,
      desc: "Bridging technical knowledge with interpersonal abilities",
      skills: ["Critical Thinking", "Communication", "Problem Solving", "Team Collaboration", "Storytelling"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-data-darkBg to-data-midnight relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -right-40 -top-40 w-96 h-96 bg-data-navy rounded-full blur-3xl"></div>
        <div className="absolute -left-20 top-1/2 w-80 h-80 bg-data-darkAccent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold inline-block relative">
            <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent animate-pulse-slow">Technical Skills</span>
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent"></span>
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">Combining analytical techniques with technical expertise to extract meaningful insights from data</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="group relative"
              style={{animationDelay: `${0.1 * index}s`}}
            >
              <Card className="h-full bg-gradient-to-br from-data-midnight to-data-darkBg backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-blue-glow hover:border-white/20 animate-slide-up">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="mr-4 bg-gradient-to-br from-data-darkAccent to-data-navy p-3 rounded-lg group-hover:animate-float transition-all duration-300">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:bg-gradient-to-r from-white to-white/80 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {category.title}
                      </h3>
                      <p className="text-sm text-white/60 mt-1">{category.desc}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <HoverCard key={skillIndex}>
                        <HoverCardTrigger asChild>
                          <span 
                            className="px-4 py-2 bg-gradient-to-r from-data-navy/50 to-data-darkAccent/50 rounded-lg text-sm border border-white/10 hover:border-white/30 hover:shadow-inner transition-all cursor-pointer"
                          >
                            {skill}
                          </span>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-auto bg-data-midnight border border-white/20 text-white">
                          <div className="p-1">
                            <p className="text-sm">{skill}</p>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
