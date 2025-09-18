import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Rocket, TrendingUp, Search } from "lucide-react";
import heroImage from "@/assets/ai-dashboard-hero.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-start pt-8 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="AI Dashboard" 
          className="w-full h-full object-fill opacity-20"
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
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <div className="mb-6 sm:mb-8 relative">
            {/* Decorative neon dots around Klux - mobile responsive */}
            <div className="hidden sm:block absolute -top-4 -left-12 w-1.5 h-1.5 bg-neon-green rounded-full animate-pulse shadow-neon-green"></div>
            <div className="hidden sm:block absolute -top-8 left-8 w-1 h-1 bg-neon-cyan rounded-full animate-pulse shadow-neon-cyan"></div>
            <div className="hidden sm:block absolute -top-6 right-4 w-2 h-2 bg-neon-purple rounded-full animate-pulse shadow-neon-purple"></div>
            <div className="hidden sm:block absolute -top-2 -right-8 w-1 h-1 bg-neon-green rounded-full animate-pulse shadow-neon-green"></div>
            <div className="hidden sm:block absolute top-4 -left-16 w-1 h-1 bg-neon-cyan rounded-full animate-pulse shadow-neon-cyan"></div>
            <div className="hidden sm:block absolute top-8 right-12 w-1.5 h-1.5 bg-neon-purple rounded-full animate-pulse shadow-neon-purple"></div>
            <div className="hidden sm:block absolute -bottom-4 -left-8 w-1 h-1 bg-neon-green rounded-full animate-pulse shadow-neon-green"></div>
            <div className="hidden sm:block absolute -bottom-2 right-16 w-2 h-2 bg-neon-cyan rounded-full animate-pulse shadow-neon-cyan"></div>
            
            {/* Mobile-friendly dots */}
            <div className="sm:hidden absolute -top-2 -left-4 w-1 h-1 bg-neon-green rounded-full animate-pulse"></div>
            <div className="sm:hidden absolute -top-3 right-6 w-1.5 h-1.5 bg-neon-cyan rounded-full animate-pulse"></div>
            <div className="sm:hidden absolute -bottom-2 -right-4 w-1 h-1 bg-neon-purple rounded-full animate-pulse"></div>
            <div className="sm:hidden absolute -bottom-1 left-8 w-1 h-1 bg-neon-green rounded-full animate-pulse"></div>
            
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4">
              <span className="text-neon-green">K</span>
              <span className="text-foreground">LU</span>
              <span className="text-neon-cyan">X</span>
            </h1>
            <div className="w-16 sm:w-24 h-0.5 bg-gradient-neon mx-auto"></div>
          </div>

          {/* Tagline */}
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 sm:mb-6 text-foreground px-2">
            AI That Reads Meme Coins Before They Moon{" "}
            <Rocket className="inline-block w-6 h-6 sm:w-8 sm:h-8 text-neon-green ml-1 sm:ml-2" />
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
            Advanced AI analysis combining social sentiment and technical indicators 
            to predict meme coin movements before the market catches on.
          </p>

          {/* Token Entry - Mobile Optimized */}
          <div className="max-w-2xl mx-auto mb-8 sm:mb-12 px-2">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 p-3 sm:p-2 bg-gradient-card rounded-2xl border border-border neon-glow-green">
              <Input 
                placeholder="Paste token contract address..." 
                className="flex-1 bg-transparent border-0 text-base sm:text-lg placeholder:text-muted-foreground focus-visible:ring-0 min-h-[44px]"
              />
              <Button variant="analyze" size="lg" className="px-6 sm:px-8 min-h-[44px] whitespace-nowrap">
                <Search className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Analyze (Free)
              </Button>
            </div>
          </div>

          {/* Quick stats - Mobile Optimized */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-sm sm:max-w-lg mx-auto px-2">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-neon-green">65%</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-neon-cyan">4m</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Analysis</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-neon-purple">5,000</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Coins Tracked</div>
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