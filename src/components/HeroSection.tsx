import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Rocket, TrendingUp, Search } from "lucide-react";
import heroImage from "@/assets/ai-dashboard-hero.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="AI Dashboard" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-dark opacity-80"></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-neon-cyan rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-neon-purple rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <div className="mb-8 relative">
            {/* Decorative neon dots around Klux */}
            <div className="absolute -top-4 -left-12 w-1.5 h-1.5 bg-neon-green rounded-full animate-pulse shadow-neon-green"></div>
            <div className="absolute -top-8 left-8 w-1 h-1 bg-neon-cyan rounded-full animate-pulse shadow-neon-cyan"></div>
            <div className="absolute -top-6 right-4 w-2 h-2 bg-neon-purple rounded-full animate-pulse shadow-neon-purple"></div>
            <div className="absolute -top-2 -right-8 w-1 h-1 bg-neon-green rounded-full animate-pulse shadow-neon-green"></div>
            <div className="absolute top-4 -left-16 w-1 h-1 bg-neon-cyan rounded-full animate-pulse shadow-neon-cyan"></div>
            <div className="absolute top-8 right-12 w-1.5 h-1.5 bg-neon-purple rounded-full animate-pulse shadow-neon-purple"></div>
            <div className="absolute -bottom-4 -left-8 w-1 h-1 bg-neon-green rounded-full animate-pulse shadow-neon-green"></div>
            <div className="absolute -bottom-2 right-16 w-2 h-2 bg-neon-cyan rounded-full animate-pulse shadow-neon-cyan"></div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              <span className="text-neon-green">K</span>
              <span className="text-foreground">LU</span>
              <span className="text-neon-cyan">X</span>
            </h1>
            <div className="w-24 h-0.5 bg-gradient-neon mx-auto"></div>
          </div>

          {/* Tagline */}
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-foreground">
            AI That Reads Meme Coins Before They Moon{" "}
            <Rocket className="inline-block w-8 h-8 text-neon-green ml-2" />
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Advanced AI analysis combining social sentiment and technical indicators 
            to predict meme coin movements before the market catches on.
          </p>

          {/* Token Entry */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex gap-4 p-2 bg-gradient-card rounded-2xl border border-border neon-glow-green">
              <Input 
                placeholder="Paste token contract address..." 
                className="flex-1 bg-transparent border-0 text-lg placeholder:text-muted-foreground focus-visible:ring-0"
              />
              <Button variant="analyze" size="lg" className="px-8">
                <Search className="w-5 h-5 mr-2" />
                Analyze (30 Credits)
              </Button>
            </div>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-neon-green">65%</div>
              <div className="text-sm text-muted-foreground">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-neon-cyan">4m</div>
              <div className="text-sm text-muted-foreground">Analysis</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-neon-purple">5,000</div>
              <div className="text-sm text-muted-foreground">Coins Tracked</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <TrendingUp className="w-6 h-6 text-neon-green" />
      </div>
    </section>
  );
}