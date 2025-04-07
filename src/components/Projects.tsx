
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Projects = () => {
  const projects = [
    {
      title: "Grid Resilience Simulator using FDNA",
      date: "2022",
      organization: "Research Project",
      description: "Developed a simulator using Functional Dependency Network Analysis (FDNA) to model and analyze power grid resilience against cyber-physical attacks. The tool helps utilities identify vulnerabilities and optimize resource allocation for enhanced protection.",
      image: "/lovable-uploads/4efd6ee8-b6b5-4a83-b9d8-1699843608a6.png",
      tags: ["Python", "Network Analysis", "Simulation", "Security Modeling"],
      link: "https://grid-resilience-simulator.vercel.app/"
    },
    {
      title: "Phishing Impact Assessment Tool",
      date: "2024",
      organization: "Security Initiative",
      description: "Developed an interactive tool that quantifies the potential business impact of phishing attacks based on company profile, user access patterns, and industry benchmarks. The platform provides detailed risk breakdowns across financial, operational, reputational, and systems dimensions.",
      image: "/lovable-uploads/bebfd17e-ddc4-492d-918e-74d9c94b357c.png",
      tags: ["Risk Assessment", "Data Visualization", "Financial Modeling", "Security Analytics"],
      link: "https://phish-base.vercel.app/"
    },
    {
      title: "Cyber Threat Intelligence Platform",
      date: "2020",
      organization: "Professional Project",
      description: "Led the development of an integrated threat intelligence platform that collects, analyzes, and disseminates security threat data across multiple business units. The system reduced average incident response time by 40%.",
      tags: ["Threat Intelligence", "API Integration", "SIEM", "React"],
      link: "https://github.com/akekulip"
    }
  ];

  return (
    <section id="projects" className="bg-gray-50 dark:bg-gray-900 py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="text-cyber-slate dark:text-gray-400 mb-12 max-w-2xl">
          Showcasing my work in cybersecurity, risk assessment, and digital resilience. Each project represents my commitment to creating secure digital environments.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col h-full border-none shadow-lg bg-white/70 dark:bg-cyber-navy/70 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                {project.image && (
                  <div className="mb-4 w-full h-48 overflow-hidden rounded-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl font-bold text-cyber-navy dark:text-white">{project.title}</CardTitle>
                    <CardDescription className="text-cyber-slate dark:text-gray-400 font-mono">
                      {project.date} • {project.organization}
                    </CardDescription>
                  </div>
                  {project.link && (
                    <Button variant="ghost" size="icon" asChild className="h-8 w-8 rounded-full">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="View project">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent className="py-2 flex-grow">
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
              </CardContent>
              <CardFooter className="pt-4 flex flex-col items-start space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tech-tag">{tag}</span>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  asChild 
                  className="w-full border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10 dark:border-cyber-blue dark:text-cyber-blue"
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> View Project
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
