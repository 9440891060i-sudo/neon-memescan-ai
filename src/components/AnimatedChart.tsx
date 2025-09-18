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
  const [visibleDataLength, setVisibleDataLength] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setVisibleDataLength(0);
      return;
    }

    const animationDuration = 1200;
    const totalPoints = data.length;
    const step = animationDuration / totalPoints;
    
    let currentPoint = 0;
    const animate = () => {
      if (currentPoint <= totalPoints) {
        setVisibleDataLength(currentPoint);
        currentPoint += 0.1; // Smoother animation
        setTimeout(animate, step / 10);
      }
    };

    animate();
  }, [isVisible, data.length]);

  const visibleData = data.slice(0, Math.ceil(visibleDataLength));
  const currentIndex = Math.floor(visibleDataLength);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={visibleData} key="animated">
        <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
        <XAxis 
          dataKey="time" 
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          domain={['dataMin', 'dataMax']}
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
            dot={(props) => {
              const isCurrentEnd = props.index === currentIndex && currentIndex > 0;
              return isCurrentEnd ? (
                <circle 
                  cx={props.cx} 
                  cy={props.cy} 
                  r={5} 
                  fill={stroke} 
                  stroke={stroke} 
                  strokeWidth={2}
                  opacity={1}
                />
              ) : null;
            }}
            activeDot={{ r: 4, stroke, strokeWidth: 2, fill: stroke }}
            isAnimationActive={false}
          />
        ))}
        {children}
      </LineChart>
    </ResponsiveContainer>
  );
};