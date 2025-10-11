import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            7 Days Performance
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            See how our AI performed in real-time meme coin analysis
          </p>
        </div>

        <Card className="p-6 sm:p-8 bg-card border-border shadow-sm">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-6 mb-10">
            <div className="p-6 rounded-lg bg-muted/30 border border-border">
              <div className="flex items-center justify-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-foreground/60" />
                <span className="text-3xl font-semibold text-foreground">
                  +{totalReturn.toFixed(1)}%
                </span>
              </div>
              <p className="text-sm text-muted-foreground text-center font-medium">Total 7-Day Return</p>
            </div>
            <div className="p-6 rounded-lg bg-muted/30 border border-border">
              <div className="text-3xl font-semibold text-center mb-3 text-foreground">
                +{avgDaily}%
              </div>
              <p className="text-sm text-muted-foreground text-center font-medium">Avg Daily Return</p>
            </div>
          </div>

          {/* Chart */}
          <div className="h-96 mb-10 p-6 rounded-lg bg-muted/20 border border-border">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weekData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border) / 0.3)" />
                <XAxis 
                  dataKey="day" 
                  stroke="hsl(var(--muted-foreground))"
                  style={{ fontSize: '14px', fontWeight: '500' }}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  style={{ fontSize: '14px', fontWeight: '500' }}
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                  }}
                  formatter={(value: number) => [`${value}%`, 'Return']}
                  labelStyle={{ color: 'hsl(var(--foreground))', fontWeight: '600' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="performance" 
                  stroke="hsl(var(--foreground))" 
                  strokeWidth={2.5}
                  dot={{ fill: 'hsl(var(--foreground))', r: 4, strokeWidth: 2, stroke: 'hsl(var(--background))' }}
                  activeDot={{ r: 6, fill: 'hsl(var(--foreground))', strokeWidth: 2, stroke: 'hsl(var(--background))' }}
                />
              </LineChart>
            </ResponsiveContainer>
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
        </Card>
      </div>
    </section>
  );
}
