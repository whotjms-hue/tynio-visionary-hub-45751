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
import { Mail, MessageCircle, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Email submission
    const subject = encodeURIComponent(`Contact Form: ${formData.serviceType}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nService Type: ${formData.serviceType}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:info@tynioltd.com?subject=${subject}&body=${body}`;

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll respond within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      serviceType: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Have questions or ready to start your project? We're here to help
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="lg:col-span-2 p-8">
              <h2 className="text-3xl font-bold text-card-foreground mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                </div>

                <div>
                  <Label htmlFor="serviceType">Service Type *</Label>
                  <Select
                    value={formData.serviceType}
                    onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ai-solutions">AI Solutions</SelectItem>
                      <SelectItem value="web-development">Web Development</SelectItem>
                      <SelectItem value="consultation">Consultation</SelectItem>
                      <SelectItem value="support">Support</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Your Message *</Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project or inquiry..."
                    className="mt-1 min-h-[150px]"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary-light shadow-primary">
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">Email Us</h3>
                    <a
                      href="mailto:info@tynioltd.com"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@tynioltd.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <MessageCircle className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">WhatsApp</h3>
                    <a
                      href={`https://wa.me/8801873722228?text=${encodeURIComponent(
                        "Hello, I'm interested in Tynio's AI-integrated solutions. Can we discuss my project?"
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      +880 1873-722228
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">Location</h3>
                    <p className="text-sm text-muted-foreground">
                      Serving clients globally from Bangladesh
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-accent/5 border-accent/20">
                <h3 className="font-semibold text-card-foreground mb-3">Quick Response</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Need immediate assistance? Chat with us on WhatsApp for the fastest response.
                </p>
                <Button asChild className="w-full bg-accent hover:bg-accent-hover shadow-accent">
                  <a
                    href={`https://wa.me/8801873722228?text=${encodeURIComponent(
                      "Hello, I'm interested in Tynio's AI-integrated solutions. Can we discuss my project?"
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat Now
                  </a>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
