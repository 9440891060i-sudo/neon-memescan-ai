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
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isVisible) setShouldRender(true);
  }, [isVisible]);

  return (
    <ResponsiveContainer width="100%" height="100%">
      {shouldRender ? (
        <LineChart data={data} key="animated">
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
              dot={{ r: 0 }}
              activeDot={{ r: 4, stroke, strokeWidth: 2, fill: stroke }}
              isAnimationActive={true}
              animationBegin={0}
              animationDuration={1200}
              animationEasing="ease-out"
            />
          ))}
          {children}
        </LineChart>
      ) : null}
    </ResponsiveContainer>
  );
};