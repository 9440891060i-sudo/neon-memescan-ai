import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { LineChart, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
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

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-black">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-2">
            Real <span className="text-green-500">Performance</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Yes, losses are included here. No cherry-picking.
          </p>
        </div>

        {/* Clean Performance Chart Box */}
        <div className="max-w-5xl mx-auto mb-8">
          <div className="rounded-2xl border border-border bg-card/50 backdrop-blur p-6 sm:p-8 shadow-lg">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/* Stats on the left */}
              <div className="flex flex-col gap-6 lg:w-1/3">
                <div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider mb-2">7-Day Total</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-foreground">+{totalReturn.toFixed(1)}</span>
                    <span className="text-2xl font-light text-muted-foreground">%</span>
                  </div>
                </div>
                <Separator />
                <div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Win Rate</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-foreground">{Math.round((weekData.filter(d => d.performance > 0).length / weekData.length) * 100)}</span>
                    <span className="text-2xl font-light text-muted-foreground">%</span>
                  </div>
                </div>
              </div>

              {/* Graph on the right */}
              <div className="flex-1 w-full lg:w-2/3">
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={weekData} margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
                      <defs>
                        <linearGradient id="performanceGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="hsl(var(--neon-green))" stopOpacity="0.3"/>
                          <stop offset="100%" stopColor="hsl(var(--neon-green))" stopOpacity="0.05"/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity="0.3" />
                      <XAxis
                        dataKey="day"
                        stroke="hsl(var(--muted-foreground))"
                        tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                        axisLine={{ stroke: 'hsl(var(--border))' }}
                        tickLine={false}
                      />
                      <YAxis
                        stroke="hsl(var(--muted-foreground))"
                        tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                        tickFormatter={(value) => `${value}%`}
                        axisLine={{ stroke: 'hsl(var(--border))' }}
                        tickLine={false}
                        width={45}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'hsl(var(--background))',
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px',
                          padding: '8px 12px'
                        }}
                        formatter={(value: number) => [`${value}%`, 'Return']}
                        labelStyle={{ color: 'hsl(var(--foreground))', fontWeight: '600', fontSize: '13px' }}
                        itemStyle={{ color: 'hsl(var(--neon-green))', fontSize: '14px', fontWeight: '700' }}
                      />
                      <Area
                        type="monotone"
                        dataKey="performance"
                        fill="url(#performanceGradient)"
                        stroke="none"
                      />
                      <Line
                        type="monotone"
                        dataKey="performance"
                        stroke="hsl(var(--neon-green))"
                        strokeWidth={2}
                        dot={(props) => {
                          const isFirst = props.index === 0;
                          const isLast = props.index === weekData.length - 1;
                          return isFirst || isLast ? (
                            <circle 
                              cx={props.cx} 
                              cy={props.cy} 
                              r={5} 
                              fill="hsl(var(--neon-green))" 
                              stroke="hsl(var(--neon-green))" 
                              strokeWidth={2}
                            />
                          ) : null;
                        }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-8">
          <p className="text-lg text-muted-foreground mb-6">
            Check out all entries and exits in detail
          </p>
          <Button 
            size="lg"
            onClick={() => navigate('/auth')}
            className="bg-background/40 backdrop-blur-md border border-border/50 text-foreground hover:bg-background/60 text-base px-10 py-6 font-semibold transition-all"
          >
            History
          </Button>
        </div>
        </div>
    </section>
  );
}
