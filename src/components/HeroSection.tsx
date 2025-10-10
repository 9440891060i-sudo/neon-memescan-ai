import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Rocket, TrendingUp, Search, Zap, Brain, Target } from "lucide-react";
import heroImage from "@/assets/ai-dashboard-hero.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-terminal-darker">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-terminal-dark via-terminal-darker to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple/5 via-transparent to-neon-cyan/5"></div>
      
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(hsl(var(--neon-cyan)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--neon-cyan)) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-purple/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-neon-green/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Main CTA */}
            <div className="text-left space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/5">
                <Zap className="w-4 h-4 text-neon-cyan" />
                <span className="text-sm font-medium text-neon-cyan">AI-Powered Analysis</span>
              </div>

              {/* Logo */}
              <div>
                <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold mb-4 leading-none">
                  <span className="text-neon-green drop-shadow-[0_0_20px_hsl(var(--neon-green))]">K</span>
                  <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">LU</span>
                  <span className="text-neon-cyan drop-shadow-[0_0_20px_hsl(var(--neon-cyan))]">X</span>
                </h1>
                <div className="flex items-center gap-3">
                  <div className="w-20 h-0.5 bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-green"></div>
                  <span className="text-sm text-muted-foreground uppercase tracking-wider">Intelligence Platform</span>
                </div>
              </div>

              {/* Tagline */}
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                  Predict Meme Coin 
                  <span className="block mt-2 bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-green bg-clip-text text-transparent">
                    Pumps Before They Happen
                  </span>
                </h2>
                
                <p className="text-lg text-muted-foreground max-w-xl">
                  Advanced AI analyzes social sentiment, on-chain data, and market patterns 
                  to identify opportunities before they moon.
                </p>
              </div>

              {/* CTA Input */}
              <div className="space-y-4">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-green rounded-2xl opacity-30 group-hover:opacity-50 blur transition"></div>
                  <div className="relative flex flex-col sm:flex-row gap-3 p-2 bg-terminal-dark rounded-2xl">
                    <Input 
                      placeholder="Paste contract address or token symbol..." 
                      className="flex-1 bg-terminal-darker border-border/50 text-base placeholder:text-muted-foreground min-h-[50px] focus-visible:ring-neon-cyan"
                    />
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-neon-purple to-neon-cyan hover:opacity-90 min-h-[50px] px-8 font-semibold"
                    >
                      <Search className="w-5 h-5 mr-2" />
                      Analyze Free
                    </Button>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="text-neon-green">✓</span> No credit card required 
                  <span className="mx-2">•</span> 
                  <span className="text-neon-cyan">✓</span> Results in seconds
                </p>
              </div>
            </div>

            {/* Right side - Stats & Features */}
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-xl bg-terminal-dark/50 border border-border/30 backdrop-blur-sm hover:border-neon-green/50 transition-all group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-neon-green/10">
                      <Target className="w-5 h-5 text-neon-green" />
                    </div>
                    <span className="text-3xl font-bold text-neon-green">65%</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                </div>

                <div className="p-6 rounded-xl bg-terminal-dark/50 border border-border/30 backdrop-blur-sm hover:border-neon-cyan/50 transition-all group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-neon-cyan/10">
                      <Brain className="w-5 h-5 text-neon-cyan" />
                    </div>
                    <span className="text-3xl font-bold text-neon-cyan">4m</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Avg Analysis Time</p>
                </div>

                <div className="col-span-2 p-6 rounded-xl bg-terminal-dark/50 border border-border/30 backdrop-blur-sm hover:border-neon-purple/50 transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Rocket className="w-5 h-5 text-neon-purple" />
                        <span className="text-3xl font-bold text-neon-purple">5,000+</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Coins Tracked Daily</p>
                    </div>
                    <div className="flex -space-x-2">
                      {['pepe', 'doge', 'shiba', 'bonk', 'floki'].map((coin, i) => (
                        <div key={coin} className="w-10 h-10 rounded-full border-2 border-terminal-dark overflow-hidden" style={{ zIndex: 5 - i }}>
                          <img 
                            src={`/src/assets/coins/${coin}.png`} 
                            alt={coin}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature highlights */}
              <div className="space-y-3 p-6 rounded-xl bg-gradient-to-br from-terminal-dark/80 to-terminal-darker/80 border border-border/30 backdrop-blur-sm">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Why Traders Trust KLUX</h3>
                {[
                  { icon: Brain, text: 'AI-powered sentiment analysis', color: 'neon-purple' },
                  { icon: TrendingUp, text: 'Real-time market indicators', color: 'neon-cyan' },
                  { icon: Zap, text: 'Lightning-fast alerts', color: 'neon-green' }
                ].map(({ icon: Icon, text, color }) => (
                  <div key={text} className="flex items-center gap-3 group cursor-default">
                    <div className={`p-2 rounded-lg bg-${color}/10`}>
                      <Icon className={`w-4 h-4 text-${color}`} />
                    </div>
                    <span className="text-sm text-foreground group-hover:text-foreground/80 transition">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground uppercase tracking-wider">Scroll</span>
          <TrendingUp className="w-5 h-5 text-neon-cyan" />
        </div>
      </div>
    </section>
  );
}