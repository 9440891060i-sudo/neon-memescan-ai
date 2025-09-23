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

// Mock data for trading chart with candlestick-style data
const tradingData = [
  { time: '06', open: 0.0000087, high: 0.0000091, low: 0.0000085, close: 0.0000089, suggestedEntry: 0.0000090 },
  { time: '11', open: 0.0000089, high: 0.0000094, low: 0.0000088, close: 0.0000092, suggestedEntry: 0.0000090 },
  { time: '16', open: 0.0000092, high: 0.0000093, low: 0.0000084, close: 0.0000087, suggestedEntry: 0.0000090 },
  { time: '21', open: 0.0000087, high: 0.0000097, low: 0.0000086, close: 0.0000095, suggestedEntry: 0.0000090 },
  { time: '26', open: 0.0000095, high: 0.0000102, low: 0.0000094, close: 0.0000098, suggestedEntry: 0.0000090 },
  { time: 'Mar', open: 0.0000098, high: 0.0000099, low: 0.0000091, close: 0.0000093, suggestedEntry: 0.0000090 },
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
              {/* Main Analytics Grid */}
              <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-6 mb-8">
                
                {/* Charts Section */}
                <div className="space-y-6">
                  
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

                  {/* Analytics Charts */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    
                    {/* Social Intelligence */}
                    <Card className="p-6 bg-black/40 border border-terminal-blue/20 backdrop-blur-sm">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="flex items-center justify-center w-8 h-8 bg-terminal-blue/20 rounded-lg">
                          <Activity className="w-4 h-4 text-terminal-blue" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-terminal-white font-mono">
                            SOCIAL INTELLIGENCE
                          </h4>
                          <div className="text-xs text-terminal-gray uppercase tracking-wider">
                            Sentiment & Engagement Analysis
                          </div>
                        </div>
                      </div>
                      
                      <div className="h-64">
                        <AnimatedChart
                          data={socialData}
                          isVisible={isIntersecting}
                          gridColor="rgba(100, 116, 139, 0.1)"
                          lines={[
                            { dataKey: 'engagement', stroke: 'hsl(var(--terminal-blue))', strokeWidth: 2 },
                            { dataKey: 'mentions', stroke: 'hsl(var(--terminal-green))', strokeWidth: 2 },
                            { dataKey: 'reach', stroke: 'hsl(var(--terminal-amber))', strokeWidth: 2, strokeDasharray: "5 5" }
                          ]}
                          tooltipFormatter={(value, name) => {
                            const formatValue = (val) => {
                              if (name === 'reach' && val >= 1000) return `${(val / 1000).toFixed(0)}K`;
                              if (val >= 1000) return `${(val / 1000).toFixed(1)}K`;
                              return val.toString();
                            };
                            const labels = {
                              engagement: 'Engagement Score',
                              mentions: 'Social Mentions',
                              reach: 'Total Reach'
                            };
                            return [formatValue(value), labels[name] || name];
                          }}
                        />
                      </div>
                      
                      <div className="flex flex-wrap gap-4 mt-4">
                        <div className="flex items-center gap-2 text-xs">
                          <div className="w-3 h-1 bg-terminal-blue"></div>
                          <span className="text-terminal-gray">Engagement</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <div className="w-3 h-1 bg-terminal-green"></div>
                          <span className="text-terminal-gray">Mentions</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <div className="w-3 h-1 bg-terminal-amber border-dashed border-b"></div>
                          <span className="text-terminal-gray">Reach</span>
                        </div>
                      </div>
                    </Card>

                    {/* Technical Analysis */}
                    <Card className="p-6 bg-black/40 border border-terminal-green/20 backdrop-blur-sm">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="flex items-center justify-center w-8 h-8 bg-terminal-green/20 rounded-lg">
                          <BarChart3 className="w-4 h-4 text-terminal-green" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-terminal-white font-mono">
                            TECHNICAL ANALYSIS
                          </h4>
                          <div className="text-xs text-terminal-gray uppercase tracking-wider">
                            On-Chain & Volume Metrics
                          </div>
                        </div>
                      </div>
                      
                      <div className="h-64">
                        <AnimatedChart
                          data={technicalData}
                          isVisible={isIntersecting}
                          gridColor="rgba(100, 116, 139, 0.1)"
                          lines={[
                            { dataKey: 'volume', stroke: 'hsl(var(--terminal-green))', strokeWidth: 2 },
                            { dataKey: 'holders', stroke: 'hsl(var(--terminal-blue))', strokeWidth: 2 },
                            { dataKey: 'liquidity', stroke: 'hsl(var(--terminal-amber))', strokeWidth: 2 },
                            { dataKey: 'txCount', stroke: 'hsl(var(--terminal-red))', strokeWidth: 1, strokeDasharray: "3 3" }
                          ]}
                          tooltipFormatter={(value, name) => {
                            const formatValue = (val) => {
                              if (name === 'holders' && val >= 1000) return `${(val / 1000).toFixed(1)}K`;
                              if (name === 'volume') return `$${val}M`;
                              if (name === 'liquidity' && val >= 1000) return `$${(val / 1000).toFixed(0)}K`;
                              return val.toString();
                            };
                            const labels = {
                              volume: 'Trading Volume',
                              holders: 'Token Holders',
                              liquidity: 'Liquidity Pool',
                              txCount: 'Transaction Count'
                            };
                            return [formatValue(value), labels[name] || name];
                          }}
                        />
                      </div>
                      
                      <div className="flex flex-wrap gap-4 mt-4">
                        <div className="flex items-center gap-2 text-xs">
                          <div className="w-3 h-1 bg-terminal-green"></div>
                          <span className="text-terminal-gray">Volume</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <div className="w-3 h-1 bg-terminal-blue"></div>
                          <span className="text-terminal-gray">Holders</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <div className="w-3 h-1 bg-terminal-amber"></div>
                          <span className="text-terminal-gray">Liquidity</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <div className="w-3 h-1 bg-terminal-red border-dashed border-b"></div>
                          <span className="text-terminal-gray">Transactions</span>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>

                {/* Right Sidebar - Community Signals & Risk Assessment */}
                <div className="space-y-6">
                  
                  {/* Community Signals */}
                  <CommunitySignals />
                  
                  {/* Risk Assessment */}
                  <Card className="p-6 bg-black/40 border border-terminal-amber/20 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="flex items-center justify-center w-8 h-8 bg-terminal-amber/20 rounded-lg">
                        <Shield className="w-4 h-4 text-terminal-amber" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-terminal-white font-mono">
                          RISK ASSESSMENT
                        </h4>
                        <div className="text-xs text-terminal-gray uppercase tracking-wider">
                          Security & Compliance Metrics
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-terminal-green/5 border border-terminal-green/20 rounded p-3">
                          <div className="text-xs text-terminal-gray mb-1 font-mono">WALLET AGE</div>
                          <div className="text-lg text-terminal-green font-mono">
                            <AnimatedNumber 
                              value={68} 
                              isVisible={isIntersecting} 
                              formatter={(val) => `${val}D`}
                            />
                          </div>
                        </div>
                        <div className="bg-terminal-blue/5 border border-terminal-blue/20 rounded p-3">
                          <div className="text-xs text-terminal-gray mb-1 font-mono">CREDIBILITY</div>
                          <div className="text-lg text-terminal-blue font-mono">
                            <AnimatedNumber 
                              value={94} 
                              isVisible={isIntersecting} 
                              formatter={(val) => `${val}%`}
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-2 bg-terminal-green/5 border border-terminal-green/20 rounded">
                          <span className="text-sm text-terminal-gray font-mono">DEV VERIFICATION</span>
                          <span className="text-terminal-green font-mono text-sm">✓ VERIFIED</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-terminal-green/5 border border-terminal-green/20 rounded">
                          <span className="text-sm text-terminal-gray font-mono">LIQUIDITY LOCKED</span>
                          <span className="text-terminal-green font-mono text-sm">✓ SECURED</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-terminal-amber/5 border border-terminal-amber/20 rounded">
                          <span className="text-sm text-terminal-gray font-mono">CONTRACT AUDIT</span>
                          <span className="text-terminal-amber font-mono text-sm">⚠ PENDING</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Professional TradingView-Style Chart */}
              <div className="mb-8">
                <Card className="p-0 bg-black/90 border border-terminal-green/30 backdrop-blur-sm overflow-hidden">
                  
                  {/* Trading Header */}
                  <div className="px-6 py-4 border-b border-terminal-gray/20 bg-black/60">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-terminal-green/20 flex items-center justify-center">
                            <span className="text-terminal-green font-bold text-sm">P</span>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-terminal-white font-mono">PEPE / TetherUS</h4>
                            <div className="flex items-center gap-2 text-sm">
                              <span className="text-terminal-green font-mono">0.0000089</span>
                              <span className="text-terminal-green font-mono">+0.0000008 (+9.85%)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Buy/Sell Buttons */}
                      <div className="flex items-center gap-3">
                        <button className="px-4 py-2 bg-terminal-red/20 border border-terminal-red/40 text-terminal-red rounded font-mono text-sm hover:bg-terminal-red/30 transition-colors">
                          0.0000088<br/>
                          <span className="text-xs">SELL</span>
                        </button>
                        <span className="text-terminal-gray font-mono text-xs">0.0001</span>
                        <button className="px-4 py-2 bg-terminal-blue/20 border border-terminal-blue/40 text-terminal-blue rounded font-mono text-sm hover:bg-terminal-blue/30 transition-colors">
                          0.0000089<br/>
                          <span className="text-xs">BUY</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Chart Container */}
                  <div className="relative">
                    {/* Price Levels (Right Side) */}
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-black/40 border-l border-terminal-gray/20 z-10">
                      <div className="h-full flex flex-col justify-between py-4 px-2">
                        <div className="text-xs text-terminal-gray font-mono text-right">0.000010</div>
                        <div className="text-xs text-terminal-gray font-mono text-right">0.000009</div>
                        <div className="text-xs text-terminal-amber font-mono text-right font-semibold">0.000008</div>
                        <div className="text-xs text-terminal-gray font-mono text-right">0.000007</div>
                        <div className="text-xs text-terminal-gray font-mono text-right">0.000006</div>
                      </div>
                    </div>

                    {/* Main Chart Area */}
                    <div className="pr-20 bg-black/60" style={{ height: '400px' }}>
                      <div className="relative h-full">
                        {/* Candlestick Chart Simulation */}
                        <div className="absolute inset-0 flex items-end justify-around px-8 py-8">
                          {tradingData.map((candle, index) => {
                            const isGreen = candle.close > candle.open;
                            const bodyHeight = Math.abs(candle.close - candle.open) * 2000000;
                            const wickTop = (candle.high - Math.max(candle.open, candle.close)) * 2000000;
                            const wickBottom = (Math.min(candle.open, candle.close) - candle.low) * 2000000;
                            
                            return (
                              <div key={index} className="flex flex-col items-center relative" style={{ height: '300px' }}>
                                {/* Top Wick */}
                                <div 
                                  className={`w-0.5 ${isGreen ? 'bg-terminal-green' : 'bg-terminal-red'}`}
                                  style={{ height: `${wickTop}px` }}
                                />
                                {/* Body */}
                                <div 
                                  className={`w-3 ${isGreen ? 'bg-terminal-green' : 'bg-terminal-red'}`}
                                  style={{ height: `${Math.max(bodyHeight, 2)}px` }}
                                />
                                {/* Bottom Wick */}
                                <div 
                                  className={`w-0.5 ${isGreen ? 'bg-terminal-green' : 'bg-terminal-red'}`}
                                  style={{ height: `${wickBottom}px` }}
                                />
                              </div>
                            );
                          })}
                        </div>

                        {/* Suggested Entry Line */}
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full relative">
                            <div 
                              className="absolute w-full border-t-2 border-terminal-amber border-dashed"
                              style={{ top: '60%' }}
                            />
                            <div 
                              className="absolute right-24 bg-terminal-amber text-black px-2 py-1 text-xs font-mono font-semibold"
                              style={{ top: '57%' }}
                            >
                              SUGGESTED ENTRY
                            </div>
                          </div>
                        </div>

                        {/* Grid Lines */}
                        <div className="absolute inset-0 pointer-events-none">
                          {[...Array(5)].map((_, i) => (
                            <div 
                              key={i}
                              className="absolute w-full border-t border-terminal-gray/10"
                              style={{ top: `${(i + 1) * 16.66}%` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Time Axis */}
                    <div className="flex justify-between items-center px-8 py-2 bg-black/40 border-t border-terminal-gray/20 pr-20">
                      {tradingData.map((item, index) => (
                        <span key={index} className="text-xs text-terminal-gray font-mono">
                          {item.time}
                        </span>
                      ))}
                    </div>

                    {/* Current Price Indicator */}
                    <div className="absolute right-20 top-1/2 transform -translate-y-1/2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-terminal-green rounded-full animate-pulse"></div>
                        <div className="ml-2 bg-terminal-green text-black px-2 py-1 text-xs font-mono font-semibold">
                          0.0000089
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Chart Controls */}
                  <div className="px-6 py-3 bg-black/40 border-t border-terminal-gray/20">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="text-terminal-green font-mono text-sm">4H</span>
                        <div className="flex gap-2">
                          <span className="text-xs px-2 py-1 bg-terminal-gray/20 text-terminal-gray rounded font-mono">1D</span>
                          <span className="text-xs px-2 py-1 bg-terminal-gray/20 text-terminal-gray rounded font-mono">1W</span>
                          <span className="text-xs px-2 py-1 bg-terminal-gray/20 text-terminal-gray rounded font-mono">1M</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-terminal-gray font-mono">Entry Zone</div>
                        <div className="text-sm text-terminal-amber font-mono">$0.0000088-90</div>
                      </div>
                    </div>
                  </div>
                </Card>
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