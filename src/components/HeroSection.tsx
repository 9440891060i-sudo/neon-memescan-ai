import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-terminal-dark"></div>
      
      {/* Subtle accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-neon-cyan/5 blur-[120px] rounded-full"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
        
        {/* Main headline */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted/50 border border-border/50 text-sm">
            <Sparkles className="w-3.5 h-3.5 text-neon-cyan" />
            <span className="text-muted-foreground">AI-Powered Meme Coin Intelligence</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
            Find the next
            <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-green bg-clip-text text-transparent">
                100x gem
              </span>
              <div className="absolute -inset-2 bg-gradient-to-r from-neon-purple/20 via-neon-cyan/20 to-neon-green/20 blur-xl"></div>
            </span>
            {" "}before
            <br />
            everyone else
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            AI analyzes thousands of meme coins in real-time, tracking social signals 
            and on-chain activity to spot opportunities early.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            onClick={() => navigate('/auth')}
            className="bg-foreground text-background hover:bg-foreground/90 h-14 px-8 text-base font-semibold group"
          >
            Start analyzing free
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => {
              document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="h-14 px-8 text-base font-semibold"
          >
            See how it works
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Social proof */}
        <div className="pt-8 space-y-4">
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-foreground">5,000+</span>
              <span>Coins tracked</span>
            </div>
            <div className="h-8 w-px bg-border"></div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-foreground">65%</span>
              <span>Success rate</span>
            </div>
            <div className="h-8 w-px bg-border"></div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-foreground">&lt;4min</span>
              <span>Analysis time</span>
            </div>
          </div>
        </div>

        {/* Coin ticker preview */}
        <div className="relative mt-16">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10"></div>
          <div className="flex gap-4 overflow-hidden">
            {['pepe', 'doge', 'shiba', 'bonk', 'floki', 'pepe', 'doge'].map((coin, i) => (
              <div 
                key={i}
                className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-border bg-muted overflow-hidden opacity-50 hover:opacity-100 transition-opacity"
              >
                <img 
                  src={`/src/assets/coins/${coin}.png`} 
                  alt={coin}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}