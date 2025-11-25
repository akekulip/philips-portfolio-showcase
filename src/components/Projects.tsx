
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Projects = () => {
  const projects = [
    {
      title: "FAIR Risk Analysis Platform",
      date: "2025",
      organization: "Cybersecurity Research",
      description: "Developed a comprehensive Factor Analysis of Information Risk (FAIR) platform for quantitative cyber risk assessment. The tool models threat scenarios, calculates annualized loss expectancy, and provides actionable insights for risk mitigation with advanced Monte Carlo simulations and TEF analysis.",
      image: "/images/fair-risk-analysis.png",
      tags: ["Risk Quantification", "FAIR Model", "Monte Carlo", "Threat Analysis", "React"],
      link: "https://fair.akekudaga.com/",
      featured: true
    },
    {
      title: "Grid Resilience Simulator using FDNA",
      date: "2025",
      organization: "Research Project",
      description: "Developed a simulator using Functional Dependency Network Analysis (FDNA) to model and analyze power grid resilience against cyber-physical attacks. The tool helps utilities identify vulnerabilities and optimize resource allocation for enhanced protection.",
      image: "/images/grid-resilience.png",
      tags: ["Python", "Network Analysis", "Simulation", "Security Modeling"],
      link: "https://grid-resilience-simulator.vercel.app/",
      featured: false
    },
    {
      title: "Phishing Impact Assessment Tool",
      date: "2024",
      organization: "Security Initiative",
      description: "Developed an interactive tool that quantifies the potential business impact of phishing attacks based on company profile, user access patterns, and industry benchmarks. The platform provides detailed risk breakdowns across financial, operational, reputational, and systems dimensions.",
      image: "/images/phishing-impact.png",
      tags: ["Risk Assessment", "Data Visualization", "Financial Modeling", "Security Analytics"],
      link: "https://phish-base.vercel.app/",
      featured: false
    },
    {
      title: "Cyber Threat Intelligence Platform",
      date: "2020",
      organization: "Professional Project",
      description: "Led the development of an integrated threat intelligence platform that collects, analyzes, and disseminates security threat data across multiple business units. The system reduced average incident response time by 40%.",
      tags: ["Threat Intelligence", "API Integration", "SIEM", "React"],
      link: "https://github.com/akekulip",
      featured: false
    }
  ];

  return (
    <section id="projects" className="bg-secondary/30 dark:bg-gray-900/50 py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wide">
            Portfolio
          </div>
          <h2 className="section-title mb-6">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            Showcasing my work in cybersecurity, risk assessment, and digital resilience. Each project represents my commitment to creating secure digital environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[minmax(400px,auto)]">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative flex flex-col rounded-3xl overflow-hidden border border-white/50 dark:border-gray-800 bg-white dark:bg-cyber-navy shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8 ${project.featured ? 'lg:col-span-2 lg:flex-row' : ''}`}
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'both' }}
            >
              {/* Image Section */}
              <div className={`relative overflow-hidden ${project.featured ? 'lg:w-3/5 h-64 lg:h-auto' : 'h-56'}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title} project`}
                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                    <Github className="h-12 w-12 text-gray-400" />
                  </div>
                )}

                {/* Overlay Link Button */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {project.link && (
                    <Button asChild variant="secondary" className="rounded-full shadow-lg backdrop-blur-md bg-white/90 dark:bg-black/80 hover:bg-white dark:hover:bg-black transform scale-90 group-hover:scale-100 transition-all duration-300">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> View Project
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {/* Content Section */}
              <div className={`flex flex-col p-8 ${project.featured ? 'lg:w-2/5 justify-center' : 'flex-grow'}`}>
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                    {project.date}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                    {project.organization}
                  </span>
                </div>

                <h3 className="text-2xl font-heading font-bold mb-3 text-cyber-navy dark:text-white group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, project.featured ? 6 : 3).map((tag, idx) => (
                      <span key={idx} className="text-xs font-medium px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 transition-colors hover:bg-primary/5 hover:text-primary hover:border-primary/20">
                        {tag}
                      </span>
                    ))}
                    {!project.featured && project.tags.length > 3 && (
                      <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-gray-50 dark:bg-gray-800/50 text-gray-500">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-primary hover:text-primary/80 flex items-center transition-colors group/link"
                      >
                        View Details <ExternalLink className="ml-1 h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-2">
            <a href="https://github.com/akekulip" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" /> View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
