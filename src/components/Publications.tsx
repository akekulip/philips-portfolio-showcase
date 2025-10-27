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
    <section id="publications" className="section-container bg-gray-50 dark:bg-gray-900">
      <h2 className="section-title">Research & Publications</h2>
      
      {/* Research Interests */}
      <Card className="border-none shadow-md mb-8">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-4 text-cyber-navy dark:text-white flex items-center">
            <BookOpen className="mr-2 h-5 w-5 text-cyber-blue" /> Research Interests
          </h3>
          <ul className="space-y-2">
            {researchInterests.map((interest, index) => (
              <li key={index} className="flex items-start">
                <div className="h-5 w-5 mr-2 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-cyber-blue mt-2"></div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{interest}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Awards */}
      <div className="mb-8">
        <h3 className="section-subtitle">Awards & Recognition</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {awards.map((award, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardContent className="p-4">
                <div className="flex items-start">
                  <Award className="mr-3 h-5 w-5 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-cyber-navy dark:text-white">{award.title}</p>
                    {award.organization && <p className="text-sm text-cyber-slate dark:text-gray-400">{award.organization}</p>}
                    <p className="text-sm text-cyber-slate dark:text-gray-400">{award.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-8" />

      {/* Conference Papers */}
      <div className="mb-8">
        <h3 className="section-subtitle">Conference Papers</h3>
        <div className="space-y-4">
          {conferencePapers.map((paper, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start mb-3">
                  <Presentation className="mr-3 h-5 w-5 text-cyber-blue flex-shrink-0 mt-1" />
                  <div className="flex-grow">
                    <h4 className="text-lg font-bold text-cyber-navy dark:text-white mb-2">{paper.title}</h4>
                    <p className="text-cyber-slate dark:text-gray-300 mb-2">{paper.authors}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <span className="font-medium">{paper.venue}</span>
                      {paper.location && <span> • {paper.location}</span>}
                      {paper.date && <span> • {paper.date}</span>}
                    </p>
                    {paper.pages && <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{paper.pages}</p>}
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant={paper.status === "Published" ? "default" : "secondary"}>
                        {paper.status}
                      </Badge>
                      <Badge variant="outline">{paper.type}</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Published Papers */}
      <div className="mb-8">
        <h3 className="section-subtitle">Journal Publications</h3>
        <div className="space-y-4">
          {publishedPapers.map((paper, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start mb-3">
                  <FileText className="mr-3 h-5 w-5 text-cyber-green flex-shrink-0 mt-1" />
                  <div className="flex-grow">
                    <h4 className="text-lg font-bold text-cyber-navy dark:text-white mb-2">{paper.title}</h4>
                    <p className="text-cyber-slate dark:text-gray-300 mb-2">{paper.authors}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <span className="font-medium italic">{paper.journal}</span>
                      {paper.volume && <span>, {paper.volume}</span>}
                      {paper.pages && <span>, {paper.pages}</span>}
                      {paper.date && <span> ({paper.date})</span>}
                    </p>
                    {paper.doi && (
                      <a 
                        href={paper.doi} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-cyber-blue hover:underline"
                      >
                        {paper.doi}
                      </a>
                    )}
                    <Badge variant="default" className="mt-2">{paper.status}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Articles In Press */}
      <div className="mb-8">
        <h3 className="section-subtitle">Articles - Accepted/In Press</h3>
        <div className="space-y-4">
          {articlesInPress.map((article, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start mb-3">
                  <FileText className="mr-3 h-5 w-5 text-purple-500 flex-shrink-0 mt-1" />
                  <div className="flex-grow">
                    <h4 className="text-lg font-bold text-cyber-navy dark:text-white mb-2">{article.title}</h4>
                    <p className="text-cyber-slate dark:text-gray-300 mb-2">{article.authors}</p>
                    {article.preprint && (
                      <a 
                        href={article.preprint} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-cyber-blue hover:underline block mb-2"
                      >
                        Preprint: {article.preprint}
                      </a>
                    )}
                    <Badge variant="secondary">{article.status}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Research In Progress */}
      <div className="mb-8">
        <h3 className="section-subtitle">Research In Progress</h3>
        <div className="space-y-4">
          {researchInProgress.map((research, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <BookOpen className="mr-3 h-5 w-5 text-orange-500 flex-shrink-0 mt-1" />
                  <div className="flex-grow">
                    <h4 className="text-lg font-bold text-cyber-navy dark:text-white mb-2">{research.title}</h4>
                    <p className="text-cyber-slate dark:text-gray-300 mb-2">{research.authors}</p>
                    <Badge variant="outline">{research.status}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-8" />

      {/* Projects */}
      <div>
        <h3 className="section-subtitle">Selected Research Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start mb-3">
                  <Laptop className="mr-3 h-5 w-5 text-cyber-blue flex-shrink-0 mt-1" />
                  <div className="flex-grow">
                    <h4 className="text-lg font-bold text-cyber-navy dark:text-white mb-2">{project.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{project.date}</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
