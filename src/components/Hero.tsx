import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import profileImage from "@/assets/gt-profile.jpg";

const Hero = () => {
  const handleDownloadCV = () => {
    // Placeholder - will be replaced with actual CV link
    window.open("#", "_blank");
  };

  const handleHireMe = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-mesh">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      
      <div className="container relative z-10 px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Profile Image */}
          <div className="flex-shrink-0 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-50 animate-glow" />
              <img
                src={profileImage}
                alt="God'stime GT Tejiri"
                className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-background shadow-intense"
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 animate-fade-up">
            <div className="space-y-2">
              <h1 className="text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary leading-tight">
                God'stime "GT" Tejiri
              </h1>
              <p className="text-2xl lg:text-3xl font-semibold text-foreground/90">
                Building the Future Across Tech, AI, Web3 & Influence
              </p>
            </div>

            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl">
              Tech Ecosystem Builder • Full-Stack Developer • AI & Blockchain Innovator • Ethical Hacker • Forex Strategist • Creator
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                size="lg"
                onClick={handleHireMe}
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground font-semibold px-8 shadow-glow"
              >
                <Mail className="mr-2 h-5 w-5" />
                Hire Me
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleDownloadCV}
                className="border-2 border-primary/20 hover:border-primary hover:bg-primary/5 font-semibold px-8"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
