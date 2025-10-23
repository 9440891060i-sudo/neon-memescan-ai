import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, BarChart3, Shield, Activity, Target, Clock, Database, Brain, Wallet, Users, User, UserPlus, Crown, MessageSquare } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import { AnimatedChart } from "@/components/AnimatedChart";
import CommunitySignals from "@/components/CommunitySignals";
import { useState } from "react";

// Mock data for members vs authors chart
const membersAuthorsData = [
  { time: '9:00', members: 50, authors: 32 },
  { time: '9:15', members: 25, authors: 63 },
  { time: '9:30', members: 40, authors: 53 },
  { time: '9:45', members: 55, authors: 63 },
  { time: '10:00', members: 30, authors: 38 },
  { time: '10:15', members: 35, authors: 46 },
  { time: '10:30', members: 40, authors: 31 },
];

// Mock data for social signals
const socialData = [
  { time: '9AM', views: 4200, likes: 1850, sentiment: 0.75, reach: 125000 },
  { time: '10AM', views: 4800, likes: 2100, sentiment: 0.78, reach: 142000 },
  { time: '11AM', views: 4500, likes: 1950, sentiment: 0.72, reach: 138000 },
  { time: '12PM', views: 6200, likes: 2650, sentiment: 0.85, reach: 165000 },
  { time: '1PM', views: 6800, likes: 2900, sentiment: 0.88, reach: 178000 },
  { time: '2PM', views: 6400, likes: 2750, sentiment: 0.82, reach: 172000 },
  { time: '3PM', views: 7500, likes: 3200, sentiment: 0.90, reach: 195000 },
];

