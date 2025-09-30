import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "$6 Credits",
    price: "6",
    type: "credits",
    features: ["Quick top-up", "Use anywhere"],
  },
  {
    name: "$12 Credits",
    price: "12",
    type: "credits",
    features: ["Quick top-up", "Use anywhere"],
  },
  {
    name: "Let's See How Good You Are",
    price: "29",
    type: "monthly",
    features: ["100 free credits", "You pick the coins", "AI analyses them"],
  },
  {
    name: "Let's See How Good You Think We Are",
    price: "49",
    type: "monthly",
    features: [
      "250 free credits",
      "24/7 AI auto-analysis",
      "Credits deducted only on wins",
    ],
  },
];

interface PricingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function PricingModal({ open, onOpenChange }: PricingModalProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-xl border-border/50">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Pricing Plans</DialogTitle>
        </DialogHeader>

        {/* Performance Preview */}
        <div className="bg-accent/50 backdrop-blur-sm rounded-lg p-6 mb-6 border border-border/50">
          <h3 className="text-lg font-semibold mb-3 text-center">Today's Performance</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-neon-cyan">124</p>
              <p className="text-sm text-muted-foreground">Coins Analyzed</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-neon-purple">12</p>
              <p className="text-sm text-muted-foreground">Deemed Worthy</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-neon-green">+43%</p>
              <p className="text-sm text-muted-foreground">Avg Rise</p>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className="relative p-4 border border-border hover:border-neon-cyan/50 bg-card transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="text-center">
                <h3 className="text-base font-bold mb-3 text-foreground min-h-[40px] flex items-center justify-center">
                  {plan.name}
                </h3>

                <div className="mb-4">
                  <span className="text-3xl font-bold text-foreground">
                    ${plan.price}
                  </span>
                  {plan.type === "monthly" && (
                    <span className="text-muted-foreground ml-1">/mo</span>
                  )}
                </div>

                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    hoveredCard === index
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="space-y-1 mb-4 text-left">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="text-xs text-muted-foreground"
                      >
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button variant="outline" className="w-full text-sm">
                  {plan.type === "credits" ? "Buy Credits" : "Get Started"}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-4 border-t border-border/50">
          <Button
            asChild
            className="bg-gradient-neon text-black hover:shadow-glow transition-all duration-300"
            size="lg"
          >
            <Link to="/auth">Start to Unlock Full Performance Data</Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
