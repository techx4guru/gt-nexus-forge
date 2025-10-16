import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Code2, TrendingUp } from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    company: "Tech X4",
    role: "Founder / CTO",
    period: "2023 - Present",
    description: [
      "Built scalable client systems using React, Next.js, Supabase, and Firebase",
      "Developed brand ecosystems and automated content systems",
      "Managed clients in tech, real estate, and education sectors",
    ],
    color: "from-primary to-secondary",
  },
  {
    icon: Code2,
    company: "Freelance",
    role: "Full-Stack Developer",
    period: "2018 - 2022",
    description: [
      "Delivered production apps and web systems globally",
      "Specialized in React, Node.js, and modern web technologies",
      "Built custom solutions for diverse client requirements",
    ],
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: TrendingUp,
    company: "Independent",
    role: "Forex Strategy Developer",
    period: "2021 - Present",
    description: [
      "Developed and documented systematic trading frameworks",
      "Built AI-assisted analysis tools using Python and LLMs",
      "Created backtesting systems and market analysis dashboards",
    ],
    color: "from-green-500 to-emerald-500",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-8 items-center animate-fade-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-4 border-primary shadow-glow z-10" />

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left md:order-2"}`}>
                  <Card className="border-none shadow-soft hover:shadow-intense transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4 justify-start md:justify-end">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${exp.color}`}>
                          <exp.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="text-left">
                          <h3 className="text-xl font-bold text-primary">{exp.role}</h3>
                          <p className="text-lg font-semibold text-foreground/80">{exp.company}</p>
                          <p className="text-sm text-muted-foreground">{exp.period}</p>
                        </div>
                      </div>
                      <ul className="space-y-2 text-left">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-foreground/80">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
