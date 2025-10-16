import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, GraduationCap, BookOpen, TrendingUp, Shield, Code } from "lucide-react";

const projects = [
  {
    icon: GraduationCap,
    title: "EDU-X4",
    description: "Multilingual educational platform built with React + Supabase, featuring interactive learning modules and real-time analytics.",
    stack: ["React", "Supabase", "TypeScript", "Tailwind CSS"],
    category: "Web App",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: BookOpen,
    title: "Bible Study Tracker App",
    description: "Prayer & journaling web app with analytics, helping users track spiritual growth with data-driven insights.",
    stack: ["React", "Firebase", "Chart.js"],
    category: "Web App",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: TrendingUp,
    title: "AI Trading Dashboard",
    description: "LLM-assisted forex analysis and backtesting tool combining AI insights with traditional technical analysis.",
    stack: ["Python", "Next.js", "OpenAI API", "Pandas"],
    category: "AI / Trading",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Code,
    title: "Secure dApp Toolkit",
    description: "Pre-audited smart contract + Next.js template system for rapid, secure Web3 application development.",
    stack: ["Solidity", "Hardhat", "Next.js", "Web3.js"],
    category: "Blockchain",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Shield,
    title: "Security Writeups",
    description: "Comprehensive ethical hacking reports & vulnerability documentation from penetration testing engagements.",
    stack: ["Burp Suite", "Metasploit", "OWASP"],
    category: "Security",
    color: "from-red-500 to-orange-500",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group border-none shadow-soft hover:shadow-intense transition-all duration-300 flex flex-col animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${project.color} mb-3 w-fit group-hover:scale-110 transition-transform`}>
                  <project.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <Badge variant="secondary" className="w-fit">
                  {project.category}
                </Badge>
              </CardHeader>

              <CardContent className="flex-1">
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-muted/50 rounded text-xs font-medium text-foreground/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full border-primary/20 hover:border-primary hover:bg-primary/5 group-hover:shadow-glow transition-all"
                >
                  View Project
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
