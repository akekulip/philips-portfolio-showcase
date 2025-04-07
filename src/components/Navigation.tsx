
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, Moon, Sun, Github, Linkedin, Mail } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
      localStorage.theme = 'dark';
    }
  };

  useEffect(() => {
    // Check for dark mode preference
    if (
      localStorage.theme === 'dark' || 
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }

    // Handle scroll state for navbar styling
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { 
      name: 'GitHub', 
      href: 'https://github.com/akekulip', 
      icon: <Github className="h-5 w-5" /> 
    },
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/akekudaga-philip-49557683/', 
      icon: <Linkedin className="h-5 w-5" /> 
    },
    { 
      name: 'Email', 
      href: 'mailto:akekulip@gmail.com', 
      icon: <Mail className="h-5 w-5" /> 
    },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 z-50 w-full transition-all duration-300",
      scrolled 
        ? "bg-white dark:bg-cyber-navy shadow-md py-2" 
        : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-cyber-navy dark:text-white">
          Philip Akekudaga
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className="text-cyber-slate hover:text-cyber-blue dark:text-gray-300 dark:hover:text-cyber-blue font-medium transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyber-slate hover:text-cyber-blue dark:text-gray-300 dark:hover:text-cyber-blue transition-colors"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleDarkMode}
              className="rounded-full"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleDarkMode}
            className="rounded-full"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            className="rounded-full"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-cyber-navy shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-cyber-slate hover:text-cyber-blue dark:text-gray-300 dark:hover:text-cyber-blue font-medium transition-colors block py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center space-x-6 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyber-slate hover:text-cyber-blue dark:text-gray-300 dark:hover:text-cyber-blue transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
