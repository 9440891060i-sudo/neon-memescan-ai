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
        colorStops={['#FFFFFF', '#F5F5F5', '#E8E8E8']}
        amplitude={1.5}
        blend={1.2}
        speed={0.7}
      />
      
      {/* Lighter overlay for better smoke visibility */}
      <div className="absolute inset-0 bg-background/50"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-2 h-2 bg-neon-cyan/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-[15%] w-3 h-3 bg-neon-purple/20 rounded-full animate-pulse delay-75"></div>
        <div className="absolute bottom-40 left-[20%] w-2 h-2 bg-neon-green/25 rounded-full animate-pulse delay-150"></div>
        <div className="absolute bottom-20 right-[25%] w-3 h-3 bg-neon-cyan/20 rounded-full animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        <div className="text-center space-y-8">
          
          {/* Top badges */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium backdrop-blur-xl bg-background/60 border border-border/50">
              <Sparkles className="w-4 h-4 mr-2 text-neon-cyan" />
              AI-Powered Analysis
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium backdrop-blur-xl bg-background/60 border border-border/50">
              <TrendingUp className="w-4 h-4 mr-2 text-neon-green" />
              Real-time Tracking
            </Badge>
          </div>

          {/* Main headline with better hierarchy */}
          <div className="space-y-6">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.95]">
              <span className="block text-foreground">Discover</span>
              <span className="block relative mt-2">
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-green bg-clip-text text-transparent">
                    The Glare
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/30 via-neon-cyan/30 to-neon-green/30 blur-2xl"></div>
                </span>
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              Uncover hidden gems before they moon. AI-powered intelligence for the next generation of meme coin investors.
            </p>
          </div>

          {/* Feature highlights */}
          <div className="flex items-center justify-center gap-6 sm:gap-8 flex-wrap pt-4">
            <div className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground">
              <div className="w-8 h-8 rounded-full bg-neon-cyan/10 flex items-center justify-center">
                <Zap className="w-4 h-4 text-neon-cyan" />
              </div>
              <span className="font-medium">Instant Analysis</span>
            </div>
            <div className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground">
              <div className="w-8 h-8 rounded-full bg-neon-purple/10 flex items-center justify-center">
                <Shield className="w-4 h-4 text-neon-purple" />
              </div>
              <span className="font-medium">Risk Detection</span>
            </div>
            <div className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground">
              <div className="w-8 h-8 rounded-full bg-neon-green/10 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-neon-green" />
              </div>
              <span className="font-medium">Smart Alerts</span>
            </div>
          </div>

          {/* CTA Section */}
          <div className="pt-8 space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                onClick={() => navigate('/auth')}
                className="h-16 px-10 text-lg font-bold bg-foreground text-background hover:bg-foreground/90 shadow-2xl hover:shadow-neon-cyan/20 transition-all duration-300 hover:scale-105"
              >
                Start Free Analysis
                <Sparkles className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => {
                  document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="h-16 px-10 text-lg font-bold bg-background/50 backdrop-blur-xl border-2 border-border hover:bg-background/70 hover:border-foreground/20 transition-all duration-300"
              >
                Learn More
              </Button>
            </div>

            {/* Trust indicators */}
            <p className="text-sm text-muted-foreground">
              Join <span className="text-foreground font-semibold">10,000+ traders</span> finding gems daily
            </p>
          </div>

          {/* Stats grid */}
          <div className="pt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/10 to-neon-cyan/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-background/60 backdrop-blur-xl border border-border/50 rounded-2xl p-6 hover:border-neon-cyan/50 transition-all">
                <div className="text-4xl sm:text-5xl font-black text-foreground mb-2">5K+</div>
                <div className="text-sm text-muted-foreground font-medium">Coins Tracked Daily</div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 to-neon-green/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-background/60 backdrop-blur-xl border border-border/50 rounded-2xl p-6 hover:border-neon-green/50 transition-all">
                <div className="text-4xl sm:text-5xl font-black text-foreground mb-2">65%</div>
                <div className="text-sm text-muted-foreground font-medium">Success Rate</div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-green/10 to-neon-purple/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-background/60 backdrop-blur-xl border border-border/50 rounded-2xl p-6 hover:border-neon-purple/50 transition-all">
                <div className="text-4xl sm:text-5xl font-black text-foreground mb-2">&lt;4min</div>
                <div className="text-sm text-muted-foreground font-medium">Average Analysis</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}