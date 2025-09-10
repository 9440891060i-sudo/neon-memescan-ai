import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Zap, Crown, Infinity } from "lucide-react";

const plans = [
  {
    name: "Free Trial",
    icon: Zap,
    price: "0",
    credits: "10",
    description: "Perfect for testing our AI",
    features: [
      "10 Free Analysis Credits",
      "Basic Social Sentiment",
      "Technical Indicators",
      "24h Support"
    ],
    buttonText: "Start Free",
    buttonVariant: "neon-outline" as const,
    popular: false
  },
  {
    name: "Pay Per Analysis",
    icon: Crown,
    price: "2.99",
    credits: "30",
    description: "Ideal for occasional traders",
    features: [
      "30 Analysis Credits",
      "Advanced AI Insights",
      "Social + Technical Combo",
      "Priority Support",
      "Detailed Reports"
    ],
    buttonText: "Buy Credits",
    buttonVariant: "analyze" as const,
    popular: true
  },
  {
    name: "Monthly Unlimited",
    icon: Infinity,
    price: "49.99",
    credits: "∞",
    description: "For serious meme coin traders",
    features: [
      "Unlimited Analysis",
      "Real-time Alerts",
      "Advanced Metrics",
      "Portfolio Tracking",
      "Premium Support",
      "API Access"
    ],
    buttonText: "Go Unlimited",
    buttonVariant: "neon" as const,
    popular: false
  }
];

export default function PricingSection() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-neon-purple">Credit</span> System
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your meme coin analysis needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card 
                key={index}
                className={`relative p-8 bg-gradient-card border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-neon-green neon-glow-green' 
                    : 'border-border hover:border-neon-cyan/50'
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-neon-green text-background px-4 py-1 rounded-full text-xs font-bold">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <div className="text-center">
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full ${
                    plan.popular ? 'bg-neon-green/20' : 'bg-neon-cyan/20'
                  } flex items-center justify-center`}>
                    <Icon className={`w-8 h-8 ${
                      plan.popular ? 'text-neon-green' : 'text-neon-cyan'
                    }`} />
                  </div>

                  {/* Plan name */}
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{plan.name}</h3>
                  <p className="text-muted-foreground mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                      {plan.name !== "Free Trial" && (
                        <span className="text-muted-foreground">/ {plan.credits} credits</span>
                      )}
                    </div>
                    <div className={`text-lg font-semibold mt-2 ${
                      plan.popular ? 'text-neon-green' : 'text-neon-cyan'
                    }`}>
                      {plan.credits} Analysis Credits
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 text-left">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className={`w-5 h-5 ${
                          plan.popular ? 'text-neon-green' : 'text-neon-cyan'
                        }`} />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    variant={plan.buttonVariant} 
                    size="lg" 
                    className="w-full"
                  >
                    {plan.buttonText}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            All plans include access to our advanced AI algorithms and real-time data feeds
          </p>
        </div>
      </div>
    </section>
  );
}