
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
  ServerCog
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-cyber-blue" />,
      title: "Cybersecurity Frameworks & Policy",
      skills: ["ISO 27001", "HIPAA", "NIST (SP 800-37, SP 800-53)", "ICS Matrix", "GDPR", "PCI-DSS", "COBIT", "SOC 2"]
    },
    {
      icon: <Shield className="h-6 w-6 text-cyber-blue" />,
      title: "Security Operations",
      skills: ["SIEM Implementation", "Log Analysis", "Incident Response", "Threat Hunting", "Security Monitoring", "Forensic Analysis"]
    },
    {
      icon: <Lock className="h-6 w-6 text-cyber-blue" />,
      title: "Network Security",
      skills: ["Firewall Configuration", "IDS/IPS", "VPN Setup", "DMZ Architecture", "Zero Trust Implementation", "Network Segmentation"]
    },
    {
      icon: <Network className="h-6 w-6 text-cyber-blue" />,
      title: "Networking",
      skills: ["TCP/IP", "DNS", "OSI Model", "Routing Protocols", "Subnetting", "Wireshark Analysis"]
    },
    {
      icon: <Bug className="h-6 w-6 text-cyber-blue" />,
      title: "Vulnerability Management & Penetration Testing",
      skills: ["Virtualbox", "Kali Linux", "Metasploit", "Nmap", "Nessus", "Burp Suite", "OWASP ZAP", "Security Code Review"]
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-cyber-blue" />,
      title: "Malware Analysis and Threat Intel",
      skills: ["Qualys-TruRisk", "OSNIT", "VirusTotal", "Mitre Att&ck", "Yara Rules", "Sandbox Analysis", "IoC Development"]
    },
    {
      icon: <ServerCog className="h-6 w-6 text-cyber-blue" />,
      title: "Cloud Security",
      skills: ["AWS Security", "Azure Security Center", "GCP Security", "Cloud Access Security Brokers", "Container Security", "Kubernetes Security"]
    },
    {
      icon: <Database className="h-6 w-6 text-cyber-blue" />,
      title: "Data Security & Privacy",
      skills: ["Data Classification", "DLP Solutions", "Encryption Technologies", "PKI", "Tokenization", "Database Security"]
    },
    {
      icon: <FileCode className="h-6 w-6 text-cyber-blue" />,
      title: "Data Analysis and Programming",
      skills: ["Microsoft Excel", "SQL", "Power BI", "Redash", "Python", "Machine Learning", "SIEM Scripting"]
    },
    {
      icon: <Briefcase className="h-6 w-6 text-cyber-blue" />,
      title: "Business Analysis",
      skills: ["Requirement gathering", "Process optimization", "Process automation", "Risk Assessment", "Security ROI Analysis"]
    },
    {
      icon: <FileCode className="h-6 w-6 text-cyber-blue" />,
      title: "CRM AND ERP",
      skills: ["Jira", "Mambu", "Microsoft Dynamic NAV 365", "Ebiz-Frame", "SAP", "Freshworks Suite"]
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-cyber-blue" />,
      title: "Soft Skills",
      skills: ["Excellent Oral and written communication skills", "Detail oriented", "Initiative", "Security Awareness Training", "Stakeholder Management"]
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
