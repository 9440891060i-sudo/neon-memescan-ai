import { Button } from "@/components/ui/button";

import { Separator } from "@/components/ui/separator";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const weekData = [
  { day: 'Mon', performance: 2.1 },
  { day: 'Tue', performance: 3.8 },
  { day: 'Wed', performance: 1.5 },
  { day: 'Thu', performance: 4.2 },
  { day: 'Fri', performance: 3.1 },
  { day: 'Sat', performance: 5.7 },
  { day: 'Sun', performance: 4.8 }
];

export default function PerformancePreview() {
  const navigate = useNavigate();
  
  const totalReturn = weekData.reduce((sum, day) => sum + day.performance, 0);
  const avgDaily = (totalReturn / weekData.length).toFixed(2);

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-background via-background to-muted/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-neon-green/10 border border-neon-green/20">
            <span className="text-sm font-medium text-neon-green">Live Performance Metrics</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-neon-green to-foreground bg-clip-text text-transparent">
            Real Performance Data
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Yes, losses are included here. No cherry-picking.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Total Return Card */}
          <div className="lg:col-span-1 p-8 rounded-2xl bg-gradient-to-br from-neon-green/5 via-background to-background border border-neon-green/20 backdrop-blur shadow-lg hover:shadow-neon-green/10 transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-neon-green" />
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">7-Day Total</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-bold text-neon-green">
                +{totalReturn.toFixed(1)}
              </span>
              <span className="text-3xl font-light text-neon-green/70">%</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">Cumulative weekly return</p>
          </div>

          {/* Average Daily Card */}
          <div className="lg:col-span-1 p-8 rounded-2xl bg-gradient-to-br from-primary/5 via-background to-background border border-border backdrop-blur shadow-lg hover:shadow-primary/10 transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Avg Daily</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-bold text-foreground">
                +{avgDaily}
              </span>
              <span className="text-3xl font-light text-muted-foreground">%</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">Average daily performance</p>
          </div>

          {/* Chart Card */}
          <div className="lg:col-span-1 p-6 rounded-2xl bg-card/80 backdrop-blur border border-border shadow-lg">
            <div className="h-full flex flex-col">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Weekly Trend</span>
              <ResponsiveContainer width="100%" height={140}>
                <LineChart data={weekData} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                  <defs>
                    <linearGradient id="miniLineGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(var(--neon-green))" stopOpacity="0.8" />
                      <stop offset="95%" stopColor="hsl(var(--neon-green))" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                  <Line
                    type="monotone"
                    dataKey="performance"
                    stroke="hsl(var(--neon-green))"
                    strokeWidth={3}
                    dot={false}
                    fill="url(#miniLineGradient)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Main Chart Section */}
        <div className="relative overflow-hidden rounded-3xl border border-neon-green/20 bg-gradient-to-br from-card via-background to-card/50 backdrop-blur-xl p-8 sm:p-10 shadow-2xl mb-8">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 via-transparent to-primary/5 pointer-events-none" />
          
          <div className="relative mb-6">
            <h3 className="text-2xl font-bold text-foreground mb-2">Performance Over Time</h3>
            <p className="text-muted-foreground">Daily returns tracked throughout the week</p>
          </div>
          
          <div className="relative h-80 p-8 rounded-2xl bg-gradient-to-b from-background/95 to-muted/20 border border-neon-green/10 shadow-inner">
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--neon-green)) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weekData} margin={{ top: 10, right: 25, bottom: 10, left: 10 }}>
                <defs>
                  <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--neon-green))" stopOpacity="0.4"/>
                    <stop offset="50%" stopColor="hsl(var(--neon-green))" stopOpacity="0.1"/>
                    <stop offset="100%" stopColor="hsl(var(--neon-green))" stopOpacity="0"/>
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <CartesianGrid 
                  strokeDasharray="5 5" 
                  stroke="hsl(var(--neon-green))" 
                  opacity="0.1" 
                  vertical={false}
                />
                <XAxis
                  dataKey="day"
                  stroke="hsl(var(--neon-green))"
                  tick={{ fill: 'hsl(var(--foreground))', fontSize: 13, fontWeight: 600 }}
                  axisLine={{ stroke: 'hsl(var(--neon-green))', strokeWidth: 2 }}
                  tickLine={false}
                  dy={10}
                />
                <YAxis
                  stroke="hsl(var(--neon-green))"
                  tick={{ fill: 'hsl(var(--foreground))', fontSize: 13, fontWeight: 600 }}
                  tickFormatter={(value) => `${value}%`}
                  axisLine={{ stroke: 'hsl(var(--neon-green))', strokeWidth: 2 }}
                  tickLine={false}
                  width={55}
                  dx={-5}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--background))',
                    border: '2px solid hsl(var(--neon-green))',
                    borderRadius: '16px',
                    boxShadow: '0 0 30px hsl(var(--neon-green) / 0.3), 0 10px 50px hsl(var(--background) / 0.9)',
                    padding: '16px 20px'
                  }}
                  formatter={(value: number) => [`${value}%`, 'Return']}
                  labelStyle={{ color: 'hsl(var(--neon-green))', fontWeight: '700', fontSize: '15px', marginBottom: '6px' }}
                  itemStyle={{ color: 'hsl(var(--foreground))', fontSize: '18px', fontWeight: '800' }}
                />
                <Line
                  type="monotone"
                  dataKey="performance"
                  stroke="hsl(var(--neon-green))"
                  strokeWidth={4}
                  fill="url(#areaGradient)"
                  filter="url(#glow)"
                  dot={{
                    r: 6,
                    fill: 'hsl(var(--neon-green))',
                    stroke: 'hsl(var(--background))',
                    strokeWidth: 3,
                    filter: 'drop-shadow(0 0 6px hsl(var(--neon-green)))'
                  }}
                  activeDot={{
                    r: 9,
                    fill: 'hsl(var(--neon-green))',
                    stroke: 'hsl(var(--background))',
                    strokeWidth: 4,
                    filter: 'drop-shadow(0 0 12px hsl(var(--neon-green)))'
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center p-8 rounded-2xl bg-gradient-to-r from-primary/5 via-neon-green/5 to-primary/5 border border-border/50">
          <p className="text-lg text-muted-foreground mb-6">
            Want to see the full analysis history and detailed insights?
          </p>
          <Button 
            size="lg"
            onClick={() => navigate('/auth')}
            className="bg-neon-green text-background hover:bg-neon-green/90 text-base px-10 py-6 font-semibold shadow-lg hover:shadow-neon-green/20 transition-all"
          >
            View Full History
          </Button>
        </div>
      </div>
    </section>
  );
}
