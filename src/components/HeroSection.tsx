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
          <div className="space-y-8">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.95] tracking-tight">
              <span className="block text-foreground animate-fade-in" style={{ fontWeight: 900 }}>
                Trade what's
              </span>
              <span className="block mt-2 bg-gradient-to-br from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent animate-fade-in delay-75" style={{ fontWeight: 900 }}>
                under the smoke
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-foreground/60 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-150 font-light">
              Get the data which actually moves this market
            </p>
          </div>

          {/* Feature highlights */}
          <div className="flex items-center justify-center gap-8 sm:gap-12 flex-wrap animate-fade-in delay-200">
            <div className="flex items-center gap-2.5 group cursor-default">
              <div className="w-2 h-2 rounded-full bg-foreground/80 group-hover:bg-foreground transition-colors"></div>
              <span className="text-base sm:text-lg text-foreground/70 group-hover:text-foreground transition-colors font-medium">Social data</span>
            </div>
            <div className="flex items-center gap-2.5 group cursor-default">
              <div className="w-2 h-2 rounded-full bg-foreground/80 group-hover:bg-foreground transition-colors"></div>
              <span className="text-base sm:text-lg text-foreground/70 group-hover:text-foreground transition-colors font-medium">Risk Detection</span>
            </div>
            <div className="flex items-center gap-2.5 group cursor-default">
              <div className="w-2 h-2 rounded-full bg-foreground/80 group-hover:bg-foreground transition-colors"></div>
              <span className="text-base sm:text-lg text-foreground/70 group-hover:text-foreground transition-colors font-medium">Smart Alerts</span>
            </div>
          </div>

          {/* CA Input Section */}
          <div className="max-w-3xl mx-auto animate-fade-in delay-300">
            <div className="relative">
              <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl p-1.5 shadow-2xl">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    placeholder="Paste contract address (CA)"
                    className="flex-1 h-16 px-6 bg-background/50 border-0 rounded-lg text-base text-foreground placeholder:text-foreground/40 focus:outline-none focus:bg-background/70 transition-all"
                  />
                  <Button 
                    size="lg" 
                    onClick={() => navigate('/auth')}
                    className="h-16 px-8 text-base font-bold bg-foreground text-background hover:bg-foreground/90 transition-all duration-200 whitespace-nowrap rounded-lg"
                  >
                    Analyze
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats grid with enhanced design */}
          <div className="pt-20 grid grid-cols-1 sm:grid-cols-3 gap-1 max-w-4xl mx-auto">
            <div className="group animate-fade-in delay-300 p-10 bg-background/60 backdrop-blur-sm border-r border-border/30 hover:bg-background/80 transition-all">
              <div className="text-6xl sm:text-7xl font-black mb-3 text-foreground group-hover:scale-105 transition-transform" style={{ fontWeight: 900, letterSpacing: '-0.04em' }}>
                5K+
              </div>
              <div className="text-sm text-foreground/50 uppercase tracking-widest font-semibold">
                Coins Tracked Daily
              </div>
            </div>
            
            <div className="group animate-fade-in delay-350 p-10 bg-background/60 backdrop-blur-sm border-r border-border/30 hover:bg-background/80 transition-all">
              <div className="text-6xl sm:text-7xl font-black mb-3 text-foreground group-hover:scale-105 transition-transform" style={{ fontWeight: 900, letterSpacing: '-0.04em' }}>
                65%
              </div>
              <div className="text-sm text-foreground/50 uppercase tracking-widest font-semibold">
                Success Rate
              </div>
            </div>
            
            <div className="group animate-fade-in delay-400 p-10 bg-background/60 backdrop-blur-sm hover:bg-background/80 transition-all">
              <div className="text-6xl sm:text-7xl font-black mb-3 text-foreground group-hover:scale-105 transition-transform" style={{ fontWeight: 900, letterSpacing: '-0.04em' }}>
                &lt;4min
              </div>
              <div className="text-sm text-foreground/50 uppercase tracking-widest font-semibold">
                Average Analysis
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}