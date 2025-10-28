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
      <DialogContent className="max-w-[900px] max-h-[85vh] p-0 bg-[#0F1113] border-white/5">
        <DialogTitle className="sr-only">Pricing</DialogTitle>
        <DialogDescription className="sr-only">Plans & Kludd pricing</DialogDescription>
        
        <div className="flex flex-col h-full">
          {/* Tab Navigation */}
          <div className="flex gap-2 p-6 border-b border-white/5">
            <Button
              variant={activeTab === "plan" ? "default" : "outline"}
              onClick={() => setActiveTab("plan")}
              className={activeTab === "plan" ? "bg-purple-600 hover:bg-purple-700" : "border-white/10 text-white hover:bg-white/5"}
            >
              Your Plan
            </Button>
            <Button
              variant={activeTab === "howItWorks" ? "default" : "outline"}
              onClick={() => setActiveTab("howItWorks")}
              className={activeTab === "howItWorks" ? "bg-purple-600 hover:bg-purple-700" : "border-white/10 text-white hover:bg-white/5"}
            >
              How Klud Works
            </Button>
            <Button
              variant={activeTab === "kluxAI" ? "default" : "outline"}
              onClick={() => setActiveTab("kluxAI")}
              className={activeTab === "kluxAI" ? "bg-purple-600 hover:bg-purple-700" : "border-white/10 text-white hover:bg-white/5"}
            >
              Klux AI
            </Button>
          </div>

          {/* Tab Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {activeTab === "plan" && (
              <div className="space-y-6">
                {/* Current Status */}
                <div className="bg-[#151719] rounded-xl p-4 border border-white/5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                        <CreditCard className="w-5 h-5 text-white" />
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
                </div>

                {/* Plans Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {/* Kludd Fuel Credits */}
                  <div className="bg-[#151719] rounded-xl p-4 border border-white/5">
                    <div className="flex items-center gap-2 mb-3">
                      <Fuel className="w-5 h-5 text-purple-400" />
                      <h3 className="text-base font-bold text-white">Kludd Fuel</h3>
                    </div>
                    <p className="text-xs text-white/60 mb-4">
                      Buy Kludd by the litre
                    </p>

                    {/* Dropdown Pack Selection */}
                    <Select value={selectedPack.toString()} onValueChange={(val) => setSelectedPack(parseInt(val))}>
                      <SelectTrigger className="w-full mb-3 bg-white/5 border-white/10 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-[#151719] border-white/10">
                        {kluddPacks.map((pack, idx) => (
                          <SelectItem key={idx} value={idx.toString()} className="text-white">
                            ${pack.price} — {pack.liters} L {pack.bestValue ? "⭐" : ""}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    {/* Auto-refill */}
                    <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg mb-3">
                      <span className="text-xs text-white">Auto-refill</span>
                      <Switch checked={autoRefill} onCheckedChange={setAutoRefill} />
                    </div>

                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-sm">
                      Buy Kludd
                    </Button>

                    <div className="space-y-1 mt-3 pt-3 border-t border-white/5">
                      <div className="flex items-start gap-1 text-xs text-white/80">
                        <Check className="w-3 h-3 mt-0.5 text-green-400" />
                        <span>Instant delivery</span>
                      </div>
                      <div className="flex items-start gap-1 text-xs text-white/80">
                        <Check className="w-3 h-3 mt-0.5 text-green-400" />
                        <span>No expiry</span>
                      </div>
                    </div>
                  </div>

                  {/* Klux AI Monthly */}
                  <div className="bg-[#151719] rounded-xl p-4 border border-white/5">
                    <div className="flex items-center gap-2 mb-3">
                      <Brain className="w-5 h-5 text-cyan-400" />
                      <h3 className="text-base font-bold text-white">Klux AI</h3>
                    </div>
                    <p className="text-xs text-white/60 mb-4">
                      Monthly AI access
                    </p>

                    <div className="mb-3">
                      <div className="text-2xl font-bold text-white">
                        ${billingFrequency === "monthly" ? "49.99" : "39.99"}
                      </div>
                      <div className="text-xs text-white/60">per month</div>
                    </div>

                    {/* Billing Toggle */}
                    <div className="flex gap-2 p-1 bg-white/5 rounded-lg mb-3">
                      <button
                        onClick={() => setBillingFrequency("monthly")}
                        className={`flex-1 py-1 px-2 rounded text-xs transition-all ${
                          billingFrequency === "monthly"
                            ? "bg-purple-500 text-white"
                            : "text-white/60"
                        }`}
                      >
                        Monthly
                      </button>
                      <button
                        onClick={() => setBillingFrequency("annual")}
                        className={`flex-1 py-1 px-2 rounded text-xs transition-all ${
                          billingFrequency === "annual"
                            ? "bg-purple-500 text-white"
                            : "text-white/60"
                        }`}
                      >
                        Annual
                      </button>
                    </div>

                    <Button 
                      variant="outline" 
                      className="w-full border-purple-500 text-purple-400 hover:bg-purple-500/10 text-sm mb-3"
                    >
                      Subscribe
                    </Button>

                    <div className="space-y-1 pt-3 border-t border-white/5">
                      <div className="flex items-start gap-1 text-xs text-white/80">
                        <Check className="w-3 h-3 mt-0.5 text-green-400" />
                        <span>Unlimited AI prompts</span>
                      </div>
                      <div className="flex items-start gap-1 text-xs text-white/80">
                        <Check className="w-3 h-3 mt-0.5 text-green-400" />
                        <span>Priority compute</span>
                      </div>
                    </div>
                  </div>

                  {/* Enterprise */}
                  <div className="bg-[#151719] rounded-xl p-4 border border-white/5">
                    <div className="flex items-center gap-2 mb-3">
                      <Zap className="w-5 h-5 text-yellow-400" />
                      <h3 className="text-base font-bold text-white">Enterprise</h3>
                    </div>
                    <p className="text-xs text-white/60 mb-4">
                      Custom solutions
                    </p>

                    <Button 
                      variant="outline" 
                      className="w-full border-white/20 text-white hover:bg-white/10 text-sm mb-3"
                    >
                      Book a demo
                    </Button>
                    
                    <div className="flex items-center justify-center gap-2 text-xs text-white/60 mb-3">
                      <Mail className="w-3 h-3" />
                      <span>sales@klux.ai</span>
                    </div>

                    <div className="pt-3 border-t border-white/5 space-y-1">
                      <div className="flex items-start gap-1 text-xs text-white/80">
                        <Check className="w-3 h-3 mt-0.5 text-green-400" />
                        <span>Dedicated support</span>
                      </div>
                      <div className="flex items-start gap-1 text-xs text-white/80">
                        <Check className="w-3 h-3 mt-0.5 text-green-400" />
                        <span>Custom connections</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "howItWorks" && (
              <div className="space-y-6">
                <div className="bg-[#151719] rounded-xl p-6 border border-white/5">
                  <div className="flex items-center gap-3 mb-4">
                    <Fuel className="w-8 h-8 text-purple-400" />
                    <h3 className="text-2xl font-bold text-white">How Klud Works</h3>
                  </div>
                  
                  <div className="space-y-4 text-white/80">
                    <p>
                      <span className="font-semibold text-white">Klud</span> is the fuel that powers Klux. Think of it as credits that get consumed when you use AI features, run analytics, or access premium tools.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-purple-400 font-bold">1</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">AI Analysis</h4>
                          <p className="text-sm">Each AI-powered coin analysis consumes Klud based on complexity and depth of analysis.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-cyan-400 font-bold">2</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">Real-time Monitoring</h4>
                          <p className="text-sm">Active trackers and alerts consume Klud to continuously monitor market signals and trends.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-pink-400 font-bold">3</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">Premium Features</h4>
                          <p className="text-sm">Access to advanced tools, custom alerts, and priority processing requires Klud.</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
                      <h4 className="font-semibold text-white mb-2">💡 Pro Tip</h4>
                      <p className="text-sm">Enable auto-refill to never run out of Klud during critical market moments. Your purchased Klud never expires!</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "kluxAI" && (
              <div className="space-y-6">
                <div className="bg-[#151719] rounded-xl p-6 border border-white/5">
                  <div className="flex items-center gap-3 mb-4">
                    <Brain className="w-8 h-8 text-cyan-400" />
                    <h3 className="text-2xl font-bold text-white">Klux AI</h3>
                  </div>
                  
                  <div className="space-y-4 text-white/80">
                    <p>
                      <span className="font-semibold text-white">Klux AI</span> is your intelligent meme coin companion that combines advanced analytics, machine learning, and real-time market data to give you an edge in the volatile crypto market.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                          <Brain className="w-4 h-4 text-cyan-400" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">Smart Analysis</h4>
                          <p className="text-sm">AI models trained on millions of data points analyze sentiment, trends, and market signals to identify potential opportunities.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                          <Zap className="w-4 h-4 text-purple-400" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">Real-time Alerts</h4>
                          <p className="text-sm">Get instant notifications when AI detects significant patterns, whale movements, or trending signals across social platforms.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                          <CreditCard className="w-4 h-4 text-pink-400" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">Priority Access</h4>
                          <p className="text-sm">Subscribers get priority compute resources, faster analysis, and early access to new AI features and meme drops.</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg border border-cyan-500/20">
                      <h4 className="font-semibold text-white mb-2">🚀 What You Get</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Unlimited AI-powered coin analysis</li>
                        <li>• 24/7 automated trend detection</li>
                        <li>• Custom alert configurations</li>
                        <li>• Priority processing during high-volume periods</li>
                        <li>• Early access to airdrops and exclusive meme drops</li>
                      </ul>
                    </div>

                    <div className="mt-4 text-center">
                      <Button className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white">
                        Start 1 Month Free Trial
                      </Button>
                      <p className="text-xs text-white/60 mt-2">Cancel anytime. No commitment.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}