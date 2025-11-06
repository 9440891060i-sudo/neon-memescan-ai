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
  DollarSign,
  Copy,
  Check,
  Bell,
  BellOff,
  ExternalLink,
  Beaker,
  ArrowRightLeft
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

interface AICall {
  id: string;
  name: string;
  symbol: string;
  logo: string;
  contractAddress: string;
  entryPrice: number;
  currentPrice: number;
  growthPercent: number;
  exitPrice?: number;
  exitCalled: boolean;
  calledAt: Date;
  exitCalledAt?: Date;
}

export default function Kluxify() {
  const { isPremium, setIsPremium } = useKluxStore();
  const [analyses, setAnalyses] = useState<CoinAnalysis[]>([]);
  const [aiCalls, setAiCalls] = useState<AICall[]>([]);
  const [selectedCoin, setSelectedCoin] = useState<CoinAnalysis | null>(null);
  const [pinCode, setPinCode] = useState("");
  const [showPricingModal, setShowPricingModal] = useState(false);
  const [showInfoDialog, setShowInfoDialog] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);
  const [alertsEnabled, setAlertsEnabled] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Simulate real-time coin analysis
  useEffect(() => {
    if (isPremium) {
      const interval = setInterval(() => {
        // Add new analysis or update existing ones
        const shouldAddNew = Math.random() > 0.7 && analyses.length < 12;
        
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
          
          setAnalyses(prev => [newCoin, ...prev].slice(0, 12));
        }
        
        // Update progress of analyzing coins
        setAnalyses(prev => prev.map(coin => {
          if (coin.status === 'analyzing') {
            const newProgress = Math.min(coin.progress + Math.random() * 20, 100);
            if (newProgress >= 100) {
              const completed = {
                ...coin,
                status: 'completed' as const,
                progress: 100,
                aiScore: Math.floor(Math.random() * 40) + 60,
              };
              
              // Add to AI Calls if BULLISH
              if (completed.verdict === 'BULLISH' && completed.confidence > 70) {
                const newCall: AICall = {
                  id: `call_${Date.now()}`,
                  name: completed.name,
                  symbol: completed.symbol,
                  logo: completed.logo,
                  contractAddress: `0x${Math.random().toString(16).substr(2, 40)}`,
                  entryPrice: completed.entryPrice,
                  currentPrice: completed.entryPrice,
                  growthPercent: 0,
                  exitCalled: false,
                  calledAt: new Date(),
                };
                setAiCalls(prev => [newCall, ...prev]);
              }
              
              return completed;
            }
            return { ...coin, progress: newProgress };
          }
          return coin;
        }));
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isPremium, analyses.length]);

  // Update AI Calls prices and growth
  useEffect(() => {
    if (isPremium && aiCalls.length > 0) {
      const interval = setInterval(() => {
        setAiCalls(prev => prev.map(call => {
          if (!call.exitCalled) {
            const priceChange = (Math.random() - 0.3) * 0.02; // Slight upward bias
            const newPrice = Math.max(call.currentPrice + (call.currentPrice * priceChange), call.entryPrice * 0.5);
            const growth = ((newPrice - call.entryPrice) / call.entryPrice) * 100;
            
            // Randomly call exit on profitable positions
            const shouldExit = growth > 20 && Math.random() > 0.95;
            
            return {
              ...call,
              currentPrice: newPrice,
              growthPercent: growth,
              exitCalled: shouldExit,
              exitPrice: shouldExit ? newPrice : call.exitPrice,
              exitCalledAt: shouldExit ? new Date() : call.exitCalledAt,
            };
          }
          return call;
        }));
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isPremium, aiCalls.length]);

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

  const handleViewInTerminal = (coin: CoinAnalysis | AICall) => {
    // Navigate to analysis page with coin data
    navigate('/analysis-input', { state: { coinData: coin } });
  };

  const copyToClipboard = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopiedAddress(address);
    toast({
      title: "Copied!",
      description: "Contract address copied to clipboard",
    });
    setTimeout(() => setCopiedAddress(null), 2000);
  };

  const toggleAlerts = () => {
    setAlertsEnabled(!alertsEnabled);
    toast({
      title: alertsEnabled ? "Alerts Disabled" : "Alerts Enabled",
      description: alertsEnabled 
        ? "You will no longer receive notifications" 
        : "You will receive notifications for new signals",
    });
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
            <div className="py-6">
              <div className="grid grid-cols-3 gap-4">
                {/* Entry & Exit Signals */}
                <div className="space-y-2 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                  <div className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center mb-3">
                    <ArrowRightLeft className="w-5 h-5 text-green-500" />
                  </div>
                  <h3 className="font-semibold text-white text-sm">Entry & Exit Signals</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    AI-calculated entry prices for optimal buy-in points and exit prices to secure profits at the right time.
                  </p>
                </div>

                {/* Credits System */}
                <div className="space-y-2 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                  <div className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center mb-3">
                    <Beaker className="w-5 h-5 text-green-500" />
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
                    <Unlock className="w-5 h-5 text-green-500" />
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
              <Button
                variant="outline"
                size="sm"
                onClick={toggleAlerts}
                className={alertsEnabled ? "border-emerald-500/20" : ""}
              >
                {alertsEnabled ? (
                  <><Bell className="w-4 h-4 mr-2" /> Alerts On</>
                ) : (
                  <><BellOff className="w-4 h-4 mr-2" /> Alerts Off</>
                )}
              </Button>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* AI Analysis Feed - Scrollable */}
          <div className="space-y-3">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-foreground">AI Analysis Feed</h2>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-xs text-muted-foreground">Scanning Markets</span>
              </div>
            </div>

            <div className="h-[calc(100vh-200px)] overflow-y-auto pr-2 space-y-3 scrollbar-thin">
              {analyses.map((coin) => (
                <Card key={coin.id} className="bg-card border-border">
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
                      <div className="mt-4 pt-4 border-t border-border">
                        <div className="grid grid-cols-2 gap-4 text-xs">
                          <div>
                            <p className="text-muted-foreground mb-1">Entry</p>
                            <p className="font-semibold text-emerald-400">${formatPrice(coin.entryPrice)}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground mb-1">Target</p>
                            <p className="font-semibold text-foreground">${formatPrice(coin.exitPrice)}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground mb-1">24h</p>
                            <p className={`font-semibold ${coin.priceChange24h >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                              {coin.priceChange24h >= 0 ? '+' : ''}{coin.priceChange24h.toFixed(2)}%
                            </p>
                          </div>
                          <div>
                            <p className="text-muted-foreground mb-1">Confidence</p>
                            <p className="font-semibold text-foreground">{coin.confidence}%</p>
                          </div>
                        </div>
                      </div>
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

          {/* AI Calls - Genuine Signals */}
          <div className="space-y-3">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-foreground">AI Calls</h2>
              <Badge variant="outline" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                {aiCalls.length} Active
              </Badge>
            </div>

            <div className="h-[calc(100vh-200px)] overflow-y-auto pr-2 space-y-3 scrollbar-thin">
              {aiCalls.map((call) => (
                <Card key={call.id} className="bg-card border-border">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="text-3xl">{call.logo}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-bold text-foreground">{call.symbol}</h3>
                          {call.exitCalled && (
                            <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/20">
                              Exit Called
                            </Badge>
                          )}
                        </div>
                        
                        {/* Contract Address */}
                        <div className="mb-3 p-2 bg-muted/30 rounded border border-border">
                          <p className="text-xs text-muted-foreground mb-1">Contract Address</p>
                          <div className="flex items-center gap-2">
                            <code className="text-xs text-foreground font-mono truncate flex-1">
                              {call.contractAddress}
                            </code>
                            <button
                              onClick={() => copyToClipboard(call.contractAddress)}
                              className="shrink-0"
                            >
                              {copiedAddress === call.contractAddress ? (
                                <Check className="w-3 h-3 text-emerald-400" />
                              ) : (
                                <Copy className="w-3 h-3 text-muted-foreground hover:text-foreground" />
                              )}
                            </button>
                          </div>
                        </div>

                        {/* Price Info */}
                        <div className="grid grid-cols-2 gap-3 mb-3">
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Entry Price</p>
                            <p className="text-sm font-semibold text-foreground">${formatPrice(call.entryPrice)}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Current Price</p>
                            <p className="text-sm font-semibold text-foreground">${formatPrice(call.currentPrice)}</p>
                          </div>
                        </div>

                        {/* Growth */}
                        <div className="mb-3">
                          <div className="flex items-center justify-between mb-1">
                            <p className="text-xs text-muted-foreground">Growth</p>
                            <p className={`text-lg font-bold ${call.growthPercent >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                              {call.growthPercent >= 0 ? '+' : ''}{call.growthPercent.toFixed(2)}%
                            </p>
                          </div>
                          <Progress 
                            value={Math.min(Math.abs(call.growthPercent), 100)} 
                            className="h-2"
                          />
                        </div>

                        {/* Exit Info */}
                        {call.exitCalled && call.exitPrice && (
                          <div className="mb-3 p-2 bg-amber-500/5 rounded border border-amber-500/20">
                            <p className="text-xs text-muted-foreground mb-1">Exit Price</p>
                            <p className="text-sm font-semibold text-amber-400">${formatPrice(call.exitPrice)}</p>
                            <p className="text-xs text-muted-foreground mt-1">
                              Called {call.exitCalledAt?.toLocaleTimeString()}
                            </p>
                          </div>
                        )}

                        {/* Actions */}
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleViewInTerminal(call)}
                          className="w-full"
                        >
                          <ExternalLink className="w-3 h-3 mr-2" />
                          Open in Terminal
                        </Button>

                        <p className="text-xs text-muted-foreground mt-2">
                          Called at {call.calledAt.toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {aiCalls.length === 0 && (
                <Card className="bg-card border-border">
                  <CardContent className="p-12">
                    <div className="text-center text-muted-foreground">
                      <DollarSign className="w-12 h-12 mx-auto mb-3 opacity-50" />
                      <p className="text-sm">No AI calls yet</p>
                      <p className="text-xs mt-1">High-confidence signals will appear here</p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}