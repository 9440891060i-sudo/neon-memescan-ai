import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Trophy, 
  Medal, 
  Award, 
  TrendingUp, 
  Brain,
  User,
  Crown,
  Zap,
  Target
} from "lucide-react";
import MemeCoinTicker from "@/components/MemeCoinTicker";
import Header from "@/components/Header";

interface LeaderboardEntry {
  rank: number;
  name: string;
  avatar?: string;
  score: number;
  accuracy: number;
  picks: number;
  totalReturn: string;
  bestPick: {
    coin: string;
    return: string;
    logo: string;
  };
  badge?: string;
}

const aiLeaderboard: LeaderboardEntry[] = [
  {
    rank: 1,
    name: "Klux AI Alpha",
    score: 94,
    accuracy: 87,
    picks: 342,
    totalReturn: "+2,847%",
    bestPick: { coin: "BONK", return: "+15,420%", logo: "🐕" },
    badge: "🥇 LEGENDARY"
  },
  {
    rank: 2,
    name: "Klux AI Beta",
    score: 91,
    accuracy: 82,
    picks: 298,
    totalReturn: "+2,341%",
    bestPick: { coin: "WIF", return: "+8,932%", logo: "🐕" }
  },
  {
    rank: 3,
    name: "Klux AI Gamma",
    score: 88,
    accuracy: 79,
    picks: 276,
    totalReturn: "+1,923%",
    bestPick: { coin: "POPCAT", return: "+6,721%", logo: "🐱" }
  },
  {
    rank: 4,
    name: "Klux AI Delta",
    score: 85,
    accuracy: 74,
    picks: 234,
    totalReturn: "+1,654%",
    bestPick: { coin: "BRETT", return: "+4,532%", logo: "🐸" }
  },
  {
    rank: 5,
    name: "Klux AI Epsilon",
    score: 82,
    accuracy: 71,
    picks: 198,
    totalReturn: "+1,432%",
    bestPick: { coin: "MICHI", return: "+3,891%", logo: "🐱" }
  }
];

const traderLeaderboard: LeaderboardEntry[] = [
  {
    rank: 1,
    name: "CryptoWhale88",
    avatar: "CW",
    score: 89,
    accuracy: 76,
    picks: 156,
    totalReturn: "+1,923%",
    bestPick: { coin: "PEPE", return: "+12,000%", logo: "🐸" },
    badge: "👑 KING"
  },
  {
    rank: 2,
    name: "MemeGod2024",
    avatar: "MG",
    score: 84,
    accuracy: 71,
    picks: 203,
    totalReturn: "+1,654%",
    bestPick: { coin: "SHIB", return: "+8,500%", logo: "🐕" }
  },
  {
    rank: 3,
    name: "DiamondHands",
    avatar: "DH",
    score: 81,
    accuracy: 68,
    picks: 178,
    totalReturn: "+1,432%",
    bestPick: { coin: "DOGE", return: "+6,200%", logo: "🐕" }
  },
  {
    rank: 4,
    name: "MoonHunter",
    avatar: "MH",
    score: 78,
    accuracy: 65,
    picks: 134,
    totalReturn: "+1,234%",
    bestPick: { coin: "FLOKI", return: "+4,800%", logo: "🐕" }
  },
  {
    rank: 5,
    name: "DegenTrader",
    avatar: "DT",
    score: 75,
    accuracy: 62,
    picks: 245,
    totalReturn: "+987%",
    bestPick: { coin: "BABYDOGE", return: "+3,400%", logo: "🐶" }
  }
];

const timeframes = [
  { label: "Daily", value: "daily" },
  { label: "Weekly", value: "weekly" },
  { label: "Monthly", value: "monthly" }
];

