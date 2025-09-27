import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, BarChart3, Shield, Activity, Target, Clock, Database, Brain, Wallet, Users } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import { AnimatedChart } from "@/components/AnimatedChart";
import CommunitySignals from "@/components/CommunitySignals";
import { useState } from "react";

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

// Mock data for market intelligence
const marketData = [
  { time: '9AM', whaleActivity: 3.2, institutionalFlow: 1.8, retailSentiment: 0.65, marketCap: 2.1 },
  { time: '10AM', whaleActivity: 4.1, institutionalFlow: 2.3, retailSentiment: 0.72, marketCap: 2.2 },
  { time: '11AM', whaleActivity: 3.8, institutionalFlow: 2.1, retailSentiment: 0.68, marketCap: 2.15 },
  { time: '12PM', whaleActivity: 5.2, institutionalFlow: 3.1, retailSentiment: 0.85, marketCap: 2.4 },
  { time: '1PM', whaleActivity: 6.4, institutionalFlow: 3.8, retailSentiment: 0.88, marketCap: 2.6 },
  { time: '2PM', whaleActivity: 5.9, institutionalFlow: 3.5, retailSentiment: 0.82, marketCap: 2.5 },
  { time: '3PM', whaleActivity: 7.2, institutionalFlow: 4.2, retailSentiment: 0.91, marketCap: 2.8 },
];

