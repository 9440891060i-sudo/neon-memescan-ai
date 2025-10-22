import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown, 
  Unlock,
  Delete,
  HelpCircle,
  ArrowRight,
  Activity,
  DollarSign
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useKluxStore } from "@/store/kluxStore";
import KluxPricingModal from "@/components/KluxPricingModal";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";
import kluxLogo from "@/assets/klux-logo.png";

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
  const { isPremium, setIsPremium } = useKluxStore();
  const [analyses, setAnalyses] = useState<CoinAnalysis[]>([]);
  const [selectedCoin, setSelectedCoin] = useState<CoinAnalysis | null>(null);
  const [pinCode, setPinCode] = useState("");
  const [showPricingModal, setShowPricingModal] = useState(false);
  const [showInfoDialog, setShowInfoDialog] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

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
      case 'BULLISH': return 'text-emerald-400';
      case 'BEARISH': return 'text-rose-400';
      default: return 'text-amber-400';
    }
  };

  const getVerdictBg = (verdict: string) => {
    switch (verdict) {
      case 'BULLISH': return 'bg-emerald-500/10 border-emerald-500/20';
      case 'BEARISH': return 'bg-rose-500/10 border-rose-500/20';
      default: return 'bg-amber-500/10 border-amber-500/20';
    }
  };

  const handleViewInTerminal = (coin: CoinAnalysis) => {
    // Navigate to analysis page with coin data
    navigate('/analysis-input', { state: { coinData: coin } });
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
                <div className="bg-black/50 rounded-lg p-6 border border-border min-h-[100px] flex items-center justify-center">
                  <div className="flex gap-3">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-4 h-4 rounded-full border-2 transition-all ${
                          i < pinCode.length
                            ? "bg-emerald-500 border-emerald-500"
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
                      className="h-16 text-2xl font-bold bg-card hover:bg-muted border border-border transition-all"
                      variant="outline"
                    >
                      {num}
                    </Button>
                  ))}
                  <Button
                    onClick={handleClear}
                    className="h-16 text-sm font-bold bg-card hover:bg-muted border border-border transition-all"
                    variant="outline"
                  >
                    Clear
                  </Button>
                  <Button
                    onClick={() => handleNumberClick("0")}
                    className="h-16 text-2xl font-bold bg-card hover:bg-muted border border-border transition-all"
                    variant="outline"
                  >
                    0
                  </Button>
                  <Button
                    onClick={handleDelete}
                    className="h-16 font-bold bg-card hover:bg-muted border border-border transition-all"
                    variant="outline"
                  >
                    <Delete className="w-5 h-5" />
                  </Button>
                </div>

                {/* Info Button */}
                <div className="flex justify-center">
                  <button
                    onClick={() => setShowInfoDialog(true)}
                    className="transition-all hover:text-gray-300"
                  >
                    <HelpCircle className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Info Dialog */}
        <Dialog open={showInfoDialog} onOpenChange={setShowInfoDialog}>
          <DialogContent className="bg-gray-950 border border-gray-800 max-w-4xl">
            <DialogHeader className="border-b border-gray-800 pb-4">
              <DialogTitle className="flex items-center justify-center">
                <img src={kluxLogo} alt="Klux Logo" className="h-12" />
              </DialogTitle>
            </DialogHeader>
            
            <div className="py-4">
              <div className="grid grid-cols-3 gap-4">
                {/* Entry & Exit Signals */}
                <div className="space-y-2 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                  <div className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center mb-3">
                    <DollarSign className="w-5 h-5 text-gray-400" />
                  </div>
                  <h3 className="font-semibold text-white text-sm">Entry & Exit Signals</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    AI-calculated entry prices for optimal buy-in points and exit prices to secure profits at the right time.
                  </p>
                </div>

                {/* Credits System */}
                <div className="space-y-2 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                  <div className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center mb-3">
                    <Activity className="w-5 h-5 text-gray-400" />
                  </div>
                  <h3 className="font-semibold text-white text-sm">Klud Credits</h3>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex items-center gap-1.5">
                      <TrendingUp className="w-3 h-3 text-gray-400 flex-shrink-0" />
                      <p className="text-gray-400">
                        <span className="text-white">Wins:</span> Credits deducted
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <TrendingDown className="w-3 h-3 text-gray-400 flex-shrink-0" />
                      <p className="text-gray-400">
                        <span className="text-white">Losses:</span> Credits reimbursed
                      </p>
                    </div>
                  </div>
                </div>

                {/* Access Instructions */}
                <div className="space-y-2 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                  <div className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center mb-3">
                    <Unlock className="w-5 h-5 text-gray-400" />
                  </div>
                  <h3 className="font-semibold text-white text-sm">Access Code</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Your unique 6-digit code will be sent to your email. Enter it in the PIN machine to unlock premium signals.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                onClick={() => {
                  setShowInfoDialog(false);
                  setShowPricingModal(true);
                }}
                className="w-full bg-white hover:bg-gray-200 text-black font-semibold h-11 mt-6 transition-colors"
              >
                <Unlock className="w-4 h-4 mr-2" />
                UNLOCK KLUX AI
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
    <div className="w-full min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-foreground">KLUXIFY AI</h1>
              <p className="text-sm text-muted-foreground mt-0.5">Professional Trading Signals</p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                Live
              </Badge>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{analyses.length}</span> Active Analyses
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Coins List */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-foreground">AI Analysis Feed</h2>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-xs text-muted-foreground">Scanning Markets</span>
              </div>
            </div>

            <div className="space-y-3">
              {analyses.map((coin) => (
                <Card key={coin.id} className="bg-card border-border hover:border-muted-foreground/20 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="text-2xl">{coin.logo}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-foreground">{coin.symbol}</h3>
                            {coin.status === 'completed' && (
                              <Badge variant="outline" className={getVerdictBg(coin.verdict)}>
                                {coin.verdict}
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground">{coin.name}</p>
                        </div>
                      </div>

                      <div className="text-right">
                        {coin.status === 'analyzing' ? (
                          <div className="space-y-2">
                            <div className="text-sm text-amber-400 flex items-center gap-2">
                              <div className="animate-spin w-3 h-3 border border-amber-400 border-t-transparent rounded-full" />
                              Analyzing
                            </div>
                            <Progress value={coin.progress} className="h-1 w-24" />
                          </div>
                        ) : (
                          <div className="space-y-1">
                            <div className={`text-2xl font-bold ${getVerdictColor(coin.verdict)}`}>
                              {coin.aiScore}
                            </div>
                            <p className="text-xs text-muted-foreground">AI Score</p>
                          </div>
                        )}
                      </div>
                    </div>

                    {coin.status === 'completed' && (
                      <>
                        <div className="mt-4 pt-4 border-t border-border">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">Entry Price</p>
                              <p className="font-semibold text-emerald-400">${formatPrice(coin.entryPrice)}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">Exit Target</p>
                              <p className="font-semibold text-foreground">${formatPrice(coin.exitPrice)}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">24h Change</p>
                              <p className={`font-semibold ${coin.priceChange24h >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                                {coin.priceChange24h >= 0 ? '+' : ''}{coin.priceChange24h.toFixed(2)}%
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">Confidence</p>
                              <p className="font-semibold text-foreground">{coin.confidence}%</p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span>{coin.holderCount.toLocaleString()} holders</span>
                            <span>{formatMarketCap(coin.marketCap)} cap</span>
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleViewInTerminal(coin)}
                            className="h-8"
                          >
                            View Analysis
                            <ArrowRight className="w-3 h-3 ml-2" />
                          </Button>
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>
              ))}

              {analyses.length === 0 && (
                <Card className="bg-card border-border">
                  <CardContent className="p-12">
                    <div className="text-center text-muted-foreground">
                      <Activity className="w-12 h-12 mx-auto mb-3 opacity-50" />
                      <p className="text-sm">Scanning markets for opportunities...</p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Side Panel - Selected Coin Details */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <h2 className="text-lg font-medium text-foreground mb-4">Quick Stats</h2>
              
              <div className="space-y-3">
                <Card className="bg-card border-border">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Total Signals</span>
                      <Activity className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <p className="text-2xl font-bold text-foreground">
                      {analyses.filter(a => a.status === 'completed').length}
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Bullish Signals</span>
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                    </div>
                    <p className="text-2xl font-bold text-emerald-400">
                      {analyses.filter(a => a.verdict === 'BULLISH').length}
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Avg Confidence</span>
                      <DollarSign className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <p className="text-2xl font-bold text-foreground">
                      {analyses.length > 0 
                        ? Math.round(analyses.reduce((acc, a) => acc + a.confidence, 0) / analyses.length)
                        : 0}%
                    </p>
                  </CardContent>
                </Card>

                {selectedCoin && selectedCoin.status === 'completed' && (
                  <Card className="bg-emerald-500/5 border-emerald-500/20">
                    <CardContent className="p-4">
                      <div className="text-center space-y-2">
                        <div className="text-3xl">{selectedCoin.logo}</div>
                        <h3 className="font-semibold text-foreground">{selectedCoin.symbol}</h3>
                        <div className={`text-2xl font-bold ${getVerdictColor(selectedCoin.verdict)}`}>
                          {selectedCoin.verdict}
                        </div>
                        <div className="pt-2 space-y-1">
                          <p className="text-xs text-muted-foreground">Entry at ${formatPrice(selectedCoin.entryPrice)}</p>
                          <p className="text-xs text-muted-foreground">Target ${formatPrice(selectedCoin.exitPrice)}</p>
                        </div>
                        <Button
                          size="sm"
                          className="w-full mt-3"
                          onClick={() => handleViewInTerminal(selectedCoin)}
                        >
                          Full Analysis
                          <ArrowRight className="w-3 h-3 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}