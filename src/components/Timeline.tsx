
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar, School, Award, ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

const Timeline = () => {
  const careerEvents = [
    {
      title: "Senior Research Aide",
      organization: "Research Foundation for SUNY",
      location: "Albany, New York",
      period: "October 2024 - Present",
      type: "work",
      description: [
        "Mining and developing Machine learning models and analysis for establishing Industry Affiliate Programs",
        "Researching into companies and individuals for collaboration with the center",
        "Gathering requirement, data and ideas needed by industry to collaborate with students and academia",
        "Coordinating with staff to organize events, identify talents and run the daily activities of the center",
        "Designing the business process flows and policies for implementations of programs"
      ]
    },
    {
      title: "Master of Science in Information Security",
      organization: "University at Albany",
      location: "Albany, New York",
      period: "2023 - 2025",
      type: "education",
      description: ["Focus on Cybersecurity, Digital Forensics and Incident Response"]
    },
    {
      title: "Lead Business and Systems Analyst",
      organization: "Fido Microcredit Limited",
      location: "Accra, Ghana",
      period: "February 2023 - August 2024",
      type: "work",
      description: [
        "Led IT and business analyst teams, improving KPI achievement by 13% through process optimization",
        "Streamlined operations with automation tools including Python and Zapier",
        "Analyzed complex datasets and developed strategic reports to drive data-driven decisions",
        "Enhanced cybersecurity posture through comprehensive security assessments and controls implementation"
      ]
    },
    {
      title: "Framework Implementation Lead - NIST SP 800-53",
      organization: "Fido Microcredit Limited",
      location: "Accra, Ghana",
      period: "June 2024 - August 2024",
      type: "work",
      description: [
        "Deployed NIST 800-53 controls across systems to enhance security posture",
        "Performed risk assessments, control mapping, and gap analysis to ensure compliance"
      ]
    },
    {
      title: "Implementation Lead - ISO/IEC 27001",
      organization: "Fido Microcredit Limited",
      location: "Accra, Ghana",
      period: "April 2023 - August 2023",
      type: "work",
      description: [
        "Led ISO 27001 certification project, managing compliance activities",
        "Conducted risk assessments and security audits while developing security policies"
      ]
    },
    {
      title: "Business Analyst",
      organization: "Coca-Cola Beverages Africa (Voltic GH)",
      location: "Accra, Ghana",
      period: "January 2022 - February 2023",
      type: "work",
      description: [
        "Developed Power BI and Excel dashboards for sales and logistics data visualization",
        "Reduced report preparation time by 20%, saving 120 man-hours per month",
        "Audited 1000+ outlets, leading to a 17% improvement in compliance adherence",
        "Analyzed business processes using CRM, SAP, and BPMN, improving process efficiency by 15%"
      ]
    },
    {
      title: "CyberSecurity Consultant",
      organization: "Freelance",
      location: "Accra, Ghana",
      period: "January 2020 - December 2021",
      type: "work",
      description: [
        "Provided cybersecurity consulting services to SMEs",
        "Conducted security assessments and implemented security controls"
      ]
    },
    {
      title: "Bachelor of Science in Computer Science",
      organization: "University of Ghana",
      location: "Legon, Ghana",
      period: "2016 - 2020",
      type: "education",
      description: ["Focus on Software Engineering and Information Security"]
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "work":
        return <Briefcase className="h-5 w-5 text-cyber-blue dark:text-cyber-blue" />;
      case "education":
        return <School className="h-5 w-5 text-cyber-green dark:text-cyber-green" />;
      case "award":
        return <Award className="h-5 w-5 text-amber-500 dark:text-amber-400" />;
      default:
        return <Calendar className="h-5 w-5 text-cyber-slate dark:text-gray-400" />;
    }
  };

  return (
    <section id="timeline" className="bg-white dark:bg-gray-900 py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Professional Timeline</h2>
        <p className="text-cyber-slate dark:text-gray-400 mb-12 max-w-2xl">
          A chronological overview of my professional journey, highlighting key roles and educational milestones
          that have shaped my career in cybersecurity and information technology.
        </p>

        <ScrollArea className="h-[650px] w-full rounded-lg pr-4">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[25px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-blue to-cyber-green dark:from-cyber-blue dark:to-cyber-green"></div>

            <div className="space-y-8">
              {careerEvents.map((event, index) => (
                <div key={index} className="relative">
                  <div className="flex">
                    {/* Icon on timeline */}
                    <div className="z-10 mt-1.5 -ml-2.5 flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-gray-800 border-2 border-cyber-blue dark:border-cyber-blue shadow-md">
                      {getIcon(event.type)}
                    </div>

                    {/* Content */}
                    <div className="ml-4 flex-grow">
                      <Card className="border-none shadow-md hover:shadow-xl transition-shadow dark:bg-gray-800/75 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row justify-between gap-2">
                            <div>
                              <h3 className="text-xl font-bold text-cyber-navy dark:text-white">{event.title}</h3>
                              <p className="text-lg font-semibold text-cyber-blue dark:text-cyber-blue">{event.organization}</p>
                            </div>
                            <div className="flex items-center text-cyber-slate dark:text-gray-300 whitespace-nowrap">
                              <Calendar className="mr-2 h-4 w-4 flex-shrink-0" />
                              <span>{event.period}</span>
                            </div>
                          </div>

                          <p className="mt-2 text-cyber-slate dark:text-gray-300">{event.location}</p>

                          <Separator className="my-4" />

                          <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                            {event.description.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>
      </div>
    </section>
  );
};

export default Timeline;
