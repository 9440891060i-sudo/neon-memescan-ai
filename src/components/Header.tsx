import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap, DollarSign, HelpCircle, Users, ArrowRight, MessageCircle, Send } from "lucide-react";
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
    { href: "/faq", label: "FAQs", icon: HelpCircle },
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
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-auto max-w-7xl">
        <div className="mx-4 px-8 py-3 rounded-full bg-black/40 backdrop-blur-xl border border-white/20 shadow-2xl">
          <div className="flex items-center justify-between gap-8">
            {/* Left: Logo + Nav */}
            <div className="flex items-center gap-8">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-neon flex items-center justify-center">
                  <Zap className="w-5 h-5 text-black" />
                </div>
                <span className="text-lg font-semibold text-white">Meme Signal</span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return item.isModal ? (
                    <button
                      key={item.href}
                      onClick={() => handleNavClick(item.href, item.isModal)}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-gray-300 hover:text-white hover:bg-white/5"
                    >
                      <span>{item.label}</span>
                    </button>
                  ) : (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive(item.href)
                          ? "text-white bg-white/10"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Right: CTA Button */}
            <div className="flex items-center gap-4">
              <Button
                asChild 
                className="hidden md:flex rounded-lg bg-gradient-neon text-black font-medium hover:shadow-glow transition-all duration-300 px-6"
              >
                <Link to="/auth" className="flex items-center gap-2">
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden text-white hover:bg-white/10"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 mx-4 rounded-3xl border border-white/20 bg-black/40 backdrop-blur-xl shadow-2xl md:hidden">
              <nav className="flex flex-col py-4 px-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return item.isModal ? (
                    <button
                      key={item.href}
                      onClick={() => handleNavClick(item.href, item.isModal)}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-gray-300 hover:text-white hover:bg-white/5 text-left"
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  ) : (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive(item.href)
                          ? "bg-white/10 text-white"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                      }`}
                      onClick={() => handleNavClick(item.href)}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  );
                })}
                <div className="pt-4 mt-2 border-t border-white/10">
                  <Button asChild className="w-full rounded-lg bg-gradient-neon text-black font-medium hover:shadow-glow transition-all duration-300">
                    <Link to="/auth" className="flex items-center justify-center gap-2">
                      <span>Get Started</span>
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