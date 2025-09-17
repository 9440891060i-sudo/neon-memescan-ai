import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { useAuthStore } from "@/store/authStore";
import Index from "./pages/Index";
import AnalysisInput from "./pages/AnalysisInput";
import Dashboard from "./pages/Dashboard";
import Leaderboard from "./pages/Leaderboard";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import ProfileSettings from "./pages/ProfileSettings";
import Kluxify from "./pages/Kluxify";

const queryClient = new QueryClient();

const AppContent = () => {
  const { isAuthenticated } = useAuthStore();

  return (
    <div className="min-h-screen w-full">
      {isAuthenticated ? (
        <SidebarProvider>
          <div className="min-h-screen w-full">
            <AppSidebar />
            <main className="ml-64 min-h-screen overflow-y-auto">
              <Routes>
                <Route path="/user-dashboard" element={<Dashboard />} />
                <Route path="/analyze" element={<AnalysisInput />} />
                <Route path="/kluxify" element={<Kluxify />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/profile-settings" element={<ProfileSettings />} />
                {/* Redirect to dashboard if authenticated and on public routes */}
                <Route path="/" element={<Dashboard />} />
                <Route path="/auth" element={<Dashboard />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </SidebarProvider>
      ) : (
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/auth" element={<Auth />} />
          {/* Redirect to auth for protected routes */}
          <Route path="/analyze" element={<Auth />} />
          <Route path="/kluxify" element={<Auth />} />
          <Route path="/user-dashboard" element={<Auth />} />
          <Route path="/profile-settings" element={<Auth />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
