import { Github, Linkedin, Youtube, TrendingUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, url: "https://www.linkedin.com/in/onisuru-godstime-tejiri-gt", label: "LinkedIn" },
    { icon: Github, url: "https://github.com/techx4guru", label: "GitHub" },
    { icon: Youtube, url: "https://www.youtube.com/@calledgt", label: "YouTube" },
    { icon: TrendingUp, url: "https://www.tradingview.com/u/iamcalledgt/", label: "TradingView" },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-950 text-white">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      
      <div className="container relative z-10 mx-auto px-4 py-12">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo/Name */}
          <div className="text-center">
            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              GT
            </h3>
            <p className="text-gray-400 mt-2 text-sm">
              Building Tech That Builds People
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-400 border-t border-white/10 pt-6 w-full">
            <p>© {currentYear} God'stime "GT" Tejiri. All rights reserved.</p>
            <p className="mt-1">Tech Ecosystem Builder • AI Innovator • Purposeful Creator</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
