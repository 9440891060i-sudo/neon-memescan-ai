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
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-neon-green">Analysis Queue</span>
        </h2>
        <div className="w-16 h-0.5 bg-gradient-to-r from-neon-green to-neon-cyan mx-auto"></div>
      </div>
      
      <Card className="bg-black/90 border-neon-green/30 hover:border-neon-green/50 transition-all duration-300 backdrop-blur-sm">
        <div className="p-6">
          <div className="bg-gradient-to-r from-neon-green/10 to-neon-cyan/10 rounded-lg p-4 mb-6 border border-neon-green/20">
            <div className="flex items-center gap-3 justify-center">
              <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
              <span className="text-sm text-neon-green font-medium">
                Click on any coin below to view its Bloomberg-style analysis terminal
              </span>
              <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {queuedCoins.map((coin) => (
              <div
                key={coin.address}
                onClick={() => onCoinSelect(coin.address)}
                className={`p-5 rounded-lg border cursor-pointer transition-all duration-300 group relative overflow-hidden ${
                  selectedCoin === coin.address
                    ? 'bg-gradient-to-br from-neon-green/20 via-black/80 to-neon-cyan/20 border-neon-green shadow-lg shadow-neon-green/20'
                    : 'bg-gradient-to-br from-black/80 via-black/60 to-black/80 border-white/20 hover:border-neon-green/60 hover:from-neon-green/10 hover:to-neon-cyan/10'
                }`}
              >
                {/* Background Terminal Effect */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,127,0.03),transparent_70%)] opacity-50"></div>
                
                <div className="relative flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon-purple/30 to-neon-cyan/30 border border-neon-green/40 flex items-center justify-center text-xl shadow-lg shadow-neon-green/10">
                    {coin.logo}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-bold transition-colors ${
                      selectedCoin === coin.address 
                        ? 'text-neon-green' 
                        : 'text-white group-hover:text-neon-cyan'
                    }`}>
                      {coin.name}
                    </h3>
                    <div className="text-xs text-muted-foreground font-mono bg-black/40 px-2 py-1 rounded border border-neon-green/20">
                      {coin.address.slice(0, 16)}...
                    </div>
                  </div>
                </div>
                
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {coin.status === 'analyzing' ? (
                      <>
                        <Clock className="w-5 h-5 text-neon-cyan animate-pulse" />
                        <Badge className="bg-neon-cyan/30 text-neon-cyan border-neon-cyan/50 font-medium px-3 py-1">
                          Analyzing...
                        </Badge>
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-5 h-5 text-neon-green" />
                        <Badge className="bg-neon-green/30 text-neon-green border-neon-green/50 font-medium px-3 py-1">
                          Complete
                        </Badge>
                      </>
                    )}
                  </div>
                  
                  <div className="text-xs text-neon-cyan font-mono bg-black/40 px-2 py-1 rounded border border-neon-cyan/30">
                    {coin.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </div>
                </div>
                
                {selectedCoin === coin.address && (
                  <div className="mt-4 pt-4 border-t border-gradient-to-r from-neon-green/50 to-neon-cyan/50">
                    <div className="flex items-center justify-center gap-2 text-sm text-neon-green bg-black/60 rounded-lg py-2 px-4 border border-neon-green/40">
                      <Zap className="w-4 h-4 animate-pulse" />
                      <span className="font-medium">Bloomberg Terminal Active</span>
                      <div className="w-2 h-2 bg-neon-green rounded-full animate-ping"></div>
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