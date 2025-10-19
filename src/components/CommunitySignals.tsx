import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Users, Clock } from "lucide-react";

interface CommunitySignal {
  id: string;
  community: string;
  coin: string;
  message: string;
  timestamp: string;
  sentiment: "bullish" | "bearish" | "neutral";
  members: number;
}

interface WalletAlert {
  id: string;
  wallet: string;
  action: "bought" | "sold";
  amount: string;
  coin: string;
  marketCap: string;
  timestamp: string;
}

const mockSignals: CommunitySignal[] = [
  {
    id: "1",
    community: "Alpha Signals",
    coin: "PEPE",
    message: "Major whale accumulation detected",
    timestamp: "2m ago",
    sentiment: "bullish",
    members: 45200
  },
  {
    id: "2", 
    community: "Potion Labs",
    coin: "BONK",
    message: "Dev team announcing new partnerships",
    timestamp: "4m ago",
    sentiment: "bullish",
    members: 32800
  },
  {
    id: "3",
    community: "Rosita Trading",
    coin: "DOGE",
    message: "Technical breakout pattern forming",
    timestamp: "7m ago",
    sentiment: "bullish", 
    members: 28500
  },
  {
    id: "4",
    community: "Crypto Insider",
    coin: "SHIB",
    message: "Volume spike in pre-market",
    timestamp: "12m ago",
    sentiment: "neutral",
    members: 67300
  }
];

const walletAlerts: WalletAlert[] = [
  {
    id: "1",
    wallet: "Cupsey",
    action: "bought",
    amount: "3 SOL",
    coin: "$PEPE",
    marketCap: "420k MC",
    timestamp: "1m ago"
  },
  {
    id: "2",
    wallet: "SolanaWhale",
    action: "bought",
    amount: "12 SOL",
    coin: "$BONK",
    marketCap: "850k MC",
    timestamp: "3m ago"
  },
  {
    id: "3",
    wallet: "DegenTrader",
    action: "sold",
    amount: "5 SOL",
    coin: "$DOGE",
    marketCap: "1.2M MC",
    timestamp: "5m ago"
  },
  {
    id: "4",
    wallet: "MoonBoi",
    action: "bought",
    amount: "8 SOL",
    coin: "$SHIB",
    marketCap: "650k MC",
    timestamp: "8m ago"
  }
];

export default function CommunitySignals() {
  const [currentSignals, setCurrentSignals] = useState<CommunitySignal[]>([]);
  const [tickerIndex, setTickerIndex] = useState(0);

  useEffect(() => {
    setCurrentSignals(mockSignals);

    // Simulate live updates
    const interval = setInterval(() => {
      setTickerIndex(prev => (prev + 1) % mockSignals.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'bullish': return 'text-terminal-green';
      case 'bearish': return 'text-terminal-red'; 
      case 'neutral': return 'text-terminal-amber';
      default: return 'text-terminal-gray';
    }
  };

  const getSentimentBg = (sentiment: string) => {
    switch (sentiment) {
      case 'bullish': return 'bg-terminal-green/10 border-terminal-green/30';
      case 'bearish': return 'bg-terminal-red/10 border-terminal-red/30';
      case 'neutral': return 'bg-terminal-amber/10 border-terminal-amber/30';
      default: return 'bg-terminal-gray/10 border-terminal-gray/30';
    }
  };

  return (
    <Card className="p-6 bg-black/40 border border-terminal-gray/20 backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center justify-center w-8 h-8 bg-terminal-blue/20 rounded-lg">
          <MessageSquare className="w-4 h-4 text-terminal-gray" />
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-terminal-white font-mono">
            COMMUNITY SIGNALS
          </h4>
          <div className="text-xs text-terminal-gray uppercase tracking-wider">
            Live Intelligence Feed
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-terminal-green rounded-full animate-pulse"></div>
          <span className="text-xs text-terminal-green font-mono">LIVE</span>
        </div>
      </div>

      {/* Live Ticker */}
      <div className="mb-6 overflow-hidden bg-black/20 border border-terminal-gray/20 rounded-lg">
        <div className="p-3 bg-terminal-blue/5">
          <div className="flex items-center justify-between text-xs text-terminal-gray uppercase tracking-wider mb-2">
            <span>Latest Signal</span>
            <Clock className="w-3 h-3 text-terminal-gray" />
          </div>
          <div className="space-y-2">
            {currentSignals[tickerIndex] && (
              <div className="animate-fade-in">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="outline" className="text-xs bg-terminal-blue/20 border-terminal-blue/40 text-terminal-blue">
                    {currentSignals[tickerIndex].community}
                  </Badge>
                  <span className="text-terminal-white font-mono text-sm">
                    ${currentSignals[tickerIndex].coin}
                  </span>
                  <span className={`text-xs ${getSentimentColor(currentSignals[tickerIndex].sentiment)} font-mono uppercase`}>
                    {currentSignals[tickerIndex].sentiment}
                  </span>
                </div>
                <p className="text-sm text-terminal-gray">
                  {currentSignals[tickerIndex].message}
                </p>
                <div className="flex items-center justify-between text-xs text-terminal-gray/70 mt-1">
                  <span>{currentSignals[tickerIndex].timestamp}</span>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3 text-terminal-gray" />
                    <span>{currentSignals[tickerIndex].members.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Wallet Alerts */}
      <div className="space-y-3">
        <div className="text-xs text-terminal-gray uppercase tracking-wider">
          Wallet Alerts
        </div>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {walletAlerts.map((alert) => (
            <div 
              key={alert.id}
              className={`p-3 rounded border ${alert.action === "bought" ? "bg-terminal-green/10 border-terminal-green/30" : "bg-terminal-red/10 border-terminal-red/30"} transition-all hover:bg-opacity-20`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-terminal-white font-mono font-semibold">
                    {alert.wallet}
                  </span>
                  <span className={`text-xs font-mono uppercase ${alert.action === "bought" ? "text-terminal-green" : "text-terminal-red"}`}>
                    {alert.action}
                  </span>
                </div>
                <span className="text-xs text-terminal-gray">
                  {alert.timestamp}
                </span>
              </div>
              <p className="text-sm text-terminal-gray">
                {alert.amount} worth of {alert.coin} at {alert.marketCap}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}