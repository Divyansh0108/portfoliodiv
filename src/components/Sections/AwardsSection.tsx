
import { Award, ArrowUpRight } from "lucide-react";

const awards = [
  {
    title: "Winner",
    competition: "Smart India Hackathon 2023",
    organization: "Government of India",
    date: "2023",
    link: "https://sih.gov.in/sih2023PS",
  },
  {
    title: "Runner Up",
    competition: "Xiaomi Ode2Code 3.0",
    organization: "Xiaomi India",
    date: "2023",
    link: "https://ode2code.in/",
  },
  {
    title: "Top 100 Finalist",
    competition: "ASEAN India Hackathon",
    organization: "Ministry of Education",
    date: "2023",
    link: "https://www.aicte-india.org/Asean2023/index.php",
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
            <a
              key={index}
              href={award.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-xl bg-gradient-to-br from-darkPurple/80 to-magenta/15 backdrop-blur-lg border border-white/10 hover-glow transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <Award className="w-8 h-8 text-golden" />
                <ArrowUpRight className="w-6 h-6 text-magenta opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-golden mb-2">{award.title}</h3>
              <p className="text-white/90 font-medium">{award.competition}</p>
              <p className="text-white/70 text-sm mt-1">{award.organization}</p>
              <p className="text-white/50 text-sm mt-2">{award.date}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
