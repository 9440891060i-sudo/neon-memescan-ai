import { BarChart3, Search, Trophy, User, LogOut, Zap } from "lucide-react";
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
import { useAuthStore } from "@/store/authStore";

const sidebarItems = [
  { title: "Dashboard", url: "/user-dashboard", icon: BarChart3 },
  { title: "Analyse", url: "/analyze", icon: Search },
  { title: "Leaderboard", url: "/leaderboard", icon: Trophy },
  { title: "My Stats", url: "/my-stats", icon: User },
];

export function AppSidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuthStore();

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Sidebar className="w-64 border-r border-border bg-card">
      <SidebarHeader className="p-6">
        <Link to="/user-dashboard" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gradient-neon flex items-center justify-center">
            <Zap className="w-5 h-5 text-black" />
          </div>
          <span className="font-bold text-xl text-neon-green">KLUX</span>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground text-xs uppercase tracking-wider">
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
                        className={`flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
                          isActive(item.url)
                            ? "bg-neon-green/20 text-neon-green border border-neon-green/50"
                            : "text-foreground hover:bg-accent"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <Button
          onClick={handleLogout}
          variant="outline"
          className="w-full justify-start border-destructive/50 text-destructive hover:bg-destructive/20"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}