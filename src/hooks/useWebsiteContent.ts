import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export interface WebsiteContent {
  id: string;
  section: string;
  key: string;
  value: string | null;
  content_type: string;
  image_url: string | null;
  display_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export const useWebsiteContent = (section?: string) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: content, isLoading } = useQuery({
    queryKey: ["website-content", section],
    queryFn: async () => {
      let query = supabase
        .from("website_content")
        .select("*")
        .eq("is_active", true)
        .order("display_order");

      if (section) {
        query = query.eq("section", section);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data as WebsiteContent[];
    },
  });

  const updateContent = useMutation({
    mutationFn: async ({
      id,
      updates,
    }: {
      id: string;
      updates: Partial<WebsiteContent>;
    }) => {
      const { error } = await supabase
        .from("website_content")
        .update(updates)
        .eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["website-content"] });
      toast({
        title: "Success",
        description: "Content updated successfully",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const createContent = useMutation({
    mutationFn: async (newContent: Omit<WebsiteContent, "id" | "created_at" | "updated_at">) => {
      const { error } = await supabase.from("website_content").insert(newContent);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["website-content"] });
      toast({
        title: "Success",
        description: "Content created successfully",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const deleteContent = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("website_content").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["website-content"] });
      toast({
        title: "Success",
        description: "Content deleted successfully",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const getContentValue = (key: string) => {
    return content?.find((item) => item.key === key)?.value || "";
  };

  return {
    content,
    isLoading,
    updateContent,
    createContent,
    deleteContent,
    getContentValue,
  };
};
