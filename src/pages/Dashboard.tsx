import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  MessageCircle, 
  BarChart3, 
  Zap, 
  Plus,
  Eye,
  RefreshCw
} from "lucide-react";
import Header from "@/components/Header";

interface AnalysisData {
  id: string;
  name: string;
  address: string;
  logo: string;
  status: 'analyzing' | 'completed' | 'failed';
  progress: number;
  aiScore: number;
  socialBuzz: {
    mentions: number;
    engagement: number;
    sentiment: 'positive' | 'negative' | 'neutral';
  };
  technical: {
    trend: 'up' | 'down' | 'sideways';
    holderCount: number;
    buysVsSells: number;
    volume24h: string;
  };
  timeRemaining?: string;
}

const mockAnalyses: AnalysisData[] = [
  {
    id: '1',
    name: 'DOGE',
    address: '0x74b23882a30290451A17c44f4F05243b6b58C76d',
    logo: '🐕',
    status: 'completed',
    progress: 100,
    aiScore: 85,
    socialBuzz: {
      mentions: 15420,
      engagement: 78,
      sentiment: 'positive'
    },
    technical: {
      trend: 'up',
      holderCount: 4256789,
      buysVsSells: 68,
      volume24h: '$2.4M'
    }
  },
  {
    id: '2',
    name: 'PEPE',
    address: '0x6982508145454Ce325dDbE47a25d4ec3d2311933',
    logo: '🐸',
    status: 'analyzing',
    progress: 65,
    aiScore: 0,
    socialBuzz: {
      mentions: 8930,
      engagement: 45,
      sentiment: 'neutral'
    },
    technical: {
      trend: 'up',
      holderCount: 1234567,
      buysVsSells: 0,
      volume24h: '$0'
    },
    timeRemaining: '1m 23s'
  },
  {
    id: '3',
    name: 'SHIB',
    address: '0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE',
    logo: '🐕',
    status: 'analyzing',
    progress: 25,
    aiScore: 0,
    socialBuzz: {
      mentions: 0,
      engagement: 0,
      sentiment: 'neutral'
    },
    technical: {
      trend: 'sideways',
      holderCount: 0,
      buysVsSells: 0,
      volume24h: '$0'
    },
    timeRemaining: '3m 12s'
  }
];

