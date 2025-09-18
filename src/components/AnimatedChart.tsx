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
  const [showLines, setShowLines] = useState<boolean[]>(lines.map(() => false));

  useEffect(() => {
    if (!isVisible) {
      setShowLines(lines.map(() => false));
      return;
    }

    // Stagger the appearance of each line
    lines.forEach((_, index) => {
      setTimeout(() => {
        setShowLines(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, index * 300);
    });
  }, [isVisible, lines.length]);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
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
        {lines.map(({ dataKey, stroke }, index) => (
          <Line 
            key={dataKey}
            type="monotone" 
            dataKey={dataKey} 
            stroke={stroke} 
            strokeWidth={2}
            dot={{ fill: stroke, strokeWidth: 0, r: 4 }}
            activeDot={{ r: 6, stroke, strokeWidth: 2, fill: stroke }}
            style={{
              opacity: showLines[index] ? 1 : 0,
              transition: 'opacity 0.8s ease-out'
            }}
          />
        ))}
        {children}
      </LineChart>
    </ResponsiveContainer>
  );
};