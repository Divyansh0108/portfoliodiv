
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative animated-gradient-bg overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-magenta/20 filter blur-3xl animate-pulse" style={{ animationDuration: '10s' }}></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-violet/20 filter blur-3xl animate-pulse" style={{ animationDuration: '15s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-96 h-96 rounded-full bg-golden/10 filter blur-3xl animate-pulse" style={{ animationDuration: '12s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 pt-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className={`md:w-2/3 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-lg md:text-xl font-medium text-magenta mb-2">
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Divyansh Pandey
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-magenta to-violet">
              Data Scientist & ML Engineer
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Transforming raw data into meaningful insights and powerful AI solutions.
              Specializing in machine learning, deep learning, and data visualization.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#contact" 
                className="btn-shadow px-6 py-3 rounded-lg font-medium bg-gradient-to-r from-magenta to-violet text-white flex items-center justify-center group"
              >
                Contact Me
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a 
                href="#projects" 
                className="btn-shadow px-6 py-3 rounded-lg font-medium bg-transparent border border-white/20 text-white hover:bg-white/5 transition-colors flex items-center justify-center"
              >
                View My Work
              </a>
            </div>

            <div className="mt-12 flex items-center space-x-6">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-magenta to-violet flex items-center justify-center text-white text-xs font-medium">ML</div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-violet to-secondaryPurple flex items-center justify-center text-white text-xs font-medium">AI</div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-secondaryPurple to-golden flex items-center justify-center text-white text-xs font-medium">DL</div>
              </div>
              <p className="text-white/70 text-sm">
                Specialized in ML, AI, and Deep Learning technologies
              </p>
            </div>
          </div>

          <div className={`md:w-1/3 mt-12 md:mt-0 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-magenta/20 to-violet/20 rounded-2xl blur-xl transform -rotate-6"></div>
              <div className="glass-card p-6 rounded-2xl relative z-10 transform transition-transform duration-300 hover:rotate-2 floating">
                <div className="p-2 bg-darkPurple/80 rounded-xl mb-4">
                  <div className="h-6 flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="h-4 w-3/4 bg-white/10 rounded"></div>
                  <div className="h-4 w-full bg-white/10 rounded"></div>
                  <div className="h-4 w-5/6 bg-white/10 rounded"></div>
                  <div className="h-4 w-4/6 bg-white/10 rounded"></div>
                  <div className="mt-6 flex justify-end">
                    <div className="h-6 w-24 bg-gradient-to-r from-magenta to-violet rounded"></div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-golden to-magenta rounded-lg transform rotate-12 opacity-70 blur-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="text-white/60 text-sm mb-2">Scroll Down</div>
        <div className="w-5 h-10 rounded-full border border-white/20 flex items-center justify-center p-1">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
