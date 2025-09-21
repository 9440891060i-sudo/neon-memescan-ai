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
  gridColor = "hsl(var(--chart-grid))",
  tooltipFormatter,
  children
}: AnimatedChartProps) => {
  return (
    <div className="bg-gradient-chart border border-chart-grid/30 rounded-lg p-4 shadow-chart">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart 
          data={data}
          margin={{ top: 5, right: 20, left: 5, bottom: 5 }}
        >
          <CartesianGrid 
            strokeDasharray="2 4" 
            stroke={gridColor}
            strokeOpacity={0.3}
          />
          <XAxis 
            dataKey="time" 
            stroke="hsl(var(--chart-text))"
            fontSize={11}
            fontFamily="monospace"
            tick={{ fill: 'hsl(var(--chart-text))' }}
            axisLine={{ stroke: 'hsl(var(--chart-grid))' }}
            tickLine={{ stroke: 'hsl(var(--chart-grid))' }}
          />
          <YAxis 
            stroke="hsl(var(--chart-text))" 
            fontSize={11}
            fontFamily="monospace"
            tick={{ fill: 'hsl(var(--chart-text))' }}
            axisLine={{ stroke: 'hsl(var(--chart-grid))' }}
            tickLine={{ stroke: 'hsl(var(--chart-grid))' }}
            width={60}
          />
          <Tooltip 
            contentStyle={{
              background: 'rgba(34, 40, 49, 0.95)',
              border: '1px solid hsl(var(--chart-grid))',
              borderRadius: '8px',
              fontSize: '12px',
              fontFamily: 'monospace',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(8px)'
            }}
            labelStyle={{
              color: 'hsl(var(--chart-text))',
              fontWeight: '600',
              marginBottom: '4px'
            }}
            formatter={tooltipFormatter}
          />
          {lines.map(({ dataKey, stroke }) => (
            <Line 
              key={dataKey}
              type="monotone" 
              dataKey={dataKey} 
              stroke={stroke} 
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              dot={false}
              activeDot={{ 
                r: 5, 
                stroke, 
                strokeWidth: 2, 
                fill: stroke
              }}
              isAnimationActive={isVisible}
              animationDuration={1200}
              animationEasing="ease-in-out"
            />
          ))}
          {children}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};