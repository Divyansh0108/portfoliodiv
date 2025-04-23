
import { useState, useEffect } from "react";

type Experience = {
  id: number;
  position: string;
  company: string;
  type: string;
  mode: string;
  location: string;
  period: string;
  current?: boolean;
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
  },
  {
    id: 4,
    position: "Contributor",
    company: "HacktoberFest",
    type: "Remote",
    mode: "Remote",
    location: "Jaipur, Rajasthan, India",
    period: "Oct 2024 - Oct 2024",
  },
  {
    id: 5,
    position: "Virtual Engineering Simulation",
    company: "Forage (JP Morgan Chase & Co.)",
    type: "Internship",
    mode: "Remote",
    location: "Jaipur, Rajasthan, India",
    period: "Jan 2024 - Jan 2024",
  }
];

const currentExperience: Experience[] = [
  {
    id: 6,
    position: "Intern",
    company: "IIT Hyderabad (VIGIL Labs)",
    type: "Internship",
    mode: "On-site",
    location: "Hyderabad, India",
    period: "Apr 2025 - Present",
    current: true,
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
        <div className="space-y-10">
          {currentExperience.concat(experience).map((exp, index) => (
            <div
              key={exp.id}
              className={`bg-gradient-to-br from-darkPurple/80 to-magenta/15 backdrop-blur-lg border border-white/10 p-6 rounded-xl hover-glow transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-golden">{exp.position}</h3>
                  <div className="text-white/80">{exp.company}</div>
                </div>
                <div className="text-white/60 text-sm">{exp.period}</div>
              </div>
              <div className="flex flex-wrap items-center gap-x-6 mt-2 text-white/70 text-sm">
                <span>{exp.location}</span>
                <span className="mx-2">|</span>
                <span>{exp.mode}</span>
                {/* <span>{exp.type}</span> */}
                {exp.current && (
                  <span className="ml-4 px-3 py-0.5 rounded-full bg-golden/10 text-golden text-xs font-semibold">
                    Current
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
