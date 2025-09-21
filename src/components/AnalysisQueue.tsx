import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Zap } from 'lucide-react';

interface QueuedCoin {
  name: string;
  address: string;
  logo: string;
  status: 'analyzing' | 'complete';
  timestamp: Date;
}

interface AnalysisQueueProps {
  queuedCoins: QueuedCoin[];
  selectedCoin: string | null;
  onCoinSelect: (coinAddress: string) => void;
}

export const AnalysisQueue = ({ queuedCoins, selectedCoin, onCoinSelect }: AnalysisQueueProps) => {
  if (queuedCoins.length === 0) return null;

  return (
    <div className="max-w-7xl mx-auto mb-16">
      <h2 className="text-2xl font-bold text-center mb-8">
        <span className="text-foreground">Analysis</span> <span className="text-neon-green">Queue</span>
      </h2>
      
      <Card className="p-6 bg-gradient-card shadow-card border-border">
        <div className="space-y-4">
          <div className="text-sm text-muted-foreground text-center mb-4">
            Click on any coin below to view its professional analysis terminal
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {queuedCoins.map((coin) => (
              <div
                key={coin.address}
                onClick={() => onCoinSelect(coin.address)}
                className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 group ${
                  selectedCoin === coin.address
                    ? 'bg-neon-green/10 border-neon-green shadow-neon-subtle'
                    : 'bg-card border-border hover:border-border/60 hover:shadow-card'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center text-lg">
                    {coin.logo}
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-bold transition-colors ${
                      selectedCoin === coin.address 
                        ? 'text-neon-green' 
                        : 'text-foreground group-hover:text-neon-cyan'
                    }`}>
                      {coin.name}
                    </h3>
                    <div className="text-xs text-muted-foreground font-mono">
                      {coin.address.slice(0, 12)}...
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {coin.status === 'analyzing' ? (
                      <>
                        <Clock className="w-4 h-4 text-chart-cyan animate-pulse" />
                        <Badge className="bg-chart-cyan/20 text-chart-cyan border-chart-cyan/30">
                          Analyzing...
                        </Badge>
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-4 h-4 text-gain" />
                        <Badge className="bg-gain/20 text-gain border-gain/30">
                          Complete
                        </Badge>
                      </>
                    )}
                  </div>
                  
                  <div className="text-xs text-muted-foreground">
                    {coin.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </div>
                </div>
                
                {selectedCoin === coin.address && (
                  <div className="mt-3 pt-3 border-t border-border">
                    <div className="flex items-center gap-2 text-xs text-neon-green">
                      <Zap className="w-3 h-3" />
                      <span>Terminal Active</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};