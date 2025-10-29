import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { 
  CreditCard, 
  Wallet, 
  Check, 
  Mail
} from "lucide-react";
import kluxLogo from "@/assets/klux-logo.png";

interface KluxPricingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function KluxPricingModal({ open, onOpenChange }: KluxPricingModalProps) {
  const [activeTab, setActiveTab] = useState<"plans" | "what-is-klud" | "klux-ai" | "enterprise">("plans");
  const [kluddBilling, setKluddBilling] = useState<"monthly" | "yearly">("monthly");
  const [kluxAiBilling, setKluxAiBilling] = useState<"monthly" | "yearly">("monthly");
  const currentCredits = 71.3;
  const totalCredits = 105;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[1200px] h-[90vh] p-0 bg-black/40 backdrop-blur-2xl border-white/20 overflow-hidden">
        <DialogTitle className="sr-only">Pricing</DialogTitle>
        <DialogDescription className="sr-only">Plans & Kludd pricing</DialogDescription>
        <div className="flex h-full">
          {/* Left Sidebar */}
          <div className="w-[200px] bg-white/5 backdrop-blur-xl border-r border-white/10 p-6 flex flex-col">
            <div className="mb-8">
              <img src={kluxLogo} alt="Klux" className="w-8 h-8 mb-2" />
              <p className="text-xs text-white/60">Klux workspace</p>
            </div>
            
