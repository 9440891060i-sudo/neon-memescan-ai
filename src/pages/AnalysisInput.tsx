import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search, Zap, TrendingUp, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import { AnalysisQueue } from "@/components/AnalysisQueue";
import { BloombergTerminal } from "@/components/BloombergTerminal";

const trendingCoins = [
  { 
    name: "DOGE", 
    address: "0x74b23882a30290451A17c44f4F05243b6b58C76d", 
    logo: "🐕", 
    marketCap: "$16.2B",
    age: "4m",
    holders: "65",
    devScore: "85%",
    change: "+27%",
    changePositive: true
  },
  { 
    name: "SHIB", 
    address: "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE", 
    logo: "🐕", 
    marketCap: "$5.8B",
    age: "6m",
    holders: "58",
    devScore: "72%",
    change: "+23%",
    changePositive: true
  },
  { 
    name: "PEPE", 
    address: "0x6982508145454Ce325dDbE47a25d4ec3d2311933", 
    logo: "🐸", 
    marketCap: "$3.1B",
    age: "17m",
    holders: "72",
    devScore: "91%",
    change: "+24%",
    changePositive: true
  },
  { 
    name: "FLOKI", 
    address: "0xcf0C122c6b73ff809C693DB761e7BaeBe62b6a2E",
    logo: "🐕", 
    marketCap: "$1.4B",
    age: "30m",
    holders: "73",
    devScore: "78%",
    change: "+22%",
    changePositive: true
  },
  { 
    name: "BABYDOGE", 
    address: "0xc748673057861a797275CD8A068AbB95A902e8de", 
    logo: "🐶", 
    marketCap: "$780M",
    age: "32m",
    holders: "191",
    devScore: "88%",
    change: "+20%",
    changePositive: true
  },
  { 
    name: "MEME", 
    address: "0xb131f4A55907B10d1F0A50d8ab8FA09EC342cd74", 
    logo: "😂", 
    marketCap: "$650M",
    age: "12m",
    holders: "134",
    devScore: "69%",
    change: "-15%",
    changePositive: false
  }
];

interface QueuedCoin {
  name: string;
  address: string;
  logo: string;
  status: 'analyzing' | 'complete';
  timestamp: Date;
}

