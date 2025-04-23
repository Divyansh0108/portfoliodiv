
import { useState, useEffect } from "react";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "../ui/tooltip";

type Experience = {
  id: number;
  company: string;
  position: string;
  period: string;
  location: string;
  mode: "Remote" | "Onsite" | "Hybrid" | "Part Time";
  description: string;
};

const experiences: Experience[] = [
  {
    id: 1,
    company: "IIT Hyderabad VIGIL Labs",
    position: "Intern",
    period: "April 2025 - Present",
    location: "Hyderabad, India",
    mode: "Remote",
    description: "",
  },
  {
    id: 2,
    company: "Redwood Lab",
    position: "Member & Contributor",
    period: "Jan 2025 - Present",
    location: "Jaipur, Rajasthan, India",
    mode: "Remote",
    description: "",
  },
  {
    id: 3,
    company: "Social Winter of Code (SWOC)",
    position: "Contributor",
    period: "Jan 2025 - Mar 2025",
    location: "Jaipur, Rajasthan, India",
    mode: "Remote",
    description: "",
  },
  {
    id: 4,
    company: "OctoBERT",
    position: "Contributor",
    period: "Oct 2024",
    location: "Jaipur, Rajasthan, India",
    mode: "Remote",
    description: "",
  },
  {
    id: 5,
    company: "Forage (JP Morgan, Chase and Co. Virtual Program)",
    position: "Virtual Simulation Intern",
    period: "Jan 2024",
    location: "Jaipur, Rajasthan, India",
    mode: "Remote",
    description: "",
  },
  {
    id: 6,
    company: "Casa Private Limited",
    position: "Student Intern (Part Time)",
    period: "Jul 2023 - Aug 2023",
    location: "Jaipur, Rajasthan, India",
    mode: "Remote",
    description: "",
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
    <section id="experience" className="py-20 relative overflow-hidden bg-darkPurple/60">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-80 rounded-full bg-violet/10 filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-magenta/10 filter blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-magenta to-violet">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-magenta to-violet mx-auto rounded-full"></div>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            My professional journey in the world of engineering and technology
          </p>
          <div className="mt-8">
            <a
              href="https://linkedin.com/in/divyansh-pandey-ds/details/certifications/"
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
                  className={`w-full md:w-7/12 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  } transition-all duration-700`}
                  style={{ transitionDelay: `${index * 180}ms` }}
                >
                  <div className="glass-card p-10 rounded-3xl hover-glow bg-gradient-to-br from-darkPurple/85 to-secondaryPurple/15 backdrop-blur-md border border-white/10 shadow-lg">
                    <div className="mb-2">
                      <h3 className="text-xl font-bold text-golden">{exp.position}</h3>
                      <p className="text-lg font-medium text-white/90">{exp.company}</p>
                    </div>
                    <div className="flex flex-wrap items-center mb-2 text-base gap-x-4 gap-y-1 text-white/60">
                      <span>{exp.period}</span>
                      <span className="hidden md:inline">|</span>
                      <span>{exp.location}</span>
                      <span className="hidden md:inline">|</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span
                              className={`inline-block px-3 py-1 rounded-full text-xs font-medium cursor-default border ${
                                exp.mode === "Remote"
                                  ? "bg-green-500/10 text-green-300 border-green-700/40"
                                  : exp.mode === "Part Time"
                                    ? "bg-blue-500/10 text-blue-200 border-blue-700/40"
                                    : exp.mode === "Onsite"
                                      ? "bg-orange-500/10 text-orange-200 border-orange-700/40"
                                      : "bg-white/10 text-white/60 border-white/30"
                              }`}
                            >
                              {exp.mode}
                            </span>
                          </TooltipTrigger>
                          <TooltipContent>
                            {exp.mode} role
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
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
                <div className="w-full md:w-3/12 mt-4 md:mt-0 transition-all duration-700">
                  {/* empty for symmetry/alignment */}
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
