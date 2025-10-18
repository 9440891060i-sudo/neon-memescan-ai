import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Wallet, TrendingUp, TrendingDown, Bell, Plus, Copy, ExternalLink, Search, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { AlertPopup } from "@/components/AlertPopup";

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
  },
  {
    id: 4,
    address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
    label: "Degen King",
    balance: "$1.2M",
    pnl: "+$287K",
    pnlPercent: "+31.2%",
    isPositive: true,
    lastActive: "22m ago",
    totalTrades: 342,
    winRate: "65%"
  },
  {
    id: 5,
    address: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
    label: "Crypto Sniper",
    balance: "$650K",
    pnl: "+$98K",
    pnlPercent: "+17.8%",
    isPositive: true,
    lastActive: "45m ago",
    totalTrades: 201,
    winRate: "70%"
  },
  {
    id: 6,
    address: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
    label: "Moon Chaser",
    balance: "$890K",
    pnl: "-$67K",
    pnlPercent: "-7.0%",
    isPositive: false,
    lastActive: "2h ago",
    totalTrades: 178,
    winRate: "58%"
  },
  {
    id: 7,
    address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    label: "Silent Whale",
    balance: "$3.1M",
    pnl: "+$512K",
    pnlPercent: "+19.8%",
    isPositive: true,
    lastActive: "8m ago",
    totalTrades: 423,
    winRate: "74%"
  }
];

