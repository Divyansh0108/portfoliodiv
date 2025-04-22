
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

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
      title: "Mental Health Predictor",
      date: "March, 2025",
      description: "AI-powered web application to predict and assess mental health status, focusing on early detection of depression among students.",
      fullDescription: "Developed an AI-powered web application to predict and assess mental health status, focusing on early detection of depression among students. Implemented a neural network model using TensorFlow, trained on a custom student mental health dataset with 27,000 records and 21 features, which after preprocessing brought down to 20209 records and 13 features. Integrated Gemini Flash 1.5 to provide personalized mental health insights and recommendations based on user inputs. Designed an interactive frontend with Streamlit, featuring real-time analysis, visualization, and model interpretability using LIME. Achieved high accuracy in depression prediction, identifying key influencing factors like sleep duration, academic pressure, and dietary habits.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      technologies: ["Python", "TensorFlow", "Streamlit", "Gemini Flash 1.5", "Matplotlib", "LIME", "scikit-learn"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Comprehensive Data Analysis Toolkit",
      date: "October, 2024",
      description: "User-friendly toolkit for seamless data cleaning, feature engineering, data transformation, and model building to empower data scientists and analysts.",
      fullDescription: "Developed a user-friendly toolkit for seamless data cleaning, feature engineering, data transformation, and model building to empower data scientists and analysts. Key features include: Data Cleaning (handling missing values, removing duplicates, and type conversion), Feature Engineering (generating new features, selecting the best ones, and creating polynomial features), Data Transformation (applying log transformations, scaling, and binning techniques), Model Building and Evaluation (training models, tuning hyperparameters, and performing cross-validation), and Interactive Visualizations (using Plotly for in-depth insights through dynamic plots and charts). Supported multiple input formats, such as CSV, Excel, and JSON, for enhanced usability.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Plotly", "Machine Learning", "Data Cleaning", "Feature Engineering"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Heart Disease Prediction Model",
      date: "July, 2024",
      description: "Analyzed relationships between age, sex, cholesterol, chest pain type, and heart rate to predict heart disease with high accuracy.",
      fullDescription: "Analyzed relationships between age, sex, cholesterol, chest pain type, and heart rate to predict heart disease. Optimized model performance and accuracy by implementing scaling and hyperparameter tuning. Optimized using supervised learning algorithms for high availability and scalability in healthcare applications. Evaluated multiple models including Logistic Regression, Random Forest, Gradient Boosting, and SVM, selecting Logistic Regression for being 2% better than Random Forest, 12% better than Gradient Boosting, and 14% better than SVM.",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      technologies: ["Python", "scikit-learn", "pandas", "numpy", "Streamlit", "matplotlib", "seaborn"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "NLP-Based Sentiment Analysis",
      date: "May, 2024",
      description: "Developed a sentiment analysis tool for social media monitoring and brand reputation management.",
      fullDescription: "Developed a comprehensive sentiment analysis tool using NLP techniques to analyze social media comments, reviews, and feedback for businesses. Implemented BERT-based transformer models to achieve over 91% accuracy in sentiment classification across various domains. Created a dashboard for real-time monitoring of brand sentiment and competitor analysis. The tool processes over 10,000 texts per minute and provides actionable insights through customizable reports and alerts.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      technologies: ["Python", "NLTK", "spaCy", "BERT", "Transformers", "Flask", "React", "MongoDB"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Predictive Stock Analysis Platform",
      date: "February, 2024",
      description: "Created a stock market prediction platform using advanced time series analysis and machine learning techniques.",
      fullDescription: "Designed and implemented a stock market prediction platform that combines traditional time series analysis with deep learning models for accurate price forecasting. Utilized LSTM networks and attention mechanisms to capture long-term dependencies in stock price movements. Incorporated alternative data sources including news sentiment, social media buzz, and macroeconomic indicators to enhance prediction accuracy. The platform achieved a Mean Absolute Percentage Error (MAPE) of 3.2% for 5-day forecasts across major indices, outperforming baseline models by 27%.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      technologies: ["Python", "TensorFlow", "Keras", "LSTM", "Pandas", "NumPy", "Yahoo Finance API", "Plotly", "Django"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Computer Vision Traffic Analysis",
      date: "November, 2023",
      description: "Built a traffic monitoring and analysis system using computer vision and deep learning.",
      fullDescription: "Developed a smart traffic monitoring system that uses computer vision to analyze traffic patterns, count vehicles, and detect anomalies in real-time. Implemented YOLOv5 for object detection with custom training to achieve 98% detection accuracy across various weather and lighting conditions. Created an analytics dashboard for traffic departments to visualize congestion patterns, estimate travel times, and identify accident-prone areas. The system processes video feeds at 30fps with low latency on edge devices, making it suitable for widespread deployment in smart city infrastructure.",
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      technologies: ["Python", "OpenCV", "PyTorch", "YOLOv5", "TensorRT", "Streamlit", "Docker", "NVIDIA DeepStream"],
      demoUrl: "#",
      githubUrl: "#",
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
                className={`glass-card rounded-xl overflow-hidden transition-all duration-700 hover-glow ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkPurple/90 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 backdrop-blur-md">
                      {project.date}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
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
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-shadow px-3 py-1.5 rounded-lg text-sm font-medium bg-gradient-to-r from-magenta to-violet text-white flex items-center justify-center"
                      >
                        <ExternalLink className="w-3.5 h-3.5 mr-1" /> Demo
                      </a>
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
