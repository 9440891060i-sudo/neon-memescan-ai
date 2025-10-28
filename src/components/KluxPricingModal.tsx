import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  CreditCard, 
  Wallet, 
  Check, 
  Info,
  Mail,
  Zap,
  Brain,
  Fuel
} from "lucide-react";

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
  const [activeTab, setActiveTab] = useState<"plan" | "howItWorks" | "kluxAI">("plan");
  const [selectedPack, setSelectedPack] = useState(1);
  const [autoRefill, setAutoRefill] = useState(false);
  const [billingFrequency, setBillingFrequency] = useState<"monthly" | "annual">("monthly");
  const currentCredits = 71.3;
  const totalCredits = 105;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[1200px] h-[90vh] p-0 bg-[#0F1113] border-white/5 overflow-hidden">
        <DialogTitle className="sr-only">Pricing</DialogTitle>
        <DialogDescription className="sr-only">Plans & Kludd pricing</DialogDescription>
        
        <div className="flex h-full">
          {/* Left Sidebar */}
          <div className="w-[200px] bg-[#0A0B0D] border-r border-white/5 p-6 flex flex-col">
            <div className="mb-8">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 mb-2" />
              <p className="text-xs text-white/60">Klux Workspace</p>
            </div>
            
            <nav className="space-y-4 flex-1">
              <button 
                onClick={() => setActiveTab("plan")}
                className={`flex items-center gap-3 text-sm w-full px-3 py-2 rounded-md transition-colors ${
                  activeTab === "plan" 
                    ? "text-white bg-white/10" 
                    : "text-white/80 hover:text-white"
                }`}
              >
                <CreditCard className="w-4 h-4" />
                <span>Your Plan</span>
              </button>
              <button 
                onClick={() => setActiveTab("howItWorks")}
                className={`flex items-center gap-3 text-sm w-full px-3 py-2 rounded-md transition-colors ${
                  activeTab === "howItWorks" 
                    ? "text-white bg-white/10" 
                    : "text-white/80 hover:text-white"
                }`}
              >
                <Fuel className="w-4 h-4" />
                <span>How Klud Works</span>
              </button>
              <button 
                onClick={() => setActiveTab("kluxAI")}
                className={`flex items-center gap-3 text-sm w-full px-3 py-2 rounded-md transition-colors ${
                  activeTab === "kluxAI" 
                    ? "text-white bg-white/10" 
                    : "text-white/80 hover:text-white"
                }`}
              >
                <Brain className="w-4 h-4" />
                <span>Klux AI</span>
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto">
              <div className="p-8 flex flex-col gap-8">
                {activeTab === "plan" && (
                  <>
                    {/* Header */}
                    <div className="mb-0">
                      <h2 className="text-3xl font-bold text-white mb-2">Your Plan</h2>
                      <p className="text-white/60">Manage your credits and subscriptions</p>
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

                    {/* Pricing Cards Grid */}
                    <div className="pr-2">
                      <div className="grid grid-cols-[2fr_2fr_1fr] gap-6 pb-8">
                        {/* Kludd Fuel Credits */}
                        <div className="bg-[#151719] rounded-xl p-6 border border-white/5 hover:border-white/10 transition-all hover:translate-y-[-4px] hover:shadow-2xl">
                          <div className="mb-6">
                            <h3 className="text-xl font-bold text-white mb-2">Kludd — Fuel Credits</h3>
                            <p className="text-sm text-white/60">
                              Buy Kludd by the litre. Use Kludd to run Klux features.
                            </p>
                          </div>

                          {/* Dropdown Pack Selection */}
                          <div className="mb-6">
                            <Select value={selectedPack.toString()} onValueChange={(val) => setSelectedPack(parseInt(val))}>
                              <SelectTrigger className="w-full bg-white/5 border-white/10 text-white">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent className="bg-[#151719] border-white/10">
                                {kluddPacks.map((pack, idx) => (
                                  <SelectItem key={idx} value={idx.toString()} className="text-white">
                                    ${pack.price} — {pack.liters} L ({pack.bestValue ? "Best value - " : ""}${pack.perLiter.toFixed(2)} / L)
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
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
                              <span>Redeemable for API calls and boosts</span>
                            </div>
                          </div>
                        </div>

                        {/* Klux AI Monthly Access */}
                        <div className="bg-[#151719] rounded-xl p-6 border border-white/5 hover:border-white/10 transition-all hover:translate-y-[-4px] hover:shadow-2xl">
                          <div className="mb-6">
                            <h3 className="text-xl font-bold text-white mb-2">Klux AI — Monthly Access</h3>
                            <p className="text-sm text-white/60">
                              Unlock the Klux AI engine with priority model access.
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
                              <span>Early access to meme drops</span>
                            </div>
                          </div>
                        </div>

                        {/* Enterprise */}
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
                            <div className="flex items-start gap-2 text-xs text-white/80">
                              <Check className="w-3 h-3 mt-0.5 text-green-400" />
                              <span>Dedicated support</span>
                            </div>
                            <div className="flex items-start gap-2 text-xs text-white/80">
                              <Check className="w-3 h-3 mt-0.5 text-green-400" />
                              <span>Custom connections</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {activeTab === "howItWorks" && (
                  <>
                    <div className="mb-0">
                      <h2 className="text-3xl font-bold text-white mb-2">How Klud Works</h2>
                      <p className="text-white/60">Understanding Klud fuel and consumption</p>
                    </div>

                    <div className="bg-[#151719] rounded-xl p-8 border border-white/5">
                      <div className="flex items-center gap-3 mb-6">
                        <Fuel className="w-8 h-8 text-purple-400" />
                        <h3 className="text-2xl font-bold text-white">What is Klud?</h3>
                      </div>
                      
                      <div className="space-y-6 text-white/80">
                        <p className="text-lg">
                          <span className="font-semibold text-white">Klud</span> is the fuel that powers Klux. Think of it as credits that get consumed when you use AI features, run analytics, or access premium tools.
                        </p>
                        
                        <div className="space-y-4">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                              <span className="text-purple-400 font-bold text-lg">1</span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-white mb-2 text-lg">AI Analysis</h4>
                              <p>Each AI-powered coin analysis consumes Klud based on complexity and depth of analysis. More detailed scans use more fuel.</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                              <span className="text-cyan-400 font-bold text-lg">2</span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-white mb-2 text-lg">Real-time Monitoring</h4>
                              <p>Active trackers and alerts consume Klud to continuously monitor market signals, social sentiment, and whale movements.</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                              <span className="text-pink-400 font-bold text-lg">3</span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-white mb-2 text-lg">Premium Features</h4>
                              <p>Access to advanced tools, custom alerts, priority processing, and token-gated utilities requires Klud to operate.</p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-8 p-6 bg-white/5 rounded-lg border border-white/10">
                          <h4 className="font-semibold text-white mb-3 text-lg">💡 Pro Tips</h4>
                          <ul className="space-y-2">
                            <li>• Enable auto-refill to never run out during critical market moments</li>
                            <li>• Purchased Klud never expires - buy in bulk for better rates</li>
                            <li>• Monitor your usage in the dashboard to optimize spending</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {activeTab === "kluxAI" && (
                  <>
                    <div className="mb-0">
                      <h2 className="text-3xl font-bold text-white mb-2">Klux AI</h2>
                      <p className="text-white/60">Your intelligent meme coin companion</p>
                    </div>

                    <div className="bg-[#151719] rounded-xl p-8 border border-white/5">
                      <div className="flex items-center gap-3 mb-6">
                        <Brain className="w-8 h-8 text-cyan-400" />
                        <h3 className="text-2xl font-bold text-white">What is Klux AI?</h3>
                      </div>
                      
                      <div className="space-y-6 text-white/80">
                        <p className="text-lg">
                          <span className="font-semibold text-white">Klux AI</span> combines advanced analytics, machine learning, and real-time market data to give you an edge in the volatile crypto market.
                        </p>
                        
                        <div className="space-y-4">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                              <Brain className="w-6 h-6 text-cyan-400" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-white mb-2 text-lg">Smart Analysis</h4>
                              <p>AI models trained on millions of data points analyze sentiment, trends, and market signals to identify potential opportunities before they go mainstream.</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                              <Zap className="w-6 h-6 text-purple-400" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-white mb-2 text-lg">Real-time Alerts</h4>
                              <p>Get instant notifications when AI detects significant patterns, whale movements, or trending signals across X, Telegram, and Discord.</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                              <CreditCard className="w-6 h-6 text-pink-400" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-white mb-2 text-lg">Priority Access</h4>
                              <p>Subscribers get priority compute resources, faster analysis, early access to new AI features, and exclusive meme drops before the public.</p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg border border-cyan-500/20">
                          <h4 className="font-semibold text-white mb-4 text-lg">🚀 What You Get</h4>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="flex items-start gap-2">
                              <Check className="w-4 h-4 mt-0.5 text-green-400" />
                              <span className="text-sm">Unlimited AI-powered analysis</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <Check className="w-4 h-4 mt-0.5 text-green-400" />
                              <span className="text-sm">24/7 automated trend detection</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <Check className="w-4 h-4 mt-0.5 text-green-400" />
                              <span className="text-sm">Custom alert configurations</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <Check className="w-4 h-4 mt-0.5 text-green-400" />
                              <span className="text-sm">Priority processing queues</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <Check className="w-4 h-4 mt-0.5 text-green-400" />
                              <span className="text-sm">Early airdrop access</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <Check className="w-4 h-4 mt-0.5 text-green-400" />
                              <span className="text-sm">Exclusive meme drops</span>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 text-center">
                          <Button className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-8 py-6 text-lg">
                            Start 1 Month Free Trial
                          </Button>
                          <p className="text-sm text-white/60 mt-3">Cancel anytime. No commitment required.</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            
            {/* Help Button */}
            <button className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-10">
              <span className="text-white text-xl">?</span>
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}