export default function AnalysisInput() {
  const [contractAddress, setContractAddress] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [inputRef, setInputRef] = useState<HTMLInputElement | null>(null);
  const [queuedCoins, setQueuedCoins] = useState<QueuedCoin[]>([]);
  const [selectedCoin, setSelectedCoin] = useState<string | null>(null);
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

    // Find the coin from trending coins or create a new entry
    const selectedTrendingCoin = trendingCoins.find(coin => coin.address === contractAddress);
    const coinToAdd: QueuedCoin = selectedTrendingCoin 
      ? {
          name: selectedTrendingCoin.name,
          address: selectedTrendingCoin.address,
          logo: selectedTrendingCoin.logo,
          status: 'analyzing',
          timestamp: new Date()
        }
      : {
          name: 'UNKNOWN',
          address: contractAddress,
          logo: '❓',
          status: 'analyzing',
          timestamp: new Date()
        };

    // Add to queue if not already present
    if (!queuedCoins.find(coin => coin.address === contractAddress)) {
      setQueuedCoins(prev => [...prev, coinToAdd]);
    }

    setIsAnalyzing(true);
    toast({
      title: "Analysis Started",
      description: "AI is now analyzing the contract. This will take about 4 minutes.",
    });

    // Simulate analysis process
    setTimeout(() => {
      setIsAnalyzing(false);
      
      // Update the coin status to complete
      setQueuedCoins(prev => prev.map(coin => 
        coin.address === contractAddress 
          ? { ...coin, status: 'complete' as const }
          : coin
      ));
      
      // Auto-select the completed analysis
      setSelectedCoin(contractAddress);
      
      toast({
        title: "Analysis Complete",
        description: "Your analysis is ready! Click on the coin in the queue to view the Bloomberg terminal.",
      });
    }, 3000);

    // Clear the input
    setContractAddress("");
  };

  const handleQuickSelect = (coin: typeof trendingCoins[0]) => {
    setContractAddress(coin.address);
    
    // Highlight input briefly
    if (inputRef) {
      inputRef.focus();
      inputRef.classList.add('ring-2', 'ring-neon-green', 'ring-offset-2', 'ring-offset-background');
      setTimeout(() => {
        if (inputRef) {
          inputRef.classList.remove('ring-2', 'ring-neon-green', 'ring-offset-2', 'ring-offset-background');
        }
      }, 1000);
    }
    
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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="w-full px-6 pt-20 pb-12">
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
          <Card className="p-8 bg-gradient-card shadow-card border-border hover:border-border/80 transition-all duration-300">
            <div className="space-y-6">
              {/* Input Bar */}
              <div className="relative">
                <div className="bg-card rounded-lg p-6 border border-border">
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Contract Address (Solana / Ethereum)
                  </label>
                  <div className="flex gap-4">
                    <Input
                      ref={setInputRef}
                      placeholder="0x1234567890abcdef... or 11111111111111111111111111111111"
                      value={contractAddress}
                      onChange={(e) => setContractAddress(e.target.value)}
                      className="flex-1 bg-input border-border text-foreground placeholder:text-muted-foreground font-mono text-lg h-14 transition-all duration-300"
                    />
                    <Button
                      onClick={handleAnalyze}
                      disabled={isAnalyzing}
                      className="h-14 px-8 bg-neon-green hover:bg-neon-green/90 text-black font-bold cta-glow"
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
                  <Search className="w-4 h-4 text-chart-cyan" />
                  <span>Social Sentiment Analysis</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <TrendingUp className="w-4 h-4 text-chart-orange" />
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

        {/* Analysis Queue */}
        <AnalysisQueue 
          queuedCoins={queuedCoins}
          selectedCoin={selectedCoin}
          onCoinSelect={setSelectedCoin}
        />

        {/* Bloomberg Terminal */}
        {selectedCoin && (
          <div className="max-w-7xl mx-auto mb-16">
            {(() => {
              const selectedQueuedCoin = queuedCoins.find(coin => coin.address === selectedCoin);
              const selectedTrendingCoin = trendingCoins.find(coin => coin.address === selectedCoin);
              
              if (selectedQueuedCoin && selectedTrendingCoin) {
                return (
                  <BloombergTerminal 
                    coin={selectedTrendingCoin}
                    isExpanded={true}
                  />
                );
              }
              return null;
            })()}
          </div>
        )}

        {/* Pulse Section */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            <span className="text-foreground">Market</span> <span className="text-neon-cyan">Pulse</span>
          </h2>
          
          <Card className="p-6 bg-gradient-card shadow-card border-border">
            <div className="grid grid-cols-3 gap-4">
              {trendingCoins.map((coin, index) => (
                <div 
                  key={index}
                  onClick={() => handleQuickSelect(coin)}
                  className="p-4 bg-card rounded-lg border border-border hover:border-border/60 cursor-pointer transition-all duration-300 group hover:shadow-card"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-secondary border border-border flex items-center justify-center text-2xl">
                        {coin.logo}
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground group-hover:text-neon-cyan transition-colors">
                          {coin.name}
                        </h3>
                        <div className="text-xs text-muted-foreground">
                          {coin.age}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground">MC</div>
                      <div className="text-sm font-semibold text-foreground">{coin.marketCap}</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3 text-xs">
                    <div className="text-center">
                      <div className="text-muted-foreground mb-1">Holders</div>
                      <div className="text-foreground font-medium">{coin.holders}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-muted-foreground mb-1">Dev Score</div>
                      <div className="text-chart-cyan font-medium">{coin.devScore}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-muted-foreground mb-1">24h</div>
                      <div className={`font-medium ${coin.changePositive ? 'text-gain' : 'text-loss'}`}>
                        {coin.change}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Bottom Stats */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-6 px-8 py-4 bg-gradient-card rounded-full border border-border shadow-card">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground">
                <span className="text-neon-green font-semibold">4min</span> avg analysis
              </span>
            </div>
            <div className="w-px h-4 bg-border"></div>
            <div className="text-sm text-muted-foreground">
              <span className="text-chart-cyan font-semibold">65%</span> accuracy rate
            </div>
            <div className="w-px h-4 bg-border"></div>
            <div className="text-sm text-muted-foreground">
              <span className="text-chart-purple font-semibold">5,000+</span> coins analyzed
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}