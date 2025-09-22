import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Brain,
  Target,
  Activity,
  BarChart3,
  Zap,
  CheckCircle,
  Clock,
  Calendar,
  Sparkles
} from "lucide-react";
import Header from "@/components/Header";
import { useAuthStore } from "@/store/authStore";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import { AnimatedChart } from "@/components/AnimatedChart";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface PerformanceMetrics {
  coinsAnalyzed: number;
  worthyPicks: number;
  accuracyRate: number;
  averageReturn: number;
  successfulPicks: {
    coin: string;
    return: number;
    logo: string;
    timestamp: string;
  }[];
}

const performanceData = {
  today: {
    coinsAnalyzed: 47,
    worthyPicks: 12,
    accuracyRate: 89.3,
    averageReturn: 124.7,
    successfulPicks: [
      { coin: "BONK", return: 167, logo: "🐕", timestamp: "2h ago" },
      { coin: "WIF", return: 124, logo: "🐕", timestamp: "4h ago" },
      { coin: "PEPE", return: 89, logo: "🐸", timestamp: "6h ago" },
      { coin: "FLOKI", return: 63, logo: "🐕", timestamp: "8h ago" }
    ]
  },
  week: {
    coinsAnalyzed: 342,
    worthyPicks: 89,
    accuracyRate: 91.7,
    averageReturn: 156.3,
    successfulPicks: [
      { coin: "POPCAT", return: 421, logo: "🐱", timestamp: "2 days ago" },
      { coin: "BRETT", return: 298, logo: "🐸", timestamp: "3 days ago" },
      { coin: "MOG", return: 234, logo: "🐱", timestamp: "4 days ago" },
      { coin: "MICHI", return: 187, logo: "🐱", timestamp: "5 days ago" }
    ]
  },
  month: {
    coinsAnalyzed: 1456,
    worthyPicks: 387,
    accuracyRate: 88.9,
    averageReturn: 198.4,
    successfulPicks: [
      { coin: "WIF", return: 1247, logo: "🐕", timestamp: "12 days ago" },
      { coin: "BONK", return: 892, logo: "🐕", timestamp: "18 days ago" },
      { coin: "PEPE", return: 634, logo: "🐸", timestamp: "21 days ago" },
      { coin: "SHIB", return: 456, logo: "🐕", timestamp: "25 days ago" }
    ]
  }
};

const chartData = [
  { name: 'Week 1', accuracy: 87, return: 145 },
  { name: 'Week 2', accuracy: 89, return: 167 },
  { name: 'Week 3', accuracy: 92, return: 189 },
  { name: 'Week 4', accuracy: 91, return: 198 }
];

const timeframes = [
  { label: "Today", value: "today", icon: Clock },
  { label: "This Week", value: "week", icon: Calendar },
  { label: "This Month", value: "month", icon: BarChart3 }
];

