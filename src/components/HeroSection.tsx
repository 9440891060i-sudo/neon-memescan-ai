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
            <div className="px-4 py-2 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 text-sm font-medium text-white">
              AI-Powered
            </div>
          </div>

          {/* Main headline */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-tight">
              <span className="block text-foreground drop-shadow-2xl animate-fade-in">Trade what&apos;s</span>
              <span className="block relative mt-1">
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-green bg-clip-text text-transparent drop-shadow-2xl animate-fade-in delay-75">
                    under the smoke
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 via-neon-cyan/20 to-neon-green/20 blur-3xl"></div>
                </span>
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-foreground/70 max-w-xl mx-auto leading-relaxed animate-fade-in delay-150">
              Get the data which actually moves this market
            </p>
          </div>

          {/* Feature highlights */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap animate-fade-in delay-200">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/80">
              <div className="w-8 h-8 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center backdrop-blur-xl">
                <Zap className="w-4 h-4 text-neon-cyan" />
              </div>
              <span className="font-medium">Instant Analysis</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/80">
              <div className="w-8 h-8 rounded-full bg-neon-purple/10 border border-neon-purple/20 flex items-center justify-center backdrop-blur-xl">
                <Shield className="w-4 h-4 text-neon-purple" />
              </div>
              <span className="font-medium">Risk Detection</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/80">
              <div className="w-8 h-8 rounded-full bg-neon-green/10 border border-neon-green/20 flex items-center justify-center backdrop-blur-xl">
                <TrendingUp className="w-4 h-4 text-neon-green" />
              </div>
              <span className="font-medium">Smart Alerts</span>
            </div>
          </div>

          {/* CA Input Section */}
          <div className="max-w-xl mx-auto animate-fade-in delay-300">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 via-neon-cyan/20 to-neon-green/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative backdrop-blur-xl bg-background/60 border-2 border-border/50 rounded-2xl p-2 shadow-2xl">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    placeholder="Paste contract address (CA)"
                    className="flex-1 h-12 px-4 bg-background/80 border border-border/30 rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 transition-all"
                  />
                  <Button 
                    size="lg" 
                    onClick={() => navigate('/auth')}
                    className="h-12 px-6 text-sm font-semibold bg-foreground text-background hover:bg-foreground/90 shadow-lg transition-all duration-300 whitespace-nowrap hover:scale-105"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Analyze
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Trust indicator */}
            <p className="text-xs text-foreground/60 mt-3">
              Join <span className="text-foreground font-semibold">10,000+ traders</span> finding gems daily
            </p>
          </div>

          {/* Stats grid with enhanced design */}
          <div className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="relative group animate-fade-in delay-300">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/10 to-neon-cyan/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-background/60 backdrop-blur-xl border border-border/40 rounded-2xl p-5 hover:border-neon-cyan/50 transition-all">
                <div className="text-3xl sm:text-4xl font-black text-foreground mb-1 bg-gradient-to-br from-neon-cyan to-neon-purple bg-clip-text text-transparent">5K+</div>
                <div className="text-xs text-foreground/70 font-medium">Coins Tracked Daily</div>
              </div>
            </div>
            
            <div className="relative group animate-fade-in delay-350">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 to-neon-green/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-background/60 backdrop-blur-xl border border-border/40 rounded-2xl p-5 hover:border-neon-green/50 transition-all">
                <div className="text-3xl sm:text-4xl font-black text-foreground mb-1 bg-gradient-to-br from-neon-green to-neon-cyan bg-clip-text text-transparent">65%</div>
                <div className="text-xs text-foreground/70 font-medium">Success Rate</div>
              </div>
            </div>
            
            <div className="relative group animate-fade-in delay-400">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-green/10 to-neon-purple/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-background/60 backdrop-blur-xl border border-border/40 rounded-2xl p-5 hover:border-neon-purple/50 transition-all">
                <div className="text-3xl sm:text-4xl font-black text-foreground mb-1 bg-gradient-to-br from-neon-purple to-neon-green bg-clip-text text-transparent">&lt;4min</div>
                <div className="text-xs text-foreground/70 font-medium">Average Analysis</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}