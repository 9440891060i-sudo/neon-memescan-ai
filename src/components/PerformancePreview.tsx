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
    <section className="py-12 sm:py-20 px-4 sm:px-6 bg-terminal-dark">
      <div className="container mx-auto max-w-5xl">
        <Separator className="mb-12 bg-border/50" />
        
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Last Week's <span className="text-neon-purple">Performance</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            See how our AI performed in real-time meme coin analysis
          </p>
        </div>

        <Card className="p-6 sm:p-8 bg-terminal-darker border-border/50 shadow-lg">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-6 mb-10">
            <div className="p-6 rounded-lg bg-terminal-dark/50 border border-border/30">
              <div className="flex items-center justify-center gap-2 mb-3">
                <TrendingUp className="w-6 h-6 text-neon-cyan" />
                <span className="text-3xl font-bold bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                  +{totalReturn.toFixed(1)}%
                </span>
              </div>
              <p className="text-sm text-muted-foreground text-center">Total Weekly Return</p>
            </div>
            <div className="p-6 rounded-lg bg-terminal-dark/50 border border-border/30">
              <div className="text-3xl font-bold text-center mb-3 bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
                +{avgDaily}%
              </div>
              <p className="text-sm text-muted-foreground text-center">Avg Daily Return</p>
            </div>
          </div>

          {/* Chart */}
          <div className="h-72 mb-10 p-4 rounded-lg bg-terminal-dark/30">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weekData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border) / 0.2)" />
                <XAxis 
                  dataKey="day" 
                  stroke="hsl(var(--muted-foreground))"
                  style={{ fontSize: '13px' }}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  style={{ fontSize: '13px' }}
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--terminal-darker))',
                    border: '1px solid hsl(var(--border) / 0.5)',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)'
                  }}
                  formatter={(value: number) => [`${value}%`, 'Return']}
                  labelStyle={{ color: 'hsl(var(--foreground))' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="performance" 
                  stroke="hsl(var(--neon-cyan))" 
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--neon-cyan))', r: 5 }}
                  activeDot={{ r: 7, fill: 'hsl(var(--neon-purple))' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* CTA */}
          <Separator className="mb-8 bg-border/30" />
          <div className="text-center">
            <p className="text-muted-foreground mb-6 text-base">
              Want to see the full analysis history and detailed insights?
            </p>
            <Button 
              size="lg"
              onClick={() => navigate('/auth')}
              className="bg-gradient-to-r from-neon-purple to-neon-cyan hover:opacity-90 text-base px-8"
            >
              View Full History
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
