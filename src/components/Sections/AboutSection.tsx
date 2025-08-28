
import { useState, useEffect } from "react";

const AboutSection = () => {
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

    const section = document.getElementById("about");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-magenta/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-magenta to-violet">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-magenta to-violet mx-auto rounded-full"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className={`flex-shrink-0 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-magenta/20 to-violet/20 p-1">
                <img 
                  src="/lovable-uploads/d86ad75d-5bfe-4922-ab6a-1fa3acea42e0.png" 
                  alt="Divyansh Pandey - Data Scientist and ML Engineer"
                  className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-magenta/20 to-violet/20 rounded-3xl blur-xl opacity-75"></div>
            </div>
          </div>

          {/* About Content */}
          <div className={`max-w-2xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-semibold mb-4 text-center">Data Scientist | Applied Researcher | ML Engineer | Avid Learner</h3>
            
            <p className="text-white/80 mb-6 text-lg leading-relaxed text-center">
              I'm a passionate Data Scientist and Machine Learning Engineer with expertise in developing AI-powered solutions 
              for complex problems. My journey in the world of data started with a curiosity about how numbers tell stories 
              and evolved into a career of transforming data into actionable insights and intelligent systems.
            </p>
            
            <p className="text-white/80 mb-8 text-lg leading-relaxed text-center">
              I specialize in developing machine learning models, deep learning architectures, and data visualization 
              systems that help organizations make data-driven decisions. With a strong foundation in statistics, 
              programming, and problem-solving, I bring a unique perspective to every project I undertake.
            </p>
            
            <div className="flex justify-center">
              <a href="#contact" className="btn-shadow px-6 py-3 rounded-lg font-medium bg-gradient-to-r from-magenta to-violet text-white flex items-center justify-center">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
