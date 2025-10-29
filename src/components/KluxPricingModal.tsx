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
              <div className="bg-white/5 backdrop-blur-xl rounded-xl p-4 mb-4 border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-sm">Credits remaining</h3>
                      <p className="text-xs text-white/60">{currentCredits} of {totalCredits} KLUD</p>
                    </div>
                  </div>
                  <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs h-8 px-3">
                    Manage
                  </Button>
                </div>
                
                <div className="relative h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-500"
                    style={{ width: `${(currentCredits / totalCredits) * 100}%` }}
                  />
                </div>
                
                <div className="flex items-center justify-between mt-2 text-[10px] text-white/60">
                  <span className="flex items-center gap-1">
                    <Check className="w-2.5 h-2.5" />
                    Up to 100 credits rollover
                  </span>
                  <span className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    Daily credits used first
                  </span>
                </div>
              </div>

              {/* Pricing Cards */}
              <div className="pr-2">
                <div className="grid grid-cols-[2fr_2fr_1fr] gap-4 pb-4">
                  {/* Card A - Kludd Fuel Credits */}
                  <div className="bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all">
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-white mb-1">Kludd — Fuel Credits</h3>
                      <p className="text-xs text-white/60">
                        Buy Kludd by the litre. Use for AI calls and utilities.
                      </p>
                    </div>

                    {/* Monthly Liters Display */}
                    <div className="mb-4">
                      <div className="p-4 rounded-lg border border-white/20 bg-white/5 text-center">
                        <p className="text-3xl font-bold text-white mb-1">10L/month</p>
                        <span className="text-xs text-white/60">Recurring credits</span>
                      </div>
                    </div>

                    {/* Billing Toggle */}
                    <div className="flex items-center gap-2 p-2 bg-white/5 rounded-lg mb-4">
                      <button
                        onClick={() => setKluddBilling("monthly")}
                        className={`flex-1 py-1.5 px-3 rounded-md transition-all text-xs ${
                          kluddBilling === "monthly"
                            ? "bg-white/20 text-white border border-white/20"
                            : "text-white/60 hover:text-white"
                        }`}
                      >
                        Monthly
                      </button>
                      <button
                        onClick={() => setKluddBilling("yearly")}
                        className={`flex-1 py-1.5 px-3 rounded-md transition-all text-xs ${
                          kluddBilling === "yearly"
                            ? "bg-white/20 text-white border border-white/20"
                            : "text-white/60 hover:text-white"
                        }`}
                      >
                        Yearly
                      </button>
                    </div>

                    {/* Price CTA */}
                    <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold mb-3 h-10 text-base">
                      ${kluddBilling === "monthly" ? "9.99" : "99"}/m
                    </Button>

                    <div className="flex items-center justify-center gap-3 mb-3">
                      <span className="text-[10px] text-white/60">Pay with:</span>
                      <CreditCard className="w-3 h-3 text-white/60" />
                      <Wallet className="w-3 h-3 text-white/60" />
                    </div>

                    {/* Features */}
                    <div className="space-y-1.5 pt-3 border-t border-white/5">
                      <div className="flex items-start gap-2 text-[10px] text-white/80">
                        <Check className="w-2.5 h-2.5 mt-0.5 text-green-400" />
                        <span>Instant delivery</span>
                      </div>
                      <div className="flex items-start gap-2 text-[10px] text-white/80">
                        <Check className="w-2.5 h-2.5 mt-0.5 text-green-400" />
                        <span>100 credits rollover</span>
                      </div>
                      <div className="flex items-start gap-2 text-[10px] text-white/80">
                        <Check className="w-2.5 h-2.5 mt-0.5 text-green-400" />
                        <span>Cancel anytime</span>
                      </div>
                    </div>
                  </div>

                  {/* Card B - Klux AI Subscription */}
                  <div className="bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all">
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-white mb-1">Klux AI — Monthly Access</h3>
                      <p className="text-xs text-white/60">
                        AI engine with analytics and priority access.
                      </p>
                    </div>

                    {/* Monthly Liters Display */}
                    <div className="mb-4">
                      <div className="p-4 rounded-lg border border-white/20 bg-white/5 text-center">
                        <p className="text-3xl font-bold text-white mb-1">+20L/month</p>
                        <span className="text-xs text-white/60">Bonus credits</span>
                      </div>
                    </div>

                    {/* Billing Toggle */}
                    <div className="flex items-center gap-2 p-2 bg-white/5 rounded-lg mb-4">
                      <button
                        onClick={() => setKluxAiBilling("monthly")}
                        className={`flex-1 py-1.5 px-3 rounded-md transition-all text-xs ${
                          kluxAiBilling === "monthly"
                            ? "bg-white/20 text-white border border-white/20"
                            : "text-white/60 hover:text-white"
                        }`}
                      >
                        Monthly
                      </button>
                      <button
                        onClick={() => setKluxAiBilling("yearly")}
                        className={`flex-1 py-1.5 px-3 rounded-md transition-all text-xs ${
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
                      className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 mb-2 h-10 text-sm"
                    >
                      ${kluxAiBilling === "monthly" ? "49.99" : "479"} / {kluxAiBilling === "monthly" ? "mo" : "yr"}
                    </Button>
                    <p className="text-[10px] text-center text-white/60 mb-3">
                      Auto-renews. Cancel anytime.
                    </p>

                    {/* Payment Methods */}
                    <div className="flex items-center justify-center gap-3 mb-3">
                      <CreditCard className="w-3 h-3 text-white/60" />
                      <Wallet className="w-3 h-3 text-white/60" />
                    </div>

                    {/* Features */}
                    <div className="space-y-1.5 pt-3 border-t border-white/5">
                      <div className="flex items-start gap-2 text-[10px] text-white/80">
                        <Check className="w-2.5 h-2.5 mt-0.5 text-green-400" />
                        <span>Unlimited AI prompts</span>
                      </div>
                      <div className="flex items-start gap-2 text-[10px] text-white/80">
                        <Check className="w-2.5 h-2.5 mt-0.5 text-green-400" />
                        <span>Priority compute</span>
                      </div>
                      <div className="flex items-start gap-2 text-[10px] text-white/80">
                        <Check className="w-2.5 h-2.5 mt-0.5 text-green-400" />
                        <span>Early access</span>
                      </div>
                    </div>
                  </div>

                  {/* Card C - Enterprise */}
                  <div className="bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all flex flex-col">
                    <h3 className="text-lg font-bold text-white mb-2">Enterprise</h3>
                    
                    <p className="text-xs text-white/60 mb-4 flex-1">
                      Flexible billing, custom bundles, dedicated support.
                    </p>

                    <div className="space-y-3 mt-auto">
                      <Button 
                        className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 h-9 text-sm"
                      >
                        Book call
                      </Button>
                      
                      <div className="flex items-center justify-center gap-2 text-[10px] text-white/60">
                        <Mail className="w-2.5 h-2.5" />
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
