import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, BarChart3, Shield, Activity, Target, Clock } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import { AnimatedChart } from "@/components/AnimatedChart";
import CommunitySignals from "@/components/CommunitySignals";

// Mock data for social signals
const socialData = [
  { time: '9AM', engagement: 4200, sentiment: 0.75, mentions: 1850, reach: 125000 },
  { time: '10AM', engagement: 4800, sentiment: 0.78, mentions: 2100, reach: 142000 },
  { time: '11AM', engagement: 4500, sentiment: 0.72, mentions: 1950, reach: 138000 },
  { time: '12PM', engagement: 6200, sentiment: 0.85, mentions: 2650, reach: 165000 },
  { time: '1PM', engagement: 6800, sentiment: 0.88, mentions: 2900, reach: 178000 },
  { time: '2PM', engagement: 6400, sentiment: 0.82, mentions: 2750, reach: 172000 },
  { time: '3PM', engagement: 7500, sentiment: 0.90, mentions: 3200, reach: 195000 },
];

// Mock data for technical signals  
const technicalData = [
  { time: '9AM', holders: 142300, volume: 2.8, liquidity: 450000, txCount: 1250 },
  { time: '10AM', holders: 143200, volume: 3.4, liquidity: 485000, txCount: 1380 },
  { time: '11AM', holders: 144800, volume: 4.1, liquidity: 520000, txCount: 1650 },
  { time: '12PM', holders: 146500, volume: 5.2, liquidity: 580000, txCount: 1850 },
  { time: '1PM', holders: 148900, volume: 6.8, liquidity: 640000, txCount: 2100 },
  { time: '2PM', holders: 150200, volume: 7.4, liquidity: 685000, txCount: 2280 },
  { time: '3PM', holders: 152800, volume: 8.9, liquidity: 750000, txCount: 2650 },
];

