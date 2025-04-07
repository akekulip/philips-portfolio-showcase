
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, FileText, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-20 flex items-center bg-gradient-to-b from-gray-50 to-white dark:from-cyber-navy dark:to-gray-900">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-cyber-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-cyber-green/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-1/3 h-1/3 bg-cyber-blue/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 dark:text-white">
              Philip Akekudaga
            </h1>
            <div className="h-1 w-20 bg-cyber-blue mb-6"></div>
            <h2 className="text-2xl sm:text-3xl text-cyber-slate dark:text-gray-300 mb-6 font-mono overflow-hidden whitespace-nowrap animate-typing">
              Cybersecurity Specialist
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-lg">
              Specializing in Digital Forensics, Risk Assessment, and Cyber Resilience to protect critical infrastructure and businesses from evolving threats.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-cyber-blue hover:bg-cyber-blue/90 text-white">
                <a href="mailto:akekulip@gmail.com">
                  <Mail className="mr-2 h-4 w-4" /> Contact Me
                </a>
              </Button>
              <Button variant="outline" asChild className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10 dark:border-cyber-blue dark:text-cyber-blue">
                <a href="#projects">
                  <FileText className="mr-2 h-4 w-4" /> View Projects
                </a>
              </Button>
            </div>
          </div>
          
          <div className="md:w-2/5">
            <div className="relative">
              <div className="absolute inset-0 bg-cyber-blue/20 blur-xl rounded-full -m-4 transform rotate-3"></div>
              <div className="relative rounded-3xl overflow-hidden border-4 border-white dark:border-cyber-navy shadow-xl">
                <img 
                  src="/lovable-uploads/45ededff-92a3-44a6-9ecd-86e33e61a746.png" 
                  alt="Philip Akekudaga" 
                  className="w-full h-auto object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" className="text-cyber-slate dark:text-gray-400 hover:text-cyber-blue dark:hover:text-cyber-blue transition-colors">
            <ArrowDown className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
