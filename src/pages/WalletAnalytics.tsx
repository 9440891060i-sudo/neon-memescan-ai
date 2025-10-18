import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Wallet, TrendingUp, TrendingDown, DollarSign, Percent, Activity, Copy, Search, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import pepeIcon from "@/assets/coins/pepe.png";
import dogeIcon from "@/assets/coins/doge.png";
import shibaIcon from "@/assets/coins/shiba.png";
import flokiIcon from "@/assets/coins/floki.png";
import bonkIcon from "@/assets/coins/bonk.png";
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
    bestTrade: { amount: "+$89K", coin: "PEPE", logo: pepeIcon, ca: "0x6982508145454Ce325dDbE47a25d4ec3d2311933" },
    worstTrade: { amount: "-$12K", coin: "BONK", logo: bonkIcon, ca: "0xDEfac16715671B7B6aCd9442f3b5c06f0e50E6E5" }
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
    bestTrade: { amount: "+$67K", coin: "DOGE", logo: dogeIcon, ca: "0xba2ae424d960c26247dd6c32edc70b295c744c43" },
    worstTrade: { amount: "-$8K", coin: "FLOKI", logo: flokiIcon, ca: "0xcf0C122c6b73ff809C693DB761e7BaeBe62b6a2E" }
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
    bestTrade: { amount: "+$45K", coin: "SHIBA", logo: shibaIcon, ca: "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE" },
    worstTrade: { amount: "-$23K", coin: "PEPE", logo: pepeIcon, ca: "0x6982508145454Ce325dDbE47a25d4ec3d2311933" }
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
    bestTrade: { amount: "+$102K", coin: "BONK", logo: bonkIcon, ca: "0xDEfac16715671B7B6aCd9442f3b5c06f0e50E6E5" },
    worstTrade: { amount: "-$18K", coin: "DOGE", logo: dogeIcon, ca: "0xba2ae424d960c26247dd6c32edc70b295c744c43" }
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
    bestTrade: { amount: "+$56K", coin: "FLOKI", logo: flokiIcon, ca: "0xcf0C122c6b73ff809C693DB761e7BaeBe62b6a2E" },
    worstTrade: { amount: "-$9K", coin: "SHIBA", logo: shibaIcon, ca: "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE" }
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
    bestTrade: { amount: "+$38K", coin: "PEPE", logo: pepeIcon, ca: "0x6982508145454Ce325dDbE47a25d4ec3d2311933" },
    worstTrade: { amount: "-$31K", coin: "BONK", logo: bonkIcon, ca: "0xDEfac16715671B7B6aCd9442f3b5c06f0e50E6E5" }
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
    bestTrade: { amount: "+$124K", coin: "DOGE", logo: dogeIcon, ca: "0xba2ae424d960c26247dd6c32edc70b295c744c43" },
    worstTrade: { amount: "-$15K", coin: "FLOKI", logo: flokiIcon, ca: "0xcf0C122c6b73ff809C693DB761e7BaeBe62b6a2E" }
  }
];

const generatePnLData = (isPositive: boolean, timeframe: string) => {
  const data = [];
  let value = 100000;
  let labels = [];
  let periods = 0;
  
  switch(timeframe) {
    case '7d':
      labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      periods = 7;
      break;
    case '1m':
      labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
      periods = 4;
      break;
    case '3m':
      labels = ['Month 1', 'Month 2', 'Month 3'];
      periods = 3;
      break;
    case '6m':
      labels = ['M1', 'M2', 'M3', 'M4', 'M5', 'M6'];
      periods = 6;
      break;
    case '1y':
    default:
      labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      periods = 12;
  }
  
  for (let i = 0; i < periods; i++) {
    const change = isPositive 
      ? Math.random() * 50000 - 10000 
      : Math.random() * 30000 - 40000;
    value += change;
    data.push({
      month: labels[i],
      pnl: Math.round(value)
    });
  }
  return data;
};

const tradesData = [
  { id: 1, type: 'buy', coin: 'PEPE', logo: pepeIcon, amount: '$12,500', quantity: '1.2M', price: '$0.00001042', time: '2 hours ago', profit: '+$2,340', profitPercent: '+18.7%', isPositive: true },
  { id: 2, type: 'sell', coin: 'DOGE', logo: dogeIcon, amount: '$8,900', quantity: '50K', price: '$0.178', time: '4 hours ago', profit: '-$450', profitPercent: '-5.1%', isPositive: false },
  { id: 3, type: 'buy', coin: 'SHIBA', logo: shibaIcon, amount: '$15,200', quantity: '500M', price: '$0.0000304', time: '6 hours ago', profit: '+$3,120', profitPercent: '+20.5%', isPositive: true },
  { id: 4, type: 'sell', coin: 'BONK', logo: bonkIcon, amount: '$6,700', quantity: '2.3M', price: '$0.00002913', time: '8 hours ago', profit: '+$1,200', profitPercent: '+17.9%', isPositive: true },
  { id: 5, type: 'buy', coin: 'FLOKI', logo: flokiIcon, amount: '$10,400', quantity: '800K', price: '$0.000130', time: '12 hours ago', profit: '-$890', profitPercent: '-8.6%', isPositive: false },
  { id: 6, type: 'sell', coin: 'PEPE', logo: pepeIcon, amount: '$9,300', quantity: '900K', price: '$0.00001033', time: '1 day ago', profit: '+$1,670', profitPercent: '+18.0%', isPositive: true },
];

