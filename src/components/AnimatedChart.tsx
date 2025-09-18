import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface AnimatedChartProps {
  data: any[];
  lines: Array<{
    dataKey: string;
    stroke: string;
  }>;
  isVisible: boolean;
  gridColor?: string;
  tooltipFormatter?: (value: any, name: string) => [string, string];
  children?: React.ReactNode;
}

export const AnimatedChart = ({ 
  data, 
  lines, 
  isVisible, 
  gridColor = "hsl(var(--neon-green) / 0.1)",
  tooltipFormatter,
  children
}: AnimatedChartProps) => {
  const [visiblePoints, setVisiblePoints] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const totalPoints = data.length;
    const stepDuration = duration / totalPoints;
    let currentPoint = 0;

    const animateChart = () => {
      if (currentPoint <= totalPoints) {
        setVisiblePoints(currentPoint);
        currentPoint++;
        setTimeout(animateChart, stepDuration);
      }
    };

    animateChart();
  }, [data.length, isVisible]);

  // Show only the visible portion of data
  const animatedData = data.slice(0, visiblePoints);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={animatedData}>
        <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
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
          formatter={tooltipFormatter}
        />
        {lines.map(({ dataKey, stroke }) => (
          <Line 
            key={dataKey}
            type="monotone" 
            dataKey={dataKey} 
            stroke={stroke} 
            strokeWidth={2}
            dot={{ fill: stroke, strokeWidth: 0, r: 4 }}
            activeDot={{ r: 6, stroke, strokeWidth: 2, fill: stroke }}
          />
        ))}
        {children}
      </LineChart>
    </ResponsiveContainer>
  );
};