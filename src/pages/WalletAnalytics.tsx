import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Wallet, TrendingUp, TrendingDown, DollarSign, Percent, Activity } from "lucide-react";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const wallets = [
  {
    id: 1,
    address: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
    label: "Whale #1",
    balance: "$2.4M",
    pnl: "+$384K",
    pnlPercent: "+18.5%",
    isPositive: true,
    totalTrades: 247,
    winRate: "68%",
    avgTradeSize: "$15.2K",
    bestTrade: "+$89K",
    worstTrade: "-$12K"
  },
  {
    id: 2,
    address: "0x3d9819210A31b4961b30EF54bE2aeD79B9c9Cd3",
    label: "Smart Money",
    balance: "$1.8M",
    pnl: "+$156K",
    pnlPercent: "+9.4%",
    isPositive: true,
    totalTrades: 189,
    winRate: "72%",
    avgTradeSize: "$12.8K",
    bestTrade: "+$67K",
    worstTrade: "-$8K"
  },
  {
    id: 3,
    address: "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE",
    label: "Alpha Trader",
    balance: "$980K",
    pnl: "-$42K",
    pnlPercent: "-4.1%",
    isPositive: false,
    totalTrades: 156,
    winRate: "61%",
    avgTradeSize: "$9.5K",
    bestTrade: "+$45K",
    worstTrade: "-$23K"
  },
  {
    id: 4,
    address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
    label: "Degen King",
    balance: "$1.2M",
    pnl: "+$287K",
    pnlPercent: "+31.2%",
    isPositive: true,
    totalTrades: 342,
    winRate: "65%",
    avgTradeSize: "$11.3K",
    bestTrade: "+$102K",
    worstTrade: "-$18K"
  },
  {
    id: 5,
    address: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
    label: "Crypto Sniper",
    balance: "$650K",
    pnl: "+$98K",
    pnlPercent: "+17.8%",
    isPositive: true,
    totalTrades: 201,
    winRate: "70%",
    avgTradeSize: "$8.7K",
    bestTrade: "+$56K",
    worstTrade: "-$9K"
  },
  {
    id: 6,
    address: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
    label: "Moon Chaser",
    balance: "$890K",
    pnl: "-$67K",
    pnlPercent: "-7.0%",
    isPositive: false,
    totalTrades: 178,
    winRate: "58%",
    avgTradeSize: "$10.2K",
    bestTrade: "+$38K",
    worstTrade: "-$31K"
  },
  {
    id: 7,
    address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    label: "Silent Whale",
    balance: "$3.1M",
    pnl: "+$512K",
    pnlPercent: "+19.8%",
    isPositive: true,
    totalTrades: 423,
    winRate: "74%",
    avgTradeSize: "$18.9K",
    bestTrade: "+$124K",
    worstTrade: "-$15K"
  }
];

const generatePnLData = (isPositive: boolean) => {
  const data = [];
  let value = 100000;
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  for (let i = 0; i < 12; i++) {
    const change = isPositive 
      ? Math.random() * 50000 - 10000 
      : Math.random() * 30000 - 40000;
    value += change;
    data.push({
      month: months[i],
      pnl: Math.round(value)
    });
  }
  return data;
};

