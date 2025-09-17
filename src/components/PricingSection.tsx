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
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/95" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-neon-purple to-foreground bg-clip-text text-transparent">
            Simple plans. <span className="text-neon-purple animate-pulse-neon">Same powerful AI.</span>
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
                className={`relative p-8 border transition-all duration-500 hover:scale-105 group overflow-hidden ${
                  plan.popular 
                    ? 'border-neon-green neon-glow-green bg-gradient-to-br from-card via-card/95 to-neon-green/5' 
                    : 'border-border hover:border-neon-cyan/50 bg-gradient-to-br from-card via-card/95 to-neon-cyan/5 hover:neon-glow-cyan'
                }`}
                style={{
                  transform: plan.popular ? 'scale(1.05)' : 'scale(1)',
                  zIndex: plan.popular ? 10 : 1
                }}
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-neon-green/10 via-transparent to-neon-green/5' 
                    : 'bg-gradient-to-br from-neon-cyan/10 via-transparent to-neon-cyan/5'
                }`} />
                
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-neon-green to-neon-green/80 text-background px-6 py-2 rounded-full text-xs font-bold shadow-lg animate-pulse-neon">
                      ⚡ MOST POPULAR
                    </div>
                  </div>
                )}

                <div className="text-center relative z-10">
                  {/* Icon with enhanced styling */}
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full ${
                    plan.popular ? 'bg-gradient-to-br from-neon-green/20 to-neon-green/10' : 'bg-gradient-to-br from-neon-cyan/20 to-neon-cyan/10'
                  } flex items-center justify-center border ${
                    plan.popular ? 'border-neon-green/30' : 'border-neon-cyan/30'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-10 h-10 ${
                      plan.popular ? 'text-neon-green' : 'text-neon-cyan'
                    } group-hover:animate-pulse`} />
                  </div>

                  {/* Plan name with gradient */}
                  <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${
                    plan.popular 
                      ? 'from-neon-green via-foreground to-neon-green' 
                      : 'from-neon-cyan via-foreground to-neon-cyan'
                  } bg-clip-text text-transparent`}>
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground mb-6 font-medium">{plan.description}</p>

                  {/* Price with enhanced styling */}
                  <div className="mb-8">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className={`text-5xl font-bold bg-gradient-to-r ${
                        plan.popular 
                          ? 'from-neon-green to-foreground' 
                          : 'from-neon-cyan to-foreground'
                      } bg-clip-text text-transparent`}>
                        ${plan.price}
                      </span>
                      <span className="text-muted-foreground text-lg">/ {plan.period}</span>
                    </div>
                    <div className={`inline-block px-3 py-1 rounded-full border ${
                      plan.popular 
                        ? 'border-neon-green/30 bg-neon-green/10 text-neon-green' 
                        : 'border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan'
                    } text-sm font-semibold`}>
                      {plan.name === 'Pro' ? 'UNLIMITED' : plan.name === 'God Mode' ? 'AUTO-PILOT' : 'STARTER'}
                    </div>
                  </div>

                  {/* Features with better spacing */}
                  <ul className="space-y-4 mb-8 text-left">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3 group/item">
                        <Check className={`w-5 h-5 mt-0.5 ${
                          plan.popular ? 'text-neon-green' : 'text-neon-cyan'
                        } group-hover/item:scale-110 transition-transform duration-200`} />
                        <span className="text-muted-foreground leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button with enhanced styling */}
                  <Button 
                    variant={plan.buttonVariant} 
                    size="lg" 
                    className="w-full group-hover:scale-105 transition-transform duration-300"
                  >
                    {plan.buttonText}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom note with gradient */}
        <div className="text-center mt-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-card via-card/95 to-card border border-border/50 rounded-full">
            <p className="text-sm text-muted-foreground font-medium">
              All plans include the same powerful AI engine. The difference is how much you want it working for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}