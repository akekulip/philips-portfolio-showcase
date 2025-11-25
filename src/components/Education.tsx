
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      institution: "SUNY, University at Albany",
      degree: "M.S. Digital Forensics and Cybersecurity, Risk, Policy and Compliance",
      location: "New York, USA",
      period: "Expected Dec 2025",
      gpa: "3.9",
      courses: [
        "Threat Intelligence, Prevention and Protection Strategies and Technologies in Cybersecurity",
        "Information Security Audit",
        "Advanced Networking",
        "Python",
        "GIS",
        "Risk Management"
      ]
    },
    {
      institution: "Kwame Nkrumah University of Science and Technology",
      degree: "BSc. Computer Engineering",
      location: "Kumasi, Ghana",
      period: "2014"
    }
  ];

  const certifications = [
    {
      name: "CompTIA Security+ (SY0-701)",
      issuer: "CompTIA",
      date: "Aug 2025"
    },
    {
      name: "Certified Information Systems Security Professional (CISSP)",
      issuer: "ISC²",
      date: "Exam due in October 2025"
    },
    {
      name: "(ISC)² Candidate",
      issuer: "ISC2",
      date: "Nov 2022 - Nov 2023"
    },
    {
      name: "OPSWAT Introduction to Critical Infrastructure Protection (ICIP)",
      issuer: "OPSWAT",
      date: "Nov 2022 - Nov 2023"
    },
    {
      name: "Google IT Support",
      issuer: "Google",
      date: "May 2022",
      credentialId: "SN37S2NR8U47"
    },
    {
      name: "ISO/IEC 27001 INFORMATION SECURITY ASSOCIATE™",
      issuer: "SkillFront",
      date: "Jan 2022",
      credentialId: "83377168793210"
    },
    {
      name: "Google Data Analysis Professional",
      issuer: "Google",
      date: "Sep 2021"
    },
    {
      name: "Fibre Optics technician",
      issuer: "JOHVIC Fiber Optics and Associates",
      date: "May 2014"
    },
    {
      name: "Black Hills Information Security SOC Training",
      date: ""
    },
    {
      name: "OSINT Fundamental",
      date: ""
    },
    {
      name: "MITRE ATT&CK Cyber Threat Intelligence",
      date: ""
    },
    {
      name: "RiskIQ Threat Intel/Hunting Workshop",
      date: ""
    },
    {
      name: "Security Blue Team Introduction to Threat Hunting",
      date: ""
    }
  ];

  const affiliations = [
    "National Society of Black Engineers (NSBE) – Collegiate Member",
    "ISACA – Student Membership",
    "ISC² Member",
    "Institute of Electrical and Electronic Engineers (IEEE) – Student Member"
  ];

  return (
    <section id="education" className="section-container bg-gray-50 dark:bg-gray-900/50">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wide">
          Academic
        </div>
        <h2 className="section-title mb-6">Education & Certifications</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <h3 className="text-2xl font-heading font-bold text-cyber-navy dark:text-white mb-6 flex items-center">
            <GraduationCap className="mr-3 h-6 w-6 text-primary" /> Academic Background
          </h3>

          <div className="space-y-6">
            {education.map((item, index) => (
              <Card key={index} className="border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all bg-white dark:bg-cyber-navy">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div>
                      <h4 className="text-xl font-heading font-bold text-cyber-navy dark:text-white">{item.institution}</h4>
                      <p className="text-lg font-medium text-primary mt-1">{item.degree}</p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1 text-sm text-gray-500 dark:text-gray-400">
                      <span className="flex items-center"><Calendar className="mr-1 h-3 w-3" /> {item.period}</span>
                      <span className="flex items-center"><MapPin className="mr-1 h-3 w-3" /> {item.location}</span>
                    </div>
                  </div>

                  {item.gpa && (
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-sm font-medium mb-6">
                      <Award className="mr-1.5 h-3.5 w-3.5" />
                      GPA: {item.gpa}
                    </div>
                  )}

                  {item.courses && (
                    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                      <p className="font-medium text-cyber-navy dark:text-white mb-3 text-sm uppercase tracking-wider">Relevant Courses</p>
                      <div className="flex flex-wrap gap-2">
                        {item.courses.map((course, idx) => (
                          <span key={idx} className="text-sm px-3 py-1 bg-gray-50 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-heading font-bold text-cyber-navy dark:text-white mb-6 flex items-center">
              <Award className="mr-3 h-6 w-6 text-primary" /> Certifications
            </h3>

            <Card className="border border-gray-100 dark:border-gray-800 shadow-sm bg-white dark:bg-cyber-navy">
              <CardContent className="p-6">
                <ul className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start pb-4 border-b border-gray-100 dark:border-gray-800 last:border-0 last:pb-0">
                      <div className="mt-1.5 mr-3 w-2 h-2 rounded-full bg-primary shrink-0"></div>
                      <div>
                        <p className="text-gray-800 dark:text-gray-200 font-medium leading-snug">{cert.name}</p>
                        <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1 text-xs text-gray-500 dark:text-gray-400">
                          {cert.issuer && <span>{cert.issuer}</span>}
                          {cert.date && <span>• {cert.date}</span>}
                        </div>
                        {cert.credentialId && <p className="text-xs text-gray-400 mt-0.5 font-mono">ID: {cert.credentialId}</p>}
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl font-heading font-bold text-cyber-navy dark:text-white mb-6 flex items-center">
              <GraduationCap className="mr-3 h-6 w-6 text-primary" /> Affiliations
            </h3>

            <Card className="border border-gray-100 dark:border-gray-800 shadow-sm bg-white dark:bg-cyber-navy">
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {affiliations.map((affiliation, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mt-2 mr-3 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></div>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{affiliation}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
