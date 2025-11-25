
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  ShieldCheck,
  Network,
  Bug,
  FileCode,
  Briefcase,
  CheckCircle2,
  Lock,
  Shield,
  Database,
  ServerCog,
  Languages,
  Award
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
      title: "Cybersecurity Frameworks & Policy",
      skills: ["ISO 27001", "HIPAA", "NIST CSF", "NIST SP 800-53", "PCI-DSS", "SOC 2", "SOX", "GDPR", "Vendor & Third-Party Assessments"]
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Risk Quantification & Modeling",
      skills: ["FAIR", "FAIR-CAM Risk Quantification", "FDNA (Functional Dependency Network Analysis)", "Supply Chain Risk Quantification", "Risk ROI Analysis"]
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "SIEM & Detection Engineering",
      skills: ["Microsoft Sentinel (KQL)", "Splunk", "Wazuh", "Detection Rule Tuning", "Log Analysis", "MITRE ATT&CK", "Incident Response Playbooks", "Threat Hunting"]
    },
    {
      icon: <Lock className="h-6 w-6 text-primary" />,
      title: "EDR & Endpoint Security",
      skills: ["CrowdStrike", "Microsoft Defender", "Sophos", "Detection Rule Development", "Threat Hunting Queries", "Endpoint Hardening"]
    },
    {
      icon: <Bug className="h-6 w-6 text-primary" />,
      title: "Vulnerability Management & Penetration Testing",
      skills: ["Kali Linux", "Metasploit", "Nmap", "Nessus", "Qualys TruRisk", "MITRE Caldera", "Burp Suite", "Security Assessments"]
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
      title: "Threat Intelligence & OSINT",
      skills: ["OSINT Fundamentals", "VirusTotal", "MITRE ATT&CK", "Threat Hunting", "IoC Development", "Attacker IP Mapping"]
    },
    {
      icon: <ServerCog className="h-6 w-6 text-primary" />,
      title: "Cloud & Infrastructure Security",
      skills: ["Microsoft Azure", "Azure Honeypots", "Cloud Security Monitoring", "Active Directory", "Patch Management", "System Hardening"]
    },
    {
      icon: <FileCode className="h-6 w-6 text-primary" />,
      title: "Scripting & Automation",
      skills: ["Python", "PowerShell", "Security Automation", "Process Automation", "Alert Enrichment", "User Access Review Automation"]
    },
    {
      icon: <Database className="h-6 w-6 text-primary" />,
      title: "Data Analysis & ML",
      skills: ["Python", "SQL", "Power BI", "Excel", "Redash", "Machine Learning", "Interpretable ML", "Event-Study Analysis"]
    },
    {
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      title: "Business Analysis & GRC",
      skills: ["Requirement Gathering", "BPMN", "BIA/BPA", "Process Optimization", "Archer GRC", "Risk Assessment", "Security ROI Analysis"]
    },
    {
      icon: <FileCode className="h-6 w-6 text-primary" />,
      title: "Enterprise Systems",
      skills: ["ServiceNow", "Jira", "Mambu", "Microsoft Dynamics 365", "EbizFrame", "SAP", "Freshworks Suite"]
    },
    {
      icon: <Languages className="h-6 w-6 text-primary" />,
      title: "Languages",
      skills: [
        "English (Professional working proficiency)",
        "Kasem (Native or bilingual proficiency)",
        "Twi (Professional working proficiency)"
      ]
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-primary" />,
      title: "Soft Skills",
      skills: ["Excellent Oral and Written Communication", "Detail-Oriented", "Proactive & Self-Motivated", "Security Awareness Training", "Stakeholder Management"]
    }
  ];

  return (
    <section id="skills" className="section-container bg-background">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wide">
          Expertise
        </div>
        <h2 className="section-title mb-6">Technical & Soft Skills</h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          A comprehensive toolkit of technical capabilities and professional competencies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <Card
            key={index}
            className="border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white dark:bg-cyber-navy group animate-in fade-in slide-in-from-bottom-6"
            style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
          >
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="mr-3 p-2 bg-primary/5 rounded-lg group-hover:bg-primary/10 transition-colors duration-300">{category.icon}</div>
                <h3 className="text-lg font-heading font-bold text-cyber-navy dark:text-white leading-tight">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-transparent hover:border-primary/20 hover:bg-primary/5 hover:text-primary transition-all duration-300 cursor-default hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;