            <nav className="space-y-2 flex-1">
              <button 
                onClick={() => setActiveTab("plans")}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                  activeTab === "plans" 
                    ? "bg-white/10 text-white border border-white/20" 
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                Plans
              </button>
              <button 
                onClick={() => setActiveTab("what-is-klud")}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                  activeTab === "what-is-klud" 
                    ? "bg-white/10 text-white border border-white/20" 
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                What's klud
              </button>
              <button 
                onClick={() => setActiveTab("klux-ai")}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                  activeTab === "klux-ai" 
                    ? "bg-white/10 text-white border border-white/20" 
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                klux ai
              </button>
              <button 
                onClick={() => setActiveTab("enterprise")}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                  activeTab === "enterprise" 
                    ? "bg-white/10 text-white border border-white/20" 
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                Enterprise
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto">
              <div className="p-8 flex flex-col gap-8">
              {activeTab === "plans" && (
                <>
              {/* Header */}
              <div className="mb-0">
                <h2 className="text-3xl font-bold text-white mb-2">Plans</h2>
                <p className="text-white/60">Fuel your Klux engine. Buy Kludd liters or unlock Klux AI.</p>
              </div>

              {/* Current Status */}
              <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 mb-8 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Credits remaining</h3>
                      <p className="text-sm text-white/60">{currentCredits} of {totalCredits} KLUD</p>
                    </div>
                  </div>
                  <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20">
                    Manage
                  </Button>
                </div>
                
                <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-500"
                    style={{ width: `${(currentCredits / totalCredits) * 100}%` }}
                  />
                </div>
                
                <div className="flex items-center justify-between mt-3 text-xs text-white/60">
                  <span className="flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    Up to 100 credits rollover
                  </span>
                  <span className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-cyan-500" />
                    Daily credits used first
                  </span>
                </div>
              </div>

              {/* Scrollable Pricing Cards */}
              <div className="pr-2">
                <div className="grid grid-cols-[2fr_2fr_1fr] gap-6 pb-8">
                  {/* Card A - Kludd Fuel Credits */}
                  <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-white mb-2">Kludd — Fuel Credits</h3>
                      <p className="text-sm text-white/60">
                        Buy Kludd by the litre. Use Kludd to run Klux features, AI calls and token-gated utilities.
                      </p>
                    </div>

                    {/* Monthly Liters Display */}
                    <div className="mb-6">
                      <div className="p-6 rounded-lg border border-white/20 bg-white/5 text-center">
                        <p className="text-4xl font-bold text-white mb-2">10L/month</p>
                        <div className="flex items-center justify-center gap-2 mb-4">
                          <Check className="w-4 h-4 text-green-400" />
                          <span className="text-sm text-white/60">Recurring monthly credits</span>
                        </div>
                      </div>
                    </div>

                    {/* Billing Toggle */}
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg mb-6">
                      <button
                        onClick={() => setKluddBilling("monthly")}
                        className={`flex-1 py-2 px-4 rounded-md transition-all ${
                          kluddBilling === "monthly"
                            ? "bg-white/20 text-white border border-white/20"
                            : "text-white/60 hover:text-white"
                        }`}
                      >
                        Monthly
                      </button>
                      <button
                        onClick={() => setKluddBilling("yearly")}
                        className={`flex-1 py-2 px-4 rounded-md transition-all ${
                          kluddBilling === "yearly"
                            ? "bg-white/20 text-white border border-white/20"
                            : "text-white/60 hover:text-white"
                        }`}
                      >
                        Yearly
                      </button>
                    </div>

                    {/* Price CTA */}
                    <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold mb-4 h-12 text-lg">
                      ${kluddBilling === "monthly" ? "9.99" : "99"}/m
                    </Button>

                    <div className="flex items-center justify-center gap-4 mb-6">
                      <span className="text-xs text-white/60">Pay with:</span>
                      <CreditCard className="w-4 h-4 text-white/60" />
                      <Wallet className="w-4 h-4 text-white/60" />
                    </div>

                    {/* Features */}
                    <div className="space-y-2 pt-4 border-t border-white/5">
                      <div className="flex items-start gap-2 text-xs text-white/80">
                        <Check className="w-3 h-3 mt-0.5 text-green-400" />
                        <span>Instant delivery to wallet</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-white/80">
                        <Check className="w-3 h-3 mt-0.5 text-green-400" />
                        <span>Up to 100 credits rollover</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-white/80">
                        <Check className="w-3 h-3 mt-0.5 text-green-400" />
                        <span>Cancel anytime</span>
                      </div>
                    </div>
                  </div>

                  {/* Card B - Klux AI Subscription */}
                  <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-white mb-2">Klux AI — Monthly Access</h3>
                      <p className="text-sm text-white/60">
                        Unlock the Klux AI engine — analytics, trend-detection, meme-signal alerts and priority model access.
                      </p>
                    </div>

                    {/* Monthly Liters Display */}
                    <div className="mb-6">
                      <div className="p-6 rounded-lg border border-white/20 bg-white/5 text-center">
                        <p className="text-4xl font-bold text-white mb-2">+20L/month</p>
                        <div className="flex items-center justify-center gap-2 mb-4">
                          <Check className="w-4 h-4 text-green-400" />
                          <span className="text-sm text-white/60">Bonus credits included</span>
                        </div>
                      </div>
                    </div>

                    {/* Billing Toggle */}
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg mb-6">
                      <button
                        onClick={() => setKluxAiBilling("monthly")}
                        className={`flex-1 py-2 px-4 rounded-md transition-all ${
                          kluxAiBilling === "monthly"
                            ? "bg-white/20 text-white border border-white/20"
                            : "text-white/60 hover:text-white"
                        }`}
                      >
                        Monthly
                      </button>
                      <button
                        onClick={() => setKluxAiBilling("yearly")}
                        className={`flex-1 py-2 px-4 rounded-md transition-all ${
                          kluxAiBilling === "yearly"
                            ? "bg-white/20 text-white border border-white/20"
                            : "text-white/60 hover:text-white"
                        }`}
                      >
                        Yearly
                      </button>
                    </div>

                    {/* CTA */}
                    <Button 
                      className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 mb-4"
                    >
                      Subscribe — ${kluxAiBilling === "monthly" ? "49.99" : "479"} / {kluxAiBilling === "monthly" ? "mo" : "yr"}
                    </Button>
                    <p className="text-xs text-center text-white/60 mb-6">
                      Auto-renews. Cancel anytime.
                    </p>

                    {/* Payment Methods */}
                    <div className="flex items-center justify-center gap-4 mb-6">
                      <CreditCard className="w-4 h-4 text-white/60" />
                      <Wallet className="w-4 h-4 text-white/60" />
                    </div>

                    {/* Features */}
                    <div className="space-y-2 pt-4 border-t border-white/5">
                      <div className="flex items-start gap-2 text-xs text-white/80">
                        <Check className="w-3 h-3 mt-0.5 text-green-400" />
                        <span>Unlimited AI prompts</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-white/80">
                        <Check className="w-3 h-3 mt-0.5 text-green-400" />
                        <span>Priority compute</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-white/80">
                        <Check className="w-3 h-3 mt-0.5 text-green-400" />
                        <span>Early access to drops</span>
                      </div>
                    </div>
                  </div>

                  {/* Card C - Enterprise */}
                  <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-4">Enterprise</h3>
                    
                    <p className="text-sm text-white/60 mb-6 flex-1">
                      Flexible billing, custom Kludd bundles, dedicated onboarding.
                    </p>

                    <div className="space-y-4 mt-auto">
                      <Button 
                        className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20"
                      >
                        Book call
                      </Button>
                      
                      <div className="flex items-center justify-center gap-2 text-xs text-white/60">
                        <Mail className="w-3 h-3" />
                        <span>sales@klux.ai</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </>
              )}

              {activeTab === "what-is-klud" && (
                <div className="mb-0">
                  <h2 className="text-3xl font-bold text-white mb-4">What's Klud</h2>
                  <p className="text-white/60 mb-6">Learn about Klud, the fuel that powers your Klux experience.</p>
                  <div className="bg-white/5 backdrop-blur-xl rounded-xl p-8 border border-white/10">
                    <p className="text-white/80">Content coming soon...</p>
                  </div>
                </div>
              )}

              {activeTab === "klux-ai" && (
                <div className="mb-0">
                  <h2 className="text-3xl font-bold text-white mb-4">Klux AI</h2>
                  <p className="text-white/60 mb-6">Discover how Klux AI can transform your workflow.</p>
                  <div className="bg-white/5 backdrop-blur-xl rounded-xl p-8 border border-white/10">
                    <p className="text-white/80">Content coming soon...</p>
                  </div>
                </div>
              )}

              {activeTab === "enterprise" && (
                <div className="mb-0">
                  <h2 className="text-3xl font-bold text-white mb-4">Enterprise</h2>
                  <p className="text-white/60 mb-6">Custom solutions for your organization.</p>
                  <div className="bg-white/5 backdrop-blur-xl rounded-xl p-8 border border-white/10">
                    <p className="text-white/80">Content coming soon...</p>
                  </div>
                </div>
              )}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
