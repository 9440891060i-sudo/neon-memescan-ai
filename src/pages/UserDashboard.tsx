import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart3, 
  TrendingUp, 
  Zap, 
  CreditCard, 
  Target,
  Search,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import MemeCoinTicker from "@/components/MemeCoinTicker";
import Header from "@/components/Header";
import { useToast } from "@/hooks/use-toast";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface AnalysisResult {
  id: string;
  tokenName: string;
  contractAddress: string;
  aiScore: number;
  status: 'analyzing' | 'completed';
  progress: number;
  twitterMentions: number[];
  holderGrowth: number[];
  buyVsSell: { buys: number; sells: number }[];
  burnedSupply: number[];
  isExpanded: boolean;
}

const UserDashboard = () => {
  const [contractAddress, setContractAddress] = useState("");
  const [analyses, setAnalyses] = useState<AnalysisResult[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  // Mock user stats
  const userStats = {
    creditsRemaining: 150,
    analysesRun: 23,
    accuracyRate: 87.2
  };

  const handleAnalyze = () => {
    if (!contractAddress.trim()) {
      toast({
        title: "Error",
        description: "Please enter a contract address",
        variant: "destructive"
      });
      return;
    }

    const newAnalysis: AnalysisResult = {
      id: Date.now().toString(),
      tokenName: `Token_${Math.random().toString(36).substr(2, 6)}`,
      contractAddress,
      aiScore: 0,
      status: 'analyzing',
      progress: 0,
      twitterMentions: [],
      holderGrowth: [],
      buyVsSell: [],
      burnedSupply: [],
      isExpanded: false
    };

    setAnalyses(prev => [newAnalysis, ...prev]);
    setContractAddress("");
    setIsAnalyzing(true);

    // Simulate analysis progress
    const interval = setInterval(() => {
      setAnalyses(prev => prev.map(analysis => {
        if (analysis.id === newAnalysis.id && analysis.status === 'analyzing') {
          const newProgress = Math.min(analysis.progress + Math.random() * 15, 100);
          
          if (newProgress >= 100) {
            clearInterval(interval);
            setIsAnalyzing(false);
            
            return {
              ...analysis,
              status: 'completed' as const,
              progress: 100,
              aiScore: Math.floor(Math.random() * 40) + 60, // 60-100 score
              twitterMentions: Array.from({length: 7}, () => Math.floor(Math.random() * 1000)),
              holderGrowth: Array.from({length: 7}, () => Math.floor(Math.random() * 500)),
              buyVsSell: Array.from({length: 7}, () => ({
                buys: Math.floor(Math.random() * 100),
                sells: Math.floor(Math.random() * 100)
              })),
              burnedSupply: Array.from({length: 7}, () => Math.floor(Math.random() * 10000))
            };
          }
          
          return { ...analysis, progress: newProgress };
        }
        return analysis;
      }));
    }, 500);

    toast({
      title: "Analysis Started",
      description: "AI is now analyzing the token data...",
    });
  };

  const toggleExpanded = (id: string) => {
    setAnalyses(prev => prev.map(analysis => 
      analysis.id === id ? { ...analysis, isExpanded: !analysis.isExpanded } : analysis
    ));
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-400";
    if (score >= 60) return "text-yellow-400";
    return "text-red-400";
  };

  const getScoreBadge = (score: number) => {
    if (score >= 80) return { label: "BULLISH", variant: "default" as const };
    if (score >= 60) return { label: "NEUTRAL", variant: "secondary" as const };
    return { label: "BEARISH", variant: "destructive" as const };
  };

  return (
    <div className="min-h-screen bg-background">
      <MemeCoinTicker />
      <Header />
      
      <main className="pt-28 container mx-auto px-4 py-8">
        {/* User Stats Panel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-neon-green/20 bg-black/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Credits Remaining</CardTitle>
              <CreditCard className="h-4 w-4 text-neon-green" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-neon-green">{userStats.creditsRemaining}</div>
              <p className="text-xs text-muted-foreground">30 credits per analysis</p>
            </CardContent>
          </Card>

          <Card className="border-neon-green/20 bg-black/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Analyses Run</CardTitle>
              <BarChart3 className="h-4 w-4 text-neon-green" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userStats.analysesRun}</div>
              <p className="text-xs text-muted-foreground">Total tokens analyzed</p>
            </CardContent>
          </Card>

          <Card className="border-neon-green/20 bg-black/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Accuracy Rate</CardTitle>
              <Target className="h-4 w-4 text-neon-green" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-400">{userStats.accuracyRate}%</div>
              <p className="text-xs text-muted-foreground">AI prediction accuracy</p>
            </CardContent>
          </Card>
        </div>

        {/* Analyze Section */}
        <Card className="border-neon-green/20 bg-black/50 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5 text-neon-green" />
              Token Analysis
            </CardTitle>
            <CardDescription>
              Paste a contract address to start AI-powered analysis
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Input
                placeholder="Paste contract address here..."
                value={contractAddress}
                onChange={(e) => setContractAddress(e.target.value)}
                className="flex-1 border-neon-green/20 focus:border-neon-green"
              />
              <Button 
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                variant="neon"
                className="px-8"
              >
                {isAnalyzing ? "Analyzing..." : "Analyze (30 Credits)"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Analysis Results */}
        <div className="space-y-4">
          {analyses.map((analysis) => (
            <Card key={analysis.id} className="border-neon-green/20 bg-black/50">
              <Collapsible open={analysis.isExpanded} onOpenChange={() => toggleExpanded(analysis.id)}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div>
                        <CardTitle className="text-lg">{analysis.tokenName}</CardTitle>
                        <CardDescription className="font-mono text-xs">
                          {analysis.contractAddress}
                        </CardDescription>
                      </div>
                      {analysis.status === 'analyzing' && (
                        <Badge variant="secondary" className="animate-pulse">
                          Analyzing...
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-4">
                      {analysis.status === 'completed' && (
                        <div className="text-right">
                          <div className={`text-3xl font-bold ${getScoreColor(analysis.aiScore)}`}>
                            {analysis.aiScore}
                          </div>
                          <Badge {...getScoreBadge(analysis.aiScore)}>
                            {getScoreBadge(analysis.aiScore).label}
                          </Badge>
                        </div>
                      )}
                      
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="sm">
                          {analysis.isExpanded ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </Button>
                      </CollapsibleTrigger>
                    </div>
                  </div>
                  
                  {analysis.status === 'analyzing' && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Analysis Progress</span>
                        <span>{Math.round(analysis.progress)}%</span>
                      </div>
                      <Progress value={analysis.progress} className="h-2" />
                    </div>
                  )}
                </CardHeader>

                <CollapsibleContent>
                  {analysis.status === 'completed' && (
                    <CardContent className="pt-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Mock Chart Placeholders */}
                        <Card className="bg-black/30 border-neon-green/10">
                          <CardHeader className="pb-3">
                            <CardTitle className="text-sm">Twitter Mentions</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="h-32 bg-gradient-to-r from-neon-green/20 to-transparent rounded flex items-end justify-between px-2">
                              {analysis.twitterMentions.map((value, i) => (
                                <div 
                                  key={i} 
                                  className="bg-neon-green w-2 rounded-t"
                                  style={{ height: `${(value / Math.max(...analysis.twitterMentions)) * 100}%` }}
                                />
                              ))}
                            </div>
                            <p className="text-xs text-muted-foreground mt-2">
                              Peak: {Math.max(...analysis.twitterMentions)} mentions
                            </p>
                          </CardContent>
                        </Card>

                        <Card className="bg-black/30 border-neon-green/10">
                          <CardHeader className="pb-3">
                            <CardTitle className="text-sm">Holder Growth</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="h-32 bg-gradient-to-r from-blue-500/20 to-transparent rounded flex items-end justify-between px-2">
                              {analysis.holderGrowth.map((value, i) => (
                                <div 
                                  key={i} 
                                  className="bg-blue-500 w-2 rounded-t"
                                  style={{ height: `${(value / Math.max(...analysis.holderGrowth)) * 100}%` }}
                                />
                              ))}
                            </div>
                            <p className="text-xs text-muted-foreground mt-2">
                              Total: {analysis.holderGrowth.reduce((a, b) => a + b, 0)} new holders
                            </p>
                          </CardContent>
                        </Card>

                        <Card className="bg-black/30 border-neon-green/10">
                          <CardHeader className="pb-3">
                            <CardTitle className="text-sm">Buy vs Sell Activity</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="h-32 flex items-end justify-between px-2">
                              {analysis.buyVsSell.map((data, i) => (
                                <div key={i} className="flex flex-col w-4 gap-1">
                                  <div 
                                    className="bg-green-500 w-full rounded-t"
                                    style={{ height: `${(data.buys / 100) * 60}px` }}
                                  />
                                  <div 
                                    className="bg-red-500 w-full rounded-b"
                                    style={{ height: `${(data.sells / 100) * 60}px` }}
                                  />
                                </div>
                              ))}
                            </div>
                            <div className="flex justify-between text-xs mt-2">
                              <span className="text-green-400">● Buys</span>
                              <span className="text-red-400">● Sells</span>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="bg-black/30 border-neon-green/10">
                          <CardHeader className="pb-3">
                            <CardTitle className="text-sm">Burned Supply</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="h-32 bg-gradient-to-r from-orange-500/20 to-transparent rounded relative">
                              <svg className="w-full h-full">
                                <polyline
                                  points={analysis.burnedSupply.map((value, i) => 
                                    `${(i / (analysis.burnedSupply.length - 1)) * 100},${100 - (value / Math.max(...analysis.burnedSupply)) * 80}`
                                  ).join(' ')}
                                  fill="none"
                                  stroke="rgb(249 115 22)"
                                  strokeWidth="2"
                                  vectorEffect="non-scaling-stroke"
                                />
                              </svg>
                            </div>
                            <p className="text-xs text-muted-foreground mt-2">
                              Total burned: {analysis.burnedSupply.reduce((a, b) => a + b, 0).toLocaleString()} tokens
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </CardContent>
                  )}
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
          
          {analyses.length === 0 && (
            <Card className="border-dashed border-neon-green/20 bg-black/20">
              <CardContent className="flex items-center justify-center py-12">
                <div className="text-center">
                  <Zap className="w-12 h-12 text-neon-green/50 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No analyses yet</h3>
                  <p className="text-muted-foreground">
                    Start by pasting a contract address above to begin your first AI analysis
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;