const recentTrades = [
  {
    id: 1,
    walletId: 1,
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
    walletId: 2,
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
    walletId: 1,
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
    walletId: 3,
    wallet: "Alpha Trader",
    action: "SELL",
    coin: "FLOKI",
    amount: "$67K",
    price: "$0.0001234",
    timestamp: "22m ago",
    pnl: "-$5K",
    isPositive: false
  },
  {
    id: 5,
    walletId: 4,
    wallet: "Degen King",
    action: "BUY",
    coin: "DOGE",
    amount: "$180K",
    price: "$0.08234",
    timestamp: "28m ago",
    pnl: "+$42K",
    isPositive: true
  },
  {
    id: 6,
    walletId: 5,
    wallet: "Crypto Sniper",
    action: "BUY",
    coin: "PEPE",
    amount: "$55K",
    price: "$0.0000091",
    timestamp: "35m ago",
    pnl: "+$8K",
    isPositive: true
  },
  {
    id: 7,
    walletId: 7,
    wallet: "Silent Whale",
    action: "SELL",
    coin: "SHIB",
    amount: "$320K",
    price: "$0.0000245",
    timestamp: "42m ago",
    pnl: "+$67K",
    isPositive: true
  },
  {
    id: 8,
    walletId: 6,
    wallet: "Moon Chaser",
    action: "BUY",
    coin: "BONK",
    amount: "$95K",
    price: "$0.0000052",
    timestamp: "1h ago",
    pnl: "-$12K",
    isPositive: false
  },
  {
    id: 9,
    walletId: 4,
    wallet: "Degen King",
    action: "SELL",
    coin: "FLOKI",
    amount: "$142K",
    price: "$0.0001456",
    timestamp: "1h ago",
    pnl: "+$28K",
    isPositive: true
  },
  {
    id: 10,
    walletId: 2,
    wallet: "Smart Money",
    action: "BUY",
    coin: "PEPE",
    amount: "$205K",
    price: "$0.0000087",
    timestamp: "2h ago",
    pnl: "+$35K",
    isPositive: true
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
  const navigate = useNavigate();
  const [walletAddress, setWalletAddress] = useState("");
  const [selectedWallets, setSelectedWallets] = useState<number[]>([]);
  const [alertPopupOpen, setAlertPopupOpen] = useState(false);
  const [timeframe, setTimeframe] = useState<'1d' | '7d' | '1M' | 'all'>('all');
  const [tradesTimeframe, setTradesTimeframe] = useState<'1d' | '7d' | '1M' | 'all'>('all');
  const { toast } = useToast();

  const getTotalTrades = () => {
    switch(timeframe) {
      case '1d': return 142;
      case '7d': return 523;
      case '1M': return 847;
      case 'all': return 1247;
      default: return 847;
    }
  };

  const toggleWallet = (walletId: number) => {
    setSelectedWallets(prev => 
      prev.includes(walletId) 
        ? prev.filter(id => id !== walletId)
        : [...prev, walletId]
    );
  };

  const selectAllWallets = () => {
    if (selectedWallets.length === trackedWallets.length) {
      setSelectedWallets([]);
    } else {
      setSelectedWallets(trackedWallets.map(w => w.id));
    }
  };

  const filteredTrades = selectedWallets.length === 0 
    ? [] 
    : recentTrades.filter(trade => selectedWallets.includes(trade.walletId));

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
          Track wallets and their performance, monitor trades, set custom alerts
        </p>
      </div>

      {/* Add Wallet Section */}
      <Card className="bg-black border-gray-800">
        <CardContent className="p-8">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <Input
                placeholder="Enter wallet address"
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
                <p className="text-3xl font-bold text-white mt-1">{getTotalTrades()}</p>
              </div>
              <TrendingUp className="w-8 h-8 text-blue-400" />
            </div>
            <div className="flex gap-1 mt-3">
              <button
                onClick={() => setTimeframe('1d')}
                className={`px-2 py-1 text-xs rounded transition-colors ${
                  timeframe === '1d' ? 'bg-blue-400/20 text-blue-400' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                1d
              </button>
              <button
                onClick={() => setTimeframe('7d')}
                className={`px-2 py-1 text-xs rounded transition-colors ${
                  timeframe === '7d' ? 'bg-blue-400/20 text-blue-400' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                7d
              </button>
              <button
                onClick={() => setTimeframe('1M')}
                className={`px-2 py-1 text-xs rounded transition-colors ${
                  timeframe === '1M' ? 'bg-blue-400/20 text-blue-400' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                1M
              </button>
              <button
                onClick={() => setTimeframe('all')}
                className={`px-2 py-1 text-xs rounded transition-colors ${
                  timeframe === 'all' ? 'bg-blue-400/20 text-blue-400' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                ∞
              </button>
            </div>
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
                <div className="flex items-center gap-2">
                  <button
                    onClick={selectAllWallets}
                    className={`px-3 py-1.5 text-xs rounded-md border transition-all ${
                      selectedWallets.length === trackedWallets.length
                        ? 'border-white text-white'
                        : 'border-gray-700 text-gray-400 hover:border-gray-600'
                    }`}
                  >
                    Select All ({selectedWallets.length}/{trackedWallets.length})
                  </button>
                  <Badge variant="outline" className="bg-neon-green/10 text-neon-green border-neon-green/20">
                    {trackedWallets.length} Active
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {trackedWallets.map((wallet) => (
                  <button
                    key={wallet.id}
                    onClick={() => toggleWallet(wallet.id)}
                    className={`p-4 rounded-lg border transition-all hover:scale-105 bg-gray-950 ${
                      selectedWallets.includes(wallet.id)
                        ? 'border-white'
                        : 'border-gray-800 hover:border-gray-700'
                    }`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <Wallet className="w-6 h-6 text-gray-400" />
                      <div className="text-center">
                        <p className="text-sm font-semibold text-white">
                          {wallet.label}
                        </p>
                        <p className={`text-xs mt-1 ${wallet.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                          {wallet.pnl}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Trades */}
          <Card className="bg-black border-gray-800">
            <CardHeader className="border-b border-gray-800">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-white">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                  Trades
                </CardTitle>
                <div className="flex gap-1">
                  <button
                    onClick={() => setTradesTimeframe('1d')}
                    className={`px-2 py-1 text-xs rounded transition-colors ${
                      tradesTimeframe === '1d' ? 'bg-blue-400/20 text-blue-400' : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    1d
                  </button>
                  <button
                    onClick={() => setTradesTimeframe('7d')}
                    className={`px-2 py-1 text-xs rounded transition-colors ${
                      tradesTimeframe === '7d' ? 'bg-blue-400/20 text-blue-400' : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    7d
                  </button>
                  <button
                    onClick={() => setTradesTimeframe('1M')}
                    className={`px-2 py-1 text-xs rounded transition-colors ${
                      tradesTimeframe === '1M' ? 'bg-blue-400/20 text-blue-400' : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    1M
                  </button>
                  <button
                    onClick={() => setTradesTimeframe('all')}
                    className={`px-2 py-1 text-xs rounded transition-colors ${
                      tradesTimeframe === 'all' ? 'bg-blue-400/20 text-blue-400' : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    ∞
                  </button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              {filteredTrades.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">No trades found for selected wallets</p>
                </div>
              ) : (
                <>
                  <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                    {filteredTrades.map((trade) => (
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
                  <div className="mt-4 pt-4 border-t border-gray-800">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Total PnL</span>
                      <span className="text-lg font-semibold text-green-400">635.87 SOL</span>
                    </div>
                  </div>
                </>
              )}
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
              <Button 
                onClick={() => setAlertPopupOpen(true)}
                className="w-full bg-neon-green hover:bg-neon-green/90 text-black font-semibold"
              >
                <Plus className="w-4 h-4 mr-2" />
                Create Alert
              </Button>
              <Button variant="outline" className="w-full border-gray-700 text-white hover:bg-gray-900">
                <AlertTriangle className="w-4 h-4 mr-2" />
                View All Alerts
              </Button>
              <Button 
                onClick={() => navigate('/wallet-analytics')}
                variant="outline" 
                className="w-full border-gray-700 text-white hover:bg-gray-900"
              >
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

      {/* Alert Popup */}
      <AlertPopup 
        open={alertPopupOpen}
        onOpenChange={setAlertPopupOpen}
        wallets={trackedWallets}
      />
    </div>
  );
}