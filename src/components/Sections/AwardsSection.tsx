
import { Award, ArrowUpRight } from "lucide-react";

const awards = [
  {
    title: "Dean's List of All Round Excellence",
    competition: "Manipal University Jaipur",
    organization: "Manipul University Jaipur",
    date: "April 2025",
    description: "In recognition of off-campus achievements and overall excellence.",
    link: "https://shorturl.at/i3OXr",
  },
  {
    title: "Dean's List Excellence in Academics",
    competition: "Manipal University Jaipur",
    organization: "Manipul University Jaipur",
    date: "April 2024",
    description: "Awarded for securing the highest Grade Point Average in Computer Science and Engineering (AIML).",
    link: "https://shorturl.at/EBLh7",
  },
  {
    title: "Runner Up",
    competition: "Xiaomi Ode2Code 3.0",
    organization: "Xiaomi India",
    date: "2023",
    description: "",
  },
];

const AwardsSection = () => {
  return (
    <section id="awards" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-magenta to-violet">Awards</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-magenta to-violet mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-gradient-to-br from-darkPurple/80 to-magenta/15 backdrop-blur-lg border border-white/10 hover-glow transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <Award className="w-8 h-8 text-golden" />
                {award.link && (
                  <a 
                    href={award.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    <ArrowUpRight className="w-6 h-6 text-magenta group-hover:text-golden transition-colors duration-300" />
                  </a>
                )}
              </div>
              <div className={award.link ? 'cursor-pointer' : ''}>
                {award.link ? (
                  <a 
                    href={award.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <h3 className="text-xl font-semibold text-golden mb-2">{award.title}</h3>
                    <p className="text-white/90 font-medium">{award.competition}</p>
                    <p className="text-white/70 text-sm mt-1">{award.organization}</p>
                    <p className="text-white/50 text-sm mt-2">{award.date}</p>
                    {award.description && (
                      <p className="text-white/70 text-sm mt-3 italic">{award.description}</p>
                    )}
                  </a>
                ) : (
                  <>
                    <h3 className="text-xl font-semibold text-golden mb-2">{award.title}</h3>
                    <p className="text-white/90 font-medium">{award.competition}</p>
                    <p className="text-white/70 text-sm mt-1">{award.organization}</p>
                    <p className="text-white/50 text-sm mt-2">{award.date}</p>
                    {award.description && (
                      <p className="text-white/70 text-sm mt-3 italic">{award.description}</p>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
