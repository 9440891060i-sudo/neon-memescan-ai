import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap, Trophy, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useAuthStore } from "@/store/authStore";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated } = useAuthStore();

  // Only show header on public pages (when not authenticated)
  if (isAuthenticated) {
    return null;
  }

  const navItems = [
    { href: "/", label: "Home", icon: Zap },
    { href: "/#pricing", label: "Pricing", icon: Zap, isScroll: true },
    { href: "/leaderboard", label: "Leaderboard", icon: Trophy },
  ];

  const isActive = (href: string) => location.pathname === href;

  const handleNavClick = (href: string, isScroll?: boolean) => {
    if (isScroll && href === "/#pricing") {
      const pricingSection = document.getElementById("pricing");
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-12 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-neon-green/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-neon flex items-center justify-center">
              <Zap className="w-5 h-5 text-black" />
            </div>
            <span className="font-bold text-xl text-neon-green">KLUX</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink asChild>
                      {item.isScroll ? (
                        <button
                          onClick={() => handleNavClick(item.href, item.isScroll)}
                          className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-neon-green/20 hover:text-neon-green focus:bg-neon-green/20 focus:text-neon-green focus:outline-none disabled:pointer-events-none disabled:opacity-50 text-foreground`}
                        >
                          <Icon className="w-4 h-4 mr-2" />
                          {item.label}
                        </button>
                      ) : (
                        <Link
                          to={item.href}
                          className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                            isActive(item.href)
                              ? "bg-neon-green/20 text-neon-green border border-neon-green/50"
                              : "text-foreground"
                          }`}
                        >
                          <Icon className="w-4 h-4 mr-2" />
                          {item.label}
                        </Link>
                      )}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant="outline" className="border-neon-green/50 text-neon-green hover:bg-neon-green/20">
              <Link to="/auth">Login</Link>
            </Button>
            <Button asChild variant="neon" className="text-black">
              <Link to="/auth">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-neon-green/20">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return item.isScroll ? (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href, item.isScroll)}
                    className="flex items-center space-x-3 px-4 py-3 rounded-md transition-colors text-foreground hover:bg-accent w-full text-left"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                ) : (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-md transition-colors ${
                      isActive(item.href)
                        ? "bg-neon-green/20 text-neon-green border border-neon-green/50"
                        : "text-foreground hover:bg-accent"
                    }`}
                    onClick={() => handleNavClick(item.href)}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-neon-green/20 mt-4 space-y-2">
                <Button asChild className="w-full" variant="outline">
                  <Link to="/auth">Login</Link>
                </Button>
                <Button asChild className="w-full" variant="neon">
                  <Link to="/auth">Sign Up</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;