
import { ExternalLink, Github, Brain, ChartBar, FileText, ShieldCheck, CreditCard, NoteTaking, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Illustrative icons for extra projects:
const iconsMap: Record<string, any> = {
  "Mental Health Predictor": Brain,
  "Data Analysis Toolkit": ChartBar,
  "E2E Text Summarization": FileText,
  "Network Security Suite": ShieldCheck,
  "Credit Risk Analysis": CreditCard,
  "Note Taking App": NoteTaking,
  "Heart Disease Prediction": Heart,
};

const projects = [
  {
    id: 1,
    title: "Mental Health Predictor",
    date: "March, 2025",
    description: "AI application to predict and assess mental health status. Early detection for depression among students.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b", // Suited: laptop/code
    technologies: ["Python", "TensorFlow", "Streamlit", "Gemini Flash 1.5", "Matplotlib", "LIME", "scikit-learn"],
    demoUrl: "https://mentalhealth-01.streamlit.app/",
    githubUrl: "https://github.com/Divyansh0108/MentalHealth",
    icon: Brain,
  },
  {
    id: 2,
    title: "Comprehensive Data Analysis Toolkit",
    date: "October, 2024",
    description: "Toolkit for data cleaning, feature engineering, transformation, and model building.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7", // Suited: colorful web code
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Plotly", "Machine Learning", "Data Cleaning", "Feature Engineering"],
    demoUrl: "https://dataviztoolkit.streamlit.app/",
    githubUrl: "https://github.com/Divyansh0108/DataAnalysisToolkit",
    icon: ChartBar,
  },
  {
    id: 3,
    title: "E2E Text Summarization",
    date: "April, 2024",
    description: "End-to-end text summarization with deep learning & NLP.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085", // MacBook with code
    technologies: ["Python", "NLP", "Transformers", "Flask", "React"],
    demoUrl: "#", // If you have a demo link, replace here
    githubUrl: "https://github.com/Divyansh0108/E2E-text-summarization",
    icon: FileText,
  },
  // Extra projects below:
  {
    id: 4,
    title: "Network Security Suite",
    date: "2024",
    description: "Robust codebase for secure logging, deployment, tracking, and features.",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b", // traffic, security look
    technologies: ["Python", "Security", "Monitoring"],
    demoUrl: "#",
    githubUrl: "https://github.com/Divyansh0108/networkSecurity",
    icon: ShieldCheck,
  },
  {
    id: 5,
    title: "Credit Risk Analysis",
    date: "2024",
    description: "Machine learning for credit risk assessment and analytics.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22", // finance-themed
    technologies: ["Python", "ML", "Finance"],
    demoUrl: "#",
    githubUrl: "https://github.com/Divyansh0108/Credit-Risk-Analysis",
    icon: CreditCard,
  },
  {
    id: 6,
    title: "Note Taking App",
    date: "2024",
    description: "A Django-based note taking web application.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6", // monitor/code
    technologies: ["Python", "Django", "Web"],
    demoUrl: "#",
    githubUrl: "https://github.com/Divyansh0108/Note-Taking-Python-Web-Tech",
    icon: NoteTaking,
  },
  {
    id: 7,
    title: "Heart Disease Prediction",
    date: "2024",
    description: "Predicts heart disease based on medical dataset analysis.",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04", // medical/health theme
    technologies: ["Python", "scikit-learn", "Data", "Healthcare"],
    demoUrl: "#",
    githubUrl: "https://github.com/Divyansh0108/heart-disease-pred",
    icon: Heart,
  },
];

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    const section = document.getElementById("projects");
    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-magenta/10 rounded-full filter blur-3xl"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-magenta to-violet">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-magenta to-violet mx-auto rounded-full"></div>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            A selection of data science, machine learning, and app development projects I've built
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className={`rounded-xl overflow-hidden transition-all duration-700 hover-glow bg-gradient-to-br from-darkPurple/80 to-magenta/15 backdrop-blur-lg border border-white/10 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkPurple/90 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    {Icon && <Icon className="text-magenta w-5 h-5" />}
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 backdrop-blur-md">
                      {project.date}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-golden">{project.title}</h3>
                  <p className="text-white/70 mb-4 text-sm min-h-[48px]">{project.description}</p>
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
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center btn-shadow px-6 py-3 rounded-lg font-medium border border-white/20 text-white hover:bg-white/5 transition-colors group"
          >
            View All Projects
            <span className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
