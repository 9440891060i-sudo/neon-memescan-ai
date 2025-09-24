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
        <div className="flex items-center gap-3 pb-3 border-b border-gray-800">
          <h2 className="text-lg font-medium text-gray-100 uppercase tracking-wider">Analysis Queue</h2>
          <div className="h-4 w-px bg-gray-700"></div>
          <span className="text-xs text-gray-500 uppercase tracking-wide">
            {queuedCoins.length} Active Session{queuedCoins.length !== 1 ? 's' : ''}
          </span>
        </div>
      </div>
      
      <div className="bg-gray-950 border border-gray-800 rounded-none shadow-none">
        <div className="border-b border-gray-800 bg-gray-900">
          <div className="grid grid-cols-12 gap-4 px-6 py-3 text-xs font-medium text-gray-400 uppercase tracking-wider">
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
              className={`grid grid-cols-12 gap-4 px-6 py-4 border-b border-gray-800 cursor-pointer transition-colors duration-150 hover:bg-gray-900/50 ${
                selectedCoin === coin.address ? 'bg-gray-900 border-l-2 border-l-gray-500' : ''
              }`}
            >
              <div className="col-span-1">
                <span className="text-xs font-mono text-gray-500">
                  {String(index + 1).padStart(3, '0')}
                </span>
              </div>
              
              <div className="col-span-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gray-800 border border-gray-700 flex items-center justify-center text-xs">
                    {coin.logo}
                  </div>
                  <span className={`text-sm font-medium ${
                    selectedCoin === coin.address ? 'text-gray-200' : 'text-gray-300'
                  }`}>
                    {coin.name}
                  </span>
                </div>
              </div>
              
              <div className="col-span-3">
                <span className="text-xs font-mono text-gray-500">
                  {coin.address.slice(0, 12)}...{coin.address.slice(-8)}
                </span>
              </div>
              
              <div className="col-span-2">
                <div className="flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${
                    coin.status === 'analyzing' ? 'bg-yellow-600' : 'bg-green-600'
                  }`}></div>
                  <span className={`text-xs font-medium uppercase tracking-wide ${
                    coin.status === 'analyzing' ? 'text-yellow-600' : 'text-green-600'
                  }`}>
                    {coin.status === 'analyzing' ? 'PROCESSING' : 'COMPLETE'}
                  </span>
                </div>
              </div>
              
              <div className="col-span-2">
                <span className="text-xs font-mono text-gray-500">
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
          <div className="border-t border-gray-700 bg-gray-900 px-6 py-2">
            <div className="text-xs text-gray-400 uppercase tracking-wide">
              ► Terminal session active for {queuedCoins.find(c => c.address === selectedCoin)?.name}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};