
import React from "react";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  Send
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-cyber-blue" />,
      title: "Location",
      details: "Albany, NY-12203"
    },
    {
      icon: <Mail className="h-5 w-5 text-cyber-blue" />,
      title: "Email",
      details: "akekulip@gmail.com",
      link: "mailto:akekulip@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5 text-cyber-blue" />,
      title: "Phone",
      details: "(929) 685-9890",
      link: "tel:+19296859890"
    },
    {
      icon: <Linkedin className="h-5 w-5 text-cyber-blue" />,
      title: "LinkedIn",
      details: "akekudaga-philip-49557683",
      link: "https://www.linkedin.com/in/akekudaga-philip-49557683/"
    },
    {
      icon: <Github className="h-5 w-5 text-cyber-blue" />,
      title: "GitHub",
      details: "akekulip",
      link: "https://github.com/akekulip"
    }
  ];

  return (
    <section id="contact" className="section-container bg-gray-50 dark:bg-gray-900">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Feel free to contact me for any professional inquiries, collaboration opportunities, or questions about my research and experience in cybersecurity and business analysis.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {contactInfo.map((item, index) => (
              <Card key={index} className="border-none shadow-sm">
                <CardContent className="p-4 flex items-start">
                  <div className="mr-3 mt-1">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-cyber-navy dark:text-white mb-1">{item.title}</h3>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        target={item.title !== "Email" && item.title !== "Phone" ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-cyber-blue dark:hover:text-cyber-blue transition-colors"
                      >
                        {item.details}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-300">{item.details}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-cyber-blue/5 dark:bg-cyber-blue/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-cyber-navy dark:text-white">Connect With Me</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I'm always open to discussing new projects, research opportunities, or cybersecurity challenges.
            </p>
            <div className="flex space-x-4">
              <Button asChild variant="outline" className="rounded-full border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10 hover:text-cyber-blue">
                <a 
                  href="https://www.linkedin.com/in/akekudaga-philip-49557683/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10 hover:text-cyber-blue">
                <a 
                  href="https://github.com/akekulip" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div>
          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6 text-cyber-navy dark:text-white">Send Me a Message</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-cyber-slate dark:text-gray-300">
                      Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Your Name" 
                      className="border-cyber-slate/20 focus-visible:ring-cyber-blue" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-cyber-slate dark:text-gray-300">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Your Email" 
                      className="border-cyber-slate/20 focus-visible:ring-cyber-blue" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-cyber-slate dark:text-gray-300">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="Message Subject" 
                    className="border-cyber-slate/20 focus-visible:ring-cyber-blue" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-cyber-slate dark:text-gray-300">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Your Message" 
                    className="min-h-[150px] border-cyber-slate/20 focus-visible:ring-cyber-blue" 
                  />
                </div>
                
                <Button className="w-full bg-cyber-blue hover:bg-cyber-blue/90">
                  <Send className="mr-2 h-4 w-4" /> Send Message
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
