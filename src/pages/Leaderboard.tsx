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
  },
  max: {
    coinsAnalyzed: 8942,
    worthyPicks: 2134,
    accuracyRate: 90.2,
    averageReturn: 243.8,
    successfulPicks: [
      { coin: "DOGE", return: 4567, logo: "🐕", timestamp: "3 months ago" },
      { coin: "SHIB", return: 3421, logo: "🐕", timestamp: "4 months ago" },
      { coin: "PEPE", return: 2891, logo: "🐸", timestamp: "5 months ago" },
      { coin: "FLOKI", return: 1987, logo: "🐕", timestamp: "6 months ago" }
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
  { label: "Today", value: "today" },
  { label: "7 days", value: "week" },
  { label: "30 days", value: "month" },
  { label: "Max", value: "max" }
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
    <Card className="bg-gradient-to-br from-black/90 to-gray-950/80 border-gray-800/60 hover:border-primary/40 transition-all duration-300 shadow-2xl">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/20 shadow-lg shadow-primary/20">
              <Icon className="w-5 h-5 text-primary drop-shadow-sm" />
            </div>
            <h3 className="font-semibold text-gray-200">{title}</h3>
          </div>
          {trend && (
            <Badge 
              variant={trend > 0 ? "default" : "secondary"} 
              className={`text-xs font-semibold ${
                trend > 0 
                  ? "bg-green-500/20 text-green-400 border-green-500/30" 
                  : "bg-red-500/20 text-red-400 border-red-500/30"
              } shadow-sm`}
            >
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
              className="text-white drop-shadow-md"
            />
          </div>
          <p className="text-sm text-gray-400 font-medium">{description}</p>
        </div>
      </CardContent>
    </Card>
  );

  const WorthyPickCard = ({ pick, index }: { pick: any; index: number }) => (
    <Card className="bg-gradient-to-r from-black/80 to-gray-950/60 border-gray-800/50 hover:border-green-500/30 transition-all duration-200 shadow-xl">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-2xl bg-gray-900/60 w-10 h-10 rounded-lg flex items-center justify-center border border-gray-800/50">
              {pick.logo}
            </div>
            <div>
              <div className="font-bold text-sm text-white">{pick.coin}</div>
              <div className="text-xs text-gray-400">{pick.timestamp}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-bold text-lg text-green-400/90 drop-shadow-sm">
              +<AnimatedNumber 
                value={pick.return} 
                isVisible={metricsVisible}
                formatter={(val) => `${val}%`}
              />
            </div>
            <div className="text-xs text-gray-500 font-medium">Return</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950/95 to-black">
      {!isAuthenticated && <Header />}
      <div className={isAuthenticated ? "pt-8" : "pt-32"}>
        <div className="w-full px-6 py-8 max-w-7xl mx-auto">
          

          {/* Timeframe Selector */}
          <div className="flex justify-center mb-12 -mt-4">
            <div className="flex gap-1 bg-black/60 rounded-xl p-1 border border-gray-800/60 shadow-xl">
              {timeframes.map((timeframe) => {
                return (
                  <button
                    key={timeframe.value}
                    onClick={() => setSelectedTimeframe(timeframe.value)}
                    className={`px-6 py-3 rounded-lg transition-all duration-200 font-semibold ${
                      selectedTimeframe === timeframe.value
                        ? 'bg-primary text-white shadow-lg shadow-primary/20'
                        : 'text-gray-400 hover:text-white hover:bg-gray-900/50'
                    }`}
                  >
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
              <Card className="bg-gradient-to-br from-black/90 to-gray-950/80 border-gray-800/60 shadow-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <BarChart3 className="w-5 h-5 text-primary drop-shadow-sm" />
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
                          stroke: 'hsl(var(--primary))',
                          strokeDasharray: '5 5'
                        },
                        { 
                          dataKey: 'return', 
                          stroke: '#10b981' 
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
              <Card className="bg-gradient-to-br from-black/90 to-gray-950/80 border-gray-800/60 h-full shadow-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Sparkles className="w-5 h-5 text-primary drop-shadow-sm" />
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
          <Card className="bg-gradient-to-r from-black/90 via-gray-950/80 to-black/90 border-gray-800/60 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-center text-2xl flex items-center justify-center gap-3 text-white">
                <Brain className="w-6 h-6 text-primary drop-shadow-sm" />
                AI System Reliability Report
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <div className="text-center space-y-4">
                  <div className="p-4 rounded-xl bg-gray-900/60 border border-gray-800/60 shadow-lg">
                    <h3 className="font-semibold mb-2 flex items-center justify-center gap-2 text-gray-200">
                      <Zap className="w-4 h-4 text-green-400/80" />
                      Scanning Efficiency
                    </h3>
                    <div className="text-3xl font-bold text-green-400/90 mb-2 drop-shadow-sm">
                      <AnimatedNumber 
                        value={97.3} 
                        isVisible={metricsVisible}
                        formatter={(val) => `${val.toFixed(1)}%`}
                      />
                    </div>
                    <Progress value={97.3} className="h-2 mb-2" />
                    <p className="text-sm text-gray-400">
                      Market coverage & data processing
                    </p>
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <div className="p-4 rounded-xl bg-gray-900/60 border border-gray-800/60 shadow-lg">
                    <h3 className="font-semibold mb-2 flex items-center justify-center gap-2 text-gray-200">
                      <Target className="w-4 h-4 text-green-400/80" />
                      Filter Precision
                    </h3>
                    <div className="text-3xl font-bold text-green-400/90 mb-2 drop-shadow-sm">
                      <AnimatedNumber 
                        value={94.7} 
                        isVisible={metricsVisible}
                        formatter={(val) => `${val.toFixed(1)}%`}
                      />
                    </div>
                    <Progress value={94.7} className="h-2 mb-2" />
                    <p className="text-sm text-gray-400">
                      Quality selection accuracy
                    </p>
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <div className="p-4 rounded-xl bg-gray-900/60 border border-gray-800/60 shadow-lg">
                    <h3 className="font-semibold mb-2 flex items-center justify-center gap-2 text-gray-200">
                      <TrendingUp className="w-4 h-4 text-green-400/80" />
                      Prediction Success
                    </h3>
                    <div className="text-3xl font-bold text-green-400/90 mb-2 drop-shadow-sm">
                      <AnimatedNumber 
                        value={currentData.accuracyRate} 
                        isVisible={metricsVisible}
                        formatter={(val) => `${val.toFixed(1)}%`}
                      />
                    </div>
                    <Progress value={currentData.accuracyRate} className="h-2 mb-2" />
                    <p className="text-sm text-gray-400">
                      Profitable outcome rate
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <Badge className="bg-background/50 text-neon-green border-neon-green/20 px-6 py-2 text-sm shadow-lg backdrop-blur-sm">
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