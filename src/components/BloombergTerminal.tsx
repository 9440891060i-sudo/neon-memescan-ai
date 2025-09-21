import { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatedChart } from '@/components/AnimatedChart';
import { AnimatedNumber } from '@/components/AnimatedNumber';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { TrendingUp, TrendingDown, Users, Zap, Eye, Heart, Share, DollarSign } from 'lucide-react';

interface BloombergTerminalProps {
  coin: {
    name: string;
    address: string;
    logo: string;
    marketCap: string;
    age: string;
    holders: string;
    devScore: string;
    change: string;
    changePositive: boolean;
  };
  isExpanded: boolean;
}

export const BloombergTerminal = ({ coin, isExpanded }: BloombergTerminalProps) => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  const [currentTime, setCurrentTime] = useState(new Date());

  // Generate mock social sentiment data
  const socialData = useMemo(() => 
    Array.from({ length: 20 }, (_, i) => ({
      time: `${i * 5}m`,
      views: Math.floor(Math.random() * 1000) + 500,
      likes: Math.floor(Math.random() * 300) + 100,
      reposts: Math.floor(Math.random() * 150) + 50,
      members: Math.floor(Math.random() * 200) + 1000
    })), []
  );

  // Generate mock technical data
  const technicalData = useMemo(() => 
    Array.from({ length: 20 }, (_, i) => ({
      time: `${i * 5}m`,
      holders: Math.floor(Math.random() * 100) + parseInt(coin.holders),
      volume: Math.floor(Math.random() * 50000) + 10000,
      bundles: Math.floor(Math.random() * 20) + 5,
      marketCap: Math.floor(Math.random() * 100000000) + 500000000
    })), [coin.holders]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!isExpanded) return null;

  return (
    <div ref={ref as any} className="space-y-6 animate-fade-in">
      {/* Terminal Header */}
      <div className="bg-gradient-terminal border border-border rounded-lg p-4 shadow-terminal">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-secondary border border-border flex items-center justify-center text-2xl">
              {coin.logo}
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">{coin.name} <span className="text-neon-green">Terminal</span></h3>
              <p className="text-sm text-muted-foreground font-mono">{coin.address.slice(0, 20)}...</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-muted-foreground">Live Analysis</div>
            <div className="text-chart-cyan font-mono">{currentTime.toLocaleTimeString()}</div>
          </div>
        </div>
      </div>

      {/* Main Terminal Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column - Charts */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Social Sentiment Chart */}
          <Card className="bg-gradient-terminal border-border shadow-terminal">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2">
                <Eye className="w-5 h-5 text-chart-cyan" />
                Social Sentiment Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 chart-grid rounded-lg p-4">
                <AnimatedChart
                  data={socialData}
                  lines={[
                    { dataKey: 'views', stroke: 'hsl(var(--chart-cyan))' },
                    { dataKey: 'likes', stroke: 'hsl(var(--chart-teal))' },
                    { dataKey: 'reposts', stroke: 'hsl(var(--chart-purple))' },
                    { dataKey: 'members', stroke: 'hsl(var(--chart-orange))' }
                  ]}
                  isVisible={isIntersecting}
                  tooltipFormatter={(value, name) => [
                    typeof value === 'number' ? value.toLocaleString() : value,
                    name.charAt(0).toUpperCase() + name.slice(1)
                  ]}
                />
              </div>
              <div className="grid grid-cols-4 gap-4 mt-4">
                <div className="text-center">
                  <div className="text-xs text-muted-foreground">Views</div>
                  <div className="text-chart-cyan font-bold">
                    <AnimatedNumber 
                      value={socialData[socialData.length - 1]?.views || 0}
                      isVisible={isIntersecting}
                      formatter={(val) => val.toLocaleString()}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-muted-foreground">Likes</div>
                  <div className="text-chart-teal font-bold">
                    <AnimatedNumber 
                      value={socialData[socialData.length - 1]?.likes || 0}
                      isVisible={isIntersecting}
                      formatter={(val) => val.toLocaleString()}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-muted-foreground">Reposts</div>
                  <div className="text-chart-purple font-bold">
                    <AnimatedNumber 
                      value={socialData[socialData.length - 1]?.reposts || 0}
                      isVisible={isIntersecting}
                      formatter={(val) => val.toLocaleString()}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-muted-foreground">Members</div>
                  <div className="text-chart-orange font-bold">
                    <AnimatedNumber 
                      value={socialData[socialData.length - 1]?.members || 0}
                      isVisible={isIntersecting}
                      formatter={(val) => val.toLocaleString()}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technical Indicators Chart */}
          <Card className="bg-gradient-terminal border-border shadow-terminal">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-chart-teal" />
                Technical Indicators
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 chart-grid rounded-lg p-4">
                <AnimatedChart
                  data={technicalData}
                  lines={[
                    { dataKey: 'holders', stroke: 'hsl(var(--chart-teal))' },
                    { dataKey: 'volume', stroke: 'hsl(var(--chart-cyan))' },
                    { dataKey: 'bundles', stroke: 'hsl(var(--chart-purple))' },
                    { dataKey: 'marketCap', stroke: 'hsl(var(--chart-yellow))' }
                  ]}
                  isVisible={isIntersecting}
                  tooltipFormatter={(value, name) => [
                    typeof value === 'number' ? value.toLocaleString() : value,
                    name.charAt(0).toUpperCase() + name.slice(1)
                  ]}
                />
              </div>
              <div className="grid grid-cols-4 gap-4 mt-4">
                <div className="text-center">
                  <div className="text-xs text-muted-foreground">Holders</div>
                  <div className="text-chart-teal font-bold">
                    <AnimatedNumber 
                      value={technicalData[technicalData.length - 1]?.holders || 0}
                      isVisible={isIntersecting}
                      formatter={(val) => val.toLocaleString()}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-muted-foreground">Volume</div>
                  <div className="text-chart-cyan font-bold">
                    <AnimatedNumber 
                      value={technicalData[technicalData.length - 1]?.volume || 0}
                      isVisible={isIntersecting}
                      formatter={(val) => `$${val.toLocaleString()}`}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-muted-foreground">Bundles</div>
                  <div className="text-chart-purple font-bold">
                    <AnimatedNumber 
                      value={technicalData[technicalData.length - 1]?.bundles || 0}
                      isVisible={isIntersecting}
                      formatter={(val) => val.toLocaleString()}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-muted-foreground">Market Cap</div>
                  <div className="text-chart-yellow font-bold">
                    <AnimatedNumber 
                      value={technicalData[technicalData.length - 1]?.marketCap || 0}
                      isVisible={isIntersecting}
                      formatter={(val) => `$${(val / 1000000).toFixed(1)}M`}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Stats & Prediction */}
        <div className="space-y-6">
          
          {/* Quick Stats */}
          <Card className="bg-gradient-terminal border-border shadow-terminal">
            <CardHeader>
              <CardTitle className="text-foreground">Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Avg Wallet Age</span>
                <span className="text-foreground font-bold">
                  <AnimatedNumber 
                    value={127}
                    isVisible={isIntersecting}
                    formatter={(val) => `${val} days`}
                  />
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Dev Paid</span>
                <Badge className="bg-gain/20 text-gain border-gain/30">
                  Yes
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Dev Credibility</span>
                <span className="text-gain font-bold">
                  <AnimatedNumber 
                    value={parseInt(coin.devScore)}
                    isVisible={isIntersecting}
                    formatter={(val) => `${val}%`}
                  />
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Admin Followers</span>
                <span className="text-chart-cyan font-bold">
                  <AnimatedNumber 
                    value={12400}
                    isVisible={isIntersecting}
                    formatter={(val) => `${(val / 1000).toFixed(1)}K`}
                  />
                </span>
              </div>
            </CardContent>
          </Card>

          {/* AI Prediction */}
          <Card className="bg-gradient-terminal border-border shadow-terminal">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2">
                <Zap className="w-5 h-5 text-neon-green" />
                AI Prediction
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-green mb-2">
                  <AnimatedNumber 
                    value={78}
                    isVisible={isIntersecting}
                    formatter={(val) => `${val}%`}
                  />
                </div>
                <div className="text-sm text-muted-foreground">Bullish Score</div>
              </div>
              
              <div className="space-y-3">
                <div className="bg-secondary/50 p-3 rounded-lg border border-border">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="w-4 h-4 text-gain" />
                    <span className="text-sm font-medium text-foreground">Entry Suggestion</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Consider entry on next 5-10% dip for optimal risk/reward
                  </div>
                </div>
                
                <div className="bg-secondary/50 p-3 rounded-lg border border-border">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingDown className="w-4 h-4 text-chart-orange" />
                    <span className="text-sm font-medium text-foreground">Exit Target</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Take profits at 2.5x - 4x current levels based on momentum
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};