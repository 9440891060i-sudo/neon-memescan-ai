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
  Star,
  Delete,
  HelpCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import KluxPricingModal from "@/components/KluxPricingModal";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

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
  const [pinCode, setPinCode] = useState("");
  const [showPricingModal, setShowPricingModal] = useState(false);
  const [showInfoDialog, setShowInfoDialog] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
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

  const handleNumberClick = (num: string) => {
    if (pinCode.length < 6) {
      const newPin = pinCode + num;
      setPinCode(newPin);
      
      // Check if code is complete (6 digits)
      if (newPin.length === 6) {
        if (newPin === "132513") {
          setIsPremium(true);
          setPinCode("");
          toast({
            title: "Access Granted",
            description: "Welcome to KLUXIFY Premium!",
          });
        } else {
          // Wrong code - shake and clear
          setIsShaking(true);
          setTimeout(() => {
            setPinCode("");
            setIsShaking(false);
          }, 500);
          toast({
            title: "Access Denied",
            description: "Incorrect code entered.",
            variant: "destructive",
          });
        }
      }
    }
  };

  const handleDelete = () => {
    setPinCode(pinCode.slice(0, -1));
  };

  const handleClear = () => {
    setPinCode("");
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
      <>
        <div className="relative min-h-screen bg-background flex items-center justify-center p-6">
          {/* ATM Screen */}
          <div className={`w-full max-w-md transition-transform ${isShaking ? 'animate-shake' : ''}`}>
            <Card className="bg-gradient-card border-border shadow-2xl">
              <CardContent className="p-8 space-y-8">
                {/* Display Screen */}
                <div className="bg-black/50 rounded-lg p-6 border border-neon-green/30 min-h-[100px] flex items-center justify-center">
                  <div className="flex gap-3">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-4 h-4 rounded-full border-2 transition-all ${
                          i < pinCode.length
                            ? "bg-neon-green border-neon-green shadow-[0_0_10px_rgba(0,255,136,0.5)]"
                            : "border-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Keypad */}
                <div className="grid grid-cols-3 gap-3">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                    <Button
                      key={num}
                      onClick={() => handleNumberClick(num.toString())}
                      className="h-16 text-2xl font-bold bg-card hover:bg-neon-green/10 border border-border hover:border-neon-green/50 transition-all"
                      variant="outline"
                    >
                      {num}
                    </Button>
                  ))}
                  <Button
                    onClick={handleClear}
                    className="h-16 text-sm font-bold bg-card hover:bg-red-500/10 border border-border hover:border-red-500/50 transition-all"
                    variant="outline"
                  >
                    Clear
                  </Button>
                  <Button
                    onClick={() => handleNumberClick("0")}
                    className="h-16 text-2xl font-bold bg-card hover:bg-neon-green/10 border border-border hover:border-neon-green/50 transition-all"
                    variant="outline"
                  >
                    0
                  </Button>
                  <Button
                    onClick={handleDelete}
                    className="h-16 font-bold bg-card hover:bg-yellow-500/10 border border-border hover:border-yellow-500/50 transition-all"
                    variant="outline"
                  >
                    <Delete className="w-5 h-5" />
                  </Button>
                </div>

                {/* Info Button */}
                <div className="flex justify-center">
                  <button
                    onClick={() => setShowInfoDialog(true)}
                    className="group relative p-3 rounded-full transition-all hover:scale-110"
                  >
                    <HelpCircle className="w-8 h-8 text-neon-cyan animate-pulse" />
                    <div className="absolute inset-0 rounded-full bg-neon-cyan/20 blur-xl animate-pulse" />
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Info Dialog */}
        <Dialog open={showInfoDialog} onOpenChange={setShowInfoDialog}>
          <DialogContent className="bg-gradient-card border border-border max-w-lg">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-neon-cyan flex items-center gap-2">
                <Crown className="w-6 h-6" />
                What is Klux AI?
              </DialogTitle>
              <DialogDescription className="text-base text-muted-foreground">
                Your AI-powered trading assistant
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-6 py-4">
              {/* Main Description */}
              <div className="space-y-3">
                <p className="text-foreground leading-relaxed">
                  Klux AI is an advanced artificial intelligence system that analyzes cryptocurrency markets in real-time, providing you with precise entry and exit signals to maximize your trading success.
                </p>
              </div>

              {/* Entry & Exit Signals */}
              <div className="space-y-2">
                <h3 className="font-semibold text-neon-green flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Entry & Exit Signals
                </h3>
                <p className="text-sm text-muted-foreground">
                  Get AI-calculated entry prices for optimal buy-in points and exit prices to secure your profits at the right time.
                </p>
              </div>

              {/* Credits System */}
              <div className="space-y-3 p-4 bg-black/30 rounded-lg border border-border">
                <h3 className="font-semibold text-yellow-400 flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  Klud Credits System
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-neon-green mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <span className="text-neon-green font-medium">Winning trades:</span> Credits are deducted from your account
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <TrendingDown className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <span className="text-red-400 font-medium">Losing trades:</span> Credits are fully reimbursed back to you
                    </p>
                  </div>
                </div>
              </div>

              {/* Access Instructions */}
              <div className="space-y-3 p-4 bg-neon-cyan/10 rounded-lg border border-neon-cyan/30">
                <h3 className="font-semibold text-neon-cyan flex items-center gap-2">
                  <Unlock className="w-4 h-4" />
                  How to Access
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Your unique access code will be sent to your registered email address. Simply enter the 6-digit code in the PIN machine above to unlock Klux AI and start receiving premium trading signals.
                </p>
              </div>

              {/* CTA Button */}
              <Button
                onClick={() => {
                  setShowInfoDialog(false);
                  setShowPricingModal(true);
                }}
                className="w-full bg-neon-cyan hover:bg-neon-cyan/90 text-black font-bold h-12"
              >
                <Crown className="w-5 h-5 mr-2" />
                Unlock Klux AI
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Pricing Modal */}
        <KluxPricingModal 
          open={showPricingModal} 
          onOpenChange={setShowPricingModal}
        />
      </>
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