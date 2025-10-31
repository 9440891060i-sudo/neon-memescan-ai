import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap, DollarSign, HelpCircle, Users, ArrowRight, Mail, Gift, Info, MessageCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useAuthStore } from "@/store/authStore";
import KluxPricingModal from "@/components/KluxPricingModal";
import kluxLogo from "@/assets/klux-logo.png";

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
    { href: "/faq", label: "FAQs", icon: HelpCircle },
    { href: "#pricing", label: "Pricing", icon: DollarSign, isModal: true },
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
      <KluxPricingModal open={isPricingModalOpen} onOpenChange={setIsPricingModalOpen} />
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo + Early Access Badge */}
            <div className="flex items-center gap-3">
              <Link to="/" className="flex items-center">
                <img 
                  src={kluxLogo} 
                  alt="Klux" 
                  className="h-24 w-auto object-contain"
                />
              </Link>
              
              <Popover>
                <PopoverTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/50 px-3 py-1 h-7 rounded-full text-xs font-semibold gap-1.5"
                  >
                    <Info className="w-3 h-3" />
                    Early Access
                  </Button>
                </PopoverTrigger>
                <PopoverContent 
                  align="start"
                  className="w-80 bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl p-6"
                >
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/20 mb-3">
                        <Info className="w-6 h-6 text-emerald-400" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        Early Access Program
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        You're experiencing Klux in early access. Report any issues and we'll resolve them immediately.
                      </p>
                    </div>
                    <div className="flex gap-3 pt-2">
                      <Button 
                        variant="outline"
                        size="icon"
                        className="flex-1 border-white/20 text-white hover:bg-white/10 h-12"
                        title="Contact Support"
                      >
                        <MessageCircle className="w-5 h-5" />
                      </Button>
                      <Button 
                        onClick={() => window.open('https://discord.gg/klux', '_blank')}
                        variant="outline"
                        size="icon"
                        className="flex-1 border-white/20 text-white hover:bg-white/10 h-12"
                        title="Join Discord"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            {/* Center: Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
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

            {/* Right: CTA Buttons */}
            <div className="flex items-center gap-4">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hidden md:flex text-white hover:bg-white/10 relative"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-neon-green rounded-full"></span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80 bg-black/90 backdrop-blur-xl border-white/20 p-0 z-50">
                  <div className="p-4 border-b border-white/10">
                    <h3 className="font-semibold text-white">Messages</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    <div className="p-4 border-b border-white/10 hover:bg-white/5 cursor-pointer transition-colors">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-neon-green/20 flex items-center justify-center flex-shrink-0">
                          <Gift className="w-5 h-5 text-neon-green" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-white">Welcome Bonus!</p>
                          <p className="text-sm text-gray-400 mt-1">Get 500 free credits when you sign up today</p>
                          <p className="text-xs text-gray-500 mt-2">2 hours ago</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 border-b border-white/10 hover:bg-white/5 cursor-pointer transition-colors">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                          <Zap className="w-5 h-5 text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-white">New Features Available</p>
                          <p className="text-sm text-gray-400 mt-1">Check out our latest AI-powered wallet tracking</p>
                          <p className="text-xs text-gray-500 mt-2">1 day ago</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 hover:bg-white/5 cursor-pointer transition-colors">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                          <DollarSign className="w-5 h-5 text-purple-400" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-white">Special Offer</p>
                          <p className="text-sm text-gray-400 mt-1">50% off on premium plans this week</p>
                          <p className="text-xs text-gray-500 mt-2">3 days ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
              <Button
                asChild 
                className="hidden md:flex rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium hover:bg-white/20 transition-all duration-300 px-6"
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
                <div className="pt-4 mt-2 border-t border-white/10 space-y-2">
                  <Button asChild variant="ghost" className="w-full text-white hover:bg-white/10">
                    <Link to="/auth" className="flex items-center justify-center gap-2">
                      <Mail className="w-5 h-5" />
                      <span>Messages</span>
                    </Link>
                  </Button>
                  <Button asChild className="w-full rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium hover:bg-white/20 transition-all duration-300">
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