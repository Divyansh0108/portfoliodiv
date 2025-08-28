
import { useState, useEffect, useRef } from "react";

type SkillCategory = {
  title: string;
  skills: { name: string; icon: string }[];
};

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById("skills");
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      skills: [
        { 
          name: "Python", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
        },
        { 
          name: "SQL", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" 
        },
        { 
          name: "Java", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" 
        },
        { 
          name: "C", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" 
        },
        { 
          name: "JavaScript", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
        },
        { 
          name: "Matlab", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg" 
        },
      ]
    },
    {
      title: "Machine Learning & AI",
      skills: [
        { 
          name: "TensorFlow", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" 
        },
        { 
          name: "PyTorch", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" 
        },
        { 
          name: "Keras", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg" 
        },
        { 
          name: "scikit-learn", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" 
        },
        { 
          name: "XGBoost", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/6/69/XGBoost_logo.png" 
        },
        { 
          name: "NLP", 
          icon: "https://cdn-icons-png.flaticon.com/512/2103/2103652.png" 
        },
        { 
          name: "Computer Vision", 
          icon: "https://cdn-icons-png.flaticon.com/512/6295/6295417.png" 
        },
        { 
          name: "Reinforcement Learning", 
          icon: "https://cdn-icons-png.flaticon.com/512/5847/5847239.png" 
        },
        { 
          name: "Generative AI", 
          icon: "https://cdn-icons-png.flaticon.com/512/5738/5738077.png" 
        },
        { 
          name: "CNN", 
          icon: "https://cdn-icons-png.flaticon.com/512/8637/8637099.png" 
        },
        { 
          name: "GAN", 
          icon: "https://cdn-icons-png.flaticon.com/512/5738/5738077.png" 
        },
      ]
    },
    {
      title: "Development & Frameworks",
      skills: [
        { 
          name: "Flask", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" 
        },
        { 
          name: "Streamlit", 
          icon: "https://streamlit.io/images/brand/streamlit-mark-color.svg" 
        },
        { 
          name: "Django", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" 
        },
        { 
          name: "HTML/CSS", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
        },
        { 
          name: "Selenium", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" 
        },
      ]
    },
    {
      title: "Data Manipulation & Visualization",
      skills: [
        { 
          name: "Pandas", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" 
        },
        { 
          name: "NumPy", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" 
        },
        { 
          name: "Seaborn", 
          icon: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg" 
        },
        { 
          name: "Tableau", 
          icon: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg" 
        },
        { 
          name: "Matplotlib", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/0/01/Created_with_Matplotlib-logo.svg" 
        },
        { 
          name: "Power BI", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" 
        },
        { 
          name: "Grafana", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" 
        },
      ]
    },
    {
      title: "Databases & Storage",
      skills: [
        { 
          name: "MySQL", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" 
        },
        { 
          name: "PostgreSQL", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" 
        },
        { 
          name: "MongoDB", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" 
        },
        { 
          name: "SQLite", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" 
        },
        { 
          name: "ChromaDB", 
          icon: "https://cdn-icons-png.flaticon.com/512/2906/2906274.png" 
        },
        { 
          name: "FAISS", 
          icon: "https://cdn-icons-png.flaticon.com/512/2906/2906274.png" 
        },
        { 
          name: "AstraDB", 
          icon: "https://cdn-icons-png.flaticon.com/512/2906/2906274.png" 
        },
      ]
    },
    {
      title: "MLOps & Data Engineering",
      skills: [
        { 
          name: "DVC", 
          icon: "https://cdn-icons-png.flaticon.com/512/2906/2906274.png" 
        },
        { 
          name: "MLflow", 
          icon: "https://mlflow.org/docs/latest/_static/MLflow-logo-final-black.png" 
        },
        { 
          name: "DAGsHub", 
          icon: "https://cdn-icons-png.flaticon.com/512/2906/2906274.png" 
        },
        { 
          name: "BentoML", 
          icon: "https://cdn-icons-png.flaticon.com/512/2906/2906274.png" 
        },
        { 
          name: "Airflow", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apacheairflow/apacheairflow-original.svg" 
        },
        { 
          name: "Kafka", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" 
        },
        { 
          name: "ETL", 
          icon: "https://cdn-icons-png.flaticon.com/512/2906/2906274.png" 
        },
      ]
    },
    {
      title: "LangChain & AI Tools",
      skills: [
        { 
          name: "LangChain", 
          icon: "https://cdn-icons-png.flaticon.com/512/5738/5738077.png" 
        },
        { 
          name: "LangGraph", 
          icon: "https://cdn-icons-png.flaticon.com/512/5738/5738077.png" 
        },
        { 
          name: "LangServe", 
          icon: "https://cdn-icons-png.flaticon.com/512/5738/5738077.png" 
        },
        { 
          name: "LangSmith", 
          icon: "https://cdn-icons-png.flaticon.com/512/5738/5738077.png" 
        },
        { 
          name: "Groq", 
          icon: "https://cdn-icons-png.flaticon.com/512/5738/5738077.png" 
        },
      ]
    },
    {
      title: "Cloud Platforms",
      skills: [
        { 
          name: "AWS S3", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" 
        },
        { 
          name: "AWS EC2", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" 
        },
        { 
          name: "AWS IAM", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" 
        },
        { 
          name: "AWS RDS", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" 
        },
        { 
          name: "GCP", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" 
        },
        { 
          name: "Azure", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" 
        },
      ]
    },
    {
      title: "Version Control & Collaboration",
      skills: [
        { 
          name: "Git", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" 
        },
        { 
          name: "GitHub", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
        },
        { 
          name: "Jira", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" 
        },
        { 
          name: "SCRUM", 
          icon: "https://cdn-icons-png.flaticon.com/512/2620/2620863.png" 
        },
        { 
          name: "Agile", 
          icon: "https://cdn-icons-png.flaticon.com/512/6878/6878705.png" 
        },
      ]
    },
  ];

  // Auto-scrolling functionality
  useEffect(() => {
    const intervals: number[] = [];
    
    containerRefs.current.forEach((container, index) => {
      if (container) {
        // Set up auto-scrolling
        intervals.push(
          window.setInterval(() => {
            if (container.scrollWidth > container.clientWidth) {
              const maxScroll = container.scrollWidth - container.clientWidth;
              // If we're near the end, quickly reset to the beginning
              if (container.scrollLeft >= maxScroll - 10) {
                container.scrollTo({ left: 0, behavior: 'auto' });
              } else {
                container.scrollBy({ left: 1, behavior: 'auto' });
              }
            }
          }, 30)
        );
      }
    });
    
    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, [isVisible]);

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-darkPurple/50">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-violet/10 filter blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-magenta/10 filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-magenta to-violet">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-magenta to-violet mx-auto rounded-full"></div>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            A comprehensive set of technical skills and tools I've mastered throughout my journey
          </p>
        </div>
        
        <div className={`space-y-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="mb-10">
              <h3 className="text-xl font-semibold mb-5 text-white">
                {category.title}
              </h3>
              
              <div 
                ref={el => containerRefs.current[categoryIndex] = el}
                className="flex space-x-4 overflow-x-auto py-4 px-2 no-scrollbar"
              >
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name} 
                    className={`flex-shrink-0 bg-gradient-to-br from-darkPurple/60 to-secondaryPurple/10 backdrop-blur-md border border-white/10 p-5 rounded-xl w-32 flex flex-col items-center justify-center transition-all duration-500 hover-glow hover:-translate-y-1 animate-delay-${(skillIndex % 5) * 100}`}
                    style={{ 
                      animationDelay: `${skillIndex * 100}ms`,
                      boxShadow: '0 4px 20px rgba(139, 92, 246, 0.15)'
                    }}
                  >
                    <div className="w-12 h-12 mb-3 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-magenta/20 to-violet/20 rounded-full filter blur-sm"></div>
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="w-full h-full object-contain relative z-10"
                      />
                    </div>
                    <p className="text-sm font-medium text-center">{skill.name}</p>
                  </div>
                ))}
                
                {/* Add duplicates to create continuous scroll effect */}
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={`${skill.name}-dup`} 
                    className={`flex-shrink-0 bg-gradient-to-br from-darkPurple/60 to-secondaryPurple/10 backdrop-blur-md border border-white/10 p-5 rounded-xl w-32 flex flex-col items-center justify-center transition-all duration-500 hover-glow hover:-translate-y-1`}
                    style={{ 
                      animationDelay: `${skillIndex * 100}ms`,
                      boxShadow: '0 4px 20px rgba(139, 92, 246, 0.15)'
                    }}
                  >
                    <div className="w-12 h-12 mb-3 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-magenta/20 to-violet/20 rounded-full filter blur-sm"></div>
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="w-full h-full object-contain relative z-10"
                      />
                    </div>
                    <p className="text-sm font-medium text-center">{skill.name}</p>
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

export default SkillsSection;
