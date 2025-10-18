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
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-32">
        <div className="text-center space-y-12">
          
          {/* Top badges */}
          <div className="flex items-center justify-center gap-3 flex-wrap animate-fade-in">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium backdrop-blur-xl bg-background/40 border border-neon-cyan/30 hover:border-neon-cyan/50 transition-all">
              <Sparkles className="w-4 h-4 mr-2 text-neon-cyan" />
              AI-Powered
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium backdrop-blur-xl bg-background/40 border border-neon-green/30 hover:border-neon-green/50 transition-all">
              <TrendingUp className="w-4 h-4 mr-2 text-neon-green" />
              Real-time Data
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium backdrop-blur-xl bg-background/40 border border-neon-purple/30 hover:border-neon-purple/50 transition-all">
              <Shield className="w-4 h-4 mr-2 text-neon-purple" />
              Risk Analysis
            </Badge>
          </div>

          {/* Main headline */}
          <div className="space-y-6">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.95]">
              <span className="block text-foreground drop-shadow-2xl animate-fade-in">Trade what&apos;s</span>
              <span className="block relative mt-2">
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-green bg-clip-text text-transparent drop-shadow-2xl animate-fade-in delay-75">
                    under the smoke
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 via-neon-cyan/20 to-neon-green/20 blur-3xl"></div>
                </span>
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-foreground/70 max-w-2xl mx-auto leading-relaxed font-light animate-fade-in delay-150">
              Get the data which actually moves this market
            </p>
          </div>

          {/* Feature highlights */}
          <div className="flex items-center justify-center gap-6 sm:gap-8 flex-wrap animate-fade-in delay-200">
            <div className="flex items-center gap-2 text-sm sm:text-base text-foreground/80">
              <div className="w-10 h-10 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center backdrop-blur-xl">
                <Zap className="w-5 h-5 text-neon-cyan" />
              </div>
              <span className="font-medium">Instant Analysis</span>
            </div>
            <div className="flex items-center gap-2 text-sm sm:text-base text-foreground/80">
              <div className="w-10 h-10 rounded-full bg-neon-purple/10 border border-neon-purple/20 flex items-center justify-center backdrop-blur-xl">
                <Shield className="w-5 h-5 text-neon-purple" />
              </div>
              <span className="font-medium">Risk Detection</span>
            </div>
            <div className="flex items-center gap-2 text-sm sm:text-base text-foreground/80">
              <div className="w-10 h-10 rounded-full bg-neon-green/10 border border-neon-green/20 flex items-center justify-center backdrop-blur-xl">
                <TrendingUp className="w-5 h-5 text-neon-green" />
              </div>
              <span className="font-medium">Smart Alerts</span>
            </div>
          </div>

          {/* CA Input Section */}
          <div className="max-w-2xl mx-auto animate-fade-in delay-300">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 via-neon-cyan/20 to-neon-green/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
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
                    className="h-14 px-8 font-semibold bg-foreground text-background hover:bg-foreground/90 shadow-lg transition-all duration-300 whitespace-nowrap hover:scale-105"
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                    Analyze
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Trust indicator */}
            <p className="text-sm text-foreground/60 mt-4">
              Join <span className="text-foreground font-semibold">10,000+ traders</span> finding gems daily
            </p>
          </div>

          {/* Stats grid with enhanced design */}
          <div className="pt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="relative group animate-fade-in delay-300">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/10 to-neon-cyan/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-background/60 backdrop-blur-xl border border-border/40 rounded-2xl p-6 hover:border-neon-cyan/50 transition-all">
                <div className="text-5xl font-black text-foreground mb-2 bg-gradient-to-br from-neon-cyan to-neon-purple bg-clip-text text-transparent">5K+</div>
                <div className="text-sm text-foreground/70 font-medium">Coins Tracked Daily</div>
              </div>
            </div>
            
            <div className="relative group animate-fade-in delay-350">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 to-neon-green/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-background/60 backdrop-blur-xl border border-border/40 rounded-2xl p-6 hover:border-neon-green/50 transition-all">
                <div className="text-5xl font-black text-foreground mb-2 bg-gradient-to-br from-neon-green to-neon-cyan bg-clip-text text-transparent">65%</div>
                <div className="text-sm text-foreground/70 font-medium">Success Rate</div>
              </div>
            </div>
            
            <div className="relative group animate-fade-in delay-400">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-green/10 to-neon-purple/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-background/60 backdrop-blur-xl border border-border/40 rounded-2xl p-6 hover:border-neon-purple/50 transition-all">
                <div className="text-5xl font-black text-foreground mb-2 bg-gradient-to-br from-neon-purple to-neon-green bg-clip-text text-transparent">&lt;4min</div>
                <div className="text-sm text-foreground/70 font-medium">Average Analysis</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}