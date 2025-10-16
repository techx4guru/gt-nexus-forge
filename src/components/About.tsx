import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, TrendingUp, Video } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="mb-12 animate-fade-up">
          <Card className="border-none shadow-soft bg-gradient-to-br from-card to-muted/50">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-foreground/90">
                I'm God'stime Tejiri, known as <span className="font-semibold text-primary">GT</span> — a purpose-driven technologist, ecosystem builder, and creator.
                I specialize in full-stack development (Next.js, React, TypeScript), AI integration, Web3 engineering, ethical hacking, and forex system design.
                My mission is to build transformative digital systems, mentor upcoming developers, and empower young people to merge skill, faith, and purpose into real-world impact.
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="tech" className="w-full animate-scale-in">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-muted">
            <TabsTrigger value="tech" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Code2 className="mr-2 h-4 w-4" />
              Tech Journey
            </TabsTrigger>
            <TabsTrigger value="trading" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <TrendingUp className="mr-2 h-4 w-4" />
              Trading Journey
            </TabsTrigger>
            <TabsTrigger value="influence" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Video className="mr-2 h-4 w-4" />
              Influence Journey
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tech" className="space-y-4">
            <Card className="border-none shadow-soft">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold text-primary">Tech Ecosystem Builder</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Since 2018, I've been building production-ready applications and digital ecosystems for clients across tech, real estate, and education sectors. 
                  As Founder/CTO of Tech X4, I've architected scalable systems using React, Next.js, Supabase, and Firebase, 
                  while developing automated content systems and brand ecosystems.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  My expertise spans full-stack development, AI integration, Web3 engineering, and cybersecurity. 
                  I'm passionate about creating systems that scale and mentoring the next generation of developers.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trading" className="space-y-4">
            <Card className="border-none shadow-soft">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold text-primary">Forex Strategy Developer</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Since 2021, I've developed and documented systematic trading frameworks combining technical analysis with algorithmic approaches. 
                  I've built AI-assisted forex analysis tools using Python, pandas, and LLM integration for backtesting and market analysis.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  My trading methodology emphasizes risk management, systematic strategy development, and leveraging technology 
                  to create data-driven trading decisions. I work with MetaTrader, TradingView, and custom Python analytics.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="influence" className="space-y-4">
            <Card className="border-none shadow-soft">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold text-primary">Purposeful Global Influencer</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Through my YouTube channel and social media presence, I'm building influence with purpose — 
                  merging tech education, faith, and financial freedom. I create content that empowers young people 
                  to develop skills, think critically, and build systems that create real-world impact.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  My content strategy focuses on authentic value creation, combining technical tutorials, 
                  lifestyle insights, and motivational content that inspires action and transformation.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default About;
