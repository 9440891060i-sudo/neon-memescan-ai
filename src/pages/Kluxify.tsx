import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Zap, 
  TrendingUp, 
  TrendingDown, 
  Crown, 
  Unlock,
  Eye,
  Twitter,
  Users,
  BarChart3,
  Target,
  Star
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CoinAnalysis {
  id: string;
  name: string;
  symbol: string;
  logo: string;
  aiScore: number;
  status: 'analyzing' | 'completed';
  progress: number;
  twitterMentions: number;
  holderCount: number;
  priceChange24h: number;
  marketCap: number;
  verdict: 'BULLISH' | 'NEUTRAL' | 'BEARISH';
  entryPrice: number;
  exitPrice: number;
  confidence: number;
}

export default function Kluxify() {
  const [isPremium, setIsPremium] = useState(false);
  const [analyses, setAnalyses] = useState<CoinAnalysis[]>([]);
  const [selectedCoin, setSelectedCoin] = useState<CoinAnalysis | null>(null);
  const { toast } = useToast();

  // Simulate real-time coin analysis
  useEffect(() => {
    if (isPremium) {
      const interval = setInterval(() => {
        // Add new analysis or update existing ones
        const shouldAddNew = Math.random() > 0.7 && analyses.length < 8;
        
        if (shouldAddNew) {
          const newCoin: CoinAnalysis = {
            id: `coin_${Date.now()}`,
            name: `Coin${Math.floor(Math.random() * 1000)}`,
            symbol: ['DOGE', 'PEPE', 'SHIB', 'FLOKI', 'BONK', 'WIF', 'MEME'][Math.floor(Math.random() * 7)],
            logo: ['🐕', '🐸', '🦮', '🚀', '💎', '🔥', '😂'][Math.floor(Math.random() * 7)],
            aiScore: 0,
            status: 'analyzing',
            progress: 0,
            twitterMentions: Math.floor(Math.random() * 10000),
            holderCount: Math.floor(Math.random() * 50000),
            priceChange24h: (Math.random() - 0.5) * 50,
            marketCap: Math.floor(Math.random() * 100000000),
            verdict: ['BULLISH', 'NEUTRAL', 'BEARISH'][Math.floor(Math.random() * 3)] as any,
            entryPrice: Math.random() * 0.01,
            exitPrice: Math.random() * 0.02,
            confidence: Math.floor(Math.random() * 40) + 60,
          };
          
          setAnalyses(prev => [newCoin, ...prev].slice(0, 8));
        }
        
        // Update progress of analyzing coins
        setAnalyses(prev => prev.map(coin => {
          if (coin.status === 'analyzing') {
            const newProgress = Math.min(coin.progress + Math.random() * 20, 100);
            if (newProgress >= 100) {
              return {
                ...coin,
                status: 'completed',
                progress: 100,
                aiScore: Math.floor(Math.random() * 40) + 60,
              };
            }
            return { ...coin, progress: newProgress };
          }
          return coin;
        }));
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isPremium, analyses.length]);

  // Generate background coins for locked state
  const backgroundCoins = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
  }));

  const handleUpgrade = () => {
    setIsPremium(true);
    toast({
      title: "Welcome to KLUXIFY Premium!",
      description: "You now have access to real-time AI analysis and entry/exit signals.",
    });
  };

  const getVerdictColor = (verdict: string) => {
    switch (verdict) {
      case 'BULLISH': return 'text-neon-green';
      case 'BEARISH': return 'text-red-400';
      default: return 'text-yellow-400';
    }
  };

  const getVerdictBg = (verdict: string) => {
    switch (verdict) {
      case 'BULLISH': return 'bg-neon-green/20 border-neon-green/50';
      case 'BEARISH': return 'bg-red-400/20 border-red-400/50';
      default: return 'bg-yellow-400/20 border-yellow-400/50';
    }
  };

  const formatPrice = (price: number) => {
    return price < 0.01 ? price.toFixed(6) : price.toFixed(4);
  };

  const formatMarketCap = (cap: number) => {
    if (cap > 1000000) return `$${(cap / 1000000).toFixed(1)}M`;
    if (cap > 1000) return `$${(cap / 1000).toFixed(1)}K`;
    return `$${cap}`;
  };

  if (!isPremium) {
    return (
      <div className="relative min-h-screen overflow-hidden">
        {/* Blurred Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background to-black/50 blur-sm">
          {/* Animated background coins */}
          {backgroundCoins.map((coin) => (
            <div
              key={coin.id}
              className="absolute w-16 h-16 bg-gradient-card border border-neon-green/30 rounded-lg flex items-center justify-center animate-bounce"
              style={{
                left: `${coin.x}%`,
                top: `${coin.y}%`,
                animationDelay: `${coin.delay}s`,
                animationDuration: '3s',
              }}
            >
              <div className="text-2xl">🚀</div>
            </div>
          ))}
        </div>

        {/* Lock Overlay */}
        <div className="relative z-10 flex items-center justify-center min-h-screen p-6">
          <Card className="max-w-md w-full bg-gradient-card border-neon-purple/50 shadow-2xl">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full flex items-center justify-center">
                <Crown className="w-8 h-8 text-black" />
              </div>
              <CardTitle className="text-2xl font-bold text-neon-purple">KLUXIFY</CardTitle>
              <CardDescription className="text-lg">
                Premium AI Trading Signals
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="p-4 bg-black/30 rounded-lg border border-neon-purple/30">
                <p className="text-lg font-medium mb-2">
                  KLUXIFY scans coins 24/7. Get AI-powered entries & exits. Upgrade to unlock
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Zap className="w-4 h-4 text-neon-green" />
                  <span>Real-time analysis</span>
                  <span>•</span>
                  <Target className="w-4 h-4 text-neon-cyan" />
                  <span>Entry/Exit signals</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Current Plan:</span>
                  <Badge variant="outline" className="border-neon-green/50 text-neon-green">
                    Pro Trader
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Required:</span>
                  <Badge className="bg-neon-purple/20 text-neon-purple">
                    KLUXIFY Premium
                  </Badge>
                </div>
              </div>

              <Button 
                onClick={handleUpgrade}
                className="w-full bg-gradient-to-r from-neon-purple to-neon-cyan hover:from-neon-purple/80 hover:to-neon-cyan/80 text-black font-bold"
                size="lg"
              >
                <Crown className="w-5 h-5 mr-2" />
                Upgrade to KLUXIFY Premium
              </Button>

              <p className="text-xs text-muted-foreground">
                30-day money-back guarantee • Cancel anytime
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full p-6 space-y-6 min-h-screen bg-gradient-to-b from-background via-black/30 to-background">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-neon-purple flex items-center gap-2">
            <Crown className="w-8 h-8" />
            KLUXIFY
          </h1>
          <p className="text-muted-foreground">Real-time AI-powered trading signals</p>
        </div>
        <div className="flex items-center gap-3">
          <Badge className="bg-neon-purple/20 text-neon-purple">
            Premium Active
          </Badge>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Live Scanning</span>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-card border-neon-green/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-neon-green" />
              <span className="text-sm text-muted-foreground">Scanning</span>
            </div>
            <div className="text-2xl font-bold text-neon-green">1,247</div>
            <div className="text-xs text-muted-foreground">coins/minute</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-neon-cyan/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-neon-cyan" />
              <span className="text-sm text-muted-foreground">Signals Today</span>
            </div>
            <div className="text-2xl font-bold text-neon-cyan">23</div>
            <div className="text-xs text-muted-foreground">Entry opportunities</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-neon-purple/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-neon-purple" />
              <span className="text-sm text-muted-foreground">Success Rate</span>
            </div>
            <div className="text-2xl font-bold text-neon-purple">78%</div>
            <div className="text-xs text-muted-foreground">Last 30 days</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-yellow-400/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-muted-foreground">Avg ROI</span>
            </div>
            <div className="text-2xl font-bold text-yellow-400">+24.7%</div>
            <div className="text-xs text-muted-foreground">Per signal</div>
          </CardContent>
        </Card>
      </div>

      {/* Live Analysis Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Coins List */}
        <Card className="bg-gradient-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Zap className="w-5 h-5 text-neon-green" />
              Live Analysis Feed
            </CardTitle>
            <CardDescription>Real-time coin analysis results</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 max-h-96 overflow-y-auto">
            {analyses.map((coin) => (
              <div
                key={coin.id}
                onClick={() => setSelectedCoin(coin)}
                className="p-4 bg-black/20 rounded-lg border border-transparent hover:border-neon-green/30 cursor-pointer transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="text-xl">{coin.logo}</div>
                    <div>
                      <div className="font-semibold">{coin.symbol}</div>
                      <div className="text-xs text-muted-foreground">{coin.name}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    {coin.status === 'analyzing' ? (
                      <div className="space-y-1">
                        <div className="text-sm text-yellow-400 flex items-center gap-1">
                          <div className="animate-spin w-3 h-3 border border-yellow-400 border-t-transparent rounded-full" />
                          Analyzing
                        </div>
                        <Progress value={coin.progress} className="h-1 w-16" />
                      </div>
                    ) : (
                      <div className="space-y-1">
                        <div className={`text-lg font-bold ${getVerdictColor(coin.verdict)}`}>
                          {coin.aiScore}
                        </div>
                        <Badge className={getVerdictBg(coin.verdict)}>
                          {coin.verdict}
                        </Badge>
                      </div>
                    )}
                  </div>
                </div>

                {coin.status === 'completed' && (
                  <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Twitter className="w-3 h-3" />
                      {coin.twitterMentions.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {coin.holderCount.toLocaleString()}
                    </div>
                    <div className={`flex items-center gap-1 ${coin.priceChange24h >= 0 ? 'text-neon-green' : 'text-red-400'}`}>
                      {coin.priceChange24h >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                      {coin.priceChange24h >= 0 ? '+' : ''}{coin.priceChange24h.toFixed(1)}%
                    </div>
                  </div>
                )}
              </div>
            ))}

            {analyses.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                <Zap className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>Scanning for opportunities...</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Detailed Analysis */}
        <Card className="bg-gradient-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <BarChart3 className="w-5 h-5 text-neon-cyan" />
              Detailed Analysis
            </CardTitle>
            <CardDescription>
              {selectedCoin ? `Analysis for ${selectedCoin.symbol}` : 'Select a coin to view detailed analysis'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {selectedCoin ? (
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between p-4 bg-black/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{selectedCoin.logo}</div>
                    <div>
                      <h3 className="text-xl font-bold">{selectedCoin.symbol}</h3>
                      <p className="text-sm text-muted-foreground">{selectedCoin.name}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-3xl font-bold ${getVerdictColor(selectedCoin.verdict)}`}>
                      {selectedCoin.aiScore}
                    </div>
                    <Badge className={getVerdictBg(selectedCoin.verdict)}>
                      {selectedCoin.verdict}
                    </Badge>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-black/20 rounded-lg">
                    <div className="text-sm text-muted-foreground">Market Cap</div>
                    <div className="font-bold">{formatMarketCap(selectedCoin.marketCap)}</div>
                  </div>
                  <div className="p-3 bg-black/20 rounded-lg">
                    <div className="text-sm text-muted-foreground">24h Change</div>
                    <div className={`font-bold ${selectedCoin.priceChange24h >= 0 ? 'text-neon-green' : 'text-red-400'}`}>
                      {selectedCoin.priceChange24h >= 0 ? '+' : ''}{selectedCoin.priceChange24h.toFixed(2)}%
                    </div>
                  </div>
                  <div className="p-3 bg-black/20 rounded-lg">
                    <div className="text-sm text-muted-foreground">Twitter Mentions</div>
                    <div className="font-bold">{selectedCoin.twitterMentions.toLocaleString()}</div>
                  </div>
                  <div className="p-3 bg-black/20 rounded-lg">
                    <div className="text-sm text-muted-foreground">Holders</div>
                    <div className="font-bold">{selectedCoin.holderCount.toLocaleString()}</div>
                  </div>
                </div>

                {/* AI Signals */}
                {selectedCoin.status === 'completed' && (
                  <div className="p-4 bg-gradient-to-r from-neon-green/10 to-neon-cyan/10 rounded-lg border border-neon-green/30">
                    <h4 className="font-semibold mb-3 text-neon-green">AI Trading Signals</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-muted-foreground">Entry Price</div>
                        <div className="font-bold text-neon-green">${formatPrice(selectedCoin.entryPrice)}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Exit Target</div>
                        <div className="font-bold text-neon-cyan">${formatPrice(selectedCoin.exitPrice)}</div>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Confidence</span>
                      <div className="flex items-center gap-2">
                        <Progress value={selectedCoin.confidence} className="w-20 h-2" />
                        <span className="text-sm font-medium">{selectedCoin.confidence}%</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center justify-center h-64 text-muted-foreground">
                <div className="text-center">
                  <Eye className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p>Select a coin from the feed to view detailed analysis</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}