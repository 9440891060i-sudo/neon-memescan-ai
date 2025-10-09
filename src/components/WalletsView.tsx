import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Wallet, TrendingUp, TrendingDown, Bell, Plus, Copy, ExternalLink, Search, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const trackedWallets = [
  {
    id: 1,
    address: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
    label: "Whale #1",
    balance: "$2.4M",
    pnl: "+$384K",
    pnlPercent: "+18.5%",
    isPositive: true,
    lastActive: "5m ago",
    totalTrades: 247,
    winRate: "68%"
  },
  {
    id: 2,
    address: "0x3d9819210A31b4961b30EF54bE2aeD79B9c9Cd3",
    label: "Smart Money",
    balance: "$1.8M",
    pnl: "+$156K",
    pnlPercent: "+9.4%",
    isPositive: true,
    lastActive: "12m ago",
    totalTrades: 189,
    winRate: "72%"
  },
  {
    id: 3,
    address: "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE",
    label: "Alpha Trader",
    balance: "$980K",
    pnl: "-$42K",
    pnlPercent: "-4.1%",
    isPositive: false,
    lastActive: "1h ago",
    totalTrades: 156,
    winRate: "61%"
  }
];

const recentTrades = [
  {
    id: 1,
    wallet: "Whale #1",
    action: "BUY",
    coin: "PEPE",
    amount: "$125K",
    price: "$0.0000089",
    timestamp: "3m ago",
    pnl: "+$18K",
    isPositive: true
  },
  {
    id: 2,
    wallet: "Smart Money",
    action: "SELL",
    coin: "SHIB",
    amount: "$89K",
    price: "$0.0000231",
    timestamp: "8m ago",
    pnl: "+$12K",
    isPositive: true
  },
  {
    id: 3,
    wallet: "Whale #1",
    action: "BUY",
    coin: "BONK",
    amount: "$210K",
    price: "$0.0000045",
    timestamp: "15m ago",
    pnl: "+$31K",
    isPositive: true
  },
  {
    id: 4,
    wallet: "Alpha Trader",
    action: "SELL",
    coin: "FLOKI",
    amount: "$67K",
    price: "$0.0001234",
    timestamp: "22m ago",
    pnl: "-$5K",
    isPositive: false
  }
];

const activeAlerts = [
  {
    id: 1,
    type: "Large Trade",
    wallet: "Whale #1",
    condition: "Trade > $100K",
    status: "active",
    triggered: 12
  },
  {
    id: 2,
    type: "Wallet Balance",
    wallet: "Smart Money",
    condition: "Balance change > 10%",
    status: "active",
    triggered: 5
  },
  {
    id: 3,
    type: "Token Movement",
    wallet: "Alpha Trader",
    condition: "New token detected",
    status: "paused",
    triggered: 8
  }
];

