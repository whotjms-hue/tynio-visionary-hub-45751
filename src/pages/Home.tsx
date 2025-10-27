import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Bot,
  BarChart3,
  MessageSquare,
  Globe,
  CreditCard,
  Database,
  ArrowRight,
  Quote,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import aiDashboard from "@/assets/ai-dashboard-demo.jpg";
import aiChatbot from "@/assets/ai-chatbot-demo.jpg";
import aiCrm from "@/assets/ai-crm-demo.jpg";
import demoSeo from "@/assets/demo-seo.png";
import demoContent from "@/assets/demo-content.png";
import demoMarketing from "@/assets/demo-marketing.png";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Bot className="h-8 w-8" />,
      title: "AI Chatbots",
      description: "Intelligent conversational AI that enhances customer engagement and support",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "CRM Systems",
      description: "Custom relationship management solutions to streamline your business operations",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Analytics & Insights",
      description: "Data-driven insights powered by AI to make informed business decisions",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Development",
      description: "Modern, responsive websites and applications built with cutting-edge technology",
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Payment Integration",
      description: "Secure payment gateways integrated seamlessly into your platforms",
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Restaurant Systems",
      description: "Complete booking and management solutions for hospitality industry",
    },
  ];

  const testimonials = [
    {
      quote:
        "Tynio transformed our business with their AI-powered CRM. The efficiency gains have been remarkable.",
      author: "Sarah Johnson",
      company: "Tech Innovations Ltd",
    },
    {
      quote:
        "Their chatbot solution reduced our customer service response time by 70%. Exceptional work!",
      author: "Michael Chen",
      company: "Global Solutions Inc",
    },
    {
      quote:
        "The analytics dashboard they built gives us insights we never knew we needed. Game-changing!",
      author: "Emily Rodriguez",
      company: "DataFirst Corp",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary via-primary-light to-accent overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLS45LTItMi0ycy0yIC45LTIgMiAuOSAyIDIgMiAyLS45IDItMnptLTIgNmMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJ6bS0xMiAwYy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnptMTIgMTJjLTEuMSAwLTIgLjktMiAyczLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJ6bS0xMiAwYy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              AI-Integrated Solutions for Modern Business
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              Transform your business with cutting-edge AI technology. We build intelligent systems
              that drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent-hover text-lg px-8 shadow-accent">
                <Link to="/portfolio">
                  View Our Work <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our AI-Powered Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions designed to revolutionize your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-light shadow-primary">
              <Link to="/portfolio">
                Explore All Solutions <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* AI Demos Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              See Our AI Solutions in Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real examples of how we've transformed businesses with intelligent technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <img 
                src={aiDashboard} 
                alt="AI Analytics Dashboard Demo" 
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">AI Analytics Dashboard</h3>
                <p className="text-muted-foreground">Real-time insights with predictive analytics and neural network visualizations</p>
              </div>
            </Card>

            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <img 
                src={aiChatbot} 
                alt="Intelligent Chatbot Demo" 
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">Intelligent Chatbot</h3>
                <p className="text-muted-foreground">Natural language processing for automated customer support</p>
              </div>
            </Card>

            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <img 
                src={aiCrm} 
                alt="AI-Powered CRM Demo" 
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">Predictive CRM System</h3>
                <p className="text-muted-foreground">AI-driven customer insights and automation workflows</p>
              </div>
            </Card>

            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <img 
                src={demoSeo} 
                alt="SEO Intelligence Platform" 
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">SEO Intelligence</h3>
                <p className="text-muted-foreground">Drive organic growth with AI-powered optimization strategies</p>
              </div>
            </Card>

            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <img 
                src={demoContent} 
                alt="Content Strategy Platform" 
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">Content Strategy AI</h3>
                <p className="text-muted-foreground">Create engaging content that converts and influences your audience</p>
              </div>
            </Card>

            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <img 
                src={demoMarketing} 
                alt="Marketing Automation Platform" 
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">Marketing Automation</h3>
                <p className="text-muted-foreground">Illuminate your digital marketing future with AI-driven campaigns</p>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent-hover shadow-accent">
              <Link to="/portfolio">
                View Full Portfolio <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Real results from businesses we've transformed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300"
              >
                <Quote className="text-primary mb-4" size={32} />
                <p className="text-card-foreground mb-6 italic">{testimonial.quote}</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-card-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI-integrated solutions can help you achieve your goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent-hover text-lg px-8 shadow-accent">
              <Link to="/pricing">Get a Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
              <a
                href={`https://wa.me/8801873722228?text=${encodeURIComponent(
                  "Hello, I'm interested in Tynio's AI-integrated solutions. Can we discuss my project?"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Teaser */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Latest Insights
            </h2>
            <p className="text-xl text-muted-foreground">
              Stay updated with AI trends and industry news
            </p>
          </div>
          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/blog">
                Read Our Blog <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
