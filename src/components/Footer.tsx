
import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cyber-navy text-white py-16 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-heading font-bold mb-2">Philip Akekudaga</h2>
            <p className="text-gray-400">Cybersecurity Specialist & Risk Analyst</p>
          </div>

          <div className="flex space-x-6 mb-10">
            <a
              href="https://github.com/akekulip"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/akekudaga-philip-49557683/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://www.kaggle.com/philipakekudaga"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
              aria-label="Kaggle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M12 2L2 12l10 10 10-10z" />
                <path d="M5 9l4 4" />
                <path d="M9 5l6 6" />
              </svg>
            </a>
            <a
              href="mailto:akekulip@gmail.com"
              className="p-3 bg-gray-800 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <nav className="mb-10">
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-gray-300">
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#experience" className="hover:text-primary transition-colors">Experience</a></li>
              <li><a href="#skills" className="hover:text-primary transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#education" className="hover:text-primary transition-colors">Education</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </nav>

          <div className="w-full max-w-4xl h-px bg-gray-800 mb-8 relative">
            <div className="absolute left-1/2 -translate-x-1/2 -top-3 bg-cyber-navy px-4">
              <Button
                onClick={scrollToTop}
                size="icon"
                variant="outline"
                className="rounded-full border-gray-700 bg-cyber-navy hover:bg-gray-800 hover:text-primary hover:border-primary/50 transition-all"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <p className="text-sm text-gray-500">
            © {currentYear} Philip Akekudaga. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
