import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Rocket, Zap, Search } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-neon-green/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-neon-cyan/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-neon-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <div className="mb-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Ready to Catch the Next
              <br />
              <span className="text-neon-green">Meme Coin</span>{" "}
              <span className="text-neon-cyan">Moon Shot</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of traders using AI to stay ahead of the meme coin market
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-green mb-2">5,000</div>
              <div className="text-sm text-muted-foreground">Coins Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-cyan mb-2">65%</div>
              <div className="text-sm text-muted-foreground">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-purple mb-2">4min</div>
              <div className="text-sm text-muted-foreground">Analysis Time</div>
            </div>
          </div>

          {/* Main CTA */}
          <div className="bg-gradient-card rounded-3xl p-8 border border-neon-green/30 neon-glow-green mb-8">
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Analyze Any Meme Coin Now
            </h3>
            
            <div className="max-w-2xl mx-auto mb-6">
              <div className="flex gap-4 p-3 bg-black/30 rounded-2xl border border-border">
                <Input 
                  placeholder="Enter token contract address or symbol..." 
                  className="flex-1 bg-transparent border-0 text-lg placeholder:text-muted-foreground focus-visible:ring-0"
                />
                <Button variant="analyze" size="lg" className="px-8 whitespace-nowrap">
                  <Search className="w-5 h-5 mr-2" />
                  Analyze Now
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-neon-green" />
                <span>Instant Results</span>
              </div>
              <div className="flex items-center gap-2">
                <Rocket className="w-4 h-4 text-neon-cyan" />
                <span>AI Powered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-neon-purple rounded-full"></div>
                <span>High Accuracy</span>
              </div>
            </div>
          </div>

          {/* Secondary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="neon-outline" size="lg" className="px-8">
              Start with 10 Free Credits
            </Button>
            <Button variant="ghost" size="lg" className="px-8 text-muted-foreground hover:text-foreground">
              View Sample Analysis
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">
              Trusted by traders worldwide
            </p>
            <div className="flex items-center justify-center gap-8 opacity-60">
              <div className="text-xs font-mono">24/7 UPTIME</div>
              <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
              <div className="text-xs font-mono">REAL-TIME DATA</div>
              <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
              <div className="text-xs font-mono">SECURE API</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}