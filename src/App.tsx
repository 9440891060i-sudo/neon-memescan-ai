import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Beaker, Brain } from "lucide-react";
import { useAuthStore } from "@/store/authStore";
import { useKluxStore } from "@/store/kluxStore";
import SupportWidget from "@/components/SupportWidget";
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
import WalletAnalytics from "./pages/WalletAnalytics";

const queryClient = new QueryClient();

const AppContent = () => {
  const { isAuthenticated } = useAuthStore();
  const { isPremium } = useKluxStore();

  return (
    <div className="min-h-screen w-full">
      {isAuthenticated ? (
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            <AppSidebar />
            <main className="flex-1">
              <header className="sticky top-0 z-50 flex h-14 items-center gap-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 border-b border-gray-900">
                <SidebarTrigger className="-ml-1" />
                <div className="flex-1" />
                <div className="flex items-center gap-3">
                  <Brain className={`w-5 h-5 transition-colors duration-300 ${isPremium ? "text-neon-green" : "text-gray-600"}`} />
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/30 border border-border">
                    <Beaker className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-semibold text-foreground">12.4L</span>
                  </div>
                </div>
              </header>
              <div className="p-0">
                <Routes>
                <Route path="/user-dashboard" element={<Dashboard />} />
                <Route path="/analyze" element={<AnalysisInput />} />
                <Route path="/kluxify" element={<Kluxify />} />
                <Route path="/rewards" element={<Rewards />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/profile-settings" element={<ProfileSettings />} />
                <Route path="/support" element={<Support />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/wallet-analytics" element={<WalletAnalytics />} />
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
        <SupportWidget />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
