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
          <div className="space-y-6">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black leading-[1.05] tracking-tight">
              <span className="block text-foreground/95 animate-fade-in drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                Trade what's
              </span>
              <span className="block mt-3 relative animate-fade-in delay-75">
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent animate-pulse" style={{ 
                    textShadow: '0 0 40px rgba(0, 255, 255, 0.3), 0 0 80px rgba(180, 0, 255, 0.2)'
                  }}>
                    under the smoke
                  </span>
                  <div className="absolute -inset-2 bg-gradient-to-r from-neon-cyan/20 via-neon-purple/20 to-neon-pink/20 blur-3xl -z-10"></div>
                </span>
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-150">
              Get the data which actually moves this market
            </p>
          </div>

          {/* Feature highlights */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap animate-fade-in delay-200">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full blur-md opacity-0 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative flex items-center gap-2 px-5 py-2.5 bg-background/80 backdrop-blur-xl border border-neon-cyan/30 rounded-full hover:border-neon-cyan/60 transition-all">
                <Zap className="w-4 h-4 text-neon-cyan" />
                <span className="text-sm font-semibold text-foreground/90">Social data</span>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full blur-md opacity-0 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative flex items-center gap-2 px-5 py-2.5 bg-background/80 backdrop-blur-xl border border-neon-purple/30 rounded-full hover:border-neon-purple/60 transition-all">
                <Shield className="w-4 h-4 text-neon-purple" />
                <span className="text-sm font-semibold text-foreground/90">Risk Detection</span>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-green to-neon-cyan rounded-full blur-md opacity-0 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative flex items-center gap-2 px-5 py-2.5 bg-background/80 backdrop-blur-xl border border-neon-green/30 rounded-full hover:border-neon-green/60 transition-all">
                <TrendingUp className="w-4 h-4 text-neon-green" />
                <span className="text-sm font-semibold text-foreground/90">Smart Alerts</span>
              </div>
            </div>
          </div>

          {/* CA Input Section */}
          <div className="max-w-2xl mx-auto animate-fade-in delay-300">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-background/90 backdrop-blur-xl border-2 border-border/40 rounded-2xl p-2 shadow-2xl">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    placeholder="Paste contract address (CA)"
                    className="flex-1 h-14 px-5 bg-background/50 border border-border/20 rounded-xl text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-neon-cyan/50 focus:bg-background/70 transition-all"
                  />
                  <Button 
                    size="lg" 
                    onClick={() => navigate('/auth')}
                    className="relative h-14 px-8 text-base font-bold bg-gradient-to-r from-neon-cyan to-neon-purple text-background hover:from-neon-purple hover:to-neon-pink shadow-lg hover:shadow-neon-cyan/50 transition-all duration-300 whitespace-nowrap"
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                    Analyze
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats grid with enhanced design */}
          <div className="pt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="relative group animate-fade-in delay-300">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
              <div className="relative bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-xl border border-neon-cyan/20 rounded-3xl p-8 hover:border-neon-cyan/50 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                <div className="text-5xl sm:text-6xl font-black text-transparent bg-gradient-to-br from-neon-cyan to-neon-purple bg-clip-text mb-3 drop-shadow-[0_0_20px_rgba(0,255,255,0.4)]">
                  5K+
                </div>
                <div className="text-xs uppercase tracking-wider text-foreground/60 font-bold">
                  Coins Tracked Daily
                </div>
              </div>
            </div>
            
            <div className="relative group animate-fade-in delay-350">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
              <div className="relative bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-xl border border-neon-purple/20 rounded-3xl p-8 hover:border-neon-purple/50 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                <div className="text-5xl sm:text-6xl font-black text-transparent bg-gradient-to-br from-neon-purple to-neon-pink bg-clip-text mb-3 drop-shadow-[0_0_20px_rgba(180,0,255,0.4)]">
                  65%
                </div>
                <div className="text-xs uppercase tracking-wider text-foreground/60 font-bold">
                  Success Rate
                </div>
              </div>
            </div>
            
            <div className="relative group animate-fade-in delay-400">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-green/20 to-neon-cyan/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
              <div className="relative bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-xl border border-neon-green/20 rounded-3xl p-8 hover:border-neon-green/50 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                <div className="text-5xl sm:text-6xl font-black text-transparent bg-gradient-to-br from-neon-green to-neon-cyan bg-clip-text mb-3 drop-shadow-[0_0_20px_rgba(0,255,150,0.4)]">
                  &lt;4min
                </div>
                <div className="text-xs uppercase tracking-wider text-foreground/60 font-bold">
                  Average Analysis
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}