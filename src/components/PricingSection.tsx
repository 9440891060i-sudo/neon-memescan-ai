import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Coins, TrendingUp, Infinity, Rocket } from "lucide-react";

const plans = [
  {
    name: "Starter",
    icon: Coins,
    price: "9",
    period: "month",
    description: "Pay-as-you-go credits model",
    features: [
      "100 credits included per month",
      "Analyse 1 coin at a time",
      "Manual contract address input (CA paste & analyse)",
      "Full AI analysis: graphs, Twitter metrics, holders, entries & exits",
      "Perfect for explorers testing meme coins"
    ],
    buttonText: "Get Started",
    buttonVariant: "neon-outline" as const,
    popular: false
  },
  {
    name: "Pro",
    icon: TrendingUp,
    price: "29",
    period: "month",
    description: "Unlimited manual access",
    features: [
      "Unlimited analyses — no credits needed",
      "Analyse up to 3 coins at once",
      "Deeper AI insights with real-time graphs & metrics",
      "Includes entry & exit signals for every coin",
      "Designed for active meme coin traders"
    ],
    buttonText: "Go Pro",
    buttonVariant: "analyze" as const,
    popular: true
  },
  {
    name: "God Mode",
    icon: Rocket,
    price: "49",
    period: "month",
    description: "24/7 AI Auto-Scanner",
    features: [
      "Everything in Pro",
      "AI continuously scans meme coins around the clock",
      "Showcases top coins auto-detected by AI",
      "Entry & exit signals delivered instantly",
      "Stay ahead of every moonshot — without lifting a finger"
    ],
    buttonText: "Activate God Mode",
    buttonVariant: "neon" as const,
    popular: false
  }
];

export default function PricingSection() {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card 
                key={index}
                className={`relative p-6 sm:p-8 border transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 ${
                  plan.popular 
                    ? 'border-neon-green neon-glow-green bg-gradient-to-br from-card to-neon-green/5 scale-[1.02] sm:scale-105' 
                    : 'border-border hover:border-neon-cyan/50 bg-gradient-to-br from-card to-neon-cyan/5'
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-neon-green text-background px-4 py-2 rounded-full text-xs font-bold">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <div className="text-center">
                  {/* Icon */}
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full ${
                    plan.popular ? 'bg-neon-green/20' : 'bg-neon-cyan/20'
                  } flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${
                      plan.popular ? 'text-neon-green' : 'text-neon-cyan'
                    }`} />
                  </div>

                  {/* Plan name */}
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-foreground">{plan.name}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-4 sm:mb-6">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-3xl sm:text-4xl font-bold text-foreground">${plan.price}</span>
                      <span className="text-sm sm:text-base text-muted-foreground">/ {plan.period}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-left">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 sm:gap-3">
                        <Check className={`w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0 ${
                          plan.popular ? 'text-neon-green' : 'text-neon-cyan'
                        }`} />
                        <span className="text-sm sm:text-base text-muted-foreground leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    variant={plan.buttonVariant} 
                    size="lg" 
                    className="w-full min-h-[44px] text-sm sm:text-base"
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
            All plans include the same powerful AI engine. The difference is how much you want it working for you.
          </p>
        </div>
      </div>
    </section>
  );
}