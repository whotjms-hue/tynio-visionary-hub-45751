import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Lock, AlertCircle } from "lucide-react";

const Admin = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // This is a placeholder for the admin login
    // In production, this will be connected to Lovable Cloud authentication
    toast({
      title: "Admin Dashboard",
      description: "Please enable Lovable Cloud to activate the admin dashboard with secure authentication.",
      variant: "default",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary-light to-accent flex items-center justify-center px-4">
      <Card className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-card-foreground mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Sign in to manage your website</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="ceo@tynioltd.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1"
            />
          </div>

          <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary-light">
            Sign In
          </Button>
        </form>

        <div className="mt-6 p-4 bg-accent/5 border border-accent/20 rounded-lg">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-semibold text-card-foreground mb-1">Backend Setup Required</p>
              <p className="text-muted-foreground">
                The admin dashboard requires Lovable Cloud to be enabled for secure authentication,
                database management, and dynamic content editing.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs text-muted-foreground">
            Protected by enterprise-grade security
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Admin;
