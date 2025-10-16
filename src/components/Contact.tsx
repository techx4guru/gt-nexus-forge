import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Globe, Send, Download } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "onisurutejiritj@gmail.com",
    href: "mailto:onisurutejiritj@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 810 132 8154",
    href: "tel:+2348101328154",
  },
  {
    icon: Globe,
    label: "Website",
    value: "gth.guru",
    href: "https://gth.guru",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Global / Remote",
    href: null,
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:onisurutejiritj@gmail.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Opening email client",
      description: "Your default email client will open with the message pre-filled.",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  const handleDownloadCV = () => {
    toast({
      title: "CV Download",
      description: "CV download will be available soon!",
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next project or just want to say hi? I'd love to hear from you.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-up">
            <Card className="border-none shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-primary">Get in Touch</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-secondary group-hover:scale-110 transition-transform">
                        <info.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="font-medium text-foreground hover:text-primary transition-colors"
                            target={info.href.startsWith("http") ? "_blank" : undefined}
                            rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-medium text-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Download Section */}
            <Card className="border-none shadow-soft bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Download Resources</h3>
                <div className="space-y-3">
                  <Button
                    onClick={handleDownloadCV}
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground font-semibold shadow-glow"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download CV
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-primary/20 hover:border-primary hover:bg-primary/5"
                  >
                    Request Collaboration
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-none shadow-soft animate-fade-up" style={{ animationDelay: "200ms" }}>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-6 text-primary">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or inquiry..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground font-semibold shadow-glow"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
