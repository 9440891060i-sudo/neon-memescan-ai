import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { AppSidebar } from "@/components/AppSidebar";
import { Beaker, Brain, Bell, Mail, AlertTriangle, TrendingUp, Megaphone, Sparkles, Info } from "lucide-react";
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
import Earn from "./pages/Earn";
import FAQ from "./pages/FAQ";
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
                
                {/* Early Access Badge */}
                <Popover>
                  <PopoverTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 px-3 py-1 h-7 rounded-full text-xs font-medium gap-1.5"
                    >
                      <Info className="w-3 h-3" />
                      Early Access
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent 
                    align="start"
                    className="w-80 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
                  >
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold text-white text-center">
                        Early Access Program
                      </h3>
                      <p className="text-sm text-gray-300 leading-relaxed text-center">
                        You're using an early access version of Klux. If you encounter any glitches or issues, 
                        please let us know through our support system or Discord community - we'll resolve them immediately.
                      </p>
                      <div className="flex gap-2 pt-2">
                        <Button 
                          className="flex-1 bg-primary hover:bg-primary/90 text-white text-sm h-9"
                        >
                          Contact Support
                        </Button>
                        <Button 
                          onClick={() => window.open('https://discord.gg/klux', '_blank')}
                          variant="outline"
                          className="flex-1 border-white/20 text-white hover:bg-white/10 text-sm h-9"
                        >
                          Join Discord
                        </Button>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>

                <div className="flex-1" />
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="ghost" size="icon" className="relative">
                          <Bell className="w-5 h-5 text-gray-600 hover:text-gray-400 transition-colors" />
                          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                        </Button>
                      </PopoverTrigger>
                    <PopoverContent className="w-80 bg-black/90 backdrop-blur-xl border-gray-800 p-0 z-50">
                      <div className="p-4 border-b border-gray-800">
                        <h3 className="font-semibold text-white">Alerts</h3>
                      </div>
                      <div className="max-h-96 overflow-y-auto">
                        <div className="p-4 border-b border-gray-800 hover:bg-white/5 cursor-pointer transition-colors">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                              <AlertTriangle className="w-5 h-5 text-red-400" />
                            </div>
                            <div className="flex-1">
                              <p className="font-medium text-white">Wallet Alert</p>
                              <p className="text-sm text-gray-400 mt-1">Large transaction detected on wallet 0x7a9...f3c</p>
                              <p className="text-xs text-gray-500 mt-2">5 minutes ago</p>
                            </div>
                          </div>
                        </div>
                        <div className="p-4 border-b border-gray-800 hover:bg-white/5 cursor-pointer transition-colors">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-full bg-neon-green/20 flex items-center justify-center flex-shrink-0">
                              <TrendingUp className="w-5 h-5 text-neon-green" />
                            </div>
                            <div className="flex-1">
                              <p className="font-medium text-white">Terminal Update</p>
                              <p className="text-sm text-gray-400 mt-1">PEPE token showing strong buy signals</p>
                              <p className="text-xs text-gray-500 mt-2">1 hour ago</p>
                            </div>
                          </div>
                        </div>
                        <div className="p-4 hover:bg-white/5 cursor-pointer transition-colors">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                              <AlertTriangle className="w-5 h-5 text-yellow-400" />
                            </div>
                            <div className="flex-1">
                              <p className="font-medium text-white">Risk Alert</p>
                              <p className="text-sm text-gray-400 mt-1">High volatility detected in your tracked tokens</p>
                              <p className="text-xs text-gray-500 mt-2">3 hours ago</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="ghost" size="icon" className="relative">
                          <Mail className="w-5 h-5 text-gray-600 hover:text-gray-400 transition-colors" />
                          <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
                        </Button>
                      </PopoverTrigger>
                    <PopoverContent className="w-80 bg-black/90 backdrop-blur-xl border-gray-800 p-0 z-50">
                      <div className="p-4 border-b border-gray-800">
                        <h3 className="font-semibold text-white">Messages</h3>
                      </div>
                      <div className="max-h-96 overflow-y-auto">
                        <div className="p-4 border-b border-gray-800 hover:bg-white/5 cursor-pointer transition-colors">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                              <Sparkles className="w-5 h-5 text-blue-400" />
                            </div>
                            <div className="flex-1">
                              <p className="font-medium text-white">New Feature Release</p>
                              <p className="text-sm text-gray-400 mt-1">Advanced AI analysis now available for all users</p>
                              <p className="text-xs text-gray-500 mt-2">Today</p>
                            </div>
                          </div>
                        </div>
                        <div className="p-4 border-b border-gray-800 hover:bg-white/5 cursor-pointer transition-colors">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                              <Megaphone className="w-5 h-5 text-purple-400" />
                            </div>
                            <div className="flex-1">
                              <p className="font-medium text-white">Platform Update</p>
                              <p className="text-sm text-gray-400 mt-1">Scheduled maintenance on Jan 20, 2025</p>
                              <p className="text-xs text-gray-500 mt-2">Yesterday</p>
                            </div>
                          </div>
                        </div>
                        <div className="p-4 hover:bg-white/5 cursor-pointer transition-colors">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-full bg-neon-green/20 flex items-center justify-center flex-shrink-0">
                              <TrendingUp className="w-5 h-5 text-neon-green" />
                            </div>
                            <div className="flex-1">
                              <p className="font-medium text-white">Website Update</p>
                              <p className="text-sm text-gray-400 mt-1">Improved dashboard performance and new charts</p>
                              <p className="text-xs text-gray-500 mt-2">2 days ago</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </PopoverContent>
                    </Popover>
                  </div>
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
                <Route path="/rewards" element={<Earn />} />
                <Route path="/rewards-dashboard" element={<Rewards />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/profile-settings" element={<ProfileSettings />} />
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
            <Route path="/rewards-dashboard" element={<Auth />} />
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
