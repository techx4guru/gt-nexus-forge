import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Youtube, Linkedin, Github, TrendingUp, ExternalLink } from "lucide-react";

const socialLinks = [
  {
    icon: Youtube,
    platform: "YouTube",
    handle: "@calledgt",
    url: "https://www.youtube.com/@calledgt",
    color: "from-red-500 to-red-600",
    stats: "Tech, Faith & Purpose",
  },
  {
    icon: Linkedin,
    platform: "LinkedIn",
    handle: "God'stime Tejiri",
    url: "https://www.linkedin.com/in/onisuru-godstime-tejiri-gt",
    color: "from-blue-600 to-blue-700",
    stats: "Professional Network",
  },
  {
    icon: Github,
    platform: "GitHub",
    handle: "@techx4guru",
    url: "https://github.com/techx4guru",
    color: "from-gray-700 to-gray-900",
    stats: "Open Source Projects",
  },
  {
    icon: TrendingUp,
    platform: "TradingView",
    handle: "@iamcalledgt",
    url: "https://www.tradingview.com/u/iamcalledgt/",
    color: "from-green-500 to-emerald-600",
    stats: "Trading Analysis",
  },
];

const Influence = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Influence & Media
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building Influence with Purpose — Tech, Faith, and Financial Freedom
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {socialLinks.map((social, index) => (
            <Card
              key={index}
              className="group border-none shadow-soft hover:shadow-intense transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${social.color} group-hover:scale-110 transition-transform`}>
                    <social.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {social.platform}
                    </h3>
                    <p className="text-sm text-muted-foreground">{social.handle}</p>
                  </div>
                </div>
                <p className="text-foreground/80 mb-4">{social.stats}</p>
                <Button
                  variant="outline"
                  className="w-full border-primary/20 hover:border-primary hover:bg-primary/5"
                  onClick={() => window.open(social.url, "_blank")}
                >
                  Visit Profile
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* YouTube Embed */}
        <Card className="border-none shadow-intense animate-scale-in">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-4 text-center">Latest from YouTube</h3>
            <div className="aspect-video rounded-lg overflow-hidden bg-muted">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed?listType=user_uploads&list=calledgt"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Influence;
