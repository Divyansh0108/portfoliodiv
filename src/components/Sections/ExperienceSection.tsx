
import { useState, useEffect } from "react";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "../ui/tooltip";

type Experience = {
  id: number;
  company: string;
  position: string;
  period: string;
  location: string;
  mode: "Remote" | "Onsite" | "Hybrid";
  description: string;
  responsibilities: string[];
  logo: string;
};

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);

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
    
    const section = document.getElementById("experience");
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const experiences: Experience[] = [
    {
      id: 1,
      company: "TechAI Solutions",
      position: "Senior Data Scientist",
      period: "2024 - Present",
      location: "San Francisco, CA",
      mode: "Hybrid",
      description: "Leading data science initiatives and AI projects for enterprise clients.",
      responsibilities: [
        "Designed and implemented machine learning models for customer churn prediction, resulting in a 15% reduction in churn rate",
        "Led a team of 4 data scientists to develop a real-time anomaly detection system for financial fraud prevention",
        "Collaborated with product teams to integrate AI capabilities into existing products"
      ],
      logo: ""
    },
    {
      id: 2,
      company: "DataViz Corp",
      position: "Machine Learning Engineer",
      period: "2022 - 2024",
      location: "Boston, MA",
      mode: "Remote",
      description: "Developed and deployed machine learning models for data visualization and analysis.",
      responsibilities: [
        "Built and optimized NLP models for sentiment analysis of customer feedback with 92% accuracy",
        "Developed an automated data preprocessing pipeline that reduced data preparation time by 40%",
        "Created interactive dashboards using Tableau and D3.js for real-time business metrics visualization"
      ],
      logo: ""
    },
    {
      id: 3,
      company: "AI Research Lab",
      position: "Research Assistant",
      period: "2020 - 2022",
      location: "Seattle, WA",
      mode: "Onsite",
      description: "Conducted research on cutting-edge machine learning and deep learning techniques.",
      responsibilities: [
        "Published 3 research papers on neural network architectures in top-tier ML conferences",
        "Implemented and evaluated various deep learning models for image classification tasks",
        "Collaborated with cross-functional teams to apply research findings to real-world problems"
      ],
      logo: ""
    },
    {
      id: 4,
      company: "Tech Internship",
      position: "Data Science Intern",
      period: "2019 - 2020",
      location: "New York, NY",
      mode: "Onsite",
      description: "Applied data science techniques to solve real-world problems and gain industry experience.",
      responsibilities: [
        "Performed exploratory data analysis on large datasets using Python and SQL",
        "Developed predictive models for customer segmentation using clustering algorithms",
        "Presented findings and insights to stakeholders through visualizations and reports"
      ],
      logo: ""
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-darkPurple/50">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-violet/10 filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-magenta/10 filter blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-magenta to-violet">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-magenta to-violet mx-auto rounded-full"></div>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            My professional journey in the world of data science and AI
          </p>
          <div className="mt-8">
            <a
              href="https://www.linkedin.com/in/divyansh-pandey-ds/details/certifications/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-golden text-white px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-shadow hover:brightness-110 hover-glow mt-2"
            >
              Click here to view licenses and certifications
            </a>
          </div>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b from-magenta via-violet to-golden hidden md:block"></div>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className={`flex flex-col md:flex-row items-center md:items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content side (main card) */}
                <div 
                  className={`w-full md:w-5/12 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  } transition-all duration-700`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="glass-card p-8 rounded-2xl hover-glow bg-gradient-to-br from-darkPurple/60 to-secondaryPurple/10 backdrop-blur-md border border-white/10">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-golden">{exp.position}</h3>
                      <p className="text-white/80">{exp.company}</p>
                    </div>
                    <div className="flex items-center mb-2 text-sm">
                      <span className="text-white/60 mr-4">{exp.period}</span>
                      <span className="text-white/60">{exp.location}</span>
                    </div>
                    <div className="mb-3">
                      <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium cursor-default ${
                                exp.mode === 'Remote' 
                                  ? 'bg-green-500/20 text-green-300' 
                                  : exp.mode === 'Hybrid'
                                    ? 'bg-blue-500/20 text-blue-300'
                                    : 'bg-orange-500/20 text-orange-300'
                              }`}>
                                {exp.mode}
                              </span>
                            </TooltipTrigger>
                            <TooltipContent>
                              {exp.mode} role
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                    </div>
                    <p className="text-white/70 mb-4">{exp.description}</p>
                    <h4 className="text-sm font-semibold mb-2 text-white/90">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start text-sm text-white/70">
                          <span className="mr-2 mt-1 text-golden">•</span>
                          <span className="text-golden">{i === 0 ? resp : <span className="text-white/70">{resp}</span>}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Timeline dot for mobile */}
                <div className="my-4 md:hidden w-4 h-4 rounded-full bg-gradient-to-r from-magenta to-violet"></div>
                {/* Timeline element for desktop */}
                <div className="hidden md:flex w-2/12 justify-center items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-magenta to-violet flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                </div>
                {/* Alternate side content */}
                <div className="w-full md:w-5/12 mt-4 md:mt-0 transition-all duration-700">
                  {/* Empty for now; alternate side panels removed as per instructions */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ExperienceSection;
