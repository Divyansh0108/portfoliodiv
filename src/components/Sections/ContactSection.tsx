import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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
    
    const section = document.getElementById("contact");
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-darkPurple/50">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-violet/10 filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-magenta/10 filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contact <span className="bg-clip-text text-transparent bg-gradient-to-r from-magenta to-violet">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-magenta to-violet mx-auto rounded-full"></div>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, projects, or just a friendly chat
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div 
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-gradient-to-br from-darkPurple/60 to-secondaryPurple/10 backdrop-blur-md border border-white/10 p-8 rounded-xl hover-glow">
              <h3 className="text-2xl font-semibold mb-6 text-white">Get In Touch</h3>
              <p className="text-white/70 mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Email</h4>
                    <a 
                      href="mailto:divyanshpandey0108@gmail.com" 
                      className="text-white hover:text-white/80 transition-colors"
                    >
                      divyanshpandey0108@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mr-4">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Phone</h4>
                    <a 
                      href="tel:+919305425557" 
                      className="text-white hover:text-white/80 transition-colors"
                    >
                      +91 9305425557
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mr-4">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Location</h4>
                    <p className="text-white">
                      Lucknow, Uttar Pradesh, India
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-lg font-medium mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/divyansh-pandey-ds/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors hover-glow"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a 
                    href="https://github.com/Divyansh0108" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors hover-glow"
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 2.2C7.2 2.2 3.2 6.2 3.2 11s4 8.8 8.8 8.8 8.8-4 8.8-8.8-4-8.8-8.8-8.8z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.kaggle.com/div0108" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors hover-glow"
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
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors hover-glow"
                    aria-label="Medium"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current">
                      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/hey.div__/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors hover-glow"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  <a 
                    href="mailto:divyanshpandey0108@gmail.com" 
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors hover-glow"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-darkPurple/60 to-secondaryPurple/10 backdrop-blur-md border border-white/10 p-8 rounded-xl hover-glow">
              <h3 className="text-2xl font-semibold mb-6 text-white">Send Me a Message</h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet/50 text-white"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                    Your Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet/50 text-white"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                    Your Message
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet/50 text-white resize-none"
                    placeholder="Hi Divyansh, I'd like to talk about..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-shadow w-full px-6 py-3 rounded-lg font-medium text-white flex items-center justify-center group ${
                    isSubmitting ? 'bg-white/10 cursor-not-allowed' : 'bg-gradient-to-r from-magenta to-violet'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : submitSuccess ? (
                    <span className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Message Sent!
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message
                      <Send className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