// Mock data for liquidity analysis
const liquidityData = [
  { time: '9AM', depth: 245000, spread: 0.12, slippage: 2.8, orderBook: 85 },
  { time: '10AM', depth: 268000, spread: 0.09, slippage: 2.3, orderBook: 92 },
  { time: '11AM', depth: 287000, spread: 0.08, slippage: 2.1, orderBook: 88 },
  { time: '12PM', depth: 325000, spread: 0.06, slippage: 1.8, orderBook: 94 },
  { time: '1PM', depth: 358000, spread: 0.05, slippage: 1.5, orderBook: 97 },
  { time: '2PM', depth: 342000, spread: 0.07, slippage: 1.9, orderBook: 91 },
  { time: '3PM', depth: 385000, spread: 0.04, slippage: 1.2, orderBook: 99 },
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

const featureBoxes = [
  {
    id: 'x-data',
    title: 'X Data',
    icon: Database,
    description: 'Real-time social sentiment analysis from X (Twitter), tracking mentions, engagement, and influencer activity for comprehensive market intelligence.',
    details: ['Live tweet monitoring', 'Influencer tracking', 'Sentiment scoring', 'Viral trend detection']
  },
  {
    id: 'ai-analysis',
    title: 'AI Analysis', 
    icon: Brain,
    description: 'Advanced machine learning algorithms that analyze market patterns, predict price movements, and identify optimal entry/exit points.',
    details: ['Pattern recognition', 'Price prediction', 'Risk assessment', 'Market anomaly detection']
  },
  {
    id: 'wallet-data',
    title: 'Wallet Data',
    icon: Wallet,
    description: 'On-chain wallet analytics tracking whale movements, holder distribution, and large transactions to predict market direction.',
    details: ['Whale tracking', 'Holder analysis', 'Transaction monitoring', 'Flow analysis']
  },
  {
    id: 'lca',
    title: 'LCA',
    icon: Users,
    description: 'Large Community Alerts from exclusive insider groups, providing early signals on major market movements and upcoming catalysts.',
    details: ['Insider signals', 'Community alerts', 'Early warnings', 'Exclusive insights']
  }
];

export default function DashboardPreview() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });
  const [expandedBox, setExpandedBox] = useState(null);
  
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

            <div className="relative">
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

                  {/* TradingView Chart - Expanded to Fill Space */}
                  <Card className="p-0 bg-black/90 border border-terminal-green/30 backdrop-blur-sm overflow-hidden">
                    
                    {/* Trading Header */}
                    <div className="px-4 py-3 border-b border-terminal-gray/20 bg-black/60">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-terminal-green/20 flex items-center justify-center">
                            <span className="text-terminal-green font-bold text-xs">P</span>
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-terminal-white font-mono">PEPE/USDT CHART</h4>
                            <div className="flex items-center gap-2 text-xs">
                              <span className="text-terminal-red font-mono">0.0000054</span>
                              <span className="text-terminal-red font-mono">-40.2%</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Chart Timeframe */}
                        <div className="flex items-center gap-2">
                          <span className="text-terminal-green font-mono text-xs">4H</span>
                          <div className="flex gap-1">
                            <span className="text-xs px-2 py-1 bg-terminal-gray/20 text-terminal-gray rounded font-mono">1D</span>
                            <span className="text-xs px-2 py-1 bg-terminal-gray/20 text-terminal-gray rounded font-mono">1W</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Chart Container - Compact */}
                    <div className="relative">
                      {/* Price Levels (Right Side) */}
                      <div className="absolute right-0 top-0 bottom-0 w-16 bg-black/40 border-l border-terminal-gray/20 z-10">
                        <div className="h-full flex flex-col justify-between py-2 px-1">
                          <div className="text-xs text-terminal-gray font-mono text-right">0.0000100</div>
                          <div className="text-xs text-terminal-gray font-mono text-right">0.0000090</div>
                          <div className="text-xs text-terminal-amber font-mono text-right font-semibold">0.0000080</div>
                          <div className="text-xs text-terminal-gray font-mono text-right">0.0000070</div>
                          <div className="text-xs text-terminal-gray font-mono text-right">0.0000060</div>
                          <div className="text-xs text-terminal-red font-mono text-right">0.0000050</div>
                          <div className="text-xs text-terminal-gray font-mono text-right">0.0000040</div>
                          <div className="text-xs text-terminal-gray font-mono text-right">0.0000030</div>
                        </div>
                      </div>

                      {/* Main Chart Area - Reduced Height */}
                      <div className="pr-16 bg-black/60" style={{ height: '280px' }}>
                        <div className="relative h-full">
                          
                          {/* Moving Average Lines */}
                          <svg className="absolute inset-0 w-full h-full pointer-events-none">
                            <defs>
                              <linearGradient id="ma20Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="hsl(var(--terminal-blue))" stopOpacity="0.7"/>
                                <stop offset="100%" stopColor="hsl(var(--terminal-blue))" stopOpacity="0.9"/>
                              </linearGradient>
                              <linearGradient id="ma50Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="hsl(var(--terminal-amber))" stopOpacity="0.7"/>
                                <stop offset="100%" stopColor="hsl(var(--terminal-amber))" stopOpacity="0.9"/>
                              </linearGradient>
                            </defs>
                            
                            {/* MA20 Line (Blue) */}
                            <path
                              d={`M ${tradingData.map((candle, index) => {
                                const x = (index / (tradingData.length - 1)) * 100;
                                const y = 100 - (((candle.ma20 - 0.0000030) / 0.0000070) * 100);
                                return `${index === 0 ? 'M' : 'L'} ${x}% ${y}%`;
                              }).join(' ')}`}
                              stroke="url(#ma20Gradient)"
                              strokeWidth="2"
                              fill="none"
                            />
                            
                            {/* MA50 Line (Orange) */}
                            <path
                              d={`M ${tradingData.map((candle, index) => {
                                const x = (index / (tradingData.length - 1)) * 100;
                                const y = 100 - (((candle.ma50 - 0.0000030) / 0.0000070) * 100);
                                return `${index === 0 ? 'M' : 'L'} ${x}% ${y}%`;
                              }).join(' ')}`}
                              stroke="url(#ma50Gradient)"
                              strokeWidth="2"
                              fill="none"
                            />
                          </svg>
                          
                          {/* Candlestick Chart */}
                          <div className="absolute inset-0 flex items-end px-2 py-2" style={{ paddingRight: '66px' }}>
                            {tradingData.map((candle, index) => {
                              const isGreen = candle.close > candle.open;
                              const priceRange = 0.0000070; // Max price range for scaling
                              const minPrice = 0.0000030;
                              const chartHeight = 260; // Available chart height
                              
                              // Calculate positions (inverted because chart goes from bottom to top)
                              const openPos = ((candle.open - minPrice) / priceRange) * chartHeight;
                              const closePos = ((candle.close - minPrice) / priceRange) * chartHeight;
                              const highPos = ((candle.high - minPrice) / priceRange) * chartHeight;
                              const lowPos = ((candle.low - minPrice) / priceRange) * chartHeight;
                              
                              const bodyHeight = Math.abs(closePos - openPos);
                              const bodyBottom = Math.min(openPos, closePos);
                              
                              return (
                                <div key={index} className="flex flex-col items-center relative" style={{ width: `${100 / tradingData.length}%` }}>
                                  {/* Container for entire candle */}
                                  <div className="relative" style={{ height: `${chartHeight}px`, width: '3px' }}>
                                    {/* Top Wick */}
                                    <div 
                                      className={`absolute left-1/2 transform -translate-x-1/2 w-px ${isGreen ? 'bg-terminal-green' : 'bg-terminal-red'}`}
                                      style={{ 
                                        bottom: `${Math.max(openPos, closePos)}px`,
                                        height: `${Math.max(highPos - Math.max(openPos, closePos), 0)}px`
                                      }}
                                    />
                                    
                                    {/* Body */}
                                    <div 
                                      className={`absolute left-1/2 transform -translate-x-1/2 w-full ${
                                        isGreen ? 'bg-terminal-green' : 'bg-terminal-red'
                                      } ${bodyHeight < 2 ? 'border-t' : ''} ${
                                        !isGreen && bodyHeight < 2 ? 'border-terminal-red' : ''
                                      } ${
                                        isGreen && bodyHeight < 2 ? 'border-terminal-green' : ''
                                      }`}
                                      style={{ 
                                        bottom: `${bodyBottom}px`,
                                        height: `${Math.max(bodyHeight, 1)}px`
                                      }}
                                    />
                                    
                                    {/* Bottom Wick */}
                                    <div 
                                      className={`absolute left-1/2 transform -translate-x-1/2 w-px ${isGreen ? 'bg-terminal-green' : 'bg-terminal-red'}`}
                                      style={{ 
                                        bottom: `${lowPos}px`,
                                        height: `${Math.max(Math.min(openPos, closePos) - lowPos, 0)}px`
                                      }}
                                    />
                                  </div>
                                </div>
                              );
                            })}
                          </div>

                          {/* Suggested Entry Line */}
                          <div className="absolute inset-0 flex items-center" style={{ top: '25%' }}>
                            <div className="w-full relative">
                              <div className="absolute w-full border-t border-terminal-amber border-dashed opacity-70" />
                              <div className="absolute left-2 bg-terminal-amber/20 text-terminal-amber px-2 py-1 text-xs font-mono border border-terminal-amber/40 rounded">
                                Entry: $0.0000078
                              </div>
                            </div>
                          </div>

                          {/* Grid Lines */}
                          <div className="absolute inset-0 pointer-events-none">
                            {[...Array(6)].map((_, i) => (
                              <div 
                                key={i}
                                className="absolute w-full border-t border-terminal-gray/5"
                                style={{ top: `${(i + 1) * 16.66}%` }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Current Price Indicator */}
                      <div className="absolute right-16 bottom-1/4 transform translate-y-1/2">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-terminal-red rounded-full animate-pulse"></div>
                          <div className="ml-2 bg-terminal-red text-white px-2 py-1 text-xs font-mono font-semibold rounded">
                            0.0000054
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Chart Legend */}
                    <div className="px-4 py-2 bg-black/40 border-t border-terminal-gray/20">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1 text-xs">
                            <div className="w-3 h-0.5 bg-terminal-blue"></div>
                            <span className="text-terminal-gray font-mono">MA20</span>
                          </div>
                          <div className="flex items-center gap-1 text-xs">
                            <div className="w-3 h-0.5 bg-terminal-amber"></div>
                            <span className="text-terminal-gray font-mono">MA50</span>
                          </div>
                          <div className="flex items-center gap-1 text-xs">
                            <div className="w-3 h-0.5 bg-terminal-amber border-dashed border-b"></div>
                            <span className="text-terminal-gray font-mono">Entry</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-terminal-gray font-mono">Vol: $24.8M</div>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Additional Analysis Charts */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* Market Intelligence */}
                    <Card className="p-4 bg-black/40 border border-terminal-amber/20 backdrop-blur-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center justify-center w-6 h-6 bg-terminal-amber/20 rounded">
                          <TrendingUp className="w-3 h-3 text-terminal-amber" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-terminal-white font-mono">
                            MARKET INTELLIGENCE
                          </h4>
                          <div className="text-xs text-terminal-gray">
                            Whale & Institution Activity
                          </div>
                        </div>
                      </div>
                      
                      <div className="h-32">
                        <AnimatedChart
                          data={marketData}
                          isVisible={isIntersecting}
                          gridColor="rgba(100, 116, 139, 0.1)"
                          lines={[
                            { dataKey: 'whaleActivity', stroke: 'hsl(var(--terminal-amber))', strokeWidth: 2 },
                            { dataKey: 'institutionalFlow', stroke: 'hsl(var(--terminal-blue))', strokeWidth: 2 },
                          ]}
                          tooltipFormatter={(value, name) => {
                            const formatValue = (val) => {
                              if (name === 'marketCap') return `$${val.toFixed(1)}B`;
                              if (name === 'whaleActivity') return `${val.toFixed(1)}M`;
                              if (name === 'institutionalFlow') return `$${val.toFixed(1)}M`;
                              return val.toString();
                            };
                            const labels = {
                              whaleActivity: 'Whale Activity',
                              institutionalFlow: 'Institutional Flow'
                            };
                            return [formatValue(value), labels[name] || name];
                          }}
                        />
                      </div>
                      
                      <div className="flex gap-3 mt-2">
                        <div className="flex items-center gap-1 text-xs">
                          <div className="w-2 h-1 bg-terminal-amber"></div>
                          <span className="text-terminal-gray">Whale Activity</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs">
                          <div className="w-2 h-1 bg-terminal-blue"></div>
                          <span className="text-terminal-gray">Institution Flow</span>
                        </div>
                      </div>
                    </Card>

                    {/* Liquidity Analysis */}
                    <Card className="p-4 bg-black/40 border border-terminal-red/20 backdrop-blur-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center justify-center w-6 h-6 bg-terminal-red/20 rounded">
                          <BarChart3 className="w-3 h-3 text-terminal-red" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-terminal-white font-mono">
                            LIQUIDITY ANALYSIS
                          </h4>
                          <div className="text-xs text-terminal-gray">
                            Order Book & Market Depth
                          </div>
                        </div>
                      </div>
                      
                      <div className="h-32">
                        <AnimatedChart
                          data={liquidityData}
                          isVisible={isIntersecting}
                          gridColor="rgba(100, 116, 139, 0.1)"
                          lines={[
                            { dataKey: 'depth', stroke: 'hsl(var(--terminal-red))', strokeWidth: 2 },
                            { dataKey: 'orderBook', stroke: 'hsl(var(--terminal-green))', strokeWidth: 2 },
                          ]}
                          tooltipFormatter={(value, name) => {
                            const formatValue = (val) => {
                              if (name === 'depth' && val >= 1000) return `$${(val / 1000).toFixed(0)}K`;
                              if (name === 'orderBook') return `${val}%`;
                              if (name === 'spread') return `${val}%`;
                              if (name === 'slippage') return `${val}%`;
                              return val.toString();
                            };
                            const labels = {
                              depth: 'Market Depth',
                              orderBook: 'Order Book Health'
                            };
                            return [formatValue(value), labels[name] || name];
                          }}
                        />
                      </div>
                      
                      <div className="flex gap-3 mt-2">
                        <div className="flex items-center gap-1 text-xs">
                          <div className="w-2 h-1 bg-terminal-red"></div>
                          <span className="text-terminal-gray">Market Depth</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs">
                          <div className="w-2 h-1 bg-terminal-green"></div>
                          <span className="text-terminal-gray">Order Book</span>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>

                {/* Sidebar (38.2%) - Community Signals & Risk Assessment */}
                <div className="space-y-4">
                  
                  {/* Community Signals */}
                  <CommunitySignals />
                  
                  {/* Risk Assessment */}
                  <Card className="p-6 bg-black/40 border border-terminal-amber/20 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-4">
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
                    
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-3">
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
                      
                      <div className="space-y-2">
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

                  {/* Compact Key Metrics */}
                  <Card className="p-4 bg-black/40 border border-terminal-blue/20 backdrop-blur-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center justify-center w-6 h-6 bg-terminal-blue/20 rounded">
                        <TrendingUp className="w-3 h-3 text-terminal-blue" />
                      </div>
                      <h4 className="text-sm font-semibold text-terminal-white font-mono">
                        KEY METRICS
                      </h4>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-terminal-gray font-mono">24H VOLUME</span>
                        <span className="text-terminal-green font-mono text-xs">$24.8M</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-terminal-gray font-mono">MARKET CAP</span>
                        <span className="text-terminal-blue font-mono text-xs">$2.1B</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-terminal-gray font-mono">HOLDERS</span>
                        <span className="text-terminal-amber font-mono text-xs">152.8K</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-terminal-gray font-mono">CONFIDENCE</span>
                        <span className="text-terminal-green font-mono text-xs">87.4%</span>
                      </div>
                    </div>
                  </Card>
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

                {/* Feature Boxes Section - Inside Terminal */}
                <div className="mt-8 mb-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 relative z-30">
                  {featureBoxes.map((feature) => {
                    const Icon = feature.icon;
                    const isExpanded = expandedBox === feature.id;
                    
                    return (
                      <div
                        key={feature.id}
                        className={`relative bg-black/90 border rounded-lg transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] cursor-pointer backdrop-blur-sm ${
                          isExpanded 
                            ? 'transform scale-[1.02] z-40 border-terminal-blue/80 shadow-2xl shadow-terminal-blue/30 bg-black/95' 
                            : 'border-terminal-gray/40 hover:border-terminal-blue/60 hover:bg-black/95'
                        }`}
                        onClick={() => setExpandedBox(isExpanded ? null : feature.id)}
                        onMouseLeave={() => {
                          setTimeout(() => {
                            if (expandedBox === feature.id) {
                              setExpandedBox(null);
                            }
                          }, 150);
                        }}
                      >
                        <div className="p-4">
                          {/* Header */}
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-7 h-7 rounded-sm bg-gradient-to-br from-terminal-blue/30 to-terminal-blue/10 border border-terminal-blue/30 flex items-center justify-center">
                              <Icon className="w-3.5 h-3.5 text-terminal-blue" strokeWidth={1.5} />
                            </div>
                            <h4 className="text-xs font-semibold text-terminal-white font-mono uppercase tracking-wider">
                              {feature.title}
                            </h4>
                          </div>
                          
                          {/* Description */}
                          <p className="text-xs text-terminal-gray/90 font-mono leading-relaxed mb-3 line-clamp-3">
                            {feature.description}
                          </p>
                          
                          {/* Expandable Details */}
                          <div className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] ${
                            isExpanded ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                          }`}>
                            <div className="pt-3 border-t border-terminal-gray/30">
                              <div className="text-[10px] text-terminal-blue/80 font-mono mb-2 uppercase tracking-widest">
                                Capabilities
                              </div>
                              <ul className="space-y-1.5">
                                {feature.details.map((detail, index) => (
                                  <li key={index} className="text-xs text-terminal-gray/80 font-mono flex items-start gap-2">
                                    <div className="w-1 h-1 bg-terminal-blue/70 rounded-full mt-1.5 flex-shrink-0"></div>
                                    <span className="leading-relaxed">{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          
                          {/* Status Indicator */}
                          <div className="mt-3 flex items-center justify-between">
                            <div className="flex items-center gap-1">
                              <div className={`w-1.5 h-1.5 rounded-full ${isExpanded ? 'bg-terminal-green animate-pulse' : 'bg-terminal-gray/50'}`}></div>
                              <span className="text-[10px] text-terminal-gray/60 font-mono uppercase tracking-wide">
                                {isExpanded ? 'Active' : 'Ready'}
                              </span>
                            </div>
                            <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                              <div className="w-3 h-px bg-terminal-blue/60"></div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Subtle Glow Effect */}
                        {isExpanded && (
                          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-terminal-blue/10 via-transparent to-terminal-blue/5 pointer-events-none border border-terminal-blue/20"></div>
                        )}
                      </div>
                    );
                  })}
                 </div>
               </div>
             </div>

             {/* Fade to Black Effect - Start Higher */}
             <div className="absolute inset-0 pointer-events-none">
               <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-black via-black/95 via-30% to-transparent z-20" />
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}