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
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
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

            {/* Right: Social Icons & CTA Button */}
            <div className="flex items-center gap-4">
              {/* Social Icons */}
              <div className="hidden md:flex items-center gap-3">
                <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Discord">
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Telegram">
                  <Send className="w-4 h-4" />
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="X (Twitter)">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>

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
            <div className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur-md">
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