export function WalletsView() {
  const [walletAddress, setWalletAddress] = useState("");
  const { toast } = useToast();

  const handleAddWallet = () => {
    if (!walletAddress) {
      toast({
        title: "Address Required",
        description: "Please enter a valid wallet address",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Wallet Added",
      description: "Now tracking wallet activity and trades",
    });
    setWalletAddress("");
  };

  const copyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
    toast({
      title: "Copied",
      description: "Address copied to clipboard",
    });
  };

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Wallet Intelligence
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Track whale wallets, monitor trades, and set custom alerts for smart money movements
        </p>
      </div>

      {/* Add Wallet Section */}
      <Card className="bg-black border-gray-800">
        <CardContent className="p-8">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <Input
                placeholder="Enter wallet address (0x... or Solana address)"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                className="pl-12 bg-gray-950 border-gray-800 text-white placeholder:text-gray-500 font-mono h-14 text-sm"
              />
            </div>
            <Button
              onClick={handleAddWallet}
              className="h-14 px-8 bg-neon-green hover:bg-neon-green/90 text-black font-semibold"
            >
              <Plus className="w-5 h-5 mr-2" />
              Track Wallet
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gray-950 border-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Tracked Wallets</p>
                <p className="text-3xl font-bold text-white mt-1">12</p>
              </div>
              <Wallet className="w-8 h-8 text-neon-green" />
            </div>
            <p className="text-xs text-gray-500 mt-2">+3 this week</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-950 border-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Trades</p>
                <p className="text-3xl font-bold text-white mt-1">847</p>
              </div>
              <TrendingUp className="w-8 h-8 text-blue-400" />
            </div>
            <p className="text-xs text-gray-500 mt-2">+142 today</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-950 border-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Active Alerts</p>
                <p className="text-3xl font-bold text-white mt-1">8</p>
              </div>
              <Bell className="w-8 h-8 text-yellow-400" />
            </div>
            <p className="text-xs text-gray-500 mt-2">2 triggered today</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-950 border-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Avg Win Rate</p>
                <p className="text-3xl font-bold text-white mt-1">67%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-400" />
            </div>
            <p className="text-xs text-gray-500 mt-2">Across all wallets</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Tracked Wallets */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-black border-gray-800">
            <CardHeader className="border-b border-gray-800">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-white">
                  <Wallet className="w-5 h-5 text-neon-green" />
                  Tracked Wallets
                </CardTitle>
                <Badge variant="outline" className="bg-neon-green/10 text-neon-green border-neon-green/20">
                  {trackedWallets.length} Active
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              {trackedWallets.map((wallet) => (
                <div 
                  key={wallet.id}
                  className="p-5 bg-gray-950 rounded-lg border border-gray-800 hover:border-gray-700 transition-all group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-semibold text-white text-lg">{wallet.label}</h4>
                        <Badge variant="outline" className="bg-gray-900 text-gray-400 border-gray-700 text-xs">
                          {wallet.lastActive}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="text-sm text-gray-500 font-mono">{wallet.address}</p>
                        <button
                          onClick={() => copyAddress(wallet.address)}
                          className="text-gray-500 hover:text-white transition-colors"
                        >
                          <Copy className="w-3 h-3" />
                        </button>
                        <button className="text-gray-500 hover:text-white transition-colors">
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Balance</p>
                      <p className="text-lg font-semibold text-white">{wallet.balance}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">P&L</p>
                      <div className="flex items-center gap-1">
                        {wallet.isPositive ? (
                          <TrendingUp className="w-4 h-4 text-green-400" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-red-400" />
                        )}
                        <p className={`text-lg font-semibold ${wallet.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                          {wallet.pnl}
                        </p>
                      </div>
                      <p className={`text-xs ${wallet.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                        {wallet.pnlPercent}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Total Trades</p>
                      <p className="text-lg font-semibold text-white">{wallet.totalTrades}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Win Rate</p>
                      <p className="text-lg font-semibold text-neon-green">{wallet.winRate}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Trades */}
          <Card className="bg-black border-gray-800">
            <CardHeader className="border-b border-gray-800">
              <CardTitle className="flex items-center gap-2 text-white">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                Recent Trades
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-3">
                {recentTrades.map((trade) => (
                  <div 
                    key={trade.id}
                    className="flex items-center justify-between p-4 bg-gray-950 rounded-lg border border-gray-800 hover:border-gray-700 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <Badge 
                        variant="outline"
                        className={trade.action === "BUY" 
                          ? "bg-green-500/10 text-green-400 border-green-500/20 font-semibold" 
                          : "bg-red-500/10 text-red-400 border-red-500/20 font-semibold"
                        }
                      >
                        {trade.action}
                      </Badge>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-white">{trade.coin}</p>
                          <span className="text-gray-600">•</span>
                          <p className="text-sm text-gray-500">{trade.wallet}</p>
                        </div>
                        <p className="text-xs text-gray-500">{trade.amount} at {trade.price}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-semibold ${trade.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                        {trade.pnl}
                      </p>
                      <p className="text-xs text-gray-500">{trade.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar - Alerts & Actions */}
        <div className="space-y-6">
          {/* Active Alerts */}
          <Card className="bg-black border-gray-800">
            <CardHeader className="border-b border-gray-800">
              <CardTitle className="flex items-center gap-2 text-white">
                <Bell className="w-5 h-5 text-yellow-400" />
                Active Alerts
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-3">
              {activeAlerts.map((alert) => (
                <div 
                  key={alert.id}
                  className="p-4 bg-gray-950 rounded-lg border border-gray-800"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-semibold text-white text-sm">{alert.type}</p>
                      <p className="text-xs text-gray-500">{alert.wallet}</p>
                    </div>
                    <Badge 
                      variant="outline"
                      className={alert.status === "active"
                        ? "bg-green-500/10 text-green-400 border-green-500/20 text-xs"
                        : "bg-gray-700/10 text-gray-400 border-gray-700/20 text-xs"
                      }
                    >
                      {alert.status}
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-400 mb-2">{alert.condition}</p>
                  <p className="text-xs text-gray-500">Triggered {alert.triggered}x</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="bg-black border-gray-800">
            <CardHeader className="border-b border-gray-800">
              <CardTitle className="text-white">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-3">
              <Button className="w-full bg-neon-green hover:bg-neon-green/90 text-black font-semibold">
                <Plus className="w-4 h-4 mr-2" />
                Create Alert
              </Button>
              <Button variant="outline" className="w-full border-gray-700 text-white hover:bg-gray-900">
                <AlertTriangle className="w-4 h-4 mr-2" />
                View All Alerts
              </Button>
              <Button variant="outline" className="w-full border-gray-700 text-white hover:bg-gray-900">
                <TrendingUp className="w-4 h-4 mr-2" />
                Analytics Dashboard
              </Button>
            </CardContent>
          </Card>

          {/* Performance Summary */}
          <Card className="bg-black border-gray-800">
            <CardHeader className="border-b border-gray-800">
              <CardTitle className="text-white text-sm">Performance Summary</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Total Profit</span>
                <span className="text-sm font-semibold text-green-400">+$498K</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Best Performer</span>
                <span className="text-sm font-semibold text-white">Whale #1</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Most Active</span>
                <span className="text-sm font-semibold text-white">Smart Money</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}