// Mock data for trading chart with realistic candlestick pattern
const tradingData = [
  // Early accumulation phase
  { time: '', open: 0.0000032, high: 0.0000035, low: 0.0000031, close: 0.0000034, ma20: 0.0000033, ma50: 0.0000032 },
  { time: '', open: 0.0000034, high: 0.0000037, low: 0.0000033, close: 0.0000036, ma20: 0.0000034, ma50: 0.0000033 },
  { time: '', open: 0.0000036, high: 0.0000038, low: 0.0000034, close: 0.0000037, ma20: 0.0000035, ma50: 0.0000034 },
  { time: '', open: 0.0000037, high: 0.0000041, low: 0.0000036, close: 0.0000040, ma20: 0.0000036, ma50: 0.0000035 },
  { time: '', open: 0.0000040, high: 0.0000043, low: 0.0000039, close: 0.0000042, ma20: 0.0000038, ma50: 0.0000036 },
  
  // Uptrend begins
  { time: '', open: 0.0000042, high: 0.0000048, low: 0.0000041, close: 0.0000047, ma20: 0.0000040, ma50: 0.0000037 },
  { time: '', open: 0.0000047, high: 0.0000052, low: 0.0000045, close: 0.0000051, ma20: 0.0000042, ma50: 0.0000039 },
  { time: '', open: 0.0000051, high: 0.0000055, low: 0.0000049, close: 0.0000054, ma20: 0.0000045, ma50: 0.0000041 },
  { time: '', open: 0.0000054, high: 0.0000059, low: 0.0000052, close: 0.0000057, ma20: 0.0000048, ma50: 0.0000043 },
  { time: '', open: 0.0000057, high: 0.0000063, low: 0.0000055, close: 0.0000061, ma20: 0.0000051, ma50: 0.0000045 },
  
  // Strong uptrend
  { time: '', open: 0.0000061, high: 0.0000068, low: 0.0000059, close: 0.0000066, ma20: 0.0000054, ma50: 0.0000048 },
  { time: '', open: 0.0000066, high: 0.0000072, low: 0.0000064, close: 0.0000070, ma20: 0.0000058, ma50: 0.0000051 },
  { time: '', open: 0.0000070, high: 0.0000077, low: 0.0000068, close: 0.0000075, ma20: 0.0000062, ma50: 0.0000054 },
  { time: '', open: 0.0000075, high: 0.0000082, low: 0.0000072, close: 0.0000079, ma20: 0.0000066, ma50: 0.0000058 },
  { time: '', open: 0.0000079, high: 0.0000085, low: 0.0000076, close: 0.0000083, ma20: 0.0000071, ma50: 0.0000062 },
  
  // Peak formation
  { time: '', open: 0.0000083, high: 0.0000089, low: 0.0000080, close: 0.0000087, ma20: 0.0000075, ma50: 0.0000066 },
  { time: '', open: 0.0000087, high: 0.0000092, low: 0.0000084, close: 0.0000090, ma20: 0.0000079, ma50: 0.0000070 },
  { time: '', open: 0.0000090, high: 0.0000094, low: 0.0000086, close: 0.0000088, ma20: 0.0000082, ma50: 0.0000074 },
  { time: '', open: 0.0000088, high: 0.0000091, low: 0.0000084, close: 0.0000086, ma20: 0.0000085, ma50: 0.0000077 },
  { time: '', open: 0.0000086, high: 0.0000089, low: 0.0000082, close: 0.0000084, ma20: 0.0000087, ma50: 0.0000080 },
  
  // Downtrend begins
  { time: '', open: 0.0000084, high: 0.0000087, low: 0.0000079, close: 0.0000081, ma20: 0.0000088, ma50: 0.0000083 },
  { time: '', open: 0.0000081, high: 0.0000084, low: 0.0000076, close: 0.0000078, ma20: 0.0000087, ma50: 0.0000085 },
  { time: '', open: 0.0000078, high: 0.0000081, low: 0.0000073, close: 0.0000075, ma20: 0.0000085, ma50: 0.0000087 },
  { time: '', open: 0.0000075, high: 0.0000078, low: 0.0000070, close: 0.0000072, ma20: 0.0000083, ma50: 0.0000088 },
  { time: '', open: 0.0000072, high: 0.0000075, low: 0.0000067, close: 0.0000069, ma20: 0.0000080, ma50: 0.0000089 },
  
  // Continued decline
  { time: '', open: 0.0000069, high: 0.0000072, low: 0.0000064, close: 0.0000066, ma20: 0.0000077, ma50: 0.0000089 },
  { time: '', open: 0.0000066, high: 0.0000069, low: 0.0000061, close: 0.0000063, ma20: 0.0000074, ma50: 0.0000088 },
  { time: '', open: 0.0000063, high: 0.0000066, low: 0.0000058, close: 0.0000060, ma20: 0.0000071, ma50: 0.0000087 },
  { time: '', open: 0.0000060, high: 0.0000063, low: 0.0000055, close: 0.0000057, ma20: 0.0000068, ma50: 0.0000085 },
  { time: '', open: 0.0000057, high: 0.0000060, low: 0.0000052, close: 0.0000054, ma20: 0.0000065, ma50: 0.0000083 },
];

