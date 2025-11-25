import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Award, BookOpen, Presentation, Laptop } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Publications = () => {
  const conferencePapers = [
    {
      title: "Quantifying Systemic Risk in Critical Power Infrastructure Using FDNA: From Single-Node Failure to Grid-Wide Cascades",
      authors: "Akekudaga, P.",
      venue: "SIRAcon '25",
      location: "Boston, MA",
      date: "September 11, 2025",
      status: "Accepted & Scheduled",
      type: "Conference Paper"
    },
    {
      title: "Navigating Multi-Jurisdictional Privacy Compliance in AI: An Empirical Analysis of Regulatory Gaps",
      authors: "Akekudaga, P. & Bonsu, M. A.",
      venue: "IEEE Ubiquitous Computing, Electronics & Mobile Communication Conference (UEMCON) 2025",
      location: "New York, NY",
      date: "Oct 22–24, 2025",
      status: "Accepted",
      type: "Regular Research Paper"
    },
    {
      title: "Enhancing Critical Infrastructure Security: Addressing Cybersecurity Risks and Regulatory Gaps in AI-Enabled IoT Systems",
      authors: "Bonsu, M. A. & Akekudaga, P.",
      venue: "IEEE UEMCON 2025",
      location: "New York, NY",
      date: "Oct 22–24, 2025",
      status: "Accepted",
      type: "Regular Research Paper"
    },
    {
      title: "A Framework for Financial Markets Impact Assessment of Data Breaches Using Interpretable Machine Learning and Event Study Methods",
      authors: "Akekudaga, P., & Keskin, O.",
      venue: "20th Annual Symposium on Information Assurance (ASIA '25)",
      location: "Albany, NY: University at Albany, SUNY",
      date: "2025",
      pages: "pp. 180-187",
      status: "Published",
      type: "Conference Proceedings"
    }
  ];

  const publishedPapers = [
    {
      title: "Resilient IoT Security: Early Flood Attack Detection in IoT Networks Using GRU Deep Learning Model",
      authors: "Bonsu, M. A., & Akekudaga, P.",
      journal: "World Journal of Advanced Research and Reviews",
      volume: "27(2)",
      pages: "871–886",
      date: "2025",
      doi: "https://doi.org/10.30574/wjarr.2025.27.2.2897",
      status: "Published"
    }
  ];

  const articlesInPress = [
    {
      title: "When the Ground Shakes: Social Media Responses to the 2024 Northeast Earthquake",
      authors: "Dadson, Y., & Akekudaga, P.",
      status: "Accepted, In Press",
      preprint: "https://doi.org/10.2139/ssrn.5462365",
      date: "2025"
    }
  ];

  const researchInProgress = [
    {
      title: "A Unified Risk Data Model for Cross Framework Interoperability in Third Party Risk Quantification",
      authors: "Akekudaga, P.",
      status: "In Progress"
    },
    {
      title: "Quantifying Systemic Risk in Power Grids Using Functional Dependency Network Analysis: A Multi-Layer Approach",
      authors: "Akekudaga, P.",
      status: "In Progress"
    }
  ];

  const projects = [
    {
      title: "Cloud Honeypot Threat Mapping",
      description: "Deployed an Azure Windows honeypot, captured 75k+ brute-force attempts in 24h, and built a KQL-driven Microsoft Sentinel dashboard that mapped attacker IPs and key KPIs in real time.",
      technologies: ["Azure", "Microsoft Sentinel", "KQL", "Threat Intelligence"],
      date: "June 2025"
    },
    {
      title: "FDNA Modeling for Power-Grid Resilience & Risk Assessment",
      description: "Graph-based FDNA model to quantify cascading cyber/physical disruptions and prioritize ROI-based resilience investments",
      technologies: ["Python", "FDNA", "Risk Modeling", "Critical Infrastructure"],
      date: "March 2025"
    }
  ];

  const awards = [
    {
      title: "Winner, SIRAcon '25 Research Competition",
      date: "2025"
    },
    {
      title: "Graduate Assistant",
      organization: "University at Albany",
      date: "2025"
    }
  ];

  const researchInterests = [
    "Cybersecurity risk quantification and governance; FAIR/FAIR-CAM–aligned risk modeling",
    "Critical infrastructure resilience; functional dependency network analysis (FDNA) for power grids and OT/ICS",
    "AI governance, privacy, and multi-jurisdictional compliance in AI-enabled systems"
  ];

  return (
    <section id="publications" className="section-container bg-background">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wide">
          Research
        </div>
        <h2 className="section-title mb-6">Research & Publications</h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Contributing to the field through academic research and practical applications.
        </p>
      </div>

      {/* Research Interests */}
      <Card className="border border-gray-100 dark:border-gray-800 shadow-sm mb-12 bg-white dark:bg-cyber-navy">
        <CardContent className="p-8">
          <h3 className="text-xl font-heading font-bold mb-6 text-cyber-navy dark:text-white flex items-center">
            <BookOpen className="mr-3 h-6 w-6 text-primary" /> Research Interests
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {researchInterests.map((interest, index) => (
              <li key={index} className="flex items-start p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                <div className="mt-1.5 mr-3 w-2 h-2 rounded-full bg-primary shrink-0"></div>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{interest}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          {/* Conference Papers */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-cyber-navy dark:text-white mb-6 flex items-center">
              <Presentation className="mr-3 h-6 w-6 text-primary" /> Conference Papers
            </h3>
            <div className="space-y-6">
              {conferencePapers.map((paper, index) => (
                <Card key={index} className="border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all bg-white dark:bg-cyber-navy">
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-3">
                      <div className="flex justify-between items-start gap-4">
                        <h4 className="text-lg font-bold text-cyber-navy dark:text-white leading-snug">{paper.title}</h4>
                        <Badge variant={paper.status.includes("Published") ? "default" : "secondary"} className="shrink-0">
                          {paper.status}
                        </Badge>
                      </div>

                      <p className="text-primary font-medium">{paper.authors}</p>

                      <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <p className="font-medium text-cyber-navy dark:text-gray-200">{paper.venue}</p>
                        <div className="flex flex-wrap gap-x-3">
                          {paper.location && <span>{paper.location}</span>}
                          {paper.date && <span>• {paper.date}</span>}
                        </div>
                        {paper.pages && <p>{paper.pages}</p>}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Published Papers */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-cyber-navy dark:text-white mb-6 flex items-center">
              <FileText className="mr-3 h-6 w-6 text-primary" /> Journal Publications
            </h3>
            <div className="space-y-6">
              {publishedPapers.map((paper, index) => (
                <Card key={index} className="border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all bg-white dark:bg-cyber-navy">
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-3">
                      <h4 className="text-lg font-bold text-cyber-navy dark:text-white leading-snug">{paper.title}</h4>
                      <p className="text-primary font-medium">{paper.authors}</p>

                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        <p className="italic mb-1">{paper.journal}</p>
                        <div className="flex flex-wrap gap-x-3">
                          {paper.volume && <span>Vol: {paper.volume}</span>}
                          {paper.pages && <span>Pages: {paper.pages}</span>}
                          {paper.date && <span>({paper.date})</span>}
                        </div>
                      </div>

                      {paper.doi && (
                        <a
                          href={paper.doi}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline mt-1 inline-flex items-center"
                        >
                          DOI Link <FileText className="ml-1 h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Articles In Press */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-cyber-navy dark:text-white mb-6">Articles In Press</h3>
            <div className="space-y-6">
              {articlesInPress.map((article, index) => (
                <Card key={index} className="border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all bg-white dark:bg-cyber-navy">
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-3">
                      <div className="flex justify-between items-start gap-4">
                        <h4 className="text-lg font-bold text-cyber-navy dark:text-white leading-snug">{article.title}</h4>
                        <Badge variant="outline" className="shrink-0 border-primary/30 text-primary">
                          In Press
                        </Badge>
                      </div>
                      <p className="text-primary font-medium">{article.authors}</p>

                      {article.preprint && (
                        <a
                          href={article.preprint}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-500 hover:text-primary transition-colors mt-1"
                        >
                          Preprint Available
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {/* Awards */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-cyber-navy dark:text-white mb-6 flex items-center">
              <Award className="mr-3 h-6 w-6 text-primary" /> Awards
            </h3>
            <div className="space-y-4">
              {awards.map((award, index) => (
                <Card key={index} className="border border-gray-100 dark:border-gray-800 shadow-sm bg-white dark:bg-cyber-navy">
                  <CardContent className="p-5">
                    <div className="flex items-start">
                      <div className="mt-1 mr-3 text-amber-500">
                        <Award className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-bold text-cyber-navy dark:text-white leading-snug">{award.title}</p>
                        {award.organization && <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{award.organization}</p>}
                        <p className="text-xs text-gray-400 mt-1">{award.date}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Research In Progress */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-cyber-navy dark:text-white mb-6 flex items-center">
              <BookOpen className="mr-3 h-6 w-6 text-primary" /> In Progress
            </h3>
            <div className="space-y-4">
              {researchInProgress.map((research, index) => (
                <Card key={index} className="border border-gray-100 dark:border-gray-800 shadow-sm bg-white dark:bg-cyber-navy">
                  <CardContent className="p-5">
                    <h4 className="font-bold text-cyber-navy dark:text-white leading-snug mb-2">{research.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{research.authors}</p>
                    <Badge variant="secondary" className="text-xs font-normal">
                      {research.status}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Selected Projects */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-cyber-navy dark:text-white mb-6 flex items-center">
              <Laptop className="mr-3 h-6 w-6 text-primary" /> Projects
            </h3>
            <div className="space-y-4">
              {projects.map((project, index) => (
                <Card key={index} className="border border-gray-100 dark:border-gray-800 shadow-sm bg-white dark:bg-cyber-navy">
                  <CardContent className="p-5">
                    <h4 className="font-bold text-cyber-navy dark:text-white leading-snug mb-2">{project.title}</h4>
                    <p className="text-xs text-primary mb-2">{project.date}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="text-[10px] px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
                          {tech}
                        </span>
                      ))}
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

export default Publications;
