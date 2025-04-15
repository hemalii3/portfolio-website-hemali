
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tools: string[];
  link: string;
  github?: string;
  image: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Customer Churn Analysis",
      description: "Analyzed customer behavior and churn rates to uncover key factors using EDA and visualization.",
      longDescription: "Developed a comprehensive churn prediction model that reduced customer attrition by 23% through actionable insights. Used advanced clustering techniques to identify at-risk segments and implemented visualization dashboards for monitoring key retention metrics in real-time.",
      tools: ["Python", "Pandas", "Seaborn", "Scikit-learn"],
      link: "#",
      github: "https://github.com/",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Sales Performance Dashboard",
      description: "Built an interactive sales performance dashboard for regional analysis.",
      longDescription: "Created a dynamic, multi-dimensional dashboard that integrated data from 5 different sources to provide real-time performance insights across 12 regions. The solution enabled sales leaders to identify growth opportunities and optimization areas, resulting in a 15% increase in quarterly sales.",
      tools: ["Power BI", "Excel", "SQL", "DAX"],
      link: "#",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "COVID-19 Data Tracker",
      description: "Fetched global COVID data via APIs and created a live tracker with visual insights.",
      longDescription: "Engineered an end-to-end data pipeline that ingested, processed, and visualized COVID-19 statistics from multiple international sources. The tracker featured interactive maps, trend analysis, and predictive modeling that was used by healthcare organizations for resource allocation planning.",
      tools: ["Python", "API", "Matplotlib", "Pandas", "Plotly"],
      link: "#",
      github: "https://github.com/",
      image: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Market Basket Analysis",
      description: "Performed market basket analysis and trend detection in user purchase patterns.",
      longDescription: "Implemented association rule mining algorithms to analyze 3 million+ transaction records, discovering hidden purchase patterns that informed product placement and bundle offerings. This data-driven approach increased average order value by 18% and cross-selling effectiveness by 22%.",
      tools: ["Excel", "Python", "Tableau", "Apriori Algorithm"],
      link: "#",
      image: "https://images.unsplash.com/photo-1526570207772-784d36084510?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Social Media Sentiment Analysis",
      description: "Collected and analyzed tweets to identify public sentiment on trending topics.",
      longDescription: "Built a sophisticated NLP system that processed over 50,000 social media posts daily to extract sentiment patterns and topic clusters. The project included custom sentiment models tuned for industry-specific terminology, enabling brands to respond proactively to emerging reputation issues.",
      tools: ["Python", "NLP", "Tweepy", "NLTK", "SpaCy"],
      link: "#",
      github: "https://github.com/",
      image: "https://images.unsplash.com/photo-1600096194534-95cf5b4e035f?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Movie Recommendation System",
      description: "Created a content-based movie recommender using user preferences and viewing history.",
      longDescription: "Developed a hybrid recommendation engine combining collaborative filtering and content-based approaches to suggest personalized movie choices. The system analyzed both viewing patterns and content metadata, achieving 89% recommendation accuracy and increasing user engagement time by 27%.",
      tools: ["Python", "Pandas", "Cosine Similarity", "Neural Networks", "TensorFlow"],
      link: "#",
      github: "https://github.com/",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 7,
      title: "Survey Data Analysis",
      description: "Cleaned raw survey data and built an analytical report to present findings and trends.",
      longDescription: "Transformed unstructured survey responses from 12,000+ participants into actionable business intelligence through advanced text analytics and statistical modeling. Created interactive reporting dashboards that revealed critical customer insights, leading to product improvements that elevated satisfaction scores by 31%.",
      tools: ["Google Forms", "Excel", "Python", "R", "Text Analysis"],
      link: "#",
      image: "https://images.unsplash.com/photo-1590650046871-92c887180603?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 8,
      title: "Financial Data Visualization",
      description: "Created interactive visualizations of financial performance metrics for executive dashboards.",
      longDescription: "Designed and implemented a suite of executive dashboards that transformed complex financial data into clear visual narratives. The solution integrated real-time data from multiple financial systems, enabling leadership to identify cost-saving opportunities that resulted in $1.2M annual reduction in operational expenses.",
      tools: ["Tableau", "SQL", "Excel", "Financial Modeling"],
      link: "#",
      github: "https://github.com/",
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 9,
      title: "E-commerce Customer Segmentation",
      description: "Applied clustering techniques to segment customers based on purchasing behavior.",
      longDescription: "Conducted comprehensive customer segmentation analysis using K-means and hierarchical clustering to identify 7 distinct customer personas. These insights drove targeted marketing campaigns that improved conversion rates by 34% and reduced customer acquisition costs by 21% through precision targeting.",
      tools: ["Python", "K-means", "Scikit-learn", "Cluster Analysis", "RFM Analysis"],
      link: "#",
      github: "https://github.com/",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-data-midnight to-data-darkBg relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-data-darkAccent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center animate-fade-in">
          <h2 className="text-3xl font-bold inline-block relative">
            <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent animate-pulse-slow">Projects</span>
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent"></span>
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">Showcasing my expertise through real-world data projects and solutions</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group bg-gradient-to-br from-data-midnight to-data-darkBg rounded-xl overflow-hidden shadow-xl border border-white/5 hover:border-white/20 transition-all duration-500 flex flex-col animate-slide-up hover:shadow-blue-glow hover:translate-y-[-5px]"
              style={{animationDelay: `${(project.id - 1) * 0.1}s`}}
            >
              <div className="relative h-52 overflow-hidden">
                <div className="absolute inset-0 bg-data-darkAccent mix-blend-color opacity-20 group-hover:opacity-0 transition-opacity duration-500"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-data-darkBg to-transparent opacity-80"></div>
                <h3 className="absolute bottom-4 left-6 text-xl font-bold text-white group-hover:translate-y-1 transition-transform duration-300">{project.title}</h3>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <p className="text-gray-300 mb-4 flex-grow">{project.longDescription}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tools.map((tool, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-data-navy/70 rounded-lg px-3 py-1 border border-white/10 group-hover:border-white/20 transition-all hover:bg-data-darkAccent/50"
                      style={{animationDelay: `${index * 0.05}s`}}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="px-6 pb-6 mt-auto flex gap-4">
                <a 
                  href={project.link}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm bg-data-darkAccent hover:bg-data-navy px-4 py-2 rounded-lg text-white transition-all duration-300 group/btn"
                >
                  <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  <span>View Project</span>
                </a>
                
                {project.github && (
                  <a 
                    href={project.github}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-white hover:text-data-primary transition-colors group/gh"
                  >
                    <Github size={16} className="group-hover/gh:rotate-12 transition-transform" />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