export default function Leaderboard() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("weekly");

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-6 h-6 text-yellow-400" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Award className="w-6 h-6 text-amber-600" />;
      default:
        return <span className="text-xl font-bold text-muted-foreground">#{rank}</span>;
    }
  };

  const getPodiumHeight = (rank: number) => {
    switch (rank) {
      case 1: return "h-32";
      case 2: return "h-24";
      case 3: return "h-20";
      default: return "h-16";
    }
  };

  const LeaderboardCard = ({ entry, type }: { entry: LeaderboardEntry; type: 'ai' | 'trader' }) => (
    <Card className={`bg-gradient-card transition-all duration-300 hover:scale-[1.02] ${
      entry.rank <= 3 ? `border-neon-${entry.rank === 1 ? 'green' : entry.rank === 2 ? 'cyan' : 'purple'}/50 shadow-lg` : 'border-border'
    }`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-neon-green/20 to-neon-cyan/20">
              {getRankIcon(entry.rank)}
            </div>
            
            <div className="flex items-center gap-3">
              {type === 'trader' ? (
                <Avatar className="w-10 h-10">
                  <AvatarFallback className="bg-neon-purple/20 text-neon-purple font-bold">
                    {entry.avatar}
                  </AvatarFallback>
                </Avatar>
              ) : (
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-cyan/30 to-neon-purple/30 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-neon-cyan" />
                </div>
              )}
              
              <div>
                <h3 className="font-bold text-lg flex items-center gap-2">
                  {entry.name}
                  {entry.badge && (
                    <Badge variant="outline" className="text-xs border-neon-green text-neon-green">
                      {entry.badge}
                    </Badge>
                  )}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {entry.picks} picks • {entry.accuracy}% accuracy
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-2xl font-bold text-neon-green">{entry.totalReturn}</div>
            <div className="text-sm text-muted-foreground">Total Return</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-black/30 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-4 h-4 text-neon-cyan" />
              <span className="text-sm text-muted-foreground">Score</span>
            </div>
            <div className="text-xl font-bold text-neon-cyan">{entry.score}/100</div>
          </div>
          
          <div className="bg-black/30 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-neon-purple" />
              <span className="text-sm text-muted-foreground">Best Pick</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">{entry.bestPick.logo}</span>
              <div>
                <div className="font-bold text-sm">{entry.bestPick.coin}</div>
                <div className="text-xs text-neon-green">{entry.bestPick.return}</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const PodiumDisplay = ({ entries, type }: { entries: LeaderboardEntry[]; type: 'ai' | 'trader' }) => (
    <div className="mb-12">
      <div className="flex items-end justify-center gap-4 mb-8">
        {[2, 1, 3].map((position) => {
          const entry = entries.find(e => e.rank === position);
          if (!entry) return null;
          
          return (
            <div key={position} className="text-center">
              <Card className={`${getPodiumHeight(position)} w-32 bg-gradient-to-t ${
                position === 1 ? 'from-neon-green/20 to-neon-green/5 border-neon-green/50' :
                position === 2 ? 'from-neon-cyan/20 to-neon-cyan/5 border-neon-cyan/50' :
                'from-neon-purple/20 to-neon-purple/5 border-neon-purple/50'
              } flex items-center justify-center`}>
                <div className="text-center">
                  {getRankIcon(position)}
                  <div className="mt-2">
                    {type === 'trader' ? (
                      <Avatar className="w-8 h-8 mx-auto mb-1">
                        <AvatarFallback className="bg-neon-purple/20 text-neon-purple text-xs">
                          {entry.avatar}
                        </AvatarFallback>
                      </Avatar>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-cyan/30 to-neon-purple/30 flex items-center justify-center mx-auto mb-1">
                        <Brain className="w-4 h-4 text-neon-cyan" />
                      </div>
                    )}
                    <div className="text-xs font-bold truncate">{entry.name}</div>
                    <div className="text-xs text-neon-green">{entry.totalReturn}</div>
                  </div>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-black/30 to-background">
      <MemeCoinTicker />
      <Header />
      <div className="pt-32">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-neon-green">Performance</span> Leaderboard
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Compare AI predictions vs top human traders in the ultimate meme coin challenge
          </p>
        </div>

        {/* Timeframe Selector */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-2 bg-black/50 rounded-lg p-2">
            {timeframes.map((timeframe) => (
              <button
                key={timeframe.value}
                onClick={() => setSelectedTimeframe(timeframe.value)}
                className={`px-6 py-2 rounded-md transition-all duration-200 ${
                  selectedTimeframe === timeframe.value
                    ? 'bg-neon-green text-black font-bold'
                    : 'text-muted-foreground hover:text-white'
                }`}
              >
                {timeframe.label}
              </button>
            ))}
          </div>
        </div>

        {/* Leaderboard Tabs */}
        <Tabs defaultValue="ai" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-black/50">
            <TabsTrigger value="ai" className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              AI Leaderboard
            </TabsTrigger>
            <TabsTrigger value="traders" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Manual Traders
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ai" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">
                🤖 <span className="text-neon-cyan">AI Champions</span>
              </h2>
              <p className="text-muted-foreground">
                Our AI models ranked by prediction accuracy and returns
              </p>
            </div>
            
            <PodiumDisplay entries={aiLeaderboard.slice(0, 3)} type="ai" />
            
            <div className="space-y-4">
              {aiLeaderboard.map((entry) => (
                <LeaderboardCard key={entry.rank} entry={entry} type="ai" />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="traders" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">
                🏆 <span className="text-neon-purple">Human Legends</span>
              </h2>
              <p className="text-muted-foreground">
                Top manual traders competing against our AI
              </p>
            </div>
            
            <PodiumDisplay entries={traderLeaderboard.slice(0, 3)} type="trader" />
            
            <div className="space-y-4">
              {traderLeaderboard.map((entry) => (
                <LeaderboardCard key={entry.rank} entry={entry} type="trader" />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* AI vs Human Comparison */}
        <Card className="mt-16 bg-gradient-card border-neon-green/30">
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              🤖 AI vs 👨‍💼 Human Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Brain className="w-6 h-6 text-neon-cyan" />
                  <h3 className="text-xl font-bold text-neon-cyan">AI Average</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="text-2xl font-bold text-neon-green">+2,039%</div>
                    <div className="text-sm text-muted-foreground">Avg Return</div>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="text-2xl font-bold text-neon-cyan">78.6%</div>
                    <div className="text-sm text-muted-foreground">Accuracy</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <User className="w-6 h-6 text-neon-purple" />
                  <h3 className="text-xl font-bold text-neon-purple">Human Average</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="text-2xl font-bold text-neon-green">+1,446%</div>
                    <div className="text-sm text-muted-foreground">Avg Return</div>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="text-2xl font-bold text-neon-purple">68.4%</div>
                    <div className="text-sm text-muted-foreground">Accuracy</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-6">
              <Badge className="bg-gradient-to-r from-neon-green to-neon-cyan text-black px-6 py-2">
                🏆 AI Leading by +593% Average Return
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
      </div>
    </div>
  );
}