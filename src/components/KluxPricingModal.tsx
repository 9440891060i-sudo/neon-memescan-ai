import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { 
  CreditCard, 
  Wallet, 
  Check, 
  Info,
  Users,
  Settings,
  BarChart3,
  Mail
} from "lucide-react";
import kluxLogo from "@/assets/klux-logo.png";

interface KluxPricingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const kluddPacks = [
  { price: 6, liters: 10, perLiter: 0.60 },
  { price: 12, liters: 20, perLiter: 0.60 },
  { price: 20, liters: 50, perLiter: 0.40, bestValue: true },
];

export default function KluxPricingModal({ open, onOpenChange }: KluxPricingModalProps) {
  const [selectedPack, setSelectedPack] = useState(1);
  const [autoRefill, setAutoRefill] = useState(false);
  const [billingFrequency, setBillingFrequency] = useState<"monthly" | "annual">("monthly");
  const currentCredits = 71.3;
  const totalCredits = 105;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[1200px] h-[90vh] p-0 bg-[#0F1113] border-white/5 overflow-hidden">
        <div className="flex h-full">
          {/* Left Sidebar */}
          <div className="w-[200px] bg-[#0A0B0D] border-r border-white/5 p-6 flex flex-col">
            <div className="mb-8">
              <img src={kluxLogo} alt="Klux" className="w-8 h-8 mb-2" />
              <p className="text-xs text-white/60">Klux Workspace</p>
            </div>
            
            <nav className="space-y-4 flex-1">
              <button className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors w-full">
                <Users className="w-4 h-4" />
                <span>People</span>
              </button>
              <button className="flex items-center gap-3 text-sm text-white bg-white/10 px-3 py-2 rounded-md w-full">
                <CreditCard className="w-4 h-4" />
                <span>Plans & Kludd</span>
              </button>
              <button className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors w-full">
                <BarChart3 className="w-4 h-4" />
                <span>Cloud & AI</span>
              </button>
            </nav>

            <div className="mt-auto space-y-3">
              <button className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors w-full">
                <Settings className="w-4 h-4" />
                <span>Settings</span>
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col min-h-0">
            <div className="p-8 flex-1 flex flex-col gap-8 min-h-0 overflow-x-hidden overflow-y-auto">
              {/* Header */}
              <div className="mb-0">
                <h2 className="text-3xl font-bold text-white mb-2">Plans & Kludd</h2>
                <p className="text-white/60">Fuel your Klux engine. Buy Kludd liters or unlock Klux AI.</p>
              </div>

              {/* Current Status */}
              <div className="bg-[#151719] rounded-xl p-6 mb-8 border border-white/5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Credits remaining</h3>
                      <p className="text-sm text-white/60">{currentCredits} of {totalCredits} KLUD</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="border-white/10 text-white hover:bg-white/5">
                    Manage
                  </Button>
                </div>
                
                <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-500"
                    style={{ width: `${(currentCredits / totalCredits) * 100}%` }}
                  />
                </div>
                
                <div className="flex items-center justify-between mt-3 text-xs text-white/60">
                  <span className="flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    Up to 100 credits rollover
                  </span>
                  <span className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    Daily credits used first
                  </span>
                </div>
              </div>

              {/* Scrollable Pricing Cards */}
              <div className="pr-2">
                <div className="grid grid-cols-[2fr_2fr_1fr] gap-6 pb-8">
                  {/* Card A - Kludd Fuel Credits */}
                  <div className="bg-[#151719] rounded-xl p-6 border border-white/5 hover:border-white/10 transition-all hover:translate-y-[-4px] hover:shadow-2xl">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-white mb-2">Kludd — Fuel Credits</h3>
                      <p className="text-sm text-white/60">
                        Buy Kludd by the litre. Use Kludd to run Klux features, AI calls and token-gated utilities.
                      </p>
                    </div>

                    {/* Pack Selection */}
                    <div className="space-y-3 mb-6">
                      {kluddPacks.map((pack, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedPack(idx)}
                          className={`w-full p-4 rounded-lg border transition-all ${
                            selectedPack === idx
                              ? "border-purple-500 bg-purple-500/10"
                              : "border-white/10 bg-white/5 hover:bg-white/10"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="text-left">
                              <div className="flex items-center gap-2">
                                <p className="text-white font-semibold">${pack.price} — {pack.liters} L</p>
                                {pack.bestValue && (
                                  <span className="text-xs px-2 py-0.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
                                    Best value
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-white/60">${pack.perLiter.toFixed(2)} / L</p>
                            </div>
                            {selectedPack === idx && (
                              <div className="w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center">
                                <Check className="w-3 h-3 text-white" />
                              </div>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Auto-refill Toggle */}
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg mb-6">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-white">Auto-refill</span>
                        <button className="group relative">
                          <Info className="w-3 h-3 text-white/60" />
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-black text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                            Auto-buy when Kludd &lt; 10 L
                          </div>
                        </button>
                      </div>
                      <Switch checked={autoRefill} onCheckedChange={setAutoRefill} />
                    </div>

                    {/* CTA */}
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold mb-4">
                      Buy Kludd
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
                        <span>No expiry for purchased Kludd</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-white/80">
                        <Check className="w-3 h-3 mt-0.5 text-green-400" />
                        <span>Redeemable for API calls, boosts, and token-gated drops</span>
                      </div>
                    </div>
                  </div>

                  {/* Card B - Klux AI Subscription */}
                  <div className="bg-[#151719] rounded-xl p-6 border border-white/5 hover:border-white/10 transition-all hover:translate-y-[-4px] hover:shadow-2xl">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-white mb-2">Klux AI — Monthly Access</h3>
                      <p className="text-sm text-white/60">
                        Unlock the Klux AI engine — analytics, trend-detection, meme-signal alerts and priority model access.
                      </p>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-4xl font-bold text-white">
                          ${billingFrequency === "monthly" ? "49.99" : "39.99"}
                        </span>
                        <span className="text-white/60">/ month</span>
                        {billingFrequency === "annual" && (
                          <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full">
                            Save 20%
                          </span>
                        )}
                      </div>

                      {/* Billing Toggle */}
                      <div className="flex items-center gap-4 p-3 bg-white/5 rounded-lg">
                        <button
                          onClick={() => setBillingFrequency("monthly")}
                          className={`flex-1 py-2 px-4 rounded-md transition-all ${
                            billingFrequency === "monthly"
                              ? "bg-purple-500 text-white"
                              : "text-white/60 hover:text-white"
                          }`}
                        >
                          Monthly
                        </button>
                        <button
                          onClick={() => setBillingFrequency("annual")}
                          className={`flex-1 py-2 px-4 rounded-md transition-all ${
                            billingFrequency === "annual"
                              ? "bg-purple-500 text-white"
                              : "text-white/60 hover:text-white"
                          }`}
                        >
                          Annual
                        </button>
                      </div>
                    </div>

                    {/* CTA */}
                    <Button 
                      variant="outline" 
                      className="w-full border-purple-500 text-purple-400 hover:bg-purple-500/10 mb-4"
                    >
                      Subscribe — ${billingFrequency === "monthly" ? "49.99" : "39.99"} / mo
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
                    <div className="space-y-3 pt-4 border-t border-white/5">
                      <div className="flex items-start gap-2 text-sm text-white/80">
                        <Check className="w-4 h-4 mt-0.5 text-green-400" />
                        <span>Unlimited AI prompts (fair use)</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm text-white/80">
                        <Check className="w-4 h-4 mt-0.5 text-green-400" />
                        <span>Priority compute for trend scans</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm text-white/80">
                        <Check className="w-4 h-4 mt-0.5 text-green-400" />
                        <span>Early access to meme drops & airdrops</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm text-white/80">
                        <Check className="w-4 h-4 mt-0.5 text-green-400" />
                        <div>
                          <span>1 month free trial</span>
                          <span className="ml-2 text-xs px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded-full">
                            New
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-white/60 mt-6 text-center">
                      Invoice & team seats available
                    </p>
                  </div>

                  {/* Card C - Enterprise */}
                  <div className="bg-[#151719] rounded-xl p-6 border border-white/5 hover:border-white/10 transition-all hover:translate-y-[-4px] hover:shadow-2xl flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-4">Enterprise</h3>
                    
                    <p className="text-sm text-white/60 mb-6 flex-1">
                      Flexible billing, custom Kludd bundles, dedicated onboarding.
                    </p>

                    <div className="space-y-4">
                      <Button 
                        variant="outline" 
                        className="w-full border-white/20 text-white hover:bg-white/10"
                      >
                        Book a demo
                      </Button>
                      
                      <div className="flex items-center justify-center gap-2 text-xs text-white/60">
                        <Mail className="w-3 h-3" />
                        <span>sales@klux.ai</span>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/5 space-y-2">
                      <p className="text-xs text-white/60 mb-3">Everything in Business, plus:</p>
                      <div className="flex items-start gap-2 text-xs text-white/80">
                        <Check className="w-3 h-3 mt-0.5 text-green-400" />
                        <span>Dedicated support</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-white/80">
                        <Check className="w-3 h-3 mt-0.5 text-green-400" />
                        <span>Onboarding services</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-white/80">
                        <Check className="w-3 h-3 mt-0.5 text-green-400" />
                        <span>Custom connections</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Help Button */}
              <button className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                <span className="text-white text-xl">?</span>
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}