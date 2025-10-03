import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
    <section className="py-12 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Last Week's <span className="text-neon-purple">Performance</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            See how our AI performed in real-time meme coin analysis
          </p>
        </div>

        <Card className="p-6 sm:p-8 bg-card border-border">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-neon-cyan" />
                <span className="text-2xl font-bold text-foreground">+{totalReturn.toFixed(1)}%</span>
              </div>
              <p className="text-sm text-muted-foreground">Total Weekly Return</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground mb-2">+{avgDaily}%</div>
              <p className="text-sm text-muted-foreground">Avg Daily Return</p>
            </div>
          </div>

          {/* Chart */}
          <div className="h-64 mb-8">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weekData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="day" 
                  stroke="hsl(var(--muted-foreground))"
                  style={{ fontSize: '12px' }}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  style={{ fontSize: '12px' }}
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                  formatter={(value: number) => [`${value}%`, 'Return']}
                />
                <Line 
                  type="monotone" 
                  dataKey="performance" 
                  stroke="hsl(var(--neon-cyan))" 
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--neon-cyan))', r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Want to see the full analysis history and detailed insights?
            </p>
            <Button 
              size="lg"
              onClick={() => navigate('/auth')}
              className="bg-gradient-to-r from-neon-purple to-neon-cyan hover:opacity-90"
            >
              View Full History
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
