import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, Users, Eye, Heart, Repeat, Wallet, BarChart3, Package, DollarSign, Shield } from "lucide-react";

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
  { time: '10AM', holders: 142800, volume: 3.2, bundles: 165, marketCap: 920 },
  { time: '11AM', holders: 143200, volume: 2.9, bundles: 155, marketCap: 905 },
  { time: '12PM', holders: 144100, volume: 4.1, bundles: 180, marketCap: 970 },
  { time: '1PM', holders: 145200, volume: 4.8, bundles: 195, marketCap: 1050 },
  { time: '2PM', holders: 144800, volume: 4.2, bundles: 185, marketCap: 1020 },
  { time: '3PM', holders: 146500, volume: 5.5, bundles: 210, marketCap: 1120 },
];

export default function DashboardPreview() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your <span className="text-neon-cyan">AI Trading</span> Command Center
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time social sentiment meets technical analysis for precise meme coin insights
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Dashboard mockup */}
          <div className="bg-gradient-card rounded-3xl p-8 border border-border neon-glow-cyan shadow-card">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground">PEPE Analysis</h3>
                <p className="text-muted-foreground">Contract: 0x6982508145454ce325ddbe47a25d4ec3d2311933</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-neon-green">BULLISH</div>
                <div className="text-sm text-muted-foreground">Confidence: 94.2%</div>
              </div>
            </div>

            {/* Interactive Charts */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
              {/* Social Media Signals Chart */}
              <Card className="p-6 bg-black/30 border border-neon-green/20">
                <h4 className="text-lg font-semibold text-neon-green mb-6 flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  Social Media Signals
                </h4>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={socialData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--neon-green) / 0.1)" />
                      <XAxis 
                        dataKey="time" 
                        stroke="hsl(var(--muted-foreground))"
                        fontSize={12}
                      />
                      <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <Tooltip 
                        contentStyle={{
                          background: 'hsl(var(--card))',
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px',
                          fontSize: '12px'
                        }}
                        formatter={(value, name) => {
                          const formatValue = (val) => {
                            if (val >= 1000) return `${(val / 1000).toFixed(1)}k`;
                            return val.toString();
                          };
                          const labels = {
                            views: '📈 Views',
                            likes: '❤️ Likes', 
                            reposts: '🔁 Reposts',
                            members: '👥 Members'
                          };
                          return [formatValue(value), labels[name] || name];
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="views" 
                        stroke="hsl(var(--neon-cyan))" 
                        strokeWidth={2}
                        dot={{ fill: 'hsl(var(--neon-cyan))', strokeWidth: 0, r: 4 }}
                        activeDot={{ r: 6, stroke: 'hsl(var(--neon-cyan))', strokeWidth: 2, fill: 'hsl(var(--neon-cyan))' }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="likes" 
                        stroke="hsl(var(--neon-pink))" 
                        strokeWidth={2}
                        dot={{ fill: 'hsl(var(--neon-pink))', strokeWidth: 0, r: 4 }}
                        activeDot={{ r: 6, stroke: 'hsl(var(--neon-pink))', strokeWidth: 2, fill: 'hsl(var(--neon-pink))' }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="reposts" 
                        stroke="hsl(var(--neon-purple))" 
                        strokeWidth={2}
                        dot={{ fill: 'hsl(var(--neon-purple))', strokeWidth: 0, r: 4 }}
                        activeDot={{ r: 6, stroke: 'hsl(var(--neon-purple))', strokeWidth: 2, fill: 'hsl(var(--neon-purple))' }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="members" 
                        stroke="hsl(var(--neon-green))" 
                        strokeWidth={2}
                        dot={{ fill: 'hsl(var(--neon-green))', strokeWidth: 0, r: 4 }}
                        activeDot={{ r: 6, stroke: 'hsl(var(--neon-green))', strokeWidth: 2, fill: 'hsl(var(--neon-green))' }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex flex-wrap gap-4 mt-4 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-neon-cyan"></div>
                    <span className="text-muted-foreground">Views 📈</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-neon-pink"></div>
                    <span className="text-muted-foreground">Likes ❤️</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-neon-purple"></div>
                    <span className="text-muted-foreground">Reposts 🔁</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-neon-green"></div>
                    <span className="text-muted-foreground">Members 👥</span>
                  </div>
                </div>
              </Card>

              {/* Technical Market Factors Chart */}
              <Card className="p-6 bg-black/30 border border-neon-cyan/20">
                <h4 className="text-lg font-semibold text-neon-cyan mb-6 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Technical Market Factors
                </h4>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={technicalData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--neon-cyan) / 0.1)" />
                      <XAxis 
                        dataKey="time" 
                        stroke="hsl(var(--muted-foreground))"
                        fontSize={12}
                      />
                      <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <Tooltip 
                        contentStyle={{
                          background: 'hsl(var(--card))',
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px',
                          fontSize: '12px'
                        }}
                        formatter={(value, name) => {
                          const formatValue = (val) => {
                            if (name === 'holders' && val >= 1000) return `${(val / 1000).toFixed(1)}k`;
                            if (name === 'volume') return `${val}M`;
                            if (name === 'marketCap') return `$${val}M`;
                            return val.toString();
                          };
                          const labels = {
                            holders: '👛 Holders',
                            volume: '📊 Volume', 
                            bundles: '📦 Bundles',
                            marketCap: '💵 Market Cap'
                          };
                          return [formatValue(value), labels[name] || name];
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="holders" 
                        stroke="hsl(var(--neon-green))" 
                        strokeWidth={2}
                        dot={{ fill: 'hsl(var(--neon-green))', strokeWidth: 0, r: 4 }}
                        activeDot={{ r: 6, stroke: 'hsl(var(--neon-green))', strokeWidth: 2, fill: 'hsl(var(--neon-green))' }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="volume" 
                        stroke="hsl(var(--neon-cyan))" 
                        strokeWidth={2}
                        dot={{ fill: 'hsl(var(--neon-cyan))', strokeWidth: 0, r: 4 }}
                        activeDot={{ r: 6, stroke: 'hsl(var(--neon-cyan))', strokeWidth: 2, fill: 'hsl(var(--neon-cyan))' }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="bundles" 
                        stroke="hsl(var(--neon-purple))" 
                        strokeWidth={2}
                        dot={{ fill: 'hsl(var(--neon-purple))', strokeWidth: 0, r: 4 }}
                        activeDot={{ r: 6, stroke: 'hsl(var(--neon-purple))', strokeWidth: 2, fill: 'hsl(var(--neon-purple))' }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="marketCap" 
                        stroke="hsl(var(--neon-pink))" 
                        strokeWidth={2}
                        dot={{ fill: 'hsl(var(--neon-pink))', strokeWidth: 0, r: 4 }}
                        activeDot={{ r: 6, stroke: 'hsl(var(--neon-pink))', strokeWidth: 2, fill: 'hsl(var(--neon-pink))' }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex flex-wrap gap-4 mt-4 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-neon-green"></div>
                    <span className="text-muted-foreground">Holders 👛</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-neon-cyan"></div>
                    <span className="text-muted-foreground">Volume 📊</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-neon-purple"></div>
                    <span className="text-muted-foreground">Bundles 📦</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-neon-pink"></div>
                    <span className="text-muted-foreground">Market Cap 💵</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* AI Verdict Section */}
            <Card className="p-6 bg-gradient-to-r from-neon-green/5 to-neon-cyan/5 border border-neon-green/30 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-neon-green/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-neon-green" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-neon-green mb-2">AI Verdict</h4>
                  <p className="text-foreground mb-4 text-sm">
                    "Strong community growth + stable holder base. Technicals align for an upward trend."
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
                      <div className="text-neon-cyan font-semibold">24-48 Hours</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Action button */}
            <div className="text-center">
              <Button variant="analyze" size="lg" className="px-12">
                Analyze Your Coin (30 Credits)
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}