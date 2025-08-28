
import { useState, useEffect } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "../ui/tooltip";

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
      <TooltipProvider>
        <div className="container mx-auto px-4 z-10 pt-24 flex flex-col items-center justify-center">
          <div className={`w-full max-w-3xl flex flex-col items-center justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-lg md:text-xl font-medium text-magenta mb-2 text-center">
              Hello, I&apos;m
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
              Divyansh Pandey
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-magenta to-violet text-center">
              Data Scientist, Applied Researcher, ML Engineer
            </h2>
            <p className="text-lg text-white/80 mb-2 max-w-2xl text-center">
              Transforming raw data into meaningful insights and powerful AI solutions.
            </p>
            <p className="text-lg mb-8 max-w-2xl text-center text-golden font-semibold">
              Specializing in machine learning, deep learning, and data visualization.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://www.linkedin.com/in/divyansh-pandey-ds/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-shadow px-4 py-3 rounded-lg font-medium bg-gradient-to-r from-blue-600 to-blue-700 text-white flex items-center justify-center group transition-shadow hover:shadow-[0_0_20px_5px_rgba(37,99,235,0.25)]"
                  >
                    LinkedIn
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  LinkedIn Profile
                </TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://peerlist.io/divyanshpandey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-shadow px-4 py-3 rounded-lg font-medium bg-gradient-to-r from-green-600 to-green-700 text-white flex items-center justify-center group transition-shadow hover:shadow-[0_0_20px_5px_rgba(34,197,94,0.25)]"
                  >
                    Peerlist
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  Peerlist Profile
                </TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://medium.com/@divyanshpandey0108"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-shadow px-4 py-3 rounded-lg font-medium bg-gradient-to-r from-gray-800 to-gray-900 text-white flex items-center justify-center group transition-shadow hover:shadow-[0_0_20px_5px_rgba(107,114,128,0.25)]"
                  >
                    Medium
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  Medium Articles
                </TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://www.instagram.com/metadatahere/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-shadow px-4 py-3 rounded-lg font-medium bg-gradient-to-r from-pink-600 to-purple-600 text-white flex items-center justify-center group transition-shadow hover:shadow-[0_0_20px_5px_rgba(236,72,153,0.25)]"
                  >
                    Instagram
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  Instagram Profile
                </TooltipContent>
              </Tooltip>
            </div>
            <div className="mt-12 flex flex-col items-center space-y-4">
              <div className="flex flex-row justify-center items-center gap-3">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-magenta to-violet flex items-center justify-center text-white text-xs font-medium shadow-lg cursor-pointer">
                      ML
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    Machine Learning
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-violet to-secondaryPurple flex items-center justify-center text-white text-xs font-medium shadow-lg cursor-pointer">
                      AI
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    Artificial Intelligence
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-secondaryPurple to-golden flex items-center justify-center text-white text-xs font-medium shadow-lg cursor-pointer">
                      DL
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    Deep Learning
                  </TooltipContent>
                </Tooltip>
              </div>
              <p className="text-white/70 text-sm mt-2 text-center">
                Specialized in ML, AI, and Deep Learning technologies
              </p>
            </div>
          </div>
        </div>
      </TooltipProvider>
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
