
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Send
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email",
      details: "akekulip@gmail.com",
      link: "mailto:akekulip@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Phone",
      details: "(929) 685-9890",
      link: "tel:+19296859890"
    },
    {
      icon: <Linkedin className="h-5 w-5 text-primary" />,
      title: "LinkedIn",
      details: "akekudaga-philip-49557683",
      link: "https://www.linkedin.com/in/akekudaga-philip-49557683/"
    },
    {
      icon: <Github className="h-5 w-5 text-primary" />,
      title: "GitHub",
      details: "akekulip",
      link: "https://github.com/akekulip"
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (or use Formspree/EmailJS here)
    // For now, we'll construct a mailto link as a fallback
    const mailtoLink = `mailto:akekulip@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;

    window.location.href = mailtoLink;

    toast({
      title: "Email Client Opened",
      description: "Please send the email from your default mail client.",
    });

    setIsSubmitting(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="section-container bg-background">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wide">
          Contact
        </div>
        <h2 className="section-title mb-6">Get In Touch</h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          Feel free to contact me for any professional inquiries, collaboration opportunities, or questions about my research and experience.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {contactInfo.map((item, index) => (
              <Card key={index} className="border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="mb-4 p-3 bg-primary/5 rounded-full w-fit">{item.icon}</div>
                  <h3 className="font-heading font-semibold text-cyber-navy dark:text-white mb-2">{item.title}</h3>
                  {item.link ? (
                    <a
                      href={item.link}
                      target={item.title !== "Email" && item.title !== "Phone" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors break-words"
                    >
                      {item.details}
                    </a>
                  ) : (
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.details}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-cyber-navy text-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyber-blue/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10">
              <h3 className="text-xl font-heading font-bold mb-4">Connect With Me</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm always open to discussing new projects, research opportunities, or cybersecurity challenges.
              </p>
              <div className="flex space-x-4">
                <Button asChild variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/10 hover:text-white bg-transparent">
                  <a
                    href="https://www.linkedin.com/in/akekudaga-philip-49557683/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/10 hover:text-white bg-transparent">
                  <a
                    href="https://github.com/akekulip"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-cyber-navy rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-800">
          <h3 className="text-2xl font-heading font-bold mb-6 text-cyber-navy dark:text-white">Send Me a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="h-12 border-gray-200 dark:border-gray-700 focus-visible:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="h-12 border-gray-200 dark:border-gray-700 focus-visible:ring-primary"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Subject
              </label>
              <Input
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Message Subject"
                required
                className="h-12 border-gray-200 dark:border-gray-700 focus-visible:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="min-h-[150px] border-gray-200 dark:border-gray-700 focus-visible:ring-primary resize-none"
              />
            </div>

            <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90 text-lg" disabled={isSubmitting}>
              <Send className="mr-2 h-4 w-4" /> {isSubmitting ? "Opening Email Client..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
