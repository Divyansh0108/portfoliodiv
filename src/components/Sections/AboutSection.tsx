
import { useState, useEffect } from "react";
import { FileText } from "lucide-react";

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
          <div className={`lg:w-1/3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-magenta/30 to-violet/30 rounded-2xl blur-xl transform rotate-6"></div>
              <div className="relative rounded-2xl overflow-hidden glass-card p-2 hover-glow">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                  alt="Divyansh Pandey" 
                  className="rounded-xl w-full aspect-[4/5] object-cover"
                />
                <div className="absolute bottom-2 left-2 right-2 glass-card p-2 rounded-lg">
                  <p className="text-white font-medium">Divyansh Pandey</p>
                  <p className="text-white/70 text-sm">Data Scientist & ML Engineer</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* About Content */}
          <div className={`lg:w-2/3 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-2xl font-semibold mb-4">
              Data Wizard | ML Engineer | Problem Solver
            </h3>
            
            <p className="text-white/80 mb-6 text-lg leading-relaxed">
              I'm a passionate Data Scientist and Machine Learning Engineer with expertise in developing AI-powered solutions 
              for complex problems. My journey in the world of data started with a curiosity about how numbers tell stories 
              and evolved into a career of transforming data into actionable insights and intelligent systems.
            </p>
            
            <p className="text-white/80 mb-8 text-lg leading-relaxed">
              I specialize in developing machine learning models, deep learning architectures, and data visualization 
              systems that help organizations make data-driven decisions. With a strong foundation in statistics, 
              programming, and problem-solving, I bring a unique perspective to every project I undertake.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#contact" 
                className="btn-shadow px-6 py-3 rounded-lg font-medium bg-gradient-to-r from-magenta to-violet text-white flex items-center justify-center"
              >
                Contact Me
              </a>
              <a 
                href="#" 
                className="btn-shadow px-6 py-3 rounded-lg font-medium bg-transparent border border-white/20 text-white hover:bg-white/5 transition-colors flex items-center justify-center"
                download
              >
                <FileText className="mr-2 w-5 h-5" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
