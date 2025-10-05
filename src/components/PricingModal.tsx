import { useState } from "react";
import { Droplets, Sparkles, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Link } from "react-router-dom";

const creditPlans = [
  { amount: "$6", credits: "60", popular: false },
  { amount: "$12", credits: "130", popular: false },
  { amount: "$25", credits: "280", popular: true },
  { amount: "$50", credits: "600", popular: false },
];

const aiFeatures = [
  "24/7 Auto-Analysis",
  "Real-time Market Signals",
  "Risk Assessment AI",
  "Portfolio Optimization",
  "Smart Notifications",
];

interface PricingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function PricingModal({ open, onOpenChange }: PricingModalProps) {
  const [selectedPlan, setSelectedPlan] = useState(2);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl p-0 border-0 bg-transparent overflow-hidden animate-fade-in">
        <div className="relative bg-background/40 backdrop-blur-2xl rounded-2xl border border-neon-green/20 shadow-[0_0_50px_rgba(0,255,136,0.1)] overflow-hidden animate-scale-in">
          {/* Glassmorphism overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-background/40 to-background/60 backdrop-blur-xl" />
          
          {/* Content */}
          <div className="relative grid md:grid-cols-2 gap-0">
            {/* Left Section - Klud Fluid Refill */}
            <div className="p-8 border-r border-neon-green/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-neon-green/10 border border-neon-green/20">
                  <Droplets className="w-6 h-6 text-neon-green" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Klud Fluid</h2>
                  <p className="text-sm text-muted-foreground">Refill Your Credits</p>
                </div>
              </div>

              {/* Pricing Options */}
              <div className="space-y-3 mb-6">
                {creditPlans.map((plan, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedPlan(index)}
                    className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left relative overflow-hidden group ${
                      selectedPlan === index
                        ? "border-neon-green bg-neon-green/5 shadow-[0_0_20px_rgba(0,255,136,0.2)]"
                        : "border-border/50 bg-card/50 hover:border-neon-green/50"
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute top-2 right-2 px-2 py-1 rounded-md bg-neon-green/20 border border-neon-green/30 text-xs font-semibold text-neon-green">
                        Popular
                      </div>
                    )}
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-2xl font-bold text-foreground">{plan.amount}</div>
                        <div className="text-sm text-muted-foreground">{plan.credits} Credits</div>
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 transition-all ${
                        selectedPlan === index
                          ? "border-neon-green bg-neon-green"
                          : "border-muted-foreground/30"
                      }`}>
                        {selectedPlan === index && (
                          <Check className="w-3 h-3 text-background m-auto" />
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <Button 
                className="w-full bg-neon-green hover:bg-neon-green/90 text-background font-semibold py-6 rounded-xl shadow-[0_0_30px_rgba(0,255,136,0.3)] hover:shadow-[0_0_40px_rgba(0,255,136,0.5)] transition-all duration-300"
              >
                Purchase Credits
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-4">
                1 Credit = 1 AI Analysis • No Expiration
              </p>
            </div>

            {/* Right Section - KLUX AI Info */}
            <div className="p-8 bg-gradient-to-br from-neon-green/5 to-transparent">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-neon-purple/10 border border-neon-purple/20">
                  <Sparkles className="w-6 h-6 text-neon-purple" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">KLUX AI</h2>
                  <p className="text-sm text-muted-foreground">Powered Intelligence</p>
                </div>
              </div>

              {/* Free Credits Explanation */}
              <Card className="p-6 mb-6 bg-card/50 border-neon-purple/20 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-neon-purple/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-neon-purple">50</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Free Credits on Signup</h3>
                    <p className="text-sm text-muted-foreground">
                      New users receive 50 free credits to explore KLUX AI's powerful analysis capabilities.
                    </p>
                  </div>
                </div>
              </Card>

              {/* AI Features */}
              <div>
                <h3 className="font-semibold text-foreground mb-4">What You Get:</h3>
                <div className="space-y-3">
                  {aiFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 group">
                      <div className="w-5 h-5 rounded-md bg-neon-green/20 border border-neon-green/30 flex items-center justify-center group-hover:bg-neon-green/30 transition-colors">
                        <Check className="w-3 h-3 text-neon-green" />
                      </div>
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Stats */}
              <div className="mt-6 pt-6 border-t border-border/50">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-xl font-bold text-neon-cyan">98%</div>
                    <div className="text-xs text-muted-foreground">Accuracy</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-neon-green">+43%</div>
                    <div className="text-xs text-muted-foreground">Avg Gain</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-neon-purple">24/7</div>
                    <div className="text-xs text-muted-foreground">Active</div>
                  </div>
                </div>
              </div>

              <Button 
                asChild
                variant="outline"
                className="w-full mt-6 border-neon-purple/30 hover:border-neon-purple hover:bg-neon-purple/10 transition-all duration-300"
              >
                <Link to="/auth">Get Started Free</Link>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
