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
  { amount: "$6", credits: "60", size: "1L" },
  { amount: "$12", credits: "130", size: "2L" },
  { amount: "$20", credits: "220", size: "4L" },
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
  const [selectedPlan, setSelectedPlan] = useState(1);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl p-0 border-0 bg-transparent overflow-hidden animate-fade-in">
        <div className="relative bg-background/40 backdrop-blur-2xl rounded-xl border border-neon-green/20 shadow-[0_0_50px_rgba(0,255,136,0.1)] overflow-hidden animate-scale-in">
          {/* Glassmorphism overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-background/40 to-background/60 backdrop-blur-xl" />
          
          {/* Content */}
          <div className="relative grid md:grid-cols-2 gap-0">
            {/* Left Section - Klud Fluid Refill */}
            <div className="p-4 border-r border-neon-green/10">
              <div className="text-center mb-4">
                <h2 className="text-xl font-bold text-foreground mb-0.5 tracking-tight">Refill Klud Fluid</h2>
                <p className="text-[10px] text-muted-foreground">Power Your Analysis</p>
              </div>

              {/* Glowing Jar Container */}
              <div className="relative h-32 mb-4 flex items-center justify-center">
                {/* Main Jar */}
                <div className="relative">
                  {/* Jar Body */}
                  <div className={`relative w-24 h-32 rounded-2xl border-3 border-neon-green/30 bg-gradient-to-b from-transparent via-neon-green/5 to-neon-green/10 backdrop-blur-sm overflow-hidden transition-all duration-500 ${
                    selectedPlan === 0 ? "scale-90" : selectedPlan === 1 ? "scale-100" : "scale-110"
                  }`}>
                    {/* Fluid Fill */}
                    <div 
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-neon-green via-neon-green/80 to-neon-green/60 transition-all duration-700 ease-out"
                      style={{ 
                        height: selectedPlan === 0 ? "30%" : selectedPlan === 1 ? "60%" : "90%",
                      }}
                    >
                      {/* Fluid Surface Animation */}
                      <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-neon-green/40 to-transparent animate-pulse" />
                      
                      {/* Bubbles */}
                      <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute w-2 h-2 bg-neon-green/40 rounded-full bottom-4 left-6 animate-[float_3s_ease-in-out_infinite]" />
                        <div className="absolute w-1.5 h-1.5 bg-neon-green/30 rounded-full bottom-8 right-8 animate-[float_4s_ease-in-out_infinite_0.5s]" />
                        <div className="absolute w-1 h-1 bg-neon-green/50 rounded-full bottom-12 left-10 animate-[float_3.5s_ease-in-out_infinite_1s]" />
                      </div>
                    </div>
                    
                    {/* Jar Cap */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-4 rounded-t-xl bg-gradient-to-b from-neon-green/40 to-neon-green/20 border-2 border-neon-green/40 shadow-[0_0_20px_rgba(0,255,136,0.4)]" />
                  </div>
                  
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 rounded-3xl transition-all duration-500 ${
                    selectedPlan === 2 ? "shadow-[0_0_60px_rgba(0,255,136,0.6)]" : "shadow-[0_0_30px_rgba(0,255,136,0.3)]"
                  }`} />
                  
                  {/* Ripple Effect for Large Jar */}
                  {selectedPlan === 2 && (
                    <>
                      <div className="absolute inset-0 rounded-3xl border-2 border-neon-green/30 animate-ping" />
                      <div className="absolute inset-0 rounded-3xl border-2 border-neon-green/20 animate-ping animation-delay-150" />
                    </>
                  )}
                </div>
              </div>

              {/* Refill Options */}
              <div className="space-y-2 mb-4">
                {creditPlans.map((plan, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedPlan(index)}
                    className={`w-full p-3 rounded-xl border-2 transition-all duration-500 text-left relative overflow-hidden group ${
                      selectedPlan === index
                        ? "border-neon-green bg-gradient-to-r from-neon-green/10 via-neon-green/5 to-transparent shadow-[0_0_25px_rgba(0,255,136,0.25)] scale-105"
                        : "border-border/50 bg-card/30 hover:border-neon-green/50 hover:bg-card/50"
                    }`}
                  >
                    {/* Animated Background Gradient */}
                    {selectedPlan === index && (
                      <div className="absolute inset-0 bg-gradient-to-r from-neon-green/5 via-transparent to-neon-green/5 animate-pulse" />
                    )}
                    
                    <div className="relative flex items-center justify-between">
                      {/* Jar Size Indicator */}
                      <div className="flex items-center gap-4">
                        <div className={`relative flex items-end gap-0.5 transition-all duration-300 ${
                          selectedPlan === index ? "scale-110" : ""
                        }`}>
                          <div className={`w-3 rounded-sm bg-neon-green/40 transition-all ${
                            index === 0 ? "h-6" : index === 1 ? "h-9" : "h-12"
                          } ${selectedPlan === index ? "shadow-[0_0_10px_rgba(0,255,136,0.5)]" : ""}`} />
                        </div>
                        
                        <div>
                          <div className="text-xl font-bold text-foreground tracking-tight">{plan.amount}</div>
                          <div className="text-[10px] text-muted-foreground">
                            {index === 0 ? "1L" : index === 1 ? "2L" : "4L"} • {plan.credits} Credits
                          </div>
                        </div>
                      </div>

                      {/* Selection Indicator */}
                      <div className={`w-5 h-5 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                        selectedPlan === index
                          ? "border-neon-green bg-neon-green shadow-[0_0_15px_rgba(0,255,136,0.6)]"
                          : "border-muted-foreground/30 bg-transparent"
                      }`}>
                        {selectedPlan === index && (
                          <Check className="w-4 h-4 text-background animate-scale-in" />
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Purchase Button */}
              <Button 
                className="w-full bg-gradient-to-r from-neon-green to-neon-green/80 hover:from-neon-green hover:to-neon-green text-background font-bold py-4 rounded-xl shadow-[0_0_30px_rgba(0,255,136,0.4)] hover:shadow-[0_0_50px_rgba(0,255,136,0.6)] transition-all duration-500 text-base tracking-wide"
              >
                Purchase Refill
              </Button>

              {/* Tagline */}
              <div className="mt-3 p-3 rounded-lg bg-neon-green/5 border border-neon-green/10">
                <p className="text-[10px] text-center text-muted-foreground leading-relaxed">
                  <span className="text-neon-green font-semibold">⚡ Each minute</span> of analysis uses{" "}
                  <span className="text-neon-green font-semibold">13ml</span> of Klud Fluid
                  <br />
                  <span className="text-foreground/80">Refill to keep exploring alpha!</span>
                </p>
              </div>
            </div>

            {/* Right Section - KLUX AI Info */}
            <div className="p-4 bg-gradient-to-br from-neon-green/5 to-transparent">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-neon-purple/10 border border-neon-purple/20">
                  <Sparkles className="w-5 h-5 text-neon-purple" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">KLUX AI</h2>
                  <p className="text-[10px] text-muted-foreground">Powered Intelligence</p>
                </div>
              </div>

              {/* Free Credits Explanation */}
              <Card className="p-3 mb-4 bg-card/50 border-neon-purple/20 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-neon-purple/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-neon-purple">50</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-1">Free Credits on Signup</h3>
                    <p className="text-[10px] text-muted-foreground leading-relaxed">
                      New users receive 50 free credits to explore KLUX AI's powerful analysis capabilities.
                    </p>
                  </div>
                </div>
              </Card>

              {/* AI Features */}
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3">What You Get:</h3>
                <div className="space-y-2">
                  {aiFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 group">
                      <div className="w-4 h-4 rounded-md bg-neon-green/20 border border-neon-green/30 flex items-center justify-center group-hover:bg-neon-green/30 transition-colors">
                        <Check className="w-2.5 h-2.5 text-neon-green" />
                      </div>
                      <span className="text-[11px] text-muted-foreground group-hover:text-foreground transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Stats */}
              <div className="mt-4 pt-4 border-t border-border/50">
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <div className="text-lg font-bold text-neon-cyan">98%</div>
                    <div className="text-[10px] text-muted-foreground">Accuracy</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-neon-green">+43%</div>
                    <div className="text-[10px] text-muted-foreground">Avg Gain</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-neon-purple">24/7</div>
                    <div className="text-[10px] text-muted-foreground">Active</div>
                  </div>
                </div>
              </div>

              <Button 
                asChild
                variant="outline"
                className="w-full mt-4 py-4 text-sm border-neon-purple/30 hover:border-neon-purple hover:bg-neon-purple/10 transition-all duration-300"
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
