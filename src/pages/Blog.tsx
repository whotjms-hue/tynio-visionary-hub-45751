import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Placeholder blog posts - will be dynamic when Admin Dashboard is connected
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business Automation",
      excerpt:
        "Explore how artificial intelligence is revolutionizing business operations and what it means for your company's future.",
      author: "Tynio Team",
      date: "2025-01-15",
      category: "AI Solutions",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    },
    {
      id: 2,
      title: "Building Scalable CRM Systems: Best Practices",
      excerpt:
        "Learn the key principles behind creating customer relationship management systems that grow with your business.",
      author: "Development Team",
      date: "2025-01-10",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    },
    {
      id: 3,
      title: "AI Chatbots: Transforming Customer Support",
      excerpt:
        "Discover how intelligent chatbots can reduce support costs while improving customer satisfaction.",
      author: "AI Research Team",
      date: "2025-01-05",
      category: "AI Solutions",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=400&fit=crop",
    },
    {
      id: 4,
      title: "Payment Gateway Integration: A Developer's Guide",
      excerpt:
        "Step-by-step guide to integrating secure payment systems into your web applications.",
      author: "Tech Team",
      date: "2024-12-28",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
    },
    {
      id: 5,
      title: "Data Analytics: Turning Information into Insights",
      excerpt:
        "How to leverage data analytics to make informed business decisions and drive growth.",
      author: "Analytics Team",
      date: "2024-12-20",
      category: "Analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    },
    {
      id: 6,
      title: "The Rise of No-Code AI Solutions",
      excerpt:
        "Exploring accessible AI tools that empower businesses without extensive technical expertise.",
      author: "Tynio Team",
      date: "2024-12-15",
      category: "AI Solutions",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
    },
  ];

  const categories = ["all", "AI Solutions", "Web Development", "Analytics"];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Insights & Articles
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Stay updated with the latest trends in AI, technology, and business innovation
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between max-w-6xl mx-auto">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? "bg-primary hover:bg-primary-light"
                      : ""
                  }
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filteredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <Badge className="mb-3 bg-accent/10 text-accent hover:bg-accent/20">
                      {post.category}
                    </Badge>
                    <h3 className="text-xl font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{post.author}</span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full mt-4 text-primary hover:text-primary-light"
                    >
                      Read More <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Ready to Innovate?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Turn insights into action. Let's discuss how our AI solutions can transform your business
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent-hover shadow-accent">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Blog;
