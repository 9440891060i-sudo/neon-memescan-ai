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
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tighter leading-[1.1]">
              <span className="block text-foreground/95 drop-shadow-[0_0_40px_rgba(255,255,255,0.15)] animate-fade-in" style={{ letterSpacing: '-0.02em' }}>
                Trade what&apos;s
              </span>
              <span className="block relative mt-2">
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-green bg-clip-text text-transparent drop-shadow-[0_0_80px_rgba(0,255,255,0.4)] animate-fade-in delay-75" style={{ letterSpacing: '-0.03em' }}>
                    under the smoke
                  </span>
                  <div className="absolute -inset-4 bg-gradient-to-r from-neon-purple/30 via-neon-cyan/30 to-neon-green/30 blur-[80px] opacity-50"></div>
                </span>
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-150 font-light tracking-wide">
              Get the data which actually moves this market
            </p>
          </div>

          {/* Feature highlights */}
          <div className="flex items-center justify-center gap-6 sm:gap-8 flex-wrap animate-fade-in delay-200">
            <div className="group flex items-center gap-3 text-sm sm:text-base">
              <div className="relative">
                <div className="absolute inset-0 bg-neon-cyan/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative w-12 h-12 rounded-2xl bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center backdrop-blur-xl group-hover:border-neon-cyan/50 transition-all">
                  <Zap className="w-5 h-5 text-neon-cyan drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]" />
                </div>
              </div>
              <span className="font-semibold text-foreground/90 tracking-tight">Social data</span>
            </div>
            <div className="group flex items-center gap-3 text-sm sm:text-base">
              <div className="relative">
                <div className="absolute inset-0 bg-neon-purple/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative w-12 h-12 rounded-2xl bg-neon-purple/10 border border-neon-purple/30 flex items-center justify-center backdrop-blur-xl group-hover:border-neon-purple/50 transition-all">
                  <Shield className="w-5 h-5 text-neon-purple drop-shadow-[0_0_8px_rgba(180,0,255,0.6)]" />
                </div>
              </div>
              <span className="font-semibold text-foreground/90 tracking-tight">Risk Detection</span>
            </div>
            <div className="group flex items-center gap-3 text-sm sm:text-base">
              <div className="relative">
                <div className="absolute inset-0 bg-neon-green/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative w-12 h-12 rounded-2xl bg-neon-green/10 border border-neon-green/30 flex items-center justify-center backdrop-blur-xl group-hover:border-neon-green/50 transition-all">
                  <TrendingUp className="w-5 h-5 text-neon-green drop-shadow-[0_0_8px_rgba(0,255,150,0.6)]" />
                </div>
              </div>
              <span className="font-semibold text-foreground/90 tracking-tight">Smart Alerts</span>
            </div>
          </div>

          {/* CA Input Section */}
          <div className="max-w-2xl mx-auto animate-fade-in delay-300">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/30 via-neon-cyan/30 to-neon-green/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all opacity-60"></div>
              <div className="relative backdrop-blur-2xl bg-background/40 border border-border/40 rounded-3xl p-3 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    placeholder="Paste contract address (CA)"
                    className="flex-1 h-14 px-6 bg-background/60 border border-border/20 rounded-2xl text-base text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-neon-cyan/40 focus:border-neon-cyan/40 transition-all backdrop-blur-xl"
                  />
                  <Button 
                    size="lg" 
                    onClick={() => navigate('/auth')}
                    className="h-14 px-8 text-base font-bold bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-green text-background hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] shadow-lg transition-all duration-300 whitespace-nowrap hover:scale-[1.02] rounded-2xl"
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
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
              <div className="relative bg-background/30 backdrop-blur-2xl border border-border/30 rounded-3xl p-8 hover:border-neon-cyan/40 hover:bg-background/40 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                <div className="text-5xl sm:text-6xl font-black mb-2 bg-gradient-to-br from-neon-cyan via-neon-purple to-neon-cyan bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,255,255,0.3)]" style={{ letterSpacing: '-0.02em' }}>5K+</div>
                <div className="text-sm text-foreground/80 font-semibold tracking-wide">Coins Tracked Daily</div>
              </div>
            </div>
            
            <div className="relative group animate-fade-in delay-350">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-neon-green/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
              <div className="relative bg-background/30 backdrop-blur-2xl border border-border/30 rounded-3xl p-8 hover:border-neon-green/40 hover:bg-background/40 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                <div className="text-5xl sm:text-6xl font-black mb-2 bg-gradient-to-br from-neon-green via-neon-cyan to-neon-green bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,255,150,0.3)]" style={{ letterSpacing: '-0.02em' }}>65%</div>
                <div className="text-sm text-foreground/80 font-semibold tracking-wide">Success Rate</div>
              </div>
            </div>
            
            <div className="relative group animate-fade-in delay-400">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-green/20 to-neon-purple/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
              <div className="relative bg-background/30 backdrop-blur-2xl border border-border/30 rounded-3xl p-8 hover:border-neon-purple/40 hover:bg-background/40 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                <div className="text-5xl sm:text-6xl font-black mb-2 bg-gradient-to-br from-neon-purple via-neon-green to-neon-purple bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(180,0,255,0.3)]" style={{ letterSpacing: '-0.02em' }}>&lt;4min</div>
                <div className="text-sm text-foreground/80 font-semibold tracking-wide">Average Analysis</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}