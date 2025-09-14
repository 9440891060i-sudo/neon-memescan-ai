import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search, Zap, TrendingUp, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";

const trendingCoins = [
  { name: "DOGE", address: "0x74b23882a30290451A17c44f4F05243b6b58C76d", logo: "🐕", change: "+12.5%" },
  { name: "SHIB", address: "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE", logo: "🐕", change: "+8.3%" },
  { name: "PEPE", address: "0x6982508145454Ce325dDbE47a25d4ec3d2311933", logo: "🐸", change: "+15.7%" },
  { name: "FLOKI", address: "0xcf0C122c6b73ff809C693DB761e7BaeBe62b6a2E", logo: "🐕", change: "+6.2%" },
  { name: "BABYDOGE", address: "0xc748673057861a797275CD8A068AbB95A902e8de", logo: "🐶", change: "+9.1%" },
  { name: "MEME", address: "0xb131f4A55907B10d1F0A50d8ab8FA09EC342cd74", logo: "😂", change: "+4.8%" }
];

export default function AnalysisInput() {
  const [contractAddress, setContractAddress] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  const handleAnalyze = () => {
    if (!contractAddress) {
      toast({
        title: "Contract Address Required",
        description: "Please paste a valid contract address to analyze.",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    toast({
      title: "Analysis Started",
      description: "AI is now analyzing the contract. This will take about 4 minutes.",
    });

    // Simulate analysis process
    setTimeout(() => {
      setIsAnalyzing(false);
      // In real app, redirect to dashboard
      toast({
        title: "Analysis Complete",
        description: "Your analysis is ready! Check the dashboard for results.",
      });
    }, 3000);
  };

  const handleQuickSelect = (coin: typeof trendingCoins[0]) => {
    setContractAddress(coin.address);
    toast({
      title: `${coin.name} Selected`,
      description: `Contract address loaded for ${coin.name}`,
    });
  };

  const copyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
    toast({
      title: "Address Copied",
      description: "Contract address copied to clipboard",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-black/50 to-background">
      <div>
      {/* Header */}
      <div className="container mx-auto px-6 pt-20 pb-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Paste Contract Address.
            <br />
            <span className="text-neon-green">Let Klux Handle the Rest.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our AI analyzes social sentiment, technical indicators, and market dynamics 
            to predict meme coin potential in minutes.
          </p>
        </div>

        {/* Main Input Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="p-8 bg-gradient-card border-neon-green/30 hover:border-neon-green/50 transition-all duration-300">
            <div className="space-y-6">
              {/* Input Bar */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-green/20 to-neon-cyan/20 rounded-lg blur-sm"></div>
                <div className="relative bg-black/80 rounded-lg p-6 border border-neon-green/30">
                  <label className="block text-sm font-medium text-neon-green mb-3">
                    Contract Address (Solana / Ethereum)
                  </label>
                  <div className="flex gap-4">
                    <Input
                      placeholder="0x1234567890abcdef... or 11111111111111111111111111111111"
                      value={contractAddress}
                      onChange={(e) => setContractAddress(e.target.value)}
                      className="flex-1 bg-black/50 border-neon-cyan/30 text-white placeholder:text-muted-foreground font-mono text-lg h-14"
                    />
                    <Button
                      onClick={handleAnalyze}
                      disabled={isAnalyzing}
                      className="h-14 px-8 bg-gradient-to-r from-neon-green to-neon-cyan hover:from-neon-green/80 hover:to-neon-cyan/80 text-black font-bold"
                    >
                      {isAnalyzing ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-2 border-black border-t-transparent mr-2"></div>
                          Analyzing...
                        </>
                      ) : (
                        <>
                          <Zap className="w-5 h-5 mr-2" />
                          Analyze with AI (30 Credits)
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Search className="w-4 h-4 text-neon-cyan" />
                  <span>Social Sentiment Analysis</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <TrendingUp className="w-4 h-4 text-neon-purple" />
                  <span>Technical Indicators</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Zap className="w-4 h-4 text-neon-green" />
                  <span>AI Prediction Score</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Trending Meme Coins - Quick Select */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            <span className="text-neon-cyan">Trending Meme Coins</span> — Quick Select
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {trendingCoins.map((coin, index) => (
              <Card 
                key={index}
                onClick={() => handleQuickSelect(coin)}
                className="p-6 bg-gradient-card border-neon-purple/30 hover:border-neon-purple/50 cursor-pointer transition-all duration-300 group hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{coin.logo}</div>
                    <div>
                      <h3 className="font-bold text-lg">{coin.name}</h3>
                      <span className={`text-sm font-medium ${coin.change.startsWith('+') ? 'text-neon-green' : 'text-red-400'}`}>
                        {coin.change}
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      copyAddress(coin.address);
                    }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="text-xs text-muted-foreground font-mono truncate mb-3">
                  {coin.address}
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-neon-purple/30 hover:border-neon-purple text-neon-purple"
                >
                  Quick Analyze
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-6 px-8 py-4 bg-gradient-card rounded-full border border-neon-green/30">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground">
                <span className="text-neon-green font-semibold">4min</span> avg analysis
              </span>
            </div>
            <div className="w-px h-4 bg-border"></div>
            <div className="text-sm text-muted-foreground">
              <span className="text-neon-cyan font-semibold">65%</span> accuracy rate
            </div>
            <div className="w-px h-4 bg-border"></div>
            <div className="text-sm text-muted-foreground">
              <span className="text-neon-purple font-semibold">5,000+</span> coins analyzed
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}