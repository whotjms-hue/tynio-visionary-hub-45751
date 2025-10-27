import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CreditCard, Check } from "lucide-react";

const Pricing = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Email submission simulation
    const subject = encodeURIComponent(`Pricing Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nProject Type: ${formData.projectType}\n\nProject Details:\n${formData.details}`
    );
    window.location.href = `mailto:info@tynioltd.com?subject=${subject}&body=${body}`;

    toast({
      title: "Request Submitted!",
      description: "We'll get back to you within 24 hours with a customized quote.",
    });

    setFormData({
      name: "",
      email: "",
      company: "",
      projectType: "",
      details: "",
    });
  };

  const pricingFeatures = [
    "Customized AI solutions tailored to your needs",
    "Dedicated project manager",
    "Regular progress updates and demos",
    "Post-launch support and maintenance",
    "Training and documentation",
    "Scalable architecture",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Flexible Pricing
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Every project is unique. Get a tailored quote that fits your specific needs and budget
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Consultation Form */}
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-card-foreground mb-6">
                Request a Custom Quote
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Your Company"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="projectType">Project Type *</Label>
                  <Select
                    value={formData.projectType}
                    onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="crm">CRM System</SelectItem>
                      <SelectItem value="chatbot">AI Chatbot</SelectItem>
                      <SelectItem value="analytics">Analytics Dashboard</SelectItem>
                      <SelectItem value="website">Website Development</SelectItem>
                      <SelectItem value="booking">Booking System</SelectItem>
                      <SelectItem value="payment">Payment Integration</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="details">Project Details *</Label>
                  <Textarea
                    id="details"
                    required
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="Tell us about your project requirements, timeline, and budget expectations..."
                    className="mt-1 min-h-[120px]"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent-hover shadow-accent">
                  Submit Request
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground mb-2">Prefer to chat directly?</p>
                <Button asChild variant="outline" className="w-full border-accent text-accent hover:bg-accent/10">
                  <a
                    href={`https://wa.me/8801873722228?text=${encodeURIComponent(
                      "Hello, I'd like to discuss pricing for my project."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </Card>

            {/* What You Get */}
            <div className="space-y-8">
              <Card className="p-8 bg-secondary border-none">
                <h2 className="text-3xl font-bold text-card-foreground mb-4">
                  What's Included
                </h2>
                <p className="text-muted-foreground mb-6">
                  Every Tynio project includes comprehensive support and premium features
                </p>
                <ul className="space-y-4">
                  {pricingFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="bg-accent/10 rounded-full p-1 mt-0.5">
                        <Check className="h-4 w-4 text-accent" />
                      </div>
                      <span className="text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-8 bg-accent/5 border-accent/20">
                <h3 className="text-2xl font-bold text-card-foreground mb-4">
                  🚀 Why Choose Tynio?
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Proven track record with 50+ successful AI implementations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Average 40% efficiency improvement for our clients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Dedicated support team available 24/7</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Flexible payment plans and milestone-based billing</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
