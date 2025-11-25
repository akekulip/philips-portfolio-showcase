
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, FileText, Mail, Github, Linkedin, Download } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-20 flex items-center bg-background overflow-hidden">
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyber-blue/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-gray-50 dark:bg-gray-900/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 -z-10"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wide">
              Available for new opportunities
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold mb-6 text-cyber-navy dark:text-white leading-tight">
              Philip <br className="hidden lg:block" />
              <span className="text-primary">Akekudaga</span>
            </h1>

            <h2 className="text-xl sm:text-2xl text-cyber-slate dark:text-gray-300 mb-8 font-medium max-w-2xl mx-auto lg:mx-0">
              Cybersecurity Specialist & Risk Analyst
            </h2>

            <p className="text-gray-600 dark:text-gray-400 text-lg mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Protecting critical infrastructure through Digital Forensics, FAIR™ Risk Quantification, and Cyber Resilience strategies.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base shadow-lg shadow-primary/20 transition-all hover:scale-105">
                <a href="#projects">
                  <FileText className="mr-2 h-5 w-5" /> View My Work
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-2 border-gray-200 dark:border-gray-800 text-cyber-navy dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-full px-8 h-12 text-base transition-all hover:scale-105">
                <a href="mailto:akekulip@gmail.com">
                  <Mail className="mr-2 h-5 w-5" /> Contact Me
                </a>
              </Button>
            </div>

            {/* Social Media Icons - Minimalist */}
            <div className="flex justify-center lg:justify-start items-center space-x-8 text-gray-400">
              <a
                href="https://github.com/akekulip"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors transform hover:-translate-y-1 duration-300"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/akekudaga-philip-49557683/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors transform hover:-translate-y-1 duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://www.kaggle.com/philipakekudaga"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors transform hover:-translate-y-1 duration-300"
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
              <div className="h-px w-12 bg-gray-200 dark:bg-gray-800"></div>
              <a
                href="Philip_Akekudaga_CV.pdf"
                download
                className="text-sm font-medium text-cyber-slate hover:text-primary transition-colors flex items-center gap-2"
              >
                <Download className="h-4 w-4" /> Resume
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative z-10">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10 border border-white/20 dark:border-gray-800/50">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
                <img
                  src="/lovable-uploads/profile-photo.png"
                  alt="Philip Akekudaga - Cybersecurity Specialist"
                  className="w-full h-auto object-cover transform scale-100 hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-cyber-navy p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 flex items-center gap-4 animate-bounce hidden sm:flex" style={{ animationDuration: '3s' }}>
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">Status</p>
                  <p className="text-sm font-bold text-cyber-navy dark:text-white">Online & Secure</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-pattern-dots opacity-20"></div>
            <div className="absolute -bottom-12 -left-12 w-32 h-32 border-2 border-primary/10 rounded-full"></div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" className="text-gray-400 hover:text-primary transition-colors p-2">
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
