
import React from "react";
import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Research Aide",
      company: "Research Foundation for SUNY",
      location: "Albany, New York",
      period: "October 2024 - Present",
      description: [
        "Mined and developed Machine learning models and analysis for establishing 11 Industry Affiliate Programs",
        "Researched into companies and individuals for collaboration with the center",
        "Gathered requirement, data and ideas needed by industry to collaborate with students and academia",
        "Coordinated with staff to organize events, identify talents and run the daily activities of the center",
        "Designed the business process flows and policies for implementations of programs"
      ],
      department: "UAlbany Innovation Center"
    },
    {
      title: "Lead Business and Systems Analyst",
      company: "Fido Microcredit Limited",
      location: "Accra, Ghana",
      period: "Feb 2023 - Aug 2024",
      description: [
        "Led IT and business analyst teams, improving KPI achievement by 13% and streamlining operations through automation tools like Python and Zapier",
        "Analyzed complex datasets and developed 30+ strategic reports, driving data-driven decisions and enhancing cybersecurity posture",
        "Designed 10+ system requirements, led implementation projects, conducted security audits, and deployed VPNs and EDR solutions to protect 200+ endpoints"
      ],
      department: "IT"
    },
    {
      title: "Framework Implementation Lead",
      company: "Fido Microcredit",
      location: "Accra, Ghana",
      period: "June 2024 - Aug 2024",
      description: [
        "Deployment of NIST 800-53 controls across systems to enhance security posture",
        "Performed risk assessments, control mapping, and gap analysis to ensure compliance"
      ],
      project: "NIST SP 800-53 Framework"
    },
    {
      title: "Implementation Lead",
      company: "Fido Microcredit",
      location: "Accra, Ghana",
      period: "Apr 2023 - Aug 2023",
      description: [
        "Led ISO 27001 certification, managing compliance, risk assessments, and security audits while developing policies to strengthen cybersecurity"
      ],
      project: "ISO/IEC 27001 Certification"
    },
    {
      title: "Business Analyst",
      company: "Coca-Cola Beverages Africa",
      location: "Accra, Ghana",
      period: "Jan 2022 - Feb 2023",
      description: [
        "Developed Power BI and Excel dashboards for sales and logistics, resulting in data-driven decision-making and saving 120 man-hours per month by reducing report preparation time by 20%",
        "Audited on 1000+ outlets, leading to a 17% improvement in compliance adherence and a 6% reduction in credit risk through enhanced forecasting and risk assessment",
        "Analyzed business processes using tools such as CRM, SAP, and BPMN, resulting in a 15% improvement in process efficiency and ensuring alignment with organizational goals"
      ],
      department: "Voltic GH"
    }
  ];

  return (
    <section id="experience" className="section-container bg-gray-50 dark:bg-gray-900">
      <h2 className="section-title">Professional Experience</h2>
      
      <div className="space-y-8">
        {experiences.map((job, index) => (
          <Card key={index} className="border-none shadow-md hover:shadow-xl transition-shadow">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-cyber-blue/5 dark:bg-cyber-blue/10 p-6">
                  <h3 className="text-xl font-bold mb-1 text-cyber-navy dark:text-white">{job.title}</h3>
                  <p className="text-lg font-semibold mb-3 text-cyber-blue">{job.company}</p>
                  
                  <div className="flex items-center mb-2 text-cyber-slate dark:text-gray-300">
                    <Briefcase className="mr-2 h-4 w-4" />
                    <span>{job.department || job.project || "N/A"}</span>
                  </div>
                  
                  <div className="flex items-center mb-4 text-cyber-slate dark:text-gray-300">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>{job.period}</span>
                  </div>
                  
                  <div className="text-cyber-slate dark:text-gray-300">
                    <p>{job.location}</p>
                  </div>
                </div>
                
                <div className="md:w-2/3 p-6">
                  <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                    {job.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Experience;