export default function DashboardPreview() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });
  
  return (
    <section ref={ref} className="py-12 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-2 font-mono">
            Your <span className="text-terminal-blue">Bloomberg</span> Terminal
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-2 font-mono">
            Institutional-grade market intelligence combining real-time social sentiment analysis, 
            insider community signals, and advanced technical metrics for professional crypto trading
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Professional Terminal Interface */}
          <div className="bg-black/60 backdrop-blur-md rounded-lg border border-terminal-gray/20 shadow-2xl">
            
            {/* Terminal Header */}
            <div className="bg-black/80 border-b border-terminal-gray/20 px-6 py-4 rounded-t-lg">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-terminal-red"></div>
                    <div className="w-3 h-3 rounded-full bg-terminal-amber"></div>
                    <div className="w-3 h-3 rounded-full bg-terminal-green"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-terminal-white font-mono">KLUX.TERMINAL</h3>
                    <p className="text-sm text-terminal-gray font-mono">PEPE/USDT Analysis Session</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-terminal-green rounded-full animate-pulse"></div>
                      <span className="text-lg font-bold text-terminal-green font-mono">LONG SIGNAL</span>
                    </div>
                    <div className="text-sm text-terminal-gray font-mono">
                      Confidence: <AnimatedNumber 
                        value={87.4} 
                        isVisible={isIntersecting} 
                        formatter={(val) => `${val.toFixed(1)}%`}
                        className="text-terminal-green font-semibold"
                      />
                    </div>
                  </div>
                  <div className="text-xs text-terminal-gray font-mono">
                    <Clock className="w-4 h-4 inline mr-1" />
                    {new Date().toLocaleTimeString()}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6">
              {/* Compact Terminal Layout - Fill Available Space */}
              <div className="grid grid-cols-1 xl:grid-cols-[1.618fr_1fr] gap-4 mb-4">
                
                {/* Main Content Area (61.8%) */}
                <div className="space-y-4">
                  
                  {/* Chart Controls */}
                  <div className="flex items-center gap-4 p-3 bg-black/40 rounded border border-terminal-gray/20">
                    <div className="text-xs text-terminal-gray uppercase tracking-wider font-mono">
                      Market Overview
                    </div>
                    <div className="flex gap-2 ml-auto">
                      <span className="text-xs px-2 py-1 bg-terminal-blue/20 text-terminal-blue rounded font-mono">5M</span>
                      <span className="text-xs px-2 py-1 bg-terminal-gray/20 text-terminal-gray rounded font-mono">15M</span>
                      <span className="text-xs px-2 py-1 bg-terminal-gray/20 text-terminal-gray rounded font-mono">1H</span>
                      <span className="text-xs px-2 py-1 bg-terminal-gray/20 text-terminal-gray rounded font-mono">4H</span>
                    </div>
                  </div>

                  {/* Combined Analytics Chart */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* Social Intelligence */}
                    <Card className="p-4 bg-black/40 border border-terminal-blue/20 backdrop-blur-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center justify-center w-6 h-6 bg-terminal-blue/20 rounded">
                          <Activity className="w-3 h-3 text-terminal-blue" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-terminal-white font-mono">
                            SOCIAL INTELLIGENCE
                          </h4>
                          <div className="text-xs text-terminal-gray">
                            Sentiment & Engagement
                          </div>
                        </div>
                      </div>
                      
                      <div className="h-32">
                        <AnimatedChart
                          data={socialData}
                          isVisible={isIntersecting}
                          gridColor="rgba(100, 116, 139, 0.1)"
                          lines={[
                            { dataKey: 'engagement', stroke: 'hsl(var(--terminal-blue))', strokeWidth: 2 },
                            { dataKey: 'mentions', stroke: 'hsl(var(--terminal-green))', strokeWidth: 2 },
                          ]}
                          tooltipFormatter={(value, name) => {
                            const formatValue = (val) => {
                              if (val >= 1000) return `${(val / 1000).toFixed(1)}K`;
                              return val.toString();
                            };
                            const labels = {
                              engagement: 'Engagement',
                              mentions: 'Mentions'
                            };
                            return [formatValue(value), labels[name] || name];
                          }}
                        />
                      </div>
                      
                      <div className="flex gap-3 mt-2">
                        <div className="flex items-center gap-1 text-xs">
                          <div className="w-2 h-1 bg-terminal-blue"></div>
                          <span className="text-terminal-gray">Engagement</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs">
                          <div className="w-2 h-1 bg-terminal-green"></div>
                          <span className="text-terminal-gray">Mentions</span>
                        </div>
                      </div>
                    </Card>

                    {/* Technical Analysis */}
                    <Card className="p-4 bg-black/40 border border-terminal-green/20 backdrop-blur-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center justify-center w-6 h-6 bg-terminal-green/20 rounded">
                          <BarChart3 className="w-3 h-3 text-terminal-green" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-terminal-white font-mono">
                            TECHNICAL ANALYSIS
                          </h4>
                          <div className="text-xs text-terminal-gray">
                            On-Chain Metrics
                          </div>
                        </div>
                      </div>
                      
                      <div className="h-32">
                        <AnimatedChart
                          data={technicalData}
                          isVisible={isIntersecting}
                          gridColor="rgba(100, 116, 139, 0.1)"
                          lines={[
                            { dataKey: 'volume', stroke: 'hsl(var(--terminal-green))', strokeWidth: 2 },
                            { dataKey: 'holders', stroke: 'hsl(var(--terminal-blue))', strokeWidth: 2 },
                          ]}
                          tooltipFormatter={(value, name) => {
                            const formatValue = (val) => {
                              if (name === 'holders' && val >= 1000) return `${(val / 1000).toFixed(1)}K`;
                              if (name === 'volume') return `$${val}M`;
                              return val.toString();
                            };
                            const labels = {
                              volume: 'Volume',
                              holders: 'Holders'
                            };
                            return [formatValue(value), labels[name] || name];
                          }}
                        />
                      </div>
                      
                      <div className="flex gap-3 mt-2">
                        <div className="flex items-center gap-1 text-xs">
                          <div className="w-2 h-1 bg-terminal-green"></div>
                          <span className="text-terminal-gray">Volume</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs">
                          <div className="w-2 h-1 bg-terminal-blue"></div>
                          <span className="text-terminal-gray">Holders</span>
                        </div>
                      </div>
                    </Card>
                  </div>

                </div>
              </div>

              {/* AI Analysis Summary */}
              <Card className="p-6 bg-gradient-to-r from-terminal-green/5 to-terminal-blue/5 border border-terminal-green/30 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded bg-terminal-green/20 flex items-center justify-center">
                    <Target className="w-5 h-5 text-terminal-green" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-terminal-green mb-2 font-mono">AI ANALYSIS SUMMARY</h4>
                    <p className="text-terminal-gray mb-4 font-mono text-sm">
                      "Strong social momentum combined with healthy on-chain metrics. Community signals indicate sustained interest. Technical breakout pattern confirmed."
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="bg-black/20 rounded p-3">
                        <div className="text-xs text-terminal-gray mb-1 font-mono uppercase">ENTRY RANGE</div>
                        <div className="text-terminal-green font-mono text-sm">$0.0000087-92</div>
                      </div>
                      <div className="bg-black/20 rounded p-3">
                        <div className="text-xs text-terminal-gray mb-1 font-mono uppercase">TARGET</div>
                        <div className="text-terminal-blue font-mono text-sm">$0.0000125</div>
                      </div>
                      <div className="bg-black/20 rounded p-3">
                        <div className="text-xs text-terminal-gray mb-1 font-mono uppercase">RISK LEVEL</div>
                        <div className="text-terminal-green font-mono text-sm">LOW-MED</div>
                      </div>
                      <div className="bg-black/20 rounded p-3">
                        <div className="text-xs text-terminal-gray mb-1 font-mono uppercase">TIMEFRAME</div>
                        <div className="text-terminal-amber font-mono text-sm">
                          <AnimatedNumber value={24} isVisible={isIntersecting} />-
                          <AnimatedNumber value={72} isVisible={isIntersecting} />H
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Terminal Action */}
              <div className="text-center">
                <Button 
                  variant="analyze" 
                  size="lg" 
                  className="px-12 font-mono bg-terminal-blue/20 border border-terminal-blue/40 text-terminal-blue hover:bg-terminal-blue/30"
                >
                  INITIALIZE ANALYSIS (<AnimatedNumber 
                    value={25} 
                    isVisible={isIntersecting} 
                  /> CREDITS)
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}