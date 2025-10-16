import { Card, CardContent } from "@/components/ui/card";
import { Award, Brain, Shield, Blocks, TrendingUp } from "lucide-react";

const certifications = [
  {
    icon: Award,
    title: "Meta Frontend Developer",
    issuer: "Meta",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Brain,
    title: "Google AI Essentials",
    issuer: "Coursera",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "Cybersecurity Certifications",
    issuer: "TryHackMe / HackTheBox",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Blocks,
    title: "Blockchain Developer Path",
    issuer: "Alchemy",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: TrendingUp,
    title: "Certified Algorithmic Trader",
    issuer: "2025",
    color: "from-green-500 to-emerald-500",
  },
];

const Certifications = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Certifications & Training
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="group border-none shadow-soft hover:shadow-glow transition-all duration-300 cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${cert.color} mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all`}>
                  <cert.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
