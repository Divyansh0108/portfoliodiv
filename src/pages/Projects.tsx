
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import humanHeartImage from "../assets/human-heart.jpg";

type Project = {
  id: number;
  title: string;
  date: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  hasDemoLink?: boolean;
};

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "GetAnime – Anime Recommendation System",
      date: "August, 2025",
      description: "AI-powered anime recommendation system using semantic search and GenAI.",
      fullDescription: "An interactive recommendation engine that brings together the latest GenAI techniques, retrieval-augmented pipelines, and production-ready architecture to help users explore and discover anime tailored to their preferences. Takes natural language queries like 'adventure with underdog protagonist' and returns curated anime recommendations with explanations.",
      image: "/lovable-uploads/e3317266-dbcf-4ec5-8040-5ced8afbf71f.png",
      technologies: ["Python", "Streamlit", "LangChain", "Sentence Transformers", "FAISS", "Groq LLM", "Docker", "Kubernetes"],
      demoUrl: "https://getanime.streamlit.app/",
      githubUrl: "https://github.com/Divyansh0108/AnimAI-Navigator",
      hasDemoLink: true,
    },
    {
      id: 2,
      title: "Mental Health Predictor",
      date: "March, 2025",
      description: "AI-powered web application for mental health assessment.",
      fullDescription: "Developed an AI-powered web application to predict and assess mental health status, focusing on early detection of depression among students. Implemented a neural network model using TensorFlow, trained on a custom student mental health dataset. Integrated Gemini Flash 1.5 for insights, streamlit frontend for interactive dashboards, and LIME for model interpretability.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56",
      technologies: ["Python", "TensorFlow", "Streamlit", "Gemini Flash 1.5", "Matplotlib", "LIME", "scikit-learn"],
      demoUrl: "https://mentalhealth-01.streamlit.app/",
      githubUrl: "https://github.com/Divyansh0108/MentalHealth",
      hasDemoLink: true,
    },
    {
      id: 3,
      title: "Comprehensive Data Analysis Toolkit",
      date: "October, 2024",
      description: "User-friendly toolkit for seamless data cleaning, feature engineering, and model building.",
      fullDescription: "Developed a toolkit for seamless data cleaning, feature engineering, transformation, and model building with deep visualizations. Supports multiple formats (CSV, Excel, JSON), powered by pandas, plotly, and scikit-learn.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Plotly", "Machine Learning", "Data Cleaning", "Feature Engineering"],
      demoUrl: "https://dataviztoolkit.streamlit.app/",
      githubUrl: "https://github.com/Divyansh0108/DataAnalysisToolkit",
      hasDemoLink: true,
    },
    {
      id: 4,
      title: "E2E Text Summarization",
      date: "April, 2024",
      description: "End-to-end text summarization using deep learning and NLP.",
      fullDescription: "Built a deep learning application for generating concise summaries from long text inputs using transformer models, integrated with a Flask+React based interface.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      technologies: ["Python", "NLP", "Transformers", "Flask", "React"],
      demoUrl: "#",
      githubUrl: "https://github.com/Divyansh0108/E2E-text-summarization",
      hasDemoLink: false,
    },
    {
      id: 5,
      title: "Network Security Suite",
      date: "2024",
      description: "Solid project codebase for secure logging, deployment, and tracking.",
      fullDescription: "Provides a well-structured base for network security systems with modular tracking, advanced logging, and robust deployment strategies.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
      technologies: ["Python", "Security", "Monitoring"],
      demoUrl: "#",
      githubUrl: "https://github.com/Divyansh0108/networkSecurity",
      hasDemoLink: false,
    },
    {
      id: 6,
      title: "Credit Risk Analysis",
      date: "2024",
      description: "ML-driven analytics for credit risk scoring.",
      fullDescription: "Implements standard and well-researched machine learning methods for predicting credit risk and portfolio analytics.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
      technologies: ["Python", "ML", "Finance"],
      demoUrl: "#",
      githubUrl: "https://github.com/Divyansh0108/Credit-Risk-Analysis",
      hasDemoLink: false,
    },
    {
      id: 7,
      title: "Note Taking App",
      date: "2024",
      description: "A Django-based full-featured note taking app.",
      fullDescription: "Brilliant note taking application with REST backend, user auth, and instant notes—all built on Django & modern web stack.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4",
      technologies: ["Python", "Django", "Web"],
      demoUrl: "#",
      githubUrl: "https://github.com/Divyansh0108/Note-Taking-Python-Web-Tech",
      hasDemoLink: false,
    },
    {
      id: 8,
      title: "Heart Disease Prediction",
      date: "2024",
      description: "Medical dataset based model to predict heart disease.",
      fullDescription: "Predicts heart disease using advanced algorithms on medical features. Handles a range of factors, using scikit-learn, giving both accuracy and interpretability.",
      image: humanHeartImage,
      technologies: ["Python", "scikit-learn", "Healthcare"],
      demoUrl: "#",
      githubUrl: "https://github.com/Divyansh0108/heart-disease-pred",
      hasDemoLink: false,
    },
  ];

  return (
    <div className="min-h-screen animated-gradient-bg">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-white/70 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </div>
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="bg-clip-text text-transparent bg-gradient-to-r from-magenta to-violet">Projects</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-magenta to-violet mx-auto rounded-full"></div>
            <p className="text-white/70 mt-4 max-w-2xl mx-auto">
              A showcase of my data science, machine learning, and AI development work
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className={`bg-gradient-to-br from-darkPurple/80 to-magenta/15 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden transition-all duration-700 hover-glow ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkPurple/90 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 backdrop-blur-md">
                      {project.date}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-golden">{project.title}</h3>
                  <p className="text-white/70 mb-6 text-sm line-clamp-3">{project.fullDescription}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-1 rounded-md text-xs font-medium bg-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 rounded-md text-xs font-medium bg-white/5">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center">
                     <div className="flex space-x-2">
                       {project.hasDemoLink && (
                         <a 
                           href={project.demoUrl} 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="btn-shadow px-3 py-1.5 rounded-lg text-sm font-medium bg-gradient-to-r from-magenta to-violet text-white flex items-center justify-center"
                         >
                           <ExternalLink className="w-3.5 h-3.5 mr-1" /> Demo
                         </a>
                       )}
                       {project.id === 1 && (
                         <a 
                           href="https://medium.com/@divyanshpandey0108/building-your-very-own-anime-recommendation-system-6ec98298ef12" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="btn-shadow px-3 py-1.5 rounded-lg text-sm font-medium bg-orange-500 hover:bg-orange-600 text-white transition-colors flex items-center justify-center"
                         >
                           <ExternalLink className="w-3.5 h-3.5 mr-1" /> Medium
                         </a>
                       )}
                       <a 
                         href={project.githubUrl} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="btn-shadow px-3 py-1.5 rounded-lg text-sm font-medium bg-transparent border border-white/20 text-white hover:bg-white/5 transition-colors flex items-center justify-center"
                       >
                         <Github className="w-3.5 h-3.5 mr-1" /> GitHub
                       </a>
                     </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
