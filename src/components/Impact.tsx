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
      color: "text-cyber-blue"
    },
    {
      icon: Award,
      value: "1st",
      label: "Best Student Paper",
      description: "ICMLA 2023",
      color: "text-cyber-green"
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
    <section id="impact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-cyber-blue to-cyber-green bg-clip-text text-transparent">
            Impact & Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Driving innovation in cybersecurity through research, certification, and real-world impact
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-border/50 backdrop-blur-sm bg-card/80"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br from-background to-muted group-hover:scale-110 transition-transform ${metric.color}`}>
                    <metric.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    Verified
                  </Badge>
                </div>
                <div className="space-y-2">
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                    {metric.value}
                  </h3>
                  <p className="font-semibold text-foreground">{metric.label}</p>
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Awards Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Award className="h-6 w-6 text-cyber-green" />
            Featured Awards
          </h3>
          {awards.map((award, index) => (
            <Card 
              key={index}
              className="border-2 border-cyber-green/20 hover:border-cyber-green/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyber-green/10 bg-gradient-to-br from-card to-card/50"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-full bg-cyber-green/10">
                    <Award className="h-8 w-8 text-cyber-green" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-xl font-bold text-foreground">{award.title}</h4>
                      <Badge className="bg-cyber-green/20 text-cyber-green hover:bg-cyber-green/30">
                        {award.year}
                      </Badge>
                    </div>
                    <p className="text-cyber-blue font-medium mb-2">{award.event}</p>
                    <p className="text-muted-foreground">{award.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Shield className="h-6 w-6 text-amber-500" />
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-amber-500/20 hover:border-amber-500/40 bg-gradient-to-br from-card to-amber-500/5"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-amber-500/10 group-hover:scale-110 transition-transform">
                      <Shield className="h-6 w-6 text-amber-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-bold text-foreground">{cert.name}</h4>
                        {cert.verified && (
                          <Badge variant="outline" className="text-xs border-cyber-green text-cyber-green">
                            ✓ Verified
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                      <p className="text-xs text-muted-foreground">Issued: {cert.date}</p>
                      <p className="text-xs text-muted-foreground font-mono mt-2">
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
    </section>
  );
};

export default Impact;
