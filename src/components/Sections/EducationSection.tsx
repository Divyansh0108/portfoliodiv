
import { useState, useEffect } from "react";

type Education = {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  logo: string;
};

type Publication = {
  id: number;
  title: string;
  journal: string;
  date: string;
  description: string;
  url: string;
  authors: string;
};

type Award = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
};

const EducationSection = () => {
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
    
    const section = document.getElementById("education");
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const education: Education[] = [
    {
      id: 1,
      degree: "Ph.D. in Data Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      period: "2019 - 2023",
      description: "Focused on advanced machine learning algorithms and their applications in healthcare. Thesis on 'Deep Learning Models for Early Disease Detection using Multi-modal Data'.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Stanford_Cardinal_logo.svg/320px-Stanford_Cardinal_logo.svg.png"
    },
    {
      id: 2,
      degree: "M.S. in Computer Science",
      institution: "Massachusetts Institute of Technology",
      location: "Cambridge, MA",
      period: "2017 - 2019",
      description: "Specialized in Artificial Intelligence and Machine Learning. Conducted research on natural language processing and computer vision algorithms.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/320px-MIT_logo.svg.png"
    },
    {
      id: 3,
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Indian Institute of Technology",
      location: "Delhi, India",
      period: "2013 - 2017",
      description: "Graduated with honors. Specialized in algorithms and data structures. Completed capstone project on predictive modeling for stock market analysis.",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/IIT_Delhi_Logo.svg/320px-IIT_Delhi_Logo.svg.png"
    }
  ];

  const publications: Publication[] = [
    {
      id: 1,
      title: "BARBELL EXERCISE CLASSIFICATION AND REPETITION COUNTING UP",
      journal: "HITA 2024, Springer Nature",
      date: "2024",
      description: "Developed a machine learning model for barbell exercise classification & repetition counting using MetaMotion sensor data.",
      authors: "Divyansh Pandey (1st author)",
      url: "#"
    },
    {
      id: 2,
      title: "DRIVING MEDICAL DIAGNOSTICS FORWARD: THE ROLE OF AI IN INNOVATION AND IMPLEMENTATION",
      journal: "Under Review",
      date: "2025",
      description: "Examined the transformative effects of AI on diagnostic procedures in radiology, pathology, and dermatology, emphasizing enhanced precision and workflow automation through advanced algorithms.",
      authors: "Divyansh Pandey, et al.",
      url: "#"
    }
  ];

  const awards: Award[] = [
    {
      id: 1,
      title: "Dean's List for Excellence in Academics",
      issuer: "Stanford University",
      date: "2022",
      description: "Recognized for having the highest Grade Point Average (GPA) in the Data Science program."
    },
    {
      id: 2,
      title: "Dean's List for Excellence in Academics and Off-campus achievements",
      issuer: "Stanford University",
      date: "2021",
      description: "Recognized for outstanding academic performance and contributions to research projects outside the university."
    },
    {
      id: 3,
      title: "Certification of Participation in Xiaomi Ode2Code 3.0",
      issuer: "Xiaomi",
      date: "2020",
      description: "Selected to participate in this prestigious coding competition among thousands of applicants."
    }
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-violet/10 filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-magenta/10 filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-magenta to-violet">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-magenta to-violet mx-auto rounded-full"></div>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </div>
        
        {/* Education Timeline */}
        <div className="relative mb-20">
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-magenta via-violet to-golden hidden md:block ml-6"></div>
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div 
                key={edu.id}
                className={`relative pl-16 transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-magenta to-violet flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                </div>
                
                <div className="glass-card p-6 rounded-xl hover-glow">
                  <div className="flex items-start">
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      <p className="text-white/80 mb-1">{edu.institution}, {edu.location}</p>
                      <p className="text-white/60 text-sm mb-4">{edu.period}</p>
                      <p className="text-white/70">{edu.description}</p>
                    </div>
                    <img 
                      src={edu.logo} 
                      alt={edu.institution} 
                      className="w-16 h-16 object-contain ml-4 hidden md:block"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Publications Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-magenta to-violet">Publications</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-magenta to-violet mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {publications.map((pub, index) => (
              <div 
                key={pub.id}
                className={`glass-card p-6 rounded-xl hover-glow transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200 + 400}ms` }}
              >
                <div className="mb-1 inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/10">
                  {pub.journal} • {pub.date}
                </div>
                <h3 className="text-xl font-semibold mt-3 mb-2">{pub.title}</h3>
                <p className="text-white/70 mb-3 text-sm">{pub.description}</p>
                <p className="text-white/60 text-sm">Authors: {pub.authors}</p>
                
                <div className="mt-4">
                  <a 
                    href={pub.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-shadow px-4 py-2 rounded-lg text-sm font-medium bg-transparent border border-white/20 text-white hover:bg-white/5 transition-colors inline-flex items-center"
                  >
                    Read Publication
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Awards Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-magenta to-violet">Awards</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-magenta to-violet mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div 
                key={award.id}
                className={`glass-card p-6 rounded-xl hover-glow transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200 + 600}ms` }}
              >
                <div className="text-golden flex justify-center mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v5.586l-2.293-2.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L11 10.586V5z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-center text-lg font-semibold mb-2">{award.title}</h3>
                <div className="text-center mb-3">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/10">
                    {award.issuer} • {award.date}
                  </span>
                </div>
                <p className="text-white/70 text-sm text-center">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
