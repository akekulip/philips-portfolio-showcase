
import React, { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  // Initialize dark mode as the default theme
  useEffect(() => {
    // Set dark theme as default unless light theme is explicitly set
    if (localStorage.theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Subtle background image with overlay */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-cyber-navy dark:to-gray-900 opacity-85"></div>
        <img 
          src="/lovable-uploads/da2aa60b-dc63-4e61-89fc-6816c0dc78ba.png" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover opacity-15 dark:opacity-10 mix-blend-multiply"
        />
      </div>
      
      {/* Content with higher z-index */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Timeline />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
