import { BarChart3, Search, Trophy, User, LogOut, Zap, Coins, Crown, HelpCircle, Gift } from "lucide-react";
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
  { title: "Rewards", url: "/rewards", icon: Gift },
  { title: "Performance", url: "/leaderboard", icon: Trophy },
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
    // Navigate to internal support page instead of external email
    navigate("/support");
  };

  // Get user initials for avatar fallback
  const getUserInitials = () => {
    if (user?.username) {
      return user.username.substring(0, 2).toUpperCase();
    }
    return "U";
  };

  return (
    <Sidebar className="w-64 bg-black backdrop-blur-sm border-r border-gray-900 group-data-[side=left]:border-r group-data-[side=right]:border-l shadow-none">
      <SidebarHeader className="pt-6 pb-4 px-4 border-b border-gray-900">
        {/* User Profile Section */}
        <Link 
          to="/profile-settings" 
          className="flex items-center gap-3 p-3 bg-gray-950 rounded-lg border border-gray-900 hover:border-gray-800 transition-all duration-300 group"
        >
          <Avatar className="h-10 w-10 border-2 border-gray-800 group-hover:border-gray-700 transition-all">
            <AvatarImage src="/placeholder-avatar.jpg" alt={user?.username || "User"} />
            <AvatarFallback className="bg-gray-900 text-white font-bold">
              {getUserInitials()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-white truncate group-hover:text-gray-300 transition-colors">
              {user?.username || "User"}
            </p>
            <div className="flex items-center gap-1 text-xs text-gray-400">
              <Coins className="w-3 h-3 text-neon-green" />
              <span>1,250 credits</span>
            </div>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarGroup className="py-4">
          <SidebarGroupLabel className="text-gray-500 text-xs uppercase tracking-wider mb-4 px-3 font-medium">
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
                            ? "bg-gray-900 text-white border border-gray-800"
                            : "text-gray-400 hover:bg-gray-950 hover:text-white hover:border-gray-800 border border-transparent"
                        }`}
                      >
                        <Icon className={`w-5 h-5 relative z-10 transition-transform duration-300 ${
                          isActive(item.url) ? "scale-110 text-neon-green" : "group-hover:scale-110"
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
                    className="flex items-center space-x-3 px-4 py-3 mx-1 rounded-lg transition-all duration-300 group relative overflow-hidden text-gray-400 hover:bg-gray-950 hover:text-white hover:border-gray-800 border border-transparent w-full text-left"
                  >
                    <HelpCircle className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:scale-110" />
                    <span className="font-medium relative z-10 transition-all duration-300">Support</span>
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-gray-900">
        <Button
          onClick={handleLogout}
          variant="outline"
          className="w-full justify-start border-gray-800 text-gray-400 hover:bg-gray-950 hover:text-red-400 hover:border-gray-700 transition-all duration-300 group"
        >
          <LogOut className="w-4 h-4 mr-3 relative z-10 transition-transform duration-300 group-hover:scale-110" />
          <span className="relative z-10">Logout</span>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}