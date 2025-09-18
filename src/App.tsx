import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { useAuthStore } from "@/store/authStore";
import MemeCoinTicker from "@/components/MemeCoinTicker";
import Index from "./pages/Index";
import AnalysisInput from "./pages/AnalysisInput";
import Dashboard from "./pages/Dashboard";
import Leaderboard from "./pages/Leaderboard";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import ProfileSettings from "./pages/ProfileSettings";
import Kluxify from "./pages/Kluxify";
import Rewards from "./pages/Rewards";
import FAQ from "./pages/FAQ";
import Support from "./pages/Support";

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
              {/* Mobile-only sidebar trigger */}
              <header className="sticky top-0 z-50 flex h-14 items-center gap-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:hidden">
                <SidebarTrigger className="-ml-1" />
                <div className="flex-1" />
              </header>
              <div className="p-4 sm:p-6">
                <Routes>
                <Route path="/user-dashboard" element={<Dashboard />} />
                <Route path="/analyze" element={<AnalysisInput />} />
                <Route path="/kluxify" element={<Kluxify />} />
                <Route path="/rewards" element={<Rewards />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/profile-settings" element={<ProfileSettings />} />
                <Route path="/support" element={<Support />} />
                <Route path="/faq" element={<FAQ />} />
                {/* Redirect to dashboard if authenticated and on public routes */}
                <Route path="/" element={<Dashboard />} />
                <Route path="/auth" element={<Dashboard />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              </div>
            </main>
          </div>
        </SidebarProvider>
      ) : (
        <div className="min-h-screen bg-background">
          <MemeCoinTicker />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/auth" element={<Auth />} />
            {/* Redirect to auth for protected routes */}
            <Route path="/analyze" element={<Auth />} />
            <Route path="/kluxify" element={<Auth />} />
            <Route path="/rewards" element={<Auth />} />
            <Route path="/user-dashboard" element={<Auth />} />
            <Route path="/profile-settings" element={<Auth />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
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
