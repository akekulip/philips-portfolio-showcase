
import React from "react";
import { Shield, Server, Brain, LineChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const specializations = [
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Cybersecurity",
      description: "Expert in cybersecurity frameworks, threat intelligence, and vulnerability management."
    },
    {
      icon: <Server className="h-6 w-6 text-primary" />,
      title: "Network Security",
      description: "Proficient in TCP/IP, DNS, OSI Model, and implementing secure routing protocols."
    },
    {
      icon: <Brain className="h-6 w-6 text-primary" />,
      title: "Data Analysis",
      description: "Skilled in Python, SQL, Power BI, with machine learning experience for data-driven security insights."
    },
    {
      icon: <LineChart className="h-6 w-6 text-primary" />,
      title: "Business Analysis",
      description: "Experience in process optimization, requirement gathering, and implementing business solutions."
    }
  ];

  return (
    <section id="about" className="section-container">
      <div className="flex flex-col md:flex-row gap-12 items-start mb-20">
        <div className="md:w-1/2">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-secondary text-primary text-sm font-medium tracking-wide">
            About Me
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-cyber-navy dark:text-white">
            Bridging the gap between <span className="text-primary">technical security</span> and business strategy.
          </h2>
          <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              I'm a cybersecurity specialist with a passion for digital forensics, risk assessment, and protecting critical infrastructure. Currently pursuing my Master's in Digital Forensics and Cybersecurity, I combine technical expertise with business analysis skills to deliver comprehensive security solutions.
            </p>
            <p>
              My experience spans from implementing ISO 27001 frameworks to developing machine learning models for threat detection. I've worked in both technical and business analyst roles, giving me a unique perspective on cybersecurity challenges.
            </p>
          </div>
        </div>

        <div className="md:w-1/2 w-full">
          <div className="bg-white dark:bg-cyber-navy rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-800">
            <h3 className="text-xl font-heading font-semibold mb-6 text-cyber-navy dark:text-white border-b border-gray-100 dark:border-gray-800 pb-4">
              Personal Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-500 dark:text-gray-400">Location</span>
                <span className="text-cyber-navy dark:text-white font-medium">Albany, New York</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-500 dark:text-gray-400">Email</span>
                <a href="mailto:akekulip@gmail.com" className="text-primary hover:text-primary/80 transition-colors font-medium">
                  akekulip@gmail.com
                </a>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-500 dark:text-gray-400">Phone</span>
                <a href="tel:+19296859890" className="text-cyber-navy dark:text-white hover:text-primary transition-colors font-medium">
                  (929) 685-9890
                </a>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-500 dark:text-gray-400">LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/akekudaga-philip-49557683/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  akekudaga-philip
                </a>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-500 dark:text-gray-400">GitHub</span>
                <a
                  href="https://github.com/akekulip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  akekulip
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-heading font-bold mb-8 text-center text-cyber-navy dark:text-white">Core Competencies</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specializations.map((item, index) => (
            <Card key={index} className="border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-cyber-navy">
              <CardContent className="p-6 flex flex-col items-start h-full">
                <div className="mb-4 p-3 bg-primary/10 rounded-xl text-primary">{item.icon}</div>
                <h4 className="text-lg font-heading font-bold mb-3 text-cyber-navy dark:text-white">{item.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
