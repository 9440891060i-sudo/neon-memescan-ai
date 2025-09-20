import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, Users, Eye, Heart, Repeat, Wallet, BarChart3, Package, DollarSign, Shield } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import { AnimatedChart } from "@/components/AnimatedChart";

// Mock data for social signals
const socialData = [
  { time: '9AM', views: 45000, likes: 2800, reposts: 420, members: 15200 },
  { time: '10AM', views: 52000, likes: 3200, reposts: 480, members: 15350 },
  { time: '11AM', views: 48000, likes: 2950, reposts: 445, members: 15280 },
  { time: '12PM', views: 67000, likes: 4100, reposts: 620, members: 15680 },
  { time: '1PM', views: 72000, likes: 4500, reposts: 680, members: 15950 },
  { time: '2PM', views: 69000, likes: 4200, reposts: 635, members: 15850 },
  { time: '3PM', views: 85000, likes: 5100, reposts: 760, members: 16200 },
];

// Mock data for technical signals
const technicalData = [
  { time: '9AM', holders: 142300, volume: 2.8, bundles: 150, marketCap: 890 },
  { time: '10AM', holders: 143200, volume: 3.4, bundles: 165, marketCap: 940 },
  { time: '11AM', holders: 144800, volume: 4.1, bundles: 180, marketCap: 995 },
  { time: '12PM', holders: 146500, volume: 5.2, bundles: 195, marketCap: 1080 },
  { time: '1PM', holders: 148900, volume: 6.8, bundles: 220, marketCap: 1180 },
  { time: '2PM', holders: 150200, volume: 7.4, bundles: 235, marketCap: 1250 },
  { time: '3PM', holders: 152800, volume: 8.9, bundles: 260, marketCap: 1420 },
];

