
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      institution: "SUNY, University at Albany",
      degree: "Ms. Digital Forensics and Cybersecurity, Risk, Policy and Compliance",
      location: "New York, USA",
      period: "Expected 2026",
      gpa: "3.78",
      courses: [
        "Threat Intelligence, Prevention and Protection Strategies and Technologies in Cybersecurity",
        "Information Security Audit",
        "Advance Networking"
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
      name: "Certified Information Systems Security Professional (CISSP)",
      date: "Expected in May 2026"
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
    "ISACA – Student Membership"
  ];

  return (
    <section id="education" className="section-container">
      <h2 className="section-title">Education & Certifications</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h3 className="section-subtitle">Academic Background</h3>
          
          <div className="space-y-6">
            {education.map((item, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="mr-4 mt-1">
                      <GraduationCap className="h-8 w-8 text-cyber-blue" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-cyber-navy dark:text-white">{item.institution}</h4>
                      <p className="text-lg font-medium text-cyber-slate dark:text-gray-300">{item.degree}</p>
                    </div>
                  </div>
                  
                  <div className="ml-12 space-y-3">
                    <div className="flex items-center text-cyber-slate dark:text-gray-400">
                      <MapPin className="mr-2 h-4 w-4" />
                      <span>{item.location}</span>
                    </div>
                    
                    <div className="flex items-center text-cyber-slate dark:text-gray-400">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>{item.period}</span>
                    </div>
                    
                    {item.gpa && (
                      <div className="flex items-center text-cyber-slate dark:text-gray-400">
                        <Award className="mr-2 h-4 w-4" />
                        <span>GPA: {item.gpa}</span>
                      </div>
                    )}
                    
                    {item.courses && (
                      <div className="mt-4">
                        <p className="font-medium text-cyber-navy dark:text-white mb-2">Relevant Courses:</p>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
                          {item.courses.map((course, idx) => (
                            <li key={idx}>{course}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="section-subtitle">Certifications & Affiliations</h3>
          
          <Card className="border-none shadow-md mb-6">
            <CardContent className="p-6">
              <h4 className="text-lg font-bold mb-4 text-cyber-navy dark:text-white flex items-center">
                <Award className="mr-2 h-5 w-5 text-cyber-blue" /> Certifications
              </h4>
              
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-5 w-5 mr-2 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-cyber-blue mt-2"></div>
                    </div>
                    <div>
                      <p className="text-gray-700 dark:text-gray-300 font-medium">{cert.name}</p>
                      {cert.date && <p className="text-sm text-cyber-slate dark:text-gray-400">{cert.date}</p>}
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md">
            <CardContent className="p-6">
              <h4 className="text-lg font-bold mb-4 text-cyber-navy dark:text-white flex items-center">
                <GraduationCap className="mr-2 h-5 w-5 text-cyber-blue" /> Affiliations
              </h4>
              
              <ul className="space-y-3">
                {affiliations.map((affiliation, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-5 w-5 mr-2 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-cyber-blue mt-2"></div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{affiliation}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
