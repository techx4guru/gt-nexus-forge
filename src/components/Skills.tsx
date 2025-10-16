import { Card, CardContent } from "@/components/ui/card";
import { Code2, Brain, Shield, Globe, TrendingUp, Blocks } from "lucide-react";

const competencies = [
  {
    icon: Code2,
    title: "Full-Stack Web Development",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Blocks,
    title: "Blockchain / Web3 Engineering",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Brain,
    title: "AI / Machine Learning",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Shield,
    title: "Cybersecurity / Ethical Hacking",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: TrendingUp,
    title: "Forex & Financial Systems",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Globe,
    title: "Content Strategy & Digital Influence",
    color: "from-indigo-500 to-blue-500",
  },
];

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind", "Redux", "React Query"],
    level: 95,
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Supabase", "Firebase", "PostgreSQL", "MongoDB"],
    level: 90,
  },
  {
    category: "AI / ML",
    items: ["Python", "LangChain", "OpenAI API", "TensorFlow", "Scikit-learn", "Vector DBs"],
    level: 85,
  },
  {
    category: "Blockchain",
    items: ["Solidity", "Hardhat", "Foundry", "Web3.js", "Ethers.js", "IPFS"],
    level: 80,
  },
  {
    category: "Security",
    items: ["Burp Suite", "Metasploit", "Wireshark", "Frida", "OWASP ZAP"],
    level: 85,
  },
  {
    category: "DevOps",
    items: ["Docker", "CI/CD", "Vercel", "GitHub Actions"],
    level: 88,
  },
  {
    category: "Forex / Analytics",
    items: ["MetaTrader", "Python (pandas)", "TradingView scripts"],
    level: 82,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Core Competencies */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Core Competencies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {competencies.map((comp, index) => (
            <Card
              key={index}
              className="group border-none shadow-soft hover:shadow-intense transition-all duration-300 cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${comp.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <comp.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg">{comp.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Skills */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="border-none shadow-soft hover:shadow-glow transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-primary">{skill.category}</h3>
                  <span className="text-sm font-medium text-muted-foreground">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-muted rounded-full h-2 mb-4 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-muted/50 rounded-full text-sm font-medium text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