export default function DashboardPreview() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });
  
  return (
    <section ref={ref} className="py-12 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-2 text-foreground">
            Professional <span className="text-primary">Trading</span> Terminal
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-2 leading-relaxed">
            Advanced cryptocurrency intelligence platform providing institutional-grade market analysis, 
            social sentiment tracking, and risk assessment for professional traders and fund managers
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Dashboard mockup */}
          <div className="bg-card/80 backdrop-blur-sm rounded-lg border border-border/50 shadow-2xl">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4 p-6 bg-muted/20 border-b border-border/50">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground tracking-wide">PEPE/USD</h3>
                <p className="text-xs text-muted-foreground font-mono break-all sm:break-normal mt-1">0x6982508145454ce325ddbe47a25d4ec3d2311933</p>
              </div>
              <div className="text-left sm:text-right">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-lg font-semibold text-green-500 tracking-wide">BUY</span>
                </div>
                <div className="text-xs text-muted-foreground mt-2 font-mono">
                  Confidence: <AnimatedNumber 
                    value={94.2} 
                    isVisible={isIntersecting} 
                    formatter={(val) => `${val.toFixed(1)}%`}
                    className="text-green-500 font-semibold"
                  />
                </div>
              </div>
            </div>

            {/* Interactive Charts and Metrics */}
            <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-6 mb-8 p-6">
              {/* Charts Container */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Social Sentiment Analysis */}
                <Card className="p-6 bg-background/50 border border-border/50">
                  <h4 className="text-sm font-medium text-muted-foreground mb-6 flex items-center gap-2 uppercase tracking-wider">
                    <Eye className="w-4 h-4" />
                    Social Sentiment
                  </h4>
                  <div className="h-64">
                    <AnimatedChart
                      data={socialData}
                      isVisible={isIntersecting}
                      gridColor="hsl(var(--neon-green) / 0.1)"
                      lines={[
                        { dataKey: 'views', stroke: 'hsl(var(--neon-cyan))' },
                        { dataKey: 'likes', stroke: 'hsl(var(--neon-pink))' },
                        { dataKey: 'reposts', stroke: 'hsl(var(--neon-purple))' },
                        { dataKey: 'members', stroke: 'hsl(var(--neon-green))' }
                      ]}
                      tooltipFormatter={(value, name) => {
                        const formatValue = (val) => {
                          if (val >= 1000) return `${(val / 1000).toFixed(1)}k`;
                          return val.toString();
                        };
                        const labels = {
                          views: 'Views',
                          likes: 'Engagements', 
                          reposts: 'Shares',
                          members: 'Community Size'
                        };
                        return [formatValue(value), labels[name] || name];
                      }}
                    />
                  </div>
                  <div className="flex flex-wrap gap-4 mt-4 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-neon-cyan"></div>
                      <span className="text-muted-foreground">Views</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-neon-pink"></div>
                      <span className="text-muted-foreground">Engagements</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-neon-purple"></div>
                      <span className="text-muted-foreground">Shares</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-neon-green"></div>
                      <span className="text-muted-foreground">Community Size</span>
                    </div>
                  </div>
                </Card>

                {/* Market Analytics */}
                <Card className="p-6 bg-background/50 border border-border/50">
                  <h4 className="text-sm font-medium text-muted-foreground mb-6 flex items-center gap-2 uppercase tracking-wider">
                    <BarChart3 className="w-4 h-4" />
                    Market Data
                  </h4>
                  <div className="h-64">
                    <AnimatedChart
                      data={technicalData}
                      isVisible={isIntersecting}
                      gridColor="hsl(var(--neon-cyan) / 0.1)"
                      lines={[
                        { dataKey: 'holders', stroke: 'hsl(var(--neon-green))' },
                        { dataKey: 'volume', stroke: 'hsl(var(--neon-cyan))' },
                        { dataKey: 'bundles', stroke: 'hsl(var(--neon-purple))' },
                        { dataKey: 'marketCap', stroke: 'hsl(var(--neon-pink))' }
                      ]}
                      tooltipFormatter={(value, name) => {
                        const formatValue = (val) => {
                          if (name === 'holders' && val >= 1000) return `${(val / 1000).toFixed(1)}k`;
                          if (name === 'volume') return `${val}M`;
                          if (name === 'marketCap') return `$${val}M`;
                          return val.toString();
                        };
                        const labels = {
                          holders: 'Token Holders',
                          volume: 'Trading Volume', 
                          bundles: 'Transaction Bundles',
                          marketCap: 'Market Capitalization'
                        };
                        return [formatValue(value), labels[name] || name];
                      }}
                    />
                  </div>
                  <div className="flex flex-wrap gap-4 mt-4 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-neon-green"></div>
                      <span className="text-muted-foreground">Token Holders</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-neon-cyan"></div>
                      <span className="text-muted-foreground">Trading Volume</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-neon-purple"></div>
                      <span className="text-muted-foreground">Transaction Bundles</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-neon-pink"></div>
                      <span className="text-muted-foreground">Market Cap</span>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Additional Metrics Panel */}
              <div className="xl:block hidden">
                <Card className="p-6 bg-background/50 border border-border/50 h-fit">
                  <h4 className="text-sm font-medium text-muted-foreground mb-6 flex items-center gap-2 uppercase tracking-wider">
                    <Shield className="w-4 h-4" />
                    Risk Metrics
                  </h4>
                  <div className="space-y-4">
                    {/* Avg Wallet Age */}
                    <div className="bg-gradient-to-r from-neon-cyan/10 to-neon-cyan/5 border border-neon-cyan/30 rounded-lg px-4 py-3 flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Avg Wallet Age</span>
                      <span className="text-neon-cyan font-semibold">
                        <AnimatedNumber 
                          value={60} 
                          isVisible={isIntersecting} 
                          formatter={(val) => `${val} days`}
                        />
                      </span>
                    </div>

                    {/* Dev Paid */}
                    <div className="bg-gradient-to-r from-neon-green/10 to-neon-green/5 border border-neon-green/30 rounded-lg px-4 py-3 flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Dev Paid</span>
                      <span className="text-neon-green font-semibold">Yes</span>
                    </div>

                    {/* Developer Verification */}
                    <div className="bg-gradient-to-r from-neon-green/10 to-neon-green/5 border border-neon-green/30 rounded-lg px-4 py-3 flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Developer Verification</span>
                      <span className="text-neon-green font-semibold">Verified</span>
                    </div>

                    {/* Dev Credibility Score */}
                    <div className="bg-gradient-to-r from-neon-pink/10 to-neon-pink/5 border border-neon-pink/30 rounded-lg px-4 py-3 flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Credibility Score</span>
                      <span className="text-neon-pink font-semibold">
                        <AnimatedNumber 
                          value={87} 
                          isVisible={isIntersecting} 
                          formatter={(val) => `${val}/100`}
                        />
                      </span>
                    </div>

                    {/* Admin Followers */}
                    <div className="bg-gradient-to-r from-neon-purple/10 to-neon-purple/5 border border-neon-purple/30 rounded-lg px-4 py-3 flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Community Reach</span>
                      <span className="text-neon-purple font-semibold">
                        <AnimatedNumber 
                          value={67} 
                          isVisible={isIntersecting} 
                          formatter={(val) => `${val}K Followers`}
                        />
                      </span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Mobile Metrics Strip */}
            <div className="xl:hidden mb-8 overflow-x-auto">
              <div className="flex gap-4 min-w-max pb-2">
                <div className="bg-gradient-to-r from-neon-cyan/10 to-neon-cyan/5 border border-neon-cyan/30 rounded-full px-4 py-2 flex items-center gap-2 whitespace-nowrap">
                  <span className="text-xs text-muted-foreground">Avg Wallet Age:</span>
                  <span className="text-neon-cyan font-semibold text-sm">
                    <AnimatedNumber 
                      value={60} 
                      isVisible={isIntersecting} 
                      formatter={(val) => `${val} days`}
                    />
                  </span>
                </div>
                <div className="bg-gradient-to-r from-neon-green/10 to-neon-green/5 border border-neon-green/30 rounded-full px-4 py-2 flex items-center gap-2 whitespace-nowrap">
                  <span className="text-xs text-muted-foreground">Dev Paid:</span>
                  <span className="text-neon-green font-semibold text-sm">✓ Yes</span>
                </div>
                <div className="bg-gradient-to-r from-neon-pink/10 to-neon-pink/5 border border-neon-pink/30 rounded-full px-4 py-2 flex items-center gap-2 whitespace-nowrap">
                  <span className="text-xs text-muted-foreground">Dev Credibility:</span>
                  <span className="text-neon-pink font-semibold text-sm">
                    <AnimatedNumber 
                      value={87} 
                      isVisible={isIntersecting} 
                      formatter={(val) => `${val}/100`}
                    />
                  </span>
                </div>
                <div className="bg-gradient-to-r from-neon-purple/10 to-neon-purple/5 border border-neon-purple/30 rounded-full px-4 py-2 flex items-center gap-2 whitespace-nowrap">
                  <span className="text-xs text-muted-foreground">Admin Followers:</span>
                  <span className="text-neon-purple font-semibold text-sm">
                    <AnimatedNumber 
                      value={67} 
                      isVisible={isIntersecting} 
                      formatter={(val) => `${val}K`}
                    />
                  </span>
                </div>
              </div>
            </div>

            {/* AI Verdict Section */}
            <Card className="p-6 bg-background/30 border border-border/50 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">Executive Summary</h4>
                  <p className="text-foreground mb-4 text-sm leading-relaxed">
                    Technical indicators suggest strong momentum with elevated social engagement. Risk-adjusted position sizing recommended within specified entry parameters.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-black/20 rounded-lg p-4">
                      <div className="text-xs text-muted-foreground mb-1">Primary Entry Range</div>
                      <div className="text-neon-green font-semibold">$0.0000085 - $0.0000092</div>
                    </div>
                    <div className="bg-black/20 rounded-lg p-4">
                      <div className="text-xs text-muted-foreground mb-1">Risk Level</div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-neon-green" />
                        <span className="text-neon-green font-semibold">Low Risk</span>
                      </div>
                    </div>
                    <div className="bg-black/20 rounded-lg p-4">
                      <div className="text-xs text-muted-foreground mb-1">Target Timeframe</div>
                      <div className="text-neon-cyan font-semibold">
                        <AnimatedNumber 
                          value={24} 
                          isVisible={isIntersecting} 
                        />-<AnimatedNumber 
                          value={48} 
                          isVisible={isIntersecting} 
                        /> Hours
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Action button */}
            <div className="text-center">
              <Button variant="analyze" size="lg" className="px-12">
                Analyze Your Coin (<AnimatedNumber 
                  value={30} 
                  isVisible={isIntersecting} 
                /> Credits)
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}