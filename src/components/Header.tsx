import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap, LayoutDashboard, DollarSign, Trophy, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/authStore";
import PricingModal from "@/components/PricingModal";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated } = useAuthStore();

  // Only show header on public pages (when not authenticated)
  if (isAuthenticated) {
    return null;
  }

  const navItems = [
    { href: "/", label: "Home", icon: Zap },
    { href: "#pricing", label: "Pricing", icon: DollarSign, isModal: true },
    { href: "/leaderboard", label: "Performance", icon: Trophy },
    { href: "/kluxify", label: "Community", icon: Users },
  ];

  const isActive = (href: string) => location.pathname === href;

  const handleNavClick = (href: string, isModal?: boolean) => {
    if (isModal) {
      setIsPricingModalOpen(true);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <PricingModal open={isPricingModalOpen} onOpenChange={setIsPricingModalOpen} />
    <header className="fixed top-14 left-1/2 -translate-x-1/2 z-50 w-auto">
      <div className="bg-background/40 backdrop-blur-xl rounded-full border border-border/50 shadow-lg px-2">
        <div className="flex items-center justify-center px-4 h-14">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 flex-1 justify-center">
            {navItems.map((item) => {
              const Icon = item.icon;
              return item.isModal ? (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href, item.isModal)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-accent/50 text-muted-foreground`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-accent/50 ${
                    isActive(item.href) ? "bg-accent text-foreground" : "text-muted-foreground"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <Button asChild className="hidden md:flex rounded-full bg-gradient-neon text-black hover:shadow-glow transition-all duration-300 group">
            <Link to="/auth" className="flex items-center space-x-1">
                <span>Start</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden px-4 pb-4 pt-2 border-t border-border/50">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return item.isModal ? (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href, item.isModal)}
                    className="flex items-center space-x-3 px-4 py-3 rounded-full transition-all duration-200 text-foreground hover:bg-accent w-full text-left"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                ) : (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-full transition-all duration-200 ${
                      isActive(item.href)
                        ? "bg-accent text-foreground"
                        : "text-foreground hover:bg-accent"
                    }`}
                    onClick={() => handleNavClick(item.href)}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
              <div className="pt-3 mt-2 border-t border-border/50">
                <Button asChild className="w-full rounded-full bg-gradient-neon text-black hover:shadow-glow transition-all duration-300">
                  <Link to="/auth" className="flex items-center justify-center space-x-2">
                    <span>Start</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
    </>
  );
};

export default Header;