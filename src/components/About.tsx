
import React from "react";
import { Shield, Server, Brain, LineChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const specializations = [
    {
      icon: <Shield className="h-8 w-8 text-cyber-blue" />,
      title: "Cybersecurity",
      description: "Expert in cybersecurity frameworks, threat intelligence, and vulnerability management."
    },
    {
      icon: <Server className="h-8 w-8 text-cyber-blue" />,
      title: "Network Security",
      description: "Proficient in TCP/IP, DNS, OSI Model, and implementing secure routing protocols."
    },
    {
      icon: <Brain className="h-8 w-8 text-cyber-blue" />,
      title: "Data Analysis",
      description: "Skilled in Python, SQL, Power BI, with machine learning experience for data-driven security insights."
    },
    {
      icon: <LineChart className="h-8 w-8 text-cyber-blue" />,
      title: "Business Analysis",
      description: "Experience in process optimization, requirement gathering, and implementing business solutions."
    }
  ];

  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I'm a cybersecurity specialist with a passion for digital forensics, risk assessment, and protecting critical infrastructure. Currently pursuing my Master's in Digital Forensics and Cybersecurity, I combine technical expertise with business analysis skills to deliver comprehensive security solutions.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            My experience spans from implementing ISO 27001 frameworks to developing machine learning models for threat detection. I've worked in both technical and business analyst roles, giving me a unique perspective on cybersecurity challenges.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            My research focus includes modeling power grid resilience against cyber threats and quantifying the economic impact of phishing attacks on small businesses. I'm dedicated to creating practical security solutions that balance robust protection with business requirements.
          </p>
        </div>
        
        <div className="bg-muted dark:bg-muted/20 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-cyber-navy dark:text-white">Personal Information</h3>
          
          <div className="space-y-4">
            <div className="grid grid-cols-3">
              <span className="font-semibold text-cyber-slate dark:text-gray-400">Name:</span>
              <span className="col-span-2 text-gray-600 dark:text-gray-300">Philip Akekudaga</span>
            </div>
            
            <div className="grid grid-cols-3">
              <span className="font-semibold text-cyber-slate dark:text-gray-400">Location:</span>
              <span className="col-span-2 text-gray-600 dark:text-gray-300">Albany, New York</span>
            </div>
            
            <div className="grid grid-cols-3">
              <span className="font-semibold text-cyber-slate dark:text-gray-400">Email:</span>
              <span className="col-span-2 text-gray-600 dark:text-gray-300 break-all">
                <a href="mailto:akekulip@gmail.com" className="hover:text-cyber-blue transition-colors">
                  akekulip@gmail.com
                </a>
              </span>
            </div>
            
            <div className="grid grid-cols-3">
              <span className="font-semibold text-cyber-slate dark:text-gray-400">Phone:</span>
              <span className="col-span-2 text-gray-600 dark:text-gray-300">
                <a href="tel:+19296859890" className="hover:text-cyber-blue transition-colors">
                  (929) 685-9890
                </a>
              </span>
            </div>
            
            <div className="grid grid-cols-3">
              <span className="font-semibold text-cyber-slate dark:text-gray-400">LinkedIn:</span>
              <span className="col-span-2 text-gray-600 dark:text-gray-300">
                <a 
                  href="https://www.linkedin.com/in/akekudaga-philip-49557683/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-cyber-blue transition-colors"
                >
                  akekudaga-philip
                </a>
              </span>
            </div>
            
            <div className="grid grid-cols-3">
              <span className="font-semibold text-cyber-slate dark:text-gray-400">GitHub:</span>
              <span className="col-span-2 text-gray-600 dark:text-gray-300">
                <a 
                  href="https://github.com/akekulip" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-cyber-blue transition-colors"
                >
                  akekulip
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <h3 className="section-subtitle text-center">Specializations</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {specializations.map((item, index) => (
          <Card key={index} className="border-none shadow-md hover:shadow-xl transition-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="mb-4 p-3 bg-cyber-blue/10 rounded-full">{item.icon}</div>
              <h4 className="text-lg font-semibold mb-2 text-cyber-navy dark:text-white">{item.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default About;
