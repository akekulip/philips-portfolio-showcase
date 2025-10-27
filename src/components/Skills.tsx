
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
      icon: <ShieldCheck className="h-6 w-6 text-cyber-blue" />,
      title: "Cybersecurity Frameworks & Policy",
      skills: ["ISO 27001", "HIPAA", "NIST CSF", "NIST SP 800-53", "PCI-DSS", "SOC 2", "SOX", "GDPR", "Vendor & Third-Party Assessments"]
    },
    {
      icon: <Award className="h-6 w-6 text-cyber-blue" />,
      title: "Risk Quantification & Modeling",
      skills: ["FAIR", "FAIR-CAM Risk Quantification", "FDNA (Functional Dependency Network Analysis)", "Supply Chain Risk Quantification", "Risk ROI Analysis"]
    },
    {
      icon: <Shield className="h-6 w-6 text-cyber-blue" />,
      title: "SIEM & Detection Engineering",
      skills: ["Microsoft Sentinel (KQL)", "Splunk", "Wazuh", "Detection Rule Tuning", "Log Analysis", "MITRE ATT&CK", "Incident Response Playbooks", "Threat Hunting"]
    },
    {
      icon: <Lock className="h-6 w-6 text-cyber-blue" />,
      title: "EDR & Endpoint Security",
      skills: ["CrowdStrike", "Microsoft Defender", "Sophos", "Detection Rule Development", "Threat Hunting Queries", "Endpoint Hardening"]
    },
    {
      icon: <Bug className="h-6 w-6 text-cyber-blue" />,
      title: "Vulnerability Management & Penetration Testing",
      skills: ["Kali Linux", "Metasploit", "Nmap", "Nessus", "Qualys TruRisk", "MITRE Caldera", "Burp Suite", "Security Assessments"]
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-cyber-blue" />,
      title: "Threat Intelligence & OSINT",
      skills: ["OSINT Fundamentals", "VirusTotal", "MITRE ATT&CK", "Threat Hunting", "IoC Development", "Attacker IP Mapping"]
    },
    {
      icon: <ServerCog className="h-6 w-6 text-cyber-blue" />,
      title: "Cloud & Infrastructure Security",
      skills: ["Microsoft Azure", "Azure Honeypots", "Cloud Security Monitoring", "Active Directory", "Patch Management", "System Hardening"]
    },
    {
      icon: <FileCode className="h-6 w-6 text-cyber-blue" />,
      title: "Scripting & Automation",
      skills: ["Python", "PowerShell", "Security Automation", "Process Automation", "Alert Enrichment", "User Access Review Automation"]
    },
    {
      icon: <Database className="h-6 w-6 text-cyber-blue" />,
      title: "Data Analysis & ML",
      skills: ["Python", "SQL", "Power BI", "Excel", "Redash", "Machine Learning", "Interpretable ML", "Event-Study Analysis"]
    },
    {
      icon: <Briefcase className="h-6 w-6 text-cyber-blue" />,
      title: "Business Analysis & GRC",
      skills: ["Requirement Gathering", "BPMN", "BIA/BPA", "Process Optimization", "Archer GRC", "Risk Assessment", "Security ROI Analysis"]
    },
    {
      icon: <FileCode className="h-6 w-6 text-cyber-blue" />,
      title: "Enterprise Systems",
      skills: ["ServiceNow", "Jira", "Mambu", "Microsoft Dynamics 365", "EbizFrame", "SAP", "Freshworks Suite"]
    },
    {
      icon: <Languages className="h-6 w-6 text-cyber-blue" />,
      title: "Languages",
      skills: [
        "English (Professional working proficiency)",
        "Kasem (Native or bilingual proficiency)",
        "Twi (Professional working proficiency)"
      ]
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-cyber-blue" />,
      title: "Soft Skills",
      skills: ["Excellent Oral and Written Communication", "Detail-Oriented", "Proactive & Self-Motivated", "Security Awareness Training", "Stakeholder Management"]
    }
  ];

  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">Technical & Soft Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <Card key={index} className="border-none shadow-md hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="mr-3">{category.icon}</div>
                <h3 className="text-lg font-semibold text-cyber-navy dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="tech-tag"
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
