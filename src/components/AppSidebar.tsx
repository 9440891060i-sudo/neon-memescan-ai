import { BarChart3, Search, Trophy, User, LogOut, Zap, Coins, Crown, HelpCircle } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuthStore } from "@/store/authStore";
import { useToast } from "@/hooks/use-toast";

const sidebarItems = [
  { title: "Dashboard", url: "/user-dashboard", icon: BarChart3 },
  { title: "Analyse", url: "/analyze", icon: Search },
  { title: "KLUXIFY", url: "/kluxify", icon: Crown },
  { title: "Leaderboard", url: "/leaderboard", icon: Trophy },
];

export function AppSidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout, user } = useAuthStore();
  const { toast } = useToast();

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleSupport = () => {
    toast({
      title: "Support Center",
      description: "Opening support chat...",
    });
    // In a real app, this would open a support chat widget or redirect to support email
    window.open("mailto:support@klux.ai?subject=KLUX Support Request", "_blank");
  };

  // Get user initials for avatar fallback
  const getUserInitials = () => {
    if (user?.username) {
      return user.username.substring(0, 2).toUpperCase();
    }
    return "U";
  };

  return (
    <Sidebar className="w-64 border-r border-neon-green/20 bg-gradient-card backdrop-blur-sm">
      <SidebarHeader className="pt-6 pb-4 px-4 border-b border-neon-green/20">
        {/* User Profile Section */}
        <Link 
          to="/profile-settings" 
          className="flex items-center gap-3 p-3 bg-gradient-to-r from-neon-green/10 to-transparent rounded-lg border border-neon-green/20 hover:border-neon-green/40 transition-all duration-300 group"
        >
          <Avatar className="h-10 w-10 border-2 border-neon-green/30 group-hover:border-neon-green/50 transition-all">
            <AvatarImage src="/placeholder-avatar.jpg" alt={user?.username || "User"} />
            <AvatarFallback className="bg-gradient-neon text-black font-bold">
              {getUserInitials()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-foreground truncate group-hover:text-neon-green transition-colors">
              {user?.username || "User"}
            </p>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Coins className="w-3 h-3 text-neon-green" />
              <span>1,250 credits</span>
            </div>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarGroup className="py-4">
          <SidebarGroupLabel className="text-muted-foreground text-xs uppercase tracking-wider mb-4 px-3 font-medium">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        to={item.url}
                        className={`flex items-center space-x-3 px-4 py-3 mx-1 rounded-lg transition-all duration-300 group relative overflow-hidden ${
                          isActive(item.url)
                            ? "bg-neon-green/20 text-neon-green border border-neon-green/50 shadow-neon-green"
                            : "text-foreground hover:bg-neon-green/10 hover:text-neon-green hover:border-neon-green/30 border border-transparent"
                        }`}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r from-neon-green/10 to-neon-cyan/5 opacity-0 transition-opacity duration-300 ${
                          isActive(item.url) ? "opacity-100" : "group-hover:opacity-50"
                        }`} />
                        <Icon className={`w-5 h-5 relative z-10 transition-transform duration-300 ${
                          isActive(item.url) ? "scale-110" : "group-hover:scale-110"
                        }`} />
                        <span className={`font-medium relative z-10 transition-all duration-300 ${
                          isActive(item.url) ? "font-semibold" : ""
                        }`}>{item.title}</span>
                        {isActive(item.url) && (
                          <div className="absolute right-2 w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
              
              {/* Support Button */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <button
                    onClick={handleSupport}
                    className="flex items-center space-x-3 px-4 py-3 mx-1 rounded-lg transition-all duration-300 group relative overflow-hidden text-foreground hover:bg-neon-green/10 hover:text-neon-green hover:border-neon-green/30 border border-transparent w-full text-left"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-neon-green/10 to-neon-cyan/5 opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                    <HelpCircle className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:scale-110" />
                    <span className="font-medium relative z-10 transition-all duration-300">Support</span>
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-neon-green/20">
        <Button
          onClick={handleLogout}
          variant="outline"
          className="w-full justify-start border-destructive/50 text-destructive hover:bg-destructive/20 hover:border-destructive transition-all duration-300 group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-destructive/10 to-destructive/5 opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
          <LogOut className="w-4 h-4 mr-3 relative z-10 transition-transform duration-300 group-hover:scale-110" />
          <span className="relative z-10">Logout</span>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}