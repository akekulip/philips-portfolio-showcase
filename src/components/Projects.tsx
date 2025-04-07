
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Link2 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "FDNA Modelling for Power Grid Resilience and Risk Assessment",
      date: "March 2025",
      organization: "Research - Cyber Resilient Interdependent Systems and Infrastructure Solutions Lab (CRISIS)",
      description: "Developed a graph-based FDNA model to quantify cascading impacts of cyber and physical disruptions in power grids, optimizing resilience strategies and ROI-based investment decisions.",
      image: "/lovable-uploads/66136ddf-30a0-4d0b-8d37-17a2c0b84aa4.png",
      tags: ["FDNA", "Cybersecurity", "Risk Assessment", "Graph Theory", "Power Grid"]
    },
    {
      title: "Economic Impact of Phishing Attacks on Small Businesses: A Risk Analysis Framework",
      date: "Dec 2024",
      organization: "Research and Poster Presentation – Cyber Cascade Lab",
      description: "Developed a risk analysis framework and dashboard to quantify phishing-related financial losses for small businesses.",
      image: "/lovable-uploads/ba74a5fc-e353-4bc7-802c-40dcbdd16dec.png",
      tags: ["Phishing", "Risk Analysis", "Dashboard", "Economic Impact", "Small Business"]
    },
    {
      title: "NIST SP 800-53 Framework Implementation",
      date: "June 2024 - Aug 2024",
      organization: "Fido Microcredit",
      description: "Deployment of NIST 800-53 controls across systems to enhance security posture. Performed risk assessments, control mapping, and gap analysis to ensure compliance.",
      tags: ["NIST 800-53", "Cybersecurity", "Compliance", "Risk Assessment"]
    },
    {
      title: "ISO/IEC 27001 Certification Implementation",
      date: "Apr 2023 - Aug 2023",
      organization: "Fido Microcredit",
      description: "Led ISO 27001 certification, managing compliance, risk assessments, and security audits while developing policies to strengthen cybersecurity.",
      tags: ["ISO 27001", "Cybersecurity", "Compliance", "Policy Development"]
    }
  ];

  return (
    <section id="projects" className="section-container bg-gray-50 dark:bg-gray-900">
      <h2 className="section-title">Projects & Research</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow">
            <CardContent className="p-0">
              {project.image && (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-cyber-navy dark:text-white">{project.title}</h3>
                
                <div className="flex items-center mb-2 text-sm text-cyber-slate dark:text-gray-400">
                  <CalendarDays className="mr-1 h-4 w-4" />
                  <span>{project.date}</span>
                </div>
                
                <p className="text-sm font-medium mb-3 text-cyber-blue">{project.organization}</p>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-cyber-blue/10 text-cyber-blue hover:bg-cyber-blue/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyber-blue hover:text-cyber-blue/80 font-medium"
                  >
                    <Link2 className="mr-1 h-4 w-4" />
                    View Project
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
