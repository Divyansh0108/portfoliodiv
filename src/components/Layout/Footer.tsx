
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Mail,
  ArrowUp
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-darkPurple/80 backdrop-blur-md pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-2xl font-bold mb-4 md:mb-0 bg-clip-text text-transparent bg-gradient-to-r from-magenta to-violet">
            Divyansh<span className="text-golden">.</span>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/Divyansh0108" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover-glow rounded-full p-2 bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-white" />
            </a>
            <a 
              href="https://www.linkedin.com/in/divyansh-pandey-ds/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover-glow rounded-full p-2 bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
            <a 
              href="https://www.instagram.com/hey.div__/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover-glow rounded-full p-2 bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>
            <a 
              href="https://www.kaggle.com/div0108" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover-glow rounded-full p-2 bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Kaggle"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current">
                <path d="M17.4 12.6c-.1 0-.2 0-.3-.1L13 9.3c-.1-.1-.2-.3-.2-.5s.1-.4.2-.5l4.1-3.2c.2-.1.5-.1.7.1.1.2.1.5-.1.7l-3.8 3 3.8 3c.2.2.2.5.1.7-.1.1-.3.2-.4.2zM12 20.7c-3 0-5.9-1.2-8-3.3-2.1-2.1-3.3-5-3.3-8s1.2-5.9 3.3-8c2.1-2.1 5-3.3 8-3.3s5.9 1.2 8 3.3c2.1 2.1 3.3 5 3.3 8s-1.2 5.9-3.3 8c-2.1 2.1-5 3.3-8 3.3zM12 2.2C7.2 2.2 3.2 6.2 3.2 11s4 8.8 8.8 8.8 8.8-4 8.8-8.8-4-8.8-8.8-8.8z"/>
              </svg>
            </a>
            <a 
              href="https://medium.com/@divyanshpandey0108" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover-glow rounded-full p-2 bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Medium"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
              </svg>
            </a>
            <a 
              href="mailto:divyanshpandey0108@gmail.com" 
              className="hover-glow rounded-full p-2 bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            Made with <span className="text-golden text-base animate-pulse">&#10084;</span> by Divyansh Pandey &copy; {new Date().getFullYear()}
          </p>
          <div className="flex">
            <button 
              onClick={scrollToTop}
              className="hover-glow rounded-full p-2 bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
