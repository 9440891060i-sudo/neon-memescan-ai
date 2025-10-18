import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, TrendingUp, Zap, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Aurora from "./Aurora";

export default function HeroSection() {
  const navigate = useNavigate();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Aurora Background */}
      <Aurora 
        colorStops={['#FFFFFF', '#D4D4D4', '#A3A3A3']}
        amplitude={0.8}
        blend={0.9}
        speed={0.4}
      />
      
      {/* Subtle overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-32">
        <div className="text-center space-y-12">
          
          {/* Main headline */}
          <div className="space-y-6">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight leading-tight">
              <span className="block text-foreground drop-shadow-2xl">Trade what&apos;s</span>
              <span className="block mt-2 bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-green bg-clip-text text-transparent drop-shadow-2xl">
                under the smoke
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Get the data which actually moves this market
            </p>
          </div>

          {/* CA Input Section */}
          <div className="max-w-2xl mx-auto">
            <div className="relative backdrop-blur-xl bg-background/60 border-2 border-border/50 rounded-2xl p-3 shadow-2xl">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Paste contract address (CA)"
                  className="flex-1 h-14 px-6 bg-background/80 border border-border/30 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 transition-all"
                />
                <Button 
                  size="lg" 
                  onClick={() => navigate('/auth')}
                  className="h-14 px-8 font-semibold bg-foreground text-background hover:bg-foreground/90 shadow-lg transition-all duration-300 whitespace-nowrap"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Analyze
                </Button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="pt-12 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-foreground drop-shadow-lg">5K+</div>
              <div className="text-sm text-foreground/70">Coins Tracked</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-4xl font-bold text-foreground drop-shadow-lg">65%</div>
              <div className="text-sm text-foreground/70">Success Rate</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-4xl font-bold text-foreground drop-shadow-lg">&lt;4min</div>
              <div className="text-sm text-foreground/70">Avg. Analysis</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}