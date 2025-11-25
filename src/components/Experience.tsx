
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
    <section id="experience" className="section-container bg-gray-50 dark:bg-gray-900/50">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wide">
          Career Path
        </div>
        <h2 className="section-title mb-6">Professional Experience</h2>
      </div>

      <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent dark:before:via-gray-700">
        {experiences.map((job, index) => (
          <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* Icon */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-gray-900 bg-primary/20 text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <Briefcase className="w-4 h-4" />
            </div>

            {/* Content */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white dark:bg-cyber-navy border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                <h3 className="text-xl font-heading font-bold text-cyber-navy dark:text-white">
                  {job.title}
                </h3>
                <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded whitespace-nowrap">
                  {job.period}
                </span>
              </div>

              <div className="mb-4">
                <p className="text-lg font-medium text-primary mb-1">{job.company}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center">
                    <Building className="mr-1 h-3 w-3" /> {job.department || job.project || "N/A"}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="mr-1 h-3 w-3" /> {job.location}
                  </span>
                </div>
              </div>

              <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                {job.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              {job.skills && job.skills.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100 dark:border-gray-800">
                  {job.skills.map((skill, skillIdx) => (
                    <Badge key={skillIdx} variant="secondary" className="text-xs font-normal bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <Separator className="my-20" />

      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="section-title mb-6">Volunteering & Consulting</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {volunteeringConsulting.map((role, index) => (
          <Card key={index} className="border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 bg-white dark:bg-cyber-navy">
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-green-500/10 rounded-xl text-green-600 dark:text-green-400">
                  {getTypeIcon(role.type)}
                </div>
                <Badge variant="outline" className="text-xs border-green-200 text-green-700 dark:border-green-900 dark:text-green-400">
                  {role.type}
                </Badge>
              </div>

              <h3 className="text-xl font-heading font-bold mb-2 text-cyber-navy dark:text-white">
                {role.title}
              </h3>
              <p className="text-lg font-medium text-green-600 dark:text-green-400 mb-4">{role.organization}</p>

              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
                <span className="flex items-center">
                  <Calendar className="mr-1 h-3 w-3" /> {role.period}
                </span>
                <span>{role.location}</span>
              </div>

              <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                {role.description.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Experience;
