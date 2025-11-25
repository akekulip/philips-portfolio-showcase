import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, Users, Shield, TrendingUp, Target } from "lucide-react";

const Impact = () => {
  const metrics = [
    {
      icon: BookOpen,
      value: "10+",
      label: "Research Publications",
      description: "Published & In Progress",
      color: "text-primary"
    },
    {
      icon: Award,
      value: "1st",
      label: "Best Student Paper",
      description: "ICMLA 2023",
      color: "text-green-500"
    },
    {
      icon: Shield,
      value: "3+",
      label: "Security Certifications",
      description: "CompTIA & More",
      color: "text-amber-500"
    },
    {
      icon: Users,
      value: "2",
      label: "Professional Memberships",
      description: "IEEE & ISC²",
      color: "text-purple-500"
    },
    {
      icon: TrendingUp,
      value: "5+",
      label: "Years Experience",
      description: "Cybersecurity & Research",
      color: "text-emerald-500"
    },
    {
      icon: Target,
      value: "100%",
      label: "Mission Critical",
      description: "Healthcare Security",
      color: "text-rose-500"
    }
  ];

  const certifications = [
    {
      name: "CompTIA Security+",
      issuer: "CompTIA",
      date: "2023",
      credentialId: "COMP001022169788",
      verified: true
    }
  ];

  const awards = [
    {
      title: "Best Student Paper Award",
      event: "21st IEEE International Conference on Machine Learning and Applications (ICMLA)",
      year: "2023",
      description: "Recognized for outstanding research in adversarial machine learning and malware detection"
    }
  ];

  return (
    <section id="impact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wide">
            Achievements
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-cyber-navy dark:text-white">
            Impact & Achievements
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Driving innovation in cybersecurity through research, certification, and real-world impact
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-gray-100 dark:border-gray-800 bg-white dark:bg-cyber-navy"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gray-50 dark:bg-gray-800 group-hover:scale-110 transition-transform ${metric.color}`}>
                    <metric.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="outline" className="text-xs border-gray-200 dark:border-gray-700">
                    Verified
                  </Badge>
                </div>
                <div className="space-y-1">
                  <h3 className="text-4xl font-bold text-cyber-navy dark:text-white">
                    {metric.value}
                  </h3>
                  <p className="font-semibold text-gray-800 dark:text-gray-200">{metric.label}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{metric.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Awards Section */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-6 flex items-center gap-2 text-cyber-navy dark:text-white">
              <Award className="h-6 w-6 text-primary" />
              Featured Awards
            </h3>
            {awards.map((award, index) => (
              <Card
                key={index}
                className="border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300 bg-white dark:bg-cyber-navy"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-4 rounded-full bg-primary/10">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-xl font-bold text-cyber-navy dark:text-white">{award.title}</h4>
                        <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">
                          {award.year}
                        </Badge>
                      </div>
                      <p className="text-primary font-medium mb-2">{award.event}</p>
                      <p className="text-gray-600 dark:text-gray-300">{award.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-6 flex items-center gap-2 text-cyber-navy dark:text-white">
              <Shield className="h-6 w-6 text-amber-500" />
              Professional Certifications
            </h3>
            <div className="grid grid-cols-1 gap-6">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 border-gray-100 dark:border-gray-800 bg-white dark:bg-cyber-navy"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-amber-500/10 group-hover:scale-110 transition-transform">
                        <Shield className="h-6 w-6 text-amber-500" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-bold text-cyber-navy dark:text-white">{cert.name}</h4>
                          {cert.verified && (
                            <Badge variant="outline" className="text-xs border-green-200 text-green-600 dark:border-green-800 dark:text-green-400">
                              ✓ Verified
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{cert.issuer}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Issued: {cert.date}</p>
                        <p className="text-xs text-gray-400 font-mono mt-2">
                          ID: {cert.credentialId}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