export default function WalletAnalytics() {
  const navigate = useNavigate();
  const [selectedWallet, setSelectedWallet] = useState(wallets[0]);
  const pnlData = generatePnLData(selectedWallet.isPositive);

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={() => navigate('/analyze', { state: { tab: 'wallets' } })}
              className="text-gray-400 hover:text-white"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-white">Wallet Analytics</h1>
              <p className="text-gray-400 mt-1">Professional performance tracking</p>
            </div>
          </div>
        </div>

        {/* Wallet Selection */}
        <Card className="bg-black border-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Wallet className="w-5 h-5 text-gray-400" />
              Select Wallet
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <div className="flex gap-3 pb-2">
                {wallets.map((wallet) => (
                  <button
                    key={wallet.id}
                    onClick={() => setSelectedWallet(wallet)}
                    className={`p-4 rounded-lg border transition-all hover:scale-105 flex-shrink-0 bg-gray-950 ${
                      selectedWallet.id === wallet.id
                        ? 'border-white'
                        : 'border-gray-800 hover:border-gray-700'
                    }`}
                  >
                    <div className="text-center space-y-2">
                      <Wallet className="w-5 h-5 mx-auto text-gray-400" />
                      <p className="text-sm font-semibold text-white">
                        {wallet.label}
                      </p>
                      <p className={`text-xs ${wallet.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                        {wallet.pnlPercent}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Performance Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-gray-950 border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Total P&L</p>
                  <p className={`text-2xl font-bold mt-1 ${selectedWallet.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                    {selectedWallet.pnl}
                  </p>
                  <p className={`text-sm mt-1 ${selectedWallet.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                    {selectedWallet.pnlPercent}
                  </p>
                </div>
                {selectedWallet.isPositive ? (
                  <TrendingUp className="w-8 h-8 text-green-400" />
                ) : (
                  <TrendingDown className="w-8 h-8 text-red-400" />
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-950 border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Win Rate</p>
                  <p className="text-2xl font-bold text-white mt-1">{selectedWallet.winRate}</p>
                  <p className="text-sm text-gray-400 mt-1">{selectedWallet.totalTrades} trades</p>
                </div>
                <Percent className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-950 border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Avg Trade Size</p>
                  <p className="text-2xl font-bold text-white mt-1">{selectedWallet.avgTradeSize}</p>
                  <p className="text-sm text-gray-400 mt-1">Per transaction</p>
                </div>
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-950 border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Balance</p>
                  <p className="text-2xl font-bold text-white mt-1">{selectedWallet.balance}</p>
                  <p className="text-sm text-gray-400 mt-1">Current value</p>
                </div>
                <Activity className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* P&L Chart */}
        <Card className="bg-black border-gray-800">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-white">
                <TrendingUp className="w-5 h-5 text-primary" />
                P&L Performance
              </CardTitle>
              <Badge variant="outline" className={selectedWallet.isPositive ? "bg-green-500/10 text-green-400 border-green-500/20" : "bg-red-500/10 text-red-400 border-red-500/20"}>
                12 Month View
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={pnlData}>
                  <defs>
                    <linearGradient id="pnlGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={selectedWallet.isPositive ? "#10b981" : "#ef4444"} stopOpacity={0.3}/>
                      <stop offset="95%" stopColor={selectedWallet.isPositive ? "#10b981" : "#ef4444"} stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#000', 
                      border: '1px solid #374151',
                      borderRadius: '8px'
                    }}
                    labelStyle={{ color: '#fff' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="pnl" 
                    stroke={selectedWallet.isPositive ? "#10b981" : "#ef4444"} 
                    fill="url(#pnlGradient)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Trade Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-black border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Best Trade</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <div>
                    <p className="text-sm text-gray-400">Maximum Profit</p>
                    <p className="text-2xl font-bold text-green-400 mt-1">{selectedWallet.bestTrade}</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-green-400" />
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-400">Win Rate</p>
                    <p className="text-white font-semibold mt-1">{selectedWallet.winRate}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Total Wins</p>
                    <p className="text-white font-semibold mt-1">
                      {Math.round(selectedWallet.totalTrades * parseInt(selectedWallet.winRate) / 100)}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Worst Trade</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <div>
                    <p className="text-sm text-gray-400">Maximum Loss</p>
                    <p className="text-2xl font-bold text-red-400 mt-1">{selectedWallet.worstTrade}</p>
                  </div>
                  <TrendingDown className="w-8 h-8 text-red-400" />
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-400">Loss Rate</p>
                    <p className="text-white font-semibold mt-1">{100 - parseInt(selectedWallet.winRate)}%</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Total Losses</p>
                    <p className="text-white font-semibold mt-1">
                      {selectedWallet.totalTrades - Math.round(selectedWallet.totalTrades * parseInt(selectedWallet.winRate) / 100)}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
