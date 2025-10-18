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
    <section className="py-12 sm:py-20 px-4 sm:px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <Separator className="mb-12 bg-border/50" />
        
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-neon-green" style={{ textShadow: '0 0 20px rgba(34, 197, 94, 0.5)' }}>
            Performance
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Yes, losses are included here
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card/50 backdrop-blur p-8 shadow-xl">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-8 mb-12">
            <div className="p-8 rounded-xl bg-muted/30 border border-border">
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-foreground/60 mt-1" />
                <span className="text-4xl font-light tracking-tight text-foreground">
                  +{totalReturn.toFixed(1)}
                </span>
                <span className="text-2xl font-light text-muted-foreground">%</span>
              </div>
              <p className="text-xs text-muted-foreground text-center font-medium tracking-wider uppercase">Total 7-Day Return</p>
            </div>
            <div className="p-8 rounded-xl bg-muted/30 border border-border">
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-4xl font-light tracking-tight text-foreground">
                  +{avgDaily}
                </span>
                <span className="text-2xl font-light text-muted-foreground">%</span>
              </div>
              <p className="text-xs text-muted-foreground text-center font-medium tracking-wider uppercase">Avg Daily Return</p>
            </div>
          </div>

          {/* Chart */}
          <div className="relative mb-12">
            <div className="relative h-60 p-6 rounded-xl bg-background/60 border border-border overflow-hidden">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={weekData} margin={{ top: 4, right: 8, bottom: 0, left: 8 }}>
                  <defs>
                    <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="hsl(var(--neon-green))" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="hsl(var(--neon-green))" stopOpacity="1" />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="2 4" stroke="hsl(var(--border) / 0.2)" vertical={false} />
                  <XAxis
                    dataKey="day"
                    stroke="hsl(var(--muted-foreground) / 0.5)"
                    tick={{ fill: 'hsl(var(--muted-foreground) / 0.7)', fontSize: 11 }}
                    axisLine={{ stroke: 'hsl(var(--border) / 0.4)' }}
                    tickLine={false}
                  />
                  <YAxis
                    stroke="hsl(var(--muted-foreground) / 0.5)"
                    tick={{ fill: 'hsl(var(--muted-foreground) / 0.7)', fontSize: 11 }}
                    tickFormatter={(value) => `${value}%`}
                    axisLine={{ stroke: 'hsl(var(--border) / 0.4)' }}
                    tickLine={false}
                    width={45}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--background) / 0.95)',
                      border: '1px solid hsl(var(--border) / 0.6)',
                      borderRadius: '12px',
                      boxShadow: '0 8px 32px hsl(var(--background) / 0.8), 0 0 0 1px hsl(var(--border) / 0.05)',
                      backdropFilter: 'blur(12px)',
                      padding: '12px 16px'
                    }}
                    formatter={(value: number) => [`${value}%`, 'Return']}
                    labelStyle={{ color: 'hsl(var(--foreground))', fontWeight: '500', fontSize: '13px' }}
                    itemStyle={{ color: 'hsl(var(--neon-green))', fontSize: '14px', fontWeight: '600' }}
                  />
                  <Line
                    type="monotone"
                    dataKey="performance"
                    stroke="url(#lineGradient)"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{
                      r: 4,
                      fill: 'hsl(var(--neon-green))',
                      stroke: 'hsl(var(--background) / 0.8)',
                      strokeWidth: 3
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* CTA */}
          <Separator className="mb-8 bg-border" />
          <div className="text-center">
            <p className="text-muted-foreground mb-6 text-base">
              Want to see the full analysis history and detailed insights?
            </p>
            <Button 
              size="lg"
              onClick={() => navigate('/auth')}
              className="bg-foreground text-background hover:bg-foreground/90 text-base px-8 font-semibold"
            >
              View Full History
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