// Mock data for technical signals  
const technicalData = [
  { time: '9AM', holders: 0, volume: 2.8, liquidity: 450000, txCount: 1250 },
  { time: '10AM', holders: 120, volume: 3.4, liquidity: 485000, txCount: 1380 },
  { time: '11AM', holders: 280, volume: 4.1, liquidity: 520000, txCount: 1650 },
  { time: '12PM', holders: 450, volume: 5.2, liquidity: 580000, txCount: 1850 },
  { time: '1PM', holders: 620, volume: 6.8, liquidity: 640000, txCount: 2100 },
  { time: '2PM', holders: 745, volume: 7.4, liquidity: 685000, txCount: 2280 },
  { time: '3PM', holders: 845, volume: 8.9, liquidity: 750000, txCount: 2650 },
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
    <section ref={ref} className="py-12 sm:py-20 px-4 sm:px-6 bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-2 font-mono">
            Your <span className="text-terminal-blue">Bloomberg</span> Terminal
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-2 font-mono">
            All the data that&apos;s required to not be a degen gambler is right here. If you somehow still loose money, you are gay
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
                <div className="text-xs text-terminal-gray font-mono">
                  <Clock className="w-4 h-4 inline mr-1 text-terminal-gray" />
                  {new Date().toLocaleTimeString()}
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
                    <Card className="p-4 bg-black/40 border border-terminal-gray/20 backdrop-blur-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center justify-center w-6 h-6 bg-terminal-blue/20 rounded">
                          <Activity className="w-3 h-3 text-terminal-gray" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-terminal-white font-mono">
                            ENGAGEMENT
                          </h4>
                          <div className="text-xs text-terminal-gray">
                            Views & Favourites
                          </div>
                        </div>
                      </div>
                      
                      <div className="h-48">
                        <AnimatedChart
                          data={socialData}
                          isVisible={isIntersecting}
                          gridColor="rgba(100, 116, 139, 0.1)"
                          lines={[
                            { dataKey: 'views', stroke: 'hsl(var(--terminal-white))', strokeWidth: 1 },
                            { dataKey: 'likes', stroke: 'hsl(var(--terminal-gray))', strokeWidth: 1 },
                          ]}
                          tooltipFormatter={(value, name) => {
                            const formatValue = (val) => {
                              if (val >= 1000) return `${(val / 1000).toFixed(1)}K`;
                              return val.toString();
                            };
                            const labels = {
                              views: 'Views',
                              likes: 'Likes'
                            };
                            return [formatValue(value), labels[name] || name];
                          }}
                        />
                      </div>
                    </Card>

                    {/* Holders */}
                    <Card className="p-4 bg-black/40 border border-terminal-gray/20 backdrop-blur-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center justify-center w-6 h-6 bg-terminal-green/20 rounded">
                          <BarChart3 className="w-3 h-3 text-terminal-gray" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-terminal-white font-mono">
                            HOLDERS
                          </h4>
                          <div className="text-xs text-terminal-gray">
                            On-Chain Metrics
                          </div>
                        </div>
                      </div>
                      
                      <div className="h-48">
                        <AnimatedChart
                          data={technicalData}
                          isVisible={isIntersecting}
                          gridColor="rgba(100, 116, 139, 0.1)"
                          lines={[
                            { dataKey: 'holders', stroke: 'hsl(var(--terminal-white))', strokeWidth: 1 },
                          ]}
                          tooltipFormatter={(value, name) => {
                            const formatValue = (val) => {
                              if (val >= 1000) return `${(val / 1000).toFixed(1)}K`;
                              return val.toString();
                            };
                            return [formatValue(value), 'Holders'];
                          }}
                        />
                      </div>
                    </Card>
                  </div>

                  {/* Wallet Age Distribution */}
                  <Card className="p-0 bg-black/90 border border-terminal-gray/20 backdrop-blur-sm overflow-hidden">
                    
                    {/* Header */}
                    <div className="px-6 py-4 border-b border-terminal-gray/20 bg-black/60">
                      <h4 className="text-lg font-bold text-terminal-white font-mono">Wallet Age Distribution</h4>
                      <p className="text-xs text-terminal-gray font-mono mt-1">
                        Based on wallet creation date
                      </p>
                    </div>

                    {/* Planets Visualization */}
                    <div className="p-8">
                      <div className="grid grid-cols-3 gap-8 mb-8">
                        {/* Jupiter - Old Wallets */}
                        <div className="flex flex-col items-center">
                          <div className="relative mb-4 flex items-center justify-center" style={{ height: '140px' }}>
                            {/* Jupiter planet with hover animation - no orbital rings */}
                            <div className="relative w-[120px] h-[120px] animate-[float_6s_ease-in-out_infinite]">
                              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#FFD4A3] via-[#FFB86C] to-[#FFA042] shadow-2xl shadow-orange-400/60">
                                {/* Jupiter bands - horizontal stripes */}
                                <div className="absolute inset-0 rounded-full overflow-hidden">
                                  <div className="absolute top-[20%] left-0 right-0 h-[3px] bg-[#E59A4A]/60 rounded-full"></div>
                                  <div className="absolute top-[35%] left-0 right-0 h-[4px] bg-[#D88B38]/50 rounded-full"></div>
                                  <div className="absolute top-[50%] left-0 right-0 h-[5px] bg-[#C77828]/40 rounded-full"></div>
                                  <div className="absolute top-[65%] left-0 right-0 h-[3px] bg-[#E59A4A]/50 rounded-full"></div>
                                  <div className="absolute top-[80%] left-0 right-0 h-[2px] bg-[#D88B38]/40 rounded-full"></div>
                                </div>
                                {/* Asteroid particles floating around */}
                                <div className="absolute -top-10 -right-10 w-1.5 h-1.5 bg-gray-300 rounded-full animate-[float_4s_ease-in-out_infinite]"></div>
                                <div className="absolute -bottom-8 -left-8 w-1 h-1 bg-gray-400 rounded-full animate-[float_5s_ease-in-out_infinite_0.5s]"></div>
                                <div className="absolute top-2 -right-14 w-1 h-1 bg-gray-300/80 rounded-full animate-[float_4.5s_ease-in-out_infinite_1s]"></div>
                                <div className="absolute -bottom-12 right-4 w-0.5 h-0.5 bg-gray-400/60 rounded-full animate-[float_5.5s_ease-in-out_infinite_1.5s]"></div>
                              </div>
                            </div>
                          </div>
                          <div className="text-4xl font-bold text-[#FFB86C] mb-1 font-mono">
                            <AnimatedNumber value={112} isVisible={isIntersecting} />
                          </div>
                        </div>

                        {/* Earth - Average Wallets */}
                        <div className="flex flex-col items-center">
                          <div className="relative mb-4 flex items-center justify-center" style={{ height: '140px' }}>
                            {/* Earth planet with hover animation */}
                            <div className="relative w-[100px] h-[100px] animate-[float_5s_ease-in-out_infinite_0.5s]">
                              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#6BB6FF] via-[#5DA8F5] to-[#4A9AE8] shadow-2xl shadow-blue-400/60">
                                {/* Earth continents - green landmasses */}
                                <div className="absolute inset-0 rounded-full overflow-hidden">
                                  <div className="absolute top-[20%] left-[25%] w-10 h-8 bg-[#80F0A0]/85 rounded-full blur-[2px]"></div>
                                  <div className="absolute top-[50%] right-[20%] w-8 h-6 bg-[#90FFB0]/75 rounded-full blur-[2px]"></div>
                                  <div className="absolute bottom-[20%] left-[30%] w-7 h-6 bg-[#80F0A0]/80 rounded-full blur-[2px]"></div>
                                  {/* Cloud layer - white wisps */}
                                  <div className="absolute top-[30%] right-[30%] w-8 h-4 bg-white/35 rounded-full blur-[3px]"></div>
                                  <div className="absolute bottom-[30%] left-[25%] w-6 h-3 bg-white/30 rounded-full blur-[3px]"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-4xl font-bold text-[#6BB6FF] mb-1 font-mono">
                            <AnimatedNumber value={256} isVisible={isIntersecting} />
                          </div>
                        </div>

                        {/* Pink Planet - New Wallets */}
                        <div className="flex flex-col items-center">
                          <div className="relative mb-4 flex items-center justify-center" style={{ height: '140px' }}>
                            {/* Pink planet with hover animation */}
                            <div className="relative w-[85px] h-[85px] animate-[float_5.5s_ease-in-out_infinite_1s]">
                              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#FFD0E5] via-[#FFB8D1] to-[#FFA5C2] shadow-2xl shadow-pink-300/60">
                                {/* Subtle craters and surface features */}
                                <div className="absolute inset-0 rounded-full overflow-hidden">
                                  <div className="absolute top-[25%] right-[25%] w-4 h-4 bg-[#FFA5C2]/50 rounded-full blur-[2px]"></div>
                                  <div className="absolute bottom-[30%] left-[30%] w-5 h-5 bg-[#FF95B2]/40 rounded-full blur-[2px]"></div>
                                  <div className="absolute top-[50%] left-[20%] w-3 h-3 bg-[#FFA5C2]/60 rounded-full blur-[2px]"></div>
                                  <div className="absolute bottom-[50%] right-[30%] w-4 h-4 bg-[#FFB8D1]/30 rounded-full blur-[2px]"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-4xl font-bold text-[#FFB8D1] mb-1 font-mono">
                            <AnimatedNumber value={89} isVisible={isIntersecting} />
                          </div>
                        </div>
                      </div>

                      {/* Wallet Lists */}
                      <div className="grid grid-cols-3 gap-4">
                        {/* Old Wallets Column */}
                        <div className="space-y-2">
                          <h5 className="text-[#C8956C] font-mono font-bold mb-3">Old Wallets</h5>
                          {[
                            { address: '0x742d35Cc6634C...', days: 487 },
                            { address: '0x1a2b3c4d5e6f7...', days: 523 },
                            { address: '0xaB5801a7D3983...', days: 612 }
                          ].map((wallet, idx) => (
                            <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-lg p-3 flex items-center justify-between hover:border-[#C8956C]/30 transition-colors group">
                              <div>
                                <div className="text-sm text-terminal-white font-mono">{wallet.address}</div>
                                <div className="text-xs text-slate-500 font-mono mt-1">{wallet.days} days</div>
                              </div>
                              <button className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                              </button>
                            </div>
                          ))}
                        </div>

                        {/* Average Wallets Column */}
                        <div className="space-y-2">
                          <h5 className="text-[#4A90E2] font-mono font-bold mb-3">Average Wallets</h5>
                          {[
                            { address: '0x4Fabb145d6465...', days: 152 },
                            { address: '0xdAC17F958D2ee...', days: 89 },
                            { address: '0x95aD61b0a150d...', days: 203 }
                          ].map((wallet, idx) => (
                            <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-lg p-3 flex items-center justify-between hover:border-[#4A90E2]/30 transition-colors group">
                              <div>
                                <div className="text-sm text-terminal-white font-mono">{wallet.address}</div>
                                <div className="text-xs text-slate-500 font-mono mt-1">{wallet.days} days</div>
                              </div>
                              <button className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                              </button>
                            </div>
                          ))}
                        </div>

                        {/* New Wallets Column */}
                        <div className="space-y-2">
                          <h5 className="text-[#F5A9C1] font-mono font-bold mb-3">New Wallets</h5>
                          {[
                            { address: '0x514910771AF9C...', days: 12 },
                            { address: '0x1f9840a85d5aF...', days: 7 },
                            { address: '0x7Fc66500c84A7...', days: 23 }
                          ].map((wallet, idx) => (
                            <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-lg p-3 flex items-center justify-between hover:border-[#F5A9C1]/30 transition-colors group">
                              <div>
                                <div className="text-sm text-terminal-white font-mono">{wallet.address}</div>
                                <div className="text-xs text-slate-500 font-mono mt-1">{wallet.days} days</div>
                              </div>
                              <button className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Additional Analysis Charts */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* On Chain Metrics */}
                    <Card className="p-4 bg-black/40 border border-terminal-gray/20 backdrop-blur-sm">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center justify-center w-6 h-6 bg-terminal-amber/20 rounded">
                          <TrendingUp className="w-3 h-3 text-terminal-gray" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-terminal-white font-mono">
                            ON CHAIN METRICS
                          </h4>
                          <div className="text-xs text-terminal-gray">
                            Token Security Analysis
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-2 bg-black/20 rounded border border-terminal-gray/10">
                          <span className="text-xs text-terminal-gray font-mono">Bundle %</span>
                          <span className="text-sm text-terminal-white font-mono font-semibold">23</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-black/20 rounded border border-terminal-gray/10">
                          <span className="text-xs text-terminal-gray font-mono">Sniper %</span>
                          <span className="text-sm text-terminal-white font-mono font-semibold">3.2</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-black/20 rounded border border-terminal-gray/10">
                          <span className="text-xs text-terminal-gray font-mono">Top 10%</span>
                          <span className="text-sm text-terminal-white font-mono font-semibold">20</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-black/20 rounded border border-terminal-gray/10">
                          <span className="text-xs text-terminal-gray font-mono">DEX</span>
                          <span className="text-sm text-terminal-green font-mono font-semibold">Paid</span>
                        </div>
                      </div>
                    </Card>

                    {/* AI Call */}
                    <Card className="p-4 bg-black/40 border border-terminal-gray/20 backdrop-blur-sm">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center justify-center w-6 h-6 bg-terminal-green/20 rounded">
                          <Brain className="w-3 h-3 text-terminal-gray" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-terminal-white font-mono">
                            AI CALL
                          </h4>
                          <div className="text-xs text-terminal-gray">
                            Entry & Exit Analysis
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="p-3 bg-terminal-green/10 rounded border border-terminal-gray/20">
                          <div className="text-xs text-terminal-gray mb-1 font-mono uppercase">Entry Price</div>
                          <div className="text-lg text-terminal-green font-mono font-bold">$0.0000087</div>
                          <div className="text-xs text-terminal-gray font-mono mt-1">Buy Range: $0.0000085-90</div>
                        </div>
                        <div className="p-3 bg-terminal-blue/10 rounded border border-terminal-gray/20">
                          <div className="text-xs text-terminal-gray mb-1 font-mono uppercase">Exit Price</div>
                          <div className="text-lg text-terminal-blue font-mono font-bold">$0.0000125</div>
                          <div className="text-xs text-terminal-gray font-mono mt-1">Target: +43.6% Profit</div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>

                {/* Sidebar (38.2%) - Community Signals & Risk Assessment */}
                <div className="space-y-4">
                  
                  {/* Community Signals */}
                  <CommunitySignals />
                  
                  {/* KOL Concentration */}
                  <Card className="p-6 bg-black/40 border border-terminal-gray/20 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-terminal-white font-mono">
                          KOL Concentration
                        </h4>
                        <div className="text-xs text-terminal-gray">
                          Author distribution by follower count
                        </div>
                      </div>
                      <div className="text-xs text-terminal-gray font-mono">5m</div>
                    </div>
                    
                    {/* Scatter Plot Chart */}
                    <div className="relative h-48 mb-6">
                      {/* Y-axis labels */}
                      <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-terminal-gray font-mono pr-2">
                        <span>50k</span>
                        <span>30k</span>
                        <span>15k</span>
                        <span>0</span>
                      </div>
                      
                      {/* Chart area */}
                      <div className="ml-8 h-full border-l border-b border-terminal-gray/20 relative">
                        {/* Horizontal grid lines */}
                        <div className="absolute inset-0">
                          <div className="absolute top-0 left-0 right-0 border-t border-terminal-gray/10"></div>
                          <div className="absolute top-1/3 left-0 right-0 border-t border-terminal-gray/10"></div>
                          <div className="absolute top-2/3 left-0 right-0 border-t border-terminal-gray/10"></div>
                        </div>
                        
                        {/* Data points - purple dots at various positions */}
                        {/* Column 1 - 10:45 */}
                        <div className="absolute left-[5%] bottom-[8%] w-2 h-2 bg-purple-500 rounded-full"></div>
                        <div className="absolute left-[5%] bottom-[20%] w-2 h-2 bg-purple-500 rounded-full"></div>
                        <div className="absolute left-[5%] bottom-[28%] w-2 h-2 bg-purple-500 rounded-full"></div>
                        <div className="absolute left-[5%] bottom-[52%] w-2 h-2 bg-purple-500 rounded-full"></div>
                        <div className="absolute left-[5%] bottom-[68%] w-2 h-2 bg-purple-500 rounded-full"></div>
                        <div className="absolute left-[5%] bottom-[78%] w-2 h-2 bg-purple-500 rounded-full"></div>
                        
                        {/* Column 2 - 9:30 */}
                        <div className="absolute left-[20%] bottom-[42%] w-2 h-2 bg-purple-500 rounded-full"></div>
                        <div className="absolute left-[20%] bottom-[50%] w-2 h-2 bg-purple-500 rounded-full"></div>
                        <div className="absolute left-[20%] bottom-[58%] w-2 h-2 bg-purple-500 rounded-full"></div>
                        <div className="absolute left-[20%] bottom-[70%] w-2 h-2 bg-purple-500 rounded-full"></div>
                        <div className="absolute left-[20%] bottom-[85%] w-2 h-2 bg-purple-500 rounded-full"></div>
                        
                        {/* Column 3 - 9:45 */}
                        <div className="absolute left-[35%] bottom-[5%] w-2 h-2 bg-purple-500 rounded-full"></div>
                        <div className="absolute left-[35%] bottom-[25%] w-2 h-2 bg-purple-500 rounded-full"></div>
                        <div className="absolute left-[35%] bottom-[62%] w-2 h-2 bg-purple-500 rounded-full"></div>
                        <div className="absolute left-[35%] bottom-[72%] w-2 h-2 bg-purple-500 rounded-full"></div>
                        <div className="absolute left-[35%] bottom-[88%] w-2 h-2 bg-purple-500 rounded-full"></div>
                        
                        {/* Column 4 - 10:15 */}
                        <div className="absolute left-[50%] bottom-[10%] w-2 h-2 bg-purple-500 rounded-full"></div>
                        <div className="absolute left-[50%] bottom-[30%] w-2 h-2 bg-purple-500 rounded-full"></div>
                        <div className="absolute left-[50%] bottom-[45%] w-2 h-2 bg-purple-500 rounded-full"></div>
                        <div className="absolute left-[50%] bottom-[55%] w-2 h-2 bg-purple-500 rounded-full"></div>
                        <div className="absolute left-[50%] bottom-[68%] w-2 h-2 bg-purple-500 rounded-full"></div>
                        
                        {/* Column 5 - 9:00 */}
                        <div className="absolute left-[65%] bottom-[48%] w-2 h-2 bg-purple-500 rounded-full"></div>
                        <div className="absolute left-[65%] bottom-[58%] w-2 h-2 bg-purple-500 rounded-full"></div>
                        <div className="absolute left-[65%] bottom-[65%] w-2 h-2 bg-purple-500 rounded-full"></div>
                        
                        {/* Column 6 - 10:30 */}
                        <div className="absolute left-[75%] bottom-[8%] w-2 h-2 bg-purple-500 rounded-full"></div>
                        <div className="absolute left-[75%] bottom-[50%] w-2 h-2 bg-purple-500 rounded-full"></div>
                        
                        {/* Column 7 - 9:15 */}
                        <div className="absolute left-[85%] bottom-[22%] w-2 h-2 bg-purple-500 rounded-full"></div>
                        <div className="absolute left-[85%] bottom-[60%] w-2 h-2 bg-purple-500 rounded-full"></div>
                        <div className="absolute left-[85%] bottom-[68%] w-2 h-2 bg-purple-500 rounded-full"></div>
                        
                        {/* Column 8 - 10:00 */}
                        <div className="absolute left-[95%] bottom-[38%] w-2 h-2 bg-purple-500 rounded-full"></div>
                        <div className="absolute left-[95%] bottom-[75%] w-2 h-2 bg-purple-500 rounded-full"></div>
                        <div className="absolute left-[95%] bottom-[82%] w-2 h-2 bg-purple-500 rounded-full"></div>
                        
                        {/* X-axis labels */}
                        <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-xs text-terminal-gray font-mono px-1">
                          <span>10:45</span>
                          <span>9:30</span>
                          <span>9:45</span>
                          <span>10:15</span>
                          <span>9:00</span>
                          <span>10:30</span>
                          <span>9:15</span>
                          <span>10:00</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* KOL Categories */}
                    <div className="grid grid-cols-4 gap-3 pt-4 border-t border-terminal-gray/20">
                      {/* Mini */}
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-terminal-gray" />
                        <div>
                          <div className="text-2xl font-bold text-terminal-white font-mono">
                            <AnimatedNumber value={324} isVisible={isIntersecting} />
                          </div>
                          <div className="text-xs text-terminal-gray font-mono">Mini</div>
                        </div>
                      </div>
                      
                      {/* Micro */}
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-terminal-gray" />
                        <div>
                          <div className="text-2xl font-bold text-terminal-white font-mono">
                            <AnimatedNumber value={127} isVisible={isIntersecting} />
                          </div>
                          <div className="text-xs text-terminal-gray font-mono">Micro</div>
                        </div>
                      </div>
                      
                      {/* Macro */}
                      <div className="flex items-center gap-2">
                        <UserPlus className="w-4 h-4 text-terminal-gray" />
                        <div>
                          <div className="text-2xl font-bold text-terminal-white font-mono">
                            <AnimatedNumber value={45} isVisible={isIntersecting} />
                          </div>
                          <div className="text-xs text-terminal-gray font-mono">Macro</div>
                        </div>
                      </div>
                      
                      {/* Large */}
                      <div className="flex items-center gap-2">
                        <Crown className="w-4 h-4 text-terminal-gray" />
                        <div>
                          <div className="text-2xl font-bold text-terminal-white font-mono">
                            <AnimatedNumber value={12} isVisible={isIntersecting} />
                          </div>
                          <div className="text-xs text-terminal-gray font-mono">Large</div>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Members vs Unique Authors */}
                  <Card className="p-4 bg-black/40 border border-terminal-gray/20 backdrop-blur-sm">
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-base font-semibold text-terminal-white font-mono">
                          Members vs Unique Authors
                        </h4>
                        <div className="text-xs text-terminal-gray font-mono">5m</div>
                      </div>
                      <div className="text-xs text-terminal-gray">
                        Current vs Previous Refresh
                      </div>
                    </div>
                    
                    <div className="h-40 mb-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={membersAuthorsData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="rgba(100, 116, 139, 0.1)" />
                          <XAxis 
                            dataKey="time" 
                            stroke="hsl(var(--terminal-gray))"
                            style={{ fontSize: '10px', fontFamily: 'monospace' }}
                          />
                          <YAxis 
                            stroke="hsl(var(--terminal-gray))"
                            style={{ fontSize: '10px', fontFamily: 'monospace' }}
                          />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: 'rgba(0, 0, 0, 0.9)',
                              border: '1px solid rgba(100, 116, 139, 0.2)',
                              borderRadius: '4px',
                              fontFamily: 'monospace',
                              fontSize: '12px'
                            }}
                          />
                          <Line 
                            type="monotone" 
                            dataKey="members" 
                            stroke="hsl(var(--terminal-gray))" 
                            strokeWidth={0}
                            fill="hsl(var(--terminal-gray))"
                            fillOpacity={0.6}
                            dot={{ fill: 'hsl(var(--terminal-gray))', r: 0 }}
                          />
                          <Line 
                            type="monotone" 
                            dataKey="authors" 
                            stroke="hsl(var(--terminal-white))" 
                            strokeWidth={2}
                            dot={{ fill: 'hsl(var(--terminal-white))', r: 3 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <div className="flex items-center gap-1 mb-1">
                          <Users className="w-3 h-3 text-terminal-gray" />
                          <span className="text-lg font-bold text-terminal-white font-mono">1,247</span>
                        </div>
                        <div className="text-xs text-terminal-gray mb-1">Members</div>
                        <div className="text-xs text-terminal-green font-mono">+12.5%</div>
                      </div>
                      <div>
                        <div className="flex items-center gap-1 mb-1">
                          <User className="w-3 h-3 text-terminal-gray" />
                          <span className="text-lg font-bold text-terminal-white font-mono">89</span>
                        </div>
                        <div className="text-xs text-terminal-gray mb-1">Unique Authors</div>
                        <div className="text-xs text-terminal-red font-mono">-3.2%</div>
                      </div>
                      <div>
                        <div className="flex items-center gap-1 mb-1">
                          <MessageSquare className="w-3 h-3 text-terminal-gray" />
                          <span className="text-lg font-bold text-terminal-white font-mono">20</span>
                        </div>
                        <div className="text-xs text-terminal-gray mb-1">Total Posts</div>
                        <div className="text-xs text-terminal-gray font-mono">M: 8 OT: 12</div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Terminal Action */}
              <div className="text-center">
                <Button 
                  variant="analyze" 
                  size="lg" 
                  className="px-12 font-mono bg-terminal-blue/20 border border-terminal-gray/20 text-terminal-blue hover:bg-terminal-blue/30"
                >
                  INITIALIZE ANALYSIS (<AnimatedNumber 
                    value={25} 
                    isVisible={isIntersecting} 
                  /> CREDITS)
                  </Button>
                </div>

                {/* Feature Boxes Section - Inside Terminal */}
                <div className="-mt-4 mb-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 relative z-30">
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
                            <div className="w-7 h-7 rounded-sm bg-gradient-to-br from-terminal-blue/30 to-terminal-blue/10 border border-terminal-gray/20 flex items-center justify-center">
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
                          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-terminal-blue/10 via-transparent to-terminal-blue/5 pointer-events-none border border-terminal-gray/20"></div>
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