export default function Performance() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("week");
  const { ref: metricsRef, isIntersecting: metricsVisible } = useIntersectionObserver();
  const { ref: chartRef, isIntersecting: chartVisible } = useIntersectionObserver();
  const { isAuthenticated } = useAuthStore();

  const currentData = performanceData[selectedTimeframe as keyof typeof performanceData];

  const MetricCard = ({ 
    title, 
    value, 
    unit, 
    icon: Icon, 
    trend, 
    description,
    formatter 
  }: {
    title: string;
    value: number;
    unit?: string;
    icon: any;
    trend?: number;
    description: string;
    formatter?: (val: number) => string;
  }) => (
    <Card className="bg-gradient-to-br from-card/80 to-card/40 border-border/50 hover:border-primary/30 transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-medium text-muted-foreground">{title}</h3>
          </div>
          {trend && (
            <Badge variant={trend > 0 ? "default" : "secondary"} className="text-xs">
              {trend > 0 ? "+" : ""}{trend}%
            </Badge>
          )}
        </div>
        
        <div className="space-y-2">
          <div className="text-3xl font-bold tracking-tight">
            <AnimatedNumber 
              value={value} 
              isVisible={metricsVisible}
              formatter={formatter || ((val) => `${val}${unit || ""}`)}
              className="text-primary"
            />
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );

  const WorthyPickCard = ({ pick, index }: { pick: any; index: number }) => (
    <Card className="bg-gradient-to-r from-card/60 to-card/20 border-border/30 hover:border-primary/20 transition-all duration-200">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-2xl">{pick.logo}</div>
            <div>
              <div className="font-bold text-sm">{pick.coin}</div>
              <div className="text-xs text-muted-foreground">{pick.timestamp}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-bold text-lg text-primary">
              +<AnimatedNumber 
                value={pick.return} 
                isVisible={metricsVisible}
                formatter={(val) => `${val}%`}
              />
            </div>
            <div className="text-xs text-muted-foreground">Return</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background">
      {!isAuthenticated && <Header />}
      <div className={isAuthenticated ? "pt-8" : "pt-32"}>
        <div className="w-full px-6 py-8 max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-12" ref={metricsRef as any}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-5xl font-bold">
                Klux AI <span className="text-primary">Performance</span>
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-time performance metrics showcasing our AI's scanning reliability, 
              filtering accuracy, and consistent market outperformance
            </p>
          </div>

          {/* Timeframe Selector */}
          <div className="flex justify-center mb-8">
            <div className="flex gap-1 bg-card/50 rounded-xl p-1 border border-border/50">
              {timeframes.map((timeframe) => {
                const Icon = timeframe.icon;
                return (
                  <button
                    key={timeframe.value}
                    onClick={() => setSelectedTimeframe(timeframe.value)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-200 ${
                      selectedTimeframe === timeframe.value
                        ? 'bg-primary text-primary-foreground shadow-lg'
                        : 'text-muted-foreground hover:text-foreground hover:bg-card/30'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {timeframe.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Key Performance Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <MetricCard
              title="Coins Analyzed"
              value={currentData.coinsAnalyzed}
              icon={Activity}
              trend={12}
              description="Total scanned and evaluated"
              formatter={(val) => val.toLocaleString()}
            />
            <MetricCard
              title="Worthy Selections"
              value={currentData.worthyPicks}
              icon={CheckCircle}
              trend={8}
              description="Passed AI quality filter"
            />
            <MetricCard
              title="Success Rate"
              value={currentData.accuracyRate}
              unit="%"
              icon={Target}
              trend={3}
              description="Prediction accuracy"
              formatter={(val) => val.toFixed(1)}
            />
            <MetricCard
              title="Average Return"
              value={currentData.averageReturn}
              unit="%"
              icon={TrendingUp}
              trend={15}
              description="Per worthy selection"
              formatter={(val) => val.toFixed(1)}
            />
          </div>

          {/* Performance Charts & Worthy Picks */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            
            {/* Performance Chart */}
            <div className="lg:col-span-2" ref={chartRef as any}>
              <Card className="bg-gradient-to-br from-card/80 to-card/40 border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-primary" />
                    Weekly Performance Trend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <AnimatedChart
                      data={chartData}
                      lines={[
                        { 
                          dataKey: 'accuracy', 
                          stroke: 'hsl(var(--primary))' 
                        },
                        { 
                          dataKey: 'return', 
                          stroke: 'hsl(var(--chart-2))' 
                        }
                      ]}
                      isVisible={chartVisible}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Worthy Picks */}
            <div>
              <Card className="bg-gradient-to-br from-card/80 to-card/40 border-border/50 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    Top Worthy Picks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {currentData.successfulPicks.map((pick, index) => (
                      <WorthyPickCard key={index} pick={pick} index={index} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* AI Reliability Report */}
          <Card className="bg-gradient-to-r from-primary/5 via-card/50 to-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-center text-2xl flex items-center justify-center gap-3">
                <Brain className="w-6 h-6 text-primary" />
                AI System Reliability Report
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <div className="text-center space-y-4">
                  <div className="p-4 rounded-xl bg-card/30 border border-border/30">
                    <h3 className="font-semibold mb-2 flex items-center justify-center gap-2">
                      <Zap className="w-4 h-4 text-primary" />
                      Scanning Efficiency
                    </h3>
                    <div className="text-3xl font-bold text-primary mb-2">
                      <AnimatedNumber 
                        value={97.3} 
                        isVisible={metricsVisible}
                        formatter={(val) => `${val.toFixed(1)}%`}
                      />
                    </div>
                    <Progress value={97.3} className="h-2 mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Market coverage & data processing
                    </p>
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <div className="p-4 rounded-xl bg-card/30 border border-border/30">
                    <h3 className="font-semibold mb-2 flex items-center justify-center gap-2">
                      <Target className="w-4 h-4 text-primary" />
                      Filter Precision
                    </h3>
                    <div className="text-3xl font-bold text-primary mb-2">
                      <AnimatedNumber 
                        value={94.7} 
                        isVisible={metricsVisible}
                        formatter={(val) => `${val.toFixed(1)}%`}
                      />
                    </div>
                    <Progress value={94.7} className="h-2 mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Quality selection accuracy
                    </p>
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <div className="p-4 rounded-xl bg-card/30 border border-border/30">
                    <h3 className="font-semibold mb-2 flex items-center justify-center gap-2">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      Prediction Success
                    </h3>
                    <div className="text-3xl font-bold text-primary mb-2">
                      <AnimatedNumber 
                        value={currentData.accuracyRate} 
                        isVisible={metricsVisible}
                        formatter={(val) => `${val.toFixed(1)}%`}
                      />
                    </div>
                    <Progress value={currentData.accuracyRate} className="h-2 mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Profitable outcome rate
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <Badge className="bg-primary/10 text-primary border-primary/20 px-6 py-2 text-sm">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  System Operating at Peak Performance
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}