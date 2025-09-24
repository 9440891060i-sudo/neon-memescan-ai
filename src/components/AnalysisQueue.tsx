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
      <div className="mb-8">
        <div className="flex items-center justify-between border-b border-gray-700 pb-4">
          <div>
            <h2 className="text-xl font-semibold text-white">Analysis Queue</h2>
            <p className="text-sm text-gray-400 mt-1">Active analysis sessions</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>LIVE</span>
          </div>
        </div>
      </div>
      
      <Card className="bg-gray-950 border-gray-700 shadow-2xl">
        <div className="p-0">
          <div className="bg-gray-900 px-4 py-3 border-b border-gray-700">
            <div className="flex items-center justify-between text-xs text-gray-400 font-mono uppercase tracking-wide">
              <span>Asset</span>
              <span>Status</span>
              <span>Timestamp</span>
            </div>
          </div>
          
          <div className="divide-y divide-gray-800">
            {queuedCoins.map((coin) => (
              <div
                key={coin.address}
                onClick={() => onCoinSelect(coin.address)}
                className={`px-4 py-4 cursor-pointer transition-all duration-200 hover:bg-gray-900/50 ${
                  selectedCoin === coin.address
                    ? 'bg-blue-950/50 border-l-2 border-l-blue-500'
                    : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center text-sm border border-gray-700">
                      {coin.logo}
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className={`font-medium ${
                          selectedCoin === coin.address 
                            ? 'text-blue-400' 
                            : 'text-white'
                        }`}>
                          {coin.name}
                        </h3>
                        <div className="text-xs text-gray-500 font-mono">
                          {coin.address.slice(0, 8)}...{coin.address.slice(-4)}
                        </div>
                      </div>
                      {selectedCoin === coin.address && (
                        <div className="flex items-center gap-2 mt-1">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span className="text-xs text-blue-400 font-medium">Terminal Active</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      {coin.status === 'analyzing' ? (
                        <>
                          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                          <span className="text-xs text-yellow-500 font-medium uppercase tracking-wide">
                            Processing
                          </span>
                        </>
                      ) : (
                        <>
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-xs text-green-500 font-medium uppercase tracking-wide">
                            Complete
                          </span>
                        </>
                      )}
                    </div>
                    
                    <div className="text-xs text-gray-400 font-mono min-w-[60px] text-right">
                      {coin.timestamp.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};