import { Card } from "@/components/ui/card";
import { Search, Brain, FileText, ArrowRight, TrendingUp, Zap } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    icon: Search,
    title: "Enter Coin",
    description: "Paste any meme coin contract address",
    color: "neon-green",
    demo: "0x1234...abcd",
    detail: "Simply paste any Solana or Ethereum meme coin contract address"
  },
  {
    icon: Brain,
    title: "AI Scans",
    description: "Our AI analyzes social + technical data",
    color: "neon-cyan",
    demo: "Analyzing...",
    detail: "Advanced AI processes social sentiment, holder patterns, and technical indicators"
  },
  {
    icon: FileText,
    title: "Instant Report",
    description: "Get detailed predictions in seconds",
    color: "neon-purple",
    demo: "Moon Score: 8.5/10",
    detail: "Receive comprehensive analysis with actionable insights and risk assessment"
  }
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
  };

  const playDemo = () => {
    setIsPlaying(true);
    setActiveStep(0);
    
    const timer1 = setTimeout(() => setActiveStep(1), 1000);
    const timer2 = setTimeout(() => setActiveStep(2), 2500);
    const timer3 = setTimeout(() => {
      setIsPlaying(false);
      setActiveStep(0);
    }, 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-black/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How <span className="text-neon-green">Klux</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Three simple steps to predict the next meme coin moon shot
          </p>
          
          {/* Interactive Demo Button */}
          <button
            onClick={playDemo}
            disabled={isPlaying}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-green/20 to-neon-cyan/20 rounded-full border border-neon-green/30 hover:border-neon-green/50 transition-all duration-300 group disabled:opacity-50"
          >
            <Zap className="w-4 h-4 text-neon-green group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">
              {isPlaying ? "Demo Running..." : "Watch Demo"}
            </span>
          </button>
        </div>

        {/* Interactive Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === index;
            const isCompleted = !isPlaying && activeStep > index;
            
            return (
              <Card 
                key={index} 
                onClick={() => !isPlaying && handleStepClick(index)}
                className={`p-8 bg-gradient-card transition-all duration-500 text-center relative overflow-hidden cursor-pointer group
                  ${isActive ? `border-${step.color} shadow-lg shadow-${step.color}/20 scale-105` : `border-${step.color}/30 hover:border-${step.color}/50`}
                  ${isCompleted ? 'border-green-500/50' : ''}
                `}
              >
                {/* Animated background glow */}
                <div className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-500
                  ${isActive ? `from-${step.color}/10 to-transparent opacity-100` : `from-${step.color}/5 to-transparent opacity-0 group-hover:opacity-100`}
                `}></div>
                
                {/* Step number with animation */}
                <div className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300
                  ${isActive ? `bg-${step.color} text-black animate-pulse` : isCompleted ? 'bg-green-500 text-black' : `bg-${step.color}/20 text-${step.color}`}
                `}>
                  {isCompleted ? '✓' : index + 1}
                </div>

                <div className="relative z-10">
                  {/* Animated Icon */}
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-500
                    ${isActive ? `bg-${step.color}/30 scale-110` : `bg-${step.color}/20`}
                  `}>
                    <Icon className={`w-8 h-8 transition-all duration-300
                      ${isActive ? `text-${step.color} scale-110` : `text-${step.color}`}
                    `} />
                  </div>

                  {/* Content with demo preview */}
                  <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                  
                  {/* Interactive demo display */}
                  {isActive && (
                    <div className={`mb-4 p-3 bg-${step.color}/10 rounded-lg border border-${step.color}/30 animate-fade-in`}>
                      <div className={`font-mono text-sm text-${step.color}`}>
                        {step.demo}
                      </div>
                    </div>
                  )}
                  
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    {isActive ? step.detail : step.description}
                  </p>
                </div>

                {/* Animated connector arrows */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 z-20">
                    <ArrowRight className={`w-6 h-6 transition-all duration-300
                      ${isActive || activeStep > index ? 'text-neon-green animate-pulse' : 'text-border'}
                    `} />
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        {/* Enhanced Stats with animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
          {[
            { label: "Processing Speed", value: "4min", icon: Zap, color: "neon-purple" },
            { label: "Accuracy Rate", value: "65%", icon: TrendingUp, color: "neon-cyan" },
            { label: "Coins Tracked", value: "5,000", icon: Search, color: "neon-green" }
          ].map((stat, index) => (
            <div key={index} className={`text-center p-6 bg-gradient-card rounded-lg border border-${stat.color}/30 group hover:border-${stat.color}/50 transition-all duration-300`}>
              <stat.icon className={`w-8 h-8 text-${stat.color} mx-auto mb-3 group-hover:scale-110 transition-transform`} />
              <div className={`text-2xl font-bold text-${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-card rounded-full border border-neon-green/30">
            <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">
              Ready to analyze your next moon shot?
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}