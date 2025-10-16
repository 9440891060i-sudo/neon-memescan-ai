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
  const { toast } = useToast();

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
    <div className="space-y-6">
      {/* Header Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold mb-2 text-foreground">
          Wallet Intelligence
        </h2>
        <p className="text-muted-foreground">
          Track wallet activity, monitor trades, and configure alerts for portfolio movements
        </p>
      </div>

      {/* Add Wallet Section */}
      <Card className="bg-card border-border">
        <CardContent className="p-6">
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Enter wallet address (0x...)"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                className="pl-10 h-11 font-mono text-sm"
              />
            </div>
            <Button
              onClick={handleAddWallet}
              className="h-11 px-6 bg-terminal-green hover:bg-terminal-green/90 text-background font-medium"
            >
              <Plus className="w-4 h-4 mr-2" />
              Track Wallet
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-card border-border">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Tracked Wallets</p>
                <p className="text-2xl font-semibold text-foreground mt-1">12</p>
              </div>
              <Wallet className="w-7 h-7 text-terminal-gray" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">+3 this week</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Trades</p>
                <p className="text-2xl font-semibold text-foreground mt-1">847</p>
              </div>
              <TrendingUp className="w-7 h-7 text-terminal-gray" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">+142 today</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Alerts</p>
                <p className="text-2xl font-semibold text-foreground mt-1">8</p>
              </div>
              <Bell className="w-7 h-7 text-terminal-gray" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">2 triggered today</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Win Rate</p>
                <p className="text-2xl font-semibold text-foreground mt-1">67%</p>
              </div>
              <TrendingUp className="w-7 h-7 text-terminal-gray" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">Across all wallets</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Tracked Wallets */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-card border-border">
            <CardHeader className="border-b border-border">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-foreground text-lg font-semibold">
                  <Wallet className="w-5 h-5 text-muted-foreground" />
                  Tracked Wallets
                </CardTitle>
                <Badge variant="outline" className="bg-muted text-foreground border-border">
                  {trackedWallets.length} Active
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {trackedWallets.map((wallet) => (
                  <button
                    key={wallet.id}
                    onClick={() => toggleWallet(wallet.id)}
                    className={`p-4 rounded-lg border transition-all ${
                      selectedWallets.includes(wallet.id)
                        ? 'border-terminal-green bg-terminal-green/10'
                        : 'border-border bg-card hover:border-muted-foreground/30'
                    }`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <Wallet className={`w-5 h-5 ${selectedWallets.includes(wallet.id) ? 'text-terminal-green' : 'text-muted-foreground'}`} />
                      <div className="text-center">
                        <p className={`text-sm font-medium ${selectedWallets.includes(wallet.id) ? 'text-terminal-green' : 'text-foreground'}`}>
                          {wallet.label}
                        </p>
                        <p className={`text-xs mt-1 ${wallet.isPositive ? 'text-terminal-green' : 'text-terminal-red'}`}>
                          {wallet.pnl}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
                
                {/* Select All Button */}
                <button
                  onClick={selectAllWallets}
                  className={`p-4 rounded-lg border transition-all ${
                    selectedWallets.length === trackedWallets.length
                      ? 'border-terminal-blue bg-terminal-blue/10'
                      : 'border-border bg-card hover:border-muted-foreground/30'
                  }`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-5 h-5 rounded border border-current flex items-center justify-center">
                      {selectedWallets.length === trackedWallets.length && (
                        <div className="w-3 h-3 bg-terminal-blue rounded-sm" />
                      )}
                    </div>
                    <div className="text-center">
                      <p className={`text-sm font-medium ${
                        selectedWallets.length === trackedWallets.length ? 'text-terminal-blue' : 'text-foreground'
                      }`}>
                        Select All
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {selectedWallets.length}/{trackedWallets.length}
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Trades */}
          <Card className="bg-card border-border">
            <CardHeader className="border-b border-border">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-foreground text-lg font-semibold">
                  <TrendingUp className="w-5 h-5 text-muted-foreground" />
                  Recent Trades
                </CardTitle>
                {selectedWallets.length > 0 && (
                  <Badge variant="outline" className="bg-muted text-foreground border-border">
                    Filtered: {selectedWallets.length} wallet{selectedWallets.length > 1 ? 's' : ''}
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="p-6">
              {filteredTrades.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">Select wallets to view their recent trades</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {filteredTrades.map((trade) => (
                  <div 
                    key={trade.id}
                    className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <Badge 
                        variant="outline"
                        className={trade.action === "BUY" 
                          ? "bg-terminal-green/10 text-terminal-green border-terminal-green/20 font-medium" 
                          : "bg-terminal-red/10 text-terminal-red border-terminal-red/20 font-medium"
                        }
                      >
                        {trade.action}
                      </Badge>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium text-foreground">{trade.coin}</p>
                          <span className="text-muted-foreground">•</span>
                          <p className="text-sm text-muted-foreground">{trade.wallet}</p>
                        </div>
                        <p className="text-xs text-muted-foreground">{trade.amount} at {trade.price}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-medium ${trade.isPositive ? 'text-terminal-green' : 'text-terminal-red'}`}>
                        {trade.pnl}
                      </p>
                      <p className="text-xs text-muted-foreground">{trade.timestamp}</p>
                    </div>
                  </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar - Alerts & Actions */}
        <div className="space-y-6">
          {/* Active Alerts */}
          <Card className="bg-card border-border">
            <CardHeader className="border-b border-border">
              <CardTitle className="flex items-center gap-2 text-foreground text-lg font-semibold">
                <Bell className="w-5 h-5 text-muted-foreground" />
                Active Alerts
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-3">
              {activeAlerts.map((alert) => (
                <div 
                  key={alert.id}
                  className="p-4 bg-muted/30 rounded-lg border border-border"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-medium text-foreground text-sm">{alert.type}</p>
                      <p className="text-xs text-muted-foreground">{alert.wallet}</p>
                    </div>
                    <Badge 
                      variant="outline"
                      className={alert.status === "active"
                        ? "bg-terminal-green/10 text-terminal-green border-terminal-green/20 text-xs"
                        : "bg-muted text-muted-foreground border-border text-xs"
                      }
                    >
                      {alert.status}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{alert.condition}</p>
                  <p className="text-xs text-muted-foreground">Triggered {alert.triggered}x</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="bg-card border-border">
            <CardHeader className="border-b border-border">
              <CardTitle className="text-foreground text-lg font-semibold">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-3">
              <Button 
                onClick={() => setAlertPopupOpen(true)}
                className="w-full bg-terminal-green hover:bg-terminal-green/90 text-background font-medium"
              >
                <Plus className="w-4 h-4 mr-2" />
                Create Alert
              </Button>
              <Button variant="outline" className="w-full">
                <AlertTriangle className="w-4 h-4 mr-2" />
                View All Alerts
              </Button>
              <Button 
                onClick={() => navigate('/wallet-analytics')}
                variant="outline" 
                className="w-full"
              >
                <TrendingUp className="w-4 h-4 mr-2" />
                Analytics Dashboard
              </Button>
            </CardContent>
          </Card>

          {/* Performance Summary */}
          <Card className="bg-card border-border">
            <CardHeader className="border-b border-border">
              <CardTitle className="text-foreground text-lg font-semibold">Performance Summary</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Total Profit</span>
                <span className="text-sm font-medium text-terminal-green">+$498K</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Best Performer</span>
                <span className="text-sm font-medium text-foreground">Whale #1</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Most Active</span>
                <span className="text-sm font-medium text-foreground">Smart Money</span>
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