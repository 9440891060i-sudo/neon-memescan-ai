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
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-background/20 backdrop-blur-2xl border border-white/20 text-sm shadow-lg hover:bg-background/30 transition-all duration-300">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-foreground/90 font-medium">AI-Powered Meme Coin Intelligence</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]">
            <span className="block mb-4">See Through</span>
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-primary via-blue-400 to-cyan-400 bg-clip-text text-transparent" style={{
                WebkitTextStroke: '1px rgba(255, 255, 255, 0.1)',
                filter: 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.3))'
              }}>
                The Glare
              </span>
              <div className="absolute -inset-6 bg-gradient-to-r from-primary/20 via-blue-400/20 to-cyan-400/20 blur-3xl -z-10"></div>
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-foreground/70 max-w-2xl mx-auto leading-relaxed font-light">
            Cut through the noise with AI-powered analysis that reveals the true potential of any meme coin.
          </p>
        </div>

        {/* Contract Address Input */}
        <div className="w-full max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 p-3 rounded-2xl bg-background/30 backdrop-blur-2xl border border-white/20 shadow-2xl hover:shadow-primary/10 transition-all duration-300">
            <Input
              type="text"
              placeholder="Paste contract address (CA) here..."
              value={contractAddress}
              onChange={(e) => setContractAddress(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
              className="flex-1 h-14 bg-background/50 border-white/10 text-foreground placeholder:text-foreground/40 focus-visible:ring-primary focus-visible:ring-2 text-base backdrop-blur-sm"
            />
            <Button 
              size="lg" 
              onClick={handleAnalyze}
              className="bg-gradient-to-r from-primary to-blue-500 text-white hover:from-primary/90 hover:to-blue-500/90 h-14 px-10 text-base font-semibold group shadow-lg hover:shadow-primary/30 transition-all duration-300"
            >
              <Search className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Analyze
            </Button>
          </div>
          <p className="text-sm text-foreground/60 mt-4 text-center font-medium">
            ⚡ Instant AI analysis • No signup required to start
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
            className="h-12 px-8 text-sm font-semibold bg-background/20 backdrop-blur-2xl border-white/20 hover:bg-background/30 hover:border-white/30 text-foreground/90 group transition-all duration-300"
          >
            See how it works
            <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Social proof */}
        <div className="pt-8 space-y-4">
          <div className="flex items-center justify-center gap-12 text-sm">
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <span className="text-3xl font-bold bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:scale-110 transition-transform">5,000+</span>
              <span className="text-foreground/60">Coins tracked</span>
            </div>
            <div className="h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent"></div>
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <span className="text-3xl font-bold bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:scale-110 transition-transform">65%</span>
              <span className="text-foreground/60">Success rate</span>
            </div>
            <div className="h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent"></div>
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <span className="text-3xl font-bold bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:scale-110 transition-transform">&lt;4min</span>
              <span className="text-foreground/60">Analysis time</span>
            </div>
          </div>
        </div>

        {/* Coin ticker preview */}
        <div className="relative mt-16 overflow-hidden py-8">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background/80 via-background/40 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background/80 via-background/40 to-transparent z-10"></div>
          <div className="flex gap-8 animate-scroll">
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-8 flex-shrink-0">
                {['pepe', 'doge', 'shiba', 'bonk', 'floki'].map((coin, i) => (
                  <div 
                    key={`${setIndex}-${i}`}
                    className="flex-shrink-0 w-20 h-20 rounded-full border-2 border-white/10 bg-background/20 backdrop-blur-md overflow-hidden opacity-40 hover:opacity-100 transition-all hover:scale-125 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 duration-300 cursor-pointer"
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