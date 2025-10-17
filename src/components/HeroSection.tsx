import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight, Sparkles, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Prism from "./Prism";

export default function HeroSection() {
  const navigate = useNavigate();
  const [contractAddress, setContractAddress] = useState("");
  
  const handleAnalyze = () => {
    if (contractAddress.trim()) {
      navigate('/auth');
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Animated Prism Background */}
      <div className="absolute inset-0">
        <Prism 
          animationType="3drotate"
          timeScale={0.5}
          scale={1}
          height={8}
          baseWidth={1}
          noise={0}
          glow={0.5}
          hueShift={-0.04}
          colorFrequency={1}
        />
      </div>
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-background/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
        
        {/* Main headline */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background/60 backdrop-blur-xl border border-border/50 text-sm">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-muted-foreground">AI-Powered Meme Coin Intelligence</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
            See Through
            <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 bg-gradient-to-r from-primary via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                The Glare
              </span>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-blue-400/20 to-cyan-400/20 blur-xl"></div>
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Cut through the noise with AI-powered analysis that reveals the true potential of any meme coin.
          </p>
        </div>

        {/* Contract Address Input */}
        <div className="w-full max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 p-2 rounded-xl bg-background/60 backdrop-blur-xl border border-border/50 shadow-2xl">
            <Input
              type="text"
              placeholder="Paste contract address (CA) here..."
              value={contractAddress}
              onChange={(e) => setContractAddress(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
              className="flex-1 h-12 bg-background/40 border-border/30 text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
            />
            <Button 
              size="lg" 
              onClick={handleAnalyze}
              className="bg-primary/90 backdrop-blur-xl text-primary-foreground hover:bg-primary h-12 px-8 text-base font-semibold group shadow-xl"
            >
              <Search className="w-5 h-5 mr-2" />
              Analyze
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-3 text-center">
            Instant AI analysis • No signup required to start
          </p>
        </div>

        {/* Secondary CTA */}
        <div className="flex items-center justify-center">
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => {
              document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="h-12 px-6 text-sm font-semibold bg-background/40 backdrop-blur-xl border-border/50 hover:bg-background/60"
          >
            See how it works
            <ChevronRight className="w-4 h-4 ml-2" />
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
        <div className="relative mt-12 overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background/60 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background/60 to-transparent z-10"></div>
          <div className="flex gap-6 animate-scroll">
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-6 flex-shrink-0">
                {['pepe', 'doge', 'shiba', 'bonk', 'floki'].map((coin, i) => (
                  <div 
                    key={`${setIndex}-${i}`}
                    className="flex-shrink-0 w-16 h-16 rounded-full border border-border/50 bg-background/40 backdrop-blur-sm overflow-hidden opacity-50 hover:opacity-100 transition-all hover:scale-110 hover:border-primary/50 duration-300"
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