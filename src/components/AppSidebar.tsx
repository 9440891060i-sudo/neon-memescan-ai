import { BarChart3, Search, Trophy, User, LogOut, Zap, Crown, Gift } from "lucide-react";
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
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuthStore } from "@/store/authStore";
import { useKluxStore } from "@/store/kluxStore";
import { useToast } from "@/hooks/use-toast";

const sidebarItems = [
  { title: "Dashboard", url: "/user-dashboard", icon: BarChart3 },
  { title: "Terminal", url: "/analyze", icon: Search },
  { title: "KLUXIFY", url: "/kluxify", icon: Crown },
  { title: "Rewards", url: "/rewards", icon: Gift },
  { title: "Performance", url: "/leaderboard", icon: Trophy },
];

export function AppSidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout, user } = useAuthStore();
  const { toast } = useToast();
  const { open } = useSidebar();

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // Get user initials for avatar fallback
  const getUserInitials = () => {
    if (user?.username) {
      return user.username.substring(0, 2).toUpperCase();
    }
    return "U";
  };

  return (
    <Sidebar collapsible="icon" className={`${open ? "w-64" : "w-16"} bg-black backdrop-blur-sm border-r border-gray-900 group-data-[side=left]:border-r group-data-[side=right]:border-l shadow-none transition-all duration-300`}>
      <SidebarHeader className={`py-4 ${open ? "px-4" : "px-0"} border-b border-gray-900`}>
        {/* User Profile Section */}
        <div className="flex items-center gap-2">
          <div 
            className={`flex items-center flex-1 ${open ? "gap-3 p-3 bg-gray-950 border border-gray-900" : "p-0 justify-center w-full bg-transparent border-0"} rounded-lg`}
          >
            <Avatar className="h-8 w-8 border-2 border-gray-800 shrink-0">
              <AvatarImage src="/placeholder-avatar.jpg" alt={user?.username || "User"} />
              <AvatarFallback className="bg-gray-900 text-white font-bold">
                {getUserInitials()}
              </AvatarFallback>
            </Avatar>
            {open && (
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-white truncate">
                  {user?.username || "User"}
                </p>
              </div>
            )}
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className={open ? "px-2" : "px-0"}>
        <SidebarGroup className="py-4">
          {open && (
            <SidebarGroupLabel className="text-gray-500 text-xs uppercase tracking-wider mb-4 px-3 font-medium">
              Navigation
            </SidebarGroupLabel>
          )}
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        to={item.url}
                        className={`flex items-center ${open ? "space-x-3 px-4 mx-1" : "justify-center py-3"} ${open ? "py-3" : ""} rounded-lg transition-all duration-300 group relative overflow-hidden ${
                          isActive(item.url)
                            ? "bg-gray-900 text-white border border-gray-800"
                            : "text-gray-400 hover:bg-gray-950 hover:text-white hover:border-gray-800 border border-transparent"
                        }`}
                      >
                        <Icon className={`w-5 h-5 relative z-10 transition-transform duration-300 ${
                          isActive(item.url) ? "scale-110 text-neon-green" : "group-hover:scale-110"
                        }`} />
                        {open && (
                          <span className={`font-medium relative z-10 transition-all duration-300 ${
                            isActive(item.url) ? "font-semibold" : ""
                          }`}>{item.title}</span>
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className={`${open ? "p-4" : "py-2 px-0"} border-t border-gray-900`}>
        <Button
          onClick={handleLogout}
          variant="outline"
          className={`w-full ${open ? "justify-start px-4 h-10" : "justify-center px-0 h-8 w-8 mx-auto"} border-gray-800 text-gray-400 hover:bg-gray-950 hover:text-red-400 hover:border-gray-700 transition-all duration-300 group`}
        >
          <LogOut className={`${open ? "w-4 h-4 mr-3" : "w-3 h-3"} relative z-10 transition-transform duration-300 group-hover:scale-110`} />
          {open && <span className="relative z-10">Logout</span>}
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}