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
      <div className="bg-gradient-chart border border-chart-grid/40 rounded-lg p-6 shadow-professional">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-professional border border-chart-primary/30 flex items-center justify-center text-2xl shadow-professional">
              {coin.logo}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-chart-text">{coin.name} Terminal</h3>
              <p className="text-sm text-chart-text/70 font-mono tracking-wide">{coin.address.slice(0, 20)}...</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-chart-text/70 uppercase tracking-wider font-semibold">Live Analysis</div>
            <div className="text-chart-primary font-mono text-lg font-bold">{currentTime.toLocaleTimeString()}</div>
          </div>
        </div>
      </div>

      {/* Main Terminal Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column - Charts */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Social Sentiment Chart */}
          <Card className="bg-gradient-chart border-chart-grid/40 shadow-professional">
            <CardHeader className="pb-3">
              <CardTitle className="text-chart-text flex items-center gap-2 font-semibold">
                <Eye className="w-5 h-5 text-chart-primary" />
                Social Sentiment Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <AnimatedChart
                  data={socialData}
                  lines={[
                    { dataKey: 'views', stroke: 'hsl(var(--chart-primary))' },
                    { dataKey: 'likes', stroke: 'hsl(var(--chart-success))' },
                    { dataKey: 'reposts', stroke: 'hsl(var(--chart-secondary))' },
                    { dataKey: 'members', stroke: 'hsl(var(--chart-accent))' }
                  ]}
                  isVisible={isIntersecting}
                  tooltipFormatter={(value, name) => [
                    typeof value === 'number' ? value.toLocaleString() : value,
                    name.charAt(0).toUpperCase() + name.slice(1)
                  ]}
                />
              </div>
              <div className="grid grid-cols-4 gap-6 mt-6 p-4 bg-gradient-to-r from-chart-grid/10 to-transparent rounded-lg border border-chart-grid/20">
                <div className="text-center">
                  <div className="text-xs text-chart-text/70 uppercase tracking-wider font-semibold mb-1">Views</div>
                  <div className="text-chart-primary font-bold text-lg">
                    <AnimatedNumber 
                      value={socialData[socialData.length - 1]?.views || 0}
                      isVisible={isIntersecting}
                      formatter={(val) => val.toLocaleString()}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-chart-text/70 uppercase tracking-wider font-semibold mb-1">Likes</div>
                  <div className="text-chart-success font-bold text-lg">
                    <AnimatedNumber 
                      value={socialData[socialData.length - 1]?.likes || 0}
                      isVisible={isIntersecting}
                      formatter={(val) => val.toLocaleString()}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-chart-text/70 uppercase tracking-wider font-semibold mb-1">Reposts</div>
                  <div className="text-chart-secondary font-bold text-lg">
                    <AnimatedNumber 
                      value={socialData[socialData.length - 1]?.reposts || 0}
                      isVisible={isIntersecting}
                      formatter={(val) => val.toLocaleString()}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-chart-text/70 uppercase tracking-wider font-semibold mb-1">Members</div>
                  <div className="text-chart-accent font-bold text-lg">
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
          <Card className="bg-gradient-chart border-chart-grid/40 shadow-professional">
            <CardHeader className="pb-3">
              <CardTitle className="text-chart-text flex items-center gap-2 font-semibold">
                <TrendingUp className="w-5 h-5 text-chart-success" />
                Technical Indicators
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <AnimatedChart
                  data={technicalData}
                  lines={[
                    { dataKey: 'holders', stroke: 'hsl(var(--chart-success))' },
                    { dataKey: 'volume', stroke: 'hsl(var(--chart-primary))' },
                    { dataKey: 'bundles', stroke: 'hsl(var(--chart-secondary))' },
                    { dataKey: 'marketCap', stroke: 'hsl(var(--chart-warning))' }
                  ]}
                  isVisible={isIntersecting}
                  tooltipFormatter={(value, name) => [
                    typeof value === 'number' ? value.toLocaleString() : value,
                    name.charAt(0).toUpperCase() + name.slice(1)
                  ]}
                />
              </div>
              <div className="grid grid-cols-4 gap-6 mt-6 p-4 bg-gradient-to-r from-chart-grid/10 to-transparent rounded-lg border border-chart-grid/20">
                <div className="text-center">
                  <div className="text-xs text-chart-text/70 uppercase tracking-wider font-semibold mb-1">Holders</div>
                  <div className="text-chart-success font-bold text-lg">
                    <AnimatedNumber 
                      value={technicalData[technicalData.length - 1]?.holders || 0}
                      isVisible={isIntersecting}
                      formatter={(val) => val.toLocaleString()}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-chart-text/70 uppercase tracking-wider font-semibold mb-1">Volume</div>
                  <div className="text-chart-primary font-bold text-lg">
                    <AnimatedNumber 
                      value={technicalData[technicalData.length - 1]?.volume || 0}
                      isVisible={isIntersecting}
                      formatter={(val) => `$${val.toLocaleString()}`}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-chart-text/70 uppercase tracking-wider font-semibold mb-1">Bundles</div>
                  <div className="text-chart-secondary font-bold text-lg">
                    <AnimatedNumber 
                      value={technicalData[technicalData.length - 1]?.bundles || 0}
                      isVisible={isIntersecting}
                      formatter={(val) => val.toLocaleString()}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-chart-text/70 uppercase tracking-wider font-semibold mb-1">Market Cap</div>
                  <div className="text-chart-warning font-bold text-lg">
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
          <Card className="bg-gradient-chart border-chart-grid/40 shadow-professional">
            <CardHeader className="pb-3">
              <CardTitle className="text-chart-text font-semibold">Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="flex items-center justify-between p-3 bg-chart-grid/10 rounded-lg border border-chart-grid/20">
                <span className="text-sm text-chart-text/80 font-medium">Avg Wallet Age</span>
                <span className="text-chart-primary font-bold">
                  <AnimatedNumber 
                    value={127}
                    isVisible={isIntersecting}
                    formatter={(val) => `${val} days`}
                  />
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-chart-grid/10 rounded-lg border border-chart-grid/20">
                <span className="text-sm text-chart-text/80 font-medium">Dev Paid</span>
                <Badge className="bg-chart-success/20 text-chart-success border-chart-success/30 font-semibold">
                  Yes
                </Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-chart-grid/10 rounded-lg border border-chart-grid/20">
                <span className="text-sm text-chart-text/80 font-medium">Dev Credibility</span>
                <span className="text-chart-success font-bold">
                  <AnimatedNumber 
                    value={parseInt(coin.devScore)}
                    isVisible={isIntersecting}
                    formatter={(val) => `${val}%`}
                  />
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-chart-grid/10 rounded-lg border border-chart-grid/20">
                <span className="text-sm text-chart-text/80 font-medium">Admin Followers</span>
                <span className="text-chart-primary font-bold">
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
          <Card className="bg-gradient-chart border-chart-grid/40 shadow-professional">
            <CardHeader className="pb-3">
              <CardTitle className="text-chart-text flex items-center gap-2 font-semibold">
                <Zap className="w-5 h-5 text-chart-warning" />
                AI Prediction
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center p-4 bg-gradient-to-r from-chart-success/10 to-chart-primary/5 rounded-lg border border-chart-success/30">
                <div className="text-4xl font-bold text-chart-success mb-2">
                  <AnimatedNumber 
                    value={78}
                    isVisible={isIntersecting}
                    formatter={(val) => `${val}%`}
                  />
                </div>
                <div className="text-sm text-chart-text/70 uppercase tracking-wider font-semibold">Bullish Score</div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-chart-success/15 to-transparent p-4 rounded-lg border border-chart-success/30">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-chart-success" />
                    <span className="text-sm font-semibold text-chart-success">Entry Suggestion</span>
                  </div>
                  <div className="text-xs text-chart-text/80 leading-relaxed">
                    Consider entry on next 5-10% dip for optimal risk/reward
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-chart-primary/15 to-transparent p-4 rounded-lg border border-chart-primary/30">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingDown className="w-4 h-4 text-chart-primary" />
                    <span className="text-sm font-semibold text-chart-primary">Exit Target</span>
                  </div>
                  <div className="text-xs text-chart-text/80 leading-relaxed">
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