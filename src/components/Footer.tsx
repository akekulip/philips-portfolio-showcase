
import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cyber-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-6">Philip Akekudaga</h2>
          
          <div className="flex space-x-6 mb-8">
            <a 
              href="https://github.com/akekulip" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-cyber-blue transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/akekudaga-philip-49557683/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-cyber-blue transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:akekulip@gmail.com" 
              className="hover:text-cyber-blue transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
          
          <div className="text-center mb-8">
            <p className="text-gray-400 mb-1">41 North Lake Ave, Albany, NY-12203</p>
            <p className="text-gray-400">(929) 685-9890 • akekulip@gmail.com</p>
          </div>
          
          <nav className="mb-8">
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              <li><a href="#about" className="hover:text-cyber-blue transition-colors">About</a></li>
              <li><a href="#experience" className="hover:text-cyber-blue transition-colors">Experience</a></li>
              <li><a href="#skills" className="hover:text-cyber-blue transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-cyber-blue transition-colors">Projects</a></li>
              <li><a href="#education" className="hover:text-cyber-blue transition-colors">Education</a></li>
              <li><a href="#contact" className="hover:text-cyber-blue transition-colors">Contact</a></li>
            </ul>
          </nav>
          
          <div className="flex items-center mb-4">
            <div className="h-px bg-gray-700 flex-grow"></div>
            <Button 
              onClick={scrollToTop}
              size="icon"
              variant="ghost" 
              className="rounded-full mx-4 border border-gray-700 hover:bg-gray-800 hover:text-cyber-blue"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
            <div className="h-px bg-gray-700 flex-grow"></div>
          </div>
          
          <p className="text-sm text-gray-400">
            © {currentYear} Philip Akekudaga. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
