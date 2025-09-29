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
      <div className="mb-6">
        <div className="flex items-center gap-3 pb-3 border-b border-terminal-green/20">
          <h2 className="text-lg font-medium text-terminal-green uppercase tracking-wider font-mono">Analysis Queue</h2>
          <div className="h-4 w-px bg-terminal-green/30"></div>
          <span className="text-xs text-terminal-green/60 uppercase tracking-wide font-mono">
            {queuedCoins.length} Active Session{queuedCoins.length !== 1 ? 's' : ''}
          </span>
        </div>
      </div>
      
      <div className="bg-black border border-terminal-green/20 rounded-none shadow-none">
        <div className="border-b border-terminal-green/20 bg-black">
          <div className="grid grid-cols-12 gap-4 px-6 py-3 text-xs font-medium text-terminal-green/70 uppercase tracking-wider font-mono">
            <div className="col-span-1">ID</div>
            <div className="col-span-4">Asset</div>
            <div className="col-span-3">Contract Address</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-2">Initiated</div>
          </div>
        </div>
        
        <div>
          {queuedCoins.map((coin, index) => (
            <div
              key={coin.address}
              onClick={() => onCoinSelect(coin.address)}
              className={`grid grid-cols-12 gap-4 px-6 py-4 border-b border-terminal-green/10 cursor-pointer transition-colors duration-150 hover:bg-terminal-green/5 font-mono ${
                selectedCoin === coin.address ? 'bg-terminal-green/10 border-l-2 border-l-terminal-green' : ''
              }`}
            >
              <div className="col-span-1">
                <span className="text-xs font-mono text-terminal-green/50">
                  {String(index + 1).padStart(3, '0')}
                </span>
              </div>
              
              <div className="col-span-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-black border border-terminal-green/30 flex items-center justify-center text-xs text-terminal-green/60">
                    {coin.logo}
                  </div>
                  <span className={`text-sm font-medium font-mono ${
                    selectedCoin === coin.address ? 'text-terminal-green' : 'text-terminal-green/80'
                  }`}>
                    {coin.name}
                  </span>
                </div>
              </div>
              
              <div className="col-span-3">
                <span className="text-xs font-mono text-terminal-green/60">
                  {coin.address.slice(0, 12)}...{coin.address.slice(-8)}
                </span>
              </div>
              
              <div className="col-span-2">
                <div className="flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${
                    coin.status === 'analyzing' ? 'bg-terminal-amber' : 'bg-terminal-green'
                  }`}></div>
                  <span className={`text-xs font-medium uppercase tracking-wide font-mono ${
                    coin.status === 'analyzing' ? 'text-terminal-amber' : 'text-terminal-green'
                  }`}>
                    {coin.status === 'analyzing' ? 'PROCESSING' : 'COMPLETE'}
                  </span>
                </div>
              </div>
              
              <div className="col-span-2">
                <span className="text-xs font-mono text-terminal-green/60">
                  {coin.timestamp.toLocaleDateString('en-US', { 
                    month: '2-digit',
                    day: '2-digit',
                    year: '2-digit'
                  })} {coin.timestamp.toLocaleTimeString('en-US', { 
                    hour12: false,
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {selectedCoin && (
          <div className="border-t border-terminal-green/20 bg-black px-6 py-2">
            <div className="text-xs text-terminal-green/70 uppercase tracking-wide font-mono">
              ► Terminal session active for {queuedCoins.find(c => c.address === selectedCoin)?.name}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};