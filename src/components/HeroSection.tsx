import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Sparkles, TrendingUp, Zap, Shield, Play } from "lucide-react";
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

      {/* Content Container */}
      <div className="relative z-10 w-full">
        {/* Hero Content */}
        <div className="max-w-5xl mx-auto px-4 py-24">
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
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
                <span className="block text-foreground/90 animate-fade-in">
                  Trade what's
                </span>
                <span className="block mt-1 text-foreground/60 animate-fade-in delay-75">
                  under the smoke
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-foreground/50 max-w-lg mx-auto leading-relaxed animate-fade-in delay-150">
                Get the data which actually moves this market
              </p>
            </div>

            {/* Feature highlights */}
            <div className="flex items-center justify-center gap-6 flex-wrap animate-fade-in delay-200">
              <div className="flex items-center gap-2 text-sm text-foreground/60">
                <Zap className="w-3.5 h-3.5 text-neon-green" />
                <span>Social data</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/60">
                <Shield className="w-3.5 h-3.5 text-neon-green" />
                <span>Risk Detection</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/60">
                <TrendingUp className="w-3.5 h-3.5 text-neon-green" />
                <span>Smart Alerts</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-center gap-4 animate-fade-in delay-300">
              <Button 
                size="lg" 
                onClick={() => navigate('/auth')}
                className="h-12 px-8 text-sm font-semibold bg-foreground text-background hover:bg-foreground/90 transition-all rounded-xl shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Analyze Now
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="h-12 px-8 text-sm font-semibold bg-background/50 backdrop-blur-sm border-2 border-border/60 hover:bg-background/70 hover:border-foreground/40 transition-all rounded-xl shadow-lg hover:shadow-xl hover:scale-105"
              >
                Download Extension
              </Button>
            </div>
          </div>
        </div>

        {/* Video Section - Full Width */}
        <div className="w-full px-4 sm:px-6 lg:px-8 pb-24 -mt-8">
          <div className="max-w-[75%] mx-auto animate-fade-in delay-300">
            <Card className="relative overflow-hidden bg-gradient-card border-neon-green/30 hover:border-neon-green/50 transition-all duration-300 group cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-black/80 to-black/60 flex items-center justify-center">
                {/* Video Preview/Thumbnail Placeholder */}
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 rounded-full bg-neon-green/20 border-2 border-neon-green flex items-center justify-center group-hover:bg-neon-green/30 transition-all duration-300">
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 text-neon-green ml-1 group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground px-2">Click here to watch</p>
                </div>
                
                {/* Glow effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-neon-green/10 via-transparent to-neon-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}