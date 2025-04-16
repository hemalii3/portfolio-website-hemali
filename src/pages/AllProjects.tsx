
import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tools: string[];
  link: string;
  github?: string;
}

const AllProjects = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);
  
  const projects: Project[] = [
    // First 9 projects (reuse from Projects.tsx)
    {
      id: 1,
      title: "Customer Churn Analysis",
      description: "A comprehensive analysis of customer attrition patterns that reduced churn by 23%.",
      tools: ["Python", "Pandas", "Scikit-learn", "Tableau"],
      link: "https://example.com/project1",
      github: "https://github.com/user/project1",
    },
    {
      id: 2,
      title: "Sales Performance Dashboard",
      description: "Created a dynamic, multi-dimensional dashboard with real-time performance insights.",
      tools: ["Power BI", "Excel", "SQL", "DAX"],
      link: "https://example.com/project2",
    },
    {
      id: 3,
      title: "COVID-19 Data Tracker",
      description: "An end-to-end data pipeline for COVID-19 statistics with interactive visualizations.",
      tools: ["Python", "API", "Matplotlib", "Pandas", "Plotly"],
      link: "https://example.com/project3",
      github: "https://github.com/user/project3",
    },
    {
      id: 4,
      title: "Market Basket Analysis",
      description: "Association rule mining to analyze transaction records and discover purchase patterns.",
      tools: ["Python", "Pandas", "Apriori Algorithm"],
      link: "https://example.com/project4",
    },
    {
      id: 5,
      title: "Social Media Sentiment Analysis",
      description: "NLP system for processing social media posts to extract sentiment patterns.",
      tools: ["Python", "NLP", "NLTK", "SpaCy"],
      link: "https://example.com/project5",
      github: "https://github.com/user/project5",
    },
    {
      id: 6,
      title: "Movie Recommendation System",
      description: "Hybrid recommendation engine with high accuracy and engagement metrics.",
      tools: ["Python", "Collaborative Filtering", "TensorFlow"],
      link: "https://example.com/project6",
      github: "https://github.com/user/project6",
    },
    {
      id: 7,
      title: "Survey Data Analysis",
      description: "Transformed unstructured survey responses into actionable business intelligence.",
      tools: ["Google Forms", "Excel", "Python", "Text Analysis"],
      link: "https://example.com/project7",
    },
    {
      id: 8,
      title: "Financial Data Visualization",
      description: "Executive dashboards that transformed complex financial data into visual narratives.",
      tools: ["Tableau", "SQL", "Excel", "Financial Modeling"],
      link: "https://example.com/project8",
      github: "https://github.com/user/project8",
    },
    {
      id: 9,
      title: "E-commerce Customer Segmentation",
      description: "Customer segmentation using clustering techniques to improve marketing campaigns.",
      tools: ["Python", "K-means", "Scikit-learn", "RFM Analysis"],
      link: "https://example.com/project9",
      github: "https://github.com/user/project9",
    },
    // Additional 11 projects to reach 20 total
    {
      id: 10,
      title: "Retail Price Optimization",
      description: "Developed pricing algorithms to maximize revenue while maintaining competitive positioning.",
      tools: ["Python", "Econometrics", "Statistical Modeling"],
      link: "https://example.com/project10",
      github: "https://github.com/user/project10",
    },
    {
      id: 11,
      title: "Supply Chain Analytics Dashboard",
      description: "End-to-end visibility into supply chain performance with predictive inventory management.",
      tools: ["Power BI", "SQL", "Excel", "Forecasting"],
      link: "https://example.com/project11",
    },
    {
      id: 12,
      title: "Healthcare Patient Flow Analysis",
      description: "Optimized hospital resource allocation using patient flow simulation models.",
      tools: ["R", "Discrete Event Simulation", "Visualization"],
      link: "https://example.com/project12",
      github: "https://github.com/user/project12",
    },
    {
      id: 13,
      title: "Marketing Campaign Effectiveness",
      description: "A/B testing framework for evaluating and optimizing marketing campaign performance.",
      tools: ["Python", "Statistical Testing", "Pandas"],
      link: "https://example.com/project13",
    },
    {
      id: 14,
      title: "Real Estate Price Prediction",
      description: "Machine learning models to predict property prices based on multiple factors.",
      tools: ["Python", "Regression", "Scikit-learn", "Geospatial Analysis"],
      link: "https://example.com/project14",
      github: "https://github.com/user/project14",
    },
    {
      id: 15,
      title: "Social Network Graph Analysis",
      description: "Analyzed connection patterns and influence networks in social media data.",
      tools: ["Python", "NetworkX", "Graph Theory", "Visualization"],
      link: "https://example.com/project15",
    },
    {
      id: 16,
      title: "HR Analytics Dashboard",
      description: "Employee retention prediction and workforce analytics visualization.",
      tools: ["Tableau", "R", "Statistical Analysis"],
      link: "https://example.com/project16",
      github: "https://github.com/user/project16",
    },
    {
      id: 17,
      title: "Fraud Detection System",
      description: "Machine learning models to identify suspicious transactions and behavior patterns.",
      tools: ["Python", "Anomaly Detection", "Classification Algorithms"],
      link: "https://example.com/project17",
    },
    {
      id: 18,
      title: "Product Recommendation Engine",
      description: "Content-based filtering system for e-commerce product recommendations.",
      tools: ["Python", "NLP", "Cosine Similarity"],
      link: "https://example.com/project18",
      github: "https://github.com/user/project18",
    },
    {
      id: 19,
      title: "Text Summarization Tool",
      description: "Automated system to extract key information from large text documents.",
      tools: ["Python", "NLP", "BERT", "Transformers"],
      link: "https://example.com/project19",
    },
    {
      id: 20,
      title: "Energy Consumption Forecasting",
      description: "Time series models to predict and optimize energy usage patterns.",
      tools: ["Python", "Time Series Analysis", "Prophet", "ARIMA"],
      link: "https://example.com/project20",
      github: "https://github.com/user/project20",
    }
  ];
  
  return (
    <Layout>
      <div className="py-10">
        <h1 className="text-3xl text-lightest-slate font-bold mb-12">All Projects</h1>
        
        <p className="text-slate mb-16 max-w-2xl">
          A comprehensive archive of all the data science and analytics projects I've worked on. 
          Each project demonstrates different aspects of my skills in data analysis, visualization, 
          and machine learning.
        </p>
        
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-500 ${isMounted ? 'opacity-100' : 'opacity-0'}`}
        >
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-light-navy rounded-md p-6 flex flex-col h-full hover:-translate-y-2 transition-transform duration-200"
            >
              <header className="flex justify-between items-start mb-6">
                <FolderGit2 size={40} className="text-green" />
                <div className="flex gap-3">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-lightest-slate hover:text-green transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lightest-slate hover:text-green transition-colors"
                    aria-label="Live Project"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </header>
              
              <h3 className="text-lightest-slate text-xl font-medium mb-2">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-green transition-colors"
                >
                  {project.title}
                </a>
              </h3>
              
              <p className="text-slate mb-6 flex-grow">{project.description}</p>
              
              <footer>
                <ul className="flex flex-wrap gap-2 text-xs font-mono text-slate">
                  {project.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AllProjects;
