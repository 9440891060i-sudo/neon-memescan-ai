import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const plans = [
  {
    name: "$6 Credits",
    price: "6",
    type: "credits",
    features: [
      "Quick top-up",
      "Use anywhere"
    ]
  },
  {
    name: "$12 Credits", 
    price: "12",
    type: "credits",
    features: [
      "Quick top-up",
      "Use anywhere"
    ]
  },
  {
    name: "Let's See How Good You Are",
    price: "29",
    type: "monthly",
    features: [
      "100 free credits",
      "You pick the coins",
      "AI analyses them"
    ]
  },
  {
    name: "Let's See How Good You Think We Are",
    price: "49", 
    type: "monthly",
    features: [
      "250 free credits",
      "24/7 AI auto-analysis",
      "Credits deducted only on wins"
    ]
  }
];

export default function PricingSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-2">
            Simple plans. <span className="text-neon-purple">Same powerful AI.</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Choose the perfect plan for your meme coin analysis needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className="relative p-6 border border-border hover:border-neon-cyan/50 bg-card transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="text-center">
                {/* Plan name */}
                <h3 className="text-lg font-bold mb-4 text-foreground">{plan.name}</h3>
                
                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                  {plan.type === "monthly" && <span className="text-muted-foreground ml-1">/mo</span>}
                </div>

                {/* Features - only show on hover */}
                <div className={`transition-all duration-300 overflow-hidden ${
                  hoveredCard === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <ul className="space-y-2 mb-6 text-left">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button - always visible */}
                <Button 
                  variant="outline" 
                  className="w-full"
                >
                  {plan.type === "credits" ? "Buy Credits" : "Get Started"}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}