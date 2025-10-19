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
  marketCap: string;
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
    community: "Pastel Alpha",
    coin: "PEPE",
    message: "Major whale accumulation detected",
    timestamp: "2m ago",
    marketCap: "420k",
    members: 45200
  },
  {
    id: "2", 
    community: "Crypto Elites",
    coin: "PEPE",
    message: "Strong buy signal confirmed",
    timestamp: "3m ago",
    marketCap: "850k",
    members: 38500
  },
  {
    id: "3",
    community: "Potion Labs",
    coin: "BONK",
    message: "Dev team announcing new partnerships",
    timestamp: "5m ago",
    marketCap: "1.2M",
    members: 32800
  },
  {
    id: "4",
    community: "Alpha Signals",
    coin: "BONK",
    message: "Volume increasing rapidly",
    timestamp: "6m ago",
    marketCap: "1.5M",
    members: 42100
  },
  {
    id: "5",
    community: "Rosita Trading",
    coin: "DOGE",
    message: "Technical breakout pattern forming",
    timestamp: "8m ago",
    marketCap: "650k", 
    members: 28500
  },
  {
    id: "6",
    community: "Crypto Insider",
    coin: "SHIB",
    message: "Volume spike in pre-market",
    timestamp: "12m ago",
    marketCap: "2.8M",
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

  // Group signals by coin to show all communities mentioning the same coin
  const groupedSignals = mockSignals.reduce((acc, signal) => {
    if (!acc[signal.coin]) {
      acc[signal.coin] = [];
    }
    acc[signal.coin].push(signal);
    return acc;
  }, {} as Record<string, CommunitySignal[]>);

  const coinAlerts = Object.entries(groupedSignals).map(([coin, signals]) => ({
    coin,
    communitiesWithMC: signals.map(s => ({ community: s.community, marketCap: s.marketCap })),
    timestamp: signals[0].timestamp
  }));

  useEffect(() => {
    setCurrentSignals(mockSignals);

    // Simulate live updates
    const interval = setInterval(() => {
      setTickerIndex(prev => (prev + 1) % coinAlerts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);


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
            <span>Latest Alerts</span>
            <Clock className="w-3 h-3 text-terminal-gray" />
          </div>
          <div className="space-y-2">
            {coinAlerts[tickerIndex] && (
              <div className="animate-fade-in">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-terminal-white font-mono text-lg font-bold">
                    ${coinAlerts[tickerIndex].coin}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {coinAlerts[tickerIndex].communitiesWithMC.map((item, idx) => (
                    <Badge 
                      key={idx}
                      variant="outline" 
                      className="text-xs bg-terminal-blue/20 border-terminal-blue/40 text-terminal-blue"
                    >
                      {item.community} @ {item.marketCap}
                    </Badge>
                  ))}
                </div>
                <div className="text-xs text-terminal-gray/70">
                  {coinAlerts[tickerIndex].timestamp}
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