import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAdminCheck } from "@/hooks/useAdminCheck";
import { useWebsiteContent } from "@/hooks/useWebsiteContent";
import { LogOut, Save } from "lucide-react";

const AdminDashboard = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { isAdmin, loading } = useAdminCheck();
  const { content, isLoading, updateContent } = useWebsiteContent();
  const [editingValues, setEditingValues] = useState<Record<string, string>>({});

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const handleSave = (id: string, value: string) => {
    updateContent.mutate({ id, updates: { value } });
  };

  if (loading || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  const sections = Array.from(new Set(content?.map((item) => item.section) || []));

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-card-foreground">Admin Dashboard</h1>
          <Button onClick={handleLogout} variant="outline">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue={sections[0]} className="w-full">
          <TabsList className="grid w-full" style={{ gridTemplateColumns: `repeat(${sections.length}, 1fr)` }}>
            {sections.map((section) => (
              <TabsTrigger key={section} value={section} className="capitalize">
                {section}
              </TabsTrigger>
            ))}
          </TabsList>

          {sections.map((section) => (
            <TabsContent key={section} value={section} className="space-y-4">
              {content
                ?.filter((item) => item.section === section)
                .map((item) => (
                  <Card key={item.id} className="p-6">
                    <div className="space-y-4">
                      <div>
                        <Label className="text-sm font-semibold capitalize">
                          {item.key.replace(/_/g, " ")}
                        </Label>
                        <p className="text-xs text-muted-foreground mt-1">
                          Type: {item.content_type}
                        </p>
                      </div>

                      {item.content_type === "text" && item.key.includes("cta") ? (
                        <Input
                          value={editingValues[item.id] ?? item.value ?? ""}
                          onChange={(e) =>
                            setEditingValues({
                              ...editingValues,
                              [item.id]: e.target.value,
                            })
                          }
                        />
                      ) : (
                        <Textarea
                          value={editingValues[item.id] ?? item.value ?? ""}
                          onChange={(e) =>
                            setEditingValues({
                              ...editingValues,
                              [item.id]: e.target.value,
                            })
                          }
                          rows={4}
                        />
                      )}

                      <Button
                        onClick={() =>
                          handleSave(
                            item.id,
                            editingValues[item.id] ?? item.value ?? ""
                          )
                        }
                        disabled={updateContent.isPending}
                      >
                        <Save className="mr-2 h-4 w-4" />
                        Save Changes
                      </Button>
                    </div>
                  </Card>
                ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