export default function WalletAnalytics() {
  const navigate = useNavigate();
  const [selectedWallet, setSelectedWallet] = useState(wallets[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [timeframe, setTimeframe] = useState("1y");
  const pnlData = generatePnLData(selectedWallet.isPositive, timeframe);
  const { toast } = useToast();

  const filteredWallets = wallets.filter(wallet => 
    wallet.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
    wallet.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Contract address copied to clipboard",
    });
  };

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
          <CardContent className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search by name or contract address..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-gray-950 border-gray-800 text-white"
              />
            </div>
            <div className="overflow-x-auto">
              <div className="flex gap-3 pb-2">
                {filteredWallets.map((wallet) => (
                  <button
                    key={wallet.id}
                    onClick={() => setSelectedWallet(wallet)}
                    className={`p-4 rounded-lg border transition-colors flex-shrink-0 bg-gray-950 ${
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
            <div className="flex items-center justify-between flex-wrap gap-4">
              <CardTitle className="flex items-center gap-2 text-white">
                <TrendingUp className="w-5 h-5 text-primary" />
                P&L Performance
              </CardTitle>
              <div className="flex gap-2">
                {['7d', '1m', '3m', '6m', '1y'].map((tf) => (
                  <Button
                    key={tf}
                    variant={timeframe === tf ? "default" : "outline"}
                    size="sm"
                    onClick={() => setTimeframe(tf)}
                    className={timeframe === tf ? "" : "bg-gray-950 border-gray-800 text-gray-400 hover:text-white"}
                  >
                    {tf === '7d' ? '7D' : tf === '1m' ? '1M' : tf === '3m' ? '3M' : tf === '6m' ? '6M' : '1Y'}
                  </Button>
                ))}
              </div>
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
                  <div className="flex items-center gap-3 flex-1">
                    <img src={selectedWallet.bestTrade.logo} alt={selectedWallet.bestTrade.coin} className="w-10 h-10 rounded-full" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="text-sm text-gray-400">Maximum Profit</p>
                        <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/20 text-xs">
                          {selectedWallet.bestTrade.coin}
                        </Badge>
                      </div>
                      <p className="text-2xl font-bold text-green-400 mt-1">{selectedWallet.bestTrade.amount}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <p className="text-xs text-gray-500 font-mono truncate max-w-[200px]">
                          {selectedWallet.bestTrade.ca}
                        </p>
                        <button 
                          onClick={() => copyToClipboard(selectedWallet.bestTrade.ca)}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <Copy className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
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
                  <div className="flex items-center gap-3 flex-1">
                    <img src={selectedWallet.worstTrade.logo} alt={selectedWallet.worstTrade.coin} className="w-10 h-10 rounded-full" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="text-sm text-gray-400">Maximum Loss</p>
                        <Badge variant="outline" className="bg-red-500/10 text-red-400 border-red-500/20 text-xs">
                          {selectedWallet.worstTrade.coin}
                        </Badge>
                      </div>
                      <p className="text-2xl font-bold text-red-400 mt-1">{selectedWallet.worstTrade.amount}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <p className="text-xs text-gray-500 font-mono truncate max-w-[200px]">
                          {selectedWallet.worstTrade.ca}
                        </p>
                        <button 
                          onClick={() => copyToClipboard(selectedWallet.worstTrade.ca)}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <Copy className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
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

        {/* Trades Section */}
        <Card className="bg-black border-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Activity className="w-5 h-5 text-primary" />
              Trades
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {tradesData.map((trade) => (
                <div
                  key={trade.id}
                  className="p-4 rounded-lg border border-gray-800 bg-gray-950 hover:border-gray-700 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <img src={trade.logo} alt={trade.coin} className="w-10 h-10 rounded-full" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <Badge 
                            variant="outline" 
                            className={`${
                              trade.type === 'buy' 
                                ? 'bg-green-500/10 text-green-400 border-green-500/20' 
                                : 'bg-red-500/10 text-red-400 border-red-500/20'
                            }`}
                          >
                            {trade.type === 'buy' ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                            {trade.type.toUpperCase()}
                          </Badge>
                          <span className="text-white font-semibold">{trade.coin}</span>
                        </div>
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                          <span>Amount: <span className="text-white">{trade.amount}</span></span>
                          <span>Qty: <span className="text-white">{trade.quantity}</span></span>
                          <span>Price: <span className="text-white">{trade.price}</span></span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`text-lg font-bold ${trade.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                        {trade.profit}
                      </p>
                      <p className={`text-sm ${trade.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                        {trade.profitPercent}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{trade.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
