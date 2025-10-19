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

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-32 h-32 bg-neon-cyan/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-[15%] w-40 h-40 bg-neon-purple/5 rounded-full blur-3xl animate-pulse delay-75"></div>
        <div className="absolute bottom-40 left-[20%] w-36 h-36 bg-neon-green/5 rounded-full blur-3xl animate-pulse delay-150"></div>
        <div className="absolute bottom-20 right-[25%] w-44 h-44 bg-neon-cyan/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-24">
        <div className="text-center space-y-8">
          
          {/* Top badge */}
          <div className="flex items-center justify-center animate-fade-in">
            <div className="px-6 py-2 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 text-sm font-medium text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              AI-Powered
            </div>
          </div>

          {/* Main headline */}
          <div className="space-y-5">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight">
              <span className="block text-foreground/90 animate-fade-in">
                Trade what's
              </span>
              <span className="block mt-1 text-foreground/70 animate-fade-in delay-75">
                under the smoke
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-foreground/50 max-w-xl mx-auto leading-relaxed animate-fade-in delay-150">
              Get the data which actually moves this market
            </p>
          </div>

          {/* Feature highlights */}
          <div className="flex items-center justify-center gap-8 flex-wrap animate-fade-in delay-200">
            <div className="flex items-center gap-2.5 text-sm text-foreground/60 hover:text-foreground/80 transition-colors">
              <Zap className="w-4 h-4" />
              <span className="font-medium">Social data</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-foreground/60 hover:text-foreground/80 transition-colors">
              <Shield className="w-4 h-4" />
              <span className="font-medium">Risk Detection</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-foreground/60 hover:text-foreground/80 transition-colors">
              <TrendingUp className="w-4 h-4" />
              <span className="font-medium">Smart Alerts</span>
            </div>
          </div>

          {/* CA Input Section */}
          <div className="max-w-2xl mx-auto animate-fade-in delay-300">
            <div className="bg-background/60 backdrop-blur-lg border border-border/50 rounded-2xl p-2 shadow-xl">
              <div className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="text"
                  placeholder="Paste contract address (CA)"
                  className="flex-1 h-12 px-5 bg-transparent border-0 rounded-xl text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:bg-background/30 transition-all"
                />
                <Button 
                  size="lg" 
                  onClick={() => navigate('/auth')}
                  className="h-12 px-7 text-sm font-semibold bg-foreground text-background hover:bg-foreground/90 transition-all whitespace-nowrap rounded-xl"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Analyze
                </Button>
              </div>
            </div>
          </div>

          {/* Stats grid with enhanced design */}
          <div className="pt-14 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            <div className="animate-fade-in delay-300 p-7 bg-background/50 backdrop-blur-sm border border-border/40 rounded-2xl hover:bg-background/70 hover:border-border/60 transition-all">
              <div className="text-4xl font-bold text-foreground/90 mb-2">5K+</div>
              <div className="text-xs text-foreground/50 font-medium">Coins Tracked Daily</div>
            </div>
            
            <div className="animate-fade-in delay-350 p-7 bg-background/50 backdrop-blur-sm border border-border/40 rounded-2xl hover:bg-background/70 hover:border-border/60 transition-all">
              <div className="text-4xl font-bold text-foreground/90 mb-2">65%</div>
              <div className="text-xs text-foreground/50 font-medium">Success Rate</div>
            </div>
            
            <div className="animate-fade-in delay-400 p-7 bg-background/50 backdrop-blur-sm border border-border/40 rounded-2xl hover:bg-background/70 hover:border-border/60 transition-all">
              <div className="text-4xl font-bold text-foreground/90 mb-2">&lt;4min</div>
              <div className="text-xs text-foreground/50 font-medium">Average Analysis</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}