export default function Dashboard() {
  const [analyses, setAnalyses] = useState<AnalysisData[]>(mockAnalyses);
  const [refreshing, setRefreshing] = useState(false);

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setAnalyses(prev => prev.map(analysis => {
        if (analysis.status === 'analyzing' && analysis.progress < 100) {
          const newProgress = Math.min(analysis.progress + Math.random() * 10, 100);
          const isCompleted = newProgress >= 100;
          
          return {
            ...analysis,
            progress: newProgress,
            status: isCompleted ? 'completed' : 'analyzing',
            aiScore: isCompleted ? Math.floor(Math.random() * 40 + 60) : 0,
            timeRemaining: isCompleted ? undefined : `${Math.floor(Math.random() * 4)}m ${Math.floor(Math.random() * 60)}s`
          };
        }
        return analysis;
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-neon-green';
    if (score >= 60) return 'text-neon-cyan';
    if (score >= 40) return 'text-neon-purple';
    return 'text-red-400';
  };

  const getScoreBadge = (score: number) => {
    if (score >= 80) return 'MOON SHOT';
    if (score >= 60) return 'PROMISING';
    if (score >= 40) return 'RISKY';
    return 'AVOID';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-black/30 to-background">
      <div>
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">
              Multi-Analysis <span className="text-neon-cyan">Dashboard</span>
            </h1>
            <p className="text-muted-foreground">
              Track multiple coin analyses in real-time
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <Button
              onClick={handleRefresh}
              variant="outline"
              disabled={refreshing}
              className="border-neon-green/30 hover:border-neon-green"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            <Button className="bg-gradient-to-r from-neon-green to-neon-cyan text-black">
              <Plus className="w-4 h-4 mr-2" />
              Add New Analysis
            </Button>
          </div>
        </div>

        {/* Analytics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-card border-neon-green/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Active Analyses</p>
                  <p className="text-2xl font-bold text-neon-green">
                    {analyses.filter(a => a.status === 'analyzing').length}
                  </p>
                </div>
                <Zap className="w-8 h-8 text-neon-green" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-neon-cyan/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Completed</p>
                  <p className="text-2xl font-bold text-neon-cyan">
                    {analyses.filter(a => a.status === 'completed').length}
                  </p>
                </div>
                <BarChart3 className="w-8 h-8 text-neon-cyan" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-neon-purple/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Avg Score</p>
                  <p className="text-2xl font-bold text-neon-purple">
                    {Math.round(analyses.filter(a => a.status === 'completed').reduce((acc, a) => acc + a.aiScore, 0) / analyses.filter(a => a.status === 'completed').length || 0)}
                  </p>
                </div>
                <TrendingUp className="w-8 h-8 text-neon-purple" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Credits Used</p>
                  <p className="text-2xl font-bold">
                    {analyses.length * 30}
                  </p>
                </div>
                <Users className="w-8 h-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Analysis Cards */}
        <div className="space-y-6">
          {analyses.map((analysis) => (
            <Card key={analysis.id} className={`bg-gradient-card transition-all duration-500 ${
              analysis.status === 'analyzing' ? 'border-neon-cyan/50 shadow-lg shadow-neon-cyan/20' : 
              analysis.status === 'completed' ? 'border-neon-green/50' : 'border-red-500/50'
            }`}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-2xl">{analysis.logo}</span>
                    <div>
                      <span className="text-xl">{analysis.name}</span>
                      <p className="text-sm text-muted-foreground font-mono">
                        {analysis.address.slice(0, 10)}...{analysis.address.slice(-8)}
                      </p>
                    </div>
                  </CardTitle>
                  
                  <div className="flex items-center gap-3">
                    {analysis.status === 'analyzing' && (
                      <Badge variant="outline" className="border-neon-cyan text-neon-cyan">
                        <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse mr-2"></div>
                        {analysis.timeRemaining || 'Analyzing...'}
                      </Badge>
                    )}
                    {analysis.status === 'completed' && (
                      <Badge className={`${getScoreColor(analysis.aiScore)} border-current`}>
                        {getScoreBadge(analysis.aiScore)}
                      </Badge>
                    )}
                    <Button variant="ghost" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Progress Bar */}
                {analysis.status === 'analyzing' && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Analysis Progress</span>
                      <span className="text-neon-cyan">{Math.round(analysis.progress)}%</span>
                    </div>
                    <Progress 
                      value={analysis.progress} 
                      className="h-2 bg-black/50"
                    />
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Social Buzz */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-neon-green flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      Social Buzz
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Mentions</span>
                        <span className="font-medium">
                          {analysis.socialBuzz.mentions.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Engagement</span>
                        <span className="font-medium">{analysis.socialBuzz.engagement}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Sentiment</span>
                        <Badge variant="outline" className={
                          analysis.socialBuzz.sentiment === 'positive' ? 'border-neon-green text-neon-green' :
                          analysis.socialBuzz.sentiment === 'negative' ? 'border-red-400 text-red-400' :
                          'border-muted-foreground text-muted-foreground'
                        }>
                          {analysis.socialBuzz.sentiment}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Technical Strength */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-neon-cyan flex items-center gap-2">
                      <BarChart3 className="w-4 h-4" />
                      Technical Strength
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Trend</span>
                        <div className="flex items-center gap-1">
                          {analysis.technical.trend === 'up' ? (
                            <TrendingUp className="w-4 h-4 text-neon-green" />
                          ) : analysis.technical.trend === 'down' ? (
                            <TrendingDown className="w-4 h-4 text-red-400" />
                          ) : (
                            <div className="w-4 h-px bg-muted-foreground" />
                          )}
                          <span className="font-medium capitalize">{analysis.technical.trend}</span>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Holders</span>
                        <span className="font-medium">
                          {analysis.technical.holderCount.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Buys vs Sells</span>
                        <span className="font-medium">{analysis.technical.buysVsSells}% buys</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">24h Volume</span>
                        <span className="font-medium">{analysis.technical.volume24h}</span>
                      </div>
                    </div>
                  </div>

                  {/* AI Verdict */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-neon-purple flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      AI Verdict
                    </h4>
                    {analysis.status === 'completed' ? (
                      <div className="text-center">
                        <div className={`text-4xl font-bold ${getScoreColor(analysis.aiScore)} mb-2`}>
                          {analysis.aiScore}/100
                        </div>
                        <Badge className={`${getScoreColor(analysis.aiScore)} border-current`}>
                          {getScoreBadge(analysis.aiScore)}
                        </Badge>
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <div className="animate-spin rounded-full h-8 w-8 border-2 border-neon-cyan border-t-transparent mx-auto mb-2"></div>
                        <p className="text-sm text-muted-foreground">Calculating...</p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}