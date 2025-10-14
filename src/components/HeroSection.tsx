import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-terminal-dark"></div>
      
      {/* Abstract geometric shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-neon-purple/10 rounded-full blur-[100px] animate-float"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-1/4 w-64 h-64 bg-neon-green/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: '4s' }}></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      
      {/* Diagonal lines */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-20">
        <div className="absolute top-20 right-20 w-px h-96 bg-gradient-to-b from-neon-cyan/0 via-neon-cyan/50 to-neon-cyan/0 rotate-45"></div>
        <div className="absolute top-40 right-40 w-px h-64 bg-gradient-to-b from-neon-purple/0 via-neon-purple/50 to-neon-purple/0 rotate-45" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-40 h-40 border-l-2 border-t-2 border-neon-cyan/20"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 border-r-2 border-b-2 border-neon-green/20"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
        
        {/* Main headline */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted/50 border border-border/50 text-sm">
            <Sparkles className="w-3.5 h-3.5 text-neon-cyan" />
            <span className="text-muted-foreground">AI-Powered Meme Coin Intelligence</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
            Find the next
            <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-green bg-clip-text text-transparent">
                100x gem
              </span>
              <div className="absolute -inset-2 bg-gradient-to-r from-neon-purple/20 via-neon-cyan/20 to-neon-green/20 blur-xl"></div>
            </span>
            {" "}before
            <br />
            everyone else
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            AI analyzes thousands of meme coins in real-time, tracking social signals 
            and on-chain activity to spot opportunities early.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            onClick={() => navigate('/auth')}
            className="bg-foreground/90 backdrop-blur-xl text-background hover:bg-foreground border border-white/20 h-14 px-8 text-base font-semibold group shadow-xl"
          >
            Start analyzing free
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => {
              document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="h-14 px-8 text-base font-semibold bg-background/40 backdrop-blur-xl border-border/50 hover:bg-background/60 shadow-lg"
          >
            See how it works
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Social proof */}
        <div className="pt-8 space-y-4">
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-foreground">5,000+</span>
              <span>Coins tracked</span>
            </div>
            <div className="h-8 w-px bg-border"></div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-foreground">65%</span>
              <span>Success rate</span>
            </div>
            <div className="h-8 w-px bg-border"></div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-foreground">&lt;4min</span>
              <span>Analysis time</span>
            </div>
          </div>
        </div>

        {/* Coin ticker preview */}
        <div className="relative mt-16 overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>
          <div className="flex gap-6 animate-scroll">
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-6 flex-shrink-0">
                {['pepe', 'doge', 'shiba', 'bonk', 'floki'].map((coin, i) => (
                  <div 
                    key={`${setIndex}-${i}`}
                    className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-border bg-muted/50 backdrop-blur-sm overflow-hidden opacity-60 hover:opacity-100 transition-opacity hover:scale-110 hover:border-neon-cyan/50 duration-300"
                  >
                    <img 
                      src={`/src/assets/coins/${coin}.png`} 
                      alt={coin}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}