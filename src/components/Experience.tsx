
import React from "react";
import { Briefcase, Calendar, Building, HandHelping } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Experience = () => {
  const experiences = [
    {
      title: "Cybersecurity Analyst",
      company: "New York State – Department of Health",
      location: "Albany, New York",
      period: "May 2025 - Present",
      description: [
        "Investigated and responded to security alerts from Microsoft Sentinel by performing log analysis, fine-tuning detection rules to reduce false positives, and driving incident escalation",
        "Conducted vulnerability assessments, mapped findings to NIST CSF 2.0, and supported risk remediation tracking using Archer for internal GRC reporting to stakeholders",
        "Published weekly cybersecurity awareness content through LMS, SharePoint, and websites and participated in phishing simulations to improve organizational security posture",
        "Drafted and developed Incident Response Plans (IRP) and playbooks for multiple agencies under the Department of Health, standardizing detection, containment, and recovery procedures"
      ],
      department: "Office of Health Information Management",
      type: "Full-time Internship"
    },
    {
      title: "Graduate Assistant",
      company: "University at Albany",
      location: "Albany, New York",
      period: "Aug 2025 - Present",
      description: [
        "Curate and analyze PhD program data to support assessment, accreditation, and curriculum decisions",
        "Provide quantitative briefs on enrollment and curriculum trends for faculty committees"
      ],
      department: "College of Emergency Preparedness, Homeland Security & Cybersecurity",
      type: "Part-time"
    },
    {
      title: "Senior Research Aide",
      company: "Research Foundation for SUNY",
      location: "Albany, New York",
      period: "October 2024 - May 2025",
      description: [
        "Developed machine learning models to analyze complex datasets, gaining exposure to AI/ML techniques applicable to anomaly detection and predictive security analytics",
        "Built ML pipelines to analyze opportunity spaces for 11 Industry Affiliate Programs: synthesized requirements linking industry needs with academic capabilities",
        "Gathered requirement, data and ideas needed by industry to collaborate with students and academia"
      ],
      department: "UAlbany Innovation Center",
      type: "Part-time"
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
      department: "IT",
      type: "Full-time",
      skills: ["Agile Project Management", "Customer Relationship Management (CRM)"]
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
        "Led the deployment and optimization of CrowdStrike EDR across 200+ endpoints, developing advanced queries for threat hunting and tuning detection rules to enhance threat visibility",
        "Created Power BI and Excel dashboards for sales and logistics, enabling data-driven decisions and saving 120+ man-hours per month by reducing report preparation time by 20%",
        "Audited 1,000+ outlets and vendors in the supply chain, resulting in a 17% increase in compliance and a 6% reduction in risk through improved forecasting and risk analysis",
        "Analyzed business processes using tools such as CRM, SAP, and BPMN, resulting in a 15% improvement in process efficiency"
      ],
      department: "Voltic GH",
      type: "Full-time",
      skills: ["SAP FICO", "Microsoft Power BI", "CrowdStrike EDR"]
    },
    {
      title: "DMS-SFA Analyst and Support",
      company: "Wilmar Africa Limited",
      location: "Tema, Greater Accra, Ghana",
      period: "May 2021 - Jan 2022",
      description: [
        "Provided solutions to problems by looking into business data",
        "Automated Replenishment System, Distributor Management System, Sales Force Automation",
        "Implemented SAP solutions for business process optimization"
      ],
      type: "Full-time",
      skills: ["SAP Successfactors", "Microsoft Power BI"]
    },
    {
      title: "IT & MIS Officer",
      company: "Ghana Water Company Ltd.",
      location: "Kumasi, Ashanti, Ghana",
      period: "Sept 2014 - Jan 2022",
      description: [
        "Managed the complete lifecycle of 800+ user accounts in Active Directory, including provisioning, de-provisioning, and permission auditing to enforce the principle of least privilege",
        "Implemented and managed a monthly patch management cycle for over 600 endpoints and 50+ servers, achieving and maintaining a 98% patch compliance rate",
        "Served as the primary responder for IT security incidents, resolving an average of 20+ security-related tickets per week, including malware removal and phishing analysis",
        "Oversaw daily backup operations for 10+ critical application and file servers, maintaining a 99.5% success rate and performing quarterly data recovery tests to ensure business continuity",
        "Led a project to securely deploy and configure over 150 new workstations, implementing system hardening baselines that reduced common vulnerabilities by over 90% on new assets"
      ],
      type: "Full-time",
      skills: ["Active Directory", "Patch Management", "Incident Response", "Data Analysis"]
    }
  ];

  const volunteeringConsulting = [
    {
      title: "Web Developer",
      organization: "Awecif Foundation",
      location: "Ghana",
      period: "Jun 2012 - Present",
      description: [
        "Volunteering as a web developer for children's programs",
        "Maintaining and developing the foundation's web presence",
        "Supporting digital initiatives focused on improving children's lives"
      ],
      cause: "Children",
      type: "Volunteering"
    },
    {
      title: "Technology Consultant",
      organization: "Brics Africa Consulting LLC",
      location: "Ghana",
      period: "Mar 2023 - Present",
      description: [
        "Providing technology consulting services to businesses in Africa",
        "Advising on technology implementation and digital transformation",
        "Supporting science and technology initiatives across the region"
      ],
      cause: "Science and Technology",
      type: "Consulting"
    }
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case "Volunteering":
        return <HandHelping className="mr-2 h-4 w-4" />;
      case "Consulting":
        return <Building className="mr-2 h-4 w-4" />;
      default:
        return <Briefcase className="mr-2 h-4 w-4" />;
    }
  };

  return (
    <section id="experience" className="section-container bg-gray-50 dark:bg-gray-900">
      <h2 className="section-title">Professional Experience</h2>
      
      <div className="space-y-8">
        {experiences.map((job, index) => (
          <Card key={index} className="border-none shadow-md hover:shadow-xl transition-shadow">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-cyber-blue/5 dark:bg-cyber-blue/10 p-6">
                  <h3 className="text-xl font-bold mb-1 text-cyber-navy dark:text-white">
                    {job.title}
                    {job.type && (
                      <Badge variant="outline" className="ml-2 text-xs bg-cyber-blue/10">
                        {job.type}
                      </Badge>
                    )}
                  </h3>
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

                  {job.skills && job.skills.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.skills.map((skill, skillIdx) => (
                        <Badge key={skillIdx} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}
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

      <Separator className="my-12" />
      
      <h2 className="section-title">Volunteering & Consulting</h2>
      <div className="space-y-8 mt-8">
        {volunteeringConsulting.map((role, index) => (
          <Card key={index} className="border-none shadow-md hover:shadow-xl transition-shadow">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-cyber-green/5 dark:bg-cyber-green/10 p-6">
                  <h3 className="text-xl font-bold mb-1 text-cyber-navy dark:text-white">
                    {role.title}
                    <Badge variant="outline" className="ml-2 text-xs bg-cyber-green/10">
                      {role.type}
                    </Badge>
                  </h3>
                  <p className="text-lg font-semibold mb-3 text-cyber-green">{role.organization}</p>
                  
                  <div className="flex items-center mb-2 text-cyber-slate dark:text-gray-300">
                    {getTypeIcon(role.type)}
                    <span>{role.cause || "N/A"}</span>
                  </div>
                  
                  <div className="flex items-center mb-4 text-cyber-slate dark:text-gray-300">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>{role.period}</span>
                  </div>
                  
                  <div className="text-cyber-slate dark:text-gray-300">
                    <p>{role.location}</p>
                  </div>
                </div>
                
                <div className="md:w-2/3 p-6">
                  <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                    {role.description.map((item, idx) => (
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
