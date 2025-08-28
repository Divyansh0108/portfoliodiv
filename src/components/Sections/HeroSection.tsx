
import { useState, useEffect } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "../ui/tooltip";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const titles = ["Data Scientist", "Applied Researcher", "ML Engineer"];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    let timeoutId: NodeJS.Timeout;

    if (isTyping) {
      if (displayedText.length < currentTitle.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
        }, 80);
      } else {
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 1200);
      }
    } else {
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50);
      } else {
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayedText, currentTitleIndex, isTyping, titles]);

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
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-magenta to-violet text-center min-h-[3rem] md:min-h-[4rem]">
              {displayedText}
              <span className="animate-pulse">|</span>
            </h2>
            <p className="text-lg text-white/80 mb-2 max-w-2xl text-center">
              Transforming raw data into meaningful insights and powerful AI solutions.
            </p>
            <p className="text-lg mb-8 max-w-2xl text-center text-golden font-semibold">
              Specializing in machine learning, deep learning, and data visualization.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://www.linkedin.com/in/divyansh-pandey-ds/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-blue-600/20 hover:border-blue-400/40 hover:text-blue-300 transition-all duration-300 hover:scale-110"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
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
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-green-600/20 hover:border-green-400/40 hover:text-green-300 transition-all duration-300 hover:scale-110"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16c-.169-.47-.421-.89-.752-1.254-.33-.364-.74-.649-1.228-.855-.488-.206-1.016-.31-1.584-.31-.568 0-1.096.104-1.584.31-.488.206-.898.491-1.228.855-.33.364-.583.784-.752 1.254-.169.47-.254.973-.254 1.509 0 .536.085 1.039.254 1.509.169.47.421.89.752 1.254.33.364.74.649 1.228.855.488.206 1.016.31 1.584.31.568 0 1.096-.104 1.584-.31.488-.206.898-.491 1.228-.855.33-.364.583-.784.752-1.254.169-.47.254-.973.254-1.509 0-.536-.085-1.039-.254-1.509z"/>
                    </svg>
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
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-gray-600/20 hover:border-gray-400/40 hover:text-gray-300 transition-all duration-300 hover:scale-110"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                    </svg>
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
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-pink-600/20 hover:border-pink-400/40 hover:text-pink-300 transition-all duration-300 hover:scale-110"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
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
