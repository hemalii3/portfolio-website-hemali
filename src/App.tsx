
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  // Set document title
  useEffect(() => {
    document.title = "Hemali Suthar | Data Analyst Portfolio";
    
    // Add meta tags
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Portfolio of Hemali Suthar, Data Analyst and Data Enthusiast. View projects, skills, and professional experience.';
    document.head.appendChild(metaDescription);
    
    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'Data Analyst, Data Science, Portfolio, Hemali Suthar, Data Visualization, Analytics';
    document.head.appendChild(metaKeywords);
    
    // Clean up on unmount
    return () => {
      document.head.removeChild(metaDescription);
      document.head.removeChild(metaKeywords);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
