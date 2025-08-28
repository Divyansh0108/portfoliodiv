
import { useState, useEffect } from "react";
import { ChevronDown, Briefcase } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

type Experience = {
  id: number;
  position: string;
  company: string;
  type: string;
  mode: string;
  location: string;
  period: string;
  current?: boolean;
  responsibilities?: string[];
};

const experience: Experience[] = [
  {
    id: 3,
    position: "Contributor",
    company: "Social Winter of Code (SWOC)",
    type: "Part Time Internship",
    mode: "Remote",
    location: "Jaipur, Rajasthan, India",
    period: "Jan 2025 - Mar 2025",
    responsibilities: [
      "Labelling and annotating images of land, sea, and sky animals for an animal info provider chatbot",
      "Developed custom Selenium webscraper for efficient image data collection",
      "Trained custom YOLOv8 model on collected dataset for improved accuracy"
    ]
  },
  {
    id: 4,
    position: "Contributor",
    company: "HacktoberFest",
    type: "Remote",
    mode: "Remote",
    location: "Jaipur, Rajasthan, India",
    period: "Oct 2024 - Oct 2024",
    responsibilities: [
      "Contributed to open-source projects focusing on AI and machine learning implementations",
      "Developed and optimized algorithms for computer vision and natural language processing tasks",
      "Collaborated with global developers to improve code quality, documentation, and project scalability",
      "Participated in code reviews and maintained best practices for ML model deployment"
    ]
  },
  {
    id: 5,
    position: "Virtual Engineering Simulation",
    company: "Forage (JP Morgan Chase & Co.)",
    type: "Internship",
    mode: "Remote",
    location: "Jaipur, Rajasthan, India",
    period: "Jan 2024 - Jan 2024",
    responsibilities: [
      "Completed a simulation focused on the process of completing an engineering ticket for a system in the credit-card rewards department of JPMorgan Chase & Co.",
      "Created a new class to get an existing system up and running",
      "Wrote a comprehensive test suite for the class added"
    ]
  }
];

const currentExperience: Experience[] = [
  {
    id: 6,
    position: "Intern",
    company: "IIT Hyderabad (VIGIL Labs)",
    type: "Internship",
    mode: "Remote",
    location: "Hyderabad, Telangana, India",
    period: "Apr 2025 - Present",
    current: true,
    responsibilities: [
      "Contributed to the development of a federated learning model for decentralized medical image classification and segmentation",
      "Addressed challenges of distributed data privacy, heterogeneity, and communication efficiency, reducing global communication round time by 45% and using 55% fewer resources than baselines through proposed improvements",
      "Proposed and implemented improvements to enhance performance and alignment with project objectives",
      "Understood and worked with complex machine learning workflows, including model aggregation strategies and secure computation techniques"
    ]
  },
];

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

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-violet/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-magenta/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-magenta to-violet">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-magenta to-violet mx-auto rounded-full"></div>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            A summary of my work experience and contributions
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-magenta via-violet to-golden hidden md:block ml-6"></div>
          
          <div className="space-y-8">
            {currentExperience.concat(experience).map((exp, index) => (
              <div
                key={exp.id}
                className={`relative pl-16 transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-magenta to-violet flex items-center justify-center">
                    <Briefcase className="w-4 h-4 text-white" />
                  </div>
                </div>

                <Collapsible className="w-full">
                  <div className="bg-gradient-to-br from-darkPurple/80 to-magenta/15 backdrop-blur-lg border border-white/10 p-6 rounded-xl hover-glow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-golden">{exp.position}</h3>
                        <div className="text-white/80 font-medium">{exp.company}</div>
                        <div className="text-violet-300 text-sm font-medium">{exp.period}</div>
                      </div>
                      <CollapsibleTrigger className="self-end md:self-center">
                        <button className="px-4 py-2 text-sm rounded-lg bg-white/5 hover:bg-white/10 transition-colors flex items-center gap-2 text-magenta font-medium">
                          Read More
                          <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                        </button>
                      </CollapsibleTrigger>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-6 mt-2 text-white/70 text-sm">
                      <span className="text-white/80">{exp.location}</span>
                      <span className="mx-2">|</span>
                      <span className="text-white/80">{exp.mode}</span>
                      <span className="mx-2">|</span>
                      <span className="text-violet-200">{exp.type}</span>
                      {exp.current && (
                        <span className="ml-4 px-3 py-0.5 rounded-full bg-golden/10 text-golden text-xs font-semibold">
                          Current
                        </span>
                      )}
                    </div>

                    <CollapsibleContent>
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <h4 className="text-violet-300 font-medium mb-2">Key Responsibilities:</h4>
                        <ul className="space-y-2">
                          {exp.responsibilities?.map((responsibility, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-white/70">
                              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-400 shrink-0"></span>
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CollapsibleContent>
                  </div>
                </Collapsible>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
