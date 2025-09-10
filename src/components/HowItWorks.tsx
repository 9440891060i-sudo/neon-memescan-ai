import { Card } from "@/components/ui/card";
import { Search, Brain, FileText } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Enter Coin",
    description: "Paste any meme coin contract address",
    color: "neon-green"
  },
  {
    icon: Brain,
    title: "AI Scans",
    description: "Our AI analyzes social + technical data",
    color: "neon-cyan"
  },
  {
    icon: FileText,
    title: "Instant Report",
    description: "Get detailed predictions in seconds",
    color: "neon-purple"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-black/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How <span className="text-neon-green">Klux</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to predict the next meme coin moon shot
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index} 
                className={`p-8 bg-gradient-card border-${step.color}/30 hover:shadow-${step.color} transition-all duration-300 text-center relative overflow-hidden group`}
              >
                {/* Background glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${step.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Step number */}
                <div className={`absolute top-4 right-4 w-8 h-8 rounded-full bg-${step.color}/20 flex items-center justify-center text-sm font-bold text-${step.color}`}>
                  {index + 1}
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-${step.color}/20 flex items-center justify-center`}>
                    <Icon className={`w-8 h-8 text-${step.color}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>

                {/* Connector line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-border to-transparent"></div>
                )}
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-card rounded-full border border-neon-green/30">
            <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">
              Average analysis time: <span className="text-neon-green font-semibold">4 minutes</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}