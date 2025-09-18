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
  const [animatedData, setAnimatedData] = useState(data.map(() => ({})));

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const animateData = () => {
      if (currentStep <= steps) {
        const progress = currentStep / steps;
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        
        const newData = data.map((item, index) => {
          const animatedItem: any = { time: item.time };
          
          lines.forEach(({ dataKey }) => {
            animatedItem[dataKey] = Math.floor(item[dataKey] * easeOutCubic);
          });
          
          return animatedItem;
        });
        
        setAnimatedData(newData);
        currentStep++;
        setTimeout(animateData, stepDuration);
      }
    };

    animateData();
  }, [data, lines, isVisible]);

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