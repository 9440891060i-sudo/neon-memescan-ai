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
import UserDashboard from "./pages/UserDashboard";
import MyStats from "./pages/MyStats";

const queryClient = new QueryClient();

const AppContent = () => {
  const { isAuthenticated } = useAuthStore();

  return (
    <div className="min-h-screen w-full">
      {isAuthenticated ? (
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            <AppSidebar />
            <main className="flex-1">
              <Routes>
                <Route path="/user-dashboard" element={<UserDashboard />} />
                <Route path="/analyze" element={<AnalysisInput />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/my-stats" element={<MyStats />} />
                <Route path="/dashboard" element={<Dashboard />} />
                {/* Redirect to dashboard if authenticated and on public routes */}
                <Route path="/" element={<UserDashboard />} />
                <Route path="/auth" element={<UserDashboard />} />
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
          <Route path="/dashboard" element={<Auth />} />
          <Route path="/user-dashboard" element={<Auth />} />
          <Route path="/my-stats" element={<Auth />} />
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
