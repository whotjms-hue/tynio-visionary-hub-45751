import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Bot,
  BarChart3,
  MessageSquare,
  Globe,
  CreditCard,
  Database,
  Hotel,
} from "lucide-react";
import { useState } from "react";
import aiDashboard from "@/assets/ai-dashboard-demo.jpg";
import aiChatbot from "@/assets/ai-chatbot-demo.jpg";
import aiCrm from "@/assets/ai-crm-demo.jpg";
import paymentGateway from "@/assets/payment-gateway-demo.jpg";
import demoSeo from "@/assets/demo-seo.png";
import demoContent from "@/assets/demo-content.png";
import demoMarketing from "@/assets/demo-marketing.png";

const Portfolio = () => {
  const projects = [
    {
      icon: <Database className="h-12 w-12" />,
      title: "Enterprise CRM System",
      description:
        "AI-powered customer relationship management platform with predictive analytics, automated workflows, and intelligent lead scoring.",
      technologies: ["React", "Python", "TensorFlow", "PostgreSQL"],
      category: "AI Solutions",
    },
    {
      icon: <MessageSquare className="h-12 w-12" />,
      title: "Restaurant Management Suite",
      description:
        "Comprehensive booking system with table management, online ordering, and customer feedback integration for multi-location restaurants.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      category: "Web Development",
    },
    {
      icon: <Hotel className="h-12 w-12" />,
      title: "Hotel Booking Platform",
      description:
        "Smart reservation system with dynamic pricing, room management, and seamless payment processing for boutique hotels.",
      technologies: ["React", "Express", "MySQL", "Payment Gateway"],
      category: "Booking Systems",
    },
    {
      icon: <BarChart3 className="h-12 w-12" />,
      title: "Business Analytics Dashboard",
      description:
        "Real-time data visualization and AI-driven insights platform helping businesses make data-informed decisions.",
      technologies: ["Vue.js", "Python", "scikit-learn", "Redis"],
      category: "Analytics",
    },
    {
      icon: <Bot className="h-12 w-12" />,
      title: "AI Customer Support Chatbot",
      description:
        "Intelligent conversational AI with natural language understanding, reducing support tickets by 60% for e-commerce clients.",
      technologies: ["Python", "GPT-4", "FastAPI", "WebSocket"],
      category: "AI Solutions",
    },
    {
      icon: <Globe className="h-12 w-12" />,
      title: "Corporate Website & Portal",
      description:
        "Modern, responsive corporate websites with integrated employee portals, document management, and collaboration tools.",
      technologies: ["React", "TypeScript", "Node.js", "AWS"],
      category: "Web Development",
    },
    {
      icon: <CreditCard className="h-12 w-12" />,
      title: "Multi-Gateway Payment System",
      description:
        "Secure payment integration supporting multiple gateways with fraud detection and automated reconciliation.",
      technologies: ["Node.js", "Stripe", "PayPal", "Blockchain"],
      category: "Payment Systems",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Explore our successful AI-integrated projects that have transformed businesses across
              various industries
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border-border/50"
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                <Badge className="mb-3 bg-accent/10 text-accent hover:bg-accent/20">
                  {project.category}
                </Badge>
                <h3 className="text-2xl font-semibold mb-3 text-card-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="border-primary/30 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Service Demos */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            AI-Powered Solutions in Action
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Experience the power of our AI-integrated platforms
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <img src={aiDashboard} alt="AI Analytics Dashboard" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">AI Analytics Dashboard</h3>
                <p className="text-muted-foreground">Real-time insights powered by machine learning</p>
              </div>
            </Card>
            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <img src={aiChatbot} alt="AI Chatbot Interface" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Intelligent Chatbot</h3>
                <p className="text-muted-foreground">Natural language processing for customer support</p>
              </div>
            </Card>
            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <img src={aiCrm} alt="AI CRM System" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Predictive CRM</h3>
                <p className="text-muted-foreground">AI-driven customer relationship management</p>
              </div>
            </Card>
            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <img src={demoSeo} alt="SEO Optimization Platform" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">SEO Intelligence</h3>
                <p className="text-muted-foreground">Drive organic growth with AI-powered SEO</p>
              </div>
            </Card>
            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <img src={demoContent} alt="Content Strategy Platform" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Content Strategy AI</h3>
                <p className="text-muted-foreground">Create engaging content that converts</p>
              </div>
            </Card>
            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <img src={demoMarketing} alt="Marketing Automation" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Marketing Automation</h3>
                <p className="text-muted-foreground">Illuminate your digital marketing future</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment Gateway Demo */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Secure Payment Integration
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Experience our seamless multi-gateway payment system with industry-leading security
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <img src={paymentGateway} alt="Payment Gateway Demo" className="rounded-lg shadow-2xl" />
            </div>
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Try Demo Payment</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Card Number</label>
                  <Input placeholder="4242 4242 4242 4242" defaultValue="4242 4242 4242 4242" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Expiry</label>
                    <Input placeholder="MM/YY" defaultValue="12/25" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">CVC</label>
                    <Input placeholder="123" defaultValue="123" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Amount</label>
                  <Input placeholder="100.00" defaultValue="100.00" />
                </div>
                <Button className="w-full bg-accent hover:bg-accent-hover" size="lg">
                  Process Demo Payment
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Test card: 4242 4242 4242 4242 • No actual charges will be made
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <h4 className="font-semibold mb-3">Features:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Multiple payment gateways (Stripe, PayPal, etc.)</li>
                  <li>✓ PCI DSS compliant security</li>
                  <li>✓ Real-time fraud detection</li>
                  <li>✓ Automated reconciliation</li>
                  <li>✓ International currency support</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with our AI-powered solutions
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent-hover shadow-accent">
            <a
              href={`https://wa.me/8801873722228?text=${encodeURIComponent(
                "Hello, I'm interested in Tynio's AI-integrated solutions. Can we discuss my project?"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Your Project
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
