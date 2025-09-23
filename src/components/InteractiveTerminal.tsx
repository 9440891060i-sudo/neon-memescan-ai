import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Eye, BarChart3, Users, DollarSign, X } from 'lucide-react';
import { AnimatedChart } from '@/components/AnimatedChart';
import { cn } from '@/lib/utils';

interface InteractiveTerminalProps {
  socialData: any[];
  technicalData: any[];
  isVisible: boolean;
}

const InteractiveTerminal = ({ socialData, technicalData, isVisible }: InteractiveTerminalProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Combined data for the main graph when collapsed
  const combinedData = socialData.map((item, index) => ({
    ...item,
    ...technicalData[index],
    combined: (item.views / 100) + (item.likes / 10) + (technicalData[index]?.holders / 1000) + (technicalData[index]?.volume * 10)
  }));

  const handleExpand = () => {
    setIsExpanded(true);
  };

  const handleCollapse = () => {
    setIsExpanded(false);
  };

  if (isExpanded) {
    return (
      <div className="col-span-full">
        <div className="relative">
          {/* Close button */}
          <button
            onClick={handleCollapse}
            className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-muted transition-colors flex items-center justify-center"
          >
            <X className="w-4 h-4" />
          </button>
          
          {/* Expanded 4-graph grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-scale-in">
            {/* Social Engagement */}
            <Card className="p-6 bg-black/40 border border-neon-green/30 backdrop-blur-sm">
              <h4 className="text-lg font-semibold text-neon-green mb-6 flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Social Engagement
              </h4>
              <div className="h-64">
                <AnimatedChart
                  data={socialData}
                  isVisible={isVisible}
                  gridColor="hsl(var(--neon-green) / 0.1)"
                  lines={[
                    { dataKey: 'views', stroke: 'hsl(var(--neon-cyan))' },
                    { dataKey: 'likes', stroke: 'hsl(var(--neon-pink))' }
                  ]}
                  tooltipFormatter={(value, name) => {
                    const formatValue = (val) => {
                      if (val >= 1000) return `${(val / 1000).toFixed(1)}k`;
                      return val.toString();
                    };
                    const labels = {
                      views: 'Views',
                      likes: 'Engagements'
                    };
                    return [formatValue(value), labels[name] || name];
                  }}
                />
              </div>
            </Card>

            {/* Technical Indicators */}
            <Card className="p-6 bg-black/40 border border-neon-cyan/30 backdrop-blur-sm">
              <h4 className="text-lg font-semibold text-neon-cyan mb-6 flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Technical Indicators  
              </h4>
              <div className="h-64">
                <AnimatedChart
                  data={technicalData}
                  isVisible={isVisible}
                  gridColor="hsl(var(--neon-cyan) / 0.1)"
                  lines={[
                    { dataKey: 'bundles', stroke: 'hsl(var(--neon-purple))' },
                    { dataKey: 'volume', stroke: 'hsl(var(--neon-cyan))' }
                  ]}
                  tooltipFormatter={(value, name) => {
                    const formatValue = (val) => {
                      if (name === 'volume') return `${val}M`;
                      return val.toString();
                    };
                    const labels = {
                      bundles: 'Transaction Bundles',
                      volume: 'Trading Volume'
                    };
                    return [formatValue(value), labels[name] || name];
                  }}
                />
              </div>
            </Card>

            {/* Holders/Volume */}
            <Card className="p-6 bg-black/40 border border-neon-purple/30 backdrop-blur-sm">
              <h4 className="text-lg font-semibold text-neon-purple mb-6 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Holders & Volume
              </h4>
              <div className="h-64">
                <AnimatedChart
                  data={technicalData}
                  isVisible={isVisible}
                  gridColor="hsl(var(--neon-purple) / 0.1)"
                  lines={[
                    { dataKey: 'holders', stroke: 'hsl(var(--neon-green))' },
                    { dataKey: 'volume', stroke: 'hsl(var(--neon-cyan))' }
                  ]}
                  tooltipFormatter={(value, name) => {
                    const formatValue = (val) => {
                      if (name === 'holders' && val >= 1000) return `${(val / 1000).toFixed(1)}k`;
                      if (name === 'volume') return `${val}M`;
                      return val.toString();
                    };
                    const labels = {
                      holders: 'Token Holders',
                      volume: 'Trading Volume'
                    };
                    return [formatValue(value), labels[name] || name];
                  }}
                />
              </div>
            </Card>

            {/* Market Cap */}
            <Card className="p-6 bg-black/40 border border-neon-pink/30 backdrop-blur-sm">
              <h4 className="text-lg font-semibold text-neon-pink mb-6 flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                Market Cap
              </h4>
              <div className="h-64">
                <AnimatedChart
                  data={technicalData}
                  isVisible={isVisible}
                  gridColor="hsl(var(--neon-pink) / 0.1)"
                  lines={[
                    { dataKey: 'marketCap', stroke: 'hsl(var(--neon-pink))' }
                  ]}
                  tooltipFormatter={(value, name) => {
                    const formatValue = (val) => {
                      if (name === 'marketCap') return `$${val}M`;
                      return val.toString();
                    };
                    const labels = {
                      marketCap: 'Market Capitalization'
                    };
                    return [formatValue(value), labels[name] || name];
                  }}
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="col-span-full">
      {/* Combined Interactive Graph */}
      <Card 
        className={cn(
          "p-6 bg-black/30 border border-neon-green/20 cursor-pointer transition-all duration-300",
          "hover:bg-black/40 hover:border-neon-green/40 hover:shadow-lg hover:shadow-neon-green/10"
        )}
        onClick={handleExpand}
        onMouseEnter={handleExpand}
      >
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-lg font-semibold text-neon-green flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            AI Analysis Overview
          </h4>
          <div className="text-xs text-muted-foreground animate-pulse">
            Hover to expand detailed view
          </div>
        </div>
        
        <div className="h-80">
          <AnimatedChart
            data={combinedData}
            isVisible={isVisible}
            gridColor="hsl(var(--neon-green) / 0.1)"
            lines={[
              { dataKey: 'views', stroke: 'hsl(var(--neon-cyan))' },
              { dataKey: 'likes', stroke: 'hsl(var(--neon-pink))' },
              { dataKey: 'holders', stroke: 'hsl(var(--neon-green))' },
              { dataKey: 'marketCap', stroke: 'hsl(var(--neon-purple))' }
            ]}
            tooltipFormatter={(value, name) => {
              const formatValue = (val) => {
                if (name === 'holders' && val >= 1000) return `${(val / 1000).toFixed(1)}k`;
                if (name === 'marketCap') return `$${val}M`;
                if (name === 'views' && val >= 1000) return `${(val / 1000).toFixed(1)}k`;
                return val.toString();
              };
              const labels = {
                views: 'Social Views',
                likes: 'Engagements',
                holders: 'Token Holders',
                marketCap: 'Market Cap'
              };
              return [formatValue(value), labels[name] || name];
            }}
          />
        </div>
        
        {/* Legend */}
        <div className="flex flex-wrap gap-6 mt-6 justify-center">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-neon-cyan"></div>
            <span className="text-xs text-muted-foreground">Social Views</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-neon-pink"></div>
            <span className="text-xs text-muted-foreground">Engagements</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-neon-green"></div>
            <span className="text-xs text-muted-foreground">Token Holders</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-neon-purple"></div>
            <span className="text-xs text-muted-foreground">Market Cap</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default InteractiveTerminal;